---
title: "dạng SSRF lấy dữ liệu từ backend system-internal system"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-14063ce5">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1030 2013" width="1030" height="2013" class="excalidraw-svg" data-width="1030" data-height="2013">
<g transform="translate(735.51,121.81)">

<rect x="-688.2682189941406" y="-81.80513315164563" width="863.8540577373573" height="1932.509470736043" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="-688.2682189941406" y="-81.80513315164563" width="863.8540577373573" height="1932.509470736043" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Ghi chú Markdown</span>
      </div>
      <a href="#doc-dd2234858b9be0070d4c6763a7114fae6ab606dd" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <pre><code>3. SSRF Against Other Back-end Systems
│
├── Mục đích
│   └── Dùng SSRF để lấy dữ liệu từ các hệ thống backend
│       nằm sâu bên trong mạng nội bộ, không lộ ra Internet.
│
├── Internal IP Range
│   ├── 10.0.0.0/8       ← dải Class A, thường dùng cho mạng doanh nghiệp lớn
│   ├── 172.16.0.0/12    ← dải Class B, dùng cho mạng vừa
│   └── 192.168.0.0/16   ← dải Class C, dùng cho mạng nhỏ / gia đình
│
│   Ghi chú: Đây là 3 dải IP private theo chuẩn RFC 1918.
│   Server backend thường nằm trong các dải này.
│   Attacker từ ngoài không truy cập được, nhưng SSRF thì có.
│
├── Network Enumeration
│   ├── Scan IP          ← quét từng IP để tìm host đang sống
│   │                       (dùng SSRF để thử từng IP một)
│   ├── Scan Port        ← với mỗi IP sống, thử từng cổng
│   │                       (22, 80, 443, 3306, 6379, 8080...)
│   └── Identify service ← xem response để đoán dịch vụ gì
│                           (banner, header, nội dung HTML, lỗi...)
│
│   Ví dụ thực tế:
│   - SSRF gọi http://10.0.0.5:80 → trả về trang login → có web server
│   - SSRF gọi http://10.0.0.5:6379 → trả về lỗi Redis → có Redis
│   - SSRF gọi http://10.0.0.5:3306 → timeout → có thể MySQL
│
├── Tools
│   ├── Burp Intruder    ← gửi hàng loạt request với payload khác nhau,
│   │                       dùng để brute-force IP/port qua SSRF
│   ├── ffuf             ← fuzzing nhanh, thay thế Burp Intruder
│   │                       khi cần tốc độ cao
│   └── custom script    ← viết Python/Bash để tự động hóa
│                           toàn bộ quá trình scan qua SSRF
│
│   Lưu ý: Trong SSRF, các tool này thường không gửi request
│   trực tiếp từ máy attacker, mà chèn payload vào tham số
│   của ứng dụng để server gọi hộ.
│
└── Goal
    ├── Find hidden admin server   ← tìm server quản trị ẩn
    │                                   (thường chỉ nghe nội bộ,
    │                                    không mở port ra ngoài)
    ├── Access internal API        ← gọi API nội bộ không xác thực
    │                                   hoặc xác thực yếu
    └── Extract sensitive data     ← lấy dữ liệu nhạy cảm:
                                        - Credentials
                                        - Token
                                        - Config
                                        - Database dump
                                        - Cloud metadata
