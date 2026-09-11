<div align="center">

# 🛡️ Security Blog

**Một góc chia sẻ kiến thức An toàn thông tin, Web Security, Writeup các phòng Lab (PortSwigger, TryHackMe), cẩm nang Linux & công cụ Pentest.**

[![Live Website](https://img.shields.io/badge/🌐_Website-taind345.github.io%2FBlog__info__sec-2383e2?style=for-the-badge&logo=google-chrome&logoColor=white)](https://taind345.github.io/Blog_info_sec/)
[![Deploy Status](https://img.shields.io/badge/🚀_Deploy-GitHub_Pages-success?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/taind345/Blog_info_sec/actions/workflows/deploy.yml)
[![Theme](https://img.shields.io/badge/🎨_Theme-Notion_Minimal-000000?style=for-the-badge&logo=notion&logoColor=white)](https://taind345.github.io/Blog_info_sec/)
[![Obsidian](https://img.shields.io/badge/📓_Obsidian-Vault_Sync-7C3AED?style=for-the-badge&logo=obsidian&logoColor=white)](https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-)

---

### 👉 [BẤM VÀO ĐÂY ĐỂ TRUY CẬP TRANG BLOG TRỰC TUYẾN](https://taind345.github.io/Blog_info_sec/) 👈

</div>

---

## 🌟 Giới thiệu

Đây là trang blog kiến thức An toàn thông tin cá nhân được xây dựng trên nền tảng **Quartz v5**, thiết kế theo phong cách tối giản chuẩn **Notion** và được đồng bộ tự động từ kho ghi chú Obsidian:  
👉 **[taind345/PortSwigger__TryHackMe__Writeup....etc-](https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-)**

---

## 🗺️ Bản đồ Nội dung (Content Map)

Toàn bộ bài viết và ghi chú được tổ chức khoa học theo từng chủ đề an toàn thông tin:

- 🎯 **[PortSwigger Web Security Academy](https://taind345.github.io/Blog_info_sec/portswigger/server-side-vulnerabilities/0-server-side)**:
  - SQL Injection (Error-based, Blind, Union-based, Cheatsheet)
  - Cross-Site Scripting (Reflected, Stored, DOM-based XSS)
  - Server-Side Request Forgery (SSRF, Whitelist bypass, Cloud metadata)
  - Cross-Origin Resource Sharing (CORS Misconfigurations)
  - Authentication Vulnerabilities, File Upload & Command Injection
- 🚩 **[TryHackMe & HackTheBox Labs](https://taind345.github.io/Blog_info_sec/tryhackme/0-try-hackme)**:
  - Writeup chi tiết các phòng thực hành Pentest, Active Directory (BadSuccessor), CVE Analysis (n8n CVE-2025-68613).
  - Reverse Shell, Privilege Escalation, Reconnaissance & Enumeration.
- 🐧 **[Linux & Infrastructure](https://taind345.github.io/Blog_info_sec/1-linux/0-linux)**:
  - Các lệnh Linux quan trọng, cấu hình dịch vụ mạng, Docker Pentest note.
- 🧰 **[Tools & Pentest Methodology](https://taind345.github.io/Blog_info_sec/tools/0-tool)**:
  - Burp Suite thực chiến, Ffuf fuzzing tips, SQLMap workflow & Nmap scripts.
- 🧠 **[Kiến thức nền tảng & Ghi chép cốt lõi](https://taind345.github.io/Blog_info_sec/4-kiến-thức-bên-lề/0-tổng-hợp)**:
  - Cookie, Session Management, JWT Token, Same-Origin Policy (SOP), MFA Bypass, Internal Network Architectures.

---

## 💎 Điểm nổi bật về Kỹ thuật

1. **🎨 Sơ đồ tư duy Excalidraw tương tác trực tiếp:**
   - Hỗ trợ đầy đủ hơn 80+ sơ đồ tư duy Excalidraw được biên dịch thành định dạng **vector SVG sắc nét 100%**.
   - **Clickable Nodes**: Mọi nút liên kết (`[[Tên bài viết]]`) trong sơ đồ đều có thể nhấp trực tiếp để chuyển trang.
   - **Full Tiếng Việt có dấu**: Tích hợp bộ font viết tay **`DFVN-excalidraw`** chuẩn nét, không lỗi font.
   - **Tương tác siêu mượt**: Tăng tốc phần cứng GPU 3D, thu phóng thông minh (Exponential Zoom), kéo thả không giật lag và hỗ trợ cảm ứng đa điểm (Touch / Pinch-to-zoom).
2. **🔗 Liên kết mạng 2 chiều (Obsidian Backlinks & Graph View):**
   - Hỗ trợ liên kết chéo hai chiều chuẩn Obsidian (`[[WikiLink]]`).
   - Đồ thị liên kết tương tác (Interactive Graph View) trực quan giữa các khái niệm bảo mật.
3. **⚡ Thiết kế Notion Minimalist:**
   - Bộ font lập trình viên chuẩn **Cascadia Code** tối ưu khả năng đọc code và writeup kỹ thuật.
   - Hỗ trợ chế độ Sáng/Tối (Light/Dark Mode) mượt mà.
4. **🔄 Cơ chế Auto-Sync 24/7:**
   - Tự động đồng bộ từ kho Obsidian Vault thông qua **GitHub Actions** chạy định kỳ mỗi 6 tiếng.
   - Trang web tĩnh được phục vụ toàn cầu bởi **GitHub Pages** với độ trễ gần như bằng 0.

---

## 💻 Hướng dẫn sử dụng cục bộ (Local Development)

Nếu bạn muốn chạy thử nghiệm trên máy tính cá nhân:

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy máy chủ thử nghiệm (Local Preview)
npm run dev

# 3. Đồng bộ dữ liệu mới nhất từ repo gốc và cập nhật blog (1 lệnh duy nhất)
npm run auto-sync
```

Trang web thử nghiệm sẽ chạy tại: `http://localhost:8080`

---

## 📚 Tài liệu Quản trị & Vận hành

Chi tiết về kiến trúc hệ thống, quy tắc biên dịch Excalidraw và xử lý sự cố được lưu trữ tại file:  
👉 **[GUIDE_SYSTEM.md](GUIDE_SYSTEM.md)**

---

<div align="center">
  <sub>Xây dựng với ❤️ bởi <b>ti</b> &bull; Được lưu trữ miễn phí 24/7 trên GitHub Pages</sub>
</div>
