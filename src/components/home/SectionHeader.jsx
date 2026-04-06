/**
 * SectionHeader Component
 * Reusable section header with title and optional subtitle
 * Supports bilingual content
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import './SectionHeader.css'

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
  const { language } = useLanguage()
  
  if (!title) return null

  // Handle bilingual content
  const titleText = typeof title === 'object' ? (title[language] || title.en) : title
  const subtitleText = subtitle && typeof subtitle === 'object' ? (subtitle[language] || subtitle.en) : subtitle

  return (
    <div className={`section-header section-header-${align}`}>
      <h2 className="section-header-title">{titleText}</h2>
      {subtitleText && <p className="section-header-subtitle">{subtitleText}</p>}
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

export default SectionHeader

