---
title: "Hướng tư duy khai thác SSRF"
tags:
  - excalidraw
  - mindmap
---


<div class="excalidraw-container" id="ex-3c9f78ea">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1331 1288" width="1331" height="1288" class="excalidraw-svg" data-width="1331" data-height="1288">
<g transform="translate(866.74,962.33)">
<text x="-682.04" y="-820.10" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#e03131" text-anchor="start"><tspan x="-682.04" dy="0">writeup</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-533.73 -641.25 C-403.20 -641.93,-273.54 -641.08,-207.87 -641.41 M-534.72 -641.58 C-465.64 -639.73,-396.40 -639.58,-207.66 -642.49 M-207.48 -641.83 C-208.22 -536.52,-207.49 -429.45,-208.29 -369.09 M-207.70 -641.37 C-207.10 -572.97,-206.22 -504.41,-207.64 -369.08 M-206.50 -368.05 C-308.98 -367.32,-408.30 -367.84,-534.40 -368.38 M-207.57 -369.46 C-325.11 -370.60,-442.41 -369.86,-533.64 -368.32 M-533.02 -368.92 C-534.55 -427.95,-534.50 -488.69,-532.93 -641.85 M-534.48 -368.82 C-535.22 -429.17,-535.15 -490.47,-534.64 -642.05" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-521.36" y="-616.25" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-521.36" dy="0">server</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<text x="-708.94" y="-758.52" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-708.94" dy="0">Bước 1: xác định server gồm những</tspan><tspan x="-708.94" dy="25">internal, external system nào</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-643.62 -723.56 C-641.66 -715.41,-654.57 -687.05,-632.64 -673.56 C-610.70 -660.07,-531.90 -648.10,-512.01 -642.62 M-644.50 -721.30 C-642.68 -713.07,-655.26 -685.81,-633.29 -672.58 C-611.32 -659.34,-532.63 -646.85,-512.68 -641.89" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-526.20 -636.47 C-523.14 -638.21,-518.46 -639.13,-513.68 -640.43 M-526.41 -637.58 C-522.17 -637.82,-519.62 -639.47,-512.12 -642.11" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-511.76 -640.51 C-516.99 -644.59,-520.64 -647.64,-524.41 -650.92 M-511.97 -641.63 C-514.50 -643.66,-518.69 -647.04,-522.84 -652.60" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-526.32" y="-542.77" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="19.157381926627266" fill="#000000" text-anchor="start"><tspan x="-526.32" dy="0">/product/checkstock</tspan><tspan x="-526.32" dy="23.946727408284083">/product/nextProduct/path=....</tspan><tspan x="-526.32" dy="23.946727408284083"></tspan><tspan x="-526.32" dy="23.946727408284083">192.168.0.12/admin</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-529.67 -553.99 C-538.32 -552.85,-564.93 -551.59,-581.19 -547.09 C-597.44 -542.59,-619.58 -530.39,-627.21 -527.00 M-531.03 -551.96 C-539.37 -551.06,-563.40 -552.58,-579.04 -548.78 C-594.68 -544.97,-616.87 -532.44,-624.88 -529.13" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-617.42 -540.58 C-619.31 -536.39,-622.93 -529.83,-624.82 -526.21 M-617.64 -539.37 C-620.52 -535.49,-623.73 -529.84,-626.09 -527.00" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-626.22 -528.44 C-619.89 -528.03,-615.28 -525.14,-609.90 -524.65 M-626.45 -527.23 C-620.50 -527.46,-614.86 -525.76,-611.17 -525.45" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-759.90" y="-500.88" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-759.90" dy="0">truy cập được qua</tspan><tspan x="-759.90" dy="25">enpoint stockAPI</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-226.32 -514.65 C-216.77 -517.21,-190.29 -530.38,-168.96 -529.56 C-147.64 -528.75,-110.48 -513.08,-98.38 -509.74 M-224.69 -515.49 C-214.66 -518.47,-188.12 -532.45,-166.67 -531.34 C-145.23 -530.23,-107.26 -512.58,-96.00 -508.81" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-113.19 -506.25 C-108.05 -507.18,-106.76 -506.33,-97.59 -508.92 M-111.46 -504.91 C-108.87 -505.67,-105.46 -506.90,-97.17 -509.14" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-98.59 -509.70 C-98.68 -512.36,-102.63 -513.08,-107.87 -519.83 M-96.87 -508.36 C-99.45 -510.92,-101.27 -513.72,-107.45 -520.06" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-177.36" y="-482.47" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-177.36" dy="0">truy cập được qua GET ....</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-335.41 -468.67 C-323.83 -460.49,-279.17 -442.59,-265.72 -418.22 C-252.27 -393.85,-256.48 -338.41,-254.70 -322.42 M-333.73 -466.45 C-322.14 -458.17,-279.20 -441.17,-266.11 -416.97 C-253.02 -392.77,-257.10 -337.22,-255.20 -321.26" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-263.87 -335.49 C-262.84 -330.38,-260.45 -329.01,-254.88 -323.37 M-263.49 -334.12 C-261.66 -330.97,-259.52 -328.15,-255.91 -322.59" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-254.86 -323.49 C-254.45 -324.43,-252.79 -329.08,-249.00 -337.17 M-254.49 -322.13 C-253.31 -325.99,-252.02 -330.18,-250.03 -336.39" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-401.03" y="-297.02" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-401.03" dy="0">-ko thể truy cập từ GET</tspan><tspan x="-401.03" dy="25"></tspan><tspan x="-401.03" dy="25">(ko thể truy cập từ bên ngoài, chỉ</tspan><tspan x="-401.03" dy="25">có thể thông qua system)</tspan><tspan x="-401.03" dy="25"></tspan><tspan x="-401.03" dy="25">-ko thể truy cập bởi chính</tspan><tspan x="-401.03" dy="25">stockAPI do có whitelist</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<text x="-668.59" y="-74.20" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-668.59" dy="0">Bước 2.Tìm giải pháp truy cập tới 192.168.0.12/admin</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<text x="-564.97" y="-20.27" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-564.97" dy="0">/product/checkstock</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<text x="-557.90" y="20.60" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-557.90" dy="0">/product/nextProduct/path=....</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<text x="-550.20" y="74.72" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-550.20" dy="0">192.168.0.12/admin</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-339.01 71.43 L-338.30 71.43 L-336.89 71.43 L-335.47 71.43 L-333.35 71.43 L-331.93 71.43 L-329.10 71.43 L-326.98 71.43 L-324.15 71.43 L-320.61 72.14 L-317.78 72.84 L-314.24 73.55 L-309.99 74.26 L-305.74 75.67 L-301.50 75.67 L-297.25 77.09 L-292.29 77.80 L-288.05 78.51 L-283.80 79.92 L-279.55 79.92 L-275.31 80.63 L-270.35 81.34 L-267.52 82.05 L-263.98 82.05 L-260.44 82.75 L-256.90 82.75 L-253.36 82.75 L-251.24 82.75 L-247.70 82.75 L-244.87 81.34 L-242.04 80.63 L-240.62 79.92 L-237.79 79.21 L-236.38 77.80 L-234.25 76.38 L-232.13 75.67 L-230.71 74.26 L-228.59 72.84 L-227.18 72.14 L-225.05 70.01 L-223.64 67.89 L-222.22 65.77 L-220.10 63.64 L-219.39 61.52 L-217.97 59.39 L-216.56 56.56 L-215.85 55.15 L-215.14 53.02 L-213.73 50.90 L-213.02 48.78 L-212.31 47.36 L-211.60 45.24 L-211.60 43.82 L-211.60 42.41 L-211.60 41.70 L-211.60 40.99 L-211.60 39.58 L-211.60 38.87 L-211.60 37.45 L-212.31 36.74 L-213.02 35.33 L-213.73 34.62 L-213.73 33.91 L-214.43 33.91 L-214.43 33.21 L-215.14 33.21 L-215.14 32.50 L-215.85 32.50 L-215.85 31.79 L-216.56 31.79 L-217.27 31.79 L-217.27 31.08 L-217.97 31.08 L-218.68 31.08 L-219.39 31.08 L-219.39 30.37 L-220.10 30.37 L-220.10 29.67 L-220.80 29.67 L-221.51 28.96 L-222.22 28.96 L-222.22 28.25 L-222.93 28.25 L-223.64 27.54 L-224.34 26.84 L-225.05 26.84 L-225.76 26.84 L-226.47 26.84 L-227.18 26.84 L-227.88 26.13 L-229.30 26.13 L-230.01 25.42 L-231.42 24.71 L-232.13 24.71 L-233.55 24.71 L-234.96 24.00 L-235.67 24.00 L-236.38 23.30 L-237.08 23.30 L-237.79 23.30 L-238.50 23.30 L-239.21 23.30 L-239.92 23.30 L-240.62 22.59 L-241.33 22.59 L-242.04 22.59 L-242.04 22.59" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-244.16 38.87 L-244.16 38.16 L-244.87 37.45 L-245.58 36.04 L-246.29 34.62 L-246.99 33.91 L-246.99 32.50 L-247.70 31.08 L-248.41 29.67 L-248.41 28.25 L-248.41 26.84 L-248.41 26.13 L-248.41 24.71 L-248.41 24.00 L-247.70 24.00 L-246.99 23.30 L-246.29 23.30 L-245.58 23.30 L-244.87 22.59 L-243.46 22.59 L-240.62 22.59 L-236.38 22.59 L-232.84 21.88 L-227.18 20.46 L-221.51 19.05 L-216.56 18.34 L-211.60 17.63 L-208.06 16.22 L-205.94 15.51 L-203.82 14.80 L-203.11 14.80 L-203.11 14.80" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-563.39 10.56 L-564.10 10.56 L-565.51 10.56 L-566.93 10.56 L-569.05 10.56 L-570.47 10.56 L-572.59 10.56 L-574.72 10.56 L-576.84 10.56 L-578.25 10.56 L-580.38 10.56 L-582.50 10.56 L-586.75 10.56 L-589.58 11.26 L-593.12 11.26 L-597.37 11.97 L-601.61 12.68 L-606.57 14.09 L-611.52 15.51 L-615.06 16.22 L-617.89 17.63 L-620.72 19.05 L-623.55 19.76 L-624.26 20.46 L-624.97 20.46 L-625.68 20.46 L-626.39 21.17 L-626.39 21.88 L-626.39 22.59 L-626.39 22.59" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-623.55 7.02 L-623.55 7.72 L-623.55 8.43 L-624.26 10.56 L-624.97 11.97 L-626.39 14.80 L-627.80 17.63 L-628.51 20.46 L-629.22 22.59 L-630.63 24.71 L-631.34 26.84 L-632.05 28.25 L-632.05 28.96 L-632.76 30.37 L-632.76 31.08 L-632.76 31.79 L-632.76 32.50 L-632.05 32.50 L-630.63 32.50 L-629.22 32.50 L-627.09 32.50 L-624.26 31.79 L-621.43 31.08 L-618.60 31.08 L-615.77 30.37 L-612.94 29.67 L-610.11 29.67 L-608.69 29.67 L-608.69 29.67" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-746.72" y="42.02" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-746.72" dy="0">stockAPI=.....</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-683.86 64.68 C-682.94 73.11,-689.72 100.82,-677.24 115.01 C-664.75 129.20,-620.36 144.20,-608.94 149.80 M-682.10 63.44 C-681.36 72.10,-690.23 102.34,-678.13 116.39 C-666.02 130.44,-621.14 142.23,-609.47 147.73" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-623.54 150.62 C-619.87 150.77,-614.02 149.76,-609.73 149.43 M-624.77 149.48 C-619.92 150.24,-615.04 149.11,-610.05 148.62" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-608.57 149.72 C-612.50 146.00,-614.20 141.22,-618.00 136.92 M-609.80 148.58 C-612.13 145.93,-614.52 141.16,-618.32 136.10" stroke="#1971c2" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-587.37" y="153.82" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-587.37" dy="0">server bỏ qua whitelist</tspan><tspan x="-587.37" dy="25">==&gt; truy cập tới internal system là </tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<text x="-541.74" y="208.38" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#000000" text-anchor="start"><tspan x="-541.74" dy="0">/product/nextProduct/path=....</tspan><tspan x="-541.74" dy="25">==&gt; redirect tới 1 cái internal system khác là</tspan><tspan x="-541.74" dy="25">192.168.0.12/admin</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-827.17 -869.05 C-403.19 -872.21,18.94 -872.02,424.44 -869.64 M-827.08 -869.51 C-543.25 -864.57,-258.99 -864.63,423.64 -869.44 M423.72 -869.20 C426.97 -615.81,427.80 -361.34,423.36 285.80 M423.89 -869.14 C421.72 -605.76,421.49 -342.28,423.68 285.22 M424.44 286.21 C126.75 287.73,-170.86 287.10,-826.98 285.06 M424.00 285.09 C165.99 285.98,-92.44 286.46,-826.62 285.54 M-827.17 285.06 C-822.33 -170.27,-821.51 -627.28,-827.27 -869.94 M-826.80 285.47 C-827.55 0.97,-827.31 -283.20,-827.05 -869.04" stroke="#000000" stroke-width="0.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12 8"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-279.18" y="-760.53" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-279.18" dy="0">Xác định quyền truy cập tới các</tspan><tspan x="-279.18" dy="25">internal , external system đó</tspan></text>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-368.16 -754.16 C-337.86 -753.32,-308.37 -755.67,-283.32 -755.44 M-370.07 -754.08 C-341.16 -754.53,-312.56 -753.29,-284.24 -755.61" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-298.82 -747.68 C-292.07 -749.45,-287.76 -751.49,-286.30 -755.96 M-297.69 -747.57 C-294.70 -749.31,-290.54 -752.28,-284.50 -754.54" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-285.99 -755.46 C-288.44 -756.97,-293.31 -758.82,-299.45 -763.18 M-284.86 -755.34 C-288.96 -756.76,-291.90 -759.58,-297.65 -761.77" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<path d="M-138.58 -77.85 C-107.29 -78.92,-78.17 -80.10,-34.75 -83.04 M-137.10 -78.83 C-102.32 -78.79,-68.33 -80.31,-36.63 -81.47" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-48.60 -73.43 C-44.54 -76.30,-40.88 -79.69,-37.76 -83.38 M-49.43 -74.11 C-45.55 -76.52,-42.38 -78.18,-36.68 -82.17" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M-35.89 -81.40 C-39.30 -84.13,-43.12 -87.24,-51.02 -90.40 M-36.73 -82.08 C-40.20 -83.99,-44.38 -85.38,-49.94 -89.19" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g transform="translate(866.74,962.33)">
<text x="-25.11" y="-89.52" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-25.11" dy="0">Lắp ghép các url dẫn tới internal</tspan><tspan x="-25.11" dy="25">system qua các con đường giúp server</tspan><tspan x="-25.11" dy="25">có thể đi tới các url đó</tspan></text>
</g>
<a href="./whitelist-bypass" class="excalidraw-node-link" target="_self" title="whitelist bypass"><g transform="translate(866.74,962.33)">
<text x="-482.01" y="-902.33" font-family="'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive" font-size="20" fill="#1971c2" text-anchor="start"><tspan x="-482.01" dy="0">📍whitelist bypass</tspan></text>
</g></a>
</svg>
    </div>
  </div>
</div>


### 🔗 Các bài viết liên kết trong sơ đồ

- [[whitelist bypass]]
