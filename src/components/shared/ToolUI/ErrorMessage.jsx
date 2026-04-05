/**
 * ErrorMessage Component
 * Reusable error message display component
 */

import React from 'react'
import PropTypes from 'prop-types'
import './ErrorMessage.css'

const ErrorMessage = ({
  // Content
  title,
  message,
  
  // Type
  type = 'error', // 'error', 'warning', 'info', 'success'
  
  // Actions
  actions = null,
  
  // Dismissible
  dismissible = false,
  onDismiss = null,
  
  // Styling
  icon = null,
  className = '',
  
  // Show/Hide
  show = true
}) => {
  if (!show) {
    return null
  }

  const defaultIcons = {
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
    success: '✅'
  }

  const displayIcon = icon || defaultIcons[type]

  return (
    <div className={`error-message error-message-${type} ${className}`}>
      {/* Icon */}
      {displayIcon && (
        <div className="error-icon">
          {displayIcon}
        </div>
      )}

      {/* Content */}
      <div className="error-content">
        {title && (
          <h4 className="error-title">{title}</h4>
        )}
        {message && (
          <p className="error-text">{message}</p>
        )}

        {/* Actions */}
        {actions && actions.length > 0 && (
          <div className="error-actions">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`error-action ${action.variant || 'primary'}`}
                onClick={action.onClick}
                disabled={action.disabled}
              >
                {action.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dismiss Button */}
      {dismissible && onDismiss && (
        <button
          className="error-dismiss"
          onClick={onDismiss}
          aria-label={dismissText || "Dismiss"}
        >
          ×
        </button>
      )}
    </div>
  )
}

ErrorMessage.propTypes = {
  // Content
  title: PropTypes.string,
  message: PropTypes.string,
  dismissText: PropTypes.string,
  
  // Type
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  
  // Actions
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      variant: PropTypes.oneOf(['primary', 'secondary'])
    })
  ),
  
  // Dismissible
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  
  // Styling
  icon: PropTypes.string,
  className: PropTypes.string,
  
  // Show/Hide
  show: PropTypes.bool
}

export default ErrorMessage

