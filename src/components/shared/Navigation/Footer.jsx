/**
 * Footer Component
 * Global footer with DesiTechLabs branding and links
 * Appears on all pages
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      tagline: 'Building useful things for the internet',
      madeIn: 'Made in India',
      trustLine: 'All tools run in your browser. No data is uploaded.',
      toolsLabel: 'Tools',
      links: {
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy Policy'
      },
      categories: {
        pdf: 'PDF Tools',
        image: 'Image Tools',
        text: 'Text Tools',
        developer: 'Developer Tools'
      }
    },
    hi: {
      tagline: 'इंटरनेट के लिए उपयोगी चीजें बनाना',
      madeIn: 'भारत में निर्मित',
      trustLine: 'सभी टूल्स आपके ब्राउज़र में चलते हैं। कोई डेटा अपलोड नहीं होता।',
      toolsLabel: 'टूल्स',
      links: {
        about: 'हमारे बारे में',
        contact: 'संपर्क करें',
        privacy: 'गोपनीयता नीति'
      },
      categories: {
        pdf: 'PDF टूल्स',
        image: 'इमेज टूल्स',
        text: 'टेक्स्ट टूल्स',
        developer: 'डेवलपर टूल्स'
      }
    }
  };

  const t = content[language] || content.en;

  return (
    <footer className="global-footer">
      <div className="footer-container">
        {/* Top Section: Brand + Links */}
        <div className="footer-top">
          {/* Brand Section - Left */}
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img 
                src="/favicon-96x96.png" 
                alt="DesiTechLabs" 
                className="footer-logo-image"
              />
              <span className="footer-brand-name">DesiTechLabs</span>
            </div>
            <p className="footer-tagline">{t.tagline}</p>
          </div>

          {/* Company Links - Right */}
          <nav className="footer-links" aria-label="Company links">
            <Link to="/about" className="footer-link">
              {t.links.about}
            </Link>
            <Link to="/contact" className="footer-link">
              {t.links.contact}
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              {t.links.privacy}
            </Link>
          </nav>
        </div>

        {/* Tools Section - Full Width */}
        <div className="footer-tools">
          <h4 className="footer-section-title">{t.toolsLabel}</h4>
          <nav className="footer-tools-grid" aria-label="Tool categories">
            <Link to="/tools/pdf" className="footer-tool-link">
              {t.categories.pdf}
            </Link>
            <Link to="/tools/image" className="footer-tool-link">
              {t.categories.image}
            </Link>
            <Link to="/tools/text" className="footer-tool-link">
              {t.categories.text}
            </Link>
            <Link to="/tools/developer" className="footer-tool-link">
              {t.categories.developer}
            </Link>
          </nav>
        </div>

        {/* Trust Line */}
        <div className="footer-trust">
          <p className="footer-trust-text">
            🔒 {t.trustLine}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} DesiTechLabs
          </p>
          <p className="footer-made-in">
            {t.madeIn} 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

