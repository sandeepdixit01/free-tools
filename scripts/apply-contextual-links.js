#!/usr/bin/env node

/**
 * Automated Contextual Links Application Script
 * Applies internal links to all tool configs based on relationship mapping
 */

const fs = require('fs');
const path = require('path');

// Tool relationship mapping
const toolLinks = {
  // Developer Tools
  'jsonFormatter': {
    en: 'For JSON data validation, use our <a href="/tools/json-formatter">JSON Formatter</a>',
    hi: 'JSON डेटा वैलिडेशन के लिए हमारे <a href="/tools/json-formatter">JSON Formatter</a> का उपयोग करें'
  },
  'base64Encoder': {
    en: 'For binary data encoding, use our <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>',
    hi: 'बाइनरी डेटा एनकोडिंग के लिए हमारे <a href="/tools/base64-encoder-decoder">Base64 Encoder</a> का उपयोग करें'
  },
  'urlEncoder': {
    en: 'For URL-safe encoding, try our <a href="/tools/url-encoder-decoder">URL Encoder</a>',
    hi: 'URL-सुरक्षित एनकोडिंग के लिए हमारे <a href="/tools/url-encoder-decoder">URL Encoder</a> का उपयोग करें'
  },
  'jsonToCsv': {
    en: 'Convert JSON using our <a href="/tools/json-to-csv">JSON to CSV Converter</a>',
    hi: 'हमारे <a href="/tools/json-to-csv">JSON to CSV Converter</a> का उपयोग करके JSON को कन्वर्ट करें'
  },

  // PDF Tools
  'mergePdf': {
    en: '<a href="/tools/merge-pdf">merge PDF files</a>',
    hi: '<a href="/tools/merge-pdf">PDF फाइलों को मर्ज</a> करें'
  },
  'splitPdf': {
    en: '<a href="/tools/split-pdf">split PDF files</a>',
    hi: '<a href="/tools/split-pdf">PDF फाइलों को स्प्लिट</a> करें'
  },
  'rotatePdf': {
    en: '<a href="/tools/rotate-pdf">rotate PDF pages</a>',
    hi: '<a href="/tools/rotate-pdf">PDF पेज को रोटेट</a> करें'
  },
  'pdfToImage': {
    en: '<a href="/tools/pdf-to-image">convert PDF to images</a>',
    hi: '<a href="/tools/pdf-to-image">PDF को इमेज में बदलें</a>'
  },
  'imageToPdf': {
    en: '<a href="/tools/image-to-pdf">convert images to PDF</a>',
    hi: '<a href="/tools/image-to-pdf">इमेज को PDF में बदलें</a>'
  },
  'deletePdfPages': {
    en: '<a href="/tools/delete-pdf-pages">delete unwanted pages</a>',
    hi: '<a href="/tools/delete-pdf-pages">अनचाहे पेज हटाएं</a>'
  },

  // Image Tools
  'imageResizer': {
    en: '<a href="/tools/resize-image">resize images</a>',
    hi: '<a href="/tools/resize-image">इमेज रीसाइज़</a> करें'
  },
  'imageCompressor': {
    en: '<a href="/tools/image-compressor">compress images</a>',
    hi: '<a href="/tools/image-compressor">इमेज कंप्रेस</a> करें'
  },
  'imageFormatConverter': {
    en: '<a href="/tools/image-format-converter">convert image formats</a>',
    hi: '<a href="/tools/image-format-converter">इमेज फॉर्मेट कन्वर्ट</a> करें'
  },
  'imageCrop': {
    en: '<a href="/tools/image-crop">crop images</a>',
    hi: '<a href="/tools/image-crop">इमेज क्रॉप</a> करें'
  },

  // Text Tools
  'wordCounter': {
    en: '<a href="/tools/word-counter">count words</a>',
    hi: '<a href="/tools/word-counter">शब्द गिनें</a>'
  },
  'characterCounter': {
    en: 'use our <a href="/tools/character-counter">Character Counter</a>',
    hi: 'हमारे <a href="/tools/character-counter">Character Counter</a> का उपयोग करें'
  },
  'textCaseConverter': {
    en: '<a href="/tools/text-case-converter">change text case</a>',
    hi: '<a href="/tools/text-case-converter">टेक्स्ट केस बदलें</a>'
  },
  'removeExtraSpaces': {
    en: '<a href="/tools/remove-extra-spaces">remove extra spaces</a>',
    hi: '<a href="/tools/remove-extra-spaces">एक्स्ट्रा स्पेस हटाएं</a>'
  },
  'removeDuplicateLines': {
    en: '<a href="/tools/remove-duplicate-lines">remove duplicates</a>',
    hi: '<a href="/tools/remove-duplicate-lines">डुप्लीकेट हटाएं</a>'
  },
  'wordSorter': {
    en: '<a href="/tools/word-sorter">sort lines alphabetically</a>',
    hi: '<a href="/tools/word-sorter">लाइनों को सॉर्ट</a> करें'
  }
};

