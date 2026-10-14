---
title: "hidden ssrf attack surface"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-c545b848">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1244 1779" width="1244" height="1779" class="excalidraw-svg" data-width="1244" data-height="1779">
<g transform="translate(-25.22,147.02)">

<rect x="65.21914672851562" y="-29.96625518798828" width="990" height="1621" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="65.21914672851562" y="-29.96625518798828" width="990" height="1621" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Ghi chú Markdown</span>
      </div>
      <a href="#doc-6f388a58aee8570e4a72f348f7a6d9676396db0c" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <pre><code>6. Hidden SSRF Attack Surface (Bề mặt tấn công SSRF ẩn)
│
├── Bối cảnh chung
│   ├── SSRF không phải lúc nào cũng nằm ở một ô nhập URL rõ ràng như &quot;Nhập link ảnh&quot;
│   ├── Nó ẩn náu ở những chỗ mà lập trình viên nghĩ là &quot;không phải URL&quot;
│   └── Attacker phải tinh mắt tìm ra những điểm chạm này
│
├── Partial URL (URL không đầy đủ)
│   ├── hostname only (Chỉ nhập hostname)
│   │   ├── Cách hoạt động: App tự ghép scheme + hostname do user nhập
│   │   ├── Ví dụ code: fetch(&quot;http://&quot; + user_input + &quot;/api&quot;)
│   │   ├── Attacker nhập: &quot;127.0.0.1#&quot; -&gt; ghép thành http://127.0.0.1#/api
│   │   └── Hoặc nhập: &quot;169.254.169.254/latest/meta-data&quot; -&gt; lấy cloud credentials
│   │
│   └── path injection (Chèn vào đường dẫn)
│       ├── Cách hoạt động: App nhận tham số path, ghép vào base URL
│       ├── Ví dụ code: fetch(&quot;https://trusted.com/&quot; + user_path)
│       ├── Attacker nhập: &quot;../../internal/admin&quot; -&gt; truy cập chéo thư mục
│       └── Hoặc nhập: &quot;http://evil.com/ssrf&quot; -&gt; server gọi ra ngoài
│
├── Data Formats (Định dạng dữ liệu)
│   ├── JSON
│   │   ├── Cách hoạt động: URL nằm trong object JSON, app parse rồi gọi
│   │   ├── Ví dụ: {&quot;user&quot;: &quot;test&quot;, &quot;webhook_url&quot;: &quot;http://127.0.0.1/admin&quot;}
│   │   └── Attacker không thấy param URL, nhưng server vẫn fetch
│   │
│   ├── XML
│   │   ├── Cách hoạt động: URL nằm trong thẻ XML (XXE cũng dùng cái này)
│   │   ├── Ví dụ: &lt;webhook&gt;http://127.0.0.1/admin&lt;/webhook&gt;
│   │   └── Dễ bị nhầm với XXE, nhưng thực chất là SSRF qua XML parser
│   │
│   └── YAML
│       ├── Cách hoạt động: Config file YAML có trường URL, app load lên
│       ├── Ví dụ: webhook: &quot;http://169.254.169.254/latest/meta-data&quot;
│       └── Thường gặp trong CI/CD, Docker compose, Kubernetes manifest
│
├── HTTP Headers (Header HTTP)
│   ├── Referer header
│   │   ├── Cách hoạt động: App lấy URL từ header Referer để phân tích, preview, hoặc gọi
│   │   ├── Ví dụ: App có chức năng &quot;Xem trang trước đó&quot; -&gt; fetch URL trong Referer
│   │   ├── Attacker sửa header thành: Referer: http://127.0.0.1/admin
│   │   └── App tự động gọi internal URL mà không cần user nhập gì
│   │
│   └── Các header khác (X-Forwarded-For, Host, User-Agent)
│       ├── Một số app fetch URL từ header để check IP, geo-location
│       └── Attacker spoof header -&gt; SSRF
│
└── File Processing (Xử lý file)
    ├── PDF generation
    │   ├── Cách hoạt động: App tạo PDF từ HTML, HTML có thẻ &lt;img src=&quot;...&quot;&gt;
    │   ├── Attacker upload HTML chứa: &lt;img src=&quot;http://169.254.169.254/latest/meta-data/&quot;&gt;
    │   ├── Khi render PDF, server tự động fetch ảnh từ metadata endpoint
    │   └── Thường gặp trong báo cáo, hóa đơn, chứng từ tự động
    │
    ├── Image processing
    │   ├── Cách hoạt động: App resize/crop ảnh từ URL do user cung cấp
    │   ├── Attacker cung cấp URL: http://127.0.0.1:8080/admin
    │   ├── App tải &quot;ảnh&quot; về, thực chất là gọi internal API
    │   └── Thường gặp trong avatar, thumbnail, preview
    │
    └── Document preview
        ├── Cách hoạt động: App preview file Office/PDF, file chứa external reference
        ├── Attacker upload file .docx chứa link tới internal service
        ├── Khi user mở preview, server fetch link đó
        └── Thường gặp trong Google Docs, Office Online, hệ thống quản lý tài liệu
</code></pre>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-25.22,147.02)">
<path d="M354.46 -107.02 L354.46 -107.02" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M378.18 -52.10 L378.18 -52.10" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M88.32 30.72 C157.21 31.65,225.17 32.24,265.84 30.52 M88.76 30.98 C151.51 33.00,212.72 32.24,266.07 32.37 M263.72 31.81 C263.63 43.28,265.50 53.89,266.41 59.54 M266.04 31.64 C265.90 40.44,264.19 49.54,264.71 59.20 M264.98 59.28 C206.53 57.88,152.26 57.56,90.92 59.76 M264.39 57.56 C213.59 56.32,160.44 56.62,89.40 59.00 M90.00 58.28 C87.57 53.21,91.02 48.29,90.92 31.89 M88.78 57.77 C88.79 52.04,89.75 44.59,89.15 31.75" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M132.08 344.87 L132.52 344.87 L132.95 344.87 L133.60 344.87 L134.45 344.87 L135.38 344.87 L136.32 344.87 L137.25 344.87 L138.19 344.87 L140.06 344.87 L140.99 344.87 L141.93 344.87 L142.86 344.87 L144.73 344.87 L145.66 344.87 L146.60 344.87 L148.47 344.87 L149.40 344.87 L151.27 344.87 L152.21 344.87 L154.08 344.87 L155.01 344.87 L156.88 344.87 L157.82 344.87 L159.69 343.94 L160.62 343.94 L162.49 343.94 L163.43 343.94 L164.36 343.94 L166.48 343.00 L167.66 343.00 L168.59 343.00 L170.46 343.00 L171.40 343.00 L172.33 343.00 L174.20 343.00 L175.14 343.00 L176.07 343.00 L177.01 343.00 L178.88 343.00 L179.81 343.00 L180.74 343.00 L181.68 343.00 L183.55 343.00 L184.48 343.00 L186.35 343.00 L187.29 343.00 L189.42 341.84 L190.35 341.84 L192.22 341.84 L193.16 341.84 L195.03 341.84 L195.96 341.84 L196.90 341.84 L198.76 341.84 L200.63 341.84 L201.57 341.84 L203.44 341.84 L205.31 341.84 L206.24 341.84 L208.11 341.84 L209.98 341.84 L211.85 341.84 L212.79 341.84 L214.66 341.84 L216.53 341.84 L218.40 341.84 L220.26 341.84 L221.20 341.84 L223.07 341.84 L224.00 341.84 L225.87 341.84 L226.81 341.84 L228.68 341.84 L229.61 341.84 L230.55 341.84 L231.48 341.84 L232.42 341.84 L234.29 341.84 L235.22 341.84 L236.16 341.84 L238.03 341.84 L238.96 341.84 L239.90 341.84 L240.83 341.84 L242.70 341.84 L243.63 341.84 L244.57 342.77 L246.44 342.77 L247.37 342.77 L248.31 342.77 L249.24 342.77 L250.18 342.77 L251.11 342.77 L252.05 342.77 L252.98 342.77 L253.92 342.77 L255.79 342.77 L256.72 342.77 L257.66 342.77 L259.53 342.77 L261.39 342.77 L262.33 342.77 L264.20 342.77 L266.07 342.77 L267.94 342.77 L269.81 342.77 L270.74 342.77 L272.61 342.77 L274.48 342.77 L275.42 342.77 L277.29 342.77 L278.22 342.77 L279.16 342.77 L281.03 342.77 L281.96 342.77 L283.83 342.77 L284.76 342.77 L286.63 342.77 L287.57 342.77 L288.50 342.77 L289.44 342.77 L290.37 342.77 L291.31 342.77 L292.24 342.77 L292.24 341.84 L293.18 341.84 L294.10 341.84 L294.92 341.84 L295.59 341.84 L296.05 341.84 L296.05 341.84" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M109.20 483.11 L109.83 483.11 L111.60 483.11 L112.53 483.11 L114.40 483.11 L116.27 482.18 L118.14 482.18 L119.07 482.18 L120.94 482.18 L122.81 482.18 L124.68 482.18 L126.55 482.18 L128.42 482.18 L131.23 482.18 L133.10 482.18 L135.90 482.18 L138.35 483.13 L140.22 483.13 L142.09 483.13 L144.50 484.07 L146.37 484.07 L148.24 484.07 L151.15 485.03 L153.04 485.03 L154.91 485.03 L157.71 485.03 L160.52 485.03 L162.39 485.03 L165.23 485.03 L168.08 485.03 L170.92 485.03 L173.75 485.03 L176.59 485.03 L179.42 485.03 L182.28 485.03 L185.08 485.03 L186.95 485.03 L189.76 485.96 L191.63 485.96 L194.43 485.96 L196.30 485.96 L199.10 485.96 L200.97 485.96 L203.78 485.96 L206.58 485.96 L208.45 485.96 L210.32 485.96 L213.13 485.96 L215.00 485.96 L216.87 485.96 L218.73 485.96 L219.93 485.03 L222.04 485.03 L222.97 485.03 L222.97 484.09 L223.91 484.09 L224.84 484.09 L225.78 484.09 L226.71 484.09 L227.33 484.09 L227.33 484.09" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M614.48 111.36 L615.32 111.36 L615.78 111.36 L617.59 112.24 L619.46 112.24 L623.68 113.46 L627.76 113.46 L632.93 114.75 L639.00 114.75 L644.96 114.75 L651.71 116.06 L656.39 116.06 L662.35 116.06 L668.17 116.06 L672.57 116.06 L676.73 116.06 L680.72 116.06 L683.62 116.06 L686.49 114.84 L689.78 114.84 L692.58 114.84 L695.39 114.84 L697.26 114.84 L700.06 114.84 L702.87 114.84 L704.74 114.84 L706.97 113.62 L709.79 113.62 L712.64 113.62 L715.45 113.62 L717.32 112.69 L719.19 112.69 L721.33 111.75 L723.48 111.75 L725.85 110.82 L726.78 109.64 L728.89 109.64 L730.76 108.71 L731.70 107.75 L734.55 106.79 L736.69 105.86 L737.85 105.86 L739.72 104.92 L741.69 103.97 L743.57 103.04 L744.51 103.04 L745.44 102.08 L747.33 102.08 L748.48 100.93 L748.48 100.00 L749.63 100.00 L750.75 99.08 L750.75 98.22 L750.75 97.48 L749.80 96.55 L748.86 94.64 L746.93 93.68 L744.93 91.71 L743.02 90.74 L739.51 88.74 L736.20 87.50 L733.09 86.46 L728.02 84.04 L721.99 82.89 L715.00 81.35 L705.30 79.86 L696.63 78.12 L689.93 78.12 L680.34 78.12 L672.33 78.12 L664.03 78.12 L656.00 78.12 L649.39 79.59 L641.48 81.00 L635.16 81.00 L628.27 82.76 L621.83 83.91 L615.10 85.20 L610.74 86.34 L606.48 87.49 L600.68 88.79 L597.31 89.82 L593.83 90.87 L591.35 90.87 L589.48 91.80 L588.55 92.73 L588.55 93.58 L589.35 93.58 L591.24 94.51 L593.13 94.51 L595.97 95.81 L601.41 95.81 L606.60 97.11 L610.97 98.38 L615.33 99.53 L619.58 100.67 L623.84 100.67 L629.24 101.81 L632.41 102.96 L635.28 104.25 L637.44 104.25 L639.31 104.25 L640.24 104.25 L641.08 104.25 L641.08 104.25" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M931.76 601.19 L929.83 602.15 L928.88 604.06 L927.94 605.25 L925.82 608.59 L924.65 610.82 L923.70 613.07 L922.73 616.26 L922.73 618.16 L921.51 621.33 L921.51 624.16 L921.51 626.03 L921.51 628.83 L921.51 630.70 L921.51 633.50 L922.46 635.48 L922.46 637.38 L923.66 639.54 L923.66 641.41 L924.88 644.47 L925.83 646.44 L925.83 647.39 L926.78 649.26 L926.78 651.16 L926.78 652.09 L926.78 653.03 L926.78 653.96 L926.78 654.90 L926.78 655.83 L927.43 655.83 L928.36 656.52 L929.30 657.67 L930.46 657.67 L931.63 658.60 L933.73 659.54 L936.56 660.48 L938.79 661.68 L943.19 662.97 L948.11 664.26 L953.54 664.26 L960.29 665.83 L968.06 665.83 L976.85 665.83 L986.67 665.83 L996.46 665.83 L1006.83 665.83 L1014.95 664.42 L1021.27 664.42 L1025.93 663.13 L1029.23 663.13 L1032.06 662.18 L1034.22 660.99 L1035.16 660.03 L1036.11 659.10 L1037.04 658.16 L1037.98 657.02 L1038.91 654.68 L1038.91 653.50 L1039.85 651.63 L1039.85 649.76 L1041.04 647.51 L1042.26 644.71 L1042.26 641.42 L1043.55 636.56 L1045.88 632.45 L1047.18 627.26 L1049.76 621.82 L1051.05 616.70 L1053.14 613.46 L1054.16 609.43 L1055.38 606.14 L1056.32 603.72 L1057.28 601.74 L1057.28 599.86 L1057.28 598.93 L1057.28 597.99 L1057.28 597.06 L1057.28 596.22 L1056.65 596.22 L1055.89 595.31 L1054.95 595.31 L1053.08 594.38 L1050.66 593.44 L1048.25 592.51 L1045.05 591.29 L1040.92 590.22 L1036.51 588.92 L1031.59 587.63 L1026.91 586.34 L1021.59 586.34 L1014.10 584.79 L1007.60 584.79 L1000.88 584.79 L991.17 583.30 L983.14 583.30 L975.37 583.30 L968.90 583.30 L962.43 583.30 L954.64 583.30 L948.68 583.30 L943.80 584.70 L938.61 584.70 L934.98 585.74 L930.76 586.81 L927.87 586.81 L925.38 587.77 L923.51 588.96 L921.40 588.96 L920.47 590.11 L919.33 590.11 L919.33 590.90 L919.70 590.90 L920.15 590.90 L920.15 591.37 L920.15 592.22 L920.15 593.15 L920.15 595.02 L920.15 595.96 L920.15 596.89 L920.15 597.83 L920.15 598.76 L920.15 599.70 L920.15 600.63 L920.15 602.50 L919.20 603.43 L919.20 605.33 L919.20 606.26 L919.20 607.20 L919.20 609.07 L919.20 610.00 L918.26 610.93 L918.26 611.87 L918.26 612.80 L918.26 613.74 L918.26 614.67 L918.26 614.67" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1024.02 567.08 L1023.16 567.08 L1023.16 566.45 L1022.23 564.35 L1022.23 563.18 L1022.23 561.31 L1022.23 558.50 L1022.23 555.70 L1022.23 551.84 L1023.37 547.66 L1024.92 542.64 L1027.55 534.55 L1031.81 528.63 L1035.90 521.74 L1044.00 513.86 L1049.26 509.74 L1055.46 503.80 L1062.63 497.88 L1068.29 493.50 L1075.50 490.81 L1080.35 488.25 L1085.48 485.81 L1090.10 483.37 L1093.92 481.11 L1097.46 481.11 L1100.29 480.16 L1102.45 479.22 L1103.63 479.22 L1105.50 479.22 L1106.44 479.22 L1108.31 479.22 L1110.28 478.27 L1112.16 478.27 L1114.03 478.27 L1115.90 478.27 L1116.84 478.27 L1118.70 478.27 L1120.57 478.27 L1121.51 478.27 L1122.41 478.27 L1122.41 478.27" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1105.94 464.63 L1107.55 464.63 L1108.49 464.63 L1110.39 465.56 L1113.21 465.56 L1115.62 466.50 L1117.49 467.43 L1120.58 468.65 L1122.58 469.69 L1126.06 471.87 L1127.00 472.81 L1128.93 473.77 L1130.12 475.89 L1131.29 475.89 L1132.22 477.04 L1132.22 477.98 L1132.22 478.86 L1131.53 479.96 L1130.39 479.96 L1130.39 480.89 L1129.46 480.89 L1128.52 480.89 L1127.59 481.82 L1126.65 481.82 L1125.72 482.76 L1124.78 482.76 L1123.85 482.76 L1122.92 483.69 L1121.99 483.69 L1121.99 483.69" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1093.33 582.35 L1092.62 582.35 L1091.83 582.35 L1090.90 582.35 L1089.96 582.35 L1089.96 583.29 L1089.03 583.29 L1089.03 582.44 L1090.83 581.50 L1093.24 579.59 L1097.04 578.62 L1101.58 577.48 L1107.83 574.78 L1114.65 573.49 L1120.85 573.49 L1127.00 572.10 L1131.26 572.10 L1134.46 572.10 L1137.97 572.10 L1141.87 572.10 L1143.74 573.06 L1146.67 573.06 L1147.61 573.06 L1149.48 574.00 L1150.41 574.00 L1151.32 574.92 L1150.47 574.09 L1149.54 574.09 L1149.54 574.09" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1147.21 567.30 L1147.98 567.30 L1149.85 567.30 L1151.72 567.30 L1154.52 567.30 L1156.39 567.30 L1159.20 568.23 L1160.13 568.23 L1161.07 569.17 L1162.23 569.17 L1163.37 569.17 L1164.29 570.09 L1164.29 570.99 L1164.29 571.90 L1163.35 572.84 L1162.42 573.78 L1161.46 573.78 L1160.31 574.93 L1160.31 575.86 L1159.38 575.86 L1158.44 576.80 L1157.51 576.80 L1157.51 577.75 L1157.51 577.75" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1096.72 629.92 L1097.57 629.92 L1098.18 629.92 L1099.10 629.92 L1100.03 630.86 L1101.90 630.86 L1103.80 631.81 L1105.67 631.81 L1110.34 633.17 L1113.82 634.47 L1119.72 635.96 L1125.87 635.96 L1130.76 637.36 L1136.45 637.36 L1142.17 637.36 L1146.32 637.36 L1151.39 637.36 L1155.39 637.36 L1160.24 638.66 L1163.21 638.66 L1165.08 638.66 L1166.95 638.66 L1168.82 638.66 L1168.82 638.66" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1173.28 629.79 L1174.22 629.79 L1175.15 629.79 L1176.09 629.79 L1177.02 629.79 L1177.96 629.79 L1178.89 630.72 L1179.82 631.65 L1180.96 632.59 L1180.96 633.73 L1180.96 635.60 L1180.03 636.54 L1179.09 637.47 L1177.19 637.47 L1176.25 638.41 L1175.32 638.41 L1175.32 638.41" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1171.44 483.82 L1172.28 483.82 L1173.09 483.82 L1174.96 483.82 L1176.83 483.82 L1177.76 483.82 L1177.76 483.82" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1215.87 486.07 L1215.87 486.07" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1224.23 484.91 L1224.23 484.91" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1195.11 553.57 L1197.30 553.99 L1198.23 554.94 L1199.19 554.94 L1199.19 554.94" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1229.13 560.76 L1229.13 560.76" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1196.05 630.47 L1196.91 630.47 L1197.56 630.47 L1197.56 631.32 L1198.49 631.32 L1199.43 632.26 L1201.30 633.19 L1202.23 633.19 L1203.17 634.37 L1203.17 634.37" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M1223.46 642.57 L1224.41 642.57 L1225.34 642.57 L1226.18 642.57 L1226.18 642.57" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M793.35 632.64 L793.73 632.64 L795.50 632.64 L797.37 631.71 L800.20 631.71 L803.09 631.71 L807.02 631.71 L812.46 631.71 L817.37 631.71 L824.62 631.71 L830.79 631.71 L837.01 631.71 L842.97 631.71 L849.18 631.71 L854.86 631.71 L858.22 631.71 L862.22 631.71 L866.15 631.71 L869.32 632.85 L872.13 632.85 L874.99 632.85 L876.86 632.85 L880.28 633.80 L882.15 633.80 L884.02 633.80 L884.96 633.80 L885.89 633.80 L886.83 633.80 L887.76 633.80 L888.70 633.80 L889.63 633.80 L890.57 633.80 L892.44 634.74 L893.37 634.74 L895.24 634.74 L897.11 634.74 L898.98 634.74 L899.92 634.74 L900.85 634.74 L901.78 634.74 L902.49 634.74 L902.49 634.74" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M892.32 626.41 L893.04 626.41 L893.76 626.41 L894.69 627.36 L896.57 628.29 L897.51 629.23 L899.89 630.42 L902.15 631.38 L904.04 633.30 L906.23 634.23 L908.36 636.39 L909.32 637.34 L910.27 638.29 L911.22 639.24 L912.17 640.18 L912.17 641.08 L912.17 641.93 L910.30 642.88 L907.34 644.17 L902.83 645.31 L899.77 646.34 L896.82 647.62 L892.55 648.59 L890.29 649.56 L887.18 650.50 L884.35 651.45 L884.35 651.45" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M989.53 685.05 L989.53 685.62 L989.53 686.45 L988.35 688.32 L988.35 689.50 L988.35 691.37 L987.40 694.80 L987.40 696.67 L986.47 700.14 L985.25 703.85 L982.99 709.02 L981.70 712.50 L979.53 715.82 L977.24 718.90 L976.22 722.24 L972.74 725.97 L970.59 728.12 L968.36 729.08 L964.63 731.26 L962.12 732.22 L958.85 733.26 L954.84 735.28 L951.77 736.58 L946.73 738.12 L940.32 739.62 L934.06 741.02 L927.98 741.02 L921.33 742.43 L914.54 743.93 L906.77 743.93 L898.60 745.42 L891.87 745.42 L884.10 745.42 L876.30 745.42 L869.84 745.42 L863.37 745.42 L855.41 744.02 L849.04 742.55 L842.78 741.41 L834.44 740.13 L829.31 738.99 L822.34 736.39 L817.16 735.09 L813.53 732.76 L809.90 731.73 L806.16 729.80 L802.38 728.60 L800.20 727.41 L798.09 725.00 L796.90 725.00 L795.96 724.07 L795.03 723.12 L794.07 723.12 L794.07 722.18 L793.14 721.25 L792.00 720.32 L792.00 719.16 L791.06 718.23 L791.06 717.30 L790.13 716.36 L790.13 715.43 L789.20 714.49 L789.20 713.56 L788.26 712.63 L788.26 710.76 L788.26 709.82 L787.33 708.89 L787.33 707.02 L787.33 706.08 L786.39 705.15 L786.39 705.15" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M777.56 716.07 L777.56 715.22 L777.56 714.29 L776.36 712.42 L776.36 710.29 L776.36 708.42 L776.36 706.55 L776.36 703.74 L776.36 701.88 L776.36 700.94 L776.36 700.01 L777.20 700.01 L778.94 701.16 L780.13 701.16 L782.10 702.11 L784.29 703.05 L787.51 704.01 L792.07 706.25 L796.05 707.47 L798.90 708.68 L798.90 708.68" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M151.18 176.86 L152.02 176.86 L153.79 176.86 L157.62 176.86 L162.35 177.88 L168.30 177.88 L174.77 177.88 L183.05 177.88 L192.66 177.88 L202.76 177.88 L214.65 177.88 L223.48 177.88 L233.57 177.88 L243.65 177.88 L251.92 177.88 L259.69 177.88 L265.67 177.88 L269.82 177.88 L272.70 177.88 L275.57 177.88 L277.44 177.88 L279.31 177.88 L281.18 177.88 L283.04 177.88 L285.42 176.95 L287.29 176.95 L288.22 176.95 L289.16 176.95 L290.09 176.00 L291.05 176.00 L291.96 176.00 L292.59 176.00 L292.59 176.00" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M110.50 869.44 L111.51 869.44 L112.35 869.44 L114.22 870.37 L117.98 870.37 L121.06 871.40 L126.72 872.79 L131.50 872.79 L138.23 874.34 L145.95 875.84 L152.10 875.84 L158.78 877.33 L166.21 877.33 L170.61 877.33 L175.20 877.33 L179.97 878.62 L182.94 878.62 L185.74 878.62 L187.61 878.62 L189.48 878.62 L191.35 878.62 L193.75 877.69 L194.69 877.69 L196.56 877.69 L198.43 877.69 L200.30 877.69 L201.23 876.75 L203.61 876.75 L205.48 876.75 L207.35 876.75 L209.22 876.75 L210.16 876.75 L212.03 876.75 L213.90 876.75 L215.77 876.75 L218.57 876.75 L220.44 876.75 L222.85 875.82 L225.65 875.82 L227.52 875.82 L229.39 875.82 L232.20 875.82 L234.07 875.82 L235.94 875.82 L236.87 875.82 L237.81 875.82 L238.74 875.82 L238.74 875.82" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M777.40 370.75 L778.24 370.75 L779.93 370.75 L780.87 370.75 L783.67 370.75 L787.50 370.75 L790.46 370.75 L796.17 370.75 L802.91 372.31 L810.40 372.31 L817.38 373.86 L824.90 373.86 L830.33 375.41 L834.48 375.41 L837.38 376.64 L838.57 376.64 L839.51 376.64 L839.51 376.64" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<path d="M818.72 367.44 L818.72 366.39 L819.15 366.39 L819.86 366.39 L820.80 366.39 L821.73 366.39 L823.60 366.39 L825.47 366.39 L827.34 366.39 L829.21 367.35 L831.21 367.35 L832.14 368.53 L833.31 368.53 L834.24 368.53 L834.24 369.47 L834.24 370.32 L834.24 371.10 L832.14 372.26 L831.17 373.19 L828.35 375.08 L825.18 376.31 L822.22 377.37 L820.21 377.37 L816.35 378.32 L814.48 378.32 L812.61 378.32 L811.67 379.27 L811.67 379.27" stroke="#c2255c" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-25.22,147.02)">
<text x="860.63" y="378.81" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="860.63" dy="0">cái này đơn giản là</tspan><tspan x="860.63" dy="25">path traversal thôi</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-6f388a58aee8570e4a72f348f7a6d9676396db0c" class="notion-callout-card">

```
6. Hidden SSRF Attack Surface (Bề mặt tấn công SSRF ẩn)
│
├── Bối cảnh chung
│   ├── SSRF không phải lúc nào cũng nằm ở một ô nhập URL rõ ràng như "Nhập link ảnh"
│   ├── Nó ẩn náu ở những chỗ mà lập trình viên nghĩ là "không phải URL"
│   └── Attacker phải tinh mắt tìm ra những điểm chạm này
│
├── Partial URL (URL không đầy đủ)
│   ├── hostname only (Chỉ nhập hostname)
│   │   ├── Cách hoạt động: App tự ghép scheme + hostname do user nhập
│   │   ├── Ví dụ code: fetch("http://" + user_input + "/api")
│   │   ├── Attacker nhập: "127.0.0.1#" -> ghép thành http://127.0.0.1#/api
│   │   └── Hoặc nhập: "169.254.169.254/latest/meta-data" -> lấy cloud credentials
│   │
│   └── path injection (Chèn vào đường dẫn)
│       ├── Cách hoạt động: App nhận tham số path, ghép vào base URL
│       ├── Ví dụ code: fetch("https://trusted.com/" + user_path)
│       ├── Attacker nhập: "../../internal/admin" -> truy cập chéo thư mục
│       └── Hoặc nhập: "http://evil.com/ssrf" -> server gọi ra ngoài
│
├── Data Formats (Định dạng dữ liệu)
│   ├── JSON
│   │   ├── Cách hoạt động: URL nằm trong object JSON, app parse rồi gọi
│   │   ├── Ví dụ: {"user": "test", "webhook_url": "http://127.0.0.1/admin"}
│   │   └── Attacker không thấy param URL, nhưng server vẫn fetch
│   │
│   ├── XML
│   │   ├── Cách hoạt động: URL nằm trong thẻ XML (XXE cũng dùng cái này)
│   │   ├── Ví dụ: <webhook>http://127.0.0.1/admin</webhook>
│   │   └── Dễ bị nhầm với XXE, nhưng thực chất là SSRF qua XML parser
│   │
│   └── YAML
│       ├── Cách hoạt động: Config file YAML có trường URL, app load lên
│       ├── Ví dụ: webhook: "http://169.254.169.254/latest/meta-data"
│       └── Thường gặp trong CI/CD, Docker compose, Kubernetes manifest
│
├── HTTP Headers (Header HTTP)
│   ├── Referer header
│   │   ├── Cách hoạt động: App lấy URL từ header Referer để phân tích, preview, hoặc gọi
│   │   ├── Ví dụ: App có chức năng "Xem trang trước đó" -> fetch URL trong Referer
│   │   ├── Attacker sửa header thành: Referer: http://127.0.0.1/admin
│   │   └── App tự động gọi internal URL mà không cần user nhập gì
│   │
│   └── Các header khác (X-Forwarded-For, Host, User-Agent)
│       ├── Một số app fetch URL từ header để check IP, geo-location
│       └── Attacker spoof header -> SSRF
│
└── File Processing (Xử lý file)
    ├── PDF generation
    │   ├── Cách hoạt động: App tạo PDF từ HTML, HTML có thẻ <img src="...">
    │   ├── Attacker upload HTML chứa: <img src="http://169.254.169.254/latest/meta-data/">
    │   ├── Khi render PDF, server tự động fetch ảnh từ metadata endpoint
    │   └── Thường gặp trong báo cáo, hóa đơn, chứng từ tự động
    │
    ├── Image processing
    │   ├── Cách hoạt động: App resize/crop ảnh từ URL do user cung cấp
    │   ├── Attacker cung cấp URL: http://127.0.0.1:8080/admin
    │   ├── App tải "ảnh" về, thực chất là gọi internal API
    │   └── Thường gặp trong avatar, thumbnail, preview
    │
    └── Document preview
        ├── Cách hoạt động: App preview file Office/PDF, file chứa external reference
        ├── Attacker upload file .docx chứa link tới internal service
        ├── Khi user mở preview, server fetch link đó
        └── Thường gặp trong Google Docs, Office Online, hệ thống quản lý tài liệu
```

</div>

---

