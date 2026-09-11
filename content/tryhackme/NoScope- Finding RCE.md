---
title: "NoScope- Finding RCE"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-c3cd5df9">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1027 1796" width="1027" height="1796" class="excalidraw-svg" data-width="1027" data-height="1796">
<g transform="translate(-56.90,-122.44)">

<rect x="158.92808024536293" y="186.96739303426597" width="632.7540425420963" height="651.7366638183591" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="158.92808024536293" y="186.96739303426597" width="632.7540425420963" height="651.7366638183591" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">📘 Vấn đề:</span>
      </div>
      <a href="#doc-e7dd68eb98db5e926a00066eb39b9e990c947b77" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      <p>Ừ, phần này nói về thực trạng security hiện nay và giới thiệu <strong>NoScope</strong> – một nền tảng pentest tự động dùng AI.</p>
<h3>📘 Vấn đề:</h3>
<ul>
<li>Trước đây, từ lúc công bố lỗ hổng tới khi bị khai thác mất <strong>nhiều năm</strong>. Giờ rút xuống còn <strong>vài giờ</strong>.</li>
<li>Trong khi đó, dev ship code <strong>nhiều lần một ngày</strong>, bề mặt tấn công ngày càng rộng.</li>
<li>Pentest kiểu <strong>1 quý/lần hoặc 1 năm/lần</strong> không theo kịp tốc độ đó. Lỗ hổng sinh ra và bị khai thác trước khi có ai test.</li>
</ul>
<h3>🧪 NoScope là gì?</h3>
<ul>
<li>Là nền tảng <strong>pentest tự động dùng AI</strong>.</li>
<li>Nó thả các <strong>agent</strong> chuyên biệt làm việc:<ul>
<li><strong>Map</strong> bề mặt tấn công.</li>
<li><strong>Xây dựng attack graph</strong> (sơ đồ các bước tấn công khả thi).</li>
<li><strong>Tạo payload</strong> nhắm đúng mục tiêu.</li>
<li><strong>Xác nhận exploitability end-to-end</strong> – tức là chỉ báo cáo lỗi khi đã chứng minh khai thác được thật, không báo false positive.</li>
</ul>
</li>
<li>Ví dụ: CVE-2026-35482 (lỗi sandbox escape trong Alf.io) được NoScope tự động tìm ra, xác nhận, và phối hợp công bố CVE, không cần đọc code.</li>
</ul>
<h3>🔥 Điểm đáng chú ý:</h3>
<ul>
<li>NoScope đã được các công ty lớn trong chính phủ, hàng không, quân sự tin dùng.</li>
<li>Trong lab này, mày có thể bật máy, mở NoScope, nhập IP mục tiêu, điền vài thông tin, rồi xem agent hoạt động real-time: log, lý luận, cách nó tìm ra lỗi.</li>
</ul>
<p>Tóm lại: <strong>NoScope là giải pháp cho bài toán pentest không theo kịp tốc độ phát triển phần mềm</strong> – tự động hóa toàn bộ quy trình từ do thám đến xác nhận khai thác. Nghe khá ngầu đúng không? 😎</p>

    </div>
  </div>
</foreignObject>

