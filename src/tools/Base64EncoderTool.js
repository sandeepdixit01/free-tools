/**
 * Base64EncoderTool Class
 * Extends BaseTool to provide Base64 encoding/decoding functionality
 *
 * Features:
 * - Encode text to Base64
 * - Decode Base64 to text
 * - UTF-8 safe encoding/decoding
 * - Proper error handling for invalid Base64
 *
 * Note: Uses native browser APIs with UTF-8 support
 */

import BaseTool from './BaseTool'

class Base64EncoderTool extends BaseTool {
  /**
   * Process text and encode/decode Base64
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
            result = this.encodeBase64(text)
            break

          case 'decode':
            result = this.decodeBase64(text)
            break

          default:
            result = this.encodeBase64(text)
        }

        return {
          success: true,
          result: result,
          originalText: text,
          action: action,
          metadata: {
            originalLength: text.length,
            resultLength: result.length,
            encoding: action === 'encode' ? 'Base64' : 'UTF-8'
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
   * Encode text to Base64 (UTF-8 safe)
   * @param {string} text - Text to encode
   * @returns {string} Base64 encoded string
   * @private
   */
  encodeBase64(text) {
    // Use TextEncoder for proper UTF-8 handling
    const encoder = new TextEncoder()
    const data = encoder.encode(text)

    // Convert Uint8Array to binary string
    let binary = ''
    for (let i = 0; i < data.length; i++) {
      binary += String.fromCharCode(data[i])
    }

    // Encode to Base64
    return btoa(binary)
  }

  /**
   * Decode Base64 to text (UTF-8 safe)
   * @param {string} base64 - Base64 string to decode
   * @returns {string} Decoded text
   * @private
   */
  decodeBase64(base64) {
    // Remove whitespace and validate Base64 format
    const cleanBase64 = base64.replace(/\s/g, '')

    if (!this.isValidBase64(cleanBase64)) {
      throw new Error('Invalid Base64 string')
    }

    // Decode from Base64
    const binary = atob(cleanBase64)

    // Convert binary string to Uint8Array
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }

    // Use TextDecoder for proper UTF-8 handling
    const decoder = new TextDecoder()
    return decoder.decode(bytes)
  }

  /**
   * Validate Base64 string format
   * @param {string} str - String to validate
   * @returns {boolean} True if valid Base64
   * @private
   */
  isValidBase64(str) {
    if (!str || str.length === 0) {
      return false
    }

    // Base64 regex pattern
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/

    // Check if string matches Base64 pattern
    if (!base64Regex.test(str)) {
      return false
    }

    // Check if length is valid (must be multiple of 4)
    if (str.length % 4 !== 0) {
      return false
    }

    return true
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
      if (errorMessage.includes('Invalid Base64')) {
        return 'Invalid Base64 string. Please check your input and try again.'
      }

      if (errorMessage.includes('atob')) {
        return 'The input is not a valid Base64 encoded string. Make sure you copied the complete Base64 text.'
      }

      return 'Failed to decode Base64. The input may be corrupted or incomplete.'
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
      name: 'Base64 Encoder/Decoder',
      version: '1.0.0',
      description: 'Encode and decode Base64 strings with UTF-8 support',
      author: 'FreeTools',
      category: 'developer'
    }
  }
}

export default Base64EncoderTool
