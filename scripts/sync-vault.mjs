import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import LZString from "lz-string";
import { renderToSvg } from "@moona3k/excalidraw-export";
import { slugifyFilePath } from "@quartz-community/utils";

const REPO_URL = "https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-.git";
const CACHE_DIR = path.resolve(".vault-cache");
const CONTENT_DIR = path.resolve("content");

// 1. Acquire Vault
function getVaultPath() {
  const customPath = process.argv[2] || process.env.VAULT_PATH;
  if (customPath && fs.existsSync(customPath)) {
    console.log(`Using custom local vault at: ${customPath}`);
    return customPath;
  }

  // Check if /tmp/user-vault already exists from earlier clone
  if (fs.existsSync("/tmp/user-vault/.git")) {
    console.log("Using existing /tmp/user-vault...");
    return "/tmp/user-vault";
  }

  // Clone or pull into .vault-cache
  if (!fs.existsSync(CACHE_DIR)) {
    console.log(`Cloning repository from ${REPO_URL}...`);
    execSync(`git clone --depth 1 "${REPO_URL}" "${CACHE_DIR}"`, { stdio: "inherit" });
  } else {
    console.log("Updating cached vault via git pull...");
    try {
      execSync(`git -C "${CACHE_DIR}" pull`, { stdio: "inherit" });
    } catch (e) {
      console.warn("Git pull failed, using existing cache.", e.message);
    }
  }
  return CACHE_DIR;
}

