/**
 * Config Validator - STRICT MODE
 * 
 * Validates tool configs against the new unified schema.
 * NO SILENT FALLBACKS - All errors are reported.
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema
 */

/**
 * Validation error class
 */
class ValidationError extends Error {
  constructor(message, field, severity = 'error') {
    super(message)
    this.name = 'ValidationError'
    this.field = field
    this.severity = severity // 'error' | 'warning'
  }
}

/**
 * Validation result
 */
class ValidationResult {
  constructor() {
    this.errors = []
    this.warnings = []
    this.isValid = true
  }

  addError(message, field) {
    this.errors.push({ message, field, severity: 'error' })
    this.isValid = false
  }

  addWarning(message, field) {
    this.warnings.push({ message, field, severity: 'warning' })
  }

  getReport() {
    return {
      isValid: this.isValid,
      errorCount: this.errors.length,
      warningCount: this.warnings.length,
      errors: this.errors,
      warnings: this.warnings
    }
  }

  throwIfInvalid() {
    if (!this.isValid) {
      const errorMessages = this.errors.map(e => `  - ${e.field}: ${e.message}`).join('\n')
      throw new Error(`Config validation failed:\n${errorMessages}`)
    }
  }
}

/**
 * Validate metadata section
 */
const validateMetadata = (metadata, result, toolId) => {
  if (!metadata) {
    result.addError('metadata section is required', 'metadata')
    return
  }

  // Required fields
  if (!metadata.version) {
    result.addError('metadata.version is required', 'metadata.version')
  }

  if (!metadata.lastUpdated) {
    result.addError('metadata.lastUpdated is required', 'metadata.lastUpdated')
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.lastUpdated)) {
    result.addError('metadata.lastUpdated must be in YYYY-MM-DD format', 'metadata.lastUpdated')
  }

  if (!metadata.author) {
    result.addError('metadata.author is required', 'metadata.author')
  }

  if (!metadata.category) {
    result.addError('metadata.category is required', 'metadata.category')
  } else {
    const validCategories = ['image', 'pdf', 'text', 'developer']
    if (!validCategories.includes(metadata.category)) {
      result.addError(
        `metadata.category must be one of: ${validCategories.join(', ')}`,
        'metadata.category'
      )
    }
  }
}

/**
 * Validate SEO section (STRICT - no weak keywords)
 */
const validateSEO = (seo, result, language) => {
  if (!seo) {
    result.addError(`seo.${language} section is required`, `seo.${language}`)
    return
  }

  // Required fields
  if (!seo.title) {
    result.addError(`seo.${language}.title is required`, `seo.${language}.title`)
  } else if (seo.title.length < 30 || seo.title.length > 60) {
    result.addWarning(
      `seo.${language}.title should be 30-60 characters (current: ${seo.title.length})`,
      `seo.${language}.title`
    )
  }

  if (!seo.description) {
    result.addError(`seo.${language}.description is required`, `seo.${language}.description`)
  } else if (seo.description.length < 120 || seo.description.length > 160) {
    result.addWarning(
      `seo.${language}.description should be 120-160 characters (current: ${seo.description.length})`,
      `seo.${language}.description`
    )
  }

  // STRICT: Keywords must be structured object
  if (!seo.keywords) {
    result.addError(`seo.${language}.keywords is required`, `seo.${language}.keywords`)
  } else if (typeof seo.keywords === 'string') {
    result.addError(
      `seo.${language}.keywords must be an object with primary, secondary, and longTail arrays (not a string)`,
      `seo.${language}.keywords`
    )
  } else if (typeof seo.keywords === 'object') {
    // Validate keyword structure
    if (!Array.isArray(seo.keywords.primary) || seo.keywords.primary.length === 0) {
      result.addError(
        `seo.${language}.keywords.primary must be a non-empty array`,
        `seo.${language}.keywords.primary`
      )
    }

    if (!Array.isArray(seo.keywords.secondary) || seo.keywords.secondary.length === 0) {
      result.addError(
        `seo.${language}.keywords.secondary must be a non-empty array`,
        `seo.${language}.keywords.secondary`
      )
    }

    if (!Array.isArray(seo.keywords.longTail) || seo.keywords.longTail.length === 0) {
      result.addError(
        `seo.${language}.keywords.longTail must be a non-empty array`,
        `seo.${language}.keywords.longTail`
      )
    }
  }

  if (!seo.canonical) {
    result.addError(`seo.${language}.canonical is required`, `seo.${language}.canonical`)
  }
}

/**
 * Validate bilingual content (STRICT - both languages required)
 */
const validateBilingualContent = (content, result, section) => {
  if (!content) {
    result.addError(`${section} is required`, section)
    return
  }

  // STRICT: Both EN and HI required
  if (!content.en) {
    result.addError(`${section}.en is required`, `${section}.en`)
  }

  if (!content.hi) {
    result.addError(`${section}.hi is required`, `${section}.hi`)
  }
}

/**
 * Validate hero section
 */
