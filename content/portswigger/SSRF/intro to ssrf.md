---
title: "intro to ssrf"
---

# I)Intro 
## What is SSRF?

**Server-Side Request Forgery (SSRF)** is a vulnerability that allows an attacker to cause the server-side application to make HTTP requests to a destination of the attacker's choosing. In a typical SSRF attack, the attacker manipulates a parameter that the application uses to construct a server-side request, redirecting it to an internal service, a cloud metadata endpoint, or an external server under their control.

SSRF exploits the trust that internal systems place in the application server. Backend services, databases, and cloud infrastructure often accept requests from the server without additional authentication, because they assume any request arriving from a trusted internal IP address is legitimate. An attacker who can control where the server sends its requests effectively inherits that trust.

## Types of SSRF

There are two categories of SSRF vulnerability, and the distinction affects how exploitation is approached.

|Type|Response Visible?|Description|
|---|---|---|
|Regular SSRF|Yes|The response from the back-end request is returned in the application's front-end response. The attacker can directly read the output.|
|Blind SSRF|No|The application makes the back-end request but does not return the response. The attacker must use indirect methods to confirm exploitation.|

With a regular SSRF, if an attacker forces the server to fetch an internal admin page, the contents of that page appear directly in the HTTP response. This provides immediate, readable output.

With a Blind SSRF, the application may display a fixed success message regardless of the back-end outcome. However, blind SSRF can still be exploited. An attacker can confirm the vulnerability by directing the request to a server they control (using a tool such as Burp Collaborator) and observing whether a callback arrives. Differences in response time or error messages between reachable and unreachable hosts can also reveal information about internal infrastructure.

## Impact

The impact of SSRF depends on what internal services are reachable from the application server.

|Impact|Description|
|---|---|
|Access to internal endpoints|Admin panels, configuration interfaces, and monitoring dashboards that are not exposed to the internet become reachable. IP-based access controls are bypassed because the request originates from the server itself.|
|Sensitive data exposure|Backend databases, private APIs, and internal tooling that trust the server's network position may return customer data, organisational records, or application secrets.|
|Internal network reconnaissance|By sending requests to different IP addresses and ports, an attacker can map internal hosts and services using variations in response time, status codes, and error messages.|
|Cloud metadata theft|Cloud providers such as AWS, GCP, and Azure expose instance metadata at `169.254.169.254`. An attacker who reaches this endpoint can retrieve temporary credentials, IAM role details, and instance configuration data.|
|Credential and token leakage|Authentication tokens and secrets passed between internal services can be intercepted, particularly where back-end communication runs over unencrypted HTTP.|

In the following tasks, we will examine how SSRF manifests in different application features, how to identify it, and how to bypass common defences.

> [!NOTE]
> phần này nói về những thứ đã biết

# 2-các dạng thao túng url parameter trong ssrf

![[Pasted image 20260919145554.png]]![[Pasted image 20260919145543.png]]SSRF không phải lúc nào cũng phơi mặt ra thành một cái URL hoàn chỉnh nằm tòng teng trong query parameter đâu. Cách một con app nhét input của người dùng vào request ở phía server muôn hình vạn trạng, và việc bắt bài được mấy cái pattern này là kỹ năng sinh tồn để tìm ra lỗ hổng. Trong phần này, mình sẽ soi 4 vector SSRF phổ biến nhất.

**1. URL hoàn chỉnh trong Parameter (Full URL in a Parameter)**
Đây là form SSRF trực diện và "thô thiển" nhất. Con app ngoan ngoãn nhận nguyên một cái URL hoàn chỉnh từ input và dùng nó để bắn request ở phía server. Mấy cái tính năng như preview link, cấu hình webhook, hay xuất file PDF rất hay xài pattern này.

