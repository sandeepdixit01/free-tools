/**
 * Structured Data Helper
 * Generates JSON-LD schemas from tool configurations
 */

const SITE_URL = 'https://free-tools-nine-delta.vercel.app';

/**
 * Generate WebApplication schema from tool config
 * @param {object} config - Tool configuration
 * @param {string} language - Current language (en/hi)
 * @returns {object} WebApplication schema
 */
export const generateWebApplicationSchema = (config, language = 'en') => {
  const seo = config.seo?.[language] || config.seo?.en || {};
  const content = config.content?.[language] || config.content?.en || {};
  const name = config.name?.[language] || config.name?.en || '';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: name,
    url: seo.canonical || `${SITE_URL}/tools/${config.slug || config.id}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description: seo.description || content.hero?.subtitle || '',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    softwareVersion: config.metadata?.version || '1.0.0',
    author: {
      '@type': 'Organization',
      name: 'FreeTools'
    }
  };
};

/**
 * Generate HowTo schema from tool config
 * @param {object} config - Tool configuration
 * @param {string} language - Current language (en/hi)
 * @returns {object} HowTo schema
 */
export const generateHowToSchema = (config, language = 'en') => {
  const content = config.content?.[language] || config.content?.en || {};
  const howTo = content.howTo;
  const name = config.name?.[language] || config.name?.en || '';

  if (!howTo || !howTo.steps || howTo.steps.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${name}`,
    description: howTo.subtitle || `Step-by-step guide to use ${name}`,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title || `Step ${step.number || index + 1}`,
      text: step.description || '',
      ...(step.icon && { image: step.icon })
    }))
  };
};

/**
 * Generate FAQ schema from tool config
 * @param {object} config - Tool configuration
 * @param {string} language - Current language (en/hi)
 * @returns {object} FAQ schema
 */
export const generateFAQSchema = (config, language = 'en') => {
  const content = config.content?.[language] || config.content?.en || {};
  const faq = content.faq;

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
};

/**
 * Generate all structured data for a tool
 * @param {object} config - Tool configuration
 * @param {string} language - Current language (en/hi)
 * @returns {object} Object containing all schemas
 */
export const generateAllStructuredData = (config, language = 'en') => {
  return {
    webApplication: generateWebApplicationSchema(config, language),
    howTo: generateHowToSchema(config, language),
    faq: generateFAQSchema(config, language)
  };
};

/**
 * Validate structured data schema
 * @param {object} schema - Schema to validate
 * @returns {boolean} True if valid
 */
export const validateSchema = (schema) => {
  if (!schema || typeof schema !== 'object') {
    return false;
  }

  // Check required fields
  if (!schema['@context'] || !schema['@type']) {
    return false;
  }

  return true;
};
