/**
 * ToolLayout Component
 * Reusable layout wrapper for all tool pages
 * Provides consistent structure with configurable sections
 */

import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from '../Navigation/Breadcrumb'
import './ToolLayout.css'

const ToolLayout = ({
  // Layout configuration
  showHero = true,
  showBreadcrumb = true,
  showFeatures = true,
  showHowTo = false,
  showFAQ = true,
  showSEO = true,
  showTrust = false,
  
  // Ad slot configuration
  adSlots = {
    top: null,
    afterResult: null,
    midContent: null,
    bottom: null
  },
  
  // Section components (passed as props)
  heroComponent = null,
  featuresComponent = null,
  howToComponent = null,
  faqComponent = null,
  seoComponent = null,
  trustComponent = null,
  
  // Main tool content (children)
  children,
  
  // Container settings
  containerClass = 'tool-container',
  maxWidth = '1200px',
  
  // Tool identification (for breadcrumb)
  toolId = null,

  // Additional props
  className = '',
  style = {}
}) => {
  return (
    <div className={`tool-layout ${className}`} style={style}>
      {/* Hero Section */}
      {showHero && heroComponent && (
        <section className="tool-layout-section tool-layout-hero">
          {heroComponent}
        </section>
      )}

      {/* Breadcrumb Navigation */}
      {showBreadcrumb && toolId && (
        <div className="tool-layout-breadcrumb">
          <Breadcrumb toolId={toolId} />
        </div>
      )}

      {/* Ad Slot: Top */}
      {adSlots.top && (
        <div className="tool-layout-ad-slot tool-layout-ad-top">
          {adSlots.top}
        </div>
      )}

      {/* Main Tool Content */}
      <section className="tool-layout-section tool-layout-main">
        <div className={containerClass} style={{ maxWidth }}>
          {children}
        </div>
      </section>

      {/* Ad Slot: After Result */}
      {adSlots.afterResult && (
        <div className="tool-layout-ad-slot tool-layout-ad-after-result">
          {adSlots.afterResult}
        </div>
      )}

      {/* Features Section */}
      {showFeatures && featuresComponent && (
        <section className="tool-layout-section tool-layout-features">
          {featuresComponent}
        </section>
      )}

      {/* How To Section */}
      {showHowTo && howToComponent && (
        <section className="tool-layout-section tool-layout-howto">
          {howToComponent}
        </section>
      )}

      {/* Ad Slot: Mid Content */}
      {adSlots.midContent && (
        <div className="tool-layout-ad-slot tool-layout-ad-mid-content">
          {adSlots.midContent}
        </div>
      )}

      {/* SEO Content Section */}
      {showSEO && seoComponent && (
        <section className="tool-layout-section tool-layout-seo">
          {seoComponent}
        </section>
      )}

      {/* Trust Indicators Section */}
      {showTrust && trustComponent && (
        <section className="tool-layout-section tool-layout-trust">
          {trustComponent}
        </section>
      )}

      {/* FAQ Section */}
      {showFAQ && faqComponent && (
        <section className="tool-layout-section tool-layout-faq">
          {faqComponent}
        </section>
      )}

      {/* Ad Slot: Bottom */}
      {adSlots.bottom && (
        <div className="tool-layout-ad-slot tool-layout-ad-bottom">
          {adSlots.bottom}
        </div>
      )}
    </div>
  )
}

ToolLayout.propTypes = {
  // Layout toggles
  showHero: PropTypes.bool,
  showBreadcrumb: PropTypes.bool,
  showFeatures: PropTypes.bool,
  showHowTo: PropTypes.bool,
  showFAQ: PropTypes.bool,
  showSEO: PropTypes.bool,
  showTrust: PropTypes.bool,
  
  // Ad slots
  adSlots: PropTypes.shape({
    top: PropTypes.node,
    afterResult: PropTypes.node,
    midContent: PropTypes.node,
    bottom: PropTypes.node
  }),
  
  // Section components
  heroComponent: PropTypes.node,
  featuresComponent: PropTypes.node,
  howToComponent: PropTypes.node,
  faqComponent: PropTypes.node,
  seoComponent: PropTypes.node,
  trustComponent: PropTypes.node,
  
  // Main content
  children: PropTypes.node.isRequired,
  
  // Container settings
  containerClass: PropTypes.string,
  maxWidth: PropTypes.string,
  
  // Tool identification
  toolId: PropTypes.string,

  // Additional
  className: PropTypes.string,
  style: PropTypes.object
}

export default ToolLayout

