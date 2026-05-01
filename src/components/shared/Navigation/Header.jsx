/**
 * Header Component
 * Global header with DesiTechLabs branding
 * Appears on all pages
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations/translations';
import LanguageToggle from '../../LanguageToggle/LanguageToggle';
import './Header.css';

const Header = () => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  
  const t = (key) => translations[language][key];

  return (
    <header className="global-header">
      <div className="header-container">
        <Link to="/" className="header-logo-link" aria-label="DesiTechLabs Home">
          <img 
            src="/favicon-96x96.png" 
            alt="DesiTechLabs Logo" 
            className="header-logo-image"
          />
          <span className="header-brand-name">DesiTechLabs</span>
        </Link>

        <button
          className="header-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/tools" className="nav-link">{t('allTools')}</Link>
          
          <div className="nav-dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              {t('categories')}
              <span className="dropdown-arrow">▾</span>
            </button>
            <div className={`dropdown-menu ${isCategoriesOpen ? 'open' : ''}`}>
              <Link to="/tools/pdf" className="dropdown-item">PDF Tools</Link>
              <Link to="/tools/image" className="dropdown-item">Image Tools</Link>
              <Link to="/tools/text" className="dropdown-item">Text Tools</Link>
              <Link to="/tools/developer" className="dropdown-item">Developer Tools</Link>
            </div>
          </div>
          
          <div className="header-language">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// Made with Bob
