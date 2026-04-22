/**
 * Delete PDF Pages Tool - Logic Implementation
 * 
 * Handles PDF page deletion using pdf-lib library
 * Extends BaseTool for consistent interface
 * Reuses patterns from Split and Rotate PDF tools
 * 
 * @version 1.0.0
 * @lastUpdated 2026-04-19
 */

import { PDFDocument } from 'pdf-lib'
import BaseTool from './BaseTool'

class DeletePdfPagesTool extends BaseTool {
  constructor() {
    super()
    this.name = 'DeletePdfPagesTool'
  }

  /**
   * Process PDF file and delete selected pages
   * 
   * @param {File} file - PDF File object
   * @param {Object} options - Processing options
   *   - pagesToDelete: Array of page indices (0-based) to delete
   * @returns {Promise<Object>} Result object with modified PDF or error
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

      const pagesToDelete = options.pagesToDelete || []

      // Read file as array buffer
      const arrayBuffer = await file.arrayBuffer()
      
      // Load the PDF
      const sourcePdf = await PDFDocument.load(arrayBuffer)
      const totalPages = sourcePdf.getPageCount()

      // Validate page selection
      const selectionError = this.validatePageSelection(pagesToDelete, totalPages)
      if (selectionError) {
        return {
          success: false,
          error: selectionError.error,
          errorMessage: selectionError.message
        }
      }

      // Create new PDF with remaining pages
      const newPdf = await PDFDocument.create()
      
      // Copy all pages except the ones to delete
      const pagesToKeep = []
      for (let i = 0; i < totalPages; i++) {
        if (!pagesToDelete.includes(i)) {
          pagesToKeep.push(i)
        }
      }

      // Copy pages to new document
      const copiedPages = await newPdf.copyPages(sourcePdf, pagesToKeep)
      copiedPages.forEach(page => newPdf.addPage(page))

      // Save the modified PDF
      const modifiedPdfBytes = await newPdf.save()
      
      // Convert to Blob
      const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' })

      return {
        success: true,
        result: blob,
        metadata: {
          originalPages: totalPages,
          deletedPages: pagesToDelete.length,
          remainingPages: pagesToKeep.length,
          fileSize: blob.size,
          fileName: this.generateFileName(file, pagesToDelete.length)
        }
      }
    } catch (error) {
      console.error('Delete PDF Pages error:', error)
      return {
        success: false,
        error: 'Deletion Failed',
        errorMessage: this.getReadableError(error)
      }
    }
  }

  /**
   * Generate a filename for the modified PDF
   * 
   * @param {File} file - Source file
   * @param {number} deletedCount - Number of pages deleted
   * @returns {string} Generated filename
   */
  generateFileName(file, deletedCount) {
    const baseName = file.name.replace('.pdf', '')
    return `${baseName}-${deletedCount}pages-deleted.pdf`
  }

  /**
   * Validate page selection
   * 
   * @param {Array} pagesToDelete - Array of page indices to delete
   * @param {number} totalPages - Total pages in PDF
   * @returns {Object|null} Error object or null if valid
   */
  validatePageSelection(pagesToDelete, totalPages) {
    // Check if any pages are selected
    if (!pagesToDelete || pagesToDelete.length === 0) {
      return {
        error: 'No Pages Selected',
        message: 'Please select at least one page to delete.'
      }
    }

    // Check if trying to delete all pages
    if (pagesToDelete.length >= totalPages) {
      return {
        error: 'Cannot Delete All Pages',
        message: 'You cannot delete all pages from the PDF. At least one page must remain.'
      }
    }

    // Check if page indices are valid
    for (const pageIndex of pagesToDelete) {
      if (pageIndex < 0 || pageIndex >= totalPages) {
        return {
          error: 'Invalid Page Selection',
          message: `Page ${pageIndex + 1} does not exist. Valid pages are 1-${totalPages}.`
        }
      }
    }

    return null // All validations passed
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
        message: 'Please select a PDF file to modify.'
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
      return 'This PDF is password-protected. Please unlock it first before deleting pages.'
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
    return 'An error occurred while deleting pages. Please ensure the file is a valid PDF and try again.'
  }

  /**
   * Get tool information
   * 
   * @returns {Object} Tool information
   */
  getInfo() {
    return {
      name: 'Delete PDF Pages',
      version: '1.0.0',
      description: 'Remove unwanted pages from PDF documents',
      supportedFormats: ['application/pdf'],
      maxFileSize: '50MB'
    }
  }
}

export default DeletePdfPagesTool

