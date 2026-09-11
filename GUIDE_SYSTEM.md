# 📖 HƯỚNG DẪN VẬN HÀNH & KIẾN TRÚC HỆ THỐNG BLOG (PRIVATE MANUAL)

> Tài liệu hướng dẫn nội bộ chi tiết về toàn bộ luồng dữ liệu, cơ chế kỹ thuật, cấu hình tự động hóa và cách vận hành hệ thống **Security Blog**.

---

## 🏗️ 1. Kiến trúc Tổng thể (System Architecture)

Hệ thống hoạt động theo mô hình **GitOps & Static Site Generation (SSG)** tách biệt giữa kho ghi chú và kho blog:

```mermaid
flowchart LR
    A["Obsidian Vault Gốc\n(taind345/PortSwigger...)"] -->|"Git Push"| B["GitHub Source Repo"]
    B -->|"Auto-Sync / Cron 6h"| C["Script Chuyển Đổi\n(scripts/sync-vault.mjs)"]
    C -->|"Generate Markdown + SVG"| D["Thư mục content/\n(Blog_info_sec)"]
    D -->|"Quartz v5 Engine"| E["Static HTML/CSS/JS\n(public/)"]
    E -->|"GitHub Actions"| F["GitHub Pages CDN\n(taind345.github.io/Blog_info_sec)"]
```

### Các thành phần chính:
1. **Repo gốc (Source Vault)**: `https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-`  
   Nơi bạn viết bài, chèn ảnh và vẽ sơ đồ trên ứng dụng Obsidian hàng ngày.
2. **Repo website (Blog Info Sec)**: `https://github.com/taind345/Blog_info_sec`  
   Mã nguồn Quartz v5 đã được tùy biến toàn diện (giao diện Notion, font Cascadia Code, font Excalidraw tiếng Việt, engine pan/zoom tăng tốc phần cứng).
3. **Môi trường Hosting**: **GitHub Pages** (Miễn phí, băng thông toàn cầu, SSL tự động, uptime 99.9%).

---

## ⚙️ 2. Cơ chế Xử lý Sơ đồ Excalidraw (`scripts/sync-vault.mjs`)

Đây là linh hồn của hệ thống, giải quyết các bài toán hóc búa của Excalidraw trên web:

1. **Giải nén dữ liệu nén**:  
   File Excalidraw của Obsidian chứa JSON nén qua `lz-string` ẩn trong comment ```` ```json:compressed-json ... ``` ````. Script tự động phát hiện, trích xuất và giải mã JSON.
2. **Khắc phục lỗi font Tiếng Việt có dấu (`DFVN-excalidraw`)**:  
   - Font gốc Virgil của Excalidraw thiếu ký tự tiếng Việt dẫn đến tình trạng đứt chữ hoặc font hệ thống nhảy lung tung.
   - Script biên dịch text SVG với `font-family: 'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive`.
   - Toàn bộ font WOFF2 nhẹ (~72KB) được nạp offline từ `quartz/static/fonts/DFVN-Excalifont.woff2`.
3. **Tương tác liên kết (Interactive Clickable Links)**:  
   Mỗi node chứa link dạng `[[0-XSS]]` hoặc URL `https://...` được bọc riêng biệt trong thẻ `<a class="excalidraw-node-link">` trỏ thẳng tới bài viết tương ứng mà không làm hỏng cấu trúc SVG.
4. **Nhúng hình ảnh chụp màn hình (Embedded Screenshots)**:  
   Đọc bảng `## Embedded Files` trong file Excalidraw, map `fileId` sang đường dẫn thực tế trong `0-asset/` và nhúng trực tiếp bằng thẻ `<image href="...">`.
5. **Thẻ Markdown nhúng (`<!-- excalidraw-markdown-image:fileId -->`)**:  
   Tự động biên dịch markdown thành thẻ HTML `<foreignObject>` hiển thị dạng card Notion trên canvas, đồng thời chèn nội dung đầy đủ xuống chân trang bài viết.
6. **Deterministic Hashing (MD5)**:  
   ID của từng sơ đồ được tạo từ `ex-` + `md5(đường dẫn file)`. Nhờ vậy, khi nội dung không đổi, ID giữ nguyên 100%, không sinh ra commit rác trong Git.

---

## 🚀 3. Tối ưu Hiệu năng Canvas (`excalidraw.inline.ts`)

