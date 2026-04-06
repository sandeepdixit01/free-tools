/**
 * File Validation Utilities
 * Reusable file validation functions for all tools
 */

import { FILE_SIZE, SUPPORTED_FORMATS, FILE_EXTENSIONS } from './constants'

/**
 * Validate file type
 * @param {File} file - File object to validate
 * @param {string[]} allowedTypes - Array of allowed MIME types
 * @returns {boolean} - True if valid
 */
export const isValidFileType = (file, allowedTypes) => {
  return allowedTypes.includes(file.type)
}

/**
 * Validate file size
 * @param {File} file - File object to validate
 * @param {number} maxSize - Maximum size in bytes
 * @returns {boolean} - True if valid
 */
export const isValidFileSize = (file, maxSize) => {
  return file.size <= maxSize
}

/**
 * Validate file extension
 * @param {string} filename - File name
 * @param {string[]} allowedExtensions - Array of allowed extensions
 * @returns {boolean} - True if valid
 */
export const isValidFileExtension = (filename, allowedExtensions) => {
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'))
  return allowedExtensions.includes(extension)
}

/**
 * Validate image file
 * @param {File} file - File object to validate
 * @returns {{valid: boolean, error: string|null}}
 */
export const validateImageFile = (file) => {
  if (!file) {
    return { valid: false, error: 'No file provided' }
  }

  if (!isValidFileType(file, SUPPORTED_FORMATS.IMAGE)) {
    return { 
      valid: false, 
      error: `Invalid file type. Supported formats: ${FILE_EXTENSIONS.IMAGE.join(', ')}` 
    }
  }

  if (!isValidFileSize(file, FILE_SIZE.MAX_IMAGE_SIZE)) {
    return { 
      valid: false, 
      error: `File too large. Maximum size: ${FILE_SIZE.MAX_IMAGE_SIZE / (1024 * 1024)}MB` 
    }
  }

  return { valid: true, error: null }
}

/**
 * Validate PDF file
 * @param {File} file - File object to validate
 * @returns {{valid: boolean, error: string|null}}
 */
export const validatePDFFile = (file) => {
  if (!file) {
    return { valid: false, error: 'No file provided' }
  }

  if (!isValidFileType(file, SUPPORTED_FORMATS.PDF)) {
    return { 
      valid: false, 
      error: 'Invalid file type. Only PDF files are supported' 
    }
  }

  if (!isValidFileSize(file, FILE_SIZE.MAX_PDF_SIZE)) {
    return { 
      valid: false, 
      error: `File too large. Maximum size: ${FILE_SIZE.MAX_PDF_SIZE / (1024 * 1024)}MB` 
    }
  }

  return { valid: true, error: null }
}

/**
 * Validate multiple files
 * @param {FileList|File[]} files - Files to validate
 * @param {Function} validator - Validation function to use
 * @returns {{valid: boolean, errors: string[], validFiles: File[]}}
 */
export const validateMultipleFiles = (files, validator) => {
  const errors = []
  const validFiles = []

  Array.from(files).forEach((file, index) => {
    const result = validator(file)
    if (result.valid) {
      validFiles.push(file)
    } else {
      errors.push(`File ${index + 1} (${file.name}): ${result.error}`)
    }
  })

  return {
    valid: validFiles.length > 0,
    errors,
    validFiles
  }
}

/**
 * Check if file is an image
 * @param {File} file - File to check
 * @returns {boolean}
 */
export const isImageFile = (file) => {
  return SUPPORTED_FORMATS.IMAGE.includes(file.type)
}

/**
 * Check if file is a PDF
 * @param {File} file - File to check
 * @returns {boolean}
 */
export const isPDFFile = (file) => {
  return SUPPORTED_FORMATS.PDF.includes(file.type)
}

/**
 * Get file extension
 * @param {string} filename - File name
 * @returns {string} - File extension (lowercase, with dot)
 */
export const getFileExtension = (filename) => {
  return filename.toLowerCase().substring(filename.lastIndexOf('.'))
}

/**
 * Get file name without extension
 * @param {string} filename - File name
 * @returns {string} - File name without extension
 */
export const getFileNameWithoutExtension = (filename) => {
  return filename.substring(0, filename.lastIndexOf('.'))
}

/**
 * Generate safe filename
 * @param {string} filename - Original filename
 * @param {string} suffix - Suffix to add (optional)
 * @returns {string} - Safe filename
 */
export const generateSafeFilename = (filename, suffix = '') => {
  const nameWithoutExt = getFileNameWithoutExtension(filename)
  const ext = getFileExtension(filename)
  const safeName = nameWithoutExt.replace(/[^a-z0-9]/gi, '_').toLowerCase()
  return `${safeName}${suffix}${ext}`
}

