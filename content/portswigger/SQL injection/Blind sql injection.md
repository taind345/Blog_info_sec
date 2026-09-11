---
title: "Blind sql injection"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-899ede3c">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1056 2570" class="excalidraw-svg" data-width="1056" data-height="2570">
<g transform="translate(-236.05,-81.87)">
<text x="349.83" y="184.72" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="349.83" dy="0">là kiểu sql</tspan><tspan x="349.83" dy="25">injection mà ko trả</tspan><tspan x="349.83" dy="25">ra kết quả</tspan></text>
</g>
<a href="../../0-asset/pasted-image-20260522144720_629.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260522144720_629.png"><g transform="translate(-236.05,-81.87)">
<image x="408.86099411371185" y="352.71873474121094" width="462.4750395046444" height="360.33331298828125" href="../../0-asset/pasted-image-20260522144720_629.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-236.05,-81.87)">
<text x="625.17" y="183.95" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="625.17" dy="0">cần phải check từng từ</tspan><tspan x="625.17" dy="25">của password==&gt; so sánh</tspan><tspan x="625.17" dy="25">nó với ký tự</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M539.06 200.91 C565.99 203.04,590.68 203.57,620.19 202.65 M538.28 202.43 C556.40 202.46,573.75 201.40,619.92 202.56" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M607.47 208.53 C611.16 207.81,614.35 204.90,620.41 201.87 M606.44 209.73 C610.63 206.39,615.73 203.81,619.70 201.84" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M620.40 200.93 C615.63 200.39,610.37 197.55,607.36 194.48 M619.36 202.12 C614.43 198.60,610.40 196.09,606.65 194.45" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M702.48 245.71 C699.26 280.27,695.58 306.45,696.98 345.80 M697.20 247.33 C698.57 286.48,697.35 327.01,698.29 347.20" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M691.63 334.52 C695.24 340.72,694.55 344.57,698.66 344.88 M692.78 332.84 C695.64 337.74,697.97 343.85,698.63 346.00" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M699.28 347.42 C702.34 345.44,701.56 341.12,706.01 331.81 M700.43 345.74 C703.05 342.01,705.27 339.49,705.98 332.92" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="339.46" y="843.80" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="339.46" dy="0">dựa vào sự khác nhau giữa truy vấn </tspan><tspan x="339.46" dy="25">                đúng và sai</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M509.13 893.41 C483.97 916.60,457.26 943.92,442.80 958.83 M508.24 889.30 C487.98 912.11,469.53 932.37,441.27 962.21" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M442.67 950.61 C445.94 953.38,443.77 956.59,443.34 964.67 M444.11 947.64 C442.52 950.37,443.02 955.01,441.17 964.29" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M439.45 965.26 C449.39 960.75,454.05 956.48,457.64 960.14 M440.89 962.28 C443.13 960.88,447.47 961.31,455.47 959.75" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M514.71 888.42 C541.11 910.16,557.39 930.37,588.01 962.91 M517.13 890.09 C538.72 910.93,559.18 932.14,588.71 962.22" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M576.06 956.18 C582.06 959.08,583.16 958.66,589.58 961.43 M576.99 957.55 C578.50 958.04,582.58 958.30,589.09 960.99" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M590.62 959.81 C591.73 957.95,587.63 952.51,585.45 947.01 M591.54 961.18 C589.04 957.59,588.99 953.87,584.96 946.57" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="383.46" y="990.05" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="383.46" dy="0">đúng</tspan><tspan x="383.46" dy="25"></tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M397.29 987.52 C401.45 1003.00,400.11 1019.55,400.74 1034.23 M397.32 991.91 C401.60 1006.50,401.51 1024.20,401.89 1032.51" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M394.36 1018.05 C396.69 1023.39,397.75 1027.66,401.72 1032.73 M393.49 1021.46 C396.51 1025.45,399.49 1029.04,401.56 1031.52" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M402.62 1030.58 C404.80 1027.34,405.35 1023.02,408.43 1019.32 M401.75 1033.98 C404.37 1029.33,406.84 1024.27,408.28 1018.11" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="350.00" y="1058.43" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="350.00" dy="0">welcomback</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="560.70" y="985.09" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="560.70" dy="0">sai</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="547.06" y="1058.84" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="547.06" dy="0">ko có welcomback</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M576.49 994.93 C575.70 1008.75,569.59 1020.92,571.55 1036.65 M573.91 997.69 C575.25 1008.67,571.85 1022.34,573.60 1031.79" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M564.19 1019.16 C570.38 1024.36,568.54 1026.53,572.84 1034.54 M564.36 1018.34 C568.90 1024.72,569.89 1027.43,573.36 1033.97" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M571.24 1032.40 C577.72 1028.49,576.19 1021.56,580.78 1021.82 M571.41 1031.58 C576.73 1030.03,577.98 1024.82,581.30 1021.25" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../../0-asset/pasted-image-20260629032421_167.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260629032421_167.png"><g transform="translate(-236.05,-81.87)">
<image x="322.8753490430388" y="1091.049635182822" width="802.2319602587332" height="188.4964605922617" href="../../0-asset/pasted-image-20260629032421_167.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-236.05,-81.87)">
<path d="M325.30 1147.88 C463.04 1150.00,601.95 1149.27,784.80 1147.46 M324.98 1147.85 C476.78 1149.87,629.56 1149.51,785.23 1148.06 M786.42 1147.35 C785.14 1161.81,785.97 1171.78,785.11 1193.86 M786.22 1148.04 C786.74 1157.84,786.24 1165.25,785.17 1191.51 M785.69 1192.04 C661.31 1190.42,537.51 1190.02,325.21 1192.44 M785.87 1192.41 C640.50 1190.62,494.45 1189.82,324.88 1192.57 M325.44 1193.84 C324.88 1173.88,322.72 1158.40,323.38 1146.34 M325.56 1192.96 C324.78 1174.54,324.32 1156.44,325.42 1147.88" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../../0-asset/pasted-image-20260629035417_635.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260629035417_635.png"><g transform="translate(-236.05,-81.87)">
<image x="326.0951023902038" y="1312.0796311402585" width="623.5121797698725" height="350.0356783059878" href="../../0-asset/pasted-image-20260629035417_635.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../../0-asset/pasted-image-20260629040444_825.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260629040444_825.png"><g transform="translate(-236.05,-81.87)">
<image x="291.1649273852671" y="1685.0067754131464" width="782.6110680294099" height="280.906481663398" href="../../0-asset/pasted-image-20260629040444_825.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../../0-asset/pasted-image-20260629040508_105.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260629040508_105.png"><g transform="translate(-236.05,-81.87)">
<image x="276.0503109770433" y="1996.6465344854687" width="869.6221032725604" height="203.48856309275746" href="../../0-asset/pasted-image-20260629040508_105.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-236.05,-81.87)">
<text x="622.05" y="2253.02" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="622.05" dy="0">có thể dùng cái này cho nhanh</tspan></text>
</g>
<a href="./payload-giúp-brute-force-mật-khẩu-cho-blind--and--and--error-sql" class="excalidraw-node-link" target="_self" title="payload giúp brute force mật khẩu cho blind &amp;&amp; error-sql"><g transform="translate(-236.05,-81.87)">
<text x="623.29" y="2313.14" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="623.29" dy="0">📍payload giúp brute force mật khẩu cho blind &amp;&amp; error-sql</tspan></text>
</g></a>
<a href="../../0-asset/pasted-image-20260629043459_091.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260629043459_091.png"><g transform="translate(-236.05,-81.87)">
<image x="279.4968679342717" y="2383.005638087234" width="859.2428724184878" height="228.44364532566996" href="../../0-asset/pasted-image-20260629043459_091.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-236.05,-81.87)">
<path d="M441.14 424.17 C448.82 421.54,456.53 421.82,474.30 421.90 M440.24 422.76 C452.96 422.51,465.45 422.35,475.86 423.26 M473.72 423.81 C475.40 431.11,473.28 441.22,473.50 456.83 M475.08 423.85 C475.13 433.41,475.60 445.04,475.13 454.42 M476.46 454.13 C463.97 456.81,450.55 456.60,440.34 453.33 M475.12 455.81 C467.02 454.80,459.84 455.32,439.67 455.82 M437.86 453.97 C440.29 447.56,438.98 439.46,438.32 424.93 M439.10 456.26 C440.11 445.35,439.28 434.37,439.71 423.64" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M879.17 450.12 C897.94 451.53,918.60 449.20,942.82 449.30 M877.40 451.30 C894.32 449.74,913.53 450.17,940.78 449.22" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M928.04 456.89 C932.47 455.42,936.57 450.48,939.89 448.67 M927.77 456.33 C931.89 455.63,934.61 453.83,940.85 448.65" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M940.87 449.11 C936.86 447.71,932.53 442.95,926.74 441.45 M940.60 448.55 C939.08 448.14,936.17 446.46,927.70 441.43" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="942.44" y="439.54" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="942.44" dy="0">?? tại sao lại dùng AND</tspan><tspan x="942.44" dy="25">mà ko dùng UNION select</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M1038.87 475.29 C1035.85 494.24,1039.36 510.26,1040.12 535.07 M1036.29 476.14 C1037.73 499.27,1037.70 520.34,1038.67 536.92" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1030.24 523.42 C1032.08 528.24,1036.64 529.94,1037.19 537.84 M1030.87 524.12 C1032.96 527.64,1035.50 531.27,1038.60 536.27" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1038.01 536.26 C1039.66 533.63,1044.07 527.89,1044.42 524.70 M1038.64 536.95 C1040.76 532.49,1043.13 528.13,1045.83 523.13" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="961.03" y="567.62" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="961.03" dy="0">do nó ko trả về truy vấn,</tspan><tspan x="961.03" dy="25">nên ta dùng AND để check</tspan><tspan x="961.03" dy="25">TRUE/FALSE--&gt; dựa vào</tspan><tspan x="961.03" dy="25">phản hồi để thu hẹp phạm vi</tspan><tspan x="961.03" dy="25">cần tìm</tspan></text>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M294.59 121.64 C632.44 122.83,969.95 123.12,1251.72 122.40 M294.81 121.61 C509.94 121.25,724.54 121.22,1251.67 122.19 M1252.10 121.32 C1250.12 489.78,1250.07 858.16,1251.53 1098.22 M1251.88 121.77 C1253.35 469.73,1253.61 818.02,1251.82 1098.70 M1251.12 1098.36 C1000.32 1097.70,750.22 1097.76,295.40 1098.14 M1251.59 1098.29 C1013.63 1095.91,775.19 1095.71,294.69 1098.37 M294.44 1099.29 C294.03 730.13,292.63 360.17,294.06 121.76 M294.69 1098.31 C294.11 854.68,293.96 610.93,294.45 121.63" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<path d="M737.89 719.14 C739.55 729.36,734.90 771.20,749.11 781.41 C763.31 791.62,810.62 780.45,823.10 780.39 M739.46 718.14 C740.96 728.53,734.34 769.12,748.13 779.62 C761.92 790.12,809.47 780.75,822.22 781.14" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M811.67 789.08 C815.08 786.64,816.91 784.52,823.29 781.51 M810.01 789.33 C815.08 785.79,820.53 783.29,823.95 782.16" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M824.73 781.70 C820.19 779.00,814.06 776.80,810.37 773.88 M823.07 781.95 C818.26 778.24,813.82 775.65,811.03 774.54" stroke="#1971c2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-236.05,-81.87)">
<text x="860.75" y="771.54" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="860.75" dy="0">?? khác gì</tspan></text>
</g>
<a href="./based-error-sql-injection" class="excalidraw-node-link" target="_self" title="based error sql injection"><g transform="translate(-236.05,-81.87)">
<text x="957.80" y="776.39" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="957.80" dy="0">📍based error sql injection</tspan></text>
</g></a>
<g transform="translate(-236.05,-81.87)">
<text x="903.04" y="810.36" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="903.04" dy="0">-1 thằng nhận biết qua phản</tspan><tspan x="903.04" dy="25">hồi với true/false</tspan><tspan x="903.04" dy="25">-1 thằng nhận biết qua phản</tspan><tspan x="903.04" dy="25">hồi với error : syntax, logic</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>


### 🔗 Các bài viết liên kết trong sơ đồ

- [[payload giúp brute force mật khẩu cho blind && error-sql]]
- [[based error sql injection]]
