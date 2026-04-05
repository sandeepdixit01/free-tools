/**
 * TextCaseConverterTool Class
 * Extends BaseTool to provide text case conversion functionality
 * 
 * Features:
 * - UPPERCASE conversion
 * - lowercase conversion
 * - Title Case conversion
 * - Sentence case conversion
 * - Capitalize first letter
 * 
 * Note: Uses centralized textUtils module for all text processing
 */

import BaseTool from './BaseTool'
import {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toSentenceCase,
  capitalize
} from '../utils/textUtils'

class TextCaseConverterTool extends BaseTool {
  /**
   * Process text and convert to specified case
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Converted text result
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || ''
      const caseType = settings.caseType || 'uppercase'

      // Convert text based on selected case type
      let convertedText = ''
      
      switch (caseType) {
        case 'uppercase':
          convertedText = toUpperCase(text)
          break
        
        case 'lowercase':
          convertedText = toLowerCase(text)
          break
        
        case 'titleCase':
          convertedText = toTitleCase(text)
          break
        
        case 'sentenceCase':
          convertedText = toSentenceCase(text)
          break
        
        case 'capitalize':
          convertedText = capitalize(text)
          break
        
        default:
          convertedText = text
      }

      return {
        success: true,
        result: convertedText,
        originalText: text,
        caseType,
        metadata: {
          originalLength: text.length,
          convertedLength: convertedText.length,
          caseApplied: caseType
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }

  /**
   * Validate settings
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result
   */
  validate(settings) {
    const errors = []
    const validCaseTypes = ['uppercase', 'lowercase', 'titleCase', 'sentenceCase', 'capitalize']

    if (settings.caseType && !validCaseTypes.includes(settings.caseType)) {
      errors.push(`Invalid case type. Must be one of: ${validCaseTypes.join(', ')}`)
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }

  /**
   * Get supported types (text input)
   * @returns {Array} Supported MIME types
   */
  getSupportedTypes() {
    return ['text/plain']
  }

  /**
   * Get content type for preview
   * @returns {string} Content type
   */
  getContentType() {
    return 'text'
  }

  /**
   * Get file accessors (not used for text input)
   * @returns {Object} Property accessors
   */
  getFileAccessors() {
    return {
      preview: null,
      name: null,
      size: null,
      metadata: null
    }
  }

  /**
   * Get tool metadata
   * @returns {Object} Tool metadata
   */
  getMetadata() {
    return {
      name: 'Text Case Converter',
      version: '2.0.0',
      description: 'Convert text to different cases (uppercase, lowercase, title case, etc.)',
      author: 'FreeTools',
      category: 'text'
    }
  }

  /**
   * Get available case options
   * @returns {Array} List of case options
   */
  getCaseOptions() {
    return [
      {
        id: 'uppercase',
        name: 'UPPERCASE',
        description: 'Convert all letters to capitals',
        example: 'HELLO WORLD'
      },
      {
        id: 'lowercase',
        name: 'lowercase',
        description: 'Convert all letters to small',
        example: 'hello world'
      },
      {
        id: 'titleCase',
        name: 'Title Case',
        description: 'Capitalize first letter of each word',
        example: 'Hello World'
      },
      {
        id: 'sentenceCase',
        name: 'Sentence case',
        description: 'Capitalize first letter of each sentence',
        example: 'Hello world. How are you?'
      },
      {
        id: 'capitalize',
        name: 'Capitalize',
        description: 'Capitalize first letter only',
        example: 'Hello world'
      }
    ]
  }
}

export default TextCaseConverterTool

