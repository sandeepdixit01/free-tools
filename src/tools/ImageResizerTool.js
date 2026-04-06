/**
 * ImageResizerTool Class
 * Pure business logic for image resizing
 * No UI dependencies, completely reusable
 */

import BaseTool from './BaseTool';

class ImageResizerTool extends BaseTool {
  constructor() {
    super();
    this.canvas = null;
    this.ctx = null;
  }

  /**
   * Process a single file (implements BaseTool.process)
   * @param {Object} file - File object with file, dataUrl, width, height, size
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Processed file data
   */
  async process(file, settings) {
    const mode = settings.mode || 'dimensions';
    return this._processImage(file, settings, mode);
  }

  /**
   * Internal image processing method
   * @private
   */
  async _processImage(image, settings, mode) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };

      img.onload = () => {
        try {
          const result = this._processLoadedImage(img, image, settings, mode);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      // Use preview or dataUrl property (useFileUpload creates 'preview')
      img.src = image.preview || image.dataUrl;
    });
  }

  /**
   * Process loaded image element
   * @private
   */
  async _processLoadedImage(img, originalImage, settings, mode) {
    console.log('[ImageResizerTool] Processing with mode:', mode, 'settings:', settings);
    
    // For filesize mode, use iterative compression
    if (mode === 'filesize' || (mode === 'preset' && settings.targetSize)) {
      console.log('[ImageResizerTool] Using iterative compression for target size:', settings.targetSize);
      return await this._compressToTargetSize(img, originalImage, settings);
    }
    
    // For dimensions mode, use direct processing
    console.log('[ImageResizerTool] Using direct compression');
    const dimensions = this._calculateDimensions(img, settings, mode, originalImage.size);
    return await this._compressWithDimensions(img, originalImage, dimensions);
  }

  /**
   * Compress image to exact target size using iterative approach
   * @private
   */
  async _compressToTargetSize(img, originalImage, settings) {
    const targetBytes = settings.targetSize * 1024;
    const tolerance = 0.05; // 5% tolerance
    const maxIterations = 15;
    const minQuality = 0.1;
    const minDimensionScale = 0.3; // Don't go below 30% of original
    
    // Detect if PNG (lossless format where quality doesn't affect size)
    const isPNG = originalImage.file.type === 'image/png';
    
    // Start with preset dimensions if provided, otherwise use original
    let currentWidth = settings.width || img.width;
    let currentHeight = settings.height || img.height;
    
    // If preset dimensions provided, maintain aspect ratio
    if (settings.width && settings.height) {
      const aspectRatio = img.width / img.height;
      const presetRatio = settings.width / settings.height;
      
      if (presetRatio > aspectRatio) {
        // Preset is wider, fit to height
        currentHeight = settings.height;
        currentWidth = settings.height * aspectRatio;
      } else {
        // Preset is taller, fit to width
        currentWidth = settings.width;
        currentHeight = settings.width / aspectRatio;
      }
    }
    
    let currentQuality = 0.92;
    let iteration = 0;
    let lastResult = null;
    let lastSize = 0;
    
    console.log(`[ImageResizer] Target: ${settings.targetSize}KB (${targetBytes} bytes)`);
    console.log(`[ImageResizer] Format: ${originalImage.file.type}${isPNG ? ' (PNG - will use dimension reduction)' : ''}`);
    console.log(`[ImageResizer] Starting dimensions: ${Math.round(currentWidth)}x${Math.round(currentHeight)}`);
    
    while (iteration < maxIterations) {
      iteration++;
      
      // Try compression with current settings
      const result = await this._compressWithDimensions(img, originalImage, {
        width: Math.round(currentWidth),
        height: Math.round(currentHeight),
        quality: currentQuality
      });
      
      lastResult = result;
      const sizeDiff = result.size - targetBytes;
      const sizeRatio = result.size / targetBytes;
      
      console.log(`[ImageResizer] Iteration ${iteration}: ${Math.round(result.size / 1024)}KB (${Math.round(sizeRatio * 100)}% of target), Q:${Math.round(currentQuality * 100)}%, Dim:${result.width}x${result.height}`);
      
      // Check if we're within tolerance and under target
      if (result.size <= targetBytes && sizeRatio >= (1 - tolerance)) {
        console.log(`[ImageResizer] ✅ Success! Final: ${Math.round(result.size / 1024)}KB`);
        return result;
      }
      
      // If we're under target but too small, try to increase quality carefully
      if (result.size < targetBytes * (1 - tolerance)) {
        if (currentQuality < 0.95) {
          // Smaller, more precise quality increase to avoid overshooting
          const gap = targetBytes - result.size;
          const qualityIncrease = Math.min(0.03, gap / targetBytes * 0.2);
          currentQuality = Math.min(0.95, currentQuality + qualityIncrease);
          continue;
        } else {
          // Quality maxed out, accept result
          console.log(`[ImageResizer] ✅ Accepted (quality maxed): ${Math.round(result.size / 1024)}KB`);
          return result;
        }
      }
      
      // If we're over target, need to reduce
      if (result.size > targetBytes) {
        // Detect if size is stuck (PNG issue - quality doesn't help)
        const sizeStuck = lastSize > 0 && Math.abs(result.size - lastSize) < 1024; // Less than 1KB change
        
        // If we're close to target (within 20%), accept it to avoid oscillation
        if (sizeRatio <= 1.2 && iteration > 5) {
          console.log(`[ImageResizer] ✅ Accepted (close enough after ${iteration} iterations): ${Math.round(result.size / 1024)}KB`);
          return result;
        }
        
        // For PNG or if size is stuck, reduce dimensions immediately
        if (isPNG || sizeStuck || currentQuality <= minQuality) {
          const dimensionScale = Math.sqrt(targetBytes / result.size);
          const newScale = Math.max(minDimensionScale, dimensionScale * 0.9);
          
          const newWidth = currentWidth * newScale;
          const newHeight = currentHeight * newScale;
          
          // Check against a reasonable minimum (e.g., 100px)
          const absoluteMinDimension = 100;
          if (newWidth < absoluteMinDimension || newHeight < absoluteMinDimension) {
            // Can't reduce further, return best attempt
            console.log(`[ImageResizer] ⚠️ Cannot reduce further (min dimension reached). Final: ${Math.round(result.size / 1024)}KB`);
            return result;
          }
          
          currentWidth = newWidth;
          currentHeight = newHeight;
          currentQuality = 0.92; // Reset quality when resizing
          console.log(`[ImageResizer] Reducing dimensions to ${Math.round(currentWidth)}x${Math.round(currentHeight)}`);
        } else {
          // For JPEG/WEBP, try reducing quality first
          const excess = result.size - targetBytes;
          const qualityReduction = Math.min(0.08, excess / targetBytes * 0.3);
          currentQuality = Math.max(minQuality, currentQuality - qualityReduction);
        }
        
        lastSize = result.size;
      }
    }
    
    // Max iterations reached, return best result
    console.log(`[ImageResizer] ⚠️ Max iterations reached. Final: ${Math.round(lastResult.size / 1024)}KB`);
    return lastResult;
  }

  /**
   * Compress image with specific dimensions and quality
   * @private
   */
  async _compressWithDimensions(img, originalImage, dimensions) {
    const canvas = this._createCanvas(dimensions.width, dimensions.height);
    const ctx = canvas.getContext('2d');

    // Configure high-quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Draw resized image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Convert to blob with quality setting
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve({
              dataUrl: e.target.result,
              width: canvas.width,
              height: canvas.height,
              size: blob.size,
              blob: blob,
              mimeType: originalImage.file.type
            });
          };
          reader.readAsDataURL(blob);
        },
        originalImage.file.type,
        dimensions.quality
      );
    });
  }

  /**
   * Calculate target dimensions based on mode
   * @private
   */
  _calculateDimensions(img, settings, mode, originalSize) {
    let width = settings.width;
    let height = settings.height;
    let quality = settings.quality / 100;

    switch (mode) {
      case 'dimensions':
        if (settings.maintainAspectRatio) {
          const aspectRatio = img.width / img.height;
          if (width / height > aspectRatio) {
            width = height * aspectRatio;
          } else {
            height = width / aspectRatio;
          }
        }
        break;

      case 'filesize':
        // Handled by iterative compression
        width = img.width;
        height = img.height;
        quality = 0.85; // Starting quality for iteration
        break;

      case 'preset':
        // Handled by iterative compression if targetSize exists
        const aspectRatio = img.width / img.height;
        if (width / height > aspectRatio) {
          width = height * aspectRatio;
        } else {
          height = width / aspectRatio;
        }
        quality = 0.85; // Starting quality for iteration
        break;

      default:
        throw new Error(`Unknown mode: ${mode}`);
    }

    return {
      width: Math.round(width),
      height: Math.round(height),
      quality
    };
  }

  /**
   * DEPRECATED: Old estimation method replaced by iterative compression
   * Kept for backward compatibility but not used in filesize mode
   * @private
   */
  _estimateQualityForSize(originalSize, targetSizeKB) {
    const targetBytes = targetSizeKB * 1024;
    const ratio = targetBytes / originalSize;

    // Quality estimation based on compression ratio
    if (ratio >= 1) return 0.95;
    if (ratio >= 0.5) return 0.85;
    if (ratio >= 0.3) return 0.75;
    if (ratio >= 0.2) return 0.65;
    if (ratio >= 0.1) return 0.55;
    return 0.45;
  }

  /**
   * Create canvas element
   * @private
   */
  _createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  /**
   * Process multiple images in batch
   * @param {Array} images - Array of image objects
   * @param {Object} settings - Processing settings
   * @param {string} mode - Processing mode
   * @returns {Promise<Array>} Array of processed images
   */
  async processBatch(images, settings, mode) {
    const results = await Promise.all(
      images.map(image => this.processImage(image, settings, mode))
    );
    return results;
  }

  /**
   * Validate settings before processing (implements BaseTool.validate)
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result { valid: boolean, errors: Array }
   */
  validate(settings) {
    const mode = settings.mode || 'dimensions';
    const errors = [];

    if (mode === 'dimensions') {
      if (!settings.width || settings.width < 1 || settings.width > 10000) {
        errors.push('Width must be between 1 and 10000 pixels');
      }
      if (!settings.height || settings.height < 1 || settings.height > 10000) {
        errors.push('Height must be between 1 and 10000 pixels');
      }
    }

    if (mode === 'filesize') {
      if (!settings.targetSize || settings.targetSize < 1 || settings.targetSize > 5000) {
        errors.push('Target size must be between 1 and 5000 KB');
      }
    }

    if (settings.quality < 1 || settings.quality > 100) {
      errors.push('Quality must be between 1 and 100');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Get supported file types
   * @returns {Array} Array of supported MIME types
   */
  getSupportedTypes() {
    return ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  }

  /**
   * Get content type for preview (implements BaseTool.getContentType)
   * @returns {string}
   */
  getContentType() {
    return 'image';
  }

  /**
   * Get file property accessors (implements BaseTool.getFileAccessors)
   * @returns {Object}
   */
  getFileAccessors() {
    return {
      preview: 'preview',  // useFileUpload creates 'preview' property, not 'dataUrl'
      name: 'name',
      size: 'size',
      metadata: (file) => ({
        width: file.width,
        height: file.height,
        size: file.size
      })
    };
  }

  /**
   * Get tool metadata (implements BaseTool.getMetadata)
   * @returns {Object}
   */
  getMetadata() {
    return {
      name: 'Image Resizer',
      version: '1.0.0',
      description: 'Resize and compress images'
    };
  }
}

export default ImageResizerTool;

