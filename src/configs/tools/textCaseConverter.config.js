/**
 * Text Case Converter Tool Configuration - SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation (wordCounter.config.js)
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-04
 */

export const textCaseConverterConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-04',
    author: 'FreeTools',
    category: 'text',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'text-case-converter',
  name: {
    en: 'Text Case Converter',
    hi: 'टेक्स्ट केस कन्वर्टर'
  },
  slug: 'text-case-converter',
  description: {
    en: 'Convert text to uppercase, lowercase, title case, and more instantly',
    hi: 'टेक्स्ट को अपरकेस, लोअरकेस, टाइटल केस और अधिक में तुरंत कन्वर्ट करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Text Case Converter | Uppercase Lowercase Title Case',
      description: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case online. Free text case converter for formatting documents and content.',
      keywords: {
        primary: [
          'text case converter',
          'uppercase lowercase converter',
          'title case converter'
        ],
        secondary: [
          'sentence case converter',
          'change text capitalization',
          'convert text case',
          'text formatting tool'
        ],
        longTail: [
          'convert text to uppercase online',
          'lowercase to uppercase converter free',
          'title case converter online free',
          'change text case online',
          'text capitalization converter'
        ]
      },
      canonical: 'https://freetools.com/tools/text-case-converter',
      ogImage: '/images/tools/text-case-converter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Text Case Converter',
        description: 'Free online text case converter tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'टेक्स्ट केस कन्वर्टर | अपरकेस लोअरकेस टाइटल केस',
      description: 'टेक्स्ट को UPPERCASE, lowercase, Title Case या Sentence case में ऑनलाइन कन्वर्ट करें। डॉक्यूमेंट और कंटेंट फॉर्मेट करने के लिए फ्री टेक्स्ट केस कन्वर्टर।',
      keywords: {
        primary: [
          'text case converter',
          'uppercase lowercase converter',
          'title case converter'
        ],
        secondary: [
          'sentence case converter',
          'text capitalization badle',
          'text case convert kare',
          'text formatting tool'
        ],
        longTail: [
          'text ko uppercase mein convert kare online',
          'lowercase se uppercase converter free',
          'title case converter online free',
          'text case online badle',
          'text capitalization converter'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/text-case-converter',
      ogImage: '/images/tools/text-case-converter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'टेक्स्ट केस कन्वर्टर',
        description: 'फ्री ऑनलाइन टेक्स्ट केस कन्वर्टर टूल',
        applicationCategory: 'UtilityApplication',
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
        title: 'Text Case Converter',
        subtitle: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Perfect for formatting documents, emails, and content.',
        benefits: [
          { icon: '⚡', text: 'Instant conversion' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: {
          primary: 'Start Converting',
          secondary: 'Learn More'
        },
        privacyNotice: 'All text processing happens in your browser. Your content never leaves your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our Text Case Converter?',
        subtitle: 'Powerful text transformation tools for all your formatting needs',
        items: [
          {
            icon: '🔤',
            title: 'Multiple Case Options',
            description: 'Convert to UPPERCASE, lowercase, Title Case, Sentence case, and more with one click'
          },
          {
            icon: '⚡',
            title: 'Instant Conversion',
            description: 'See results immediately as you select different case options'
          },
          {
            icon: '🔒',
            title: '100% Private & Secure',
            description: 'All processing happens in your browser. Your text never leaves your device'
          },
          {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Works perfectly on smartphones, tablets, and desktops'
          },
          {
            icon: '📋',
            title: 'Easy Copy & Paste',
            description: 'Quickly copy converted text to clipboard and paste anywhere'
          },
          {
            icon: '🎯',
            title: 'Perfect for Writers',
            description: 'Ideal for formatting documents, emails, social media posts, and any text content'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use This Tool',
        subtitle: 'Simple steps to convert your text case',
        steps: [
          {
            number: 1,
            title: 'Enter or Paste Your Text',
            description: 'Type directly into the text area or paste your content from any source (Word, Google Docs, websites, etc.).',
            icon: '📝'
          },
          {
            number: 2,
            title: 'Select Case Option',
            description: 'Choose from UPPERCASE, lowercase, Title Case, Sentence case, or other formatting options.',
            icon: '🔤'
          },
          {
            number: 3,
            title: 'View Converted Text',
            description: 'See your text instantly transformed to the selected case format in the result area.',
            icon: '✨'
          },
          {
            number: 4,
            title: 'Copy and Use',
            description: 'Copy the converted text to your clipboard and paste it wherever you need it.',
            icon: '📋'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'For Headings',
            description: 'Use Title Case for professional-looking headings and titles'
          },
          {
            icon: '📧',
            title: 'For Emails',
            description: 'Use Sentence case for natural, professional email content'
          },
          {
            icon: '📱',
            title: 'For Social Media',
            description: 'Use UPPERCASE for emphasis or lowercase for casual posts'
          },
          {
            icon: '📄',
            title: 'For Documents',
            description: 'Quickly fix incorrectly formatted text in documents'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Text Case Conversion',
        intro: 'This free online text case converter helps you transform text instantly. Convert to UPPERCASE, lowercase, Title Case, Sentence case, and more. Perfect for writers formatting documents, professionals creating emails, content creators managing social media, and anyone who needs quick text transformation. All processing happens in your browser for complete privacy. You can also <a href="/tools/word-counter">count words</a> or <a href="/tools/remove-extra-spaces">clean up spacing</a> in your text.',
        sections: [
          {
            title: 'UPPERCASE Converter - Make Text All Caps',
            content: 'Convert any text to UPPERCASE (all capital letters) instantly. Perfect for creating headings, emphasizing important text, or formatting acronyms. UPPERCASE text is commonly used in titles, headers, and when you want to draw attention to specific content. Our tool handles special characters and preserves spacing while converting all letters to capitals.',
            keywords: ['uppercase converter', 'all caps converter', 'capital letters tool']
          },
          {
            title: 'lowercase converter - make text all small',
            content: 'Transform text to lowercase (all small letters) with one click. Useful for fixing text that was accidentally typed in caps lock, creating casual social media posts, or standardizing text format. lowercase text is often preferred for URLs, email addresses, and modern design aesthetics. The tool converts all letters while maintaining numbers and special characters.',
            keywords: ['lowercase converter', 'small letters converter', 'uncapitalize text']
          },
          {
            title: 'Title Case Converter - Capitalize Each Word',
            content: 'Convert text to Title Case where the first letter of each word is capitalized. This is the standard format for book titles, article headlines, and professional documents. Our Title Case converter follows proper capitalization rules, making your headings and titles look polished and professional. Perfect for blog posts, presentations, and formal documents.',
            keywords: ['title case converter', 'capitalize each word', 'headline formatter']
          },
          {
            title: 'Sentence Case Converter - Natural Text Format',
            content: 'Transform text to Sentence case where only the first letter of each sentence is capitalized. This is the most natural and readable format for body text, emails, and general content. Our tool intelligently identifies sentence boundaries and capitalizes appropriately, making it easy to fix improperly formatted text and create professional-looking content.',
            keywords: ['sentence case converter', 'natural text format', 'proper capitalization']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is text case conversion?',
            answer: 'Text case conversion is the process of changing the capitalization of letters in text. Common conversions include UPPERCASE (all capitals), lowercase (all small letters), Title Case (first letter of each word capitalized), and Sentence case (first letter of each sentence capitalized).',
            category: 'basics'
          },
          {
            question: 'How do I convert text to uppercase?',
            answer: 'Simply paste or type your text into the input area and click the "UPPERCASE" button. All letters will be instantly converted to capital letters while preserving numbers, spaces, and special characters.',
            category: 'usage'
          },
          {
            question: 'What is Title Case?',
            answer: 'Title Case is a capitalization style where the first letter of each major word is capitalized. It\'s commonly used for titles, headings, and headlines. Our tool automatically applies proper Title Case rules.',
            category: 'basics'
          },
          {
            question: 'Is my text data safe and private?',
            answer: 'Absolutely safe! All text processing happens entirely in your browser using JavaScript. Your text never leaves your device or gets uploaded to any server. We have zero access to your content.',
            category: 'privacy'
          },
          {
            question: 'Can I convert text with special characters?',
            answer: 'Yes! Our tool handles special characters, numbers, punctuation, and symbols correctly. Only letters are converted while all other characters remain unchanged.',
            category: 'features'
          },
          {
            question: 'Does it work on mobile devices?',
            answer: 'Yes! Our text case converter is fully mobile-optimized and works perfectly on smartphones and tablets. You can convert text on the go, anywhere, anytime.',
            category: 'compatibility'
          },
          {
            question: 'Can I convert multiple paragraphs at once?',
            answer: 'Yes! You can paste any amount of text, including multiple paragraphs, and convert it all at once. The tool handles large text efficiently.',
            category: 'features'
          },
          {
            question: 'Is this tool really free?',
            answer: 'Yes, completely free! No registration, no hidden fees, no watermarks, no limits. Use it as many times as you want for any purpose.',
            category: 'pricing'
          }
        ]
      }
    },

    hi: {
      // Hero Section
      hero: {
        title: 'टेक्स्ट केस कन्वर्टर',
        subtitle: 'टेक्स्ट को UPPERCASE, lowercase, Title Case, Sentence case और अधिक में कन्वर्ट करें। डॉक्यूमेंट, ईमेल और कंटेंट फॉर्मेट करने के लिए परफेक्ट।',
        benefits: [
          { icon: '⚡', text: 'तुरंत कन्वर्ज़न' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: {
          primary: 'कन्वर्ट करना शुरू करें',
          secondary: 'और जानें'
        },
        privacyNotice: 'सभी टेक्स्ट प्रोसेसिंग आपके ब्राउज़र में होती है। आपका कंटेंट आपके डिवाइस से बाहर नहीं जाता।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा टेक्स्ट केस कन्वर्टर क्यों इस्तेमाल करें?',
        subtitle: 'आपकी सभी फॉर्मेटिंग ज़रूरतों के लिए पावरफुल टेक्स्ट ट्रांसफॉर्मेशन टूल्स',
        items: [
          {
            icon: '🔤',
            title: 'मल्टिपल केस ऑप्शन',
            description: 'एक क्लिक से UPPERCASE, lowercase, Title Case, Sentence case और अधिक में कन्वर्ट करें'
          },
          {
            icon: '⚡',
            title: 'तुरंत कन्वर्ज़न',
            description: 'अलग-अलग केस ऑप्शन सेलेक्ट करते ही तुरंत रिज़ल्ट देखें'
          },
          {
            icon: '🔒',
            title: '100% प्राइवेट और सिक्योर',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका टेक्स्ट आपके डिवाइस से बाहर नहीं जाता'
          },
          {
            icon: '📱',
            title: 'मोबाइल ऑप्टिमाइज़्ड',
            description: 'स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करता है'
          },
          {
            icon: '📋',
            title: 'आसान कॉपी और पेस्ट',
            description: 'कन्वर्ट किए गए टेक्स्ट को क्लिपबोर्ड में जल्दी से कॉपी करें और कहीं भी पेस्ट करें'
          },
          {
            icon: '🎯',
            title: 'लेखकों के लिए परफेक्ट',
            description: 'डॉक्यूमेंट, ईमेल, सोशल मीडिया पोस्ट और किसी भी टेक्स्ट कंटेंट को फॉर्मेट करने के लिए आइडियल'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'अपना टेक्स्ट केस कन्वर्ट करने के सरल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट एंटर या पेस्ट करें',
            description: 'टेक्स्ट एरिया में सीधे टाइप करें या किसी भी सोर्स (Word, Google Docs, वेबसाइट, आदि) से अपना कंटेंट पेस्ट करें।',
            icon: '📝'
          },
          {
            number: 2,
            title: 'केस ऑप्शन सेलेक्ट करें',
            description: 'UPPERCASE, lowercase, Title Case, Sentence case या अन्य फॉर्मेटिंग ऑप्शन में से चुनें।',
            icon: '🔤'
          },
          {
            number: 3,
            title: 'कन्वर्ट किया गया टेक्स्ट देखें',
            description: 'रिज़ल्ट एरिया में सेलेक्ट किए गए केस फॉर्मेट में अपना टेक्स्ट तुरंत ट्रांसफॉर्म होते देखें।',
            icon: '✨'
          },
          {
            number: 4,
            title: 'कॉपी करें और इस्तेमाल करें',
            description: 'कन्वर्ट किए गए टेक्स्ट को अपने क्लिपबोर्ड में कॉपी करें और जहाँ चाहें वहाँ पेस्ट करें।',
            icon: '📋'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'हेडिंग के लिए',
            description: 'प्रोफेशनल दिखने वाली हेडिंग और टाइटल के लिए Title Case इस्तेमाल करें'
          },
          {
            icon: '📧',
            title: 'ईमेल के लिए',
            description: 'नेचुरल, प्रोफेशनल ईमेल कंटेंट के लिए Sentence case इस्तेमाल करें'
          },
          {
            icon: '📱',
            title: 'सोशल मीडिया के लिए',
            description: 'एम्फेसिस के लिए UPPERCASE या कैज़ुअल पोस्ट के लिए lowercase इस्तेमाल करें'
          },
          {
            icon: '📄',
            title: 'डॉक्यूमेंट के लिए',
            description: 'डॉक्यूमेंट में गलत तरीके से फॉर्मेट किए गए टेक्स्ट को जल्दी से ठीक करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'टेक्स्ट केस कन्वर्ज़न की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन टेक्स्ट केस कन्वर्टर आपको तुरंत टेक्स्ट ट्रांसफॉर्म करने में मदद करता है। UPPERCASE, lowercase, Title Case, Sentence case और अधिक में कन्वर्ट करें। डॉक्यूमेंट फॉर्मेट करने वाले लेखकों, ईमेल बनाने वाले प्रोफेशनल्स, सोशल मीडिया मैनेज करने वाले कंटेंट क्रिएटर्स और त्वरित टेक्स्ट ट्रांसफॉर्मेशन की ज़रूरत वाले किसी के लिए भी परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप <a href="/tools/word-counter">शब्द गिन</a> भी सकते हैं या <a href="/tools/remove-extra-spaces">स्पेसिंग साफ</a> कर सकते हैं।',
        sections: [
          {
            title: 'UPPERCASE कन्वर्टर - टेक्स्ट को ऑल कैप्स बनाएं',
            content: 'किसी भी टेक्स्ट को तुरंत UPPERCASE (सभी कैपिटल लेटर) में कन्वर्ट करें। हेडिंग बनाने, इम्पोर्टेंट टेक्स्ट एम्फेसाइज़ करने या एक्रोनिम फॉर्मेट करने के लिए परफेक्ट। UPPERCASE टेक्स्ट आमतौर पर टाइटल, हेडर में इस्तेमाल होता है और जब आप स्पेसिफिक कंटेंट पर ध्यान आकर्षित करना चाहते हैं। हमारा टूल स्पेशल कैरेक्टर हैंडल करता है और स्पेसिंग प्रिज़र्व करते हुए सभी लेटर को कैपिटल में कन्वर्ट करता है।',
            keywords: ['अपरकेस कन्वर्टर', 'ऑल कैप्स कन्वर्टर', 'कैपिटल लेटर टूल']
          },
          {
            title: 'lowercase कन्वर्टर - टेक्स्ट को ऑल स्मॉल बनाएं',
            content: 'एक क्लिक से टेक्स्ट को lowercase (सभी स्मॉल लेटर) में ट्रांसफॉर्म करें। गलती से कैप्स लॉक में टाइप किए गए टेक्स्ट को ठीक करने, कैज़ुअल सोशल मीडिया पोस्ट बनाने या टेक्स्ट फॉर्मेट स्टैंडर्डाइज़ करने के लिए यूज़फुल। lowercase टेक्स्ट अक्सर URL, ईमेल एड्रेस और मॉडर्न डिज़ाइन एस्थेटिक्स के लिए प्रेफर किया जाता है। टूल नंबर और स्पेशल कैरेक्टर मेंटेन करते हुए सभी लेटर कन्वर्ट करता है।',
            keywords: ['लोअरकेस कन्वर्टर', 'स्मॉल लेटर कन्वर्टर', 'अनकैपिटलाइज़ टेक्स्ट']
          },
          {
            title: 'Title Case कन्वर्टर - हर शब्द को कैपिटलाइज़ करें',
            content: 'टेक्स्ट को Title Case में कन्वर्ट करें जहाँ हर शब्द का पहला लेटर कैपिटलाइज़ होता है। यह बुक टाइटल, आर्टिकल हेडलाइन और प्रोफेशनल डॉक्यूमेंट के लिए स्टैंडर्ड फॉर्मेट है। हमारा Title Case कन्वर्टर प्रॉपर कैपिटलाइज़ेशन रूल्स फॉलो करता है, जो आपकी हेडिंग और टाइटल को पॉलिश्ड और प्रोफेशनल बनाता है। ब्लॉग पोस्ट, प्रेज़ेंटेशन और फॉर्मल डॉक्यूमेंट के लिए परफेक्ट।',
            keywords: ['टाइटल केस कन्वर्टर', 'हर शब्द कैपिटलाइज़', 'हेडलाइन फॉर्मेटर']
          },
          {
            title: 'Sentence Case कन्वर्टर - नेचुरल टेक्स्ट फॉर्मेट',
            content: 'टेक्स्ट को Sentence case में ट्रांसफॉर्म करें जहाँ सिर्फ हर सेंटेंस का पहला लेटर कैपिटलाइज़ होता है। यह बॉडी टेक्स्ट, ईमेल और जनरल कंटेंट के लिए सबसे नेचुरल और रीडेबल फॉर्मेट है। हमारा टूल इंटेलिजेंटली सेंटेंस बाउंड्री आइडेंटिफाई करता है और अप्रोप्रिएटली कैपिटलाइज़ करता है, जो इम्प्रॉपरली फॉर्मेट किए गए टेक्स्ट को ठीक करना और प्रोफेशनल दिखने वाला कंटेंट बनाना आसान बनाता है।',
            keywords: ['सेंटेंस केस कन्वर्टर', 'नेचुरल टेक्स्ट फॉर्मेट', 'प्रॉपर कैपिटलाइज़ेशन']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'टेक्स्ट केस कन्वर्ज़न क्या है?',
            answer: 'टेक्स्ट केस कन्वर्ज़न टेक्स्ट में लेटर की कैपिटलाइज़ेशन बदलने की प्रोसेस है। कॉमन कन्वर्ज़न में UPPERCASE (सभी कैपिटल), lowercase (सभी स्मॉल लेटर), Title Case (हर शब्द का पहला लेटर कैपिटलाइज़्ड) और Sentence case (हर सेंटेंस का पहला लेटर कैपिटलाइज़्ड) शामिल हैं।',
            category: 'basics'
          },
          {
            question: 'मैं टेक्स्ट को uppercase में कैसे कन्वर्ट करूं?',
            answer: 'बस अपना टेक्स्ट इनपुट एरिया में पेस्ट या टाइप करें और "UPPERCASE" बटन क्लिक करें। नंबर, स्पेस और स्पेशल कैरेक्टर प्रिज़र्व करते हुए सभी लेटर तुरंत कैपिटल लेटर में कन्वर्ट हो जाएंगे।',
            category: 'usage'
          },
          {
            question: 'Title Case क्या है?',
            answer: 'Title Case एक कैपिटलाइज़ेशन स्टाइल है जहाँ हर मेजर शब्द का पहला लेटर कैपिटलाइज़्ड होता है। यह आमतौर पर टाइटल, हेडिंग और हेडलाइन के लिए इस्तेमाल होता है। हमारा टूल ऑटोमैटिकली प्रॉपर Title Case रूल्स अप्लाई करता है।',
            category: 'basics'
          },
          {
            question: 'क्या मेरा टेक्स्ट डेटा सेफ और प्राइवेट है?',
            answer: 'बिल्कुल सेफ! सभी टेक्स्ट प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका टेक्स्ट कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता। हमारी आपके कंटेंट तक ज़ीरो एक्सेस है।',
            category: 'privacy'
          },
          {
            question: 'क्या मैं स्पेशल कैरेक्टर के साथ टेक्स्ट कन्वर्ट कर सकता हूँ?',
            answer: 'हाँ! हमारा टूल स्पेशल कैरेक्टर, नंबर, पंक्चुएशन और सिंबल को सही तरीके से हैंडल करता है। सिर्फ लेटर कन्वर्ट होते हैं जबकि बाकी सभी कैरेक्टर अनचेंज्ड रहते हैं।',
            category: 'features'
          },
          {
            question: 'क्या यह मोबाइल डिवाइसेज़ पर काम करता है?',
            answer: 'हाँ! हमारा टेक्स्ट केस कन्वर्टर पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और स्मार्टफोन और टैबलेट पर परफेक्टली काम करता है। आप चलते-फिरते, कहीं भी, कभी भी टेक्स्ट कन्वर्ट कर सकते हैं।',
            category: 'compatibility'
          },
          {
            question: 'क्या मैं एक साथ मल्टिपल पैराग्राफ कन्वर्ट कर सकता हूँ?',
            answer: 'हाँ! आप मल्टिपल पैराग्राफ सहित कितना भी टेक्स्ट पेस्ट कर सकते हैं और सब कुछ एक साथ कन्वर्ट कर सकते हैं। टूल बड़े टेक्स्ट को एफिशिएंटली हैंडल करता है।',
            category: 'features'
          },
          {
            question: 'क्या यह टूल वाकई फ्री है?',
            answer: 'हाँ, पूरी तरह फ्री! कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं, कोई लिमिट नहीं। किसी भी पर्पज के लिए जितनी बार चाहें इस्तेमाल करें।',
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
        placeholder: 'Type or paste your text here...',
        clearButton: 'Clear Text',
        pasteButton: 'Paste',
        label: 'Enter Your Text'
      },
      caseOptions: {
        title: 'Select Case',
        uppercase: 'UPPERCASE',
        lowercase: 'lowercase',
        titleCase: 'Title Case',
        sentenceCase: 'Sentence case',
        capitalize: 'Capitalize'
      },
      results: {
        title: 'Converted Text',
        copyButton: 'Copy to Clipboard',
        copiedMessage: 'Copied!',
        downloadButton: 'Download'
      },
      messages: {
        emptyText: 'Enter some text to convert',
        processing: 'Converting...',
        success: 'Text converted successfully'
      }
    },
    hi: {
      input: {
        placeholder: 'अपना टेक्स्ट यहाँ टाइप या पेस्ट करें...',
        clearButton: 'टेक्स्ट क्लियर करें',
        pasteButton: 'पेस्ट करें',
        label: 'अपना टेक्स्ट एंटर करें'
      },
      caseOptions: {
        title: 'केस सेलेक्ट करें',
        uppercase: 'UPPERCASE',
        lowercase: 'lowercase',
        titleCase: 'Title Case',
        sentenceCase: 'Sentence case',
        capitalize: 'Capitalize'
      },
      results: {
        title: 'कन्वर्ट किया गया टेक्स्ट',
        copyButton: 'क्लिपबोर्ड में कॉपी करें',
        copiedMessage: 'कॉपी हो गया!',
        downloadButton: 'डाउनलोड करें'
      },
      messages: {
        emptyText: 'कन्वर्ट करने के लिए कुछ टेक्स्ट एंटर करें',
        processing: 'कन्वर्ट हो रहा है...',
        success: 'टेक्स्ट सफलतापूर्वक कन्वर्ट हो गया'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Required)
  // ============================================================================
  defaultSettings: {
    defaultCase: 'uppercase', // Default case option
    preserveFormatting: false // Whether to preserve line breaks
  },

  // ============================================================================
  // 7. VALIDATION (Required)
  // ============================================================================
  validation: {
    maxTextLength: 1000000, // 1 million characters
    minTextLength: 0
  },

  // ============================================================================
  // 8. TOOL-SPECIFIC CONFIG (Optional)
  // ============================================================================
  toolConfig: {
    intent: 'transform', // Primary intent: transform text
    features: [
      'uppercase',
      'lowercase',
      'title-case',
      'sentence-case',
      'capitalize'
    ],
    useCases: ['formatting', 'documents', 'emails', 'social-media'],
    caseOptions: [
      {
        id: 'uppercase',
        name: 'UPPERCASE',
        description: 'Convert all letters to capitals',
        example: 'HELLO WORLD'
      },
      {
        id: 'lowercase',
        name: 'lowercase',
        description: 'Convert all letters to small',
        example: 'hello world'
      },
      {
        id: 'titleCase',
        name: 'Title Case',
        description: 'Capitalize first letter of each word',
        example: 'Hello World'
      },
      {
        id: 'sentenceCase',
        name: 'Sentence case',
        description: 'Capitalize first letter of each sentence',
        example: 'Hello world. How are you?'
      },
      {
        id: 'capitalize',
        name: 'Capitalize',
        description: 'Capitalize first letter only',
        example: 'Hello world'
      }
    ]
  },

  // ============================================================================
  // 9. RELATIONSHIPS (Optional)
  // ============================================================================
  relationships: {
    relatedTools: ['word-counter', 'text-formatter', 'character-counter'],
    alternativeTools: ['text-transformer', 'case-changer'],
    workflowTools: ['word-counter', 'grammar-checker']
  },

  // ============================================================================
  // 10. STATS (Optional - for analytics)
  // ============================================================================
  stats: {
    averageProcessingTime: 0.05, // seconds (instant)
    supportedLanguages: ['all'], // Works with any language
    maxTextSize: 1000000 // characters
  }
}

export default textCaseConverterConfig

