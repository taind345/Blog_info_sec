# 🛡️ Ti's InfoSec Knowledge Garden & Pentest Blog

> Trang blog cá nhân chia sẻ kiến thức An toàn thông tin, Web Security, Writeup các phòng Lab (PortSwigger, TryHackMe, HackTheBox), cẩm nang Linux và công cụ Pentest.
> Được đồng bộ tự động từ Obsidian Vault: [taind345/PortSwigger__TryHackMe__Writeup....etc-](https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-)

---

## ✨ Tính năng nổi bật

1. **🔗 Hỗ trợ Backlink & Graph View Obsidian:**
   - Liên kết 2 chiều (Bidirectional Links) dạng `[[Tên bài viết]]` hoặc `[[Tên bài|Bí danh]]`.
   - Bảng **Liên kết ngược (Backlinks)** hiển thị tất cả các trang dẫn về trang hiện tại.
   - **Interactive Graph View**: Biểu đồ mạng liên kết trực quan giữa tất cả các chủ đề.

2. **🎨 Hiển thị toàn diện sơ đồ Excalidraw (Mindmap):**
   - Tự động giải nén và render toàn bộ sơ đồ Excalidraw thành **vector SVG sắc nét** 100%.
   - **Tương tác trực tiếp:** Các nút liên kết (`[[0-XSS]]`, `[[0-SSRF]]`, `[[0-linux]]`...) trong sơ đồ có thể **click để mở trực tiếp bài viết**!
   - Bộ công cụ tương tác: **Phóng to (Zoom In)**, **Thu nhỏ (Zoom Out)**, **Đặt lại (Reset)**, **Toàn màn hình (Fullscreen)** và **Kéo thả chuột để di chuyển (Pan)**.
   - Tự động tương thích hoàn hảo giữa **Chế độ Sáng (Light Mode)** và **Chế độ Tối (Dark Mode)**.

3. **🔄 Đồng bộ 1 chạm từ GitHub:**
   - Tự động kéo các bài viết, writeup, hình ảnh (380+ ảnh chụp màn hình trong `0-asset`) từ GitHub repository.
   - Chuyển đổi và tạo sẵn cấu trúc trang danh mục chuyên nghiệp.

4. **⚡ Tìm kiếm & Điều hướng:**
   - Thanh tìm kiếm tức thì (Full-text Search).
   - Cây thư mục (Explorer) thông minh, Mục lục (Table of Contents) theo từng heading.
   - Hỗ trợ cú pháp Callout (`> [!NOTE]`, `> [!WARNING]`), Code highlight, LaTeX math.

---

## 🚀 Hướng dẫn sử dụng

### 1. Xem trước trên máy cục bộ (Local Preview)
Chạy lệnh sau để khởi động web server thử nghiệm:
```bash
npm run dev
# Hoặc:
npm run serve
```
Truy cập trình duyệt tại: `http://localhost:8080`

### 2. Cập nhật bài viết mới từ GitHub
Khi bạn viết thêm bài mới trên Obsidian và push lên repo GitHub `PortSwigger__TryHackMe__Writeup....etc-`, chỉ cần chạy:
```bash
npm run sync
```
Lệnh này sẽ tự động:
- Kéo các bài viết và sơ đồ mới nhất về.
- Biên dịch lại các file Excalidraw sang SVG có gắn link tương tác.
- Cập nhật chỉ mục bài viết và bản đồ liên kết.

### 3. Đóng gói xuất bản (Build)
```bash
npm run build
```
Kết quả static site sẽ được tạo trong thư mục `public/`.

---

## 🌐 Triển khai lên GitHub Pages (Miễn phí)

Repository đã được cấu hình sẵn file tự động triển khai [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

### Bước 1: Đẩy mã nguồn lên GitHub của bạn
Do repository cục bộ đã được khởi tạo và commit sẵn các bài viết, bạn chỉ cần trỏ remote về repo của mình và đẩy code lên:

```bash
# 1. Trỏ origin về repository của bạn
git remote set-url origin https://github.com/taind345/Blog_info_sec.git

# 2. Đẩy toàn bộ mã nguồn lên branch main
git push -u origin main
```

*(Mẹo: Nếu bạn muốn đẩy thay đổi sau này, chỉ cần chạy `git add . && git commit -m "cập nhật" && git push`)*

### Bước 2: Kích hoạt GitHub Pages
1. Mở trình duyệt vào repository: `https://github.com/taind345/Blog_info_sec`
2. Vào **Settings** -> chọn tab **Pages** ở danh mục bên trái:
   - Tại mục **Build and deployment** > **Source**: Chọn **GitHub Actions**.
3. (Tùy chọn nếu gặp lỗi quyền Actions): Vào **Settings** -> **Actions** -> **General** -> mục **Workflow permissions** -> chọn **Read and write permissions** rồi bấm Save.
4. GitHub Actions sẽ tự động kích hoạt workflow biên dịch và xuất bản website lên:  
   👉 **`https://taind345.github.io/Blog_info_sec/`**

---

## 📁 Cấu trúc thư mục

```text
Blog_info_sec/
├── content/              # Toàn bộ nội dung bài viết, thư mục, sơ đồ và ảnh
│   ├── 0-INDEX.md        # Sơ đồ tư duy tổng quan toàn bộ kiến thức
│   ├── index.md          # Trang chủ chính của blog
│   ├── 0-asset/          # Toàn bộ hình ảnh minh họa (Pasted images)
│   ├── portswigger/      # Writeups PortSwigger Academy (XSS, SQLi, SSRF,...)
│   ├── tryhackme/        # Writeups TryHackMe Labs
│   ├── 1-Linux/          # Cẩm nang và ghi chú Linux
│   ├── Tools/            # Hướng dẫn công cụ Pentest (Burp, ffuf, nmap,...)
│   └── ...
├── scripts/
│   └── sync-vault.mjs    # Bộ xử lý Excalidraw & đồng bộ nội dung tự động
├── quartz/               # Mã nguồn Quartz v5 engine
├── public/               # Thư mục chứa website hoàn chỉnh sau khi build
└── package.json          # Các lệnh điều khiển npm
```
