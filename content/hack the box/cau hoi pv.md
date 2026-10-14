---
title: "cau hoi pv"
---

- hỏi cách pentest trang login?
- hỏi về pentest với ftp?


Tôi đã bám trực tiếp vào các nội dung bạn ghi trong CV, đặc biệt là kinh nghiệm Web Pentester Intern, OWASP Top 10, Burp Suite/ZAP, CTF, Digital Forensics, Web/API, source-code reading, networking và Linux.

Dưới đây là bộ câu hỏi nên ôn theo thứ tự. Vì trong CV bạn ghi khá nhiều kỹ thuật, interviewer có khả năng hỏi sâu vào bất kỳ keyword nào bạn đã claim.

## 1. Giới thiệu bản thân — gần như chắc chắn

1. Hãy giới thiệu bản thân trong 1–2 phút.
    
2. Tại sao bạn học Information Security?
    
3. Tại sao bạn chọn Web Security/Pentest?
    
4. Tại sao bạn muốn vào VinSOC?
    
5. Mục tiêu nghề nghiệp 1–3 năm tới của bạn là gì?
    
6. Điểm mạnh của bạn trong Security là gì?
    
7. Điểm yếu của bạn là gì?
    
8. Bạn đã làm những gì thực tế ngoài việc học?
    
9. Trong CV, dự án/kinh nghiệm nào bạn tự tin nhất?
    
10. Bạn nghĩ một Web Pentester cần những kiến thức gì?
    

CV của bạn xác định trọng tâm là Web Security và Digital Forensics, đồng thời mục tiêu là thực tập Cybersecurity tại VinSOC.

## 2. Kinh nghiệm Web Pentester Intern — nhóm quan trọng nhất

Bạn ghi đã làm Web Pentester Intern và trực tiếp kiểm tra Authentication, Session Management, Access Control, OWASP Top 10, Web/API, Nmap và viết report.

11. Công việc hằng ngày của bạn khi làm Web Pentester Intern là gì?
    
12. Một quy trình pentest Web của bạn từ đầu đến cuối?
    
13. Khi nhận một target mới, bạn làm gì đầu tiên?
    
14. Recon trong Web Pentest gồm những gì?
    
15. Bạn dùng Burp Suite như thế nào trong một bài pentest thực tế?
    
16. Proxy, Repeater, Intruder, Decoder, Comparer dùng để làm gì?
    
17. Khi thấy một request đáng ngờ, bạn phân tích như thế nào?
    
18. Bạn phân biệt vulnerability với security issue như thế nào?
    
19. Bạn xác minh một finding như thế nào để tránh false positive?
    
20. Sau khi phát hiện vulnerability, bạn làm gì tiếp theo?
    
21. Khi pentest API, bạn kiểm tra những gì?
    
22. REST API khác Web application truyền thống ở đâu?
    
23. GET/POST/PUT/PATCH/DELETE khác nhau thế nào?
    
24. Authentication và Authorization khác nhau thế nào?
    
25. Session được quản lý như thế nào?
    
26. Session fixation là gì?
    
27. Session hijacking là gì?
    
28. Bạn kiểm tra logout functionality như thế nào?
    
29. Bạn kiểm tra password reset như thế nào?
    
30. Bạn kiểm tra Access Control như thế nào?
    
31. Bạn xử lý thế nào khi phát hiện IDOR?
    
32. Business Logic flaw là gì?
    
33. Một Business Logic vulnerability khác SQLi như thế nào?
    
34. Làm thế nào để phân biệt lỗi do frontend validation và backend validation?
    
35. Khi developer nói “đây chỉ là client-side issue”, bạn đánh giá thế nào?
    
36. Bạn đánh giá mức độ nghiêm trọng của vulnerability dựa trên gì?
    
37. Một report pentest tốt cần những phần nào?
    
38. Bạn viết remediation như thế nào để developer có thể sửa được?
    
39. Bạn đã từng gặp trường hợp developer phản biện finding chưa?
    
40. Làm thế nào để chứng minh impact của vulnerability?
    

## 3. SQL Injection

CV ghi rõ SQL Injection là một trong các vulnerability bạn hiểu và từng khai thác trong CTF/lab.

41. SQL Injection là gì?
    
42. Vì sao SQL Injection xảy ra?
    
43. Union-based SQLi là gì?
    
44. Error-based SQLi là gì?
    
45. Boolean-based Blind SQLi là gì?
    
46. Time-based Blind SQLi là gì?
    
47. Authentication bypass bằng SQLi hoạt động thế nào?
    
48. Làm sao phát hiện một parameter có khả năng SQLi?
    
