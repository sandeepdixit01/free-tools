# Text Utils API Reference

Complete reference for all text processing functions in `src/utils/textUtils.js`

## Overview

A centralized utility module providing pure, reusable text processing functions for all text-based tools. All functions are:
- ✅ Pure (no side effects)
- ✅ Defensive (handle null/undefined safely)
- ✅ Framework-agnostic (plain JavaScript)
- ✅ Optimized for performance

---

## Standardized API (Wrapper Functions)

These are the recommended functions to use in all tools:

### 1. `countWords(text)`
Counts total words in text.

**Parameters:**
- `text` (string): Input text

**Returns:** `number` - Word count

**Example:**
```javascript
countWords("Hello world") // 2
countWords("") // 0
```

---

### 2. `countCharacters(text, includeSpaces = true)`
Counts characters with optional space inclusion.

**Parameters:**
- `text` (string): Input text
- `includeSpaces` (boolean): Include spaces in count (default: true)

**Returns:** `number` - Character count

**Example:**
```javascript
countCharacters("Hello world", true)  // 11
countCharacters("Hello world", false) // 10
```

---

### 3. `calculateReadingTime(text, wordsPerMinute = 200)`
Calculates reading time in minutes (rounded up).

**Parameters:**
- `text` (string): Input text
- `wordsPerMinute` (number): Reading speed (default: 200)

**Returns:** `number` - Reading time in minutes

**Example:**
```javascript
calculateReadingTime("Hello world") // 1 (minimum 1 minute)
```

---

### 4. `removeExtraSpaces(text)`
Removes multiple spaces and normalizes whitespace.

**Parameters:**
- `text` (string): Input text

**Returns:** `string` - Normalized text

**Example:**
```javascript
removeExtraSpaces("Hello    world") // "Hello world"
removeExtraSpaces("  trim  ") // "trim"
```

**Note:** Use `normalizeSpacesPreserveLines()` to preserve line breaks.

---

### 5. `convertCase(text, type)`
Converts text case based on type.

**Parameters:**
- `text` (string): Input text
- `type` (string): Case type - "upper", "lower", "title"

**Returns:** `string` - Converted text

**Example:**
```javascript
convertCase("hello world", "upper") // "HELLO WORLD"
convertCase("HELLO WORLD", "lower") // "hello world"
convertCase("hello world", "title") // "Hello World"
```

---

## Core Functions

### Word Counting
- `getWordCount(text)` - Count words

### Character Counting
- `getCharCount(text)` - Count all characters (with spaces)
- `getCharCountNoSpaces(text)` - Count characters without spaces

### Sentence & Paragraph Counting
- `getSentenceCount(text)` - Count sentences
- `getParagraphCount(text)` - Count paragraphs

### Reading Time
- `getReadingTime(text, wordsPerMinute)` - Get reading time in seconds
- `formatReadingTime(seconds)` - Format seconds to "X min Y sec"

### Text Normalization
- `normalizeSpaces(text)` - Remove extra spaces (loses line breaks)
- `normalizeSpacesPreserveLines(text)` - Remove extra spaces (preserves line breaks)
- `removeAllSpaces(text)` - Remove ALL spaces

### Case Conversion
- `toUpperCase(text)` - Convert to UPPERCASE
- `toLowerCase(text)` - Convert to lowercase
- `toTitleCase(text)` - Convert To Title Case
- `toSentenceCase(text)` - Convert to sentence case
- `capitalize(text)` - Capitalize first letter only

### Text Manipulation
- `reverseText(text)` - Reverse text
- `truncate(text, maxLength, suffix)` - Truncate with ellipsis

### Text Analysis
- `countOccurrences(text, substring, caseSensitive)` - Count substring occurrences
- `getUniqueWords(text, caseSensitive)` - Get unique words
- `getTextStats(text, wordsPerMinute)` - Get all stats in one call

### Validation
- `isEmpty(text)` - Check if empty or whitespace only
- `isAlphabetic(text)` - Check if alphabetic only
- `isNumeric(text)` - Check if numeric only
- `isAlphanumeric(text)` - Check if alphanumeric only

---

## Usage Examples

### Word Counter Tool
```javascript
import { countWords, countCharacters, calculateReadingTime } from '../utils/textUtils';

const stats = {
  words: countWords(text),
  charsWithSpaces: countCharacters(text, true),
  charsWithoutSpaces: countCharacters(text, false),
  readingTime: calculateReadingTime(text)
};
```

### Character Counter Tool
```javascript
import { countCharacters } from '../utils/textUtils';

const result = {
  withSpaces: countCharacters(text, true),
  withoutSpaces: countCharacters(text, false),
  spacesCount: countCharacters(text, true) - countCharacters(text, false)
};
```

### Text Case Converter Tool
```javascript
import { convertCase } from '../utils/textUtils';

const converted = convertCase(text, 'upper'); // or 'lower', 'title'
```

### Remove Extra Spaces Tool
```javascript
import { normalizeSpacesPreserveLines } from '../utils/textUtils';

const cleaned = normalizeSpacesPreserveLines(text);
```

---

## Best Practices

1. **Use wrapper functions** (`countWords`, `countCharacters`, etc.) for consistency
2. **Preserve line breaks** when cleaning text - use `normalizeSpacesPreserveLines()`
3. **Handle empty input** - all functions safely handle null/undefined
4. **Batch operations** - use `getTextStats()` for multiple metrics
5. **No UI logic** - keep utils pure, handle UI in components

---

## Performance Notes

- All functions are optimized for large text (tested up to 1M characters)
- `getTextStats()` is more efficient than calling individual functions
- Functions use minimal regex for better performance
- No external dependencies

---

## Migration Guide

If you have existing code using old function names:

| Old Name | New Name |
|----------|----------|
| `countCharacters(text)` | `getCharCount(text)` |
| `countCharactersNoSpaces(text)` | `getCharCountNoSpaces(text)` |

**Note:** Wrapper functions are now available for standardized API.

---

