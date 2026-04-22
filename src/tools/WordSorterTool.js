/**
 * WordSorterTool Class
 * Extends BaseTool to provide text line sorting functionality
 *
 * Features:
 * - Sort lines alphabetically (ascending/descending)
 * - Case-sensitive or case-insensitive sorting
 * - Optional trim lines before sorting
 * - Optional remove empty lines
 * - Preserve line structure
 */

import BaseTool from './BaseTool';

class WordSorterTool extends BaseTool {
  /**
   * Process text and sort lines
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   *   - order: 'asc' | 'desc' (default: 'asc')
   *   - caseSensitive: boolean (default: false)
   *   - trimLines: boolean (default: true)
   *   - removeEmpty: boolean (default: false)
   * @returns {Promise<Object>} Sorted text result
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || '';
      
      // Default settings
      const order = settings.order || 'asc'; // 'asc' or 'desc'
      const caseSensitive = settings.caseSensitive === true; // default false
      const trimLines = settings.trimLines !== false; // default true
      const removeEmpty = settings.removeEmpty === true; // default false
      
      // Split text into lines
      let lines = text.split('\n');
      
      // Optionally trim lines
      if (trimLines) {
        lines = lines.map(line => line.trim());
      }
      
      // Optionally remove empty lines
      if (removeEmpty) {
        lines = lines.filter(line => line !== '');
      }
      
      // Sort lines
      const sortedLines = this._sortLines(lines, order, caseSensitive);
      
      // Join lines back together
      const result = sortedLines.join('\n');
      
      // Calculate statistics
      const totalLines = text.split('\n').length;
      const processedLines = sortedLines.length;
      const emptyLinesRemoved = removeEmpty ? totalLines - processedLines : 0;

      return {
        success: true,
        result: result,
        originalText: text,
        metadata: {
          totalLines: totalLines,
          processedLines: processedLines,
          emptyLinesRemoved: emptyLinesRemoved,
          originalLength: text.length,
          resultLength: result.length,
          hasChanges: text !== result,
          settings: {
            order,
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
   * Sort lines based on settings
   * @param {Array<string>} lines - Lines to sort
   * @param {string} order - Sort order ('asc' or 'desc')
   * @param {boolean} caseSensitive - Case-sensitive sorting
   * @returns {Array<string>} Sorted lines
   * @private
   */
  _sortLines(lines, order, caseSensitive) {
    const sorted = [...lines].sort((a, b) => {
      let compareA = a;
      let compareB = b;
      
      // Convert to lowercase for case-insensitive comparison
      if (!caseSensitive) {
        compareA = a.toLowerCase();
        compareB = b.toLowerCase();
      }
      
      // Compare strings
      if (compareA < compareB) {
        return order === 'asc' ? -1 : 1;
      }
      if (compareA > compareB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
    
    return sorted;
  }

  /**
   * Validate settings
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result
   */
  validate(settings) {
    const errors = [];

    // Validate order
    if (settings.order && !['asc', 'desc'].includes(settings.order)) {
      errors.push('order must be "asc" or "desc"');
    }
    
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
      name: 'Word Sorter',
      version: '2.0.0',
      description: 'Sort text lines alphabetically in ascending or descending order',
      author: 'FreeTools',
      category: 'text'
    };
  }
}

export default WordSorterTool;

