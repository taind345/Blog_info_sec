---
title: "ssrf-whitelist bypass"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-b98ad294">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1456 1413" width="1456" height="1413" class="excalidraw-svg" data-width="1456" data-height="1413">
<g transform="translate(-89.61,-220.63)">

<rect x="129.60580444335938" y="260.62984466552734" width="850" height="1333" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="129.60580444335938" y="260.62984466552734" width="850" height="1333" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Ghi chú Markdown</span>
      </div>
      <a href="#doc-c12979e9e9bbf6494d0f6865cd0b91b776ca6490" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <pre><code>Whitelist Filter
│
├── Bối cảnh
│   ├── Ứng dụng chỉ cho phép một danh sách domain cụ thể (ví dụ: trusted.com)
│   ├── Mọi domain khác đều bị chặn
│   └── Tưởng là an toàn, nhưng vẫn bị lách qua bằng các kỹ thuật parse URL
│
├── URL Parser Confusion
│   ├── Nguyên nhân: Thư viện filter và thư viện gửi request parse URL khác nhau
│   ├── Ví dụ: Filter dùng regex, còn HTTP client dùng thư viện chuẩn
│   ├── Hệ quả: Filter thấy domain an toàn, nhưng request thực tế đi chỗ khác
│   └── Thực tế: Python urllib, PHP parse_url, Node.js URL đều có cách xử lý khác nhau
│
├── @ bypass
│   ├── Cơ chế: Ký tự @ phân tách userinfo và host trong URL
│   ├── Payload: http://trusted.com@evil.com
│   ├── Filter thấy: &quot;trusted.com&quot; nằm đầu chuỗi -&gt; Cho qua
│   ├── Thực tế: Request gửi tới &quot;evil.com&quot; (phần sau dấu @)
│   └── Biến thể: http://trusted.com%40evil.com (encoding dấu @)
│
├── # Fragment bypass
│   ├── Cơ chế: Ký tự # đánh dấu fragment, không gửi lên server
│   ├── Payload: http://evil.com#trusted.com
│   ├── Filter thấy: &quot;trusted.com&quot; ở cuối -&gt; Cho qua
│   ├── Thực tế: Request chỉ gửi tới &quot;evil.com&quot;, phần # bị bỏ qua
│   └── Biến thể: http://evil.com?trusted.com (query string)
│
├── Subdomain bypass
│   ├── Cơ chế: Nhét domain cho phép vào subdomain hoặc path
│   ├── Payload 1: http://trusted.com.evil.com
│   ├── Payload 2: http://evil.com/trusted.com
│   ├── Payload 3: http://evil.com?trusted.com
│   ├── Filter thấy: Chuỗi &quot;trusted.com&quot; xuất hiện -&gt; Cho qua
│   └── Thực tế: Domain chính vẫn là evil.com
│
├── Encoding mismatch
│   ├── Cơ chế: Filter decode một kiểu, HTTP client decode kiểu khác
│   ├── Payload 1: http://%74%72%75%73%74%65%64%2e%63%6f%6d@evil.com
│   ├── Payload 2: http://evil.com%23trusted.com
│   ├── Payload 3: Double encoding http://evil.com%2523trusted.com
│   ├── Filter thấy: Sau khi decode ra &quot;trusted.com&quot; -&gt; Cho qua
│   └── Thực tế: Client decode lần 2 ra &quot;evil.com&quot; hoặc ngược lại
│
└── Open Redirect Chain
    ├── Cơ chế: Dùng domain được whitelist có lỗi open redirect
    ├── Bước 1: Allowed domain
    │   └── Gửi URL http://trusted.com/redirect?url=http://169.254.169.254/
    ├── Bước 2: Redirect
    │   └── Filter thấy &quot;trusted.com&quot; -&gt; Cho qua
    │   └── trusted.com trả về HTTP 302 chuyển hướng tới internal IP
    ├── Bước 3: Internal target
    │   └── Server follow redirect và gửi request tới 169.254.169.254
    └── Hệ quả: Filter bị qua mặt hoàn toàn vì request đầu tiên là hợp lệ
