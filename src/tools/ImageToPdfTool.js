/**
 * Image to PDF Tool - Logic Implementation
 *
 * Converts multiple images to a single PDF document
 * Reuses PDF generation from MergePdfTool pattern
 *
 * @version 1.0.0
 */

import { PDFDocument } from 'pdf-lib'
import BaseTool from './BaseTool'

class ImageToPdfTool extends BaseTool {
  constructor() {
    super()
    this.name = 'ImageToPdfTool'
  }

  /**
   * Process multiple image files and convert to PDF
   *
   * @param {File[]} files - Array of Image File objects
   * @param {Object} options - Processing options
   * @returns {Promise<Object>} Result object with PDF or error
   */
  async process(files, options = {}) {
    try {
      // Validation
      const validationError = this.validateInput(files)
      if (validationError) {
        return {
          success: false,
          error: validationError.error,
          errorMessage: validationError.message
        }
      }

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create()

      // Process each image file
      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        try {
          // Read file as array buffer
          const arrayBuffer = await file.arrayBuffer()

          // Embed image based on type
          let image
          if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
            image = await pdfDoc.embedJpg(arrayBuffer)
          } else if (file.type === 'image/png') {
            image = await pdfDoc.embedPng(arrayBuffer)
          } else {
            // For other formats (webp, gif), convert via canvas
            image = await this._convertAndEmbedImage(file, pdfDoc)
          }

          // Get image dimensions
          const { width, height } = image.scale(1)

          // Create page with image dimensions (or fit to A4 if too large)
          const maxWidth = 595 // A4 width in points
          const maxHeight = 842 // A4 height in points

          let pageWidth = width
          let pageHeight = height

          // Scale down if image is larger than A4
          if (width > maxWidth || height > maxHeight) {
            const scale = Math.min(maxWidth / width, maxHeight / height)
            pageWidth = width * scale
            pageHeight = height * scale
          }

          // Add page with calculated dimensions
          const page = pdfDoc.addPage([pageWidth, pageHeight])

          // Draw image on page
          page.drawImage(image, {
            x: 0,
            y: 0,
            width: pageWidth,
            height: pageHeight,
          })
        } catch (error) {
          return {
            success: false,
            error: 'Image Processing Error',
            errorMessage: `Failed to process image "${file.name}". ${this.getReadableError(error)}`
          }
        }
      }

      // Save the PDF
      const pdfBytes = await pdfDoc.save()

      // Convert to Blob
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })

      return {
        success: true,
        result: blob,
        metadata: {
          totalImages: files.length,
          totalPages: pdfDoc.getPageCount(),
          fileSize: blob.size,
          fileName: this.generateFileName(files)
        }
      }
    } catch (error) {
      console.error('ImageToPdfTool Error:', error)
      return {
        success: false,
        error: 'Conversion Failed',
        errorMessage: this.getReadableError(error)
      }
    }
  }

  /**
   * Convert non-JPEG/PNG images via canvas and embed
   * @private
   */
  async _convertAndEmbedImage(file, pdfDoc) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      img.onload = async () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)

        // Convert to JPEG
        canvas.toBlob(async (blob) => {
          try {
            const arrayBuffer = await blob.arrayBuffer()
            const image = await pdfDoc.embedJpg(arrayBuffer)
            resolve(image)
          } catch (error) {
            reject(error)
          }
        }, 'image/jpeg', 0.95)
      }

      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = URL.createObjectURL(file)
    })
  }

  /**
   * Validate input files
   *
   * @param {File[]} files - Array of files to validate
   * @returns {Object|null} Error object or null if valid
   */
  validateInput(files) {
    // Check if files array exists and is not empty
    if (!files || !Array.isArray(files) || files.length === 0) {
      return {
        error: 'No Files Selected',
        message: 'Please select at least 1 image file to convert.'
      }
    }

    // Check maximum files
    if (files.length > 50) {
      return {
        error: 'Too Many Files',
        message: 'Maximum 50 images can be converted at once. Currently selected: ' + files.length
      }
    }

    // Validate each file
    const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Check file type
      if (!supportedTypes.includes(file.type)) {
        return {
          error: 'Invalid File Type',
          message: `File "${file.name}" is not a supported image. Supported formats: JPG, PNG, WEBP, GIF.`
        }
      }

      // Check file size (10MB limit per file)
      const maxSize = 10485760 // 10MB in bytes
      if (file.size > maxSize) {
        return {
          error: 'File Too Large',
          message: `File "${file.name}" is too large (${this.formatFileSize(file.size)}). Maximum size is 10MB per file.`
        }
      }

      // Check if file is empty
      if (file.size === 0) {
        return {
          error: 'Empty File',
          message: `File "${file.name}" is empty. Please select valid image files.`
        }
      }
    }

    return null // All validations passed
  }

  /**
   * Generate a filename for the PDF
   *
   * @param {File[]} files - Array of source files
   * @returns {string} Generated filename
   */
  generateFileName(files) {
    const timestamp = new Date().toISOString().slice(0, 10)
    return `images-to-pdf-${timestamp}.pdf`
  }

  /**
   * Format file size to human-readable format
   *
   * @param {number} bytes - File size in bytes
   * @returns {string} Formatted file size
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  /**
   * Convert error to user-friendly message
   *
   * @param {Error} error - Error object
   * @returns {string} User-friendly error message
   */
  getReadableError(error) {
    const errorMessage = error.message || error.toString()

    if (errorMessage.includes('Failed to load image')) {
      return 'Failed to load one or more images. Please ensure all files are valid images.'
    }

    if (errorMessage.includes('memory') || errorMessage.includes('allocation')) {
      return 'Not enough memory to process these images. Try converting fewer or smaller images.'
    }

    if (errorMessage.includes('timeout')) {
      return 'Processing took too long. Try converting fewer or smaller images.'
    }

    // Generic error
    return 'An error occurred while converting images to PDF. Please ensure all files are valid images and try again.'
  }

  /**
   * Get tool information
   *
   * @returns {Object} Tool information
   */
  getInfo() {
    return {
      name: 'Image to PDF',
      version: '1.0.0',
      description: 'Convert multiple images to a single PDF document',
      supportedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
      maxFileSize: '10MB per file',
      maxFiles: 50,
      minFiles: 1
    }
  }
}

export default ImageToPdfTool
