/**
 * Text Utilities Module
 * 
 * A collection of pure, reusable text processing functions for text-based tools.
 * All functions are deterministic, handle edge cases, and have no side effects.
 * 
 * @module textUtils
 */

/**
 * Safely converts input to string, handling null/undefined
 * @private
 * @param {*} input - Any input value
 * @returns {string} - Safe string representation
 */
const safeString = (input) => {
  if (input === null || input === undefined) return '';
  return String(input);
};

/**
 * Counts the number of words in text
 * Words are defined as sequences of non-whitespace characters
 * 
 * @param {string} text - Input text
 * @returns {number} - Word count
 * 
 * @example
 * getWordCount("Hello world") // 2
 * getWordCount("") // 0
 * getWordCount("  multiple   spaces  ") // 2
 */
export const getWordCount = (text) => {
  const safeText = safeString(text).trim();
  if (!safeText) return 0;
  
  // Split by whitespace and filter out empty strings
  return safeText.split(/\s+/).filter(word => word.length > 0).length;
};

/**
 * Counts total characters including spaces
 * 
 * @param {string} text - Input text
 * @returns {number} - Character count with spaces
 * 
 * @example
 * getCharCount("Hello world") // 11
 * getCharCount("") // 0
 */
export const getCharCount = (text) => {
  return safeString(text).length;
};

/**
 * Counts characters excluding spaces
 * 
 * @param {string} text - Input text
 * @returns {number} - Character count without spaces
 * 
 * @example
 * getCharCountNoSpaces("Hello world") // 10
 * getCharCountNoSpaces("   ") // 0
 */
export const getCharCountNoSpaces = (text) => {
  return safeString(text).replace(/\s/g, '').length;
};

/**
 * Counts the number of sentences in text
 * Sentences are defined by terminal punctuation: . ! ?
 * 
 * @param {string} text - Input text
 * @returns {number} - Sentence count
 * 
 * @example
 * getSentenceCount("Hello. How are you?") // 2
 * getSentenceCount("No punctuation") // 1
 * getSentenceCount("") // 0
 */
export const getSentenceCount = (text) => {
  const safeText = safeString(text).trim();
  if (!safeText) return 0;
  
  // Split by sentence-ending punctuation
  const sentences = safeText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // If no punctuation found but text exists, count as 1 sentence
  return sentences.length > 0 ? sentences.length : (safeText.length > 0 ? 1 : 0);
};

/**
 * Counts the number of paragraphs in text
 * Paragraphs are separated by one or more blank lines
 * 
 * @param {string} text - Input text
 * @returns {number} - Paragraph count
 * 
 * @example
 * getParagraphCount("Para 1\n\nPara 2") // 2
 * getParagraphCount("Single paragraph") // 1
 * getParagraphCount("") // 0
 */
export const getParagraphCount = (text) => {
  const safeText = safeString(text).trim();
  if (!safeText) return 0;
  
  // Split by double newlines (blank lines)
  const paragraphs = safeText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  return paragraphs.length;
};

/**
 * Calculates estimated reading time in seconds
 * Based on average reading speed (default: 200 words per minute)
 * 
 * @param {string} text - Input text
 * @param {number} wordsPerMinute - Reading speed (default: 200)
 * @returns {number} - Reading time in seconds
 * 
 * @example
 * getReadingTime("Hello world", 200) // 0.6 seconds
 * getReadingTime("", 200) // 0
 */
export const getReadingTime = (text, wordsPerMinute = 200) => {
  const wordCount = getWordCount(text);
  if (wordCount === 0) return 0;
  
  // Convert to seconds: (words / wordsPerMinute) * 60
  return (wordCount / wordsPerMinute) * 60;
};

/**
 * Formats reading time into human-readable string
 * 
 * @param {number} seconds - Reading time in seconds
 * @returns {string} - Formatted time string
 * 
 * @example
 * formatReadingTime(65) // "1 min 5 sec"
 * formatReadingTime(30) // "30 sec"
 * formatReadingTime(0) // "0 sec"
 */
export const formatReadingTime = (seconds) => {
  const safeSeconds = Math.max(0, Math.round(seconds));
  
  if (safeSeconds < 60) {
    return `${safeSeconds} sec`;
  }
  
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;
  
  if (remainingSeconds === 0) {
    return `${minutes} min`;
  }
  
  return `${minutes} min ${remainingSeconds} sec`;
};

/**
 * Normalizes whitespace in text
 * Replaces multiple spaces with single space and trims
 *
 * @param {string} text - Input text
 * @returns {string} - Normalized text
 *
 * @example
 * normalizeSpaces("Hello    world") // "Hello world"
 * normalizeSpaces("   trim   ") // "trim"
 */
export const normalizeSpaces = (text) => {
  return safeString(text).replace(/\s+/g, ' ').trim();
};

/**
 * Normalizes spaces while preserving line breaks
 * Replaces multiple spaces with single space within each line
 * Trims leading/trailing spaces from each line
 * Preserves line breaks and paragraph structure
 *
 * @param {string} text - Input text
 * @returns {string} - Normalized text with preserved line breaks
 *
 * @example
 * normalizeSpacesPreserveLines("Hello    world\n\nNew   paragraph")
 * // "Hello world\n\nNew paragraph"
 */
