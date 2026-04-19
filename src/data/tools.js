/**
 * Central Tool Data Configuration
 * Single source of truth for all tools in the application
 * 
 * IMPORTANT: This is the ONLY place where tool metadata should be defined.
 * All pages and components must use helper functions to access this data.
 * 
 * TOOL PROPERTIES:
 * - id: unique identifier (slug)
 * - name: tool name (bilingual object)
 * - description: brief description (bilingual object)
 * - category: one of "pdf", "image", "text", "developer"
 * - route: URL path
 * - icon: emoji or icon
 * - active: boolean - whether tool is ready for production
 * - featured: boolean - whether tool should be featured
 * - usageCount: number - tracks popularity (updated by analytics)
 * - config: reference to tool configuration object
 */

import imageResizerConfig from '../configs/tools/imageResizer.config.js'
import wordCounterConfig from '../configs/tools/wordCounter.config.js'
import textCaseConverterConfig from '../configs/tools/textCaseConverter.config.js'
import removeExtraSpacesConfig from '../configs/tools/removeExtraSpaces.config.js'
import characterCounterConfig from '../configs/tools/characterCounter.config.js'
import jsonFormatterConfig from '../configs/tools/jsonFormatter.config.js'
import { mergePdfConfig } from '../configs/tools/mergePdf.config.js'

/**
 * All Tools Registry
 * Add new tools here with all required properties
 */
export const tools = [
  // ============================================
  // IMAGE TOOLS
  // ============================================
  // ============================================
  // IMAGE TOOLS
  // ============================================
  {
    id: 'image-resizer',
    name: {
      en: 'Image Resizer',
      hi: 'इमेज रीसाइज़र'
    },
    description: {
      en: 'Resize images to any size (20KB, 50KB, 100KB)',
      hi: 'इमेज को किसी भी साइज़ में रीसाइज़ करें (20KB, 50KB, 100KB)'
    },
    category: 'image',
    route: '/tools/resize-image',
    icon: '📐',
    active: true,
    featured: true,
    usageCount: 0,
    config: imageResizerConfig
  },

  // ============================================
  // PDF TOOLS
  // ============================================
  {
    id: 'merge-pdf',
    name: {
      en: 'Merge PDF',
      hi: 'PDF मर्ज करें'
    },
    description: {
      en: 'Combine multiple PDFs into one file',
      hi: 'कई PDF को एक फाइल में कंबाइन करें'
    },
    category: 'pdf',
    route: '/tools/merge-pdf',
    icon: '🔗',
    active: true,
    featured: true,
    usageCount: 0,
    config: mergePdfConfig
  },

  // ============================================
  // TEXT TOOLS
  // ============================================
  {
    id: 'word-counter',
    name: {
      en: 'Word Counter',
      hi: 'वर्ड काउंटर'
    },
    description: {
      en: 'Count words, characters, and sentences',
      hi: 'शब्द, कैरेक्टर और सेंटेंस गिनें'
    },
    category: 'text',
    route: '/tools/word-counter',
    icon: '📊',
    active: true,
    featured: true,
    usageCount: 0,
    config: wordCounterConfig
  },
  {
    id: 'text-case-converter',
    name: {
      en: 'Text Case Converter',
      hi: 'टेक्स्ट केस कन्वर्टर'
    },
    description: {
      en: 'Convert text to UPPERCASE, lowercase, Title Case, and more',
      hi: 'टेक्स्ट को UPPERCASE, lowercase, Title Case और अधिक में कन्वर्ट करें'
    },
    category: 'text',
    route: '/tools/text-case-converter',
    icon: '🔤',
    active: true,
    featured: true,
    usageCount: 0,
    config: textCaseConverterConfig
  },
  {
    id: 'remove-extra-spaces',
    name: {
      en: 'Remove Extra Spaces',
      hi: 'एक्स्ट्रा स्पेस हटाएं'
    },
    description: {
      en: 'Remove multiple spaces and clean up text formatting',
      hi: 'मल्टिपल स्पेस हटाएं और टेक्स्ट फॉर्मेटिंग साफ करें'
    },
    category: 'text',
    route: '/tools/remove-extra-spaces',
    icon: '🧹',
    active: true,
    featured: true,
    usageCount: 0,
    config: removeExtraSpacesConfig
  },
  {
    id: 'character-counter',
    name: {
      en: 'Character Counter',
      hi: 'कैरेक्टर काउंटर'
    },
    description: {
      en: 'Count characters with and without spaces',
      hi: 'स्पेस के साथ और बिना कैरेक्टर गिनें'
    },
    category: 'text',
    route: '/tools/character-counter',
    icon: '🔢',
    active: true,
    featured: true,
    usageCount: 0,
    config: characterCounterConfig
  },

  // ============================================
  // DEVELOPER TOOLS
  // ============================================
  {
    id: 'json-formatter',
    name: {
      en: 'JSON Formatter',
      hi: 'JSON फॉर्मेटर'
    },
    description: {
      en: 'Format, minify, and validate JSON data',
      hi: 'JSON डेटा को फॉर्मेट, मिनिफाई और वैलिडेट करें'
    },
    category: 'developer',
    route: '/tools/json-formatter',
    icon: '{ }',
    active: true,
    featured: true,
    usageCount: 0,
    config: jsonFormatterConfig
  }
]

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all active tools
 * @returns {Array} Active tools only
 */
