/**
 * ToolHero Component
 * Reusable hero section for tool pages
 * Displays title, subtitle, benefits, and privacy notice
 */

import React from 'react'
import PropTypes from 'prop-types'
import './ToolHero.css'

const ToolHero = ({
  // Content
  title,
  subtitle,
  benefits = [],
  privacyNotice = null,
  
  // Optional CTA
  ctaText = null,
  onCtaClick = null,
  
  // Styling
  backgroundColor = null,
  textColor = null,
  className = '',
  
  // Layout
  centered = true,
  maxWidth = '900px'
}) => {
  return (
    <div 
      className={`tool-hero ${centered ? 'tool-hero-centered' : ''} ${className}`}
      style={{
        backgroundColor,
        color: textColor
      }}
    >
      <div className="tool-hero-container" style={{ maxWidth }}>
        {/* Title */}
        {title && (
          <h1 className="tool-hero-title">{title}</h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="tool-hero-subtitle">{subtitle}</p>
        )}

        {/* Benefits */}
        {benefits.length > 0 && (
          <div className="tool-hero-benefits">
            {benefits.map((benefit, index) => (
              <span key={index} className="tool-hero-benefit">
                {benefit.icon && <span className="benefit-icon">{benefit.icon}</span>}
                <span className="benefit-text">{benefit.text}</span>
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {ctaText && onCtaClick && (
          <button 
            className="tool-hero-cta"
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        )}

        {/* Privacy Notice */}
        {privacyNotice && (
          <div className="tool-hero-privacy">
            🔒 {privacyNotice}
          </div>
        )}
      </div>
    </div>
  )
}

ToolHero.propTypes = {
  // Content
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string.isRequired
    })
  ),
  privacyNotice: PropTypes.string,
  
  // CTA
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  
  // Styling
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  
  // Layout
  centered: PropTypes.bool,
  maxWidth: PropTypes.string
}

export default ToolHero

