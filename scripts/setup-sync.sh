#!/usr/bin/env bash
# ==============================================================================
# Script tự động cấu hình và áp dụng bản vá cho auto-sync & sync-vault
# Hỗ trợ chạy mượt mà trên cả Fedora (Linux native) và Windows (WSL)
# ==============================================================================

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "=========================================================="
echo "🛠  Đang áp dụng cấu hình tương thích đa nền tảng..."
echo "=========================================================="

# 1. Cập nhật scripts/auto-sync.sh
if [ -f "scripts/auto-sync.sh.updated" ]; then
  echo "📄 Cập nhật scripts/auto-sync.sh..."
  cp -f "scripts/auto-sync.sh.updated" "scripts/auto-sync.sh"
  rm -f "scripts/auto-sync.sh.updated"
fi

# Chuẩn hóa line endings sang LF và cấp quyền thực thi
sed -i 's/\r$//' "scripts/auto-sync.sh"
chmod +x "scripts/auto-sync.sh"

# 2. Bổ sung đường dẫn WSL vào scripts/sync-vault.mjs (nếu chưa có)
if [ -f "scripts/sync-vault.mjs" ]; then
  if ! grep -q "/mnt/d/DESKTOP/DATA_DESKTOP" "scripts/sync-vault.mjs"; then
    echo "📄 Thêm đường dẫn WSL vào scripts/sync-vault.mjs..."
    sed -i 's|"/mnt/DATA_D/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red"|"/mnt/DATA_D/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red",\n    "/mnt/d/DESKTOP/DATA_DESKTOP/0_Obsidian notebook/red",\n    path.resolve(process.cwd(), "../../0_Obsidian notebook/red")|g' "scripts/sync-vault.mjs"
  fi
fi

# 3. Dọn dẹp tệp tạm
rm -f "scripts/test.txt" "scratch_test.txt"

# 4. Kiểm tra môi trường WSL
if grep -qi "microsoft" /proc/version 2>/dev/null; then
  echo ""
  echo "🔍 Phát hiện bạn đang chạy trên WSL (Windows Subsystem for Linux):"
  
  # Kiểm tra Git Credential Manager
  CURRENT_HELPER=$(git config --get credential.helper || true)
  if [[ "$CURRENT_HELPER" != *"git-credential-manager"* ]]; then
    echo "💡 Gợi ý: Để không phải nhập mật khẩu GitHub mỗi lần push trên WSL, hãy chạy:"
    echo '   git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"'
  fi
fi

echo ""
echo "=========================================================="
echo "✅ HOÀN TẤT: Hệ thống đã sẵn sàng chạy trên cả Fedora và WSL!"
echo "👉 Bạn có thể chạy thử ngay: npm run auto-sync"
echo "=========================================================="
