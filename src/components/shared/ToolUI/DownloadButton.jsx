/**
 * DownloadButton Component
 * Reusable download button with loading and success states
 */

import React from 'react'
import PropTypes from 'prop-types'
import './DownloadButton.css'

const DownloadButton = ({
  // Content
  text,
  downloadingText = 'Downloading...',
  successText = 'Downloaded!',
  
  // State
  isDownloading = false,
  isSuccess = false,
  disabled = false,
  
  // Handler
  onClick,
  
  // Styling
  variant = 'primary', // 'primary', 'secondary', 'outline'
  size = 'medium', // 'small', 'medium', 'large'
  icon = '⬇️',
  fullWidth = false,
  className = ''
}) => {
  const handleClick = () => {
    if (!disabled && !isDownloading && onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`download-button download-button-${variant} download-button-${size} ${fullWidth ? 'full-width' : ''} ${isSuccess ? 'success' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled || isDownloading}
    >
      {/* Icon */}
      <span className="download-icon">
        {isDownloading ? (
          <span className="download-spinner"></span>
        ) : isSuccess ? (
          '✓'
        ) : (
          icon
        )}
      </span>

      {/* Text */}
      <span className="download-text">
        {isDownloading ? downloadingText : isSuccess ? successText : text}
      </span>
    </button>
  )
}

DownloadButton.propTypes = {
  // Content
  text: PropTypes.string.isRequired,
  downloadingText: PropTypes.string,
  successText: PropTypes.string,
  
  // State
  isDownloading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  disabled: PropTypes.bool,
  
  // Handler
  onClick: PropTypes.func.isRequired,
  
  // Styling
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.string
}

export default DownloadButton

