/**
 * All Tools Page Configuration
 * 
 * SEO and content configuration for the All Tools listing page
 * 
 * @version 1.0.0
 * @lastUpdated 2026-04-04
 */

export const allToolsConfig = {
  // ============================================================================
  // 1. METADATA
  // ============================================================================
  metadata: {
    version: '1.0.0',
    lastUpdated: '2026-04-04',
    author: 'FreeTools',
    type: 'page'
  },

  // ============================================================================
  // 2. SEO (Bilingual)
  // ============================================================================
  seo: {
    en: {
      title: 'Free Online Tools - PDF, Image, Text & Developer Tools 2024',
      description: 'Discover 100+ free online tools for PDF editing, image processing, text manipulation, and web development. No signup required. Works on all devices.',
      keywords: {
        primary: [
          'free online tools',
          'pdf tools',
          'image tools',
          'text tools',
          'developer tools'
        ],
        secondary: [
          'online utilities',
          'web tools',
          'free tools',
          'productivity tools',
          'file converter'
        ],
        longTail: [
          'free online tools no signup',
          'best free online tools 2024',
          'online tools for students',
          'web based tools free',
          'online productivity tools'
        ]
      },
      canonical: 'https://freetools.com/tools',
      ogImage: '/images/all-tools-og.jpg'
    },
    hi: {
      title: 'फ्री ऑनलाइन टूल्स - PDF, इमेज, टेक्स्ट और डेवलपर टूल्स 2024',
      description: 'PDF एडिटिंग, इमेज प्रोसेसिंग, टेक्स्ट मैनिपुलेशन और वेब डेवलपमेंट के लिए 100+ फ्री ऑनलाइन टूल्स खोजें। साइनअप की ज़रूरत नहीं। सभी डिवाइस पर काम करता है।',
      keywords: {
        primary: [
          'फ्री ऑनलाइन टूल्स',
          'PDF टूल्स',
          'इमेज टूल्स',
          'टेक्स्ट टूल्स',
          'डेवलपर टूल्स'
        ],
        secondary: [
          'ऑनलाइन यूटिलिटीज',
          'वेब टूल्स',
          'फ्री टूल्स',
          'प्रोडक्टिविटी टूल्स',
          'फाइल कन्वर्टर'
        ],
        longTail: [
          'फ्री ऑनलाइन टूल्स बिना साइनअप',
          'बेस्ट फ्री ऑनलाइन टूल्स 2024',
          'स्टूडेंट्स के लिए ऑनलाइन टूल्स',
          'वेब बेस्ड टूल्स फ्री',
          'ऑनलाइन प्रोडक्टिविटी टूल्स'
        ]
      },
      canonical: 'https://freetools.com/tools',
      ogImage: '/images/all-tools-og.jpg'
    }
  },

  // ============================================================================
  // 3. PAGE CONTENT (Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Free Online Tools for Everyone',
        subtitle: 'Discover powerful, easy-to-use tools for PDF editing, image processing, text manipulation, and web development. All free, no signup required.',
        cta: 'Browse Tools'
      },

      // Intro Section
      intro: {
        title: 'What Are Online Tools?',
        paragraphs: [
          'Online tools are web-based applications that help you perform various tasks without installing any software. From editing PDFs to resizing images, our tools work directly in your browser.',
          'All our tools are completely free, require no registration, and work on any device - desktop, tablet, or mobile. Your files are processed locally in your browser, ensuring complete privacy and security.'
        ]
      },

      // Category Descriptions
      categories: {
        pdf: {
          title: 'PDF Tools',
          description: 'Edit, merge, split, compress, and convert PDF files with ease'
        },
        image: {
          title: 'Image Tools',
          description: 'Resize, compress, crop, and convert images in various formats'
        },
        text: {
          title: 'Text Tools',
          description: 'Count words, convert case, remove spaces, and format text'
        },
        developer: {
          title: 'Developer Tools',
          description: 'Format JSON, encode Base64, convert colors, and more'
        }
      },

      // Features
      features: {
        title: 'Why Choose Our Tools?',
        items: [
          {
            icon: '🆓',
            title: 'Completely Free',
            description: 'All tools are 100% free with no hidden costs or subscriptions'
          },
          {
            icon: '🔒',
            title: 'Private & Secure',
            description: 'Files are processed in your browser. Nothing is uploaded to servers'
          },
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Instant processing with no waiting or queues'
          },
          {
            icon: '📱',
            title: 'Works Everywhere',
            description: 'Use on any device - desktop, tablet, or mobile'
          },
          {
            icon: '🚫',
            title: 'No Signup Required',
            description: 'Start using tools immediately without creating an account'
          },
          {
            icon: '🌐',
            title: 'Always Available',
            description: 'Access tools 24/7 from anywhere in the world'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Are these tools really free?',
            answer: 'Yes! All our tools are completely free to use with no hidden costs, subscriptions, or premium features. You can use them unlimited times.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Simply visit the tool page and start using it immediately.'
          },
          {
            question: 'Are my files safe and private?',
            answer: 'Absolutely! All file processing happens directly in your browser. Your files are never uploaded to our servers, ensuring complete privacy and security.'
          },
          {
            question: 'What file formats are supported?',
            answer: 'We support all common file formats including PDF, JPG, PNG, GIF, TXT, JSON, and more. Each tool page lists its supported formats.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'Most tools can handle files up to 50MB. Some tools may have different limits based on browser capabilities. Check individual tool pages for specific limits.'
          },
          {
            question: 'Can I use these tools on mobile?',
            answer: 'Yes! All our tools are fully responsive and work perfectly on smartphones and tablets.'
          },
          {
            question: 'Do I need to install any software?',
            answer: 'No installation required! All tools work directly in your web browser. Just visit the page and start using.'
          },
          {
            question: 'How do you make money if everything is free?',
            answer: 'We display non-intrusive ads to keep the service free for everyone. We never charge for tool usage or limit features.'
          },
          {
            question: 'Can I suggest a new tool?',
            answer: 'We love feedback! Contact us through our support page to suggest new tools or features.'
          },
          {
            question: 'Are the tools updated regularly?',
            answer: 'Yes, we continuously improve our tools, add new features, and fix bugs to provide the best experience.'
          }
        ]
      },

      // Use Cases
      useCases: {
        title: 'Who Uses Our Tools?',
        items: [
          {
            title: 'Students',
            description: 'Format documents, count words, resize images for assignments and projects'
          },
          {
            title: 'Professionals',
            description: 'Edit PDFs, compress files, convert formats for business documents'
          },
          {
            title: 'Developers',
            description: 'Format JSON, encode data, validate code, and debug applications'
          },
          {
            title: 'Content Creators',
            description: 'Optimize images, edit text, convert files for social media and websites'
          },
          {
            title: 'Small Businesses',
            description: 'Manage documents, create PDFs, process images without expensive software'
          },
          {
            title: 'Everyone',
            description: 'Quick tasks, file conversions, and everyday productivity needs'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'सभी के लिए फ्री ऑनलाइन टूल्स',
        subtitle: 'PDF एडिटिंग, इमेज प्रोसेसिंग, टेक्स्ट मैनिपुलेशन और वेब डेवलपमेंट के लिए शक्तिशाली, उपयोग में आसान टूल्स खोजें। सभी फ्री, साइनअप की ज़रूरत नहीं।',
        cta: 'टूल्स ब्राउज़ करें'
      },

      // Intro Section
      intro: {
        title: 'ऑनलाइन टूल्स क्या हैं?',
        paragraphs: [
          'ऑनलाइन टूल्स वेब-बेस्ड एप्लिकेशन हैं जो आपको बिना कोई सॉफ्टवेयर इंस्टॉल किए विभिन्न कार्य करने में मदद करते हैं। PDF एडिट करने से लेकर इमेज रीसाइज़ करने तक, हमारे टूल्स सीधे आपके ब्राउज़र में काम करते हैं।',
          'हमारे सभी टूल्स पूरी तरह से फ्री हैं, रजिस्ट्रेशन की ज़रूरत नहीं है, और किसी भी डिवाइस पर काम करते हैं - डेस्कटॉप, टैबलेट या मोबाइल। आपकी फाइलें आपके ब्राउज़र में लोकली प्रोसेस होती हैं, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करती है।'
        ]
      },

      // Category Descriptions
      categories: {
        pdf: {
          title: 'PDF टूल्स',
          description: 'PDF फाइलों को आसानी से एडिट, मर्ज, स्प्लिट, कंप्रेस और कन्वर्ट करें'
        },
        image: {
          title: 'इमेज टूल्स',
          description: 'विभिन्न फॉर्मेट में इमेज को रीसाइज़, कंप्रेस, क्रॉप और कन्वर्ट करें'
        },
        text: {
          title: 'टेक्स्ट टूल्स',
          description: 'शब्द गिनें, केस कन्वर्ट करें, स्पेस हटाएं और टेक्स्ट फॉर्मेट करें'
        },
        developer: {
          title: 'डेवलपर टूल्स',
          description: 'JSON फॉर्मेट करें, Base64 एनकोड करें, कलर कन्वर्ट करें और अधिक'
        }
      },

      // Features
      features: {
        title: 'हमारे टूल्स क्यों चुनें?',
        items: [
          {
            icon: '🆓',
            title: 'पूरी तरह से फ्री',
            description: 'सभी टूल्स 100% फ्री हैं बिना किसी छिपी हुई लागत या सब्सक्रिप्शन के'
          },
          {
            icon: '🔒',
            title: 'प्राइवेट और सुरक्षित',
            description: 'फाइलें आपके ब्राउज़र में प्रोसेस होती हैं। कुछ भी सर्वर पर अपलोड नहीं होता'
          },
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'बिना किसी प्रतीक्षा या कतार के तुरंत प्रोसेसिंग'
          },
          {
            icon: '📱',
            title: 'हर जगह काम करता है',
            description: 'किसी भी डिवाइस पर उपयोग करें - डेस्कटॉप, टैबलेट या मोबाइल'
          },
          {
            icon: '🚫',
            title: 'साइनअप की ज़रूरत नहीं',
            description: 'अकाउंट बनाए बिना तुरंत टूल्स का उपयोग शुरू करें'
          },
          {
            icon: '🌐',
            title: 'हमेशा उपलब्ध',
            description: 'दुनिया में कहीं से भी 24/7 टूल्स एक्सेस करें'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'क्या ये टूल्स वाकई फ्री हैं?',
            answer: 'हां! हमारे सभी टूल्स बिना किसी छिपी हुई लागत, सब्सक्रिप्शन या प्रीमियम फीचर्स के पूरी तरह से फ्री हैं। आप इन्हें असीमित बार उपयोग कर सकते हैं।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। बस टूल पेज पर जाएं और तुरंत उपयोग शुरू करें।'
          },
          {
            question: 'क्या मेरी फाइलें सुरक्षित और प्राइवेट हैं?',
            answer: 'बिल्कुल! सभी फाइल प्रोसेसिंग सीधे आपके ब्राउज़र में होती है। आपकी फाइलें कभी भी हमारे सर्वर पर अपलोड नहीं होतीं, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करती है।'
          },
          {
            question: 'कौन से फाइल फॉर्मेट सपोर्टेड हैं?',
            answer: 'हम PDF, JPG, PNG, GIF, TXT, JSON और अधिक सहित सभी सामान्य फाइल फॉर्मेट सपोर्ट करते हैं। प्रत्येक टूल पेज अपने सपोर्टेड फॉर्मेट की सूची देता है।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'अधिकांश टूल्स 50MB तक की फाइलें हैंडल कर सकते हैं। कुछ टूल्स में ब्राउज़र क्षमताओं के आधार पर अलग लिमिट हो सकती है। विशिष्ट लिमिट के लिए व्यक्तिगत टूल पेज देखें।'
          },
          {
            question: 'क्या मैं इन टूल्स को मोबाइल पर उपयोग कर सकता हूं?',
            answer: 'हां! हमारे सभी टूल्स पूरी तरह से रिस्पॉन्सिव हैं और स्मार्टफोन और टैबलेट पर परफेक्ट काम करते हैं।'
          },
          {
            question: 'क्या मुझे कोई सॉफ्टवेयर इंस्टॉल करने की ज़रूरत है?',
            answer: 'किसी इंस्टॉलेशन की ज़रूरत नहीं! सभी टूल्स सीधे आपके वेब ब्राउज़र में काम करते हैं। बस पेज पर जाएं और उपयोग शुरू करें।'
          },
          {
            question: 'अगर सब कुछ फ्री है तो आप पैसे कैसे कमाते हैं?',
            answer: 'हम सभी के लिए सेवा को फ्री रखने के लिए नॉन-इंट्रूसिव विज्ञापन दिखाते हैं। हम कभी भी टूल उपयोग के लिए चार्ज नहीं करते या फीचर्स को लिमिट नहीं करते।'
          },
          {
            question: 'क्या मैं नया टूल सुझा सकता हूं?',
            answer: 'हमें फीडबैक पसंद है! नए टूल्स या फीचर्स सुझाने के लिए हमारे सपोर्ट पेज के माध्यम से हमसे संपर्क करें।'
          },
          {
            question: 'क्या टूल्स नियमित रूप से अपडेट होते हैं?',
            answer: 'हां, हम बेहतरीन अनुभव प्रदान करने के लिए लगातार अपने टूल्स में सुधार करते हैं, नए फीचर्स जोड़ते हैं और बग्स ठीक करते हैं।'
          }
        ]
      },

      // Use Cases
      useCases: {
        title: 'हमारे टूल्स का उपयोग कौन करता है?',
        items: [
          {
            title: 'स्टूडेंट्स',
            description: 'असाइनमेंट और प्रोजेक्ट के लिए डॉक्यूमेंट फॉर्मेट करें, शब्द गिनें, इमेज रीसाइज़ करें'
          },
          {
            title: 'प्रोफेशनल्स',
            description: 'बिज़नेस डॉक्यूमेंट के लिए PDF एडिट करें, फाइलें कंप्रेस करें, फॉर्मेट कन्वर्ट करें'
          },
          {
            title: 'डेवलपर्स',
            description: 'JSON फॉर्मेट करें, डेटा एनकोड करें, कोड वैलिडेट करें और एप्लिकेशन डीबग करें'
          },
          {
            title: 'कंटेंट क्रिएटर्स',
            description: 'सोशल मीडिया और वेबसाइट के लिए इमेज ऑप्टिमाइज़ करें, टेक्स्ट एडिट करें, फाइलें कन्वर्ट करें'
          },
          {
            title: 'स्मॉल बिज़नेस',
            description: 'महंगे सॉफ्टवेयर के बिना डॉक्यूमेंट मैनेज करें, PDF बनाएं, इमेज प्रोसेस करें'
          },
          {
            title: 'सभी',
            description: 'त्वरित कार्य, फाइल कन्वर्जन और रोज़मर्रा की प्रोडक्टिविटी ज़रूरतें'
          }
        ]
      }
    }
  }
}