</code></pre>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-89.61,-220.63)">
<path d="M911.53 384.46 L912.23 384.46 L914.01 384.46 L916.82 385.40 L920.66 385.40 L924.81 385.40 L929.72 386.70 L933.86 386.70 L936.83 386.70 L941.08 388.00 L942.98 388.00 L944.85 388.00 L945.79 388.00 L946.66 388.00 L946.66 388.00" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M945.31 378.07 L947.23 378.07 L948.42 379.01 L949.57 380.17 L950.76 381.36 L951.69 382.29 L952.62 384.16 L953.58 385.10 L953.58 387.09 L953.58 388.96 L953.58 389.89 L953.58 391.76 L952.40 392.70 L950.28 395.06 L949.32 396.02 L947.17 398.12 L943.46 399.08 L941.06 400.24 L939.87 401.18 L938.71 401.18 L937.78 401.18 L937.78 402.11 L937.78 402.11" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M967.56 356.31 L967.56 357.06 L967.56 358.84 L967.56 360.71 L967.56 363.51 L967.56 366.38 L967.56 370.46 L969.12 375.47 L969.12 379.63 L969.12 385.68 L969.12 389.82 L969.12 395.52 L969.12 401.22 L969.12 405.37 L969.12 409.52 L969.12 413.67 L969.12 417.67 L969.12 420.60 L969.12 423.47 L969.12 426.32 L967.93 429.07 L967.93 431.87 L967.93 432.80 L967.93 434.67 L967.93 435.61 L967.93 436.54 L967.93 437.48 L967.93 438.26 L967.93 437.73 L968.78 435.01 L969.72 434.07 L969.72 434.07" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M983.14 388.95 L984.00 390.40 L984.94 391.33 L986.10 393.20 L986.10 395.36 L987.04 396.55 L987.97 398.66 L987.97 400.53 L988.91 402.91 L990.07 403.84 L990.07 405.01 L991.22 405.94 L991.22 407.05 L991.22 406.44 L992.07 404.08 L992.07 402.19 L993.30 397.94 L995.40 394.83 L996.44 389.55 L998.70 387.02 L1000.77 383.13 L1001.73 380.87 L1004.15 378.47 L1006.55 376.08 L1008.77 375.12 L1009.73 375.12 L1012.66 374.17 L1014.53 374.17 L1015.46 374.17 L1015.46 374.17" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M1038.43 353.11 L1038.43 353.75 L1038.43 355.53 L1038.43 359.33 L1039.50 362.43 L1039.50 367.59 L1039.50 372.45 L1039.50 378.21 L1039.50 384.18 L1039.50 390.40 L1039.50 396.60 L1040.99 402.69 L1040.99 407.73 L1040.99 411.87 L1040.99 415.95 L1040.99 419.88 L1040.99 422.77 L1040.99 425.57 L1040.99 427.44 L1040.99 429.31 L1040.99 432.12 L1040.99 433.05 L1040.99 434.92 L1040.99 435.86 L1040.99 437.73 L1040.99 438.66 L1040.99 439.59 L1040.99 440.53 L1040.99 441.46 L1040.99 442.39 L1041.77 442.39 L1041.77 441.01 L1041.77 441.01" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M1062.14 391.72 L1062.68 391.72 L1065.38 391.72 L1067.25 391.72 L1070.06 391.72 L1072.96 391.72 L1076.88 391.72 L1080.96 391.72 L1083.85 391.72 L1086.71 391.72 L1089.57 391.72 L1091.44 391.72 L1093.31 391.72 L1094.25 391.72 L1096.12 391.72 L1097.05 391.72 L1097.99 391.72 L1098.92 391.72 L1099.86 391.72 L1100.79 391.72 L1101.73 391.72 L1102.66 391.72 L1103.59 391.72 L1104.39 391.72 L1104.39 391.72" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M1102.41 381.83 L1102.41 382.59 L1103.25 383.43 L1104.19 384.36 L1105.12 385.30 L1106.07 386.23 L1107.01 387.18 L1107.96 389.09 L1107.96 390.04 L1107.96 390.97 L1107.96 392.84 L1107.96 393.77 L1107.96 395.64 L1107.96 396.58 L1106.79 397.51 L1104.67 398.70 L1102.75 399.64 L1101.79 400.59 L1099.89 401.54 L1098.95 401.54 L1098.95 401.54" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M1108.13 357.58 L1108.13 358.23 L1109.06 360.27 L1109.06 363.37 L1109.06 366.20 L1110.36 370.90 L1110.36 374.98 L1110.36 379.23 L1110.36 383.64 L1110.36 388.82 L1111.65 393.48 L1111.65 396.86 L1111.65 400.86 L1111.65 404.71 L1111.65 407.65 L1111.65 409.52 L1111.65 412.32 L1112.60 414.29 L1112.60 415.24 L1112.60 417.11 L1112.60 418.05 L1112.60 418.98 L1113.53 419.93 L1113.53 420.88 L1113.53 421.82 L1114.42 421.82 L1115.04 421.82 L1115.88 423.52 L1118.53 423.52 L1121.36 423.52 L1125.37 423.52 L1131.57 423.52 L1139.63 423.52 L1149.45 423.52 L1159.78 423.52 L1168.05 423.52 L1177.85 423.52 L1184.45 423.52 L1188.88 423.52 L1190.78 423.52 L1191.71 423.52 L1192.65 423.52 L1193.49 422.67 L1193.49 420.80 L1194.43 419.60 L1195.37 416.53 L1196.68 412.02 L1198.16 407.16 L1201.34 397.20 L1203.08 388.34 L1204.57 379.17 L1206.12 371.40 L1206.12 368.11 L1206.12 364.11 L1206.12 360.19 L1207.15 356.63 L1207.15 354.76 L1207.15 351.96 L1207.15 351.02 L1207.15 350.09 L1207.15 349.15 L1207.15 348.22 L1206.40 348.22 L1204.62 349.51 L1201.45 349.51 L1199.58 349.51 L1196.78 349.51 L1193.56 350.81 L1190.66 350.81 L1186.74 350.81 L1182.82 350.81 L1179.86 350.81 L1175.85 350.81 L1171.84 350.81 L1168.80 350.81 L1164.82 350.81 L1161.96 350.81 L1159.06 350.81 L1156.23 350.81 L1153.34 351.77 L1149.89 351.77 L1147.09 351.77 L1145.22 351.77 L1143.35 351.77 L1140.44 352.72 L1138.56 352.72 L1137.62 352.72 L1135.75 352.72 L1134.82 352.72 L1132.95 352.72 L1131.08 352.72 L1128.95 353.91 L1127.08 353.91 L1125.21 353.91 L1124.28 353.91 L1123.34 353.91 L1122.41 353.91 L1121.67 353.91 L1121.08 353.91 L1120.20 353.91 L1119.26 353.91 L1118.33 353.91 L1117.39 353.91 L1116.69 353.91 L1116.69 353.91" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M483.13 392.48 C613.59 394.06,746.19 395.48,872.88 391.60 M482.45 392.69 C598.59 393.12,714.19 393.42,873.88 393.13 M873.99 393.29 C875.32 399.75,873.40 411.26,875.43 434.87 M874.16 393.56 C874.59 406.63,873.28 419.25,872.95 433.52 M873.01 435.21 C723.93 432.33,571.31 431.64,483.85 433.28 M874.09 433.75 C734.46 432.04,594.52 433.09,483.15 433.93 M481.99 433.09 C484.85 423.19,483.11 410.79,482.37 391.68 M482.51 433.91 C483.05 418.34,483.52 401.40,483.19 393.23" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M651.86 499.14 L652.42 499.14 L654.06 499.14 L655.00 499.14 L656.87 499.14 L658.73 499.14 L661.54 499.14 L663.41 499.14 L666.26 499.14 L670.08 499.14 L673.05 499.14 L677.05 499.14 L681.05 499.14 L684.10 499.14 L688.02 499.14 L690.98 499.14 L693.92 498.12 L696.78 498.12 L699.61 498.12 L702.41 498.12 L705.27 498.12 L708.07 498.12 L710.88 498.12 L713.72 498.12 L716.55 498.12 L718.42 498.12 L721.27 498.12 L724.13 498.12 L727.06 498.12 L730.95 498.12 L733.85 498.12 L737.77 498.12 L740.63 498.12 L743.59 498.12 L746.45 498.12 L749.31 498.12 L753.13 498.12 L755.99 498.12 L757.86 498.12 L760.66 498.12 L762.53 498.12 L765.34 498.12 L768.18 498.12 L770.05 498.12 L772.86 498.12 L775.69 498.12 L779.55 498.12 L782.46 498.12 L785.32 498.12 L788.22 498.12 L791.05 498.12 L793.88 498.12 L796.71 498.12 L799.57 496.90 L802.76 496.90 L805.62 496.90 L808.43 496.90 L811.30 496.90 L814.16 496.90 L817.02 496.90 L820.87 496.90 L823.83 496.90 L826.79 496.90 L830.79 496.90 L834.69 496.90 L837.73 496.90 L841.65 496.90 L845.65 496.90 L848.70 496.90 L853.80 496.90 L857.96 496.90 L861.07 496.90 L866.48 496.90 L870.62 496.90 L874.76 496.90 L878.92 496.90 L882.92 496.90 L885.77 496.90 L887.67 496.90 L890.47 496.90 L892.35 495.97 L894.22 495.97 L896.08 495.97 L897.02 495.97 L898.89 495.97 L901.02 495.04 L902.20 495.04 L904.07 495.04 L905.00 495.04 L905.94 495.04 L906.87 495.04 L906.87 494.13 L907.78 494.13 L908.62 494.13 L908.62 494.13" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<text x="900.94" y="586.15" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="900.94" dy="0">url đi qua filter và backend được xử lý khác nhau</tspan><tspan x="900.94" dy="25">=&gt; url đôi khi vượt qua được filter</tspan><tspan x="900.94" dy="25">=&gt; nhưng khi tới được backend thì nó lại phân giải ra url nội bộ</tspan></text>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M164.79 439.51 C241.36 440.61,317.11 441.01,393.09 441.64 M164.59 440.07 C222.53 439.77,279.26 439.11,394.08 440.75 M394.26 439.48 C393.01 447.61,392.84 457.06,395.47 467.26 M393.56 439.71 C393.82 445.82,394.06 452.49,393.70 467.82 M393.29 467.19 C328.35 468.82,260.68 468.50,163.62 466.64 M393.85 467.73 C321.07 466.78,248.72 466.42,164.47 467.66 M164.99 466.36 C164.96 461.43,165.45 453.12,165.28 438.21 M164.70 468.79 C165.13 462.60,165.22 455.65,166.08 440.76" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M171.31 583.75 C191.56 584.40,213.36 585.33,268.50 585.75 M172.36 583.61 C210.39 584.19,247.34 582.90,270.31 582.83 M268.23 582.02 C271.47 591.23,269.19 599.20,270.96 613.98 M269.57 583.94 C268.89 590.58,270.33 595.97,270.36 615.04 M268.88 616.18 C229.84 614.09,191.33 617.08,171.75 615.77 M269.58 615.15 C243.88 613.87,218.40 614.42,172.76 615.92 M170.46 614.72 C171.09 609.24,170.68 600.57,171.91 582.23 M172.04 614.71 C171.77 602.83,172.51 591.01,172.44 584.73" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M301.35 660.49 L302.01 660.49 L302.01 660.97 L302.61 660.97 L303.18 660.97 L303.91 660.97 L304.84 660.97 L305.77 660.97 L306.71 660.97 L308.61 661.91 L309.55 661.91 L311.42 661.91 L313.29 661.91 L315.16 661.91 L317.99 662.85 L319.86 662.85 L322.66 662.85 L324.53 662.85 L327.33 662.85 L329.20 663.79 L332.01 663.79 L333.88 663.79 L336.68 663.79 L338.55 663.79 L340.42 664.75 L342.41 664.75 L345.21 664.75 L347.08 664.75 L348.95 664.75 L350.82 664.75 L352.69 664.75 L354.56 664.75 L356.43 664.75 L358.30 664.75 L360.17 664.75 L362.04 664.75 L362.98 664.75 L364.85 664.75 L366.71 664.75 L368.58 664.75 L369.52 664.75 L371.39 664.75 L373.26 664.75 L375.13 664.75 L376.06 664.75 L378.87 664.75 L380.74 664.75 L382.62 664.75 L384.51 664.75 L386.38 664.75 L388.25 664.75 L391.59 665.69 L393.46 665.69 L395.33 665.69 L397.20 665.69 L399.07 665.69 L400.94 665.69 L403.74 665.69 L405.61 665.69 L408.06 666.62 L409.93 666.62 L412.73 666.62 L414.60 666.62 L417.40 666.62 L420.21 666.62 L422.08 666.62 L424.88 666.62 L427.71 666.62 L430.54 666.62 L433.34 666.62 L435.21 666.62 L438.02 666.62 L439.89 666.62 L441.76 666.62 L443.63 666.62 L445.50 666.62 L447.37 666.62 L448.30 666.62 L450.17 666.62 L452.04 666.62 L452.97 666.62 L454.84 666.62 L455.78 666.62 L457.65 666.62 L459.52 666.62 L461.39 666.62 L462.32 666.62 L464.19 666.62 L466.06 666.62 L468.87 666.62 L470.73 665.69 L472.60 665.69 L474.47 665.69 L476.34 665.69 L479.15 665.69 L481.02 665.69 L482.89 665.69 L484.76 665.69 L487.56 665.69 L489.72 664.47 L492.52 664.47 L494.39 664.47 L497.19 664.47 L499.06 664.47 L501.91 663.24 L505.14 663.24 L507.99 663.24 L510.82 663.24 L513.71 663.24 L517.50 663.24 L519.40 663.24 L522.56 662.03 L525.50 662.03 L528.35 662.03 L531.21 662.03 L534.02 662.03 L535.89 662.03 L539.05 660.81 L540.94 660.81 L542.81 660.81 L543.74 660.81 L545.61 660.81 L547.48 660.81 L549.35 660.81 L550.29 660.81 L552.16 660.81 L553.09 660.81 L554.98 659.85 L555.91 659.85 L557.78 659.85 L558.72 659.85 L560.59 659.85 L562.46 659.85 L563.39 659.85 L565.26 658.66 L567.40 658.66 L568.34 658.66 L570.21 658.66 L571.14 658.66 L572.08 657.71 L573.03 657.71 L574.90 657.71 L575.83 657.71 L576.77 656.78 L577.70 656.78 L578.64 656.78 L579.57 656.78 L580.51 655.83 L581.45 655.83 L582.19 655.83 L583.08 654.94 L584.95 654.94 L584.95 654.94" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M162.10 748.89 C211.69 746.03,259.56 745.85,349.52 746.96 M162.36 746.45 C229.36 747.75,295.33 747.17,348.11 747.05 M346.93 745.78 C348.94 755.35,348.75 766.01,348.34 785.45 M349.50 746.82 C348.48 756.76,349.06 767.57,349.67 784.26 M347.71 785.84 C311.04 785.13,268.93 785.53,164.55 783.70 M348.39 783.67 C290.01 783.56,230.77 783.43,162.98 784.83 M164.33 782.79 C164.85 773.00,164.34 766.20,162.20 746.15 M163.89 784.73 C163.77 769.18,163.99 756.12,162.01 747.66" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M300.98 829.09 L301.33 829.09 L302.04 829.09 L302.97 829.09 L303.91 829.09 L304.84 829.09 L306.71 829.09 L308.58 829.09 L310.45 830.28 L312.61 830.28 L314.48 830.28 L315.41 830.28 L317.28 830.28 L318.22 830.28 L320.09 830.28 L321.02 830.28 L321.97 831.21 L322.92 831.21 L323.86 831.21 L324.79 831.21 L326.66 831.21 L327.60 831.21 L329.47 831.21 L330.40 831.21 L332.27 831.21 L334.14 831.21 L335.07 831.21 L336.94 831.21 L338.81 831.21 L339.75 831.21 L340.68 831.21 L341.62 831.21 L343.49 831.21 L344.42 831.21 L345.36 831.21 L346.29 831.21 L347.23 831.21 L348.16 831.21 L350.03 831.21 L350.97 831.21 L352.84 831.21 L353.77 831.21 L355.64 831.21 L357.51 831.21 L358.44 831.21 L360.31 831.21 L362.18 831.21 L363.12 831.21 L364.99 831.21 L366.86 831.21 L368.73 831.21 L369.95 830.02 L371.82 830.02 L373.69 830.02 L375.56 830.02 L376.49 830.02 L378.36 830.02 L379.29 830.02 L381.16 830.02 L383.03 830.02 L383.97 830.02 L386.10 829.09 L388.23 829.09 L390.10 829.09 L391.96 829.09 L393.83 829.09 L395.70 829.09 L398.51 829.09 L401.31 829.09 L403.47 827.87 L406.27 827.87 L409.08 827.87 L410.95 827.87 L414.81 827.87 L417.65 827.87 L420.51 827.87 L423.37 827.87 L426.31 827.87 L428.23 827.87 L432.01 827.87 L433.88 827.87 L436.69 827.87 L439.53 827.87 L441.39 827.87 L444.20 827.87 L446.07 827.87 L449.51 828.83 L451.38 828.83 L454.18 828.83 L456.05 828.83 L458.90 828.83 L461.71 828.83 L464.54 828.83 L468.43 828.83 L471.29 828.83 L474.25 828.83 L478.25 828.83 L482.11 828.83 L485.22 828.83 L490.00 830.05 L493.93 830.05 L496.89 830.05 L499.78 830.05 L502.64 830.05 L505.45 831.27 L508.64 831.27 L510.51 831.27 L513.31 831.27 L515.18 831.27 L517.05 831.27 L518.92 831.27 L520.79 831.27 L522.66 831.27 L524.53 831.27 L526.40 831.27 L528.27 831.27 L530.14 831.27 L531.07 831.27 L532.94 831.27 L534.81 831.27 L536.68 831.27 L537.62 831.27 L539.48 831.27 L541.35 831.27 L543.22 831.27 L544.16 831.27 L546.03 831.27 L546.96 830.31 L548.96 830.31 L550.83 830.31 L552.70 830.31 L554.57 830.31 L556.43 830.31 L558.30 830.31 L559.24 830.31 L560.17 830.31 L561.11 830.31 L562.06 829.38 L563.01 829.38 L563.95 829.38 L564.88 829.38 L565.82 829.38 L566.74 829.38 L567.51 829.38 L567.51 828.67 L568.41 828.67 L569.28 828.67 L569.77 828.67 L569.77 828.67" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M165.35 924.92 C218.54 921.77,273.07 924.14,340.98 921.63 M165.23 923.13 C204.41 923.77,243.53 924.82,342.84 923.52 M342.33 924.08 C341.12 928.28,340.18 933.11,339.94 947.67 M342.23 923.31 C341.09 929.51,342.47 933.93,342.02 949.32 M341.68 950.54 C298.39 949.64,256.85 949.19,165.82 947.20 M341.55 948.08 C289.53 948.60,235.80 947.73,166.97 948.25 M164.44 949.44 C164.22 942.69,167.67 934.71,167.31 922.28 M166.80 948.60 C165.89 939.05,166.87 929.21,165.65 924.22" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<text x="835.89" y="834.83" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="835.89" dy="0">evil.com đại diện cho địa chỉ mà attacker</tspan><tspan x="835.89" dy="25">mong muốn sever truy vấn tới</tspan><tspan x="835.89" dy="25">=&gt; có thể thay bằng ip nội bộ để ssrf</tspan></text>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M167.24 1112.48 C232.19 1112.96,299.38 1110.96,359.63 1110.96 M169.30 1111.15 C214.41 1110.12,260.78 1110.90,358.19 1111.54 M356.49 1109.72 C357.86 1120.01,359.27 1129.63,359.58 1144.23 M358.36 1111.38 C356.88 1118.34,357.27 1126.47,358.90 1144.09 M357.90 1143.39 C297.91 1143.28,241.56 1144.06,168.40 1143.27 M357.87 1142.44 C309.75 1144.65,258.77 1144.85,167.54 1142.78 M166.74 1141.83 C170.01 1131.85,167.50 1124.51,168.49 1110.34 M169.12 1142.55 C168.97 1133.77,169.35 1126.82,168.16 1111.50" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<text x="895.33" y="327.85" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="895.33" dy="0">http url parser</tspan></text>
</g>
<g transform="translate(-89.61,-220.63)">
<text x="743.92" y="996.32" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="743.92" dy="0">==&gt; gộp lại 3 cái @ , # , subdomain:</tspan><tspan x="743.92" dy="25">  -đại khái bọn này là url nó bị phân tích cú pháp(parse) </tspan><tspan x="743.92" dy="25">thành mấy cái ko đầy đủ--&gt; đưa vào filter--&gt; pass</tspan><tspan x="743.92" dy="25">     - sau khi pass thì cả cái chuỗi url đi qua filter và được sever tiếp nhận</tspan><tspan x="743.92" dy="25"></tspan></text>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M167.36 1297.39 C249.51 1297.25,332.51 1298.52,380.46 1296.04 M169.22 1297.52 C247.69 1299.34,326.96 1299.00,380.59 1296.60 M380.46 1298.43 C381.61 1308.24,381.11 1320.41,380.62 1330.67 M381.96 1297.74 C381.68 1309.09,381.39 1320.45,381.03 1331.46 M380.58 1332.65 C306.71 1334.25,232.27 1331.55,168.89 1329.41 M381.50 1331.02 C309.74 1330.67,237.56 1331.79,169.12 1330.99 M167.68 1329.28 C166.62 1319.25,168.52 1304.24,168.11 1296.28 M168.58 1330.73 C168.77 1320.41,167.49 1309.06,168.40 1296.85" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-89.61,-220.63)">
<path d="M556.83 1367.57 L556.08 1367.57 L555.18 1367.57 L553.31 1367.57 L551.44 1367.57 L547.96 1366.62 L545.09 1366.62 L542.28 1366.62 L540.41 1366.62 L538.54 1366.62 L536.67 1366.62 L534.80 1366.62 L531.98 1366.62 L530.10 1366.62 L527.29 1366.62 L524.47 1366.62 L522.57 1366.62 L519.76 1366.62 L517.61 1367.56 L515.48 1367.56 L514.55 1368.49 L513.61 1368.49 L512.68 1368.49 L511.73 1369.42 L510.78 1370.36 L509.84 1370.36 L508.89 1371.29 L507.94 1372.25 L507.00 1373.18 L506.05 1375.07 L505.11 1376.23 L505.11 1377.38 L504.18 1378.32 L504.18 1379.25 L504.18 1380.19 L504.18 1381.12 L503.24 1382.05 L503.24 1382.99 L503.24 1383.92 L503.24 1384.86 L503.24 1385.79 L503.24 1386.73 L503.24 1387.66 L504.18 1388.59 L504.18 1389.53 L505.11 1390.46 L505.11 1391.40 L506.05 1392.33 L506.05 1393.27 L506.98 1394.20 L506.98 1395.14 L507.92 1396.28 L509.07 1397.44 L509.07 1398.37 L510.21 1399.53 L511.15 1400.46 L512.08 1401.42 L513.03 1402.57 L513.97 1403.73 L514.90 1404.67 L515.84 1406.54 L516.77 1407.47 L517.71 1408.41 L520.03 1409.57 L521.21 1410.74 L522.14 1411.68 L523.08 1412.61 L524.01 1413.76 L525.18 1414.94 L526.11 1416.11 L528.22 1417.04 L529.16 1417.97 L530.09 1417.97 L531.96 1418.91 L532.91 1419.84 L533.86 1419.84 L535.75 1420.78 L537.64 1420.78 L538.59 1421.73 L539.52 1421.73 L541.39 1421.73 L542.33 1421.73 L544.45 1422.66 L546.57 1422.66 L549.38 1422.66 L551.25 1422.66 L554.10 1422.66 L556.93 1422.66 L559.79 1422.66 L563.23 1423.88 L566.32 1423.88 L569.18 1423.88 L571.05 1423.88 L573.86 1423.88 L575.73 1423.88 L577.60 1423.88 L579.72 1422.94 L581.82 1422.94 L582.75 1422.94 L584.62 1422.94 L587.53 1421.98 L589.42 1421.98 L590.35 1421.98 L592.22 1421.98 L593.16 1421.98 L594.09 1421.98 L595.96 1421.98 L596.90 1421.98 L597.83 1421.98 L598.77 1421.98 L600.89 1420.81 L601.82 1420.81 L603.69 1420.81 L605.56 1420.81 L606.50 1420.81 L608.37 1420.81 L610.49 1419.64 L611.42 1419.64 L612.36 1419.64 L614.23 1419.64 L615.16 1418.71 L616.10 1418.71 L618.21 1417.55 L619.15 1417.55 L620.35 1416.35 L621.29 1415.42 L622.23 1414.48 L623.18 1413.53 L624.13 1412.58 L624.13 1411.63 L625.07 1410.70 L625.07 1409.76 L625.07 1408.83 L626.00 1406.96 L626.00 1406.02 L626.00 1404.15 L626.00 1403.22 L625.07 1402.28 L624.13 1401.35 L623.20 1400.41 L623.20 1398.51 L622.04 1397.33 L621.10 1396.39 L619.23 1395.46 L618.28 1394.51 L617.34 1392.62 L616.39 1391.44 L615.22 1389.10 L612.85 1387.91 L611.92 1386.97 L609.78 1385.78 L608.84 1383.91 L606.94 1383.91 L605.99 1382.96 L605.05 1382.03 L604.12 1381.09 L602.20 1380.14 L600.30 1380.14 L598.41 1379.19 L597.44 1378.23 L595.29 1377.05 L593.39 1376.10 L591.22 1374.90 L588.99 1373.95 L585.58 1372.98 L582.13 1371.79 L579.27 1370.50 L577.03 1370.50 L573.96 1369.20 L571.03 1369.20 L569.16 1369.20 L566.35 1369.20 L563.51 1369.20 L560.54 1368.24 L558.64 1368.24 L555.83 1368.24 L553.03 1368.24 L550.19 1368.24 L547.33 1368.24 L544.43 1368.24 L541.55 1368.24 L537.69 1368.24 L534.86 1368.24 L532.99 1368.24 L532.05 1368.24 L531.12 1368.24 L530.18 1368.24 L529.25 1369.17 L529.25 1369.17" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-c12979e9e9bbf6494d0f6865cd0b91b776ca6490" class="notion-callout-card">

