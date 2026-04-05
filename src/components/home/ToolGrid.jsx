/**
 * ToolGrid Component
 * Reusable grid for displaying tool cards
 * Accepts tools from registry, no hardcoding
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import ToolCard from '../ToolCard'
import './ToolGrid.css'

const ToolGrid = ({ tools, maxTools }) => {
  const { language } = useLanguage()

  if (!tools || tools.length === 0) {
    return (
      <div className="tool-grid-empty">
        <p>{language === 'hi' ? 'अभी कोई टूल उपलब्ध नहीं है' : 'No tools available yet'}</p>
      </div>
    )
  }

  // Limit tools if maxTools is specified
  const displayTools = maxTools ? tools.slice(0, maxTools) : tools

  return (
    <div className="tool-grid">
      {displayTools.map((tool) => (
        <ToolCard
          key={tool.id}
          icon={tool.icon}
          title={tool.name[language] || tool.name.en}
          description={tool.description[language] || tool.description.en}
          onClick={() => window.location.href = tool.route}
        />
      ))}
    </div>
  )
}

ToolGrid.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.object.isRequired,
      description: PropTypes.object.isRequired,
      route: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,
  maxTools: PropTypes.number
}

export default ToolGrid

