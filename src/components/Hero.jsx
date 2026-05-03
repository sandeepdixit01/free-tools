import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../contexts/LanguageContext'
import './Hero.css'

const Hero = ({ config, quickAccessTools = [] }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { language } = useLanguage()

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
  }

  // Get content from config
  const content = config?.[language] || config?.en || {}
  const title = content.title || 'Welcome'
  const subtitle = content.subtitle || ''
  const searchPlaceholder = content.searchPlaceholder || 'Search tools...'
  const popularLabel = content.popularLabel || 'Popular'

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <form className="hero-search" onSubmit={handleSearch}>
            <input
              type="text"
              className="hero-search-input"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tools"
            />
            <button type="submit" className="hero-search-button">
              🔍
            </button>
          </form>

          {quickAccessTools.length > 0 && (
            <div className="hero-quick-access">
              <span className="quick-access-label">{popularLabel}:</span>
              {quickAccessTools.map((tool, index) => (
                <a key={tool.id || index} href={tool.route} className="quick-access-link">
                  {tool.name[language] || tool.name.en}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  config: PropTypes.object.isRequired,
  quickAccessTools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.object.isRequired,
      route: PropTypes.string.isRequired
    })
  )
}

export default Hero