</code></pre>
<p><strong>Giải thích tổng quan:</strong></p>
<ol>
<li><p><strong>Mục đích:</strong> SSRF không chỉ để chọc vào chính server. Nó còn là cửa vào để quét toàn bộ mạng nội bộ phía sau. Server đóng vai &quot;cầu nối&quot; giữa attacker (ngoài Internet) và backend (trong mạng nội bộ).</p>
</li>
<li><p><strong>Internal IP Range:</strong> Ba dải IP private chính. Khi attacker dùng SSRF, họ sẽ thử từng dải để tìm host sống.</p>
</li>
<li><p><strong>Network Enumeration:</strong> Quy trình 3 bước giống pentest thông thường, nhưng thực hiện qua SSRF:</p>
<ul>
<li>Tìm IP sống.</li>
<li>Tìm port mở.</li>
<li>Đoán dịch vụ đang chạy.</li>
</ul>
</li>
<li><p><strong>Tools:</strong> Burp Intruder và ffuf dùng để tự động hóa việc thử nhiều IP/port. Custom script dùng khi cần logic phức tạp hơn.</p>
</li>
<li><p><strong>Goal:</strong> Kết quả cuối cùng là tìm được admin server ẩn, gọi API nội bộ, và trích xuất dữ liệu nhạy cảm. Đây là mục tiêu của mọi cuộc tấn công SSRF nâng cao.</p>
</li>
</ol>
<p><strong>Ví dụ chuỗi tấn công hoàn chỉnh:</strong></p>
<pre><code>1. Tìm tham số ?url= trên web app
2. Chèn http://10.0.0.1 → xem có phản hồi không
3. Dùng ffuf brute-force 10.0.0.0/8 + port 80, 8080
4. Tìm thấy 10.0.0.5:8080 trả về admin panel
5. Chèn http://10.0.0.5:8080/admin/users → lấy danh sách user
6. Chèn http://10.0.0.5:8080/admin/config → lấy credentials
7. Dùng credentials đó leo thang hoặc pivot sâu hơn
</code></pre>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(735.51,121.81)">
<path d="M-641.92 1496.70 L-642.55 1497.54 L-643.48 1498.47 L-644.42 1499.41 L-645.35 1500.34 L-646.29 1502.21 L-647.45 1503.37 L-648.61 1504.57 L-649.54 1505.72 L-650.49 1506.87 L-651.43 1508.76 L-651.43 1509.69 L-652.36 1510.88 L-652.36 1512.97 L-653.55 1514.14 L-654.48 1515.08 L-654.48 1516.01 L-654.48 1516.95 L-655.42 1518.82 L-655.42 1519.75 L-656.35 1520.91 L-656.35 1522.06 L-656.35 1522.99 L-656.35 1523.93 L-656.35 1524.86 L-656.35 1525.79 L-656.35 1526.73 L-656.35 1527.66 L-656.35 1528.60 L-656.35 1529.53 L-655.42 1530.47 L-655.42 1531.40 L-654.48 1532.35 L-654.48 1533.30 L-653.35 1533.30 L-653.35 1534.44 L-652.41 1534.44 L-652.41 1535.36 L-651.55 1535.36 L-651.55 1536.28 L-650.61 1536.28 L-650.61 1537.21 L-649.68 1537.21 L-648.72 1538.15 L-647.77 1539.08 L-646.83 1539.08 L-644.95 1540.04 L-644.02 1540.97 L-642.15 1540.97 L-638.72 1541.92 L-636.85 1541.92 L-633.98 1542.86 L-630.15 1542.86 L-626.52 1543.90 L-622.52 1543.90 L-618.51 1543.90 L-616.61 1543.90 L-612.79 1543.90 L-610.90 1543.90 L-609.03 1543.90 L-607.16 1543.90 L-605.29 1543.90 L-604.36 1543.90 L-603.42 1543.90 L-602.49 1543.90 L-601.55 1543.90 L-599.68 1543.90 L-598.75 1543.90 L-597.81 1543.90 L-595.94 1543.90 L-595.01 1543.90 L-594.07 1543.90 L-592.20 1543.90 L-591.27 1543.90 L-590.34 1543.90 L-588.47 1543.90 L-586.57 1544.85 L-584.70 1544.85 L-582.83 1544.85 L-580.02 1544.85 L-578.15 1544.85 L-576.28 1544.85 L-573.48 1544.85 L-570.68 1544.85 L-567.84 1544.85 L-565.95 1544.85 L-562.78 1546.08 L-559.89 1546.08 L-557.09 1546.08 L-554.23 1546.08 L-551.36 1546.08 L-548.00 1546.08 L-545.14 1546.08 L-542.28 1546.08 L-538.48 1546.08 L-535.62 1546.08 L-532.73 1546.08 L-528.81 1546.08 L-525.92 1546.08 L-522.95 1546.08 L-519.06 1547.03 L-516.20 1547.03 L-513.37 1547.03 L-510.54 1547.03 L-508.67 1547.03 L-506.80 1547.03 L-504.93 1547.03 L-503.06 1547.03 L-501.19 1547.03 L-499.32 1547.03 L-497.45 1547.03 L-495.58 1547.03 L-492.78 1547.03 L-490.91 1547.03 L-488.10 1547.03 L-485.30 1547.03 L-482.47 1547.03 L-479.57 1547.03 L-476.74 1547.03 L-473.88 1547.03 L-471.05 1547.03 L-468.19 1547.03 L-465.32 1547.03 L-462.43 1547.03 L-458.59 1547.03 L-454.51 1547.03 L-450.33 1548.17 L-446.15 1548.17 L-441.54 1548.17 L-435.99 1548.17 L-432.95 1548.17 L-427.33 1548.17 L-423.17 1548.17 L-419.03 1548.17 L-414.38 1549.46 L-408.94 1549.46 L-404.42 1549.46 L-399.73 1549.46 L-395.58 1549.46 L-390.15 1549.46 L-384.44 1549.46 L-378.35 1549.46 L-373.67 1549.46 L-367.69 1549.46 L-361.73 1549.46 L-355.77 1549.46 L-349.81 1549.46 L-343.85 1549.46 L-337.64 1549.46 L-332.97 1549.46 L-327.31 1549.46 L-321.61 1549.46 L-317.46 1549.46 L-313.30 1549.46 L-307.59 1549.46 L-303.34 1549.46 L-298.93 1549.46 L-294.93 1549.46 L-290.78 1549.46 L-286.27 1549.46 L-282.19 1549.46 L-277.59 1549.46 L-271.66 1550.75 L-267.00 1550.75 L-261.30 1550.75 L-255.31 1550.75 L-249.60 1550.75 L-245.20 1550.75 L-239.49 1550.75 L-233.56 1550.75 L-228.65 1550.75 L-222.93 1550.75 L-217.23 1550.75 L-213.09 1550.75 L-208.93 1550.75 L-204.93 1550.75 L-201.96 1550.75 L-198.99 1550.75 L-196.13 1550.75 L-193.27 1550.75 L-191.40 1550.75 L-188.59 1550.75 L-186.72 1550.75 L-183.92 1550.75 L-182.05 1550.75 L-179.24 1550.75 L-176.41 1550.75 L-173.58 1550.75 L-171.71 1550.75 L-168.91 1550.75 L-166.05 1550.75 L-163.20 1550.75 L-160.04 1549.53 L-157.11 1549.53 L-154.24 1549.53 L-151.38 1549.53 L-147.56 1549.53 L-144.70 1549.53 L-141.73 1549.53 L-137.81 1549.53 L-132.96 1550.82 L-130.00 1550.82 L-124.70 1550.82 L-121.27 1551.89 L-117.26 1551.89 L-113.27 1551.89 L-110.26 1552.91 L-107.29 1552.91 L-104.43 1552.91 L-101.57 1552.91 L-98.41 1553.88 L-95.33 1553.88 L-93.46 1553.88 L-90.66 1553.88 L-87.85 1553.88 L-85.00 1553.88 L-83.13 1553.88 L-79.37 1553.88 L-77.37 1554.92 L-74.43 1554.92 L-71.58 1554.92 L-68.71 1554.92 L-66.84 1554.92 L-64.04 1554.92 L-61.21 1554.92 L-58.39 1554.92 L-56.52 1554.92 L-54.65 1555.85 L-52.24 1555.85 L-50.37 1555.85 L-48.50 1555.85 L-47.56 1555.85 L-46.63 1555.85 L-45.69 1555.85 L-44.76 1555.85 L-43.83 1555.85 L-42.89 1555.85 L-41.96 1555.85 L-41.02 1555.85 L-40.09 1555.85 L-39.15 1555.85 L-38.22 1555.85 L-36.35 1555.85 L-35.41 1555.85 L-34.48 1555.85 L-32.61 1555.85 L-31.67 1555.85 L-28.87 1555.85 L-27.00 1555.85 L-25.13 1555.85 L-22.33 1555.85 L-19.52 1555.85 L-17.37 1554.64 L-14.57 1554.64 L-12.70 1554.64 L-10.83 1554.64 L-8.94 1553.69 L-8.00 1553.69 L-7.08 1552.58 L-5.99 1552.58 L-5.12 1551.45 L-3.98 1550.52 L-3.05 1550.52 L-2.11 1549.58 L-1.18 1548.63 L-0.23 1547.69 L0.71 1547.69 L1.66 1546.76 L3.55 1545.81 L4.50 1544.86 L5.45 1543.90 L6.39 1542.97 L7.32 1541.08 L8.27 1539.92 L9.23 1538.75 L10.16 1536.63 L11.12 1535.46 L12.05 1533.31 L13.21 1532.15 L14.15 1530.98 L15.08 1530.05 L15.08 1527.72 L16.02 1526.56 L16.02 1525.39 L16.02 1524.46 L16.95 1522.59 L16.95 1521.66 L16.95 1519.79 L16.95 1518.85 L16.95 1517.92 L16.95 1516.05 L16.95 1514.18 L16.00 1513.25 L16.00 1511.35 L15.07 1509.48 L13.15 1507.47 L11.28 1505.60 L8.36 1503.71 L2.84 1499.98 L-2.19 1497.39 L-7.85 1494.69 L-13.01 1492.37 L-19.74 1491.08 L-24.35 1488.65 L-30.49 1487.16 L-35.35 1487.16 L-41.50 1485.77 L-47.64 1484.29 L-54.30 1484.29 L-61.79 1484.29 L-67.75 1484.29 L-75.53 1484.29 L-80.18 1484.29 L-85.63 1484.29 L-90.04 1484.29 L-93.00 1484.29 L-97.34 1484.29 L-100.31 1484.29 L-104.37 1485.36 L-107.27 1485.36 L-110.44 1486.44 L-114.30 1486.44 L-118.29 1486.44 L-121.48 1487.58 L-126.66 1487.58 L-130.81 1487.58 L-135.74 1488.88 L-141.44 1488.88 L-145.58 1488.88 L-149.74 1488.88 L-155.44 1488.88 L-158.48 1488.88 L-162.56 1488.88 L-167.74 1488.88 L-170.86 1488.88 L-176.40 1488.88 L-181.07 1489.91 L-184.18 1489.91 L-194.11 1489.91 L-195.07 1489.91 L-196.04 1489.91 L-199.08 1489.91 L-203.15 1489.91 L-207.29 1489.91 L-211.45 1489.91 L-216.99 1489.91 L-221.14 1489.91 L-225.15 1489.91 L-228.11 1489.91 L-232.26 1489.91 L-237.45 1489.91 L-240.41 1489.91 L-244.56 1488.61 L-250.52 1488.61 L-253.48 1488.61 L-257.63 1488.61 L-261.64 1488.61 L-265.78 1488.61 L-269.78 1488.61 L-273.93 1488.61 L-278.08 1488.61 L-282.23 1488.61 L-288.32 1487.12 L-294.03 1487.12 L-298.63 1487.12 L-303.21 1487.12 L-308.40 1487.12 L-312.76 1485.98 L-316.91 1485.98 L-321.06 1485.98 L-325.21 1485.98 L-330.40 1485.98 L-335.07 1484.67 L-340.00 1484.67 L-345.70 1484.67 L-351.40 1484.67 L-356.82 1483.38 L-364.08 1483.38 L-370.03 1483.38 L-374.95 1483.38 L-380.75 1483.38 L-385.17 1483.38 L-389.93 1483.38 L-395.73 1483.38 L-399.73 1483.38 L-404.38 1483.38 L-407.35 1483.38 L-412.90 1483.38 L-416.90 1483.38 L-419.94 1483.38 L-424.01 1483.38 L-428.01 1483.38 L-430.97 1483.38 L-435.11 1482.23 L-439.04 1482.23 L-442.08 1482.23 L-445.90 1482.23 L-447.83 1482.23 L-451.73 1482.23 L-454.54 1482.23 L-457.42 1482.23 L-460.25 1482.23 L-463.11 1482.23 L-465.98 1482.23 L-469.09 1483.79 L-473.35 1483.79 L-479.41 1483.79 L-483.57 1483.79 L-487.64 1483.79 L-492.74 1485.33 L-497.93 1485.33 L-502.33 1485.33 L-507.10 1485.33 L-513.16 1485.33 L-517.31 1485.33 L-521.90 1485.33 L-525.97 1485.33 L-531.16 1485.33 L-535.31 1485.33 L-540.76 1485.33 L-545.55 1485.33 L-549.70 1485.33 L-554.47 1485.33 L-559.92 1485.33 L-564.43 1485.33 L-567.40 1485.33 L-571.55 1485.33 L-575.55 1485.33 L-580.85 1485.33 L-584.07 1485.33 L-588.23 1485.33 L-592.30 1485.33 L-596.30 1485.33 L-600.38 1485.33 L-604.52 1485.33 L-608.68 1485.33 L-612.68 1485.33 L-615.64 1485.33 L-619.54 1485.33 L-621.44 1485.33 L-624.25 1485.33 L-628.27 1486.27 L-630.40 1486.27 L-631.33 1486.27 L-633.20 1487.20 L-634.14 1487.20 L-635.07 1487.20 L-636.01 1488.13 L-636.87 1488.13 L-636.87 1489.03 L-637.80 1489.03 L-638.74 1489.03 L-639.67 1489.97 L-640.85 1490.90 L-642.03 1491.84 L-642.96 1491.84 L-642.96 1492.77 L-642.96 1493.55 L-642.96 1494.32 L-642.96 1495.26 L-642.07 1496.36 L-642.07 1497.47 L-641.16 1497.47 L-640.22 1498.41 L-638.08 1500.29 L-636.87 1501.26 L-636.87 1501.26" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<path d="M-696.79 1608.29 C-604.06 1606.08,-513.78 1604.80,-378.48 1608.38 M-695.01 1606.55 C-627.57 1605.51,-560.27 1606.11,-380.17 1607.02 M-378.85 1608.59 C-378.63 1617.32,-380.72 1627.64,-380.61 1650.61 M-378.95 1606.68 C-380.49 1619.34,-380.10 1633.03,-379.86 1649.34 M-378.90 1650.31 C-447.24 1650.42,-515.92 1650.02,-696.68 1650.27 M-380.34 1649.47 C-458.19 1650.56,-535.23 1650.19,-695.87 1650.00 M-695.57 1649.75 C-694.09 1636.91,-696.71 1621.87,-695.52 1606.58 M-695.23 1648.60 C-694.75 1640.54,-695.88 1631.45,-694.67 1607.42" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<path d="M-34.94 335.22 L-34.94 336.60 L-34.94 337.54 L-34.94 339.41 L-34.94 341.27 L-34.94 344.08 L-34.94 345.98 L-34.94 348.78 L-34.94 352.65 L-35.89 355.58 L-35.89 359.52 L-37.18 362.81 L-37.18 365.69 L-38.22 369.14 L-38.22 371.01 L-39.15 372.88 L-39.15 374.75 L-39.15 376.62 L-40.32 377.55 L-40.32 379.66 L-40.32 380.60 L-40.32 381.53 L-40.32 382.47 L-40.32 383.40 L-40.32 384.30 L-40.32 383.77 L-40.32 382.95 L-40.32 382.95" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<path d="M-33.27 363.97 L-32.72 363.97 L-31.98 363.97 L-31.14 363.97 L-30.21 363.97 L-29.28 363.97 L-28.34 363.04 L-26.47 363.04 L-25.54 363.04 L-23.67 363.04 L-21.80 363.04 L-19.93 363.04 L-18.06 363.04 L-15.26 363.04 L-13.39 363.04 L-12.45 363.04 L-10.58 363.04 L-9.41 362.10 L-8.26 362.10 L-8.26 361.44 L-8.26 361.44" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<path d="M-12.93 354.22 L-12.12 354.22 L-11.28 355.06 L-9.41 355.99 L-8.48 355.99 L-7.31 356.93 L-6.16 357.86 L-5.22 357.86 L-4.29 358.79 L-4.29 359.73 L-3.35 359.73 L-3.35 360.66 L-3.35 361.53 L-4.49 362.25 L-5.65 362.25 L-5.65 363.20 L-6.60 364.14 L-7.53 364.14 L-9.65 365.29 L-10.59 366.43 L-11.74 366.43 L-12.67 366.43 L-13.63 367.36 L-14.58 367.36 L-15.52 367.36 L-15.52 368.30 L-16.45 368.30 L-17.38 368.30 L-18.33 369.23 L-19.29 369.23 L-19.29 369.23" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<text x="18.54" y="364.85" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="18.54" dy="0">?url= 10.x.x.x</tspan></text>
</g>
<g transform="translate(735.51,121.81)">
<path d="M98.76 376.56 L98.76 377.41 L98.76 378.20 L99.91 379.13 L99.91 380.30 L99.91 382.17 L101.08 383.35 L102.27 385.22 L102.27 387.48 L102.27 389.35 L103.22 391.25 L104.25 394.17 L104.25 396.06 L105.45 398.19 L105.45 400.09 L106.65 402.22 L106.65 403.15 L107.58 404.32 L107.58 405.46 L108.51 405.46 L108.51 406.39 L109.40 406.39 L109.40 407.16 L110.33 407.16 L111.21 408.01 L112.35 408.90 L113.50 409.99 L114.63 409.99 L115.57 411.13 L116.72 411.13 L118.59 411.13 L119.54 412.09 L120.47 412.09 L122.34 412.09 L124.21 413.31 L126.34 413.31 L128.23 413.31 L131.08 413.31 L133.15 414.33 L135.99 414.33 L137.87 414.33 L140.73 414.33 L142.60 414.33 L143.53 414.33 L145.65 415.27 L146.81 415.27 L147.74 415.27 L148.68 415.27 L149.61 415.27 L150.55 415.27 L151.48 415.27 L151.48 414.58 L151.48 414.00 L150.57 414.00 L150.57 413.07 L149.63 413.07 L148.70 412.13 L148.70 409.80 L147.76 409.80 L147.76 409.80" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<path d="M142.56 400.34 L143.57 401.18 L144.51 401.18 L145.44 402.33 L147.55 403.27 L148.69 404.22 L149.64 405.38 L150.78 407.50 L151.92 408.43 L151.92 409.59 L151.92 410.52 L151.92 412.39 L151.92 413.33 L151.92 415.20 L151.92 417.07 L151.92 418.00 L150.99 418.94 L149.84 419.87 L148.89 421.04 L148.89 421.99 L146.79 422.93 L145.64 424.07 L144.50 424.07 L143.56 424.07 L142.63 425.02 L141.68 425.02 L140.74 425.02 L139.81 425.02 L138.87 423.86 L138.87 423.86" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(735.51,121.81)">
<text x="163.44" y="432.57" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="163.44" dy="0">dùng fuff</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-dd2234858b9be0070d4c6763a7114fae6ab606dd" class="notion-callout-card">

