---
title: "interview"
---

Tôi đã đọc CV. Dưới đây là phần review theo đúng những gì CV đang thể hiện, sau đó là tree keyword và bộ câu hỏi phỏng vấn có khả năng bị đào sâu từ từng dòng trong CV. 

**1. Review CV**

Điểm mạnh lớn nhất của CV là định hướng khá rõ về Web/API Pentest. CV có sự liên kết giữa học tập → Mobile Pentest Intern → CTF → PortSwigger → project → skill. Đặc biệt, phần kinh nghiệm thực tập có những keyword rất dễ khiến interviewer đào sâu: AndroidManifest, exported components, Burp, API, XSS/SQLi/SSRF, reporting. 

Điểm mạnh thứ hai là CV có bằng chứng thực hành tương đối tốt: PTIT CTF finalist, PortSwigger Academy, TryHackMe, picoCTF và project PHP cố tình chứa vulnerability. Điều này giúp CV không bị thuần lý thuyết. 

Điểm cần lưu ý nhất là CV đang **claim khá rộng**. Chỉ riêng phần Web & API đã ghi SQLi, XSS, SSRF, SSTI, XXE, CSRF, IDOR, Auth Bypass, BAC, File Upload, Business Logic và source-code reading. Interviewer hoàn toàn có thể chọn ngẫu nhiên một mục để hỏi đến mức exploit flow, nguyên nhân và remediation. 

Ngoài ra, phần tool cũng khá rộng: Burp, Postman, Nmap, Dirsearch, Gobuster, Ffuf, SQLmap, Nikto, Wireshark, Metasploit. Nếu đã ghi vào CV thì nên hiểu **vai trò của từng tool, input/output, khi nào dùng, và giới hạn của nó**, chứ không chỉ biết chạy command. 

Một điểm interviewer rất dễ hỏi là **“Em thực sự làm gì ở công ty?”**. Kinh nghiệm Mobile Pentester đang mô tả workflow ở mức khái quát, nên họ có thể bắt bạn kể một case cụ thể từ reconnaissance → interception → vulnerability → exploitation → impact → remediation. 

**2. Tree keyword cần ôn từ CV**

