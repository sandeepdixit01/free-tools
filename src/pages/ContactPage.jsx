/**
 * Contact Page
 * Contact form and information
 */

import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SEOHead from '../components/SEO/SEOHead'
import './ContactPage.css'

const ContactPage = () => {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const content = {
    en: {
      title: 'Contact Us - FreeTools',
      description: 'Get in touch with FreeTools. Send us your questions, suggestions, or feedback.',
      h1: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      
      intro: 'Have questions, suggestions, or feedback? Feel free to reach out to us. We typically respond within 24-48 hours.',
      
      form: {
        title: 'Send us a message',
        name: 'Your Name',
        namePlaceholder: 'John Doe',
        email: 'Your Email',
        emailPlaceholder: 'john@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'What is this about?',
        message: 'Message',
        messagePlaceholder: 'Tell us more...',
        submit: 'Send Message',
        required: 'Required'
      },
      
      success: {
        title: '✅ Message Sent!',
        message: 'Thank you for contacting us. We\'ll get back to you soon.',
        button: 'Send Another Message'
      },
      
      info: {
        title: 'Contact Information',
        email: {
          label: 'Email',
          value: 'developernewai@gmail.com'
        },
        location: {
          label: 'Location',
          value: 'India 🇮🇳'
        },
        response: {
          label: 'Response Time',
          value: '24-48 hours'
        }
      },
      
      privacy: {
        title: 'Privacy Note',
        message: 'Your contact information will only be used to respond to your inquiry. We never share your data with third parties.'
      }
    },
    hi: {
      title: 'संपर्क करें - FreeTools',
      description: 'FreeTools से संपर्क करें। हमें अपने सवाल, सुझाव या फीडबैक भेजें।',
      h1: 'संपर्क करें',
      subtitle: 'हम आपसे सुनना पसंद करेंगे',
      
      intro: 'सवाल, सुझाव या फीडबैक हैं? बेझिझक हमसे संपर्क करें। हम आमतौर पर 24-48 घंटों के भीतर जवाब देते हैं।',
      
      form: {
        title: 'हमें संदेश भेजें',
        name: 'आपका नाम',
        namePlaceholder: 'राज कुमार',
        email: 'आपका ईमेल',
        emailPlaceholder: 'raj@example.com',
        subject: 'विषय',
        subjectPlaceholder: 'यह किस बारे में है?',
        message: 'संदेश',
        messagePlaceholder: 'हमें और बताएं...',
        submit: 'संदेश भेजें',
        required: 'आवश्यक'
      },
      
      success: {
        title: '✅ संदेश भेजा गया!',
        message: 'हमसे संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
        button: 'एक और संदेश भेजें'
      },
      
      info: {
        title: 'संपर्क जानकारी',
        email: {
          label: 'ईमेल',
          value: 'developernewai@gmail.com'
        },
        location: {
          label: 'स्थान',
          value: 'भारत 🇮🇳'
        },
        response: {
          label: 'जवाब का समय',
          value: '24-48 घंटे'
        }
      },
      
      privacy: {
        title: 'प्राइवेसी नोट',
        message: 'आपकी संपर्क जानकारी का उपयोग केवल आपकी पूछताछ का जवाब देने के लिए किया जाएगा। हम कभी भी आपका डेटा तीसरे पक्ष के साथ साझा नहीं करते।'
      }
    }
  }

  const t = content[language]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only - just show success message
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <SEOHead
        title={t.title}
        description={t.description}
        canonical="https://free-tools-nine-delta.vercel.app/contact"
      />

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-h1">{t.h1}</h1>
            <p className="contact-subtitle">{t.subtitle}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="contact-content">
          <div className="container">
            <p className="contact-intro">{t.intro}</p>

            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2 className="form-title">{t.form.title}</h2>
                
                {!submitted ? (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">
                        {t.form.name} <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.form.namePlaceholder}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        {t.form.email} <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.form.emailPlaceholder}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">
                        {t.form.subject} <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.form.subjectPlaceholder}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        {t.form.message} <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.form.messagePlaceholder}
                        rows="6"
                        required
                      />
                    </div>

                    <button type="submit" className="submit-button">
                      {t.form.submit}
                    </button>
                  </form>
                ) : (
                  <div className="success-message">
                    <h3 className="success-title">{t.success.title}</h3>
                    <p className="success-text">{t.success.message}</p>
                    <button onClick={handleReset} className="reset-button">
                      {t.success.button}
                    </button>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="contact-info-section">
                <h2 className="info-title">{t.info.title}</h2>
                
                <div className="info-card">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h3 className="info-label">{t.info.email.label}</h3>
                      <a href={`mailto:${t.info.email.value}`} className="info-value">
                        {t.info.email.value}
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h3 className="info-label">{t.info.location.label}</h3>
                      <p className="info-value">{t.info.location.value}</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">⏱️</div>
                    <div className="info-content">
                      <h3 className="info-label">{t.info.response.label}</h3>
                      <p className="info-value">{t.info.response.value}</p>
                    </div>
                  </div>
                </div>

                {/* Privacy Note */}
                <div className="privacy-note">
                  <h3 className="privacy-title">{t.privacy.title}</h3>
                  <p className="privacy-message">{t.privacy.message}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage

// Made with Bob
