/**
 * PreviewPane Component
 * Reusable preview component for displaying results
 * Generic component that works with any content type
 */

import React from 'react'
import PropTypes from 'prop-types'
import './PreviewPane.css'

const PreviewPane = ({
  // Content
  title,
  subtitle = null,
  
  // Preview items
  items = [],
  
  // Layout
  layout = 'grid', // 'grid', 'list', 'comparison'
  columns = 2,
  
  // Comparison mode (before/after)
  showComparison = false,
  comparisonLabels = { before: 'Before', after: 'After' },
  
  // Styling
  className = '',
  backgroundColor = null,
  
  // Empty state
  emptyText = null,
  emptyIcon = '📄',
  
  // Accessibility
  defaultImageAlt = 'Preview'
}) => {
  if (!items || items.length === 0) {
    return emptyText ? (
      <div className={`preview-pane preview-pane-empty ${className}`}>
        <div className="preview-empty-state">
          <div className="empty-icon">{emptyIcon}</div>
          <p className="empty-text">{emptyText}</p>
        </div>
      </div>
    ) : null
  }

  return (
    <div 
      className={`preview-pane ${className}`}
      style={{ backgroundColor }}
    >
      {/* Header */}
      {(title || subtitle) && (
        <div className="preview-pane-header">
          {title && <h3 className="preview-pane-title">{title}</h3>}
          {subtitle && <p className="preview-pane-subtitle">{subtitle}</p>}
        </div>
      )}

      {/* Preview Content */}
      <div 
        className={`preview-pane-content preview-pane-${layout}`}
        style={{
          gridTemplateColumns: layout === 'grid' 
            ? `repeat(auto-fit, minmax(${columns === 1 ? '100%' : '250px'}, 1fr))` 
            : '1fr'
        }}
      >
        {items.map((item, index) => (
          <div key={item.id || index} className="preview-item">
            {/* Comparison Mode */}
            {showComparison && item.before && item.after ? (
              <div className="preview-comparison">
                <div className="comparison-side">
                  <div className="comparison-label">{comparisonLabels.before}</div>
                  <div className="comparison-content">
                    {renderContent(item.before, defaultImageAlt)}
                  </div>
                  {item.before.stats && (
                    <div className="comparison-stats">
                      {Object.entries(item.before.stats).map(([key, value]) => (
                        <div key={key} className="stat-item">
                          <span className="stat-label">{key}:</span>
                          <span className="stat-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="comparison-divider">→</div>
                <div className="comparison-side">
                  <div className="comparison-label">{comparisonLabels.after}</div>
                  <div className="comparison-content">
                    {renderContent(item.after, defaultImageAlt)}
                  </div>
                  {item.after.stats && (
                    <div className="comparison-stats">
                      {Object.entries(item.after.stats).map(([key, value]) => (
                        <div key={key} className="stat-item">
                          <span className="stat-label">{key}:</span>
                          <span className="stat-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Regular Mode */
              <>
                {item.label && (
                  <div className="preview-item-label">{item.label}</div>
                )}
                <div className="preview-item-content">
                  {renderContent(item, defaultImageAlt)}
                </div>
                {item.stats && (
                  <div className="preview-item-stats">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <span className="stat-label">{key}:</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.actions && item.actions.length > 0 && (
                  <div className="preview-item-actions">
                    {item.actions.map((action, idx) => (
                      <button
                        key={idx}
                        className={`preview-action ${action.variant || 'primary'}`}
                        onClick={action.onClick}
                        disabled={action.disabled}
                      >
                        {action.icon && <span className="action-icon">{action.icon}</span>}
                        {action.text}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Helper function to render different content types
const renderContent = (content, defaultAlt) => {
  if (!content) return null

  // Image
  if (content.type === 'image' && content.src) {
    return (
      <img
        src={content.src}
        alt={content.alt || defaultAlt}
        className="preview-image"
      />
    )
  }

  // Text
  if (content.type === 'text' && content.text) {
    return <div className="preview-text">{content.text}</div>
  }

  // Custom component
  if (content.component) {
    return content.component
  }

  // Fallback: render src if available
  if (content.src) {
    return (
      <img
        src={content.src}
        alt={content.alt || defaultAlt}
        className="preview-image"
      />
    )
  }

  return null
}

PreviewPane.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.oneOf(['image', 'text', 'custom']),
      src: PropTypes.string,
      alt: PropTypes.string,
      text: PropTypes.string,
      component: PropTypes.node,
      stats: PropTypes.object,
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          icon: PropTypes.string,
          onClick: PropTypes.func.isRequired,
          disabled: PropTypes.bool,
          variant: PropTypes.oneOf(['primary', 'secondary', 'danger'])
        })
      ),
      before: PropTypes.object,
      after: PropTypes.object
    })
  ),
  
  // Layout
  layout: PropTypes.oneOf(['grid', 'list', 'comparison']),
  columns: PropTypes.number,
  
  // Comparison
  showComparison: PropTypes.bool,
  comparisonLabels: PropTypes.shape({
    before: PropTypes.string,
    after: PropTypes.string
  }),
  
  // Styling
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  
  // Empty state
  emptyText: PropTypes.string,
  emptyIcon: PropTypes.string,
  
  // Accessibility
  defaultImageAlt: PropTypes.string
}

export default PreviewPane