```
Whitelist Filter
│
├── Bối cảnh
│   ├── Ứng dụng chỉ cho phép một danh sách domain cụ thể (ví dụ: trusted.com)
│   ├── Mọi domain khác đều bị chặn
│   └── Tưởng là an toàn, nhưng vẫn bị lách qua bằng các kỹ thuật parse URL
│
├── URL Parser Confusion
│   ├── Nguyên nhân: Thư viện filter và thư viện gửi request parse URL khác nhau
│   ├── Ví dụ: Filter dùng regex, còn HTTP client dùng thư viện chuẩn
│   ├── Hệ quả: Filter thấy domain an toàn, nhưng request thực tế đi chỗ khác
│   └── Thực tế: Python urllib, PHP parse_url, Node.js URL đều có cách xử lý khác nhau
│
├── @ bypass
│   ├── Cơ chế: Ký tự @ phân tách userinfo và host trong URL
│   ├── Payload: http://trusted.com@evil.com
│   ├── Filter thấy: "trusted.com" nằm đầu chuỗi -> Cho qua
│   ├── Thực tế: Request gửi tới "evil.com" (phần sau dấu @)
│   └── Biến thể: http://trusted.com%40evil.com (encoding dấu @)
│
├── # Fragment bypass
│   ├── Cơ chế: Ký tự # đánh dấu fragment, không gửi lên server
│   ├── Payload: http://evil.com#trusted.com
│   ├── Filter thấy: "trusted.com" ở cuối -> Cho qua
│   ├── Thực tế: Request chỉ gửi tới "evil.com", phần # bị bỏ qua
│   └── Biến thể: http://evil.com?trusted.com (query string)
│
├── Subdomain bypass
│   ├── Cơ chế: Nhét domain cho phép vào subdomain hoặc path
│   ├── Payload 1: http://trusted.com.evil.com
│   ├── Payload 2: http://evil.com/trusted.com
│   ├── Payload 3: http://evil.com?trusted.com
│   ├── Filter thấy: Chuỗi "trusted.com" xuất hiện -> Cho qua
│   └── Thực tế: Domain chính vẫn là evil.com
│
├── Encoding mismatch
│   ├── Cơ chế: Filter decode một kiểu, HTTP client decode kiểu khác
│   ├── Payload 1: http://%74%72%75%73%74%65%64%2e%63%6f%6d@evil.com
│   ├── Payload 2: http://evil.com%23trusted.com
│   ├── Payload 3: Double encoding http://evil.com%2523trusted.com
│   ├── Filter thấy: Sau khi decode ra "trusted.com" -> Cho qua
│   └── Thực tế: Client decode lần 2 ra "evil.com" hoặc ngược lại
│
└── Open Redirect Chain
    ├── Cơ chế: Dùng domain được whitelist có lỗi open redirect
    ├── Bước 1: Allowed domain
    │   └── Gửi URL http://trusted.com/redirect?url=http://169.254.169.254/
    ├── Bước 2: Redirect
    │   └── Filter thấy "trusted.com" -> Cho qua
    │   └── trusted.com trả về HTTP 302 chuyển hướng tới internal IP
    ├── Bước 3: Internal target
    │   └── Server follow redirect và gửi request tới 169.254.169.254
    └── Hệ quả: Filter bị qua mặt hoàn toàn vì request đầu tiên là hợp lệ
```

</div>

---

