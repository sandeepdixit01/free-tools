/**
 * ProcessingIndicator Component
 * Reusable processing/loading indicator with progress
 */

import React from 'react'
import PropTypes from 'prop-types'
import './ProcessingIndicator.css'

const ProcessingIndicator = ({
  // State
  isProcessing = false,
  progress = 0, // 0-100
  
  // Content
  title,
  message,
  showProgressText = true,
  
  // Stats (optional)
  stats = null,
  
  // Type
  type = 'spinner', // 'spinner', 'progress', 'dots'
  
  // Styling
  size = 'medium', // 'small', 'medium', 'large'
  className = '',
  
  // Overlay
  overlay = false
}) => {
  if (!isProcessing) {
    return null
  }

  const content = (
    <div className={`processing-indicator processing-indicator-${size} ${className}`}>
      {/* Indicator */}
      <div className="processing-visual">
        {type === 'spinner' && (
          <div className="processing-spinner"></div>
        )}
        
        {type === 'progress' && (
          <div className="processing-progress">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
            {showProgressText && (
              <span className="progress-text">{Math.round(progress)}%</span>
            )}
          </div>
        )}
        
        {type === 'dots' && (
          <div className="processing-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="processing-content">
        {title && (
          <h4 className="processing-title">{title}</h4>
        )}
        {message && (
          <p className="processing-message">{message}</p>
        )}
      </div>

      {/* Stats */}
      {stats && (
        <div className="processing-stats">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <span className="stat-label">{key}:</span>
              <span className="stat-value">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  if (overlay) {
    return (
      <div className="processing-overlay">
        {content}
      </div>
    )
  }

  return content
}

ProcessingIndicator.propTypes = {
  // State
  isProcessing: PropTypes.bool,
  progress: PropTypes.number,
  
  // Content
  title: PropTypes.string,
  message: PropTypes.string,
  showProgressText: PropTypes.bool,
  stats: PropTypes.object,
  
  // Type
  type: PropTypes.oneOf(['spinner', 'progress', 'dots']),
  
  // Styling
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  
  // Overlay
  overlay: PropTypes.bool
}

export default ProcessingIndicator