```text
CV → Web/API + Mobile Pentest + CTF + Linux/Network
│
├── 1. WEB SECURITY
│   │
│   ├── HTTP/HTTPS
│   │   ├── Request / Response
│   │   ├── Header
│   │   ├── Cookie
│   │   ├── Session
│   │   ├── Authentication
│   │   ├── Authorization
│   │   └── Same-Origin Policy
│   │
│   ├── SQL Injection
│   │   ├── Error-based
│   │   ├── Union-based
│   │   ├── Blind
│   │   │   ├── Boolean
│   │   │   └── Time-based
│   │   ├── Authentication bypass
│   │   ├── Data extraction
│   │   └── Remediation
│   │
│   ├── XSS
│   │   ├── Reflected
│   │   ├── Stored
│   │   ├── DOM XSS
│   │   ├── Source
│   │   ├── Sink
│   │   ├── Cookie / Session impact
│   │   ├── CSP
│   │   └── Remediation
│   │
│   ├── SSRF
│   │   ├── Server-side request
│   │   ├── Internal network
│   │   ├── localhost
│   │   ├── Cloud metadata
│   │   ├── Blind SSRF
│   │   └── SSRF bypass
│   │
│   ├── SSTI
│   │   ├── Template engine
│   │   ├── Detection
│   │   ├── Context identification
│   │   ├── RCE
│   │   └── Remediation
│   │
│   ├── XXE
│   │   ├── XML parser
│   │   ├── External Entity
│   │   ├── File disclosure
│   │   ├── SSRF
│   │   └── Blind XXE
│   │
│   ├── CSRF
│   │   ├── State-changing request
│   │   ├── CSRF token
│   │   ├── SameSite cookie
│   │   └── Origin / Referer
│   │
│   ├── IDOR
│   │   ├── Object ID
│   │   ├── Horizontal privilege escalation
│   │   ├── Vertical privilege escalation
│   │   └── Authorization testing
│   │
│   ├── Broken Access Control
│   │   ├── Authentication vs Authorization
│   │   ├── Horizontal escalation
│   │   ├── Vertical escalation
│   │   └── Privilege boundary
│   │
│   ├── Authentication
│   │   ├── Login
│   │   ├── Password reset
│   │   ├── MFA
│   │   ├── Session management
│   │   ├── JWT
│   │   └── Auth bypass
│   │
│   ├── File Upload
│   │   ├── Extension validation
│   │   ├── MIME validation
│   │   ├── Content validation
│   │   ├── Path traversal
│   │   └── Web shell / RCE
│   │
│   └── Business Logic
│       ├── Workflow abuse
│       ├── Race condition
│       ├── Parameter tampering
│       ├── Price manipulation
│       └── Authorization logic
│
├── 2. API SECURITY
│   ├── REST API
│   ├── JSON
│   ├── HTTP Methods
│   ├── Authentication
│   ├── Authorization
│   ├── IDOR / BOLA
│   ├── Mass Assignment
│   ├── Rate Limiting
│   ├── Input Validation
│   ├── API Versioning
│   └── Business Logic
│
├── 3. MOBILE SECURITY
│   │
│   ├── Android Architecture
│   ├── APK
│   ├── AndroidManifest.xml
│   ├── Activities
│   ├── Services
│   ├── Broadcast Receivers
│   ├── Content Providers
│   ├── exported=true
│   ├── Permissions
│   ├── Deep Link
│   ├── Intent
│   ├── WebView
│   ├── Network Security Config
│   ├── TLS / Certificate
│   ├── Burp Proxy
│   └── Mobile → Backend API
│
├── 4. TOOLS
│   ├── Burp Suite
│   │   ├── Proxy
│   │   ├── Repeater
│   │   ├── Intruder
│   │   ├── Decoder
│   │   └── Extensions
│   │
│   ├── Postman
│   │   ├── Request
│   │   ├── Environment
│   │   └── API testing
│   │
│   ├── Nmap
│   │   ├── Port scanning
│   │   ├── Service detection
│   │   ├── Version detection
│   │   └── NSE
│   │
│   ├── Ffuf
│   ├── Dirsearch
│   ├── Gobuster
│   ├── SQLmap
│   ├── Nikto
│   ├── Wireshark
│   └── Metasploit
│
├── 5. NETWORK
│   ├── TCP/IP
│   ├── TCP vs UDP
│   ├── DNS
│   ├── HTTP/HTTPS
│   ├── TLS
│   ├── TCP 3-way handshake
│   ├── Proxy
│   ├── NAT
│   └── Network architecture
│
├── 6. LINUX / WINDOWS
│   ├── Linux commands
│   ├── Permissions
│   ├── Processes
│   ├── Networking
│   ├── Services
│   ├── Logs
│   ├── Kali Linux
│   └── Ubuntu
│
├── 7. SOURCE CODE
│   ├── PHP
│   │   ├── Input
│   │   ├── SQL query
│   │   ├── File upload
│   │   └── Authentication
│   ├── Python
│   ├── JavaScript
│   │   ├── DOM
│   │   ├── fetch()
│   │   └── Source / Sink
│   └── SQL
│
├── 8. CTF
│   ├── Recon
│   ├── Enumeration
│   ├── Exploitation
│   ├── SQLi
│   ├── XSS
│   ├── SSTI
│   ├── Auth Bypass
│   ├── Deserialization
│   └── Burp / Ffuf / SQLmap / Nikto
│
└── 9. REPORTING
    ├── Finding
    ├── Description
    ├── Affected endpoint
    ├── Steps to reproduce
    ├── PoC
    ├── Impact
    ├── Severity
    ├── Root cause
    └── Remediation
```

**3. Câu hỏi phỏng vấn có khả năng gặp**

**A. Câu hỏi tổng quát từ CV**

```text
1. Giới thiệu bản thân và quá trình học Information Security?
2. Vì sao em chọn Pentest?
3. Vì sao em chọn Web/API Pentest?
4. Em đã làm gì thực tế ở G-Innovations?
5. Một ngày làm việc của em ở vị trí Mobile Pentester Intern như thế nào?
6. Em đã phát hiện vulnerability nào thực tế?
7. Hãy kể một vulnerability mà em tự tìm được từ đầu đến cuối.
8. Trong các vulnerability em ghi trong CV, em tự tin nhất về vulnerability nào?
9. Em đánh giá severity của vulnerability như thế nào?
10. Khi gặp một ứng dụng mới, em bắt đầu pentest từ đâu?
```

**B. Mobile Pentest**

```text
1. Android application được cấu tạo như thế nào?
2. AndroidManifest.xml dùng để làm gì?
3. exported=true có ý nghĩa gì?
4. Khi một Activity bị exported thì rủi ro là gì?
5. Activity / Service / Broadcast Receiver / Content Provider khác nhau thế nào?
6. Intent là gì?
7. Explicit Intent và Implicit Intent?
8. Deep Link là gì?
9. Permission trong Android hoạt động như thế nào?
10. Em dùng Burp để intercept traffic của Android app như thế nào?
11. HTTPS interception trên mobile khác browser như thế nào?
12. Certificate pinning là gì?
13. Nếu app sử dụng certificate pinning thì em xử lý thế nào?
14. Làm sao xác định mobile app đang gọi API nào?
15. Khi nhìn một API request, em kiểm tra những gì?
16. Android app → API backend → database thường flow như thế nào?
17. Trong internship em đã dùng kiến thức Web Security để test mobile backend như thế nào?
```