- **Tăng tốc phần cứng 3D (GPU)**: Áp dụng `translate3d(x, y, 0) scale(...)` kết hợp `requestAnimationFrame`, đảm bảo tốc độ phản hồi 60/120fps.
- **Kéo thả không giật lag (`.is-panning`)**: Khi bắt đầu kéo sơ đồ, toàn bộ `pointer-events` trên các node con tạm thời bị vô hiệu hóa, loại bỏ hoàn toàn hiện tượng khựng do trình duyệt phải hit-test hàng trăm phần tử SVG.
- **Thu phóng mượt (Exponential Zoom)**: Sử dụng hàm số mũ `scale * Math.exp(delta * 0.0018)` giúp thao tác lăn chuột và pinch trên trackpad mượt mà tự nhiên như Figma.
- **Tự động căn giữa (Auto-fit)**: Tự động tính toán kích thước khung nhìn và sơ đồ để căn giữa vừa vặn khi trang vừa tải xong hoặc khi nhấn nút reset `↺`.

---

## 🔄 4. Quy trình Cập nhật & Đồng bộ Hàng ngày

### Cách 1: Chạy 1 lệnh từ máy tính (Khuyên dùng khi ngồi máy)
Mỗi khi bạn vừa viết xong bài mới trên Obsidian và muốn đẩy lên web ngay:
```bash
npm run auto-sync
```
Script sẽ tự động kéo repo gốc về -> chuyển đổi -> phát hiện bài mới -> commit -> push lên GitHub.

### Cách 2: Tự động 100% trên Cloud (Không cần mở máy tính)
- **Tự động mỗi 6 tiếng**: GitHub Actions chạy ngầm định kỳ vào lúc `00:00`, `06:00`, `12:00`, `18:00` UTC để kiểm tra và cập nhật bài viết mới từ repo gốc.
- **Bấm nút cập nhật thủ công trên điện thoại**:
  1. Vào link: [GitHub Actions Workflow](https://github.com/taind345/Blog_info_sec/actions/workflows/deploy.yml)
  2. Bấm nút **Run workflow** -> Chọn branch `main` -> Bấm nút xanh **Run workflow**.

---

## 🛠️ 5. Các Lệnh Điều Khiển Thường Dùng (Cheatsheet)

| Lệnh | Ý nghĩa | Khi nào dùng |
|---|---|---|
| `npm run auto-sync` | Đồng bộ trọn gói từ repo gốc -> commit -> push | Thường dùng nhất để cập nhật bài mới |
| `npm run dev` hoặc `npm run serve` | Chạy web server thử nghiệm tại `http://localhost:8080` | Khi muốn xem trước giao diện trên máy |
| `npm run build` | Đồng bộ và biên dịch static files ra thư mục `public/` | Kiểm tra lỗi build mã nguồn |
| `npm run sync` | Chỉ kéo repo gốc và chuyển đổi Excalidraw sang `content/` | Khi chỉ muốn cập nhật nội dung markdown |

---

## 💡 6. Quy tắc viết bài trên Obsidian để tương thích hoàn hảo

1. **Liên kết bài viết**: Dùng cú pháp chuẩn `[[Tên file]]` hoặc `[[Tên file|Tên hiển thị]]`.
2. **Hình ảnh**: Lưu hình ảnh vào thư mục `0-asset/` (mặc định của vault), khi chèn ảnh dùng cú pháp `![[Pasted image ...png]]`.
3. **Sơ đồ Excalidraw**:
   - Để tạo link trong sơ đồ, nhấp đúp vào phần tử chữ và gõ `[[Tên bài viết]]` hoặc dán link web trực tiếp.
   - Viết tiếng Việt thoải mái, font `DFVN-excalidraw` hỗ trợ 100% tất cả các dấu thanh tiếng Việt.

---

## ❓ 7. Xử lý sự cố (Troubleshooting)

- **Trình duyệt vẫn hiển thị font hoặc tiêu đề cũ?**  
  Do trình duyệt lưu cache trang web. Hãy nhấn `Ctrl + F5` (Windows/Linux) hoặc `Cmd + Shift + R` (Mac) để buộc trình duyệt tải lại tài nguyên mới nhất.
- **Báo lỗi port 8080 đã được sử dụng khi chạy `npm run dev`?**  
  Chạy lệnh tắt tiến trình đang chiếm port:
  ```bash
  fuser -k 8080/tcp || kill -9 $(lsof -t -i:8080)
  ```
- **Repo gốc đổi tên hoặc đổi đường dẫn?**  
  Mở file [scripts/sync-vault.mjs](scripts/sync-vault.mjs), tìm biến `REPO_URL` ở dòng 20 và cập nhật lại URL mới.
