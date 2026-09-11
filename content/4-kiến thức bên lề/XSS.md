---
title: "XSS"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-2dd75fd0">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1038 1372" width="1038" height="1372" class="excalidraw-svg" data-width="1038" data-height="1372">
<g transform="translate(-12.37,-217.19)">
<text x="54.74" y="277.19" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="54.74" dy="0">Reflected XSS (XSS phản chiếu)</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="207.08" y="387.65" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="207.08" dy="0">request (thường là tham số URL hoặc</tspan><tspan x="207.08" dy="25">form)</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="88.11" y="343.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="88.11" dy="0">Mã độc được nhúng trong</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="52.37" y="536.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="52.37" dy="0">Stored XSS (XSS lưu trữ)</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="126.63" y="597.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="126.63" dy="0">lưu vĩnh viễn trên server</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M97.00 547.52 L97.67 547.52 L97.67 548.85 L98.33 549.52 L98.33 552.85 L99.00 556.19 L99.00 560.19 L99.00 564.19 L100.33 575.52 L101.00 579.52 L101.00 581.52 L101.67 583.52 L101.67 585.52 L101.67 587.52 L101.67 588.19 L101.67 588.85 L101.67 589.52 L101.67 590.19 L102.33 590.19 L103.67 590.19 L104.33 590.19 L105.00 590.19 L106.33 590.19 L106.33 589.52 L107.67 589.52 L109.00 589.52 L109.67 588.85 L110.33 588.85 L111.67 588.85 L113.00 588.85 L114.33 588.85 L115.00 588.85 L115.67 588.85 L115.67 588.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M115.67 581.52 L117.67 583.52 L118.33 584.85 L119.00 585.52 L119.67 586.85 L120.33 588.19 L120.33 590.19 L121.00 591.52 L120.33 595.52 L119.00 597.52 L115.00 600.19 L110.33 603.52 L110.33 603.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M113.67 726.19 L113.67 726.85 L114.33 728.19 L114.33 728.85 L114.33 730.19 L115.00 732.19 L115.00 733.52 L115.00 735.52 L115.00 737.52 L115.00 739.52 L115.00 740.85 L115.00 743.52 L115.00 744.85 L115.00 747.52 L115.00 749.52 L114.33 751.52 L114.33 752.19 L114.33 754.19 L114.33 755.52 L114.33 756.85 L114.33 758.19 L114.33 759.52 L114.33 760.85 L114.33 762.19 L114.33 763.52 L114.33 764.85 L114.33 766.19 L114.33 767.52 L114.33 768.85 L114.33 769.52 L114.33 770.19 L114.33 770.85 L114.33 772.19 L114.33 772.85 L114.33 774.19 L113.67 774.85 L113.67 776.19 L113.67 776.85 L113.67 777.52 L113.67 778.19 L113.67 778.85 L113.67 779.52 L113.67 780.19 L114.33 780.19 L115.67 780.19 L117.00 779.52 L119.67 779.52 L121.00 778.85 L123.67 778.85 L125.67 778.19 L127.67 778.19 L129.00 777.52 L131.00 777.52 L133.00 776.85 L135.00 776.85 L135.67 776.85 L136.33 776.85 L137.00 776.85 L137.00 776.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M133.00 766.85 L135.67 768.85 L137.00 770.19 L137.67 771.52 L139.00 774.19 L139.67 775.52 L140.33 779.52 L140.33 780.85 L140.33 781.52 L138.33 782.19 L137.00 783.52 L133.67 784.85 L129.67 784.85 L126.33 784.85 L126.33 784.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M65.67 279.52 L65.67 280.85 L65.67 281.52 L67.00 282.85 L68.33 285.52 L69.00 288.19 L69.67 290.85 L71.00 294.85 L72.33 300.85 L72.33 302.19 L73.00 304.19 L73.00 307.52 L73.00 310.19 L73.67 314.19 L74.33 316.19 L75.00 318.85 L75.67 321.52 L75.67 322.85 L76.33 324.85 L76.33 325.52 L76.33 326.19 L76.33 326.85 L77.00 327.52 L77.00 328.19 L77.00 328.85 L77.00 329.52 L77.00 330.19 L77.00 330.85 L77.00 332.19 L77.00 333.52 L76.33 334.19 L76.33 334.85 L75.67 336.85 L75.67 337.52 L75.67 338.19 L75.00 339.52 L75.00 340.19 L75.00 340.85 L75.00 341.52 L75.00 342.19 L75.67 342.19 L76.33 342.19 L77.00 342.19 L77.67 341.52 L78.33 341.52 L79.00 341.52 L79.67 341.52 L80.33 341.52 L81.00 341.52 L81.67 341.52 L82.33 341.52 L83.00 340.85 L83.67 340.85 L84.33 340.85 L85.00 340.85 L85.67 340.85 L86.33 340.85 L86.33 340.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M88.33 336.85 L89.67 337.52 L89.67 338.19 L90.33 338.19 L91.00 339.52 L92.33 340.19 L92.33 340.85 L92.33 342.19 L92.33 342.85 L91.67 343.52 L89.67 344.85 L87.00 345.52 L83.00 346.85 L79.67 348.19 L79.00 348.19 L79.00 348.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="149.25" y="762.25" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="149.25" dy="0">quá trình khai thác</tspan><tspan x="149.25" dy="25">xảy ra ở phía client</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="64.33" y="714.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="64.33" dy="0">DOM‑based XSS</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M113.67 778.19 L113.67 779.52 L113.67 780.19 L113.67 782.19 L113.67 783.52 L113.67 784.85 L113.67 786.19 L113.67 787.52 L113.67 788.85 L113.67 790.85 L113.67 792.19 L113.67 793.52 L113.00 795.52 L113.00 796.19 L113.00 798.19 L113.00 799.52 L112.33 801.52 L112.33 802.85 L112.33 804.19 L112.33 805.52 L111.67 807.52 L111.67 808.85 L111.00 810.19 L111.00 811.52 L110.33 813.52 L110.33 814.85 L110.33 815.52 L109.67 816.85 L109.67 818.19 L109.67 818.85 L109.67 819.52 L109.67 820.19 L109.00 821.52 L109.00 822.19 L109.00 822.85 L109.00 824.19 L109.00 824.85 L109.00 825.52 L109.00 826.19 L109.00 826.85 L109.00 827.52 L109.00 828.19 L109.00 828.85 L109.00 829.52 L109.00 830.19 L109.00 830.85 L109.00 831.52 L109.00 832.19 L109.00 832.85 L109.00 833.52 L109.00 834.19 L109.00 834.85 L109.00 835.52 L109.00 836.19 L109.00 836.85 L109.67 836.85 L110.33 836.85 L112.33 836.85 L115.00 836.85 L117.67 836.19 L120.33 836.19 L123.00 835.52 L127.00 835.52 L129.67 835.52 L132.33 835.52 L135.00 835.52 L135.67 834.85 L137.00 834.85 L138.33 834.85 L139.00 834.85 L140.33 834.85 L142.33 834.19 L143.67 834.19 L144.33 834.19 L145.00 834.19 L145.00 834.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M143.00 825.52 L143.67 826.19 L146.33 827.52 L146.33 828.19 L146.33 828.85 L147.00 829.52 L147.67 830.85 L148.33 831.52 L148.33 832.19 L149.00 833.52 L149.00 834.19 L149.00 834.85 L149.00 836.19 L148.33 837.52 L147.67 838.19 L147.00 839.52 L146.33 840.85 L146.33 841.52 L145.67 842.19 L145.00 842.19 L145.00 842.85 L145.00 842.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="226.91" y="848.25" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="226.91" dy="0">eval()</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="212.52" y="895.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="212.52" dy="0">innerHTML.</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="392.33" y="982.25" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="392.33" dy="0">web.com/...script</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="225.55" y="950.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="225.55" dy="0">localStorage</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="177.11" y="1065.05" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="177.11" dy="0">giúp trang web nhớ bạn đang dùng Chế độ</tspan><tspan x="177.11" dy="25">ban đêm (Dark mode) hay lưu nháp tin</tspan><tspan x="177.11" dy="25">nhắn.</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M279.00 956.85 L279.00 957.52 L279.00 959.52 L279.00 962.85 L279.00 965.52 L279.00 976.85 L279.00 978.19 L279.00 981.52 L279.67 985.52 L279.67 989.52 L279.67 992.85 L280.33 995.52 L280.33 1000.19 L281.00 1002.85 L281.00 1005.52 L281.00 1008.19 L281.00 1010.85 L281.67 1013.52 L282.33 1015.52 L283.00 1016.19 L283.67 1018.19 L284.33 1019.52 L285.00 1020.19 L285.00 1021.52 L285.00 1022.19 L285.67 1022.85 L286.33 1023.52 L287.00 1024.19 L287.67 1025.52 L287.67 1026.85 L288.33 1027.52 L289.00 1028.19 L289.00 1029.52 L289.00 1030.19 L289.00 1030.85 L289.00 1031.52 L289.00 1032.19 L289.00 1033.52 L289.00 1034.19 L289.00 1034.85 L289.00 1035.52 L289.00 1036.19 L289.00 1036.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M269.00 1020.19 L271.67 1022.19 L272.33 1022.19 L273.00 1023.52 L275.00 1024.85 L276.33 1026.85 L277.67 1028.19 L283.67 1034.85 L284.33 1035.52 L285.67 1037.52 L287.67 1038.85 L289.00 1040.19 L290.33 1041.52 L291.67 1042.85 L292.33 1042.85 L293.00 1043.52 L293.67 1043.52 L293.67 1042.19 L294.33 1039.52 L294.33 1036.85 L295.00 1034.19 L296.33 1031.52 L296.33 1028.19 L298.33 1025.52 L299.67 1022.85 L300.33 1020.85 L303.67 1018.19 L305.00 1016.19 L306.33 1013.52 L307.00 1013.52 L307.00 1013.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="183.74" y="1183.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="183.74" dy="0">document.referrer</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M251.67 1191.52 L251.67 1193.52 L251.67 1194.85 L251.67 1196.85 L251.67 1198.85 L251.67 1204.19 L251.67 1204.85 L251.67 1206.19 L251.67 1208.19 L251.67 1210.19 L251.67 1211.52 L251.67 1213.52 L251.67 1214.85 L251.67 1216.19 L251.67 1216.85 L251.67 1217.52 L251.67 1218.19 L252.33 1218.19 L253.00 1218.19 L253.67 1218.19 L254.33 1218.19 L256.33 1218.19 L257.67 1218.19 L260.33 1218.19 L264.33 1216.85 L267.67 1215.52 L272.33 1214.85 L276.33 1213.52 L281.00 1212.85 L284.33 1212.19 L287.67 1211.52 L289.67 1211.52 L291.67 1211.52 L293.00 1211.52 L293.67 1211.52 L293.67 1211.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M287.00 1204.19 L289.67 1204.19 L290.33 1204.85 L291.67 1205.52 L293.00 1206.19 L293.67 1207.52 L293.67 1208.19 L293.67 1208.85 L293.67 1210.19 L291.67 1211.52 L289.67 1213.52 L286.33 1214.85 L285.67 1215.52 L285.67 1215.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="312.84" y="1226.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="312.84" dy="0"> thông tin ngầm gọi là &quot;Người giới thiệu&quot;</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="161.71" y="1294.32" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="161.71" dy="0">bấm vào một đường link từ trang web A</tspan><tspan x="161.71" dy="25">để chuyển sang trang web B</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="247.00" y="1389.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="247.00" dy="0">evil.com</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="439.67" y="1383.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="439.67" dy="0">bank.com</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M177.67 1410.85 L178.33 1412.85 L179.00 1414.85 L180.33 1416.85 L181.67 1418.19 L183.67 1420.19 L185.67 1421.52 L195.00 1424.19 L196.33 1424.19 L196.33 1424.85 L199.67 1424.85 L202.33 1425.52 L206.33 1426.19 L210.33 1426.19 L215.00 1426.19 L219.67 1426.19 L224.33 1426.19 L229.67 1426.19 L235.67 1424.85 L239.67 1424.85 L243.67 1423.52 L247.00 1421.52 L251.00 1419.52 L254.33 1417.52 L257.67 1416.19 L259.67 1414.19 L261.67 1412.85 L263.67 1410.85 L265.67 1409.52 L265.67 1408.85 L266.33 1407.52 L267.00 1406.85 L267.00 1406.19 L267.67 1405.52 L267.67 1404.85 L268.33 1403.52 L269.00 1402.19 L269.67 1401.52 L269.67 1400.85 L269.67 1400.19 L270.33 1400.19 L270.33 1399.52 L271.00 1398.85 L271.00 1398.19 L271.67 1398.19 L271.67 1397.52 L271.67 1396.85 L271.67 1396.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M262.33 1396.85 L263.00 1397.52 L263.67 1397.52 L264.33 1397.52 L265.67 1397.52 L269.00 1397.52 L269.67 1396.85 L270.33 1396.19 L271.67 1395.52 L272.33 1395.52 L273.00 1394.85 L273.67 1394.85 L274.33 1394.85 L274.33 1396.19 L274.33 1397.52 L274.33 1400.19 L274.33 1402.85 L273.00 1406.85 L271.00 1410.19 L269.00 1415.52 L266.33 1420.19 L265.00 1420.85 L265.00 1420.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="196.33" y="1459.52" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="196.33" dy="0">bấm link</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M310.33 1406.19 L311.67 1406.19 L313.00 1406.19 L313.67 1406.85 L315.67 1408.19 L317.00 1409.52 L319.00 1410.85 L321.67 1412.85 L323.00 1414.19 L325.67 1416.85 L328.33 1418.19 L331.00 1420.85 L334.33 1422.85 L337.67 1425.52 L341.67 1426.85 L345.67 1429.52 L349.00 1430.85 L353.00 1432.19 L356.33 1433.52 L362.33 1434.19 L367.00 1435.52 L373.00 1435.52 L379.00 1436.19 L387.67 1436.19 L396.33 1436.19 L403.00 1435.52 L409.00 1434.85 L415.00 1434.19 L420.33 1433.52 L425.67 1433.52 L429.67 1432.85 L433.67 1431.52 L438.33 1429.52 L443.00 1428.19 L447.00 1425.52 L451.67 1422.85 L456.33 1420.19 L461.00 1417.52 L465.67 1415.52 L469.67 1413.52 L473.00 1412.19 L477.00 1410.19 L480.33 1408.19 L483.00 1407.52 L485.00 1405.52 L487.67 1404.85 L489.00 1403.52 L491.00 1402.19 L492.33 1401.52 L493.00 1400.85 L493.67 1400.85 L494.33 1400.85 L495.67 1400.19 L496.33 1400.19 L496.33 1399.52 L497.67 1398.19 L498.33 1397.52 L499.00 1396.85 L499.67 1396.85 L500.33 1396.19 L500.33 1395.52 L500.33 1395.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M487.00 1396.19 L487.67 1396.19 L488.33 1396.19 L490.33 1396.19 L491.67 1395.52 L495.67 1393.52 L497.00 1392.85 L498.33 1392.85 L500.33 1392.85 L501.00 1392.19 L501.67 1392.19 L502.33 1392.19 L501.67 1393.52 L501.00 1394.85 L498.33 1397.52 L497.00 1400.19 L494.33 1402.85 L493.00 1405.52 L490.33 1408.19 L489.00 1410.85 L489.00 1410.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="415.67" y="1456.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="415.67" dy="0">chuyển hướng</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M503.00 1360.85 L502.33 1360.85 L501.67 1360.85 L500.33 1360.19 L499.00 1360.19 L497.00 1360.19 L495.67 1360.19 L487.67 1360.19 L486.33 1360.19 L485.67 1360.19 L481.67 1360.19 L477.00 1360.19 L473.67 1360.19 L470.33 1360.85 L466.33 1360.85 L463.00 1361.52 L459.67 1362.85 L455.67 1363.52 L452.33 1364.85 L449.00 1365.52 L446.33 1366.85 L444.33 1368.19 L441.00 1369.52 L439.00 1370.85 L437.00 1372.19 L437.00 1373.52 L435.67 1374.85 L435.67 1375.52 L435.67 1377.52 L435.67 1378.85 L436.33 1379.52 L437.00 1380.85 L438.33 1381.52 L439.67 1382.19 L441.00 1382.85 L443.67 1382.85 L446.33 1384.19 L448.33 1384.19 L451.67 1384.85 L455.67 1385.52 L459.67 1386.19 L464.33 1386.85 L469.67 1386.85 L476.33 1386.85 L482.33 1386.85 L489.67 1387.52 L495.67 1387.52 L501.00 1387.52 L507.00 1388.19 L513.00 1388.19 L518.33 1388.19 L523.00 1388.19 L527.67 1388.19 L531.67 1388.19 L534.33 1388.19 L537.00 1388.19 L540.33 1388.19 L543.00 1388.19 L545.67 1387.52 L547.67 1386.85 L549.67 1385.52 L551.00 1384.85 L552.33 1383.52 L553.67 1381.52 L555.00 1378.85 L555.00 1376.19 L555.67 1373.52 L555.67 1370.85 L555.67 1368.85 L554.33 1366.85 L552.33 1364.85 L550.33 1362.19 L547.00 1360.19 L543.67 1358.19 L539.00 1356.85 L534.33 1354.85 L528.33 1353.52 L524.33 1353.52 L518.33 1352.85 L513.00 1352.85 L508.33 1352.85 L502.33 1352.85 L497.67 1353.52 L493.00 1354.19 L490.33 1355.52 L487.67 1356.19 L486.33 1356.19 L486.33 1356.85 L486.33 1357.52 L486.33 1358.19 L486.33 1358.85 L486.33 1358.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M551.00 1357.52 L551.67 1357.52 L552.33 1357.52 L553.67 1357.52 L554.33 1357.52 L555.67 1358.19 L557.00 1358.19 L557.67 1358.19 L559.00 1358.85 L559.67 1358.85 L560.33 1358.85 L561.00 1359.52 L561.67 1359.52 L562.33 1359.52 L563.00 1359.52 L563.67 1359.52 L564.33 1359.52 L565.67 1359.52 L567.00 1359.52 L567.67 1359.52 L569.67 1359.52 L571.00 1359.52 L572.33 1359.52 L573.67 1358.85 L575.00 1358.19 L575.67 1357.52 L576.33 1356.85 L577.67 1356.19 L578.33 1355.52 L579.00 1354.19 L579.00 1352.85 L579.67 1350.85 L580.33 1348.85 L580.33 1347.52 L580.33 1345.52 L580.33 1344.85 L580.33 1343.52 L579.67 1342.85 L579.67 1341.52 L578.33 1341.52 L577.67 1340.85 L576.33 1340.85 L575.67 1340.85 L575.00 1340.85 L573.67 1340.85 L572.33 1340.85 L571.67 1342.19 L570.33 1344.19 L569.67 1344.85 L569.00 1346.85 L568.33 1348.19 L568.33 1349.52 L568.33 1352.19 L568.33 1353.52 L568.33 1356.19 L568.33 1357.52 L569.00 1359.52 L569.67 1360.85 L570.33 1362.85 L570.33 1364.19 L571.00 1364.85 L571.00 1365.52 L571.00 1366.19 L571.00 1366.85 L571.00 1367.52 L571.00 1368.19 L571.00 1368.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="601.00" y="1370.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="601.00" dy="0">lấy </tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="637.07" y="1370.25" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="637.07" dy="0">document.referrer</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M666.33 1376.85 L667.00 1376.85 L667.67 1377.52 L668.33 1378.85 L669.00 1380.85 L669.67 1382.85 L671.00 1385.52 L671.00 1387.52 L671.00 1390.85 L671.67 1398.19 L671.67 1398.85 L671.67 1399.52 L671.67 1402.19 L671.67 1404.85 L671.67 1406.19 L670.33 1409.52 L669.67 1410.85 L668.33 1413.52 L667.67 1415.52 L667.00 1417.52 L665.67 1418.85 L664.33 1420.85 L664.33 1422.19 L663.67 1422.85 L663.00 1423.52 L662.33 1424.19 L661.67 1424.85 L661.67 1425.52 L661.00 1425.52 L661.00 1425.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M655.67 1410.19 L656.33 1411.52 L656.33 1412.19 L656.33 1413.52 L657.67 1415.52 L659.00 1419.52 L659.67 1421.52 L660.33 1425.52 L661.00 1427.52 L663.00 1432.85 L663.00 1433.52 L663.00 1434.19 L663.67 1434.19 L665.67 1432.19 L667.67 1429.52 L670.33 1426.19 L673.67 1422.85 L673.67 1422.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="619.00" y="1467.72" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="619.00" dy="0">in ra màn hình .</tspan><tspan x="619.00" dy="25">thực thi</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M178.33 838.85 L183.00 837.52 L184.33 837.52 L187.00 836.85 L190.33 836.85 L193.00 836.19 L196.33 836.19 L197.67 836.19 L198.33 836.19 L199.00 836.19 L199.67 836.19 L200.33 836.19 L201.67 835.52 L202.33 835.52 L203.67 835.52 L204.33 835.52 L205.67 835.52 L206.33 835.52 L207.00 835.52 L207.67 835.52 L207.67 835.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M207.67 825.52 L208.33 826.85 L209.00 828.19 L209.00 828.85 L209.67 830.19 L209.67 830.85 L209.67 831.52 L209.67 832.19 L209.67 832.85 L209.67 834.19 L208.33 835.52 L207.00 836.19 L205.00 837.52 L203.00 838.19 L203.00 838.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M177.00 844.19 L177.00 844.85 L177.00 846.85 L177.00 851.52 L177.00 854.85 L177.00 857.52 L176.33 860.85 L176.33 863.52 L175.67 866.19 L175.67 868.19 L175.67 870.19 L175.00 872.19 L175.00 874.85 L175.00 876.85 L175.00 878.19 L174.33 879.52 L174.33 880.19 L174.33 880.85 L174.33 881.52 L174.33 882.19 L175.00 882.19 L175.00 882.85 L175.67 882.85 L176.33 882.85 L177.00 882.85 L177.67 882.85 L179.00 882.85 L180.33 882.85 L183.00 882.85 L185.67 882.19 L187.00 882.19 L190.33 881.52 L192.33 881.52 L193.67 881.52 L194.33 881.52 L195.67 881.52 L196.33 881.52 L197.00 881.52 L197.00 881.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M203.67 874.85 L203.67 875.52 L203.67 876.19 L203.67 877.52 L203.67 878.85 L203.00 882.19 L203.00 882.85 L203.00 883.52 L203.00 884.19 L203.00 884.85 L203.00 885.52 L202.33 886.19 L200.33 886.85 L199.00 886.85 L195.00 886.85 L194.33 886.85 L194.33 886.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M179.67 884.19 L179.67 885.52 L179.00 887.52 L178.33 890.19 L177.67 894.19 L177.67 895.52 L177.00 898.19 L175.67 902.19 L175.00 905.52 L174.33 908.85 L174.33 912.85 L173.67 916.19 L172.33 919.52 L172.33 922.19 L171.67 925.52 L171.00 926.85 L171.00 929.52 L170.33 930.85 L170.33 932.19 L170.33 932.85 L170.33 933.52 L170.33 934.19 L170.33 934.85 L170.33 935.52 L170.33 936.19 L170.33 936.85 L170.33 937.52 L170.33 938.19 L171.00 938.19 L171.00 938.85 L171.67 938.85 L171.67 939.52 L172.33 939.52 L173.67 939.52 L174.33 939.52 L176.33 940.19 L178.33 940.19 L181.67 940.19 L183.67 940.19 L185.67 940.19 L188.33 940.19 L190.33 940.19 L193.00 940.19 L195.67 940.19 L197.00 940.19 L199.00 940.19 L201.00 940.19 L201.00 940.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M203.00 933.52 L204.33 933.52 L205.00 933.52 L205.00 934.85 L205.67 936.19 L206.33 938.19 L206.33 938.85 L207.00 939.52 L207.00 940.19 L207.00 940.85 L205.67 941.52 L201.67 942.19 L201.67 942.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M169.67 939.52 L169.67 941.52 L169.67 942.85 L169.67 946.19 L169.00 948.85 L169.00 952.19 L167.67 955.52 L167.00 960.19 L165.67 964.19 L165.00 969.52 L163.67 974.19 L163.00 977.52 L161.67 982.19 L161.00 986.85 L159.67 990.85 L159.00 993.52 L157.67 998.85 L157.67 1002.19 L157.00 1007.52 L157.00 1011.52 L156.33 1015.52 L155.67 1018.85 L155.00 1023.52 L154.33 1028.19 L153.67 1032.19 L153.00 1036.85 L151.67 1040.85 L151.00 1044.19 L149.67 1050.19 L149.67 1054.19 L148.33 1058.19 L147.67 1061.52 L147.00 1064.85 L146.33 1068.19 L146.33 1071.52 L145.00 1074.85 L144.33 1078.85 L143.67 1082.85 L142.33 1086.19 L142.33 1090.19 L141.67 1092.85 L141.00 1095.52 L139.67 1098.85 L139.00 1102.19 L138.33 1104.85 L138.33 1108.19 L138.33 1110.19 L137.67 1113.52 L136.33 1116.19 L136.33 1118.85 L135.67 1121.52 L135.00 1124.19 L134.33 1126.19 L134.33 1128.85 L134.33 1130.85 L133.67 1132.85 L133.67 1136.19 L133.00 1138.19 L133.00 1140.85 L133.00 1143.52 L133.00 1144.85 L133.00 1147.52 L133.00 1148.85 L132.33 1151.52 L132.33 1153.52 L132.33 1155.52 L131.67 1157.52 L131.67 1159.52 L131.67 1160.19 L131.67 1162.19 L131.67 1164.19 L131.67 1165.52 L131.67 1167.52 L131.00 1168.19 L131.00 1169.52 L131.00 1170.85 L131.00 1171.52 L130.33 1172.19 L130.33 1172.85 L131.00 1172.85 L132.33 1172.85 L133.67 1172.85 L135.00 1172.85 L137.00 1172.85 L139.00 1172.85 L141.67 1172.85 L145.67 1172.85 L147.00 1172.85 L149.00 1172.85 L150.33 1172.85 L153.00 1172.85 L153.67 1172.85 L155.00 1172.85 L155.67 1172.85 L156.33 1172.85 L157.00 1172.85 L157.67 1172.85 L158.33 1172.85 L159.00 1172.85 L159.67 1172.85 L160.33 1172.85 L161.00 1172.85 L161.67 1172.85 L162.33 1172.85 L163.00 1172.85 L163.00 1172.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M166.33 1163.52 L167.67 1163.52 L168.33 1164.19 L169.00 1164.85 L169.67 1166.19 L169.67 1168.19 L169.67 1169.52 L169.67 1170.85 L169.00 1172.19 L166.33 1174.19 L163.00 1175.52 L159.00 1178.19 L155.00 1180.19 L151.00 1182.85 L149.00 1183.52 L149.00 1184.19 L149.00 1184.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="349.14" y="837.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="349.14" dy="0">Nó nhận vào một chuỗi chữ viết (string)</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M294.33 844.19 L295.00 843.52 L296.33 842.85 L297.67 841.52 L299.00 840.85 L301.00 838.85 L304.33 836.85 L307.00 836.19 L310.33 834.85 L313.67 833.52 L317.00 832.85 L319.00 832.85 L320.33 832.19 L321.67 832.19 L323.00 831.52 L323.67 831.52 L324.33 831.52 L325.67 831.52 L326.33 831.52 L327.67 831.52 L328.33 831.52 L329.67 831.52 L331.00 831.52 L332.33 831.52 L333.00 831.52 L334.33 831.52 L335.67 831.52 L336.33 831.52 L336.33 831.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M331.67 821.52 L332.33 821.52 L334.33 822.19 L335.67 822.85 L336.33 824.19 L337.67 824.19 L340.33 827.52 L340.33 828.19 L340.33 828.85 L340.33 830.19 L340.33 831.52 L340.33 832.19 L340.33 833.52 L339.67 835.52 L337.67 836.85 L337.00 838.19 L335.00 838.85 L333.00 839.52 L331.00 840.19 L330.33 840.19 L330.33 840.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M496.33 842.85 L496.33 844.19 L496.33 844.85 L496.33 846.19 L496.33 847.52 L496.33 851.52 L496.33 852.19 L496.33 852.85 L496.33 854.19 L497.00 854.85 L497.00 856.85 L497.67 856.85 L497.67 858.19 L498.33 859.52 L498.33 860.19 L498.33 860.85 L498.33 861.52 L499.00 861.52 L499.00 862.19 L499.67 862.19 L500.33 862.85 L501.67 862.85 L502.33 863.52 L505.00 863.52 L507.00 863.52 L510.33 863.52 L514.33 863.52 L517.67 863.52 L520.33 863.52 L523.67 863.52 L525.67 863.52 L529.67 863.52 L531.67 863.52 L533.00 863.52 L534.33 863.52 L535.00 863.52 L536.33 863.52 L537.00 862.85 L537.67 862.85 L539.00 862.19 L540.33 862.19 L541.00 862.19 L543.00 862.19 L545.00 862.19 L547.67 862.19 L549.67 862.19 L551.67 862.19 L553.00 862.19 L553.67 862.19 L554.33 862.19 L554.33 862.19" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M548.33 853.52 L550.33 854.85 L551.00 855.52 L552.33 856.85 L553.00 857.52 L553.67 858.19 L554.33 859.52 L554.33 860.85 L555.00 860.85 L554.33 864.19 L553.67 864.19 L552.33 864.19 L549.67 866.19 L545.67 867.52 L541.00 868.19 L535.00 869.52 L534.33 869.52 L534.33 869.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="613.20" y="881.72" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="613.20" dy="0">ép trình duyệt phải biên dịch, chạy đoạn</tspan><tspan x="613.20" dy="25">chữ đó như một đoạn code lập trình thực</tspan><tspan x="613.20" dy="25">thụ.</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="426.24" y="758.92" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="426.24" dy="0">alert()</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="508.19" y="754.25" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="508.19" dy="0">bật lên một hộp thoại (popup)</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M472.67 766.19 L473.33 766.85 L474.00 768.19 L475.33 768.85 L476.67 769.52 L479.33 771.52 L484.67 773.52 L484.67 774.19 L486.67 774.85 L488.00 774.85 L490.67 776.19 L494.00 776.19 L497.33 776.85 L501.33 776.85 L505.33 776.85 L508.67 776.85 L513.33 776.19 L518.00 774.85 L521.33 774.19 L526.00 773.52 L530.00 771.52 L532.67 770.19 L536.00 769.52 L538.67 768.19 L540.67 766.85 L542.67 765.52 L543.33 764.85 L544.67 763.52 L546.00 762.19 L546.67 761.52 L548.00 760.19 L549.33 759.52 L549.33 758.85 L550.00 758.19 L550.67 758.19 L550.67 757.52 L551.33 757.52 L551.33 757.52" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M531.33 758.85 L534.67 758.19 L535.33 758.19 L537.33 758.19 L538.67 758.19 L542.00 757.52 L545.33 756.85 L548.00 756.19 L550.67 755.52 L558.00 754.19 L559.33 753.52 L560.67 753.52 L562.00 752.85 L562.67 752.85 L563.33 752.85 L562.67 754.19 L561.33 756.19 L559.33 758.19 L556.67 761.52 L554.67 764.19 L550.67 768.85 L547.33 772.19 L547.33 772.85 L547.33 772.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="143.23" y="1543.59" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="143.23" dy="0">innerHTML</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<text x="338.18" y="898.51" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="12.857142857142856" fill="#1e1e1e" text-anchor="start"><tspan x="338.18" dy="0">cho nó một chuỗi chữ như &lt;b&gt;Chào</tspan><tspan x="338.18" dy="16.07142857142857">bạn&lt;/b&gt;, nó sẽ hiểu &lt;b&gt; là lệnh in đậm.</tspan></text>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M280.67 904.19 L281.33 904.19 L282.00 904.85 L283.33 905.52 L284.00 906.19 L284.00 906.85 L287.33 908.85 L288.00 908.85 L288.67 909.52 L290.67 910.19 L292.67 910.19 L295.33 910.85 L297.33 910.85 L300.67 910.85 L303.33 910.85 L305.33 910.85 L308.00 911.52 L310.67 911.52 L312.67 911.52 L314.67 911.52 L316.00 911.52 L318.00 911.52 L318.67 911.52 L320.00 911.52 L321.33 911.52 L322.67 911.52 L323.33 911.52 L324.67 911.52 L326.00 911.52 L326.67 911.52 L327.33 911.52 L328.00 911.52 L328.67 911.52 L329.33 910.85 L329.33 910.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-12.37,-217.19)">
<path d="M327.33 906.85 L328.67 907.52 L330.67 910.85 L331.33 912.19 L331.33 912.85 L331.33 913.52 L331.33 914.19 L330.67 915.52 L328.00 916.19 L325.33 916.19 L322.00 916.85 L318.67 916.85 L318.67 916.85" stroke="#1e1e1e" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>
