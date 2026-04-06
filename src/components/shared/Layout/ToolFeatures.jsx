/**
 * ToolFeatures Component
 * Reusable features section for tool pages
 * Displays feature cards in a grid layout
 */

import React from 'react'
import PropTypes from 'prop-types'
import './ToolFeatures.css'

const ToolFeatures = ({
  // Content
  title,
  subtitle = null,
  features = [],
  
  // Layout
  columns = 3,
  centered = true,
  maxWidth = '1200px',
  
  // Styling
  backgroundColor = null,
  className = ''
}) => {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <div 
      className={`tool-features ${centered ? 'tool-features-centered' : ''} ${className}`}
      style={{ backgroundColor }}
    >
      <div className="tool-features-container" style={{ maxWidth }}>
        {/* Header */}
        {title && (
          <div className="tool-features-header">
            <h2 className="tool-features-title">{title}</h2>
            {subtitle && (
              <p className="tool-features-subtitle">{subtitle}</p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div 
          className="tool-features-grid"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 2 ? '300px' : '250px'}, 1fr))`
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="tool-feature-card">
              {/* Icon */}
              {feature.icon && (
                <div className="feature-icon">
                  {feature.icon}
                </div>
              )}

              {/* Title */}
              {feature.title && (
                <h3 className="feature-title">{feature.title}</h3>
              )}

              {/* Description */}
              {feature.description && (
                <p className="feature-description">{feature.description}</p>
              )}

              {/* Optional Link */}
              {feature.link && feature.linkText && (
                <a 
                  href={feature.link} 
                  className="feature-link"
                  onClick={feature.onLinkClick}
                >
                  {feature.linkText} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ToolFeatures.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      linkText: PropTypes.string,
      onLinkClick: PropTypes.func
    })
  ).isRequired,
  
  // Layout
  columns: PropTypes.oneOf([2, 3, 4]),
  centered: PropTypes.bool,
  maxWidth: PropTypes.string,
  
  // Styling
  backgroundColor: PropTypes.string,
  className: PropTypes.string
}

export default ToolFeatures

