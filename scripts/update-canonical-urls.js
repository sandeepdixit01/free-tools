#!/usr/bin/env node

/**
 * Script to replace hardcoded canonical URLs with dynamic URL generation
 * 
 * This script updates all config files to use the urlHelper utility
 * instead of hardcoded 'https://freetools.com' URLs
 * 
 * Usage: node scripts/update-canonical-urls.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Files to update
const configFiles = {
  tools: [
    'removeExtraSpaces.config.js',
    'imageCrop.config.js',
    'textCaseConverter.config.js',
    'imageResizer.config.js',
    'rotatePdf.config.js',
    'mergePdf.config.js',
    'imageCompressor.config.js',
    'splitPdf.config.js',
    'deletePdfPages.config.js',
    'imageToPdf.config.js',
    'imageFormatConverter.config.js',
    'wordSorter.config.js',
    'jsonToCSV.config.js',
    'characterCounter.config.js',
    'imageResizer50kb.config.js',
    'removeDuplicateLines.config.js',
    'base64Encoder.config.js',
    'wordCounter.config.js',
    'jsonFormatter.config.js',
    'pdfToImage.config.js',
    'urlEncoder.config.js'
  ],
  categories: [
    'image.config.js',
    'pdf.config.js',
    'text.config.js',
    'developer.config.js'
  ],
  pages: [
    'allTools.config.js'
  ]
};

/**
 * Update a single config file
 */
function updateConfigFile(filePath, type) {
  console.log(`\nProcessing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Add import statement at the top if not already present
  if (!content.includes('import { getToolCanonicalUrl') && !content.includes('import { getCategoryCanonicalUrl') && !content.includes('import { getPageCanonicalUrl')) {
    const importStatement = type === 'tools' 
      ? "import { getToolCanonicalUrl } from '../../utils/urlHelper.js';\n"
      : type === 'categories'
      ? "import { getCategoryCanonicalUrl } from '../../utils/urlHelper.js';\n"
      : "import { getPageCanonicalUrl } from '../../utils/urlHelper.js';\n";
    
    // Find the first line after comments and add import
    const lines = content.split('\n');
    let insertIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].trim().startsWith('*') && !lines[i].trim().startsWith('//') && !lines[i].trim().startsWith('/**') && lines[i].trim() !== '') {
        insertIndex = i;
        break;
      }
    }
    lines.splice(insertIndex, 0, importStatement);
    content = lines.join('\n');
    modified = true;
  }
  
  // Replace hardcoded canonical URLs
  const canonicalRegex = /canonical:\s*['"]https:\/\/freetools\.com(\/hi)?(\/tools)?\/([^'"]+)['"]/g;
  
  content = content.replace(canonicalRegex, (match, hiPrefix, toolsPrefix, slug) => {
    const language = hiPrefix ? 'hi' : 'en';
    
    if (type === 'tools') {
      // For tools: canonical: getToolCanonicalUrl('tool-slug', 'en')
      return `canonical: getToolCanonicalUrl('${slug}', '${language}')`;
    } else if (type === 'categories') {
      // For categories: canonical: getCategoryCanonicalUrl('category-slug', 'en')
      return `canonical: getCategoryCanonicalUrl('${slug}', '${language}')`;
    } else if (type === 'pages') {
      // For pages: canonical: getPageCanonicalUrl('tools', 'en')
      return `canonical: getPageCanonicalUrl('${slug}', '${language}')`;
    }
    
    return match;
  });
  
  if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${path.basename(filePath)}`);
    return true;
  } else {
    console.log(`⏭️  Skipped (no changes): ${path.basename(filePath)}`);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting canonical URL migration...\n');
  console.log('This will replace all hardcoded canonical URLs with dynamic generation.\n');
  
  let totalUpdated = 0;
  
  // Update tool configs
  console.log('\n📝 Updating tool configs...');
  for (const file of configFiles.tools) {
    const filePath = path.join(rootDir, 'src', 'configs', 'tools', file);
    if (fs.existsSync(filePath)) {
      if (updateConfigFile(filePath, 'tools')) {
        totalUpdated++;
      }
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }
  
  // Update category configs
  console.log('\n📁 Updating category configs...');
  for (const file of configFiles.categories) {
    const filePath = path.join(rootDir, 'src', 'configs', 'categories', file);
    if (fs.existsSync(filePath)) {
      if (updateConfigFile(filePath, 'categories')) {
        totalUpdated++;
      }
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }
  
  // Update page configs
  console.log('\n📄 Updating page configs...');
  for (const file of configFiles.pages) {
    const filePath = path.join(rootDir, 'src', 'configs', 'pages', file);
    if (fs.existsSync(filePath)) {
      if (updateConfigFile(filePath, 'pages')) {
        totalUpdated++;
      }
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }
  
  console.log(`\n✨ Migration complete!`);
  console.log(`📊 Total files updated: ${totalUpdated}`);
  console.log(`\n✅ All canonical URLs are now generated dynamically from VITE_SITE_URL`);
  console.log(`🔧 To change the domain, simply update the .env file`);
}

// Run the script
main();

