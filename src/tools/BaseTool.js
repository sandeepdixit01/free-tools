/**
 * BaseTool Class
 * Abstract base class that all tool classes must extend
 * Defines the standard interface for tool operations
 */

class BaseTool {
  /**
   * Process a single file
   * MUST be implemented by subclasses
   * @param {Object} file - File object to process
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Processed file data
   */
  async process(file, settings) {
    throw new Error('process() method must be implemented by subclass');
  }

  /**
   * Process multiple files in batch
   * Default implementation processes files sequentially
   * Can be overridden for parallel processing
   * @param {Array} files - Array of file objects
   * @param {Object} settings - Processing settings
   * @returns {Promise<Array>} Array of processed file data
   */
  async processBatch(files, settings) {
    const results = [];
    for (const file of files) {
      const result = await this.process(file, settings);
      results.push(result);
    }
    return results;
  }

  /**
   * Validate settings before processing
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result { valid: boolean, errors: Array }
   */
  validate(settings) {
    return {
      valid: true,
      errors: []
    };
  }

  /**
   * Get supported file types
   * @returns {Array} Array of supported MIME types
   */
  getSupportedTypes() {
    return [];
  }

  /**
   * Check if file type is supported
   * @param {string} mimeType - MIME type to check
   * @returns {boolean}
   */
  isTypeSupported(mimeType) {
    return this.getSupportedTypes().includes(mimeType);
  }

  /**
   * Get content type for preview
   * Used by PreviewPane to determine how to display content
   * @returns {string} Content type: 'image' | 'pdf' | 'video' | 'document' | 'custom'
   */
  getContentType() {
    return 'file';
  }

  /**
   * Get file property accessor
   * Defines how to access file properties for preview
   * @returns {Object} Property accessors
   */
  getFileAccessors() {
    return {
      preview: 'dataUrl',      // Property name for preview URL
      name: 'name',            // Property name for file name
      size: 'size',            // Property name for file size
      metadata: null           // Optional metadata accessor function
    };
  }

  /**
   * Get tool metadata
   * @returns {Object} Tool metadata
   */
  getMetadata() {
    return {
      name: 'Base Tool',
      version: '1.0.0',
      description: 'Base tool class'
    };
  }
}

export default BaseTool;

