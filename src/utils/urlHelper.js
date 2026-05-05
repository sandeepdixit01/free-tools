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
 * @returns {string} Full canonical URL
 */
export const getToolCanonicalUrl = (toolSlug) => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/tools/${toolSlug}`;
};

/**
 * Generate canonical URL for a category
 * @param {string} categorySlug - Category slug (e.g., 'image', 'pdf', 'text', 'developer')
 * @returns {string} Full canonical URL
 */
export const getCategoryCanonicalUrl = (categorySlug) => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/tools/${categorySlug}`;
};

/**
 * Generate canonical URL for a static page
 * @param {string} pagePath - Page path (e.g., 'tools', 'about', 'contact')
 * @returns {string} Full canonical URL
 */
export const getPageCanonicalUrl = (pagePath) => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/${pagePath}`;
};

/**
 * Generate canonical URL for home page
 * @returns {string} Full canonical URL
 */
export const getHomeCanonicalUrl = () => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}`;
};

