#!/usr/bin/env node

/**
 * Script to standardize privacy notice text across all tool configs
 * Updates both English and Hindi privacy notices to match requirements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIGS_DIR = path.join(__dirname, '../src/configs/tools');

const STANDARD_TEXT = {
  en: 'All processing happens in your browser. Your files are never uploaded.',
  hi: 'सारी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी अपलोड नहीं की जातीं।'
};

// Get all config files
const configFiles = fs.readdirSync(CONFIGS_DIR)
  .filter(file => file.endsWith('.config.js'));

console.log(`Found ${configFiles.length} config files\n`);

let updatedCount = 0;

configFiles.forEach(file => {
  const filePath = path.join(CONFIGS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Update English privacy notice
  const enRegex = /privacyNotice:\s*['"`]([^'"`]+)['"`]/g;
  if (content.match(enRegex)) {
    content = content.replace(
      /privacyNotice:\s*['"`][^'"`]+['"`]/g,
      `privacyNotice: '${STANDARD_TEXT.en}'`
    );
    modified = true;
  }

  // Update Hindi privacy notice (more complex due to Unicode)
  const hiPrivacyRegex = /privacyNotice:\s*['"`][^'"`]*[\u0900-\u097F][^'"`]*['"`]/g;
  if (content.match(hiPrivacyRegex)) {
    content = content.replace(
      hiPrivacyRegex,
      `privacyNotice: '${STANDARD_TEXT.hi}'`
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${file}`);
    updatedCount++;
  } else {
    console.log(`- Skipped: ${file} (no privacyNotice found)`);
  }
});

console.log(`\n✅ Updated ${updatedCount} config files`);

// Made with Bob
