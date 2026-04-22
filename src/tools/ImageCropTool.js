/**
 * ImageCropTool Class
 * Pure business logic for image cropping
 * Reuses Canvas API patterns from other image tools
 * No UI dependencies, completely reusable
 */

import BaseTool from './BaseTool';

class ImageCropTool extends BaseTool {
  constructor() {
    super();
    this.name = 'ImageCropTool';
  }

  /**
   * Process image cropping
   * @param {File} file - Image file to crop
   * @param {Object} cropArea - Crop area coordinates
   *   - x: X coordinate (pixels)
   *   - y: Y coordinate (pixels)
   *   - width: Crop width (pixels)
   *   - height: Crop height (pixels)
   * @param {Object} settings - Additional settings
   *   - outputFormat: 'image/jpeg', 'image/png', 'image/webp' (default 'image/png')
   *   - quality: 0.1 to 1.0 (default 0.95)
   * @returns {Promise<Object>} Cropped image data
   */
  async process(file, cropArea, settings = {}) {
    try {
      // Validate crop area
      if (!cropArea || cropArea.width <= 0 || cropArea.height <= 0) {
        throw new Error('Invalid crop area');
      }

      const outputFormat = settings.outputFormat || 'image/png';
      const quality = settings.quality || 0.95;

      // Load image
      const img = await this._loadImageFromFile(file);

      // Validate crop area is within image bounds
      if (cropArea.x < 0 || cropArea.y < 0 ||
          cropArea.x + cropArea.width > img.width ||
          cropArea.y + cropArea.height > img.height) {
        throw new Error('Crop area exceeds image boundaries');
      }

      // Crop image
      const croppedBlob = await this._cropImage(img, cropArea, outputFormat, quality);

      // Generate filename
      const extension = this._getExtensionFromMimeType(outputFormat);
      const originalName = file.name.replace(/\.[^/.]+$/, '');
      const filename = `${originalName}_cropped.${extension}`;

      return {
        success: true,
        result: {
          blob: croppedBlob,
          filename: filename,
          originalSize: file.size,
          croppedSize: croppedBlob.size,
          originalDimensions: {
            width: img.width,
            height: img.height
          },
          croppedDimensions: {
            width: cropArea.width,
            height: cropArea.height
          },
          dataUrl: await this._blobToDataUrl(croppedBlob)
        }
      };
    } catch (error) {
      console.error('Image crop error:', error);
      return {
        success: false,
        error: 'Crop Failed',
        errorMessage: error.message || 'Failed to crop image'
      };
    }
  }

  /**
   * Load image from File object
   * @private
   */
  async _loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => reject(new Error('Failed to read file'));

      reader.onload = (e) => {
        const img = new Image();

        img.onerror = () => reject(new Error('Failed to load image'));

        img.onload = () => resolve(img);

        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    });
  }

  /**
   * Crop image using Canvas API
   * @private
   */
  async _cropImage(img, cropArea, outputFormat, quality) {
    return new Promise((resolve, reject) => {
      try {
        // Create canvas with crop dimensions
        const canvas = document.createElement('canvas');
        canvas.width = cropArea.width;
        canvas.height = cropArea.height;

        const ctx = canvas.getContext('2d');

        // Draw cropped portion of image
        ctx.drawImage(
          img,
          cropArea.x,      // Source X
          cropArea.y,      // Source Y
          cropArea.width,  // Source Width
          cropArea.height, // Source Height
          0,               // Destination X
          0,               // Destination Y
          cropArea.width,  // Destination Width
          cropArea.height  // Destination Height
        );

        // Convert to blob
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to create blob'));
            }
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
   * Convert blob to data URL
   * @private
   */
  async _blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read blob'));
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  /**
   * Get file extension from MIME type
   * @private
   */
  _getExtensionFromMimeType(mimeType) {
    const map = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/webp': 'webp'
    };
    return map[mimeType] || 'png';
  }

  /**
   * Calculate aspect ratio presets
   * @param {number} imageWidth - Original image width
   * @param {number} imageHeight - Original image height
   * @returns {Object} Aspect ratio presets
   */
  getAspectRatioPresets(imageWidth, imageHeight) {
    return {
      free: { label: 'Free', ratio: null },
      square: { label: '1:1 (Square)', ratio: 1 },
      landscape: { label: '16:9 (Landscape)', ratio: 16 / 9 },
      portrait: { label: '9:16 (Portrait)', ratio: 9 / 16 },
      widescreen: { label: '21:9 (Widescreen)', ratio: 21 / 9 },
      photo: { label: '4:3 (Photo)', ratio: 4 / 3 }
    };
  }

  /**
   * Calculate crop area for aspect ratio
   * @param {number} imageWidth - Image width
   * @param {number} imageHeight - Image height
   * @param {number} ratio - Aspect ratio (width/height)
   * @returns {Object} Crop area
   */
  calculateCropAreaForRatio(imageWidth, imageHeight, ratio) {
    if (!ratio) {
      // Free crop - use full image
      return {
        x: 0,
        y: 0,
        width: imageWidth,
        height: imageHeight
      };
    }

    let width, height;

    if (imageWidth / imageHeight > ratio) {
      // Image is wider than ratio
      height = imageHeight;
      width = Math.round(height * ratio);
    } else {
      // Image is taller than ratio
      width = imageWidth;
      height = Math.round(width / ratio);
    }

    // Center the crop area
    const x = Math.round((imageWidth - width) / 2);
    const y = Math.round((imageHeight - height) / 2);

    return { x, y, width, height };
  }
}

export default ImageCropTool;
