/**
 * JSONFormatterTool Class
 * Extends BaseTool to provide JSON formatting functionality
 * 
 * Features:
 * - Format (pretty print) JSON
 * - Minify JSON
 * - Validate JSON
 * 
 * Note: Pure JavaScript JSON processing with proper error handling
 */

import BaseTool from './BaseTool'

class JSONFormatterTool extends BaseTool {
  /**
   * Process JSON and format/minify/validate
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Formatted/minified JSON or error
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || ''
      const action = settings.action || 'format'
      const indentSize = settings.indentSize || 2

      // Handle empty input
      if (!text.trim()) {
        return {
          success: false,
          error: 'Empty input',
          errorMessage: 'Please enter JSON to process'
        }
      }

      // Try to parse JSON
      let parsedJSON
      try {
        parsedJSON = JSON.parse(text)
      } catch (parseError) {
        // Extract useful error information
        const errorMessage = this.getReadableError(parseError, text)
        
        return {
          success: false,
          error: 'Invalid JSON',
          errorMessage: errorMessage,
          originalText: text
        }
      }

      // JSON is valid, now process based on action
      let result = ''
      
      switch (action) {
        case 'format':
          result = JSON.stringify(parsedJSON, null, indentSize)
          break
        
        case 'minify':
          result = JSON.stringify(parsedJSON)
          break
        
        case 'validate':
          // Just validation, return formatted for display
          result = JSON.stringify(parsedJSON, null, indentSize)
          break
        
        default:
          result = JSON.stringify(parsedJSON, null, indentSize)
      }

      return {
        success: true,
        result: result,
        originalText: text,
        action: action,
        metadata: {
          isValid: true,
          originalLength: text.length,
          resultLength: result.length,
          compressionRatio: text.length > 0 ? ((text.length - result.length) / text.length * 100).toFixed(2) : 0
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        errorMessage: 'An unexpected error occurred while processing JSON'
      }
    }
  }

  /**
   * Convert JSON parse error to user-friendly message
   * @param {Error} error - Parse error
   * @param {string} text - Original text
   * @returns {string} - User-friendly error message
   * @private
   */
  getReadableError(error, text) {
    const errorMessage = error.message

    // Extract position if available
    const positionMatch = errorMessage.match(/position (\d+)/)
    const position = positionMatch ? parseInt(positionMatch[1]) : null

    // Common JSON errors with helpful messages
    if (errorMessage.includes('Unexpected token')) {
      const tokenMatch = errorMessage.match(/Unexpected token (.+?) in JSON/)
      const token = tokenMatch ? tokenMatch[1] : 'character'
      
      if (position !== null) {
        const context = this.getErrorContext(text, position)
        return `Unexpected ${token} at position ${position}. ${context}`
      }
      return `Unexpected ${token}. Check for missing commas, quotes, or brackets.`
    }

    if (errorMessage.includes('Unexpected end of JSON')) {
      return 'Unexpected end of JSON. Check for unclosed brackets, braces, or quotes.'
    }

    if (errorMessage.includes('Unexpected string')) {
      return 'Unexpected string. Check for missing commas between properties or array elements.'
    }

    if (errorMessage.includes('Unexpected number')) {
      return 'Unexpected number. Check for missing commas or invalid number format.'
    }

    // Default: return original error with helpful hint
    return `${errorMessage}. Common issues: missing commas, unclosed brackets, unquoted keys, or trailing commas.`
  }

  /**
   * Get context around error position
   * @param {string} text - Original text
   * @param {number} position - Error position
   * @returns {string} - Context string
   * @private
   */
  getErrorContext(text, position) {
    const start = Math.max(0, position - 20)
    const end = Math.min(text.length, position + 20)
    const context = text.substring(start, end)
    const pointer = ' '.repeat(Math.min(20, position - start)) + '^'
    
    return `Near: "${context}"\n${pointer}`
  }

  /**
   * Validate settings
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result
   */
  validate(settings) {
    const errors = []
    const validActions = ['format', 'minify', 'validate']

    if (settings.action && !validActions.includes(settings.action)) {
      errors.push(`Invalid action. Must be one of: ${validActions.join(', ')}`)
    }

    if (settings.indentSize && (settings.indentSize < 0 || settings.indentSize > 10)) {
      errors.push('Indent size must be between 0 and 10')
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
    return ['application/json', 'text/plain']
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
      name: 'JSON Formatter',
      version: '2.0.0',
      description: 'Format, minify, and validate JSON data',
      author: 'FreeTools',
      category: 'developer'
    }
  }
}

export default JSONFormatterTool

