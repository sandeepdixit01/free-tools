import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import LanguageToggle from './LanguageToggle/LanguageToggle'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = (key) => translations[language][key]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <a href="/">🛠️ FreeTools</a>
          </div>
          
          <button
            className="header-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="/" className="nav-link">{t('home')}</a>
            <a href="/tools" className="nav-link">{t('allTools')}</a>
            <div className="nav-dropdown">
              <button className="nav-link dropdown-toggle">
                {t('categories')}
                <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <a href="/tools/pdf" className="dropdown-item">PDF Tools</a>
                <a href="/tools/image" className="dropdown-item">Image Tools</a>
                <a href="/tools/text" className="dropdown-item">Text Tools</a>
                <a href="/tools/developer" className="dropdown-item">Developer Tools</a>
              </div>
            </div>
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

