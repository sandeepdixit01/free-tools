/**
 * Rotate PDF Tool - Logic Implementation
 * 
 * Handles PDF page rotation using pdf-lib library
 * Extends BaseTool for consistent interface
 * 
 * @version 1.0.0
 * @lastUpdated 2026-04-19
 */

import { PDFDocument, degrees } from 'pdf-lib'
import BaseTool from './BaseTool'

class RotatePdfTool extends BaseTool {
  constructor() {
    super()
    this.name = 'RotatePdfTool'
  }

  /**
   * Process PDF file and rotate pages
   * 
   * @param {File} file - PDF File object
   * @param {Object} options - Processing options
   *   - mode: 'all' (rotate all pages) or 'individual' (rotate specific pages)
   *   - rotation: 90, 180, or 270 (for 'all' mode)
   *   - pageRotations: Array of {pageIndex, rotation} objects (for 'individual' mode)
   * @returns {Promise<Object>} Result object with rotated PDF or error
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

      const mode = options.mode || 'all'
      const rotation = options.rotation || 90
      const pageRotations = options.pageRotations || []

      // Read file as array buffer
      const arrayBuffer = await file.arrayBuffer()
      
      // Load the PDF
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      const totalPages = pdfDoc.getPageCount()

      // Apply rotations based on mode
      if (mode === 'all') {
        // Rotate all pages by the same amount
        for (let i = 0; i < totalPages; i++) {
          const page = pdfDoc.getPage(i)
          const currentRotation = page.getRotation().angle
          page.setRotation(degrees(currentRotation + rotation))
        }
      } else if (mode === 'individual') {
        // Rotate specific pages
        if (pageRotations.length === 0) {
          return {
            success: false,
            error: 'No Rotations Specified',
            errorMessage: 'Please specify at least one page to rotate.'
          }
        }

        for (const { pageIndex, rotation: pageRotation } of pageRotations) {
          if (pageIndex >= 0 && pageIndex < totalPages) {
            const page = pdfDoc.getPage(pageIndex)
            const currentRotation = page.getRotation().angle
            page.setRotation(degrees(currentRotation + pageRotation))
          }
        }
      }

      // Save the rotated PDF
      const rotatedPdfBytes = await pdfDoc.save()
      
      // Convert to Blob
      const blob = new Blob([rotatedPdfBytes], { type: 'application/pdf' })

      return {
        success: true,
        result: blob,
        metadata: {
          totalPages: totalPages,
          mode: mode,
          rotation: mode === 'all' ? rotation : 'individual',
          fileSize: blob.size,
          fileName: this.generateFileName(file, mode, rotation)
        }
      }
    } catch (error) {
      console.error('Rotate PDF error:', error)
      return {
        success: false,
        error: 'Rotation Failed',
        errorMessage: this.getReadableError(error)
      }
    }
  }

  /**
   * Generate a filename for the rotated PDF
   * 
   * @param {File} file - Source file
   * @param {string} mode - Rotation mode
   * @param {number} rotation - Rotation angle
   * @returns {string} Generated filename
   */
  generateFileName(file, mode, rotation) {
    const baseName = file.name.replace('.pdf', '')
    const rotationSuffix = mode === 'all' ? `-rotated-${rotation}deg` : '-rotated'
    return `${baseName}${rotationSuffix}.pdf`
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
        message: 'Please select a PDF file to rotate.'
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
      return 'This PDF is password-protected. Please unlock it first before rotating.'
    }

    if (errorMessage.includes('corrupt') || errorMessage.includes('invalid')) {
      return 'This PDF file appears to be corrupted or invalid. Please check the file and try again.'
    }

    if (errorMessage.includes('memory') || errorMessage.includes('allocation')) {
      return 'Not enough memory to process this PDF. Try a smaller file.'
    }

    if (errorMessage.includes('timeout')) {
      return 'Processing took too long. Try a smaller PDF file.'
    }

    // Generic error
    return 'An error occurred while rotating the PDF. Please ensure the file is a valid PDF and try again.'
  }

  /**
   * Get tool information
   * 
   * @returns {Object} Tool information
   */
  getInfo() {
    return {
      name: 'Rotate PDF',
      version: '1.0.0',
      description: 'Rotate PDF pages by 90°, 180°, or 270°',
      supportedFormats: ['application/pdf'],
      maxFileSize: '50MB',
      rotationAngles: [90, 180, 270]
    }
  }
}

export default RotatePdfTool

