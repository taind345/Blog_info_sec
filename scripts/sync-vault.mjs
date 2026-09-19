import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";
import LZString from "lz-string";
import { marked } from "marked";
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

function renderCustomText(el) {
  let fontFamily = "'DFVN-excalidraw', 'DFVN Excalifont', Virgil, cursive";
  if (el.fontFamily === 2) {
    fontFamily = "Cascadia Code, -apple-system, sans-serif";
  } else if (el.fontFamily === 3) {
    fontFamily = "Cascadia Code, Consolas, monospace";
  }
  const fontSize = el.fontSize || 20;
  const color = el.strokeColor || "#1e1e1e";

  let rawStr = (el.text || el.originalText || "");

  // Tự động thêm linkPrefix '📍' cho liên kết nội bộ Obsidian nếu chưa có (đồng bộ với Obsidian Excalidraw plugin)
  const isWikiLink = (el.rawText && el.rawText.includes("[[")) || (el.link && !el.link.startsWith("http"));
  const isUrlLink = el.link && (el.link.startsWith("http://") || el.link.startsWith("https://"));

  if (isWikiLink && !rawStr.startsWith("📍") && !rawStr.startsWith("🔗")) {
    rawStr = "📍 " + rawStr;
  } else if (isUrlLink && !rawStr.startsWith("🌐") && !rawStr.startsWith("🔗")) {
    rawStr = "🌐 " + rawStr;
  }

  const lines = rawStr.split("\n");
  const lineHeight = fontSize * 1.25;

  let anchor = "start";
  let dx = 0;
  if (el.textAlign === "center") {
    anchor = "middle";
    dx = (el.width || 0) / 2;
  } else if (el.textAlign === "right") {
    anchor = "end";
    dx = el.width || 0;
  }

  let startY = el.y + fontSize;
  if (el.verticalAlign === "middle" && el.height) {
    const totalH = lines.length * lineHeight;
    startY = el.y + (el.height - totalH) / 2 + fontSize;
  }

  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="${(el.x + dx).toFixed(2)}" dy="${i === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join("");

  return `<text x="${(el.x + dx).toFixed(2)}" y="${startY.toFixed(2)}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" text-anchor="${anchor}">${tspans}</text>`;
}

const RENDERERS = {
  rectangle: renderRectangle,
  ellipse: renderEllipse,
  diamond: renderDiamond,
  line: renderLine,
  arrow: renderLine,
  text: renderCustomText,
  freedraw: renderFreedraw,
  image: renderImage,
  frame: renderFrame,
};

const PADDING = 40;

