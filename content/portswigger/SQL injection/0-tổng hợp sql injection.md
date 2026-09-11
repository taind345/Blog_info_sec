---
title: "0-tổng hợp sql injection"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-bc29aj">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1412 1037" class="excalidraw-svg" data-width="1412" data-height="1037">
<a href="./các-kỹ-thuật-chèn-sql" class="excalidraw-node-link" target="_self" title="các kỹ thuật chèn sql"><g transform="translate(1144.41,680.87)">
<text x="-1075.05" y="-104.91" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-1075.05" dy="0">📍các kỹ thuật chèn sql</tspan></text>
</g></a>
<g transform="translate(1144.41,680.87)">
<path d="M-1104.87 -566.74 C-661.97 -565.77,-218.18 -566.96,227.66 -567.81 M-1104.70 -567.26 C-580.89 -570.13,-57.89 -570.08,227.53 -567.87 M226.62 -566.73 C228.46 -334.94,228.30 -103.52,227.35 315.75 M227.47 -567.71 C225.33 -315.69,225.47 -62.98,226.90 316.06 M227.96 315.19 C-49.04 313.08,-326.44 311.81,-1104.88 315.05 M227.05 316.22 C-173.95 310.78,-574.69 311.52,-1104.02 316.23 M-1104.66 316.48 C-1104.03 133.72,-1103.14 -47.08,-1104.20 -567.36 M-1104.48 315.97 C-1102.06 23.93,-1102.51 -268.81,-1104.63 -567.41" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12 8"/>
</g>
<a href="./cơ-bản-về-sql-injection" class="excalidraw-node-link" target="_self" title="cơ bản về sql injection"><g transform="translate(1144.41,680.87)">
<text x="-136.21" y="-491.12" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-136.21" dy="0">📍cơ bản về sql injection</tspan></text>
</g></a>
<a href="./các-bước-thu-thập-thông-tin-về-csdl" class="excalidraw-node-link" target="_self" title="các bước thu thập thông tin về csdl"><g transform="translate(1144.41,680.87)">
<text x="-885.98" y="-450.98" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-885.98" dy="0">📍các bước thu thập</tspan><tspan x="-885.98" dy="25">thông tin về csdl</tspan></text>
</g></a>
<a href="./xác-định-số-cột-and-kiểu-dl" class="excalidraw-node-link" target="_self" title="xác định số cột&amp;kiểu dl"><g transform="translate(1144.41,680.87)">
<text x="-876.64" y="-325.08" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-876.64" dy="0">📍xác định số cột&amp;kiểu dl</tspan></text>
</g></a>
<g transform="translate(1144.41,680.87)">
<path d="M-907.48 -456.48 L-908.14 -455.15 L-909.48 -453.81 L-910.14 -452.48 L-910.81 -450.48 L-912.14 -447.81 L-914.14 -444.48 L-914.81 -441.81 L-916.14 -438.48 L-916.81 -435.81 L-916.81 -433.15 L-916.81 -429.15 L-916.81 -426.48 L-916.14 -423.15 L-914.81 -420.48 L-914.81 -417.81 L-914.81 -414.48 L-914.81 -411.81 L-914.81 -409.81 L-914.81 -406.48 L-914.81 -405.15 L-916.81 -402.48 L-917.48 -401.15 L-920.14 -399.15 L-921.48 -397.81 L-924.14 -397.15 L-926.81 -396.48 L-929.48 -395.81 L-931.48 -395.81 L-933.48 -395.81 L-935.48 -395.81 L-936.81 -395.81 L-937.48 -396.48 L-937.48 -397.15 L-937.48 -397.81 L-937.48 -398.48 L-937.48 -399.15 L-936.81 -399.15 L-935.48 -399.15 L-934.81 -399.15 L-934.14 -399.15 L-932.81 -399.15 L-931.48 -398.48 L-930.14 -397.81 L-928.14 -396.48 L-926.14 -394.48 L-924.81 -393.15 L-922.81 -391.15 L-922.14 -389.81 L-920.81 -387.15 L-920.14 -385.15 L-918.81 -382.48 L-918.81 -379.81 L-918.81 -377.81 L-918.81 -374.48 L-918.81 -371.15 L-918.81 -367.15 L-919.48 -363.81 L-920.81 -360.48 L-921.48 -357.81 L-921.48 -353.81 L-921.48 -351.81 L-922.14 -348.48 L-922.14 -346.48 L-922.14 -343.81 L-922.81 -343.15 L-922.81 -341.81 L-922.81 -340.48 L-922.81 -339.81 L-922.81 -339.15 L-922.14 -337.81 L-921.48 -336.48 L-919.48 -335.15 L-917.48 -333.15 L-914.14 -331.81 L-910.14 -329.15 L-904.14 -326.48 L-901.48 -325.81 L-901.48 -325.81" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1144.41,680.87)">
<path d="M-631.99 -409.06 C-602.75 -405.95,-568.75 -406.83,-538.85 -405.96 M-634.05 -408.13 C-602.07 -407.63,-571.57 -405.91,-537.90 -407.88" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-551.11 -400.38 C-546.87 -401.28,-540.87 -405.55,-538.02 -406.83 M-550.10 -399.63 C-546.63 -401.30,-544.38 -404.28,-537.82 -406.73" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-538.07 -407.79 C-542.42 -408.91,-545.02 -413.24,-550.96 -414.42 M-537.06 -407.04 C-540.19 -408.69,-544.54 -411.71,-550.76 -414.32" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="./union-sql--injection" class="excalidraw-node-link" target="_self" title="union sql  injection"><g transform="translate(1144.41,680.87)">
<text x="-504.81" y="-442.41" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-504.81" dy="0">📍union sql  injection</tspan></text>
</g></a>
<a href="./tấn-công-mật-khẩu" class="excalidraw-node-link" target="_self" title="tấn công mật khẩu"><g transform="translate(1144.41,680.87)">
<text x="-501.48" y="-366.56" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-501.48" dy="0">📍tấn công mật khẩu</tspan></text>
</g></a>
<g transform="translate(1144.41,680.87)">
<path d="M-942.42 -383.04 C-949.72 -378.25,-976.52 -368.65,-985.53 -352.74 C-994.54 -336.83,-1001.04 -308.82,-996.48 -287.60 C-991.91 -266.39,-976.89 -236.95,-958.13 -225.45 C-939.38 -213.96,-896.31 -220.06,-883.97 -218.62 M-943.98 -380.85 C-951.41 -376.52,-977.28 -370.41,-986.10 -354.74 C-994.93 -339.08,-1001.55 -308.55,-996.91 -286.85 C-992.27 -265.15,-976.91 -235.89,-958.25 -224.55 C-939.59 -213.20,-897.00 -219.98,-884.94 -218.80" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-898.34 -210.25 C-893.62 -212.50,-890.63 -214.23,-884.89 -216.94 M-898.07 -211.63 C-894.48 -213.54,-889.82 -215.18,-884.93 -217.75" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-884.64 -216.36 C-888.71 -219.50,-894.51 -222.15,-897.04 -225.75 M-884.37 -217.75 C-889.72 -220.64,-893.98 -223.21,-897.07 -226.55" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="./sql-cheet-sheet" class="excalidraw-node-link" target="_self" title="SQL cheet sheet"><g transform="translate(1144.41,680.87)">
<text x="-796.81" y="-211.08" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-796.81" dy="0">📍SQL cheet sheet</tspan></text>
</g></a>
<g transform="translate(1144.41,680.87)">
<text x="-856.81" y="-215.08" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-856.81" dy="0">dùng</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<path d="M-259.21 -371.50 C-254.32 -372.18,-237.94 -374.17,-229.45 -377.16 C-220.95 -380.15,-208.89 -381.28,-208.22 -389.46 C-207.56 -397.65,-215.13 -416.97,-225.47 -426.27 C-235.80 -435.56,-262.91 -441.79,-270.24 -445.23 M-257.61 -371.97 C-252.77 -372.50,-238.24 -372.99,-230.08 -376.22 C-221.92 -379.45,-209.51 -382.65,-208.65 -391.33 C-207.80 -400.01,-215.02 -418.87,-224.97 -428.29 C-234.91 -437.72,-261.18 -444.56,-268.35 -447.88" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-255.10 -447.03 C-259.80 -446.73,-260.89 -447.52,-270.95 -447.68 M-254.63 -448.74 C-259.76 -446.73,-264.40 -446.64,-269.40 -445.88" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-270.01 -445.36 C-268.86 -442.37,-264.16 -440.63,-262.05 -435.60 M-269.53 -447.07 C-266.80 -441.77,-263.50 -438.22,-260.50 -433.81" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-1036.43" y="-480.01" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-1036.43" dy="0">workflow tự rút ra</tspan></text>
</g>
<a href="./blind-sql-injection" class="excalidraw-node-link" target="_self" title="Blind sql injection"><g transform="translate(1144.41,680.87)">
<text x="-701.58" y="-46.75" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-701.58" dy="0">📍Blind sql injection</tspan></text>
</g></a>
<g transform="translate(1144.41,680.87)">
<path d="M-687.91 -169.64 L-686.54 -169.64 L-685.86 -169.64 L-683.81 -168.27 L-682.44 -166.22 L-680.39 -163.49 L-678.34 -161.44 L-676.29 -157.34 L-674.24 -153.92 L-671.51 -149.82 L-670.14 -146.40 L-667.41 -142.30 L-665.36 -138.89 L-663.31 -134.79 L-661.26 -130.69 L-659.89 -127.95 L-657.84 -123.85 L-655.11 -119.75 L-653.06 -116.33 L-651.01 -112.92 L-648.96 -109.50 L-646.91 -106.77 L-644.86 -102.67 L-642.81 -101.30 L-640.76 -97.20 L-638.71 -95.15 L-636.66 -92.42 L-634.61 -91.05 L-633.24 -89.68 L-631.87 -89.00 L-631.19 -88.32 L-631.19 -88.32" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1144.41,680.87)">
<path d="M-679.71 -145.72 L-679.03 -145.72 L-678.34 -145.72 L-676.98 -145.72 L-674.93 -145.72 L-673.56 -145.04 L-671.51 -144.35 L-670.14 -143.67 L-668.09 -142.99 L-666.04 -142.30 L-663.31 -140.94 L-661.94 -139.57 L-658.52 -138.20 L-657.16 -136.84 L-655.11 -134.79 L-653.06 -132.05 L-651.01 -130.00 L-649.64 -127.95 L-647.59 -125.90 L-646.22 -123.85 L-644.86 -122.48 L-643.49 -121.80 L-642.81 -121.80 L-644.17 -122.48 L-644.17 -122.48" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1144.41,680.87)">
<path d="M-646.22 -144.35 L-647.59 -144.35 L-650.32 -144.35 L-653.74 -144.35 L-657.16 -144.35 L-661.26 -144.35 L-665.36 -144.35 L-668.09 -143.67 L-670.83 -142.99 L-673.56 -142.30 L-674.24 -141.62 L-675.61 -140.94 L-676.29 -139.57 L-676.98 -138.89 L-677.66 -138.89 L-677.66 -138.89" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1144.41,680.87)">
<path d="M-554.65 -617.62 L-554.65 -617.62" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="./payload-giúp-brute-force-mật-khẩu-cho-blind--and--and--error-sql" class="excalidraw-node-link" target="_self" title="payload giúp brute force mật khẩu cho blind &amp;&amp; error-sql"><g transform="translate(1144.41,680.87)">
<text x="-372.87" y="-41.85" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-372.87" dy="0">📍payload giúp brute force</tspan><tspan x="-372.87" dy="25">mật khẩu cho blind &amp;&amp;</tspan><tspan x="-372.87" dy="25">error-sql</tspan></text>
</g></a>
<a href="./based-error-sql-injection" class="excalidraw-node-link" target="_self" title="based error sql injection"><g transform="translate(1144.41,680.87)">
<text x="-702.85" y="16.58" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-702.85" dy="0">📍based error sql injection</tspan></text>
</g></a>
<g transform="translate(1144.41,680.87)">
<path d="M-704.31 -63.40 L-704.31 -62.72 L-705.68 -60.67 L-705.68 -59.99 L-706.36 -59.30 L-706.36 -57.25 L-706.36 -56.57 L-706.36 -55.89 L-706.36 -55.20 L-706.36 -54.52 L-706.36 -53.15 L-706.36 -52.47 L-706.36 -51.10 L-706.36 -50.42 L-706.36 -49.05 L-706.36 -48.37 L-705.68 -47.69 L-705.68 -46.32 L-705.68 -44.95 L-705.68 -44.27 L-705.68 -42.90 L-705.68 -41.54 L-705.68 -40.85 L-705.68 -39.49 L-706.36 -38.80 L-706.36 -37.44 L-707.73 -36.75 L-708.41 -36.07 L-709.78 -34.70 L-710.46 -34.02 L-712.51 -32.65 L-713.88 -31.97 L-715.24 -31.29 L-716.61 -30.60 L-717.98 -29.92 L-719.34 -29.24 L-720.71 -29.24 L-721.40 -29.24 L-722.08 -29.24 L-721.40 -29.24 L-720.03 -29.24 L-718.66 -29.24 L-717.98 -29.24 L-716.61 -28.55 L-715.24 -28.55 L-714.56 -27.87 L-713.19 -26.50 L-712.51 -25.82 L-711.14 -24.45 L-710.46 -23.77 L-709.78 -22.40 L-709.09 -21.72 L-707.73 -20.35 L-707.04 -19.67 L-707.04 -18.30 L-707.04 -16.25 L-706.36 -14.20 L-706.36 -12.15 L-706.36 -10.78 L-706.36 -8.73 L-706.36 -6.00 L-706.36 -4.63 L-706.36 -1.90 L-707.04 -0.53 L-707.73 1.52 L-708.41 3.57 L-709.09 4.25 L-710.46 5.62 L-710.46 6.98 L-710.46 7.67 L-711.14 8.35 L-711.14 9.03 L-711.14 9.72 L-711.14 10.40 L-711.14 11.08 L-711.14 11.77 L-709.78 13.13 L-707.04 15.18 L-703.63 15.87 L-700.89 17.23 L-700.89 17.23" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-488.21" y="-620.87" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-488.21" dy="0">thứ tự ôn tập</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-363.70" y="-498.18" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-363.70" dy="0">1</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-370.42" y="-327.06" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-370.42" dy="0">2</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-766.13" y="-288.90" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-766.13" dy="0">3</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-759.24" y="-492.03" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-759.24" dy="0">4</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-575.51" y="-212.42" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-575.51" dy="0">5</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-15.96" y="-523.28" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-15.96" dy="0">0</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-606.94" y="59.71" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-606.94" dy="0">6</tspan></text>
</g>
<g transform="translate(1144.41,680.87)">
<text x="-580.06" y="-79.84" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-580.06" dy="0">7</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>


### 🔗 Các bài viết liên kết trong sơ đồ

- [[các kỹ thuật chèn sql]]
- [[cơ bản về sql injection]]
- [[các bước thu thập thông tin về csdl]]
- [[xác định số cột&kiểu dl]]
- [[union sql  injection]]
- [[tấn công mật khẩu]]
- [[SQL cheet sheet]]
- [[Blind sql injection]]
- [[payload giúp brute force mật khẩu cho blind && error-sql]]
- [[based error sql injection]]
