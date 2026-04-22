#!/bin/bash

# Batch update script to add structured data to all tool pages
# This script adds the necessary imports and code to each tool page

echo "🚀 Starting batch update for structured data..."
echo ""

# Array of tool pages to update (filename:configName)
declare -a tools=(
  "RemoveDuplicateLines.jsx:removeDuplicateLinesConfig"
  "WordSorter.jsx:wordSorterConfig"
  "JSONFormatter.jsx:jsonFormatterConfig"
  "Base64Encoder.jsx:base64EncoderConfig"
  "URLEncoder.jsx:urlEncoderConfig"
  "JSONToCSV.jsx:jsonToCSVConfig"
  "MergePdf.jsx:mergePdfConfig"
  "SplitPdf.jsx:splitPdfConfig"
  "RotatePdf.jsx:rotatePdfConfig"
  "PdfToImage.jsx:pdfToImageConfig"
  "DeletePdfPages.jsx:deletePdfPagesConfig"
  "ImageToPdf.jsx:imageToPdfConfig"
  "ImageResizerNew.jsx:imageResizerConfig"
  "ImageCompressor.jsx:imageCompressorConfig"
  "ImageFormatConverter.jsx:imageFormatConverterConfig"
  "ImageCrop.jsx:imageCropConfig"
)

success_count=0
skip_count=0
error_count=0

for tool_info in "${tools[@]}"; do
  IFS=':' read -r filename config_name <<< "$tool_info"
  filepath="src/pages/$filename"
  
  echo "Processing $filename..."
  
  # Check if file exists
  if [ ! -f "$filepath" ]; then
    echo "  ⚠️  File not found: $filepath"
    ((error_count++))
    continue
  fi
  
  # Check if already has structured data
  if grep -q "generateWebApplicationSchema" "$filepath"; then
    echo "  ✅ Already has structured data - skipping"
    ((skip_count++))
    continue
  fi
  
  # Create backup
  cp "$filepath" "${filepath}.backup"
  
  # Add import (after last import line)
  sed -i '' "/^import.*from.*configValidator';$/a\\
import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredDataHelper';
" "$filepath"
  
  # Add structured data generation (after adSlots definition)
  sed -i '' "/}, \[toolCategory\]);$/a\\
\\
  // Generate structured data schemas\\
  const structuredData = useMemo(() => {\\
    return {\\
      webApplication: generateWebApplicationSchema($config_name, language),\\
      howTo: generateHowToSchema($config_name, language),\\
      faq: generateFAQSchema($config_name, language)\\
    };\\
  }, [language]);
" "$filepath"
  
  # Add props to SEOHead (before closing />)
  sed -i '' "/canonical={seoData.canonical}$/a\\
        webApplicationData={structuredData.webApplication}\\
        howToData={structuredData.howTo}\\
        faqData={structuredData.faq}
" "$filepath"
  
  echo "  ✅ Updated successfully"
  ((success_count++))
done

echo ""
echo "📊 Summary:"
echo "  ✅ Successfully updated: $success_count"
echo "  ⏭️  Skipped (already done): $skip_count"
echo "  ❌ Errors: $error_count"
echo "  📝 Total processed: ${#tools[@]}"
echo ""
echo "✨ Done! Backup files created with .backup extension"

# Made with Bob