49. Khi application không trả error, bạn test SQLi thế nào?
    
50. Prepared Statement giải quyết SQLi như thế nào?
    
51. ORM có loại bỏ hoàn toàn SQLi không?
    
52. SQLmap hoạt động ở mức khái quát như thế nào?
    
53. Khi nào bạn không nên dùng SQLmap?
    

## 4. XSS

54. XSS là gì?
    
55. Reflected XSS, Stored XSS và DOM XSS khác nhau thế nào?
    
56. XSS xảy ra do Source và Sink như thế nào?
    
57. `innerHTML` nguy hiểm ở điểm nào?
    
58. `textContent` khác `innerHTML` thế nào?
    
59. Event handler XSS là gì?
    
60. Vì sao HTML encoding có thể ngăn XSS?
    
61. JavaScript escaping và HTML escaping khác nhau thế nào?
    
62. CSP là gì?
    
63. CSP có ngăn XSS tuyệt đối không?
    
64. Khi gặp CSP, bạn tìm bypass như thế nào?
    
65. DOM XSS khác Reflected XSS ở đâu?
    
66. jQuery `attr()` có thể trở thành DOM XSS sink như thế nào?
    

Bạn đã ghi XSS và DOM-related concepts trong quá trình học Web Security Academy, nên đây là nhóm rất dễ bị đào sâu.

## 5. SSRF / SSTI / XXE / CSRF

CV ghi bạn đã hoàn thành hơn 70% Web Security Academy và bao gồm SSRF, SSTI, XXE, CSRF, File Upload...

67. SSRF là gì?
    
68. SSRF khác CSRF như thế nào?
    
69. Blind SSRF là gì?
    
70. SSRF có thể truy cập những hệ thống nào?
    
71. Vì sao `127.0.0.1` hoặc localhost có ý nghĩa trong SSRF?
    
72. SSRF có thể dẫn đến metadata service compromise như thế nào?
    
73. SSRF URL parser bypass là gì?
    
74. SSTI là gì?
    
75. SSTI khác XSS như thế nào?
    
76. Làm sao xác định template engine đang được sử dụng?
    
77. Jinja2 là gì?
    
78. Vì sao SSTI có thể dẫn tới RCE?
    
79. XXE là gì?
    
80. XML External Entity hoạt động thế nào?
    
81. XXE có thể dẫn tới đọc file như thế nào?
    
82. Blind XXE là gì?
    
83. CSRF là gì?
    
84. CSRF khác XSS như thế nào?
    
85. CSRF Token hoạt động thế nào?
    
86. `SameSite Cookie` giúp giảm CSRF thế nào?
    

## 6. Authentication / Access Control / File Upload

87. Broken Access Control là gì?
    
88. Vertical Privilege Escalation là gì?
    
89. Horizontal Privilege Escalation là gì?
    
90. Bạn test authorization của một API như thế nào?
    
91. Làm sao phát hiện IDOR?
    
92. IDOR và Broken Access Control có quan hệ thế nào?
    
93. Authentication Bypass là gì?
    
94. Những lỗi nào thường dẫn tới Authentication Bypass?
    
95. Password reset vulnerability thường xuất hiện ở đâu?
    
96. MFA bypass có những dạng nào?
    
97. File Upload vulnerability là gì?
    
98. Chỉ kiểm tra extension của file có đủ an toàn không?
    
99. MIME type validation có thể bypass không?
    
100. Upload PHP file có thể dẫn tới RCE như thế nào?
    
101. Làm sao secure một chức năng File Upload?
    
102. Security Misconfiguration là gì?
    
103. Cho ví dụ về Security Misconfiguration trong Web application.
    

## 7. API Pentest

CV ghi rõ bạn sử dụng Burp Suite, OWASP ZAP, Postman và đánh giá RESTful API.

104. API Pentest khác Web Pentest ở điểm nào?
    
105. Bạn kiểm tra authentication của API như thế nào?
    
106. JWT là gì?
    
107. JWT gồm những phần nào?
    
108. Có thể sửa JWT payload trực tiếp không?
    
109. JWT `alg:none` là gì?
    
110. JWT signature dùng để làm gì?
    
111. BOLA/IDOR trong API là gì?
    
112. Mass Assignment là gì?
    
113. API Rate Limiting là gì?
    
114. Bạn test rate limit như thế nào?
    
115. API có thể bị SQL Injection không?
    
116. API có thể bị SSRF không?
    
117. Bạn dùng Postman ở giai đoạn nào?
    
118. Khi nào dùng Burp thay vì Postman?
    

## 8. Burp Suite / ZAP