export const normalizeSpacesPreserveLines = (text) => {
  const safeText = safeString(text);
  if (!safeText) return '';
  
  // Split by lines, normalize spaces in each line, then rejoin
  return safeText
    .split('\n')
    .map(line => line.replace(/ +/g, ' ').trim())
    .join('\n');
};

/**
 * Removes all extra spaces from text
 * Keeps single spaces between words
 * 
 * @param {string} text - Input text
 * @returns {string} - Text with normalized spaces
 * 
 * @example
 * removeExtraSpaces("Hello    world") // "Hello world"
 * removeExtraSpaces("  leading and trailing  ") // "leading and trailing"
 */
export const removeExtraSpaces = (text) => {
  return normalizeSpaces(text);
};

/**
 * Converts text to uppercase
 * 
 * @param {string} text - Input text
 * @returns {string} - Uppercase text
 * 
 * @example
 * toUpperCase("hello") // "HELLO"
 * toUpperCase("") // ""
 */
export const toUpperCase = (text) => {
  return safeString(text).toUpperCase();
};

/**
 * Converts text to lowercase
 * 
 * @param {string} text - Input text
 * @returns {string} - Lowercase text
 * 
 * @example
 * toLowerCase("HELLO") // "hello"
 * toLowerCase("") // ""
 */
export const toLowerCase = (text) => {
  return safeString(text).toLowerCase();
};

/**
 * Converts text to title case
 * Capitalizes first letter of each word
 * 
 * @param {string} text - Input text
 * @returns {string} - Title case text
 * 
 * @example
 * toTitleCase("hello world") // "Hello World"
 * toTitleCase("the quick brown fox") // "The Quick Brown Fox"
 */
