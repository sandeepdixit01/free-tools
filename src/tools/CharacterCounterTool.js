/**
 * CharacterCounterTool Class
 * Extends BaseTool to provide character counting functionality
 * 
 * Features:
 * - Count characters with spaces
 * - Count characters without spaces
 * - Real-time counting
 * 
 * Note: Uses centralized textUtils module for all text processing
 */

import BaseTool from './BaseTool'
import { getCharCount, getCharCountNoSpaces } from '../utils/textUtils'

class CharacterCounterTool extends BaseTool {
  /**
   * Process text and count characters
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Character count result
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || ''
      
      // Use textUtils to count characters
      const withSpaces = getCharCount(text)
      const withoutSpaces = getCharCountNoSpaces(text)
      const spacesCount = withSpaces - withoutSpaces

      return {
        success: true,
        result: {
          withSpaces,
          withoutSpaces,
          spacesCount
        },
        originalText: text,
        metadata: {
          textLength: text.length,
          hasContent: text.length > 0
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

    // No specific settings to validate for this tool
    // All settings are boolean flags with default values

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
      name: 'Character Counter',
      version: '2.0.0',
      description: 'Count characters with and without spaces',
      author: 'FreeTools',
      category: 'text'
    }
  }
}

export default CharacterCounterTool

