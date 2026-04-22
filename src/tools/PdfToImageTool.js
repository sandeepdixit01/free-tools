/**
 * PDF to Image Tool - Logic Implementation
 *
 * Converts PDF pages to images (PNG/JPG) using pdfjs-dist
 * Real PDF rendering with canvas
 *
 * @version 2.0.0
 */

import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'
import JSZip from 'jszip'
import BaseTool from './BaseTool'

// Configure PDF.js worker - Use Vite's URL import
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

class PdfToImageTool extends BaseTool {
  constructor() {
    super()
    this.name = 'PdfToImageTool'
  }

  /**
   * Process PDF file and convert pages to images
   *
   * @param {File} file - PDF File object
   * @param {Object} options - Processing options (format: 'png' or 'jpeg', quality: 0-1)
   * @returns {Promise<Object>} Result object with images or error
   */
  async process(file, options = {}) {
    try {
      // Validation
      const validationError = this.validateInput(file)
      if (validationError) {
        return {
          success: false,
          error: validationError.error,
          errorMessage: validationError.message
        }
      }

      const format = options.format || 'png'
      const quality = options.quality || 0.92
      const scale = options.scale || 2 // 2x for better quality

      // Read PDF file
      const arrayBuffer = await file.arrayBuffer()

      // Load PDF with pdfjs-dist
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdfDoc = await loadingTask.promise

      const pageCount = pdfDoc.numPages

      // Limit pages for performance
      if (pageCount > 100) {
        return {
          success: false,
          error: 'Too Many Pages',
          errorMessage: `This PDF has ${pageCount} pages. Maximum 100 pages can be converted at once.`
        }
      }

      const images = []

      // Convert each page to image
      for (let i = 1; i <= pageCount; i++) {
        try {
          const imageData = await this._renderPageToImage(
            pdfDoc,
            i,
            format,
            quality,
            scale
          )

          images.push({
            pageNumber: i,
            blob: imageData.blob,
            dataUrl: imageData.dataUrl,
            width: imageData.width,
            height: imageData.height,
            size: imageData.blob.size,
            fileName: `page-${i}.${format === 'png' ? 'png' : 'jpg'}`
          })
        } catch (error) {
          console.error(`Error converting page ${i}:`, error)
          return {
            success: false,
            error: 'Page Conversion Error',
            errorMessage: `Failed to convert page ${i}. ${this.getReadableError(error)}`
          }
        }
      }

      return {
        success: true,
        result: images,
        metadata: {
          totalPages: pageCount,
          format: format,
          totalSize: images.reduce((sum, img) => sum + img.size, 0),
          fileName: file.name
        }
      }
    } catch (error) {
      console.error('PDF to Image conversion error:', error)
      return {
        success: false,
        error: 'Conversion Failed',
        errorMessage: this.getReadableError(error)
      }
    }
  }

  /**
   * Render a PDF page to image using pdfjs-dist
   * @private
   */
  async _renderPageToImage(pdfDoc, pageNumber, format, quality, scale) {
    return new Promise(async (resolve, reject) => {
      try {
        // Get the page
        const page = await pdfDoc.getPage(pageNumber)

        // Get viewport with scale
        const viewport = page.getViewport({ scale })

        // Create canvas
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height

        // Render page to canvas
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        }

        const renderTask = page.render(renderContext)
        await renderTask.promise

        // Convert canvas to blob
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create image blob'))
              return
            }

            // Convert blob to data URL
            const reader = new FileReader()
            reader.onload = (e) => {
              resolve({
                blob: blob,
                dataUrl: e.target.result,
                width: canvas.width,
                height: canvas.height
              })
            }
            reader.onerror = () => {
              reject(new Error('Failed to read image blob'))
            }
            reader.readAsDataURL(blob)
          },
          format === 'png' ? 'image/png' : 'image/jpeg',
          quality
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Create ZIP file with all images
   *
   * @param {Array} images - Array of image objects
   * @param {string} zipFileName - Name for the ZIP file
   * @returns {Promise<Blob>} ZIP file blob
   */
  async createZip(images, zipFileName = 'pdf-images.zip') {
    const zip = new JSZip()

    for (const image of images) {
      zip.file(image.fileName, image.blob)
    }

    return await zip.generateAsync({ type: 'blob' })
  }

  /**
   * Validate input file
   *
   * @param {File} file - File to validate
   * @returns {Object|null} Error object or null if valid
   */
  validateInput(file) {
    // Check if file exists
    if (!file) {
      return {
        error: 'No File Selected',
        message: 'Please select a PDF file to convert.'
      }
    }

    // Check file type
    if (file.type !== 'application/pdf') {
      return {
        error: 'Invalid File Type',
        message: `File "${file.name}" is not a PDF. Only PDF files are allowed.`
      }
    }

    // Check file size (50MB limit)
    const maxSize = 52428800 // 50MB in bytes
    if (file.size > maxSize) {
      return {
        error: 'File Too Large',
        message: `File "${file.name}" is too large (${this.formatFileSize(file.size)}). Maximum size is 50MB.`
      }
    }

    // Check if file is empty
    if (file.size === 0) {
      return {
        error: 'Empty File',
        message: `File "${file.name}" is empty. Please select a valid PDF file.`
      }
    }

    return null // All validations passed
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

    if (errorMessage.includes('password') || errorMessage.includes('encrypted')) {
      return 'This PDF is password-protected. Please unlock it first before converting.'
    }

    if (errorMessage.includes('corrupt') || errorMessage.includes('invalid')) {
      return 'This PDF file appears to be corrupted or invalid. Please check the file and try again.'
    }

    if (errorMessage.includes('memory') || errorMessage.includes('allocation')) {
      return 'Not enough memory to process this PDF. Try a smaller file or fewer pages.'
    }

    if (errorMessage.includes('timeout')) {
      return 'Processing took too long. Try a smaller PDF file.'
    }

    // Generic error
    return 'An error occurred while converting the PDF. Please ensure the file is a valid PDF and try again.'
  }

  /**
   * Get tool information
   *
   * @returns {Object} Tool information
   */
  getInfo() {
    return {
      name: 'PDF to Image',
      version: '2.0.0',
      description: 'Convert PDF pages to images (PNG or JPG) using pdfjs-dist',
      supportedFormats: ['application/pdf'],
      outputFormats: ['image/png', 'image/jpeg'],
      maxFileSize: '50MB',
      maxPages: 100
    }
  }
}

export default PdfToImageTool
