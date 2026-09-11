---
title: "blind ssrf"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-x227vk">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 872 908" class="excalidraw-svg" data-width="872" data-height="908">
<g transform="translate(477.46,402.66)">
<path d="M117.09 -304.44 L259.41 -302.98 L257.41 -167.51 L119.58 -166.94" stroke="none" fill="#eeeeee"/>
<path d="M117.66 -305.55 C169.44 -304.85,222.70 -304.36,257.62 -305.78 M116.95 -304.88 C151.06 -302.78,183.39 -302.68,259.34 -304.35 M259.68 -303.72 C257.75 -264.67,257.77 -227.06,260.35 -164.88 M258.11 -304.10 C258.38 -262.62,258.54 -219.54,259.12 -166.44 M258.19 -168.25 C211.78 -164.84,166.26 -165.93,117.22 -166.48 M259.12 -167.13 C209.68 -166.58,162.10 -167.22,118.28 -165.47 M116.84 -167.60 C119.03 -198.40,119.98 -227.69,116.02 -304.51 M117.28 -167.23 C116.75 -195.29,118.05 -225.93,117.09 -304.80" stroke="#000000" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="188.21" y="-243.06" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="21.7951766287697" fill="#000000" text-anchor="middle"><tspan x="188.21" dy="0">Application</tspan><tspan x="188.21" dy="27.243970785962123">server</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-126.24 -268.37 C-123.06 -268.10,-119.55 -267.02,-117.50 -264.82 C-115.46 -262.61,-114.21 -258.34,-113.96 -255.12 C-113.71 -251.91,-113.98 -247.86,-116.00 -245.53 C-118.01 -243.20,-122.28 -241.63,-126.02 -241.13 C-129.77 -240.64,-135.28 -241.16,-138.47 -242.57 C-141.66 -243.98,-144.08 -246.66,-145.16 -249.61 C-146.24 -252.56,-146.04 -257.33,-144.96 -260.25 C-143.89 -263.17,-142.47 -265.94,-138.69 -267.12 C-134.91 -268.30,-125.52 -267.54,-122.29 -267.33 C-119.06 -267.13,-119.07 -266.08,-119.34 -265.86 M-134.61 -270.21 C-131.33 -271.15,-126.73 -268.69,-123.19 -267.04 C-119.64 -265.39,-115.12 -262.97,-113.35 -260.34 C-111.58 -257.70,-111.49 -254.00,-112.57 -251.23 C-113.66 -248.46,-116.50 -245.37,-119.84 -243.72 C-123.18 -242.07,-129.18 -241.24,-132.63 -241.33 C-136.08 -241.43,-138.18 -242.19,-140.56 -244.27 C-142.94 -246.35,-146.68 -250.66,-146.89 -253.82 C-147.10 -256.97,-143.88 -260.42,-141.84 -263.20 C-139.80 -265.99,-136.28 -269.60,-134.65 -270.53 C-133.01 -271.45,-132.25 -269.02,-132.01 -268.74" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-129.95 -240.45 C-130.13 -223.23,-132.99 -211.14,-134.56 -202.61 M-132.22 -240.67 C-132.72 -225.64,-132.86 -210.88,-133.90 -203.21" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-131.14 -199.86 C-128.34 -194.86,-124.55 -186.69,-116.64 -178.89 M-133.62 -201.97 C-128.27 -193.66,-123.87 -186.67,-118.14 -178.38" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-135.45 -203.84 C-139.61 -197.48,-139.80 -191.75,-146.81 -183.58 M-135.22 -202.98 C-138.55 -199.43,-140.17 -193.80,-146.74 -181.94" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-153.17 -218.60 C-142.40 -223.24,-135.64 -229.77,-134.29 -232.29 M-152.51 -219.20 C-146.16 -221.38,-140.09 -225.33,-132.21 -231.29" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-131.14 -231.53 C-128.41 -228.73,-127.41 -224.12,-119.45 -215.50 M-132.63 -231.02 C-127.59 -226.11,-123.84 -221.27,-118.13 -215.73" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="-145.47" y="-257.07" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="9.116366076628815" fill="#000000" text-anchor="start"><tspan x="-145.47" dy="0">｡◕‿◕｡</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-101.26 -228.06 C-44.51 -228.61,10.82 -229.30,113.67 -235.22 M-100.49 -226.61 C-43.47 -231.73,14.94 -232.49,112.11 -234.52" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M100.56 -227.90 C103.48 -229.45,106.39 -231.29,110.96 -235.80 M99.27 -226.61 C101.55 -228.54,105.00 -231.15,112.12 -235.16" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M113.25 -235.90 C109.36 -237.25,105.46 -238.82,97.69 -242.78 M111.96 -234.61 C108.85 -236.30,106.92 -238.70,98.85 -242.15" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-167.12 -37.07 C-112.91 -39.09,-62.23 -40.77,45.46 -36.96 M-165.40 -38.13 C-122.33 -38.67,-77.69 -38.78,45.52 -37.76 M44.57 -38.76 C44.59 13.99,41.86 68.99,43.57 121.20 M45.16 -38.27 C44.85 2.89,45.68 45.26,45.18 121.36 M45.39 120.94 C3.31 123.59,-40.81 123.18,-167.39 121.94 M45.01 119.51 C-35.02 121.33,-116.62 120.59,-165.81 120.52 M-167.95 120.27 C-166.35 70.68,-164.88 25.52,-167.60 -38.13 M-166.22 119.69 C-168.11 64.49,-167.37 9.51,-166.10 -37.56" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="-76.79" y="-277.39" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16.11992407097387" fill="#1e1e1e" text-anchor="start"><tspan x="-76.79" dy="0">khiến server</tspan><tspan x="-76.79" dy="20.149905088717336">request tới url</tspan><tspan x="-76.79" dy="20.149905088717336">của attacker</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<text x="-156.79" y="-4.17" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-156.79" dy="0">external system của</tspan><tspan x="-156.79" dy="25">attcker</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M186.28 -160.49 C181.72 -148.41,180.53 -110.99,158.46 -89.16 C136.38 -67.34,71.21 -39.24,53.82 -29.52 M184.94 -161.30 C180.28 -148.98,179.26 -109.39,157.81 -87.76 C136.37 -66.13,73.55 -41.14,56.26 -31.52" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.11 -42.10 C59.87 -40.26,58.83 -37.18,54.33 -30.71 M61.91 -43.10 C60.03 -40.84,58.96 -37.65,53.96 -29.74" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M53.53 -29.15 C58.63 -31.05,63.99 -31.61,69.33 -30.62 M54.33 -30.16 C57.74 -30.91,61.91 -30.69,68.96 -29.65" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="157.88" y="-81.41" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="middle"><tspan x="157.88" dy="0">request</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-157.54 -178.61 C-170.46 -167.92,-233.58 -140.90,-234.97 -113.76 C-236.36 -86.62,-177.58 -31.82,-165.87 -15.76 M-159.03 -179.50 C-172.08 -168.66,-234.36 -142.58,-235.67 -115.64 C-236.97 -88.69,-178.78 -34.30,-166.84 -17.85" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-180.44 -21.55 C-174.34 -20.86,-170.21 -18.51,-166.46 -16.53 M-179.80 -23.06 C-173.34 -19.85,-169.39 -16.99,-165.01 -16.59" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-166.79 -15.34 C-165.27 -21.06,-165.73 -25.16,-167.91 -31.46 M-166.15 -16.85 C-165.27 -21.70,-166.98 -26.76,-166.45 -31.52" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="-437.46" y="-122.17" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-437.46" dy="0">check xem server có</tspan><tspan x="-437.46" dy="25">request tới external</tspan><tspan x="-437.46" dy="25">system ko</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-81.73 117.77 C-78.62 166.78,-78.10 215.74,-79.43 255.39 M-81.44 116.11 C-80.84 162.68,-79.38 208.69,-78.03 254.49" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-85.10 240.91 C-82.19 248.05,-79.84 251.25,-78.60 254.72 M-85.32 242.72 C-83.95 245.62,-80.98 249.64,-78.05 255.58" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-77.33 253.74 C-74.36 251.65,-72.20 245.61,-71.37 241.58 M-77.55 255.55 C-76.55 251.49,-73.72 248.56,-70.83 242.44" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="-77.56" y="173.72" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-77.56" dy="0">kịch bản tấn công khi</tspan><tspan x="-77.56" dy="25">server kết nối tới </tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M187.77 -63.90 C201.66 -54.19,216.84 -44.63,228.70 -34.36 M184.87 -62.93 C199.12 -54.87,211.25 -45.69,227.19 -35.79" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M212.71 -35.97 C218.72 -35.99,224.15 -34.12,228.97 -35.12 M213.09 -36.69 C217.07 -36.10,220.70 -36.19,227.33 -34.66" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M227.67 -34.83 C226.02 -39.93,223.78 -43.29,222.48 -48.64 M228.05 -35.56 C226.87 -38.63,225.40 -42.20,220.84 -48.18" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="188.58" y="11.54" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="188.58" dy="0">server lúc này</tspan><tspan x="188.58" dy="25">là client</tspan></text>
</g>
<a href="./blind-ssrf-là-gì,-kịch-bản-tấn-công" class="excalidraw-node-link" target="_self" title="Blind SSRF là gì, kịch bản tấn công"><g transform="translate(477.46,402.66)">
<text x="-197.38" y="278.24" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-197.38" dy="0">📍Blind SSRF là gì, kịch bản tấn công</tspan></text>
</g></a>
<g transform="translate(477.46,402.66)">
<text x="-308.96" y="398.24" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-308.96" dy="0">client-side exploit</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-85.39 288.91 C-112.14 291.50,-218.31 290.61,-246.62 305.57 C-274.92 320.53,-253.83 366.80,-255.23 378.68 M-86.30 291.25 C-112.70 293.95,-216.03 292.67,-244.33 306.92 C-272.63 321.17,-254.37 365.02,-256.11 376.77" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-260.16 363.29 C-259.41 368.52,-256.08 372.27,-255.78 377.58 M-260.51 364.01 C-258.94 369.60,-256.25 374.29,-255.20 377.33" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-254.37 377.13 C-252.42 374.02,-248.03 369.40,-246.69 365.65 M-254.72 377.85 C-251.88 373.66,-247.94 368.56,-246.12 365.40" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="-85.80" y="407.33" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-85.80" dy="0">redirect</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-56.96 306.00 C-54.64 325.67,-52.52 343.11,-48.20 382.13 M-58.33 306.89 C-57.40 323.80,-53.92 341.19,-48.76 381.24" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-58.60 369.21 C-54.43 373.49,-52.41 375.15,-47.90 381.35 M-58.58 369.94 C-55.02 373.44,-51.71 378.82,-48.83 380.72" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-49.52 381.15 C-46.31 379.30,-45.07 374.85,-42.10 367.52 M-49.49 381.87 C-47.18 375.99,-45.06 372.01,-43.03 366.89" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="44.02" y="404.56" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="44.02" dy="0">dos bằng</tspan><tspan x="44.02" dy="25">cách giữ</tspan><tspan x="44.02" dy="25">kết nối mở</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-49.05 302.48 C-3.81 327.21,39.35 350.06,86.78 379.47 M-49.89 304.65 C4.39 331.71,57.98 362.04,87.24 378.70" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M71.81 378.24 C78.69 379.29,82.18 379.98,87.51 378.67 M72.23 378.42 C78.28 378.21,81.96 378.18,87.35 378.13" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.80 377.84 C86.11 374.63,82.13 371.28,79.66 365.88 M87.23 378.02 C85.74 373.77,81.96 369.70,79.50 365.34" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="185.78" y="408.77" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="185.78" dy="0">respond về</tspan><tspan x="185.78" dy="25">server payload</tspan><tspan x="185.78" dy="25">mã RCE</tspan></text>
</g>
<g transform="translate(477.46,402.66)">
<path d="M-29.91 303.85 C4.54 306.77,135.44 307.25,178.44 321.42 C221.43 335.59,219.99 377.47,228.07 388.87 M-28.21 303.19 C6.54 305.69,137.95 305.24,180.61 319.69 C223.28 334.14,220.04 377.99,227.77 389.89" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M212.82 382.05 C219.40 386.75,222.57 386.54,228.12 388.99 M214.31 382.90 C219.12 384.82,223.62 388.07,226.54 388.99" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M226.39 388.45 C227.74 385.44,225.62 377.60,226.87 374.04 M227.88 389.30 C227.14 383.03,226.04 378.22,225.30 374.04" stroke="#1e1e1e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(477.46,402.66)">
<text x="-278.83" y="-342.66" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-278.83" dy="0">#ssrf</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>


### 🔗 Các bài viết liên kết trong sơ đồ

- [[Blind SSRF là gì, kịch bản tấn công]]