// Helper to copy directory recursively
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.name === ".git" || entry.name === ".obsidian") continue;

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Walk files helper
function getAllFiles(dir, ext = "") {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.name === ".git" || item.name === ".obsidian") continue;
    if (item.isDirectory()) {
      results = results.concat(getAllFiles(full, ext));
    } else if (!ext || item.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

// Post-process SVG to add clickable links to notes
function enhanceSvgWithLinks(svgString, elements, slugMap, currentFileRel) {
  let enhanced = svgString;

  // Make sure background is transparent for dark mode
  enhanced = enhanced.replace(/<rect width="100%" height="100%" fill="[^"]+"\/>/, "");

  // Make SVG responsive
  enhanced = enhanced.replace(/<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+width="(\d+)"\s+height="(\d+)"\s+viewBox="([^"]+)">/, (match, w, h, vb) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" class="excalidraw-svg" data-width="${w}" data-height="${h}">`;
  });

  // Find text elements with links: [[Target]]
  for (const el of elements) {
    if (el.type !== "text") continue;
    const textToCheck = el.rawText || el.text || "";
    const linkMatch = textToCheck.match(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/);
    if (linkMatch) {
      const targetName = linkMatch[1].trim();
      const targetSlug = slugMap.get(targetName.toLowerCase());
      if (targetSlug) {
        // Calculate relative path from currentFile to targetSlug
        const currentDir = path.dirname(currentFileRel);
        let relUrl = path.relative(currentDir, targetSlug);
        if (!relUrl.startsWith(".")) relUrl = "./" + relUrl;

        // Find the text in the SVG
        const escapedDisplay = el.text ? el.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "";
        if (escapedDisplay) {
          const textRegex = new RegExp(`(<text[^>]*>([\\s\\S]*?${escapedDisplay}[\\s\\S]*?)<\\/text>)`, "g");
          enhanced = enhanced.replace(textRegex, (m, fullText) => {
            return `<a href="${relUrl}" class="excalidraw-node-link" title="${targetName}" target="_self">${fullText}</a>`;
          });
        }
      }
    } else if (el.link && (el.link.startsWith("http://") || el.link.startsWith("https://"))) {
      const escapedDisplay = el.text ? el.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "";
      if (escapedDisplay) {
        const textRegex = new RegExp(`(<text[^>]*>([\\s\\S]*?${escapedDisplay}[\\s\\S]*?)<\\/text>)`, "g");
        enhanced = enhanced.replace(textRegex, (m, fullText) => {
          return `<a href="${el.link}" class="excalidraw-node-link external" target="_blank" rel="noopener noreferrer">${fullText}</a>`;
        });
      }
    }
  }

  return enhanced;
}

async function main() {
  console.log("=== Bắt đầu đồng bộ và xử lý nội dung Obsidian Blog ===");
  const vaultPath = getVaultPath();
  console.log(`Thư mục nguồn Vault: ${vaultPath}`);

  // Create content dir if missing
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Copy folders from vault
  const foldersToCopy = [
    "0-asset",
    "0_Excalidraw",
    "1-Linux",
    "2-Ngôn ngữ lập trình",
    "3-ctf",
    "4-kiến thức bên lề",
    "5-Kinh nghiệm trải nghiệm",
    "hack the box",
    "portswigger",
    "Tools",
    "tryhackme"
  ];

  for (const folder of foldersToCopy) {
    const src = path.join(vaultPath, folder);
    const dest = path.join(CONTENT_DIR, folder);
    if (fs.existsSync(src)) {
      console.log(`Đang sao chép ${folder}...`);
      copyDirRecursive(src, dest);
    }
  }

  // Also copy 0-INDEX.md and README.md
  if (fs.existsSync(path.join(vaultPath, "0-INDEX.md"))) {
    fs.copyFileSync(path.join(vaultPath, "0-INDEX.md"), path.join(CONTENT_DIR, "0-INDEX.md"));
  }

  // 2. Build slug map for backlinks
  console.log("Đang lập bản đồ liên kết (Slug Map) cho tất cả ghi chú...");
  const allMdFiles = getAllFiles(CONTENT_DIR, ".md");
  const slugMap = new Map();

  for (const mdPath of allMdFiles) {
    const relPath = path.relative(CONTENT_DIR, mdPath);
    const baseName = path.basename(mdPath, ".md");
    const slug = slugifyFilePath(relPath);
    slugMap.set(baseName.toLowerCase(), slug);
  }
  console.log(`Đã lập chỉ mục cho ${slugMap.size} ghi chú.`);

  // 3. Process each Markdown file
  let excalidrawCount = 0;
  let normalNoteCount = 0;

  for (const mdPath of allMdFiles) {
    // Skip homepage index.md if we generated it
    if (path.relative(CONTENT_DIR, mdPath) === "index.md") continue;

    let content = fs.readFileSync(mdPath, "utf8");
    const relPath = path.relative(CONTENT_DIR, mdPath);
    const baseName = path.basename(mdPath, ".md");

    const isExcalidraw = content.includes("excalidraw-plugin") ||
                         content.includes("```compressed-json") ||
                         baseName.endsWith(".excalidraw");

    if (isExcalidraw) {
      excalidrawCount++;
      const match = content.match(/```compressed-json\s+([\s\S]*?)\s+```/);
      let svgHtml = "";
      let backlinksList = [];

      if (match) {
        try {
          const raw = match[1].replace(/\s+/g, "");
          const decompressed = LZString.decompressFromBase64(raw);
          const json = JSON.parse(decompressed);
          
          // Render SVG
          const rawSvg = renderToSvg(json, { background: "transparent" });
          const enhancedSvg = enhanceSvgWithLinks(rawSvg, json.elements || [], slugMap, relPath);

          const diagramId = "ex-" + Math.random().toString(36).substring(2, 8);
          svgHtml = `
<div class="excalidraw-container" id="${diagramId}">
  <div class="excalidraw-toolbar">
    <div class="excalidraw-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
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
      ${enhancedSvg}
    </div>
  </div>
</div>
`;

          // Extract backlinks from text elements
          const textElementsMatch = content.match(/## Text Elements([\s\S]*?)(?:%%|##|$)/);
          if (textElementsMatch) {
            const rawText = textElementsMatch[1];
            const linkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
            let lm;
            const seen = new Set();
            while ((lm = linkRegex.exec(rawText)) !== null) {
              const target = lm[1].trim();
              if (!seen.has(target)) {
                seen.add(target);
                backlinksList.push(target);
              }
            }
          }
        } catch (err) {
          console.error(`Lỗi render Excalidraw cho ${baseName}:`, err.message);
        }
      }

      // Reconstruct file content
      const frontmatter = `---
title: "${baseName}"
tags:
  - excalidraw
  - mindmap
---

`;

      let body = frontmatter + svgHtml;

      if (backlinksList.length > 0) {
        body += `\n\n### 🔗 Các liên kết trong sơ đồ\n\n`;
        for (const item of backlinksList) {
          body += `- [[${item}]]\n`;
        }
      }

      fs.writeFileSync(mdPath, body, "utf8");
    } else {
      normalNoteCount++;
      // Normal note: ensure valid frontmatter & clean title
      if (!content.startsWith("---")) {
        content = `---
title: "${baseName}"
---

` + content;
        fs.writeFileSync(mdPath, content, "utf8");
      }
    }
  }

  console.log(`Đã xử lý: ${excalidrawCount} sơ đồ Excalidraw và ${normalNoteCount} bài viết Markdown.`);

  // 4. Create HomePage index.md
  createHomePage(CONTENT_DIR, slugMap);

  console.log("=== Đồng bộ hoàn tất! ===");
}

