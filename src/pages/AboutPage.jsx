/**
 * About Page
 * Information about FreeTools and our privacy-first approach
 */

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SEOHead from '../components/SEO/SEOHead'
import './AboutPage.css'

const AboutPage = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'About FreeTools - Privacy-First Online Tools',
      description: 'Learn about FreeTools - free online tools that process files locally in your browser. No uploads, no storage, complete privacy.',
      h1: 'About FreeTools',
      subtitle: 'Free, Fast, and Privacy-First Online Tools',
      
      intro: 'FreeTools provides a comprehensive suite of free online tools for everyday tasks. Whether you need to resize images, merge PDFs, count words, or format JSON, we have the perfect tool for you.',
      
      mission: {
        title: 'Our Mission',
        content: 'To provide fast, reliable, and completely free online tools that respect your privacy. We believe powerful tools should be accessible to everyone without compromising security or requiring registration.'
      },
      
      secure: {
        title: 'Secure & Private by Design',
        subtitle: 'Your files never leave your device',
        points: [
          {
            icon: '🔒',
            title: '100% Local Processing',
            description: 'All file processing happens entirely in your browser using JavaScript. Your files are never uploaded to any server.'
          },
          {
            icon: '🚫',
            title: 'No File Storage',
            description: 'We don\'t store, save, or have access to your files. Once you close the browser, everything is gone.'
          },
          {
            icon: '⚡',
            title: 'Instant Results',
            description: 'Since processing happens locally, you get instant results without waiting for server uploads or downloads.'
          },
          {
            icon: '🌐',
            title: 'Works Offline',
            description: 'Once the page loads, most tools work even without an internet connection.'
          }
        ]
      },
      
      features: {
        title: 'Why Choose FreeTools?',
        list: [
          {
            title: 'Completely Free',
            description: 'No hidden fees, no premium plans, no watermarks. All tools are 100% free forever.'
          },
          {
            title: 'No Registration Required',
            description: 'Start using any tool immediately. No sign-up, no email required.'
          },
          {
            title: 'Mobile Friendly',
            description: 'All tools work perfectly on smartphones, tablets, and desktops.'
          },
          {
            title: 'Regular Updates',
            description: 'We continuously add new tools and improve existing ones based on user feedback.'
          }
        ]
      },
      
      tools: {
        title: 'Our Tools',
        categories: [
          {
            name: 'Image Tools',
            description: 'Resize, compress, crop, and convert images to exact dimensions or file sizes.'
          },
          {
            name: 'PDF Tools',
            description: 'Merge, split, compress PDFs and convert images to PDF format.'
          },
          {
            name: 'Text Tools',
            description: 'Count words, convert text case, format text, and analyze content.'
          },
          {
            name: 'Developer Tools',
            description: 'Format JSON, encode Base64, and other utilities for developers.'
          }
        ]
      },
      
      contact: {
        title: 'Get in Touch',
        description: 'Have questions or suggestions? We\'d love to hear from you.',
        email: 'developernewai@gmail.com',
        location: 'Based in India 🇮🇳'
      }
    },
    hi: {
      title: 'FreeTools के बारे में - प्राइवेसी-फर्स्ट ऑनलाइन टूल्स',
      description: 'FreeTools के बारे में जानें - फ्री ऑनलाइन टूल्स जो आपके ब्राउज़र में लोकली फाइलें प्रोसेस करते हैं। कोई अपलोड नहीं, कोई स्टोरेज नहीं, पूरी प्राइवेसी।',
      h1: 'FreeTools के बारे में',
      subtitle: 'फ्री, तेज़ और प्राइवेसी-फर्स्ट ऑनलाइन टूल्स',
      
      intro: 'FreeTools रोज़मर्रा के कामों के लिए फ्री ऑनलाइन टूल्स का एक कॉम्प्रिहेंसिव सूट प्रदान करता है। चाहे आपको इमेज रीसाइज़ करनी हो, PDF मर्ज करने हों, शब्द गिनने हों, या JSON फॉर्मेट करना हो, हमारे पास आपके लिए परफेक्ट टूल है।',
      
      mission: {
        title: 'हमारा मिशन',
        content: 'तेज़, विश्वसनीय और पूरी तरह से फ्री ऑनलाइन टूल्स प्रदान करना जो आपकी प्राइवेसी का सम्मान करते हैं। हम मानते हैं कि पावरफुल टूल्स सभी के लिए सुलभ होने चाहिए बिना सिक्योरिटी से समझौता किए या रजिस्ट्रेशन की आवश्यकता के।'
      },
      
      secure: {
        title: 'डिज़ाइन से सुरक्षित और प्राइवेट',
        subtitle: 'आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जातीं',
        points: [
          {
            icon: '🔒',
            title: '100% लोकल प्रोसेसिंग',
            description: 'सभी फाइल प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript का उपयोग करके होती है। आपकी फाइलें कभी किसी सर्वर पर अपलोड नहीं होतीं।'
          },
          {
            icon: '🚫',
            title: 'कोई फाइल स्टोरेज नहीं',
            description: 'हम आपकी फाइलों को स्टोर, सेव या एक्सेस नहीं करते। एक बार जब आप ब्राउज़र बंद करते हैं, सब कुछ चला जाता है।'
          },
          {
            icon: '⚡',
            title: 'तुरंत रिज़ल्ट',
            description: 'चूंकि प्रोसेसिंग लोकली होती है, आपको सर्वर अपलोड या डाउनलोड के इंतज़ार के बिना तुरंत रिज़ल्ट मिलते हैं।'
          },
          {
            icon: '🌐',
            title: 'ऑफलाइन काम करता है',
            description: 'एक बार पेज लोड होने के बाद, ज़्यादातर टूल्स बिना इंटरनेट कनेक्शन के भी काम करते हैं।'
          }
        ]
      },
      
      features: {
        title: 'FreeTools क्यों चुनें?',
        list: [
          {
            title: 'पूरी तरह फ्री',
            description: 'कोई हिडन फीस नहीं, कोई प्रीमियम प्लान नहीं, कोई वॉटरमार्क नहीं। सभी टूल्स हमेशा के लिए 100% फ्री हैं।'
          },
          {
            title: 'रजिस्ट्रेशन की ज़रूरत नहीं',
            description: 'किसी भी टूल का तुरंत इस्तेमाल शुरू करें। कोई साइन-अप नहीं, कोई ईमेल की ज़रूरत नहीं।'
          },
          {
            title: 'मोबाइल फ्रेंडली',
            description: 'सभी टूल्स स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करते हैं।'
          },
          {
            title: 'नियमित अपडेट',
            description: 'हम यूज़र फीडबैक के आधार पर लगातार नए टूल्स जोड़ते हैं और मौजूदा टूल्स को बेहतर बनाते हैं।'
          }
        ]
      },
      
      tools: {
        title: 'हमारे टूल्स',
        categories: [
          {
            name: 'इमेज टूल्स',
            description: 'इमेज को एक्ज़ैक्ट डाइमेंशन या फाइल साइज़ में रीसाइज़, कंप्रेस, क्रॉप और कन्वर्ट करें।'
          },
          {
            name: 'PDF टूल्स',
            description: 'PDF मर्ज, स्प्लिट, कंप्रेस करें और इमेज को PDF फॉर्मेट में कन्वर्ट करें।'
          },
          {
            name: 'टेक्स्ट टूल्स',
            description: 'शब्द गिनें, टेक्स्ट केस कन्वर्ट करें, टेक्स्ट फॉर्मेट करें और कंटेंट एनालाइज़ करें।'
          },
          {
            name: 'डेवलपर टूल्स',
            description: 'JSON फॉर्मेट करें, Base64 एनकोड करें और डेवलपर्स के लिए अन्य यूटिलिटीज़।'
          }
        ]
      },
      
      contact: {
        title: 'संपर्क करें',
        description: 'सवाल या सुझाव हैं? हम आपसे सुनना पसंद करेंगे।',
        email: 'developernewai@gmail.com',
        location: 'भारत में स्थित 🇮🇳'
      }
    }
  }

  const t = content[language]

  return (
    <>
      <SEOHead
        title={t.title}
        description={t.description}
        canonical="https://free-tools-nine-delta.vercel.app/about"
      />

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="about-h1">{t.h1}</h1>
            <p className="about-subtitle">{t.subtitle}</p>
          </div>
        </section>

        {/* Intro */}
        <section className="about-section">
          <div className="container">
            <p className="about-intro">{t.intro}</p>
          </div>
        </section>

        {/* Secure & Private Section */}
        <section className="about-section secure-section">
          <div className="container">
            <h2 className="section-title">{t.secure.title}</h2>
            <p className="section-subtitle">{t.secure.subtitle}</p>
            
            <div className="secure-grid">
              {t.secure.points.map((point, index) => (
                <div key={index} className="secure-card">
                  <div className="secure-icon">{point.icon}</div>
                  <h3 className="secure-card-title">{point.title}</h3>
                  <p className="secure-card-description">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="about-section">
          <div className="container">
            <h2 className="section-title">{t.mission.title}</h2>
            <p className="mission-content">{t.mission.content}</p>
          </div>
        </section>

        {/* Features */}
        <section className="about-section features-section">
          <div className="container">
            <h2 className="section-title">{t.features.title}</h2>
            <div className="features-grid">
              {t.features.list.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Categories */}
        <section className="about-section">
          <div className="container">
            <h2 className="section-title">{t.tools.title}</h2>
            <div className="tools-categories">
              {t.tools.categories.map((category, index) => (
                <div key={index} className="category-item">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="about-section contact-section">
          <div className="container">
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="contact-description">{t.contact.description}</p>
            <div className="contact-info">
              <p className="contact-email">
                <strong>Email:</strong> <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              </p>
              <p className="contact-location">{t.contact.location}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
