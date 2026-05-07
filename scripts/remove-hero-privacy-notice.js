#!/usr/bin/env node

/**
 * Remove privacyNotice prop from ToolHero components
 * Since ToolLayoutV2 now handles privacy banner automatically
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');

// List of page files to update (all using ToolLayoutV2)
const pageFiles = [
  'MergePdf.jsx',
  'WordCounter.jsx',
  'PdfToImage.jsx',
  'RemoveDuplicateLines.jsx',
  'DeletePdfPages.jsx',
  'JSONFormatter.jsx',
  'SplitPdf.jsx',
  'Base64Encoder.jsx',
  'ImageToPdf.jsx',
  'RotatePdf.jsx',
  'TextCaseConverter.jsx',
  'RemoveExtraSpaces.jsx',
  'WordSorter.jsx',
  'CharacterCounter.jsx',
  'URLEncoder.jsx'
];

let updatedCount = 0;

pageFiles.forEach(filename => {
  const filePath = path.join(pagesDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove privacyNotice line from ToolHero
  const privacyNoticeRegex = /\s*privacyNotice=\{[^}]+\}\n/g;
  
  if (privacyNoticeRegex.test(content)) {
    content = content.replace(privacyNoticeRegex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filename}`);
    updatedCount++;
  } else {
    console.log(`⏭️  Skipped (no privacyNotice found): ${filename}`);
  }
});

console.log(`\n✨ Updated ${updatedCount} files`);

// Made with Bob
