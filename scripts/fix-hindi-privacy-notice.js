#!/usr/bin/env node

/**
 * Fix Hindi privacy notice in all config files
 * Replace English text with Hindi translation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configsDir = path.join(__dirname, '../src/configs/tools');

const englishText = "'All processing happens in your browser. Your files are never uploaded.'";
const hindiText = "'सारी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी अपलोड नहीं की जातीं।'";

// Get all config files
const files = fs.readdirSync(configsDir).filter(f => f.endsWith('.config.js'));

let updatedCount = 0;
let totalReplacements = 0;

files.forEach(filename => {
  const filePath = path.join(configsDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all occurrences
  const matches = content.match(/privacyNotice: 'All processing happens in your browser\. Your files are never uploaded\.'/g);
  
  if (matches && matches.length > 0) {
    // We need to replace only the SECOND occurrence (Hindi section)
    // Split by the pattern and rejoin with Hindi for second occurrence
    const parts = content.split(/privacyNotice: 'All processing happens in your browser\. Your files are never uploaded\.'/);
    
    if (parts.length >= 3) {
      // Reconstruct: first part + English + second part + Hindi + rest
      content = parts[0] + 
                "privacyNotice: 'All processing happens in your browser. Your files are never uploaded.'" +
                parts[1] +
                "privacyNotice: 'सारी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी अपलोड नहीं की जातीं।'" +
                parts.slice(2).join("privacyNotice: 'सारी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी अपलोड नहीं की जातीं।'");
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filename} (${matches.length} occurrences)`);
      updatedCount++;
      totalReplacements += matches.length;
    } else if (parts.length === 2) {
      // Only one occurrence (like jsonToCSV which might not have Hindi section yet)
      console.log(`⚠️  Skipped: ${filename} (only 1 occurrence, might need manual check)`);
    }
  } else {
    console.log(`⏭️  Skipped: ${filename} (no English privacy notice found)`);
  }
});

console.log(`\n✨ Updated ${updatedCount} files with ${totalReplacements} replacements`);

// Made with Bob