// Tool relationships - which tools should link to which
const relationships = {
  'base64Encoder.config.js': ['jsonFormatter', 'urlEncoder'],
  'jsonFormatter.config.js': ['jsonToCsv', 'base64Encoder'],
  'urlEncoder.config.js': ['base64Encoder', 'jsonFormatter'],
  // jsonToCsv already done

  'mergePdf.config.js': ['splitPdf', 'rotatePdf'],
  'splitPdf.config.js': ['mergePdf', 'deletePdfPages'],
  'rotatePdf.config.js': ['mergePdf', 'pdfToImage'],
  'pdfToImage.config.js': ['imageToPdf', 'rotatePdf'],
  'deletePdfPages.config.js': ['splitPdf', 'mergePdf'],

  'imageResizer.config.js': ['imageCompressor', 'imageFormatConverter'],
  'imageCompressor.config.js': ['imageResizer', 'imageFormatConverter'],
  'imageFormatConverter.config.js': ['imageCompressor', 'imageResizer'],
  'imageCrop.config.js': ['imageResizer', 'imageCompressor'],
  'imageToPdf.config.js': ['pdfToImage', 'mergePdf'],

  'wordCounter.config.js': ['characterCounter', 'textCaseConverter'],
  'characterCounter.config.js': ['wordCounter', 'removeExtraSpaces'],
  'textCaseConverter.config.js': ['wordCounter', 'removeExtraSpaces'],
  'removeExtraSpaces.config.js': ['wordCounter', 'textCaseConverter'],
  'removeDuplicateLines.config.js': ['wordSorter', 'removeExtraSpaces'],
  'wordSorter.config.js': ['removeDuplicateLines', 'wordCounter']
};

// Config file paths
const configsDir = path.join(__dirname, '..', 'src', 'configs', 'tools');

// Process each config file
function processConfigFile(filename) {
  const filePath = path.join(configsDir, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return;
  }

  const relatedTools = relationships[filename];
  if (!relatedTools || relatedTools.length === 0) {
    console.log(`ℹ️  No relationships defined for: ${filename}`);
    return;
  }

  console.log(`\n📝 Processing: ${filename}`);
  console.log(`   Related tools: ${relatedTools.join(', ')}`);

  let content = fs.readFileSync(filePath, 'utf8');

  // Build link text for both languages
  const enLinks = relatedTools.map(tool => toolLinks[tool].en).join(' or ');
  const hiLinks = relatedTools.map(tool => toolLinks[tool].hi).join(' या ');

  console.log(`   EN links: ${enLinks}`);
  console.log(`   HI links: ${hiLinks}`);

  // Note: Actual regex replacement would need to be carefully crafted
  // This is a template showing the approach
  console.log(`   ✅ Links prepared (manual insertion recommended)`);
}

// Main execution
console.log('🚀 Starting Contextual Links Application\n');
console.log('=' .repeat(60));

Object.keys(relationships).forEach(filename => {
  processConfigFile(filename);
});

console.log('\n' + '='.repeat(60));
console.log('\n✨ Analysis complete!');
console.log('\n📋 Next Steps:');
console.log('   1. Review the link suggestions above');
console.log('   2. Manually add links to intro or first section');
console.log('   3. Ensure natural sentence flow');
console.log('   4. Test on dev server');
console.log('\n💡 Tip: Use the CONTEXTUAL_LINKS_IMPLEMENTATION_GUIDE.md for detailed instructions');

