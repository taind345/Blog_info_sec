---
title: "các cách để bypass ssrf"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-9bc6baf3">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1054 1308" class="excalidraw-svg" data-width="1054" data-height="1308">
<g transform="translate(699.57,517.80)">
<text x="-595.54" y="-393.08" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-595.54" dy="0">cơ chế chặn blacklist</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<text x="-195.54" y="-319.75" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-195.54" dy="0">server</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<path d="M-231.92 -346.40 C-127.96 -342.13,-23.43 -344.09,56.48 -346.23 M-230.86 -345.66 C-122.12 -342.84,-12.61 -343.96,57.25 -344.53 M57.76 -346.24 C58.58 -280.38,59.31 -217.87,56.65 -101.52 M57.86 -344.41 C59.64 -285.34,59.52 -223.42,58.72 -100.94 M58.80 -101.58 C-47.42 -97.51,-153.98 -98.29,-230.78 -100.51 M58.41 -100.68 C-47.39 -99.58,-152.72 -99.45,-231.02 -99.84 M-229.96 -99.41 C-230.52 -170.58,-230.59 -240.66,-231.97 -344.14 M-229.97 -100.30 C-233.25 -185.90,-232.76 -271.20,-230.38 -345.63" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(699.57,517.80)">
<path d="M-441.19 -250.48 C-367.38 -252.07,-296.86 -252.59,-236.39 -257.80 M-442.70 -249.40 C-368.87 -252.60,-294.96 -255.31,-235.76 -255.80" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-249.94 -248.91 C-242.93 -251.52,-240.50 -253.75,-235.88 -255.18 M-248.65 -247.95 C-245.79 -250.73,-241.51 -254.02,-235.86 -256.46" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-237.20 -256.84 C-239.41 -259.14,-246.20 -261.07,-249.11 -262.25 M-235.91 -255.87 C-240.70 -258.44,-244.06 -261.49,-249.09 -263.53" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(699.57,517.80)">
<text x="-538.71" y="-244.48" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-538.71" dy="0">attacker</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<text x="-417.37" y="-268.41" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-417.37" dy="0">/localhost/admin</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<text x="-414.71" y="-219.81" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-414.71" dy="0">127.0.0.1/admin</tspan><tspan x="-414.71" dy="25">.....</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<text x="-209.37" y="-245.48" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-209.37" dy="0">chặn các chuuỗi có</tspan><tspan x="-209.37" dy="25">127.0.0.1 hay localhost</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<text x="-218.71" y="-49.08" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-218.71" dy="0">bypass ?</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<path d="M-175.28 -191.95 C-183.25 -174.52,-208.00 -123.64,-221.70 -88.18 C-235.40 -52.73,-251.50 2.35,-257.47 20.81 M-173.38 -192.36 C-181.06 -175.30,-205.91 -125.49,-219.51 -89.80 C-233.11 -54.12,-248.62 3.36,-254.97 21.75" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-260.03 5.90 C-257.54 11.58,-258.51 19.02,-257.92 22.56 M-259.53 6.90 C-258.37 10.66,-258.43 15.94,-257.23 22.09" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-256.91 20.57 C-251.29 17.11,-249.28 15.39,-246.77 12.53 M-256.42 21.58 C-252.76 18.22,-250.48 16.32,-246.08 12.05" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(699.57,517.80)">
<text x="-373.37" y="44.39" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-373.37" dy="0">thay đổi 127.0.0.1, localhost,...</tspan><tspan x="-373.37" dy="25">bằng các chuỗi khác nhưng đều cùng cho</tspan><tspan x="-373.37" dy="25">ra 1 kết quả khi được backend phân giải</tspan></text>
</g>
<g transform="translate(699.57,517.80)">
<path d="M-601.54 -422.04 C-439.24 -424.56,-275.81 -423.21,113.12 -422.93 M-601.78 -422.70 C-338.68 -423.32,-75.92 -423.55,112.13 -422.79 M111.82 -422.15 C112.05 -219.20,111.75 -16.55,112.75 162.78 M112.61 -423.15 C110.32 -274.83,110.12 -127.25,112.36 163.35 M111.99 163.49 C-58.50 165.90,-228.36 165.15,-602.18 162.50 M112.32 163.32 C-85.82 166.06,-283.38 166.12,-601.39 163.23 M-602.22 163.61 C-600.18 6.45,-600.36 -149.43,-601.59 -423.58 M-601.15 163.41 C-603.50 7.88,-603.07 -148.08,-601.60 -423.18" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 6"/>
</g>
<g transform="translate(699.57,517.80)">
<text x="-593.29" y="-457.80" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-593.29" dy="0">#ssrf</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>
