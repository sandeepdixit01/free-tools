/**
 * Shared Constants for Tools
 * Reusable across all tools in the application
 */

// File Size Limits
export const FILE_SIZE = {
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_PDF_SIZE: 50 * 1024 * 1024,   // 50MB
  MAX_TOTAL_SIZE: 100 * 1024 * 1024 // 100MB for batch
}

// Backward compatibility - individual exports
export const MAX_FILE_SIZE = FILE_SIZE

// Supported File Formats
export const SUPPORTED_FORMATS = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  PDF: ['application/pdf'],
  TEXT: ['text/plain', 'text/csv']
}

// File Extensions
export const FILE_EXTENSIONS = {
  IMAGE: ['.jpg', '.jpeg', '.png', '.webp'],
  PDF: ['.pdf'],
  TEXT: ['.txt', '.csv']
}

// Backward compatibility
export const IMAGE_FORMATS = SUPPORTED_FORMATS.IMAGE

// Image Processing Defaults
export const IMAGE_DEFAULTS = {
  QUALITY: 85,
  MIN_QUALITY: 1,
  MAX_QUALITY: 100,
  DEFAULT_WIDTH: 800,
  DEFAULT_HEIGHT: 600,
  MAX_DIMENSION: 10000
}

// Backward compatibility - individual exports
export const DEFAULT_QUALITY = IMAGE_DEFAULTS.QUALITY
export const MIN_QUALITY = IMAGE_DEFAULTS.MIN_QUALITY
export const MAX_QUALITY = IMAGE_DEFAULTS.MAX_QUALITY

// Common File Size Presets (in KB)
export const SIZE_PRESETS = {
  TINY: 20,
  SMALL: 50,
  MEDIUM: 100,
  LARGE: 200,
  XLARGE: 500
}

// Image Resize Presets
export const RESIZE_PRESETS = {
  PASSPORT: {
    width: 600,
    height: 600,
    targetSize: 50,
    name: 'Passport Photo'
  },
  WHATSAPP: {
    width: 1280,
    height: 720,
    targetSize: 100,
    name: 'WhatsApp'
  },
  EMAIL: {
    width: 800,
    height: 600,
    targetSize: 100,
    name: 'Email'
  },
  WEBSITE: {
    width: 1200,
    height: 800,
    targetSize: 200,
    name: 'Website'
  }
}

// Processing States
export const PROCESSING_STATES = {
  IDLE: 'idle',
  UPLOADING: 'uploading',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  ERROR: 'error',
  CANCELLED: 'cancelled'
}

// Backward compatibility
export const PROCESSING_STATE = PROCESSING_STATES

// Error Messages
export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: 'File size exceeds maximum limit',
  INVALID_FORMAT: 'Invalid file format',
  PROCESSING_FAILED: 'Processing failed. Please try again',
  UPLOAD_FAILED: 'Upload failed. Please try again',
  NO_FILES: 'No files selected',
  NETWORK_ERROR: 'Network error. Please check your connection'
}

// Success Messages
export const SUCCESS_MESSAGES = {
  UPLOAD_SUCCESS: 'Files uploaded successfully',
  PROCESSING_SUCCESS: 'Processing completed successfully',
  DOWNLOAD_SUCCESS: 'Download started'
}

// Ad Slot Types
export const AD_SLOT_TYPES = {
  TOP: 'top',
  RESULT: 'afterResult',
  MID: 'midContent',
  SIDEBAR: 'sidebar'
}

// Language Codes
export const LANGUAGES = {
  ENGLISH: 'en',
  HINDI: 'hi'
}

// Storage Keys
export const STORAGE_KEYS = {
  LANGUAGE: 'preferred_language',
  THEME: 'theme_preference',
  RECENT_TOOLS: 'recent_tools'
}

