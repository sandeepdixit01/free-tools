/**
 * Formatting Utilities
 * Reusable formatting functions for file sizes, numbers, etc.
 */

/**
 * Format bytes to human-readable size
 * @param {number} bytes - Size in bytes
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {string} - Formatted size string
 */
export const formatFileSize = (bytes, decimals = 1) => {
  if (bytes === 0) return '0 B'
  if (!bytes) return 'N/A'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * Convert KB to bytes
 * @param {number} kb - Size in kilobytes
 * @returns {number} - Size in bytes
 */
export const kbToBytes = (kb) => {
  return kb * 1024
}

/**
 * Convert bytes to KB
 * @param {number} bytes - Size in bytes
 * @returns {number} - Size in kilobytes
 */
export const bytesToKb = (bytes) => {
  return bytes / 1024
}

/**
 * Convert MB to bytes
 * @param {number} mb - Size in megabytes
 * @returns {number} - Size in bytes
 */
export const mbToBytes = (mb) => {
  return mb * 1024 * 1024
}

/**
 * Convert bytes to MB
 * @param {number} bytes - Size in bytes
 * @returns {number} - Size in megabytes
 */
export const bytesToMb = (bytes) => {
  return bytes / (1024 * 1024)
}

/**
 * Calculate size reduction percentage
 * @param {number} originalSize - Original size in bytes
 * @param {number} newSize - New size in bytes
 * @returns {string} - Percentage reduction (e.g., "45.2")
 */
export const calculateReduction = (originalSize, newSize) => {
  if (!originalSize || originalSize === 0) return '0'
  const reduction = ((originalSize - newSize) / originalSize) * 100
  return reduction.toFixed(1)
}

/**
 * Calculate size saved
 * @param {number} originalSize - Original size in bytes
 * @param {number} newSize - New size in bytes
 * @returns {number} - Bytes saved
 */
export const calculateSaved = (originalSize, newSize) => {
  return Math.max(0, originalSize - newSize)
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Format dimensions
 * @param {number} width - Width in pixels
 * @param {number} height - Height in pixels
 * @returns {string} - Formatted dimensions (e.g., "1920 × 1080")
 */
export const formatDimensions = (width, height) => {
  return `${width} × ${height}`
}

/**
 * Format aspect ratio
 * @param {number} width - Width in pixels
 * @param {number} height - Height in pixels
 * @returns {string} - Aspect ratio (e.g., "16:9")
 */
export const formatAspectRatio = (width, height) => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  const divisor = gcd(width, height)
  return `${width / divisor}:${height / divisor}`
}

/**
 * Format duration (milliseconds to readable format)
 * @param {number} ms - Duration in milliseconds
 * @returns {string} - Formatted duration
 */
export const formatDuration = (ms) => {
  if (ms < 1000) return `${ms}ms`
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return `${minutes}m ${seconds}s`
}

/**
 * Format percentage
 * @param {number} value - Value to format
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {string} - Formatted percentage
 */
export const formatPercentage = (value, decimals = 0) => {
  return `${value.toFixed(decimals)}%`
}

/**
 * Truncate filename
 * @param {string} filename - Filename to truncate
 * @param {number} maxLength - Maximum length (default: 30)
 * @returns {string} - Truncated filename
 */
export const truncateFilename = (filename, maxLength = 30) => {
  if (filename.length <= maxLength) return filename
  
  const extension = filename.substring(filename.lastIndexOf('.'))
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'))
  const truncatedName = nameWithoutExt.substring(0, maxLength - extension.length - 3)
  
  return `${truncatedName}...${extension}`
}

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} - Formatted date
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

/**
 * Format relative time (e.g., "2 minutes ago")
 * @param {Date} date - Date object
 * @returns {string} - Relative time string
 */
export const formatRelativeTime = (date) => {
  const now = new Date()
  const diffMs = now - date
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHour / 24)

  if (diffSec < 60) return 'just now'
  if (diffMin < 60) return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`
  if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`
  if (diffDay < 7) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`
  
  return formatDate(date)
}

