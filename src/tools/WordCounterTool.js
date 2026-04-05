/**
 * WordCounterTool Class
 * Extends BaseTool to provide word counting functionality
 *
 * Features:
 * - Word count
 * - Character count (with and without spaces)
 * - Sentence count
 * - Paragraph count
 * - Reading time calculation
 *
 * Note: Uses centralized textUtils module for all text processing
 */

import BaseTool from './BaseTool'
import {
  getWordCount,
  getCharCount,
  getCharCountNoSpaces,
  getSentenceCount,
  getParagraphCount,
  getReadingTime
} from '../utils/textUtils'

class WordCounterTool extends BaseTool {
  /**
   * Process text and return statistics
   * @param {Object} input - Input object containing text
   * @param {Object} settings - Processing settings
   * @returns {Promise<Object>} Text statistics
   */
  async process(input, settings = {}) {
    try {
      const text = input.text || ''
      const wordsPerMinute = settings.wordsPerMinute || 200

      // Calculate all statistics using centralized textUtils
      const readingTimeSeconds = getReadingTime(text, wordsPerMinute)
      const minutes = Math.floor(readingTimeSeconds / 60)
      const seconds = Math.ceil(readingTimeSeconds % 60)

      const stats = {
        words: getWordCount(text),
        charactersWithSpaces: getCharCount(text),
        charactersWithoutSpaces: getCharCountNoSpaces(text),
        sentences: getSentenceCount(text),
        paragraphs: getParagraphCount(text),
        readingTime: {
          minutes,
          seconds,
          totalSeconds: Math.ceil(readingTimeSeconds)
        }
      }

      return {
        success: true,
        stats,
        originalText: text
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }

  /**
   * Validate settings
   * @param {Object} settings - Settings to validate
   * @returns {Object} Validation result
   */
  validate(settings) {
    const errors = []

    if (settings.wordsPerMinute && settings.wordsPerMinute < 1) {
      errors.push('Words per minute must be at least 1')
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }

  /**
   * Get supported types (text input)
   * @returns {Array} Supported MIME types
   */
  getSupportedTypes() {
    return ['text/plain']
  }

  /**
   * Get content type for preview
   * @returns {string} Content type
   */
  getContentType() {
    return 'text'
  }

  /**
   * Get file accessors (not used for text input)
   * @returns {Object} Property accessors
   */
  getFileAccessors() {
    return {
      preview: null,
      name: null,
      size: null,
      metadata: null
    }
  }

  /**
   * Get tool metadata
   * @returns {Object} Tool metadata
   */
  getMetadata() {
    return {
      name: 'Word Counter',
      version: '2.0.0',
      description: 'Count words, characters, sentences, and paragraphs',
      author: 'FreeTools',
      category: 'text'
    }
  }
}

export default WordCounterTool