</g>
<g transform="translate(-56.90,-122.44)">
<path d="M591.24 196.59 C626.60 197.24,663.67 196.48,718.61 197.83 M590.63 196.22 C637.33 194.86,686.86 195.20,718.54 196.58 M718.54 198.13 C719.35 202.63,719.81 213.12,717.54 232.17 M717.72 196.84 C717.81 209.73,717.89 221.38,717.02 232.01 M719.27 233.15 C691.94 231.58,667.43 233.42,588.62 232.59 M717.14 231.42 C667.69 231.90,616.14 232.20,590.79 231.50 M590.41 231.01 C591.17 223.89,590.92 215.16,589.85 197.93 M589.33 232.25 C589.75 224.28,590.67 214.49,589.29 197.38" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M166.38 236.12 C210.17 234.77,256.92 237.38,369.71 239.03 M166.64 234.27 C207.78 234.99,249.94 237.60,367.75 238.66" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M344.01 300.22 C432.71 301.33,522.23 301.42,695.20 303.11 M342.95 301.33 C448.48 300.01,552.40 300.43,694.68 302.79" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M244.00 327.50 C272.72 324.32,298.58 324.70,331.71 324.39 M244.58 325.52 C276.76 325.24,308.10 324.50,333.69 324.94" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M188.42 654.85 C338.16 651.81,487.27 652.83,790.89 654.93 M187.57 654.55 C328.51 652.89,468.72 653.11,790.59 654.64 M791.88 653.36 C792.50 667.66,790.28 679.08,789.98 690.90 M790.38 655.67 C789.91 668.73,789.65 682.82,789.59 692.36 M790.00 692.05 C590.20 690.19,389.86 691.44,187.28 691.88 M790.48 691.69 C667.29 693.02,544.19 693.10,187.33 691.83 M188.42 690.43 C186.28 677.08,188.69 663.38,189.64 652.85 M188.47 690.86 C188.00 683.48,187.19 674.46,187.90 654.83" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M177.03 446.80 C293.74 444.65,412.24 444.35,737.22 446.21 M177.17 446.92 C364.52 445.88,552.28 445.62,736.50 446.73 M735.44 446.27 C736.20 482.29,737.04 520.32,734.71 572.12 M735.78 446.73 C736.53 479.06,736.74 513.06,736.80 573.67 M737.15 574.20 C597.99 573.75,460.69 572.79,177.37 574.07 M736.09 573.71 C516.19 571.66,296.35 572.27,176.96 573.92 M175.97 574.73 C177.85 544.09,177.16 512.12,178.64 448.30 M176.48 573.90 C176.82 542.94,178.33 513.64,177.43 446.13" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<text x="766.73" y="435.02" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="766.73" dy="0">sắp mất việc rồi =))</tspan></text>
</g>
<g transform="translate(-56.90,-122.44)">
<text x="114.75" y="178.44" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="114.75" dy="0">II) NoScope</tspan></text>
</g>
<g transform="translate(-56.90,-122.44)">
<text x="96.90" y="942.91" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="96.90" dy="0">III)</tspan></text>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M542.42 336.53 L543.27 336.29 L544.87 336.11 L547.64 335.87 L551.11 335.63 L555.43 335.58 L560.12 335.63 L565.72 335.87 L568.66 336.11 L575.00 336.35 L585.35 336.94 L593.24 337.24 L601.67 337.36 L610.26 337.42 L619.06 337.36 L627.80 337.30 L636.39 337.24 L640.66 337.18 L649.08 337.06 L657.35 337.18 L664.87 337.18 L671.96 337.24 L678.84 337.30 L688.98 337.54 L695.54 337.60 L701.88 337.77 L704.92 337.89 L710.84 338.07 L716.39 338.37 L721.30 338.66 L726.10 338.90 L730.84 339.08 L735.43 339.26 L739.86 339.38 L746.31 339.44 L748.44 339.44 L752.60 339.44 L756.71 339.44 L760.44 339.38 L763.80 339.38 L767.00 339.32 L769.99 339.38 L772.55 339.38 L773.62 339.38 L775.32 339.38 L776.66 339.44 L777.99 339.44 L779.00 339.50 L780.23 339.61 L781.14 339.73 L781.14 339.73" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M221.30 343.24 L220.44 342.76 L219.54 342.53 L217.35 342.47 L214.68 342.47 L209.94 342.94 L208.18 343.24 L204.66 343.95 L201.19 344.84 L198.04 345.67 L195.48 346.45 L193.08 347.34 L191.11 348.29 L189.46 349.18 L188.71 349.71 L187.75 350.54 L187.22 351.32 L187.80 353.28 L189.30 354.64 L191.32 356.07 L193.99 357.49 L197.03 359.10 L200.44 360.58 L203.80 362.07 L205.51 362.72 L208.87 364.03 L212.23 365.04 L215.27 365.69 L218.15 365.99 L221.99 365.87 L224.23 365.39 L226.15 364.62 L227.64 363.43 L228.23 362.72 L229.19 361.12 L229.62 359.16 L229.67 357.32 L229.51 354.94 L229.19 352.62 L228.60 350.49 L227.96 348.64 L226.58 347.04 L225.35 346.74 L225.35 346.74" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M788.12 308.13 L787.70 308.85 L787.54 309.80 L788.34 310.27 L790.95 310.69 L793.56 310.86 L797.62 310.69 L800.50 310.51 L803.32 310.21 L805.88 309.91 L807.16 309.74 L809.56 309.44 L810.63 309.26 L812.28 309.02 L813.56 308.79 L813.56 308.79" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M814.26 297.68 L814.90 298.27 L816.23 299.52 L817.51 300.94 L818.84 302.61 L820.12 304.57 L821.24 306.47 L821.88 308.55 L822.15 310.57 L821.78 312.59 L820.60 314.67 L818.04 316.57 L816.12 317.52 L816.12 317.52" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<text x="848.52" y="305.99" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="848.52" dy="0">vibe code khiến attack</tspan><tspan x="848.52" dy="20">surface càng rộng hơn ??</tspan></text>
</g>
<g transform="translate(-56.90,-122.44)">
<text x="452.66" y="854.65" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="16" fill="#c2255c" text-anchor="start"><tspan x="452.66" dy="0">nma AI agent nó cũng pentest được mà ???</tspan></text>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M374.90 822.49 L375.32 821.60 L375.75 820.70 L376.18 820.05 L376.34 821.24 L376.34 822.55 L376.12 825.04 L375.91 827.36 L375.75 829.79 L375.48 833.42 L375.32 835.85 L375.27 837.10 L375.11 838.88 L374.95 840.25 L374.90 841.26 L375.06 842.56 L375.43 843.45 L376.07 844.17 L377.83 845.41 L379.48 846.07 L381.40 846.72 L383.59 847.14 L385.99 847.43 L388.82 847.55 L391.80 847.61 L395.06 847.55 L396.71 847.49 L400.28 847.14 L403.86 846.72 L407.32 846.25 L410.36 845.89 L414.63 845.53 L417.14 845.36 L419.43 845.12 L421.19 845.00 L422.58 844.88 L423.64 844.82 L424.82 844.76 L425.78 844.70 L425.78 844.70" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M425.03 837.69 L425.35 836.98 L426.15 836.50 L427.32 836.50 L428.23 836.74 L429.83 837.46 L430.52 837.81 L431.70 838.52 L432.60 839.12 L433.19 839.77 L433.40 840.84 L432.18 842.98 L428.39 845.47 L426.15 846.25 L426.15 846.25" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M418.90 846.84 L419.22 847.67 L420.07 848.09 L420.98 847.79 L421.78 847.32 L422.74 846.90 L424.28 845.89 L426.10 844.76 L427.86 843.34 L428.87 842.68 L428.87 842.68" stroke="#c2255c" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260903194748_336.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260903194748_336.png"><g transform="translate(-56.90,-122.44)">
<image x="141.90391646984028" y="945.4224144060588" width="890.3390105491457" height="394.6863655011677" href="../0-asset/pasted-image-20260903194748_336.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
<g transform="translate(-56.90,-122.44)">
<path d="M663.94 1028.75 C708.28 1029.55,750.36 1028.33,874.13 1028.77 M662.59 1026.95 C727.25 1027.64,790.41 1026.85,874.05 1028.28 M875.64 1026.90 C875.41 1040.92,875.48 1058.86,873.94 1070.33 M875.39 1027.71 C873.67 1042.93,874.04 1059.13,874.73 1069.00 M873.22 1068.60 C816.41 1069.96,758.07 1071.90,664.33 1070.05 M875.71 1070.37 C808.45 1069.61,740.98 1069.16,662.71 1069.94 M664.49 1069.00 C662.81 1052.19,663.31 1040.31,664.73 1025.53 M662.55 1069.96 C661.82 1053.26,663.15 1037.03,662.19 1027.30" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(-56.90,-122.44)">
<path d="M425.85 1103.03 C492.06 1101.49,558.00 1101.60,668.82 1103.15 M426.72 1102.05 C523.15 1104.31,618.47 1103.09,669.44 1102.94 M669.43 1102.88 C670.37 1134.55,670.20 1162.65,669.50 1190.10 M670.01 1102.97 C669.11 1128.17,669.03 1156.36,669.51 1190.75 M667.81 1192.05 C619.31 1192.98,568.38 1194.18,428.15 1191.86 M669.29 1191.31 C581.26 1191.86,492.38 1192.85,426.15 1192.16 M425.15 1189.87 C427.10 1155.88,427.14 1119.85,426.72 1101.18 M425.91 1191.44 C427.14 1159.25,426.93 1126.41,426.86 1102.85" stroke="#c2255c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<a href="../0-asset/pasted-image-20260903194936_024.png" class="excalidraw-node-link external" target="_blank" rel="noopener" title="Xem ảnh: Pasted Image 20260903194936_024.png"><g transform="translate(-56.90,-122.44)">
<image x="182.3880525965269" y="1396.2853546142578" width="636.1088435374149" height="482" href="../0-asset/pasted-image-20260903194936_024.png" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>
</g></a>
</svg>
    </div>
  </div>