Phần này có xác suất cao vì CV ghi rất cụ thể về AndroidManifest, exported components, permissions và Burp. 

**C. Web Security**

```text
SQLi
1. SQL Injection là gì?
2. Làm sao xác định một parameter bị SQLi?
3. Error-based, Union-based và Blind SQLi khác nhau thế nào?
4. Boolean-based SQLi hoạt động thế nào?
5. SQLi có thể dẫn tới RCE không?
6. SQLmap hoạt động ở mức nào?
7. Khi nào không nên dùng SQLmap?

XSS
8. Reflected / Stored / DOM XSS khác nhau thế nào?
9. Source và Sink là gì?
10. Cho một ví dụ DOM XSS.
11. XSS có thể đánh cắp cookie không?
12. HttpOnly ảnh hưởng thế nào?
13. CSP là gì?
14. XSS bypass CSP như thế nào?

SSRF
15. SSRF là gì?
16. SSRF khác CSRF như thế nào?
17. SSRF có thể dùng để tấn công internal service không?
18. Blind SSRF là gì?
19. Làm sao bypass SSRF filter?

SSTI
20. SSTI là gì?
21. Làm sao nhận biết template engine?
22. SSTI khác XSS như thế nào?
23. SSTI có thể dẫn tới RCE không?

XXE
24. XXE là gì?
25. External Entity hoạt động thế nào?
26. XXE có thể gây SSRF không?
27. Blind XXE là gì?

Access Control
28. IDOR là gì?
29. IDOR và Broken Access Control khác nhau thế nào?
30. Horizontal vs Vertical Privilege Escalation?
31. Test authorization API như thế nào?

Authentication
32. Authentication và Authorization khác nhau thế nào?
33. Các lỗi thường gặp trong password reset?
34. Session fixation là gì?
35. JWT có thể bị attack như thế nào?
36. Authentication bypass thường xuất hiện ở đâu?

File Upload
37. Một file upload feature an toàn cần kiểm tra gì?
38. Đổi extension `.php` thành `.jpg` có đủ để bypass không?
39. MIME type có đáng tin không?
40. File upload dẫn tới RCE như thế nào?

Business Logic
41. Business Logic flaw là gì?
42. Làm sao tìm business logic bug?
43. Tại sao scanner khó phát hiện business logic vulnerability?
```

Những chủ đề trên đều xuất phát trực tiếp từ nhóm vulnerability mà CV của bạn đang claim.   

**D. Câu hỏi về Burp / Pentest methodology**

```text
1. Proxy trong Burp dùng để làm gì?
2. Repeater khác Intruder thế nào?
3. Khi nào dùng Intruder?
4. HTTP request gồm những thành phần nào?
5. Cookie / Authorization header dùng để làm gì?
6. Khi test một API endpoint, em kiểm tra những parameter nào?
7. Em làm reconnaissance trước hay exploitation trước?
8. Enumeration khác scanning như thế nào?
9. Sau khi phát hiện endpoint `/api/user/123`, em sẽ test gì?
10. Làm sao kiểm tra IDOR?
11. Làm sao kiểm tra authentication bypass?
12. Làm sao test rate limiting?
13. Khi scanner không tìm thấy vulnerability nhưng manual test thấy thì tại sao?
```

**E. Câu hỏi về tool**

```text
Nmap
1. Nmap dùng để làm gì?
2. SYN scan là gì?
3. -sV, -sC, -Pn có ý nghĩa gì?
4. Khi nào dùng UDP scan?

Ffuf / Gobuster / Dirsearch
5. Ba tool này khác nhau thế nào?
6. Khi nào dùng directory fuzzing?
7. Extension fuzzing là gì?
8. Virtual host enumeration là gì?

SQLmap
9. SQLmap phát hiện SQLi như thế nào?
10. Các trường hợp SQLmap có thể fail?
11. Khi nào manual exploitation tốt hơn SQLmap?

Nikto
12. Nikto kiểm tra những gì?
13. Nikto khác Nmap như thế nào?

Wireshark
14. Khi phân tích HTTP traffic, em nhìn những field nào?
15. TCP handshake thể hiện ở đâu?

Metasploit
16. Module trong Metasploit gồm những loại nào?
17. Exploit và payload khác nhau thế nào?
```

**F. Networking / Linux**

CV của bạn ghi khá rõ TCP/IP, HTTP/HTTPS, DNS, SSL/TLS và Linux nên đây là nhóm câu hỏi cơ bản gần như chắc chắn có thể xuất hiện. 