```
3. SSRF Against Other Back-end Systems
│
├── Mục đích
│   └── Dùng SSRF để lấy dữ liệu từ các hệ thống backend
│       nằm sâu bên trong mạng nội bộ, không lộ ra Internet.
│
├── Internal IP Range
│   ├── 10.0.0.0/8       ← dải Class A, thường dùng cho mạng doanh nghiệp lớn
│   ├── 172.16.0.0/12    ← dải Class B, dùng cho mạng vừa
│   └── 192.168.0.0/16   ← dải Class C, dùng cho mạng nhỏ / gia đình
│
│   Ghi chú: Đây là 3 dải IP private theo chuẩn RFC 1918.
│   Server backend thường nằm trong các dải này.
│   Attacker từ ngoài không truy cập được, nhưng SSRF thì có.
│
├── Network Enumeration
│   ├── Scan IP          ← quét từng IP để tìm host đang sống
│   │                       (dùng SSRF để thử từng IP một)
│   ├── Scan Port        ← với mỗi IP sống, thử từng cổng
│   │                       (22, 80, 443, 3306, 6379, 8080...)
│   └── Identify service ← xem response để đoán dịch vụ gì
│                           (banner, header, nội dung HTML, lỗi...)
│
│   Ví dụ thực tế:
│   - SSRF gọi http://10.0.0.5:80 → trả về trang login → có web server
│   - SSRF gọi http://10.0.0.5:6379 → trả về lỗi Redis → có Redis
│   - SSRF gọi http://10.0.0.5:3306 → timeout → có thể MySQL
│
├── Tools
│   ├── Burp Intruder    ← gửi hàng loạt request với payload khác nhau,
│   │                       dùng để brute-force IP/port qua SSRF
│   ├── ffuf             ← fuzzing nhanh, thay thế Burp Intruder
│   │                       khi cần tốc độ cao
│   └── custom script    ← viết Python/Bash để tự động hóa
│                           toàn bộ quá trình scan qua SSRF
│
│   Lưu ý: Trong SSRF, các tool này thường không gửi request
│   trực tiếp từ máy attacker, mà chèn payload vào tham số
│   của ứng dụng để server gọi hộ.
│
└── Goal
    ├── Find hidden admin server   ← tìm server quản trị ẩn
    │                                   (thường chỉ nghe nội bộ,
    │                                    không mở port ra ngoài)
    ├── Access internal API        ← gọi API nội bộ không xác thực
    │                                   hoặc xác thực yếu
    └── Extract sensitive data     ← lấy dữ liệu nhạy cảm:
                                        - Credentials
                                        - Token
                                        - Config
                                        - Database dump
                                        - Cloud metadata
```

