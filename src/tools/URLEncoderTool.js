/**
 * URLEncoderTool Class
 * Extends BaseTool to provide URL encoding/decoding functionality
 *
 * Features:
 * - Encode text to URL-encoded format
 * - Decode URL-encoded strings
 * - Proper error handling for invalid encoded strings
 * - Uses native encodeURIComponent/decodeURIComponent
 *
 * Note: Uses native browser APIs for URL encoding/decoding
 */

import BaseTool from './BaseTool'

class URLEncoderTool extends BaseTool {
  /**
   * Process text and encode/decode URL
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Encoded/decoded text or error
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || ''
      const action = settings.action || 'encode'

      // Handle empty input
      if (!text.trim()) {
        return {
          success: false,
          error: 'Empty input',
          errorMessage: 'Please enter text to process'
        }
      }

      let result = ''

      try {
        switch (action) {
          case 'encode':
            result = this.encodeURL(text)
            break

          case 'decode':
            result = this.decodeURL(text)
            break

          default:
            result = this.encodeURL(text)
        }

        return {
          success: true,
          result: result,
          originalText: text,
          action: action,
          metadata: {
            originalLength: text.length,
            resultLength: result.length,
            encoding: action === 'encode' ? 'URL-encoded' : 'Decoded'
          }
        }
      } catch (processError) {
        return {
          success: false,
          error: 'Processing error',
          errorMessage: this.getReadableError(processError, action),
          originalText: text
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        errorMessage: 'An unexpected error occurred while processing'
      }
    }
  }

  /**
   * Encode text to URL format
   * @param {string} text - Text to encode
   * @returns {string} URL encoded string
   * @private
   */
  encodeURL(text) {
    // Use encodeURIComponent for proper URL encoding
    // This encodes all characters except: A-Z a-z 0-9 - _ . ! ~ * ' ( )
    return encodeURIComponent(text)
  }

  /**
   * Decode URL-encoded string
   * @param {string} encodedText - URL-encoded string to decode
   * @returns {string} Decoded text
   * @private
   */
  decodeURL(encodedText) {
    try {
      // Use decodeURIComponent to decode URL-encoded strings
      return decodeURIComponent(encodedText)
    } catch (error) {
      // Handle malformed URI sequences
      if (error instanceof URIError) {
        throw new Error('Invalid URL-encoded string')
      }
      throw error
    }
  }

  /**
   * Convert error to user-friendly message
   * @param {Error} error - Error object
   * @param {string} action - Action being performed
   * @returns {string} User-friendly error message
   * @private
   */
  getReadableError(error, action) {
    const errorMessage = error.message

    if (action === 'decode') {
      if (errorMessage.includes('Invalid URL-encoded')) {
        return 'Invalid URL-encoded string. The input contains malformed percent-encoding sequences (e.g., incomplete %XX patterns).'
      }

      if (errorMessage.includes('URIError') || errorMessage.includes('malformed')) {
        return 'The input is not a valid URL-encoded string. Please check for incomplete or invalid percent-encoding sequences.'
      }

      return 'Failed to decode URL. The input may contain invalid encoding sequences.'
    }

    if (action === 'encode') {
      return 'Failed to encode text. Please try again.'
    }

    return errorMessage
  }

  /**
   * Validate settings
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result
   */
  validate(settings) {
    const errors = []
    const validActions = ['encode', 'decode']

    if (settings.action && !validActions.includes(settings.action)) {
      errors.push(`Invalid action. Must be one of: ${validActions.join(', ')}`)
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
      name: 'URL Encoder/Decoder',
      version: '1.0.0',
      description: 'Encode and decode URL strings using encodeURIComponent/decodeURIComponent',
      author: 'FreeTools',
      category: 'developer'
    }
  }
}

export default URLEncoderTool
