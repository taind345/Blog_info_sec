#!/usr/bin/env bash
# ==============================================================================
# Script tự động đồng bộ từ Obsidian Vault gốc sang Security Blog & GitHub Pages
# Tương thích 100% trên cả Fedora (Linux native) và Windows (WSL)
# Repo gốc: https://github.com/taind345/PortSwigger__TryHackMe__Writeup....etc-
# ==============================================================================

set -e

# Chuyển đến thư mục gốc của dự án
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "=========================================================="
echo "  🔄 [1/4] KIỂM TRA & ĐỒNG BỘ THƯ MỤC GỐC (RED VAULT)"
echo "=========================================================="

# Tự động tìm thư mục Obsidian Vault trên mọi nền tảng:
# 1. Đường dẫn tương đối (cấu trúc thư mục song song chuẩn)
# 2. WSL trên Windows (/mnt/d/...)
# 3. Mount point trên Fedora (/mnt/DATA_D/...)
# 4. Thư mục Home trên Fedora/Ubuntu (~/Desktop/...)
RED_CANDIDATES=(
  "$PROJECT_DIR/../../0_Obsidian notebook/red"
  "/mnt/d/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red"
  "/mnt/DATA_D/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red"
  "/home/ti/Desktop/DATA_DESKTOP/0_Obsidian notebook/red"
  "$HOME/Desktop/DATA_DESKTOP/0_Obsidian notebook/red"
)

RED_VAULT=""
for candidate in "${RED_CANDIDATES[@]}"; do
  if [ -d "$candidate/.git" ]; then
    RED_VAULT="$(cd "$candidate" && pwd)"
    break
  fi
done

if [ -n "$RED_VAULT" ] && [ -d "$RED_VAULT" ]; then
  echo "📂 Đang kiểm tra thư mục: $RED_VAULT"
  # Kiểm tra xem có quyền đọc/ghi vào git của thư mục red không
  RED_STATUS=""
  if git -C "$RED_VAULT" status --porcelain >/dev/null 2>&1; then
    RED_STATUS=$(git -C "$RED_VAULT" status --porcelain 2>/dev/null || true)
    if [ -n "$RED_STATUS" ]; then
      echo "📝 Phát hiện bài viết/ảnh mới trong thư mục red, đang đẩy lên GitHub..."
      git -C "$RED_VAULT" add . 2>/dev/null || true
      COMMIT_MSG="docs: auto-sync notes [$(date '+%Y-%m-%d %H:%M:%S')]"
      git -C "$RED_VAULT" commit -m "$COMMIT_MSG" 2>/dev/null || true
      git -C "$RED_VAULT" push origin main 2>/dev/null || echo "⚠️ Push repo red gặp sự cố mạng, vẫn tiếp tục đồng bộ blog..."
      echo "✅ Đã đẩy thư mục red lên GitHub thành công!"
    else
      echo "✅ Thư mục red đã là bản mới nhất trên GitHub."
    fi
  else
    echo "⚠️ Thư mục red đang bị khóa quyền Git (.git/index), tạm thời bỏ qua push repo red và tiếp tục đồng bộ nội dung sang blog..."
  fi
else
  echo "⚠️ Không tìm thấy thư mục Obsidian local, chuyển sang bước đồng bộ blog..."
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

echo "📖 [3/4] Đang đồng bộ ghi chú & chuyển đổi sơ đồ Excalidraw..."
if [ -n "$RED_VAULT" ] && [ -d "$RED_VAULT" ]; then
  export VAULT_PATH="$RED_VAULT"
  node scripts/sync-vault.mjs "$RED_VAULT"
else
  node scripts/sync-vault.mjs
fi

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