119. Burp Proxy dùng làm gì?
    
120. Repeater dùng để làm gì?
    
121. Intruder dùng để làm gì?
    
122. Scanner của Burp có hạn chế gì?
    
123. Bạn intercept HTTPS traffic bằng Burp như thế nào?
    
124. Burp CA Certificate có tác dụng gì?
    
125. Scope trong Burp dùng để làm gì?
    
126. HTTP history có ý nghĩa gì?
    
127. Làm sao thay đổi một request và resend?
    
128. OWASP ZAP khác Burp Suite ở điểm nào?
    
129. Trong thực tế bạn sẽ chọn Burp hay ZAP dựa trên yếu tố nào?
    

## 9. Nmap / Recon

CV ghi Nmap và các công cụ reconnaissance như Dirsearch, Gobuster, Ffuf, Nessus.

130. Nmap là gì?
    
131. TCP SYN Scan hoạt động thế nào?
    
132. `-sS`, `-sT`, `-sU` khác nhau thế nào?
    
133. `-sV` dùng để làm gì?
    
134. `-O` dùng để làm gì?
    
135. `-Pn` có ý nghĩa gì?
    
136. `-p-` dùng để làm gì?
    
137. Làm sao scan một subnet?
    
138. Dirsearch/Gobuster/Ffuf dùng để làm gì?
    
139. Directory fuzzing là gì?
    
140. Ffuf khác Gobuster ở đâu?
    
141. Nessus dùng trong giai đoạn nào của pentest?
    
142. Nmap có phải vulnerability scanner không?
    

## 10. Networking — rất dễ bị hỏi vì CV claim “solid knowledge”

CV ghi TCP/IP, HTTP/HTTPS, DNS, SSL/TLS và Web architecture.

143. TCP/IP model gồm những layer nào?
    
144. TCP và UDP khác nhau thế nào?
    
145. TCP 3-way handshake là gì?
    
146. HTTPS hoạt động thế nào?
    
147. TLS handshake diễn ra như thế nào?
    
148. HTTP và HTTPS khác nhau ở đâu?
    
149. HTTP request gồm những thành phần nào?
    
150. HTTP response gồm những thành phần nào?
    
151. Cookie là gì?
    
152. Session và Cookie khác nhau thế nào?
    
153. DNS hoạt động thế nào?
    
154. DNS record `A`, `AAAA`, `CNAME`, `MX`, `TXT` là gì?
    
155. HTTP status code 200, 301, 302, 400, 401, 403, 404, 500 khác nhau thế nào?
    
156. `401` và `403` khác nhau thế nào?
    
157. HTTP Header quan trọng nào thường được kiểm tra khi pentest?
    
158. CORS là gì?
    
159. Same-Origin Policy là gì?
    
160. Reverse Proxy là gì?
    
161. Load Balancer nằm ở đâu trong Web architecture?
    
162. Web server và application server khác nhau thế nào?
    

## 11. Linux

CV ghi sử dụng Kali Linux, Ubuntu và Linux/Windows trong pentest.

163. Linux process là gì?
    
164. `ps`, `top`, `grep`, `awk`, `sed` dùng để làm gì?
    
165. `chmod 755` nghĩa là gì?
    
166. Permission `rwx` hoạt động thế nào?
    
167. `/etc/passwd` và `/etc/shadow` khác nhau thế nào?
    
168. Linux environment variable là gì?
    
169. Pipe `|` hoạt động thế nào?
    
170. Redirect `>`, `>>`, `<` khác nhau thế nào?
    
171. `curl` dùng để làm gì?
    
172. `wget` dùng để làm gì?
    
173. SSH hoạt động thế nào?
    
174. Làm sao kiểm tra port đang listen trên Linux?
    
175. Làm sao xem network interface/IP?
    
176. Process và thread khác nhau thế nào?
    

## 12. Digital Forensics

Bạn ghi Digital Forensics khá rõ trong CTF: file analysis, log analysis, network traffic analysis và sử dụng Wireshark.

177. Digital Forensics là gì?
    
178. Quy trình điều tra forensic cơ bản gồm những bước nào?
    
179. Evidence là gì?
    
180. Vì sao phải bảo toàn evidence?
    
181. Hash MD5/SHA256 dùng làm gì trong forensic?
    
182. File carving là gì?
    
183. Metadata của file có thể cung cấp thông tin gì?
    
184. Log analysis là gì?
    
185. Các loại log nào thường hữu ích khi điều tra incident?
    
186. Wireshark dùng để làm gì?
    
187. Làm sao lọc HTTP traffic trong Wireshark?
    
