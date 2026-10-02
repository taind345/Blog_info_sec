---
title: "tra loi pv chi tiet P2"
---

# Trả lời PV chi tiết P2 - Auth/Access/Upload + API + Burp + Nmap + Network + Linux (câu 87-176)

## 6. Auth/Access/Upload (87-103)
### 87. Broken Access Control?
Mẫu: Không check quyền khi truy object/chức năng.
VD chi tiết: `GET /admin/users` với account thường vẫn 200 hiện list user. Hoặc `GET /api/order/1001` của mình đổi `1002` thấy đơn người khác. Root cause code chỉ check login `if(session!=null)` mà quên `if(role!=admin) deny`.

### 90. Test author API?
Mẫu: Dùng 2 token A/B chéo nhau mọi endpoint/method.
VD chi tiết: Login 2 user, lấy `Bearer A` và `Bearer B`. Repeater `GET /api/me` với token A trả email A, đổi ID `GET /api/users/B_id` với token A vẫn 200 trả email B -> BOLA. Thử tiếp `PUT/DELETE` vì hay chỉ chặn GET.

### 93. Auth Bypass?
Mẫu: Vào được không cần cred đúng.
VD chi tiết: 3 cách hay gặp: (1) SQLi `admin'-- -`, (2) force browse `GET /dashboard` không check session vẫn 200, (3) JWT đổi `alg:none` xóa signature vẫn qua. Demo bằng Repeater bỏ cookie vẫn vào.

### 95. Reset hay lỗi đâu?
Mẫu: Token đoán được, không expire, leak Referer, Host poisoning.
VD chi tiết: Bấm quên pass, link `https://shop/reset?token=123456` 6 số đoán được, brute 000000-999999 bằng Intruder. Hoặc request reset với `Host: evil.com` thì link gửi về mail là `https://evil.com/reset?token=abc`, nạn nhân click là mất token. Token còn dùng lại được sau khi đổi pass -> không invalidate.

### 97. File Upload?
Mẫu: Upload file độc rồi gọi URL thực thi.
VD chi tiết: Form avatar chỉ check tên chứa `.jpg`. Upload `shell.php.jpg` nội dung `<?php system($_GET['cmd']);?>` + `Content-Type: image/jpeg`. Server lưu `/uploads/shell.php.jpg` nhưng Apache vẫn chạy php vì double ext, gọi `/uploads/shell.php.jpg?cmd=id` trả `uid=33`.

### 101. Secure Upload?
Mẫu: Whitelist + check content + random name + ngoài webroot + no exec.
VD chi tiết: Chỉ cho `jpg/png`, đọc magic `FF D8 FF`, đổi tên `uuid.jpg`, lưu `/data/uploads` không map trực tiếp web, Nginx `location /uploads {disable php}`, resize ảnh lại để phá webshell ẩn.

## 7. API (104-118)
### 106-109. JWT?
Mẫu: Token 3 phần Header.Payload.Signature base64.
VD chi tiết: `eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJyb2xlIjoidXNlciJ9.xxx`. Copy lên jwt.io thấy payload. Đổi payload `role=user` thành `admin`, nếu server dùng `alg:none` thì xóa phần 3 gửi `header.payload.` vẫn 200 vào admin. Signature để đảm bảo không ai sửa, server dùng secret ký lại để verify.

### 112. Mass Assignment?
Mẫu: Gửi thêm field ẩn server tự bind vào object.
VD chi tiết: API đăng ký `POST /api/register {"name":"a","email":"a@a.com"}`. Thử thêm `"role":"admin","is_admin":true,"balance":9999`. Server dùng `User(**json)` gán hết, tạo luôn admin. Fix whitelist field `pick(name,email)`.

### 114. Test rate?
Mẫu: Gửi 20 req nhanh xem 429 không, đổi IP bypass.
VD chi tiết: Intruder null payload 30 lần `POST /login` trong 10s, nếu vẫn 200 không 429 là lỗi. Thử thêm `X-Forwarded-For: 1.1.1.<1-30>` xoay IP, nếu qua được là reset counter theo IP sai.

## 8. Burp (119-129)
### 120-121. Repeater vs Intruder?
Mẫu: Repeater sửa tay từng cái, Intruder auto nhiều payload.
VD chi tiết: Thấy `GET /user/123`, Send to Repeater đổi 124,125 tay để chứng minh IDOR. Khi cần brute 1000 ID thì Send to Intruder, set `§123§` Cluster bomb với list 1000-2000, xem length nào khác là lọt data.

### 123. Intercept HTTPS?
Mẫu: Cài Burp CA + proxy 8080.
VD chi tiết: Mở `http://burp/cert` tải `cacert.der` import vào Firefox Authorities, bật Proxy `127.0.0.1:8080`, bật Intercept, vào `https://shop` thấy được plain `POST /login user=...` để sửa.

## 9. Nmap (130-142)
### 131. SYN Scan?
Mẫu: Gửi SYN không full handshake nên nhanh kín.
VD chi tiết: `nmap -sS 192.168.1.10`. Nmap gửi SYN port 80, nhận SYN/ACK là open rồi gửi RST ngắt, không hoàn thành ACK nên web log không ghi full connect. Port close thì nhận RST.

### 138. Dirsearch/ffuf?
Mẫu: Đoán dir/file ẩn bằng wordlist.
VD chi tiết: `ffuf -u https://shop/FUZZ -w /usr/share/seclists/common.txt -mc 200,403 -e .bak,.old`. Tìm ra `/admin.bak`, `/.git/HEAD`, `/api/v1`. Gobuster tương tự nhưng ffuf fuzz được cả param `?id=FUZZ` và header.

## 10-11. Network + Linux (143-176)
### 145. 3-way handshake?
Mẫu: SYN -> SYN/ACK -> ACK.
VD chi tiết: Wireshark lọc `tcp.port==443` thấy client SYN seq=0, server SYN/ACK seq=0 ack=1, client ACK, sau đó mới ClientHello TLS. SYN flood là gửi SYN không ACK làm đầy backlog.

### 147. TLS handshake?
Mẫu: Hello + cert + đổi key + mã hóa.
VD chi tiết: ClientHello báo TLS1.2 + cipher, ServerHello + cert `*.shop.vn` + public key, client check CA, sinh pre-master mã hóa bằng public key gửi, 2 bên ra session key, Finished rồi HTTP mã hóa. Burp chặn được vì nạn nhân cài CA của Burp nên Burp tự ký cert giả.

### 156. 401 vs 403?
Mẫu: 401 chưa login, 403 login rồi không quyền.
VD chi tiết: `GET /api/me` không token -> 401 `Missing token`. `GET /admin` với token user thường -> 403 `Forbidden`. Test IDOR thấy 403 khác 401 là biết endpoint tồn tại nhưng thiếu quyền.

### 165. chmod 755?
Mẫu: owner rwx 7, group/other r-x 5.
VD chi tiết: `ls -l script.sh -rw-r--r--` 644 không chạy, `chmod +x` thành 755 `rwxr-xr-x` mới `./script.sh` được. Webshell upload cần x mới chạy, fix folder upload để 644 no exec.

### 171. curl?
Mẫu: Gửi HTTP/API từ terminal.
VD chi tiết: `curl -X POST https://shop/api/login -H "Content-Type: json" -d '{"user":"admin","pass":"123"}' -i` xem status/header. Thêm `-k` bỏ qua cert khi test Burp, `-v` debug TLS.
