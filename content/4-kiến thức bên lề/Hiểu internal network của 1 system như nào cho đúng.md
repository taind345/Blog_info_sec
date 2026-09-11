---
title: "Hiểu internal network của 1 system như nào cho đúng"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-2ce86f2f">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1269 1106" class="excalidraw-svg" data-width="1269" data-height="1106">
<g transform="translate(-96.27,-7.15)">

<rect x="136.26535034179688" y="91.010009765625" width="688.5701272898707" height="624.0166778564453" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="136.26535034179688" y="91.010009765625" width="688.5701272898707" height="624.0166778564453" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">Còn mấy dịch vụ internal?</span>
      </div>
      <a href="#doc-8eb072521e3b6a119ea2883f252d4bdc1275d57f" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ừ, mày hiểu gần đúng rồi nhưng để tao bổ sung cho rõ:</p>
<ul>
<li><strong>Tên miền</strong> (ví dụ <code>thang.com</code>) → DNS phân giải ra <strong>IP public</strong> của server (hoặc IP của load balancer).</li>
<li>Khi mày gửi request tới IP public đó, thực ra là mày gõ vào <strong>cánh cửa ngoài cùng</strong> – thường là <strong>router/firewall/gateway</strong> của hệ thống.</li>
<li>Thằng gateway này nhận request rồi <strong>chuyển tiếp (forward)</strong> vào các <strong>IP nội bộ</strong> (private IP) bên trong mạng. Cơ chế này gọi là <strong>NAT (Network Address Translation)</strong> hoặc <strong>port forwarding</strong>.</li>
</ul>
<p>Ví dụ:</p>
<ul>
<li>Mày gõ <code>thang.com</code> → DNS ra <code>203.0.113.10</code> (public IP của công ty).</li>
<li>Request tới <code>203.0.113.10:80</code> → router thấy cổng 80 → forward vào máy web server nội bộ <code>192.168.1.10:80</code>.</li>
<li>Máy web server đó xử lý xong, trả dữ liệu ngược ra ngoài qua router.</li>
</ul>
<h3>Còn mấy dịch vụ internal?</h3>
<ul>
<li><strong>Database</strong> (<code>192.168.1.20:3306</code>) không lộ ra ngoài, chỉ nằm sâu bên trong. Muốn tới được nó, mày phải <strong>xâm nhập vào một máy trong mạng nội bộ</strong> trước, rồi từ đó mới connect tới DB được.</li>
<li>Mấy dịch vụ nội bộ thường không có port forwarding ra ngoài, nên từ Internet không với tay tới.</li>
</ul>
<p>Tóm lại:<br><strong>Request từ ngoài → Public IP (router) → chuyển tiếp vào Private IP (web server) → nếu cần dữ liệu → gọi tiếp các internal IP khác (DB, file server...).</strong><br>Vậy nên attacker muốn chạm vào internal thì phải lọt vào trong trước. Rõ chưa mày? 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-96.27,-7.15)">
<text x="375.87" y="63.15" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="375.87" dy="0">đọc thêm về cơ chế NAT ở đây </tspan><tspan x="375.87" dy="20"></tspan></text>
</g>
<g transform="translate(-96.27,-7.15)">
<text x="633.50" y="63.80" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#1e1e1e" text-anchor="start"><tspan x="633.50" dy="0">📍networking etentials#6-Nat</tspan></text>
</g>
<a href="../0-asset/pasted-image-20260811101627.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted image 20260811101627.png"><g transform="translate(-96.27,-7.15)">
<image x="211.65866088867188" y="687.3099517822266" width="499.99999999999994" height="385.83441138421733" href="../0-asset/pasted-image-20260811101627.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-96.27,-7.15)">
<path d="M954.91 599.65 L954.65 600.42 L954.54 601.61 L954.49 602.85 L954.33 605.64 L954.11 607.78 L953.90 610.99 L953.85 612.00 L953.79 613.78 L953.79 615.33 L953.79 616.69 L953.79 617.76 L953.79 617.76" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M954.75 599.05 L954.27 598.46 L953.79 597.80 L954.27 597.09 L955.50 597.09 L956.41 597.45 L958.01 598.87 L958.59 599.47 L959.29 600.48 L959.71 601.49 L959.93 602.50 L959.66 603.74 L959.13 604.75 L958.43 605.59 L957.63 606.00 L956.51 605.94 L956.51 605.94" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M963.61 598.64 L963.71 599.70 L963.66 600.83 L963.61 602.08 L963.66 603.27 L963.82 604.58 L964.03 605.64 L964.41 606.60 L965.26 607.07 L966.81 606.30 L967.45 605.59 L968.62 604.04 L969.63 602.44 L969.95 601.66 L970.59 600.54 L971.07 599.70 L971.50 598.75 L971.82 598.04 L971.82 599.11 L971.77 600.18 L971.82 601.43 L972.03 603.03 L972.25 604.87 L972.57 606.30 L972.57 606.30" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M982.22 591.45 L981.85 593.94 L981.58 596.56 L981.31 599.05 L981.21 601.19 L981.15 602.85 L981.15 604.04 L981.10 605.05 L981.10 606.12 L981.53 605.11 L982.59 603.03 L983.39 601.55 L984.25 600.54 L985.69 599.35 L986.59 599.17 L987.45 599.53 L988.09 600.18 L988.62 601.07 L988.99 601.96 L989.05 603.03 L988.83 604.22 L987.66 606.71 L987.13 607.19 L985.79 607.72 L983.18 607.01 L981.21 605.29 L980.46 604.28 L979.82 602.91 L979.82 602.91" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M999.93 584.74 L999.50 586.81 L999.29 589.37 L999.07 593.41 L998.91 594.66 L998.86 597.33 L998.81 599.82 L998.81 600.89 L998.81 602.62 L998.86 603.98 L999.02 604.99 L999.34 605.94 L1000.30 606.12 L1001.10 605.76 L1001.85 605.35 L1002.75 604.87 L1003.45 604.52 L1004.30 604.28 L1004.62 605.11 L1004.83 606.18 L1005.10 607.07 L1005.10 607.07" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1018.06 601.84 L1017.15 601.25 L1016.19 600.95 L1015.13 600.95 L1013.79 601.66 L1012.14 603.33 L1011.55 604.52 L1011.34 605.59 L1011.39 606.60 L1012.19 608.20 L1012.62 608.85 L1014.54 610.28 L1015.34 610.57 L1016.78 610.81 L1016.78 610.81" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1031.55 600.06 L1031.07 600.89 L1030.54 602.97 L1030.11 605.47 L1029.74 608.26 L1029.53 611.11 L1029.42 614.02 L1029.31 615.45 L1029.31 618.30 L1029.42 621.09 L1029.47 623.64 L1029.53 624.65 L1029.74 627.27 L1029.74 627.27" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1022.22 630.24 L1022.86 630.83 L1023.87 631.01 L1025.10 631.01 L1027.13 630.77 L1029.47 630.41 L1031.71 629.94 L1032.83 629.64 L1034.97 628.75 L1036.09 628.28 L1036.09 628.28" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1025.47 594.12 L1025.90 593.23 L1027.23 593.05 L1029.74 593.11 L1032.41 593.47 L1033.79 593.65 L1033.79 593.65" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1050.54 604.58 L1050.17 606.12 L1049.74 608.44 L1049.42 611.23 L1049.05 614.38 L1048.83 618.18 L1048.78 621.62 L1048.78 625.01 L1048.78 626.55 L1048.78 629.58 L1048.83 632.20 L1048.83 633.44 L1048.89 635.23 L1048.89 636.53 L1048.89 637.66 L1048.83 636.59 L1048.89 635.29 L1048.89 631.66 L1048.83 627.09 L1048.89 622.40 L1049.10 618.18 L1049.42 614.50 L1049.69 611.58 L1050.17 609.03 L1050.97 606.71 L1052.25 604.69 L1053.85 602.97 L1055.77 601.61 L1057.79 600.77 L1059.93 600.42 L1061.90 600.54 L1063.71 601.13 L1065.31 602.08 L1065.79 602.62 L1066.33 603.86 L1066.01 606.18 L1064.73 608.56 L1062.11 611.35 L1058.43 614.44 L1053.42 617.58 L1050.65 619.01 L1050.65 619.01" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M968.41 653.40 L967.87 652.81 L967.23 652.27 L966.81 653.17 L966.49 655.48 L966.11 658.21 L965.95 659.76 L965.69 662.79 L965.53 665.76 L965.37 668.67 L965.15 672.95 L964.94 675.44 L964.83 676.57 L964.67 678.29 L964.51 679.42 L964.09 680.25 L963.07 677.52 L962.65 674.02 L962.43 669.74 L962.81 663.26 L963.50 659.17 L964.67 655.42 L965.31 653.70 L966.81 650.79 L968.09 648.71 L969.53 647.17 L970.33 646.75 L971.50 646.39 L972.46 646.63 L973.79 648.12 L974.43 650.02 L974.65 651.15 L974.65 654.89 L974.27 657.68 L973.69 660.53 L973.05 663.32 L972.35 665.88 L971.77 668.25 L971.29 670.39 L971.07 671.28 L970.81 672.77 L970.81 673.90 L971.07 674.79 L971.50 675.50 L973.21 676.21 L975.34 676.45 L977.79 676.45 L980.35 676.09 L982.86 675.44 L982.86 675.44" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M992.19 669.56 L992.78 668.31 L992.99 667.30 L992.67 666.35 L991.98 666.00 L991.13 666.23 L989.63 667.84 L989.10 668.67 L988.25 670.39 L987.98 671.94 L987.98 673.12 L988.41 674.07 L989.05 674.73 L989.74 675.08 L990.97 675.20 L991.98 674.85 L992.78 674.19 L993.15 673.18 L993.21 672.11 L992.83 671.10 L992.41 670.27 L992.03 669.50 L991.82 668.55 L992.46 667.84 L993.69 667.24 L995.45 666.53 L996.19 666.17 L997.58 665.76 L998.65 665.40 L999.82 665.05 L1000.78 664.81 L1001.53 665.22 L1001.37 666.47 L1000.89 669.03 L1000.51 671.22 L1000.14 673.48 L999.71 676.69 L999.66 678.41 L999.71 679.72 L1000.03 680.67 L1000.57 681.44 L1001.85 681.20 L1003.29 680.25 L1004.62 679.00 L1005.74 677.58 L1006.22 676.87 L1007.61 675.03 L1008.19 674.13 L1007.98 675.20 L1007.66 676.33 L1007.55 677.52 L1007.61 678.59 L1007.61 678.59" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1017.53 664.33 L1017.15 665.34 L1016.99 666.89 L1016.78 669.20 L1016.73 670.21 L1016.57 672.29 L1016.14 675.56 L1015.98 676.51 L1015.71 678.00 L1015.34 679.24 L1014.91 680.13 L1014.22 680.97 L1013.21 681.08 L1012.57 680.37 L1012.25 679.30 L1012.46 678.29 L1013.63 676.99 L1014.91 675.98 L1015.71 675.50 L1017.42 674.79 L1019.29 674.13 L1021.21 673.54 L1023.23 673.06 L1025.10 672.47 L1026.97 671.76 L1028.67 670.99 L1030.27 670.04 L1031.71 668.97 L1032.25 668.49 L1033.15 667.60 L1033.69 666.83 L1034.01 666.06 L1034.27 664.99 L1034.22 663.80 L1033.90 662.91 L1033.21 662.43 L1032.19 662.73 L1030.59 663.98 L1029.10 665.34 L1027.66 666.95 L1027.02 667.90 L1025.79 669.86 L1024.83 672.00 L1024.03 674.13 L1023.50 676.15 L1023.39 677.10 L1023.45 679.90 L1023.87 680.85 L1024.30 681.68 L1024.94 682.21 L1026.11 682.69 L1029.10 682.21 L1031.13 681.44 L1033.05 680.43 L1034.86 679.06 L1036.35 677.64 L1037.63 676.15 L1038.59 674.79 L1039.13 673.66 L1039.45 672.77 L1039.66 671.76 L1039.29 670.99 L1038.43 671.34 L1038.65 672.47 L1039.02 673.36 L1039.87 675.86 L1040.14 676.69 L1040.46 678.29 L1040.73 679.66 L1040.94 680.85 L1041.15 682.03 L1041.37 682.93 L1041.63 684.11 L1042.01 685.00 L1042.38 685.72 L1043.18 686.25 L1043.18 686.25" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1056.73 682.33 L1056.99 681.50 L1056.99 681.50" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1101.10 589.43 L1102.11 588.89 L1104.62 587.41 L1108.78 584.97 L1114.43 581.59 L1122.22 576.78 L1133.63 569.23 L1137.37 566.56 L1144.73 561.33 L1150.43 557.11 L1155.55 553.31 L1160.46 549.51 L1164.73 546.18 L1168.35 542.92 L1171.29 540.18 L1173.58 537.99 L1174.49 537.16 L1175.98 535.61 L1176.73 534.72 L1176.73 534.72" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1101.95 594.60 L1102.59 594.18 L1103.82 593.82 L1105.53 593.65 L1108.25 593.65 L1111.61 594.00 L1118.27 595.49 L1123.45 596.97 L1126.06 597.92 L1131.77 600.36 L1137.21 602.91 L1141.79 605.41 L1146.33 608.02 L1150.65 610.57 L1154.70 612.89 L1158.22 614.73 L1161.10 616.16 L1162.33 616.57 L1164.41 617.17 L1164.41 617.17" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1110.33 613.31 L1108.67 613.31 L1107.55 613.55 L1106.97 614.08 L1107.23 616.16 L1108.57 618.89 L1110.70 622.40 L1113.90 626.61 L1115.87 628.99 L1120.09 633.74 L1124.62 638.61 L1129.21 643.48 L1133.63 648.41 L1137.85 653.34 L1141.79 658.21 L1145.15 662.55 L1146.70 664.45 L1150.17 669.62 L1151.98 672.17 L1153.21 674.25 L1154.06 675.92 L1154.27 677.10 L1154.01 678.29 L1154.01 678.29" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1114.43 661.54 L1113.58 661.96 L1113.21 662.97 L1113.21 666.35 L1113.85 669.98 L1114.75 674.79 L1116.09 680.43 L1116.78 683.88 L1119.23 694.63 L1120.89 701.87 L1122.65 709.24 L1124.30 716.55 L1125.90 723.91 L1127.45 731.16 L1128.89 738.17 L1129.53 741.55 L1130.65 747.49 L1131.71 753.02 L1132.62 758.13 L1133.79 764.01 L1134.43 767.10 L1135.02 769.41 L1135.23 770.30 L1135.66 771.79 L1135.98 772.80 L1136.57 773.57 L1136.57 773.57" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1198.38 521.18 L1198.06 522.01 L1198.06 525.39 L1198.01 528.01 L1197.95 530.62 L1197.85 533.12 L1197.95 535.55 L1197.85 536.62 L1197.85 538.22 L1197.85 539.35 L1197.85 539.35" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1193.85 510.07 L1193.58 509.12 L1193.37 508.23 L1193.90 509.00 L1193.90 509.00" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1203.66 524.68 L1203.45 525.69 L1203.55 526.82 L1203.77 528.48 L1204.03 530.68 L1204.19 531.81 L1204.41 534.01 L1204.51 534.90 L1204.67 536.44 L1204.83 537.57 L1204.94 538.76 L1205.15 539.65 L1205.37 538.76 L1205.85 536.20 L1206.06 534.07 L1206.33 532.40 L1206.49 531.16 L1206.59 530.26 L1206.81 529.31 L1207.18 530.32 L1207.34 531.33 L1207.55 532.40 L1207.77 533.23 L1207.77 533.23" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1214.70 517.49 L1214.70 520.23 L1214.86 522.78 L1215.02 525.51 L1215.13 528.30 L1215.23 529.67 L1215.34 532.34 L1215.45 534.60 L1215.50 536.26 L1215.50 537.57 L1215.45 538.58 L1214.70 537.75 L1214.06 535.61 L1213.63 534.13 L1213.37 533.00 L1213.15 532.11 L1212.99 531.10 L1213.63 530.62 L1214.81 530.38 L1216.57 530.03 L1218.59 529.37 L1220.46 528.66 L1222.17 527.89 L1222.86 527.47 L1224.03 526.76 L1225.47 525.39 L1225.90 524.74 L1226.11 523.85 L1225.69 523.02 L1224.89 522.72 L1224.03 522.96 L1221.79 524.68 L1220.67 526.23 L1219.71 528.13 L1219.07 530.09 L1218.81 532.17 L1218.81 533.89 L1218.91 535.31 L1219.82 537.69 L1220.78 539.00 L1221.74 539.83 L1222.65 540.18 L1225.10 539.65 L1226.91 538.40 L1228.41 536.86 L1229.63 534.78 L1230.65 532.46 L1231.34 530.21 L1231.93 528.13 L1232.30 526.58 L1232.51 525.51 L1232.73 524.50 L1233.15 525.16 L1233.42 526.05 L1234.06 527.65 L1234.70 529.61 L1235.23 531.39 L1235.66 532.82 L1235.98 534.07 L1236.30 535.08 L1236.57 535.85 L1236.89 536.80 L1237.31 537.57 L1237.31 537.57" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1244.51 527.06 L1244.83 526.23 L1244.83 526.23" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1242.81 526.05 L1242.22 526.52 L1241.95 527.53 L1241.79 528.48 L1241.69 529.61 L1241.47 531.99 L1241.31 533.71 L1241.26 534.96 L1241.15 535.97 L1241.10 537.04 L1242.65 536.15 L1243.77 534.13 L1244.25 533.06 L1245.31 530.98 L1246.27 529.20 L1247.23 527.18 L1247.82 526.58 L1248.41 527.12 L1248.41 528.19 L1248.41 529.49 L1248.67 532.28 L1249.10 534.36 L1249.10 534.36" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1259.71 532.05 L1258.65 532.17 L1256.89 533.00 L1255.34 534.07 L1254.11 535.25 L1253.69 535.91 L1253.26 536.98 L1253.26 538.28 L1253.79 539.12 L1254.70 539.41 L1256.67 538.94 L1257.42 538.40 L1258.86 537.39 L1260.03 536.26 L1260.73 535.19 L1261.26 534.36 L1261.74 533.41 L1261.74 534.54 L1261.95 535.55 L1262.65 536.68 L1263.82 537.87 L1264.62 538.34 L1267.34 538.76 L1269.42 538.05 L1271.77 536.62 L1274.11 534.60 L1275.23 533.41 L1277.21 530.62 L1278.86 527.29 L1279.93 523.85 L1280.57 520.88 L1280.78 518.44 L1280.57 516.66 L1279.93 515.65 L1279.02 515.30 L1276.51 516.48 L1274.81 518.50 L1273.21 521.24 L1271.82 524.50 L1271.34 526.28 L1270.54 530.03 L1270.33 533.65 L1270.70 537.33 L1271.55 540.84 L1274.22 546.18 L1275.29 547.73 L1275.29 547.73" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1295.07 527.89 L1296.51 526.05 L1297.21 525.04 L1299.29 522.07 L1300.46 520.11 L1301.31 518.21 L1301.74 517.37 L1302.17 516.07 L1302.43 515.18 L1302.33 514.23 L1301.58 514.70 L1300.67 516.48 L1299.71 518.74 L1298.97 521.30 L1298.27 524.15 L1297.79 527.18 L1297.42 530.21 L1297.21 533.18 L1297.10 534.60 L1296.99 537.51 L1296.99 538.88 L1296.99 538.88" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1292.73 545.29 L1291.82 545.00 L1292.62 544.70 L1294.38 544.58 L1295.77 544.52 L1299.02 544.46 L1303.02 544.52 L1306.91 544.94 L1306.91 544.94" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1193.47 621.09 L1193.90 621.92 L1195.87 622.34 L1197.10 622.57 L1199.87 622.81 L1202.97 622.99 L1206.33 622.99 L1209.95 622.93 L1214.01 622.63 L1218.17 622.10 L1222.38 621.68 L1224.51 621.45 L1228.89 620.97 L1233.21 620.49 L1239.66 620.02 L1243.82 619.84 L1247.23 619.66 L1248.89 619.60 L1252.03 619.54 L1255.02 619.60 L1257.79 619.66 L1260.51 619.72 L1263.18 619.96 L1265.69 620.14 L1266.97 620.26 L1269.47 620.38 L1271.77 620.55 L1274.49 620.67 L1274.49 620.67" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1179.02 658.87 L1177.95 659.05 L1180.94 658.51 L1184.89 658.10 L1189.95 657.74 L1196.14 657.50 L1203.45 657.38 L1211.55 657.32 L1219.61 657.38 L1226.27 657.50 L1229.42 657.56 L1235.23 657.86 L1240.03 658.21 L1246.11 658.51 L1249.31 658.45 L1249.31 658.45" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1309.21 611.11 L1309.10 610.10 L1309.31 609.09 L1309.85 608.44 L1310.43 609.03 L1310.70 610.10 L1310.75 611.17 L1310.43 613.31 L1310.06 614.44 L1308.99 616.75 L1307.23 619.25 L1305.26 621.74 L1301.90 625.43 L1299.93 627.56 L1298.38 629.23 L1297.79 630.00 L1297.21 630.77 L1296.89 632.02 L1298.01 633.68 L1300.14 634.87 L1303.34 635.88 L1304.94 636.36 L1304.94 636.36" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1173.15 774.52 L1172.41 774.88 L1171.77 775.29 L1172.83 775.59 L1175.87 775.65 L1180.09 775.41 L1185.53 775.12 L1192.03 774.82 L1200.09 774.58 L1208.57 774.58 L1212.83 774.64 L1221.53 775.12 L1230.27 775.77 L1243.29 776.90 L1251.61 777.73 L1259.39 778.68 L1265.53 779.39 L1268.41 779.75 L1273.26 780.34 L1277.15 780.76 L1279.93 781.12 L1282.01 781.41 L1282.01 781.41" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M1301.47 767.27 L1301.58 768.34 L1301.69 769.65 L1302.01 771.85 L1302.11 773.04 L1302.38 775.47 L1302.65 777.91 L1303.18 781.06 L1303.34 782.54 L1303.55 783.67 L1303.87 784.68 L1304.89 784.26 L1306.27 782.60 L1307.02 781.47 L1308.78 779.04 L1310.75 776.66 L1312.78 774.40 L1314.43 772.50 L1316.46 770.42 L1317.31 769.65 L1318.17 769.35 L1318.65 770.30 L1318.75 771.43 L1318.86 772.74 L1319.93 776.19 L1320.94 777.85 L1321.69 778.38 L1323.61 778.74 L1324.94 778.68 L1324.94 778.68" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M824.35 730.45 L824.46 729.38 L824.51 731.75 L824.25 734.90 L824.14 736.68 L823.87 740.54 L823.50 744.23 L823.29 747.32 L823.02 751.36 L822.97 752.37 L822.81 753.97 L822.54 754.92 L822.54 754.92" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M816.78 746.01 L816.30 745.18 L815.87 744.29 L816.73 744.05 L818.59 744.35 L820.89 744.58 L823.39 744.58 L825.79 744.29 L828.09 743.81 L830.97 742.62 L832.46 741.55 L833.31 740.49 L833.79 739.36 L833.90 738.29 L833.79 737.28 L833.47 736.15 L833.10 735.38 L832.03 735.38 L831.23 736.74 L830.49 738.64 L829.95 740.78 L829.74 742.98 L829.69 744.05 L829.85 745.77 L830.33 748.56 L831.02 750.17 L831.77 751.24 L832.62 751.83 L833.85 751.89 L834.54 751.47 L834.54 751.47" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M841.31 740.01 L841.58 741.14 L841.79 743.69 L842.01 745.77 L842.27 747.32 L842.54 748.44 L842.75 749.63 L843.87 749.40 L844.73 748.03 L845.26 747.32 L845.69 746.66 L846.54 745.71 L847.18 745.00 L848.09 744.58 L849.05 744.70 L849.63 745.30 L850.06 746.01 L850.17 747.02 L850.17 747.02" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M832.19 731.40 L832.78 729.32 L833.53 728.90 L835.77 728.72 L838.38 729.32 L842.86 731.69 L842.86 731.69" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M863.93 744.05 L863.71 745.24 L863.87 746.37 L864.03 747.44 L864.14 748.50 L864.30 749.57 L865.15 747.97 L865.79 745.89 L866.22 744.88 L867.02 742.98 L867.87 741.49 L868.67 740.49 L869.31 739.83 L870.17 739.48 L870.97 739.89 L871.39 740.54 L871.82 741.38 L872.89 743.87 L873.42 745.30 L873.79 746.43 L874.06 747.44 L874.49 748.50 L874.97 749.16 L875.50 748.56 L876.41 746.96 L876.41 746.96" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M880.46 739.42 L880.67 740.49 L880.89 741.73 L881.37 743.93 L881.85 745.30 L882.17 746.31 L882.59 747.02 L883.45 747.20 L884.03 746.60 L884.73 745.42 L885.53 743.63 L886.17 741.91 L886.59 740.72 L886.91 739.89 L887.23 739.06 L887.77 739.89 L887.98 740.90 L888.41 742.27 L888.73 743.16 L889.47 744.94 L890.17 746.25 L890.91 747.14 L891.77 747.79 L892.57 748.09 L893.69 748.15 L895.55 747.20 L896.14 746.72 L897.21 745.53 L897.95 744.35 L898.27 743.28 L898.43 742.21 L898.43 741.02 L898.06 740.19 L897.37 739.77 L896.51 740.19 L895.87 741.20 L895.50 741.91 L894.97 743.28 L894.86 744.41 L895.18 746.37 L895.66 747.08 L896.19 747.61 L897.15 748.09 L898.06 748.21 L898.06 748.21" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M903.66 743.93 L904.14 743.10 L904.14 744.35 L904.14 745.65 L904.25 746.66 L904.46 747.49 L904.89 748.15 L905.95 748.33 L906.70 747.85 L908.09 746.60 L908.99 745.65 L909.69 744.88 L910.27 744.29 L910.97 743.81 L911.98 744.17 L912.99 745.71 L913.79 747.32 L914.43 748.68 L914.91 749.81 L915.34 750.64 L915.71 751.36 L916.09 752.13 L916.09 752.13" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M891.39 732.94 L890.97 731.52 L890.97 730.15 L891.02 729.14 L891.34 728.31 L891.98 727.54 L893.21 727.54 L894.43 728.07 L896.14 729.02 L897.95 730.03 L898.70 730.51 L898.70 730.51" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M899.93 709.42 L899.71 708.41 L900.09 707.34 L902.06 706.69 L904.67 706.69 L909.10 707.46 L909.10 707.46" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M866.11 713.10 L865.47 713.70 L864.94 712.63 L864.89 709.42 L865.05 705.85 L865.37 701.64 L866.01 696.65 L866.81 691.18 L867.98 685.72 L868.62 683.10 L870.11 677.70 L871.82 672.71 L873.90 667.96 L876.62 663.09 L879.98 658.39 L883.87 653.88 L890.17 647.94 L894.11 644.85 L898.01 642.18 L901.74 639.98 L904.94 638.26 L906.54 637.42 L909.53 636.12 L912.41 634.93 L914.86 634.04 L917.26 633.21 L919.66 632.55 L922.97 631.66 L924.94 631.13 L926.97 630.65 L928.89 630.24 L930.81 629.76 L931.71 629.58 L933.10 629.29 L934.22 628.99 L935.39 628.69 L936.35 628.57 L937.26 628.40 L937.26 628.40" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M936.73 619.54 L937.79 619.90 L939.50 621.56 L940.94 622.99 L942.22 624.65 L942.81 625.48 L943.66 627.33 L943.93 629.35 L943.39 631.84 L941.53 635.17 L938.38 639.33 L934.01 643.84 L934.01 643.84" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M841.37 797.87 L841.42 796.80 L841.53 795.73 L841.85 799.23 L841.79 802.38 L841.58 806.12 L841.31 810.28 L840.89 816.76 L840.57 820.68 L840.35 824.18 L840.14 827.27 L839.98 828.70 L839.55 831.25 L839.07 833.57 L839.07 833.57" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M828.09 815.57 L827.98 811.17 L827.98 806.06 L828.03 801.31 L828.25 797.15 L828.41 793.95 L828.62 791.15 L828.73 789.91 L829.26 787.59 L829.90 785.57 L830.91 783.67 L832.25 782.13 L833.85 780.88 L835.71 780.11 L838.70 780.34 L840.94 781.41 L842.22 782.36 L844.57 784.62 L846.75 787.59 L848.67 790.68 L850.38 794.01 L852.03 797.45 L853.79 801.25 L855.39 805.35 L857.15 809.51 L858.06 811.71 L858.06 811.71" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M827.82 903.66 L827.61 902.59 L826.86 904.85 L826.65 907.52 L826.38 910.37 L826.33 913.22 L826.22 915.96 L826.33 918.57 L826.54 921.01 L826.81 923.02 L827.18 924.51 L827.66 925.46 L828.41 925.88 L830.75 924.57 L832.35 922.43 L833.85 919.40 L834.49 917.74 L835.39 914.06 L836.14 910.31 L836.51 906.87 L836.73 904.02 L836.78 901.70 L836.78 900.16 L836.78 898.97 L836.57 898.14 L835.98 899.15 L835.55 901.17 L835.34 903.60 L835.18 906.15 L835.13 907.52 L835.29 910.25 L835.50 912.81 L835.77 915.18 L836.19 917.20 L836.51 918.04 L836.51 918.04" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M847.98 899.86 L847.77 898.61 L847.55 897.72 L847.18 897.01 L846.43 896.35 L845.53 896.18 L844.46 896.53 L843.71 897.07 L843.18 897.84 L842.59 900.10 L842.38 900.99 L842.22 902.71 L842.27 904.19 L842.75 906.27 L843.39 908.23 L844.14 909.96 L844.51 910.67 L845.26 911.92 L845.79 912.87 L846.33 913.82 L846.75 914.53 L847.13 915.30 L847.39 916.49 L847.45 917.50 L846.81 920.05 L846.22 921.36 L845.58 922.25 L844.94 922.85 L843.87 922.85 L843.07 922.19 L842.75 921.12 L842.75 920.00 L843.07 918.57 L843.82 916.55 L844.73 914.71 L845.90 913.05 L846.59 912.15 L848.19 910.73 L849.85 909.24 L852.67 907.05 L854.49 905.56 L856.30 904.08 L857.85 902.53 L858.49 901.70 L859.66 900.10 L860.57 898.37 L860.99 896.89 L861.15 895.64 L860.99 894.45 L860.73 893.62 L860.30 892.91 L859.50 892.37 L858.59 892.67 L857.21 894.22 L856.09 896.18 L855.18 898.55 L854.86 899.86 L854.33 902.65 L854.11 905.38 L854.11 907.94 L854.43 910.19 L854.91 912.04 L855.55 913.10 L856.51 913.70 L858.81 913.34 L860.46 912.15 L861.95 910.55 L863.39 908.59 L864.46 906.39 L865.31 904.02 L865.69 902.89 L866.22 900.63 L866.65 898.85 L866.81 897.66 L866.97 896.71 L866.97 895.64 L867.34 898.02 L867.98 900.10 L868.67 902.23 L869.63 904.31 L870.54 906.45 L871.61 908.59 L872.62 910.61 L873.58 912.51 L874.49 914.23 L874.91 915.06 L875.61 916.25 L876.19 917.26 L876.62 917.98 L877.26 918.69 L877.95 919.10 L879.02 919.10 L879.02 919.10" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M837.26 832.73 L837.21 837.01 L837.15 839.21 L837.15 843.96 L837.05 848.89 L837.05 853.76 L837.05 858.52 L837.05 863.03 L837.15 865.17 L837.15 869.09 L837.26 872.41 L837.37 875.50 L837.47 878.30 L837.63 881.03 L837.69 883.29 L837.79 885.07 L837.79 886.43 L837.79 887.50 L837.79 888.75 L837.90 889.76 L837.90 889.76" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M884.94 658.93 L884.51 659.64 L884.25 662.37 L884.03 664.99 L883.66 667.66 L883.61 668.97 L883.39 671.58 L883.07 675.20 L882.97 676.93 L882.81 678.23 L882.75 679.24 L882.75 680.31 L883.18 677.34 L883.23 674.55 L883.66 670.21 L884.03 667.54 L884.46 665.11 L884.94 663.03 L885.31 662.08 L885.58 661.30 L886.22 660.17 L886.91 659.28 L887.55 658.87 L888.73 659.05 L889.90 660.23 L891.13 662.79 L891.39 663.74 L891.61 664.69 L891.77 666.41 L891.71 669.20 L891.29 671.34 L890.54 673.48 L889.47 675.62 L888.25 677.58 L886.65 679.24 L885.05 680.49 L884.14 681.02 L882.59 681.74 L881.37 682.09 L881.37 682.09" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M894.43 664.51 L894.75 665.34 L894.86 666.41 L894.86 667.60 L894.65 670.93 L894.43 673.12 L894.33 674.13 L894.11 675.86 L894.01 677.22 L893.90 678.29 L893.79 679.54 L894.06 680.31 L895.29 677.88 L895.93 675.50 L896.41 673.01 L896.94 670.51 L897.26 668.25 L897.58 666.71 L897.69 665.52 L897.85 664.33 L898.59 666.35 L899.23 668.61 L899.87 670.93 L900.57 673.12 L900.94 674.13 L901.58 675.92 L901.95 676.69 L902.54 677.88 L903.02 678.65 L903.71 679.24 L904.51 678.95 L905.26 677.88 L905.95 675.86 L906.22 674.67 L906.43 671.82 L906.54 669.03 L906.54 666.47 L906.43 665.46 L906.38 663.80 L906.33 662.61 L906.33 662.61" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-96.27,-7.15)">
<path d="M920.25 661.13 L919.71 660.23 L918.70 660.00 L916.78 660.47 L914.75 661.30 L912.99 662.37 L910.75 664.39 L910.06 665.64 L909.69 666.71 L909.85 667.78 L910.11 668.61 L910.59 669.38 L911.98 671.05 L912.46 671.64 L913.26 672.65 L913.85 673.42 L914.43 674.25 L914.70 675.26 L914.65 676.45 L914.06 677.28 L913.37 677.64 L913.37 677.64" stroke="#1e1e1e" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-8eb072521e3b6a119ea2883f252d4bdc1275d57f" class="notion-callout-card">