Thử tưởng tượng một con app có endpoint check hàng tồn kho như vầy:
[https://website.thm/item/2?server=api]

App sẽ bế cái giá trị của tham số `server` rồi đắp vào để tạo thành một request gửi đến [https://server.website.thm/api/item?id=2] Dĩ nhiên, anh em mình (attacker) có thể tráo cái giá trị này để bẻ lái request đi chỗ khác:

| Input | Request thực tế phía Server |
| --- | --- |
| `server=api` | `[https://server.website.thm/api/item?id=2](https://server.website.thm/api/item?id=2)` |
| `server=server.website.thm/flag?id=9&x=` | `[https://server.website.thm/flag?id=9&x=/api/item?id=2](https://server.website.thm/flag?id=9&x=/api/item?id=2)` |

> [!NOTE] sử dụng &x=
> Chú ý cái trường hợp thứ hai, việc nhét thêm `&x=` ở đuôi là một trick cực hay. Nó biến mọi râu ria mà con app tự động nối thêm vào URL trở thành một parameter `x` vô dụng, vô hiệu hóa hoàn toàn cái đuôi phiền phức đó.
![[Pasted image 20260919155013.png]]

**2. URL một nửa - Chỉ có Hostname hoặc Path (Partial URL)**
Nhiều app cẩn thận hơn, chỉ nhận đúng cái hostname hoặc một khúc path, rồi để server tự ghép phần còn lại. Mấy ông dev thường nghĩ làm vậy là thu hẹp được bề mặt tấn công rồi. Cơ mà nằm mơ đi, attacker vẫn có thể tuồn cái hostname do chúng kiểm soát vào.

Ví dụ, với cái request:
[https://website.thm/stock?server=api.internal]
Con app sẽ tự ghép thành [https://api.internal/stock/item]. Nếu cái tham số `server` không được check bằng một allow list (danh sách trắng) đàng hoàng, mình cứ việc tráo nó thành:
[https://website.thm/stock?server=attacker.com]

Thế là con server ngoan ngoãn gọi thẳng về domain của mình. Nếu data trả về được in lên web (reflected), mình có thể bú trọn data nội bộ. Còn nếu là dạng mù (Blind SSRF), ít nhất mình cũng chốt được là app có lỗi vì server của mình có nhận được ping kết nối.


**3. Chèn Path Traversal vào URL**
Khi mày chỉ kiểm soát được mỗi một khúc path, hãy xài tuyệt chiêu "dịch chuyển thư mục" (directory traversal sequences) để nhảy vọt ra khỏi cái endpoint bị nhốt.

Ví dụ, nếu app ghép request kiểu vầy:
[https://website.thm/stock?url=/item/123/details]

Mày phang ngay cục `/../admin` vào, ép con server phải bẻ lái gọi đến:
[https://website.thm/admin]

> [!NOTE]
> Nó y chang cái trick Traversal trong mấy lỗi LFI (File Inclusion) ấy, khác cái là áp dụng cho URL path thay vì đường dẫn thư mục trên ổ cứng thôi.


**4. Lẩn khuất trong Hidden Form Fields**
Không phải lỗ hổng SSRF nào cũng phơi tơ hơ trên thanh URL đâu. Nhiều cái lẩn như chạch trong source HTML của trang và mày phải soi bằng tay (manual inspection) hoặc chặn bắt request qua proxy mới thấy.

Điển hình nhất là tính năng đổi avatar, đường dẫn ảnh bị giấu trong một trường input ẩn:
`<input type="hidden" name="avatar" value="/images/avatars/default.png">`

Nếu server dại dột bốc tài nguyên từ bất cứ đường dẫn nào cái trường này báo về, mày có thể sửa lại giá trị (dùng Developer Tools của trình duyệt hoặc xài tool proxy như Burp Suite) để trỏ thẳng vào mạng nội bộ. Đó là lý do tại sao pentester có tâm phải soi kỹ từng cái form ẩn, request API, và bất kỳ parameter nào chui vào server.


# 3-dấu hiệu nhận biết ssrf
Identifying SSRF during an engagement requires **knowing where applications accept input that influences server-side requests.** In this task, we will cover the most common indicators and how to confirm the vulnerability when the response is not directly visible.

## Common Indicators

The following patterns are strong signals that an application may be vulnerable to SSRF.

**Full URL in a parameter.** When a complete URL appears as a query parameter in the address bar, the application is almost certainly using it to make a server-side request:

![Full URL in a parameter](https://cdn-images.tryhackme.com/user-uploads/5efe36fb68daf465530ca761/room-content/956e1914b116cbc9e564e3bb3d9ab50a.png)

**Hidden form fields.** These are not visible on the rendered page. Inspecting the page source or intercepting requests with a proxy reveals fields whose values control server-side resource fetching:

![Hidden field in a form](https://cdn-images.tryhackme.com/user-uploads/5efe36fb68daf465530ca761/room-content/237696fc8e405d25d4fc7bbcc67919f0.png)

**Partial URL (hostname only).** The application accepts a hostname and constructs the full URL on the server side:

![Partial URL with hostname](https://cdn-images.tryhackme.com/user-uploads/5efe36fb68daf465530ca761/room-content/f3c387849e91a4f15a7b59ff7324be75.png)

**Path only.** Only the path portion of the URL is user-controlled. The application prepends the scheme and hostname:

![Path only in a parameter](https://cdn-images.tryhackme.com/user-uploads/5efe36fb68daf465530ca761/room-content/3fd583950617f7a3713a107fcb4cfa49.png)

Beyond these four patterns, the following application features frequently contain SSRF vectors:

| Feature               | Why It's Relevant                                                                |
| --------------------- | -------------------------------------------------------------------------------- |
| Webhook configuration | The application makes a request to a user-supplied URL to verify the endpoint.   |
| PDF/report generation | The server fetches content from a supplied URL to render it into a document.     |
| URL preview/unfurling | The application retrieves metadata (title, thumbnail) from a user-provided link. |
| File import by URL    | The server downloads a file from a remote location specified by the user.        |
| Integration settings  | Third-party service URLs are stored and queried by the server.                   |

Some of these cases are easier to exploit than others. A full URL in a query parameter is straightforward to test, while a partial path segment may require considerable trial and error to produce a working payload. The important step is recognising the pattern first, then experimenting with different inputs.

## Confirming Blind SSRF

When the server makes the request but does not reflect the response, you need an alternative method to confirm the vulnerability.

|Method|How It Works|
|---|---|
|External HTTP logger (e.g. requestbin.com)|Supply the logger's URL as the SSRF payload. Check the dashboard for incoming requests from the target server.|
|Burp Collaborator|Generates a unique domain that logs HTTP and DNS callbacks. Useful when HTTP is blocked but DNS resolution still occurs.|
|Self-hosted listener (`python3 -m http.server`)|Run a simple HTTP server on your own machine and monitor for incoming connections from the target.|
|Timing analysis|Compare response times for requests to internal hosts that exist versus hosts that do not. Consistent differences indicate the server is resolving and connecting to the supplied address.|
|Error-based inference|Different error messages for reachable versus unreachable hosts reveal information about the internal network, even when the actual response body is hidden.|

These techniques are covered in more depth in later rooms. For now, confirming that the server is making outbound requests based on your input is sufficient to establish the vulnerability.

> [!NOTE]
> ->đây là dạng blind, mình cần có 1 domain , hoặc burpcolapborator để xem liệu server có request về cái url mình đưa vào input hay ko
> ->