**Giải thích tổng quan:**

1. **Mục đích:** SSRF không chỉ để chọc vào chính server. Nó còn là cửa vào để quét toàn bộ mạng nội bộ phía sau. Server đóng vai "cầu nối" giữa attacker (ngoài Internet) và backend (trong mạng nội bộ).

2. **Internal IP Range:** Ba dải IP private chính. Khi attacker dùng SSRF, họ sẽ thử từng dải để tìm host sống.

3. **Network Enumeration:** Quy trình 3 bước giống pentest thông thường, nhưng thực hiện qua SSRF:
   - Tìm IP sống.
   - Tìm port mở.
   - Đoán dịch vụ đang chạy.

4. **Tools:** Burp Intruder và ffuf dùng để tự động hóa việc thử nhiều IP/port. Custom script dùng khi cần logic phức tạp hơn.

5. **Goal:** Kết quả cuối cùng là tìm được admin server ẩn, gọi API nội bộ, và trích xuất dữ liệu nhạy cảm. Đây là mục tiêu của mọi cuộc tấn công SSRF nâng cao.

**Ví dụ chuỗi tấn công hoàn chỉnh:**

```
1. Tìm tham số ?url= trên web app
2. Chèn http://10.0.0.1 → xem có phản hồi không
3. Dùng ffuf brute-force 10.0.0.0/8 + port 80, 8080
4. Tìm thấy 10.0.0.5:8080 trả về admin panel
5. Chèn http://10.0.0.5:8080/admin/users → lấy danh sách user
6. Chèn http://10.0.0.5:8080/admin/config → lấy credentials
7. Dùng credentials đó leo thang hoặc pivot sâu hơn
```

</div>

---