Ừ, mày hiểu gần đúng rồi nhưng để tao bổ sung cho rõ:

- **Tên miền** (ví dụ `thang.com`) → DNS phân giải ra **IP public** của server (hoặc IP của load balancer).
- Khi mày gửi request tới IP public đó, thực ra là mày gõ vào **cánh cửa ngoài cùng** – thường là **router/firewall/gateway** của hệ thống.
- Thằng gateway này nhận request rồi **chuyển tiếp (forward)** vào các **IP nội bộ** (private IP) bên trong mạng. Cơ chế này gọi là **NAT (Network Address Translation)** hoặc **port forwarding**.

Ví dụ:
- Mày gõ `thang.com` → DNS ra `203.0.113.10` (public IP của công ty).
- Request tới `203.0.113.10:80` → router thấy cổng 80 → forward vào máy web server nội bộ `192.168.1.10:80`.
- Máy web server đó xử lý xong, trả dữ liệu ngược ra ngoài qua router.

### Còn mấy dịch vụ internal?
- **Database** (`192.168.1.20:3306`) không lộ ra ngoài, chỉ nằm sâu bên trong. Muốn tới được nó, mày phải **xâm nhập vào một máy trong mạng nội bộ** trước, rồi từ đó mới connect tới DB được.
- Mấy dịch vụ nội bộ thường không có port forwarding ra ngoài, nên từ Internet không với tay tới.

Tóm lại:  
**Request từ ngoài → Public IP (router) → chuyển tiếp vào Private IP (web server) → nếu cần dữ liệu → gọi tiếp các internal IP khác (DB, file server...).**  
Vậy nên attacker muốn chạm vào internal thì phải lọt vào trong trước. Rõ chưa mày? 😎

</div>

---



### 🔗 Các bài viết liên kết trong sơ đồ

- [[networking etentials#6-Nat]]
