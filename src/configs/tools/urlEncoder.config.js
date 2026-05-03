/**
 * URL Encoder/Decoder Tool Configuration - Schema v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

export const urlEncoderConfig = {
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
  id: 'url-encoder',
  name: {
    en: 'URL Encoder/Decoder',
    hi: 'URL एनकोडर/डिकोडर'
  },
  slug: 'url-encoder-decoder',
  description: {
    en: 'Encode and decode URL strings for safe transmission',
    hi: 'सुरक्षित ट्रांसमिशन के लिए URL स्ट्रिंग्स को एनकोड और डिकोड करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'URL Encoder Decoder Online | Free URL Encode Decode Tool 2024',
      description: 'Free online URL encoder and decoder. Encode URLs for safe transmission or decode URL-encoded strings instantly. Perfect for developers, API testing, and web development.',
      keywords: {
        primary: [
          'url encoder online',
          'url decoder free',
          'encode decode url'
        ],
        longTail: [
          'url encoder decoder online free',
          'encode url string online',
          'decode url encoded string',
          'url encode special characters',
          'online url encoding tool'
        ],
        secondary: [
          'url encode online',
          'url decode online',
          'url converter',
          'encode uri component',
          'decode uri component'
        ]
      },
      canonical: getToolCanonicalUrl('url-encoder-decoder', 'en'),
      ogImage: '/images/tools/url-encoder-og.jpg'
    },
    hi: {
      title: 'URL एनकोडर डिकोडर ऑनलाइन | फ्री URL एनकोड डिकोड टूल 2024',
      description: 'फ्री ऑनलाइन URL एनकोडर और डिकोडर। सुरक्षित ट्रांसमिशन के लिए URLs एनकोड करें या URL-एनकोडेड स्ट्रिंग्स तुरंत डिकोड करें। डेवलपर्स, API टेस्टिंग और वेब डेवलपमेंट के लिए परफेक्ट।',
      keywords: {
        primary: [
          'url encoder online',
          'url decoder free hindi',
          'url encode decode kare'
        ],
        longTail: [
          'url encoder decoder online free hindi',
          'url string encode kare online',
          'url encoded string decode kare',
          'url special characters encode kare',
          'online url encoding tool hindi'
        ],
        secondary: [
          'url encode online',
          'url decode online',
          'url converter',
          'encode uri component',
          'decode uri component'
        ]
      },
      canonical: getToolCanonicalUrl('url-encoder-decoder', 'hi'),
      ogImage: '/images/tools/url-encoder-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'URL Encoder/Decoder',
        subtitle: 'Free URL encoding and decoding for safe data transmission. No signup required.',
        benefits: [
          { icon: '⚡', text: 'Instant encoding' },
          { icon: '🔒', text: '100% Private' },
          { icon: '🌐', text: 'Standards compliant' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Start Encoding',
        privacyNotice: 'All processing happens in your browser. Your data never leaves your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our URL Encoder/Decoder?',
        subtitle: 'Powerful features for reliable URL encoding and decoding',
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
            title: 'Standards Compliant',
            description: 'Uses encodeURIComponent/decodeURIComponent following RFC 3986 standards'
          },
          {
            icon: '📋',
            title: 'Easy Copy/Paste',
            description: 'One-click copy to clipboard for quick workflow integration'
          },
          {
            icon: '🎯',
            title: 'Error Detection',
            description: 'Clear error messages for invalid URL-encoded strings'
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
        title: 'How to Use URL Encoder/Decoder',
        subtitle: 'Simple steps to encode or decode URLs',
        steps: [
          {
            number: 1,
            title: 'Enter Your Text',
            description: 'Paste or type the text/URL you want to encode, or paste URL-encoded string to decode'
          },
          {
            number: 2,
            title: 'Choose Action',
            description: 'Click "Encode" to convert to URL-encoded format, or "Decode" to convert back to original'
          },
          {
            number: 3,
            title: 'Copy Result',
            description: 'Click the copy button to copy the result to your clipboard'
          }
        ],
        tips: [
          'Spaces are encoded as %20 in URL encoding',
          'Special characters like &, =, ? are encoded for safe transmission',
          'Use for query parameters, form data, and API requests'
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to URL Encoding and Decoding',
        intro: 'URL encoding (also called percent-encoding) converts characters into a format that can be safely transmitted over the internet. Our free online tool provides instant URL encoding and decoding using standard encodeURIComponent and decodeURIComponent functions. For binary data encoding, use our <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>, or validate JSON with <a href="/tools/json-formatter">JSON Formatter</a>.',
        sections: [
          {
            title: 'What is URL Encoding?',
            content: 'URL encoding converts special characters into percent-encoded format (%XX) where XX is the hexadecimal value. This ensures URLs can be safely transmitted over HTTP. Characters like spaces, &, =, ?, and non-ASCII characters must be encoded to prevent breaking URLs or causing security issues.',
            keywords: ['url encoding explained', 'what is url encoding', 'percent encoding']
          },
          {
            title: 'When to Use URL Encoding?',
            content: 'Use URL encoding when passing data in query parameters, form submissions, API requests, or any URL component. It\'s essential for handling special characters, spaces, international characters, and symbols in URLs. Common use cases include search queries, user input in URLs, and OAuth parameters.',
            keywords: ['url encoding use cases', 'when to encode urls', 'url encoding examples']
          },
          {
            title: 'URL Encoding vs Other Encoding',
            content: 'URL encoding differs from Base64 encoding. URL encoding is specifically for making text safe in URLs by encoding special characters. Base64 is for converting binary data to text. Use URL encoding for query parameters and form data, Base64 for data transmission and storage.',
            keywords: ['url encoding vs base64', 'encoding comparison', 'url encode decode']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is URL encoding?',
            answer: 'URL encoding (percent-encoding) converts characters into a format safe for URLs by replacing special characters with %XX codes. For example, a space becomes %20, and & becomes %26. This ensures URLs work correctly across all systems.',
            category: 'basics'
          },
          {
            question: 'Is my data secure?',
            answer: 'Yes, absolutely! All encoding and decoding happens directly in your browser using JavaScript. Your data never leaves your device or gets uploaded to any server.',
            category: 'privacy'
          },
          {
            question: 'What characters need URL encoding?',
            answer: 'Special characters like spaces, &, =, ?, #, %, +, and non-ASCII characters (international characters, emojis) need encoding. Our tool automatically encodes all necessary characters using encodeURIComponent.',
            category: 'technical'
          },
          {
            question: 'What\'s the difference between encodeURI and encodeURIComponent?',
            answer: 'encodeURIComponent (used by our tool) encodes all special characters except: A-Z a-z 0-9 - _ . ! ~ * \' ( ). It\'s best for encoding query parameters and form data. encodeURI preserves URL structure characters like :, /, ?, &.',
            category: 'technical'
          },
          {
            question: 'Can I decode invalid URL-encoded strings?',
            answer: 'Our tool validates URL-encoded strings and shows clear error messages if the input contains malformed percent-encoding (e.g., incomplete %XX sequences). This helps identify issues with copied or corrupted encoded data.',
            category: 'errors'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'URL एनकोडर/डिकोडर',
        subtitle: 'सुरक्षित डेटा ट्रांसमिशन के लिए फ्री URL एनकोडिंग और डिकोडिंग। कोई साइनअप की जरूरत नहीं।',
        benefits: [
          { icon: '⚡', text: 'तुरंत एनकोडिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '🌐', text: 'स्टैंडर्ड्स कंप्लायंट' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'एनकोडिंग शुरू करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा URL एनकोडर/डिकोडर क्यों इस्तेमाल करें?',
        subtitle: 'विश्वसनीय URL एनकोडिंग और डिकोडिंग के लिए शक्तिशाली फीचर्स',
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
            title: 'स्टैंडर्ड्स कंप्लायंट',
            description: 'RFC 3986 स्टैंडर्ड्स फॉलो करते हुए encodeURIComponent/decodeURIComponent का इस्तेमाल करता है'
          },
          {
            icon: '📋',
            title: 'आसान कॉपी/पेस्ट',
            description: 'क्विक वर्कफ्लो इंटीग्रेशन के लिए वन-क्लिक क्लिपबोर्ड कॉपी'
          },
          {
            icon: '🎯',
            title: 'एरर डिटेक्शन',
            description: 'इनवैलिड URL-एनकोडेड स्ट्रिंग्स के लिए क्लियर एरर मैसेज'
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
        title: 'URL एनकोडर/डिकोडर कैसे इस्तेमाल करें',
        subtitle: 'URLs को एनकोड या डिकोड करने के सिंपल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट एंटर करें',
            description: 'वह टेक्स्ट/URL पेस्ट या टाइप करें जिसे आप एनकोड करना चाहते हैं, या डिकोड करने के लिए URL-एनकोडेड स्ट्रिंग पेस्ट करें'
          },
          {
            number: 2,
            title: 'एक्शन चुनें',
            description: 'URL-एनकोडेड फॉर्मेट में कन्वर्ट करने के लिए "Encode" क्लिक करें, या ओरिजिनल में वापस कन्वर्ट करने के लिए "Decode" क्लिक करें'
          },
          {
            number: 3,
            title: 'रिजल्ट कॉपी करें',
            description: 'रिजल्ट को अपने क्लिपबोर्ड में कॉपी करने के लिए कॉपी बटन क्लिक करें'
          }
        ],
        tips: [
          'URL एनकोडिंग में स्पेस %20 के रूप में एनकोड होते हैं',
          '&, =, ? जैसे स्पेशल कैरेक्टर्स सुरक्षित ट्रांसमिशन के लिए एनकोड होते हैं',
          'क्वेरी पैरामीटर्स, फॉर्म डेटा और API रिक्वेस्ट्स के लिए इस्तेमाल करें'
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'URL एनकोडिंग और डिकोडिंग की कम्पलीट गाइड',
        intro: 'URL एनकोडिंग (जिसे पर्सेंट-एनकोडिंग भी कहा जाता है) कैरेक्टर्स को एक ऐसे फॉर्मेट में कन्वर्ट करती है जिसे इंटरनेट पर सुरक्षित रूप से ट्रांसमिट किया जा सकता है। हमारा फ्री ऑनलाइन टूल स्टैंडर्ड encodeURIComponent और decodeURIComponent फंक्शन्स का इस्तेमाल करके इंस्टेंट URL एनकोडिंग और डिकोडिंग प्रदान करता है। बाइनरी डेटा एनकोडिंग के लिए हमारे <a href="/tools/base64-encoder-decoder">Base64 Encoder</a> का उपयोग करें, या JSON को <a href="/tools/json-formatter">JSON Formatter</a> से वैलिडेट करें।',
        sections: [
          {
            title: 'URL एनकोडिंग क्या है?',
            content: 'URL एनकोडिंग स्पेशल कैरेक्टर्स को पर्सेंट-एनकोडेड फॉर्मेट (%XX) में कन्वर्ट करती है जहां XX हेक्साडेसिमल वैल्यू है। यह सुनिश्चित करता है कि URLs को HTTP पर सुरक्षित रूप से ट्रांसमिट किया जा सके। स्पेस, &, =, ?, और नॉन-ASCII कैरेक्टर्स जैसे कैरेक्टर्स को URLs तोड़ने या सिक्योरिटी इश्यूज पैदा करने से रोकने के लिए एनकोड किया जाना चाहिए।',
            keywords: ['url encoding explained hindi', 'url encoding kya hai', 'percent encoding']
          },
          {
            title: 'URL एनकोडिंग का इस्तेमाल कब करें?',
            content: 'क्वेरी पैरामीटर्स, फॉर्म सबमिशन, API रिक्वेस्ट्स या किसी URL कंपोनेंट में डेटा पास करते समय URL एनकोडिंग का इस्तेमाल करें। यह URLs में स्पेशल कैरेक्टर्स, स्पेस, इंटरनेशनल कैरेक्टर्स और सिंबल्स को हैंडल करने के लिए ज़रूरी है। कॉमन यूज़ केसेज में सर्च क्वेरीज, URLs में यूज़र इनपुट और OAuth पैरामीटर्स शामिल हैं।',
            keywords: ['url encoding use cases hindi', 'url kab encode kare', 'url encoding examples']
          },
          {
            title: 'URL एनकोडिंग बनाम अन्य एनकोडिंग',
            content: 'URL एनकोडिंग Base64 एनकोडिंग से अलग है। URL एनकोडिंग विशेष रूप से स्पेशल कैरेक्टर्स को एनकोड करके टेक्स्ट को URLs में सेफ बनाने के लिए है। Base64 बाइनरी डेटा को टेक्स्ट में कन्वर्ट करने के लिए है। क्वेरी पैरामीटर्स और फॉर्म डेटा के लिए URL एनकोडिंग, डेटा ट्रांसमिशन और स्टोरेज के लिए Base64 का इस्तेमाल करें।',
            keywords: ['url encoding vs base64 hindi', 'encoding comparison', 'url encode decode']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'URL एनकोडिंग क्या है?',
            answer: 'URL एनकोडिंग (पर्सेंट-एनकोडिंग) स्पेशल कैरेक्टर्स को %XX कोड्स से रिप्लेस करके कैरेक्टर्स को URLs के लिए सेफ फॉर्मेट में कन्वर्ट करती है। उदाहरण के लिए, एक स्पेस %20 बन जाता है, और & %26 बन जाता है। यह सुनिश्चित करता है कि URLs सभी सिस्टम्स पर सही तरीके से काम करें।',
            category: 'basics'
          },
          {
            question: 'क्या मेरा डेटा सुरक्षित है?',
            answer: 'हाँ, बिल्कुल! सभी एनकोडिंग और डिकोडिंग JavaScript का इस्तेमाल करके सीधे आपके ब्राउज़र में होती है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता।',
            category: 'privacy'
          },
          {
            question: 'कौन से कैरेक्टर्स को URL एनकोडिंग की जरूरत है?',
            answer: 'स्पेस, &, =, ?, #, %, +, और नॉन-ASCII कैरेक्टर्स (इंटरनेशनल कैरेक्टर्स, इमोजी) जैसे स्पेशल कैरेक्टर्स को एनकोडिंग की जरूरत है। हमारा टूल encodeURIComponent का इस्तेमाल करके ऑटोमैटिकली सभी जरूरी कैरेक्टर्स एनकोड करता है।',
            category: 'technical'
          },
          {
            question: 'encodeURI और encodeURIComponent में क्या अंतर है?',
            answer: 'encodeURIComponent (हमारे टूल द्वारा इस्तेमाल किया गया) A-Z a-z 0-9 - _ . ! ~ * \' ( ) को छोड़कर सभी स्पेशल कैरेक्टर्स एनकोड करता है। यह क्वेरी पैरामीटर्स और फॉर्म डेटा एनकोड करने के लिए बेस्ट है। encodeURI URL स्ट्रक्चर कैरेक्टर्स जैसे :, /, ?, & को प्रिज़र्व करता है।',
            category: 'technical'
          },
          {
            question: 'क्या मैं इनवैलिड URL-एनकोडेड स्ट्रिंग्स डिकोड कर सकता हूँ?',
            answer: 'हमारा टूल URL-एनकोडेड स्ट्रिंग्स को वैलिडेट करता है और अगर इनपुट में मालफॉर्म्ड पर्सेंट-एनकोडिंग (जैसे, इनकम्पलीट %XX सीक्वेंसेज) हो तो क्लियर एरर मैसेज दिखाता है। यह कॉपी किए गए या करप्टेड एनकोडेड डेटा के साथ इश्यूज आइडेंटिफाई करने में मदद करता है।',
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
        placeholder: 'Enter text/URL to encode or URL-encoded string to decode...',
        pasteButton: 'Paste',
        clearButton: 'Clear'
      },
      actions: {
        encode: 'Encode URL',
        decode: 'Decode URL'
      },
      results: {
        title: 'Result',
        copyButton: 'Copy',
        copiedButton: 'Copied!'
      },
      messages: {
        emptyInput: 'Please enter text to process',
        invalidEncoded: 'Invalid URL-encoded string',
        encodingSuccess: 'Text encoded successfully',
        decodingSuccess: 'URL decoded successfully'
      }
    },
    hi: {
      input: {
        label: 'इनपुट टेक्स्ट',
        placeholder: 'एनकोड करने के लिए टेक्स्ट/URL या डिकोड करने के लिए URL-एनकोडेड स्ट्रिंग एंटर करें...',
        pasteButton: 'पेस्ट करें',
        clearButton: 'क्लियर करें'
      },
      actions: {
        encode: 'URL एनकोड करें',
        decode: 'URL डिकोड करें'
      },
      results: {
        title: 'रिजल्ट',
        copyButton: 'कॉपी करें',
        copiedButton: 'कॉपी हो गया!'
      },
      messages: {
        emptyInput: 'कृपया प्रोसेस करने के लिए टेक्स्ट एंटर करें',
        invalidEncoded: 'इनवैलिड URL-एनकोडेड स्ट्रिंग',
        encodingSuccess: 'टेक्स्ट सफलतापूर्वक एनकोड हो गया',
        decodingSuccess: 'URL सफलतापूर्वक डिकोड हो गया'
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

export default urlEncoderConfig

