/**
 * FAQ Component
 * Reusable FAQ section with collapsible items
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './FAQ.css'

const FAQ = ({
  // Content
  title,
  subtitle = null,
  items = [],
  
  // Behavior
  allowMultiple = false, // Allow multiple items open at once
  defaultOpen = null, // Index of default open item
  
  // Styling
  className = '',
  maxWidth = '900px'
}) => {
  const [openItems, setOpenItems] = useState(
    defaultOpen !== null ? [defaultOpen] : []
  )

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      )
    }
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={`faq-component ${className}`}>
      <div className="faq-container" style={{ maxWidth }}>
        {/* Header */}
        {(title || subtitle) && (
          <div className="faq-header">
            {title && <h2 className="faq-title">{title}</h2>}
            {subtitle && <p className="faq-subtitle">{subtitle}</p>}
          </div>
        )}

        {/* FAQ Items */}
        <div className="faq-list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openItems.includes(index) ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className="question-text">{item.question}</span>
                <span className="question-icon">
                  {openItems.includes(index) ? '−' : '+'}
                </span>
              </button>

              {openItems.includes(index) && (
                <div className="faq-answer">
                  {typeof item.answer === 'string' ? (
                    <p>{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

FAQ.propTypes = {
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
      ]).isRequired
    })
  ).isRequired,
  
  // Behavior
  allowMultiple: PropTypes.bool,
  defaultOpen: PropTypes.number,
  
  // Styling
  className: PropTypes.string,
  maxWidth: PropTypes.string
}

export default FAQ

