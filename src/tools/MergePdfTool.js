/**
 * Merge PDF Tool - Logic Implementation
 * 
 * Handles PDF merging using pdf-lib library
 * Extends BaseTool for consistent interface
 * 
 * @version 1.0.0
 * @lastUpdated 2026-04-04
 */

import { PDFDocument } from 'pdf-lib'
import BaseTool from './BaseTool'

class MergePdfTool extends BaseTool {
  constructor() {
    super()
    this.name = 'MergePdfTool'
  }

  /**
   * Process multiple PDF files and merge them into one
   * 
   * @param {File[]} files - Array of PDF File objects
   * @param {Object} options - Processing options
   * @returns {Promise<Object>} Result object with merged PDF or error
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
      const mergedPdf = await PDFDocument.create()

      // Process each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        
        try {
          // Read file as array buffer
          const arrayBuffer = await file.arrayBuffer()
          
          // Load the PDF
          const pdf = await PDFDocument.load(arrayBuffer)
          
          // Copy all pages from this PDF
          const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
          
          // Add each page to the merged document
          copiedPages.forEach((page) => {
            mergedPdf.addPage(page)
          })
        } catch (error) {
          return {
            success: false,
            error: 'PDF Processing Error',
            errorMessage: `Failed to process file "${file.name}". ${this.getReadableError(error)}`
          }
        }
      }

      // Save the merged PDF
      const mergedPdfBytes = await mergedPdf.save()
      
      // Convert to Blob
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' })

      return {
        success: true,
        result: blob,
        metadata: {
          totalFiles: files.length,
          totalPages: mergedPdf.getPageCount(),
          fileSize: blob.size,
          fileName: this.generateFileName(files)
        }
      }
    } catch (error) {
      console.error('MergePdfTool Error:', error)
      return {
        success: false,
        error: 'Merge Failed',
        errorMessage: this.getReadableError(error)
      }
    }
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
        message: 'Please select at least 2 PDF files to merge.'
      }
    }

    // Check minimum files
    if (files.length < 2) {
      return {
        error: 'Insufficient Files',
        message: 'Please select at least 2 PDF files to merge. Currently selected: ' + files.length
      }
    }

    // Check maximum files (prevent browser from hanging)
    if (files.length > 50) {
      return {
        error: 'Too Many Files',
        message: 'Maximum 50 files can be merged at once. Currently selected: ' + files.length
      }
    }

    // Validate each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Check file type
      if (file.type !== 'application/pdf') {
        return {
          error: 'Invalid File Type',
          message: `File "${file.name}" is not a PDF. Only PDF files are allowed.`
        }
      }

      // Check file size (50MB limit per file)
      const maxSize = 52428800 // 50MB in bytes
      if (file.size > maxSize) {
        return {
          error: 'File Too Large',
          message: `File "${file.name}" is too large (${this.formatFileSize(file.size)}). Maximum size is 50MB per file.`
        }
      }

      // Check if file is empty
      if (file.size === 0) {
        return {
          error: 'Empty File',
          message: `File "${file.name}" is empty. Please select valid PDF files.`
        }
      }
    }

    return null // All validations passed
  }

  /**
   * Generate a filename for the merged PDF
   * 
   * @param {File[]} files - Array of source files
   * @returns {string} Generated filename
   */
  generateFileName(files) {
    const timestamp = new Date().toISOString().slice(0, 10)
    return `merged-pdf-${timestamp}.pdf`
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

    // Common PDF errors
    if (errorMessage.includes('password') || errorMessage.includes('encrypted')) {
      return 'This PDF is password-protected. Please unlock it first before merging.'
    }

    if (errorMessage.includes('corrupt') || errorMessage.includes('invalid')) {
      return 'This PDF file appears to be corrupted or invalid. Please check the file and try again.'
    }

    if (errorMessage.includes('memory') || errorMessage.includes('allocation')) {
      return 'Not enough memory to process this file. Try merging fewer files or smaller files.'
    }

    if (errorMessage.includes('timeout')) {
      return 'Processing took too long. Try merging fewer files or smaller files.'
    }

    // Generic error
    return 'An error occurred while processing the PDF. Please ensure all files are valid PDFs and try again.'
  }

  /**
   * Get tool information
   * 
   * @returns {Object} Tool information
   */
  getInfo() {
    return {
      name: 'Merge PDF',
      version: '1.0.0',
      description: 'Merge multiple PDF files into one document',
      supportedFormats: ['application/pdf'],
      maxFileSize: '50MB per file',
      maxFiles: 50,
      minFiles: 2
    }
  }
}

export default MergePdfTool