188. Làm sao tìm một IP đáng ngờ?
    
189. TCP stream là gì?
    
190. PCAP là gì?
    
191. Làm sao phát hiện dấu hiệu C2 trong network traffic?
    
192. Làm sao phân biệt traffic bình thường và traffic đáng ngờ?
    
193. Chain of Custody là gì?
    
194. Volatility dùng để làm gì?
    
195. Disk Forensics và Network Forensics khác nhau thế nào?
    

## 13. CTF

CV ghi bạn vào Final PTIT CTF với trọng tâm Web Security và Digital Forensics.

196. PTIT CTF bạn tham gia như thế nào?
    
197. Team Blue_whale phân công công việc ra sao?
    
198. Challenge Web khó nhất bạn từng giải là gì?
    
199. Bạn đã exploit SQLi/XSS/SSTI như thế nào trong CTF?
    
200. Challenge nào bạn không giải được? Vì sao?
    
201. Khi bị stuck trong một challenge, bạn xử lý như thế nào?
    
202. Bạn thường bắt đầu một Web challenge từ đâu?
    
203. Bạn sử dụng Burp trong CTF như thế nào?
    
204. Bạn học được gì từ CTF mà áp dụng được cho pentest thực tế?
    
205. CTF khác pentest thực tế ở đâu?
    

## 14. Source Code Review

CV ghi đọc PHP, Python, JavaScript ở mức cơ bản để hỗ trợ pentest.

206. Khi review PHP code, bạn tìm những lỗi gì?
    
207. Bạn phát hiện SQLi từ source code như thế nào?
    
208. Bạn phát hiện XSS từ source code như thế nào?
    
209. Source → Sink trong vulnerability analysis là gì?
    
210. Bạn tìm command injection trong code như thế nào?
    
211. Bạn tìm file inclusion trong code như thế nào?
    
212. Bạn tìm insecure deserialization trong code như thế nào?
    
213. Client-side JavaScript có thể giúp pentester phát hiện vulnerability gì?
    
214. Khi đọc code của một API, bạn tìm endpoint và authorization logic như thế nào?
    

## 15. Programming

CV ghi JavaScript, Python, PHP, SQL.

215. Python khác JavaScript ở điểm nào?
    
216. PHP được sử dụng thế nào trong Web?
    
217. SQL JOIN là gì?
    
218. `INNER JOIN` và `LEFT JOIN` khác nhau thế nào?
    
219. Primary Key và Foreign Key là gì?
    
220. `UNION` trong SQL dùng để làm gì?
    
221. HTTP request có thể được gửi bằng Python như thế nào?
    
222. Python có thể hỗ trợ pentest những việc gì?
    
223. Bạn đã từng viết automation script chưa?
    
224. Vì sao pentester nên biết programming?
    

## 16. Project PHP vulnerable website

Bạn ghi rõ đã tự xây dựng PHP website chứa File Upload, Insecure Design, Security Misconfiguration để phục vụ học tập. Đây là điểm rất dễ bị interviewer đào sâu.

225. Tại sao bạn xây dựng vulnerable website?
    
226. Architecture của website đó như thế nào?
    
227. Database sử dụng gì?
    
228. Bạn cố tình tạo vulnerability bằng cách nào?
    
229. File Upload vulnerability được implement ra sao?
    
230. Insecure Design trong project nằm ở đâu?
    
231. Security Misconfiguration nằm ở đâu?
    
232. Bạn đã viết phần secure version chưa?
    
233. Nếu được làm lại project, bạn thay đổi gì?
    
234. Project này giúp bạn hiểu pentest tốt hơn như thế nào?
    

## 17. Technical Blog

CV ghi blog chuyên về Information Security, Web Security và CTF write-up.

235. Tại sao bạn viết blog?
    
236. Bài technical nào bạn tự tin nhất?
    
237. Bạn thường nghiên cứu một vulnerability như thế nào trước khi viết?
    
238. Bạn kiểm chứng PoC như thế nào?
    
239. Bạn phân biệt write-up CTF và technical research thế nào?
    
240. Bạn đã từng viết về vulnerability nào từ đầu đến cuối?
    

## 18. Câu hỏi tình huống Pentest

Đây là nhóm nên luyện nhiều nhất vì interviewer thường chuyển từ lý thuyết sang tình huống.

241. Bạn được cấp một domain, không có source code. Bạn bắt đầu thế nào?
    
242. Bạn phát hiện login endpoint. Bạn sẽ test gì?
    
243. User A đọc được dữ liệu User B. Bạn xác định vulnerability thế nào?
    
