/**
 * AdFallback Component
 * Displays internal tool promotions when ads are not available
 */

import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { getActiveTools, getToolByRoute } from '../../data/tools'
import ToolCard from '../ToolCard'
import './AdFallback.css'

const AdFallback = ({ type = 'tools', count = 3, excludeCategory = null }) => {
  const { language } = useLanguage()
  const location = useLocation()

  // Get related tools (same category, exclude current tool)
  const promotedTools = useMemo(() => {
    // Get current tool from route
    const currentTool = getToolByRoute(location.pathname)
    
    // Get only active tools
    let availableTools = getActiveTools()
    
    // If we have a current tool, show tools from SAME category
    if (currentTool) {
      // Filter to same category, exclude current tool
      availableTools = availableTools.filter(
        tool => tool.category === currentTool.category && tool.id !== currentTool.id
      )
      
      // If not enough same-category tools, add related category tools
      if (availableTools.length < count) {
        const relatedCategories = {
          'developer': ['text'],
          'text': ['developer'],
          'image': ['pdf'],
          'pdf': ['image']
        }
        
        const relatedCategory = relatedCategories[currentTool.category]?.[0]
        if (relatedCategory) {
          const relatedTools = getActiveTools().filter(
            tool => tool.category === relatedCategory && tool.id !== currentTool.id
          )
          availableTools = [...availableTools, ...relatedTools]
        }
      }
    } else if (excludeCategory) {
      // Fallback: exclude specified category (for category pages)
      availableTools = availableTools.filter(tool => tool.category !== excludeCategory)
    }
    
    // Return first N tools (deterministic, no random shuffle)
    return availableTools.slice(0, count)
  }, [count, excludeCategory, location.pathname])

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

