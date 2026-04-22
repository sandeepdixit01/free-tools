/**
 * SEOContent Component
 * Reusable SEO content display component
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './SEOContent.css'

const SEOContent = ({
  // Content
  title,
  intro = null,
  sections = [],
  
  // Styling
  className = '',
  maxWidth = '1000px',
  
  // Show section anchors
  showAnchors = true
}) => {
  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <div className={`seo-content-component ${className}`}>
      <div className="seo-content-container" style={{ maxWidth }}>
        {/* Header */}
        {(title || intro) && (
          <div className="seo-content-header">
            {title && <h2 className="seo-content-title">{title}</h2>}
            {intro && (
              <p
                className="seo-content-intro"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
            )}
          </div>
        )}

        {/* SEO Sections Grid */}
        <div className="seo-sections-grid">
          {sections.map((section, index) => (
            <article 
              key={index} 
              className="seo-section-card"
              id={showAnchors && section.anchor ? section.anchor : undefined}
            >
              {/* Title */}
              {section.title && (
                <h3 className="seo-section-title">{section.title}</h3>
              )}

              {/* Content */}
              {section.content && (
                <div className="seo-section-content">
                  {typeof section.content === 'string' ? (
                    // Support HTML content for contextual internal linking
                    <p dangerouslySetInnerHTML={{ __html: section.content }} />
                  ) : (
                    section.content
                  )}
                </div>
              )}

              {/* Footer with link and keywords */}
              {(section.link || section.keywords) && (
                <div className="seo-section-footer">
                  {section.link && section.linkText && (
                    <Link
                      to={section.link}
                      className="seo-section-link"
                      onClick={section.onLinkClick}
                    >
                      {section.linkText} →
                    </Link>
                  )}
                  {section.keywords && (
                    <span className="seo-keywords">
                      {Array.isArray(section.keywords)
                        ? section.keywords.join(', ')
                        : section.keywords}
                    </span>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Additional detailed content */}
        {sections.some(s => s.detailedContent) && (
          <div className="seo-detailed-content">
            {sections.map((section, index) => 
              section.detailedContent ? (
                <div key={index} className="seo-detailed-section">
                  {section.detailedContent}
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  )
}

SEOContent.propTypes = {
  // Content
  title: PropTypes.string,
  intro: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
      ]).isRequired,
      link: PropTypes.string,
      linkText: PropTypes.string,
      onLinkClick: PropTypes.func,
      anchor: PropTypes.string,
      keywords: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]),
      detailedContent: PropTypes.node
    })
  ).isRequired,
  
  // Styling
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  showAnchors: PropTypes.bool
}

export default SEOContent

