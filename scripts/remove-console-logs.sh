#!/bin/bash

# Script to remove console.log, console.debug, and console.info statements
# Keeps console.error and console.warn for production error handling

echo "🧹 Removing debug console statements..."

# Find all JS/JSX files and remove console.log, console.debug, console.info
find src -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' '/console\.log(/d; /console\.debug(/d; /console\.info(/d' {} \;

echo "✅ Debug console statements removed!"
echo "📊 Remaining console statements (should only be error/warn):"
grep -r "console\." src/ --include="*.js" --include="*.jsx" | wc -l

# Made with Bob
