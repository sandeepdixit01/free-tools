import React from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../contexts/LanguageContext'
import './WhyUseOurTools.css'

const WhyUseOurTools = ({ config }) => {
  const { language } = useLanguage()

  // Get content from config
  const content = config?.[language] || config?.en || {}
  const title = content.title || 'Why Use Our Tools'
  const features = content.features || []

  if (features.length === 0) {
    return null
  }

  return (
    <section className="why-use-section">
      <div className="container">
        <h2 className="why-use-title">{title}</h2>
        <div className="why-use-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-use-card">
              <div className="why-use-icon">{feature.icon}</div>
              <h3 className="why-use-card-title">{feature.title}</h3>
              <p className="why-use-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

WhyUseOurTools.propTypes = {
  config: PropTypes.object.isRequired
}

export default WhyUseOurTools