function escapeXml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// High-performance, clean SVG renderer with clickable links, embedded images, and markdown cards
function renderExcalidrawToSvgWithLinks(
  doc,
  slugMap,
  currentFileRel,
  embeddedFiles = new Map(),
  markdownImages = new Map(),
  assetImageMap = new Map()
) {
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

  const currentSlug = slugifyFilePath(currentFileRel);
  const currentDir = path.dirname(currentSlug);

  const rendered = [];
  for (const el of elements) {
    let svg = "";
    let isMarkdownCard = false;

    // Handle element rendering
    if (el.type === "image") {
      const isMdImage =
        el.customData?.markdownImage ||
        embeddedFiles.get(el.fileId) === "markdown-image" ||
        markdownImages.has(el.fileId);

      if (isMdImage) {
        // Render Notion-style markdown card on the canvas
        isMarkdownCard = true;
        const mdText = markdownImages.get(el.fileId) || "";
        const html = marked.parse(mdText);

        // Find first title/heading for card label
        let cardTitle = "Ghi chú Markdown";
        const titleMatch = mdText.match(/^#+\s+(.+)$/m);
        if (titleMatch) {
          cardTitle = titleMatch[1].trim();
        }

        svg = `
<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" rx="8" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5" class="excalidraw-md-bg"/>
<foreignObject x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" class="excalidraw-foreign-md">
  <div xmlns="http://www.w3.org/1999/xhtml" class="notion-embed-card">
    <div class="notion-embed-header">
      <div class="notion-embed-header-left">
        <span class="notion-embed-icon">📝</span>
        <span class="notion-embed-title">${escapeXml(cardTitle)}</span>
      </div>
      <a href="#doc-${el.fileId}" class="notion-embed-jump" title="Cuộn xuống đọc chi tiết toàn bộ nội dung">↓ Đọc bài viết</a>
    </div>
    <div class="notion-embed-body">
      ${html}
    </div>
  </div>
</foreignObject>
`;
      } else {
        // Normal image (e.g. [[Pasted Image ...]])
        const embeddedTarget = embeddedFiles.get(el.fileId) || "";
        const cleanName = embeddedTarget.replace(/^\[\[|\]\]$/g, "").trim();
        const assetPath = assetImageMap.get(cleanName.toLowerCase());

        if (assetPath) {
          let relImgPath = path.relative(currentDir, assetPath);
          if (!relImgPath.startsWith(".")) relImgPath = "./" + relImgPath;

          svg = `<image x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" href="${relImgPath}" preserveAspectRatio="xMidYMid meet" class="excalidraw-embedded-img"/>`;
        } else {
          // Fallback to default shape renderer
          svg = renderImage(el, files);
        }
      }
    } else {
      const render = RENDERERS[el.type];
      if (render) {
        svg = render(el, files);
      }
    }

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
        let relUrl = path.relative(currentDir, targetSlug);
        if (!relUrl.startsWith(".")) relUrl = "./" + relUrl;
        linkUrl = relUrl;
        linkTitle = targetName;
      }
    } else if (el.link && (el.link.startsWith("http://") || el.link.startsWith("https://"))) {
      linkUrl = el.link;
      linkTitle = el.link;
    } else if (el.type === "image" && !isMarkdownCard) {
      // Allow clicking normal images to view full resolution
      const embeddedTarget = embeddedFiles.get(el.fileId) || "";
      const cleanName = embeddedTarget.replace(/^\[\[|\]\]$/g, "").trim();
      const assetPath = assetImageMap.get(cleanName.toLowerCase());
      if (assetPath) {
        let relImgPath = path.relative(currentDir, assetPath);
        if (!relImgPath.startsWith(".")) relImgPath = "./" + relImgPath;
        linkUrl = relImgPath;
        linkTitle = `Xem ảnh: ${cleanName}`;
      }
    }

    // Wrap ONLY this element group in an anchor tag (NO regex, NO nesting!)
    if (linkUrl && !isMarkdownCard) {
      const isExt = linkUrl.startsWith("http") || linkUrl.endsWith(".png") || linkUrl.endsWith(".jpg");
      group = `<a href="${linkUrl}" class="excalidraw-node-link${isExt ? ' external' : ''}" ${isExt ? 'target="_blank" rel="noopener"' : 'target="_self"'} title="${escapeXml(linkTitle)}">${group}</a>`;
    }

    rendered.push(group);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" class="excalidraw-svg" data-width="${width}" data-height="${height}">\n${rendered.join("\n")}\n</svg>`;
}

