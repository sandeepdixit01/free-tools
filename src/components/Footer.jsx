import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">🛠️ FreeTools</div>
            <p className="footer-tagline">
              Fast, simple, and free online tools
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Tools</h4>
              <a href="/tools/pdf" className="footer-link">PDF Tools</a>
              <a href="/tools/image" className="footer-link">Image Tools</a>
              <a href="/tools/text" className="footer-link">Text Tools</a>
              <a href="/tools/developer" className="footer-link">Developer Tools</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <a href="/about" className="footer-link">About</a>
              <a href="/contact" className="footer-link">Contact</a>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} FreeTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

