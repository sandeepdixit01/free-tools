/**
 * UseCaseList Component
 * Reusable use case display component
 */

import React from 'react'
import PropTypes from 'prop-types'
import './UseCaseList.css'

const UseCaseList = ({
  // Content
  title,
  subtitle = null,
  useCases = [],
  
  // Layout
  layout = 'cards', // 'cards' or 'timeline'
  columns = 2,
  
  // Styling
  className = '',
  maxWidth = '1000px'
}) => {
  if (!useCases || useCases.length === 0) {
    return null
  }

  return (
    <div className={`usecase-list-component ${className}`}>
      <div className="usecase-list-container" style={{ maxWidth }}>
        {/* Header */}
        {(title || subtitle) && (
          <div className="usecase-list-header">
            {title && <h2 className="usecase-list-title">{title}</h2>}
            {subtitle && <p className="usecase-list-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* Use Cases */}
        <div 
          className={`usecase-list-items usecase-list-${layout}`}
          style={{
            gridTemplateColumns: layout === 'cards' 
              ? `repeat(auto-fit, minmax(${columns === 1 ? '100%' : '280px'}, 1fr))` 
              : '1fr'
          }}
        >
          {useCases.map((useCase, index) => (
            <div key={index} className="usecase-item">
              {/* Timeline connector */}
              {layout === 'timeline' && index < useCases.length - 1 && (
                <div className="timeline-connector"></div>
              )}

              {/* Icon */}
              {useCase.icon && (
                <div className="usecase-icon">
                  {useCase.icon}
                </div>
              )}

              {/* Content */}
              <div className="usecase-content">
                {useCase.title && (
                  <h3 className="usecase-title">{useCase.title}</h3>
                )}
                {useCase.description && (
                  <p className="usecase-description">{useCase.description}</p>
                )}
                {useCase.examples && useCase.examples.length > 0 && (
                  <ul className="usecase-examples">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                )}
                {useCase.link && useCase.linkText && (
                  <a 
                    href={useCase.link} 
                    className="usecase-link"
                    onClick={useCase.onLinkClick}
                  >
                    {useCase.linkText} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

UseCaseList.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  useCases: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      examples: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string,
      linkText: PropTypes.string,
      onLinkClick: PropTypes.func
    })
  ).isRequired,
  
  // Layout
  layout: PropTypes.oneOf(['cards', 'timeline']),
  columns: PropTypes.number,
  
  // Styling
  className: PropTypes.string,
  maxWidth: PropTypes.string
}

export default UseCaseList

