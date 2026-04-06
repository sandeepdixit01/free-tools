/**
 * Central Tool Registry
 * Single source of truth for all tools in the application
 * 
 * CATEGORIES (FIXED):
 * - image
 * - pdf
 * - text
 * - developer
 */

import imageResizerConfig from './tools/imageResizer.config'
import wordCounterConfig from './tools/wordCounter.config'
import textCaseConverterConfig from './tools/textCaseConverter.config'
import removeExtraSpacesConfig from './tools/removeExtraSpaces.config'
import characterCounterConfig from './tools/characterCounter.config'
import jsonFormatterConfig from './tools/jsonFormatter.config'
import { mergePdfConfig } from './tools/mergePdf.config'

/**
 * Tool Registry
 * Each tool must have:
 * - id: unique identifier
 * - name: tool name (bilingual)
 * - category: one of the 4 predefined categories
 * - route: URL path
 * - config: tool configuration object
 * - icon: emoji or icon
 * - description: brief description (bilingual)
 */
export const toolRegistry = [
  // IMAGE TOOLS
  {
    id: 'image-resizer',
    name: {
      en: 'Image Resizer',
      hi: 'इमेज रीसाइज़र'
    },
    category: 'image',
    route: '/tools/resize-image',
    config: imageResizerConfig,
    icon: '📐',
    description: {
      en: 'Resize images to any size (20KB, 50KB, 100KB)',
      hi: 'इमेज को किसी भी साइज़ में रीसाइज़ करें (20KB, 50KB, 100KB)'
    }
  },
  {
    id: 'image-compressor',
    name: {
      en: 'Image Compressor',
      hi: 'इमेज कंप्रेसर'
    },
    category: 'image',
    route: '/tools/compress-image',
    config: null, // To be implemented
    icon: '🎨',
    description: {
      en: 'Compress images up to 90% smaller',
      hi: 'इमेज को 90% तक छोटा करें'
    }
  },
  {
    id: 'image-cropper',
    name: {
      en: 'Image Cropper',
      hi: 'इमेज क्रॉपर'
    },
    category: 'image',
    route: '/tools/crop-image',
    config: null, // To be implemented
    icon: '✂️',
    description: {
      en: 'Crop images to any size or aspect ratio',
      hi: 'किसी भी साइज़ या आस्पेक्ट रेशियो में इमेज क्रॉप करें'
    }
  },

  // PDF TOOLS
  {
    id: 'compress-pdf',
    name: {
      en: 'Compress PDF',
      hi: 'PDF कंप्रेस करें'
    },
    category: 'pdf',
    route: '/tools/compress-pdf',
    config: null, // To be implemented
    icon: '🗜️',
    description: {
      en: 'Reduce PDF file size without losing quality',
      hi: 'बिना क्वालिटी कम किए PDF फाइल साइज़ कम करें'
    }
  },
  {
    id: 'merge-pdf',
    name: {
      en: 'Merge PDF',
      hi: 'PDF मर्ज करें'
    },
    category: 'pdf',
    route: '/tools/merge-pdf',
    config: mergePdfConfig,
    icon: '🔗',
    description: {
      en: 'Combine multiple PDFs into one file',
      hi: 'कई PDF को एक फाइल में कंबाइन करें'
    }
  },
  {
    id: 'split-pdf',
    name: {
      en: 'Split PDF',
      hi: 'PDF स्प्लिट करें'
    },
    category: 'pdf',
    route: '/tools/split-pdf',
    config: null, // To be implemented
    icon: '✂️',
    description: {
      en: 'Extract pages from PDF files',
      hi: 'PDF फाइल से पेज एक्सट्रैक्ट करें'
    }
  },
  {
    id: 'jpg-to-pdf',
    name: {
      en: 'JPG to PDF',
      hi: 'JPG को PDF में'
    },
    category: 'pdf',
    route: '/tools/jpg-to-pdf',
    config: null, // To be implemented
    icon: '🔄',
    description: {
      en: 'Convert images to PDF documents',
      hi: 'इमेज को PDF डॉक्यूमेंट में बदलें'
    }
  },

  // TEXT TOOLS
  {
    id: 'word-counter',
    name: {
      en: 'Word Counter',
      hi: 'वर्ड काउंटर'
    },
    category: 'text',
    route: '/tools/word-counter',
    config: wordCounterConfig,
    icon: '📊',
    description: {
      en: 'Count words, characters, and sentences',
      hi: 'शब्द, कैरेक्टर और सेंटेंस गिनें'
    }
  },
  {
    id: 'text-case-converter',
    name: {
      en: 'Text Case Converter',
      hi: 'टेक्स्ट केस कन्वर्टर'
    },
    category: 'text',
    route: '/tools/text-case-converter',
    config: textCaseConverterConfig,
    icon: '🔤',
    description: {
      en: 'Convert text to UPPERCASE, lowercase, Title Case, and more',
      hi: 'टेक्स्ट को UPPERCASE, lowercase, Title Case और अधिक में कन्वर्ट करें'
    }
  },
  {
    id: 'remove-extra-spaces',
    name: {
      en: 'Remove Extra Spaces',
      hi: 'एक्स्ट्रा स्पेस हटाएं'
    },
    category: 'text',
    route: '/tools/remove-extra-spaces',
    config: removeExtraSpacesConfig,
    icon: '🧹',
    description: {
      en: 'Remove multiple spaces and clean up text formatting',
      hi: 'मल्टिपल स्पेस हटाएं और टेक्स्ट फॉर्मेटिंग साफ करें'
    }
  },
  {
    id: 'character-counter',
    name: {
      en: 'Character Counter',
      hi: 'कैरेक्टर काउंटर'
    },
    category: 'text',
    route: '/tools/character-counter',
    config: characterCounterConfig,
    icon: '🔢',
    description: {
      en: 'Count characters with and without spaces',
      hi: 'स्पेस के साथ और बिना कैरेक्टर गिनें'
    }
  },

  // DEVELOPER TOOLS
  {
    id: 'json-formatter',
    name: {
      en: 'JSON Formatter',
      hi: 'JSON फॉर्मेटर'
    },
    category: 'developer',
    route: '/tools/json-formatter',
    config: jsonFormatterConfig,
    icon: '{ }',
    description: {
      en: 'Format, minify, and validate JSON data',
      hi: 'JSON डेटा को फॉर्मेट, मिनिफाई और वैलिडेट करें'
    }
  },
  {
    id: 'base64-encoder',
    name: {
      en: 'Base64 Encoder',
      hi: 'Base64 एनकोडर'
    },
    category: 'developer',
    route: '/tools/base64-encoder',
    config: null, // To be implemented
    icon: '🔐',
    description: {
      en: 'Encode and decode Base64 strings',
      hi: 'Base64 स्ट्रिंग एनकोड और डीकोड करें'
    }
  },
  {
    id: 'url-encoder',
    name: {
      en: 'URL Encoder',
      hi: 'URL एनकोडर'
    },
    category: 'developer',
    route: '/tools/url-encoder',
    config: null, // To be implemented
    icon: '🔍',
    description: {
      en: 'Encode and decode URLs safely',
      hi: 'URL को सुरक्षित रूप से एनकोड और डीकोड करें'
    }
  },
  {
    id: 'color-picker',
    name: {
      en: 'Color Picker',
      hi: 'कलर पिकर'
    },
    category: 'developer',
    route: '/tools/color-picker',
    config: null, // To be implemented
    icon: '🌈',
    description: {
      en: 'Pick and convert color codes',
      hi: 'कलर कोड पिक और कन्वर्ट करें'
    }
  }
]

/**
 * Get tools by category
 * @param {string} category - Category ID (image, pdf, text, developer)
 * @returns {Array} Filtered tools
 */
export const getToolsByCategory = (category) => {
  return toolRegistry.filter(tool => tool.category === category)
}

/**
 * Get tool by ID
 * @param {string} id - Tool ID
 * @returns {Object|null} Tool object or null
 */
export const getToolById = (id) => {
  return toolRegistry.find(tool => tool.id === id) || null
}

/**
 * Get all categories with tool counts
 * @returns {Array} Categories with counts
 */
export const getCategoriesWithCounts = () => {
  const categories = ['image', 'pdf', 'text', 'developer']
  return categories.map(category => ({
    id: category,
    count: getToolsByCategory(category).length
  }))
}