export const toTitleCase = (text) => {
  const safeText = safeString(text);
  if (!safeText) return '';
  
  return safeText
    .toLowerCase()
    .split(/\s+/)
    .map(word => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

/**
 * Converts text to sentence case
 * Capitalizes first letter of each sentence
 * 
 * @param {string} text - Input text
 * @returns {string} - Sentence case text
 * 
 * @example
 * toSentenceCase("hello. how are you?") // "Hello. How are you?"
 */
export const toSentenceCase = (text) => {
  const safeText = safeString(text);
  if (!safeText) return '';
  
  return safeText
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, match => match.toUpperCase());
};

/**
 * Capitalizes the first letter of text
 * 
 * @param {string} text - Input text
 * @returns {string} - Capitalized text
 * 
 * @example
 * capitalize("hello world") // "Hello world"
 * capitalize("") // ""
 */
export const capitalize = (text) => {
  const safeText = safeString(text);
  if (!safeText) return '';
  
  return safeText.charAt(0).toUpperCase() + safeText.slice(1);
};

/**
 * Reverses the text
 * 
 * @param {string} text - Input text
 * @returns {string} - Reversed text
 * 
 * @example
 * reverseText("hello") // "olleh"
 * reverseText("") // ""
 */
export const reverseText = (text) => {
  return safeString(text).split('').reverse().join('');
};

/**
 * Removes all whitespace from text
 * 
 * @param {string} text - Input text
 * @returns {string} - Text without whitespace
 * 
 * @example
 * removeAllSpaces("hello world") // "helloworld"
 * removeAllSpaces("  trim  ") // "trim"
 */
export const removeAllSpaces = (text) => {
  return safeString(text).replace(/\s/g, '');
};

/**
 * Truncates text to specified length with ellipsis
 * 
 * @param {string} text - Input text
 * @param {number} maxLength - Maximum length (default: 100)
 * @param {string} suffix - Suffix to add (default: "...")
 * @returns {string} - Truncated text
 * 
 * @example
 * truncate("Hello world", 5) // "Hello..."
 * truncate("Short", 10) // "Short"
 */
export const truncate = (text, maxLength = 100, suffix = '...') => {
  const safeText = safeString(text);
  if (safeText.length <= maxLength) return safeText;
  
  return safeText.slice(0, maxLength - suffix.length) + suffix;
};

/**
 * Counts occurrences of a substring in text
 * Case-sensitive by default
 * 
 * @param {string} text - Input text
 * @param {string} substring - Substring to count
 * @param {boolean} caseSensitive - Case sensitivity (default: true)
 * @returns {number} - Occurrence count
 * 
 * @example
 * countOccurrences("hello hello", "hello") // 2
 * countOccurrences("Hello hello", "hello", false) // 2
 */
export const countOccurrences = (text, substring, caseSensitive = true) => {
  const safeText = safeString(text);
  const safeSubstring = safeString(substring);
  
  if (!safeText || !safeSubstring) return 0;
  
  const searchText = caseSensitive ? safeText : safeText.toLowerCase();
  const searchSubstring = caseSensitive ? safeSubstring : safeSubstring.toLowerCase();
  
  let count = 0;
  let position = 0;
  
  while ((position = searchText.indexOf(searchSubstring, position)) !== -1) {
    count++;
    position += searchSubstring.length;
  }
  
  return count;
};

/**
 * Extracts all unique words from text
 * 
 * @param {string} text - Input text
 * @param {boolean} caseSensitive - Case sensitivity (default: false)
 * @returns {string[]} - Array of unique words
 * 
 * @example
 * getUniqueWords("hello world hello") // ["hello", "world"]
 */
export const getUniqueWords = (text, caseSensitive = false) => {
  const safeText = safeString(text).trim();
  if (!safeText) return [];
  
  const words = safeText.split(/\s+/);
  const processedWords = caseSensitive ? words : words.map(w => w.toLowerCase());
  
  return [...new Set(processedWords)];
};

/**
 * Calculates text statistics in a single pass
 * More efficient than calling individual functions
 * 
 * @param {string} text - Input text
 * @param {number} wordsPerMinute - Reading speed (default: 200)
 * @returns {Object} - Statistics object
 * 
 * @example
 * getTextStats("Hello world") 
 * // { words: 2, chars: 11, charsNoSpaces: 10, sentences: 1, paragraphs: 1, readingTime: 0.6 }
 */
export const getTextStats = (text, wordsPerMinute = 200) => {
  const safeText = safeString(text);
  
  return {
    words: getWordCount(safeText),
    chars: getCharCount(safeText),
    charsNoSpaces: getCharCountNoSpaces(safeText),
    sentences: getSentenceCount(safeText),
    paragraphs: getParagraphCount(safeText),
    readingTime: getReadingTime(safeText, wordsPerMinute)
  };
};

/**
 * Checks if text is empty or only whitespace
 * 
 * @param {string} text - Input text
 * @returns {boolean} - True if empty
 * 
 * @example
 * isEmpty("") // true
 * isEmpty("   ") // true
 * isEmpty("hello") // false
 */
export const isEmpty = (text) => {
  return safeString(text).trim().length === 0;
};

/**
 * Checks if text contains only alphabetic characters
 * 
 * @param {string} text - Input text
 * @returns {boolean} - True if alphabetic only
 * 
 * @example
 * isAlphabetic("hello") // true
 * isAlphabetic("hello123") // false
 */
export const isAlphabetic = (text) => {
  const safeText = safeString(text);
  return /^[a-zA-Z]+$/.test(safeText);
};

/**
 * Checks if text contains only numeric characters
 * 
 * @param {string} text - Input text
 * @returns {boolean} - True if numeric only
 * 
 * @example
 * isNumeric("123") // true
 * isNumeric("123abc") // false
 */
export const isNumeric = (text) => {
  const safeText = safeString(text);
  return /^[0-9]+$/.test(safeText);
};

/**
 * Checks if text contains only alphanumeric characters
 * 
 * @param {string} text - Input text
 * @returns {boolean} - True if alphanumeric only
 * 
 * @example
 * isAlphanumeric("hello123") // true
 * isAlphanumeric("hello-123") // false
 */
export const isAlphanumeric = (text) => {
  const safeText = safeString(text);
  return /^[a-zA-Z0-9]+$/.test(safeText);
};

// ============================================================================
// WRAPPER FUNCTIONS - Standardized API for all text tools
// ============================================================================

/**
 * Counts words in text (wrapper for getWordCount)
 *
 * @param {string} text - Input text
 * @returns {number} - Word count
 *
 * @example
 * countWords("Hello world") // 2
 */
export const countWords = (text) => {
  return getWordCount(text);
};

/**
 * Counts characters with optional space inclusion
 *
 * @param {string} text - Input text
 * @param {boolean} includeSpaces - Include spaces in count (default: true)
 * @returns {number} - Character count
 *
 * @example
 * countCharacters("Hello world", true) // 11
 * countCharacters("Hello world", false) // 10
 */
export const countCharacters = (text, includeSpaces = true) => {
  return includeSpaces ? getCharCount(text) : getCharCountNoSpaces(text);
};

/**
 * Calculates reading time in minutes (rounded up)
 *
 * @param {string} text - Input text
 * @param {number} wordsPerMinute - Reading speed (default: 200)
 * @returns {number} - Reading time in minutes (rounded up)
 *
 * @example
 * calculateReadingTime("Hello world") // 1 (minimum 1 minute)
 */
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  const seconds = getReadingTime(text, wordsPerMinute);
  if (seconds === 0) return 0;
  return Math.ceil(seconds / 60); // Round up to nearest minute
};

/**
 * Converts text case based on type
 *
 * @param {string} text - Input text
 * @param {string} type - Case type: "upper", "lower", "title"
 * @returns {string} - Converted text
 *
 * @example
 * convertCase("hello world", "upper") // "HELLO WORLD"
 * convertCase("HELLO WORLD", "lower") // "hello world"
 * convertCase("hello world", "title") // "Hello World"
 */
export const convertCase = (text, type) => {
  const safeText = safeString(text);
  
  switch (type) {
    case 'upper':
      return toUpperCase(safeText);
    case 'lower':
      return toLowerCase(safeText);
    case 'title':
      return toTitleCase(safeText);
    default:
      return safeText;
  }
};

