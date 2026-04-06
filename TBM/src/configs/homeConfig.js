/**
 * Home Page Configuration
 * Centralized config for homepage content
 */

export const homeConfig = {
  // Hero Section
  hero: {
    en: {
      title: 'Free Online Tools for Everyday Tasks',
      subtitle: 'Fast, simple, and free tools for PDF, images, text, and more. No signup required.',
      searchPlaceholder: 'Search tools (e.g. compress PDF, resize image)',
      popularLabel: 'Popular'
    },
    hi: {
      title: 'रोज़मर्रा के काम के लिए फ्री ऑनलाइन टूल्स',
      subtitle: 'PDF, इमेज, टेक्स्ट और बहुत कुछ के लिए तेज़, आसान और फ्री टूल्स। साइनअप की ज़रूरत नहीं।',
      searchPlaceholder: 'टूल्स खोजें (जैसे PDF कंप्रेस करें, इमेज रीसाइज़ करें)',
      popularLabel: 'पॉपुलर'
    }
  },

  // Section Headers
  sections: {
    popularTools: {
      en: {
        title: 'Popular Tools',
        subtitle: 'Most used tools by our community'
      },
      hi: {
        title: 'पॉपुलर टूल्स',
        subtitle: 'हमारे कम्युनिटी द्वारा सबसे ज़्यादा इस्तेमाल किए गए टूल्स'
      }
    },
    categories: {
      en: {
        title: 'Browse by Category',
        subtitle: 'Explore tools organized by type'
      },
      hi: {
        title: 'कैटेगरी से ब्राउज़ करें',
        subtitle: 'टाइप के अनुसार व्यवस्थित टूल्स देखें'
      }
    },
    whyUse: {
      en: {
        title: 'Why Use Our Tools?',
        subtitle: 'Built for speed, privacy, and ease of use'
      },
      hi: {
        title: 'हमारे टूल्स क्यों इस्तेमाल करें?',
        subtitle: 'स्पीड, प्राइवेसी और आसानी के लिए बनाए गए'
      }
    }
  },

  // Categories
  categories: [
    {
      id: 'image',
      icon: '🖼️',
      title: {
        en: 'Image Tools',
        hi: 'इमेज टूल्स'
      },
      description: {
        en: 'Resize, compress, crop, and convert images',
        hi: 'इमेज रीसाइज़, कंप्रेस, क्रॉप और कन्वर्ट करें'
      },
      route: '/tools/image'
    },
    {
      id: 'pdf',
      icon: '📄',
      title: {
        en: 'PDF Tools',
        hi: 'PDF टूल्स'
      },
      description: {
        en: 'Compress, merge, split, and convert PDFs',
        hi: 'PDF कंप्रेस, मर्ज, स्प्लिट और कन्वर्ट करें'
      },
      route: '/tools/pdf'
    },
    {
      id: 'text',
      icon: '📝',
      title: {
        en: 'Text Tools',
        hi: 'टेक्स्ट टूल्स'
      },
      description: {
        en: 'Count words, convert case, and format text',
        hi: 'शब्द गिनें, केस कन्वर्ट करें और टेक्स्ट फॉर्मेट करें'
      },
      route: '/tools/text'
    },
    {
      id: 'developer',
      icon: '💻',
      title: {
        en: 'Developer Tools',
        hi: 'डेवलपर टूल्स'
      },
      description: {
        en: 'JSON formatter, Base64 encoder, and more',
        hi: 'JSON फॉर्मेटर, Base64 एनकोडर और बहुत कुछ'
      },
      route: '/tools/developer'
    }
  ],

  // Why Use Section
  whyUse: {
    en: {
      title: 'Why Use Our Tools?',
      features: [
        {
          icon: '⚡',
          title: 'Fast Processing',
          description: 'Lightning-fast tools that work instantly in your browser'
        },
        {
          icon: '🔒',
          title: '100% Private',
          description: 'All processing happens locally. Your files never leave your device'
        },
        {
          icon: '📱',
          title: 'Works on Mobile',
          description: 'Fully responsive and mobile-friendly on all devices'
        },
        {
          icon: '🆓',
          title: 'Completely Free',
          description: 'No registration, no hidden fees, no watermarks. Always free'
        }
      ]
    },
    hi: {
      title: 'हमारे टूल्स क्यों इस्तेमाल करें?',
      features: [
        {
          icon: '⚡',
          title: 'तेज़ प्रोसेसिंग',
          description: 'बिजली की तरह तेज़ टूल्स जो आपके ब्राउज़र में तुरंत काम करते हैं'
        },
        {
          icon: '🔒',
          title: '100% प्राइवेट',
          description: 'सभी प्रोसेसिंग लोकली होती है। आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जातीं'
        },
        {
          icon: '📱',
          title: 'मोबाइल पर काम करता है',
          description: 'सभी डिवाइसेज़ पर पूरी तरह से रिस्पॉन्सिव और मोबाइल-फ्रेंडली'
        },
        {
          icon: '🆓',
          title: 'पूरी तरह फ्री',
          description: 'कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं। हमेशा फ्री'
        }
      ]
    }
  },

  // SEO Content
  seoContent: {
    en: {
      mainTitle: 'Free Online Tools - No Installation Required',
      intro: 'Welcome to our collection of free online tools designed to make your daily tasks easier. Whether you need to compress a PDF, resize an image, format JSON, or count words, we have the perfect tool for you. All tools work directly in your browser with complete privacy - your files never leave your device.',
      
      sections: [
        {
          title: 'PDF Tools',
          content: 'Our PDF tools help you compress, merge, split, and convert PDF files without any software installation. Reduce PDF file sizes, combine multiple documents, extract specific pages, or convert images to PDF format - all for free.',
          keywords: 'pdf tools, compress pdf, merge pdf, split pdf'
        },
        {
          title: 'Image Tools',
          content: 'Resize images to exact dimensions or target file sizes (20KB, 50KB, 100KB), compress images up to 90% smaller, crop images, and convert between formats. Perfect for social media, websites, and document uploads.',
          keywords: 'image tools, resize image, compress image, image converter'
        },
        {
          title: 'Text Tools',
          content: 'Count words and characters, convert text case, format text, and analyze content. Essential tools for writers, students, and content creators who need quick text processing.',
          keywords: 'text tools, word counter, case converter, text formatter'
        },
        {
          title: 'Developer Tools',
          content: 'Format and validate JSON, encode/decode Base64, URL encoding, color picker, and more. Essential utilities for developers and programmers working on web projects.',
          keywords: 'developer tools, json formatter, base64 encoder, url encoder'
        }
      ]
    },
    hi: {
      mainTitle: 'फ्री ऑनलाइन टूल्स - इंस्टॉलेशन की ज़रूरत नहीं',
      intro: 'हमारे फ्री ऑनलाइन टूल्स के कलेक्शन में आपका स्वागत है जो आपके रोज़मर्रा के कामों को आसान बनाने के लिए डिज़ाइन किए गए हैं। चाहे आपको PDF कंप्रेस करना हो, इमेज रीसाइज़ करना हो, JSON फॉर्मेट करना हो, या शब्द गिनने हों, हमारे पास आपके लिए परफेक्ट टूल है। सभी टूल्स सीधे आपके ब्राउज़र में पूरी प्राइवेसी के साथ काम करते हैं - आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जातीं।',
      
      sections: [
        {
          title: 'PDF टूल्स',
          content: 'हमारे PDF टूल्स आपको बिना किसी सॉफ्टवेयर इंस्टॉलेशन के PDF फाइल कंप्रेस, मर्ज, स्प्लिट और कन्वर्ट करने में मदद करते हैं। PDF फाइल साइज़ कम करें, मल्टीपल डॉक्यूमेंट कंबाइन करें, स्पेसिफिक पेज एक्सट्रैक्ट करें, या इमेज को PDF फॉर्मेट में कन्वर्ट करें - सब फ्री।',
          keywords: 'pdf tools, compress pdf, merge pdf, split pdf'
        },
        {
          title: 'इमेज टूल्स',
          content: 'इमेज को एक्ज़ैक्ट डाइमेंशन या टारगेट फाइल साइज़ (20KB, 50KB, 100KB) में रीसाइज़ करें, इमेज को 90% तक कंप्रेस करें, इमेज क्रॉप करें, और फॉर्मेट के बीच कन्वर्ट करें। सोशल मीडिया, वेबसाइट और डॉक्यूमेंट अपलोड के लिए परफेक्ट।',
          keywords: 'image tools, resize image, compress image, image converter'
        },
        {
          title: 'टेक्स्ट टूल्स',
          content: 'शब्द और कैरेक्टर गिनें, टेक्स्ट केस कन्वर्ट करें, टेक्स्ट फॉर्मेट करें, और कंटेंट एनालाइज़ करें। लेखकों, स्टूडेंट्स और कंटेंट क्रिएटर्स के लिए ज़रूरी टूल्स जिन्हें क्विक टेक्स्ट प्रोसेसिंग की ज़रूरत है।',
          keywords: 'text tools, word counter, case converter, text formatter'
        },
        {
          title: 'डेवलपर टूल्स',
          content: 'JSON फॉर्मेट और वैलिडेट करें, Base64 एनकोड/डीकोड करें, URL एनकोडिंग, कलर पिकर और बहुत कुछ। वेब प्रोजेक्ट पर काम करने वाले डेवलपर्स और प्रोग्रामर्स के लिए ज़रूरी यूटिलिटीज़।',
          keywords: 'developer tools, json formatter, base64 encoder, url encoder'
        }
      ]
    }
  },

  // FAQ Section
  faq: {
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Are these tools really free?',
          answer: 'Yes! All our tools are completely free to use. No registration, no hidden fees, no watermarks. Use them as many times as you want.'
        },
        {
          question: 'Is it safe to upload my files?',
          answer: 'Absolutely safe! All processing happens entirely in your browser using JavaScript. Your files never leave your device or get uploaded to any server.'
        },
        {
          question: 'Do I need to install any software?',
          answer: 'No installation required! All tools work directly in your web browser. Just visit the website and start using any tool immediately.'
        },
        {
          question: 'Do these tools work on mobile devices?',
          answer: 'Yes! All our tools are fully mobile-optimized and work perfectly on smartphones, tablets, and desktops.'
        },
        {
          question: 'What file formats are supported?',
          answer: 'We support the most common formats: PDF, JPG, PNG, WEBP for images, and various text formats. Each tool page lists its specific supported formats.'
        },
        {
          question: 'Is there a file size limit?',
          answer: 'Most tools support files up to 10MB for images and 50MB for PDFs. Processing happens in your browser, so larger files may take longer depending on your device.'
        }
      ]
    },
    hi: {
      title: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        {
          question: 'क्या ये टूल्स वाकई फ्री हैं?',
          answer: 'हाँ! हमारे सभी टूल्स इस्तेमाल करने के लिए पूरी तरह फ्री हैं। कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं। जितनी बार चाहें इस्तेमाल करें।'
        },
        {
          question: 'क्या मेरी फाइलें अपलोड करना सेफ है?',
          answer: 'बिल्कुल सेफ! सभी प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जातीं या किसी सर्वर पर अपलोड नहीं होतीं।'
        },
        {
          question: 'क्या मुझे कोई सॉफ्टवेयर इंस्टॉल करना होगा?',
          answer: 'कोई इंस्टॉलेशन की ज़रूरत नहीं! सभी टूल्स सीधे आपके वेब ब्राउज़र में काम करते हैं। बस वेबसाइट पर जाएं और तुरंत किसी भी टूल का इस्तेमाल शुरू करें।'
        },
        {
          question: 'क्या ये टूल्स मोबाइल डिवाइसेज़ पर काम करते हैं?',
          answer: 'हाँ! हमारे सभी टूल्स पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड हैं और स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करते हैं।'
        },
        {
          question: 'कौन से फाइल फॉर्मेट सपोर्ट होते हैं?',
          answer: 'हम सबसे कॉमन फॉर्मेट सपोर्ट करते हैं: PDF, JPG, PNG, WEBP इमेज के लिए, और विभिन्न टेक्स्ट फॉर्मेट। हर टूल पेज अपने स्पेसिफिक सपोर्टेड फॉर्मेट लिस्ट करता है।'
        },
        {
          question: 'क्या फाइल साइज़ की कोई लिमिट है?',
          answer: 'ज़्यादातर टूल्स इमेज के लिए 10MB तक और PDF के लिए 50MB तक की फाइलें सपोर्ट करते हैं। प्रोसेसिंग आपके ब्राउज़र में होती है, इसलिए बड़ी फाइलों में आपके डिवाइस के अनुसार ज़्यादा समय लग सकता है।'
        }
      ]
    }
  }
}

