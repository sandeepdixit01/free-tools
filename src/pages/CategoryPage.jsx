/**
 * CategoryPage Component
 * Generic, reusable page for displaying tools by category
 *
 * FEATURES:
 * - Config-driven design
 * - Dynamic tool filtering from registry
 * - Reuses existing components (ToolHero, SEOContent, FAQ)
 * - Empty state handling
 * - Bilingual support
 * - Integrated ad system
 */

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../contexts/LanguageContext'
import SEOHead from '../components/SEO/SEOHead'

// Layout Components
import ToolHero from '../components/shared/Layout/ToolHero'
import SEOContent from '../components/shared/Content/SEOContent'
import FAQ from '../components/shared/Content/FAQ'

// Home Components
import ToolGrid from '../components/home/ToolGrid'

// Ad System
import AdSlot from '../components/ads/AdSlot'
import { AD_POSITIONS } from '../configs/adPositions'

// Tool Registry
import { getToolsByCategory } from '../configs/toolRegistry'

// Styles
import './CategoryPage.css'

/**
 * CategoryPage - Generic category page component
 * @param {Object} categoryConfig - Category configuration object
 */
const CategoryPage = ({ categoryConfig }) => {
  const { language } = useLanguage()

  // Get language-specific content
  const seo = categoryConfig.seo?.[language] || categoryConfig.seo?.en || {}
  const hero = categoryConfig.hero?.[language] || categoryConfig.hero?.en || {}
  const seoContent = categoryConfig.seoContent?.[language] || categoryConfig.seoContent?.en || {}
  const faq = categoryConfig.faq?.[language] || categoryConfig.faq?.en || {}

  // Filter tools by category from registry
  const categoryTools = useMemo(() => {
    return getToolsByCategory(categoryConfig.id)
  }, [categoryConfig.id])

  // Get title for tools section from config
  const toolsTitle = useMemo(() => {
    // Use category name from config if available, otherwise fallback to hero title
    return categoryConfig.name?.[language] || categoryConfig.name?.en || hero.title || 'Tools'
  }, [categoryConfig.name, categoryConfig.id, language, hero.title])

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <div className="category-page">
        {/* Hero Section - MUST BE FIRST */}
        {hero.title && (
          <section className="category-hero-section">
            <ToolHero
              title={hero.title}
              subtitle={hero.subtitle}
              benefits={hero.benefits}
              showCta={false}
            />
          </section>
        )}

        {/* Below Hero Ad */}
        <AdSlot position={AD_POSITIONS.BELOW_HERO} excludeCategory={categoryConfig.id} />

        {/* Tools Grid Section */}
        <section className="category-tools-section">
          <ToolGrid
            tools={categoryTools}
            title={toolsTitle}
            showViewAll={false}
          />
        </section>

        {/* Mid Content Ad */}
        <AdSlot position={AD_POSITIONS.MID_CONTENT} excludeCategory={categoryConfig.id} />

        {/* SEO Content Section */}
        {seoContent.mainTitle && (
          <section className="category-seo-section">
            <div className="container">
              <SEOContent
                title={seoContent.mainTitle}
                intro={seoContent.intro}
                sections={seoContent.sections}
              />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faq.items && faq.items.length > 0 && (
          <section className="category-faq-section">
            <div className="container">
              <FAQ
                title={faq.title}
                items={faq.items}
              />
            </div>
          </section>
        )}

        {/* Bottom Banner Ad */}
        <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} excludeCategory={categoryConfig.id} />
      </div>
    </>
  )
}

CategoryPage.propTypes = {
  categoryConfig: PropTypes.shape({
    id: PropTypes.string.isRequired,
    seo: PropTypes.object,
    hero: PropTypes.object,
    seoContent: PropTypes.object,
    faq: PropTypes.object
  }).isRequired
}

export default CategoryPage