```text
1. TCP và UDP khác nhau thế nào?
2. TCP 3-way handshake?
3. DNS resolution hoạt động thế nào?
4. HTTP và HTTPS khác nhau thế nào?
5. TLS handshake diễn ra như thế nào?
6. HTTP status code 200 / 301 / 302 / 400 / 401 / 403 / 404 / 500?
7. Cookie được gửi như thế nào?
8. Reverse proxy là gì?
9. NAT là gì?
10. Linux permission 755 / 644?
11. Process và thread khác nhau thế nào?
12. Những command Linux em dùng thường xuyên?
13. curl dùng như thế nào để test API?
14. ss / netstat dùng làm gì?
```

**G. Câu hỏi CTF**

CV ghi rõ bạn đã exploit SQLi, XSS, SSTI, Authentication Bypass và Deserialization, vì vậy interviewer có thể không hỏi lý thuyết mà chuyển thẳng sang tình huống. 

```text
1. Khi nhận một Web CTF challenge, em làm gì đầu tiên?
2. Em enumerate endpoint bằng cách nào?
3. Khi gặp login page, em kiểm tra gì?
4. Khi thấy parameter `id=123`, em nghĩ tới gì?
5. Khi phát hiện SSTI, làm sao xác định template engine?
6. Nếu payload XSS không execute, em debug thế nào?
7. Nếu ffuf tìm được `/admin`, bước tiếp theo?
8. Nếu SQLmap không detect SQLi, em làm gì?
9. Deserialization vulnerability là gì?
10. Một challenge em đã giải khó nhất là gì? Vì sao?
```

**H. Câu hỏi từ project**

CV có PHP vulnerable website, Python projects và technical blog. Đây là nhóm rất dễ bị hỏi “em tự làm hay dùng AI / tutorial?”. 

```text
1. Tại sao em tự xây vulnerable PHP website?
2. Em cố tình tạo vulnerability nào?
3. Vulnerability đó nằm ở đoạn code nào?
4. Nếu sửa vulnerability đó thì sửa thế nào?
5. Trong project Python, phần nào do em tự implement?
6. Deepfake Detector hoạt động theo nguyên lý nào?
7. Vì sao em chọn Python cho project?
8. Blog của em viết những nội dung gì?
9. Bài write-up nào em thấy giá trị nhất?
10. Em có thể mở blog và giải thích một bài bất kỳ không?
```

**4. Những câu “đào sâu” nguy hiểm nhất đối với CV này**

Tôi sẽ ưu tiên luyện 15 câu này trước vì interviewer chỉ cần chọn vài câu là có thể phân biệt rất nhanh giữa “đã thực sự làm” và “biết keyword”:

```text
1. Hãy mô tả một vulnerability em đã tìm thấy ở công ty từ đầu đến cuối.

2. Nếu em nhận một Web/API target hoàn toàn mới, methodology của em là gì?

3. IDOR là gì? Em sẽ test IDOR trên REST API như thế nào?

4. Authentication và Authorization khác nhau thế nào?

5. Reflected XSS, Stored XSS và DOM XSS khác nhau thế nào?

6. Source và Sink trong DOM XSS là gì?

7. SSRF có thể dẫn tới cloud metadata access như thế nào?

8. Một file upload endpoint an toàn cần validate những gì?

9. AndroidManifest.xml giúp pentester tìm vulnerability như thế nào?

10. exported Activity nguy hiểm ở trường hợp nào?

11. Em intercept HTTPS traffic của Android app bằng Burp như thế nào?

12. Certificate Pinning là gì và vì sao nó gây khó khăn cho pentest?

13. Nmap, Ffuf, Dirsearch và Gobuster khác nhau thế nào?

14. Scanner báo không có vulnerability nhưng manual testing tìm thấy. Tại sao?

15. Hãy giải thích một finding trong format:
    Vulnerability
    → Root Cause
    → Exploitation
    → Impact
    → Severity
    → Remediation
```

**5. Nhận xét quan trọng về CV**

CV hiện tại phù hợp nhất với vị trí **Web/API Pentest Intern / Junior Pentest**, đồng thời có thể leverage kinh nghiệm Mobile Pentest để tạo điểm khác biệt. Phần Web/API đang mạnh hơn phần Mobile trong cách CV trình bày. 

Vấn đề không phải CV thiếu keyword; ngược lại, **keyword đang khá nhiều**. Rủi ro lớn nhất là interviewer chọn một keyword bất kỳ và đào xuống 3–5 lớp. Vì vậy chiến lược ôn phỏng vấn không nên là học thêm thật nhiều tool, mà là biến từng keyword trên CV thành:

`Definition → How it works → Detection → Exploitation → Impact → Mitigation → Real example`

Đó là cấu trúc bạn nên dùng để chuẩn bị cho **từng keyword xuất hiện trên CV**.
