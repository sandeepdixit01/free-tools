/**
 * ImageFormatConverterTool Class
 * Pure business logic for image format conversion
 * Reuses Canvas API patterns from ImageCompressorTool
 * Converts between JPG, PNG, and WEBP formats
 */

import BaseTool from './BaseTool';

class ImageFormatConverterTool extends BaseTool {
  constructor() {
    super();
    this.name = 'ImageFormatConverterTool';
  }

  /**
   * Process multiple images for format conversion
   * @param {Array<File>} files - Array of File objects
   * @param {Object} settings - Conversion settings
   *   - outputFormat: 'image/jpeg', 'image/png', 'image/webp' (required)
   *   - quality: 0.1 to 1.0 (default 0.92 for high quality)
   * @returns {Promise<Object>} Converted images data
   */
  async process(files, settings = {}) {
    try {
      const outputFormat = settings.outputFormat || 'image/png';
      const quality = settings.quality || 0.92; // High quality by default

      // Validate format
      const validFormats = ['image/jpeg', 'image/png', 'image/webp'];
      if (!validFormats.includes(outputFormat)) {
        throw new Error('Invalid output format');
      }

      // Process all files
      const convertedImages = [];

      for (const file of files) {
        try {
          const converted = await this._convertFile(file, outputFormat, quality);
          convertedImages.push(converted);
        } catch (error) {
          console.error(`Failed to convert ${file.name}:`, error);
          // Continue with other files even if one fails
        }
      }

      if (convertedImages.length === 0) {
        throw new Error('Failed to convert any images');
      }

      return {
        success: true,
        result: convertedImages
      };
    } catch (error) {
      console.error('Image conversion error:', error);
      return {
        success: false,
        error: 'Conversion Failed',
        errorMessage: error.message || 'Failed to convert images'
      };
    }
  }

  /**
   * Convert a single file
   * @private
   */
  async _convertFile(file, outputFormat, quality) {
    // Load image
    const img = await this._loadImageFromFile(file);

    // Convert image format
    const convertedBlob = await this._convertImage(img, outputFormat, quality);

    // Get original format
    const originalFormat = this._getFormatName(file.type);
    const newFormat = this._getFormatName(outputFormat);

    // Generate filename
    const extension = this._getExtensionFromMimeType(outputFormat);
    const originalName = file.name.replace(/\.[^/.]+$/, '');
    const fileName = `${originalName}.${extension}`;

    return {
      blob: convertedBlob,
      fileName: fileName,
      originalFormat: originalFormat,
      newFormat: newFormat,
      originalSize: file.size,
      convertedSize: convertedBlob.size,
      dimensions: {
        width: img.width,
        height: img.height
      }
    };
  }

  /**
   * Load image from File object
   * @private
   */
  _loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.onload = (e) => {
        img.onerror = () => {
          reject(new Error('Failed to load image'));
        };

        img.onload = () => {
          resolve(img);
        };

        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    });
  }

  /**
   * Convert image format using Canvas API
   * @private
   */
  async _convertImage(img, outputFormat, quality) {
    return new Promise((resolve, reject) => {
      try {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to image dimensions (preserve size)
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Convert canvas to blob with new format
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to convert image format'));
              return;
            }
            resolve(blob);
          },
          outputFormat,
          quality
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Get file extension from MIME type
   * @private
   */
  _getExtensionFromMimeType(mimeType) {
    const extensions = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp'
    };
    return extensions[mimeType] || 'jpg';
  }

  /**
   * Get format name from MIME type
   * @private
   */
  _getFormatName(mimeType) {
    const names = {
      'image/jpeg': 'JPG',
      'image/jpg': 'JPG',
      'image/png': 'PNG',
      'image/webp': 'WEBP'
    };
    return names[mimeType] || 'Unknown';
  }

  /**
   * Calculate size difference percentage
   * @private
   */
  _calculateSizeDifference(originalSize, convertedSize) {
    if (originalSize === 0) return 0;
    const diff = ((convertedSize - originalSize) / originalSize) * 100;
    return Math.round(diff * 10) / 10; // Round to 1 decimal
  }

  /**
   * Format file size to human-readable format
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Validate input file
   */
  validateInput(file) {
    if (!file) {
      return {
        error: 'No File Selected',
        message: 'Please select an image file to convert.'
      };
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return {
        error: 'Invalid File Type',
        message: `File "${file.name}" is not a supported image format. Supported formats: JPG, PNG, WEBP.`
      };
    }

    // Check file size (10MB limit)
    const maxSize = 10485760; // 10MB in bytes
    if (file.size > maxSize) {
      return {
        error: 'File Too Large',
        message: `File "${file.name}" exceeds the 10MB size limit.`
      };
    }

    return null; // No error
  }
}

export default ImageFormatConverterTool;
