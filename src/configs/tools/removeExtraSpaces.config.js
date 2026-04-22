/**
 * Remove Extra Spaces Tool Configuration - SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation (wordCounter.config.js)
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-04
 */

export const removeExtraSpacesConfig = {
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
  id: 'remove-extra-spaces',
  name: {
    en: 'Remove Extra Spaces',
    hi: 'एक्स्ट्रा स्पेस हटाएं'
  },
  slug: 'remove-extra-spaces',
  description: {
    en: 'Remove multiple spaces and clean up text formatting instantly',
    hi: 'मल्टिपल स्पेस हटाएं और टेक्स्ट फॉर्मेटिंग तुरंत साफ करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Remove Extra Spaces | Clean Text Formatting Online',
      description: 'Remove extra spaces from text online. Clean up multiple spaces, trim whitespace, and normalize text formatting instantly.',
      keywords: {
        primary: [
          'remove extra spaces',
          'clean text formatting',
          'trim whitespace'
        ],
        secondary: [
          'remove double spaces',
          'normalize text spacing',
          'text cleanup online',
          'clean multiple spaces'
        ],
        longTail: [
          'remove extra spaces from text online free',
          'clean multiple spaces between words',
          'trim whitespace from text online',
          'remove double spaces from document',
          'normalize text spacing online'
        ]
      },
      canonical: 'https://freetools.com/tools/remove-extra-spaces',
      ogImage: '/images/tools/remove-extra-spaces-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Remove Extra Spaces',
        description: 'Free online tool to remove extra spaces from text',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'एक्स्ट्रा स्पेस हटाएं | टेक्स्ट फॉर्मेटिंग क्लीन करें',
      description: 'टेक्स्ट से एक्स्ट्रा स्पेस ऑनलाइन हटाएं। मल्टिपल स्पेस क्लीन करें, व्हाइटस्पेस ट्रिम करें और टेक्स्ट फॉर्मेटिंग तुरंत नॉर्मलाइज़ करें।',
      keywords: {
        primary: [
          'extra space hataye',
          'text formatting clean kare',
          'whitespace trim kare'
        ],
        secondary: [
          'double space remove kare',
          'text spacing normalize kare',
          'text cleanup online',
          'multiple space clean kare'
        ],
        longTail: [
          'text se extra space online free hataye',
          'words ke beech multiple space clean kare',
          'text se whitespace online trim kare',
          'document se double space remove kare',
          'text spacing online normalize kare'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/remove-extra-spaces',
      ogImage: '/images/tools/remove-extra-spaces-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'एक्स्ट्रा स्पेस हटाएं',
        description: 'टेक्स्ट से एक्स्ट्रा स्पेस हटाने के लिए फ्री ऑनलाइन टूल',
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
        title: 'Remove Extra Spaces',
        subtitle: 'Remove multiple spaces between words, trim leading and trailing whitespace, and normalize text formatting. Perfect for cleaning up copied text and documents.',
        benefits: [
          { icon: '⚡', text: 'Instant cleanup' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: {
          primary: 'Start Cleaning',
          secondary: 'Learn More'
        },
        privacyNotice: 'All text processing happens in your browser. Your content never leaves your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our Space Remover Tool?',
        subtitle: 'Powerful text cleanup features for perfect formatting',
        items: [
          {
            icon: '🧹',
            title: 'Remove Multiple Spaces',
            description: 'Automatically replace multiple consecutive spaces with a single space between words'
          },
          {
            icon: '✂️',
            title: 'Trim Whitespace',
            description: 'Remove leading and trailing spaces from the beginning and end of text'
          },
          {
            icon: '⚡',
            title: 'Instant Results',
            description: 'See cleaned text immediately as you paste or type content'
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
            description: 'Quickly copy cleaned text to clipboard and use it anywhere'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use This Tool',
        subtitle: 'Simple steps to clean your text',
        steps: [
          {
            number: 1,
            title: 'Paste Your Text',
            description: 'Copy and paste text with extra spaces from any source (Word, PDF, websites, emails, etc.).',
            icon: '📝'
          },
          {
            number: 2,
            title: 'Click Clean Button',
            description: 'Click the "Remove Extra Spaces" button to automatically clean up all multiple spaces.',
            icon: '🧹'
          },
          {
            number: 3,
            title: 'View Cleaned Text',
            description: 'See your text with normalized spacing - single spaces between words, trimmed edges.',
            icon: '✨'
          },
          {
            number: 4,
            title: 'Copy and Use',
            description: 'Copy the cleaned text to your clipboard and paste it wherever you need it.',
            icon: '📋'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'For Copied Text',
            description: 'Clean up text copied from PDFs or websites that often have irregular spacing'
          },
          {
            icon: '📄',
            title: 'For Documents',
            description: 'Fix formatting issues in documents before submission or publication'
          },
          {
            icon: '✉️',
            title: 'For Emails',
            description: 'Ensure professional appearance by removing extra spaces in email content'
          },
          {
            icon: '💻',
            title: 'For Code',
            description: 'Clean up code snippets or data with inconsistent spacing'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Removing Extra Spaces from Text',
        intro: 'This free online tool helps you remove extra spaces from text instantly. Clean up multiple consecutive spaces, trim leading and trailing whitespace, and normalize text formatting. Perfect for cleaning copied text from PDFs, websites, or documents with formatting issues. All processing happens in your browser for complete privacy. You can also <a href="/tools/word-counter">count words</a> or <a href="/tools/text-case-converter">change text case</a> after cleaning.',
        sections: [
          {
            title: 'Why Remove Extra Spaces from Text?',
            content: 'Extra spaces in text can make content look unprofessional and cause formatting issues. Multiple spaces between words often occur when copying text from PDFs, websites, or converting between document formats. These extra spaces can affect readability, break text alignment, and cause problems in data processing. Our tool automatically detects and removes all unnecessary spaces while preserving the natural single-space separation between words.',
            keywords: ['remove extra spaces', 'clean text formatting', 'fix spacing issues']
          },
          {
            title: 'Common Sources of Extra Spaces',
            content: 'Extra spaces commonly appear when copying text from PDF documents, where formatting can introduce multiple spaces. Web scraping often results in irregular spacing due to HTML formatting. Converting between document formats (Word to plain text, etc.) can add unwanted spaces. Manual typing errors and copy-paste operations from different sources also introduce spacing inconsistencies. Our tool handles all these scenarios automatically.',
            keywords: ['PDF text cleanup', 'web scraping spaces', 'document conversion']
          },
          {
            title: 'How the Space Removal Works',
            content: 'Our tool uses advanced text processing to identify and normalize spacing. It replaces multiple consecutive spaces (2, 3, 4, or more) with a single space. Leading spaces at the start of text are removed, and trailing spaces at the end are trimmed. The tool preserves intentional line breaks and paragraph structure while cleaning up horizontal spacing. All processing is done instantly in your browser without uploading data to any server.',
            keywords: ['space normalization', 'text cleanup algorithm', 'whitespace removal']
          },
          {
            title: 'Use Cases for Space Removal',
            content: 'Clean up text copied from PDFs before using in documents or presentations. Fix spacing in data files before importing into databases or spreadsheets. Prepare text for professional emails and communications. Clean code snippets or configuration files with inconsistent spacing. Normalize text extracted from OCR (Optical Character Recognition) which often has spacing errors. Format content for social media posts or blog articles.',
            keywords: ['text cleanup use cases', 'professional formatting', 'data preparation']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What does this tool do?',
            answer: 'This tool removes extra spaces from text by replacing multiple consecutive spaces with a single space and trimming leading/trailing whitespace. It helps clean up text formatting issues that commonly occur when copying from PDFs, websites, or converting between document formats.',
            category: 'basics'
          },
          {
            question: 'Does it remove all spaces?',
            answer: 'No, it only removes extra spaces. The tool keeps single spaces between words intact, which is the correct formatting. It removes multiple consecutive spaces (2, 3, 4, or more) and replaces them with a single space.',
            category: 'features'
          },
          {
            question: 'Will it affect line breaks or paragraphs?',
            answer: 'No, the tool preserves line breaks and paragraph structure. It only cleans up horizontal spacing (spaces between words) and does not affect vertical spacing (line breaks, paragraph breaks).',
            category: 'features'
          },
          {
            question: 'Is my text data safe and private?',
            answer: 'Absolutely safe! All text processing happens entirely in your browser using JavaScript. Your text never leaves your device or gets uploaded to any server. We have zero access to your content.',
            category: 'privacy'
          },
          {
            question: 'Can I use this for large documents?',
            answer: 'Yes! The tool can handle large amounts of text efficiently. You can paste entire documents, articles, or data files and clean them up instantly.',
            category: 'usage'
          },
          {
            question: 'Does it work on mobile devices?',
            answer: 'Yes! Our tool is fully mobile-optimized and works perfectly on smartphones and tablets. You can clean up text on the go, anywhere, anytime.',
            category: 'compatibility'
          },
          {
            question: 'What about tabs and other whitespace?',
            answer: 'The tool treats tabs and other whitespace characters as spaces and normalizes them. Multiple tabs or mixed spaces and tabs are replaced with a single space.',
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
        title: 'फ्री एक्स्ट्रा स्पेस रिमूवर - टेक्स्ट फॉर्मेटिंग तुरंत साफ करें',
        subtitle: 'शब्दों के बीच मल्टिपल स्पेस हटाएं, लीडिंग और ट्रेलिंग व्हाइटस्पेस ट्रिम करें और टेक्स्ट फॉर्मेटिंग नॉर्मलाइज़ करें। कॉपी किए गए टेक्स्ट और डॉक्यूमेंट को साफ करने के लिए परफेक्ट।',
        benefits: [
          { icon: '⚡', text: 'तुरंत क्लीनअप' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: {
          primary: 'क्लीनिंग शुरू करें',
          secondary: 'और जानें'
        },
        privacyNotice: 'सभी टेक्स्ट प्रोसेसिंग आपके ब्राउज़र में होती है। आपका कंटेंट आपके डिवाइस से बाहर नहीं जाता।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा स्पेस रिमूवर टूल क्यों इस्तेमाल करें?',
        subtitle: 'परफेक्ट फॉर्मेटिंग के लिए पावरफुल टेक्स्ट क्लीनअप फीचर्स',
        items: [
          {
            icon: '🧹',
            title: 'मल्टिपल स्पेस हटाएं',
            description: 'शब्दों के बीच मल्टिपल कंसीक्यूटिव स्पेस को ऑटोमैटिकली सिंगल स्पेस से रिप्लेस करें'
          },
          {
            icon: '✂️',
            title: 'व्हाइटस्पेस ट्रिम करें',
            description: 'टेक्स्ट की शुरुआत और अंत से लीडिंग और ट्रेलिंग स्पेस हटाएं'
          },
          {
            icon: '⚡',
            title: 'तुरंत रिज़ल्ट',
            description: 'कंटेंट पेस्ट या टाइप करते ही तुरंत साफ किया गया टेक्स्ट देखें'
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
            description: 'साफ किए गए टेक्स्ट को क्लिपबोर्ड में जल्दी से कॉपी करें और कहीं भी इस्तेमाल करें'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'अपना टेक्स्ट साफ करने के सरल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट पेस्ट करें',
            description: 'किसी भी सोर्स (Word, PDF, वेबसाइट, ईमेल, आदि) से एक्स्ट्रा स्पेस वाला टेक्स्ट कॉपी और पेस्ट करें।',
            icon: '📝'
          },
          {
            number: 2,
            title: 'क्लीन बटन क्लिक करें',
            description: 'सभी मल्टिपल स्पेस को ऑटोमैटिकली साफ करने के लिए "Remove Extra Spaces" बटन क्लिक करें।',
            icon: '🧹'
          },
          {
            number: 3,
            title: 'साफ किया गया टेक्स्ट देखें',
            description: 'नॉर्मलाइज़्ड स्पेसिंग के साथ अपना टेक्स्ट देखें - शब्दों के बीच सिंगल स्पेस, ट्रिम किए गए एज।',
            icon: '✨'
          },
          {
            number: 4,
            title: 'कॉपी करें और इस्तेमाल करें',
            description: 'साफ किए गए टेक्स्ट को अपने क्लिपबोर्ड में कॉपी करें और जहाँ चाहें वहाँ पेस्ट करें।',
            icon: '📋'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'कॉपी किए गए टेक्स्ट के लिए',
            description: 'PDF या वेबसाइट से कॉपी किए गए टेक्स्ट को साफ करें जिसमें अक्सर इररेगुलर स्पेसिंग होती है'
          },
          {
            icon: '📄',
            title: 'डॉक्यूमेंट के लिए',
            description: 'सबमिशन या पब्लिकेशन से पहले डॉक्यूमेंट में फॉर्मेटिंग इश्यूज़ ठीक करें'
          },
          {
            icon: '✉️',
            title: 'ईमेल के लिए',
            description: 'ईमेल कंटेंट में एक्स्ट्रा स्पेस हटाकर प्रोफेशनल अपीयरेंस सुनिश्चित करें'
          },
          {
            icon: '💻',
            title: 'कोड के लिए',
            description: 'इनकंसिस्टेंट स्पेसिंग वाले कोड स्निपेट या डेटा को साफ करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'टेक्स्ट से एक्स्ट्रा स्पेस हटाने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन टूल आपको तुरंत टेक्स्ट से एक्स्ट्रा स्पेस हटाने में मदद करता है। मल्टिपल कंसीक्यूटिव स्पेस क्लीन करें, लीडिंग और ट्रेलिंग व्हाइटस्पेस ट्रिम करें और टेक्स्ट फॉर्मेटिंग नॉर्मलाइज़ करें। PDF, वेबसाइट या फॉर्मेटिंग इश्यूज़ वाले डॉक्यूमेंट से कॉपी किए गए टेक्स्ट को साफ करने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप <a href="/tools/word-counter">शब्द गिन</a> भी सकते हैं या सफाई के बाद <a href="/tools/text-case-converter">टेक्स्ट केस बदल</a> सकते हैं।',
        sections: [
          {
            title: 'टेक्स्ट से एक्स्ट्रा स्पेस क्यों हटाएं?',
            content: 'टेक्स्ट में एक्स्ट्रा स्पेस कंटेंट को अनप्रोफेशनल बना सकते हैं और फॉर्मेटिंग इश्यूज़ पैदा कर सकते हैं। शब्दों के बीच मल्टिपल स्पेस अक्सर PDF, वेबसाइट से टेक्स्ट कॉपी करते समय या डॉक्यूमेंट फॉर्मेट के बीच कन्वर्ट करते समय होते हैं। ये एक्स्ट्रा स्पेस रीडेबिलिटी को प्रभावित कर सकते हैं, टेक्स्ट अलाइनमेंट तोड़ सकते हैं और डेटा प्रोसेसिंग में प्रॉब्लम पैदा कर सकते हैं। हमारा टूल ऑटोमैटिकली सभी अनावश्यक स्पेस डिटेक्ट और रिमूव करता है जबकि शब्दों के बीच नेचुरल सिंगल-स्पेस सेपरेशन प्रिज़र्व करता है।',
            keywords: ['एक्स्ट्रा स्पेस हटाएं', 'टेक्स्ट फॉर्मेटिंग साफ करें', 'स्पेसिंग इश्यूज़ ठीक करें']
          },
          {
            title: 'एक्स्ट्रा स्पेस के कॉमन सोर्स',
            content: 'PDF डॉक्यूमेंट से टेक्स्ट कॉपी करते समय एक्स्ट्रा स्पेस आमतौर पर दिखाई देते हैं, जहाँ फॉर्मेटिंग मल्टिपल स्पेस इंट्रोड्यूस कर सकती है। वेब स्क्रैपिंग अक्सर HTML फॉर्मेटिंग के कारण इररेगुलर स्पेसिंग में रिज़ल्ट करती है। डॉक्यूमेंट फॉर्मेट के बीच कन्वर्ट करना (Word से plain text, आदि) अनवांटेड स्पेस ऐड कर सकता है। मैनुअल टाइपिंग एरर और अलग-अलग सोर्स से कॉपी-पेस्ट ऑपरेशन भी स्पेसिंग इनकंसिस्टेंसी इंट्रोड्यूस करते हैं। हमारा टूल इन सभी सिनेरियो को ऑटोमैटिकली हैंडल करता है।',
            keywords: ['PDF टेक्स्ट क्लीनअप', 'वेब स्क्रैपिंग स्पेस', 'डॉक्यूमेंट कन्वर्ज़न']
          },
          {
            title: 'स्पेस रिमूवल कैसे काम करता है',
            content: 'हमारा टूल स्पेसिंग को आइडेंटिफाई और नॉर्मलाइज़ करने के लिए एडवांस्ड टेक्स्ट प्रोसेसिंग इस्तेमाल करता है। यह मल्टिपल कंसीक्यूटिव स्पेस (2, 3, 4 या अधिक) को सिंगल स्पेस से रिप्लेस करता है। टेक्स्ट की शुरुआत में लीडिंग स्पेस हटा दिए जाते हैं और अंत में ट्रेलिंग स्पेस ट्रिम कर दिए जाते हैं। टूल हॉरिज़ॉन्टल स्पेसिंग साफ करते हुए इंटेंशनल लाइन ब्रेक और पैराग्राफ स्ट्रक्चर प्रिज़र्व करता है। सभी प्रोसेसिंग किसी सर्वर पर डेटा अपलोड किए बिना तुरंत आपके ब्राउज़र में की जाती है।',
            keywords: ['स्पेस नॉर्मलाइज़ेशन', 'टेक्स्ट क्लीनअप अल्गोरिदम', 'व्हाइटस्पेस रिमूवल']
          },
          {
            title: 'स्पेस रिमूवल के यूज़ केस',
            content: 'डॉक्यूमेंट या प्रेज़ेंटेशन में इस्तेमाल करने से पहले PDF से कॉपी किए गए टेक्स्ट को साफ करें। डेटाबेस या स्प्रेडशीट में इम्पोर्ट करने से पहले डेटा फाइल में स्पेसिंग ठीक करें। प्रोफेशनल ईमेल और कम्युनिकेशन के लिए टेक्स्ट तैयार करें। इनकंसिस्टेंट स्पेसिंग वाले कोड स्निपेट या कॉन्फिगरेशन फाइल साफ करें। OCR (Optical Character Recognition) से एक्सट्रैक्ट किए गए टेक्स्ट को नॉर्मलाइज़ करें जिसमें अक्सर स्पेसिंग एरर होती हैं। सोशल मीडिया पोस्ट या ब्लॉग आर्टिकल के लिए कंटेंट फॉर्मेट करें।',
            keywords: ['टेक्स्ट क्लीनअप यूज़ केस', 'प्रोफेशनल फॉर्मेटिंग', 'डेटा प्रिपरेशन']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'यह टूल क्या करता है?',
            answer: 'यह टूल मल्टिपल कंसीक्यूटिव स्पेस को सिंगल स्पेस से रिप्लेस करके और लीडिंग/ट्रेलिंग व्हाइटस्पेस ट्रिम करके टेक्स्ट से एक्स्ट्रा स्पेस हटाता है। यह टेक्स्ट फॉर्मेटिंग इश्यूज़ को साफ करने में मदद करता है जो आमतौर पर PDF, वेबसाइट से कॉपी करते समय या डॉक्यूमेंट फॉर्मेट के बीच कन्वर्ट करते समय होते हैं।',
            category: 'basics'
          },
          {
            question: 'क्या यह सभी स्पेस हटा देता है?',
            answer: 'नहीं, यह सिर्फ एक्स्ट्रा स्पेस हटाता है। टूल शब्दों के बीच सिंगल स्पेस इंटैक्ट रखता है, जो सही फॉर्मेटिंग है। यह मल्टिपल कंसीक्यूटिव स्पेस (2, 3, 4 या अधिक) हटाता है और उन्हें सिंगल स्पेस से रिप्लेस करता है।',
            category: 'features'
          },
          {
            question: 'क्या यह लाइन ब्रेक या पैराग्राफ को प्रभावित करेगा?',
            answer: 'नहीं, टूल लाइन ब्रेक और पैराग्राफ स्ट्रक्चर प्रिज़र्व करता है। यह सिर्फ हॉरिज़ॉन्टल स्पेसिंग (शब्दों के बीच स्पेस) साफ करता है और वर्टिकल स्पेसिंग (लाइन ब्रेक, पैराग्राफ ब्रेक) को प्रभावित नहीं करता।',
            category: 'features'
          },
          {
            question: 'क्या मेरा टेक्स्ट डेटा सेफ और प्राइवेट है?',
            answer: 'बिल्कुल सेफ! सभी टेक्स्ट प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका टेक्स्ट कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता। हमारी आपके कंटेंट तक ज़ीरो एक्सेस है।',
            category: 'privacy'
          },
          {
            question: 'क्या मैं इसे बड़े डॉक्यूमेंट के लिए इस्तेमाल कर सकता हूँ?',
            answer: 'हाँ! टूल बड़ी मात्रा में टेक्स्ट को एफिशिएंटली हैंडल कर सकता है। आप पूरे डॉक्यूमेंट, आर्टिकल या डेटा फाइल पेस्ट कर सकते हैं और उन्हें तुरंत साफ कर सकते हैं।',
            category: 'usage'
          },
          {
            question: 'क्या यह मोबाइल डिवाइसेज़ पर काम करता है?',
            answer: 'हाँ! हमारा टूल पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और स्मार्टफोन और टैबलेट पर परफेक्टली काम करता है। आप चलते-फिरते, कहीं भी, कभी भी टेक्स्ट साफ कर सकते हैं।',
            category: 'compatibility'
          },
          {
            question: 'टैब और अन्य व्हाइटस्पेस का क्या?',
            answer: 'टूल टैब और अन्य व्हाइटस्पेस कैरेक्टर को स्पेस के रूप में ट्रीट करता है और उन्हें नॉर्मलाइज़ करता है। मल्टिपल टैब या मिक्स्ड स्पेस और टैब को सिंगल स्पेस से रिप्लेस किया जाता है।',
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
        placeholder: 'Paste your text with extra spaces here...',
        clearButton: 'Clear Text',
        pasteButton: 'Paste',
        label: 'Enter Your Text'
      },
      action: {
        cleanButton: 'Remove Extra Spaces',
        processing: 'Cleaning...'
      },
      results: {
        title: 'Cleaned Text',
        copyButton: 'Copy to Clipboard',
        copiedMessage: 'Copied!',
        downloadButton: 'Download',
        stats: 'Removed {count} extra spaces'
      },
      messages: {
        emptyText: 'Paste some text to clean up extra spaces',
        noChanges: 'No extra spaces found',
        success: 'Text cleaned successfully'
      }
    },
    hi: {
      input: {
        placeholder: 'एक्स्ट्रा स्पेस वाला अपना टेक्स्ट यहाँ पेस्ट करें...',
        clearButton: 'टेक्स्ट क्लियर करें',
        pasteButton: 'पेस्ट करें',
        label: 'अपना टेक्स्ट एंटर करें'
      },
      action: {
        cleanButton: 'एक्स्ट्रा स्पेस हटाएं',
        processing: 'क्लीन हो रहा है...'
      },
      results: {
        title: 'साफ किया गया टेक्स्ट',
        copyButton: 'क्लिपबोर्ड में कॉपी करें',
        copiedMessage: 'कॉपी हो गया!',
        downloadButton: 'डाउनलोड करें',
        stats: '{count} एक्स्ट्रा स्पेस हटाए गए'
      },
      messages: {
        emptyText: 'एक्स्ट्रा स्पेस साफ करने के लिए कुछ टेक्स्ट पेस्ट करें',
        noChanges: 'कोई एक्स्ट्रा स्पेस नहीं मिला',
        success: 'टेक्स्ट सफलतापूर्वक साफ हो गया'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Required)
  // ============================================================================
  defaultSettings: {
    trimEdges: true, // Trim leading/trailing spaces
    normalizeSpaces: true // Replace multiple spaces with single space
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
      'remove-multiple-spaces',
      'trim-whitespace',
      'normalize-spacing'
    ],
    useCases: ['text-cleanup', 'formatting', 'data-preparation'],
    cleaningRules: {
      multipleSpaces: /\s+/g,
      leadingSpaces: /^\s+/,
      trailingSpaces: /\s+$/
    }
  },

  // ============================================================================
  // 9. RELATIONSHIPS (Optional)
  // ============================================================================
  relationships: {
    relatedTools: ['word-counter', 'text-case-converter', 'text-formatter'],
    alternativeTools: ['text-cleaner', 'whitespace-remover'],
    workflowTools: ['word-counter', 'text-case-converter']
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

export default removeExtraSpacesConfig

