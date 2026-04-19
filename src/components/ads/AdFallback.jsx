/**
 * AdFallback Component
 * Displays internal tool promotions when ads are not available
 */

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import { getActiveTools } from '../../data/tools'
import ToolCard from '../ToolCard'
import './AdFallback.css'

const AdFallback = ({ type = 'tools', count = 3, excludeCategory = null }) => {
  const { language } = useLanguage()

  // Get random active tools
  const promotedTools = useMemo(() => {
    // Get only active tools
    let availableTools = getActiveTools()
    
    // Exclude current category if specified
    if (excludeCategory) {
      availableTools = availableTools.filter(tool => tool.category !== excludeCategory)
    }
    
    // Shuffle and take requested count
    const shuffled = availableTools.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }, [count, excludeCategory])

  // Single tool card fallback
  if (type === 'tool-card' && promotedTools.length > 0) {
    const tool = promotedTools[0]
    return (
      <div className="ad-fallback ad-fallback-single">
        <span className="ad-fallback-label">
          {language === 'hi' ? 'सुझाया गया' : 'Recommended'}
        </span>
        <ToolCard
          icon={tool.icon}
          name={tool.name[language] || tool.name.en}
          description={tool.description[language] || tool.description.en}
          onClick={() => window.location.href = tool.route}
        />
      </div>
    )
  }

  // Multiple tools fallback
  if (type === 'tools' && promotedTools.length > 0) {
    return (
      <div className="ad-fallback ad-fallback-multiple">
        <div className="ad-fallback-header">
          <h3 className="ad-fallback-title">
            {language === 'hi' ? 'ये टूल्स भी आज़माएं' : 'Try These Tools'}
          </h3>
        </div>
        <div className="ad-fallback-grid">
          {promotedTools.map((tool) => (
            <ToolCard
              key={tool.id}
              icon={tool.icon}
              name={tool.name[language] || tool.name.en}
              description={tool.description[language] || tool.description.en}
              onClick={() => window.location.href = tool.route}
            />
          ))}
        </div>
      </div>
    )
  }

  // Empty fallback (should not happen)
  return null
}

AdFallback.propTypes = {
  type: PropTypes.oneOf(['tool-card', 'tools']),
  count: PropTypes.number,
  excludeCategory: PropTypes.string
}

export default AdFallback