</div>


---

## 📖 Nội dung chi tiết bài viết (Writeup)

<div id="doc-e7dd68eb98db5e926a00066eb39b9e990c947b77" class="notion-callout-card">

Ừ, phần này nói về thực trạng security hiện nay và giới thiệu **NoScope** – một nền tảng pentest tự động dùng AI.

### 📘 Vấn đề:
- Trước đây, từ lúc công bố lỗ hổng tới khi bị khai thác mất **nhiều năm**. Giờ rút xuống còn **vài giờ**.
- Trong khi đó, dev ship code **nhiều lần một ngày**, bề mặt tấn công ngày càng rộng.
- Pentest kiểu **1 quý/lần hoặc 1 năm/lần** không theo kịp tốc độ đó. Lỗ hổng sinh ra và bị khai thác trước khi có ai test.

### 🧪 NoScope là gì?
- Là nền tảng **pentest tự động dùng AI**.
- Nó thả các **agent** chuyên biệt làm việc:
  - **Map** bề mặt tấn công.
  - **Xây dựng attack graph** (sơ đồ các bước tấn công khả thi).
  - **Tạo payload** nhắm đúng mục tiêu.
  - **Xác nhận exploitability end-to-end** – tức là chỉ báo cáo lỗi khi đã chứng minh khai thác được thật, không báo false positive.
- Ví dụ: CVE-2026-35482 (lỗi sandbox escape trong Alf.io) được NoScope tự động tìm ra, xác nhận, và phối hợp công bố CVE, không cần đọc code.

### 🔥 Điểm đáng chú ý:
- NoScope đã được các công ty lớn trong chính phủ, hàng không, quân sự tin dùng.
- Trong lab này, mày có thể bật máy, mở NoScope, nhập IP mục tiêu, điền vài thông tin, rồi xem agent hoạt động real-time: log, lý luận, cách nó tìm ra lỗi.

Tóm lại: **NoScope là giải pháp cho bài toán pentest không theo kịp tốc độ phát triển phần mềm** – tự động hóa toàn bộ quy trình từ do thám đến xác nhận khai thác. Nghe khá ngầu đúng không? 😎

</div>

---

