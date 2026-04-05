/**
 * ControlPanel Component
 * Reusable control panel for tool settings
 * Generic component that renders any controls passed as children
 */

import React from 'react'
import PropTypes from 'prop-types'
import './ControlPanel.css'

const ControlPanel = ({
  // Content
  title,
  subtitle = null,
  
  // Controls (passed as children)
  children,
  
  // Layout
  layout = 'vertical', // 'vertical' or 'horizontal'
  columns = 1,
  
  // Styling
  className = '',
  backgroundColor = null,
  
  // Optional actions
  actions = null, // Array of action buttons
  
  // Collapsible
  collapsible = false,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)

  const toggleExpanded = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div 
      className={`control-panel ${className}`}
      style={{ backgroundColor }}
    >
      {/* Header */}
      {(title || subtitle) && (
        <div 
          className={`control-panel-header ${collapsible ? 'collapsible' : ''}`}
          onClick={toggleExpanded}
        >
          <div className="control-panel-header-content">
            {title && <h3 className="control-panel-title">{title}</h3>}
            {subtitle && <p className="control-panel-subtitle">{subtitle}</p>}
          </div>
          {collapsible && (
            <button className="control-panel-toggle" aria-label="Toggle panel">
              {isExpanded ? '−' : '+'}
            </button>
          )}
        </div>
      )}

      {/* Content */}
      {(!collapsible || isExpanded) && (
        <>
          <div 
            className={`control-panel-content control-panel-${layout}`}
            style={{
              gridTemplateColumns: layout === 'horizontal' 
                ? `repeat(${columns}, 1fr)` 
                : '1fr'
            }}
          >
            {children}
          </div>

          {/* Actions */}
          {actions && actions.length > 0 && (
            <div className="control-panel-actions">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className={`control-action ${action.variant || 'primary'}`}
                  onClick={action.onClick}
                  disabled={action.disabled}
                >
                  {action.icon && <span className="action-icon">{action.icon}</span>}
                  <span className="action-text">{action.text}</span>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

ControlPanel.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  
  // Layout
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  columns: PropTypes.number,
  
  // Styling
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  
  // Actions
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string,
      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      variant: PropTypes.oneOf(['primary', 'secondary', 'danger'])
    })
  ),
  
  // Collapsible
  collapsible: PropTypes.bool,
  defaultExpanded: PropTypes.bool
}

export default ControlPanel

