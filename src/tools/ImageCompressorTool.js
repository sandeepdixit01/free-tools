/**
 * ImageCompressorTool Class
 * Pure business logic for image compression
 * Reuses Canvas API patterns from ImageResizerTool
 * No UI dependencies, completely reusable
 */

import BaseTool from './BaseTool';

class ImageCompressorTool extends BaseTool {
  constructor() {
    super();
    this.name = 'ImageCompressorTool';
  }

  /**
   * Process multiple images for compression
   * @param {Array<File>} files - Array of File objects
   * @param {Object} settings - Compression settings
   *   - quality: 0.1 to 1.0 (default 0.8)
   *   - outputFormat: 'image/jpeg', 'image/png', 'image/webp' (default 'image/jpeg')
   * @returns {Promise<Object>} Compressed images data
   */
  async process(files, settings = {}) {
    try {
      const quality = settings.quality || 0.8;
      const outputFormat = settings.outputFormat || 'image/jpeg';

      // Validate quality
      if (quality < 0.1 || quality > 1.0) {
        throw new Error('Quality must be between 0.1 and 1.0');
      }

      // Process all files
      const compressedImages = [];
      
      for (const file of files) {
        try {
          const compressed = await this._compressFile(file, quality, outputFormat);
          compressedImages.push(compressed);
        } catch (error) {
          console.error(`Failed to compress ${file.name}:`, error);
          // Continue with other files even if one fails
        }
      }

      if (compressedImages.length === 0) {
        throw new Error('Failed to compress any images');
      }

      return {
        success: true,
        result: compressedImages
      };
    } catch (error) {
      console.error('Image compression error:', error);
      return {
        success: false,
        error: 'Compression Failed',
        errorMessage: error.message || 'Failed to compress images'
      };
    }
  }

  /**
   * Compress a single file
   * @private
   */
  async _compressFile(file, quality, outputFormat) {
    // Load image
    const img = await this._loadImageFromFile(file);
    
    // Compress image
    const compressedBlob = await this._compressImage(img, quality, outputFormat);

    // Calculate reduction
    const reduction = this._calculateReduction(file.size, compressedBlob.size);

    // Generate filename
    const extension = this._getExtensionFromMimeType(outputFormat);
    const originalName = file.name.replace(/\.[^/.]+$/, '');
    const fileName = `${originalName}_compressed.${extension}`;

    return {
      blob: compressedBlob,
      fileName: fileName,
      originalSize: file.size,
      compressedSize: compressedBlob.size,
      reduction: reduction,
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
   * Compress image using Canvas API
   * @private
   */
  async _compressImage(img, quality, outputFormat) {
    return new Promise((resolve, reject) => {
      try {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to image dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Convert canvas to blob with compression
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create compressed image'));
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
   * Calculate size reduction percentage
   * @private
   */
  _calculateReduction(originalSize, compressedSize) {
    if (originalSize === 0) return 0;
    const reduction = ((originalSize - compressedSize) / originalSize) * 100;
    return Math.max(0, Math.round(reduction * 10) / 10); // Round to 1 decimal
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
        message: 'Please select an image file to compress.'
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

    // Check file size (50MB limit)
    const maxSize = 52428800; // 50MB in bytes
    if (file.size > maxSize) {
      return {
        error: 'File Too Large',
        message: `File "${file.name}" is too large (${this.formatFileSize(file.size)}). Maximum size is 50MB.`
      };
    }

    return null; // All validations passed
  }

  /**
   * Get tool information
   */
  getInfo() {
    return {
      name: 'Image Compressor',
      version: '1.0.0',
      description: 'Compress images with adjustable quality and format conversion',
      supportedFormats: ['image/jpeg', 'image/png', 'image/webp'],
      maxFileSize: '50MB',
      outputFormats: ['jpeg', 'png', 'webp']
    };
  }
}

export default ImageCompressorTool;

