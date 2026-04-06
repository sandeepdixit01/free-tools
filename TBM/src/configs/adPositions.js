/**
 * Ad Position Constants
 * Centralized definition of all ad positions across the application
 */

export const AD_POSITIONS = {
  TOP_BANNER: 'top-banner',
  BELOW_HERO: 'below-hero',
  MID_CONTENT: 'mid-content',
  BOTTOM_BANNER: 'bottom-banner'
}

/**
 * Ad configuration for each position
 * Defines size, type, and fallback behavior
 */
export const AD_CONFIG = {
  [AD_POSITIONS.TOP_BANNER]: {
    type: 'banner',
    height: '90px',
    fallbackType: 'tool-card',
    fallbackCount: 1
  },
  [AD_POSITIONS.BELOW_HERO]: {
    type: 'native',
    fallbackType: 'tool-card',
    fallbackCount: 1
  },
  [AD_POSITIONS.MID_CONTENT]: {
    type: 'banner',
    height: '90px',
    fallbackType: 'tools',
    fallbackCount: 3
  },
  [AD_POSITIONS.BOTTOM_BANNER]: {
    type: 'native',
    fallbackType: 'tool-card',
    fallbackCount: 1
  }
}

/**
 * Check if AdSense is available
 * @returns {boolean}
 */
export const isAdSenseAvailable = () => {
  // Check if Google AdSense script is loaded
  return typeof window !== 'undefined' && window.adsbygoogle !== undefined
}

/**
 * Get ad configuration for a position
 * @param {string} position - Ad position
 * @returns {Object} Ad configuration
 */
export const getAdConfig = (position) => {
  return AD_CONFIG[position] || AD_CONFIG[AD_POSITIONS.TOP_BANNER]
}

