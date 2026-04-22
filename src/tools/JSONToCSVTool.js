/**
 * JSONToCSVTool - Convert JSON to CSV format
 * Handles array of objects, nested objects, and various edge cases
 */

class JSONToCSVTool {
  constructor() {
    this.delimiter = ','
    this.includeHeaders = true
  }

  /**
   * Set custom delimiter
   * @param {string} delimiter - CSV delimiter (default: comma)
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter || ','
  }

  /**
   * Set whether to include headers
   * @param {boolean} include - Include headers in output
   */
  setIncludeHeaders(include) {
    this.includeHeaders = include !== false
  }

  /**
   * Flatten nested object using dot notation
   * @param {Object} obj - Object to flatten
   * @param {string} prefix - Prefix for nested keys
   * @returns {Object} Flattened object
   */
  flattenObject(obj, prefix = '') {
    const flattened = {}

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key]
        const newKey = prefix ? `${prefix}.${key}` : key

        if (value === null || value === undefined) {
          flattened[newKey] = ''
        } else if (Array.isArray(value)) {
          // Stringify arrays
          flattened[newKey] = JSON.stringify(value)
        } else if (typeof value === 'object' && value !== null) {
          // Recursively flatten nested objects
          Object.assign(flattened, this.flattenObject(value, newKey))
        } else {
          flattened[newKey] = value
        }
      }
    }

    return flattened
  }

  /**
   * Escape CSV value
   * @param {*} value - Value to escape
   * @returns {string} Escaped value
   */
  escapeCSVValue(value) {
    if (value === null || value === undefined) {
      return ''
    }

    const stringValue = String(value)

    // If value contains delimiter, quotes, or newlines, wrap in quotes
    if (
      stringValue.includes(this.delimiter) ||
      stringValue.includes('"') ||
      stringValue.includes('\n') ||
      stringValue.includes('\r')
    ) {
      // Escape quotes by doubling them
      return `"${stringValue.replace(/"/g, '""')}"`
    }

    return stringValue
  }

  /**
   * Convert JSON to CSV
   * @param {string} jsonString - JSON string to convert
   * @param {Object} options - Conversion options
   * @returns {Object} Result with CSV string and metadata
   */
  convertToCSV(jsonString, options = {}) {
    try {
      // Parse JSON
      const data = JSON.parse(jsonString)

      // Handle empty input
      if (!data) {
        throw new Error('Empty JSON input')
      }

      // Apply options
      if (options.delimiter) {
        this.setDelimiter(options.delimiter)
      }
      if (options.includeHeaders !== undefined) {
        this.setIncludeHeaders(options.includeHeaders)
      }

      // Handle different JSON structures
      let arrayData

      if (Array.isArray(data)) {
        if (data.length === 0) {
          throw new Error('Empty array - no data to convert')
        }
        arrayData = data
      } else if (typeof data === 'object') {
        // Single object - convert to array
        arrayData = [data]
      } else {
        throw new Error('Invalid JSON structure - expected array or object')
      }

      // Flatten all objects
      const flattenedData = arrayData.map(item => {
        if (typeof item === 'object' && item !== null) {
          return this.flattenObject(item)
        }
        return { value: item }
      })

      // Extract all unique headers
      const headersSet = new Set()
      flattenedData.forEach(row => {
        Object.keys(row).forEach(key => headersSet.add(key))
      })
      const headers = Array.from(headersSet)

      if (headers.length === 0) {
        throw new Error('No valid data fields found')
      }

      // Build CSV
      const csvLines = []

      // Add headers
      if (this.includeHeaders) {
        const headerLine = headers
          .map(header => this.escapeCSVValue(header))
          .join(this.delimiter)
        csvLines.push(headerLine)
      }

      // Add data rows
      flattenedData.forEach(row => {
        const rowValues = headers.map(header => {
          const value = row[header]
          return this.escapeCSVValue(value)
        })
        csvLines.push(rowValues.join(this.delimiter))
      })

      const csv = csvLines.join('\n')

      return {
        success: true,
        csv,
        rowCount: flattenedData.length,
        columnCount: headers.length,
        headers
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        csv: ''
      }
    }
  }

  /**
   * Validate JSON string
   * @param {string} jsonString - JSON string to validate
   * @returns {Object} Validation result
   */
  validateJSON(jsonString) {
    try {
      if (!jsonString || jsonString.trim() === '') {
        return {
          valid: false,
          error: 'Empty input'
        }
      }

      const data = JSON.parse(jsonString)

      if (Array.isArray(data)) {
        if (data.length === 0) {
          return {
            valid: false,
            error: 'Empty array'
          }
        }
        return {
          valid: true,
          type: 'array',
          itemCount: data.length
        }
      } else if (typeof data === 'object' && data !== null) {
        return {
          valid: true,
          type: 'object',
          itemCount: 1
        }
      } else {
        return {
          valid: false,
          error: 'Invalid JSON structure - expected array or object'
        }
      }
    } catch (error) {
      return {
        valid: false,
        error: `Invalid JSON: ${error.message}`
      }
    }
  }
}

export default JSONToCSVTool
