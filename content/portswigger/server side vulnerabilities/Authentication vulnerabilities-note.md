---
title: "Authentication vulnerabilities-note"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-11xgxt">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1255 1500" class="excalidraw-svg" data-width="1255" data-height="1500">
<g transform="translate(1450.33,702.57)">
<text x="-1387.42" y="-625.68" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="17.990350697994668" fill="#1e1e1e" text-anchor="start"><tspan x="-1387.42" dy="0">authentication vs authorize ?</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1393.99 -663.76 C-1339.30 -664.62,-1281.17 -664.65,-1124.98 -663.55 M-1395.10 -661.90 C-1340.96 -661.58,-1286.55 -661.54,-1125.18 -662.82 M-1122.67 -661.14 C-1125.80 -640.64,-1125.97 -619.08,-1125.40 -604.86 M-1124.42 -662.22 C-1124.73 -647.57,-1124.97 -634.28,-1124.38 -604.67 M-1122.96 -605.61 C-1208.82 -606.77,-1293.40 -607.63,-1393.78 -604.35 M-1123.75 -605.12 C-1220.46 -606.18,-1317.56 -605.48,-1395.09 -604.93 M-1394.17 -605.94 C-1396.33 -619.94,-1395.35 -634.78,-1396.24 -660.64 M-1394.92 -604.72 C-1393.83 -621.85,-1394.80 -637.72,-1394.80 -663.39" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1308.33" y="-458.49" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-1308.33" dy="0">brute force</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1215.67" y="-392.49" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#343a40" text-anchor="start"><tspan x="-1215.67" dy="0">sử dụng Burp instruder </tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-977.83 -398.73 C-961.48 -397.87,-941.94 -397.70,-907.53 -397.18 M-978.91 -400.57 C-951.56 -399.28,-922.47 -399.37,-908.58 -397.85" stroke="#343a40" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-921.69 -390.15 C-917.56 -394.47,-912.86 -394.37,-907.08 -398.08 M-921.44 -391.47 C-916.85 -393.54,-912.54 -395.57,-908.38 -398.55" stroke="#343a40" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-908.56 -397.41 C-910.85 -401.68,-912.56 -401.70,-919.93 -405.82 M-908.32 -398.73 C-912.15 -400.91,-916.26 -403.10,-921.23 -406.28" stroke="#343a40" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-875.00" y="-392.42" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#343a40" text-anchor="start"><tspan x="-875.00" dy="0">4 kiểu tấn công</tspan></text>
</g>
<a href="../../0-asset/pasted-image-20260511225223_776.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260511225223_776.png"><g transform="translate(1450.33,702.57)">
<image x="-1373.9831307506784" y="-367.322822938728" width="1118.5341170162033" height="445.75117157450177" href="../../0-asset/pasted-image-20260511225223_776.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(1450.33,702.57)">
<path d="M-1230.56 -323.69 L-1230.56 -325.40 L-1233.12 -326.25 L-1234.82 -326.25 L-1238.23 -327.95 L-1242.48 -329.65 L-1247.59 -330.51 L-1252.70 -331.36 L-1258.66 -333.06 L-1263.76 -333.91 L-1268.87 -335.61 L-1274.83 -336.46 L-1282.49 -337.32 L-1290.15 -338.17 L-1296.11 -338.17 L-1302.92 -339.02 L-1308.88 -339.02 L-1313.99 -339.02 L-1318.25 -339.02 L-1320.80 -339.02 L-1323.35 -339.02 L-1325.91 -339.02 L-1327.61 -339.02 L-1330.16 -339.02 L-1332.72 -338.17 L-1336.12 -337.32 L-1339.53 -336.46 L-1342.93 -334.76 L-1346.34 -333.91 L-1348.89 -332.21 L-1350.59 -331.36 L-1352.30 -329.65 L-1354.85 -327.95 L-1355.70 -326.25 L-1357.40 -324.55 L-1359.11 -321.99 L-1360.81 -319.44 L-1361.66 -317.74 L-1362.51 -314.33 L-1362.51 -312.63 L-1362.51 -310.07 L-1362.51 -308.37 L-1362.51 -307.52 L-1361.66 -305.82 L-1361.66 -304.97 L-1359.96 -303.26 L-1358.26 -302.41 L-1356.55 -300.71 L-1354.00 -299.01 L-1351.45 -298.16 L-1348.04 -296.45 L-1345.49 -294.75 L-1342.08 -293.90 L-1339.53 -293.05 L-1336.12 -292.20 L-1331.87 -291.35 L-1326.76 -291.35 L-1321.65 -290.50 L-1316.54 -290.50 L-1311.44 -290.50 L-1305.48 -290.50 L-1300.37 -290.50 L-1294.41 -289.64 L-1287.60 -289.64 L-1282.49 -289.64 L-1277.38 -289.64 L-1271.43 -289.64 L-1266.32 -289.64 L-1262.06 -290.50 L-1256.95 -291.35 L-1252.70 -292.20 L-1249.29 -292.20 L-1245.04 -293.90 L-1241.63 -294.75 L-1238.23 -295.60 L-1235.67 -296.45 L-1233.97 -297.31 L-1232.27 -297.31 L-1231.42 -298.16 L-1230.56 -299.01 L-1228.86 -299.86 L-1228.01 -300.71 L-1227.16 -301.56 L-1226.31 -302.41 L-1225.46 -304.12 L-1224.61 -305.82 L-1223.75 -307.52 L-1222.90 -309.22 L-1222.05 -310.93 L-1222.05 -311.78 L-1222.05 -312.63 L-1222.05 -313.48 L-1222.05 -314.33 L-1222.05 -315.18 L-1222.90 -315.18 L-1223.75 -316.03 L-1223.75 -316.88 L-1224.61 -316.88 L-1225.46 -317.74 L-1226.31 -318.59 L-1226.31 -319.44 L-1227.16 -319.44 L-1228.01 -320.29 L-1229.71 -320.29 L-1231.42 -321.14 L-1233.12 -321.99 L-1234.82 -321.99 L-1235.67 -321.99 L-1236.52 -322.84 L-1237.37 -322.84 L-1238.23 -323.69 L-1239.08 -323.69 L-1239.93 -324.55 L-1240.78 -324.55 L-1241.63 -324.55 L-1241.63 -324.55" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1349.74 60.23 L-1349.74 61.08 L-1348.89 61.08 L-1348.04 61.08 L-1346.34 61.08 L-1345.49 61.08 L-1344.64 61.08 L-1342.93 61.08 L-1341.23 61.08 L-1339.53 61.08 L-1337.83 61.08 L-1336.97 61.08 L-1336.12 61.08 L-1334.42 61.08 L-1333.57 61.08 L-1332.72 61.08 L-1331.02 61.08 L-1330.16 61.08 L-1329.31 61.08 L-1328.46 61.08 L-1327.61 61.08 L-1326.76 61.08 L-1325.91 61.08 L-1325.06 61.08 L-1324.21 61.08 L-1323.35 61.08 L-1321.65 61.08 L-1319.95 61.08 L-1319.10 61.08 L-1318.25 61.08 L-1317.39 61.08 L-1316.54 61.08 L-1314.84 61.08 L-1313.14 61.08 L-1312.29 61.08 L-1310.58 61.08 L-1309.73 61.08 L-1308.88 61.08 L-1308.03 61.08 L-1306.33 61.08 L-1305.48 61.08 L-1304.63 60.23 L-1304.63 60.23" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1264.62 61.08 L-1263.76 61.08 L-1262.06 61.08 L-1260.36 61.08 L-1259.51 61.93 L-1256.10 61.93 L-1253.55 62.78 L-1251.00 62.78 L-1246.74 63.64 L-1244.19 64.49 L-1240.78 64.49 L-1236.52 65.34 L-1233.97 65.34 L-1230.56 66.19 L-1227.16 66.19 L-1223.75 66.19 L-1221.20 66.19 L-1219.50 66.19 L-1216.94 66.19 L-1215.24 67.04 L-1213.54 67.04 L-1212.69 67.04 L-1211.84 67.04 L-1211.84 67.04" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-402.27 -301.56 L-403.12 -301.56 L-404.83 -301.56 L-405.68 -301.56 L-408.23 -301.56 L-410.79 -301.56 L-414.19 -301.56 L-417.60 -302.41 L-421.00 -302.41 L-425.26 -303.26 L-430.36 -303.26 L-435.47 -303.26 L-440.58 -303.26 L-445.69 -303.26 L-449.94 -303.26 L-454.20 -303.26 L-459.31 -303.26 L-464.42 -302.41 L-469.52 -301.56 L-473.78 -300.71 L-478.04 -300.71 L-481.44 -299.01 L-484.85 -298.16 L-486.55 -297.31 L-489.10 -296.45 L-490.81 -295.60 L-493.36 -294.75 L-495.06 -292.20 L-497.62 -290.50 L-500.17 -287.94 L-503.57 -286.24 L-505.28 -283.68 L-506.98 -281.13 L-508.68 -279.43 L-509.53 -277.73 L-509.53 -276.87 L-509.53 -276.02 L-509.53 -274.32 L-509.53 -272.62 L-509.53 -270.92 L-509.53 -269.21 L-508.68 -267.51 L-507.83 -266.66 L-506.13 -264.96 L-505.28 -264.11 L-505.28 -263.25 L-504.43 -262.40 L-503.57 -262.40 L-501.87 -261.55 L-501.02 -261.55 L-500.17 -261.55 L-496.76 -260.70 L-494.21 -259.00 L-490.81 -258.15 L-485.70 -257.30 L-479.74 -256.44 L-472.08 -256.44 L-464.42 -255.59 L-457.61 -254.74 L-449.94 -254.74 L-441.43 -254.74 L-432.92 -254.74 L-423.55 -254.74 L-415.04 -254.74 L-405.68 -254.74 L-396.31 -255.59 L-388.65 -256.44 L-382.69 -257.30 L-377.59 -257.30 L-375.03 -259.00 L-371.63 -259.85 L-369.92 -260.70 L-367.37 -261.55 L-366.52 -263.25 L-365.67 -264.96 L-364.82 -266.66 L-364.82 -269.21 L-364.82 -271.77 L-365.67 -275.17 L-368.22 -279.43 L-371.63 -285.39 L-375.88 -291.35 L-380.99 -296.45 L-386.10 -300.71 L-391.21 -304.12 L-396.31 -307.52 L-401.42 -309.22 L-409.93 -310.93 L-412.49 -310.93 L-421.00 -310.93 L-427.81 -310.93 L-433.77 -310.07 L-439.73 -309.22 L-443.13 -308.37 L-445.69 -307.52 L-447.39 -307.52 L-447.39 -306.67 L-447.39 -306.67" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-433.77 -175.57 L-437.17 -175.57 L-439.73 -175.57 L-446.54 -175.57 L-448.24 -175.57 L-455.05 -175.57 L-461.01 -174.72 L-467.82 -174.72 L-474.63 -174.72 L-482.29 -174.72 L-490.81 -173.87 L-499.32 -172.17 L-505.28 -171.32 L-511.24 -169.61 L-517.19 -167.06 L-522.30 -163.65 L-525.71 -161.10 L-530.82 -156.84 L-534.22 -151.74 L-536.77 -146.63 L-539.33 -141.52 L-539.33 -135.56 L-540.18 -128.75 L-540.18 -120.24 L-540.18 -113.43 L-538.48 -104.92 L-535.92 -95.55 L-532.52 -86.19 L-528.26 -76.82 L-524.01 -67.46 L-518.90 -58.95 L-513.79 -50.44 L-507.83 -41.92 L-502.72 -35.11 L-496.76 -29.15 L-489.95 -23.19 L-483.99 -18.94 L-478.04 -16.38 L-471.23 -12.98 L-466.12 -12.13 L-460.16 -10.43 L-451.65 -9.57 L-443.13 -8.72 L-434.62 -8.72 L-424.41 -9.57 L-414.19 -12.13 L-403.98 -13.83 L-392.06 -18.09 L-382.69 -22.34 L-371.63 -27.45 L-366.52 -30.00 L-361.41 -33.41 L-358.01 -37.67 L-354.60 -41.92 L-352.05 -46.18 L-351.20 -51.29 L-349.49 -58.10 L-348.64 -63.20 L-348.64 -68.31 L-348.64 -75.97 L-349.49 -82.78 L-351.20 -88.74 L-355.45 -96.40 L-359.71 -103.21 L-364.82 -110.88 L-371.63 -119.39 L-378.44 -126.20 L-385.25 -133.01 L-397.16 -142.37 L-403.12 -144.93 L-410.79 -149.18 L-422.70 -154.29 L-434.62 -157.70 L-446.54 -160.25 L-459.31 -161.95 L-471.23 -163.65 L-481.44 -164.51 L-487.40 -164.51 L-490.81 -165.36 L-491.66 -165.36 L-491.66 -165.36" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1205.03" y="-304.72" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="15.485395555161139" fill="#c2255c" text-anchor="start"><tspan x="-1205.03" dy="0">kiểu tấn công</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1176.93" y="55.78" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="17.601789598129884" fill="#c2255c" text-anchor="start"><tspan x="-1176.93" dy="0">tham số để tấn công vào</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-486.33" y="-341.76" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#c2255c" text-anchor="start"><tspan x="-486.33" dy="0">chọn tham số</tspan><tspan x="-486.33" dy="25">ứng với payload</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1409.93 -514.36 C-996.46 -512.75,-581.61 -513.62,-235.75 -514.26 M-1410.24 -513.62 C-1075.95 -513.81,-741.50 -514.43,-235.95 -513.51 M-236.18 -513.13 C-236.00 -287.74,-236.28 -60.34,-235.97 142.94 M-236.10 -514.18 C-235.06 -315.24,-235.01 -117.16,-235.96 142.53 M-236.82 142.50 C-556.35 144.67,-875.09 143.85,-1410.63 143.14 M-236.68 142.78 C-700.69 139.13,-1164.98 139.54,-1410.32 143.05 M-1410.43 143.56 C-1408.54 -100.43,-1408.63 -343.79,-1410.99 -513.83 M-1409.94 142.49 C-1410.80 -56.02,-1410.85 -255.79,-1410.72 -513.43" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1258.38 -448.57 C-1260.61 -441.14,-1278.60 -411.67,-1272.52 -403.65 C-1266.45 -395.62,-1230.51 -400.95,-1221.93 -400.43 M-1259.43 -446.37 C-1261.76 -438.74,-1279.84 -410.24,-1273.18 -402.39 C-1266.51 -394.53,-1228.18 -399.70,-1219.43 -399.23" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1234.24 -392.45 C-1231.21 -396.31,-1226.83 -398.19,-1221.09 -401.51 M-1234.00 -393.31 C-1231.75 -394.53,-1228.27 -397.20,-1220.72 -400.21" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1220.85 -399.21 C-1225.64 -403.27,-1229.07 -405.59,-1233.64 -409.73 M-1220.61 -400.06 C-1224.30 -401.61,-1226.75 -404.62,-1233.27 -408.43" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1343.08" y="107.61" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-1343.08" dy="0">phát hiện cái nào đúng dựa trên &quot;length&quot; và &quot;status code&quot;</tspan><tspan x="-1343.08" dy="25"></tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1251.08" y="521.55" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-1251.08" dy="0">người dùng </tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1129.43 520.94 C-1104.62 521.29,-1085.33 522.86,-1023.90 520.67 M-1129.14 523.17 C-1098.90 520.84,-1070.33 521.76,-1023.91 520.38" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1036.67 526.72 C-1033.09 525.56,-1032.45 524.50,-1023.55 519.82 M-1036.90 526.94 C-1034.41 526.27,-1031.78 523.60,-1024.07 519.63" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1023.88 518.89 C-1025.81 517.91,-1030.68 516.99,-1036.73 512.65 M-1024.11 519.11 C-1027.30 518.35,-1030.35 515.82,-1037.25 512.47" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1115.08" y="509.61" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-1115.08" dy="0">đăng nhập</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-998.42" y="536.95" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-998.42" dy="0">web</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-995.35 547.59 C-1015.38 554.87,-1078.70 594.53,-1114.83 592.46 C-1150.97 590.39,-1195.93 544.59,-1212.14 535.16 M-996.87 546.51 C-1017.03 554.47,-1079.26 595.48,-1115.30 593.77 C-1151.34 592.07,-1197.00 545.71,-1213.10 536.27" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1195.53 537.20 C-1202.48 535.47,-1207.68 534.51,-1210.86 535.20 M-1196.68 536.25 C-1202.41 535.30,-1207.45 535.78,-1212.00 535.37" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1210.53 536.98 C-1209.72 539.85,-1207.17 543.52,-1203.55 548.30 M-1211.67 536.03 C-1209.40 540.08,-1206.40 545.36,-1204.70 548.47" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1155.75" y="622.88" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-1155.75" dy="0">page xác minh</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<path d="M-1219.17 555.55 C-1219.30 567.64,-1227.60 605.29,-1219.61 628.28 C-1211.63 651.26,-1179.39 682.40,-1171.27 693.45 M-1220.67 554.50 C-1221.03 566.79,-1229.48 606.54,-1220.84 629.85 C-1212.20 653.16,-1177.14 683.36,-1168.82 694.37" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1182.87 687.84 C-1179.65 689.30,-1176.25 690.70,-1169.47 693.27 M-1183.95 687.61 C-1180.28 689.70,-1176.03 691.11,-1170.06 694.37" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-1169.12 693.84 C-1170.73 688.55,-1172.34 683.17,-1171.15 678.36 M-1170.20 693.61 C-1171.12 689.52,-1171.34 684.88,-1171.73 679.46" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-927.08" y="517.61" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-927.08" dy="0">(lỗi cấu hình</tspan><tspan x="-927.08" dy="25">ghi nhận đăng nhập khi thành công, ko cần mã xác minh)</tspan></text>
</g>
<g transform="translate(1450.33,702.57)">
<text x="-1142.42" y="700.88" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1e1e1e" text-anchor="start"><tspan x="-1142.42" dy="0">tìm cách bỏ qua</tspan><tspan x="-1142.42" dy="25">cái page xác minh</tspan><tspan x="-1142.42" dy="25">này</tspan></text>
</g>
</svg>
    </div>
  </div>
</div>
