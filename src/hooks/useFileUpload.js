/**
 * useFileUpload Hook
 * Manages file upload state and logic for drag & drop and file picker
 */

import { useState, useCallback, useRef } from 'react'
import { validateImageFile, validatePDFFile, validateMultipleFiles } from '../utils/fileValidation'

/**
 * Custom hook for file upload functionality
 * @param {Object} options - Configuration options
 * @param {string} options.acceptedTypes - Accepted file types (e.g., 'image', 'pdf', 'both')
 * @param {boolean} options.multiple - Allow multiple file uploads
 * @param {number} options.maxFiles - Maximum number of files (for multiple uploads)
 * @param {Function} options.onFilesSelected - Callback when files are selected
 * @param {Function} options.onError - Callback when validation fails
 * @returns {Object} - Upload state and handlers
 */
export const useFileUpload = ({
  acceptedTypes = 'image',
  multiple = false,
  maxFiles = 10,
  onFilesSelected = null,
  onError = null
} = {}) => {
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  /**
   * Validate a single file based on accepted types
   */
  const validateFile = useCallback((file) => {
    if (acceptedTypes === 'image') {
      return validateImageFile(file)
    } else if (acceptedTypes === 'pdf') {
      return validatePDFFile(file)
    } else if (acceptedTypes === 'both') {
      const imageResult = validateImageFile(file)
      if (imageResult.valid) return imageResult
      return validatePDFFile(file)
    }
    return { valid: false, error: 'Invalid file type' }
  }, [acceptedTypes])

  /**
   * Process and validate selected files
   */
  const processFiles = useCallback(async (fileList) => {
    setError(null)
    setIsUploading(true)
    setUploadProgress(0)

    try {
      const fileArray = Array.from(fileList)

      // Check max files limit
      if (multiple && fileArray.length > maxFiles) {
        throw new Error(`Maximum ${maxFiles} files allowed`)
      }

      // Validate all files
      let validatedFiles = []
      let validationError = null

      if (multiple) {
        const result = validateMultipleFiles(fileArray, validateFile)
        if (!result.valid || result.errors.length > 0) {
          validationError = result.errors[0] || 'Validation failed'
        }
        validatedFiles = result.validFiles
      } else {
        const result = validateFile(fileArray[0])
        if (!result.valid) {
          validationError = result.error
        } else {
          validatedFiles = [fileArray[0]]
        }
      }

      // Check for validation errors
      if (validationError) {
        throw new Error(validationError)
      }

      // Create file objects with preview URLs
      const processedFiles = await Promise.all(
        validatedFiles.map(async (file, index) => {
          const preview = await createPreviewURL(file)
          return {
            id: `${Date.now()}-${index}`,
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            preview,
            status: 'ready',
            progress: 0
          }
        })
      )

      setFiles(multiple ? processedFiles : [processedFiles[0]])
      setUploadProgress(100)

      // Call success callback
      if (onFilesSelected) {
        onFilesSelected(multiple ? processedFiles : processedFiles[0])
      }
    } catch (err) {
      setError(err.message)
      if (onError) {
        onError(err.message)
      }
    } finally {
      setIsUploading(false)
    }
  }, [multiple, maxFiles, validateFile, onFilesSelected, onError])

  /**
   * Create preview URL for file
   */
  const createPreviewURL = (file) => {
    return new Promise((resolve) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(file)
      } else {
        resolve(null)
      }
    })
  }

  /**
   * Handle file input change
   */
  const handleFileInputChange = useCallback((event) => {
    const fileList = event.target.files
    if (fileList && fileList.length > 0) {
      processFiles(fileList)
    }
  }, [processFiles])

  /**
   * Handle drag enter
   */
  const handleDragEnter = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(true)
  }, [])

  /**
   * Handle drag over
   */
  const handleDragOver = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
  }, [])

  /**
   * Handle drag leave
   */
  const handleDragLeave = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)
  }, [])

  /**
   * Handle drop
   */
  const handleDrop = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
    setIsDragging(false)

    const fileList = event.dataTransfer.files
    if (fileList && fileList.length > 0) {
      processFiles(fileList)
    }
  }, [processFiles])

  /**
   * Open file picker
   */
  const openFilePicker = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [])

  /**
   * Remove a file
   */
  const removeFile = useCallback((fileId) => {
    setFiles(prevFiles => {
      const updatedFiles = prevFiles.filter(f => f.id !== fileId)
      
      // Revoke preview URL to free memory
      const fileToRemove = prevFiles.find(f => f.id === fileId)
      if (fileToRemove && fileToRemove.preview) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      
      return updatedFiles
    })
  }, [])

  /**
   * Clear all files
   */
  const clearFiles = useCallback(() => {
    // Revoke all preview URLs
    files.forEach(file => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview)
      }
    })
    
    setFiles([])
    setError(null)
    setUploadProgress(0)
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [files])

  /**
   * Update file status
   */
  const updateFileStatus = useCallback((fileId, status, progress = null) => {
    setFiles(prevFiles =>
      prevFiles.map(file =>
        file.id === fileId
          ? { ...file, status, progress: progress !== null ? progress : file.progress }
          : file
      )
    )
  }, [])

  /**
   * Get accept attribute for file input
   */
  const getAcceptAttribute = useCallback(() => {
    if (acceptedTypes === 'image') {
      return 'image/*'
    } else if (acceptedTypes === 'pdf') {
      return 'application/pdf'
    } else if (acceptedTypes === 'both') {
      return 'image/*,application/pdf'
    }
    return '*'
  }, [acceptedTypes])

  return {
    // State
    files,
    isDragging,
    isUploading,
    uploadProgress,
    error,
    fileInputRef,
    
    // Handlers
    handleFileInputChange,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    openFilePicker,
    removeFile,
    clearFiles,
    updateFileStatus,
    
    // Utilities
    getAcceptAttribute,
    hasFiles: files.length > 0
  }
}