function createHomePage(contentDir, slugMap) {
  const indexMdPath = path.join(contentDir, "index.md");
  
  // Also load 0-INDEX SVG if exists to embed on homepage!
  const zeroIndexPath = path.join(contentDir, "0-INDEX.md");
  let embeddedIndexSvg = "";
  if (fs.existsSync(zeroIndexPath)) {
    const rawZero = fs.readFileSync(zeroIndexPath, "utf8");
    const match = rawZero.match(/<div class="excalidraw-container"[\s\S]*?<\/div>\s*<\/div>/);
    if (match) {
      embeddedIndexSvg = match[0];
    }
  }

  const homeContent = `---
title: "Cyber Security & Pentest Knowledge Garden"
---

<div class="hero-section">
  <div class="hero-badge">🛡️ InfoSec Knowledge Base & CTF Writeups</div>
  <h1 class="hero-title">Bảo Mật Thông Tin & Pentest Lab</h1>
  <p class="hero-desc">
    Khu vườn tri thức số về an toàn thông tin, tổng hợp các ghi chú, sơ đồ tư duy (Mindmap), writeup từ các nền tảng hàng đầu: 
    <strong>PortSwigger Web Security Academy</strong>, <strong>TryHackMe</strong>, <strong>HackTheBox</strong>, <strong>Linux</strong> &amp; <strong>Công cụ Pentest</strong>.
  </p>
</div>

<div class="category-grid">
  <a href="./portswigger/server-side-vulnerabilities/0-server-side" class="cat-card">
    <div class="cat-icon">🌐</div>
    <div class="cat-info">
      <h3>PortSwigger Academy</h3>
      <p>XSS, SQLi, SSRF, CORS, Server-side &amp; Client-side vulnerabilities.</p>
    </div>
  </a>

  <a href="./tryhackme/0-try-hackme" class="cat-card">
    <div class="cat-icon">🚩</div>
    <div class="cat-info">
      <h3>TryHackMe Labs</h3>
      <p>Network, Active Directory, CVEs, Reverse Shell, RCE &amp; Web Pentest.</p>
    </div>
  </a>

  <a href="./1-linux/0-linux" class="cat-card">
    <div class="cat-icon">🐧</div>
    <div class="cat-info">
      <h3>Linux Administration</h3>
      <p>Lệnh cơ bản, hệ thống Fedora/Ubuntu, Cheatsheet, Netcat &amp; Cấu hình mạng.</p>
    </div>
  </a>

  <a href="./tools/0-tool" class="cat-card">
    <div class="cat-icon">🛠️</div>
    <div class="cat-info">
      <h3>Công Cụ (Tools)</h3>
      <p>Burp Suite, ffuf, sqlmap, nmap, nikto &amp; bí kíp sử dụng thực chiến.</p>
    </div>
  </a>

  <a href="./4-kiến-thức-bên-lề/0-tổng-hợp" class="cat-card">
    <div class="cat-icon">💡</div>
    <div class="cat-info">
      <h3>Kiến Thức Cốt Lõi</h3>
      <p>SOP, Reverse Proxy, MFA Bypass, JWT, Cookie &amp; Session, IDOR.</p>
    </div>
  </a>

  <a href="./3-ctf/0-ctf" class="cat-card">
    <div class="cat-icon">🎯</div>
    <div class="cat-info">
      <h3>CTF Writeups</h3>
      <p>Tổng hợp các thử thách và giải pháp CTF (PTIT CTF, HackTheBox,...).</p>
    </div>
  </a>
</div>

---

## 🗺️ Sơ đồ tư duy tổng thể (Master Mindmap)

Dưới đây là sơ đồ Mindmap tổng quan toàn bộ hệ thống kiến thức trong kho ghi chú. Bạn có thể tương tác (Zoom, kéo thả) hoặc **click trực tiếp vào các nút** (📍0-XSS, 📍0-SSRF, 📍0-linux...) để mở bài viết tương ứng:

${embeddedIndexSvg || "*(Sơ đồ tổng quan được đồng bộ từ `0-INDEX.md`)*"}

---

### 📌 Liên kết nhanh tới các mục chính
- [[0-INDEX|🗺️ Xem trang Sơ đồ tổng thể 0-INDEX]]
- [[0-server side|🌐 Lỗ hổng Server Side (PortSwigger)]]
- [[0-XSS|⚡ Tổng quan Cross-Site Scripting (XSS)]]
- [[0-tổng hợp sql injection|💉 Tổng hợp SQL Injection]]
- [[0-SSRF|📡 Server-Side Request Forgery (SSRF)]]
- [[0-map CORS|🔓 Khai thác Cross-Origin Resource Sharing (CORS)]]
- [[0-Try hackme|🚩 Tổng quan TryHackMe Labs]]
- [[0-linux|🐧 Cẩm nang Linux]]
- [[0-tool|🛠️ Kho công cụ Pentest]]
`;

  fs.writeFileSync(indexMdPath, homeContent, "utf8");
  console.log("Đã khởi tạo trang chủ content/index.md thành công!");
}

main().catch(err => {
  console.error("Lỗi khi đồng bộ:", err);
  process.exit(1);
});
