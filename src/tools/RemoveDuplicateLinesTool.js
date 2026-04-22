/**
 * RemoveDuplicateLinesTool Class
 * Extends BaseTool to provide duplicate line removal functionality
 *
 * Features:
 * - Remove duplicate lines from text
 * - Keep first occurrence of each line
 * - Preserve original order
 * - Optional case-sensitive comparison
 * - Optional trim lines before comparison
 * - Optional remove empty lines
 */

import BaseTool from './BaseTool';

class RemoveDuplicateLinesTool extends BaseTool {
  /**
   * Process text and remove duplicate lines
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   *   - caseSensitive: boolean (default: true)
   *   - trimLines: boolean (default: true)
   *   - removeEmpty: boolean (default: false)
   * @returns {Promise<Object>} Processed text result
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || '';

      // Default settings
      const caseSensitive = settings.caseSensitive !== false; // default true
      const trimLines = settings.trimLines !== false; // default true
      const removeEmpty = settings.removeEmpty === true; // default false

      // Split text into lines
      const lines = text.split('\n');

      // Track seen lines and result
      const seen = new Set();
      const uniqueLines = [];

      for (let line of lines) {
        // Optionally trim the line
        const processedLine = trimLines ? line.trim() : line;

        // Optionally skip empty lines
        if (removeEmpty && processedLine === '') {
          continue;
        }

        // Create comparison key
        const comparisonKey = caseSensitive
          ? processedLine
          : processedLine.toLowerCase();

        // Check if we've seen this line before
        if (!seen.has(comparisonKey)) {
          seen.add(comparisonKey);
          // Keep original line (not processed) in output
          uniqueLines.push(line);
        }
      }

      // Join lines back together
      const result = uniqueLines.join('\n');

      // Calculate statistics
      const totalLines = lines.length;
      const uniqueLineCount = uniqueLines.length;
      const duplicatesRemoved = totalLines - uniqueLineCount;
      const emptyLinesRemoved = removeEmpty
        ? lines.filter(line => (trimLines ? line.trim() : line) === '').length
        : 0;

      return {
        success: true,
        result: result,
        originalText: text,
        metadata: {
          totalLines: totalLines,
          uniqueLines: uniqueLineCount,
          duplicatesRemoved: duplicatesRemoved,
          emptyLinesRemoved: emptyLinesRemoved,
          originalLength: text.length,
          resultLength: result.length,
          hasChanges: text !== result,
          settings: {
            caseSensitive,
            trimLines,
            removeEmpty
          }
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Validate settings
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result
   */
  validate(settings) {
    const errors = [];

    // Validate boolean settings
    if (settings.caseSensitive !== undefined && typeof settings.caseSensitive !== 'boolean') {
      errors.push('caseSensitive must be a boolean');
    }

    if (settings.trimLines !== undefined && typeof settings.trimLines !== 'boolean') {
      errors.push('trimLines must be a boolean');
    }

    if (settings.removeEmpty !== undefined && typeof settings.removeEmpty !== 'boolean') {
      errors.push('removeEmpty must be a boolean');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Get supported types (text input)
   * @returns {Array} Supported MIME types
   */
  getSupportedTypes() {
    return ['text/plain'];
  }

  /**
   * Get content type for preview
   * @returns {string} Content type
   */
  getContentType() {
    return 'text';
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
    };
  }

  /**
   * Get tool metadata
   * @returns {Object} Tool metadata
   */
  getMetadata() {
    return {
      name: 'Remove Duplicate Lines',
      version: '2.0.0',
      description: 'Remove duplicate lines from text while preserving order',
      author: 'FreeTools',
      category: 'text'
    };
  }
}

export default RemoveDuplicateLinesTool;
