/**
 * JSON Formatter Tool Configuration - NEW SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation (wordCounter.config.js)
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-04
 */

import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

export const jsonFormatterConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-04',
    author: 'FreeTools',
    category: 'developer',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'json-formatter',
  name: {
    en: 'JSON Formatter',
    hi: 'JSON फॉर्मेटर'
  },
  slug: 'json-formatter',
  description: {
    en: 'Format, minify, and validate JSON data instantly',
    hi: 'JSON डेटा को तुरंत फॉर्मेट, मिनिफाई और वैलिडेट करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'JSON Formatter Online | Validate and Beautify JSON 2024',
      description: 'Format, minify, and validate JSON data online. Free JSON formatter and validator for developers, API testing, and debugging.',
      keywords: {
        primary: [
          'json formatter online',
          'validate json online',
          'beautify json code'
        ],
        longTail: [
          'json formatter online free',
          'validate and format json',
          'json minify and beautify',
          'json syntax checker online',
          'format json data online'
        ],
        secondary: [
          'validate json online',
          'beautify json code',
          'json minify online',
          'format json data',
          'json validator'
        ]
      },
      canonical: getToolCanonicalUrl('json-formatter', 'en'),
      ogImage: '/images/tools/json-formatter-og.jpg'
    },
    hi: {
      title: 'JSON फॉर्मेटर ऑनलाइन | JSON वैलिडेट और ब्यूटिफाई करें 2024',
      description: 'JSON डेटा को ऑनलाइन फॉर्मेट, मिनिफाई और वैलिडेट करें। डेवलपर्स, API टेस्टिंग और डिबगिंग के लिए फ्री JSON फॉर्मेटर और वैलिडेटर।',
      keywords: {
        primary: [
          'json formatter online',
          'json online validate kare',
          'json code beautify kare'
        ],
        longTail: [
          'json formatter online free hindi',
          'json validate aur format kare',
          'json minify aur beautify kare',
          'json syntax checker online hindi',
          'json data format kare online'
        ],
        secondary: [
          'json online validate kare',
          'json code beautify kare',
          'json minify online',
          'json data format kare',
          'json validator'
        ]
      },
      canonical: getToolCanonicalUrl('json-formatter', 'hi'),
      ogImage: '/images/tools/json-formatter-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'JSON Formatter',
        subtitle: 'Format, validate, and minify JSON data instantly. Perfect for developers, API testing, and debugging. Works with any JSON structure.',
        benefits: [
          { icon: '⚡', text: 'Instant formatting' },
          { icon: '✅', text: 'Syntax validation' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: {
          primary: 'Start Formatting',
          secondary: 'Learn More'
        },
        privacyNotice: 'All JSON processing happens in your browser. Your data never leaves your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our JSON Formatter?',
        subtitle: 'Essential JSON tools for developers and API testing',
        items: [
          {
            icon: '🎨',
            title: 'Pretty Print JSON',
            description: 'Format JSON with proper indentation and line breaks for easy reading'
          },
          {
            icon: '📦',
            title: 'Minify JSON',
            description: 'Remove all unnecessary whitespace to reduce file size'
          },
          {
            icon: '✅',
            title: 'Validate JSON',
            description: 'Check JSON syntax and get clear error messages for invalid JSON'
          },
          {
            icon: '🔒',
            title: '100% Private & Secure',
            description: 'All processing happens in your browser. Your JSON never leaves your device'
          },
          {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Works perfectly on smartphones, tablets, and desktops'
          },
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Instant formatting and validation with no server delays'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use This Tool',
        subtitle: 'Simple steps to format your JSON',
        steps: [
          {
            number: 1,
            title: 'Paste Your JSON',
            description: 'Copy and paste your JSON data into the text area. You can paste from APIs, config files, or any JSON source.',
            icon: '📝'
          },
          {
            number: 2,
            title: 'Choose Action',
            description: 'Select "Format" to beautify your JSON with proper indentation, or "Minify" to compress it.',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'View Results',
            description: 'See your formatted or minified JSON instantly. If there are syntax errors, you\'ll get clear error messages.',
            icon: '✨'
          },
          {
            number: 4,
            title: 'Copy & Use',
            description: 'Copy the formatted JSON and use it in your code, API requests, or configuration files.',
            icon: '📋'
          }
        ],
        tips: [
          {
            icon: '🐛',
            title: 'For Debugging',
            description: 'Format JSON to easily spot errors and understand structure'
          },
          {
            icon: '🚀',
            title: 'For APIs',
            description: 'Validate API responses and format them for documentation'
          },
          {
            icon: '📦',
            title: 'For Production',
            description: 'Minify JSON to reduce file size and improve load times'
          },
          {
            icon: '📚',
            title: 'For Learning',
            description: 'Understand JSON structure by formatting complex data'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to JSON Formatting and Validation',
        intro: 'This free online JSON formatter helps you format, validate, and minify JSON data instantly. Perfect for developers working with APIs, configuration files, and data structures. All processing happens in your browser for complete privacy and security. You can also convert JSON using our <a href="/tools/json-to-csv">JSON to CSV Converter</a> or encode data with <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>.',
        sections: [
          {
            title: 'JSON Formatter for Developers',
            content: 'Developers work with JSON daily for APIs, configuration files, and data exchange. Our JSON formatter provides instant pretty printing with proper indentation, making complex JSON structures easy to read and understand. Format JSON from API responses, config files, or any source. The tool handles nested objects, arrays, and all valid JSON structures. Perfect for debugging, code reviews, and documentation.',
            keywords: ['json formatter for developers', 'format json online', 'json pretty print']
          },
          {
            title: 'JSON Validator and Syntax Checker',
            content: 'Invalid JSON causes runtime errors and API failures. Our JSON validator checks syntax in real-time and provides clear, actionable error messages. It identifies missing commas, unclosed brackets, invalid characters, and other common JSON errors. The validator follows the official JSON specification (RFC 8259) ensuring your JSON is standards-compliant. Essential for API development, data validation, and quality assurance.',
            keywords: ['json validator', 'json syntax checker', 'validate json online']
          },
          {
            title: 'JSON Minifier for Production',
            content: 'Minified JSON reduces file size by removing unnecessary whitespace, improving load times and reducing bandwidth usage. Our JSON minifier compresses JSON while maintaining validity, perfect for production environments, API responses, and configuration files. Minification can reduce JSON size by 20-40% depending on formatting. Ideal for mobile apps, web applications, and any scenario where file size matters.',
            keywords: ['json minifier', 'minify json', 'compress json']
          },
          {
            title: 'JSON Beautifier and Pretty Printer',
            content: 'Beautified JSON is easier to read, debug, and maintain. Our JSON beautifier adds proper indentation (2 spaces), line breaks, and formatting to make JSON human-readable. Essential for code reviews, documentation, and understanding complex data structures. The beautifier preserves all data while improving readability. Works with any valid JSON including nested objects, arrays, strings, numbers, booleans, and null values.',
            keywords: ['json beautifier', 'json pretty printer', 'beautify json']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is JSON?',
            answer: 'JSON (JavaScript Object Notation) is a lightweight data format used for data exchange between applications. It\'s human-readable, easy to parse, and widely supported across programming languages. JSON uses key-value pairs and supports objects, arrays, strings, numbers, booleans, and null.',
            category: 'basics'
          },
          {
            question: 'How do I format JSON?',
            answer: 'Paste your JSON into the text area and click "Format". The tool will add proper indentation (2 spaces per level), line breaks, and spacing to make your JSON easy to read. If your JSON has syntax errors, you\'ll see an error message.',
            category: 'usage'
          },
          {
            question: 'What does minify JSON mean?',
            answer: 'Minifying JSON removes all unnecessary whitespace (spaces, tabs, line breaks) to reduce file size. This is useful for production environments where smaller files mean faster load times and reduced bandwidth usage. Minified JSON is still valid but harder for humans to read.',
            category: 'features'
          },
          {
            question: 'How do I validate JSON?',
            answer: 'Simply paste your JSON into the tool. It automatically validates the syntax. If your JSON is invalid, you\'ll see a clear error message indicating what\'s wrong and where the error is located. Common errors include missing commas, unclosed brackets, and invalid characters.',
            category: 'usage'
          },
          {
            question: 'Is my JSON data safe?',
            answer: 'Absolutely safe! All JSON processing happens entirely in your browser using JavaScript. Your JSON never gets uploaded to any server or leaves your device. We have zero access to your data. This makes it safe for sensitive data, API keys, and confidential information.',
            category: 'privacy'
          },
          {
            question: 'Can I format large JSON files?',
            answer: 'Yes! Our tool can handle large JSON files efficiently. It\'s optimized for performance and works with JSON files of any size. However, very large files (several MB) may take a moment to process depending on your device\'s performance.',
            category: 'features'
          },
          {
            question: 'What JSON errors does it detect?',
            answer: 'The validator detects all JSON syntax errors including: missing or extra commas, unclosed brackets or braces, invalid characters, unquoted keys, trailing commas, single quotes instead of double quotes, and more. Error messages are clear and help you fix issues quickly.',
            category: 'features'
          },
          {
            question: 'Can I use this for API responses?',
            answer: 'Yes! This tool is perfect for formatting and validating API responses. Paste the JSON response from your API, format it for easy reading, validate the structure, and use it in your documentation or debugging. Essential for API development and testing.',
            category: 'usage'
          },
          {
            question: 'Does it work offline?',
            answer: 'Once the page is loaded, the tool works completely offline since all processing happens in your browser. No internet connection is needed for formatting, validating, or minifying JSON.',
            category: 'features'
          },
          {
            question: 'Is this tool really free?',
            answer: 'Yes, completely free! No registration, no hidden fees, no watermarks, no limits. Use it as many times as you want for any purpose - personal projects, commercial work, or learning.',
            category: 'pricing'
          }
        ]
      }
    },

    hi: {
      // Hero Section
      hero: {
        title: 'JSON फॉर्मेटर',
        subtitle: 'JSON डेटा को तुरंत फॉर्मेट, वैलिडेट और मिनिफाई करें। डेवलपर्स, API टेस्टिंग और डिबगिंग के लिए परफेक्ट। किसी भी JSON स्ट्रक्चर के साथ काम करता है।',
        benefits: [
          { icon: '⚡', text: 'तुरंत फॉर्मेटिंग' },
          { icon: '✅', text: 'सिंटैक्स वैलिडेशन' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: {
          primary: 'फॉर्मेटिंग शुरू करें',
          secondary: 'और जानें'
        },
        privacyNotice: 'सभी JSON प्रोसेसिंग आपके ब्राउज़र में होती है। आपका डेटा आपके डिवाइस से बाहर नहीं जाता।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा JSON फॉर्मेटर क्यों इस्तेमाल करें?',
        subtitle: 'डेवलपर्स और API टेस्टिंग के लिए ज़रूरी JSON टूल्स',
        items: [
          {
            icon: '🎨',
            title: 'JSON प्रिटी प्रिंट',
            description: 'आसान रीडिंग के लिए प्रॉपर इंडेंटेशन और लाइन ब्रेक के साथ JSON फॉर्मेट करें'
          },
          {
            icon: '📦',
            title: 'JSON मिनिफाई',
            description: 'फाइल साइज़ कम करने के लिए सभी अनावश्यक व्हाइटस्पेस हटाएं'
          },
          {
            icon: '✅',
            title: 'JSON वैलिडेट',
            description: 'JSON सिंटैक्स चेक करें और इनवैलिड JSON के लिए क्लियर एरर मैसेज पाएं'
          },
          {
            icon: '🔒',
            title: '100% प्राइवेट और सिक्योर',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका JSON आपके डिवाइस से बाहर नहीं जाता'
          },
          {
            icon: '📱',
            title: 'मोबाइल ऑप्टिमाइज़्ड',
            description: 'स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करता है'
          },
          {
            icon: '⚡',
            title: 'लाइटनिंग फास्ट',
            description: 'बिना सर्वर डिले के तुरंत फॉर्मेटिंग और वैलिडेशन'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'अपना JSON फॉर्मेट करने के सरल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना JSON पेस्ट करें',
            description: 'अपना JSON डेटा टेक्स्ट एरिया में कॉपी और पेस्ट करें। आप APIs, कॉन्फिग फाइल्स या किसी भी JSON सोर्स से पेस्ट कर सकते हैं।',
            icon: '📝'
          },
          {
            number: 2,
            title: 'एक्शन चुनें',
            description: 'प्रॉपर इंडेंटेशन के साथ अपने JSON को ब्यूटिफाई करने के लिए "Format" सेलेक्ट करें, या इसे कंप्रेस करने के लिए "Minify"।',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'रिज़ल्ट देखें',
            description: 'अपना फॉर्मेटेड या मिनिफाइड JSON तुरंत देखें। अगर सिंटैक्स एरर हैं, तो आपको क्लियर एरर मैसेज मिलेंगे।',
            icon: '✨'
          },
          {
            number: 4,
            title: 'कॉपी और इस्तेमाल करें',
            description: 'फॉर्मेटेड JSON कॉपी करें और अपने कोड, API रिक्वेस्ट या कॉन्फिगरेशन फाइल्स में इस्तेमाल करें।',
            icon: '📋'
          }
        ],
        tips: [
          {
            icon: '🐛',
            title: 'डिबगिंग के लिए',
            description: 'एरर आसानी से स्पॉट करने और स्ट्रक्चर समझने के लिए JSON फॉर्मेट करें'
          },
          {
            icon: '🚀',
            title: 'APIs के लिए',
            description: 'API रिस्पॉन्स वैलिडेट करें और डॉक्यूमेंटेशन के लिए फॉर्मेट करें'
          },
          {
            icon: '📦',
            title: 'प्रोडक्शन के लिए',
            description: 'फाइल साइज़ कम करने और लोड टाइम इम्प्रूव करने के लिए JSON मिनिफाई करें'
          },
          {
            icon: '📚',
            title: 'लर्निंग के लिए',
            description: 'कॉम्प्लेक्स डेटा फॉर्मेट करके JSON स्ट्रक्चर समझें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'JSON फॉर्मेटिंग और वैलिडेशन की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन JSON फॉर्मेटर आपको JSON डेटा को तुरंत फॉर्मेट, वैलिडेट और मिनिफाई करने में मदद करता है। APIs, कॉन्फिगरेशन फाइल्स और डेटा स्ट्रक्चर के साथ काम करने वाले डेवलपर्स के लिए परफेक्ट। पूरी प्राइवेसी और सिक्योरिटी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप हमारे <a href="/tools/json-to-csv">JSON to CSV Converter</a> का उपयोग करके JSON को कन्वर्ट भी कर सकते हैं या <a href="/tools/base64-encoder-decoder">Base64 Encoder</a> से डेटा एनकोड कर सकते हैं।',
        sections: [
          {
            title: 'डेवलपर्स के लिए JSON फॉर्मेटर',
            content: 'डेवलपर्स APIs, कॉन्फिगरेशन फाइल्स और डेटा एक्सचेंज के लिए रोज़ाना JSON के साथ काम करते हैं। हमारा JSON फॉर्मेटर प्रॉपर इंडेंटेशन के साथ तुरंत प्रिटी प्रिंटिंग प्रदान करता है, जो कॉम्प्लेक्स JSON स्ट्रक्चर को पढ़ने और समझने में आसान बनाता है। API रिस्पॉन्स, कॉन्फिग फाइल्स या किसी भी सोर्स से JSON फॉर्मेट करें। टूल नेस्टेड ऑब्जेक्ट, एरे और सभी वैलिड JSON स्ट्रक्चर हैंडल करता है। डिबगिंग, कोड रिव्यू और डॉक्यूमेंटेशन के लिए परफेक्ट।',
            keywords: ['डेवलपर्स के लिए JSON फॉर्मेटर', 'ऑनलाइन JSON फॉर्मेट करें', 'JSON प्रिटी प्रिंट']
          },
          {
            title: 'JSON वैलिडेटर और सिंटैक्स चेकर',
            content: 'इनवैलिड JSON रनटाइम एरर और API फेलियर का कारण बनता है। हमारा JSON वैलिडेटर रियल-टाइम में सिंटैक्स चेक करता है और क्लियर, एक्शनेबल एरर मैसेज प्रदान करता है। यह मिसिंग कॉमा, अनक्लोज़्ड ब्रैकेट, इनवैलिड कैरेक्टर और अन्य कॉमन JSON एरर आइडेंटिफाई करता है। वैलिडेटर ऑफिशियल JSON स्पेसिफिकेशन (RFC 8259) फॉलो करता है जो सुनिश्चित करता है कि आपका JSON स्टैंडर्ड-कंप्लाइंट है। API डेवलपमेंट, डेटा वैलिडेशन और क्वालिटी एश्योरेंस के लिए ज़रूरी।',
            keywords: ['JSON वैलिडेटर', 'JSON सिंटैक्स चेकर', 'ऑनलाइन JSON वैलिडेट करें']
          },
          {
            title: 'प्रोडक्शन के लिए JSON मिनिफायर',
            content: 'मिनिफाइड JSON अनावश्यक व्हाइटस्पेस हटाकर फाइल साइज़ कम करता है, लोड टाइम इम्प्रूव करता है और बैंडविड्थ यूसेज कम करता है। हमारा JSON मिनिफायर वैलिडिटी बनाए रखते हुए JSON कंप्रेस करता है, प्रोडक्शन एनवायरनमेंट, API रिस्पॉन्स और कॉन्फिगरेशन फाइल्स के लिए परफेक्ट। मिनिफिकेशन फॉर्मेटिंग के आधार पर JSON साइज़ 20-40% तक कम कर सकता है। मोबाइल ऐप्स, वेब एप्लिकेशन और किसी भी सिनेरियो के लिए आइडियल जहां फाइल साइज़ मैटर करता है।',
            keywords: ['JSON मिनिफायर', 'JSON मिनिफाई करें', 'JSON कंप्रेस करें']
          },
          {
            title: 'JSON ब्यूटिफायर और प्रिटी प्रिंटर',
            content: 'ब्यूटिफाइड JSON पढ़ने, डिबग करने और मेंटेन करने में आसान है। हमारा JSON ब्यूटिफायर JSON को ह्यूमन-रीडेबल बनाने के लिए प्रॉपर इंडेंटेशन (2 स्पेस), लाइन ब्रेक और फॉर्मेटिंग ऐड करता है। कोड रिव्यू, डॉक्यूमेंटेशन और कॉम्प्लेक्स डेटा स्ट्रक्चर समझने के लिए ज़रूरी। ब्यूटिफायर रीडेबिलिटी इम्प्रूव करते हुए सभी डेटा प्रिज़र्व करता है। नेस्टेड ऑब्जेक्ट, एरे, स्ट्रिंग, नंबर, बूलियन और null वैल्यू सहित किसी भी वैलिड JSON के साथ काम करता है।',
            keywords: ['JSON ब्यूटिफायर', 'JSON प्रिटी प्रिंटर', 'JSON ब्यूटिफाई करें']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'JSON क्या है?',
            answer: 'JSON (JavaScript Object Notation) एक लाइटवेट डेटा फॉर्मेट है जो एप्लिकेशन के बीच डेटा एक्सचेंज के लिए इस्तेमाल होता है। यह ह्यूमन-रीडेबल है, पार्स करने में आसान है और प्रोग्रामिंग लैंग्वेज में व्यापक रूप से सपोर्टेड है। JSON key-value पेयर इस्तेमाल करता है और ऑब्जेक्ट, एरे, स्ट्रिंग, नंबर, बूलियन और null सपोर्ट करता है।',
            category: 'basics'
          },
          {
            question: 'मैं JSON कैसे फॉर्मेट करूं?',
            answer: 'अपना JSON टेक्स्ट एरिया में पेस्ट करें और "Format" क्लिक करें। टूल आपके JSON को पढ़ने में आसान बनाने के लिए प्रॉपर इंडेंटेशन (प्रति लेवल 2 स्पेस), लाइन ब्रेक और स्पेसिंग ऐड करेगा। अगर आपके JSON में सिंटैक्स एरर हैं, तो आपको एरर मैसेज दिखाई देगा।',
            category: 'usage'
          },
          {
            question: 'JSON मिनिफाई करने का क्या मतलब है?',
            answer: 'JSON मिनिफाई करने से फाइल साइज़ कम करने के लिए सभी अनावश्यक व्हाइटस्पेस (स्पेस, टैब, लाइन ब्रेक) हट जाते हैं। यह प्रोडक्शन एनवायरनमेंट के लिए यूज़फुल है जहां छोटी फाइल का मतलब तेज़ लोड टाइम और कम बैंडविड्थ यूसेज है। मिनिफाइड JSON अभी भी वैलिड है लेकिन ह्यूमन के लिए पढ़ना मुश्किल है।',
            category: 'features'
          },
          {
            question: 'मैं JSON कैसे वैलिडेट करूं?',
            answer: 'बस अपना JSON टूल में पेस्ट करें। यह ऑटोमैटिकली सिंटैक्स वैलिडेट करता है। अगर आपका JSON इनवैलिड है, तो आपको एक क्लियर एरर मैसेज दिखाई देगा जो बताएगा कि क्या गलत है और एरर कहां है। कॉमन एरर में मिसिंग कॉमा, अनक्लोज़्ड ब्रैकेट और इनवैलिड कैरेक्टर शामिल हैं।',
            category: 'usage'
          },
          {
            question: 'क्या मेरा JSON डेटा सेफ है?',
            answer: 'बिल्कुल सेफ! सभी JSON प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका JSON कभी किसी सर्वर पर अपलोड नहीं होता या आपके डिवाइस से बाहर नहीं जाता। हमारी आपके डेटा तक ज़ीरो एक्सेस है। यह सेंसिटिव डेटा, API keys और कॉन्फिडेंशियल इन्फॉर्मेशन के लिए सेफ बनाता है।',
            category: 'privacy'
          },
          {
            question: 'क्या मैं बड़ी JSON फाइल्स फॉर्मेट कर सकता हूँ?',
            answer: 'हाँ! हमारा टूल बड़ी JSON फाइल्स को एफिशिएंटली हैंडल कर सकता है। यह परफॉर्मेंस के लिए ऑप्टिमाइज़्ड है और किसी भी साइज़ की JSON फाइल्स के साथ काम करता है। हालांकि, बहुत बड़ी फाइल्स (कई MB) को आपके डिवाइस की परफॉर्मेंस के आधार पर प्रोसेस होने में एक पल लग सकता है।',
            category: 'features'
          },
          {
            question: 'यह कौन से JSON एरर डिटेक्ट करता है?',
            answer: 'वैलिडेटर सभी JSON सिंटैक्स एरर डिटेक्ट करता है जिसमें शामिल हैं: मिसिंग या एक्स्ट्रा कॉमा, अनक्लोज़्ड ब्रैकेट या ब्रेसेस, इनवैलिड कैरेक्टर, अनक्वोटेड keys, ट्रेलिंग कॉमा, डबल क्वोट्स की जगह सिंगल क्वोट्स, और अधिक। एरर मैसेज क्लियर हैं और आपको इश्यू जल्दी फिक्स करने में मदद करते हैं।',
            category: 'features'
          },
          {
            question: 'क्या मैं इसे API रिस्पॉन्स के लिए इस्तेमाल कर सकता हूँ?',
            answer: 'हाँ! यह टूल API रिस्पॉन्स फॉर्मेट और वैलिडेट करने के लिए परफेक्ट है। अपने API से JSON रिस्पॉन्स पेस्ट करें, आसान रीडिंग के लिए फॉर्मेट करें, स्ट्रक्चर वैलिडेट करें, और अपने डॉक्यूमेंटेशन या डिबगिंग में इस्तेमाल करें। API डेवलपमेंट और टेस्टिंग के लिए ज़रूरी।',
            category: 'usage'
          },
          {
            question: 'क्या यह ऑफलाइन काम करता है?',
            answer: 'एक बार पेज लोड होने के बाद, टूल पूरी तरह से ऑफलाइन काम करता है क्योंकि सभी प्रोसेसिंग आपके ब्राउज़र में होती है। JSON फॉर्मेट, वैलिडेट या मिनिफाई करने के लिए इंटरनेट कनेक्शन की ज़रूरत नहीं है।',
            category: 'features'
          },
          {
            question: 'क्या यह टूल वाकई फ्री है?',
            answer: 'हाँ, पूरी तरह फ्री! कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं, कोई लिमिट नहीं। किसी भी पर्पज के लिए जितनी बार चाहें इस्तेमाल करें - पर्सनल प्रोजेक्ट, कमर्शियल वर्क या लर्निंग।',
            category: 'pricing'
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
        placeholder: 'Paste your JSON here...',
        clearButton: 'Clear',
        label: 'JSON Input'
      },
      actions: {
        format: 'Format',
        minify: 'Minify',
        validate: 'Validate'
      },
      results: {
        title: 'Result',
        copyButton: 'Copy',
        copiedButton: 'Copied!'
      },
      messages: {
        emptyInput: 'Paste JSON to format, minify, or validate',
        validJson: '✅ Valid JSON',
        invalidJson: '❌ Invalid JSON',
        formatted: 'JSON formatted successfully',
        minified: 'JSON minified successfully',
        error: 'Error'
      }
    },
    hi: {
      input: {
        placeholder: 'अपना JSON यहाँ पेस्ट करें...',
        clearButton: 'क्लियर करें',
        label: 'JSON इनपुट'
      },
      actions: {
        format: 'फॉर्मेट',
        minify: 'मिनिफाई',
        validate: 'वैलिडेट'
      },
      results: {
        title: 'रिज़ल्ट',
        copyButton: 'कॉपी करें',
        copiedButton: 'कॉपी हो गया!'
      },
      messages: {
        emptyInput: 'फॉर्मेट, मिनिफाई या वैलिडेट करने के लिए JSON पेस्ट करें',
        validJson: '✅ वैलिड JSON',
        invalidJson: '❌ इनवैलिड JSON',
        formatted: 'JSON सफलतापूर्वक फॉर्मेट हो गया',
        minified: 'JSON सफलतापूर्वक मिनिफाई हो गया',
        error: 'एरर'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Required)
  // ============================================================================
  defaultSettings: {
    indentSize: 2, // Spaces for indentation
    action: 'format' // Default action: format, minify, validate
  },

  // ============================================================================
  // 7. VALIDATION (Required)
  // ============================================================================
  validation: {
    maxTextLength: 10000000, // 10 MB
    minTextLength: 0
  },

  // ============================================================================
  // 8. TOOL-SPECIFIC CONFIG (Optional)
  // ============================================================================
  toolConfig: {
    intent: 'transform', // Primary intent: transform JSON
    features: [
      'format-json',
      'minify-json',
      'validate-json'
    ],
    useCases: ['api-development', 'debugging', 'configuration', 'data-validation'],
    supportedFormats: ['json']
  },

  // ============================================================================
  // 9. RELATIONSHIPS (Optional)
  // ============================================================================
  relationships: {
    relatedTools: ['base64-encoder', 'url-encoder', 'color-picker'],
    alternativeTools: ['xml-formatter', 'yaml-formatter'],
    workflowTools: ['json-validator', 'api-tester']
  },

  // ============================================================================
  // 10. STATS (Optional - for analytics)
  // ============================================================================
  stats: {
    averageProcessingTime: 0.05, // seconds (instant)
    supportedLanguages: ['all'], // Works with any language
    maxTextSize: 10000000 // 10 MB
  }
}

export default jsonFormatterConfig

