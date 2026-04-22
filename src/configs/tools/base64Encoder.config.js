/**
 * Base64 Encoder/Decoder Tool Configuration - Schema v2.0
 *
 * Following the GOLD STANDARD reference implementation
 *
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

export const base64EncoderConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '1.0.0',
    lastUpdated: '2026-04-20',
    author: 'FreeTools',
    category: 'developer',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'base64-encoder',
  name: {
    en: 'Base64 Encoder/Decoder',
    hi: 'Base64 एनकोडर/डिकोडर'
  },
  slug: 'base64-encoder-decoder',
  description: {
    en: 'Encode and decode Base64 strings with UTF-8 support',
    hi: 'UTF-8 सपोर्ट के साथ Base64 स्ट्रिंग्स को एनकोड और डिकोड करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Base64 Encoder Decoder Online | Free UTF-8 Support 2024',
      description: 'Free online Base64 encoder and decoder with UTF-8 support. Encode text to Base64 or decode Base64 to text instantly. Perfect for developers, API testing, and data encoding.',
      keywords: {
        primary: [
          'base64 encoder online',
          'base64 decoder free',
          'encode decode base64'
        ],
        longTail: [
          'base64 encoder decoder online free',
          'encode text to base64 utf8',
          'decode base64 string online',
          'base64 converter with utf8 support',
          'online base64 encoding tool'
        ],
        secondary: [
          'base64 encode online',
          'base64 decode online',
          'base64 converter',
          'text to base64',
          'base64 to text'
        ]
      },
      canonical: 'https://freetools.com/tools/base64-encoder-decoder',
      ogImage: '/images/tools/base64-encoder-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Base64 Encoder/Decoder',
        description: 'Free online Base64 encoder and decoder with UTF-8 support',
        applicationCategory: 'DeveloperApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'Base64 एनकोडर डिकोडर ऑनलाइन | फ्री UTF-8 सपोर्ट 2024',
      description: 'UTF-8 सपोर्ट के साथ फ्री ऑनलाइन Base64 एनकोडर और डिकोडर। टेक्स्ट को Base64 में एनकोड करें या Base64 को टेक्स्ट में डिकोड करें। डेवलपर्स, API टेस्टिंग और डेटा एनकोडिंग के लिए परफेक्ट।',
      keywords: {
        primary: [
          'base64 encoder online',
          'base64 decoder free hindi',
          'base64 encode decode kare'
        ],
        longTail: [
          'base64 encoder decoder online free hindi',
          'text ko base64 me encode kare',
          'base64 string decode kare online',
          'base64 converter utf8 support ke sath',
          'online base64 encoding tool hindi'
        ],
        secondary: [
          'base64 encode online',
          'base64 decode online',
          'base64 converter',
          'text to base64 hindi',
          'base64 to text hindi'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/base64-encoder-decoder',
      ogImage: '/images/tools/base64-encoder-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Base64 एनकोडर/डिकोडर',
        description: 'UTF-8 सपोर्ट के साथ फ्री ऑनलाइन Base64 एनकोडर और डिकोडर',
        applicationCategory: 'DeveloperApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Base64 Encoder/Decoder',
        subtitle: 'Free online Base64 encoding and decoding with UTF-8 support. No signup required.',
        benefits: [
          { icon: '⚡', text: 'Instant encoding' },
          { icon: '🔒', text: '100% Private' },
          { icon: '🌐', text: 'UTF-8 support' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Start Encoding',
        privacyNotice: 'All processing happens in your browser. Your data never leaves your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our Base64 Encoder/Decoder?',
        subtitle: 'Powerful features for reliable Base64 encoding and decoding',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Instant encoding and decoding with no server delays'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your data never leaves your device'
          },
          {
            icon: '🌐',
            title: 'UTF-8 Support',
            description: 'Properly handles international characters and emojis with UTF-8 encoding'
          },
          {
            icon: '📋',
            title: 'Easy Copy/Paste',
            description: 'One-click copy to clipboard for quick workflow integration'
          },
          {
            icon: '🎯',
            title: 'Error Detection',
            description: 'Clear error messages for invalid Base64 strings'
          },
          {
            icon: '🆓',
            title: 'Completely Free',
            description: 'No registration, no limits, no hidden fees. Use as much as you need'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use Base64 Encoder/Decoder',
        subtitle: 'Simple steps to encode or decode Base64',
        steps: [
          {
            number: 1,
            title: 'Enter Your Text',
            description: 'Paste or type the text you want to encode, or paste Base64 string to decode'
          },
          {
            number: 2,
            title: 'Choose Action',
            description: 'Click "Encode" to convert text to Base64, or "Decode" to convert Base64 to text'
          },
          {
            number: 3,
            title: 'Copy Result',
            description: 'Click the copy button to copy the result to your clipboard'
          }
        ],
        tips: [
          'Use UTF-8 encoding for international characters',
          'Base64 encoded strings are about 33% larger than original',
          'Invalid Base64 strings will show clear error messages'
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Base64 Encoding and Decoding',
        intro: 'Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format. It\'s commonly used in web development, email systems, and data transmission. Our free online tool provides instant Base64 encoding and decoding with full UTF-8 support. For JSON data validation, use our <a href="/tools/json-formatter">JSON Formatter</a>, or for URL-safe encoding, try our <a href="/tools/url-encoder-decoder">URL Encoder</a>.',
        sections: [
          {
            title: 'What is Base64 Encoding?',
            content: 'Base64 encoding converts binary data into a text format using 64 ASCII characters (A-Z, a-z, 0-9, +, /). This makes it safe to transmit binary data over text-based protocols like HTTP, email, or JSON. It\'s widely used for embedding images in HTML/CSS, API authentication, and data URLs.',
            keywords: ['base64 encoding explained', 'what is base64', 'base64 format']
          },
          {
            title: 'When to Use Base64?',
            content: 'Use Base64 encoding when you need to transmit binary data over text-only channels, embed images in HTML/CSS as data URLs, encode credentials for HTTP Basic Authentication, or store binary data in JSON or XML. It\'s essential for web APIs, email attachments, and data serialization.',
            keywords: ['base64 use cases', 'when to use base64', 'base64 applications']
          },
          {
            title: 'UTF-8 Support',
            content: 'Our tool properly handles UTF-8 encoded text, ensuring international characters, emojis, and special symbols are correctly encoded and decoded. Unlike simple btoa/atob functions, we use TextEncoder/TextDecoder for proper UTF-8 handling, preventing data corruption.',
            keywords: ['base64 utf8 encoding', 'unicode base64', 'international characters base64']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is Base64 encoding?',
            answer: 'Base64 is a method of encoding binary data into ASCII text format using 64 characters. It\'s commonly used to transmit binary data over text-based protocols like HTTP, email, or JSON.',
            category: 'basics'
          },
          {
            question: 'Is my data secure?',
            answer: 'Yes, absolutely! All encoding and decoding happens directly in your browser using JavaScript. Your data never leaves your device or gets uploaded to any server.',
            category: 'privacy'
          },
          {
            question: 'Can I encode special characters and emojis?',
            answer: 'Yes! Our tool uses UTF-8 encoding, which properly handles international characters, emojis, and special symbols. This ensures your data is correctly encoded and can be decoded without corruption.',
            category: 'features'
          },
          {
            question: 'Why does Base64 make my data larger?',
            answer: 'Base64 encoding increases data size by approximately 33% because it represents 3 bytes of binary data using 4 ASCII characters. This is the trade-off for making binary data safe for text-based transmission.',
            category: 'technical'
          },
          {
            question: 'What happens if I try to decode invalid Base64?',
            answer: 'Our tool validates Base64 strings before decoding and shows clear error messages if the input is invalid. This helps you identify issues with copied or corrupted Base64 data.',
            category: 'errors'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'Base64 एनकोडर/डिकोडर',
        subtitle: 'UTF-8 सपोर्ट के साथ फ्री ऑनलाइन Base64 एनकोडिंग और डिकोडिंग। कोई साइनअप की जरूरत नहीं।',
        benefits: [
          { icon: '⚡', text: 'तुरंत एनकोडिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '🌐', text: 'UTF-8 सपोर्ट' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'एनकोडिंग शुरू करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा Base64 एनकोडर/डिकोडर क्यों इस्तेमाल करें?',
        subtitle: 'विश्वसनीय Base64 एनकोडिंग और डिकोडिंग के लिए शक्तिशाली फीचर्स',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेजी',
            description: 'बिना सर्वर डिले के तुरंत एनकोडिंग और डिकोडिंग'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता'
          },
          {
            icon: '🌐',
            title: 'UTF-8 सपोर्ट',
            description: 'UTF-8 एनकोडिंग के साथ इंटरनेशनल कैरेक्टर्स और इमोजी को सही तरीके से हैंडल करता है'
          },
          {
            icon: '📋',
            title: 'आसान कॉपी/पेस्ट',
            description: 'क्विक वर्कफ्लो इंटीग्रेशन के लिए वन-क्लिक क्लिपबोर्ड कॉपी'
          },
          {
            icon: '🎯',
            title: 'एरर डिटेक्शन',
            description: 'इनवैलिड Base64 स्ट्रिंग्स के लिए क्लियर एरर मैसेज'
          },
          {
            icon: '🆓',
            title: 'पूरी तरह फ्री',
            description: 'कोई रजिस्ट्रेशन नहीं, कोई लिमिट नहीं, कोई हिडन फीस नहीं। जितना चाहें इस्तेमाल करें'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'Base64 एनकोडर/डिकोडर कैसे इस्तेमाल करें',
        subtitle: 'Base64 को एनकोड या डिकोड करने के सिंपल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट एंटर करें',
            description: 'वह टेक्स्ट पेस्ट या टाइप करें जिसे आप एनकोड करना चाहते हैं, या डिकोड करने के लिए Base64 स्ट्रिंग पेस्ट करें'
          },
          {
            number: 2,
            title: 'एक्शन चुनें',
            description: 'टेक्स्ट को Base64 में कन्वर्ट करने के लिए "Encode" क्लिक करें, या Base64 को टेक्स्ट में कन्वर्ट करने के लिए "Decode" क्लिक करें'
          },
          {
            number: 3,
            title: 'रिजल्ट कॉपी करें',
            description: 'रिजल्ट को अपने क्लिपबोर्ड में कॉपी करने के लिए कॉपी बटन क्लिक करें'
          }
        ],
        tips: [
          'इंटरनेशनल कैरेक्टर्स के लिए UTF-8 एनकोडिंग इस्तेमाल करें',
          'Base64 एनकोडेड स्ट्रिंग्स ओरिजिनल से लगभग 33% बड़ी होती हैं',
          'इनवैलिड Base64 स्ट्रिंग्स क्लियर एरर मैसेज दिखाएंगी'
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Base64 एनकोडिंग और डिकोडिंग की कम्पलीट गाइड',
        intro: 'Base64 एक बाइनरी-टू-टेक्स्ट एनकोडिंग स्कीम है जो बाइनरी डेटा को ASCII स्ट्रिंग फॉर्मेट में रिप्रेजेंट करती है। यह वेब डेवलपमेंट, ईमेल सिस्टम्स और डेटा ट्रांसमिशन में आमतौर पर इस्तेमाल होती है। हमारा फ्री ऑनलाइन टूल फुल UTF-8 सपोर्ट के साथ इंस्टेंट Base64 एनकोडिंग और डिकोडिंग प्रदान करता है। JSON डेटा वैलिडेशन के लिए हमारे <a href="/tools/json-formatter">JSON Formatter</a> का उपयोग करें, या URL-सुरक्षित एनकोडिंग के लिए हमारे <a href="/tools/url-encoder-decoder">URL Encoder</a> को आज़माएं।',
        sections: [
          {
            title: 'Base64 एनकोडिंग क्या है?',
            content: 'Base64 एनकोडिंग बाइनरी डेटा को 64 ASCII कैरेक्टर्स (A-Z, a-z, 0-9, +, /) का इस्तेमाल करके टेक्स्ट फॉर्मेट में कन्वर्ट करती है। यह बाइनरी डेटा को टेक्स्ट-बेस्ड प्रोटोकॉल्स जैसे HTTP, ईमेल या JSON पर ट्रांसमिट करने के लिए सेफ बनाती है।',
            keywords: ['base64 encoding explained hindi', 'base64 kya hai', 'base64 format']
          },
          {
            title: 'Base64 का इस्तेमाल कब करें?',
            content: 'Base64 एनकोडिंग का इस्तेमाल तब करें जब आपको टेक्स्ट-ओनली चैनल्स पर बाइनरी डेटा ट्रांसमिट करना हो, HTML/CSS में इमेजेज को डेटा URLs के रूप में एम्बेड करना हो, HTTP बेसिक ऑथेंटिकेशन के लिए क्रेडेंशियल्स एनकोड करना हो, या JSON या XML में बाइनरी डेटा स्टोर करना हो।',
            keywords: ['base64 use cases hindi', 'base64 kab use kare', 'base64 applications']
          },
          {
            title: 'UTF-8 सपोर्ट',
            content: 'हमारा टूल UTF-8 एनकोडेड टेक्स्ट को सही तरीके से हैंडल करता है, यह सुनिश्चित करते हुए कि इंटरनेशनल कैरेक्टर्स, इमोजी और स्पेशल सिंबल्स सही तरीके से एनकोड और डिकोड हों। सिंपल btoa/atob फंक्शन्स के विपरीत, हम प्रॉपर UTF-8 हैंडलिंग के लिए TextEncoder/TextDecoder का इस्तेमाल करते हैं।',
            keywords: ['base64 utf8 encoding hindi', 'unicode base64', 'international characters base64']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'Base64 एनकोडिंग क्या है?',
            answer: 'Base64 बाइनरी डेटा को 64 कैरेक्टर्स का इस्तेमाल करके ASCII टेक्स्ट फॉर्मेट में एनकोड करने का एक तरीका है। यह आमतौर पर टेक्स्ट-बेस्ड प्रोटोकॉल्स जैसे HTTP, ईमेल या JSON पर बाइनरी डेटा ट्रांसमिट करने के लिए इस्तेमाल होता है।',
            category: 'basics'
          },
          {
            question: 'क्या मेरा डेटा सुरक्षित है?',
            answer: 'हाँ, बिल्कुल! सभी एनकोडिंग और डिकोडिंग JavaScript का इस्तेमाल करके सीधे आपके ब्राउज़र में होती है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता।',
            category: 'privacy'
          },
          {
            question: 'क्या मैं स्पेशल कैरेक्टर्स और इमोजी एनकोड कर सकता हूँ?',
            answer: 'हाँ! हमारा टूल UTF-8 एनकोडिंग का इस्तेमाल करता है, जो इंटरनेशनल कैरेक्टर्स, इमोजी और स्पेशल सिंबल्स को सही तरीके से हैंडल करता है। यह सुनिश्चित करता है कि आपका डेटा सही तरीके से एनकोड हो और बिना करप्शन के डिकोड किया जा सके।',
            category: 'features'
          },
          {
            question: 'Base64 मेरे डेटा को बड़ा क्यों बनाता है?',
            answer: 'Base64 एनकोडिंग डेटा साइज़ को लगभग 33% बढ़ा देती है क्योंकि यह 3 बाइट्स के बाइनरी डेटा को 4 ASCII कैरेक्टर्स का इस्तेमाल करके रिप्रेजेंट करती है। यह बाइनरी डेटा को टेक्स्ट-बेस्ड ट्रांसमिशन के लिए सेफ बनाने का ट्रेड-ऑफ है।',
            category: 'technical'
          },
          {
            question: 'अगर मैं इनवैलिड Base64 डिकोड करने की कोशिश करूँ तो क्या होगा?',
            answer: 'हमारा टूल डिकोडिंग से पहले Base64 स्ट्रिंग्स को वैलिडेट करता है और अगर इनपुट इनवैलिड है तो क्लियर एरर मैसेज दिखाता है। यह आपको कॉपी किए गए या करप्टेड Base64 डेटा के साथ इश्यूज आइडेंटिफाई करने में मदद करता है।',
            category: 'errors'
          }
        ]
      }
    }
  },

  // ============================================================================
  // 5. UI TEXT (Required - Bilingual)
  // ============================================================================
  uiText: {
    en: {
      input: {
        label: 'Input Text',
        placeholder: 'Enter text to encode or Base64 string to decode...',
        pasteButton: 'Paste',
        clearButton: 'Clear'
      },
      actions: {
        encode: 'Encode to Base64',
        decode: 'Decode from Base64'
      },
      results: {
        title: 'Result',
        copyButton: 'Copy',
        copiedButton: 'Copied!'
      },
      messages: {
        emptyInput: 'Please enter text to process',
        invalidBase64: 'Invalid Base64 string',
        encodingSuccess: 'Text encoded successfully',
        decodingSuccess: 'Base64 decoded successfully'
      }
    },
    hi: {
      input: {
        label: 'इनपुट टेक्स्ट',
        placeholder: 'एनकोड करने के लिए टेक्स्ट या डिकोड करने के लिए Base64 स्ट्रिंग एंटर करें...',
        pasteButton: 'पेस्ट करें',
        clearButton: 'क्लियर करें'
      },
      actions: {
        encode: 'Base64 में एनकोड करें',
        decode: 'Base64 से डिकोड करें'
      },
      results: {
        title: 'रिजल्ट',
        copyButton: 'कॉपी करें',
        copiedButton: 'कॉपी हो गया!'
      },
      messages: {
        emptyInput: 'कृपया प्रोसेस करने के लिए टेक्स्ट एंटर करें',
        invalidBase64: 'इनवैलिड Base64 स्ट्रिंग',
        encodingSuccess: 'टेक्स्ट सफलतापूर्वक एनकोड हो गया',
        decodingSuccess: 'Base64 सफलतापूर्वक डिकोड हो गया'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Optional)
  // ============================================================================
  defaultSettings: {
    action: 'encode'
  },

  // ============================================================================
  // 7. VALIDATION RULES (Optional)
  // ============================================================================
  validation: {
    maxInputLength: 1000000, // 1MB of text
    allowedActions: ['encode', 'decode']
  }
}

export default base64EncoderConfig
