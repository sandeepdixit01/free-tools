/**
 * useProcessing Hook
 * Manages file processing state and operations
 */

import { useState, useCallback, useRef } from 'react'
import { PROCESSING_STATES } from '../utils/constants'

/**
 * Custom hook for file processing functionality
 * @param {Object} options - Configuration options
 * @param {Function} options.processFunction - Function to process files
 * @param {Function} options.onComplete - Callback when processing completes
 * @param {Function} options.onError - Callback when processing fails
 * @param {Function} options.onProgress - Callback for progress updates
 * @returns {Object} - Processing state and handlers
 */
export const useProcessing = ({
  processFunction = null,
  onComplete = null,
  onError = null,
  onProgress = null
} = {}) => {
  const [processingState, setProcessingState] = useState(PROCESSING_STATES.IDLE)
  const [processedFiles, setProcessedFiles] = useState([])
  const [currentFile, setCurrentFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [stats, setStats] = useState({
    totalFiles: 0,
    processedFiles: 0,
    failedFiles: 0,
    totalOriginalSize: 0,
    totalProcessedSize: 0,
    totalSaved: 0,
    averageReduction: 0
  })
  
  const abortControllerRef = useRef(null)
  const startTimeRef = useRef(null)

  /**
   * Update progress
   */
  const updateProgress = useCallback((value) => {
    setProgress(value)
    if (onProgress) {
      onProgress(value)
    }
  }, [onProgress])

  /**
   * Process a single file
   */
  const processSingleFile = useCallback(async (file, options = {}) => {
    try {
      setCurrentFile(file)
      setProcessingState(PROCESSING_STATES.PROCESSING)
      updateProgress(0)

      if (!processFunction) {
        throw new Error('Process function not provided')
      }

      // Process the file
      const result = await processFunction(file, {
        ...options,
        onProgress: updateProgress
      })

      // Update stats
      setStats(prevStats => ({
        ...prevStats,
        processedFiles: prevStats.processedFiles + 1,
        totalOriginalSize: prevStats.totalOriginalSize + (file.size || 0),
        totalProcessedSize: prevStats.totalProcessedSize + (result.size || 0),
        totalSaved: prevStats.totalSaved + ((file.size || 0) - (result.size || 0))
      }))

      return {
        success: true,
        original: file,
        processed: result,
        error: null
      }
    } catch (err) {
      setStats(prevStats => ({
        ...prevStats,
        failedFiles: prevStats.failedFiles + 1
      }))

      return {
        success: false,
        original: file,
        processed: null,
        error: err.message
      }
    }
  }, [processFunction, updateProgress])

  /**
   * Process multiple files
   */
  const processMultipleFiles = useCallback(async (files, options = {}) => {
    setProcessingState(PROCESSING_STATES.PROCESSING)
    setError(null)
    startTimeRef.current = Date.now()
    
    // Initialize stats
    setStats({
      totalFiles: files.length,
      processedFiles: 0,
      failedFiles: 0,
      totalOriginalSize: 0,
      totalProcessedSize: 0,
      totalSaved: 0,
      averageReduction: 0
    })

    const results = []
    abortControllerRef.current = new AbortController()

    try {
      for (let i = 0; i < files.length; i++) {
        // Check if processing was cancelled
        if (abortControllerRef.current.signal.aborted) {
          setProcessingState(PROCESSING_STATES.CANCELLED)
          break
        }

        const file = files[i]
        const result = await processSingleFile(file, options)
        results.push(result)

        // Update overall progress
        const overallProgress = Math.round(((i + 1) / files.length) * 100)
        updateProgress(overallProgress)
      }

      // Calculate average reduction
      const totalOriginal = results.reduce((sum, r) => sum + (r.original?.size || 0), 0)
      const totalProcessed = results.reduce((sum, r) => sum + (r.processed?.size || 0), 0)
      const averageReduction = totalOriginal > 0 
        ? ((totalOriginal - totalProcessed) / totalOriginal) * 100 
        : 0

      setStats(prevStats => ({
        ...prevStats,
        averageReduction
      }))

      setProcessedFiles(results)
      setProcessingState(PROCESSING_STATES.COMPLETED)

      if (onComplete) {
        onComplete(results)
      }

      return results
    } catch (err) {
      setError(err.message)
      setProcessingState(PROCESSING_STATES.ERROR)
      
      if (onError) {
        onError(err.message)
      }
      
      throw err
    } finally {
      setCurrentFile(null)
      abortControllerRef.current = null
    }
  }, [processSingleFile, updateProgress, onComplete, onError])

  /**
   * Process files (single or multiple)
   */
  const processFiles = useCallback(async (files, options = {}) => {
    const fileArray = Array.isArray(files) ? files : [files]
    
    if (fileArray.length === 0) {
      throw new Error('No files to process')
    }

    if (fileArray.length === 1) {
      const result = await processSingleFile(fileArray[0], options)
      setProcessedFiles([result])
      setProcessingState(result.success ? PROCESSING_STATES.COMPLETED : PROCESSING_STATES.ERROR)
      
      if (result.success && onComplete) {
        onComplete([result])
      } else if (!result.success && onError) {
        onError(result.error)
      }
      
      return [result]
    } else {
      return await processMultipleFiles(fileArray, options)
    }
  }, [processSingleFile, processMultipleFiles, onComplete, onError])

  /**
   * Cancel processing
   */
  const cancelProcessing = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      setProcessingState(PROCESSING_STATES.CANCELLED)
    }
  }, [])

  /**
   * Reset processing state
   */
  const resetProcessing = useCallback(() => {
    setProcessingState(PROCESSING_STATES.IDLE)
    setProcessedFiles([])
    setCurrentFile(null)
    setProgress(0)
    setError(null)
    setStats({
      totalFiles: 0,
      processedFiles: 0,
      failedFiles: 0,
      totalOriginalSize: 0,
      totalProcessedSize: 0,
      totalSaved: 0,
      averageReduction: 0
    })
    startTimeRef.current = null
  }, [])

  /**
   * Get processing duration
   */
  const getProcessingDuration = useCallback(() => {
    if (!startTimeRef.current) return 0
    return Date.now() - startTimeRef.current
  }, [])

  /**
   * Check if processing
   */
  const isProcessing = processingState === PROCESSING_STATES.PROCESSING

  /**
   * Check if completed
   */
  const isCompleted = processingState === PROCESSING_STATES.COMPLETED

  /**
   * Check if error
   */
  const hasError = processingState === PROCESSING_STATES.ERROR

  /**
   * Check if cancelled
   */
  const isCancelled = processingState === PROCESSING_STATES.CANCELLED

  /**
   * Check if idle
   */
  const isIdle = processingState === PROCESSING_STATES.IDLE

  return {
    // State
    processingState,
    processedFiles,
    currentFile,
    progress,
    error,
    stats,
    
    // Status checks
    isProcessing,
    isCompleted,
    hasError,
    isCancelled,
    isIdle,
    
    // Actions
    processFiles,
    cancelProcessing,
    resetProcessing,
    
    // Utilities
    getProcessingDuration
  }
}

