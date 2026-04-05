/**
 * RemoveExtraSpacesTool Class
 * Extends BaseTool to provide extra space removal functionality
 *
 * Features:
 * - Remove multiple consecutive spaces
 * - Trim leading and trailing whitespace
 * - Normalize text spacing
 * - Preserve line breaks and paragraph structure
 *
 * Note: Uses centralized textUtils module for all text processing
 */

import BaseTool from './BaseTool'
import { normalizeSpacesPreserveLines } from '../utils/textUtils'

class RemoveExtraSpacesTool extends BaseTool {
  /**
   * Process text and remove extra spaces
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Cleaned text result
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || ''
      
      // Use textUtils to normalize spaces while preserving line breaks
      const cleanedText = normalizeSpacesPreserveLines(text)
      
      // Calculate statistics
      const originalSpaceCount = this.countSpaces(text)
      const cleanedSpaceCount = this.countSpaces(cleanedText)
      const spacesRemoved = originalSpaceCount - cleanedSpaceCount

      return {
        success: true,
        result: cleanedText,
        originalText: text,
        metadata: {
          originalLength: text.length,
          cleanedLength: cleanedText.length,
          charactersRemoved: text.length - cleanedText.length,
          spacesRemoved: spacesRemoved,
          hasChanges: text !== cleanedText
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
   * Count total spaces in text
   * @param {string} text - Input text
   * @returns {number} Space count
   * @private
   */
  countSpaces(text) {
    if (!text) return 0
    return (text.match(/\s/g) || []).length
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
      name: 'Remove Extra Spaces',
      version: '2.0.0',
      description: 'Remove multiple spaces and normalize text formatting',
      author: 'FreeTools',
      category: 'text'
    }
  }
}

export default RemoveExtraSpacesTool

