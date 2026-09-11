import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import LZString from "lz-string";
import { slugifyFilePath } from "@quartz-community/utils";
import { getBoundingBox } from "../node_modules/@moona3k/excalidraw-export/src/utils.js";
import {
  renderRectangle,
  renderEllipse,
  renderDiamond,
  renderLine,
  renderText,
  renderFreedraw,
  renderImage,
  renderFrame,
} from "../node_modules/@moona3k/excalidraw-export/src/shapes.js";

const REPO_URL = "https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-.git";
const CACHE_DIR = path.resolve(".vault-cache");
const CONTENT_DIR = path.resolve("content");

const RENDERERS = {
  rectangle: renderRectangle,
  ellipse: renderEllipse,
  diamond: renderDiamond,
  line: renderLine,
  arrow: renderLine,
  text: renderText,
  freedraw: renderFreedraw,
  image: renderImage,
  frame: renderFrame,
};

const PADDING = 40;

// High-performance, clean SVG renderer with clickable links and 0 font bloat
function renderExcalidrawToSvgWithLinks(doc, slugMap, currentFileRel) {
  const elements = (doc.elements || []).filter((el) => !el.isDeleted);
  if (elements.length === 0) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"></svg>';
  }

  const bbox = getBoundingBox(elements);
  const width = Math.ceil(bbox.width + PADDING * 2);
  const height = Math.ceil(bbox.height + PADDING * 2);
  const offsetX = -bbox.minX + PADDING;
  const offsetY = -bbox.minY + PADDING;
  const files = doc.files || {};

  const rendered = [];
  for (const el of elements) {
    const render = RENDERERS[el.type];
    if (!render) continue;

    const svg = render(el, files);
    if (!svg) continue;

    const opacity = el.opacity != null && el.opacity < 100
      ? ` opacity="${(el.opacity / 100).toFixed(2)}"`
      : "";

    let rotation = "";
    if (el.angle && el.angle !== 0) {
      const cx = el.x + (el.width || 0) / 2;
      const cy = el.y + (el.height || 0) / 2;
      const deg = (el.angle * 180) / Math.PI;
      rotation = ` rotate(${deg.toFixed(2)},${cx.toFixed(2)},${cy.toFixed(2)})`;
    }

    let group = `<g transform="translate(${offsetX.toFixed(2)},${offsetY.toFixed(2)})${rotation}"${opacity}>\n${svg}\n</g>`;

    // Find links: either [[Target]] in rawText / text or direct el.link
    let linkUrl = null;
    let linkTitle = "";
    const rawToCheck = (el.rawText || el.text || "");
    const linkMatch = rawToCheck.match(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/);
    if (linkMatch) {
      const targetName = linkMatch[1].trim();
      const targetSlug = slugMap.get(targetName.toLowerCase());
      if (targetSlug) {
        const currentDir = path.dirname(currentFileRel);
        let relUrl = path.relative(currentDir, targetSlug);
        if (!relUrl.startsWith(".")) relUrl = "./" + relUrl;
        linkUrl = relUrl;
        linkTitle = targetName;
      }
    } else if (el.link && (el.link.startsWith("http://") || el.link.startsWith("https://"))) {
      linkUrl = el.link;
      linkTitle = el.link;
    }

    // Wrap ONLY this element group in an anchor tag (NO regex, NO nesting!)
    if (linkUrl) {
      const isExt = linkUrl.startsWith("http");
      group = `<a href="${linkUrl}" class="excalidraw-node-link${isExt ? ' external' : ''}" ${isExt ? 'target="_blank" rel="noopener"' : 'target="_self"'} title="${linkTitle}">${group}</a>`;
    }

    rendered.push(group);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="excalidraw-svg" data-width="${width}" data-height="${height}">\n${rendered.join("\n")}\n</svg>`;
}

// 1. Acquire Vault
function getVaultPath() {
  const customPath = process.argv[2] || process.env.VAULT_PATH;
  if (customPath && fs.existsSync(customPath)) {
    return customPath;
  }
  if (fs.existsSync("/tmp/user-vault/.git")) {
    return "/tmp/user-vault";
  }
  if (!fs.existsSync(CACHE_DIR)) {
    console.log(`Cloning repository from ${REPO_URL}...`);
    execSync(`git clone --depth 1 "${REPO_URL}" "${CACHE_DIR}"`, { stdio: "inherit" });
  } else {
    try {
      execSync(`git -C "${CACHE_DIR}" pull`, { stdio: "inherit" });
    } catch (e) {
      console.warn("Git pull failed, using existing cache.");
    }
  }
  return CACHE_DIR;
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.name === ".git" || entry.name === ".obsidian") continue;
    if (entry.isDirectory()) copyDirRecursive(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function getAllFiles(dir, ext = "") {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.name === ".git" || item.name === ".obsidian") continue;
    if (item.isDirectory()) results = results.concat(getAllFiles(full, ext));
    else if (!ext || item.name.endsWith(ext)) results.push(full);
  }
  return results;
}

async function main() {
  console.log("=== Bắt đầu tối ưu và đồng bộ nội dung Obsidian Blog ===");
  const vaultPath = getVaultPath();

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

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
      copyDirRecursive(src, dest);
    }
  }

  if (fs.existsSync(path.join(vaultPath, "0-INDEX.md"))) {
    fs.copyFileSync(path.join(vaultPath, "0-INDEX.md"), path.join(CONTENT_DIR, "0-INDEX.md"));
  }

  // 2. Build slug map
  const allMdFiles = getAllFiles(CONTENT_DIR, ".md");
  const slugMap = new Map();

  for (const mdPath of allMdFiles) {
    const relPath = path.relative(CONTENT_DIR, mdPath);
    const baseName = path.basename(mdPath, ".md");
    const slug = slugifyFilePath(relPath);
    slugMap.set(baseName.toLowerCase(), slug);
  }

  // 3. Process each Markdown file
  let excalidrawCount = 0;
  let normalNoteCount = 0;

  for (const mdPath of allMdFiles) {
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

          // Clean, lightweight SVG with direct non-nested links
          const cleanSvg = renderExcalidrawToSvgWithLinks(json, slugMap, relPath);

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
      ${cleanSvg}
    </div>
  </div>
</div>
`;

          // Extract backlinks for Obsidian graph & backlink panel
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

      const frontmatter = `---
title: "${baseName}"
tags:
  - excalidraw
  - mindmap
---

`;

      let body = frontmatter + svgHtml;
      if (backlinksList.length > 0) {
        body += `\n\n### 🔗 Các bài viết liên kết trong sơ đồ\n\n`;
        for (const item of backlinksList) {
          body += `- [[${item}]]\n`;
        }
      }

      fs.writeFileSync(mdPath, body, "utf8");
    } else {
      normalNoteCount++;
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

  // 4. Create Clean HomePage index.md (Lightweight & Fast!)
  createHomePage(CONTENT_DIR);

  console.log("=== Hoàn tất xử lý! ===");
}

function createHomePage(contentDir) {
  const indexMdPath = path.join(contentDir, "index.md");

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

Toàn bộ hệ thống kiến thức được kết nối trực quan qua sơ đồ tư duy tương tác. Bạn có thể mở trực tiếp để phóng to, thu nhỏ và bấm vào các nút liên kết:

<div class="mindmap-preview-card">
  <div class="preview-info">
    <h3>📍 Sơ đồ tổng thể 0-INDEX</h3>
    <p>Khám phá bản đồ tư duy liên kết giữa PortSwigger, TryHackMe, Linux, Tools và các lỗ hổng Web Security.</p>
    <a href="./0-index" class="open-mindmap-btn">🚀 Mở Sơ Đồ Toàn Màn Hình</a>
  </div>
</div>

---

### 📌 Liên kết nhanh tới các sơ đồ chính
- [[0-INDEX|🗺️ Bản đồ tổng quan kiến thức (0-INDEX)]]
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
}

main().catch(err => {
  console.error("Lỗi khi đồng bộ:", err);
  process.exit(1);
});
