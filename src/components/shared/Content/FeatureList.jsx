/**
 * FeatureList Component
 * Reusable feature list display component
 */

import React from 'react'
import PropTypes from 'prop-types'
import './FeatureList.css'

const FeatureList = ({
  // Content
  title,
  subtitle = null,
  features = [],
  
  // Layout
  layout = 'list', // 'list' or 'grid'
  columns = 2,
  
  // Styling
  className = '',
  maxWidth = '1000px',
  showNumbers = false,
  showIcons = true
}) => {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <div className={`feature-list-component ${className}`}>
      <div className="feature-list-container" style={{ maxWidth }}>
        {/* Header */}
        {(title || subtitle) && (
          <div className="feature-list-header">
            {title && <h2 className="feature-list-title">{title}</h2>}
            {subtitle && <p className="feature-list-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* Features */}
        <div 
          className={`feature-list-items feature-list-${layout}`}
          style={{
            gridTemplateColumns: layout === 'grid' 
              ? `repeat(auto-fit, minmax(${columns === 1 ? '100%' : '280px'}, 1fr))` 
              : '1fr'
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="feature-list-item">
              {/* Icon or Number */}
              {(showNumbers || (showIcons && feature.icon)) && (
                <div className="feature-indicator">
                  {showNumbers ? (
                    <span className="feature-number">{index + 1}</span>
                  ) : showIcons && feature.icon ? (
                    <span className="feature-icon">{feature.icon}</span>
                  ) : null}
                </div>
              )}

              {/* Content */}
              <div className="feature-content">
                {feature.title && (
                  <h3 className="feature-title">{feature.title}</h3>
                )}
                {feature.description && (
                  <p className="feature-description">{feature.description}</p>
                )}
                {feature.details && (
                  <ul className="feature-details">
                    {feature.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

FeatureList.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      details: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  
  // Layout
  layout: PropTypes.oneOf(['list', 'grid']),
  columns: PropTypes.number,
  
  // Styling
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  showNumbers: PropTypes.bool,
  showIcons: PropTypes.bool
}

export default FeatureList