244. API trả về thông tin nhạy cảm. Bạn đánh giá impact ra sao?
    
245. Bạn thấy một parameter nhận URL. Bạn nghi ngờ SSRF. Bạn làm gì?
    
246. Upload `.php` bị chặn. Bạn tiếp tục kiểm tra gì?
    
247. XSS payload không execute. Bạn debug thế nào?
    
248. Application trả HTTP 403. Bạn xử lý thế nào để xác định nguyên nhân?
    
249. WAF đang chặn request. Bạn làm gì?
    
250. Scanner báo SQLi nhưng manual test không reproduce được. Bạn xử lý thế nào?
    
251. Bạn phát hiện vulnerability nhưng không khai thác tới RCE. Có report không?
    
252. Một vulnerability có khả năng ảnh hưởng 10.000 user nhưng exploit khó. Bạn đánh giá thế nào?
    
253. Trong khi pentest, bạn phát hiện dữ liệu khách hàng thật. Bạn làm gì?
    
254. Target bị downtime sau một request test của bạn. Bạn xử lý thế nào?
    

## 19. Câu hỏi “đánh vào CV”

Đây là các câu bạn đặc biệt phải chuẩn bị vì interviewer có thể dùng để kiểm tra xem nội dung CV có phải do bạn thực sự làm hay chỉ học lý thuyết.

255. Trong CV bạn ghi “Understanding of exploitation techniques”. Hãy chọn một vulnerability và giải thích từ nguyên nhân → exploit → impact → remediation.
    
256. Bạn ghi “Business Logic flaws”. Hãy đưa ra một ví dụ cụ thể.
    
257. Bạn ghi “solid knowledge of HTTP/HTTPS”. Hãy giải thích HTTPS handshake.
    
258. Bạn ghi “proficient in Linux”. Hãy thực hiện một task Linux cơ bản ngay trên máy.
    
259. Bạn ghi “API penetration testing”. Hãy mô tả một API pentest methodology.
    
260. Bạn ghi “Digital Forensics”. Hãy mô tả một incident investigation từ PCAP.
    
261. Bạn ghi “basic source code reading”. Hãy chỉ ra một SQLi từ đoạn PHP code.
    
262. Bạn ghi “70%+ Web Security Academy”. Lab nào khó nhất?
    
263. Vì sao bạn chưa hoàn thành 100%?
    
264. Trong tất cả vulnerability bạn học, vulnerability nào bạn hiểu sâu nhất?
    
265. Vulnerability nào bạn yếu nhất?
    

## 20. HR / Behavioral

266. Tại sao chúng tôi nên chọn bạn?
    
267. Bạn mong muốn học được gì khi vào team?
    
268. Bạn làm việc nhóm như thế nào?
    
269. Khi bất đồng với teammate, bạn xử lý ra sao?
    
270. Khi được giao task chưa biết làm, bạn làm gì?
    
271. Bạn quản lý thời gian học và làm thế nào?
    
272. Bạn phản ứng thế nào khi bị review hoặc bị sửa report?
    
273. Bạn thích Offensive Security hay Defensive Security hơn? Vì sao?
    
274. Bạn định hướng Web Pentest lâu dài hay muốn chuyển sang Red Team?
    
275. Môi trường làm việc bạn mong muốn là gì?
    

## 21. 20 câu phải thuộc trước khi đi phỏng vấn

Nếu thời gian ôn ít, tập trung trước vào:

`Pentest methodology` → `HTTP/HTTPS` → `Authentication vs Authorization` → `Session` → `IDOR` → `Broken Access Control` → `SQLi` → `XSS` → `SSRF` → `SSTI` → `XXE` → `CSRF` → `File Upload` → `Business Logic` → `Burp Suite` → `API Pentest` → `Nmap` → `Linux` → `Wireshark/Forensics` → `Report & Remediation`.

Đặc biệt, với CV này tôi sẽ chuẩn bị cho bạn theo công thức:

`CV keyword → câu hỏi lý thuyết → câu hỏi đào sâu → tình huống thực tế → cách trả lời như interviewer mong đợi → lab thực hành`.

Đây là cách phù hợp nhất vì CV của bạn có khá nhiều keyword kỹ thuật; chỉ cần interviewer chọn ngẫu nhiên một keyword như SSRF, IDOR, SSTI hoặc Burp Suite là có thể chuyển ngay sang câu hỏi thực hành.

Bước ôn tiếp theo nên là **“100 câu hỏi Web Pentest + đáp án mẫu theo đúng CV của bạn”**, bắt đầu từ câu dễ rồi tăng dần tới câu hỏi tình huống/interview thực chiến.