/**
 * Contact Page
 * Contact form with EmailJS integration
 */

import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import { useCanonicalUrl } from '../hooks/useCanonicalUrl'
import SEOHead from '../components/SEO/SEOHead'
import CategoryBreadcrumb from '../components/shared/Navigation/CategoryBreadcrumb'
import './ContactPage.css'

const ContactPage = () => {
  const { language } = useLanguage()
  const canonical = useCanonicalUrl()
  
  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: ''
  })

  const content = {
    en: {
      title: 'Contact Us - DesiTechLabs',
      description: 'Get in touch with DesiTechLabs. Send us your questions, suggestions, or feedback about our online tools.',
      h1: 'Contact Us',
      subtitle: 'Get in touch with DesiTechLabs',
      
      intro: 'For queries related to DesiTechLabs tools, contact us below. We typically respond within 24-48 hours.',
      
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
        sending: 'Sending...',
        required: 'Required'
      },
      
      success: {
        title: '✅ Message Sent Successfully!',
        message: 'Thank you for contacting us. We\'ll get back to you within 24-48 hours.',
        button: 'Send Another Message'
      },
      
      error: {
        title: '❌ Failed to Send Message',
        message: 'Something went wrong. Please try again or email us directly.',
        button: 'Try Again'
      },
      
      fallback: 'If the form does not work, email us directly at',
      
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
      title: 'संपर्क करें - DesiTechLabs',
      description: 'DesiTechLabs से संपर्क करें। हमारे ऑनलाइन टूल्स के बारे में अपने सवाल, सुझाव या फीडबैक भेजें।',
      h1: 'संपर्क करें',
      subtitle: 'DesiTechLabs से संपर्क करें',
      
      intro: 'DesiTechLabs टूल्स से संबंधित प्रश्नों के लिए, नीचे हमसे संपर्क करें। हम आमतौर पर 24-48 घंटों के भीतर जवाब देते हैं।',
      
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
        sending: 'भेजा जा रहा है...',
        required: 'आवश्यक'
      },
      
      success: {
        title: '✅ संदेश सफलतापूर्वक भेजा गया!',
        message: 'हमसे संपर्क करने के लिए धन्यवाद। हम 24-48 घंटों के भीतर आपसे संपर्क करेंगे।',
        button: 'एक और संदेश भेजें'
      },
      
      error: {
        title: '❌ संदेश भेजने में विफल',
        message: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें या हमें सीधे ईमेल करें।',
        button: 'पुनः प्रयास करें'
      },
      
      fallback: 'यदि फॉर्म काम नहीं करता है, तो हमें सीधे ईमेल करें',
      
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
    // Clear error when user starts typing
    if (status.error) {
      setStatus({ ...status, error: false, errorMessage: '' })
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) return false
    if (!formData.email.trim()) return false
    if (!formData.subject.trim()) return false
    if (!formData.message.trim()) return false
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return false
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: 'Please fill in all fields correctly.'
      })
      return
    }

    // Set submitting state
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      errorMessage: ''
    })

    try {
      // Send email using EmailJS
      // Note: Variable names must match your EmailJS template
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: 'DesiTechLabs',
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          subject: formData.subject
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      // Set success state
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        errorMessage: ''
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send error:', error)
      
      // Set error state
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        errorMessage: error.text || 'Failed to send message'
      })
    }
  }

  const handleReset = () => {
    setStatus({
      submitting: false,
      submitted: false,
      error: false,
      errorMessage: ''
    })
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
        canonical={canonical}
      />

      <div className="contact-page">
        {/* Breadcrumb Navigation */}
        <div className="container">
          <CategoryBreadcrumb categoryName={language === 'hi' ? 'संपर्क करें' : 'Contact'} />
        </div>

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
                
                {status.submitted ? (
                  <div className="success-message">
                    <h3 className="success-title">{t.success.title}</h3>
                    <p className="success-text">{t.success.message}</p>
                    <button onClick={handleReset} className="reset-button">
                      {t.success.button}
                    </button>
                  </div>
                ) : status.error ? (
                  <div className="error-message">
                    <h3 className="error-title">{t.error.title}</h3>
                    <p className="error-text">{t.error.message}</p>
                    <button onClick={handleReset} className="reset-button">
                      {t.error.button}
                    </button>
                  </div>
                ) : (
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
                        disabled={status.submitting}
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
                        disabled={status.submitting}
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
                        disabled={status.submitting}
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
                        disabled={status.submitting}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={status.submitting}
                    >
                      {status.submitting ? t.form.sending : t.form.submit}
                    </button>
                    
                    {/* Fallback */}
                    <p className="form-fallback">
                      {t.fallback}{' '}
                      <a href="mailto:developernewai@gmail.com" className="fallback-link">
                        developernewai@gmail.com
                      </a>
                    </p>
                  </form>
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

