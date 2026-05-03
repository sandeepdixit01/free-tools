/**
 * URL Helper Utilities
 * Centralized URL generation for canonical URLs and structured data
 */

/**
 * Get the base URL from environment variable
 * @returns {string} Base URL (e.g., 'https://freetooldepot.com' or 'http://localhost:3000')
 */
export const getBaseUrl = () => {
  return import.meta.env.VITE_SITE_URL || 'https://freetooldepot.com';
};

/**
 * Generate canonical URL for a tool
 * @param {string} toolSlug - Tool slug (e.g., 'image-resizer', 'word-counter')
 * @param {string} language - Language code ('en' or 'hi')
 * @returns {string} Full canonical URL
 */
export const getToolCanonicalUrl = (toolSlug, language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}/tools/${toolSlug}`;
};

/**
 * Generate canonical URL for a category
 * @param {string} categorySlug - Category slug (e.g., 'image', 'pdf', 'text', 'developer')
 * @param {string} language - Language code ('en' or 'hi')
 * @returns {string} Full canonical URL
 */
export const getCategoryCanonicalUrl = (categorySlug, language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}/tools/${categorySlug}`;
};

/**
 * Generate canonical URL for a static page
 * @param {string} pagePath - Page path (e.g., 'tools', 'about', 'contact')
 * @param {string} language - Language code ('en' or 'hi')
 * @returns {string} Full canonical URL
 */
export const getPageCanonicalUrl = (pagePath, language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}/${pagePath}`;
};

/**
 * Generate canonical URL for home page
 * @param {string} language - Language code ('en' or 'hi')
 * @returns {string} Full canonical URL
 */
export const getHomeCanonicalUrl = (language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}`;
};

