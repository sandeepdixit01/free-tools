#!/usr/bin/env node

/**
 * Script to add structured data imports and usage to all tool pages
 * Automatically updates tool page files to include WebApplication, HowTo, and FAQ schemas
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');

// Tool pages that need structured data (excluding generic pages)
const TOOL_PAGES = [
  'CharacterCounter.jsx',
  'WordCounter.jsx',
  'TextCaseConverter.jsx',
  'RemoveExtraSpaces.jsx',
  'RemoveDuplicateLines.jsx',
  'WordSorter.jsx',
  'JSONFormatter.jsx',
  'Base64Encoder.jsx',
  'URLEncoder.jsx',
  'JSONToCSV.jsx',
  'MergePdf.jsx',
  'SplitPdf.jsx',
  'RotatePdf.jsx',
  'PdfToImage.jsx',
  'DeletePdfPages.jsx',
  'ImageToPdf.jsx',
  'ImageResizerNew.jsx',
  'ImageCompressor.jsx',
  'ImageFormatConverter.jsx',
  'ImageCrop.jsx'
];

/**
 * Check if file already has structured data imports
 */
function hasStructuredDataImports(content) {
  return content.includes('generateWebApplicationSchema') ||
         content.includes('generateHowToSchema') ||
         content.includes('generateFAQSchema');
}

/**
 * Add structured data import to file
 */
function addStructuredDataImport(content) {
  // Find the last import statement
  const importLines = content.split('\n');
  let lastImportIndex = -1;
  
  for (let i = 0; i < importLines.length; i++) {
    if (importLines[i].trim().startsWith('import ') && !importLines[i].includes('import {')) {
      lastImportIndex = i;
    } else if (importLines[i].trim().startsWith('import {')) {
      // Find the closing of this import
      let j = i;
      while (j < importLines.length && !importLines[j].includes('}')) {
        j++;
      }
      lastImportIndex = j;
    }
  }
  
  if (lastImportIndex === -1) {
    console.error('Could not find import statements');
    return content;
  }
  
  // Add the new import after the last import
  const newImport = "import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredDataHelper';";
  importLines.splice(lastImportIndex + 1, 0, newImport);
  
  return importLines.join('\n');
}

/**
 * Add structured data generation to component
 */
function addStructuredDataGeneration(content, configName) {
  // Find where adSlots is defined (or similar useMemo)
  const adSlotsMatch = content.match(/(const adSlots = useMemo\(\(\) => \{[\s\S]*?\}, \[.*?\]\);)/);
  
  if (!adSlotsMatch) {
    console.error('Could not find adSlots definition');
    return content;
  }
  
  const structuredDataCode = `
  // Generate structured data schemas
  const structuredData = useMemo(() => {
    return {
      webApplication: generateWebApplicationSchema(${configName}, language),
      howTo: generateHowToSchema(${configName}, language),
      faq: generateFAQSchema(${configName}, language)
    };
  }, [language]);
`;
  
  // Insert after adSlots definition
  const insertPosition = content.indexOf(adSlotsMatch[0]) + adSlotsMatch[0].length;
  return content.slice(0, insertPosition) + structuredDataCode + content.slice(insertPosition);
}

/**
 * Add structured data props to SEOHead
 */
function addStructuredDataToSEOHead(content) {
  // Find SEOHead component usage
  const seoHeadMatch = content.match(/(<SEOHead[\s\S]*?canonical=\{seoData\.canonical\})/);
  
  if (!seoHeadMatch) {
    console.error('Could not find SEOHead component');
    return content;
  }
  
  // Check if already has structured data props
  if (content.includes('webApplicationData=')) {
    return content; // Already updated
  }
  
  const additionalProps = `
        webApplicationData={structuredData.webApplication}
        howToData={structuredData.howTo}
        faqData={structuredData.faq}`;
  
  // Insert before closing />
  const closingTag = content.indexOf('/>', content.indexOf('<SEOHead'));
  if (closingTag === -1) {
    const closingBracket = content.indexOf('>', content.indexOf('<SEOHead'));
    return content.slice(0, closingBracket) + additionalProps + '\n      ' + content.slice(closingBracket);
  }
  
  return content.slice(0, closingTag) + additionalProps + '\n      ' + content.slice(closingTag);
}

/**
 * Extract config name from file content
 */
function extractConfigName(content) {
  const configMatch = content.match(/import\s+(\w+Config)\s+from\s+['"]\.\.\/configs\/tools/);
  return configMatch ? configMatch[1] : null;
}

/**
 * Process a single tool page file
 */
function processToolPage(filename) {
  const filePath = path.join(PAGES_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if already has structured data
  if (hasStructuredDataImports(content)) {
    console.log(`✅ ${filename} - Already has structured data`);
    return true;
  }
  
  // Extract config name
  const configName = extractConfigName(content);
  if (!configName) {
    console.log(`⚠️  ${filename} - Could not find config import`);
    return false;
  }
  
  console.log(`🔄 Processing ${filename}...`);
  
  try {
    // Step 1: Add import
    content = addStructuredDataImport(content);
    
    // Step 2: Add structured data generation
    content = addStructuredDataGeneration(content, configName);
    
    // Step 3: Add props to SEOHead
    content = addStructuredDataToSEOHead(content);
    
    // Write back to file
    fs.writeFileSync(filePath, content, 'utf-8');
    
    console.log(`✅ ${filename} - Updated successfully`);
    return true;
  } catch (error) {
    console.error(`❌ ${filename} - Error: ${error.message}`);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Adding structured data to tool pages...\n');
  
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;
  
  for (const filename of TOOL_PAGES) {
    const result = processToolPage(filename);
    if (result === true) {
      successCount++;
    } else if (result === null) {
      skipCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Successfully updated: ${successCount}`);
  console.log(`⏭️  Skipped (already done): ${skipCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📝 Total processed: ${TOOL_PAGES.length}`);
}

main();

// Made with Bob