export const getActiveTools = () => {
  return tools.filter(tool => tool.active === true)
}

/**
 * Get popular tools sorted by usage count
 * STANDARDIZED: Returns exactly 6 tools for homepage
 * @param {number} limit - Maximum number of tools to return (default: 6)
 * @returns {Array} Popular tools sorted by usageCount (descending)
 */
export const getPopularTools = (limit = 6) => {
  const activeTools = getActiveTools()
  
  // Sort by usageCount (descending)
  const sorted = [...activeTools].sort((a, b) => b.usageCount - a.usageCount)
  
  // If all tools have 0 usage, fallback to featured tools
  const hasUsage = sorted.some(tool => tool.usageCount > 0)
  if (!hasUsage) {
    const featuredTools = sorted.filter(tool => tool.featured)
    // If we have featured tools, use them; otherwise use first N active tools
    if (featuredTools.length > 0) {
      return featuredTools.slice(0, limit)
    }
  }
  
  return sorted.slice(0, limit)
}

/**
 * Get featured tools
 * @param {number} limit - Maximum number of tools to return
 * @returns {Array} Featured active tools
 */
export const getFeaturedTools = (limit = 6) => {
  return getActiveTools()
    .filter(tool => tool.featured)
    .slice(0, limit)
}

/**
 * Get random tools from active tools
 * STANDARDIZED: Returns exactly 3 tools for "Try These" section
 * @param {number} count - Number of random tools to return (default: 3)
 * @param {Array} excludeIds - Tool IDs to exclude from selection
 * @returns {Array} Random active tools (no duplicates)
 */
export const getRandomTools = (count = 3, excludeIds = []) => {
  const activeTools = getActiveTools().filter(tool => !excludeIds.includes(tool.id))
  
  if (activeTools.length === 0) {
    return []
  }
  
  // Shuffle array using Fisher-Yates algorithm
  const shuffled = [...activeTools]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Get tools by category
 * @param {string} category - Category ID (image, pdf, text, developer)
 * @param {boolean} activeOnly - Whether to return only active tools
 * @returns {Array} Filtered tools
 */
export const getToolsByCategory = (category, activeOnly = true) => {
  let filtered = tools.filter(tool => tool.category === category)
  
  if (activeOnly) {
    filtered = filtered.filter(tool => tool.active === true)
  }
  
  return filtered
}

/**
 * Get tool by ID
 * @param {string} id - Tool ID
 * @returns {Object|null} Tool object or null
 */
export const getToolById = (id) => {
  return tools.find(tool => tool.id === id) || null
}

/**
 * Get tool by route
 * @param {string} route - Tool route path
 * @returns {Object|null} Tool object or null
 */
export const getToolByRoute = (route) => {
  return tools.find(tool => tool.route === route) || null
}

/**
 * Get all categories with tool counts
 * @param {boolean} activeOnly - Whether to count only active tools
 * @returns {Array} Categories with counts
 */
export const getCategoriesWithCounts = (activeOnly = true) => {
  const categories = ['image', 'pdf', 'text', 'developer']
  return categories.map(category => ({
    id: category,
    count: getToolsByCategory(category, activeOnly).length,
    totalCount: getToolsByCategory(category, false).length
  }))
}

/**
 * Get all unique categories
 * @returns {Array} Array of category IDs
 */
export const getAllCategories = () => {
  return ['image', 'pdf', 'text', 'developer']
}

/**
 * Check if a tool is active
 * @param {string} id - Tool ID
 * @returns {boolean} Whether tool is active
 */
export const isToolActive = (id) => {
  const tool = getToolById(id)
  return tool ? tool.active : false
}

/**
 * Get tools for homepage sections
 * @returns {Object} Object with different tool lists for homepage
 */
export const getHomePageTools = () => {
  return {
    popular: getPopularTools(6),
    tryThese: getRandomTools(3),
    featured: getFeaturedTools(4)
  }
}

// Export default for convenience
export default {
  tools,
  getActiveTools,
  getPopularTools,
  getFeaturedTools,
  getRandomTools,
  getToolsByCategory,
  getToolById,
  getToolByRoute,
  getCategoriesWithCounts,
  getAllCategories,
  isToolActive,
  getHomePageTools
}
