/**
 * Config Adapter Layer (TEMPORARY)
 * 
 * PURPOSE: Provides backward compatibility during migration from old to new schema
 * 
 * ⚠️ TEMPORARY CODE - TO BE REMOVED AFTER FULL MIGRATION
 * 
 * This adapter allows both old and new config schemas to work simultaneously.
 * Once all tools are migrated to the new schema, this file should be deleted.
 * 
 * REMOVAL CHECKLIST:
 * 1. Verify all tools use new schema (check toolRegistry.js)
 * 2. Run validator on all configs
 * 3. Test all tool pages
 * 4. Delete this file
 * 5. Remove adapter imports from ToolPage.jsx
 * 6. Update documentation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for new schema structure
 */

/**
 * Detect if config uses new schema
 * New schema has: metadata.schemaVersion, seo.keywords (object), defaultSettings
 * Old schema has: metadata.en/hi (nested by language), processingOptions
 */
const isNewSchema = (config) => {
  // NEW SCHEMA markers (must have at least one):
  // 1. metadata.schemaVersion exists (definitive marker)
  // 2. Has defaultSettings AND structured SEO keywords
  // 3. Has structured benefits with icons
  
  const hasSchemaVersion = config.metadata?.schemaVersion === '2.0.0'
  const hasDefaultSettings = config.defaultSettings && typeof config.defaultSettings === 'object'
  const hasStructuredKeywords = config.seo?.en?.keywords && typeof config.seo.en.keywords === 'object'
  const hasStructuredBenefits = Array.isArray(config.content?.en?.hero?.benefits) &&
                                 config.content.en.hero.benefits[0]?.icon
  
  // OLD SCHEMA markers (if any of these exist, it's old schema):
  // 1. metadata.en exists (old schema nests metadata by language)
  // 2. processingOptions exists (old schema uses this instead of defaultSettings)
  
  const hasNestedMetadata = config.metadata?.en || config.metadata?.hi
  const hasProcessingOptions = config.processingOptions && typeof config.processingOptions === 'object'
  
  // If has old schema markers, it's definitely old
  if (hasNestedMetadata || hasProcessingOptions) {
    return false
  }
  
  // If has new schema markers, it's new
  return hasSchemaVersion || (hasDefaultSettings && hasStructuredKeywords) || hasStructuredBenefits
}

/**
 * Adapt old schema to new schema format
 * This ensures ToolPage can consume both formats
 */
export const adaptConfig = (config) => {
  // If already new schema, return as-is
  if (isNewSchema(config)) {
    return config
  }

  // ⚠️ TEMPORARY: Adapt old schema to new format
  console.warn(`[ADAPTER] Converting old schema for tool: ${config.id || 'unknown'}`)
  console.warn('[ADAPTER] This tool needs migration to new schema')

  const defaultSettings = {
    mode: config.processingOptions?.defaultMode || 'dimensions',
    width: config.processingOptions?.defaultDimensions?.width || 800,
    height: config.processingOptions?.defaultDimensions?.height || 600,
    maintainAspectRatio: config.processingOptions?.maintainAspectRatio !== false,
    quality: config.settings?.defaultQuality || 85,
    targetSize: 100
  }
  

  const adapted = {
    // Preserve original structure
    ...config,
    
    // Add metadata if missing (with defaults)
    // Also move id into metadata if it's at root level
    metadata: {
      ...(config.metadata || {
        version: '1.0.0',
        lastUpdated: new Date().toISOString().split('T')[0],
        author: 'Unknown',
        category: config.category || 'general'
      }),
      // Move id from root to metadata if not already there
      id: config.metadata?.id || config.id
    },
    
    // Always use generated defaultSettings (don't check config.defaultSettings)
    defaultSettings
  }

  // Adapt SEO structure if needed
  if (config.seo) {
    Object.keys(config.seo).forEach(lang => {
      if (config.seo[lang]) {
        // If keywords is a string, keep it (old format)
        // New format will have structured keywords object
        adapted.seo = adapted.seo || {}
        adapted.seo[lang] = {
          ...config.seo[lang],
          // Preserve old keywords format for now
          keywords: config.seo[lang].keywords
        }
      }
    })
  }

  // Adapt content structure if needed
  if (config.content) {
    Object.keys(config.content).forEach(lang => {
      if (config.content[lang]?.hero?.benefits) {
        adapted.content = adapted.content || {}
        adapted.content[lang] = adapted.content[lang] || {}
        adapted.content[lang].hero = adapted.content[lang].hero || {}
        
        // If benefits is array of strings, keep it (old format)
        // New format will have array of objects with icon/text
        adapted.content[lang].hero.benefits = config.content[lang].hero.benefits
      }
    })
  }

  return adapted
}

/**
 * Get schema version from config
 */
export const getSchemaVersion = (config) => {
  if (config.metadata?.version) {
    return config.metadata.version
  }
  return isNewSchema(config) ? '2.0.0' : '1.0.0'
}

/**
 * Check if config needs migration
 */
export const needsMigration = (config) => {
  return !isNewSchema(config)
}

/**
 * Get migration priority (higher = more urgent)
 */
export const getMigrationPriority = (config) => {
  if (isNewSchema(config)) return 0
  
  // High priority if missing critical SEO fields
  if (!config.seo?.en?.keywords || typeof config.seo.en.keywords !== 'object') {
    return 3
  }
  
  // Medium priority if missing metadata
  if (!config.metadata) {
    return 2
  }
  
  // Low priority otherwise
  return 1
}

// ⚠️ TEMPORARY EXPORTS - Remove after migration
export default {
  adaptConfig,
  isNewSchema,
  getSchemaVersion,
  needsMigration,
  getMigrationPriority
}