// 1. Acquire Vault
function getVaultPath() {
  const customPath = process.argv[2] || process.env.VAULT_PATH;
  if (customPath && fs.existsSync(customPath)) {
    return customPath;
  }
  // Ưu tiên đọc trực tiếp từ Vault Obsidian local nếu đang chạy trên máy
  const localCandidates = [
    "/home/ti/Desktop/DATA_DESKTOP/0_Obsidian notebook/red",
    "/mnt/DATA_D/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red"
  ];
  for (const candidate of localCandidates) {
    if (fs.existsSync(path.join(candidate, ".git"))) {
      console.log(`Đang sử dụng Obsidian Vault trực tiếp từ máy: ${candidate}`);
      return candidate;
    }
  }
  if (!fs.existsSync(CACHE_DIR)) {
    console.log(`Cloning repository from ${REPO_URL}...`);
    execSync(`git clone --depth 1 "${REPO_URL}" "${CACHE_DIR}"`, { stdio: "inherit" });
  } else {
    try {
      execSync(`git -C "${CACHE_DIR}" fetch --depth 1 origin`, { stdio: "inherit" });
      execSync(`git -C "${CACHE_DIR}" reset --hard origin/HEAD`, { stdio: "inherit" });
    } catch (e) {
      console.warn("Git fetch/reset failed, re-cloning cache...", e?.message || e);
      try {
        fs.rmSync(CACHE_DIR, { recursive: true, force: true });
        execSync(`git clone --depth 1 "${REPO_URL}" "${CACHE_DIR}"`, { stdio: "inherit" });
      } catch (cloneErr) {
        console.error("Critical: failed to clone vault repository:", cloneErr);
      }
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

function wrapAsciiTreesInMarkdown(content) {
  const treeChars = ["├──", "└──", "│", "┌──", "├─", "└─"];
  const lines = content.split("\n");
  let inCodeBlock = false;
  let inAsciiDiv = false;
  const blocks = [];
  let currentBlock = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      inCodeBlock = !inCodeBlock;
      if (currentBlock.length >= 3) {
        blocks.push([currentBlock[0], currentBlock[currentBlock.length - 1]]);
      }
      currentBlock = [];
      continue;
    }

    if (inCodeBlock) continue;

    if (trimmed.includes("<div class=\"ascii-tree\">") || trimmed.includes("<div class='ascii-tree'>")) {
      inAsciiDiv = true;
      continue;
    }
    if (trimmed.includes("</div>") && inAsciiDiv) {
      inAsciiDiv = false;
      continue;
    }
    if (inAsciiDiv) continue;

    const isTreeLine = treeChars.some((tc) => line.includes(tc));
    if (isTreeLine) {
      currentBlock.push(i);
    } else {
      if (currentBlock.length >= 3) {
        blocks.push([currentBlock[0], currentBlock[currentBlock.length - 1]]);
      }
      currentBlock = [];
    }
  }

  if (currentBlock.length >= 3) {
    blocks.push([currentBlock[0], currentBlock[currentBlock.length - 1]]);
  }

  if (blocks.length === 0) return content;

  for (let b = blocks.length - 1; b >= 0; b--) {
    let [start, end] = blocks[b];

    if (
      start > 0 &&
      lines[start - 1].trim() &&
      !lines[start - 1].startsWith("#") &&
      !lines[start - 1].startsWith("-") &&
      !lines[start - 1].startsWith("*") &&
      !lines[start - 1].startsWith(">") &&
      !treeChars.some((tc) => lines[start - 1].includes(tc))
    ) {
      start -= 1;
    }

    lines.splice(end + 1, 0, "", "</div>", "");
    lines.splice(start, 0, "", "<div class=\"ascii-tree\">", "");
  }

  return lines.join("\n");
}

async function main() {
  console.log("=== Bắt đầu tối ưu và đồng bộ nội dung Obsidian Blog ===");
  const vaultPath = getVaultPath();

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Các tệp / thư mục hệ thống hoặc file mật khẩu cá nhân TUYỆT ĐỐI không đưa lên blog công khai
  const excludedEntries = new Set([
    ".git",
    ".obsidian",
    ".trash",
    ".gitignore",
    "pass.md" // Giữ an toàn cho mật khẩu và mã 2FA tài khoản
  ]);

  console.log("Đồng bộ toàn bộ nội dung từ Vault gốc sang Blog (không giới hạn whitelist)...");

  // 1. Sao chép toàn bộ thư mục và tệp từ vault gốc
  for (const entry of fs.readdirSync(vaultPath, { withFileTypes: true })) {
    const name = entry.name;
    if (excludedEntries.has(name)) continue;

    const src = path.join(vaultPath, name);
    const dest = path.join(CONTENT_DIR, name);

    if (entry.isDirectory()) {
      if (fs.existsSync(dest)) {
        fs.rmSync(dest, { recursive: true, force: true });
      }
      copyDirRecursive(src, dest);
    } else {
      // Bỏ qua README.md ở gốc vault nếu blog đã có trang chủ riêng (index.md)
      if (name.toLowerCase() === "readme.md") continue;
      fs.copyFileSync(src, dest);
    }
  }

  // 2. Dọn dẹp các tệp/thư mục trong content/ đã bị xóa ở vault gốc
  for (const entry of fs.readdirSync(CONTENT_DIR, { withFileTypes: true })) {
    const name = entry.name;
    if (name === "index.md" || name === ".gitkeep") continue;
    const src = path.join(vaultPath, name);
    if (!fs.existsSync(src) || excludedEntries.has(name)) {
      console.log(`Dọn dẹp tệp/thư mục không còn trong vault: ${name}`);
      fs.rmSync(path.join(CONTENT_DIR, name), { recursive: true, force: true });
    }
  }

  // Build slug map for markdown files
  const allMdFiles = getAllFiles(CONTENT_DIR, ".md");
  const slugMap = new Map();

  for (const mdPath of allMdFiles) {
    const relPath = path.relative(CONTENT_DIR, mdPath);
    const baseName = path.basename(mdPath, ".md");
    const slug = slugifyFilePath(relPath);
    slugMap.set(baseName.toLowerCase(), slug);
  }

  // Build asset image map for 0-asset files
  const assetImageMap = new Map();
  const assetDir = path.join(CONTENT_DIR, "0-asset");
  if (fs.existsSync(assetDir)) {
    const allAssetFiles = fs.readdirSync(assetDir);
    for (const f of allAssetFiles) {
      const relPath = path.join("0-asset", f);
      const slug = slugifyFilePath(relPath);
      assetImageMap.set(f.toLowerCase(), slug);
    }
  }

  // Process each Markdown file
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

      // 1. Extract Embedded Files map: fileId -> target
      const embeddedFiles = new Map();
      const embeddedMatch = content.match(/## Embedded Files([\s\S]*?)(?:%%|##|$)/);
      if (embeddedMatch) {
        const lines = embeddedMatch[1].split("\n");
        for (const line of lines) {
          const m = line.match(/^([a-f0-9]+):\s*(.+)$/);
          if (m) {
            embeddedFiles.set(m[1].trim(), m[2].trim());
          }
        }
      }

      // 2. Extract Markdown Images content: fileId -> markdown text
      const markdownImages = new Map();
      const mdImageRegex = /<!-- excalidraw-markdown-image:([a-f0-9]+) -->([\s\S]*?)<!-- \/excalidraw-markdown-image:\1 -->/g;
      let mm;
      while ((mm = mdImageRegex.exec(content)) !== null) {
        const fileId = mm[1].trim();
        const mdText = mm[2].trim();
        markdownImages.set(fileId, mdText);
      }

      // 3. Extract backlinks for Obsidian graph & backlink panel
      const backlinksList = [];
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

      // 4. Render Compressed JSON Excalidraw diagram
      const match = content.match(/```compressed-json\s+([\s\S]*?)\s+```/);
      let svgHtml = "";

      if (match) {
        try {
          const raw = match[1].replace(/\s+/g, "");
          const decompressed = LZString.decompressFromBase64(raw);
          const json = JSON.parse(decompressed);

          // Clean, lightweight SVG with direct links, embedded images & markdown cards
          const cleanSvg = renderExcalidrawToSvgWithLinks(
            json,
            slugMap,
            relPath,
            embeddedFiles,
            markdownImages,
            assetImageMap
          );

          const diagramId = "ex-" + crypto.createHash("md5").update(relPath).digest("hex").substring(0, 8);
          svgHtml = `
<div class="excalidraw-container" id="${diagramId}">
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
      ${cleanSvg}
    </div>
  </div>
</div>
`;
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

      // 5. If note contains Markdown writeup images, append full writeup below the diagram
      if (markdownImages.size > 0) {
        body += `\n\n---\n\n## 📖 Nội dung chi tiết bài viết (Writeup)\n\n`;
        for (const [fileId, mdText] of markdownImages.entries()) {
          body += `<div id="doc-${fileId}" class="notion-callout-card">\n\n`;
          body += `${mdText}\n\n`;
          body += `</div>\n\n---\n\n`;
        }
      }

      // 6. Append backlinks
      if (backlinksList.length > 0) {
        body += `\n\n### 🔗 Các bài viết liên kết trong sơ đồ\n\n`;
        for (const item of backlinksList) {
          body += `- [[${item}]]\n`;
        }
      }

      fs.writeFileSync(mdPath, body, "utf8");
    } else {
      normalNoteCount++;
      let modified = false;
      if (!content.startsWith("---")) {
        content = `---
title: "${baseName}"
---

` + content;
        modified = true;
      }

      const formatted = wrapAsciiTreesInMarkdown(content);
      if (formatted !== content) {
        content = formatted;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(mdPath, content, "utf8");
      }
    }
  }

  console.log(`Đã xử lý: ${excalidrawCount} sơ đồ Excalidraw và ${normalNoteCount} bài viết Markdown.`);

  // Create Clean HomePage index.md (Notion minimal style)
  createHomePage(CONTENT_DIR);

  console.log("=== Hoàn tất xử lý! ===");
}

function createHomePage(contentDir) {
  const indexMdPath = path.join(contentDir, "index.md");

  const homeContent = `---
title: "Security Blog"
---

<div class="hero-section">
  <div class="hero-badge">🛡️ InfoSec Knowledge Base &amp; CTF Writeups</div>
  <h1 class="hero-title">Security Blog</h1>
  <p class="hero-desc">
    Ghi chú, sơ đồ tư duy tương tác (Mindmap) và bài viết phân tích kỹ thuật về an toàn thông tin &amp; pentest từ:
    <strong>PortSwigger Web Security Academy</strong>, <strong>TryHackMe</strong>, <strong>HackTheBox</strong>, <strong>Linux</strong> &amp; <strong>Tools</strong>.
  </p>
</div>

<div class="category-grid">
  <a href="./portswigger/server-side-vulnerabilities/0-server-side" class="cat-card">
    <div class="cat-icon">🌐</div>
    <div class="cat-info">
      <h3>PortSwigger Academy</h3>
      <p>XSS, SQLi, SSRF, CORS, Server-side &amp; Client-side labs.</p>
    </div>
  </a>

  <a href="./tryhackme/0-try-hackme" class="cat-card">
    <div class="cat-icon">🚩</div>
    <div class="cat-info">
      <h3>TryHackMe Labs</h3>
      <p>Active Directory, CVEs, RCE, Reverse Shells &amp; Walkthroughs.</p>
    </div>
  </a>

  <a href="./1-linux/0-linux" class="cat-card">
    <div class="cat-icon">🐧</div>
    <div class="cat-info">
      <h3>Linux &amp; Systems</h3>
      <p>Lệnh quản trị, Shell script, Netcat, mạng và cấu hình.</p>
    </div>
  </a>

  <a href="./tools/0-tool" class="cat-card">
    <div class="cat-icon">🛠️</div>
    <div class="cat-info">
      <h3>Tools &amp; Cheatsheets</h3>
      <p>Burp Suite, ffuf, sqlmap, nmap, nikto thực chiến.</p>
    </div>
  </a>

  <a href="./4-kiến-thức-bên-lề/0-tổng-hợp" class="cat-card">
    <div class="cat-icon">💡</div>
    <div class="cat-info">
      <h3>Kiến Thức Cốt Lõi</h3>
      <p>SOP, Reverse Proxy, MFA Bypass, JWT, Sessions, IDOR.</p>
    </div>
  </a>

  <a href="./3-ctf/0-ctf" class="cat-card">
    <div class="cat-icon">🎯</div>
    <div class="cat-info">
      <h3>CTF Writeups</h3>
      <p>Writeup giải đề PTIT CTF, HackTheBox, TryHackMe.</p>
    </div>
  </a>
</div>

---

## 🗺️ Bản đồ tư duy tổng thể (Master Mindmap)

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
