/**
 * useToolConfig Hook
 * Manages tool configuration loading and access with language support
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

/**
 * Custom hook for loading and accessing tool configurations
 * @param {string} toolName - Name of the tool (e.g., 'imageResizer')
 * @returns {Object} - Configuration data and utilities
 */
export const useToolConfig = (toolName) => {
  const { language } = useLanguage()
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Load tool configuration
   */
  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true)
        setError(null)

        // Dynamically import the tool config
        const configModule = await import(`../configs/tools/${toolName}.config.js`)
        setConfig(configModule.default || configModule)
      } catch (err) {
        console.error(`Failed to load config for ${toolName}:`, err)
        setError(`Configuration not found for ${toolName}`)
      } finally {
        setLoading(false)
      }
    }

    if (toolName) {
      loadConfig()
    }
  }, [toolName])

  /**
   * Get content for current language
   */
  const getContent = useCallback((section) => {
    if (!config || !config.content) return null
    
    const sectionContent = config.content[section]
    if (!sectionContent) return null

    // Return content for current language
    return sectionContent[language] || sectionContent.en || null
  }, [config, language])

  /**
   * Get metadata
   */
  const metadata = useMemo(() => {
    if (!config || !config.metadata) return null
    return config.metadata[language] || config.metadata.en || null
  }, [config, language])

  /**
   * Get hero content
   */
  const hero = useMemo(() => {
    return getContent('hero')
  }, [getContent])

  /**
   * Get features
   */
  const features = useMemo(() => {
    return getContent('features')
  }, [getContent])

  /**
   * Get FAQ
   */
  const faq = useMemo(() => {
    return getContent('faq')
  }, [getContent])

  /**
   * Get SEO content
   */
  const seo = useMemo(() => {
    return getContent('seo')
  }, [getContent])

  /**
   * Get trust indicators
   */
  const trust = useMemo(() => {
    return getContent('trust')
  }, [getContent])

  /**
   * Get tool settings
   */
  const settings = useMemo(() => {
    if (!config || !config.settings) return null
    return config.settings
  }, [config])

  /**
   * Get processing options
   */
  const processingOptions = useMemo(() => {
    if (!config || !config.processingOptions) return null
    return config.processingOptions
  }, [config])

  /**
   * Get presets
   */
  const presets = useMemo(() => {
    if (!config || !config.presets) return null
    return config.presets
  }, [config])

  /**
   * Get validation rules
   */
  const validation = useMemo(() => {
    if (!config || !config.validation) return null
    return config.validation
  }, [config])

  /**
   * Get UI configuration
   */
  const ui = useMemo(() => {
    if (!config || !config.ui) return null
    return config.ui
  }, [config])

  /**
   * Get all content sections
   */
  const allContent = useMemo(() => {
    if (!config || !config.content) return {}
    
    const sections = {}
    Object.keys(config.content).forEach(section => {
      sections[section] = getContent(section)
    })
    
    return sections
  }, [config, getContent])

  /**
   * Check if config is loaded
   */
  const isLoaded = !loading && config !== null

  /**
   * Check if config has error
   */
  const hasError = error !== null

  /**
   * Get specific setting
   */
  const getSetting = useCallback((key, defaultValue = null) => {
    if (!settings) return defaultValue
    return settings[key] !== undefined ? settings[key] : defaultValue
  }, [settings])

  /**
   * Get specific preset
   */
  const getPreset = useCallback((presetName) => {
    if (!presets) return null
    return presets[presetName] || null
  }, [presets])

  /**
   * Get validation rule
   */
  const getValidationRule = useCallback((ruleName) => {
    if (!validation) return null
    return validation[ruleName] || null
  }, [validation])

  /**
   * Get UI setting
   */
  const getUISetting = useCallback((key, defaultValue = null) => {
    if (!ui) return defaultValue
    return ui[key] !== undefined ? ui[key] : defaultValue
  }, [ui])

  return {
    // State
    config,
    loading,
    error,
    isLoaded,
    hasError,
    
    // Content sections
    metadata,
    hero,
    features,
    faq,
    seo,
    trust,
    allContent,
    
    // Configuration
    settings,
    processingOptions,
    presets,
    validation,
    ui,
    
    // Utilities
    getContent,
    getSetting,
    getPreset,
    getValidationRule,
    getUISetting
  }
}

/**
 * Hook for accessing multiple tool configs
 * @param {Array<string>} toolNames - Array of tool names
 * @returns {Object} - Map of tool configs
 */
export const useMultipleToolConfigs = (toolNames) => {
  const [configs, setConfigs] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const loadConfigs = async () => {
      setLoading(true)
      const loadedConfigs = {}
      const loadErrors = {}

      await Promise.all(
        toolNames.map(async (toolName) => {
          try {
            const configModule = await import(`../configs/tools/${toolName}.config.js`)
            loadedConfigs[toolName] = configModule.default || configModule
          } catch (err) {
            console.error(`Failed to load config for ${toolName}:`, err)
            loadErrors[toolName] = `Configuration not found for ${toolName}`
          }
        })
      )

      setConfigs(loadedConfigs)
      setErrors(loadErrors)
      setLoading(false)
    }

    if (toolNames && toolNames.length > 0) {
      loadConfigs()
    }
  }, [toolNames])

  return {
    configs,
    loading,
    errors,
    isLoaded: !loading && Object.keys(configs).length > 0,
    hasErrors: Object.keys(errors).length > 0
  }
}

