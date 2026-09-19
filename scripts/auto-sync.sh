#!/usr/bin/env bash
# ==============================================================================
# Script tự động đồng bộ từ Obsidian Vault gốc sang Security Blog & GitHub Pages
# Repo gốc: https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-
# ==============================================================================

set -e

# Chuyển đến thư mục gốc của dự án
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "=========================================================="
echo "  🔄 [1/4] KIỂM TRA & ĐỒNG BỘ THƯ MỤC GỐC (RED VAULT)"
echo "=========================================================="

# Tìm thư mục red trên máy
RED_VAULT="/home/ti/Desktop/DATA_DESKTOP/0_Obsidian notebook/red"
if [ ! -d "$RED_VAULT/.git" ]; then
  RED_VAULT="/mnt/DATA_D/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red"
fi

if [ -d "$RED_VAULT/.git" ]; then
  echo "📂 Đang kiểm tra thư mục: $RED_VAULT"
  RED_STATUS=$(git -C "$RED_VAULT" status --porcelain)
  if [ -n "$RED_STATUS" ]; then
    echo "📝 Phát hiện bài viết/ảnh mới trong thư mục red, đang đẩy lên GitHub..."
    git -C "$RED_VAULT" add .
    COMMIT_MSG="docs: auto-sync notes [$(date '+%Y-%m-%d %H:%M:%S')]"
    git -C "$RED_VAULT" commit -m "$COMMIT_MSG" || true
    git -C "$RED_VAULT" push origin main || echo "⚠️ Push repo red gặp sự cố mạng, vẫn tiếp tục đồng bộ blog..."
    echo "✅ Đã đẩy thư mục red lên GitHub thành công!"
  else
    echo "✅ Thư mục red đã là bản mới nhất trên GitHub."
  fi
fi

echo ""
echo "=========================================================="
echo "  🔄 [2/4] ĐỒNG BỘ NỘI DUNG VÀO BLOG"
echo "=========================================================="

# Đảm bảo nhánh hiện tại là main
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠️ Đang ở nhánh $CURRENT_BRANCH, chuyển về nhánh main..."
  git checkout main
fi

# Chỉ pull nếu working tree sạch
if [ -z "$(git status --porcelain content quartz/static)" ]; then
  git pull --rebase origin main 2>/dev/null || true
fi

echo "📥 [3/4] Đang đồng bộ ghi chú & chuyển đổi sơ đồ Excalidraw..."
node scripts/sync-vault.mjs

echo "🔍 [4/4] Kiểm tra các thay đổi mới và đẩy lên GitHub Pages..."
STATUS=$(git status --porcelain content quartz/static)

if [ -z "$STATUS" ]; then
  echo ""
  echo "=========================================================="
  echo "✅ HOÀN TẤT: Không có bài viết hoặc sơ đồ mới nào thay đổi."
  echo "   Blog của bạn đã là bản mới nhất!"
  echo "=========================================================="
  exit 0
fi

echo "📝 Đã phát hiện các tệp tin mới/chỉnh sửa trong blog:"
echo "$STATUS"

echo ""
echo "🚀 Đang commit và đẩy lên GitHub Pages..."
git add content/ quartz/static/ scripts/ package.json .github/ quartz/styles/ quartz/components/ docs/ README.md

COMMIT_TIME=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "chore(sync): auto-sync notes from vault [$COMMIT_TIME]"

git push origin main || (git pull --rebase origin main && git push origin main)

echo ""
echo "=========================================================="
echo "🎉 XONG! Cả thư mục red và Blog đã được đẩy lên GitHub!"
echo "🚀 GitHub Actions đang tự động xuất bản tại:"
echo "   👉 https://taind345.github.io/Blog_info_sec/"
echo "=========================================================="
