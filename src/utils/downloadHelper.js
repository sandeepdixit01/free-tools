/**
 * Download Helper Utilities
 * Reusable functions for downloading files and creating ZIP archives
 */

import JSZip from 'jszip'

/**
 * Download a single file
 * @param {Blob|string} data - File data (Blob or data URL)
 * @param {string} filename - Name for the downloaded file
 * @param {string} mimeType - MIME type (optional, for Blob conversion)
 */
export const downloadFile = (data, filename, mimeType = null) => {
  try {
    let url

    // If data is already a data URL (starts with 'data:')
    if (typeof data === 'string' && data.startsWith('data:')) {
      url = data
    }
    // If data is a Blob
    else if (data instanceof Blob) {
      url = URL.createObjectURL(data)
    }
    // If data is a string but not a data URL, convert to Blob
    else if (typeof data === 'string') {
      const blob = new Blob([data], { type: mimeType || 'text/plain' })
      url = URL.createObjectURL(blob)
    }
    else {
      throw new Error('Invalid data type for download')
    }

    // Create temporary link and trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up object URL if we created one
    if (data instanceof Blob || (typeof data === 'string' && !data.startsWith('data:'))) {
      setTimeout(() => URL.revokeObjectURL(url), 100)
    }
  } catch (error) {
    console.error('Download failed:', error)
    throw new Error('Failed to download file')
  }
}

/**
 * Download multiple files as a ZIP archive
 * @param {Array} files - Array of file objects {data, filename}
 * @param {string} zipFilename - Name for the ZIP file
 * @param {Function} onProgress - Progress callback (optional)
 * @returns {Promise<void>}
 */
export const downloadAsZip = async (files, zipFilename = 'download.zip', onProgress = null) => {
  try {
    if (!files || files.length === 0) {
      throw new Error('No files to download')
    }

    const zip = new JSZip()
    let processedCount = 0

    // Add each file to the ZIP
    for (const file of files) {
      const { data, filename } = file

      // Convert data URL to Blob if needed
      let blob
      if (typeof data === 'string' && data.startsWith('data:')) {
        blob = await dataURLToBlob(data)
      } else if (data instanceof Blob) {
        blob = data
      } else {
        throw new Error(`Invalid data type for file: ${filename}`)
      }

      // Add file to ZIP
      zip.file(filename, blob)

      // Report progress
      processedCount++
      if (onProgress) {
        onProgress({
          current: processedCount,
          total: files.length,
          percentage: Math.round((processedCount / files.length) * 100)
        })
      }
    }

    // Generate ZIP file
    const zipBlob = await zip.generateAsync(
      { type: 'blob' },
      (metadata) => {
        if (onProgress) {
          onProgress({
            current: files.length,
            total: files.length,
            percentage: metadata.percent,
            stage: 'compressing'
          })
        }
      }
    )

    // Download the ZIP file
    downloadFile(zipBlob, zipFilename)

    if (onProgress) {
      onProgress({
        current: files.length,
        total: files.length,
        percentage: 100,
        stage: 'complete'
      })
    }
  } catch (error) {
    console.error('ZIP download failed:', error)
    throw new Error('Failed to create ZIP file')
  }
}

/**
 * Convert data URL to Blob
 * @param {string} dataURL - Data URL string
 * @returns {Promise<Blob>}
 */
export const dataURLToBlob = async (dataURL) => {
  return new Promise((resolve, reject) => {
    try {
      const arr = dataURL.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      resolve(new Blob([u8arr], { type: mime }))
    } catch (error) {
      reject(new Error('Failed to convert data URL to Blob'))
    }
  })
}

/**
 * Convert Blob to data URL
 * @param {Blob} blob - Blob object
 * @returns {Promise<string>}
 */
export const blobToDataURL = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

/**
 * Download canvas as image
 * @param {HTMLCanvasElement} canvas - Canvas element
 * @param {string} filename - Name for the downloaded file
 * @param {string} format - Image format (png, jpeg, webp)
 * @param {number} quality - Image quality (0-1, for jpeg/webp)
 */
export const downloadCanvas = (canvas, filename, format = 'png', quality = 0.92) => {
  try {
    const mimeType = `image/${format}`
    canvas.toBlob(
      (blob) => {
        if (blob) {
          downloadFile(blob, filename)
        } else {
          throw new Error('Failed to create blob from canvas')
        }
      },
      mimeType,
      quality
    )
  } catch (error) {
    console.error('Canvas download failed:', error)
    throw new Error('Failed to download canvas')
  }
}

/**
 * Create a download link element
 * @param {string} url - URL or data URL
 * @param {string} filename - Name for the downloaded file
 * @returns {HTMLAnchorElement}
 */
export const createDownloadLink = (url, filename) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.style.display = 'none'
  return link
}

/**
 * Trigger multiple downloads with delay
 * @param {Array} files - Array of file objects {data, filename}
 * @param {number} delay - Delay between downloads in ms (default: 100)
 */
export const downloadMultipleFiles = async (files, delay = 100) => {
  for (let i = 0; i < files.length; i++) {
    const { data, filename } = files[i]
    downloadFile(data, filename)
    
    // Add delay between downloads to avoid browser blocking
    if (i < files.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
}

/**
 * Check if browser supports downloads
 * @returns {boolean}
 */
export const supportsDownload = () => {
  const link = document.createElement('a')
  return typeof link.download !== 'undefined'
}

/**
 * Get file extension from filename
 * @param {string} filename - Filename
 * @returns {string} - File extension (without dot)
 */
export const getFileExtension = (filename) => {
  const lastDot = filename.lastIndexOf('.')
  return lastDot !== -1 ? filename.substring(lastDot + 1).toLowerCase() : ''
}

/**
 * Change file extension
 * @param {string} filename - Original filename
 * @param {string} newExtension - New extension (without dot)
 * @returns {string} - Filename with new extension
 */
export const changeFileExtension = (filename, newExtension) => {
  const lastDot = filename.lastIndexOf('.')
  const nameWithoutExt = lastDot !== -1 ? filename.substring(0, lastDot) : filename
  return `${nameWithoutExt}.${newExtension}`
}

/**
 * Generate unique filename
 * @param {string} baseFilename - Base filename
 * @param {Array} existingFilenames - Array of existing filenames
 * @returns {string} - Unique filename
 */
export const generateUniqueFilename = (baseFilename, existingFilenames = []) => {
  if (!existingFilenames.includes(baseFilename)) {
    return baseFilename
  }

  const extension = getFileExtension(baseFilename)
  const nameWithoutExt = baseFilename.substring(0, baseFilename.lastIndexOf('.'))
  
  let counter = 1
  let newFilename
  
  do {
    newFilename = `${nameWithoutExt} (${counter}).${extension}`
    counter++
  } while (existingFilenames.includes(newFilename))
  
  return newFilename
}

