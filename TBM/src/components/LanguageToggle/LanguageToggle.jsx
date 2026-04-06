import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
        English
      </span>
      <span className="lang-separator">|</span>
      <span className={`lang-option ${language === 'hi' ? 'active' : ''}`}>
        हिंदी
      </span>
    </button>
  )
}

export default LanguageToggle

