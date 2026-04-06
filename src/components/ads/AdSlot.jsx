/**
 * AdSlot Component (Refactored)
 * Position-based ad system with automatic fallback
 * 
 * FEATURES:
 * - Position-based configuration
 * - Google AdSense ready
 * - Automatic fallback to tool promotions
 * - No empty ad spaces
 * - Centralized logic
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { AD_POSITIONS, getAdConfig, isAdSenseAvailable } from '../../configs/adPositions'
import AdFallback from './AdFallback'
import './AdSlot.css'

const AdSlot = ({
  position,
  excludeCategory = null,
  forceFallback = false  // For testing fallback
}) => {
  const [showFallback, setShowFallback] = useState(false)
  const adConfig = getAdConfig(position)

  useEffect(() => {
    // Check if AdSense is available
    const adsenseAvailable = !forceFallback && isAdSenseAvailable()
    
    if (!adsenseAvailable) {
      setShowFallback(true)
      return
    }

    // TODO: Initialize AdSense here when ready
    // For now, always show fallback
    setShowFallback(true)
  }, [position, forceFallback])

  // Render fallback (tool promotions)
  if (showFallback) {
    return (
      <div className={`ad-slot-wrapper ad-slot-position-${position}`}>
        <AdFallback
          type={adConfig.fallbackType}
          count={adConfig.fallbackCount}
          excludeCategory={excludeCategory}
        />
      </div>
    )
  }

  // Render AdSense placeholder (future)
  return (
    <div className={`ad-slot-wrapper ad-slot-position-${position}`}>
      <div className="ad-slot-adsense" data-ad-position={position}>
        {/* Google AdSense will be injected here */}
        <div className="ad-slot-loading">Loading ad...</div>
      </div>
    </div>
  )
}

AdSlot.propTypes = {
  position: PropTypes.oneOf(Object.values(AD_POSITIONS)).isRequired,
  excludeCategory: PropTypes.string,
  forceFallback: PropTypes.bool
}

export default AdSlot