const validateHero = (hero, result, language) => {
  if (!hero) {
    result.addError(`content.${language}.hero is required`, `content.${language}.hero`)
    return
  }

  if (!hero.title) {
    result.addError(`content.${language}.hero.title is required`, `content.${language}.hero.title`)
  }

  if (!hero.subtitle) {
    result.addError(`content.${language}.hero.subtitle is required`, `content.${language}.hero.subtitle`)
  }

  // Benefits must be array of objects with icon and text
  if (!Array.isArray(hero.benefits)) {
    result.addError(
      `content.${language}.hero.benefits must be an array`,
      `content.${language}.hero.benefits`
    )
  } else if (hero.benefits.length === 0) {
    result.addWarning(
      `content.${language}.hero.benefits is empty`,
      `content.${language}.hero.benefits`
    )
  } else {
    // Validate each benefit
    hero.benefits.forEach((benefit, index) => {
      if (typeof benefit === 'string') {
        result.addError(
          `content.${language}.hero.benefits[${index}] must be an object with icon and text (not a string)`,
          `content.${language}.hero.benefits[${index}]`
        )
      } else if (!benefit.icon || !benefit.text) {
        result.addError(
          `content.${language}.hero.benefits[${index}] must have both icon and text properties`,
          `content.${language}.hero.benefits[${index}]`
        )
      }
    })
  }

  if (!hero.privacyNotice) {
    result.addWarning(
      `content.${language}.hero.privacyNotice is recommended`,
      `content.${language}.hero.privacyNotice`
    )
  }
}

/**
 * Validate tool config against new schema
 * @param {Object} config - Tool configuration
 * @param {Object} options - Validation options
 * @returns {ValidationResult}
 */
export const validateConfig = (config, options = {}) => {
  const result = new ValidationResult()
  const { strict = true, throwOnError = false } = options

  // Basic structure
  if (!config) {
    result.addError('Config is null or undefined', 'config')
    return result
  }

  if (!config.id) {
    result.addError('config.id is required', 'id')
  }

  // Validate metadata
  validateMetadata(config.metadata, result, config.id)

  // Validate SEO (bilingual)
  validateBilingualContent(config.seo, result, 'seo')
  if (config.seo?.en) validateSEO(config.seo.en, result, 'en')
  if (config.seo?.hi) validateSEO(config.seo.hi, result, 'hi')

  // Validate content (bilingual)
  validateBilingualContent(config.content, result, 'content')

  // Validate hero (bilingual)
  if (config.content?.en) validateHero(config.content.en.hero, result, 'en')
  if (config.content?.hi) validateHero(config.content.hi.hero, result, 'hi')

  // Validate features
  if (config.content?.en?.features) {
    if (!Array.isArray(config.content.en.features.items)) {
      result.addError('content.en.features.items must be an array', 'content.en.features.items')
    }
  }

  // Validate howTo
  if (config.content?.en?.howTo) {
    if (!Array.isArray(config.content.en.howTo.steps)) {
      result.addError('content.en.howTo.steps must be an array', 'content.en.howTo.steps')
    }
  }

  // Validate FAQ
  if (config.content?.en?.faq) {
    if (!Array.isArray(config.content.en.faq.items)) {
      result.addError('content.en.faq.items must be an array', 'content.en.faq.items')
    }
  }

  // Validate uiText (bilingual)
  validateBilingualContent(config.uiText, result, 'uiText')

  // Validate defaultSettings
  if (!config.defaultSettings) {
    result.addWarning('defaultSettings is recommended', 'defaultSettings')
  }

  if (throwOnError) {
    result.throwIfInvalid()
  }

  return result
}

/**
 * Validate multiple configs
 */
export const validateConfigs = (configs, options = {}) => {
  const results = {}
  const summary = {
    total: configs.length,
    valid: 0,
    invalid: 0,
    warnings: 0
  }

  configs.forEach(config => {
    const result = validateConfig(config, { ...options, throwOnError: false })
    results[config.id] = result.getReport()

    if (result.isValid) {
      summary.valid++
    } else {
      summary.invalid++
    }

    summary.warnings += result.warnings.length
  })

  return { results, summary }
}

/**
 * Quick validation check (returns boolean)
 */
export const isValidConfig = (config) => {
  try {
    const result = validateConfig(config, { throwOnError: false })
    return result.isValid
  } catch (error) {
    return false
  }
}

/**
 * Get validation report as formatted string
 */
export const getValidationReport = (config) => {
  const result = validateConfig(config, { throwOnError: false })
  const report = result.getReport()

  let output = `\n=== Config Validation Report: ${config.id} ===\n\n`

  if (report.isValid) {
    output += '✅ VALID\n'
  } else {
    output += '❌ INVALID\n'
  }

  output += `\nErrors: ${report.errorCount}\n`
  output += `Warnings: ${report.warningCount}\n`

  if (report.errors.length > 0) {
    output += '\n🔴 ERRORS:\n'
    report.errors.forEach(error => {
      output += `  - ${error.field}: ${error.message}\n`
    })
  }

  if (report.warnings.length > 0) {
    output += '\n⚠️  WARNINGS:\n'
    report.warnings.forEach(warning => {
      output += `  - ${warning.field}: ${warning.message}\n`
    })
  }

  return output
}

export default {
  validateConfig,
  validateConfigs,
  isValidConfig,
  getValidationReport,
  ValidationError,
  ValidationResult
}

