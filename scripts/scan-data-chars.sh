#!/bin/bash
# Pre-commit scan: blocks non-Arabic/Latin/ASCII characters in data files
# Prevents recurring data corruption (luce/notin/设备 patterns)
# Usage: bash scripts/scan-data-chars.sh

EXIT_CODE=0

# Check for CJK characters (Chinese/Japanese/Korean) in src/lib/*.ts
CJK_FILES=$(grep -rlP '[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}]' src/lib/ 2>/dev/null)
if [ -n "$CJK_FILES" ]; then
  echo "❌ CJK characters found in data files:"
  echo "$CJK_FILES"
  grep -rnP '[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}]' src/lib/
  EXIT_CODE=1
fi

# Check for Latin words mixed into Arabic strings (e.g., "الط luceة")
# Looks for Latin letters surrounded by Arabic characters
MIXED_FILES=$(grep -rnP '[\x{0600}-\x{06FF}][a-zA-Z]{2,}[\x{0600}-\x{06FF}]' src/lib/ 2>/dev/null)
if [ -n "$MIXED_FILES" ]; then
  echo "❌ Latin characters mixed into Arabic words in data files:"
  echo "$MIXED_FILES"
  EXIT_CODE=1
fi

if [ $EXIT_CODE -eq 0 ]; then
  echo "✅ No data corruption found in src/lib/"
fi

exit $EXIT_CODE
