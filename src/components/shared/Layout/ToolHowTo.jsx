/**
 * ToolHowTo Component
 * Reusable "How To" section for tool pages
 * Displays step-by-step instructions
 */

import React from 'react'
import PropTypes from 'prop-types'
import './ToolHowTo.css'

const ToolHowTo = ({
  // Content
  title,
  subtitle = null,
  steps = [],
  
  // Layout
  layout = 'vertical', // 'vertical' or 'horizontal'
  numbered = true,
  centered = true,
  maxWidth = '1000px',
  
  // Styling
  backgroundColor = null,
  className = ''
}) => {
  if (!steps || steps.length === 0) {
    return null
  }

  return (
    <div 
      className={`tool-howto ${centered ? 'tool-howto-centered' : ''} ${className}`}
      style={{ backgroundColor }}
    >
      <div className="tool-howto-container" style={{ maxWidth }}>
        {/* Header */}
        {title && (
          <div className="tool-howto-header">
            <h2 className="tool-howto-title">{title}</h2>
            {subtitle && (
              <p className="tool-howto-subtitle">{subtitle}</p>
            )}
          </div>
        )}

        {/* Steps */}
        <div className={`tool-howto-steps tool-howto-${layout}`}>
          {steps.map((step, index) => (
            <div key={index} className="tool-howto-step">
              {/* Step Number/Icon */}
              <div className="step-indicator">
                {numbered ? (
                  <span className="step-number">{index + 1}</span>
                ) : step.icon ? (
                  <span className="step-icon">{step.icon}</span>
                ) : null}
              </div>

              {/* Step Content */}
              <div className="step-content">
                {step.title && (
                  <h3 className="step-title">{step.title}</h3>
                )}
                {step.description && (
                  <p className="step-description">{step.description}</p>
                )}
                {step.image && (
                  <img 
                    src={step.image} 
                    alt={step.title || `Step ${index + 1}`}
                    className="step-image"
                  />
                )}
                {step.note && (
                  <div className="step-note">
                    💡 {step.note}
                  </div>
                )}
              </div>

              {/* Connector (for horizontal layout) */}
              {layout === 'horizontal' && index < steps.length - 1 && (
                <div className="step-connector">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ToolHowTo.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      note: PropTypes.string
    })
  ).isRequired,
  
  // Layout
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  numbered: PropTypes.bool,
  centered: PropTypes.bool,
  maxWidth: PropTypes.string,
  
  // Styling
  backgroundColor: PropTypes.string,
  className: PropTypes.string
}

export default ToolHowTo

