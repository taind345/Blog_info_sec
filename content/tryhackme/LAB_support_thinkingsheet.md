---
title: "LAB_support_thinkingsheet"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-73abc24c">
  <div class="excalidraw-toolbar">
    <div class="excalidraw-badge">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
      <span>Excalidraw Mindmap</span>
    </div>
    <div class="excalidraw-controls">
      <button type="button" class="excalidraw-btn zoom-in" title="Phóng to">🔍+</button>
      <button type="button" class="excalidraw-btn zoom-out" title="Thu nhỏ">🔍-</button>
      <button type="button" class="excalidraw-btn zoom-reset" title="Vừa màn hình">↺</button>
      <button type="button" class="excalidraw-btn fullscreen" title="Toàn màn hình">⛶</button>
    </div>
  </div>
  <div class="excalidraw-viewport">
    <div class="excalidraw-canvas-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1747 15658" class="excalidraw-svg" data-width="1747" data-height="15658">
<g transform="translate(-162.80,29.87)">

<rect x="218.63550797957708" y="1837.6093487742805" width="800" height="6180" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="218.63550797957708" y="1837.6093487742805" width="800" height="6180" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Báo Cáo Reconnaissance - Support Operations Panel</span>
      </div>
      <a href="#doc-b0d24878bbc041158694fa7665a307be07826852" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <h1>Báo Cáo Reconnaissance - Support Operations Panel</h1>
<p><strong>Mục tiêu:</strong> <code>http://10.48.187.204/</code><br><strong>Thời gian thực hiện:</strong> 29/08/2026<br><strong>Thư mục làm việc:</strong> <code>/home/ti/SEUCURITY_LABLAB/THM/support_lab</code>  </p>
<hr>
<h2>1. Tổng Quan Mục Tiêu (Target Overview)</h2>
<table>
<thead>
<tr>
<th align="left">Thông tin</th>
<th align="left">Chi tiết</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>IP Address</strong></td>
<td align="left"><code>10.48.187.204</code></td>
</tr>
<tr>
<td align="left"><strong>Operating System</strong></td>
<td align="left">Linux (Ubuntu)</td>
</tr>
<tr>
<td align="left"><strong>Web Server</strong></td>
<td align="left">Apache/2.4.58 (Ubuntu)</td>
</tr>
<tr>
<td align="left"><strong>Backend Technology</strong></td>
<td align="left">PHP 8.3.6</td>
</tr>
<tr>
<td align="left"><strong>Corporate Domain</strong></td>
<td align="left"><code>support.thm</code> (Contact: <code>help@support.thm</code>)</td>
</tr>
<tr>
<td align="left"><strong>Network Latency</strong></td>
<td align="left">~187 ms - 209 ms</td>
</tr>
</tbody></table>
<hr>
<h2>2. Kết Quả Quét Cổng (Port Scanning &amp; Service Enumeration)</h2>
<p>Tiến hành quét toàn bộ 65,535 cổng TCP trên mục tiêu bằng <code>nmap</code>:</p>
<h3>Danh Sách Dịch Vụ Mở (Open Ports):</h3>
<table>
<thead>
<tr>
<th align="left">Port</th>
<th align="left">State</th>
<th align="left">Service</th>
<th align="left">Version / Details</th>
</tr>
</thead>
<tbody><tr>
<td align="left"><strong>22/tcp</strong></td>
<td align="left"><code>OPEN</code></td>
<td align="left">SSH</td>
<td align="left">OpenSSH 9.6p1 Ubuntu 3ubuntu13.11<br>• ECDSA key: <code>b4:23:fa:e0:89:50:58:14:b5:f0:f3:01:81:ef:a5:3b</code><br>• ED25519 key: <code>fd:62:7d:e5:54:e7:5c:05:6b:72:e5:94:28:d1:5e:1b</code></td>
</tr>
<tr>
<td align="left"><strong>80/tcp</strong></td>
<td align="left"><code>OPEN</code></td>
<td align="left">HTTP</td>
<td align="left">Apache httpd 2.4.58 ((Ubuntu))<br>• Title: <code>Support Operations Panel</code><br>• Cookie: <code>PHPSESSID</code> (httponly: not set)</td>
</tr>
</tbody></table>
<p><em>Tất cả các cổng khác (65,533 ports) ở trạng thái closed hoặc filtered.</em></p>
<hr>
<h2>3. Chi Tiết Quá Trình Recon &amp; Các Câu Lệnh Đã Sử Dụng (Detailed Methodology &amp; Commands)</h2>
<p>Quá trình thu thập thông tin được thực hiện theo 8 bước chiến lược sau:</p>
<h3>Bước 1: Kiểm Tra Kết Nối Mạng (Network Connectivity Check)</h3>
<p>Thực hiện kiểm tra ICMP ping để xác định mục tiêu đang hoạt động và đo độ trễ mạng.</p>
<p><strong>Câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash">ping -c 2 10.48.187.204
</code></pre>
<p><strong>Kết quả:</strong></p>
<ul>
<li>Host phản hồi tốt (<code>64 bytes from 10.48.187.204: icmp_seq=1 ttl=62 time=187 ms</code>)</li>
<li>Packet loss: 0%, RTT trung bình ~197ms.</li>
</ul>
<hr>
<h3>Bước 2: Quét Dịch Vụ Cổng Ban Đầu (Initial Service Discovery Scan)</h3>
<p>Thực hiện quét Nmap kiểm tra các script mặc định (<code>-sC</code>) và xác định phiên bản dịch vụ (<code>-sV</code>) trên các cổng tiêu chuẩn.</p>
<p><strong>Câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash">nmap -sC -sV -oN nmap_initial.txt 10.48.187.204
</code></pre>
<p><strong>Kết quả thu được:</strong></p>
<ul>
<li><strong>Port 22/tcp</strong>: OpenSSH 9.6p1 Ubuntu 3ubuntu13.11.</li>
<li><strong>Port 80/tcp</strong>: Apache httpd 2.4.58 (Ubuntu), HTML Title: &quot;Support Operations Panel&quot;, set cookie <code>PHPSESSID</code>.</li>
</ul>
<hr>
<h3>Bước 3: Quét Toàn Bộ Cổng TCP (Full Port Scan)</h3>
<p>Quét toàn bộ dải cổng TCP từ 1 đến 65535 nhằm đảm bảo không bỏ sót bất kỳ dịch vụ ẩn nào (quản trị, database, proxy, custom ports).</p>
<p><strong>Câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash">nmap -p- -T4 --min-rate 1000 -oN nmap_allports.txt 10.48.187.204
</code></pre>
<p><strong>Kết quả:</strong></p>
<ul>
<li>Xác nhận chỉ có duy nhất 2 cổng mở trên toàn hệ thống: <strong>Port 22 (SSH)</strong> và <strong>Port 80 (HTTP)</strong>.</li>
</ul>
<hr>
<h3>Bước 4: Khảo Sát Bề Mặt Web &amp; HTTP Response Headers</h3>
<p>Sử dụng <code>curl</code> kiểm tra phản hồi HTTP Header và cấu trúc HTML trang chủ <code>http://10.48.187.204/</code>.</p>
<p><strong>Câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash">curl -s -i http://10.48.187.204/
</code></pre>
<p><strong>Kết quả thu được:</strong></p>
<ul>
<li>Server Banner: <code>Apache/2.4.58 (Ubuntu)</code></li>
<li>Set-Cookie: <code>PHPSESSID=...</code> (thiếu thuộc tính <code>HttpOnly</code>)</li>
<li>Giao diện: Form &quot;Employee Authentication&quot; nhận tham số POST <code>email</code> và <code>password</code>.</li>
<li>Domain hỗ trợ: <code>help@support.thm</code>.</li>
</ul>
<hr>
<h3>Bước 5: Dò Tìm Đường Dẫn Thư Mục &amp; File Ẩn (Web Directory Brute-Forcing)</h3>
<p>Sử dụng <code>gobuster</code> kết hợp với tập từ điển <code>SecLists</code> (<code>common.txt</code>, <code>raft-medium-files.txt</code>, <code>raft-medium-directories.txt</code>) để quét tất cả đường dẫn ẩn.</p>
<p><strong>Các câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash"># Quét danh mục cơ bản
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/common.txt -o gobuster_common.txt

# Quét với các đuôi mở rộng file
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/common.txt -x php,html,txt,json,bak -o gobuster_ext.txt

# Quét tập tin theo danh sách raft
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt -o gobuster_raft_files.txt

# Quét thư mục theo danh sách raft
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -o gobuster_raft_dirs.txt
</code></pre>
<p><strong>Các đường dẫn phát hiện được:</strong></p>
<ul>
<li><code>/index.php</code> (Status 200)</li>
<li><code>/config.php</code> (Status 200, 0 bytes)</li>
<li><code>/footer.php</code> (Status 200)</li>
<li><code>/info.php</code> (Status 200, 73KB)</li>
<li><code>/dashboard.php</code> (Status 302 -&gt; <code>index.php</code>)</li>
<li><code>/api.php</code> (Status 302 -&gt; <code>index.php</code>)</li>
<li><code>/logout.php</code> (Status 302 -&gt; <code>index.php</code>)</li>
<li>Thư mục: <code>/includes/</code>, <code>/skins/</code>, <code>/layout/</code>, <code>/js/</code></li>
</ul>
<hr>
<h3>Bước 6: Kiểm Tra Liệt Kê Thư Mục (Directory Listing Inspection)</h3>
<p>Truy cập trực tiếp vào các thư mục đã phát hiện để kiểm tra tính năng Indexing của Apache Server.</p>
<p><strong>Các câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash">curl -s -i http://10.48.187.204/layout/
curl -s -i http://10.48.187.204/js/
curl -s -i http://10.48.187.204/includes/
curl -s -i http://10.48.187.204/skins/
</code></pre>
<p><strong>Kết quả thu được:</strong></p>
<ul>
<li>Tính năng <strong>Directory Listing</strong> bật trên cả 4 thư mục:<ul>
<li><code>/layout/</code> chứa <code>bootstrap.min.css</code></li>
<li><code>/js/</code> chứa <code>bootstrap.bundle.min.js</code></li>
<li><code>/includes/</code> chứa <code>header.php</code>, <code>skin.php</code></li>
<li><code>/skins/</code> chứa <code>blue.php</code>, <code>default.php</code>, <code>green.php</code>, <code>red.php</code></li>
</ul>
</li>
</ul>
<hr>
<h3>Bước 7: Trích Xuất &amp; Phân Tích Thông Tin Môi Trường Từ <code>info.php</code></h3>
<p>Sử dụng script Python với <code>BeautifulSoup</code> để lọc các thông số nguy hiểm từ tập tin <code>info.php</code>.</p>
<p><strong>Câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash">python3 -c &#39;
import urllib.request
from bs4 import BeautifulSoup

url = &quot;http://10.48.187.204/info.php&quot;
html = urllib.request.urlopen(url).read().decode(&quot;utf-8&quot;, errors=&quot;ignore&quot;)
soup = BeautifulSoup(html, &quot;html.parser&quot;)

keywords = [&quot;DOCUMENT_ROOT&quot;, &quot;SCRIPT_FILENAME&quot;, &quot;disable_functions&quot;, &quot;open_basedir&quot;, &quot;allow_url_include&quot;, &quot;allow_url_fopen&quot;, &quot;APACHE_RUN_USER&quot;]
for row in soup.find_all(&quot;tr&quot;):
    txt = row.text.strip().replace(&quot;\n&quot;, &quot; &quot;)
    for kw in keywords:
        if kw in txt:
            print(f&quot;{kw}: {txt[:100]}&quot;)
            break
&#39;
</code></pre>
<p><strong>Thông tin cấu hình quan trọng thu được:</strong></p>
<ul>
<li>PHP Version: <code>8.3.6</code></li>
<li>Web Server User: <code>www-data</code> (UID: 33)</li>
<li>Document Root: <code>/var/www/html</code></li>
<li><code>disable_functions</code>: <strong>no value</strong> (Không cấm hàm thực thi hệ thống)</li>
<li><code>open_basedir</code>: <strong>no value</strong> (Không giới hạn đường dẫn đọc file)</li>
<li><code>session.save_path</code>: <code>/var/lib/php/sessions</code></li>
<li><code>session.upload_progress.enabled</code>: <code>On</code></li>
</ul>
<hr>
<h3>Bước 8: Kiểm Tra Chuyển Hướng Xác Thực &amp; Fuzzing Tham Số (Auth &amp; Parameter Testing)</h3>
<p>Kiểm tra các hành vi chuyển hướng (HTTP 302) xem có lỗ hổng Execution After Redirect (EAR) hay không và đọc nội dung component <code>footer.php</code>.</p>
<p><strong>Các câu lệnh đã dùng:</strong></p>
<pre><code class="language-bash"># Kiểm tra EAR trên dashboard.php, api.php, header.php
curl -s -i --max-redirs 0 http://10.48.187.204/dashboard.php
curl -s -i --max-redirs 0 http://10.48.187.204/api.php
curl -s -i --max-redirs 0 http://10.48.187.204/includes/header.php

# Đọc mã HTML nguồn của footer.php
curl -s http://10.48.187.204/footer.php
</code></pre>
<p><strong>Kết quả:</strong></p>
<ul>
<li><code>dashboard.php</code> và <code>api.php</code> trả về <code>Content-Length: 0</code> khi bị chuyển hướng (không bị EAR).</li>
<li><code>footer.php</code> chứa giao diện chọn Theme chuyển hướng tham số <code>?skin=default</code>, <code>?skin=red</code>, <code>?skin=green</code>, <code>?skin=blue</code>.</li>
</ul>
<hr>
<h2>4. Cấu Trúc Ứng Dụng Web Tổng Hợp</h2>
<pre><code>http://10.48.187.204/
├── index.php             (Trang chủ / Form đăng nhập nhân viên)
├── dashboard.php         (Trang quản trị / Dashboard - Yêu cầu auth, HTTP 302 -&gt; index.php)
├── api.php               (Endpoint API hệ thống - Yêu cầu auth, HTTP 302 -&gt; index.php)
├── logout.php            (Endpoint đăng xuất - HTTP 302 -&gt; index.php)
├── config.php            (File cấu hình PHP backend - HTTP 200, 0 bytes output)
├── footer.php            (Component footer chứa theme selector `?skin=...`)
├── info.php              (File phpinfo() công khai tiết lộ thông tin cấu hình server)
├── includes/             (Thư mục backend includes - Bật Directory Listing)
│   ├── header.php        (Component header - HTTP 302 -&gt; index.php khi gọi trực tiếp)
│   └── skin.php          (Component xử lý giao diện/theme - HTTP 200)
├── skins/                (Thư mục chứa các file giao diện CSS - Bật Directory Listing)
│   ├── default.php       (&lt;style&gt;body { background-color: #f8f9fa; }&lt;/style&gt;)
│   ├── blue.php          (&lt;style&gt;body { background-color: #e5f0ff; }&lt;/style&gt;)
│   ├── green.php         (&lt;style&gt;body { background-color: #e5ffe5; }&lt;/style&gt;)
│   └── red.php           (&lt;style&gt;body { background-color: #ffe5e5; }&lt;/style&gt;)
├── layout/               (Thư mục giao diện CSS - Bật Directory Listing)
│   └── bootstrap.min.css
└── js/                   (Thư mục Javascript - Bật Directory Listing)
    └── bootstrap.bundle.min.js
</code></pre>
<hr>
<h2>5. Danh Sách Lỗ Hổng &amp; Điểm Yếu Ghi Nhận (Security Findings)</h2>
<h3>1. Phơi Nhiễm Thông Tin Cấu Hình Hóa (<code>info.php</code>)</h3>
<ul>
<li><strong>Mức độ</strong>: Trung bình (Medium)</li>
<li><strong>Mô tả</strong>: Endpoint <code>/info.php</code> công khai cho phép bất kỳ ai xem toàn bộ thông số môi trường PHP, thông tin đường dẫn thư mục gốc (<code>/var/www/html</code>), phiên bản OS, người dùng hệ thống (<code>www-data</code>), và cấu hình session.</li>
</ul>
<h3>2. Cấu Hình Bật Liệt Kê Thư Mục (Directory Listing / Indexing Enabled)</h3>
<ul>
<li><strong>Mức độ</strong>: Thấp - Trung bình (Low - Medium)</li>
<li><strong>Mô tả</strong>: Các thư mục <code>/includes/</code>, <code>/skins/</code>, <code>/layout/</code>, và <code>/js/</code> không cấm liệt kê tập tin. Người dùng có thể duyệt toàn bộ danh sách file mã nguồn/tài nguyên bên trong.</li>
</ul>
<h3>3. Thiếu Thuộc Tính <code>HttpOnly</code> Trên Session Cookie</h3>
<ul>
<li><strong>Mức độ</strong>: Thấp (Low)</li>
<li><strong>Mô tả</strong>: Cookie <code>PHPSESSID</code> được thiết lập không kèm cờ <code>HttpOnly</code>, tạo điều kiện cho các kịch bản đánh cắp session cookie nếu ứng dụng có lỗ hổng Cross-Site Scripting (XSS).</li>
</ul>
<h3>4. Bề Mặt Tấn Công Ứng Dụng (Attack Surface for Next Steps)</h3>
<ul>
<li><strong>Cơ chế Theme Selector (<code>?skin=...</code>)</strong>: File <code>footer.php</code> chứa tính năng chuyển đổi giao diện với các tham số <code>default</code>, <code>red</code>, <code>green</code>, <code>blue</code>. Cần kiểm tra kỹ hơn cơ chế Dynamic File Inclusion trong ứng dụng.</li>
<li><strong>Xác thực Đăng nhập (<code>index.php</code>)</strong>: Giao diện đăng nhập nhân viên chấp nhận email dạng <code>@support.thm</code>. Các trang <code>/dashboard.php</code> và <code>/api.php</code> kiểm tra session trước khi cho phép truy cập.</li>
</ul>
<hr>
<h2>6. Kết Luận &amp; Đề Xuất Khắc Phục (Remediation Recommendations)</h2>
<ol>
<li><strong>Xóa hoặc bảo vệ file <code>info.php</code></strong>: Xóa bỏ file <code>info.php</code> trên môi trường production hoặc giới hạn quyền truy cập theo IP nội bộ.</li>
<li><strong>Tắt Directory Listing</strong>: Thêm directive <code>Options -Indexes</code> trong file cấu hình Apache hoặc <code>.htaccess</code> để cấm liệt kê thư mục.</li>
<li><strong>Cấu hình an toàn cho Session Cookie</strong>: Thiết lập cờ <code>HttpOnly</code> và <code>Secure</code> cho cookie <code>PHPSESSID</code> trong <code>php.ini</code> (<code>session.cookie_httponly = On</code>).</li>
<li><strong>Vệ sinh đầu vào (Input Sanitization)</strong>: Đảm bảo các tham số giao diện (như <code>skin</code>) được whitelist nghiêm ngặt để tránh rủi ro Local File Inclusion (LFI).</li>
</ol>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-162.80,29.87)">
<path d="M1050.45 2554.78 L1049.08 2554.99 L1047.83 2555.06 L1048.83 2555.47 L1051.76 2555.61 L1053.39 2555.75 L1056.82 2555.96 L1060.45 2556.38 L1064.13 2556.72 L1067.57 2557.14 L1070.75 2557.56 L1073.44 2557.98 L1075.43 2558.25 L1075.43 2558.25" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1073.69 2546.64 L1073.12 2545.81 L1072.50 2544.83 L1072.06 2544.00 L1072.75 2544.83 L1073.75 2546.85 L1074.25 2547.89 L1075.18 2550.26 L1076.06 2552.69 L1076.56 2556.59 L1076.37 2559.23 L1075.43 2562.15 L1073.50 2565.49 L1070.56 2568.76 L1066.19 2571.82 L1066.19 2571.82" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1113.95" y="2540.17" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1113.95" dy="0">ko có gì đặc biệt, phải chăng là nếu</tspan><tspan x="1113.95" dy="25">bí có thể search phiên bản để tìm</tspan><tspan x="1113.95" dy="25">lỗi</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="440.26" y="569.90" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="440.26" dy="0">bài này bắt mình escalate lên admin, hmm,</tspan><tspan x="440.26" dy="25">ban đầu mình đ biết như nào, một trang</tspan><tspan x="440.26" dy="25">đăng nhập trống trơn thì làm thế nào??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="457.69" y="716.64" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="457.69" dy="0">liệu có thể bruteforce bằng fuzzing ko?</tspan><tspan x="457.69" dy="25"></tspan></text>
</g>
<a href="../0-asset/pasted-image-20260829211528_024.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829211528_024.png"><g transform="translate(-162.80,29.87)">
<image x="886.938789147621" y="529.1250356038407" width="684.5975138183609" height="408.08484893591907" href="../0-asset/pasted-image-20260829211528_024.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M918.27 879.46 L917.70 878.55 L916.95 877.85 L915.56 877.57 L910.02 878.34 L906.31 879.04 L902.15 879.95 L900.01 880.44 L895.73 881.63 L891.45 883.11 L887.42 884.72 L883.77 886.55 L880.49 888.51 L877.66 890.61 L875.45 892.93 L873.69 895.17 L872.12 899.03 L871.42 901.76 L871.24 904.50 L871.24 906.04 L871.68 908.78 L872.49 911.65 L873.94 914.32 L876.08 916.98 L878.85 919.44 L882.51 921.68 L886.98 923.71 L892.39 925.47 L901.65 927.78 L908.26 929.04 L911.72 929.61 L918.65 930.66 L925.57 931.50 L932.62 932.27 L939.87 932.69 L947.61 932.90 L955.48 932.97 L963.48 932.90 L972.23 932.76 L986.02 932.34 L994.64 931.99 L998.61 931.92 L1006.73 931.71 L1014.54 931.50 L1022.16 931.15 L1029.53 930.86 L1036.89 930.44 L1044.13 930.09 L1051.56 929.61 L1058.87 929.04 L1066.04 928.41 L1073.10 927.78 L1079.96 927.22 L1086.57 926.73 L1092.80 926.17 L1098.41 925.68 L1103.70 925.11 L1108.80 924.55 L1113.90 923.92 L1118.62 923.22 L1123.28 922.45 L1127.69 921.68 L1134.05 920.21 L1136.06 919.72 L1139.96 918.80 L1143.62 917.75 L1146.70 916.77 L1149.60 915.86 L1152.30 914.80 L1154.82 913.82 L1157.22 912.77 L1159.23 911.65 L1161.18 910.74 L1162.06 910.25 L1163.39 909.41 L1164.52 908.70 L1165.40 908.08 L1166.28 907.44 L1167.29 906.81 L1167.98 906.11 L1168.49 905.20 L1168.55 904.01 L1167.79 902.32 L1166.28 900.36 L1164.08 898.04 L1161.18 895.66 L1157.72 893.35 L1153.25 890.68 L1148.15 888.16 L1142.42 885.77 L1135.30 883.18 L1127.75 880.80 L1120.07 878.69 L1111.95 876.66 L1107.98 875.68 L1095.32 872.66 L1086.82 870.84 L1078.26 868.94 L1069.51 867.12 L1060.82 865.30 L1052.00 863.75 L1042.94 862.28 L1034.00 860.95 L1024.93 859.90 L1015.86 859.05 L1011.33 858.70 L1002.14 858.15 L988.85 857.72 L980.60 857.51 L971.60 857.65 L962.15 857.86 L952.65 858.28 L943.27 858.85 L934.14 859.40 L925.76 859.90 L918.02 860.53 L910.34 861.16 L906.56 861.44 L899.32 862.14 L889.62 863.12 L884.46 863.75 L879.55 864.39 L874.95 865.09 L871.17 865.72 L867.96 866.42 L865.06 867.19 L862.55 868.10 L860.41 869.36 L859.46 870.07 L857.89 871.68 L857.89 871.68" stroke="#2f9e44" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1120.38 653.30 L1123.34 653.30 L1126.74 653.09 L1128.50 652.88 L1132.91 652.60 L1137.57 652.25 L1142.48 651.83 L1147.33 651.48 L1151.99 651.06 L1158.54 650.36 L1162.57 649.94 L1165.84 649.52 L1167.48 649.38 L1170.25 649.09 L1171.32 648.96 L1173.15 648.74 L1174.41 648.61 L1175.73 648.32 L1175.73 648.32" stroke="#2f9e44" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1175.48 635.00 L1176.42 634.44 L1177.36 634.79 L1178.31 635.49 L1179.88 637.52 L1180.89 639.21 L1181.27 640.12 L1181.65 641.80 L1181.77 643.34 L1181.08 646.01 L1179.69 648.32 L1177.43 650.71 L1174.15 653.09 L1169.93 655.26 L1165.34 656.95 L1163.13 657.58 L1163.13 657.58" stroke="#2f9e44" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1208.79" y="665.66" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#2f9e44" text-anchor="start"><tspan x="1208.79" dy="0">phần POST giúp đăng nhập</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1123.53 870.42 L1124.48 869.92 L1125.48 869.57 L1128.13 869.22 L1131.09 869.09 L1134.61 869.09 L1139.08 869.09 L1141.73 869.15 L1147.83 869.51 L1154.82 869.71 L1162.38 869.99 L1170.31 870.14 L1183.35 870.07 L1192.66 869.71 L1201.67 869.15 L1209.35 868.52 L1216.53 867.96 L1222.89 867.33 L1225.59 867.12 L1230.51 866.63 L1234.41 866.21 L1237.49 865.86 L1240.08 865.58 L1241.84 865.44 L1243.29 865.30 L1244.80 865.16 L1245.99 864.87 L1245.99 864.87" stroke="#2f9e44" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1230.19 876.59 L1229.25 877.08 L1228.87 877.99 L1229.62 879.88 L1231.32 881.99 L1234.16 884.16 L1237.62 886.33 L1242.34 888.58 L1247.32 890.47 L1249.90 891.38 L1254.87 892.79 L1259.59 893.91 L1266.39 894.96 L1270.55 895.24 L1274.33 895.45 L1277.92 895.24 L1281.19 895.03 L1284.34 894.61 L1287.05 893.98 L1288.24 893.56 L1290.07 892.65 L1291.01 891.87 L1291.01 891.87" stroke="#2f9e44" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1287.99 887.67 L1288.31 888.86 L1289.63 891.03 L1290.26 892.57 L1290.57 893.91 L1289.82 896.29 L1287.05 899.24 L1283.65 900.92 L1279.05 902.32 L1279.05 902.32" stroke="#2f9e44" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1318.59" y="901.09" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#2f9e44" text-anchor="start"><tspan x="1318.59" dy="0">cookie có thể là cách mã</tspan><tspan x="1318.59" dy="25">hóa đơn giản, hay hash</tspan><tspan x="1318.59" dy="25">đơn giản ko??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="240.22" y="965.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="240.22" dy="0">??các bước recon khác có thể làm với trangweb này là gì??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M360.98 993.35 L361.61 992.58 L362.17 991.73 L362.43 993.84 L361.92 997.20 L361.10 1001.77 L359.97 1006.60 L358.96 1011.58 L357.45 1018.60 L356.76 1022.87 L356.44 1026.24 L356.26 1029.18 L356.07 1030.52 L356.07 1032.55 L356.07 1034.09 L356.26 1035.29 L356.70 1036.13 L357.26 1036.83 L358.14 1037.25 L359.66 1037.81 L363.37 1038.51 L364.76 1038.58 L367.84 1038.72 L371.43 1038.86 L375.33 1038.72 L379.62 1038.65 L383.77 1038.58 L387.74 1038.44 L391.58 1038.23 L394.92 1038.16 L398.00 1038.09 L399.20 1037.95 L401.21 1037.88 L402.72 1037.88 L403.86 1037.74 L404.99 1037.32 L404.99 1037.32" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M403.42 1026.24 L403.04 1025.19 L404.17 1025.40 L406.19 1026.73 L408.58 1029.04 L409.27 1029.89 L410.40 1033.74 L410.03 1036.13 L408.64 1039.07 L406.37 1042.30 L402.72 1045.94 L398.13 1049.38 L392.21 1052.47 L389.25 1053.66 L389.25 1053.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="409.15" y="1070.43" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="409.15" dy="0">dùng nikto được ko??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="395.93" y="1128.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="395.93" dy="0">?? enpoint ẩn là gì??</tspan><tspan x="395.93" dy="25">?? phiên bản đang dùng??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="244.94" y="1302.90" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="244.94" dy="0">ok mình sẽ tiến hành recon  bằng AI, sau đó trả lời các câu hỏi mình tò mò</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M653.51 1146.71 L653.00 1146.01 L652.50 1145.24 L651.87 1144.47 L652.12 1143.28 L653.32 1142.86 L656.21 1142.36 L658.86 1141.88 L661.44 1141.52 L664.27 1141.17 L667.04 1140.89 L670.32 1140.82 L672.14 1140.75 L673.53 1140.75 L674.85 1140.75 L676.49 1140.82 L678.06 1140.89 L679.45 1140.96 L681.09 1140.89 L683.54 1140.75 L686.06 1140.33 L686.06 1140.33" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M692.17 1131.64 L691.66 1130.51 L691.41 1129.32 L691.66 1128.13 L692.92 1128.13 L693.68 1128.62 L694.31 1129.60 L694.62 1130.79 L694.43 1133.46 L693.43 1135.98 L691.91 1138.36 L688.39 1141.88 L685.24 1143.98 L681.78 1145.66 L681.78 1145.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="728.76" y="1155.70" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="728.76" dy="0">curl.....</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M632.41 1107.95 L631.60 1107.53 L631.97 1106.62 L634.18 1104.80 L636.57 1103.18 L638.21 1102.27 L644.19 1099.05 L649.16 1096.87 L654.51 1094.91 L660.18 1093.16 L665.91 1091.61 L671.70 1090.49 L676.87 1089.79 L679.45 1089.51 L684.55 1089.16 L689.46 1089.02 L693.87 1089.02 L697.77 1089.09 L703.19 1089.23 L706.40 1089.58 L709.36 1089.79 L710.68 1089.86 L711.81 1090.00 L713.76 1090.21 L715.27 1090.35 L716.97 1090.35 L716.97 1090.35" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M716.66 1079.41 L717.29 1078.64 L718.23 1078.99 L719.62 1079.83 L720.37 1080.53 L721.63 1082.15 L722.58 1084.11 L722.89 1085.30 L722.96 1087.41 L721.89 1092.52 L720.50 1095.61 L718.30 1098.83 L716.97 1100.45 L714.02 1103.40 L711.06 1105.99 L711.06 1105.99" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="744.81" y="1114.91" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="744.81" dy="0">gobuster</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M867.46 971.49 L867.52 969.73 L867.90 968.33 L868.53 965.80 L869.54 963.56 L870.86 961.67 L872.18 960.33 L873.38 959.70 L874.45 959.98 L875.58 961.46 L876.52 964.61 L876.90 969.45 L876.84 975.69 L876.34 983.06 L876.08 986.91 L875.08 998.48 L874.64 1005.99 L874.57 1013.00 L874.89 1019.10 L875.20 1021.84 L876.52 1026.54 L878.16 1030.60 L881.56 1035.09 L883.77 1036.91 L885.91 1037.89 L887.48 1038.39 L888.68 1038.46 L885.78 1039.09 L882.82 1041.40 L877.59 1047.36 L874.19 1052.97 L871.42 1059.56 L870.48 1062.79 L869.16 1069.45 L868.40 1076.40 L868.02 1083.55 L868.21 1090.84 L868.65 1098.13 L869.16 1105.15 L869.54 1112.16 L869.79 1118.82 L869.79 1124.71 L869.54 1130.25 L868.97 1135.44 L868.40 1140.28 L867.52 1144.77 L866.45 1148.56 L865.13 1152.13 L863.81 1154.80 L863.11 1156.06 L861.04 1158.87 L860.34 1159.57 L859.15 1160.20 L858.08 1160.05 L857.38 1159.28 L857.38 1156.13 L858.33 1152.20 L858.33 1152.20" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M915.25 1076.68 L913.48 1076.18 L912.22 1075.90 L911.03 1075.55 L912.41 1075.55 L913.99 1075.62 L918.21 1075.48 L923.56 1075.27 L932.25 1075.13 L937.91 1075.13 L943.52 1075.13 L948.62 1075.20 L951.07 1075.20 L955.04 1075.13 L958.57 1075.06 L961.46 1074.71 L961.46 1074.71" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M926.45 1079.13 L925.32 1079.27 L923.56 1079.41 L922.30 1079.55 L923.37 1078.64 L924.88 1078.36 L929.41 1077.52 L934.89 1076.53 L941.25 1075.70 L947.67 1075.06 L953.53 1074.50 L961.21 1073.80 L961.21 1073.80" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M966.37 1060.41 L967.32 1059.77 L969.77 1060.34 L972.73 1061.18 L975.63 1062.23 L977.01 1062.86 L980.79 1065.24 L982.81 1067.14 L984.07 1069.52 L984.51 1072.19 L983.88 1075.20 L982.30 1078.92 L981.17 1080.88 L977.96 1085.09 L973.99 1089.09 L969.65 1092.81 L965.18 1095.96 L962.85 1097.08 L962.85 1097.08" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1011.96" y="1103.06" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1011.96" dy="0">dùng AI recon được ko ?</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260829212448_767.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829212448_767.png"><g transform="translate(-162.80,29.87)">
<image x="202.8007650233768" y="1407.2138675964347" width="730.0997380610285" height="287.7703061129434" href="../0-asset/pasted-image-20260829212448_767.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M687.00 1502.95 L686.37 1501.90 L685.81 1500.91 L685.30 1500.00 L684.67 1499.30 L684.36 1500.35 L684.55 1502.81 L684.86 1505.89 L685.37 1508.91 L686.06 1511.85 L686.50 1513.32 L687.57 1516.20 L689.71 1520.06 L691.54 1522.37 L693.87 1524.48 L696.57 1526.44 L699.53 1528.12 L702.49 1529.53 L705.52 1530.65 L708.60 1531.49 L711.62 1532.26 L714.64 1532.96 L717.60 1533.45 L720.69 1533.73 L725.10 1533.87 L726.61 1533.87 L729.38 1533.59 L731.96 1533.45 L733.85 1533.31 L735.30 1533.10 L736.49 1532.96 L737.94 1532.75 L739.20 1532.47 L739.20 1532.47" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M732.53 1516.69 L733.47 1517.19 L734.54 1518.37 L735.99 1520.34 L737.75 1523.99 L738.45 1526.65 L738.63 1528.12 L738.63 1529.67 L737.94 1534.22 L736.49 1537.59 L734.48 1540.82 L731.83 1543.83 L728.56 1546.49 L724.97 1548.39 L721.32 1549.44 L721.32 1549.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="769.27" y="1571.07" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="769.27" dy="0">nhìn lại giữ kiện của Burp , mình cũng</tspan><tspan x="769.27" dy="25">chẳng nhìn thấy chút gì là có thể mò</tspan><tspan x="769.27" dy="25">được từ đây cả ?</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260829212855_109.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829212855_109.png"><g transform="translate(-162.80,29.87)">
<image x="1040.6175147713664" y="1157.8096693685782" width="486.536129582585" height="259.09514370542473" href="../0-asset/pasted-image-20260829212855_109.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M789.62 1054.43 L788.99 1055.05 L788.24 1055.68 L787.56 1056.30 L787.56 1056.30" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1029.25 1172.39 L1028.43 1171.91 L1027.68 1171.28 L1026.87 1170.73 L1026.12 1170.24 L1026.12 1170.24" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M800.55 994.05 L799.23 993.36 L798.11 992.73 L796.80 992.45 L796.11 993.01 L796.36 994.61 L797.42 998.78 L798.49 1002.82 L798.99 1005.11 L799.73 1010.12 L800.30 1016.45 L800.55 1023.33 L800.67 1030.43 L800.48 1037.60 L800.30 1044.55 L800.05 1051.30 L799.98 1054.29 L799.86 1059.78 L799.80 1067.85 L799.86 1072.86 L799.86 1077.52 L799.86 1081.48 L799.86 1084.96 L799.86 1088.09 L799.86 1090.32 L799.86 1092.13 L799.86 1093.45 L799.86 1094.91 L799.86 1096.30 L799.86 1097.55 L799.86 1097.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1429.61 1322.49 L1426.12 1319.43 L1424.05 1317.97 L1421.93 1316.44 L1418.31 1314.28 L1415.25 1312.75 L1413.56 1312.05 L1409.88 1310.74 L1405.51 1309.62 L1400.51 1308.72 L1394.27 1307.95 L1387.65 1307.53 L1380.53 1307.39 L1372.91 1307.53 L1363.91 1308.09 L1359.35 1308.58 L1346.36 1310.11 L1338.12 1311.50 L1330.13 1312.96 L1322.94 1314.70 L1315.89 1316.58 L1309.52 1318.46 L1303.40 1320.40 L1297.78 1322.49 L1295.09 1323.46 L1290.10 1325.41 L1286.16 1327.29 L1281.04 1329.86 L1278.42 1331.53 L1276.29 1333.06 L1274.61 1334.66 L1273.42 1336.26 L1272.92 1337.37 L1272.73 1338.56 L1272.98 1339.67 L1275.11 1341.82 L1278.17 1343.35 L1282.79 1344.95 L1288.78 1346.48 L1300.52 1348.64 L1304.96 1349.34 L1314.45 1350.52 L1324.26 1351.56 L1334.44 1352.61 L1344.68 1353.37 L1354.98 1354.00 L1365.16 1354.62 L1375.09 1354.97 L1384.52 1355.11 L1389.33 1355.11 L1402.20 1354.83 L1410.13 1354.42 L1417.93 1353.93 L1425.93 1353.16 L1433.17 1352.68 L1439.79 1352.19 L1445.35 1351.77 L1447.85 1351.49 L1452.66 1351.08 L1456.90 1350.52 L1460.28 1349.89 L1463.15 1349.27 L1466.46 1347.53 L1467.83 1346.21 L1468.27 1344.54 L1468.08 1343.35 L1466.46 1340.29 L1462.46 1335.56 L1455.03 1329.86 L1444.66 1324.16 L1432.74 1319.64 L1420.49 1316.37 L1410.50 1314.77 L1405.94 1314.35 L1394.95 1314.42 L1394.95 1314.42" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1411.75 1383.49 L1413.06 1383.56 L1414.62 1386.76 L1415.37 1390.52 L1415.69 1395.73 L1415.69 1399.14 L1415.12 1407.21 L1412.06 1425.37 L1408.57 1438.79 L1404.26 1451.94 L1399.89 1464.59 L1395.51 1476.63 L1393.45 1482.12 L1389.64 1491.86 L1386.40 1499.23 L1383.02 1506.33 L1379.65 1512.80 L1376.47 1518.36 L1373.53 1523.09 L1369.85 1528.73 L1368.78 1530.39 L1366.85 1532.90 L1364.98 1534.92 L1363.41 1536.51 L1362.66 1537.21 L1361.29 1538.11 L1360.23 1538.67 L1359.29 1539.02 L1359.29 1539.02" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1356.48 1518.36 L1356.42 1519.54 L1356.23 1520.66 L1355.92 1524.00 L1355.48 1527.06 L1355.17 1530.26 L1354.98 1531.79 L1354.48 1536.58 L1354.42 1539.44 L1354.42 1542.15 L1354.67 1543.96 L1354.86 1545.49 L1355.36 1546.60 L1356.17 1547.23 L1360.04 1546.95 L1364.60 1545.35 L1370.10 1543.06 L1376.15 1540.20 L1385.65 1535.13 L1391.70 1531.58 L1396.70 1528.31 L1399.07 1526.85 L1399.07 1526.85" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1423.06 1519.82 L1422.24 1520.24 L1422.24 1520.24" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1400.95 1228.86 L1401.26 1227.68 L1401.32 1226.15 L1401.20 1224.62 L1400.39 1223.30 L1398.64 1221.84 L1396.08 1221.14 L1394.39 1220.94 L1390.52 1221.42 L1383.40 1224.13 L1378.59 1227.13 L1374.41 1230.81 L1372.53 1233.04 L1368.29 1240.13 L1366.72 1245.00 L1366.22 1249.80 L1366.41 1252.10 L1367.91 1256.34 L1370.85 1260.58 L1375.15 1263.85 L1380.28 1266.08 L1388.52 1266.98 L1394.76 1266.08 L1400.82 1264.13 L1406.44 1260.86 L1409.13 1258.70 L1413.19 1253.84 L1415.62 1248.48 L1416.44 1242.92 L1416.00 1237.56 L1414.12 1231.99 L1411.19 1226.99 L1405.01 1221.14 L1402.76 1219.68 L1398.26 1217.67 L1394.20 1216.55 L1394.20 1216.55" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1405.01 1120.29 L1404.13 1123.28 L1403.38 1127.17 L1402.51 1131.90 L1401.51 1137.88 L1400.51 1144.14 L1400.01 1147.41 L1399.01 1154.09 L1398.26 1160.70 L1397.08 1170.09 L1396.58 1175.37 L1396.08 1180.25 L1395.64 1184.62 L1395.26 1188.10 L1395.20 1189.70 L1395.01 1192.70 L1394.95 1193.88 L1394.76 1195.69 L1394.70 1197.15 L1394.64 1198.61 L1394.45 1199.72 L1394.45 1199.72" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1392.77 1146.09 L1393.89 1143.59 L1394.51 1142.34 L1396.14 1139.14 L1398.07 1135.80 L1400.01 1132.18 L1401.95 1128.49 L1403.63 1125.15 L1404.88 1122.37 L1405.44 1120.98 L1406.44 1118.69 L1407.32 1116.67 L1407.82 1115.28 L1408.32 1114.23 L1408.75 1113.05 L1409.13 1112.22 L1410.88 1113.89 L1411.69 1116.74 L1412.50 1120.35 L1413.56 1124.46 L1415.19 1130.93 L1416.56 1135.38 L1417.19 1137.54 L1418.62 1141.64 L1419.37 1143.66 L1419.37 1143.66" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1376.95" y="1084.71" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1376.95" dy="0">username là admin?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1338.23" y="1598.39" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1338.23" dy="0">pathtraversal?</tspan><tspan x="1338.23" dy="25"></tspan><tspan x="1338.23" dy="25">file inclusion ?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1321.51 1581.38 L1321.07 1580.34 L1320.70 1579.36 L1320.26 1578.53 L1319.64 1577.90 L1319.01 1578.67 L1317.64 1581.38 L1316.14 1584.93 L1314.51 1588.96 L1313.14 1592.99 L1311.58 1597.03 L1310.95 1599.05 L1309.58 1602.94 L1308.27 1606.49 L1306.96 1609.62 L1305.83 1612.19 L1304.02 1615.46 L1302.65 1617.20 L1301.84 1617.97 L1301.09 1618.53 L1299.78 1619.15 L1298.59 1619.43 L1297.28 1619.22 L1296.40 1618.53 L1296.09 1617.55 L1296.40 1616.64 L1298.65 1617.55 L1300.46 1619.22 L1302.40 1621.65 L1303.27 1623.12 L1305.15 1626.31 L1306.71 1629.65 L1308.08 1633.06 L1308.89 1636.19 L1309.14 1639.46 L1308.39 1644.61 L1307.08 1648.30 L1306.40 1650.10 L1304.71 1653.65 L1303.02 1656.78 L1301.71 1659.35 L1300.59 1661.44 L1300.34 1663.32 L1301.09 1665.06 L1303.15 1666.73 L1304.71 1667.63 L1308.83 1668.82 L1311.20 1669.37 L1311.20 1669.37" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M840.55 2024.14 L840.55 2024.14" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="247.01" y="1746.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="247.01" dy="0">ok bây giờ mình sẽ đọc lại kết quả recon từ AI , nó sẽ</tspan><tspan x="247.01" dy="25">trả loiwf được các câu hỏi về epoint ,phiên bản, các</tspan><tspan x="247.01" dy="25">internal API đưược dùng ?</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260829211258_824.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829211258_824.png"><g transform="translate(-162.80,29.87)">
<image x="221.2418800087445" y="56.925275349457365" width="884.8676552864307" height="444.9537924873997" href="../0-asset/pasted-image-20260829211258_824.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1112.20 284.94 L1110.75 284.94 L1109.49 285.01 L1112.26 284.87 L1115.91 284.66 L1117.93 284.66 L1122.71 284.66 L1127.62 284.59 L1132.35 284.66 L1136.63 284.73 L1140.47 284.94 L1143.74 284.94 L1145.19 284.94 L1145.19 284.94" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1143.43 273.02 L1142.86 271.90 L1142.48 270.98 L1142.67 269.58 L1143.62 269.09 L1145.13 269.16 L1146.58 269.93 L1148.34 271.20 L1149.60 272.60 L1150.16 274.07 L1149.91 276.80 L1148.78 279.26 L1146.39 282.14 L1142.86 285.43 L1138.20 288.66 L1135.75 290.27 L1133.29 291.96 L1133.29 291.96" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1154.45" y="311.74" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1154.45" dy="0">-internal API??? ==&gt; có thể authorise ko?</tspan><tspan x="1154.45" dy="25"></tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1163.07" y="380.33" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1163.07" dy="0">-system diagnosstic==&gt; liệu nó cho chạy scipt ko?</tspan><tspan x="1163.07" dy="25">có hàm exec() =&gt; có command injection ko</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M367.73 3767.39 L366.86 3766.83 L366.10 3766.06 L365.47 3765.37 L364.66 3764.73 L362.90 3763.62 L361.90 3762.99 L359.64 3762.01 L356.94 3760.96 L353.87 3760.12 L348.35 3758.93 L344.08 3758.38 L339.56 3757.96 L334.86 3757.89 L330.09 3757.89 L327.64 3757.96 L322.75 3758.38 L317.85 3759.08 L313.08 3759.92 L308.19 3760.96 L303.11 3762.36 L297.65 3763.83 L289.87 3766.41 L285.60 3767.88 L283.47 3768.65 L279.39 3770.26 L275.44 3771.86 L271.86 3773.54 L268.35 3775.22 L265.52 3776.75 L262.89 3778.22 L260.63 3779.48 L258.68 3780.67 L256.24 3782.21 L255.48 3782.84 L254.79 3783.74 L254.79 3785.07 L255.48 3785.84 L258.24 3787.38 L260.63 3788.50 L264.83 3789.90 L267.84 3790.80 L271.04 3791.78 L274.43 3792.76 L278.26 3793.60 L282.02 3794.58 L284.03 3794.86 L288.17 3795.62 L292.57 3796.32 L297.15 3796.88 L301.79 3797.51 L306.56 3798.07 L313.52 3798.70 L318.10 3798.98 L322.62 3799.26 L326.64 3799.47 L328.58 3799.47 L332.66 3799.61 L336.74 3799.61 L340.82 3799.54 L345.40 3799.33 L350.04 3799.12 L354.75 3798.77 L359.51 3798.28 L366.79 3797.30 L369.30 3796.88 L374.20 3796.25 L379.09 3795.41 L383.86 3794.72 L388.44 3794.02 L392.96 3793.46 L397.16 3792.83 L400.93 3792.41 L404.69 3791.99 L406.51 3791.85 L410.21 3791.50 L415.55 3791.01 L419.06 3790.73 L422.51 3790.38 L425.90 3790.17 L429.10 3789.82 L432.42 3789.55 L435.50 3789.26 L437.19 3789.06 L440.39 3788.64 L443.66 3788.29 L446.92 3787.94 L450.18 3787.66 L455.07 3787.10 L458.21 3786.82 L461.35 3786.54 L464.36 3786.40 L467.25 3786.12 L468.69 3786.05 L471.20 3785.84 L472.46 3785.77 L474.59 3785.70 L476.41 3785.63 L478.04 3785.49 L479.48 3785.42 L480.80 3785.35 L482.56 3785.28 L484.63 3785.07 L487.33 3784.93 L488.52 3784.86 L490.71 3784.65 L494.16 3784.52 L495.29 3784.44 L498.68 3784.23 L501.07 3784.16 L503.07 3784.16 L504.96 3784.16 L507.78 3784.16 L510.48 3784.23 L511.80 3784.23 L513.87 3784.23 L517.51 3784.44 L519.70 3784.44 L521.52 3784.52 L523.84 3784.65 L526.10 3784.65 L528.05 3784.65 L531.31 3784.65 L532.69 3784.79 L533.95 3784.79 L535.20 3784.79 L539.03 3784.86 L541.22 3784.93 L543.04 3784.93 L544.74 3785.07 L548.13 3785.35 L550.13 3785.49 L551.77 3785.63 L553.27 3785.63 L554.53 3785.70 L556.22 3785.70 L557.54 3785.70 L558.92 3785.49 L561.18 3785.28 L563.62 3784.86 L566.01 3784.23 L568.46 3783.68 L570.90 3783.04 L573.35 3782.42 L575.61 3781.72 L577.99 3781.16 L579.81 3780.67 L581.44 3780.11 L582.76 3779.76 L584.02 3779.34 L585.21 3778.92 L586.84 3778.43 L587.91 3778.08 L589.60 3777.52 L590.98 3777.11 L592.05 3776.69 L593.24 3776.27 L594.18 3775.85 L595.00 3775.36 L595.75 3774.59 L595.44 3773.40 L592.67 3771.93 L589.79 3770.95 L585.84 3770.12 L583.51 3769.70 L578.49 3769.00 L572.16 3768.30 L565.26 3767.81 L558.17 3767.39 L550.82 3767.04 L543.23 3766.83 L531.31 3766.41 L523.34 3766.06 L519.26 3765.85 L511.36 3765.44 L503.51 3765.15 L495.86 3764.73 L488.33 3764.25 L481.05 3763.83 L473.96 3763.55 L467.25 3763.34 L461.22 3763.27 L455.26 3763.20 L449.43 3763.34 L443.28 3763.55 L437.38 3763.69 L431.17 3763.83 L425.21 3764.11 L419.44 3764.39 L413.79 3764.60 L408.20 3764.88 L402.75 3765.22 L400.05 3765.44 L394.90 3765.72 L389.76 3766.06 L382.23 3766.62 L377.40 3766.97 L372.75 3767.46 L368.42 3768.02 L364.09 3768.44 L360.20 3769.00 L358.45 3769.14 L355.00 3769.70 L351.61 3770.12 L348.41 3770.53 L345.27 3770.89 L340.82 3770.75 L339.37 3770.53 L339.37 3770.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M440.58 5156.88 L440.39 5155.76 L439.89 5154.85 L438.07 5152.82 L435.88 5151.57 L433.05 5150.45 L429.35 5149.75 L424.71 5149.33 L422.20 5149.26 L416.55 5149.33 L406.95 5150.17 L400.61 5151.15 L394.53 5152.13 L388.82 5153.39 L383.67 5154.71 L378.40 5156.32 L373.44 5158.28 L371.37 5159.12 L367.48 5161.00 L363.91 5163.03 L362.34 5164.01 L358.13 5167.29 L354.87 5170.58 L353.30 5172.88 L352.17 5175.12 L351.36 5177.42 L351.11 5178.54 L351.04 5180.43 L351.42 5182.46 L352.42 5184.83 L354.24 5187.00 L357.00 5189.24 L360.58 5191.19 L365.10 5193.01 L373.38 5195.52 L376.33 5196.29 L382.42 5197.76 L388.38 5199.02 L394.40 5200.28 L400.17 5201.53 L406.01 5202.65 L411.15 5203.49 L416.49 5204.12 L421.76 5204.54 L427.28 5204.75 L430.04 5204.68 L438.32 5204.12 L443.59 5203.49 L449.37 5202.37 L454.95 5201.04 L460.22 5199.44 L465.49 5197.76 L470.45 5195.81 L475.40 5193.71 L477.85 5192.66 L482.31 5190.63 L486.32 5188.75 L491.84 5185.95 L495.17 5184.27 L497.68 5182.73 L499.88 5181.48 L501.76 5180.22 L502.38 5179.59 L503.39 5178.54 L503.95 5177.57 L503.83 5176.17 L501.88 5173.79 L499.06 5171.41 L492.35 5167.36 L486.45 5164.42 L479.36 5161.56 L475.59 5160.23 L467.75 5157.93 L459.91 5156.11 L453.26 5154.71 L446.92 5153.73 L441.58 5153.24 L436.82 5152.90 L434.68 5152.90 L434.68 5152.90" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M518.45 5161.98 L517.26 5162.26 L516.25 5162.47 L518.07 5161.35 L520.71 5160.30 L524.16 5159.12 L528.30 5157.86 L532.75 5156.67 L537.40 5155.41 L542.10 5154.22 L546.75 5153.04 L551.39 5151.85 L555.78 5150.87 L557.91 5150.45 L561.93 5149.61 L565.26 5148.91 L569.40 5148.14 L570.46 5147.93 L572.16 5147.66 L573.41 5147.44 L574.86 5147.24 L576.30 5147.24 L576.30 5147.24" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M569.21 5141.99 L568.89 5140.95 L569.15 5139.90 L569.96 5139.41 L571.22 5139.20 L572.47 5139.34 L574.92 5139.90 L577.24 5140.39 L579.50 5141.15 L581.19 5141.79 L582.51 5142.34 L583.51 5142.83 L584.27 5143.39 L584.46 5144.44 L583.64 5145.91 L581.19 5148.07 L575.42 5151.64 L575.42 5151.64" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="610.31" y="5163.60" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="610.31" dy="0">cái này mình có thể suy ra được gì?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M261.32 5905.46 L260.44 5905.04 L259.88 5905.73 L259.25 5906.71 L258.87 5907.55 L258.06 5909.79 L257.30 5911.46 L256.24 5914.26 L255.92 5915.31 L255.55 5916.36 L255.23 5917.68 L254.98 5918.87 L254.79 5919.99 L254.60 5921.04 L254.48 5922.16 L254.35 5923.35 L254.29 5924.53 L254.23 5925.72 L254.23 5927.33 L254.23 5928.59 L254.29 5929.84 L254.35 5931.17 L254.48 5932.50 L254.60 5933.90 L254.73 5935.22 L254.86 5936.55 L254.98 5937.81 L255.11 5939.00 L255.29 5940.19 L255.48 5941.31 L255.61 5942.63 L255.92 5943.75 L256.17 5944.73 L256.49 5945.99 L256.93 5946.97 L257.43 5947.88 L258.06 5948.85 L258.87 5949.62 L259.62 5950.46 L261.07 5951.65 L262.45 5952.56 L263.58 5953.33 L264.64 5953.95 L265.77 5954.44 L266.78 5954.86 L267.78 5955.21 L269.98 5955.77 L272.11 5956.40 L273.11 5956.75 L274.81 5957.03 L277.57 5957.73 L278.76 5958.01 L279.77 5958.22 L281.21 5958.50 L282.53 5958.84 L284.72 5959.26 L285.85 5959.41 L287.80 5959.68 L289.43 5959.82 L291.06 5959.90 L293.95 5960.10 L295.14 5960.17 L297.21 5960.17 L299.09 5960.17 L300.78 5960.10 L302.29 5960.10 L303.61 5960.03 L307.00 5959.82 L308.19 5959.75 L310.20 5959.61 L311.95 5959.33 L313.65 5959.26 L316.47 5958.99 L318.54 5958.91 L320.42 5958.78 L321.93 5958.64 L323.25 5958.57 L324.63 5958.50 L326.38 5958.43 L328.08 5958.43 L331.09 5958.43 L332.41 5958.43 L334.67 5958.50 L338.06 5958.50 L339.50 5958.43 L341.82 5958.29 L344.52 5958.15 L347.22 5958.01 L349.91 5957.73 L352.61 5957.38 L355.06 5957.17 L357.88 5956.82 L361.90 5956.19 L363.34 5955.98 L366.04 5955.56 L368.68 5955.14 L371.25 5954.72 L373.82 5954.30 L376.33 5953.88 L377.33 5953.61 L380.91 5953.11 L381.98 5952.91 L383.86 5952.77 L385.49 5952.49 L387.06 5952.35 L388.38 5952.28 L389.57 5952.14 L390.76 5952.07 L392.27 5952.00 L393.71 5952.00 L395.22 5951.93 L396.72 5951.93 L399.80 5952.00 L403.25 5951.93 L405.07 5951.93 L406.70 5951.86 L408.20 5951.86 L409.65 5951.72 L411.40 5951.65 L413.10 5951.65 L415.61 5951.65 L417.05 5951.58 L419.18 5951.51 L421.00 5951.30 L424.14 5951.16 L425.52 5951.09 L426.78 5951.02 L428.03 5950.88 L429.60 5950.81 L431.17 5950.74 L432.55 5950.67 L434.12 5950.60 L435.56 5950.60 L436.94 5950.60 L438.38 5950.60 L439.89 5950.67 L441.33 5950.74 L442.78 5950.81 L444.22 5950.88 L445.66 5951.02 L447.11 5951.16 L448.61 5951.23 L450.06 5951.44 L451.62 5951.44 L455.45 5951.51 L457.46 5951.44 L459.22 5951.30 L460.72 5951.30 L462.10 5951.23 L463.36 5951.16 L465.05 5951.09 L466.62 5951.09 L468.19 5951.02 L470.51 5950.81 L472.96 5950.60 L474.09 5950.39 L475.91 5950.11 L477.60 5949.90 L480.42 5949.41 L481.68 5949.13 L483.75 5948.71 L485.44 5948.36 L486.95 5948.01 L488.39 5947.73 L490.71 5947.11 L491.78 5946.82 L494.73 5946.20 L495.73 5945.92 L498.68 5945.15 L499.69 5944.94 L501.51 5944.52 L503.51 5944.10 L505.33 5943.68 L506.97 5943.26 L508.41 5942.98 L509.60 5942.63 L510.73 5942.28 L511.80 5942.08 L512.80 5941.79 L514.06 5941.37 L516.50 5940.47 L518.01 5939.70 L519.70 5938.79 L521.96 5937.11 L522.65 5936.41 L523.84 5935.30 L525.10 5934.11 L526.10 5932.78 L527.04 5931.59 L527.73 5930.61 L528.30 5929.57 L528.80 5928.66 L529.24 5927.75 L529.55 5926.35 L529.74 5925.02 L529.80 5923.77 L529.68 5922.51 L528.86 5919.43 L528.55 5918.52 L527.86 5916.91 L526.60 5914.75 L525.41 5913.28 L523.97 5911.81 L522.34 5910.56 L520.46 5909.23 L518.57 5908.25 L516.57 5907.13 L514.56 5906.30 L512.42 5905.46 L510.23 5904.69 L507.97 5904.06 L506.90 5903.71 L504.71 5903.08 L501.07 5902.24 L498.68 5901.75 L496.42 5901.26 L494.17 5900.77 L491.84 5900.08 L490.97 5899.72 L487.89 5898.89 L484.94 5898.05 L482.75 5897.49 L480.74 5896.93 L478.35 5896.37 L474.65 5895.60 L472.33 5895.11 L469.95 5894.69 L467.56 5894.27 L465.30 5893.99 L462.92 5893.64 L460.85 5893.50 L458.78 5893.50 L457.15 5893.44 L455.51 5893.44 L452.00 5893.57 L447.61 5893.71 L446.23 5893.86 L443.47 5893.99 L440.64 5894.27 L438.07 5894.48 L435.37 5894.76 L432.93 5895.04 L430.79 5895.18 L428.97 5895.32 L426.28 5895.67 L423.58 5895.88 L422.20 5896.02 L418.18 5896.51 L415.36 5896.86 L412.66 5897.21 L410.09 5897.56 L407.39 5897.98 L404.82 5898.33 L402.31 5898.75 L399.67 5899.17 L398.42 5899.31 L395.91 5899.72 L393.46 5900.14 L391.08 5900.56 L389.07 5900.84 L387.37 5900.98 L385.74 5901.26 L384.24 5901.26 L381.54 5901.47 L380.28 5901.47 L379.09 5901.61 L377.08 5901.61 L373.44 5901.68 L371.37 5901.68 L369.43 5901.68 L367.73 5901.68 L365.22 5901.47 L363.09 5901.47 L361.21 5901.40 L359.51 5901.33 L357.95 5901.33 L355.06 5901.26 L352.24 5901.19 L349.41 5901.05 L346.53 5900.98 L343.77 5900.91 L340.88 5900.84 L339.50 5900.63 L334.98 5900.42 L332.03 5900.21 L329.21 5900.01 L326.26 5899.79 L323.25 5899.66 L320.30 5899.51 L317.48 5899.31 L314.53 5899.02 L311.83 5898.89 L310.38 5898.82 L307.69 5898.61 L305.05 5898.54 L301.16 5898.19 L298.46 5897.98 L295.77 5897.77 L293.19 5897.56 L290.62 5897.35 L288.55 5897.28 L284.97 5896.93 L282.53 5896.72 L280.46 5896.44 L272.99 5895.74 L271.73 5895.67 L270.48 5895.60 L266.97 5895.53 L265.65 5895.53 L262.95 5895.67 L260.19 5896.09 L257.49 5896.93 L254.79 5898.33 L251.91 5900.01 L251.91 5900.01" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M655.80 5897.77 L655.17 5897.14 L655.55 5896.09 L657.62 5893.50 L659.37 5891.62 L661.88 5889.52 L665.02 5887.42 L668.97 5884.91 L671.42 5883.72 L676.57 5881.42 L682.21 5879.32 L688.30 5877.50 L694.38 5875.90 L700.28 5874.50 L705.74 5873.52 L713.08 5872.47 L717.73 5871.98 L719.92 5871.77 L723.69 5871.56 L727.26 5871.49 L730.40 5871.42 L733.35 5871.42 L734.60 5871.49 L736.68 5871.49 L738.37 5871.49 L739.81 5871.56 L741.44 5871.56 L742.70 5871.56 L743.89 5871.42 L743.89 5871.42" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M740.44 5855.91 L741.44 5855.28 L742.51 5855.49 L745.46 5856.54 L747.84 5857.72 L749.91 5859.26 L751.73 5861.01 L753.05 5863.04 L753.55 5864.15 L754.18 5866.46 L754.24 5868.56 L753.68 5871.07 L752.49 5873.66 L750.54 5876.52 L746.34 5880.93 L743.20 5883.65 L740.13 5885.89 L738.87 5886.66 L738.87 5886.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="794.46" y="5880.52" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="794.46" dy="0">liệu có command injection</tspan><tspan x="794.46" dy="25">Local File inclusion</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1064.83 5880.37 L1063.70 5880.51 L1063.26 5879.60 L1063.70 5878.48 L1064.52 5877.78 L1065.71 5877.64 L1066.90 5878.06 L1067.53 5878.83 L1067.66 5881.28 L1067.22 5882.53 L1065.84 5884.98 L1062.76 5888.89 L1060.06 5891.55 L1057.24 5894.06 L1054.54 5896.37 L1052.35 5898.33 L1050.40 5899.93 L1048.89 5901.26 L1047.89 5902.24 L1047.14 5902.94 L1047.14 5902.94" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1040.24 5924.95 L1039.29 5925.93 L1038.54 5926.63 L1037.79 5927.47 L1037.79 5927.47" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M798.23 6117.27 L797.16 6116.85 L796.22 6116.36 L794.84 6115.81 L792.33 6115.17 L789.57 6114.41 L786.43 6113.64 L782.73 6112.87 L778.53 6112.17 L776.39 6111.89 L771.81 6111.26 L767.04 6110.77 L762.28 6110.49 L755.00 6110.42 L750.10 6110.56 L745.08 6111.12 L742.57 6111.47 L737.62 6112.38 L732.78 6113.43 L728.33 6114.75 L724.19 6116.15 L720.36 6117.69 L717.04 6119.30 L714.34 6120.70 L713.21 6121.46 L710.26 6123.84 L708.75 6125.52 L707.75 6127.19 L707.31 6128.73 L707.31 6130.27 L707.56 6131.60 L708.75 6133.77 L709.44 6134.88 L711.51 6137.05 L714.65 6139.15 L718.54 6141.31 L723.75 6143.34 L733.60 6146.21 L741.76 6147.74 L750.23 6149.14 L754.62 6149.63 L763.59 6150.40 L772.94 6150.88 L782.48 6151.37 L792.08 6151.72 L801.68 6152.07 L811.15 6152.42 L820.57 6152.77 L825.33 6152.91 L834.75 6153.33 L848.49 6154.03 L856.46 6154.45 L864.30 6154.87 L872.14 6155.22 L879.80 6155.50 L883.56 6155.71 L890.65 6156.13 L897.43 6156.55 L903.39 6156.90 L908.78 6157.31 L913.87 6157.66 L921.02 6157.94 L925.16 6157.94 L927.17 6157.88 L931.06 6157.73 L934.70 6157.39 L938.21 6156.97 L941.41 6156.41 L944.36 6155.78 L947.18 6155.22 L949.88 6154.59 L951.14 6154.24 L953.65 6153.68 L957.10 6152.77 L958.17 6152.49 L959.80 6152.01 L961.18 6151.51 L962.24 6150.95 L963.12 6150.40 L963.69 6149.63 L964.19 6148.44 L963.88 6146.34 L962.62 6143.55 L958.54 6138.73 L954.34 6135.37 L951.83 6133.62 L945.43 6129.99 L936.64 6125.94 L925.66 6121.81 L914.43 6118.04 L902.89 6114.62 L891.15 6111.26 L879.36 6108.05 L873.46 6106.58 L861.48 6103.85 L844.78 6101.13 L831.73 6099.73 L820.75 6098.82 L807.83 6098.26 L797.41 6098.19 L787.37 6098.47 L782.54 6098.68 L773.44 6099.45 L765.60 6100.43 L758.82 6101.55 L752.86 6102.95 L748.22 6103.99 L746.28 6104.69 L746.28 6104.69" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M874.40 6167.52 L874.90 6166.68 L875.40 6165.84 L875.15 6167.52 L874.40 6169.61 L873.65 6171.99 L872.96 6174.44 L872.39 6176.95 L872.14 6179.40 L872.02 6181.42 L872.64 6184.36 L873.65 6186.53 L875.22 6188.55 L877.35 6190.37 L882.06 6192.82 L885.76 6194.01 L887.83 6194.56 L891.91 6195.33 L895.73 6195.89 L899.44 6196.31 L903.14 6196.59 L906.59 6196.73 L909.98 6196.87 L912.99 6196.87 L916.06 6196.73 L918.64 6196.66 L920.83 6196.59 L922.65 6196.52 L924.09 6196.24 L925.16 6195.96 L925.16 6195.96" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M923.91 6184.78 L924.47 6187.15 L925.41 6189.18 L926.42 6191.21 L927.29 6193.37 L927.80 6195.54 L928.05 6196.59 L928.05 6198.41 L927.29 6200.85 L925.85 6203.16 L923.47 6205.61 L920.33 6207.77 L914.62 6210.42 L910.67 6211.33 L909.04 6211.41 L907.47 6211.33 L907.47 6211.33" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="947.06" y="6219.17" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="947.06" dy="0">cái này là gì ?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M875.47 5172.35 L876.47 5172.70 L876.41 5175.15 L875.72 5178.08 L874.90 5181.71 L874.02 5185.77 L873.52 5189.89 L873.40 5193.73 L873.46 5197.65 L874.02 5201.42 L874.65 5203.31 L876.22 5206.80 L878.67 5209.81 L884.25 5213.23 L889.46 5214.84 L894.73 5215.68 L900.25 5215.96 L905.84 5215.75 L908.53 5215.61 L916.31 5214.70 L924.66 5213.23 L926.23 5212.88 L929.05 5212.39 L931.37 5211.91 L932.88 5211.62 L934.01 5211.42 L934.01 5211.42" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M931.12 5201.49 L930.56 5200.86 L931.56 5200.51 L932.50 5201.00 L934.95 5203.31 L936.14 5205.13 L936.77 5207.43 L936.96 5208.55 L936.96 5210.65 L936.27 5213.44 L935.01 5216.38 L932.88 5219.59 L930.31 5222.45 L927.42 5224.97 L922.90 5227.07 L922.90 5227.07" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="962.94" y="5213.87" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="962.94" dy="0">cái này là lỗi config --&gt; bật caí này là vào</tspan><tspan x="962.94" dy="25">index là nó phun hết cấu trúc thư mục ra</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M422.57 6601.54 L421.88 6602.17 L422.45 6603.08 L423.83 6603.36 L426.21 6603.43 L429.16 6603.08 L432.24 6602.52 L435.44 6601.75 L438.82 6600.85 L440.71 6600.15 L445.41 6598.47 L448.36 6597.00 L450.87 6595.67 L453.26 6594.07 L455.26 6592.46 L457.15 6590.71 L458.71 6589.03 L460.28 6587.36 L460.91 6586.52 L462.16 6585.05 L463.23 6583.86 L464.61 6582.54 L466.56 6580.79 L468.19 6579.46 L469.95 6578.20 L471.70 6577.22 L473.40 6576.18 L474.84 6575.48 L476.28 6574.85 L477.47 6574.36 L478.48 6574.01 L479.80 6573.59 L481.11 6573.31 L482.49 6573.17 L483.69 6572.89 L483.69 6572.89" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M484.88 6566.18 L485.69 6565.34 L487.01 6565.34 L488.71 6565.83 L490.84 6566.53 L492.97 6567.37 L494.48 6568.28 L496.30 6570.17 L496.61 6571.07 L496.55 6572.61 L495.42 6574.99 L494.10 6576.94 L492.28 6578.76 L491.28 6579.60 L489.27 6581.00 L488.33 6581.77 L488.33 6581.77" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M536.83 6570.45 L537.08 6569.05 L537.15 6567.58 L536.64 6566.81 L535.58 6566.67 L534.57 6567.02 L532.94 6568.00 L531.44 6569.12 L529.80 6570.87 L529.24 6571.98 L528.80 6573.03 L528.67 6574.15 L528.93 6575.27 L530.18 6575.27 L530.87 6574.57 L531.50 6573.66 L532.38 6571.84 L532.94 6570.38 L533.38 6569.26 L533.88 6568.21 L533.88 6569.47 L534.20 6570.45 L534.89 6571.29 L535.83 6571.63 L537.02 6571.49 L537.84 6571.07 L538.59 6570.45 L539.28 6569.54 L539.78 6568.70 L539.97 6569.96 L540.47 6570.80 L541.16 6571.56 L541.73 6572.26 L542.42 6572.82 L542.42 6572.82" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M543.23 6567.02 L542.73 6567.86 L542.29 6568.98 L542.04 6570.23 L541.98 6571.56 L542.04 6572.89 L542.42 6574.01 L543.04 6574.71 L544.49 6574.71 L545.43 6574.15 L546.18 6573.66 L546.18 6573.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M548.63 6569.40 L548.63 6568.14 L548.13 6568.98 L548.06 6570.17 L548.06 6571.63 L548.06 6573.17 L548.06 6574.50 L548.31 6575.62 L548.31 6575.62" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M557.91 6562.62 L557.41 6563.74 L556.72 6565.69 L556.47 6566.67 L556.22 6568.21 L556.03 6569.61 L555.91 6571.07 L555.78 6572.33 L555.66 6573.66 L555.22 6574.71 L554.46 6574.15 L554.02 6573.24 L554.46 6572.40 L555.15 6571.84 L557.60 6570.23 L559.55 6568.84 L561.49 6567.58 L562.37 6566.81 L564.19 6565.34 L565.76 6563.81 L566.51 6562.97 L567.64 6561.71 L568.46 6560.52 L568.96 6559.62 L569.40 6558.43 L569.33 6557.24 L568.46 6556.82 L567.64 6557.24 L565.95 6558.78 L565.07 6559.69 L563.56 6561.78 L562.24 6564.23 L560.67 6568.14 L559.92 6570.65 L559.42 6573.10 L559.17 6574.99 L559.04 6576.60 L559.04 6578.20 L559.17 6579.32 L560.05 6579.74 L560.93 6579.04 L561.49 6578.34 L561.99 6577.58 L562.56 6576.60 L563.12 6575.69 L563.81 6576.45 L563.81 6577.92 L563.87 6579.39 L564.06 6580.58 L565.00 6581.07 L566.01 6580.44 L567.01 6579.46 L567.64 6578.83 L568.52 6577.58 L569.15 6576.60 L569.65 6575.76 L570.09 6574.78 L569.40 6575.62 L568.96 6576.74 L568.71 6577.99 L568.20 6579.74 L567.95 6581.28 L567.76 6582.54 L567.89 6584.07 L568.27 6584.98 L569.15 6585.47 L570.21 6585.12 L570.90 6584.35 L571.40 6583.31 L571.72 6582.12 L571.91 6580.93 L571.91 6580.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M575.48 6584.28 L576.30 6583.51 L577.93 6581.63 L579.25 6579.46 L580.38 6577.29 L581.19 6575.48 L581.69 6574.01 L582.01 6572.89 L581.95 6571.56 L581.00 6571.14 L580.25 6571.84 L580.13 6573.10 L580.44 6574.29 L580.75 6575.27 L581.26 6576.18 L581.88 6577.22 L582.45 6578.20 L583.14 6579.18 L583.70 6580.02 L584.33 6580.79 L585.02 6581.42 L585.65 6582.19 L586.53 6582.74 L587.72 6582.89 L588.60 6582.47 L590.67 6580.51 L591.92 6579.04 L592.74 6577.99 L593.43 6577.16 L594.12 6576.18 L593.87 6577.22 L593.62 6578.41 L593.36 6579.74 L593.18 6581.21 L593.11 6582.54 L593.11 6584.07 L593.11 6584.07" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M594.18 6567.58 L594.18 6567.58" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M603.53 6573.59 L602.96 6572.82 L603.22 6571.63 L604.28 6571.84 L605.22 6572.12 L606.10 6572.75 L606.67 6573.52 L606.98 6574.71 L606.98 6576.03 L606.42 6578.90 L605.47 6581.91 L605.04 6583.38 L604.66 6584.49 L604.41 6585.82 L604.28 6587.08 L605.04 6587.92 L606.10 6588.20 L608.93 6588.27 L612.82 6587.64 L615.33 6587.01 L617.46 6585.96 L619.40 6584.77 L620.72 6583.31 L621.22 6582.54 L621.85 6580.93 L622.10 6579.46 L622.10 6578.13 L621.85 6577.16 L621.22 6575.97 L620.47 6575.34 L619.15 6575.62 L618.53 6576.39 L618.15 6577.29 L618.15 6578.76 L618.71 6579.74 L619.47 6580.79 L620.97 6582.12 L622.60 6582.96 L625.49 6583.86 L625.49 6583.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M640.67 6587.01 L641.49 6587.50 L641.49 6587.50" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260829215909_804.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829215909_804.png"><g transform="translate(-162.80,29.87)">
<image x="1112.9018191914963" y="6619.4994705613735" width="427.4589917742211" height="209.31764849494542" href="../0-asset/pasted-image-20260829215909_804.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M941.66 6905.89 L941.41 6907.01 L941.22 6908.19 L941.22 6908.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1234.87 6720.28 L1235.12 6721.67 L1235.87 6723.21 L1237.57 6724.96 L1239.76 6726.71 L1242.65 6728.38 L1245.91 6729.85 L1249.43 6731.39 L1252.94 6732.58 L1256.08 6733.49 L1257.65 6733.91 L1262.10 6734.95 L1263.55 6735.09 L1266.43 6735.44 L1268.63 6735.51 L1270.51 6735.37 L1270.51 6735.37" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1276.66 6724.68 L1276.78 6723.56 L1277.98 6723.63 L1279.17 6724.26 L1280.17 6725.24 L1281.36 6726.85 L1281.93 6728.38 L1282.18 6729.85 L1282.12 6731.32 L1281.18 6734.18 L1279.98 6736.28 L1278.35 6738.31 L1276.22 6740.19 L1272.83 6742.43 L1270.64 6743.55 L1268.94 6744.25 L1268.94 6744.25" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1296.31" y="6752.43" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1296.31" dy="0">ko có gì đặc biệt</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M271.48 6708.95 L272.61 6708.40 L273.68 6708.18 L276.69 6708.25 L278.76 6708.95 L281.02 6709.51 L284.16 6710.56 L286.35 6711.26 L288.55 6711.96 L290.81 6712.73 L293.26 6713.50 L295.83 6714.27 L298.53 6714.89 L299.97 6715.24 L302.86 6715.66 L305.87 6716.08 L309.00 6716.43 L312.20 6716.71 L317.35 6716.92 L320.93 6717.13 L324.44 6717.20 L328.08 6717.34 L329.84 6717.48 L333.29 6717.69 L336.67 6717.97 L339.87 6718.18 L343.01 6718.53 L345.96 6718.88 L348.85 6719.23 L351.61 6719.58 L355.62 6719.92 L357.95 6720.00 L360.02 6720.00 L363.22 6719.92 L365.54 6719.78 L367.36 6719.65 L369.05 6719.43 L370.43 6719.30 L371.69 6719.02 L372.88 6718.81 L374.01 6718.53 L376.64 6717.69 L378.09 6717.13 L379.15 6716.50 L380.09 6715.94 L380.85 6715.24 L381.47 6714.62 L382.16 6713.56 L382.42 6712.59 L381.54 6710.35 L379.03 6707.91 L376.83 6706.30 L374.32 6704.97 L371.18 6703.64 L367.73 6702.45 L365.85 6701.96 L362.15 6700.78 L358.26 6699.80 L354.06 6698.96 L349.73 6698.33 L345.27 6697.70 L340.88 6697.28 L336.36 6696.93 L329.84 6696.65 L327.64 6696.44 L323.69 6696.23 L319.55 6695.89 L315.66 6695.32 L312.14 6694.77 L308.69 6694.21 L305.30 6693.51 L301.91 6692.88 L298.53 6692.32 L296.89 6692.04 L291.75 6691.55 L288.30 6691.62 L284.72 6691.90 L281.08 6692.60 L277.19 6693.44 L273.49 6694.49 L269.85 6695.82 L266.40 6697.07 L263.39 6698.19 L262.01 6698.82 L259.50 6700.01 L256.05 6701.83 L254.10 6703.08 L252.41 6704.48 L250.96 6705.74 L250.09 6706.86 L249.46 6707.83 L249.02 6708.82 L248.96 6710.21 L249.33 6711.47 L251.59 6714.47 L253.66 6715.94 L256.36 6717.27 L260.13 6718.46 L264.77 6719.23 L267.34 6719.43 L272.93 6719.65 L279.77 6719.43 L283.15 6719.16 L283.15 6719.16" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1006.23 6709.72 L1007.04 6709.16 L1010.18 6710.28 L1013.07 6711.40 L1016.52 6713.08 L1019.97 6715.10 L1023.55 6717.55 L1025.18 6718.88 L1028.94 6722.16 L1032.64 6725.80 L1036.09 6729.57 L1039.29 6733.62 L1043.81 6739.77 L1046.89 6744.11 L1049.58 6748.44 L1052.22 6752.77 L1053.47 6754.94 L1055.80 6759.06 L1057.93 6762.97 L1059.94 6766.82 L1062.07 6770.52 L1064.08 6774.16 L1066.21 6777.44 L1068.16 6780.58 L1071.11 6784.78 L1071.92 6785.96 L1073.62 6788.20 L1075.31 6790.09 L1076.63 6791.98 L1078.01 6793.65 L1078.57 6794.35 L1079.58 6795.54 L1080.39 6796.45 L1081.02 6797.22 L1081.65 6797.85 L1082.40 6798.62 L1083.22 6799.38 L1083.97 6800.15 L1084.72 6800.71 L1085.85 6800.43 L1085.85 6800.43" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1085.91 6787.43 L1085.85 6788.69 L1086.10 6789.81 L1086.42 6790.92 L1086.79 6792.25 L1086.86 6793.72 L1086.16 6798.12 L1084.91 6801.13 L1082.96 6804.20 L1080.39 6807.07 L1077.57 6809.65 L1074.68 6812.10 L1071.98 6814.20 L1069.79 6815.67 L1068.78 6816.02 L1068.78 6816.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1085.10" y="6833.22" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1085.10" dy="0">ko có phản hồi</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M490.90 6739.39 L491.53 6740.16 L491.53 6740.16" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M309.13 6743.51 L307.75 6743.09 L306.37 6742.60 L305.49 6742.25 L302.92 6741.20 L300.60 6740.51 L298.15 6739.81 L294.07 6738.97 L292.75 6738.69 L289.80 6738.34 L286.73 6738.34 L283.47 6738.48 L280.14 6738.76 L276.94 6739.32 L273.87 6739.87 L270.73 6740.64 L267.59 6741.48 L266.02 6741.97 L262.95 6743.09 L258.56 6744.77 L255.80 6745.82 L254.48 6746.31 L248.46 6749.17 L246.32 6750.29 L245.32 6750.78 L243.81 6751.62 L242.75 6752.25 L241.87 6752.87 L241.18 6753.44 L240.61 6754.27 L240.42 6755.39 L240.80 6756.30 L242.62 6758.53 L244.50 6759.79 L246.76 6761.05 L249.46 6762.17 L252.41 6763.08 L256.11 6764.06 L260.13 6764.82 L266.34 6766.01 L268.53 6766.36 L272.86 6767.06 L277.13 6767.62 L281.21 6768.18 L284.78 6768.67 L288.36 6768.95 L291.62 6769.30 L295.01 6769.58 L298.21 6769.72 L301.41 6769.79 L302.92 6769.93 L306.06 6769.93 L310.38 6770.00 L311.64 6770.07 L315.28 6770.14 L317.54 6770.14 L319.55 6770.20 L321.43 6770.20 L323.69 6770.35 L325.13 6770.42 L328.02 6770.49 L330.59 6770.56 L332.91 6770.62 L334.79 6770.62 L336.61 6770.77 L339.69 6770.84 L342.07 6770.84 L344.02 6770.84 L345.71 6770.84 L347.28 6770.77 L350.79 6770.49 L352.86 6770.35 L354.75 6770.07 L356.19 6769.79 L357.51 6769.58 L358.70 6769.30 L359.77 6769.09 L361.15 6768.67 L362.90 6767.97 L363.78 6767.55 L365.16 6766.78 L366.29 6766.01 L367.11 6765.24 L367.73 6764.47 L368.11 6763.64 L368.24 6762.38 L366.73 6759.44 L364.85 6757.35 L362.15 6755.04 L358.89 6752.95 L355.06 6750.92 L350.42 6749.17 L345.27 6747.49 L339.62 6746.03 L336.74 6745.47 L327.64 6743.86 L321.30 6743.02 L314.84 6742.18 L308.50 6741.55 L302.60 6741.13 L299.91 6741.06 L299.91 6741.06" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M532.82 6762.03 L531.56 6761.89 L530.49 6761.75 L531.56 6761.89 L534.95 6762.38 L538.90 6763.01 L541.35 6763.43 L547.12 6764.20 L553.58 6765.04 L560.36 6765.73 L567.20 6766.78 L573.85 6767.62 L580.50 6768.46 L586.90 6769.30 L593.18 6770.14 L601.08 6771.04 L606.04 6771.75 L610.37 6772.23 L612.19 6772.51 L615.51 6772.86 L618.34 6773.28 L619.66 6773.42 L621.66 6773.70 L623.11 6773.98 L624.24 6774.12 L625.62 6774.26 L626.87 6774.40 L628.13 6774.47 L628.13 6774.47" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M778.71 6790.40 L778.02 6789.77 L778.53 6789.00 L779.72 6788.93 L780.97 6788.86 L785.24 6789.00 L788.06 6789.15 L790.64 6789.28 L793.21 6789.42 L794.53 6789.57 L797.10 6789.77 L799.67 6790.05 L801.87 6790.33 L804.50 6790.54 L805.82 6790.75 L807.95 6790.96 L809.90 6791.17 L813.10 6791.45 L814.42 6791.73 L815.61 6791.80 L819.18 6792.15 L820.25 6792.29 L823.64 6792.57 L826.27 6792.78 L828.85 6792.92 L830.98 6793.06 L832.93 6793.20 L835.12 6793.34 L836.38 6793.41 L838.57 6793.48 L841.71 6793.76 L842.84 6793.83 L844.97 6794.04 L846.86 6794.18 L848.42 6794.25 L849.93 6794.46 L853.13 6794.73 L855.07 6795.02 L858.27 6795.37 L859.66 6795.50 L860.91 6795.71 L863.29 6796.13 L865.11 6796.34 L866.81 6796.62 L868.31 6796.76 L871.45 6797.32 L873.40 6797.60 L875.09 6797.81 L876.60 6797.95 L878.04 6798.16 L881.30 6798.58 L883.69 6798.93 L885.88 6799.14 L887.83 6799.35 L891.34 6799.77 L893.91 6799.91 L895.04 6799.98 L897.24 6800.05 L900.56 6800.33 L903.07 6800.40 L906.40 6800.60 L908.28 6800.67 L912.05 6800.82 L914.37 6800.95 L916.44 6800.95 L918.26 6801.02 L919.89 6801.02 L922.65 6801.02 L925.16 6800.95 L926.42 6800.95 L928.61 6800.82 L930.49 6800.82 L932.19 6800.67 L935.07 6800.47 L937.15 6800.26 L938.90 6800.05 L940.47 6799.84 L941.79 6799.63 L942.98 6799.42 L945.37 6798.93 L947.37 6798.23 L949.13 6797.74 L950.51 6797.18 L951.83 6796.69 L952.96 6796.27 L954.02 6795.86 L955.47 6795.15 L956.91 6794.46 L958.10 6793.76 L958.98 6793.06 L959.67 6792.50 L960.55 6791.66 L961.05 6790.82 L961.36 6789.77 L961.30 6788.58 L960.93 6787.68 L960.36 6786.77 L959.23 6785.09 L957.79 6783.48 L956.22 6782.02 L954.59 6780.69 L952.96 6779.43 L950.89 6778.31 L948.82 6777.13 L946.43 6776.07 L943.98 6775.03 L941.35 6774.19 L938.78 6773.21 L935.95 6772.37 L933.00 6771.39 L930.18 6770.49 L928.55 6770.07 L925.54 6769.23 L920.77 6767.90 L917.57 6767.13 L914.12 6766.22 L910.67 6765.52 L907.03 6764.69 L903.58 6763.98 L900.13 6763.36 L898.37 6763.01 L894.98 6762.31 L891.72 6761.61 L888.39 6761.05 L885.19 6760.42 L880.30 6759.58 L876.91 6759.30 L873.58 6758.95 L870.26 6758.60 L868.69 6758.53 L865.37 6758.26 L862.29 6758.12 L859.22 6757.84 L856.27 6757.70 L853.32 6757.49 L850.43 6757.35 L847.67 6757.14 L843.40 6757.00 L842.02 6756.93 L839.26 6756.93 L837.95 6756.93 L834.24 6756.93 L831.67 6756.93 L828.85 6757.07 L827.72 6757.14 L825.58 6757.28 L823.70 6757.35 L820.75 6757.70 L819.44 6757.84 L815.61 6758.33 L813.29 6758.60 L812.03 6758.89 L808.52 6759.37 L806.57 6759.58 L805.00 6759.93 L803.50 6760.21 L802.24 6760.35 L799.42 6761.05 L797.73 6761.40 L796.35 6761.75 L795.15 6762.03 L794.02 6762.38 L793.02 6762.73 L792.02 6763.08 L791.07 6763.43 L789.82 6764.06 L789.00 6764.62 L787.56 6765.31 L786.37 6766.08 L785.43 6766.85 L784.61 6767.62 L783.86 6768.39 L783.23 6769.09 L782.48 6770.00 L781.91 6770.97 L781.41 6772.02 L781.04 6773.21 L780.97 6774.47 L781.41 6776.07 L782.23 6778.17 L783.48 6780.13 L784.24 6780.97 L785.93 6782.71 L788.88 6785.02 L790.89 6786.28 L792.83 6787.47 L794.90 6788.51 L796.91 6789.35 L797.91 6789.77 L797.91 6789.77" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260829220217_061.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829220217_061.png"><g transform="translate(-162.80,29.87)">
<image x="1078.0942975277314" y="6863.137661335735" width="553.3211431016848" height="322.2217371038582" href="../0-asset/pasted-image-20260829220217_061.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1365.95 6990.50 L1364.69 6990.78 L1363.25 6991.06 L1362.06 6991.41 L1364.56 6991.62 L1367.95 6991.47 L1371.84 6991.20 L1376.36 6991.06 L1380.88 6990.92 L1385.15 6990.78 L1389.10 6990.78 L1392.55 6990.78 L1395.69 6990.78 L1396.94 6990.78 L1398.89 6990.78 L1400.33 6990.71 L1400.33 6990.71" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1372.53 6994.90 L1371.34 6995.32 L1370.40 6995.74 L1370.97 6996.86 L1372.16 6997.14 L1375.11 6997.28 L1376.55 6997.28 L1379.94 6997.21 L1383.33 6996.92 L1386.84 6996.51 L1390.23 6996.09 L1393.43 6995.53 L1396.38 6994.90 L1398.82 6994.13 L1400.02 6993.71 L1400.83 6993.29 L1400.83 6993.29" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1401.96 6980.09 L1402.46 6979.25 L1403.22 6978.55 L1404.41 6977.99 L1405.66 6977.85 L1406.73 6978.20 L1407.92 6979.18 L1408.49 6979.80 L1409.18 6981.27 L1409.55 6982.74 L1408.86 6986.16 L1407.36 6989.03 L1404.97 6992.11 L1401.96 6995.39 L1398.32 6998.25 L1396.13 6999.58 L1396.13 6999.58" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1412.13" y="7007.35" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="1412.13" dy="0">directory listing</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M310.89 6771.82 L310.57 6770.77 L310.13 6769.93 L309.26 6769.16 L308.44 6768.54 L307.50 6768.12 L305.24 6767.28 L302.54 6766.44 L299.47 6765.74 L296.02 6765.11 L291.87 6764.62 L287.55 6764.20 L282.78 6764.06 L275.44 6764.27 L272.99 6764.41 L268.28 6765.04 L263.76 6765.60 L259.50 6766.37 L255.80 6767.07 L252.60 6767.91 L249.84 6768.74 L247.39 6769.58 L245.26 6770.56 L243.50 6771.75 L242.75 6772.45 L241.30 6774.41 L240.74 6775.73 L240.49 6776.99 L240.49 6778.32 L240.99 6780.28 L241.74 6782.58 L243.00 6784.82 L244.56 6786.91 L245.51 6788.03 L247.89 6790.06 L250.84 6792.02 L256.49 6794.46 L260.88 6795.79 L265.84 6796.91 L271.48 6797.61 L277.13 6797.89 L283.15 6797.96 L286.10 6797.89 L292.56 6797.61 L298.21 6797.33 L303.73 6796.98 L309.00 6796.49 L314.15 6796.07 L321.68 6795.16 L326.64 6794.60 L331.66 6793.90 L334.16 6793.62 L339.25 6792.78 L344.39 6791.88 L349.22 6791.04 L354.12 6790.20 L358.76 6789.29 L363.28 6788.45 L367.55 6787.62 L371.62 6786.78 L375.33 6786.08 L378.59 6785.45 L381.79 6784.82 L384.74 6784.12 L387.44 6783.56 L389.88 6782.86 L390.89 6782.58 L392.58 6781.95 L393.90 6781.46 L394.90 6780.76 L395.53 6780.21 L396.03 6779.16 L395.72 6777.69 L394.46 6776.08 L392.33 6774.41 L389.13 6772.52 L385.18 6770.77 L379.72 6768.89 L373.38 6767.14 L369.99 6766.30 L362.40 6764.83 L353.87 6763.78 L344.77 6763.02 L330.46 6762.74 L320.86 6763.16 L311.58 6763.99 L302.79 6765.32 L294.51 6767.07 L290.62 6768.05 L290.62 6768.05" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="206.55" y="8103.69" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="206.55" dy="0">Ok bây giờ mình sẽ hỏi con AI các câu hỏi mà mình vẫn còn bỏ ngỏ</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M408.77 8150.32 L409.08 8151.44 L409.08 8151.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M308.75 8128.79 L308.94 8127.47 L307.56 8129.49 L306.37 8132.22 L305.05 8135.92 L302.67 8142.21 L301.35 8146.40 L300.66 8148.50 L299.40 8152.62 L298.46 8156.19 L297.77 8159.33 L297.27 8162.06 L297.08 8164.22 L297.21 8165.76 L297.58 8166.95 L299.03 8168.77 L299.91 8169.33 L302.17 8170.44 L304.86 8171.07 L308.25 8171.63 L312.02 8171.84 L315.97 8171.84 L319.80 8171.70 L323.50 8171.42 L326.95 8171.21 L330.15 8170.86 L331.59 8170.66 L334.98 8170.24 L336.49 8170.09 L336.49 8170.09" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M334.29 8158.35 L333.48 8157.73 L334.23 8159.19 L335.55 8161.01 L336.80 8162.83 L337.43 8163.95 L338.49 8167.30 L338.49 8169.75 L337.74 8172.61 L335.92 8176.11 L332.78 8180.23 L328.83 8184.28 L324.44 8188.13 L319.73 8191.41 L317.29 8192.81 L317.29 8192.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="357.14" y="8183.60" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="357.14" dy="0">đầu tiên 2 cái mình nghi nhất là pathtravelser, LFI, RFI thì nó sẽ vô dụng nếu mình ko vượt qua được cổng đăng nhập</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M450.75 8191.62 L449.99 8190.99 L448.49 8192.60 L447.23 8194.97 L445.85 8198.12 L444.60 8201.68 L443.40 8205.67 L442.53 8209.58 L441.77 8213.28 L441.15 8216.64 L440.71 8221.53 L440.64 8224.53 L440.89 8227.33 L441.15 8228.59 L442.02 8231.04 L443.34 8233.27 L445.22 8235.09 L447.55 8236.55 L450.62 8237.53 L454.38 8238.09 L458.84 8238.09 L463.92 8237.81 L471.26 8236.84 L475.72 8236.27 L479.80 8235.71 L483.06 8235.16 L486.01 8234.74 L487.20 8234.60 L489.21 8234.32 L490.65 8234.25 L491.78 8234.11 L491.78 8234.11" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M486.51 8218.24 L486.89 8217.13 L487.95 8217.76 L490.09 8219.22 L492.41 8221.18 L494.79 8223.56 L496.68 8226.14 L498.06 8228.94 L498.87 8232.08 L498.87 8235.44 L498.06 8239.21 L495.98 8243.61 L489.65 8251.16 L482.31 8257.10 L482.31 8257.10" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="523.29" y="8227.90" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="523.29" dy="0">phải byppass cái cổng đăng nhập đã,</tspan><tspan x="523.29" dy="25">có cấu trúc thư mục, thử vượt qua</tspan><tspan x="523.29" dy="25">bằng cách authorise cũng ko được </tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M880.36 8255.15 L880.55 8256.26 L883.18 8256.40 L886.51 8256.05 L893.29 8255.35 L898.37 8254.73 L903.77 8254.02 L909.41 8253.19 L915.06 8252.49 L919.95 8251.65 L924.47 8250.88 L928.55 8250.18 L931.75 8249.62 L933.19 8249.34 L935.77 8248.71 L937.71 8248.29 L939.15 8248.02 L939.15 8248.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M934.38 8235.86 L934.13 8234.53 L934.51 8233.55 L937.08 8234.53 L938.65 8236.27 L940.16 8238.65 L941.29 8241.52 L941.85 8244.52 L942.04 8247.74 L941.41 8251.09 L939.91 8254.79 L937.21 8258.64 L933.26 8262.48 L928.36 8265.63 L925.66 8267.02 L925.66 8267.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="988.23" y="8264.31" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="988.23" dy="0">brutefoce</tspan><tspan x="988.23" dy="25"></tspan><tspan x="988.23" dy="25">SQL injection</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M956.35 8239.70 L955.59 8239.14 L954.84 8238.58 L956.28 8241.52 L957.04 8244.31 L957.47 8247.38 L957.54 8250.88 L957.41 8254.31 L957.22 8256.05 L956.53 8259.62 L955.78 8262.97 L954.84 8266.18 L953.84 8269.05 L952.33 8272.55 L951.89 8273.45 L951.20 8274.78 L950.64 8275.62 L949.95 8276.39 L949.38 8277.16 L950.20 8277.58 L950.95 8278.07 L953.84 8280.51 L955.34 8282.40 L956.60 8284.42 L957.79 8286.80 L958.67 8289.25 L959.23 8291.97 L959.55 8294.84 L959.73 8297.91 L959.55 8301.27 L959.29 8304.62 L958.92 8308.11 L958.42 8313.36 L958.04 8316.71 L957.98 8320.00 L958.04 8321.60 L958.48 8324.54 L959.42 8327.33 L961.11 8329.85 L963.44 8331.95 L966.82 8333.69 L970.09 8334.39 L971.91 8334.67 L971.91 8334.67" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M864.68 8397.64 L865.55 8398.40 L866.49 8399.17 L866.49 8399.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M665.90 8469.55 L665.58 8468.64 L664.64 8468.15 L663.70 8467.66 L663.70 8467.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260829221209_118.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829221209_118.png"><g transform="translate(-162.80,29.87)">
<image x="419.00053120928317" y="8344.91595651613" width="1106.2336735403694" height="342.1664881268453" href="../0-asset/pasted-image-20260829221209_118.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M767.86 8488.35 L768.11 8487.30 L767.36 8486.74 L765.85 8486.53 L763.91 8486.46 L760.52 8486.32 L756.31 8486.11 L751.61 8486.04 L746.28 8486.04 L740.63 8486.04 L733.79 8486.25 L726.82 8486.53 L715.91 8487.30 L712.46 8487.58 L705.49 8488.27 L698.97 8489.11 L692.75 8490.09 L686.86 8491.21 L681.84 8492.19 L677.13 8493.31 L672.68 8494.42 L668.35 8495.68 L666.40 8496.24 L662.95 8497.36 L658.81 8498.69 L656.80 8499.46 L655.29 8500.02 L654.29 8500.78 L653.41 8501.76 L653.04 8502.60 L652.66 8503.58 L652.78 8504.91 L653.35 8506.80 L654.42 8509.10 L656.05 8511.34 L659.69 8514.55 L663.08 8516.58 L667.40 8518.60 L672.42 8520.63 L675.12 8521.47 L680.77 8523.15 L686.67 8524.75 L692.75 8526.08 L698.97 8527.34 L705.37 8528.46 L711.89 8529.23 L718.73 8530.00 L729.15 8530.76 L736.17 8531.18 L739.69 8531.26 L746.46 8531.39 L753.11 8531.67 L758.95 8531.67 L764.66 8531.81 L770.24 8532.02 L775.58 8532.09 L780.53 8532.23 L785.24 8532.30 L789.69 8532.58 L793.77 8532.58 L797.66 8532.65 L801.37 8532.65 L805.07 8532.58 L808.52 8532.51 L811.72 8532.23 L814.60 8531.88 L817.30 8531.46 L819.56 8530.84 L820.69 8530.42 L822.70 8529.36 L824.46 8528.04 L826.46 8525.31 L827.53 8523.22 L828.28 8520.84 L828.60 8518.75 L828.60 8516.72 L828.16 8514.13 L827.84 8512.80 L826.84 8510.01 L824.96 8506.86 L822.26 8503.65 L818.37 8500.22 L812.97 8496.45 L806.20 8492.75 L791.77 8487.30 L780.60 8484.71 L774.26 8483.66 L763.84 8482.40 L753.87 8481.78 L744.20 8481.64 L735.04 8482.27 L727.14 8483.17 L723.62 8483.80 L723.62 8483.80" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1123.62 8394.70 L1123.25 8393.65 L1124.82 8391.56 L1126.82 8388.69 L1129.21 8385.76 L1131.47 8382.68 L1132.53 8381.28 L1134.67 8378.35 L1137.62 8374.02 L1139.75 8371.08 L1141.82 8367.94 L1144.20 8364.58 L1146.65 8361.23 L1149.35 8357.73 L1151.86 8354.38 L1153.24 8352.77 L1155.81 8349.84 L1158.20 8347.11 L1160.02 8345.01 L1161.71 8343.27 L1163.66 8340.96 L1164.41 8340.05 L1165.10 8339.28 L1165.79 8338.44 L1166.48 8337.61 L1167.04 8336.91 L1167.61 8336.14 L1167.61 8336.14" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1157.07 8329.15 L1157.07 8327.82 L1159.20 8325.31 L1162.65 8323.07 L1164.28 8322.51 L1165.73 8322.23 L1166.98 8322.23 L1167.86 8322.65 L1168.74 8323.28 L1169.55 8324.61 L1170.24 8326.71 L1170.49 8327.82 L1170.49 8331.46 L1170.06 8334.39 L1169.24 8337.33 L1168.30 8340.40 L1168.30 8340.40" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1177.97" y="8326.09" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1177.97" dy="0">ko có rate limit==&gt; brute force ngon</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1281.91 8286.45 L1281.04 8286.87 L1280.03 8287.43 L1279.09 8287.85 L1278.27 8288.27 L1280.78 8286.24 L1283.54 8284.07 L1286.93 8281.77 L1291.14 8279.11 L1295.65 8276.60 L1297.91 8275.27 L1303.50 8272.33 L1306.76 8270.73 L1309.21 8269.54 L1311.40 8268.42 L1313.16 8267.51 L1314.42 8266.88 L1315.42 8266.40 L1316.30 8265.98 L1317.11 8265.27 L1317.11 8265.27" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1316.11 8255.84 L1316.36 8254.58 L1317.62 8254.51 L1320.50 8256.05 L1322.20 8257.94 L1323.39 8260.11 L1324.08 8262.69 L1324.20 8265.42 L1323.83 8268.49 L1321.94 8273.38 L1320.00 8276.74 L1317.55 8279.67 L1316.11 8281.07 L1314.60 8282.12 L1314.60 8282.12" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1337.32" y="8233.21" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1337.32" dy="0">con AI nó từ chối</tspan><tspan x="1337.32" dy="25">bruteforce==&gt; bây giờ</tspan><tspan x="1337.32" dy="25">mình brutefoce chay thôi</tspan></text>
</g>
<a href="../tools/template-fuff-dùng-cho-cổng-đăng-nhập" class="excalidraw-node-link" target="_self" title="template fuff dùng cho cổng đăng nhập"><g transform="translate(-162.80,29.87)">
<text x="1137.75" y="8110.84" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1137.75" dy="0">📍 template fuff dùng cho cổng đăng nhập</tspan></text>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1515.21 8227.96 L1516.46 8227.83 L1518.53 8227.13 L1522.11 8225.52 L1523.30 8224.89 L1525.87 8222.93 L1528.51 8220.28 L1531.02 8216.99 L1533.72 8212.66 L1536.29 8207.77 L1538.55 8202.67 L1539.55 8200.08 L1541.43 8194.84 L1542.94 8189.81 L1543.88 8184.99 L1544.38 8177.93 L1544.01 8173.46 L1543.13 8169.19 L1542.50 8167.24 L1540.99 8163.39 L1539.11 8159.90 L1537.10 8156.75 L1535.10 8153.82 L1533.21 8151.51 L1531.46 8149.35 L1529.76 8147.32 L1528.95 8146.41 L1527.32 8144.66 L1524.99 8142.15 L1523.55 8140.68 L1522.17 8139.15 L1520.73 8137.54 L1519.35 8136.00 L1518.66 8135.23 L1517.21 8133.76 L1516.52 8133.06 L1514.70 8131.32 L1513.14 8130.13 L1512.38 8129.64 L1511.06 8128.66 L1508.74 8127.33 L1507.74 8126.91 L1506.86 8126.49 L1505.79 8126.00 L1504.98 8125.58 L1504.04 8125.17 L1503.10 8124.75 L1502.22 8124.33 L1501.46 8123.70 L1501.46 8123.70" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1492.93 8133.76 L1492.55 8132.64 L1492.99 8131.53 L1494.19 8128.94 L1495.88 8124.96 L1497.07 8122.30 L1498.33 8119.58 L1499.39 8117.06 L1500.52 8114.75 L1501.34 8113.01 L1501.97 8111.68 L1502.47 8110.56 L1503.10 8109.44 L1503.79 8108.67 L1504.79 8108.40 L1505.67 8108.82 L1507.36 8110.49 L1509.18 8112.38 L1511.57 8115.10 L1514.20 8118.04 L1517.46 8121.32 L1520.66 8124.33 L1522.42 8126.00 L1522.42 8126.00" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="431.79" y="8773.29" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="431.79" dy="0">khi nhập sai username hay password, nó auto</tspan><tspan x="431.79" dy="25">nhả ra invalid credential, nhưng mình nghĩ</tspan><tspan x="431.79" dy="25">admin@support.thm là đúng rồi</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="506.88" y="8919.63" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="506.88" dy="0">nhưng mà API nội bộ nó xử lý kiểu gì ??7</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M912.35 8912.28 L911.97 8911.45 L911.54 8910.47 L911.10 8909.42 L910.72 8908.58 L911.79 8908.02 L916.99 8908.30 L920.82 8908.44 L925.53 8908.58 L928.04 8908.65 L933.37 8908.72 L938.95 8908.86 L944.48 8908.93 L950.00 8908.93 L955.08 8908.93 L959.91 8908.86 L966.12 8908.23 L969.39 8907.81 L972.15 8907.11 L973.34 8906.83 L973.34 8906.83" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M971.83 8889.43 L971.14 8888.31 L970.64 8887.41 L973.72 8888.66 L976.73 8891.39 L978.61 8893.63 L980.12 8896.28 L980.93 8899.14 L980.87 8902.36 L979.61 8906.13 L976.73 8910.33 L972.27 8915.01 L969.32 8917.32 L960.48 8923.32 L950.56 8928.28 L946.30 8930.17 L946.30 8930.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1315.86 8893.56 L1315.86 8895.02 L1315.86 8897.96 L1315.93 8901.31 L1316.12 8904.94 L1316.24 8908.93 L1316.49 8913.12 L1316.74 8917.59 L1316.87 8919.76 L1317.12 8923.96 L1317.37 8927.73 L1317.56 8931.36 L1317.68 8934.72 L1318.06 8939.40 L1318.06 8942.12 L1318.06 8944.29 L1318.06 8946.11 L1318.06 8947.57 L1317.94 8948.76 L1317.94 8950.30 L1317.94 8951.63 L1318.12 8952.88 L1318.88 8953.65 L1320.26 8953.79 L1321.39 8953.58 L1323.33 8953.45 L1325.90 8952.88 L1328.41 8952.47 L1329.61 8952.26 L1332.68 8951.84 L1334.25 8951.63 L1335.50 8951.49 L1336.95 8951.35 L1338.20 8951.14 L1338.20 8951.14" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1345.29 8941.70 L1344.92 8940.79 L1345.61 8940.10 L1346.55 8940.52 L1347.30 8941.14 L1348.05 8941.98 L1348.93 8943.31 L1349.24 8944.22 L1349.68 8945.83 L1349.50 8948.76 L1348.55 8951.21 L1347.80 8952.47 L1345.79 8954.91 L1343.60 8957.15 L1341.46 8958.68 L1340.65 8959.17 L1340.65 8959.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1389.90 8920.88 L1389.53 8919.76 L1387.71 8921.30 L1386.08 8924.02 L1384.38 8927.38 L1382.63 8931.15 L1381.62 8933.11 L1379.86 8936.95 L1377.98 8940.94 L1376.16 8944.71 L1374.47 8948.27 L1372.21 8952.75 L1371.02 8955.05 L1370.08 8956.87 L1369.39 8958.13 L1368.82 8959.17 L1368.82 8959.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1397.12 8935.07 L1396.37 8935.97 L1395.36 8937.30 L1393.79 8939.61 L1391.85 8942.47 L1389.78 8945.69 L1387.96 8948.69 L1386.33 8951.49 L1385.57 8952.81 L1384.32 8955.19 L1383.25 8957.22 L1382.81 8958.06 L1382.19 8959.32 L1381.68 8960.22 L1382.37 8958.90 L1382.88 8957.71 L1384.26 8954.91 L1386.01 8951.77 L1387.90 8948.62 L1389.72 8945.69 L1391.41 8943.24 L1392.92 8941.14 L1394.17 8939.40 L1395.17 8938.28 L1396.12 8937.51 L1397.50 8937.44 L1398.25 8938.35 L1398.69 8939.19 L1399.69 8941.85 L1400.32 8944.22 L1400.70 8945.41 L1401.26 8947.57 L1401.64 8949.39 L1401.89 8950.93 L1402.01 8952.19 L1402.14 8953.52 L1401.64 8954.42 L1400.51 8954.21 L1398.69 8952.88 L1397.06 8951.49 L1395.74 8950.23 L1394.67 8949.11 L1394.05 8948.48 L1393.42 8947.72 L1393.04 8946.88 L1393.35 8945.83 L1394.11 8945.20 L1396.55 8943.80 L1398.44 8943.03 L1400.32 8942.27 L1401.76 8941.70 L1404.08 8940.72 L1404.90 8940.31 L1406.03 8939.68 L1406.78 8939.19 L1407.60 8938.70 L1408.48 8938.28 L1409.48 8938.84 L1409.79 8939.96 L1410.11 8941.77 L1410.36 8944.85 L1410.48 8948.07 L1410.48 8951.35 L1410.36 8954.77 L1410.30 8958.06 L1410.30 8961.20 L1410.30 8963.86 L1410.23 8965.96 L1410.30 8967.56 L1410.30 8968.82 L1410.36 8970.22 L1411.17 8968.61 L1411.49 8965.25 L1411.74 8963.09 L1412.05 8958.76 L1412.49 8954.35 L1413.06 8949.04 L1413.43 8946.04 L1413.87 8943.59 L1414.19 8941.70 L1414.63 8940.31 L1415.19 8939.26 L1415.88 8938.42 L1417.07 8937.93 L1418.39 8938.00 L1419.27 8938.56 L1419.83 8939.54 L1420.08 8940.79 L1419.90 8943.17 L1419.27 8945.62 L1418.14 8947.85 L1416.95 8949.95 L1415.69 8951.49 L1414.63 8952.47 L1413.75 8952.88 L1413.18 8952.05 L1413.18 8952.05" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1430.56 8936.05 L1431.38 8935.48 L1431.82 8936.32 L1431.63 8937.44 L1431.32 8939.75 L1431.06 8941.21 L1430.37 8945.27 L1429.94 8947.85 L1429.81 8948.97 L1429.56 8950.79 L1429.43 8952.39 L1429.43 8953.65 L1429.62 8954.91 L1430.81 8954.84 L1430.81 8954.84" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1434.77 8926.12 L1434.45 8924.79 L1434.26 8923.47 L1434.77 8922.63 L1434.77 8922.63" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1284.81 8853.02 L1284.99 8851.90 L1284.99 8850.57 L1284.62 8849.60 L1284.12 8848.83 L1283.17 8848.20 L1282.04 8847.78 L1280.92 8847.64 L1279.72 8847.99 L1279.35 8848.97 L1279.47 8850.16 L1280.85 8853.51 L1281.86 8855.75 L1282.80 8857.85 L1283.11 8858.75 L1283.74 8860.36 L1284.12 8861.76 L1284.30 8863.16 L1284.37 8864.34 L1284.24 8865.95 L1283.99 8867.07 L1283.49 8868.12 L1282.80 8868.81 L1281.79 8869.30 L1280.66 8869.45 L1279.66 8869.23 L1279.85 8868.05 L1280.60 8867.35 L1280.60 8867.35" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1284.81 8868.96 L1285.94 8868.47 L1288.07 8867.07 L1289.95 8865.74 L1291.71 8864.41 L1292.59 8863.78 L1294.03 8862.46 L1295.10 8861.34 L1295.66 8860.36 L1296.10 8859.10 L1295.66 8857.98 L1294.84 8857.49 L1293.34 8857.56 L1292.46 8858.05 L1291.83 8859.10 L1291.39 8860.29 L1291.39 8861.55 L1291.83 8862.67 L1292.84 8863.71 L1294.15 8864.62 L1295.60 8864.97 L1296.98 8864.90 L1298.86 8864.48 L1301.06 8863.50 L1303.00 8862.25 L1304.70 8860.71 L1305.39 8859.94 L1306.45 8858.33 L1307.27 8857.14 L1307.77 8856.17 L1308.02 8854.98 L1307.58 8854.00 L1306.70 8854.49 L1306.33 8855.40 L1306.14 8856.72 L1306.39 8857.85 L1306.70 8859.10 L1307.14 8860.29 L1307.77 8861.27 L1308.52 8862.88 L1309.09 8864.13 L1309.59 8865.11 L1310.22 8866.23 L1310.72 8867.00 L1311.22 8867.77 L1311.22 8867.77" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1317.12 8859.10 L1317.62 8858.19 L1318.06 8857.36 L1318.12 8858.61 L1318.12 8860.01 L1318.31 8861.20 L1318.56 8862.39 L1318.94 8863.50 L1319.63 8864.34 L1320.82 8863.92 L1321.32 8862.88 L1321.64 8861.90 L1322.01 8860.85 L1322.26 8859.87 L1323.52 8860.08 L1324.52 8860.50 L1325.78 8860.64 L1327.97 8860.36 L1330.30 8859.80 L1332.18 8858.89 L1333.62 8857.98 L1334.56 8857.14 L1335.25 8856.31 L1335.69 8855.33 L1335.13 8854.28 L1333.81 8854.28 L1332.30 8855.40 L1330.86 8857.01 L1329.86 8858.75 L1329.35 8860.29 L1329.23 8861.62 L1329.42 8862.81 L1329.98 8863.71 L1331.55 8865.18 L1332.99 8865.95 L1334.50 8866.23 L1335.75 8866.23 L1337.01 8866.02 L1338.52 8865.32 L1340.27 8864.07 L1341.09 8863.30 L1342.09 8861.97 L1342.84 8860.71 L1343.28 8859.66 L1343.79 8858.61 L1343.85 8857.43 L1343.66 8858.68 L1343.66 8860.36 L1343.79 8861.90 L1344.16 8865.53 L1344.54 8867.56 L1344.92 8869.10 L1345.54 8870.42 L1346.36 8871.26 L1347.80 8872.24 L1349.75 8872.66 L1353.70 8872.31 L1353.70 8872.31" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1442.92 8956.14 L1441.73 8956.00 L1441.92 8954.89 L1442.67 8954.40 L1443.74 8954.74 L1444.37 8955.37 L1444.37 8955.37" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1464.07 8937.83 L1464.95 8938.32 L1465.01 8939.72 L1465.20 8941.68 L1465.26 8944.61 L1465.26 8946.22 L1465.32 8949.50 L1465.32 8952.93 L1465.32 8956.42 L1465.26 8959.78 L1465.20 8963.06 L1465.07 8966.00 L1465.01 8967.32 L1464.95 8970.54 L1464.95 8972.01 L1464.82 8973.40 L1464.82 8973.40" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1467.27 8942.30 L1467.77 8939.79 L1468.27 8937.62 L1468.77 8935.81 L1469.28 8934.48 L1469.90 8933.29 L1470.59 8932.38 L1471.35 8931.68 L1472.48 8931.26 L1473.92 8931.54 L1474.67 8932.17 L1475.30 8933.29 L1475.86 8934.90 L1476.05 8936.43 L1476.05 8937.69 L1475.80 8939.02 L1474.61 8942.16 L1473.54 8943.98 L1472.16 8945.59 L1471.47 8946.22 L1470.15 8947.06 L1468.90 8947.48 L1467.71 8947.61 L1466.45 8947.55 L1466.45 8947.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1486.03 8925.11 L1486.78 8924.56 L1487.41 8925.39 L1487.60 8926.72 L1487.41 8936.09 L1487.35 8937.41 L1487.16 8938.81 L1486.91 8941.47 L1486.85 8942.65 L1486.59 8944.54 L1486.41 8945.94 L1486.28 8947.06 L1486.09 8948.32 L1486.85 8947.55 L1487.91 8945.66 L1489.61 8942.80 L1490.74 8940.98 L1491.68 8939.51 L1492.49 8938.32 L1493.18 8937.41 L1493.68 8936.65 L1494.25 8935.81 L1495.00 8936.43 L1495.19 8937.62 L1495.38 8938.81 L1495.63 8939.93 L1495.94 8941.12 L1496.38 8942.10 L1496.88 8942.93 L1496.88 8942.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1503.85 8939.51 L1503.97 8941.74 L1503.47 8944.19 L1502.84 8946.99 L1502.34 8949.92 L1501.97 8952.86 L1501.53 8955.86 L1501.46 8958.73 L1501.34 8960.20 L1501.34 8961.45 L1501.46 8963.55 L1501.46 8965.23 L1501.59 8966.62 L1501.72 8968.09 L1502.09 8965.09 L1502.22 8960.96 L1502.22 8955.86 L1502.22 8950.90 L1502.34 8946.71 L1502.47 8943.14 L1502.72 8940.28 L1503.03 8937.90 L1503.47 8936.36 L1504.04 8935.25 L1504.73 8934.55 L1505.79 8934.20 L1507.11 8934.55 L1509.37 8936.65 L1510.56 8938.18 L1511.32 8939.51 L1511.69 8940.70 L1511.69 8942.38 L1511.06 8943.91 L1509.62 8945.45 L1507.43 8946.78 L1504.66 8947.61 L1501.15 8947.90 L1499.27 8947.96 L1499.27 8947.96" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="990.54" y="8938.05" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="990.54" dy="0">ko truy cập được api.php</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="432.89" y="9020.70" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="432.89" dy="0">Problems signing in? Contact IT Operations @ help@support.thm</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M852.62 8804.07 L854.00 8803.24 L857.32 8802.33 L864.16 8800.58 L870.00 8799.53 L876.08 8798.49 L882.23 8797.50 L887.94 8796.74 L893.21 8796.11 L898.11 8795.48 L902.56 8794.99 L906.08 8794.43 L907.77 8794.22 L910.72 8793.80 L913.17 8793.52 L914.92 8793.17 L916.37 8792.82 L917.37 8792.34 L918.19 8791.70 L918.19 8791.70" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M915.74 8782.06 L915.24 8781.15 L915.99 8780.38 L917.31 8780.52 L920.26 8782.76 L921.76 8784.44 L922.77 8786.47 L923.14 8787.37 L923.39 8789.26 L922.70 8792.69 L921.45 8795.41 L919.19 8798.41 L917.75 8799.95 L914.05 8803.03 L909.40 8805.75 L906.83 8806.94 L906.83 8806.94" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="933.44" y="8804.51" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="933.44" dy="0">nma cái mật khẩu nó nó dài vcl thì bruteforce kiểu gì?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M895.91 8974.03 L890.89 8973.26 L888.13 8972.98 L881.67 8972.98 L873.64 8974.10 L858.14 8978.92 L847.97 8983.89 L840.07 8989.48 L834.92 8995.00 L832.92 8998.21 L830.53 9004.71 L830.22 9011.35 L832.16 9018.55 L836.93 9026.80 L844.46 9034.97 L854.37 9041.89 L866.80 9047.20 L889.07 9052.44 L913.86 9054.75 L930.74 9054.89 L947.17 9053.70 L963.05 9051.40 L978.30 9048.32 L992.48 9044.54 L1004.96 9040.42 L1015.57 9035.81 L1023.10 9032.18 L1026.17 9030.36 L1033.51 9025.19 L1036.84 9021.83 L1039.03 9018.27 L1040.04 9014.29 L1039.79 9010.02 L1037.90 9004.36 L1033.01 8996.47 L1025.54 8987.59 L1021.03 8983.26 L1011.11 8974.87 L1000.13 8967.25 L988.52 8961.03 L970.45 8955.16 L960.10 8954.12 L947.86 8955.44 L933.75 8959.50 L933.75 8959.50" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M922.14 9058.45 L921.45 9057.40 L920.88 9056.49 L920.26 9055.80 L919.32 9055.30 L918.25 9055.80 L916.24 9059.01 L915.11 9061.88 L914.55 9064.95 L914.36 9068.38 L914.67 9071.66 L915.86 9075.01 L918.00 9078.37 L920.95 9081.23 L922.64 9082.49 L926.59 9084.45 L931.05 9085.57 L935.75 9085.99 L942.59 9085.29 L946.74 9084.10 L950.37 9082.70 L953.39 9080.89 L953.39 9080.89" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M958.15 9066.00 L957.65 9066.84 L957.90 9067.96 L958.91 9070.47 L959.91 9073.76 L960.10 9074.80 L959.85 9078.23 L959.41 9079.56 L957.65 9082.84 L954.58 9086.41 L950.37 9090.11 L944.73 9093.53 L944.73 9093.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1009.98" y="9116.61" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1009.98" dy="0">contact cái này kiểu gì ?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1374.91 8764.78 L1374.03 8764.08 L1372.96 8763.38 L1370.77 8762.05 L1368.01 8760.51 L1364.49 8759.05 L1356.65 8756.88 L1349.68 8755.90 L1340.77 8755.13 L1335.88 8755.06 L1325.40 8755.20 L1311.66 8756.25 L1298.61 8757.86 L1288.63 8759.60 L1280.04 8761.91 L1272.07 8764.85 L1262.03 8770.23 L1256.70 8774.42 L1254.75 8776.45 L1251.74 8780.92 L1250.61 8783.37 L1249.61 8790.21 L1251.11 8795.24 L1254.69 8800.84 L1261.21 8807.48 L1271.00 8814.26 L1283.11 8820.33 L1298.42 8826.28 L1314.11 8831.44 L1330.67 8835.71 L1348.05 8839.41 L1366.19 8842.21 L1382.94 8844.24 L1399.82 8845.49 L1416.45 8845.70 L1432.45 8845.07 L1440.29 8844.51 L1455.47 8842.84 L1469.53 8840.53 L1482.39 8837.95 L1497.45 8833.96 L1505.54 8831.17 L1513.32 8828.23 L1520.10 8825.09 L1525.62 8821.94 L1527.94 8820.33 L1531.77 8816.84 L1534.41 8813.07 L1535.41 8808.73 L1534.91 8803.98 L1532.27 8797.83 L1526.75 8790.08 L1517.97 8781.90 L1506.74 8774.14 L1491.68 8766.17 L1474.86 8759.95 L1456.41 8755.13 L1436.52 8751.50 L1415.69 8748.98 L1396.49 8747.44 L1379.05 8746.89 L1362.80 8746.89 L1347.80 8747.38 L1341.84 8747.73 L1335.19 8748.42 L1335.19 8748.42" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1245.53 8748.84 L1243.08 8747.66 L1237.81 8745.14 L1231.72 8742.41 L1224.95 8739.62 L1218.80 8737.45 L1209.26 8734.73 L1202.80 8733.47 L1196.21 8732.35 L1189.56 8731.79 L1182.78 8731.51 L1179.83 8731.44 L1174.19 8731.44 L1169.04 8731.65 L1164.52 8731.86 L1161.07 8732.14 L1158.12 8732.28 L1155.24 8732.56 L1154.11 8732.77 L1154.11 8732.77" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1177.14 8716.35 L1175.57 8716.28 L1173.87 8716.28 L1169.73 8716.56 L1165.34 8716.98 L1158.69 8718.02 L1154.61 8719.07 L1150.91 8720.26 L1148.08 8721.45 L1146.77 8722.08 L1144.70 8723.48 L1143.32 8724.87 L1143.00 8726.34 L1143.57 8728.02 L1145.70 8730.19 L1152.48 8733.96 L1159.88 8736.75 L1170.67 8739.62 L1176.63 8740.95 L1176.63 8740.95" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="939.28" y="8713.64" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="939.28" dy="0">liệu có sql injection???</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1190.88 8705.10 L1189.50 8704.82 L1191.69 8704.05 L1195.39 8704.05 L1200.41 8704.40 L1203.30 8704.68 L1210.08 8705.31 L1217.42 8706.21 L1225.76 8707.40 L1234.11 8708.59 L1241.83 8709.71 L1249.10 8710.62 L1259.65 8711.73 L1266.11 8712.30 L1268.81 8712.57 L1273.57 8712.99 L1277.03 8713.13 L1278.28 8713.06 L1279.91 8712.85 L1279.91 8712.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1270.25 8702.86 L1271.50 8702.44 L1273.39 8702.09 L1276.65 8701.67 L1278.34 8701.81 L1279.72 8702.02 L1280.73 8702.51 L1281.48 8703.28 L1281.79 8704.54 L1281.23 8706.35 L1279.22 8709.08 L1275.33 8712.50 L1270.12 8716.28 L1263.54 8720.33 L1255.25 8724.73 L1255.25 8724.73" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1278.98" y="8733.27" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="1278.98" dy="0">Dùng sql map check được ko??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M377.34 9209.95 L376.02 9210.22 L375.20 9210.64 L376.21 9211.21 L380.35 9212.25 L384.30 9212.74 L386.56 9213.02 L391.45 9213.44 L396.35 9213.86 L401.24 9214.07 L406.14 9214.28 L410.72 9214.14 L414.48 9213.65 L416.11 9213.44 L416.11 9213.44" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M387.50 9214.07 L388.69 9214.14 L391.20 9214.07 L394.09 9213.86 L397.04 9213.72 L400.17 9213.72 L401.74 9213.86 L406.39 9213.93 L409.34 9214.00 L412.03 9213.65 L412.03 9213.65" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M416.36 9195.27 L417.05 9194.43 L418.18 9194.36 L419.50 9194.78 L420.32 9195.48 L422.76 9198.07 L423.95 9200.51 L424.65 9203.10 L424.77 9204.57 L424.65 9207.57 L423.77 9210.72 L422.20 9214.28 L420.06 9217.63 L417.55 9220.85 L414.67 9223.78 L410.46 9226.72 L410.46 9226.72" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M380.28 9220.22 L380.54 9221.27 L383.36 9221.82 L386.81 9222.04 L393.02 9221.90 L397.79 9221.41 L400.24 9221.20 L404.88 9220.57 L409.34 9219.94 L413.29 9219.17 L413.29 9219.17" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M471.45 9203.80 L471.52 9202.19 L471.45 9200.51 L470.64 9197.65 L469.51 9194.71 L468.57 9193.45 L467.56 9192.62 L466.43 9192.26 L465.24 9192.41 L463.36 9193.59 L462.42 9194.50 L460.66 9197.30 L459.03 9200.93 L458.03 9204.92 L457.65 9208.69 L458.09 9214.00 L459.22 9217.50 L460.66 9220.15 L462.67 9222.18 L464.99 9223.64 L467.69 9224.13 L469.13 9224.13 L472.21 9223.30 L475.41 9221.48 L478.17 9218.75 L480.43 9215.05 L482.31 9209.95 L483.63 9201.84 L484.00 9196.74 L484.19 9191.99 L484.19 9188.35 L484.00 9185.49 L483.75 9183.60 L483.25 9182.55 L482.31 9182.90 L481.49 9184.58 L480.36 9187.79 L479.42 9191.92 L478.23 9199.19 L477.73 9204.15 L477.35 9209.04 L477.16 9213.30 L476.97 9217.08 L477.10 9218.75 L477.16 9221.62 L477.23 9222.81 L477.48 9224.48 L477.92 9225.39 L479.17 9225.32 L479.92 9224.20 L480.93 9222.39 L481.74 9220.64 L482.31 9219.31 L482.75 9218.33 L483.12 9217.35 L483.56 9216.44 L484.32 9216.93 L484.69 9218.12 L485.19 9220.57 L485.57 9223.01 L486.20 9225.32 L486.51 9226.37 L487.01 9228.19 L487.70 9229.37 L488.46 9230.07 L489.40 9230.42 L490.65 9230.21 L493.54 9227.91 L494.04 9227.14 L494.86 9225.81 L495.36 9224.69 L495.74 9223.64 L494.73 9223.36 L494.10 9224.20 L493.10 9226.51 L492.54 9228.12 L492.35 9229.52 L492.41 9230.77 L492.79 9231.68 L493.29 9232.45 L494.04 9232.94 L495.11 9233.22 L496.24 9233.08 L497.18 9232.52 L497.81 9231.61 L498.25 9230.42 L498.25 9228.81 L498.18 9227.42 L498.06 9226.09 L497.93 9224.90 L497.68 9223.72 L497.68 9223.72" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M505.59 9218.89 L505.52 9217.63 L504.33 9217.92 L503.33 9220.01 L502.64 9222.24 L502.20 9224.69 L502.01 9226.93 L502.14 9228.75 L502.32 9230.35 L502.64 9231.68 L502.89 9232.80 L503.20 9234.06 L503.45 9235.10 L502.20 9233.29 L501.01 9231.47 L500.44 9230.42 L499.50 9228.68 L498.81 9227.21 L498.43 9226.09 L498.25 9224.76 L498.81 9223.85 L499.88 9223.30 L501.19 9222.95 L502.83 9222.95 L504.65 9223.08 L506.78 9223.36 L508.22 9223.50 L509.29 9223.72 L509.29 9223.72" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M495.23 9206.59 L493.54 9204.29 L493.04 9203.24 L493.85 9202.47 L495.11 9202.54 L498.06 9203.31 L500.38 9204.15 L501.51 9204.50 L503.64 9205.06 L503.64 9205.06" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M516.38 9188.49 L516.44 9187.30 L515.69 9189.54 L514.87 9194.36 L514.68 9196.39 L514.37 9202.89 L514.37 9207.15 L514.68 9211.13 L514.68 9211.13" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M534.70 9204.70 L534.45 9203.73 L533.76 9204.70 L532.75 9209.18 L532.13 9212.32 L531.56 9215.68 L531.00 9219.17 L530.62 9222.53 L530.56 9224.20 L530.56 9227.35 L530.87 9230.21 L531.56 9232.66 L532.57 9234.55 L534.26 9236.08 L535.45 9236.36 L536.52 9236.08 L537.52 9235.66 L539.15 9234.33 L540.41 9232.66 L540.91 9231.68 L541.60 9230.00 L541.85 9228.53 L541.92 9227.14 L541.66 9225.81 L540.97 9225.04 L539.91 9224.90 L537.46 9226.30 L535.83 9227.77 L534.76 9229.37 L534.07 9230.84 L533.76 9232.24 L533.82 9233.43 L534.07 9234.41 L534.70 9235.10 L535.45 9235.59 L536.52 9235.94 L537.71 9235.73 L540.35 9234.26 L540.91 9233.57 L541.85 9232.31 L542.42 9231.05 L542.79 9230.00 L543.11 9228.81 L542.35 9229.44 L542.29 9230.77 L542.61 9232.03 L543.11 9232.80 L544.30 9233.15 L545.62 9232.80 L546.68 9232.31 L547.50 9231.82 L548.32 9231.40 L549.19 9231.89 L549.45 9232.87 L549.70 9233.99 L550.01 9235.17 L550.39 9236.36 L550.89 9237.34 L550.89 9237.34" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M555.34 9214.42 L555.34 9213.09 L555.34 9213.09" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M547.19 9249.57 L546.81 9250.69 L547.00 9251.95 L548.25 9251.67 L548.25 9251.67" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M567.83 9232.80 L568.27 9231.96 L568.14 9233.43 L568.27 9235.10 L568.27 9236.43 L568.39 9237.83 L568.52 9239.02 L568.77 9240.07 L569.77 9239.79 L570.34 9237.76 L570.84 9235.24 L571.09 9234.06 L571.47 9232.24 L571.72 9230.77 L572.03 9229.58 L572.79 9230.07 L573.16 9231.12 L573.41 9232.38 L574.23 9235.10 L574.48 9236.08 L575.05 9237.76 L575.61 9239.02 L575.99 9240.13 L576.43 9240.97 L577.12 9241.88 L578.12 9242.44 L579.31 9242.30 L580.32 9242.02 L582.51 9240.84 L584.02 9239.79 L585.96 9238.11 L586.53 9237.41 L587.41 9236.29 L588.16 9235.17 L588.60 9234.13 L588.91 9233.22 L589.16 9232.10 L589.10 9230.98 L588.47 9230.28 L587.28 9230.21 L585.34 9231.26 L583.83 9232.73 L582.51 9234.48 L581.51 9236.29 L580.82 9237.69 L580.57 9238.88 L580.63 9240.28 L581.26 9241.19 L582.57 9241.25 L584.77 9240.21 L585.59 9239.44 L587.15 9237.97 L588.35 9236.08 L588.72 9235.24 L589.60 9232.66 L589.66 9231.40 L588.60 9231.82 L588.22 9232.94 L588.35 9234.41 L589.10 9235.17 L590.23 9235.52 L591.55 9235.17 L592.36 9234.68 L593.18 9233.99 L594.06 9233.29 L595.00 9233.84 L595.12 9235.10 L595.50 9236.01 L596.19 9236.71 L597.45 9236.85 L598.32 9236.50 L599.26 9235.94 L600.02 9235.10 L601.15 9233.50 L601.90 9232.31 L602.40 9231.40 L602.90 9230.56 L603.15 9231.54 L603.09 9232.80 L603.15 9234.82 L602.90 9237.76 L602.59 9240.84 L602.21 9243.91 L601.59 9247.06 L600.77 9250.20 L599.89 9252.92 L598.89 9255.51 L597.19 9258.66 L596.69 9259.42 L595.75 9260.54 L594.87 9261.24 L593.81 9261.45 L593.05 9260.68 L592.80 9259.50 L593.05 9258.17 L594.12 9256.21 L595.63 9254.32 L597.51 9252.64 L599.45 9251.04 L601.65 9249.64 L603.72 9248.31 L606.04 9246.99 L606.04 9246.99" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M586.78 9205.82 L585.27 9204.57 L584.58 9203.73 L585.52 9203.10 L589.48 9203.38 L594.50 9204.08 L600.96 9204.92 L600.96 9204.92" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M656.24 9227.98 L655.67 9226.93 L655.30 9225.88 L655.55 9227.49 L655.92 9230.84 L656.36 9238.53 L656.49 9241.61 L656.55 9252.09 L656.49 9259.50 L656.30 9267.04 L656.24 9274.45 L656.05 9281.79 L655.86 9289.06 L655.67 9292.55 L655.30 9299.33 L655.05 9304.99 L654.61 9310.16 L654.29 9314.84 L654.04 9318.48 L653.79 9322.95 L653.60 9324.97 L653.60 9326.44 L654.17 9325.25 L654.17 9325.25" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="686.42" y="9253.71" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="686.42" dy="0">-vượt qua cơ chế đăng nhập trc</tspan><tspan x="686.42" dy="25"></tspan><tspan x="686.42" dy="25"></tspan><tspan x="686.42" dy="25">- sau đó làm gì thì làm </tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M999.89 9248.87 L999.20 9249.92 L1000.90 9247.19 L1004.10 9243.00 L1005.35 9241.39 L1008.55 9237.55 L1012.00 9233.43 L1015.77 9229.17 L1019.59 9225.04 L1023.74 9220.99 L1028.57 9216.93 L1033.21 9213.30 L1037.98 9210.15 L1042.75 9207.43 L1046.95 9205.26 L1050.72 9203.66 L1054.10 9202.47 L1057.12 9201.70 L1059.81 9201.28 L1061.01 9201.21 L1062.89 9201.14 L1064.33 9201.14 L1065.52 9201.28 L1065.52 9201.28" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1062.01 9193.80 L1062.70 9193.10 L1063.64 9193.59 L1065.08 9194.50 L1066.90 9195.62 L1068.60 9196.74 L1070.29 9198.35 L1070.92 9199.32 L1070.98 9200.58 L1069.54 9203.80 L1067.28 9207.01 L1063.83 9210.72 L1059.69 9214.14 L1057.55 9215.96 L1057.55 9215.96" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1090.69" y="9204.30" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1090.69" dy="0">bruteforce</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1199.61 9212.60 L1198.61 9211.62 L1197.79 9210.86 L1196.97 9209.95 L1196.54 9208.97 L1196.66 9207.78 L1198.35 9206.24 L1201.87 9204.50 L1203.37 9204.01 L1206.95 9203.03 L1211.15 9202.19 L1215.55 9201.63 L1220.06 9201.21 L1224.39 9200.79 L1228.41 9200.37 L1231.80 9200.02 L1233.43 9199.81 L1239.33 9199.19 L1240.52 9198.77 L1240.52 9198.77" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1238.70 9192.68 L1237.95 9191.85 L1237.38 9191.15 L1239.58 9191.78 L1241.15 9193.17 L1242.53 9194.85 L1243.34 9196.74 L1243.72 9198.48 L1242.78 9202.05 L1241.15 9204.92 L1240.02 9206.17 L1237.19 9208.76 L1233.99 9210.64 L1233.99 9210.64" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1315.06 9178.08 L1314.56 9177.17 L1313.68 9176.47 L1309.23 9175.56 L1305.77 9175.91 L1301.63 9177.03 L1296.99 9178.92 L1292.54 9181.64 L1290.53 9183.18 L1286.89 9186.53 L1284.38 9189.82 L1282.50 9193.17 L1281.81 9197.65 L1282.56 9200.16 L1284.44 9202.40 L1287.58 9204.08 L1289.40 9204.50 L1293.54 9204.57 L1298.68 9203.45 L1304.14 9201.35 L1309.29 9198.35 L1313.62 9194.29 L1317.32 9189.33 L1319.58 9184.44 L1320.52 9180.11 L1320.52 9176.54 L1319.52 9173.26 L1317.38 9170.53 L1314.62 9168.86 L1311.61 9167.88 L1308.28 9167.81 L1308.28 9167.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1287.64 9180.04 L1289.40 9182.20 L1291.78 9184.16 L1294.29 9186.46 L1296.93 9188.98 L1298.12 9190.24 L1300.38 9192.82 L1302.26 9195.06 L1303.83 9197.23 L1305.08 9199.25 L1305.71 9200.16 L1307.09 9202.47 L1307.09 9202.47" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1309.16 9188.56 L1308.47 9187.86 L1307.53 9187.52 L1304.77 9187.86 L1300.63 9189.47 L1294.98 9192.48 L1288.46 9196.95 L1279.74 9204.01 L1275.09 9207.71 L1270.32 9211.55 L1270.32 9211.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1360.17 9179.34 L1359.67 9178.57 L1358.98 9179.27 L1358.42 9181.30 L1357.79 9184.09 L1357.54 9185.49 L1357.16 9188.63 L1356.85 9191.78 L1356.72 9195.06 L1356.54 9198.28 L1356.54 9201.35 L1356.54 9204.15 L1356.47 9206.24 L1356.47 9207.92 L1356.28 9209.32 L1355.97 9210.57 L1355.97 9210.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1354.03 9210.57 L1353.34 9209.60 L1352.52 9208.20 L1351.77 9206.59 L1351.20 9205.41 L1350.89 9204.29 L1350.95 9202.89 L1351.39 9202.05 L1352.58 9201.14 L1354.53 9199.95 L1356.72 9198.90 L1359.17 9198.07 L1361.49 9197.37 L1362.56 9197.09 L1364.13 9196.67 L1365.32 9196.32 L1366.51 9195.90 L1367.33 9195.48 L1365.38 9196.67 L1363.31 9198.28 L1362.31 9199.19 L1360.24 9201.35 L1358.54 9203.73 L1357.16 9206.10 L1356.28 9208.27 L1355.85 9210.02 L1355.85 9211.41 L1356.35 9212.32 L1357.41 9212.88 L1358.67 9212.67 L1359.99 9211.90 L1361.62 9210.15 L1362.87 9207.99 L1363.94 9205.68 L1364.69 9203.31 L1365.07 9202.12 L1365.32 9200.37 L1365.51 9198.90 L1365.26 9197.65 L1364.06 9198.00 L1363.69 9198.97 L1363.44 9200.09 L1363.37 9201.35 L1363.56 9202.89 L1363.94 9203.73 L1364.88 9204.22 L1366.14 9204.08 L1367.14 9203.52 L1368.02 9202.89 L1368.77 9202.19 L1369.59 9201.56 L1369.71 9202.89 L1369.34 9204.15 L1369.08 9205.41 L1368.96 9206.73 L1368.77 9207.85 L1368.83 9209.04 L1370.90 9208.13 L1372.41 9206.17 L1373.66 9204.15 L1374.92 9202.26 L1375.42 9201.56 L1376.30 9200.23 L1376.86 9199.39 L1377.37 9198.48 L1377.81 9199.53 L1377.68 9200.93 L1377.68 9202.19 L1377.62 9203.52 L1377.55 9204.99 L1377.62 9206.24 L1378.50 9205.82 L1379.06 9204.84 L1379.63 9204.08 L1380.25 9203.38 L1381.26 9203.10 L1381.95 9203.80 L1382.26 9204.70 L1382.45 9205.96 L1381.95 9209.32 L1381.01 9211.55 L1381.01 9211.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1364.44 9224.13 L1363.44 9224.48 L1364.32 9224.06 L1366.01 9223.72 L1367.14 9223.36 L1367.14 9223.36" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1405.35 9194.08 L1405.60 9192.97 L1405.23 9194.43 L1404.85 9195.69 L1404.22 9198.35 L1403.66 9201.14 L1403.03 9204.01 L1402.34 9206.66 L1401.40 9210.37 L1400.90 9212.18 L1400.39 9213.44 L1400.39 9213.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1399.83 9214.42 L1398.70 9213.86 L1398.39 9212.88 L1398.14 9211.41 L1398.01 9210.15 L1398.20 9208.97 L1399.33 9207.57 L1400.64 9206.17 L1402.78 9204.70 L1405.23 9203.52 L1407.80 9202.26 L1410.43 9201.21 L1412.94 9200.02 L1415.39 9198.77 L1416.39 9198.07 L1418.34 9196.74 L1420.79 9194.36 L1421.79 9192.68 L1422.23 9191.78 L1422.61 9190.03 L1422.73 9188.63 L1422.67 9187.44 L1422.23 9186.12 L1421.48 9185.42 L1419.53 9186.04 L1417.52 9187.37 L1414.39 9190.59 L1412.88 9193.10 L1412.13 9194.43 L1410.87 9197.16 L1409.93 9199.61 L1409.68 9200.79 L1409.24 9202.61 L1409.12 9204.01 L1409.12 9205.47 L1409.87 9206.10 L1410.68 9205.68 L1411.88 9204.22 L1413.07 9202.54 L1413.88 9201.28 L1414.57 9200.23 L1415.08 9199.53 L1415.58 9198.77 L1415.77 9199.81 L1415.64 9201.28 L1415.77 9202.47 L1416.02 9203.66 L1416.39 9204.64 L1417.21 9205.33 L1418.28 9205.47 L1419.34 9205.26 L1421.54 9204.01 L1422.23 9203.38 L1423.36 9202.40 L1423.99 9201.63 L1424.61 9200.93 L1422.42 9202.47 L1420.41 9205.33 L1419.34 9207.08 L1418.78 9208.55 L1418.59 9209.73 L1418.97 9211.06 L1419.66 9211.76 L1420.79 9211.83 L1421.54 9211.21 L1422.92 9208.69 L1423.23 9207.50 L1423.67 9205.68 L1423.99 9204.08 L1424.17 9202.89 L1424.43 9201.42 L1424.61 9200.16 L1424.86 9199.12 L1425.87 9198.77 L1426.62 9199.53 L1427.12 9200.23 L1427.50 9201.21 L1427.88 9202.26 L1428.13 9203.52 L1428.32 9204.92 L1428.32 9206.24 L1428.06 9207.71 L1427.50 9209.73 L1426.68 9211.06 L1426.12 9211.90 L1426.12 9211.90" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1432.71 9190.66 L1433.65 9190.31 L1434.78 9190.66 L1435.22 9191.50 L1434.97 9192.75 L1434.40 9194.22 L1433.21 9195.90 L1431.58 9197.30 L1430.95 9197.93 L1428.13 9198.84 L1427.06 9198.48 L1427.06 9198.48" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1424.80 9175.50 L1425.43 9174.86 L1426.81 9174.44 L1428.38 9174.59 L1431.01 9175.28 L1433.71 9176.12 L1435.03 9176.75 L1435.03 9176.75" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1463.08 9186.04 L1462.32 9185.42 L1461.57 9186.04 L1460.50 9188.07 L1459.63 9190.31 L1459.19 9191.50 L1458.43 9194.08 L1457.30 9198.28 L1456.49 9201.14 L1455.74 9204.01 L1454.79 9206.87 L1453.85 9209.46 L1453.29 9211.76 L1452.91 9213.44 L1452.66 9214.63 L1452.66 9214.63" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1468.10 9195.97 L1467.84 9194.92 L1466.78 9194.50 L1464.83 9195.62 L1463.08 9197.09 L1461.57 9198.84 L1460.94 9199.74 L1459.88 9201.77 L1459.19 9203.80 L1459.00 9205.41 L1459.25 9206.73 L1459.88 9207.78 L1460.75 9208.41 L1461.82 9208.83 L1464.83 9208.83 L1467.22 9208.20 L1469.29 9207.36 L1471.05 9206.24 L1472.17 9205.33 L1472.99 9204.64 L1473.62 9203.87 L1472.43 9204.29 L1471.23 9206.31 L1470.92 9207.29 L1470.42 9208.76 L1470.17 9210.02 L1470.42 9211.48 L1471.05 9212.39 L1472.11 9212.67 L1473.12 9212.39 L1474.87 9209.95 L1475.31 9208.27 L1475.37 9206.94 L1475.12 9205.82 L1474.37 9204.99 L1473.12 9205.06 L1473.12 9205.06" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1488.55 9210.37 L1489.30 9209.53 L1489.81 9208.76 L1490.06 9207.78 L1489.68 9206.87 L1488.61 9206.52 L1486.61 9207.29 L1483.97 9209.18 L1483.22 9209.95 L1482.28 9211.41 L1481.77 9212.67 L1481.77 9214.14 L1482.46 9215.12 L1483.66 9215.47 L1486.35 9214.63 L1488.68 9213.09 L1491.31 9210.72 L1493.82 9207.71 L1496.02 9204.22 L1497.90 9200.23 L1499.41 9196.32 L1500.66 9192.75 L1501.60 9190.03 L1502.35 9187.86 L1502.79 9186.26 L1503.05 9185.21 L1501.85 9188.28 L1501.29 9191.01 L1500.60 9193.87 L1500.22 9195.34 L1499.66 9198.35 L1499.09 9201.14 L1498.59 9203.66 L1498.34 9204.70 L1498.09 9206.45 L1497.84 9207.57 L1497.46 9208.62 L1497.46 9208.62" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1493.26 9205.68 L1492.94 9204.50 L1493.26 9203.52 L1494.01 9202.89 L1495.01 9202.47 L1496.14 9202.19 L1497.46 9201.98 L1498.72 9201.70 L1499.85 9201.56 L1501.04 9201.42 L1501.60 9202.19 L1501.41 9203.31 L1501.16 9204.99 L1500.66 9207.50 L1500.16 9210.15 L1499.85 9212.60 L1499.66 9214.63 L1500.35 9217.35 L1501.60 9219.38 L1503.48 9221.06 L1506.06 9222.18 L1510.83 9222.59 L1512.39 9222.53 L1512.39 9222.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1009.30 9245.52 L1008.43 9245.93 L1007.74 9246.64 L1008.68 9247.19 L1011.94 9247.54 L1013.63 9247.54 L1017.40 9247.47 L1021.98 9247.12 L1026.94 9246.70 L1031.95 9246.22 L1036.60 9245.45 L1041.05 9244.89 L1045.07 9244.19 L1048.27 9243.49 L1049.71 9243.28 L1052.16 9242.58 L1054.29 9241.88 L1054.29 9241.88" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1057.24 9235.17 L1057.74 9234.41 L1059.00 9234.48 L1060.00 9234.97 L1060.88 9235.87 L1061.38 9236.92 L1061.38 9239.30 L1060.63 9242.16 L1059.00 9245.38 L1057.05 9248.45 L1054.73 9251.25 L1053.41 9252.44 L1053.41 9252.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1076.26" y="9257.69" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1076.26" dy="0">SQL injection?==&gt; sql mapp??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1012.94 9250.83 L1013.13 9253.48 L1013.70 9256.07 L1014.45 9259.08 L1015.33 9262.22 L1015.83 9264.11 L1016.77 9267.81 L1018.03 9271.52 L1019.53 9275.01 L1021.48 9278.29 L1023.92 9281.37 L1028.63 9285.14 L1032.52 9287.17 L1036.91 9288.77 L1039.17 9289.41 L1043.88 9290.52 L1048.39 9291.36 L1052.66 9292.13 L1056.49 9292.76 L1059.56 9293.25 L1062.39 9293.67 L1064.90 9293.95 L1066.84 9294.09 L1068.47 9294.22 L1069.73 9294.37 L1071.23 9294.37 L1072.55 9294.02 L1072.55 9294.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1076.69 9285.35 L1078.07 9285.35 L1079.14 9285.77 L1080.08 9286.33 L1080.83 9287.10 L1081.08 9288.22 L1080.08 9291.15 L1077.82 9294.02 L1073.87 9297.09 L1064.14 9301.84 L1060.13 9303.31 L1060.13 9303.31" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1111.64" y="9305.61" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1111.64" dy="0">tận dụng cái helpsupport kia kiểu gì ?</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M759.26 9335.23 L758.45 9334.74 L757.45 9335.09 L756.82 9336.07 L756.06 9338.45 L755.31 9341.25 L754.62 9344.39 L753.93 9349.42 L753.81 9352.98 L753.68 9356.48 L753.87 9359.69 L754.31 9362.77 L754.56 9364.17 L755.12 9366.68 L755.88 9369.13 L756.88 9371.36 L758.26 9373.11 L760.65 9374.93 L762.15 9375.63 L763.66 9376.05 L765.10 9376.12 L766.36 9376.12 L767.61 9376.05 L770.18 9375.35 L772.50 9374.44 L774.70 9373.46 L776.65 9372.20 L778.28 9370.74 L779.03 9369.97 L779.59 9369.06 L779.59 9369.06" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M776.33 9354.38 L777.08 9355.43 L778.40 9357.67 L779.34 9359.76 L780.03 9361.79 L780.35 9363.61 L780.41 9365.22 L780.16 9367.31 L779.03 9371.09 L777.90 9373.53 L777.21 9374.72 L775.89 9376.89 L774.51 9378.77 L773.26 9380.17 L773.26 9380.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M816.30 9356.55 L816.05 9355.43 L815.86 9354.31 L816.05 9357.67 L816.11 9361.37 L816.05 9366.19 L815.92 9371.51 L815.80 9377.16 L815.55 9382.89 L815.42 9388.63 L815.42 9394.29 L815.36 9399.46 L815.36 9404.28 L815.36 9408.19 L815.36 9411.62 L815.36 9414.48 L815.30 9416.51 L815.30 9418.05 L815.17 9419.58 L815.17 9419.58" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M825.08 9365.84 L825.40 9364.59 L825.65 9363.26 L825.90 9362.21 L826.40 9363.19 L826.72 9364.94 L827.41 9369.41 L827.66 9371.02 L828.03 9374.30 L828.35 9377.65 L828.60 9380.94 L828.85 9384.08 L829.04 9386.95 L829.04 9388.21 L829.16 9390.16 L829.29 9391.63 L829.41 9392.75 L828.66 9391.63 L827.85 9389.18 L826.90 9386.32 L826.34 9383.31 L825.84 9380.10 L825.46 9375.21 L825.59 9371.85 L826.21 9366.75 L826.90 9363.61 L827.85 9360.53 L828.85 9357.88 L829.85 9355.50 L830.79 9353.82 L831.55 9352.85 L832.74 9352.98 L833.18 9354.03 L833.24 9355.57 L833.18 9358.02 L832.74 9360.60 L832.30 9362.98 L831.99 9364.17 L831.36 9365.91 L830.98 9367.38 L830.36 9368.50 L829.79 9369.34 L829.10 9369.90 L828.16 9370.39 L828.16 9370.39" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M833.74 9352.85 L834.25 9352.15 L834.94 9351.24 L835.63 9351.87 L835.69 9353.13 L835.75 9358.09 L835.88 9361.02 L835.88 9364.17 L835.94 9367.03 L835.94 9369.76 L836.00 9371.78 L836.00 9373.39 L836.00 9374.65 L836.13 9375.98 L835.00 9373.46 L834.50 9371.64 L834.06 9370.18 L833.74 9368.99 L833.43 9367.59 L833.43 9366.33 L833.99 9365.63 L834.81 9365.22 L835.88 9364.73 L836.76 9364.31 L837.70 9363.89 L838.57 9363.40 L838.57 9363.40" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M842.65 9356.69 L842.34 9355.71 L841.90 9354.87 L841.08 9354.24 L839.83 9354.10 L838.39 9355.15 L836.69 9356.69 L835.25 9358.72 L833.56 9362.21 L832.80 9364.87 L832.36 9367.17 L832.30 9369.06 L832.36 9370.67 L832.61 9371.85 L833.05 9372.83 L833.93 9373.60 L835.37 9373.60 L837.51 9372.06 L839.08 9370.32 L840.33 9368.15 L841.34 9365.77 L842.15 9363.68 L842.53 9362.77 L843.03 9361.37 L843.34 9360.39 L843.03 9361.30 L842.84 9362.77 L842.84 9364.65 L842.78 9365.91 L842.84 9368.08 L842.90 9369.76 L843.22 9371.02 L843.34 9372.06 L843.97 9372.90 L845.10 9372.62 L845.10 9372.62" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M855.33 9346.07 L854.76 9348.72 L853.88 9353.13 L853.45 9356.48 L852.88 9359.97 L852.44 9363.26 L851.94 9366.47 L851.44 9369.41 L851.06 9372.20 L850.87 9373.39 L850.50 9375.21 L850.37 9376.54 L850.12 9377.58 L849.37 9378.07 L848.86 9377.23 L848.36 9376.12 L847.99 9375.14 L847.74 9374.09 L847.99 9372.83 L849.24 9371.43 L850.75 9369.83 L852.44 9368.22 L854.26 9366.54 L856.02 9364.59 L857.71 9362.63 L859.22 9360.46 L860.54 9358.09 L861.60 9355.43 L862.23 9352.43 L862.61 9349.28 L862.73 9346.07 L862.61 9343.20 L862.42 9341.11 L861.98 9339.57 L861.29 9338.66 L860.28 9339.15 L859.03 9340.89 L857.84 9343.41 L856.71 9346.42 L855.77 9349.56 L855.01 9352.85 L854.32 9357.53 L854.07 9360.39 L854.01 9361.58 L854.01 9363.47 L854.07 9365.00 L854.26 9366.13 L854.64 9367.17 L855.39 9367.80 L856.58 9367.52 L857.52 9366.75 L858.34 9366.13 L859.22 9365.63 L859.97 9366.33 L860.28 9367.31 L860.66 9368.36 L861.04 9369.48 L861.48 9370.53 L862.10 9371.22 L862.10 9371.22" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M876.41 9350.33 L876.72 9349.07 L876.85 9350.33 L876.72 9353.40 L876.41 9358.09 L876.35 9361.30 L876.16 9364.45 L875.91 9367.45 L875.72 9370.18 L875.66 9372.20 L875.59 9373.81 L875.41 9374.93 L875.22 9376.33 L874.21 9375.98 L873.77 9374.72 L873.65 9373.60 L873.27 9371.64 L873.21 9370.04 L873.27 9368.92 L873.65 9367.87 L874.21 9366.68 L874.97 9365.77 L875.66 9365.22 L876.47 9364.52 L877.41 9363.89 L878.17 9363.33 L879.11 9362.77 L880.05 9362.42 L880.61 9363.33 L880.80 9364.45 L880.99 9365.77 L881.30 9368.36 L881.37 9370.39 L881.37 9371.99 L881.49 9373.25 L881.49 9374.79 L881.56 9376.12 L881.99 9375.07 L882.12 9373.18 L882.31 9371.78 L882.50 9369.06 L882.68 9367.94 L882.94 9366.05 L883.19 9364.59 L883.44 9363.40 L883.75 9362.49 L884.32 9361.65 L885.63 9361.72 L886.01 9362.56 L886.39 9363.75 L886.89 9365.91 L887.14 9367.80 L887.26 9369.48 L887.58 9370.94 L887.70 9372.20 L887.89 9373.25 L888.14 9374.51 L888.46 9375.70 L889.46 9375.98 L890.34 9375.21 L891.59 9373.60 L892.79 9371.58 L893.35 9370.39 L894.23 9368.22 L894.98 9366.19 L895.48 9364.59 L895.80 9363.40 L895.80 9362.07 L894.73 9362.56 L894.10 9363.47 L893.23 9365.71 L892.79 9366.68 L891.91 9369.90 L891.85 9371.16 L891.91 9372.62 L892.35 9373.81 L893.35 9374.09 L894.10 9373.53 L894.61 9372.62 L895.05 9371.36 L895.30 9369.97 L895.55 9368.78 L895.74 9367.52 L895.55 9368.64 L895.48 9370.18 L895.55 9371.36 L895.80 9372.41 L896.24 9373.39 L896.99 9373.88 L897.93 9373.46 L900.13 9370.53 L901.07 9368.71 L901.70 9367.38 L902.20 9366.33 L902.64 9365.49 L903.08 9364.65 L903.14 9366.13 L903.14 9367.38 L903.26 9368.78 L903.26 9370.25 L903.39 9371.58 L903.64 9372.76 L904.02 9373.95 L904.83 9374.37 L905.52 9373.39 L906.46 9371.36 L906.78 9370.18 L907.09 9369.20 L907.53 9367.45 L907.85 9366.19 L908.10 9365.07 L908.47 9363.89 L908.79 9362.98 L910.04 9363.26 L910.79 9363.82 L911.74 9364.23 L912.86 9364.45 L913.93 9364.17 L914.81 9363.33 L915.19 9362.42 L915.56 9361.30 L914.81 9360.81 L914.18 9361.58 L913.18 9363.26 L911.86 9366.05 L911.36 9367.52 L911.11 9368.78 L910.92 9370.32 L911.17 9371.43 L911.99 9371.93 L913.18 9371.58 L914.94 9370.39 L916.57 9368.99 L918.57 9366.19 L919.20 9365.29 L920.21 9363.33 L920.83 9361.72 L921.40 9360.53 L921.71 9359.62 L922.03 9358.51 L921.77 9357.46 L921.27 9358.30 L921.02 9359.62 L920.96 9361.02 L920.83 9362.63 L920.83 9364.23 L921.02 9366.26 L921.08 9368.57 L921.21 9370.32 L921.40 9371.85 L921.46 9373.11 L921.65 9374.44 L921.77 9375.56 L921.96 9376.74 L922.15 9377.80 L922.15 9377.80" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M926.79 9375.07 L928.86 9372.69 L929.87 9371.36 L930.75 9370.25 L931.37 9369.20 L931.94 9368.36 L932.57 9367.38 L933.01 9366.47 L933.45 9365.63 L933.82 9364.65 L933.70 9363.61 L932.57 9364.03 L932.06 9364.87 L931.75 9366.13 L931.56 9367.52 L931.63 9369.06 L931.81 9370.60 L932.00 9371.99 L932.06 9373.25 L931.94 9374.51 L931.37 9375.35 L930.62 9376.05 L929.81 9376.47 L928.80 9376.74 L928.55 9375.70 L929.81 9374.44 L931.31 9373.04 L932.94 9371.43 L934.70 9369.90 L936.96 9367.59 L937.65 9366.96 L938.65 9365.91 L939.41 9365.22 L940.16 9364.31 L938.21 9365.84 L936.14 9368.71 L934.89 9370.60 L934.26 9371.51 L933.45 9373.04 L932.82 9374.23 L932.50 9375.21 L932.50 9376.47 L933.70 9376.67 L934.64 9375.98 L936.90 9373.60 L938.21 9371.78 L939.41 9369.90 L940.28 9368.57 L940.91 9367.52 L941.54 9366.54 L941.54 9367.87 L941.35 9369.34 L941.41 9370.74 L941.85 9371.64 L942.61 9372.34 L943.74 9372.62 L945.49 9372.06 L948.00 9370.74 L950.70 9368.64 L953.27 9365.84 L956.60 9361.02 L958.29 9357.74 L959.55 9355.08 L960.49 9352.71 L960.86 9351.80 L961.24 9350.26 L960.99 9348.93 L958.98 9349.56 L957.29 9351.59 L954.28 9356.41 L952.46 9360.18 L951.08 9364.23 L949.95 9368.22 L949.38 9371.93 L949.26 9375.28 L949.70 9378.35 L950.57 9381.08 L951.64 9383.45 L952.39 9384.43 L953.90 9385.90 L956.22 9387.16 L956.22 9387.16" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M840.14 9411.06 L839.64 9410.29 L839.70 9409.03 L840.14 9408.13 L840.58 9407.07 L840.90 9406.10 L841.15 9405.05 L841.27 9403.86 L841.27 9403.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M840.83 9406.73 L841.52 9406.10 L841.27 9404.98 L840.39 9404.56 L839.58 9405.19 L838.57 9407.22 L837.70 9409.59 L837.13 9412.11 L837.01 9413.51 L837.01 9415.81 L837.63 9419.44 L838.45 9421.61 L839.58 9423.15 L840.77 9424.20 L842.03 9424.62 L843.78 9424.54 L845.79 9423.57 L847.42 9422.17 L848.74 9420.22 L849.74 9417.84 L850.62 9415.60 L851.31 9412.81 L851.56 9411.48 L851.63 9410.01 L851.19 9409.10 L850.25 9409.52 L849.74 9410.50 L849.12 9412.81 L848.61 9414.83 L848.36 9416.51 L848.24 9418.05 L848.24 9419.31 L848.49 9420.70 L848.99 9421.75 L849.99 9422.03 L850.68 9421.40 L851.44 9420.14 L852.19 9417.70 L852.94 9413.85 L853.32 9411.41 L853.57 9409.45 L853.82 9407.91 L854.01 9406.65 L854.26 9405.68 L854.57 9404.35 L855.01 9403.44 L855.77 9402.81 L856.83 9403.23 L857.27 9404.14 L857.77 9406.23 L858.03 9408.68 L858.09 9409.87 L858.28 9411.97 L858.28 9413.93 L858.28 9415.60 L858.28 9417.00 L858.21 9418.19 L858.21 9419.65 L858.09 9420.84 L858.78 9419.16 L859.41 9416.44 L860.22 9413.85 L861.16 9411.48 L862.86 9408.54 L863.36 9407.77 L864.30 9406.59 L865.05 9405.89 L865.93 9405.54 L866.81 9406.23 L867.12 9407.42 L867.31 9408.75 L867.31 9412.32 L867.12 9414.27 L867.06 9415.74 L867.00 9416.93 L866.87 9418.19 L867.63 9417.14 L868.32 9414.69 L869.70 9411.13 L870.51 9409.03 L871.01 9407.98 L871.77 9406.59 L872.52 9405.47 L873.15 9404.77 L874.15 9404.49 L874.84 9405.33 L875.16 9406.59 L875.34 9410.22 L875.34 9412.39 L875.34 9414.13 L875.34 9415.67 L875.34 9417.35 L875.59 9418.54 L875.59 9418.54" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M883.94 9415.32 L884.32 9414.34 L884.19 9413.09 L881.74 9414.13 L880.11 9415.81 L878.67 9417.70 L877.54 9419.58 L876.91 9421.12 L876.60 9422.45 L876.60 9423.92 L877.16 9424.69 L878.36 9424.62 L880.61 9422.87 L882.06 9420.84 L883.31 9418.47 L884.25 9416.16 L885.01 9413.93 L885.63 9412.25 L886.01 9411.06 L886.45 9409.87 L886.39 9411.06 L886.26 9412.32 L886.20 9413.64 L886.26 9414.90 L886.45 9416.02 L886.89 9417.00 L887.96 9416.79 L889.15 9415.32 L889.84 9414.48 L890.90 9412.81 L891.78 9411.62 L892.35 9410.78 L893.04 9409.94 L893.73 9410.64 L893.79 9412.04 L893.98 9413.22 L894.04 9414.69 L894.36 9415.81 L895.23 9416.44 L896.30 9415.74 L898.12 9414.13 L899.44 9412.81 L900.63 9411.62 L901.57 9410.78 L902.20 9410.08 L903.08 9409.59 L904.02 9410.01 L904.52 9410.99 L904.83 9411.97 L905.15 9413.16 L906.03 9414.97 L906.03 9414.97" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M926.54 9415.60 L926.36 9414.06 L925.60 9413.09 L924.35 9412.67 L922.03 9412.87 L918.39 9414.27 L916.25 9415.67 L914.43 9417.28 L912.99 9419.03 L912.49 9419.80 L911.86 9421.12 L911.61 9422.17 L911.99 9423.15 L912.93 9423.57 L916.13 9422.52 L919.70 9419.65 L921.96 9416.86 L924.22 9413.43 L926.36 9409.59 L928.11 9405.47 L929.74 9401.42 L931.06 9397.78 L932.00 9395.05 L932.76 9392.68 L933.26 9391.00 L933.70 9389.82 L933.07 9393.03 L932.44 9396.17 L931.75 9400.09 L931.06 9404.35 L930.50 9408.75 L929.87 9413.16 L929.37 9417.14 L929.05 9420.63 L928.61 9425.31 L928.55 9426.43 L928.55 9426.43" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M951.64 9427.76 L951.64 9427.76" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M813.16 9410.85 L813.16 9412.11 L813.23 9415.18 L813.23 9418.47 L813.16 9422.17 L812.97 9425.94 L812.66 9429.93 L812.35 9434.19 L812.16 9436.08 L811.72 9439.78 L811.22 9443.42 L810.46 9448.59 L810.15 9451.73 L809.77 9454.87 L809.46 9457.67 L809.21 9459.91 L809.02 9461.73 L808.96 9463.12 L808.77 9464.66 L808.71 9465.92 L808.58 9467.11 L808.58 9468.43 L808.58 9468.43" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M842.40 9462.98 L841.15 9462.91 L839.70 9462.77 L838.57 9462.63 L839.33 9461.93 L839.33 9461.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M853.13 9460.89 L854.07 9461.16 L855.52 9461.03 L855.52 9461.03" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M875.22 9461.09 L876.16 9461.44 L877.29 9461.73 L878.61 9461.65 L878.61 9461.65" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M896.74 9462.63 L897.56 9463.12 L898.50 9463.47 L898.50 9463.47" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M915.69 9464.59 L916.63 9464.94 L917.57 9465.22 L917.57 9465.22" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1016.33 9253.68 L1015.83 9252.91 L1015.33 9253.75 L1014.57 9257.38 L1013.95 9260.25 L1013.45 9263.33 L1012.94 9266.47 L1012.63 9269.62 L1012.38 9274.30 L1012.44 9277.44 L1012.63 9279.05 L1012.94 9282.26 L1013.57 9285.55 L1014.45 9288.69 L1015.89 9292.19 L1017.71 9295.40 L1019.78 9298.41 L1022.23 9301.13 L1024.93 9303.72 L1027.69 9306.16 L1029.13 9307.42 L1033.52 9311.05 L1036.47 9313.36 L1039.55 9315.53 L1042.75 9317.62 L1046.20 9319.58 L1049.65 9321.19 L1053.04 9322.59 L1055.99 9323.71 L1058.94 9324.54 L1060.38 9324.89 L1063.14 9325.24 L1067.22 9325.45 L1069.98 9325.38 L1072.74 9325.03 L1075.37 9324.82 L1078.07 9324.26 L1080.71 9323.71 L1083.22 9322.94 L1084.41 9322.73 L1086.67 9321.96 L1088.61 9321.26 L1090.37 9320.77 L1091.75 9320.28 L1092.82 9319.93 L1094.07 9319.51 L1095.26 9319.09 L1096.21 9318.74 L1097.15 9318.39 L1097.15 9318.39" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1096.90 9310.63 L1098.40 9310.92 L1100.41 9313.22 L1101.54 9315.25 L1102.29 9317.55 L1102.79 9319.86 L1102.79 9322.23 L1102.17 9325.03 L1100.85 9328.11 L1098.90 9331.18 L1096.27 9334.33 L1093.07 9337.54 L1089.43 9340.13 L1089.43 9340.13" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1125.33" y="9342.03" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1125.33" dy="0">nikkto quét ra được cái gì?</tspan><tspan x="1125.33" dy="25"></tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1009.05 9257.45 L1007.99 9257.60 L1006.29 9260.32 L1005.04 9263.33 L1003.85 9267.31 L1002.84 9271.92 L1002.09 9277.09 L1001.65 9282.75 L1001.65 9288.62 L1001.84 9291.98 L1003.16 9302.18 L1004.79 9308.89 L1007.11 9315.95 L1009.99 9322.52 L1013.13 9328.25 L1016.90 9333.98 L1020.79 9338.94 L1024.68 9343.41 L1028.82 9347.67 L1033.08 9351.66 L1037.41 9355.29 L1041.62 9358.58 L1045.57 9361.58 L1048.96 9363.89 L1052.28 9365.84 L1055.48 9367.59 L1058.31 9369.13 L1061.01 9370.25 L1063.70 9371.16 L1066.40 9371.78 L1069.04 9372.27 L1071.74 9372.48 L1073.99 9372.48 L1077.82 9372.27 L1080.46 9371.99 L1081.52 9371.85 L1083.47 9371.51 L1085.16 9371.16 L1086.67 9370.81 L1088.80 9370.32 L1090.43 9369.83 L1091.88 9369.34 L1093.13 9368.78 L1094.32 9368.36 L1095.33 9367.94 L1096.27 9367.59 L1097.40 9367.17 L1097.40 9367.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1100.16 9358.72 L1099.16 9358.93 L1099.59 9360.04 L1100.47 9362.77 L1101.10 9365.22 L1101.41 9367.94 L1101.35 9370.81 L1100.72 9373.88 L1099.41 9376.96 L1097.27 9380.17 L1096.02 9381.78 L1090.81 9386.53 L1086.73 9388.83 L1082.97 9390.44 L1082.97 9390.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1127.64" y="9395.83" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1127.64" dy="0">cơ chế đặt lại mật khẩu??</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1144.21 9373.25 L1146.53 9373.95 L1149.66 9374.30 L1154.06 9374.93 L1159.52 9375.84 L1165.92 9376.89 L1173.45 9378.35 L1181.79 9379.96 L1190.51 9381.71 L1204.06 9384.50 L1216.11 9386.95 L1221.26 9387.93 L1230.54 9389.88 L1240.02 9391.70 L1251.06 9394.01 L1259.72 9395.89 L1268.00 9397.64 L1275.85 9399.46 L1282.43 9401.00 L1288.77 9402.60 L1294.73 9404.07 L1302.51 9405.75 L1307.03 9406.59 L1311.36 9407.36 L1314.81 9407.91 L1317.82 9408.40 L1319.20 9408.61 L1320.46 9408.82 L1322.28 9409.10 L1323.85 9409.38 L1324.91 9409.52 L1326.29 9409.66 L1327.61 9409.87 L1328.86 9410.01 L1330.31 9410.08 L1331.56 9410.22 L1331.56 9410.22" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1324.66 9384.15 L1323.91 9383.45 L1322.46 9382.83 L1321.40 9382.41 L1318.45 9381.85 L1311.48 9381.78 L1304.52 9382.27 L1295.30 9383.38 L1282.31 9385.13 L1268.94 9387.09 L1255.83 9389.11 L1244.28 9391.07 L1239.83 9391.84 L1231.23 9393.31 L1223.45 9394.71 L1216.80 9395.89 L1211.22 9396.87 L1204.63 9398.41 L1201.37 9399.39 L1198.86 9400.43 L1197.73 9401.00 L1197.73 9401.00" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1365.51 9391.63 L1365.76 9392.68 L1369.08 9393.17 L1372.85 9393.24 L1377.37 9393.24 L1382.26 9393.17 L1387.16 9392.89 L1391.80 9392.75 L1393.74 9392.61 L1397.45 9392.33 L1400.65 9391.91 L1403.47 9391.56 L1406.48 9390.86 L1407.55 9390.30 L1408.24 9389.60 L1408.24 9389.60" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1409.43 9381.22 L1410.25 9381.64 L1410.75 9382.69 L1410.94 9383.80 L1410.25 9386.95 L1408.93 9389.33 L1407.05 9391.56 L1404.60 9394.01 L1402.15 9395.96 L1399.96 9397.64 L1398.14 9398.90 L1396.76 9399.60 L1396.76 9399.60" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1435.34 9379.33 L1435.72 9378.35 L1436.16 9379.19 L1436.10 9380.94 L1435.59 9383.66 L1434.90 9386.39 L1434.28 9389.40 L1433.65 9392.26 L1433.15 9394.78 L1432.90 9396.03 L1432.52 9397.92 L1432.39 9399.39 L1432.39 9400.65 L1432.39 9400.65" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1446.20 9385.13 L1445.26 9384.50 L1444.06 9384.92 L1442.81 9385.83 L1441.30 9387.44 L1439.86 9389.18 L1438.67 9391.21 L1437.85 9393.17 L1437.54 9394.78 L1437.54 9396.03 L1437.92 9397.15 L1439.30 9398.41 L1440.24 9398.76 L1443.00 9398.41 L1444.25 9397.99 L1446.45 9397.01 L1448.46 9395.75 L1450.09 9394.63 L1451.09 9393.52 L1451.78 9392.68 L1452.10 9391.70 L1451.16 9391.42 L1450.53 9392.05 L1449.84 9393.03 L1449.34 9394.08 L1449.21 9395.27 L1449.59 9396.59 L1450.28 9397.22 L1451.16 9397.57 L1452.28 9397.29 L1452.97 9396.52 L1453.29 9395.62 L1453.23 9394.43 L1452.60 9393.52 L1452.60 9393.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1468.54 9394.71 L1468.22 9393.73 L1467.47 9393.03 L1466.21 9393.03 L1465.34 9393.45 L1464.58 9394.15 L1463.89 9395.20 L1463.58 9396.31 L1463.64 9397.50 L1464.08 9398.48 L1465.02 9399.25 L1466.09 9399.67 L1467.47 9399.67 L1468.72 9399.39 L1469.79 9399.04 L1471.42 9398.34 L1473.24 9396.87 L1473.87 9396.10 L1472.74 9396.45 L1472.11 9397.50 L1471.61 9398.55 L1471.42 9399.74 L1471.48 9400.93 L1471.99 9401.76 L1472.86 9402.32 L1474.18 9402.46 L1475.19 9402.11 L1476.06 9401.49 L1476.57 9400.78 L1476.38 9399.67 L1475.37 9399.04 L1475.37 9399.04" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1500.16 9376.96 L1499.41 9376.40 L1497.15 9376.82 L1495.70 9377.23 L1492.00 9378.84 L1485.23 9382.48 L1482.65 9384.02 L1482.65 9384.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M996.00 9275.83 L995.06 9275.49 L994.50 9276.25 L994.12 9280.38 L994.12 9287.09 L994.31 9292.67 L994.68 9299.60 L995.19 9307.07 L995.81 9315.46 L996.57 9324.26 L997.63 9333.14 L998.76 9342.08 L999.45 9346.49 L1001.15 9355.08 L1003.53 9363.26 L1007.99 9374.51 L1011.63 9381.57 L1015.77 9388.00 L1020.10 9394.01 L1024.68 9399.46 L1029.07 9404.14 L1033.40 9408.19 L1037.66 9411.69 L1041.99 9414.83 L1046.26 9417.63 L1050.09 9419.65 L1053.92 9421.40 L1057.74 9422.66 L1061.51 9423.71 L1065.02 9424.34 L1068.35 9424.89 L1071.67 9425.31 L1074.68 9425.73 L1077.57 9426.02 L1080.27 9426.36 L1081.59 9426.64 L1083.78 9426.92 L1085.66 9427.06 L1087.17 9427.20 L1088.55 9427.34 L1090.06 9427.41 L1091.25 9427.55 L1092.63 9427.55 L1092.63 9427.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1101.41 9417.28 L1102.17 9416.79 L1103.05 9417.35 L1104.11 9418.47 L1105.24 9420.28 L1106.06 9422.52 L1106.43 9424.89 L1106.06 9428.81 L1105.24 9431.74 L1102.29 9436.92 L1098.90 9440.69 L1094.83 9444.33 L1090.18 9447.26 L1087.86 9448.59 L1087.86 9448.59" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1193.34" y="9491.43" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1193.34" dy="0">cookie: đoán được ko </tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1108.95" y="9444.13" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1108.95" dy="0">ứng dụng này authorise bằng cookie</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1387.78 9457.32 L1389.79 9457.67 L1394.25 9457.18 L1396.00 9456.97 L1399.89 9456.83 L1404.72 9456.62 L1409.87 9456.48 L1415.26 9456.41 L1420.79 9456.13 L1426.18 9455.85 L1431.33 9455.43 L1435.97 9455.16 L1438.10 9454.94 L1441.87 9454.60 L1446.64 9454.11 L1448.08 9453.97 L1450.28 9453.69 L1451.91 9453.48 L1453.29 9453.27 L1454.48 9452.92 L1455.48 9452.50 L1456.80 9451.66 L1458.18 9450.26 L1459.25 9448.65 L1459.94 9447.12 L1460.38 9445.51 L1460.44 9443.97 L1460.00 9440.48 L1459.69 9439.08 L1458.68 9436.36 L1457.43 9433.63 L1455.80 9430.83 L1453.79 9428.25 L1451.59 9425.94 L1449.21 9423.85 L1446.45 9421.89 L1443.19 9420.42 L1441.37 9419.65 L1435.72 9417.84 L1431.77 9417.14 L1428.06 9416.79 L1424.30 9416.72 L1419.97 9417.21 L1415.58 9418.19 L1411.12 9419.65 L1408.74 9420.63 L1404.22 9422.59 L1399.96 9424.69 L1396.38 9426.99 L1391.48 9430.34 L1388.85 9432.51 L1386.90 9434.89 L1385.59 9436.92 L1384.90 9439.22 L1385.40 9442.30 L1386.72 9444.60 L1389.35 9447.12 L1392.80 9449.42 L1396.76 9451.31 L1403.28 9453.55 L1405.48 9453.97 L1405.48 9453.97" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1427.63 9460.26 L1428.38 9459.42 L1429.01 9458.58 L1430.01 9458.09 L1431.08 9458.44 L1433.15 9460.19 L1434.53 9461.86 L1435.91 9463.61 L1437.41 9466.76 L1437.79 9467.87 L1438.10 9469.83 L1437.66 9472.91 L1437.35 9474.16 L1436.35 9476.61 L1434.53 9479.13 L1432.46 9481.78 L1429.76 9484.23 L1426.87 9486.46 L1423.86 9488.63 L1419.47 9491.14 L1418.09 9491.71 L1415.52 9492.82 L1412.88 9493.45 L1410.37 9493.94 L1409.18 9494.01 L1407.30 9494.01 L1405.79 9493.80 L1404.60 9493.59 L1403.72 9493.17 L1402.90 9492.40 L1402.90 9492.40" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1408.99 9480.11 L1408.17 9479.69 L1407.17 9479.89 L1404.60 9480.94 L1403.53 9481.36 L1401.40 9482.34 L1399.39 9483.46 L1397.70 9484.65 L1396.38 9485.97 L1395.75 9487.30 L1395.69 9488.77 L1396.44 9490.52 L1397.26 9491.56 L1399.89 9493.45 L1406.48 9496.04 L1412.32 9497.23 L1417.96 9497.93 L1417.96 9497.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1210.03 9416.51 L1209.71 9415.32 L1210.21 9414.27 L1211.22 9413.85 L1213.60 9413.85 L1216.99 9414.41 L1221.63 9416.02 L1227.85 9418.82 L1236.25 9423.50 L1241.08 9426.36 L1250.81 9432.65 L1260.35 9439.43 L1269.70 9446.70 L1283.25 9457.32 L1291.78 9464.17 L1299.37 9470.11 L1305.34 9474.79 L1311.36 9479.13 L1317.26 9483.32 L1322.28 9486.46 L1324.66 9488.07 L1329.24 9491.07 L1332.94 9493.38 L1336.14 9495.41 L1338.65 9496.94 L1341.73 9498.69 L1342.48 9499.25 L1343.55 9499.67 L1344.55 9499.04 L1344.55 9499.04" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1336.39 9425.38 L1334.39 9423.85 L1331.75 9422.52 L1329.37 9421.89 L1326.61 9421.82 L1323.41 9422.31 L1318.95 9424.06 L1313.37 9427.13 L1310.17 9429.23 L1297.43 9439.01 L1289.02 9446.70 L1280.99 9454.74 L1273.46 9462.70 L1267.06 9469.83 L1262.36 9475.21 L1258.28 9479.96 L1255.33 9484.23 L1254.14 9486.04 L1253.13 9487.72 L1253.13 9487.72" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1459.37 9477.38 L1460.82 9477.31 L1463.39 9476.61 L1466.97 9475.63 L1471.05 9474.51 L1475.44 9473.33 L1479.83 9472.14 L1483.97 9471.09 L1487.92 9470.11 L1491.25 9469.55 L1494.26 9468.85 L1496.96 9468.36 L1499.22 9467.94 L1500.91 9467.60 L1500.91 9467.60" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1500.66 9461.86 L1500.35 9460.96 L1501.04 9460.12 L1502.04 9460.33 L1504.05 9462.56 L1505.18 9464.38 L1505.93 9466.48 L1506.18 9468.50 L1506.06 9470.46 L1505.43 9473.18 L1504.24 9475.77 L1502.48 9478.22 L1500.60 9480.31 L1498.59 9481.85 L1497.59 9482.27 L1495.96 9482.41 L1495.96 9482.41" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1523.69 9441.32 L1524.32 9440.41 L1524.94 9439.50 L1526.01 9440.20 L1526.14 9444.33 L1526.14 9445.93 L1526.14 9449.42 L1525.88 9453.13 L1525.57 9456.90 L1525.13 9460.47 L1524.82 9463.82 L1524.44 9466.83 L1524.32 9468.22 L1524.13 9470.32 L1524.19 9471.72 L1524.19 9471.72" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1534.42 9454.87 L1533.85 9453.90 L1532.91 9453.55 L1531.78 9453.69 L1530.53 9454.53 L1527.83 9456.62 L1527.08 9457.67 L1525.70 9459.84 L1524.57 9462.28 L1523.81 9464.66 L1523.56 9465.85 L1523.44 9467.80 L1523.81 9469.20 L1524.57 9470.32 L1525.57 9471.09 L1526.64 9471.30 L1528.77 9471.58 L1533.85 9470.32 L1536.43 9469.06 L1538.56 9467.60 L1540.38 9465.99 L1541.13 9465.36 L1542.20 9463.96 L1542.76 9462.98 L1543.20 9461.86 L1542.07 9461.73 L1541.57 9462.49 L1541.26 9463.54 L1541.07 9464.80 L1541.26 9466.20 L1542.07 9468.02 L1542.70 9468.71 L1543.77 9469.55 L1544.90 9469.90 L1546.21 9469.83 L1547.16 9469.06 L1547.59 9467.80 L1547.41 9466.41 L1546.97 9465.15 L1546.03 9463.61 L1544.96 9462.63 L1544.02 9462.14 L1542.76 9462.22 L1542.76 9462.22" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1561.84 9465.99 L1562.53 9465.15 L1562.59 9463.96 L1561.71 9463.47 L1560.39 9463.75 L1557.13 9465.50 L1555.44 9466.69 L1554.75 9467.25 L1553.87 9468.36 L1553.49 9469.27 L1553.81 9470.39 L1555.19 9470.39 L1556.76 9469.83 L1558.89 9468.29 L1562.09 9465.50 L1564.16 9462.91 L1565.98 9460.05 L1566.61 9458.65 L1567.92 9455.85 L1568.99 9453.20 L1569.74 9450.82 L1570.06 9449.71 L1570.68 9448.17 L1571.00 9446.98 L1571.37 9445.72 L1570.18 9447.47 L1569.18 9450.26 L1568.24 9453.34 L1567.36 9456.55 L1566.98 9458.16 L1566.29 9461.16 L1565.60 9463.96 L1565.10 9466.62 L1564.66 9468.50 L1564.41 9469.97 L1564.28 9471.16 L1563.91 9472.07 L1562.84 9471.93 L1561.40 9469.69 L1560.58 9468.29 L1560.08 9466.96 L1559.83 9465.78 L1559.83 9464.24 L1560.21 9463.40 L1562.09 9461.73 L1564.03 9460.61 L1564.97 9460.19 L1566.54 9459.77 L1568.05 9459.42 L1569.24 9459.35 L1570.43 9459.28 L1571.75 9459.21 L1573.07 9459.35 L1573.82 9460.12 L1573.63 9461.51 L1573.32 9462.70 L1572.88 9465.01 L1572.50 9465.92 L1572.13 9467.53 L1571.88 9468.78 L1571.69 9469.97 L1571.88 9471.23 L1572.69 9472.00 L1573.95 9472.14 L1576.02 9472.00 L1578.72 9471.51 L1578.72 9471.51" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1576.90 9480.87 L1574.45 9481.99 L1574.45 9481.99" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1594.53 9474.16 L1594.90 9472.91 L1595.66 9471.37 L1596.85 9469.06 L1598.23 9466.34 L1599.86 9463.19 L1601.05 9460.74 L1601.74 9459.49 L1602.62 9457.32 L1603.12 9456.34 L1604.19 9453.76 L1604.50 9452.57 L1603.63 9452.15 L1603.06 9452.85 L1602.12 9455.78 L1601.56 9458.09 L1601.30 9459.35 L1601.05 9461.38 L1600.93 9463.05 L1601.05 9464.38 L1601.18 9465.57 L1601.81 9466.83 L1602.56 9467.60 L1603.56 9467.94 L1604.82 9467.94 L1607.26 9467.25 L1609.59 9466.34 L1612.79 9464.52 L1614.61 9463.12 L1616.24 9461.80 L1617.43 9460.67 L1618.25 9459.77 L1619.00 9458.72 L1618.94 9457.60 L1617.68 9458.02 L1615.86 9459.77 L1614.54 9461.51 L1613.41 9463.40 L1613.10 9464.31 L1612.60 9465.99 L1612.41 9467.45 L1612.54 9468.71 L1612.85 9469.69 L1613.54 9470.81 L1614.48 9471.30 L1615.86 9471.30 L1617.99 9469.83 L1618.68 9468.92 L1619.75 9466.96 L1620.44 9464.59 L1620.75 9462.22 L1620.88 9460.47 L1620.88 9459.07 L1620.75 9457.60 L1620.44 9456.55 L1620.19 9455.58 L1620.94 9454.81 L1622.14 9454.60 L1623.45 9454.74 L1624.46 9455.16 L1625.27 9455.78 L1625.65 9456.62 L1625.90 9457.74 L1626.03 9459.07 L1625.84 9460.61 L1625.84 9462.14 L1625.84 9463.54 L1625.90 9465.01 L1626.28 9466.20 L1626.84 9467.11 L1628.03 9467.45 L1628.97 9467.11 L1628.97 9467.11" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1615.11 9444.18 L1614.61 9443.34 L1615.11 9442.51 L1615.86 9441.74 L1616.80 9441.25 L1618.06 9441.04 L1618.94 9441.46 L1620.75 9443.07 L1622.20 9444.60 L1623.58 9446.28 L1624.83 9447.96 L1626.03 9449.63 L1626.53 9450.47 L1627.28 9451.73 L1627.97 9452.85 L1628.54 9453.69 L1628.54 9453.69" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1629.35 9436.36 L1630.23 9436.78 L1632.68 9438.38 L1636.38 9440.20 L1637.70 9440.69 L1639.26 9441.32 L1639.26 9441.32" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1493.32 9298.06 L1497.15 9297.36 L1503.36 9296.24 L1507.88 9295.33 L1512.14 9294.29 L1514.28 9293.80 L1518.04 9292.68 L1518.04 9292.68" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1519.05 9281.63 L1520.24 9281.98 L1520.99 9282.82 L1521.62 9283.80 L1521.87 9285.27 L1521.24 9287.93 L1520.17 9290.51 L1518.48 9293.23 L1515.47 9296.87 L1514.40 9297.92 L1512.65 9299.60 L1510.95 9300.64 L1509.70 9301.13 L1509.70 9301.13" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1533.73 9273.25 L1534.36 9272.41 L1534.92 9271.71 L1536.05 9272.34 L1536.80 9275.14 L1537.18 9277.93 L1537.43 9281.15 L1537.62 9284.50 L1537.56 9287.85 L1537.37 9291.14 L1537.18 9292.75 L1536.86 9297.22 L1536.80 9298.41 L1536.61 9300.22 L1536.55 9301.41 L1536.55 9301.41" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1546.40 9283.45 L1545.65 9282.82 L1544.90 9282.34 L1543.70 9281.98 L1542.57 9282.20 L1541.45 9283.17 L1540.00 9284.71 L1538.75 9286.60 L1537.87 9288.76 L1537.30 9290.93 L1537.12 9292.61 L1537.30 9294.00 L1537.68 9295.05 L1538.31 9295.82 L1539.50 9296.10 L1542.32 9295.19 L1544.96 9293.45 L1547.66 9290.72 L1548.85 9289.11 L1551.17 9285.06 L1553.24 9280.73 L1554.68 9276.53 L1555.75 9272.83 L1556.44 9269.89 L1556.88 9267.45 L1557.01 9265.77 L1556.94 9264.58 L1556.19 9263.96 L1554.25 9266.40 L1552.74 9269.13 L1551.30 9272.62 L1550.61 9274.44 L1549.35 9278.28 L1548.35 9282.13 L1547.72 9285.48 L1547.16 9290.02 L1547.16 9292.33 L1547.34 9293.94 L1547.85 9295.13 L1548.47 9295.68 L1550.10 9295.54 L1552.24 9293.94 L1553.05 9293.17 L1554.43 9291.56 L1555.69 9289.88 L1556.57 9288.56 L1557.19 9287.65 L1557.88 9286.53 L1557.51 9287.43 L1557.26 9288.62 L1556.94 9290.79 L1556.76 9292.96 L1556.76 9294.49 L1556.94 9295.89 L1557.26 9296.87 L1557.88 9297.57 L1559.01 9298.06 L1560.21 9297.92 L1563.03 9296.73 L1563.85 9296.31 L1565.98 9294.36 L1566.61 9293.59 L1567.11 9292.75 L1566.79 9291.77 L1565.54 9292.05 L1563.66 9294.07 L1562.09 9296.73 L1561.59 9298.27 L1561.40 9299.53 L1561.71 9300.93 L1562.28 9301.69 L1563.28 9302.11 L1564.41 9302.04 L1565.79 9301.41 L1566.54 9300.85 L1567.23 9300.02 L1568.93 9297.08 L1569.68 9295.13 L1570.12 9293.65 L1570.37 9292.47 L1570.62 9291.49 L1569.99 9292.19 L1569.87 9293.59 L1569.87 9294.84 L1569.99 9296.24 L1570.25 9297.50 L1570.68 9298.41 L1570.68 9298.41" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1571.25 9268.92 L1571.25 9267.52 L1571.88 9266.68 L1573.38 9266.89 L1574.14 9267.66 L1574.83 9269.69 L1574.83 9273.25 L1574.14 9276.11 L1572.82 9279.61 L1570.87 9283.03 L1569.93 9284.64 L1569.93 9284.64" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1579.22 9294.36 L1579.85 9293.80 L1580.79 9294.29 L1580.79 9295.68 L1580.79 9296.94 L1580.79 9298.34 L1580.91 9299.74 L1581.16 9300.85 L1582.17 9300.16 L1583.36 9298.06 L1584.61 9295.54 L1585.81 9293.17 L1586.94 9291.14 L1587.94 9289.53 L1588.63 9288.49 L1589.26 9287.72 L1590.14 9288.07 L1590.14 9289.39 L1590.14 9290.65 L1590.14 9291.98 L1590.32 9293.45 L1590.32 9293.45" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1599.30 9294.42 L1598.86 9291.91 L1598.23 9290.93 L1597.41 9290.37 L1596.16 9290.51 L1595.28 9291.07 L1594.65 9291.91 L1594.21 9292.82 L1594.28 9294.29 L1594.97 9294.91 L1596.35 9294.84 L1597.10 9294.36 L1597.73 9293.80 L1598.42 9293.10 L1599.05 9292.40 L1599.30 9293.45 L1599.55 9294.42 L1600.05 9295.19 L1600.86 9295.68 L1600.86 9295.68" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1612.03 9291.56 L1612.41 9290.65 L1611.91 9289.81 L1610.65 9289.81 L1609.59 9290.16 L1608.14 9291.14 L1606.89 9292.26 L1606.26 9293.23 L1606.01 9294.29 L1606.39 9295.47 L1607.01 9296.31 L1607.89 9296.80 L1609.21 9296.94 L1610.46 9296.66 L1611.22 9295.96 L1611.85 9294.84 L1612.10 9293.65 L1612.35 9292.61 L1612.28 9291.35 L1611.85 9292.19 L1611.22 9295.33 L1610.72 9298.13 L1610.21 9301.00 L1609.71 9303.86 L1609.08 9306.73 L1608.71 9307.98 L1607.70 9311.83 L1607.01 9313.85 L1606.39 9315.32 L1605.51 9316.58 L1604.69 9317.34 L1603.69 9317.91 L1601.56 9317.56 L1599.42 9315.88 L1597.48 9312.80 L1596.10 9309.03 L1595.53 9306.86 L1595.53 9306.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1597.35 9268.71 L1596.91 9269.69 L1597.41 9270.67 L1598.54 9271.92 L1600.17 9273.46 L1601.12 9274.23 L1603.12 9275.56 L1605.26 9276.82 L1607.45 9277.65 L1609.71 9278.07 L1609.71 9278.07" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1633.18 9283.38 L1633.68 9284.15 L1633.74 9282.96 L1632.99 9282.47 L1630.92 9283.80 L1629.23 9285.48 L1628.47 9286.53 L1627.03 9288.69 L1625.40 9292.05 L1624.77 9294.29 L1624.52 9295.96 L1624.52 9297.36 L1624.77 9298.41 L1625.27 9299.18 L1626.40 9299.60 L1628.97 9299.18 L1631.05 9298.06 L1633.18 9296.66 L1635.06 9294.91 L1636.69 9293.17 L1638.07 9291.42 L1639.14 9289.81 L1639.77 9288.62 L1640.21 9287.65 L1640.02 9286.25 L1638.76 9286.67 L1636.44 9289.39 L1635.88 9290.23 L1634.87 9292.26 L1634.25 9293.94 L1633.93 9295.33 L1633.99 9296.52 L1634.50 9297.78 L1635.56 9298.41 L1638.26 9297.92 L1640.96 9295.96 L1642.34 9294.49 L1643.28 9293.23 L1643.97 9292.40 L1644.47 9291.42 L1643.53 9291.77 L1643.03 9292.61 L1642.53 9293.80 L1642.28 9294.91 L1642.21 9296.24 L1642.53 9297.29 L1643.28 9297.99 L1644.41 9298.27 L1645.66 9297.99 L1648.86 9296.31 L1650.43 9294.71 L1651.75 9293.23 L1652.50 9292.05 L1652.88 9291.14 L1652.38 9290.37 L1651.25 9291.56 L1649.68 9293.87 L1648.86 9295.89 L1648.30 9297.57 L1648.05 9299.18 L1648.11 9300.43 L1648.43 9301.34 L1648.93 9302.11 L1649.87 9302.81 L1651.25 9302.60 L1652.38 9301.76 L1653.70 9300.02 L1654.51 9297.92 L1654.83 9296.03 L1655.01 9294.49 L1654.95 9292.82 L1654.70 9291.77 L1654.70 9291.77" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1663.36 9281.56 L1664.05 9280.94 L1664.55 9281.98 L1664.55 9284.92 L1664.49 9287.93 L1664.30 9291.14 L1663.99 9294.29 L1663.74 9297.22 L1663.42 9299.94 L1663.30 9301.97 L1663.30 9303.44 L1663.30 9303.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1672.71 9295.19 L1672.08 9294.42 L1670.76 9294.63 L1669.88 9295.26 L1669.13 9296.31 L1668.69 9297.29 L1668.19 9299.11 L1667.94 9300.51 L1668.06 9301.69 L1668.50 9302.60 L1669.13 9303.30 L1670.39 9303.72 L1671.83 9303.65 L1674.34 9302.95 L1676.54 9301.97 L1678.48 9300.85 L1679.23 9300.36 L1680.49 9299.60 L1681.30 9298.83 L1682.12 9298.06 L1680.99 9297.92 L1680.24 9298.55 L1678.73 9300.43 L1678.23 9301.27 L1677.48 9302.67 L1677.04 9304.00 L1676.97 9305.47 L1677.48 9306.51 L1678.29 9307.00 L1679.55 9307.00 L1680.30 9306.51 L1680.93 9305.67 L1680.99 9304.28 L1680.99 9302.88 L1680.93 9301.55 L1680.93 9301.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1700.82 9300.93 L1700.88 9299.74 L1700.13 9298.97 L1698.68 9299.11 L1696.68 9301.00 L1695.48 9302.53 L1694.79 9303.79 L1694.54 9304.91 L1694.79 9306.16 L1695.74 9306.65 L1698.31 9305.96 L1700.50 9304.56 L1703.01 9302.25 L1705.27 9299.32 L1706.28 9297.57 L1706.28 9297.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1708.97 9291.21 L1710.23 9287.09 L1711.36 9283.66 L1712.17 9280.80 L1712.80 9278.49 L1713.12 9277.09 L1711.11 9279.61 L1709.85 9282.34 L1708.60 9285.41 L1707.97 9287.09 L1706.72 9290.65 L1705.71 9294.07 L1704.52 9298.76 L1703.96 9301.62 L1703.52 9304.14 L1703.20 9306.09 L1702.83 9307.42 L1702.57 9308.40 L1701.63 9307.84 L1701.51 9306.51 L1701.57 9305.12 L1702.14 9303.30 L1702.70 9302.25 L1704.33 9299.81 L1705.08 9299.18 L1706.72 9297.92 L1708.41 9297.08 L1709.85 9296.45 L1711.11 9296.03 L1712.11 9295.82 L1713.24 9295.54 L1714.37 9295.82 L1714.12 9297.08 L1713.37 9298.55 L1712.80 9299.67 L1711.67 9301.83 L1710.61 9304.14 L1709.41 9307.28 L1709.23 9308.96 L1709.60 9310.29 L1711.11 9311.89 L1713.12 9312.60 L1715.75 9312.31 L1715.75 9312.31" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1734.14 9325.87 L1731.44 9327.69 L1730.25 9328.39 L1729.24 9328.74 L1729.24 9328.74" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260829233123_151.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829233123_151.png"><g transform="translate(-162.80,29.87)">
<image x="588.6116917626196" y="9550.60592434668" width="487.0639265955339" height="208.14098733650866" href="../0-asset/pasted-image-20260829233123_151.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1005.35 9626.36 L1004.85 9625.31 L1004.41 9624.48 L1004.91 9623.50 L1008.05 9622.73 L1011.12 9622.17 L1015.14 9621.89 L1019.91 9621.54 L1024.99 9621.26 L1030.01 9621.26 L1037.60 9621.33 L1040.24 9621.54 L1045.19 9621.89 L1050.03 9622.31 L1054.86 9622.87 L1059.50 9623.36 L1064.08 9623.99 L1068.66 9624.48 L1073.24 9624.90 L1077.88 9625.25 L1082.59 9625.46 L1087.30 9625.73 L1094.45 9625.80 L1098.53 9625.80 L1102.29 9625.73 L1105.87 9625.67 L1107.63 9625.67 L1110.89 9625.46 L1113.96 9625.25 L1116.85 9624.96 L1118.17 9624.90 L1120.36 9624.62 L1122.06 9624.48 L1123.37 9624.41 L1124.57 9624.20 L1125.95 9624.13 L1127.14 9623.99 L1128.27 9623.78 L1129.40 9623.64 L1130.47 9623.50 L1131.59 9623.22 L1132.85 9623.08 L1133.92 9622.80 L1134.86 9622.45 L1135.74 9622.03 L1135.74 9622.03" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1137.68 9609.03 L1137.81 9607.71 L1138.81 9607.36 L1139.75 9607.71 L1140.38 9608.61 L1140.69 9609.87 L1140.69 9611.83 L1140.19 9614.69 L1139.25 9617.56 L1136.49 9621.96 L1133.54 9624.83 L1129.40 9627.76 L1124.13 9630.14 L1121.37 9631.05 L1121.37 9631.05" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1000.83" y="9612.33" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1000.83" dy="0">quét sqlmap</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260829233242_469.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829233242_469.png"><g transform="translate(-162.80,29.87)">
<image x="1156.0985464896144" y="9544.725605480224" width="697.533260569853" height="169.0201749749877" href="../0-asset/pasted-image-20260829233242_469.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1423.49 9333.77 L1422.67 9334.47 L1422.29 9335.59 L1422.73 9336.42 L1424.87 9338.03 L1428.57 9339.50 L1430.14 9339.92 L1433.78 9340.69 L1437.98 9341.18 L1442.50 9341.53 L1446.64 9341.67 L1450.59 9341.95 L1454.11 9342.02 L1457.43 9342.15 L1460.19 9342.22 L1462.20 9342.44 L1463.64 9342.51 L1464.90 9342.64 L1464.90 9342.64" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1462.07 9331.11 L1461.64 9330.13 L1463.33 9329.65 L1464.08 9330.35 L1465.27 9332.23 L1465.84 9334.33 L1465.84 9336.35 L1465.34 9338.87 L1464.40 9341.53 L1462.83 9343.97 L1460.38 9346.28 L1456.93 9347.89 L1454.98 9348.44 L1454.98 9348.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1477.45" y="9349.16" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1477.45" dy="0">missconfiguration</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1247.77 9238.61 L1247.59 9237.49 L1247.46 9236.16 L1246.90 9235.32 L1243.95 9237.42 L1240.50 9240.21 L1236.10 9243.70 L1230.58 9247.97 L1224.75 9252.30 L1221.73 9254.40 L1215.96 9258.31 L1208.81 9263.07 L1204.35 9265.65 L1200.72 9267.61 L1197.70 9268.94 L1195.13 9269.63 L1193.19 9269.36 L1193.19 9269.36" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1205.23 9232.80 L1206.42 9233.16 L1207.93 9234.06 L1210.25 9235.67 L1213.08 9237.77 L1216.15 9240.07 L1219.54 9242.52 L1222.99 9245.03 L1226.88 9247.97 L1230.90 9250.90 L1234.97 9253.70 L1238.55 9256.14 L1242.06 9258.59 L1245.08 9260.69 L1247.77 9262.65 L1249.91 9264.32 L1249.91 9264.32" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1259.51 9274.03 L1259.88 9275.01 L1260.45 9275.85 L1261.58 9275.78 L1261.58 9275.78" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1005.89 9229.45 L1006.96 9226.72 L1007.84 9224.98 L1010.10 9220.92 L1012.92 9216.31 L1015.93 9211.42 L1019.07 9206.53 L1022.33 9201.64 L1025.72 9196.61 L1027.48 9194.16 L1033.81 9186.19 L1038.33 9181.02 L1043.22 9176.06 L1048.56 9171.45 L1054.27 9167.05 L1060.35 9162.99 L1066.69 9159.36 L1073.09 9156.14 L1075.98 9154.89 L1081.94 9152.72 L1088.02 9150.69 L1097.00 9148.39 L1102.39 9147.48 L1107.10 9146.85 L1111.74 9146.50 L1115.63 9146.29 L1119.46 9146.22 L1121.41 9146.22 L1125.17 9146.22 L1128.87 9146.15 L1132.64 9146.08 L1136.78 9145.87 L1140.98 9145.66 L1145.31 9145.31 L1151.40 9144.89 L1155.10 9144.54 L1156.86 9144.40 L1160.12 9144.19 L1163.07 9143.84 L1165.77 9143.70 L1168.15 9143.35 L1169.91 9143.21 L1171.35 9143.00 L1172.98 9142.87 L1174.11 9142.80 L1175.24 9142.58 L1175.24 9142.58" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1169.53 9134.62 L1169.41 9133.36 L1169.91 9132.45 L1170.79 9131.82 L1171.73 9131.47 L1172.86 9131.75 L1173.48 9132.45 L1173.61 9133.64 L1173.48 9135.53 L1172.54 9138.18 L1171.10 9140.98 L1168.84 9144.05 L1165.45 9147.13 L1161.31 9149.78 L1159.55 9150.76 L1159.55 9150.76" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1203.18" y="9155.49" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="1203.18" dy="0">pathtravesal trên url pagram</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">

<rect x="202.81066160909995" y="9794.033962270305" width="850" height="983" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="202.81066160909995" y="9794.033962270305" width="850" height="983" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Ghi chú Markdown</span>
      </div>
      <a href="#doc-ed665c6a396f9b2a95e69edf11855e4ca3b08bec" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Nhìn sơ đồ này có 3 điểm hở cực to, xâu chuỗi lại là thấy ngay bài bypass login:</p>
<ol>
<li>Lỗ hổng LFI ở tính năng đổi theme (<code>footer.php?skin=...</code>)</li>
</ol>
<ul>
<li>Web có thư mục <code>skins/</code> chứa các file <code>default.php</code>, <code>blue.php</code>, <code>green.php</code>, <code>red.php</code>.</li>
<li>Khi người dùng bấm chọn màu trên giao diện, server gọi <code>footer.php?skin=blue</code>. Điều này cho thấy backend đang nối chuỗi kiểu <code>include(&quot;skins/&quot; . $_GET[&#39;skin&#39;] . &quot;.php&quot;)</code> hoặc <code>include($_GET[&#39;skin&#39;])</code>.</li>
<li>Đây chính là điểm vào (entry point) để khai thác LFI.</li>
</ul>
<ol start="2">
<li>Đọc mã nguồn <code>config.php</code> bằng PHP Wrapper</li>
</ol>
<ul>
<li>Thư mục gốc có file <code>config.php</code>. Mày mở trực tiếp qua trình duyệt thì thấy trắng trơn (0 bytes) vì PHP thực thi mã chứ không in ra màn hình.</li>
<li>Nhưng nếu tận dụng LFI ở tham số <code>skin</code> kết hợp với PHP filter để đọc file dưới dạng base64:
<code>?skin=php://filter/convert.base64-encode/resource=../config</code> (hoặc <code>resource=config.php</code>)</li>
<li>Lúc này server sẽ trả về chuỗi base64 của file <code>config.php</code>. Giải mã ra là đọc được thông tin nhạy cảm bên trong, thường là mật khẩu cứng của admin hoặc thông tin kết nối database để login thẳng vào <code>index.php</code>.</li>
</ul>
<ol start="3">
<li>Đọc mã nguồn kiểm tra đăng nhập (<code>index.php</code>, <code>header.php</code>)</li>
</ol>
<ul>
<li>Dùng tiếp bài PHP filter để đọc source code của <code>index.php</code> hoặc <code>includes/header.php</code> xem dev viết logic xác thực như thế nào.</li>
<li>Nhiều bài lab viết logic auth rất ngớ ngẩn (ví dụ chỉ check xem có cookie <code>role=admin</code>, <code>admin=true</code> hay <code>logged_in=1</code> không). Đọc được code là biết ngay cách chế cookie để nhảy thẳng vào <code>dashboard.php</code> mà không cần tài khoản.</li>
</ul>
<ol start="4">
<li>Tận dụng <code>info.php</code> (phpinfo)</li>
</ol>
<ul>
<li>Mở <code>[http://10.48.187.204/info.php](http://10.48.187.204/info.php)</code> để soi:</li>
<li>Cấu hình <code>allow_url_include</code>: nếu đang <code>On</code> thì ném link RFI vào <code>?skin=</code> để lấy shell luôn khỏi cần login.</li>
<li>Mục <code>Environment</code> / <code>PHP Variables</code>: nhiều khi dev lưu luôn pass admin hoặc API key trong biến môi trường của server.</li>
</ul>
<p>Các bước mày nên làm ngay:
Bắt request <code>footer.php?skin=default</code> ném vào Burp Repeater, đổi <code>skin</code> thành <code>php://filter/convert.base64-encode/resource=../config</code> hoặc thử lùi thư mục <code>../../../../etc/passwd</code> để test LFI trước.</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-162.80,29.87)">
<text x="311.26" y="9786.02" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="311.26" dy="0">mình ném cây thư mục cho con gemini , bảo nó phân tích thử</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M242.61 9876.37 L242.68 9875.19 L243.49 9874.70 L246.19 9874.62 L249.39 9874.35 L251.34 9874.21 L256.36 9873.86 L262.25 9873.51 L272.86 9873.09 L280.01 9873.02 L287.04 9873.09 L293.75 9873.23 L299.59 9873.51 L305.17 9873.93 L307.93 9874.07 L313.27 9874.49 L318.47 9874.84 L323.74 9875.19 L328.70 9875.32 L333.41 9875.46 L339.74 9875.26 L343.63 9875.11 L347.15 9874.84 L348.78 9874.70 L351.85 9874.35 L354.68 9874.00 L361.58 9872.25 L363.46 9871.48 L367.98 9868.97 L369.23 9867.91 L370.61 9866.52 L371.56 9865.12 L372.06 9863.65 L372.18 9862.04 L371.93 9859.32 L370.93 9856.39 L368.98 9853.10 L365.97 9849.75 L345.58 9838.15 L341.75 9836.82 L304.79 9827.87 L295.70 9826.62 L291.24 9826.06 L281.83 9825.29 L272.29 9825.01 L262.82 9825.22 L253.72 9826.06 L245.00 9827.52 L232.95 9830.95 L225.61 9833.95 L218.96 9837.59 L216.01 9839.54 L211.12 9843.60 L207.48 9847.51 L204.97 9851.42 L203.52 9855.06 L203.27 9858.55 L204.21 9862.26 L206.41 9866.31 L209.61 9870.57 L213.63 9874.70 L218.77 9879.10 L224.61 9882.87 L231.26 9886.22 L238.72 9888.74 L246.82 9890.70 L255.67 9891.89 L265.27 9892.38 L275.05 9892.02 L275.05 9892.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M582.38 9878.33 L584.83 9878.40 L588.97 9878.61 L594.68 9879.17 L601.70 9879.80 L610.05 9880.64 L619.34 9881.48 L629.19 9882.38 L639.29 9883.08 L644.43 9883.50 L654.72 9884.13 L664.76 9884.62 L679.51 9885.39 L688.67 9885.81 L696.32 9886.16 L703.54 9886.57 L710.32 9886.93 L716.40 9887.34 L719.10 9887.48 L724.25 9887.90 L729.01 9888.25 L733.53 9888.60 L737.23 9888.95 L742.25 9889.37 L745.14 9889.58 L747.59 9889.79 L749.28 9889.93 L750.60 9890.00 L752.23 9890.14 L753.49 9890.21 L754.93 9890.21 L756.31 9890.14 L756.31 9890.14" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M465.55 10005.87 L466.68 10006.01 L468.87 10006.01 L472.76 10005.87 L477.66 10005.38 L482.93 10004.82 L489.20 10004.19 L494.98 10003.63 L500.56 10003.21 L505.89 10002.93 L508.53 10002.72 L513.55 10002.58 L521.08 10002.51 L526.03 10002.51 L531.18 10002.51 L536.39 10002.51 L541.72 10002.58 L547.18 10002.58 L552.51 10002.65 L555.15 10002.72 L560.29 10002.79 L565.31 10003.07 L570.08 10003.35 L574.72 10003.56 L579.18 10003.84 L585.89 10004.26 L590.47 10004.61 L595.12 10004.82 L597.38 10004.96 L601.96 10005.17 L606.47 10005.38 L610.49 10005.52 L614.44 10005.80 L618.33 10006.01 L622.03 10006.08 L625.74 10006.29 L631.32 10006.50 L633.08 10006.64 L636.84 10006.77 L640.67 10006.91 L644.43 10007.12 L648.32 10007.26 L652.21 10007.48 L656.10 10007.68 L660.12 10007.90 L664.07 10008.10 L668.09 10008.31 L670.03 10008.45 L676.25 10008.87 L680.45 10009.22 L684.28 10009.50 L688.54 10009.92 L692.69 10010.27 L697.01 10010.55 L700.59 10010.90 L704.17 10011.18 L705.92 10011.32 L709.38 10011.60 L712.70 10011.74 L715.90 10011.95 L720.36 10012.02 L721.61 10012.02 L723.87 10012.02 L725.81 10011.95 L727.45 10011.81 L728.95 10011.81 L730.14 10011.74 L731.65 10011.67 L732.90 10011.60 L734.16 10011.53 L734.16 10011.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M748.21 10013.13 L748.21 10013.13" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830005557_478.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830005557_478.png"><g transform="translate(-162.80,29.87)">
<image x="1071.3205740147514" y="9920.318921053684" width="711.3824847639461" height="463.62742704503677" href="../0-asset/pasted-image-20260830005557_478.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1331.05 10209.02 L1332.37 10208.81 L1332.37 10208.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M430.47 10326.21 L430.16 10324.96 L429.91 10323.77 L429.85 10322.16 L430.41 10320.21 L431.67 10318.46 L433.42 10317.34 L437.44 10317.97 L441.39 10320.13 L446.35 10324.19 L453.00 10330.69 L460.53 10338.86 L467.87 10347.46 L475.21 10355.99 L482.55 10364.23 L493.41 10376.32 L496.98 10380.23 L504.14 10387.99 L509.72 10394.07 L514.93 10399.87 L519.89 10405.53 L524.59 10410.91 L528.67 10415.46 L532.06 10419.37 L534.76 10422.37 L537.08 10424.96 L538.02 10425.94 L540.40 10428.39 L541.41 10429.50 L542.16 10430.13 L542.16 10430.13" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M460.09 10419.51 L460.09 10416.50 L461.47 10412.45 L466.74 10403.86 L473.52 10395.54 L481.67 10387.01 L491.34 10378.84 L502.00 10371.01 L513.23 10363.46 L518.82 10359.97 L530.11 10353.26 L540.84 10347.32 L550.57 10341.87 L557.91 10338.02 L563.74 10334.95 L570.65 10331.46 L574.03 10329.64 L576.54 10328.31 L577.74 10327.82 L578.68 10327.19 L580.12 10326.50 L580.94 10325.73 L580.94 10325.73" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M593.42 10334.39 L594.30 10335.16 L594.93 10335.72 L594.93 10335.72" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M449.23 10482.73 L448.98 10481.61 L448.73 10480.42 L450.55 10481.75 L456.20 10488.45 L463.29 10497.54 L471.26 10507.95 L476.21 10514.73 L486.25 10528.22 L496.73 10541.43 L506.90 10554.15 L515.37 10564.35 L523.34 10573.71 L530.61 10582.17 L538.21 10591.04 L541.97 10595.45 L543.67 10597.55 L546.49 10601.25 L548.75 10604.25 L550.44 10606.56 L551.76 10608.73 L552.76 10610.40 L553.52 10611.59 L554.14 10612.50 L554.71 10613.48 L554.71 10613.48" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M479.23 10604.67 L479.35 10601.60 L480.92 10596.84 L485.12 10588.18 L492.15 10576.86 L502.63 10562.39 L514.24 10548.49 L526.29 10535.70 L544.36 10518.44 L549.19 10513.96 L558.35 10505.72 L566.88 10498.03 L573.97 10491.53 L579.12 10486.57 L583.26 10482.51 L586.71 10478.81 L589.22 10475.95 L591.10 10473.50 L592.23 10471.68 L592.61 10470.49 L592.61 10470.49" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M629.44 10496.63 L630.57 10497.68 L630.57 10497.68" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M816.34 9996.17 L815.84 9995.26 L816.53 9994.63 L818.23 9996.30 L820.30 9999.24 L823.75 10006.37 L826.07 10012.31 L827.14 10015.94 L828.83 10023.77 L829.77 10032.29 L830.09 10041.38 L829.77 10050.26 L828.64 10060.04 L826.45 10072.62 L823.43 10084.64 L819.61 10095.89 L817.41 10101.20 L810.45 10114.97 L806.05 10121.82 L800.34 10129.64 L795.32 10135.65 L790.05 10141.38 L784.41 10146.55 L778.57 10151.17 L772.67 10155.01 L767.40 10158.02 L764.83 10159.27 L759.56 10161.72 L754.41 10163.89 L746.82 10166.75 L742.56 10168.29 L738.35 10169.62 L734.27 10170.88 L730.57 10172.06 L727.43 10172.90 L725.99 10173.39 L723.48 10174.16 L721.22 10174.79 L719.59 10175.20 L718.40 10175.56 L717.39 10175.77 L715.89 10175.69 L715.89 10175.69" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M729.57 10158.02 L729.38 10156.90 L728.44 10156.55 L727.62 10157.73 L725.93 10159.69 L724.92 10160.67 L722.67 10163.18 L720.28 10165.91 L717.83 10168.64 L715.70 10171.08 L714.07 10173.25 L712.50 10175.14 L711.37 10176.60 L710.74 10178.00 L710.56 10179.05 L710.81 10180.10 L711.43 10180.87 L713.50 10181.98 L716.33 10182.89 L720.28 10183.45 L724.99 10183.80 L730.51 10183.73 L737.60 10183.03 L737.60 10183.03" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M861.39 10033.13 L860.96 10032.29 L860.70 10033.34 L860.45 10034.60 L860.27 10035.65 L860.14 10036.84 L860.01 10038.09 L859.95 10039.56 L859.95 10040.82 L860.27 10041.73 L861.02 10041.24 L861.71 10040.40 L862.34 10039.49 L862.96 10038.66 L863.47 10037.75 L864.09 10036.91 L864.66 10037.75 L864.85 10038.86 L865.10 10040.05 L865.35 10041.24 L865.91 10042.22 L866.67 10042.85 L868.11 10042.85 L870.43 10041.59 L871.94 10040.05 L872.63 10039.28 L873.19 10038.66 L874.01 10037.26 L874.51 10036.21 L874.76 10035.02 L874.45 10034.04 L873.19 10034.32 L871.43 10036.00 L870.05 10037.68 L868.80 10039.63 L867.79 10041.59 L867.36 10042.50 L866.92 10044.11 L866.79 10045.43 L866.92 10046.97 L867.54 10047.88 L868.55 10048.16 L869.61 10047.95 L872.00 10046.83 L873.63 10045.43 L874.95 10043.82 L875.89 10042.50 L876.45 10041.52 L876.89 10040.61 L876.89 10039.35 L876.20 10039.98 L876.14 10041.38 L876.33 10042.64 L876.70 10043.69 L877.39 10044.24 L878.52 10043.97 L879.15 10043.34 L879.65 10042.57 L880.28 10041.66 L879.90 10042.78 L880.03 10044.11 L880.28 10045.08 L880.78 10046.20 L881.54 10046.83 L881.54 10046.83" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M872.88 10029.15 L873.13 10028.17 L873.69 10027.33 L874.38 10026.57 L875.01 10026.00 L876.08 10025.58 L877.21 10025.86 L878.52 10027.75 L879.40 10029.50 L880.28 10030.97 L880.28 10030.97" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M894.34 10017.41 L892.83 10019.58 L892.08 10022.09 L891.39 10025.03 L891.07 10026.57 L891.07 10026.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M902.05 10041.94 L901.93 10040.75 L901.80 10039.21 L901.43 10038.30 L900.67 10037.68 L899.73 10038.09 L898.92 10039.77 L898.04 10042.01 L897.79 10042.98 L897.66 10044.88 L897.79 10046.48 L899.98 10049.56 L900.92 10050.11 L902.87 10050.39 L905.13 10050.26 L907.70 10049.42 L910.21 10048.09 L912.47 10046.27 L914.41 10044.38 L915.86 10042.43 L916.42 10041.59 L917.11 10040.33 L917.11 10039.08 L916.05 10039.35 L914.79 10040.82 L914.16 10041.73 L913.16 10043.48 L912.72 10044.38 L912.34 10045.85 L912.16 10047.11 L912.34 10048.65 L912.91 10049.56 L914.10 10049.77 L915.04 10049.35 L915.86 10048.58 L916.36 10047.74 L916.61 10046.55 L916.30 10045.50 L915.54 10045.01 L914.60 10044.59 L914.60 10044.59" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M927.21 10025.31 L926.15 10025.86 L924.96 10027.12 L923.51 10029.36 L922.19 10032.15 L920.75 10035.51 L919.56 10038.93 L919.56 10038.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M939.32 10039.28 L939.39 10038.02 L938.82 10038.72 L937.88 10041.52 L937.50 10042.78 L936.69 10045.36 L935.87 10047.95 L934.99 10050.60 L934.05 10053.12 L933.05 10055.57 L932.05 10057.59 L930.60 10059.76 L929.79 10060.46 L928.41 10060.46 L927.84 10059.34 L927.59 10058.36 L927.59 10056.82 L928.59 10053.89 L929.66 10052.14 L932.23 10049.97 L934.24 10049.00 L936.63 10048.23 L939.07 10047.74 L940.33 10047.53 L942.78 10047.25 L944.78 10046.97 L946.48 10046.69 L947.98 10046.41 L949.68 10045.85 L951.31 10044.94 L952.88 10043.69 L954.26 10042.08 L955.26 10040.05 L955.89 10037.68 L956.27 10035.16 L956.33 10033.97 L956.33 10032.15 L956.27 10030.76 L955.89 10029.85 L955.14 10029.15 L954.13 10029.50 L952.56 10031.11 L950.24 10034.81 L948.74 10038.09 L947.29 10041.59 L946.73 10043.40 L945.54 10046.97 L944.59 10050.11 L943.78 10052.84 L943.28 10055.15 L942.84 10056.75 L942.65 10057.94 L943.34 10058.71 L944.09 10058.01 L945.03 10057.17 L946.67 10055.57 L947.54 10054.66 L948.23 10053.82 L948.92 10052.98 L949.49 10052.28 L949.49 10053.68 L949.36 10055.01 L949.24 10056.13 L949.74 10056.89 L951.12 10056.82 L952.69 10055.91 L953.57 10055.22 L954.26 10054.66 L955.32 10053.61 L956.08 10052.84 L956.96 10052.14 L956.83 10053.26 L956.70 10054.45 L956.58 10055.84 L956.58 10055.84" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M954.13 10043.75 L953.63 10042.85 L954.32 10042.01 L955.39 10041.80 L956.58 10042.01 L956.58 10042.01" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M966.18 10033.41 L967.06 10032.71 L968.31 10032.57 L969.57 10032.71 L971.32 10033.06 L973.77 10033.76 L976.34 10034.60 L977.60 10035.09 L980.05 10036.21 L982.30 10037.26 L982.30 10037.26" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M982.81 10052.28 L982.74 10051.09 L982.93 10049.97 L983.18 10048.93 L983.56 10047.88 L984.31 10046.27 L985.13 10045.01 L985.88 10044.17 L986.89 10043.69 L987.89 10043.97 L988.20 10044.88 L987.95 10045.85 L986.38 10048.93 L984.75 10050.95 L983.81 10051.93 L982.05 10053.82 L981.05 10054.59 L981.05 10054.59" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M970.51 10067.80 L969.94 10068.49 L969.94 10068.49" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1383.69 10255.78 L1383.69 10255.78" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1664.09 10094.49 L1664.59 10093.51 L1664.66 10092.18 L1663.40 10089.18 L1661.65 10087.15 L1658.51 10085.06 L1656.44 10084.22 L1650.67 10082.68 L1643.95 10081.63 L1636.30 10081.00 L1623.81 10081.42 L1615.28 10082.54 L1608.00 10084.08 L1604.92 10084.98 L1599.47 10087.08 L1595.26 10089.88 L1592.56 10092.88 L1591.50 10096.17 L1592.06 10099.94 L1594.63 10104.13 L1599.78 10108.96 L1603.10 10111.19 L1619.29 10119.02 L1631.90 10123.08 L1644.96 10125.94 L1658.01 10127.97 L1668.23 10128.73 L1676.89 10128.80 L1685.87 10128.38 L1689.63 10128.04 L1696.59 10127.06 L1702.74 10125.80 L1707.76 10124.26 L1713.16 10121.33 L1715.36 10118.81 L1716.36 10116.08 L1716.36 10114.55 L1715.54 10111.19 L1713.03 10107.07 L1708.01 10102.11 L1700.55 10096.38 L1690.95 10090.30 L1680.78 10084.92 L1670.62 10080.24 L1666.29 10078.42 L1654.81 10074.86 L1647.47 10073.53 L1644.14 10073.38 L1644.14 10073.38" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1645.46 9970.17 L1644.96 9971.29 L1645.02 9972.48 L1645.46 9975.76 L1645.71 9979.88 L1645.90 9984.70 L1645.96 9987.36 L1645.90 9993.09 L1645.65 9999.94 L1644.45 10010.49 L1643.32 10017.27 L1642.07 10023.63 L1640.81 10029.50 L1640.12 10031.88 L1638.87 10036.35 L1637.36 10040.12 L1635.48 10043.27 L1633.22 10045.50 L1630.78 10047.11 L1628.33 10048.37 L1625.88 10049.14 L1624.63 10049.42 L1622.62 10049.49 L1622.62 10049.49" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1622.99 10035.16 L1622.68 10036.07 L1622.87 10037.60 L1623.12 10038.79 L1623.69 10040.82 L1624.19 10042.57 L1624.56 10044.04 L1624.88 10045.22 L1625.32 10046.48 L1625.76 10047.53 L1627.14 10047.46 L1629.71 10046.06 L1633.03 10043.97 L1637.36 10040.89 L1641.76 10037.26 L1643.83 10035.23 L1648.22 10030.90 L1648.22 10030.90" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1552.79" y="9953.06" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="1552.79" dy="0">mình bỏ qua chi tiết này</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1273.95 9280.00 L1273.13 9278.04 L1273.19 9276.85 L1274.14 9276.22 L1277.84 9276.92 L1280.91 9278.18 L1284.49 9280.00 L1288.63 9282.16 L1293.46 9284.89 L1298.29 9287.75 L1303.00 9290.62 L1307.45 9293.48 L1309.59 9294.81 L1313.04 9297.26 L1317.49 9300.75 L1319.88 9302.78 L1321.88 9304.53 L1323.64 9306.21 L1325.27 9307.74 L1326.03 9308.51 L1327.28 9309.56 L1328.47 9310.33 L1329.48 9310.75 L1329.48 9310.75" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1217.98 9300.96 L1220.68 9300.33 L1222.69 9299.77 L1228.27 9298.73 L1236.30 9297.33 L1245.96 9296.07 L1259.45 9294.67 L1272.82 9293.21 L1285.43 9292.30 L1318.06 9290.41 L1321.88 9290.20 L1328.98 9289.78 L1335.06 9289.36 L1340.08 9289.01 L1344.28 9288.66 L1347.86 9288.38 L1350.81 9288.10 L1352.25 9287.97 L1354.26 9287.82 L1355.89 9287.75 L1357.15 9287.68 L1358.59 9287.48 L1358.59 9287.48" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1441.92 9120.94 L1440.35 9119.13 L1438.34 9117.80 L1435.64 9116.61 L1429.43 9115.14 L1424.03 9114.72 L1417.19 9114.72 L1413.49 9114.93 L1405.46 9115.63 L1396.68 9116.89 L1387.89 9118.57 L1379.80 9120.38 L1372.39 9122.41 L1366.31 9124.44 L1358.59 9127.93 L1354.51 9130.38 L1352.82 9131.63 L1349.93 9134.15 L1347.80 9136.88 L1346.42 9139.39 L1345.73 9141.98 L1345.98 9144.49 L1347.23 9147.15 L1350.06 9149.81 L1354.51 9152.60 L1357.21 9153.86 L1368.25 9157.49 L1377.10 9159.66 L1386.39 9161.48 L1395.99 9163.08 L1405.71 9164.27 L1415.44 9165.11 L1425.16 9165.53 L1434.83 9165.39 L1439.53 9165.25 L1448.69 9164.76 L1457.16 9164.13 L1465.07 9163.15 L1472.22 9162.24 L1482.01 9160.36 L1487.34 9159.17 L1491.92 9157.84 L1495.75 9156.30 L1497.45 9155.39 L1500.39 9153.51 L1502.53 9151.62 L1503.97 9149.17 L1504.66 9146.31 L1504.22 9142.61 L1502.21 9138.27 L1498.64 9133.73 L1489.54 9127.09 L1479.19 9122.76 L1474.42 9121.22 L1465.70 9119.41 L1457.60 9118.29 L1450.58 9117.94 L1444.87 9118.08 L1442.29 9118.29 L1442.29 9118.29" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1511.81 9148.97 L1513.38 9148.97 L1517.21 9148.75 L1520.91 9148.62 L1528.07 9148.55 L1533.15 9148.62 L1538.04 9148.90 L1542.69 9149.17 L1546.58 9149.39 L1548.33 9149.59 L1551.59 9149.88 L1554.42 9150.22 L1555.49 9150.43 L1557.37 9150.57 L1557.37 9150.57" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1522.86 9159.17 L1521.67 9159.38 L1525.05 9158.82 L1529.01 9158.33 L1533.90 9157.77 L1539.23 9157.21 L1544.50 9156.79 L1549.78 9156.51 L1554.48 9156.23 L1558.43 9155.95 L1561.57 9155.81 L1564.08 9155.46 L1565.78 9155.04 L1565.78 9155.04" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1565.96 9139.53 L1566.78 9138.97 L1567.78 9139.25 L1568.72 9140.16 L1570.10 9141.91 L1571.17 9143.72 L1571.55 9144.70 L1572.05 9146.38 L1572.18 9148.06 L1571.55 9151.62 L1570.10 9154.49 L1567.91 9157.49 L1564.52 9160.71 L1560.32 9163.64 L1555.80 9166.30 L1555.80 9166.30" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1596.96 9150.50 L1595.89 9150.36 L1595.89 9150.36" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1604.99 9147.92 L1606.37 9147.99 L1606.37 9147.99" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1616.79 9148.90 L1618.04 9148.62 L1618.04 9148.62" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1629.65 9148.34 L1630.72 9147.99 L1630.72 9147.99" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1639.94 9149.81 L1639.94 9149.81" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M450.53 9978.13 L451.34 9978.55 L452.85 9978.55 L452.85 9978.55" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M515.59 9951.08 L516.66 9950.38 L519.92 9949.97 L523.18 9949.68 L526.82 9949.48 L530.65 9949.34 L534.60 9949.26 L538.62 9949.20 L542.70 9949.26 L546.59 9949.48 L550.60 9949.55 L554.49 9949.75 L558.38 9950.03 L560.33 9950.10 L566.04 9950.52 L569.74 9950.74 L573.32 9950.94 L576.83 9951.15 L579.97 9951.36 L582.98 9951.50 L585.80 9951.64 L588.00 9951.78 L589.76 9951.92 L591.26 9951.99 L592.64 9952.06 L593.77 9952.13 L595.40 9952.13 L596.78 9952.20 L598.29 9952.34 L599.73 9952.41 L601.11 9952.48 L602.68 9952.55 L603.81 9952.62 L605.13 9952.62 L606.45 9952.76 L607.83 9952.83 L609.21 9952.83 L610.59 9952.90 L612.03 9952.90 L613.47 9952.97 L615.04 9952.97 L616.55 9953.04 L618.18 9953.04 L620.88 9953.32 L622.89 9953.39 L624.64 9953.46 L626.21 9953.46 L627.59 9953.60 L628.97 9953.67 L630.73 9953.74 L632.42 9953.74 L633.93 9953.81 L635.56 9953.81 L637.07 9953.95 L638.51 9954.02 L639.95 9954.09 L641.40 9954.16 L642.71 9954.23 L644.16 9954.44 L645.41 9954.51 L646.60 9954.64 L647.86 9954.79 L649.05 9954.86 L650.24 9954.93 L651.50 9955.06 L652.69 9955.21 L653.88 9955.28 L653.88 9955.28" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830010129_340.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830010129_340.png"><g transform="translate(-162.80,29.87)">
<image x="1077.1987159519294" y="10405.436238209535" width="792.0507781308205" height="290.28726694346824" href="../0-asset/pasted-image-20260830010129_340.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1801.14 10431.41 L1784.32 10428.54 L1779.81 10428.26 L1771.08 10428.05 L1762.49 10428.47 L1758.16 10428.96 L1749.94 10430.71 L1742.41 10433.15 L1736.45 10436.02 L1730.43 10441.12 L1728.42 10445.04 L1727.73 10449.51 L1727.98 10451.82 L1729.42 10456.91 L1732.87 10462.30 L1738.27 10467.33 L1746.61 10472.57 L1757.59 10476.62 L1769.14 10478.58 L1775.04 10478.93 L1787.27 10478.51 L1807.10 10475.16 L1818.83 10471.80 L1827.18 10468.80 L1834.02 10465.58 L1837.03 10463.84 L1841.61 10460.55 L1845.06 10456.91 L1847.07 10452.93 L1847.45 10448.39 L1845.75 10443.15 L1841.61 10437.00 L1837.72 10433.15 L1821.85 10424.21 L1808.54 10420.36 L1793.92 10418.13 L1779.18 10417.43 L1767.63 10417.78 L1760.73 10418.62 L1754.33 10419.67 L1754.33 10419.67" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1257.83 10432.45 L1257.20 10431.76 L1256.64 10431.13 L1255.95 10430.50 L1254.88 10429.80 L1253.94 10429.52 L1252.50 10429.24 L1249.11 10429.59 L1246.16 10430.36 L1243.21 10431.55 L1241.70 10432.25 L1238.69 10433.99 L1235.99 10436.16 L1233.55 10438.54 L1231.66 10441.05 L1230.16 10443.85 L1229.15 10446.85 L1228.65 10450.00 L1228.72 10454.68 L1229.47 10457.68 L1230.66 10460.34 L1231.48 10461.53 L1233.61 10463.84 L1236.06 10465.51 L1238.69 10466.70 L1241.64 10467.26 L1244.65 10467.12 L1248.04 10466.07 L1251.55 10464.32 L1255.01 10461.81 L1260.40 10456.56 L1263.23 10452.93 L1265.42 10449.23 L1266.24 10447.48 L1267.62 10443.64 L1267.99 10440.28 L1267.74 10436.86 L1266.61 10433.57 L1264.73 10430.50 L1262.10 10427.98 L1258.90 10425.89 L1255.26 10424.28 L1249.61 10422.95 L1246.10 10422.32 L1242.83 10422.18 L1241.45 10422.11 L1241.45 10422.11" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1254.69 10415.68 L1253.94 10415.05 L1253.25 10414.49 L1253.44 10413.38 L1253.44 10413.38" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1022.57 9974.26 L1021.76 9974.68 L1022.01 9975.80 L1022.26 9976.78 L1022.82 9979.29 L1023.01 9980.41 L1023.45 9983.69 L1023.70 9984.88 L1024.01 9987.54 L1024.27 9990.33 L1024.64 9993.20 L1024.77 9996.34 L1025.14 9999.49 L1025.27 10002.77 L1025.46 10006.13 L1025.71 10011.23 L1025.83 10013.05 L1025.90 10016.47 L1026.15 10020.04 L1026.40 10023.60 L1026.59 10027.09 L1026.84 10030.73 L1027.15 10034.50 L1027.47 10038.20 L1027.84 10042.05 L1028.09 10044.14 L1028.41 10048.13 L1029.03 10054.00 L1029.41 10058.05 L1029.79 10062.17 L1030.16 10066.58 L1030.54 10070.98 L1030.98 10075.52 L1031.29 10080.00 L1031.73 10084.47 L1031.86 10086.70 L1032.23 10091.11 L1032.55 10095.23 L1032.80 10099.42 L1033.05 10105.71 L1033.05 10110.25 L1033.24 10114.87 L1033.36 10119.48 L1033.68 10124.30 L1033.93 10126.74 L1034.49 10131.78 L1035.25 10136.88 L1036.44 10142.19 L1037.69 10147.85 L1039.20 10153.44 L1040.83 10159.10 L1043.65 10167.70 L1045.85 10173.43 L1047.04 10176.44 L1049.43 10182.16 L1051.94 10187.75 L1054.76 10193.34 L1057.33 10199.01 L1059.90 10204.46 L1062.48 10210.12 L1064.92 10215.71 L1068.25 10223.89 L1070.32 10229.20 L1071.45 10231.78 L1073.40 10236.88 L1075.47 10241.71 L1077.35 10246.32 L1079.29 10250.79 L1081.11 10254.98 L1082.81 10259.18 L1084.69 10263.30 L1086.51 10267.42 L1087.45 10269.45 L1089.33 10273.43 L1092.03 10279.30 L1093.79 10283.07 L1095.54 10286.78 L1097.30 10290.42 L1099.18 10294.12 L1101.00 10297.82 L1102.82 10301.53 L1103.70 10303.27 L1105.58 10306.98 L1107.47 10310.68 L1109.41 10314.38 L1112.36 10319.91 L1114.30 10323.54 L1116.31 10327.10 L1118.32 10330.67 L1119.39 10332.42 L1121.58 10335.91 L1123.90 10339.19 L1126.23 10342.34 L1128.67 10345.34 L1131.12 10348.14 L1133.76 10350.72 L1136.39 10353.24 L1139.09 10355.62 L1140.34 10356.73 L1144.49 10360.09 L1147.25 10362.11 L1150.13 10364.00 L1152.83 10365.75 L1155.59 10367.43 L1158.35 10369.03 L1160.99 10370.43 L1162.37 10371.20 L1165.07 10372.60 L1167.64 10373.93 L1170.34 10375.11 L1174.35 10377.07 L1176.92 10378.19 L1179.37 10379.38 L1181.63 10380.56 L1182.82 10381.05 L1184.77 10382.17 L1186.65 10383.08 L1188.09 10383.85 L1189.22 10384.55 L1190.29 10385.11 L1191.10 10385.67 L1191.86 10386.15 L1192.86 10386.71 L1193.80 10387.34 L1194.56 10387.83 L1195.31 10388.39 L1196.06 10389.02 L1196.94 10389.72 L1197.76 10390.35 L1198.63 10391.12 L1199.45 10391.89 L1200.64 10392.86 L1201.71 10393.98 L1202.65 10394.89 L1203.53 10395.73 L1204.16 10396.50 L1204.85 10397.20 L1205.47 10397.96 L1206.04 10398.59 L1207.29 10400.06 L1208.30 10401.25 L1209.93 10403.07 L1210.49 10403.84 L1211.50 10405.02 L1212.38 10406.07 L1213.13 10407.05 L1213.82 10407.89 L1214.45 10408.66 L1215.07 10409.43 L1215.83 10410.33 L1216.58 10411.17 L1217.27 10412.01 L1218.02 10412.85 L1218.71 10413.69 L1219.47 10414.53 L1220.09 10415.36 L1220.78 10416.27 L1221.54 10417.11 L1222.23 10417.95 L1222.98 10418.79 L1223.67 10419.42 L1224.23 10420.12 L1224.92 10420.89 L1225.49 10421.58 L1226.12 10422.22 L1226.81 10422.91 L1227.56 10423.54 L1228.44 10424.17 L1229.32 10424.87 L1230.13 10425.43 L1230.89 10425.92 L1231.76 10426.55 L1232.70 10427.04 L1233.52 10427.53 L1234.46 10428.02 L1235.21 10428.57 L1236.03 10429.06 L1236.03 10429.06" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M948.16 10196.84 L948.66 10195.72 L949.16 10194.81 L952.42 10189.92 L953.80 10187.75 L955.18 10185.66 L956.50 10183.63 L957.07 10182.72 L958.01 10180.98 L958.57 10179.58 L959.01 10178.60 L959.26 10177.41 L958.76 10176.64 L957.63 10176.92 L956.81 10177.55 L956.00 10178.74 L954.68 10181.47 L954.37 10183.07 L954.37 10184.47 L954.56 10185.73 L954.87 10186.78 L955.31 10187.69 L955.87 10188.45 L956.88 10189.22 L957.94 10189.92 L959.07 10190.34 L960.27 10190.62 L961.46 10190.90 L962.71 10190.83 L963.97 10190.48 L966.29 10189.36 L967.04 10188.80 L968.05 10187.69 L968.80 10186.64 L969.24 10185.52 L969.36 10183.98 L969.24 10182.86 L968.61 10181.95 L967.67 10181.60 L967.04 10182.37 L966.79 10183.56 L966.92 10185.03 L967.36 10186.22 L967.92 10187.62 L968.99 10189.29 L970.05 10190.83 L971.06 10192.09 L972.00 10193.07 L972.81 10193.84 L973.69 10194.46 L973.69 10194.46" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M985.99 10183.98 L985.24 10183.49 L983.98 10183.00 L982.60 10182.86 L981.29 10183.14 L979.90 10183.77 L978.15 10184.82 L977.46 10185.45 L976.58 10186.50 L976.01 10187.62 L975.76 10188.66 L975.95 10189.92 L976.70 10190.83 L977.83 10191.32 L980.03 10191.04 L982.48 10190.06 L984.80 10188.45 L987.37 10186.22 L989.57 10183.42 L992.83 10176.71 L993.83 10173.36 L994.59 10170.42 L995.21 10167.91 L995.72 10164.83 L995.34 10163.85 L994.52 10164.62 L993.83 10166.72 L993.08 10169.38 L992.83 10170.98 L992.14 10174.27 L991.64 10177.69 L990.89 10182.79 L990.63 10186.08 L990.32 10189.15 L990.20 10191.81 L990.13 10193.76 L990.07 10195.23 L990.07 10195.23" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M999.29 10192.65 L998.73 10192.02 L998.16 10191.32 L998.16 10191.32" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1009.52 10188.45 L1009.02 10189.22 L1008.52 10190.41 L1007.70 10193.34 L1007.14 10196.14 L1006.76 10199.07 L1006.38 10202.29 L1006.32 10203.97 L1006.13 10207.25 L1006.07 10211.86 L1006.13 10214.73 L1006.26 10216.96 L1006.32 10218.57 L1006.38 10219.76 L1005.88 10215.92 L1005.63 10212.91 L1005.57 10208.51 L1005.63 10207.11 L1005.82 10204.81 L1006.07 10203.06 L1006.57 10201.17 L1007.32 10199.07 L1008.33 10197.26 L1009.52 10195.51 L1010.52 10194.46 L1011.40 10193.69 L1012.22 10193.27 L1013.60 10193.34 L1014.23 10194.18 L1014.60 10195.23 L1014.67 10196.49 L1014.35 10198.59 L1013.47 10200.75 L1012.41 10202.71 L1011.03 10204.25 L1010.40 10204.81 L1008.96 10205.51 L1007.70 10205.71 L1007.70 10205.71" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1021.25 10180.91 L1021.25 10182.24 L1020.81 10185.59 L1020.31 10188.52 L1020.12 10189.99 L1019.62 10192.93 L1019.25 10195.72 L1019.06 10197.05 L1018.81 10199.14 L1018.62 10200.68 L1018.56 10201.94 L1018.56 10203.20 L1019.50 10202.78 L1020.12 10202.22 L1022.26 10200.33 L1022.82 10199.71 L1023.95 10198.65 L1025.52 10197.12 L1026.34 10196.49 L1027.34 10196.84 L1027.47 10197.96 L1027.59 10199.42 L1027.72 10200.75 L1027.97 10201.80 L1027.97 10201.80" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1033.49 10199.36 L1033.24 10200.68 L1032.49 10203.55 L1031.80 10206.06 L1031.23 10208.58 L1030.67 10211.03 L1030.41 10212.14 L1030.16 10214.03 L1029.91 10215.50 L1029.79 10216.69 L1029.60 10218.08 L1029.79 10215.43 L1029.79 10215.43" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1032.30 10196.07 L1032.61 10195.09 L1033.36 10193.69 L1034.05 10192.65 L1034.74 10192.09 L1036.19 10192.23 L1037.50 10193.69 L1038.01 10194.46 L1038.95 10196.14 L1039.32 10197.05 L1039.83 10198.73 L1040.08 10200.19 L1039.95 10201.87 L1039.64 10202.85 L1039.07 10203.62 L1037.19 10204.53 L1033.80 10204.74 L1031.10 10204.11 L1031.10 10204.11" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M625.29 9927.77 C738.56 9925.61,851.47 9926.96,1055.85 9928.51 M625.73 9928.07 C786.28 9926.13,946.60 9926.68,1055.71 9928.23 M1054.57 9927.15 C1056.36 9943.13,1056.81 9958.57,1057.08 9974.93 M1055.54 9928.22 C1054.90 9940.24,1054.35 9952.65,1054.86 9974.69 M1054.65 9975.58 C934.36 9976.20,816.19 9976.31,626.09 9975.51 M1055.45 9975.50 C938.51 9976.52,821.13 9976.20,625.94 9975.69 M625.34 9976.63 C627.23 9964.62,626.73 9952.20,624.74 9928.35 M625.86 9975.32 C625.17 9965.78,626.98 9955.93,626.06 9928.29" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1126.73 10456.88 L1127.61 10456.46 L1128.80 10456.53 L1130.05 10456.74 L1131.25 10456.88 L1132.38 10457.02 L1133.50 10457.23 L1134.70 10457.29 L1136.01 10457.44 L1137.46 10457.65 L1138.96 10457.71 L1142.16 10458.06 L1144.30 10458.20 L1146.18 10458.42 L1147.69 10458.48 L1149.00 10458.55 L1150.63 10458.62 L1152.08 10458.69 L1153.40 10458.84 L1154.59 10458.90 L1155.84 10458.90 L1157.22 10458.97 L1158.48 10458.97 L1159.92 10458.97 L1161.36 10458.90 L1162.74 10458.90 L1164.19 10458.90 L1165.57 10458.84 L1167.07 10458.69 L1168.39 10458.69 L1169.83 10458.62 L1171.28 10458.62 L1172.72 10458.55 L1174.16 10458.42 L1175.61 10458.27 L1177.11 10458.13 L1181.25 10457.58 L1182.76 10457.29 L1184.01 10457.16 L1185.14 10456.88 L1186.52 10456.60 L1187.72 10456.39 L1188.85 10456.11 L1190.10 10455.83 L1191.17 10455.62 L1192.17 10455.34 L1193.49 10454.99 L1194.56 10454.78 L1195.81 10454.50 L1197.07 10454.29 L1198.38 10454.01 L1198.38 10454.01" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1276.93 10428.71 L1276.43 10429.90 L1278.06 10429.48 L1280.51 10427.87 L1283.71 10425.99 L1287.35 10424.10 L1290.92 10422.42 L1292.80 10421.58 L1296.44 10420.05 L1299.96 10418.79 L1304.66 10417.53 L1307.55 10416.76 L1310.44 10416.27 L1313.01 10415.78 L1315.08 10415.58 L1316.65 10415.51 L1317.90 10415.36 L1319.22 10415.16 L1319.22 10415.16" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1318.15 10406.14 L1317.40 10405.44 L1318.09 10404.67 L1319.28 10404.95 L1321.48 10405.86 L1323.30 10407.19 L1324.68 10409.07 L1325.24 10410.05 L1325.75 10412.64 L1325.24 10415.58 L1322.73 10420.89 L1319.28 10424.73 L1314.33 10428.71 L1314.33 10428.71" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1359.44" y="10438.65" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="1359.44" dy="0">khả năng có </tspan><tspan x="1359.44" dy="25">    nối chuỗi skins/input.php</tspan><tspan x="1359.44" dy="25">    cho vào include</tspan><tspan x="1359.44" dy="25">    </tspan><tspan x="1359.44" dy="25"></tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="837.48" y="10930.68" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="837.48" dy="0">mở file config.php trắng tinh==&gt; do cái này file này nó thực thi</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M962.97 10963.23 L961.77 10961.48 L961.27 10960.79 L960.52 10959.39 L959.83 10958.41 L959.33 10957.64 L958.64 10956.81 L957.88 10956.03 L956.06 10959.04 L954.68 10962.54 L953.49 10966.38 L952.68 10970.50 L952.30 10974.56 L952.49 10978.40 L953.37 10982.66 L953.87 10984.69 L956.63 10990.28 L959.26 10993.49 L963.03 10996.15 L968.05 10998.17 L974.01 10999.43 L980.85 10999.92 L988.06 10999.85 L995.34 10999.22 L998.98 10998.81 L1005.88 10997.83 L1012.41 10996.64 L1018.43 10995.38 L1026.40 10993.49 L1030.86 10992.30 L1034.87 10991.26 L1038.26 10990.42 L1041.15 10989.65 L1042.40 10989.44 L1044.54 10988.81 L1044.54 10988.81" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1035.56 10985.88 L1034.56 10985.46 L1035.06 10984.69 L1036.06 10984.97 L1037.45 10985.81 L1039.01 10987.14 L1039.70 10987.97 L1040.71 10989.86 L1040.96 10992.79 L1040.21 10995.38 L1038.64 10998.25 L1036.19 11001.11 L1032.93 11003.70 L1029.41 11005.58 L1027.53 11006.28 L1027.53 11006.28" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1073.16" y="10988.06" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="1073.16" dy="0">dùng php wrapper</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="489.26" y="11023.06" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="489.26" dy="0">ok buồn vl là mình phải xem writeup, nó đơn thuần là bruteforce password cho thằng </tspan><tspan x="489.26" dy="20">help@support.thm thôi</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260830014022_922.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830014022_922.png"><g transform="translate(-162.80,29.87)">
<image x="419.55449611349894" y="11099.928882960798" width="613.9492351536247" height="190.8159636076291" href="../0-asset/pasted-image-20260830014022_922.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../0-asset/pasted-image-20260830014055_729.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830014055_729.png"><g transform="translate(-162.80,29.87)">
<image x="411.5124525279727" y="11284.362428330252" width="629.9574442737766" height="231.59472421062642" href="../0-asset/pasted-image-20260830014055_729.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1061.88 11109.31 L1061.65 11107.75 L1061.60 11106.31 L1061.82 11105.13 L1062.67 11102.75 L1063.39 11101.63 L1064.07 11101.13 L1065.81 11102.00 L1066.93 11104.31 L1068.05 11108.00 L1068.95 11113.26 L1069.51 11119.44 L1069.68 11126.14 L1069.74 11133.20 L1069.57 11140.33 L1069.35 11144.40 L1068.84 11152.46 L1067.94 11163.09 L1067.49 11169.41 L1067.10 11174.91 L1066.99 11179.41 L1067.16 11183.41 L1067.72 11186.48 L1068.73 11188.91 L1069.51 11189.79 L1071.48 11190.85 L1073.78 11191.10 L1076.42 11190.48 L1079.34 11189.16 L1083.10 11186.10 L1084.90 11184.10 L1086.02 11182.22 L1086.58 11180.85 L1086.13 11179.85 L1082.54 11181.54 L1078.78 11184.41 L1074.17 11188.91 L1069.12 11195.61 L1063.62 11204.17 L1058.79 11213.49 L1054.58 11223.55 L1051.32 11234.00 L1049.08 11243.88 L1047.62 11252.32 L1046.50 11261.07 L1045.60 11270.01 L1044.81 11278.83 L1044.03 11287.52 L1043.69 11291.71 L1043.02 11300.09 L1042.12 11312.16 L1041.84 11316.09 L1041.11 11326.35 L1040.66 11332.85 L1040.32 11339.04 L1039.93 11344.55 L1039.76 11347.11 L1039.42 11351.92 L1039.09 11356.74 L1038.81 11361.49 L1038.47 11366.18 L1038.24 11370.62 L1038.19 11374.87 L1038.13 11379.87 L1038.19 11381.31 L1038.36 11383.81 L1038.36 11385.63 L1038.24 11387.00 L1038.13 11388.06 L1037.57 11388.94 L1036.73 11389.25 L1035.27 11388.31 L1033.75 11386.31 L1032.07 11380.75 L1032.07 11380.75" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1115.16 11181.35 L1114.31 11180.72 L1113.81 11180.10 L1114.71 11178.66 L1116.73 11177.35 L1119.76 11175.97 L1123.24 11174.60 L1126.95 11173.47 L1130.54 11172.53 L1133.79 11171.84 L1136.43 11171.34 L1138.62 11171.03 L1139.97 11170.91 L1139.97 11170.91" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1119.03 11182.22 L1117.79 11182.73 L1116.90 11183.29 L1118.08 11183.35 L1119.93 11183.04 L1122.62 11182.41 L1125.49 11181.66 L1128.46 11180.97 L1131.21 11180.29 L1133.85 11179.54 L1136.15 11178.60 L1136.15 11178.60" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1144.29 11162.90 L1144.07 11161.78 L1144.29 11160.78 L1145.14 11160.40 L1146.26 11160.47 L1148.50 11161.59 L1149.35 11162.15 L1150.64 11163.47 L1151.48 11165.28 L1151.59 11167.09 L1151.09 11169.84 L1149.57 11172.91 L1146.71 11176.47 L1142.61 11180.22 L1137.33 11183.79 L1134.47 11185.16 L1128.35 11187.73 L1128.35 11187.73" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="1189.49" y="11110.60" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="1189.49" dy="0">chạy sqlmap và  thử LFI với</tspan><tspan x="1189.49" dy="20">footer.php lòi shit ra cũng ko</tspan><tspan x="1189.49" dy="20">đc, tiến hành bruteforc, tự</tspan><tspan x="1189.49" dy="20">nhiên nhớ ra web nó ko cho</tspan><tspan x="1189.49" dy="20">ratelimit thì nó cũng gợi ý dùng</tspan><tspan x="1189.49" dy="20">bruteforc rồi</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M342.33 9120.69 C402.49 9119.13,462.78 9120.50,626.57 9119.86 M340.85 9120.77 C409.43 9118.54,477.48 9119.39,625.82 9120.99 M626.05 9119.54 C628.73 9182.85,626.70 9247.38,625.12 9324.92 M626.77 9121.03 C625.25 9174.27,625.41 9227.86,626.32 9326.34 M626.02 9326.85 C516.44 9329.12,406.13 9328.65,341.99 9326.30 M626.02 9325.81 C568.38 9323.84,510.25 9323.47,341.24 9325.45 M343.13 9325.85 C339.61 9247.26,340.70 9170.84,342.37 9122.48 M342.14 9326.44 C343.91 9282.30,343.95 9239.68,342.00 9120.26" stroke="#c2255c" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M926.56 10980.46 L918.72 10977.80 L916.65 10977.59 L914.39 10977.45 L909.49 10977.73 L903.72 10978.78 L897.01 10980.67 L889.73 10983.46 L886.09 10985.21 L879.25 10989.12 L873.10 10993.95 L867.89 10999.40 L862.25 11009.04 L860.37 11015.05 L859.80 11021.06 L860.87 11027.42 L863.50 11033.99 L865.51 11037.27 L871.53 11044.19 L880.13 11050.62 L890.48 11055.72 L902.28 11059.29 L914.70 11061.73 L925.43 11062.71 L937.98 11063.20 L953.42 11062.78 L963.71 11062.22 L968.73 11061.80 L978.70 11060.82 L988.18 11059.84 L996.90 11058.73 L1004.11 11057.75 L1010.58 11056.63 L1016.10 11055.65 L1020.62 11054.60 L1024.76 11053.62 L1027.96 11052.78 L1030.72 11051.95 L1033.17 11051.11 L1035.49 11050.20 L1037.49 11049.29 L1039.38 11048.45 L1040.19 11048.04 L1041.64 11047.27 L1042.83 11046.64 L1043.83 11045.94 L1044.65 11045.31 L1045.40 11044.82 L1046.34 11043.98 L1047.09 11043.21 L1047.85 11042.37 L1048.35 11041.53 L1048.79 11040.63 L1048.85 11039.09 L1048.54 11037.90 L1047.47 11035.46 L1046.34 11033.29 L1045.59 11032.10 L1044.77 11030.70 L1044.21 11029.93 L1043.33 11028.26 L1042.33 11026.51 L1041.20 11024.97 L1040.38 11023.44 L1039.25 11021.69 L1038.18 11019.80 L1036.99 11018.06 L1035.86 11016.17 L1034.23 11013.51 L1033.60 11012.60 L1032.41 11010.78 L1031.09 11008.90 L1029.46 11007.08 L1027.64 11005.13 L1025.26 11002.96 L1022.12 11000.58 L1017.98 10998.14 L1013.02 10995.41 L1006.81 10992.76 L1003.24 10991.36 L989.93 10986.96 L980.65 10984.30 L969.86 10981.64 L958.81 10978.99 L947.83 10977.03 L936.10 10975.35 L926.00 10974.45 L913.70 10973.89 L907.55 10973.75 L894.94 10974.10 L882.20 10974.80 L872.41 10975.57 L859.74 10977.17 L853.15 10978.22 L848.00 10979.62 L844.11 10981.29 L841.42 10983.46 L840.66 10984.65 L840.04 10987.38 L840.04 10987.38" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M567.72 11584.53 L567.72 11583.27 L567.66 11582.02 L567.47 11580.90 L566.78 11583.06 L566.15 11585.79 L565.46 11588.72 L564.84 11591.94 L564.46 11595.43 L564.21 11598.93 L564.02 11602.42 L564.08 11605.78 L564.27 11607.31 L564.77 11610.04 L566.03 11613.67 L567.41 11615.70 L568.91 11617.31 L570.86 11618.49 L573.06 11619.40 L575.25 11619.96 L577.20 11620.17 L579.52 11620.10 L580.96 11620.03 L583.91 11619.54 L589.93 11618.15 L594.20 11617.31 L597.02 11616.75 L599.60 11616.33 L602.23 11615.91 L604.87 11615.49 L606.12 11615.28 L608.57 11614.86 L609.64 11614.72 L611.52 11614.30 L613.02 11613.88 L614.28 11613.53 L615.22 11613.18 L616.16 11612.48 L616.16 11612.48" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M605.75 11603.75 L604.87 11603.19 L604.37 11602.42 L605.24 11601.79 L606.69 11601.86 L608.19 11602.49 L610.14 11603.61 L611.83 11604.94 L613.71 11607.45 L614.09 11608.50 L614.78 11611.23 L614.66 11613.46 L614.03 11616.12 L613.46 11617.38 L611.96 11619.96 L609.89 11621.99 L607.63 11623.38 L607.63 11623.38" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1299.17 9124.89 L1298.54 9125.80 L1296.97 9126.92 L1294.65 9128.18 L1290.95 9130.20 L1285.80 9132.93 L1279.03 9136.36 L1274.26 9138.87 L1264.28 9143.83 L1254.50 9148.58 L1247.15 9152.22 L1241.26 9155.08 L1236.30 9157.60 L1230.78 9160.18 L1228.33 9161.30 L1226.82 9161.65 L1226.26 9160.95 L1226.26 9160.95" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1259.83 9120.56 L1261.84 9124.05 L1263.34 9127.41 L1265.04 9131.39 L1267.30 9136.07 L1269.93 9141.10 L1273.32 9146.49 L1276.52 9151.52 L1278.46 9154.38 L1282.35 9159.97 L1285.80 9164.73 L1289.01 9169.41 L1291.95 9173.95 L1293.96 9177.72 L1293.96 9177.72" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1287.81 9326.51 L1288.06 9325.46 L1287.88 9324.27 L1287.06 9323.78 L1285.18 9324.48 L1280.53 9327.48 L1276.02 9330.63 L1270.18 9334.82 L1264.10 9339.37 L1257.88 9343.84 L1254.93 9346.01 L1249.35 9350.13 L1244.90 9353.48 L1241.32 9356.14 L1238.81 9358.09 L1236.86 9359.42 L1235.80 9359.91 L1235.67 9358.72 L1235.67 9358.72" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1262.78 9318.26 L1263.97 9318.68 L1264.97 9320.29 L1266.54 9323.08 L1268.68 9326.65 L1271.44 9331.19 L1274.57 9336.15 L1278.09 9341.53 L1281.91 9347.26 L1287.00 9354.67 L1290.20 9359.21 L1293.02 9363.48 L1293.02 9363.48" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1545.44 9201.06 L1544.25 9201.21 L1542.87 9201.28 L1541.49 9201.34 L1544.13 9202.46 L1547.39 9203.02 L1553.79 9204.07 L1558.56 9204.63 L1563.20 9205.26 L1567.66 9205.68 L1571.61 9205.96 L1574.87 9206.24 L1576.44 9206.24 L1576.44 9206.24" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1545.07 9214.27 L1543.69 9214.41 L1542.37 9214.48 L1542.75 9213.57 L1544.44 9213.16 L1547.14 9212.46 L1550.59 9211.97 L1552.79 9211.69 L1557.62 9211.41 L1562.64 9211.13 L1567.97 9211.13 L1573.30 9211.20 L1580.77 9211.41 L1585.10 9211.48 L1588.74 9211.48 L1590.18 9211.48 L1590.18 9211.48" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1586.73 9193.59 L1586.98 9192.40 L1587.80 9191.77 L1590.68 9191.98 L1594.57 9193.66 L1596.90 9195.48 L1598.59 9197.57 L1599.09 9198.76 L1599.47 9201.41 L1598.53 9204.63 L1596.14 9208.54 L1592.25 9212.74 L1586.60 9217.42 L1580.39 9221.40 L1577.19 9223.15 L1577.19 9223.15" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1628.96 9191.14 L1629.02 9189.96 L1629.21 9191.28 L1629.27 9194.71 L1629.21 9197.50 L1629.15 9200.23 L1629.15 9201.48 L1629.15 9203.79 L1629.21 9205.75 L1629.27 9207.50 L1629.40 9209.59 L1629.46 9211.69 L1629.52 9213.43 L1629.52 9214.69 L1629.65 9216.16 L1629.46 9217.56 L1629.46 9217.56" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1633.10 9194.71 L1632.35 9191.28 L1631.97 9189.46 L1631.84 9187.93 L1631.84 9186.60 L1631.91 9185.41 L1632.10 9184.08 L1632.35 9182.83 L1633.10 9183.74 L1633.10 9185.27 L1633.10 9188.14 L1632.72 9191.07 L1632.60 9192.47 L1631.97 9195.34 L1631.15 9198.06 L1630.15 9200.51 L1629.02 9202.67 L1627.77 9204.56 L1627.20 9205.26 L1625.07 9206.59 L1625.07 9206.59" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1631.15 9208.82 L1632.60 9208.82 L1634.35 9207.92 L1636.36 9206.59 L1638.68 9204.56 L1642.20 9200.57 L1644.39 9197.29 L1646.09 9193.66 L1646.90 9191.91 L1648.16 9188.42 L1649.04 9185.55 L1649.73 9183.10 L1649.85 9181.29 L1649.60 9179.96 L1649.22 9179.12 L1648.16 9178.56 L1647.03 9178.91 L1645.59 9180.45 L1644.14 9182.68 L1642.95 9185.55 L1641.95 9189.05 L1641.19 9192.68 L1640.82 9196.31 L1640.69 9199.81 L1640.75 9203.09 L1640.82 9204.63 L1641.19 9207.43 L1642.13 9210.85 L1642.76 9212.39 L1643.45 9213.30 L1644.46 9213.65 L1645.46 9212.95 L1645.96 9212.25 L1646.84 9210.85 L1647.28 9209.87 L1648.03 9208.26 L1648.53 9207.01 L1649.04 9206.10 L1649.48 9205.12 L1649.85 9206.31 L1650.10 9207.43 L1650.48 9208.54 L1650.86 9209.52 L1651.55 9210.36 L1652.42 9210.85 L1653.68 9210.78 L1654.62 9210.36 L1655.44 9209.80 L1656.19 9209.10 L1656.82 9208.40 L1657.32 9209.24 L1657.57 9210.29 L1658.07 9211.27 L1658.70 9212.25 L1659.64 9212.88 L1660.83 9213.16 L1662.97 9212.39 L1664.47 9210.99 L1665.54 9209.17 L1665.91 9208.26 L1666.29 9206.66 L1666.67 9205.40 L1666.79 9204.07 L1666.29 9203.09 L1665.48 9203.65 L1665.04 9204.70 L1665.04 9206.31 L1665.98 9208.96 L1666.98 9210.85 L1668.24 9212.53 L1668.24 9212.53" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1676.46 9209.59 L1675.77 9208.61 L1674.89 9208.12 L1673.57 9208.12 L1672.63 9208.54 L1671.94 9209.38 L1671.44 9210.36 L1671.06 9211.41 L1670.87 9212.46 L1670.93 9213.85 L1672.13 9213.72 L1672.75 9212.88 L1673.51 9211.27 L1673.88 9210.36 L1674.39 9209.03 L1674.82 9207.98 L1675.26 9206.79 L1675.70 9205.96 L1675.83 9207.36 L1675.70 9208.61 L1675.51 9209.94 L1675.20 9212.25 L1674.89 9214.06 L1674.64 9215.39 L1674.57 9216.86 L1675.51 9216.51 L1676.21 9215.60 L1677.46 9213.99 L1678.02 9213.23 L1678.90 9212.04 L1679.53 9211.20 L1680.22 9210.29 L1680.85 9210.99 L1680.91 9212.25 L1681.16 9213.30 L1681.48 9214.34 L1682.10 9215.25 L1682.10 9215.25" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1690.76 9211.62 L1690.45 9210.64 L1689.44 9210.29 L1688.19 9210.78 L1686.81 9212.04 L1685.49 9213.50 L1684.61 9214.76 L1684.17 9215.88 L1683.92 9217.21 L1684.42 9218.12 L1685.55 9218.40 L1686.56 9218.12 L1687.50 9217.56 L1688.44 9216.93 L1689.51 9215.67 L1690.32 9214.41 L1690.76 9213.16 L1691.14 9212.04 L1691.39 9210.85 L1691.20 9209.80 L1690.64 9210.43 L1690.01 9212.81 L1689.51 9215.25 L1689.01 9218.05 L1688.50 9220.91 L1688.31 9222.45 L1687.81 9225.32 L1687.25 9228.04 L1686.12 9232.03 L1685.05 9234.54 L1683.61 9236.64 L1681.73 9238.66 L1679.40 9240.20 L1676.71 9241.11 L1675.26 9241.25 L1671.88 9240.83 L1667.99 9239.01 L1665.98 9237.61 L1665.98 9237.61" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1663.72 9193.17 L1665.98 9193.73 L1666.92 9194.36 L1668.49 9195.76 L1669.11 9196.45 L1670.06 9197.78 L1670.56 9199.25 L1670.81 9200.65 L1670.62 9202.81 L1670.06 9205.40 L1669.62 9206.66 L1669.62 9206.66" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1732.24 9216.58 L1732.24 9215.32 L1732.11 9214.27 L1731.73 9213.30 L1730.92 9212.53 L1729.85 9212.32 L1728.53 9212.32 L1727.03 9212.88 L1724.02 9214.56 L1722.39 9216.09 L1721.88 9216.86 L1721.19 9218.26 L1721.07 9219.45 L1721.32 9220.49 L1721.82 9221.26 L1722.82 9221.89 L1723.89 9222.10 L1725.02 9221.82 L1726.59 9220.70 L1727.91 9219.23 L1728.91 9217.35 L1729.48 9215.74 L1729.91 9214.48 L1730.23 9213.16 L1729.54 9213.85 L1729.66 9214.97 L1730.23 9218.12 L1730.60 9219.17 L1731.17 9220.63 L1731.73 9221.82 L1732.24 9222.73 L1733.11 9223.36 L1734.37 9223.01 L1735.00 9222.10 L1735.75 9220.00 L1736.38 9217.84 L1736.82 9216.30 L1737.07 9214.97 L1737.32 9213.99 L1737.51 9212.88 L1737.70 9214.14 L1737.82 9215.32 L1738.32 9217.56 L1738.76 9219.45 L1739.20 9221.05 L1739.58 9222.31 L1740.02 9223.29 L1740.64 9224.27 L1741.52 9224.62 L1742.53 9223.92 L1743.66 9222.52 L1744.47 9221.05 L1745.16 9220.07 L1745.66 9219.23 L1746.17 9218.40 L1746.79 9219.23 L1747.04 9220.49 L1747.30 9221.82 L1747.30 9221.82" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1745.16 9182.48 L1742.40 9186.32 L1741.65 9188.14 L1740.46 9192.19 L1739.83 9196.73 L1739.83 9196.73" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1769.19 9223.57 L1769.13 9222.03 L1768.88 9220.63 L1768.63 9219.59 L1768.38 9218.54 L1767.75 9217.56 L1766.87 9217.14 L1766.18 9217.84 L1765.99 9219.30 L1766.06 9220.84 L1767.19 9224.55 L1768.00 9225.94 L1768.88 9226.92 L1769.88 9227.34 L1771.33 9227.20 L1772.27 9226.92 L1773.52 9226.01 L1775.09 9224.62 L1776.47 9223.15 L1777.41 9221.89 L1778.04 9220.98 L1778.67 9220.07 L1778.04 9220.91 L1777.98 9222.10 L1778.17 9223.36 L1778.48 9224.55 L1779.17 9225.45 L1779.99 9225.87 L1782.37 9225.10 L1783.19 9224.48 L1784.63 9222.94 L1785.88 9221.26 L1786.39 9220.49 L1787.20 9219.30 L1787.70 9218.46 L1788.08 9217.63 L1787.33 9218.46 L1787.01 9219.37 L1786.76 9220.70 L1786.64 9222.17 L1787.33 9225.39 L1787.83 9226.29 L1787.83 9226.29" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1797.49 9222.66 L1796.42 9222.03 L1795.36 9221.82 L1794.17 9222.24 L1793.60 9223.01 L1793.16 9223.92 L1792.97 9225.32 L1793.16 9226.36 L1793.48 9227.34 L1793.98 9228.18 L1795.17 9227.83 L1795.61 9226.64 L1796.11 9225.45 L1796.55 9224.27 L1797.11 9223.29 L1797.80 9222.31 L1798.62 9221.75 L1799.62 9222.03 L1800.25 9223.01 L1801.00 9224.90 L1801.32 9225.81 L1801.76 9227.48 L1802.01 9228.81 L1802.26 9230.07 L1802.20 9231.61 L1801.82 9232.65 L1801.82 9232.65" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1789.96 9198.41 L1790.97 9197.92 L1793.22 9198.76 L1795.42 9199.74 L1797.55 9200.99 L1799.75 9202.11 L1800.82 9202.60 L1800.82 9202.60" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1814.75 9199.39 L1813.80 9200.09 L1813.05 9202.39 L1812.49 9204.91 L1812.24 9206.24 L1812.24 9206.24" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1824.79 9230.77 L1824.97 9229.16 L1824.85 9227.97 L1824.60 9226.99 L1824.10 9226.23 L1823.03 9225.94 L1822.09 9226.71 L1821.02 9229.09 L1820.33 9231.19 L1819.95 9233.07 L1819.83 9234.75 L1819.89 9236.08 L1820.14 9237.19 L1820.46 9238.10 L1821.33 9238.94 L1822.40 9239.22 L1825.60 9238.17 L1827.92 9236.57 L1829.93 9234.47 L1830.93 9233.21 L1832.44 9230.63 L1833.82 9227.97 L1834.76 9225.74 L1835.14 9224.90 L1835.58 9223.50 L1835.51 9222.31 L1834.89 9223.43 L1834.13 9226.92 L1833.82 9229.58 L1833.57 9232.09 L1833.44 9234.05 L1833.63 9235.66 L1833.82 9236.99 L1834.13 9238.03 L1835.01 9238.87 L1836.33 9238.87 L1838.59 9237.41 L1840.28 9235.73 L1841.66 9233.91 L1842.86 9231.88 L1843.73 9230.07 L1844.36 9228.74 L1844.68 9227.83 L1844.93 9226.71 L1844.42 9227.55 L1844.11 9228.67 L1843.92 9230.00 L1843.86 9231.46 L1843.99 9232.93 L1844.61 9235.66 L1845.30 9237.06 L1846.06 9237.96 L1847.25 9238.45 L1848.31 9238.03 L1849.01 9237.41 L1850.26 9235.66 L1851.20 9233.56 L1851.83 9231.61 L1852.27 9230.21 L1852.64 9229.09 L1852.90 9227.97 L1852.27 9228.74 L1852.08 9229.93 L1852.02 9231.46 L1851.95 9234.05 L1852.02 9236.15 L1852.02 9236.15" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1861.11 9236.50 L1860.80 9235.24 L1859.86 9234.47 L1858.42 9234.54 L1856.35 9236.36 L1855.15 9237.96 L1854.46 9239.36 L1854.21 9240.62 L1854.28 9242.16 L1854.97 9243.14 L1855.97 9243.56 L1857.54 9243.34 L1858.86 9242.51 L1860.36 9240.90 L1861.55 9238.94 L1862.50 9236.92 L1862.75 9235.94 L1863.00 9234.19 L1863.19 9232.93 L1863.25 9231.81 L1862.68 9232.65 L1862.12 9236.22 L1861.87 9239.22 L1861.55 9242.37 L1861.11 9245.58 L1860.99 9247.26 L1860.24 9252.29 L1859.42 9255.37 L1858.54 9258.44 L1857.35 9261.10 L1855.91 9263.54 L1854.15 9265.57 L1851.83 9267.10 L1849.07 9267.87 L1845.93 9267.66 L1844.36 9267.17 L1841.16 9265.15 L1837.84 9261.30 L1837.84 9261.30" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1843.67 9195.48 L1845.05 9195.89 L1846.31 9196.94 L1848.31 9198.55 L1850.76 9200.65 L1853.71 9203.02 L1856.66 9205.33 L1858.04 9206.52 L1858.04 9206.52" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../tools/dùng-fuff-trong-thực-tế" class="excalidraw-node-link" target="_self" title="dùng fuff trong thực tế"><g transform="translate(-162.80,29.87)">
<text x="648.65" y="11688.98" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="648.65" dy="0">📍 dùng fuff trong thực tế</tspan></text>
</g></a>
<g transform="translate(-162.80,29.87)">
<text x="727.72" y="11724.28" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="727.72" dy="0">ok nhé, quay lại phần /tool để biết cách dùng -f và -request nha &lt;3 </tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<text x="642.00" y="11619.51" font-family="Cascadia Code, Consolas, monospace" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="642.00" dy="0">ffuf -request login_post.txt -request-proto http -w /usr/share/seclists/Passwords/Common-Credentials/10k-most-</tspan><tspan x="642.00" dy="20">common.txt -fr &quot;Invalid credentials&quot;</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1103.38 11599.32 L1100.23 11600.28 L1099.27 11600.67 L1097.49 11601.63 L1096.02 11602.94 L1093.88 11605.94 L1092.56 11608.76 L1091.40 11611.93 L1090.89 11613.57 L1090.13 11616.97 L1089.67 11620.19 L1089.57 11623.13 L1089.87 11625.79 L1090.74 11628.17 L1092.26 11630.26 L1094.49 11631.96 L1097.54 11633.15 L1101.10 11633.82 L1105.16 11634.11 L1109.22 11633.94 L1113.34 11633.37 L1117.10 11632.64 L1120.50 11631.68 L1123.45 11630.37 L1125.83 11628.62 L1127.66 11626.42 L1128.27 11625.00 L1129.08 11621.77 L1129.19 11618.10 L1128.17 11611.82 L1126.60 11607.46 L1124.51 11603.50 L1121.92 11600.16 L1118.93 11597.34 L1115.67 11595.36 L1112.32 11594.28 L1110.54 11594.00 L1107.19 11594.05 L1103.69 11594.90 L1100.64 11596.21 L1098.05 11598.07 L1096.88 11599.20 L1096.88 11599.20" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M761.59 11615.21 L759.15 11614.48 L757.83 11614.25 L755.04 11614.14 L751.99 11614.65 L748.54 11616.06 L744.78 11618.38 L741.17 11621.43 L736.35 11627.15 L733.96 11631.34 L733.00 11633.49 L731.62 11637.90 L731.17 11641.91 L731.57 11645.65 L732.84 11649.21 L735.38 11652.49 L738.73 11655.15 L742.90 11656.91 L747.93 11657.87 L753.52 11658.09 L762.15 11656.96 L767.54 11655.61 L770.33 11654.59 L774.85 11652.49 L778.71 11649.89 L781.81 11646.89 L783.84 11643.84 L785.01 11640.61 L785.41 11637.62 L784.96 11634.56 L783.79 11631.62 L781.86 11629.02 L777.80 11626.13 L776.22 11625.51 L772.77 11624.55 L769.16 11624.21 L765.50 11624.66 L761.74 11625.68 L757.58 11627.77 L757.58 11627.77" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M734.42 11589.30 L734.16 11588.45 L733.45 11588.00 L732.44 11587.77 L731.27 11587.66 L730.20 11587.61 L729.03 11587.43 L727.20 11587.32 L726.24 11587.27 L724.51 11587.15 L723.04 11587.15 L721.31 11587.32 L719.13 11587.61 L715.93 11588.17 L713.74 11588.74 L711.66 11589.30 L709.58 11589.98 L708.61 11590.32 L706.63 11591.06 L704.65 11591.90 L702.52 11592.81 L700.44 11593.94 L698.30 11595.07 L695.92 11596.60 L693.68 11598.18 L690.43 11600.67 L689.57 11601.52 L688.04 11603.16 L686.72 11604.80 L685.55 11606.44 L684.64 11608.14 L684.03 11609.78 L683.67 11611.14 L683.47 11612.44 L683.42 11613.74 L683.47 11614.87 L683.67 11615.95 L684.74 11618.89 L685.86 11620.76 L687.64 11622.40 L690.13 11623.87 L692.97 11625.11 L696.17 11626.08 L699.52 11626.98 L702.93 11627.77 L704.50 11628.17 L708.00 11628.96 L711.46 11629.69 L715.01 11630.49 L718.57 11631.34 L723.95 11632.36 L727.61 11632.75 L731.37 11632.98 L735.13 11632.81 L737.01 11632.58 L740.61 11631.84 L744.17 11630.94 L747.47 11629.81 L750.42 11628.51 L753.11 11627.15 L755.29 11625.79 L758.24 11623.36 L759.87 11621.49 L760.63 11620.53 L762.15 11618.27 L763.73 11616.06 L765.00 11614.08 L766.11 11612.27 L767.13 11610.63 L767.94 11609.27 L768.50 11608.03 L768.91 11606.95 L769.16 11605.94 L769.31 11604.92 L769.16 11603.33 L768.70 11601.18 L767.74 11598.86 L766.21 11596.32 L764.03 11593.77 L760.83 11591.28 L756.67 11589.13 L751.28 11587.43 L748.13 11586.70 L742.34 11585.96 L736.20 11585.96 L726.29 11587.83 L719.89 11590.32 L712.37 11594.62 L707.24 11598.86 L707.24 11598.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M925.05 11595.36 L923.93 11595.41 L922.86 11595.58 L921.95 11595.92 L920.88 11596.37 L919.26 11597.28 L918.39 11597.68 L916.87 11598.69 L915.34 11599.71 L914.13 11600.67 L912.96 11601.69 L911.99 11602.60 L911.23 11603.39 L910.62 11604.24 L909.96 11605.48 L909.35 11606.67 L908.84 11607.69 L908.54 11608.59 L908.23 11609.78 L908.18 11610.74 L908.23 11611.93 L908.44 11612.95 L908.74 11613.80 L909.20 11614.53 L911.03 11616.12 L912.30 11616.80 L913.41 11617.36 L914.48 11617.76 L915.34 11618.10 L916.16 11618.38 L916.97 11618.55 L918.65 11618.95 L920.68 11619.23 L922.66 11619.40 L924.44 11619.46 L926.06 11619.46 L928.30 11619.51 L929.47 11619.46 L930.48 11619.46 L932.21 11619.40 L933.73 11619.40 L935.00 11619.40 L936.17 11619.40 L937.34 11619.46 L939.52 11619.57 L941.35 11619.68 L942.93 11619.74 L944.35 11619.80 L946.13 11619.91 L948.31 11620.14 L950.39 11620.25 L951.31 11620.36 L954.20 11620.53 L955.88 11620.59 L957.45 11620.70 L958.82 11620.76 L960.60 11620.87 L961.57 11620.93 L963.19 11621.04 L964.56 11621.15 L965.88 11621.21 L966.95 11621.27 L969.08 11621.55 L969.95 11621.72 L971.67 11621.83 L973.10 11622.00 L974.87 11622.11 L976.91 11622.23 L978.58 11622.45 L980.00 11622.51 L981.17 11622.68 L982.24 11622.79 L983.26 11622.85 L984.17 11623.02 L985.54 11623.08 L986.81 11623.08 L989.15 11623.13 L990.93 11623.08 L992.50 11623.08 L993.77 11623.02 L995.04 11623.02 L996.11 11623.02 L997.12 11622.91 L999.66 11622.85 L1001.49 11622.79 L1003.42 11622.57 L1005.55 11622.34 L1007.59 11622.06 L1009.57 11621.77 L1011.19 11621.55 L1012.61 11621.38 L1013.93 11621.21 L1015.10 11621.09 L1016.17 11621.04 L1017.85 11620.93 L1018.76 11620.81 L1020.49 11620.70 L1023.03 11620.47 L1023.89 11620.36 L1025.41 11620.19 L1026.68 11620.08 L1027.85 11620.02 L1028.82 11619.91 L1030.09 11619.85 L1031.26 11619.85 L1032.42 11619.80 L1033.54 11619.80 L1034.76 11619.74 L1036.23 11619.68 L1037.96 11619.51 L1040.35 11619.40 L1041.72 11619.29 L1042.89 11619.23 L1043.95 11619.17 L1044.97 11619.12 L1046.04 11619.06 L1047.10 11619.06 L1048.12 11619.06 L1049.14 11619.06 L1050.46 11619.06 L1051.78 11619.06 L1052.69 11619.17 L1053.66 11619.29 L1054.67 11619.46 L1055.74 11619.68 L1056.75 11619.80 L1057.67 11619.91 L1058.73 11620.02 L1059.65 11620.14 L1060.72 11620.19 L1061.78 11620.25 L1062.80 11620.36 L1063.92 11620.36 L1064.98 11620.36 L1066.10 11620.25 L1067.27 11620.14 L1068.69 11620.02 L1069.66 11619.74 L1071.23 11619.40 L1072.45 11619.12 L1073.52 11618.83 L1074.43 11618.61 L1075.24 11618.38 L1076.26 11618.10 L1077.22 11617.82 L1078.19 11617.48 L1079.00 11617.25 L1079.81 11616.97 L1080.63 11616.80 L1081.54 11616.63 L1082.35 11616.46 L1083.42 11616.23 L1084.33 11616.06 L1085.15 11615.83 L1086.01 11615.61 L1087.03 11615.38 L1087.94 11615.16 L1088.91 11614.93 L1089.87 11614.76 L1090.79 11614.48 L1091.70 11614.19 L1092.46 11613.91 L1093.12 11613.40 L1093.48 11612.50 L1093.68 11611.65 L1093.68 11610.46 L1093.53 11609.56 L1093.12 11608.76 L1091.95 11607.63 L1090.38 11606.56 L1088.50 11605.54 L1086.01 11604.46 L1083.17 11603.33 L1080.07 11602.20 L1076.72 11601.18 L1073.26 11600.22 L1069.55 11599.60 L1065.69 11599.09 L1061.53 11598.92 L1057.06 11598.86 L1052.39 11598.86 L1047.66 11598.86 L1045.22 11598.75 L1040.40 11598.69 L1035.42 11598.52 L1028.82 11598.02 L1024.70 11597.73 L1020.89 11597.45 L1017.34 11597.39 L1014.19 11597.34 L1011.04 11597.39 L1009.57 11597.45 L1006.62 11597.56 L1003.78 11597.62 L1001.03 11597.62 L998.29 11597.56 L995.70 11597.56 L993.16 11597.56 L989.35 11597.84 L986.76 11598.18 L985.39 11598.30 L982.65 11598.75 L979.95 11599.20 L977.21 11599.66 L974.47 11599.99 L971.73 11600.22 L968.88 11600.22 L966.14 11600.22 L963.60 11600.05 L961.21 11599.94 L959.03 11599.88 L958.01 11599.88 L956.23 11599.88 L953.64 11599.99 L951.66 11600.22 L949.63 11600.33 L948.67 11600.39 L945.87 11600.62 L944.86 11600.62 L943.18 11600.67 L941.76 11600.73 L940.59 11600.84 L939.52 11600.90 L938.51 11600.96 L937.54 11601.07 L936.12 11601.35 L934.44 11601.52 L933.22 11601.69 L932.16 11601.75 L931.19 11601.86 L929.87 11601.75 L927.99 11601.41 L926.21 11601.01 L924.74 11600.67 L923.67 11600.39 L922.76 11600.28 L921.95 11600.05 L921.08 11599.88 L920.07 11599.66 L919.15 11599.54 L918.19 11599.66 L917.17 11600.22 L917.17 11600.22" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830022210_018.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830022210_018.png"><g transform="translate(-162.80,29.87)">
<image x="667.9742132602271" y="11733.451180229884" width="520.2867867336103" height="81.12326217534603" href="../0-asset/pasted-image-20260830022210_018.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../0-asset/pasted-image-20260830022328_470.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830022328_470.png"><g transform="translate(-162.80,29.87)">
<image x="645.4283145276338" y="11820.506899227508" width="658.0252332418413" height="291.4796239481457" href="../0-asset/pasted-image-20260830022328_470.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../0-asset/pasted-image-20260830022359_962.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830022359_962.png"><g transform="translate(-162.80,29.87)">
<image x="549.6194248935433" y="12114.82237695125" width="904.309417364391" height="281.0817415828494" href="../0-asset/pasted-image-20260830022359_962.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<text x="486.94" y="12360.28" font-family="Cascadia Code, Consolas, monospace" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="486.94" dy="0">ok bây giờ tiến tới thằng này</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M836.63 12180.74 L836.76 12179.55 L836.94 12178.36 L837.38 12177.46 L838.45 12177.81 L839.33 12178.85 L840.77 12180.88 L841.40 12182.00 L842.72 12184.45 L843.97 12186.89 L845.29 12189.20 L846.48 12191.08 L847.05 12191.92 L848.11 12193.18 L848.99 12193.95 L850.37 12193.81 L852.32 12191.43 L853.64 12188.71 L854.26 12187.31 L855.52 12184.45 L856.58 12181.58 L857.78 12178.78 L859.03 12176.20 L860.47 12173.82 L862.36 12171.31 L864.62 12168.93 L864.62 12168.93" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M769.31 12280.74 L769.56 12279.70 L767.49 12281.23 L766.36 12282.49 L763.85 12285.50 L760.46 12289.48 L756.94 12293.88 L753.12 12298.43 L749.42 12302.90 L745.96 12307.16 L741.76 12312.47 L739.56 12315.48 L737.62 12317.99 L736.87 12319.18 L735.30 12321.42 L733.98 12323.65 L732.79 12325.75 L731.53 12327.85 L730.40 12329.80 L729.34 12331.55 L728.52 12332.95 L727.83 12334.06 L727.33 12334.97 L726.64 12336.09 L726.14 12336.86 L725.64 12337.70 L725.13 12338.54 L725.13 12338.54" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M717.73 12319.32 L716.91 12318.55 L715.16 12319.18 L714.84 12321.35 L715.16 12331.48 L715.53 12332.88 L716.54 12335.60 L717.85 12337.98 L719.61 12339.79 L721.68 12341.34 L722.87 12341.82 L726.70 12342.17 L729.78 12341.34 L733.16 12339.79 L748.22 12326.73 L750.61 12323.93 L750.61 12323.93" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830023004_865.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830023004_865.png"><g transform="translate(-162.80,29.87)">
<image x="336.8287035566841" y="12447.40099436457" width="1137.7583992494656" height="494.45943171694074" href="../0-asset/pasted-image-20260830023004_865.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1012.79 12282.23 L1011.99 12282.70 L1010.28 12284.66 L1008.74 12286.39 L1006.76 12288.70 L1005.70 12290.01 L1003.24 12293.04 L999.30 12298.56 L996.63 12302.78 L993.75 12307.71 L990.76 12313.53 L987.88 12319.77 L985.11 12326.30 L982.50 12332.96 L981.32 12336.34 L979.14 12342.64 L977.59 12347.92 L976.04 12352.85 L974.92 12357.19 L973.43 12362.83 L973.00 12364.62 L971.62 12369.49 L970.92 12372.16 L970.60 12373.47 L969.96 12375.78 L969.38 12378.04 L968.84 12380.06 L968.20 12382.02 L967.51 12384.04 L966.82 12386.06 L965.96 12388.08 L965.16 12389.92 L964.31 12391.76 L963.94 12392.48 L963.46 12393.72 L962.92 12394.67 L962.60 12395.39 L962.23 12396.22 L961.86 12396.99 L961.54 12397.76 L961.06 12398.53 L960.74 12399.37 L960.36 12400.38 L959.99 12401.39 L959.72 12402.16 L959.46 12403.05 L958.92 12405.07 L958.02 12407.86 L957.80 12408.69 L957.38 12410.12 L957.00 12411.36 L956.63 12412.49 L956.36 12413.44 L956.04 12414.22 L955.72 12415.29 L955.40 12416.06 L955.08 12417.01 L954.76 12417.78 L954.34 12418.79 L953.96 12419.68 L953.48 12420.51 L953.06 12421.40 L952.58 12422.24 L951.99 12423.13 L951.46 12423.84 L950.98 12424.55 L950.50 12425.26 L949.91 12426.04 L949.11 12426.39 L949.11 12426.39" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M945.16 12407.98 L945.80 12408.75 L947.19 12411.90 L947.99 12413.92 L948.31 12414.99 L949.11 12417.31 L949.80 12419.86 L950.39 12422.59 L950.76 12425.44 L951.03 12428.18 L951.24 12430.61 L951.40 12431.80 L951.62 12433.46 L951.78 12434.77 L951.88 12435.72 L952.10 12436.73 L953.86 12436.14 L955.94 12434.59 L959.03 12432.39 L962.82 12429.72 L967.40 12426.69 L969.91 12425.09 L975.08 12421.76 L977.48 12420.10 L977.48 12420.10" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M461.48 12774.02 L462.12 12773.54 L462.12 12773.54" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M466.02 12775.56 L465.38 12775.03 L464.52 12774.55 L463.72 12774.14 L461.91 12773.31 L461.16 12773.07 L458.98 12772.24 L457.22 12771.76 L456.42 12771.46 L454.98 12771.11 L453.06 12770.75 L452.04 12770.45 L449.16 12770.04 L447.08 12769.80 L445.22 12769.74 L442.07 12769.74 L439.72 12769.92 L437.43 12770.10 L436.26 12770.16 L434.12 12770.39 L432.31 12770.45 L430.39 12770.63 L428.15 12770.75 L426.18 12770.99 L423.94 12771.17 L421.22 12771.46 L420.20 12771.58 L418.71 12771.82 L416.84 12772.06 L415.88 12772.18 L414.39 12772.36 L413.11 12772.47 L412.04 12772.53 L410.66 12772.71 L409.59 12772.83 L408.52 12772.95 L407.51 12773.13 L406.71 12773.60 L406.23 12774.26 L405.96 12775.21 L405.80 12776.10 L405.80 12778.77 L405.80 12781.21 L405.80 12783.64 L405.96 12786.02 L406.02 12787.15 L406.07 12789.05 L406.28 12790.59 L406.50 12791.90 L406.82 12793.03 L407.03 12793.98 L407.30 12794.81 L407.62 12795.64 L408.04 12796.59 L408.68 12798.31 L409.22 12799.62 L409.70 12800.69 L410.12 12801.64 L410.44 12802.35 L410.87 12803.18 L411.30 12803.96 L411.67 12804.67 L411.99 12805.44 L412.31 12806.39 L412.68 12807.10 L413.06 12807.88 L413.38 12808.65 L413.70 12809.42 L413.96 12810.31 L414.34 12811.08 L414.76 12811.74 L415.14 12812.45 L415.19 12813.46 L415.56 12814.17 L416.10 12814.65 L416.90 12815.01 L417.86 12815.24 L418.98 12815.42 L420.20 12815.42 L424.42 12815.24 L425.64 12815.18 L428.15 12814.95 L430.55 12814.83 L432.74 12814.59 L434.92 12814.47 L436.68 12814.29 L437.86 12814.23 L439.83 12814.23 L441.64 12814.17 L443.24 12814.17 L446.23 12814.11 L448.15 12814.11 L449.70 12814.11 L451.03 12814.17 L452.26 12814.17 L453.32 12814.23 L454.34 12814.29 L455.62 12814.41 L456.90 12814.53 L458.92 12814.65 L460.79 12814.65 L462.34 12814.65 L463.72 12814.59 L464.79 12814.53 L465.80 12814.47 L466.92 12814.41 L468.15 12814.41 L469.32 12814.29 L470.44 12814.29 L471.46 12814.23 L472.04 12813.70 L472.20 12812.69 L472.20 12811.44 L472.20 12810.31 L472.10 12808.83 L471.88 12806.39 L471.67 12804.02 L471.62 12803.01 L471.46 12801.28 L471.30 12799.86 L471.24 12798.61 L471.08 12797.54 L470.87 12795.46 L470.60 12793.32 L470.23 12791.01 L469.80 12788.51 L469.38 12785.96 L468.90 12783.58 L468.68 12782.51 L468.15 12780.49 L468.04 12779.54 L467.30 12777.05 L467.08 12776.22 L466.82 12775.21 L466.50 12774.14 L466.28 12773.25 L466.02 12772.24 L465.75 12771.40 L465.54 12770.51 L465.54 12770.51" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M497.27 12805.56 L496.68 12804.85 L495.88 12804.08 L493.54 12802.12 L491.78 12800.99 L489.91 12799.86 L487.83 12798.67 L486.66 12798.25 L484.36 12797.48 L482.07 12796.83 L479.72 12796.53 L477.48 12796.59 L475.14 12796.89 L472.90 12797.36 L469.96 12798.31 L468.26 12799.14 L467.40 12799.62 L465.96 12800.75 L464.74 12802.06 L463.67 12803.48 L463.24 12804.19 L462.66 12805.50 L462.23 12806.75 L462.02 12807.88 L462.02 12808.95 L462.34 12811.03 L462.92 12813.04 L463.78 12814.89 L464.95 12816.49 L466.44 12817.98 L468.26 12819.28 L470.39 12820.35 L472.74 12821.42 L475.19 12822.25 L476.42 12822.73 L478.87 12823.44 L481.16 12824.03 L483.30 12824.51 L486.44 12824.93 L488.15 12824.87 L490.23 12824.45 L492.31 12823.62 L494.39 12822.49 L496.26 12821.18 L497.11 12820.53 L498.71 12819.10 L500.15 12817.62 L501.22 12815.96 L502.12 12814.29 L502.71 12812.57 L503.08 12811.08 L503.08 12809.66 L502.50 12806.93 L502.23 12805.92 L501.27 12804.08 L500.26 12802.35 L499.08 12801.05 L498.44 12800.63 L497.00 12800.21 L494.18 12800.75 L494.18 12800.75" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M487.03 12823.80 L486.23 12823.50 L485.59 12824.21 L485.16 12825.88 L484.63 12828.07 L484.20 12830.81 L483.99 12833.95 L483.88 12837.87 L483.88 12842.09 L484.15 12846.84 L484.58 12852.49 L485.11 12858.37 L485.32 12861.40 L486.02 12867.46 L487.08 12876.72 L487.94 12883.55 L488.90 12890.21 L490.12 12897.10 L491.30 12903.04 L492.74 12908.62 L494.34 12913.91 L496.04 12919.02 L497.96 12923.59 L500.04 12928.10 L502.07 12932.26 L504.15 12936.18 L507.19 12941.17 L509.11 12944.08 L510.18 12945.45 L512.20 12947.94 L514.34 12950.20 L516.58 12952.10 L518.76 12953.71 L520.95 12955.25 L522.92 12956.56 L524.95 12957.75 L526.71 12958.99 L528.47 12960.12 L530.87 12961.67 L532.42 12962.62 L533.86 12963.75 L535.40 12964.64 L537.00 12965.53 L538.55 12966.36 L539.40 12966.89 L541.06 12967.73 L542.71 12968.62 L544.36 12969.45 L545.96 12970.34 L547.40 12971.17 L549.27 12972.12 L550.34 12972.54 L551.30 12972.89 L552.20 12973.19 L553.32 12973.49 L554.28 12973.72 L555.19 12973.96 L556.15 12974.26 L557.00 12974.50 L558.07 12974.73 L558.98 12974.97 L559.94 12975.27 L560.79 12975.57 L560.79 12975.57" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M560.52 12963.86 L559.99 12963.09 L561.00 12963.15 L562.87 12963.98 L563.78 12964.46 L565.54 12965.35 L567.94 12967.07 L569.27 12968.44 L570.12 12970.04 L570.34 12970.87 L570.23 12973.67 L569.32 12975.92 L567.62 12978.36 L565.11 12980.62 L563.67 12981.63 L560.31 12983.35 L556.79 12984.60 L553.64 12985.43 L550.82 12985.96 L550.82 12985.96" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="583.34" y="12992.40" font-family="Cascadia Code, Consolas, monospace" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="583.34" dy="0">nhận tham số file này==&gt; RFI hoặc LFI</tspan></text>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M406.44 12816.02 L404.15 12813.88 L403.24 12813.11 L401.00 12811.81 L398.28 12810.50 L393.70 12809.73 L390.07 12810.02 L385.32 12811.39 L379.94 12814.00 L376.20 12816.50 L368.74 12822.50 L361.54 12829.45 L354.71 12837.23 L348.74 12845.78 L343.35 12854.81 L338.76 12864.32 L334.98 12874.35 L330.50 12890.27 L329.32 12895.80 L327.46 12906.67 L326.44 12915.70 L325.80 12926.51 L326.02 12935.66 L327.08 12947.48 L328.90 12958.82 L331.40 12969.57 L334.28 12979.61 L337.70 12988.82 L339.51 12993.10 L344.04 13002.84 L347.46 13008.48 L351.24 13013.83 L355.51 13018.46 L360.10 13022.56 L365.00 13026.12 L370.12 13029.15 L374.76 13031.29 L377.22 13032.24 L381.80 13033.73 L386.12 13034.80 L390.07 13035.51 L395.40 13035.93 L398.55 13036.10 L401.59 13036.10 L404.58 13035.87 L407.30 13035.57 L409.96 13035.21 L411.19 13035.09 L413.54 13034.74 L415.83 13034.38 L417.91 13034.02 L418.87 13033.85 L420.42 13033.61 L423.03 13033.25 L424.10 13033.13 L425.00 13033.01 L425.96 13032.90 L427.08 13032.72 L428.04 13032.60 L429.16 13032.54 L429.16 13032.54" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M426.76 13023.09 L426.12 13022.68 L425.22 13022.26 L426.34 13022.20 L428.10 13022.62 L429.16 13022.92 L432.20 13024.28 L433.06 13024.82 L435.08 13027.43 L435.78 13029.69 L435.62 13032.42 L434.50 13035.93 L432.04 13040.20 L428.31 13044.89 L423.72 13049.23 L421.32 13051.07 L416.58 13053.27 L416.58 13053.27" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="454.35" y="13043.16" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="454.35" dy="0">đó , vẫn cần nikto, tại cái thằng AI nó recon thiếu</tspan><tspan x="454.35" dy="20">này, nó ko nhận ra info.php nhận tham số đầu vào</tspan><tspan x="454.35" dy="20">là file</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260830023916_804.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830023916_804.png"><g transform="translate(-162.80,29.87)">
<image x="411.6334883805623" y="13115.630437534583" width="682.1214571811187" height="336.72662353515636" href="../0-asset/pasted-image-20260830023916_804.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M754.34 13277.96 L754.76 13277.31 L755.40 13276.90 L754.28 13277.07 L752.36 13278.20 L749.70 13279.75 L746.98 13281.71 L744.31 13284.02 L740.95 13287.88 L739.30 13290.85 L738.28 13294.24 L738.07 13296.02 L738.39 13299.65 L739.72 13303.69 L741.86 13307.78 L745.11 13311.64 L746.92 13313.43 L759.35 13321.56 L764.68 13323.76 L772.58 13326.14 L778.02 13327.15 L780.68 13327.51 L785.59 13327.68 L791.19 13327.27 L796.63 13326.14 L802.18 13324.06 L807.40 13321.09 L811.83 13317.47 L815.08 13313.61 L817.27 13309.15 L818.60 13304.22 L818.50 13299.76 L817.27 13295.37 L814.34 13291.57 L809.06 13288.66 L801.59 13287.17 L790.98 13287.17 L778.71 13288.54 L767.24 13290.80 L757.38 13293.82 L750.60 13296.97 L745.59 13300.60 L745.59 13300.60" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M829.27 13281.77 L828.68 13282.36 L829.75 13281.47 L833.16 13278.97 L835.94 13277.13 L839.14 13275.23 L843.08 13273.27 L847.19 13271.37 L851.35 13269.65 L855.67 13268.16 L859.51 13266.98 L863.30 13265.97 L865.16 13265.43 L868.90 13264.72 L872.20 13264.24 L876.42 13263.71 L878.87 13263.41 L879.88 13263.35 L881.43 13263.23 L882.66 13263.00 L882.66 13263.00" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M883.08 13244.64 L883.99 13244.46 L885.16 13244.64 L888.04 13245.71 L889.75 13246.96 L891.19 13248.38 L892.26 13250.16 L892.95 13252.30 L892.84 13254.74 L891.94 13257.71 L889.75 13261.69 L885.75 13266.44 L878.71 13272.56 L874.71 13275.53 L874.71 13275.53" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="906.39" y="13282.74" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="906.39" dy="0">sau khi login thành công nó có thêm trường isIUser kẹp vào để auth</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260830030145_048.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830030145_048.png"><g transform="translate(-162.80,29.87)">
<image x="445.77377076064147" y="13353.77792182558" width="679.4438233170774" height="254.88916732033053" href="../0-asset/pasted-image-20260830030145_048.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M901.59 13464.50 L898.34 13461.94 L895.46 13460.58 L892.20 13459.57 L889.06 13459.21 L885.75 13459.57 L882.39 13460.70 L878.98 13462.77 L875.78 13465.86 L873.16 13469.61 L872.15 13471.74 L870.55 13476.32 L870.02 13480.77 L870.71 13487.96 L872.31 13492.71 L874.82 13497.17 L878.18 13501.33 L882.18 13504.83 L886.55 13507.44 L891.19 13509.23 L896.15 13510.24 L900.84 13510.41 L903.19 13510.24 L908.26 13509.05 L913.06 13506.97 L917.54 13503.82 L921.59 13499.60 L926.18 13491.82 L927.83 13486.36 L928.84 13480.71 L929.11 13475.49 L928.68 13470.97 L927.35 13466.46 L926.39 13464.50 L923.83 13461.11 L920.31 13458.85 L916.10 13457.61 L907.99 13458.08 L901.16 13459.69 L894.50 13462.36 L887.35 13465.98 L884.10 13467.94 L884.10 13467.94" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830030718_518.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830030718_518.png"><g transform="translate(-162.80,29.87)">
<image x="459.5519738551726" y="13610.802144718" width="852.2275660537961" height="294.5816192325991" href="../0-asset/pasted-image-20260830030718_518.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1459.01 13509.66 L1459.01 13509.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1314.58 13586.89 L1314.24 13586.89 L1314.24 13586.89" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M714.60 13739.82 L711.30 13739.88 L708.90 13740.18 L706.76 13740.47 L704.84 13740.89 L703.99 13741.07 L702.55 13741.60 L701.32 13742.20 L699.94 13743.27 L698.71 13744.63 L697.75 13746.24 L696.95 13748.14 L696.52 13750.39 L696.31 13754.37 L696.36 13755.74 L696.68 13758.59 L697.00 13761.50 L697.64 13764.41 L698.50 13767.26 L699.83 13770.06 L701.38 13772.67 L703.35 13775.05 L704.42 13776.23 L706.98 13778.37 L711.62 13781.10 L715.56 13782.95 L719.88 13784.43 L724.68 13785.62 L729.75 13786.39 L735.46 13786.75 L738.50 13786.75 L745.64 13786.39 L753.70 13785.44 L764.95 13783.78 L776.36 13781.82 L787.94 13779.62 L804.26 13776.41 L808.58 13775.64 L816.15 13773.92 L823.40 13772.25 L829.91 13770.41 L835.51 13768.39 L840.10 13766.31 L844.10 13763.88 L847.19 13761.44 L848.47 13760.25 L850.71 13757.64 L852.52 13754.97 L853.64 13752.41 L854.39 13748.67 L854.23 13746.24 L853.64 13743.74 L852.58 13741.19 L851.78 13739.82 L849.70 13737.15 L846.82 13734.47 L843.24 13731.92 L838.87 13729.84 L833.59 13728.36 L826.60 13727.05 L819.08 13726.22 L807.19 13725.33 L803.19 13725.03 L795.08 13724.55 L786.60 13723.96 L776.36 13723.31 L765.43 13722.83 L754.07 13722.77 L741.80 13723.54 L729.75 13725.21 L717.86 13727.88 L706.92 13731.56 L701.80 13733.64 L688.90 13740.47 L683.56 13744.69 L679.72 13749.15 L677.75 13753.30 L677.38 13755.38 L677.38 13755.38" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M789.80 13781.16 L789.27 13780.45 L789.54 13781.52 L790.23 13783.78 L790.76 13785.86 L791.30 13787.94 L791.51 13789.12 L791.94 13791.26 L792.36 13793.10 L792.36 13793.10" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M799.94 13784.79 L799.72 13783.96 L799.40 13784.91 L799.40 13786.09 L799.46 13788.89 L799.62 13790.13 L799.62 13791.20 L799.62 13791.20" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M782.76 13805.87 L781.91 13806.11 L782.34 13811.87 L782.44 13812.94 L782.98 13815.85 L783.14 13817.40 L783.24 13818.71 L783.24 13819.77 L783.19 13820.96 L782.34 13822.63 L781.38 13821.20 L781.54 13820.25 L781.80 13819.42 L782.23 13818.47 L782.66 13817.64 L783.24 13816.75 L783.83 13815.97 L784.42 13815.26 L785.11 13814.78 L785.91 13814.31 L786.76 13814.55 L787.24 13815.20 L787.62 13815.91 L788.04 13816.75 L788.36 13817.64 L788.63 13818.47 L788.90 13819.30 L789.22 13820.13 L789.00 13819.06 L788.84 13817.93 L788.79 13816.63 L788.90 13815.38 L789.22 13813.95 L789.54 13812.35 L790.07 13811.10 L790.44 13810.15 L791.08 13809.38 L791.99 13809.68 L792.36 13810.45 L792.84 13812.35 L793.16 13813.24 L793.59 13815.14 L793.91 13816.57 L794.28 13817.70 L794.66 13818.65 L795.14 13819.54 L795.88 13820.13 L796.74 13819.72 L797.22 13819.00 L797.96 13817.34 L798.07 13816.27 L798.28 13814.55 L798.44 13813.18 L798.50 13812.11 L798.50 13810.98 L798.28 13810.09 L798.07 13811.22 L798.18 13812.35 L798.28 13813.48 L798.60 13814.55 L799.03 13815.32 L799.67 13815.85 L800.36 13815.20 L800.74 13814.43 L801.16 13813.42 L801.54 13812.59 L802.02 13813.18 L802.39 13814.19 L803.14 13815.97 L803.46 13816.69 L804.20 13817.81 L804.95 13818.71 L805.86 13819.18 L806.98 13819.42 L807.99 13819.06 L808.58 13818.53 L809.80 13816.86 L810.12 13816.09 L810.55 13814.67 L810.71 13813.42 L810.55 13812.23 L810.34 13811.34 L810.02 13810.63 L809.32 13809.80 L808.42 13809.50 L807.72 13809.91 L807.14 13810.98 L806.34 13812.71 L806.07 13813.54 L805.86 13815.14 L805.96 13816.57 L806.55 13817.99 L807.78 13819.42 L810.34 13820.73 L812.42 13820.90 L814.92 13820.43 L816.31 13820.07 L816.31 13820.07" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830031119_881.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830031119_881.png"><g transform="translate(-162.80,29.87)">
<image x="487.5586266872042" y="13884.79631983328" width="840.6241724991085" height="290.57078151966226" href="../0-asset/pasted-image-20260830031119_881.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../0-asset/pasted-image-20260830031946_242.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830031946_242.png"><g transform="translate(-162.80,29.87)">
<image x="491.0547211580516" y="14151.961217097962" width="765.8685558230417" height="251.39196870527317" href="../0-asset/pasted-image-20260830031946_242.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M563.30 14172.07 L560.26 14171.72 L558.66 14171.48 L554.87 14171.18 L550.98 14171.12 L547.62 14171.18 L543.88 14171.48 L540.47 14172.13 L537.16 14173.20 L534.12 14174.80 L531.40 14176.88 L529.00 14179.50 L527.67 14181.16 L524.74 14186.27 L523.46 14189.77 L522.76 14193.34 L522.66 14196.72 L523.40 14200.35 L524.90 14203.85 L527.40 14207.48 L530.66 14210.68 L534.66 14213.24 L539.24 14215.20 L541.70 14215.85 L546.55 14216.39 L554.55 14215.67 L560.15 14213.89 L565.75 14211.28 L570.55 14207.83 L574.44 14204.03 L577.32 14200.05 L579.46 14195.65 L580.58 14191.14 L580.90 14186.63 L580.58 14182.17 L580.26 14180.15 L579.03 14176.53 L576.10 14172.19 L573.43 14170.35 L570.28 14169.34 L566.71 14169.34 L562.34 14170.41 L557.54 14172.13 L552.47 14174.51 L552.47 14174.51" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M586.39 14150.69 L588.26 14148.97 L589.43 14148.07 L593.48 14145.10 L596.74 14143.20 L600.04 14141.30 L603.46 14139.58 L606.82 14138.09 L609.91 14136.91 L612.74 14135.96 L615.08 14135.18 L616.10 14134.83 L617.11 14134.53 L618.50 14134.00 L618.50 14134.00" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M619.46 14124.08 L620.26 14123.36 L621.22 14123.13 L622.18 14123.36 L622.98 14124.08 L623.83 14125.68 L624.42 14127.88 L624.63 14130.31 L624.52 14133.11 L623.62 14138.04 L622.98 14139.70 L621.48 14142.91 L619.72 14145.64 L617.86 14147.48 L617.86 14147.48" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M633.64 14126.69 L634.50 14125.80 L635.08 14125.20 L635.67 14124.61 L636.42 14124.91 L636.63 14125.92 L636.90 14127.64 L637.11 14130.02 L637.22 14132.51 L637.32 14133.82 L637.38 14136.31 L637.43 14138.81 L637.54 14139.94 L637.59 14141.66 L637.59 14141.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M635.56 14121.70 L635.67 14120.69 L636.52 14120.39 L638.82 14120.51 L640.95 14121.11 L643.03 14122.12 L644.95 14123.36 L646.60 14124.85 L647.35 14125.68 L648.58 14127.58 L649.48 14129.54 L650.12 14131.74 L650.34 14134.06 L650.23 14136.31 L649.06 14139.76 L647.78 14141.84 L646.12 14143.68 L644.31 14145.16 L642.55 14146.53 L640.90 14147.48 L640.10 14147.84 L640.10 14147.84" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M628.20 14122.77 L628.04 14121.76 L627.88 14122.71 L628.42 14125.86 L629.00 14129.72 L629.22 14131.14 L629.64 14134.06 L630.12 14136.97 L630.55 14139.70 L630.92 14142.31 L631.19 14144.75 L631.30 14145.99 L631.30 14145.99" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M627.62 14150.69 L627.35 14149.92 L627.19 14148.97 L627.46 14148.19 L628.04 14147.72 L628.84 14147.24 L629.75 14146.83 L630.71 14146.47 L630.71 14146.47" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M622.76 14129.30 L622.12 14128.06 L621.70 14127.05 L621.38 14126.21 L621.22 14125.20 L621.32 14124.14 L621.96 14123.36 L623.51 14122.53 L624.42 14122.18 L626.28 14121.40 L627.14 14121.11 L627.14 14121.11" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M660.74 14121.70 L660.15 14121.17 L655.46 14126.21 L656.63 14137.38 L657.22 14138.45 L658.60 14140.41 L660.10 14141.78 L661.70 14142.55 L663.03 14142.67 L664.20 14142.37 L665.75 14141.24 L666.92 14139.58 L665.86 14129.48 L665.27 14128.47 L660.10 14124.55 L660.10 14124.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M671.72 14117.66 L671.99 14118.55 L671.94 14119.74 L672.20 14124.31 L672.58 14127.22 L673.00 14130.19 L673.48 14133.16 L674.07 14135.96 L674.34 14137.26 L674.92 14139.76 L675.46 14141.84 L675.78 14143.26 L676.10 14144.21 L675.14 14141.48 L674.28 14138.51 L673.27 14135.07 L672.84 14133.34 L672.20 14130.13 L671.83 14127.40 L671.83 14124.91 L672.04 14122.71 L672.58 14120.99 L672.84 14120.16 L674.50 14118.37 L675.35 14117.96 L676.63 14117.84 L677.86 14118.02 L679.83 14119.38 L681.11 14121.11 L682.12 14123.19 L682.76 14125.80 L683.19 14128.71 L683.62 14133.46 L683.88 14136.49 L684.31 14139.46 L684.84 14142.19 L685.64 14144.63 L686.60 14146.77 L687.19 14147.60 L688.63 14149.08 L690.44 14149.92 L691.35 14150.15 L694.34 14149.97 L696.68 14149.44 L700.10 14148.37 L700.10 14148.37" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M726.76 14141.18 L726.18 14142.02 L726.18 14142.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1065.22 14334.89 L1065.70 14334.24 L1066.34 14333.76 L1067.51 14333.64 L1068.47 14333.70 L1071.30 14334.24 L1073.80 14334.65 L1076.52 14335.13 L1079.40 14335.66 L1082.55 14336.20 L1084.20 14336.55 L1089.22 14337.50 L1092.42 14338.40 L1095.40 14339.23 L1098.23 14340.12 L1100.84 14340.95 L1103.46 14341.84 L1104.79 14342.26 L1107.19 14343.09 L1109.64 14343.98 L1112.15 14344.69 L1114.82 14345.23 L1117.54 14345.82 L1121.70 14346.47 L1124.42 14346.83 L1125.86 14347.07 L1128.58 14347.31 L1131.24 14347.60 L1133.86 14347.84 L1136.31 14348.02 L1138.76 14348.14 L1141.16 14348.26 L1143.67 14348.32 L1145.00 14348.32 L1147.51 14348.26 L1151.46 14348.14 L1154.02 14347.84 L1156.74 14347.54 L1159.40 14347.19 L1161.96 14346.77 L1163.19 14346.47 L1165.54 14345.94 L1167.83 14345.52 L1170.02 14345.11 L1171.99 14344.69 L1174.02 14344.16 L1176.90 14343.33 L1177.91 14343.03 L1179.78 14342.61 L1181.70 14342.08 L1183.46 14341.60 L1185.32 14341.07 L1186.76 14340.65 L1187.99 14340.36 L1189.00 14340.12 L1189.86 14339.88 L1190.87 14339.58 L1191.88 14339.29 L1192.79 14338.99 L1193.64 14338.81 L1194.50 14338.51 L1195.51 14338.40 L1195.51 14338.40" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260830032355_005.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830032355_005.png"><g transform="translate(-162.80,29.87)">
<image x="461.28461832678784" y="14840.636937778723" width="827.1102118173145" height="746.8021102111991" href="../0-asset/pasted-image-20260830032355_005.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../0-asset/pasted-image-20260830032820_553.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260830032820_553.png"><g transform="translate(-162.80,29.87)">
<image x="490.1746381235207" y="14415.957067173254" width="884.6804070635798" height="329.61334228515636" href="../0-asset/pasted-image-20260830032820_553.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M752.84 14582.99 L751.72 14582.87 L750.76 14582.69 L749.70 14582.45 L748.68 14582.39 L749.27 14583.29 L752.42 14584.89 L754.87 14585.84 L757.54 14586.61 L760.68 14587.44 L763.88 14588.10 L766.98 14588.51 L768.47 14588.69 L772.10 14589.05 L775.35 14589.23 L778.98 14589.40 L784.47 14589.52 L788.58 14589.52 L792.63 14589.40 L796.74 14589.40 L800.84 14589.34 L804.90 14589.05 L808.90 14588.81 L812.84 14588.45 L814.82 14588.22 L818.60 14587.80 L822.39 14587.44 L826.18 14586.85 L831.94 14586.14 L835.67 14585.54 L839.46 14585.13 L843.14 14584.65 L846.71 14584.18 L850.28 14583.76 L853.48 14583.46 L855.30 14583.35 L858.44 14582.99 L861.48 14582.69 L864.42 14582.45 L867.14 14582.34 L870.92 14582.22 L873.16 14582.04 L874.87 14581.98 L876.36 14581.98 L877.75 14581.98 L879.03 14581.98 L882.18 14581.92 L884.63 14581.74 L887.19 14581.56 L889.70 14581.33 L892.15 14581.03 L895.67 14580.67 L897.64 14580.37 L899.24 14580.20 L900.52 14580.02 L901.59 14579.90 L902.82 14579.78 L903.88 14579.60 L904.90 14579.48 L905.91 14579.42 L906.82 14579.25 L907.83 14579.19 L907.83 14579.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M649.48 14460.27 L648.42 14460.09 L647.46 14459.73 L646.76 14459.38 L645.75 14459.08 L644.31 14458.96 L641.96 14458.78 L639.46 14458.96 L636.74 14459.38 L633.80 14460.15 L629.22 14462.05 L626.07 14463.65 L624.52 14464.60 L621.54 14466.62 L618.66 14468.64 L616.10 14470.60 L613.70 14472.80 L611.72 14474.94 L610.12 14477.08 L609.00 14479.16 L608.26 14481.23 L608.04 14483.31 L608.63 14486.46 L609.64 14488.66 L611.14 14490.92 L613.16 14493.06 L615.46 14495.08 L616.63 14496.08 L619.30 14497.81 L622.18 14499.41 L625.11 14500.66 L628.26 14501.73 L631.51 14502.32 L634.55 14502.50 L639.51 14501.97 L642.98 14500.96 L646.18 14499.59 L649.11 14497.87 L651.94 14495.79 L654.34 14493.41 L656.52 14490.92 L658.23 14488.13 L658.92 14486.70 L660.10 14483.61 L660.95 14480.64 L661.38 14477.79 L661.48 14473.81 L661.00 14471.43 L660.31 14469.29 L659.40 14467.39 L658.02 14466.03 L656.52 14465.26 L655.51 14464.96 L653.64 14464.84 L653.64 14464.84" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M665.38 14439.24 L664.52 14439.83 L663.78 14440.19 L664.74 14438.88 L666.82 14436.51 L668.47 14434.72 L670.44 14432.64 L672.36 14430.57 L674.07 14428.72 L675.72 14427.00 L677.32 14425.40 L678.07 14424.63 L679.67 14423.14 L681.27 14421.77 L682.82 14420.41 L684.26 14419.34 L685.86 14418.03 L686.71 14417.44 L687.46 14416.96 L687.46 14416.96" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M681.59 14416.90 L682.02 14416.07 L683.08 14416.01 L684.10 14416.19 L686.39 14417.20 L687.78 14418.15 L688.26 14418.74 L688.84 14419.99 L689.06 14421.36 L688.42 14424.51 L687.19 14426.70 L686.34 14428.01 L686.34 14428.01" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<text x="691.18" y="14406.44" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="691.18" dy="0">cái này phân tích bên trên</tspan><tspan x="691.18" dy="20">==&gt; vào được config.php nhờ LFI </tspan></text>
</g>
<a href="./writeup_lab_thm_support" class="excalidraw-node-link" target="_self" title="writeup_LAB_THM_support"><g transform="translate(-162.80,29.87)">
<text x="367.21" y="26.13" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="367.21" dy="0">📍 writeup_LAB_THM_support</tspan></text>
</g></a>
<g transform="translate(-162.80,29.87)">
<path d="M1326.70 13028.98 L1326.70 13027.98 L1326.70 13027.98" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-162.80,29.87)">
<path d="M1287.44 1812.09 L1288.24 1813.50 L1288.91 1814.61 L1288.91 1814.61" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-b0d24878bbc041158694fa7665a307be07826852" class="notion-callout-card">

# Báo Cáo Reconnaissance - Support Operations Panel

**Mục tiêu:** `http://10.48.187.204/`  
**Thời gian thực hiện:** 29/08/2026  
**Thư mục làm việc:** `/home/ti/SEUCURITY_LABLAB/THM/support_lab`  

---

## 1. Tổng Quan Mục Tiêu (Target Overview)

| Thông tin | Chi tiết |
| :--- | :--- |
| **IP Address** | `10.48.187.204` |
| **Operating System** | Linux (Ubuntu) |
| **Web Server** | Apache/2.4.58 (Ubuntu) |
| **Backend Technology** | PHP 8.3.6 |
| **Corporate Domain** | `support.thm` (Contact: `help@support.thm`) |
| **Network Latency** | ~187 ms - 209 ms |

---

## 2. Kết Quả Quét Cổng (Port Scanning & Service Enumeration)

Tiến hành quét toàn bộ 65,535 cổng TCP trên mục tiêu bằng `nmap`:

### Danh Sách Dịch Vụ Mở (Open Ports):

| Port | State | Service | Version / Details |
| :--- | :--- | :--- | :--- |
| **22/tcp** | `OPEN` | SSH | OpenSSH 9.6p1 Ubuntu 3ubuntu13.11<br>• ECDSA key: `b4:23:fa:e0:89:50:58:14:b5:f0:f3:01:81:ef:a5:3b`<br>• ED25519 key: `fd:62:7d:e5:54:e7:5c:05:6b:72:e5:94:28:d1:5e:1b` |
| **80/tcp** | `OPEN` | HTTP | Apache httpd 2.4.58 ((Ubuntu))<br>• Title: `Support Operations Panel`<br>• Cookie: `PHPSESSID` (httponly: not set) |

*Tất cả các cổng khác (65,533 ports) ở trạng thái closed hoặc filtered.*

---

## 3. Chi Tiết Quá Trình Recon & Các Câu Lệnh Đã Sử Dụng (Detailed Methodology & Commands)

Quá trình thu thập thông tin được thực hiện theo 8 bước chiến lược sau:

### Bước 1: Kiểm Tra Kết Nối Mạng (Network Connectivity Check)
Thực hiện kiểm tra ICMP ping để xác định mục tiêu đang hoạt động và đo độ trễ mạng.

**Câu lệnh đã dùng:**
```bash
ping -c 2 10.48.187.204
```

**Kết quả:**
- Host phản hồi tốt (`64 bytes from 10.48.187.204: icmp_seq=1 ttl=62 time=187 ms`)
- Packet loss: 0%, RTT trung bình ~197ms.

---

### Bước 2: Quét Dịch Vụ Cổng Ban Đầu (Initial Service Discovery Scan)
Thực hiện quét Nmap kiểm tra các script mặc định (`-sC`) và xác định phiên bản dịch vụ (`-sV`) trên các cổng tiêu chuẩn.

**Câu lệnh đã dùng:**
```bash
nmap -sC -sV -oN nmap_initial.txt 10.48.187.204
```

**Kết quả thu được:**
- **Port 22/tcp**: OpenSSH 9.6p1 Ubuntu 3ubuntu13.11.
- **Port 80/tcp**: Apache httpd 2.4.58 (Ubuntu), HTML Title: "Support Operations Panel", set cookie `PHPSESSID`.

---

### Bước 3: Quét Toàn Bộ Cổng TCP (Full Port Scan)
Quét toàn bộ dải cổng TCP từ 1 đến 65535 nhằm đảm bảo không bỏ sót bất kỳ dịch vụ ẩn nào (quản trị, database, proxy, custom ports).

**Câu lệnh đã dùng:**
```bash
nmap -p- -T4 --min-rate 1000 -oN nmap_allports.txt 10.48.187.204
```

**Kết quả:**
- Xác nhận chỉ có duy nhất 2 cổng mở trên toàn hệ thống: **Port 22 (SSH)** và **Port 80 (HTTP)**.

---

### Bước 4: Khảo Sát Bề Mặt Web & HTTP Response Headers
Sử dụng `curl` kiểm tra phản hồi HTTP Header và cấu trúc HTML trang chủ `http://10.48.187.204/`.

**Câu lệnh đã dùng:**
```bash
curl -s -i http://10.48.187.204/
```

**Kết quả thu được:**
- Server Banner: `Apache/2.4.58 (Ubuntu)`
- Set-Cookie: `PHPSESSID=...` (thiếu thuộc tính `HttpOnly`)
- Giao diện: Form "Employee Authentication" nhận tham số POST `email` và `password`.
- Domain hỗ trợ: `help@support.thm`.

---

### Bước 5: Dò Tìm Đường Dẫn Thư Mục & File Ẩn (Web Directory Brute-Forcing)
Sử dụng `gobuster` kết hợp với tập từ điển `SecLists` (`common.txt`, `raft-medium-files.txt`, `raft-medium-directories.txt`) để quét tất cả đường dẫn ẩn.

**Các câu lệnh đã dùng:**
```bash
# Quét danh mục cơ bản
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/common.txt -o gobuster_common.txt

# Quét với các đuôi mở rộng file
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/common.txt -x php,html,txt,json,bak -o gobuster_ext.txt

# Quét tập tin theo danh sách raft
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt -o gobuster_raft_files.txt

# Quét thư mục theo danh sách raft
gobuster dir -u http://10.48.187.204/ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -o gobuster_raft_dirs.txt
```

**Các đường dẫn phát hiện được:**
- `/index.php` (Status 200)
- `/config.php` (Status 200, 0 bytes)
- `/footer.php` (Status 200)
- `/info.php` (Status 200, 73KB)
- `/dashboard.php` (Status 302 -> `index.php`)
- `/api.php` (Status 302 -> `index.php`)
- `/logout.php` (Status 302 -> `index.php`)
- Thư mục: `/includes/`, `/skins/`, `/layout/`, `/js/`

---

### Bước 6: Kiểm Tra Liệt Kê Thư Mục (Directory Listing Inspection)
Truy cập trực tiếp vào các thư mục đã phát hiện để kiểm tra tính năng Indexing của Apache Server.

**Các câu lệnh đã dùng:**
```bash
curl -s -i http://10.48.187.204/layout/
curl -s -i http://10.48.187.204/js/
curl -s -i http://10.48.187.204/includes/
curl -s -i http://10.48.187.204/skins/
```

**Kết quả thu được:**
- Tính năng **Directory Listing** bật trên cả 4 thư mục:
  - `/layout/` chứa `bootstrap.min.css`
  - `/js/` chứa `bootstrap.bundle.min.js`
  - `/includes/` chứa `header.php`, `skin.php`
  - `/skins/` chứa `blue.php`, `default.php`, `green.php`, `red.php`

---

### Bước 7: Trích Xuất & Phân Tích Thông Tin Môi Trường Từ `info.php`
Sử dụng script Python với `BeautifulSoup` để lọc các thông số nguy hiểm từ tập tin `info.php`.

**Câu lệnh đã dùng:**
```bash
python3 -c '
import urllib.request
from bs4 import BeautifulSoup

url = "http://10.48.187.204/info.php"
html = urllib.request.urlopen(url).read().decode("utf-8", errors="ignore")
soup = BeautifulSoup(html, "html.parser")

keywords = ["DOCUMENT_ROOT", "SCRIPT_FILENAME", "disable_functions", "open_basedir", "allow_url_include", "allow_url_fopen", "APACHE_RUN_USER"]
for row in soup.find_all("tr"):
    txt = row.text.strip().replace("\n", " ")
    for kw in keywords:
        if kw in txt:
            print(f"{kw}: {txt[:100]}")
            break
'
```

**Thông tin cấu hình quan trọng thu được:**
- PHP Version: `8.3.6`
- Web Server User: `www-data` (UID: 33)
- Document Root: `/var/www/html`
- `disable_functions`: **no value** (Không cấm hàm thực thi hệ thống)
- `open_basedir`: **no value** (Không giới hạn đường dẫn đọc file)
- `session.save_path`: `/var/lib/php/sessions`
- `session.upload_progress.enabled`: `On`

---

### Bước 8: Kiểm Tra Chuyển Hướng Xác Thực & Fuzzing Tham Số (Auth & Parameter Testing)
Kiểm tra các hành vi chuyển hướng (HTTP 302) xem có lỗ hổng Execution After Redirect (EAR) hay không và đọc nội dung component `footer.php`.

**Các câu lệnh đã dùng:**
```bash
# Kiểm tra EAR trên dashboard.php, api.php, header.php
curl -s -i --max-redirs 0 http://10.48.187.204/dashboard.php
curl -s -i --max-redirs 0 http://10.48.187.204/api.php
curl -s -i --max-redirs 0 http://10.48.187.204/includes/header.php

# Đọc mã HTML nguồn của footer.php
curl -s http://10.48.187.204/footer.php
```

**Kết quả:**
- `dashboard.php` và `api.php` trả về `Content-Length: 0` khi bị chuyển hướng (không bị EAR).
- `footer.php` chứa giao diện chọn Theme chuyển hướng tham số `?skin=default`, `?skin=red`, `?skin=green`, `?skin=blue`.

---

## 4. Cấu Trúc Ứng Dụng Web Tổng Hợp

```
http://10.48.187.204/
├── index.php             (Trang chủ / Form đăng nhập nhân viên)
├── dashboard.php         (Trang quản trị / Dashboard - Yêu cầu auth, HTTP 302 -> index.php)
├── api.php               (Endpoint API hệ thống - Yêu cầu auth, HTTP 302 -> index.php)
├── logout.php            (Endpoint đăng xuất - HTTP 302 -> index.php)
├── config.php            (File cấu hình PHP backend - HTTP 200, 0 bytes output)
├── footer.php            (Component footer chứa theme selector `?skin=...`)
├── info.php              (File phpinfo() công khai tiết lộ thông tin cấu hình server)
├── includes/             (Thư mục backend includes - Bật Directory Listing)
│   ├── header.php        (Component header - HTTP 302 -> index.php khi gọi trực tiếp)
│   └── skin.php          (Component xử lý giao diện/theme - HTTP 200)
├── skins/                (Thư mục chứa các file giao diện CSS - Bật Directory Listing)
│   ├── default.php       (<style>body { background-color: #f8f9fa; }</style>)
│   ├── blue.php          (<style>body { background-color: #e5f0ff; }</style>)
│   ├── green.php         (<style>body { background-color: #e5ffe5; }</style>)
│   └── red.php           (<style>body { background-color: #ffe5e5; }</style>)
├── layout/               (Thư mục giao diện CSS - Bật Directory Listing)
│   └── bootstrap.min.css
└── js/                   (Thư mục Javascript - Bật Directory Listing)
    └── bootstrap.bundle.min.js
```

---

## 5. Danh Sách Lỗ Hổng & Điểm Yếu Ghi Nhận (Security Findings)

### 1. Phơi Nhiễm Thông Tin Cấu Hình Hóa (`info.php`)
- **Mức độ**: Trung bình (Medium)
- **Mô tả**: Endpoint `/info.php` công khai cho phép bất kỳ ai xem toàn bộ thông số môi trường PHP, thông tin đường dẫn thư mục gốc (`/var/www/html`), phiên bản OS, người dùng hệ thống (`www-data`), và cấu hình session.

### 2. Cấu Hình Bật Liệt Kê Thư Mục (Directory Listing / Indexing Enabled)
- **Mức độ**: Thấp - Trung bình (Low - Medium)
- **Mô tả**: Các thư mục `/includes/`, `/skins/`, `/layout/`, và `/js/` không cấm liệt kê tập tin. Người dùng có thể duyệt toàn bộ danh sách file mã nguồn/tài nguyên bên trong.

### 3. Thiếu Thuộc Tính `HttpOnly` Trên Session Cookie
- **Mức độ**: Thấp (Low)
- **Mô tả**: Cookie `PHPSESSID` được thiết lập không kèm cờ `HttpOnly`, tạo điều kiện cho các kịch bản đánh cắp session cookie nếu ứng dụng có lỗ hổng Cross-Site Scripting (XSS).

### 4. Bề Mặt Tấn Công Ứng Dụng (Attack Surface for Next Steps)
- **Cơ chế Theme Selector (`?skin=...`)**: File `footer.php` chứa tính năng chuyển đổi giao diện với các tham số `default`, `red`, `green`, `blue`. Cần kiểm tra kỹ hơn cơ chế Dynamic File Inclusion trong ứng dụng.
- **Xác thực Đăng nhập (`index.php`)**: Giao diện đăng nhập nhân viên chấp nhận email dạng `@support.thm`. Các trang `/dashboard.php` và `/api.php` kiểm tra session trước khi cho phép truy cập.

---

## 6. Kết Luận & Đề Xuất Khắc Phục (Remediation Recommendations)

1. **Xóa hoặc bảo vệ file `info.php`**: Xóa bỏ file `info.php` trên môi trường production hoặc giới hạn quyền truy cập theo IP nội bộ.
2. **Tắt Directory Listing**: Thêm directive `Options -Indexes` trong file cấu hình Apache hoặc `.htaccess` để cấm liệt kê thư mục.
3. **Cấu hình an toàn cho Session Cookie**: Thiết lập cờ `HttpOnly` và `Secure` cho cookie `PHPSESSID` trong `php.ini` (`session.cookie_httponly = On`).
4. **Vệ sinh đầu vào (Input Sanitization)**: Đảm bảo các tham số giao diện (như `skin`) được whitelist nghiêm ngặt để tránh rủi ro Local File Inclusion (LFI).

</div>

---

<div id="doc-ed665c6a396f9b2a95e69edf11855e4ca3b08bec" class="notion-callout-card">

Nhìn sơ đồ này có 3 điểm hở cực to, xâu chuỗi lại là thấy ngay bài bypass login:

1. Lỗ hổng LFI ở tính năng đổi theme (`footer.php?skin=...`)

* Web có thư mục `skins/` chứa các file `default.php`, `blue.php`, `green.php`, `red.php`.
* Khi người dùng bấm chọn màu trên giao diện, server gọi `footer.php?skin=blue`. Điều này cho thấy backend đang nối chuỗi kiểu `include("skins/" . $_GET['skin'] . ".php")` hoặc `include($_GET['skin'])`.
* Đây chính là điểm vào (entry point) để khai thác LFI.

2. Đọc mã nguồn `config.php` bằng PHP Wrapper

* Thư mục gốc có file `config.php`. Mày mở trực tiếp qua trình duyệt thì thấy trắng trơn (0 bytes) vì PHP thực thi mã chứ không in ra màn hình.
* Nhưng nếu tận dụng LFI ở tham số `skin` kết hợp với PHP filter để đọc file dưới dạng base64:
`?skin=php://filter/convert.base64-encode/resource=../config` (hoặc `resource=config.php`)
* Lúc này server sẽ trả về chuỗi base64 của file `config.php`. Giải mã ra là đọc được thông tin nhạy cảm bên trong, thường là mật khẩu cứng của admin hoặc thông tin kết nối database để login thẳng vào `index.php`.

3. Đọc mã nguồn kiểm tra đăng nhập (`index.php`, `header.php`)

* Dùng tiếp bài PHP filter để đọc source code của `index.php` hoặc `includes/header.php` xem dev viết logic xác thực như thế nào.
* Nhiều bài lab viết logic auth rất ngớ ngẩn (ví dụ chỉ check xem có cookie `role=admin`, `admin=true` hay `logged_in=1` không). Đọc được code là biết ngay cách chế cookie để nhảy thẳng vào `dashboard.php` mà không cần tài khoản.

4. Tận dụng `info.php` (phpinfo)

* Mở `[http://10.48.187.204/info.php](http://10.48.187.204/info.php)` để soi:
* Cấu hình `allow_url_include`: nếu đang `On` thì ném link RFI vào `?skin=` để lấy shell luôn khỏi cần login.
* Mục `Environment` / `PHP Variables`: nhiều khi dev lưu luôn pass admin hoặc API key trong biến môi trường của server.



Các bước mày nên làm ngay:
Bắt request `footer.php?skin=default` ném vào Burp Repeater, đổi `skin` thành `php://filter/convert.base64-encode/resource=../config` hoặc thử lùi thư mục `../../../../etc/passwd` để test LFI trước.

</div>

---



### 🔗 Các bài viết liên kết trong sơ đồ

- [[template fuff dùng cho cổng đăng nhập]]
- [[dùng fuff trong thực tế]]
- [[writeup_LAB_THM_support]]
