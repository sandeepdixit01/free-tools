/**
 * Privacy Policy Page
 * Privacy policy with emphasis on local processing
 */

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SEOHead from '../components/SEO/SEOHead'
import './PrivacyPolicyPage.css'

const PrivacyPolicyPage = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Privacy Policy - FreeTools',
      description: 'FreeTools Privacy Policy. Your files are processed locally in your browser. No uploads, no storage, complete privacy.',
      h1: 'Privacy Policy',
      lastUpdated: 'Last Updated: April 7, 2026',
      
      intro: 'At FreeTools, your privacy is our top priority. This privacy policy explains how we handle your data and protect your privacy.',
      
      highlight: {
        title: '🔒 Your Files Are 100% Private',
        points: [
          'All file processing happens locally in your browser',
          'Your files are NEVER uploaded to our servers',
          'We do NOT store, save, or have access to your files',
          'Once you close the browser, everything is gone'
        ]
      },
      
      sections: [
        {
          title: '1. Information We Collect',
          content: [
            {
              subtitle: '1.1 Files You Process',
              text: 'When you use our tools (image resizer, PDF merger, etc.), all file processing happens entirely in your browser using JavaScript. Your files never leave your device and are never uploaded to any server.'
            },
            {
              subtitle: '1.2 Analytics Data',
              text: 'We may use analytics services (like Google Analytics) to understand how visitors use our website. This includes:'
            },
            {
              list: [
                'Pages visited',
                'Time spent on site',
                'Browser type and version',
                'Device type (mobile, desktop, tablet)',
                'General location (country/city level)',
                'Referral source'
              ]
            },
            {
              text: 'This data is anonymous and does not include any personal information or file content.'
            }
          ]
        },
        {
          title: '2. How We Use Your Information',
          content: [
            {
              text: 'We use the collected information to:'
            },
            {
              list: [
                'Improve our website and tools',
                'Understand user behavior and preferences',
                'Fix bugs and technical issues',
                'Analyze which tools are most popular',
                'Make informed decisions about new features'
              ]
            }
          ]
        },
        {
          title: '3. Cookies',
          content: [
            {
              text: 'We use cookies for:'
            },
            {
              list: [
                'Remembering your language preference (English/Hindi)',
                'Analytics tracking (if you consent)',
                'Improving user experience'
              ]
            },
            {
              text: 'You can disable cookies in your browser settings, but some features may not work properly.'
            }
          ]
        },
        {
          title: '4. Third-Party Services',
          content: [
            {
              subtitle: '4.1 Analytics',
              text: 'We may use Google Analytics or similar services to track website usage. These services have their own privacy policies.'
            },
            {
              subtitle: '4.2 Advertising (Future)',
              text: 'We may display advertisements from third-party networks (like Google AdSense) in the future. These networks may use cookies to show relevant ads. You can opt out of personalized advertising through your browser settings or ad network preferences.'
            }
          ]
        },
        {
          title: '5. Data Security',
          content: [
            {
              text: 'Since all file processing happens locally in your browser:'
            },
            {
              list: [
                'Your files never travel over the internet',
                'We cannot access your files',
                'No one can intercept your files',
                'Your data is as secure as your own device'
              ]
            },
            {
              text: 'For analytics data, we use industry-standard security measures to protect information.'
            }
          ]
        },
        {
          title: '6. Your Rights',
          content: [
            {
              text: 'You have the right to:'
            },
            {
              list: [
                'Use our tools without providing any personal information',
                'Disable cookies in your browser',
                'Opt out of analytics tracking',
                'Contact us with privacy concerns'
              ]
            }
          ]
        },
        {
          title: '7. Children\'s Privacy',
          content: [
            {
              text: 'Our services are available to users of all ages. Since we don\'t collect personal information or store files, there are no special privacy concerns for children. However, we recommend parental supervision for young users.'
            }
          ]
        },
        {
          title: '8. Changes to This Policy',
          content: [
            {
              text: 'We may update this privacy policy from time to time. The "Last Updated" date at the top will reflect any changes. Continued use of our services after changes constitutes acceptance of the updated policy.'
            }
          ]
        },
        {
          title: '9. Contact Us',
          content: [
            {
              text: 'If you have questions about this privacy policy, please contact us at:'
            },
            {
              text: 'Email: developernewai@gmail.com'
            },
            {
              text: 'Location: India'
            }
          ]
        }
      ],
      
      summary: {
        title: 'Summary',
        text: 'FreeTools is designed with privacy at its core. Your files are processed locally in your browser and never uploaded to our servers. We only collect anonymous analytics data to improve our services. You can use all our tools without providing any personal information.'
      }
    },
    hi: {
      title: 'प्राइवेसी पॉलिसी - FreeTools',
      description: 'FreeTools प्राइवेसी पॉलिसी। आपकी फाइलें आपके ब्राउज़र में लोकली प्रोसेस होती हैं। कोई अपलोड नहीं, कोई स्टोरेज नहीं, पूरी प्राइवेसी।',
      h1: 'प्राइवेसी पॉलिसी',
      lastUpdated: 'अंतिम अपडेट: 7 अप्रैल, 2026',
      
      intro: 'FreeTools में, आपकी प्राइवेसी हमारी सर्वोच्च प्राथमिकता है। यह प्राइवेसी पॉलिसी बताती है कि हम आपके डेटा को कैसे हैंडल करते हैं और आपकी प्राइवेसी की रक्षा कैसे करते हैं।',
      
      highlight: {
        title: '🔒 आपकी फाइलें 100% प्राइवेट हैं',
        points: [
          'सभी फाइल प्रोसेसिंग आपके ब्राउज़र में लोकली होती है',
          'आपकी फाइलें कभी हमारे सर्वर पर अपलोड नहीं होतीं',
          'हम आपकी फाइलों को स्टोर, सेव या एक्सेस नहीं करते',
          'एक बार जब आप ब्राउज़र बंद करते हैं, सब कुछ चला जाता है'
        ]
      },
      
      sections: [
        {
          title: '1. हम कौन सी जानकारी एकत्र करते हैं',
          content: [
            {
              subtitle: '1.1 आपके द्वारा प्रोसेस की गई फाइलें',
              text: 'जब आप हमारे टूल्स (इमेज रीसाइज़र, PDF मर्जर, आदि) का उपयोग करते हैं, तो सभी फाइल प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript का उपयोग करके होती है। आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जातीं और कभी किसी सर्वर पर अपलोड नहीं होतीं।'
            },
            {
              subtitle: '1.2 एनालिटिक्स डेटा',
              text: 'हम यह समझने के लिए एनालिटिक्स सर्विसेज़ (जैसे Google Analytics) का उपयोग कर सकते हैं कि विज़िटर हमारी वेबसाइट का उपयोग कैसे करते हैं। इसमें शामिल है:'
            },
            {
              list: [
                'देखे गए पेज',
                'साइट पर बिताया गया समय',
                'ब्राउज़र टाइप और वर्जन',
                'डिवाइस टाइप (मोबाइल, डेस्कटॉप, टैबलेट)',
                'सामान्य स्थान (देश/शहर स्तर)',
                'रेफरल सोर्स'
              ]
            },
            {
              text: 'यह डेटा एनोनिमस है और इसमें कोई व्यक्तिगत जानकारी या फाइल कंटेंट शामिल नहीं है।'
            }
          ]
        },
        {
          title: '2. हम आपकी जानकारी का उपयोग कैसे करते हैं',
          content: [
            {
              text: 'हम एकत्रित जानकारी का उपयोग इसके लिए करते हैं:'
            },
            {
              list: [
                'हमारी वेबसाइट और टूल्स को बेहतर बनाना',
                'यूज़र व्यवहार और प्राथमिकताओं को समझना',
                'बग और तकनीकी समस्याओं को ठीक करना',
                'यह एनालाइज़ करना कि कौन से टूल्स सबसे लोकप्रिय हैं',
                'नई फीचर्स के बारे में सूचित निर्णय लेना'
              ]
            }
          ]
        },
        {
          title: '3. कुकीज़',
          content: [
            {
              text: 'हम कुकीज़ का उपयोग इसके लिए करते हैं:'
            },
            {
              list: [
                'आपकी भाषा प्राथमिकता याद रखना (अंग्रेज़ी/हिंदी)',
                'एनालिटिक्स ट्रैकिंग (यदि आप सहमति देते हैं)',
                'यूज़र एक्सपीरियंस में सुधार'
              ]
            },
            {
              text: 'आप अपनी ब्राउज़र सेटिंग्स में कुकीज़ को डिसेबल कर सकते हैं, लेकिन कुछ फीचर्स ठीक से काम नहीं कर सकते।'
            }
          ]
        },
        {
          title: '4. थर्ड-पार्टी सर्विसेज़',
          content: [
            {
              subtitle: '4.1 एनालिटिक्स',
              text: 'हम वेबसाइट उपयोग को ट्रैक करने के लिए Google Analytics या समान सर्विसेज़ का उपयोग कर सकते हैं। इन सर्विसेज़ की अपनी प्राइवेसी पॉलिसी होती है।'
            },
            {
              subtitle: '4.2 विज्ञापन (भविष्य में)',
              text: 'हम भविष्य में थर्ड-पार्टी नेटवर्क (जैसे Google AdSense) से विज्ञापन प्रदर्शित कर सकते हैं। ये नेटवर्क प्रासंगिक विज्ञापन दिखाने के लिए कुकीज़ का उपयोग कर सकते हैं। आप अपनी ब्राउज़र सेटिंग्स या विज्ञापन नेटवर्क प्राथमिकताओं के माध्यम से व्यक्तिगत विज्ञापन से ऑप्ट आउट कर सकते हैं।'
            }
          ]
        },
        {
          title: '5. डेटा सिक्योरिटी',
          content: [
            {
              text: 'चूंकि सभी फाइल प्रोसेसिंग आपके ब्राउज़र में लोकली होती है:'
            },
            {
              list: [
                'आपकी फाइलें कभी इंटरनेट पर ट्रैवल नहीं करतीं',
                'हम आपकी फाइलों को एक्सेस नहीं कर सकते',
                'कोई भी आपकी फाइलों को इंटरसेप्ट नहीं कर सकता',
                'आपका डेटा आपके अपने डिवाइस जितना सुरक्षित है'
              ]
            },
            {
              text: 'एनालिटिक्स डेटा के लिए, हम जानकारी की सुरक्षा के लिए इंडस्ट्री-स्टैंडर्ड सिक्योरिटी उपायों का उपयोग करते हैं।'
            }
          ]
        },
        {
          title: '6. आपके अधिकार',
          content: [
            {
              text: 'आपको अधिकार है:'
            },
            {
              list: [
                'बिना कोई व्यक्तिगत जानकारी दिए हमारे टूल्स का उपयोग करना',
                'अपने ब्राउज़र में कुकीज़ को डिसेबल करना',
                'एनालिटिक्स ट्रैकिंग से ऑप्ट आउट करना',
                'प्राइवेसी चिंताओं के साथ हमसे संपर्क करना'
              ]
            }
          ]
        },
        {
          title: '7. बच्चों की प्राइवेसी',
          content: [
            {
              text: 'हमारी सर्विसेज़ सभी उम्र के यूज़र्स के लिए उपलब्ध हैं। चूंकि हम व्यक्तिगत जानकारी एकत्र नहीं करते या फाइलें स्टोर नहीं करते, इसलिए बच्चों के लिए कोई विशेष प्राइवेसी चिंता नहीं है। हालांकि, हम युवा यूज़र्स के लिए माता-पिता की निगरानी की सिफारिश करते हैं।'
            }
          ]
        },
        {
          title: '8. इस पॉलिसी में बदलाव',
          content: [
            {
              text: 'हम समय-समय पर इस प्राइवेसी पॉलिसी को अपडेट कर सकते हैं। शीर्ष पर "अंतिम अपडेट" तारीख किसी भी बदलाव को दर्शाएगी। बदलावों के बाद हमारी सर्विसेज़ का निरंतर उपयोग अपडेटेड पॉलिसी की स्वीकृति का गठन करता है।'
            }
          ]
        },
        {
          title: '9. हमसे संपर्क करें',
          content: [
            {
              text: 'यदि आपके पास इस प्राइवेसी पॉलिसी के बारे में सवाल हैं, तो कृपया हमसे संपर्क करें:'
            },
            {
              text: 'ईमेल: developernewai@gmail.com'
            },
            {
              text: 'स्थान: भारत'
            }
          ]
        }
      ],
      
      summary: {
        title: 'सारांश',
        text: 'FreeTools को इसके कोर में प्राइवेसी के साथ डिज़ाइन किया गया है। आपकी फाइलें आपके ब्राउज़र में लोकली प्रोसेस होती हैं और कभी हमारे सर्वर पर अपलोड नहीं होतीं। हम केवल हमारी सर्विसेज़ को बेहतर बनाने के लिए एनोनिमस एनालिटिक्स डेटा एकत्र करते हैं। आप बिना कोई व्यक्तिगत जानकारी दिए हमारे सभी टूल्स का उपयोग कर सकते हैं।'
      }
    }
  }

  const t = content[language]

  return (
    <>
      <SEOHead
        title={t.title}
        description={t.description}
        canonical="https://free-tools-nine-delta.vercel.app/privacy-policy"
      />

      <div className="privacy-page">
        {/* Hero Section */}
        <section className="privacy-hero">
          <div className="container">
            <h1 className="privacy-h1">{t.h1}</h1>
            <p className="privacy-date">{t.lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="privacy-content">
          <div className="container">
            {/* Intro */}
            <p className="privacy-intro">{t.intro}</p>

            {/* Highlight Box */}
            <div className="privacy-highlight">
              <h2 className="highlight-title">{t.highlight.title}</h2>
              <ul className="highlight-list">
                {t.highlight.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="privacy-sections">
              {t.sections.map((section, index) => (
                <div key={index} className="privacy-section">
                  <h2 className="section-title">{section.title}</h2>
                  {section.content.map((item, idx) => (
                    <div key={idx} className="section-content">
                      {item.subtitle && (
                        <h3 className="section-subtitle">{item.subtitle}</h3>
                      )}
                      {item.text && <p>{item.text}</p>}
                      {item.list && (
                        <ul className="content-list">
                          {item.list.map((listItem, listIdx) => (
                            <li key={listIdx}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="privacy-summary">
              <h2 className="summary-title">{t.summary.title}</h2>
              <p className="summary-text">{t.summary.text}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
