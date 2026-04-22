/**
 * Script to add contextual internal links to all tool configs
 * Run with: node scripts/add-contextual-links.js
 */

// Tool relationship mapping - defines which tools should link to each other
const toolRelationships = {
  // Developer Tools
  'jsonFormatter': {
    related: ['json-to-csv', 'base64-encoder-decoder', 'url-encoder-decoder'],
    links: {
      en: ['<a href="/tools/json-to-csv">JSON to CSV Converter</a>', '<a href="/tools/base64-encoder-decoder">Base64 Encoder</a>'],
      hi: ['<a href="/tools/json-to-csv">JSON to CSV Converter</a>', '<a href="/tools/base64-encoder-decoder">Base64 Encoder</a>']
    }
  },
  'base64Encoder': {
    related: ['json-formatter', 'url-encoder-decoder', 'json-to-csv'],
    links: {
      en: ['<a href="/tools/json-formatter">JSON Formatter</a>', '<a href="/tools/url-encoder-decoder">URL Encoder</a>'],
      hi: ['<a href="/tools/json-formatter">JSON Formatter</a>', '<a href="/tools/url-encoder-decoder">URL Encoder</a>']
    }
  },
  'urlEncoder': {
    related: ['base64-encoder-decoder', 'json-formatter', 'text-case-converter'],
    links: {
      en: ['<a href="/tools/base64-encoder-decoder">Base64 Encoder</a>', '<a href="/tools/json-formatter">JSON Formatter</a>'],
      hi: ['<a href="/tools/base64-encoder-decoder">Base64 Encoder</a>', '<a href="/tools/json-formatter">JSON Formatter</a>']
    }
  },

  // PDF Tools
  'mergePdf': {
    related: ['split-pdf', 'rotate-pdf', 'pdf-to-image'],
    links: {
      en: ['<a href="/tools/split-pdf">Split PDF</a>', '<a href="/tools/rotate-pdf">Rotate PDF</a>'],
      hi: ['<a href="/tools/split-pdf">Split PDF</a>', '<a href="/tools/rotate-pdf">Rotate PDF</a>']
    }
  },
  'splitPdf': {
    related: ['merge-pdf', 'delete-pdf-pages', 'rotate-pdf'],
    links: {
      en: ['<a href="/tools/merge-pdf">Merge PDF</a>', '<a href="/tools/delete-pdf-pages">Delete PDF Pages</a>'],
      hi: ['<a href="/tools/merge-pdf">Merge PDF</a>', '<a href="/tools/delete-pdf-pages">Delete PDF Pages</a>']
    }
  },
  'rotatePdf': {
    related: ['merge-pdf', 'split-pdf', 'pdf-to-image'],
    links: {
      en: ['<a href="/tools/merge-pdf">Merge PDF</a>', '<a href="/tools/pdf-to-image">PDF to Image</a>'],
      hi: ['<a href="/tools/merge-pdf">Merge PDF</a>', '<a href="/tools/pdf-to-image">PDF to Image</a>']
    }
  },
  'pdfToImage': {
    related: ['image-to-pdf', 'rotate-pdf', 'split-pdf'],
    links: {
      en: ['<a href="/tools/image-to-pdf">Image to PDF</a>', '<a href="/tools/rotate-pdf">Rotate PDF</a>'],
      hi: ['<a href="/tools/image-to-pdf">Image to PDF</a>', '<a href="/tools/rotate-pdf">Rotate PDF</a>']
    }
  },
  'deletePdfPages': {
    related: ['split-pdf', 'merge-pdf', 'rotate-pdf'],
    links: {
      en: ['<a href="/tools/split-pdf">Split PDF</a>', '<a href="/tools/merge-pdf">Merge PDF</a>'],
      hi: ['<a href="/tools/split-pdf">Split PDF</a>', '<a href="/tools/merge-pdf">Merge PDF</a>']
    }
  },

  // Image Tools
  'imageResizer': {
    related: ['image-compressor', 'image-format-converter', 'image-crop'],
    links: {
      en: ['<a href="/tools/image-compressor">Image Compressor</a>', '<a href="/tools/image-format-converter">Image Format Converter</a>'],
      hi: ['<a href="/tools/image-compressor">Image Compressor</a>', '<a href="/tools/image-format-converter">Image Format Converter</a>']
    }
  },
  'imageCompressor': {
    related: ['resize-image', 'image-format-converter', 'image-to-pdf'],
    links: {
      en: ['<a href="/tools/resize-image">Image Resizer</a>', '<a href="/tools/image-format-converter">Format Converter</a>'],
      hi: ['<a href="/tools/resize-image">Image Resizer</a>', '<a href="/tools/image-format-converter">Format Converter</a>']
    }
  },
  'imageFormatConverter': {
    related: ['image-compressor', 'resize-image', 'image-crop'],
    links: {
      en: ['<a href="/tools/image-compressor">Image Compressor</a>', '<a href="/tools/resize-image">Image Resizer</a>'],
      hi: ['<a href="/tools/image-compressor">Image Compressor</a>', '<a href="/tools/resize-image">Image Resizer</a>']
    }
  },
  'imageCrop': {
    related: ['resize-image', 'image-compressor', 'image-format-converter'],
    links: {
      en: ['<a href="/tools/resize-image">Image Resizer</a>', '<a href="/tools/image-compressor">Image Compressor</a>'],
      hi: ['<a href="/tools/resize-image">Image Resizer</a>', '<a href="/tools/image-compressor">Image Compressor</a>']
    }
  },
  'imageToPdf': {
    related: ['pdf-to-image', 'merge-pdf', 'image-compressor'],
    links: {
      en: ['<a href="/tools/pdf-to-image">PDF to Image</a>', '<a href="/tools/merge-pdf">Merge PDF</a>'],
      hi: ['<a href="/tools/pdf-to-image">PDF to Image</a>', '<a href="/tools/merge-pdf">Merge PDF</a>']
    }
  },

  // Text Tools
  'wordCounter': {
    related: ['character-counter', 'text-case-converter', 'remove-extra-spaces'],
    links: {
      en: ['<a href="/tools/character-counter">Character Counter</a>', '<a href="/tools/text-case-converter">Text Case Converter</a>'],
      hi: ['<a href="/tools/character-counter">Character Counter</a>', '<a href="/tools/text-case-converter">Text Case Converter</a>']
    }
  },
  'characterCounter': {
    related: ['word-counter', 'remove-extra-spaces', 'text-case-converter'],
    links: {
      en: ['<a href="/tools/word-counter">Word Counter</a>', '<a href="/tools/remove-extra-spaces">Remove Extra Spaces</a>'],
      hi: ['<a href="/tools/word-counter">Word Counter</a>', '<a href="/tools/remove-extra-spaces">Remove Extra Spaces</a>']
    }
  },
  'textCaseConverter': {
    related: ['word-counter', 'remove-extra-spaces', 'word-sorter'],
    links: {
      en: ['<a href="/tools/word-counter">Word Counter</a>', '<a href="/tools/remove-extra-spaces">Remove Extra Spaces</a>'],
      hi: ['<a href="/tools/word-counter">Word Counter</a>', '<a href="/tools/remove-extra-spaces">Remove Extra Spaces</a>']
    }
  },
  'removeExtraSpaces': {
    related: ['word-counter', 'character-counter', 'text-case-converter'],
    links: {
      en: ['<a href="/tools/word-counter">Word Counter</a>', '<a href="/tools/text-case-converter">Text Case Converter</a>'],
      hi: ['<a href="/tools/word-counter">Word Counter</a>', '<a href="/tools/text-case-converter">Text Case Converter</a>']
    }
  },
  'removeDuplicateLines': {
    related: ['word-sorter', 'remove-extra-spaces', 'word-counter'],
    links: {
      en: ['<a href="/tools/word-sorter">Word Sorter</a>', '<a href="/tools/remove-extra-spaces">Remove Extra Spaces</a>'],
      hi: ['<a href="/tools/word-sorter">Word Sorter</a>', '<a href="/tools/remove-extra-spaces">Remove Extra Spaces</a>']
    }
  },
  'wordSorter': {
    related: ['remove-duplicate-lines', 'word-counter', 'text-case-converter'],
    links: {
      en: ['<a href="/tools/remove-duplicate-lines">Remove Duplicate Lines</a>', '<a href="/tools/word-counter">Word Counter</a>'],
      hi: ['<a href="/tools/remove-duplicate-lines">Remove Duplicate Lines</a>', '<a href="/tools/word-counter">Word Counter</a>']
    }
  }
};

console.log('Tool Relationships Mapping Created');
console.log('Total tools with relationships:', Object.keys(toolRelationships).length);
console.log('\nThis mapping defines which tools should link to each other based on:');
console.log('- Same category (primary)');
console.log('- Logical workflow connections (secondary)');
console.log('- User intent and common use cases');
console.log('\nNext step: Apply these links to actual config files');

