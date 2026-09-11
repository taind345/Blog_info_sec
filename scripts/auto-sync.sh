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
echo "  🔄 [1/3] BẮT ĐẦU ĐỒNG BỘ NỘI DUNG TỪ REPO GỐC OBSIDIAN"
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

echo "📥 [2/3] Đang đồng bộ kho ghi chú & chuyển đổi sơ đồ Excalidraw..."
node scripts/sync-vault.mjs

echo "🔍 [3/3] Kiểm tra các thay đổi mới..."
STATUS=$(git status --porcelain content quartz/static)

if [ -z "$STATUS" ]; then
  echo ""
  echo "=========================================================="
  echo "✅ HOÀN TẤT: Không có bài viết hoặc sơ đồ mới nào thay đổi."
  echo "   Blog của bạn đã là bản mới nhất!"
  echo "=========================================================="
  exit 0
fi

echo "📝 Đã phát hiện các tệp tin mới/chỉnh sửa:"
echo "$STATUS"

echo ""
echo "🚀 Đang commit và đẩy lên GitHub Pages..."
git add content/ quartz/static/ scripts/ package.json .github/

COMMIT_TIME=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "chore(sync): auto-sync notes from vault [$COMMIT_TIME]"

git push origin main

echo ""
echo "=========================================================="
echo "🎉 XONG! Đã đẩy các ghi chú mới nhất lên GitHub thành công!"
echo "🚀 GitHub Actions đang tự động xuất bản tại:"
echo "   👉 https://taind345.github.io/Blog_info_sec/"
echo "=========================================================="
