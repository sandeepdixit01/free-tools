import React from 'react'
import './AdSlot.css'

const AdSlot = ({
  height = '90px',
  type = 'banner',
  placeholderContent = 'Advertisement',
  placeholderImage = null,
  showLabel = true,
  // Native tool card props
  toolIcon = '🖼️',
  toolName = 'Resize Image',
  toolDescription = 'Resize images instantly without losing quality',
  toolFeatures = ['⚡ Instant', '🔒 Secure', '🆓 Free'],
  toolCTA = 'Open Tool →',
  toolLink = '#'
}) => {
  // Banner style (image-based)
  if (type === 'banner') {
    return (
      <div className={`ad-slot ad-slot-${type}`}>
        {showLabel && <span className="ad-label">Sponsored</span>}
        <div className="ad-content">
          {placeholderImage ? (
            <img
              src={placeholderImage}
              alt="Advertisement"
              className="ad-image"
              loading="lazy"
            />
          ) : (
            placeholderContent
          )}
        </div>
      </div>
    )
  }

  // Native tool card style (for rectangle/square ads)
  return (
    <div
      className={`ad-slot ad-slot-${type} ad-slot-native`}
      onClick={() => window.location.href = toolLink}
      role="button"
      tabIndex={0}
    >
      {showLabel && <span className="ad-label-native">Sponsored</span>}
      <div className="ad-tool-icon">{toolIcon}</div>
      <h3 className="ad-tool-name">{toolName}</h3>
      <p className="ad-tool-description">{toolDescription}</p>
      <div className="ad-tool-features">
        {toolFeatures.map((feature, index) => (
          <span key={index} className="ad-tool-feature">{feature}</span>
        ))}
      </div>
      <div className="ad-tool-cta">{toolCTA}</div>
    </div>
  )
}

export default AdSlot

