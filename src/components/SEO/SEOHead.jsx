import { Helmet } from 'react-helmet-async'

/**
 * SEOHead Component - Generic SEO metadata for all pages
 *
 * Provides meta tags, Open Graph, Twitter Cards, and structured data
 * All parameters are optional with sensible fallbacks
 *
 * @param {string} title - Page title (max 60 chars recommended)
 * @param {string} description - Meta description (max 155 chars recommended)
 * @param {string} canonical - Canonical URL
 * @param {string|object} keywords - Keywords string or object with primary/secondary
 * @param {string} ogTitle - Open Graph title (defaults to title)
 * @param {string} ogDescription - Open Graph description (defaults to description)
 * @param {string} ogUrl - Open Graph URL (defaults to canonical)
 * @param {string} ogImage - Open Graph image URL
 * @param {object} structuredData - Custom structured data (WebApplication, FAQPage, etc.)
 * @param {object} breadcrumbData - Custom breadcrumb structured data
 * @param {object} faqData - Custom FAQ structured data (from FAQ component)
 * @param {object} webApplicationData - WebApplication schema
 * @param {object} howToData - HowTo schema
 */
const SEOHead = ({
  title = "Free Online Tools - DesiTechLabs",
  description = "Free online tools for images, PDFs, text, and developers. Fast, secure, and privacy-focused.",
  canonical,
  keywords = "free online tools, image tools, pdf tools, text tools, developer tools",
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = "/og-image.png",
  structuredData,
  breadcrumbData,
  faqData,
  webApplicationData,
  howToData
}) => {
  // Convert keywords object to string if needed
  const keywordsString = typeof keywords === 'object' && keywords !== null
    ? [
        ...(Array.isArray(keywords.primary) ? keywords.primary : []),
        ...(Array.isArray(keywords.secondary) ? keywords.secondary : []),
        ...(Array.isArray(keywords.longTail) ? keywords.longTail : [])
      ].filter(Boolean).join(', ')
    : keywords || '';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English, Hindi" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DesiTechLabs" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="DesiTechLabs" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl || canonical} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data - WebApplication Schema */}
      {webApplicationData && (
        <script type="application/ld+json">
          {JSON.stringify(webApplicationData)}
        </script>
      )}

      {/* Structured Data - HowTo Schema */}
      {howToData && (
        <script type="application/ld+json">
          {JSON.stringify(howToData)}
        </script>
      )}

      {/* Structured Data - FAQ Schema (from FAQ component) */}
      {faqData && (
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      )}

      {/* Structured Data - Breadcrumb Schema */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}

      {/* Legacy: Generic structured data (for backward compatibility) */}
      {structuredData && !webApplicationData && !howToData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOHead

