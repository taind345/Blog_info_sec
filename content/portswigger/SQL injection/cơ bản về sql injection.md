---
title: "cơ bản về sql injection"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-qe5ajb">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 911 1488" class="excalidraw-svg" data-width="911" data-height="1488">
<g transform="translate(205.19,567.24)">
<text x="-53.25" y="-310.57" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-53.25" dy="0">cách test sql injection</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="-26.58" y="-98.51" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-26.58" dy="0">khai thác cơ bản</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="83.42" y="-57.17" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="83.42" dy="0">chèn url--&gt; thay đổi tham số truy vấn sql</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<path d="M5.42 -94.57 C5.31 -89.91,-7.25 -71.55,4.75 -66.57 C16.75 -61.60,65.31 -65.03,77.42 -64.72 M5.42 -94.57 C5.31 -89.91,-7.25 -71.55,4.75 -66.57 C16.75 -61.60,65.31 -65.03,77.42 -64.72" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M64.24 -57.56 L77.42 -64.72 L64.62 -72.55" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<text x="221.75" y="-397.91" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="221.75" dy="0">chèn dấu nháy &apos;,\,&quot;; ...--&gt; ứng dụng trả về lõi</tspan><tspan x="221.75" dy="25">truy vấn</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="247.75" y="-203.17" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="247.75" dy="0">chèn câu lệnh như sleep, delay,...--&gt; xem có</tspan><tspan x="247.75" dy="25">sự thay đổi thời gian thực thi ko</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="229.08" y="-327.24" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="229.08" dy="0">nếu ứng dụng chặn thông báo lỗi--&gt;</tspan><tspan x="229.08" dy="25">dùng kiểm tra đúng sai</tspan><tspan x="229.08" dy="25">--&gt; chèn &apos;OR 1=1  -- để xem ứng</tspan><tspan x="229.08" dy="25">dụng có thay đổi hành vi ko</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<path d="M215.08 -527.24 L215.08 -527.24" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M153.08 -334.57 L154.42 -338.57 L156.42 -341.24 L165.75 -353.91 L165.75 -354.57 L172.42 -364.57 L179.75 -371.24 L185.08 -376.57 L188.42 -379.24 L191.75 -381.24 L193.75 -381.24 L196.42 -381.91 L197.08 -381.91 L199.75 -382.57 L203.75 -383.91 L204.42 -383.91 L207.08 -384.57 L209.08 -384.57 L209.75 -384.57 L211.75 -384.57 L212.42 -384.57 L212.42 -384.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M199.08 -394.57 L199.75 -394.57 L203.08 -394.57 L209.75 -392.57 L213.75 -389.24 L217.75 -385.91 L220.42 -383.24 L221.08 -382.57 L221.75 -381.91 L221.75 -381.24 L219.08 -378.57 L218.42 -378.57 L211.75 -375.24 L209.75 -373.91 L209.75 -373.91" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M159.08 -333.24 L160.42 -332.57 L161.75 -331.91 L169.08 -327.24 L170.42 -326.57 L175.08 -323.91 L181.75 -319.91 L186.42 -317.91 L190.42 -315.91 L193.75 -314.57 L196.42 -313.24 L198.42 -312.57 L200.42 -311.91 L203.08 -311.91 L205.08 -311.91 L207.75 -311.91 L210.42 -311.91 L213.08 -311.91 L213.75 -311.24 L214.42 -311.24 L215.08 -311.24 L215.75 -311.24 L216.42 -311.24 L217.08 -310.57 L218.42 -309.91 L218.42 -309.91" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M209.08 -322.57 L213.08 -322.57 L213.75 -322.57 L219.08 -318.57 L223.08 -315.24 L224.42 -311.91 L226.42 -310.57 L226.42 -309.24 L221.75 -307.24 L213.75 -305.91 L210.42 -305.24 L210.42 -305.24" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M159.75 -331.24 L162.42 -329.24 L165.08 -327.91 L173.08 -319.91 L173.75 -317.91 L179.75 -307.91 L180.42 -307.24 L183.08 -299.24 L184.42 -289.91 L184.42 -281.24 L184.42 -273.24 L184.42 -265.91 L184.42 -265.24 L184.42 -258.57 L185.75 -251.91 L187.08 -245.24 L189.75 -237.91 L194.42 -230.57 L199.75 -223.91 L203.08 -219.24 L207.08 -214.57 L211.08 -211.24 L215.08 -208.57 L217.75 -207.24 L219.08 -207.24 L221.08 -205.91 L224.42 -205.24 L225.75 -204.57 L227.08 -204.57 L228.42 -203.91 L230.42 -203.24 L230.42 -202.57 L230.42 -202.57" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M222.42 -222.57 L222.42 -221.91 L223.75 -219.91 L229.08 -211.91 L229.75 -211.24 L232.42 -207.91 L233.75 -207.24 L235.08 -205.24 L235.75 -203.91 L235.75 -202.57 L233.75 -199.91 L227.75 -197.24 L224.42 -195.91 L224.42 -195.91" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M351.75 -279.91 L351.75 -279.91" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="./các-kỹ-thuật-chèn-sql" class="excalidraw-node-link" target="_self" title="các kỹ thuật chèn sql"><g transform="translate(205.19,567.24)">
<text x="62.42" y="-441.84" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="62.42" dy="0">📍các kỹ thuật chèn sql</tspan></text>
</g></a>
<a href="../../0-asset/pasted-image-20260515155902_523.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260515155902_523.png"><g transform="translate(205.19,567.24)">
<image x="-30.371741047319517" y="-30.128382008873132" width="589.3333435058594" height="188.586669921875" href="../../0-asset/pasted-image-20260515155902_523.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<a href="../../0-asset/pasted-image-20260515161057_323.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260515161057_323.png"><g transform="translate(205.19,567.24)">
<image x="-19.871710529741563" y="181.29166193643937" width="685.6666259765627" height="161.49768126098337" href="../../0-asset/pasted-image-20260515161057_323.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(205.19,567.24)">
<path d="M482.67 273.77 C516.67 276.13,549.90 277.23,630.31 274.62 M482.78 275.32 C521.45 274.72,560.78 276.01,628.75 275.68 M628.54 274.58 C628.88 297.69,631.07 321.79,631.16 340.17 M629.01 275.98 C629.58 294.83,630.31 314.14,629.40 339.96 M631.14 340.64 C578.42 338.31,527.39 341.21,481.20 341.31 M630.06 339.12 C596.75 339.61,566.33 339.72,483.58 339.59 M482.53 337.92 C481.98 324.05,481.97 305.86,482.33 273.97 M482.29 339.59 C483.98 319.65,484.05 299.92,483.93 274.22" stroke="#9c36b5" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M107.63 325.79 L103.63 330.46 L103.63 331.12 L100.29 337.79 L100.29 339.12 L99.63 347.12 L99.63 358.46 L102.96 367.79 L107.63 373.79 L108.29 373.79 L116.29 377.79 L124.29 380.46 L135.63 382.46 L137.63 382.46 L148.29 383.79 L158.96 384.46 L168.29 384.46 L169.63 384.46 L173.63 384.46 L174.29 384.46 L174.29 384.46" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<path d="M168.29 375.12 L171.63 377.79 L172.96 378.46 L178.29 383.12 L178.96 383.79 L180.96 387.12 L181.63 390.46 L178.29 393.79 L170.29 395.79 L166.96 396.46 L166.96 396.46" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(205.19,567.24)">
<text x="212.29" y="404.52" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#9c36b5" text-anchor="start"><tspan x="212.29" dy="0">luôn đúng</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="162.96" y="841.86" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="162.96" dy="0">check name=&apos;admin&apos;-- &apos;</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="300.96" y="875.19" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="300.96" dy="0">&apos;admin</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<text x="-159.45" y="-449.71" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-159.45" dy="0">#sql</tspan></text>
</g>
<g transform="translate(205.19,567.24)">
<path d="M-165.13 -478.95 C-149.13 -478.78,-133.13 -479.98,-101.49 -478.62 M-164.66 -480.55 C-144.81 -480.40,-125.88 -481.43,-100.29 -479.76 M-101.52 -478.69 C-100.52 -466.50,-101.36 -451.81,-98.56 -425.22 M-100.09 -481.17 C-100.57 -463.97,-100.01 -445.94,-100.01 -423.12 M-101.64 -422.44 C-123.09 -423.28,-141.92 -421.48,-166.49 -425.39 M-100.13 -422.60 C-117.23 -423.06,-136.17 -423.32,-164.85 -422.47 M-163.81 -421.84 C-165.56 -440.98,-164.13 -457.72,-163.48 -479.64 M-164.99 -424.43 C-165.51 -439.55,-166.31 -456.63,-165.15 -479.63" stroke="#1971c2" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


### 🔗 Các bài viết liên kết trong sơ đồ

- [[các kỹ thuật chèn sql]]
