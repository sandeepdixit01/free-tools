/**
 * Split PDF Tool - Logic Implementation
 *
 * Handles PDF splitting using pdf-lib library
 * Extends BaseTool for consistent interface
 *
 * @version 1.0.0
 * @lastUpdated 2026-04-19
 */

import { PDFDocument } from 'pdf-lib'
import JSZip from 'jszip'
import BaseTool from './BaseTool'

class SplitPdfTool extends BaseTool {
  constructor() {
    super()
    this.name = 'SplitPdfTool'
  }

  /**
   * Process PDF file and split based on options
   *
   * @param {File} file - PDF File object
   * @param {Object} options - Processing options
   *   - mode: 'all' (each page) or 'ranges' (custom ranges)
   *   - ranges: Array of {start, end} objects (for 'ranges' mode)
   * @returns {Promise<Object>} Result object with split PDFs or error
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
      const ranges = options.ranges || []

      // Read file as array buffer
      const arrayBuffer = await file.arrayBuffer()

      // Load the PDF
      const sourcePdf = await PDFDocument.load(arrayBuffer)
      const totalPages = sourcePdf.getPageCount()

      // Validate ranges if in ranges mode
      if (mode === 'ranges') {
        const rangeError = this.validateRanges(ranges, totalPages)
        if (rangeError) {
          return {
            success: false,
            error: rangeError.error,
            errorMessage: rangeError.message
          }
        }
      }

      // Split based on mode
      let splitPdfs = []

      if (mode === 'all') {
        // Split each page into separate PDF
        splitPdfs = await this.splitAllPages(sourcePdf, totalPages)
      } else if (mode === 'ranges') {
        // Split by custom ranges
        splitPdfs = await this.splitByRanges(sourcePdf, ranges)
      }

      return {
        success: true,
        result: splitPdfs,
        metadata: {
          totalPages: totalPages,
          splitCount: splitPdfs.length,
          mode: mode,
          fileName: file.name
        }
      }
    } catch (error) {
      console.error('Split PDF error:', error)
      return {
        success: false,
        error: 'Split Failed',
        errorMessage: this.getReadableError(error)
      }
    }
  }

  /**
   * Split all pages into separate PDFs
   * @private
   */
  async splitAllPages(sourcePdf, totalPages) {
    const splitPdfs = []

    for (let i = 0; i < totalPages; i++) {
      const newPdf = await PDFDocument.create()
      const [copiedPage] = await newPdf.copyPages(sourcePdf, [i])
      newPdf.addPage(copiedPage)

      const pdfBytes = await newPdf.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })

      splitPdfs.push({
        blob: blob,
        fileName: `page-${i + 1}.pdf`,
        pageNumber: i + 1,
        pageRange: `${i + 1}`,
        size: blob.size
      })
    }

    return splitPdfs
  }

  /**
   * Split by custom ranges
   * @private
   */
  async splitByRanges(sourcePdf, ranges) {
    const splitPdfs = []

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i]
      const newPdf = await PDFDocument.create()

      // Copy pages in range (convert to 0-based index)
      const pageIndices = []
      for (let p = range.start - 1; p < range.end; p++) {
        pageIndices.push(p)
      }

      const copiedPages = await newPdf.copyPages(sourcePdf, pageIndices)
      copiedPages.forEach(page => newPdf.addPage(page))

      const pdfBytes = await newPdf.save()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })

      splitPdfs.push({
        blob: blob,
        fileName: `pages-${range.start}-${range.end}.pdf`,
        pageRange: `${range.start}-${range.end}`,
        pageCount: range.end - range.start + 1,
        size: blob.size
      })
    }

    return splitPdfs
  }

  /**
   * Create ZIP file with all split PDFs
   *
   * @param {Array} pdfs - Array of PDF objects
   * @param {string} zipFileName - Name for the ZIP file
   * @returns {Promise<Blob>} ZIP file blob
   */
  async createZip(pdfs, zipFileName = 'split-pdfs.zip') {
    const zip = new JSZip()

    for (const pdf of pdfs) {
      zip.file(pdf.fileName, pdf.blob)
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
        message: 'Please select a PDF file to split.'
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
   * Validate page ranges
   *
   * @param {Array} ranges - Array of {start, end} objects
   * @param {number} totalPages - Total pages in PDF
   * @returns {Object|null} Error object or null if valid
   */
  validateRanges(ranges, totalPages) {
    if (!ranges || ranges.length === 0) {
      return {
        error: 'No Ranges Specified',
        message: 'Please specify at least one page range to split.'
      }
    }

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i]

      // Check if range has start and end
      if (!range.start || !range.end) {
        return {
          error: 'Invalid Range',
          message: `Range ${i + 1} is missing start or end page.`
        }
      }

      // Check if start is less than or equal to end
      if (range.start > range.end) {
        return {
          error: 'Invalid Range',
          message: `Range ${i + 1}: Start page (${range.start}) cannot be greater than end page (${range.end}).`
        }
      }

      // Check if pages are within bounds
      if (range.start < 1 || range.end > totalPages) {
        return {
          error: 'Out of Bounds',
          message: `Range ${i + 1}: Pages must be between 1 and ${totalPages}.`
        }
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
      return 'This PDF is password-protected. Please unlock it first before splitting.'
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
    return 'An error occurred while splitting the PDF. Please ensure the file is a valid PDF and try again.'
  }

  /**
   * Get tool information
   *
   * @returns {Object} Tool information
   */
  getInfo() {
    return {
      name: 'Split PDF',
      version: '1.0.0',
      description: 'Split PDF into separate files by pages or ranges',
      supportedFormats: ['application/pdf'],
      maxFileSize: '50MB',
      modes: ['all', 'ranges']
    }
  }
}

export default SplitPdfTool
