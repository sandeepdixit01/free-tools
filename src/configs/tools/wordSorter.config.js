/**
 * Word Sorter Tool Configuration - SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

export const wordSorterConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-20',
    author: 'FreeTools',
    category: 'text',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'word-sorter',
  name: {
    en: 'Word Sorter',
    hi: 'वर्ड सॉर्टर'
  },
  slug: 'word-sorter',
  description: {
    en: 'Sort text lines alphabetically in ascending or descending order',
    hi: 'टेक्स्ट लाइन को आरोही या अवरोही क्रम में वर्णानुक्रम में सॉर्ट करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Word Sorter Online | Sort Text Lines Alphabetically Free 2024',
      description: 'Sort text lines alphabetically online. Free word sorter tool with ascending/descending order. Perfect for organizing lists, names, and data.',
      keywords: {
        primary: [
          'word sorter',
          'sort text lines alphabetically',
          'text sorter online'
        ],
        longTail: [
          'sort text lines online free',
          'alphabetical text sorter',
          'sort words alphabetically online',
          'organize text lines tool',
          'sort list alphabetically'
        ],
        secondary: [
          'alphabetical sorter',
          'line sorter tool',
          'text line organizer',
          'sort names alphabetically',
          'list sorter online'
        ]
      },
      canonical: 'https://freetools.com/tools/word-sorter',
      ogImage: '/images/tools/word-sorter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Word Sorter',
        description: 'Free online tool to sort text lines alphabetically',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'वर्ड सॉर्टर ऑनलाइन | टेक्स्ट लाइन वर्णानुक्रम में फ्री सॉर्ट करें 2024',
      description: 'टेक्स्ट लाइन को ऑनलाइन वर्णानुक्रम में सॉर्ट करें। आरोही/अवरोही क्रम के साथ फ्री वर्ड सॉर्टर टूल। लिस्ट, नाम और डेटा को ऑर्गनाइज़ करने के लिए परफेक्ट।',
      keywords: {
        primary: [
          'word sorter',
          'text line alphabetically sort kare',
          'text sorter online'
        ],
        longTail: [
          'text line online free sort kare',
          'alphabetical text sorter',
          'words alphabetically online sort kare',
          'text line organize karne ka tool',
          'list alphabetically sort kare'
        ],
        secondary: [
          'alphabetical sorter',
          'line sorter tool',
          'text line organizer',
          'names alphabetically sort kare',
          'list sorter online'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/word-sorter',
      ogImage: '/images/tools/word-sorter-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Word Sorter',
        subtitle: 'Sort text lines alphabetically in ascending or descending order. Perfect for organizing lists, names, and data.',
        benefits: [
          { icon: '⚡', text: 'Instant sorting' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📊', text: 'Multiple options' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Start Sorting',
        privacyNotice: 'All text processing happens in your browser. Your content never leaves your device.'
      },

      // Features Section
      features: {
        title: 'Powerful Text Sorting',
        subtitle: 'Organize your text data efficiently',
        items: [
          {
            icon: '🔤',
            title: 'Alphabetical Sorting',
            description: 'Sort lines from A to Z (ascending) or Z to A (descending)'
          },
          {
            icon: '⬆️',
            title: 'Ascending Order',
            description: 'Sort lines in ascending order (A → Z, 0 → 9)'
          },
          {
            icon: '⬇️',
            title: 'Descending Order',
            description: 'Sort lines in descending order (Z → A, 9 → 0)'
          },
          {
            icon: '🔡',
            title: 'Case Sensitive',
            description: 'Option to treat uppercase and lowercase as different'
          },
          {
            icon: '✂️',
            title: 'Trim Lines',
            description: 'Automatically trim whitespace from lines before sorting'
          },
          {
            icon: '🗑️',
            title: 'Remove Empty Lines',
            description: 'Optionally remove blank lines from your text'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Sort Text Lines',
        subtitle: 'Simple steps to organize your text',
        steps: [
          {
            number: 1,
            title: 'Paste Your Text',
            description: 'Copy and paste your text with lines to sort into the input area'
          },
          {
            number: 2,
            title: 'Choose Sort Order',
            description: 'Select ascending (A-Z) or descending (Z-A) order'
          },
          {
            number: 3,
            title: 'Set Options',
            description: 'Optionally enable case-sensitive sorting, trim lines, or remove empty lines'
          },
          {
            number: 4,
            title: 'Sort & Copy',
            description: 'Click sort button and copy the organized text'
          }
        ],
        tips: [
          'Use ascending order for A-Z sorting (default)',
          'Use descending order for Z-A reverse sorting',
          'Enable case-sensitive to sort uppercase before lowercase',
          'Trim lines option removes leading/trailing spaces before sorting'
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'When to Use Word Sorter',
        items: [
          {
            icon: '📋',
            title: 'Organize Lists',
            description: 'Sort shopping lists, to-do lists, or any text list alphabetically'
          },
          {
            icon: '👥',
            title: 'Sort Names',
            description: 'Alphabetize names, contacts, or participant lists'
          },
          {
            icon: '📊',
            title: 'Data Organization',
            description: 'Sort CSV data, log entries, or database exports'
          },
          {
            icon: '📚',
            title: 'Bibliography',
            description: 'Organize references, citations, or book lists'
          },
          {
            icon: '🔍',
            title: 'Search Optimization',
            description: 'Sort keywords, tags, or categories for better organization'
          },
          {
            icon: '📝',
            title: 'Document Preparation',
            description: 'Organize glossaries, indexes, or appendices'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is the difference between ascending and descending order?',
            answer: 'Ascending order sorts from A to Z (or 0 to 9), placing items in alphabetical order. Descending order sorts from Z to A (or 9 to 0), placing items in reverse alphabetical order.'
          },
          {
            question: 'How does case-sensitive sorting work?',
            answer: 'When case-sensitive is enabled, uppercase letters are sorted before lowercase letters. For example, "Apple" comes before "apple". When disabled (default), "Apple" and "apple" are treated the same.'
          },
          {
            question: 'Can I sort numbers?',
            answer: 'Yes, the tool sorts numbers as text. Numbers are sorted character by character, so "10" comes before "2" in alphabetical sorting. For proper numerical sorting, ensure numbers have leading zeros (e.g., "02", "10").'
          },
          {
            question: 'What happens to empty lines?',
            answer: 'By default, empty lines are preserved in their sorted position. Enable the "Remove Empty Lines" option to automatically delete all blank lines from your text.'
          },
          {
            question: 'Is there a limit on text size?',
            answer: 'No, there is no hard limit. However, very large texts (hundreds of thousands of lines) may take longer to sort depending on your device performance.'
          },
          {
            question: 'Is my text data secure?',
            answer: 'Yes, absolutely. All sorting happens locally in your browser using JavaScript. Your text is never uploaded to any server, ensuring complete privacy and security.'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Professional Text Line Sorting Tool',
        intro: 'Our free online word sorter helps you organize text lines alphabetically in ascending or descending order. Perfect for sorting lists, names, data, and any text content that needs alphabetical organization. You can also <a href="/tools/remove-duplicate-lines">remove duplicate lines</a> or <a href="/tools/character-counter">count characters</a> in your text.',
        sections: [
          {
            title: 'Why Sort Text Lines Alphabetically?',
            content: 'Alphabetical sorting makes text data easier to read, search, and manage. Whether you\'re organizing a contact list, sorting product names, or preparing a bibliography, alphabetical order provides a standard, intuitive organization method. Our tool makes this process instant and effortless.',
            keywords: ['sort text alphabetically', 'alphabetical order', 'organize text lines']
          },
          {
            title: 'Ascending vs Descending Order',
            content: 'Choose ascending order (A-Z) for standard alphabetical sorting, or descending order (Z-A) for reverse alphabetical sorting. Ascending order is most common and places items from A to Z. Descending order is useful when you want to see items in reverse order, such as sorting by most recent when combined with dates.',
            keywords: ['ascending order', 'descending order', 'A-Z sorting']
          },
          {
            title: 'Privacy and Security',
            content: 'Your privacy is our priority. All text sorting happens directly in your browser using JavaScript\'s native sort function. Your text data is never uploaded to our servers or any third party. This ensures complete security and privacy for sensitive data like contact lists, customer information, or confidential documents.',
            keywords: ['secure text sorting', 'private sorter', 'browser-based tool']
          }
        ]
      }
    },

    hi: {
      // Hero Section
      hero: {
        title: 'वर्ड सॉर्टर',
        subtitle: 'टेक्स्ट लाइन को आरोही या अवरोही क्रम में वर्णानुक्रम में सॉर्ट करें। लिस्ट, नाम और डेटा को ऑर्गनाइज़ करने के लिए परफेक्ट।',
        benefits: [
          { icon: '⚡', text: 'तुरंत सॉर्टिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📊', text: 'मल्टिपल ऑप्शन' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'सॉर्टिंग शुरू करें',
        privacyNotice: 'सभी टेक्स्ट प्रोसेसिंग आपके ब्राउज़र में होती है। आपका कंटेंट कभी भी आपके डिवाइस को नहीं छोड़ता।'
      },

      // Features Section
      features: {
        title: 'शक्तिशाली टेक्स्ट सॉर्टिंग',
        subtitle: 'अपने टेक्स्ट डेटा को कुशलता से ऑर्गनाइज़ करें',
        items: [
          {
            icon: '🔤',
            title: 'वर्णानुक्रम सॉर्टिंग',
            description: 'A से Z (आरोही) या Z से A (अवरोही) में लाइन सॉर्ट करें'
          },
          {
            icon: '⬆️',
            title: 'आरोही क्रम',
            description: 'आरोही क्रम में लाइन सॉर्ट करें (A → Z, 0 → 9)'
          },
          {
            icon: '⬇️',
            title: 'अवरोही क्रम',
            description: 'अवरोही क्रम में लाइन सॉर्ट करें (Z → A, 9 → 0)'
          },
          {
            icon: '🔡',
            title: 'केस सेंसिटिव',
            description: 'अपरकेस और लोअरकेस को अलग मानने का ऑप्शन'
          },
          {
            icon: '✂️',
            title: 'लाइन ट्रिम करें',
            description: 'सॉर्ट करने से पहले लाइन से व्हाइटस्पेस ऑटोमैटिकली ट्रिम करें'
          },
          {
            icon: '🗑️',
            title: 'खाली लाइन हटाएं',
            description: 'वैकल्पिक रूप से अपने टेक्स्ट से ब्लैंक लाइन हटाएं'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'टेक्स्ट लाइन कैसे सॉर्ट करें',
        subtitle: 'अपने टेक्स्ट को ऑर्गनाइज़ करने के आसान स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट पेस्ट करें',
            description: 'सॉर्ट करने के लिए लाइन वाले अपने टेक्स्ट को इनपुट एरिया में कॉपी और पेस्ट करें'
          },
          {
            number: 2,
            title: 'सॉर्ट ऑर्डर चुनें',
            description: 'आरोही (A-Z) या अवरोही (Z-A) क्रम सिलेक्ट करें'
          },
          {
            number: 3,
            title: 'ऑप्शन सेट करें',
            description: 'वैकल्पिक रूप से केस-सेंसिटिव सॉर्टिंग, ट्रिम लाइन या खाली लाइन हटाना एनेबल करें'
          },
          {
            number: 4,
            title: 'सॉर्ट और कॉपी करें',
            description: 'सॉर्ट बटन पर क्लिक करें और ऑर्गनाइज़ किए गए टेक्स्ट को कॉपी करें'
          }
        ],
        tips: [
          'A-Z सॉर्टिंग के लिए आरोही क्रम का उपयोग करें (डिफ़ॉल्ट)',
          'Z-A रिवर्स सॉर्टिंग के लिए अवरोही क्रम का उपयोग करें',
          'लोअरकेस से पहले अपरकेस सॉर्ट करने के लिए केस-सेंसिटिव एनेबल करें',
          'ट्रिम लाइन ऑप्शन सॉर्ट करने से पहले लीडिंग/ट्रेलिंग स्पेस हटाता है'
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'वर्ड सॉर्टर का उपयोग कब करें',
        items: [
          {
            icon: '📋',
            title: 'लिस्ट ऑर्गनाइज़ करें',
            description: 'शॉपिंग लिस्ट, टू-डू लिस्ट या किसी भी टेक्स्ट लिस्ट को वर्णानुक्रम में सॉर्ट करें'
          },
          {
            icon: '👥',
            title: 'नाम सॉर्ट करें',
            description: 'नाम, कॉन्टैक्ट या पार्टिसिपेंट लिस्ट को अल्फाबेटाइज़ करें'
          },
          {
            icon: '📊',
            title: 'डेटा ऑर्गनाइज़ेशन',
            description: 'CSV डेटा, लॉग एंट्री या डेटाबेस एक्सपोर्ट सॉर्ट करें'
          },
          {
            icon: '📚',
            title: 'बिब्लियोग्राफी',
            description: 'रेफरेंस, साइटेशन या बुक लिस्ट ऑर्गनाइज़ करें'
          },
          {
            icon: '🔍',
            title: 'सर्च ऑप्टिमाइज़ेशन',
            description: 'बेहतर ऑर्गनाइज़ेशन के लिए कीवर्ड, टैग या कैटेगरी सॉर्ट करें'
          },
          {
            icon: '📝',
            title: 'डॉक्यूमेंट प्रिपरेशन',
            description: 'ग्लॉसरी, इंडेक्स या अपेंडिक्स ऑर्गनाइज़ करें'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'आरोही और अवरोही क्रम में क्या अंतर है?',
            answer: 'आरोही क्रम A से Z (या 0 से 9) तक सॉर्ट करता है, आइटम को वर्णानुक्रम में रखता है। अवरोही क्रम Z से A (या 9 से 0) तक सॉर्ट करता है, आइटम को रिवर्स वर्णानुक्रम में रखता है।'
          },
          {
            question: 'केस-सेंसिटिव सॉर्टिंग कैसे काम करती है?',
            answer: 'जब केस-सेंसिटिव एनेबल होता है, तो अपरकेस लेटर लोअरकेस लेटर से पहले सॉर्ट होते हैं। उदाहरण के लिए, "Apple" "apple" से पहले आता है। जब डिसेबल (डिफ़ॉल्ट), "Apple" और "apple" को समान माना जाता है।'
          },
          {
            question: 'क्या मैं नंबर सॉर्ट कर सकता हूं?',
            answer: 'हां, टूल नंबर को टेक्स्ट के रूप में सॉर्ट करता है। नंबर कैरेक्टर दर कैरेक्टर सॉर्ट होते हैं, इसलिए वर्णानुक्रम सॉर्टिंग में "10" "2" से पहले आता है। उचित न्यूमेरिकल सॉर्टिंग के लिए, सुनिश्चित करें कि नंबर में लीडिंग ज़ीरो हैं (जैसे, "02", "10")।'
          },
          {
            question: 'खाली लाइन का क्या होता है?',
            answer: 'डिफ़ॉल्ट रूप से, खाली लाइन अपनी सॉर्ट की गई पोजीशन में प्रिज़र्व होती हैं। अपने टेक्स्ट से सभी ब्लैंक लाइन ऑटोमैटिकली डिलीट करने के लिए "खाली लाइन हटाएं" ऑप्शन एनेबल करें।'
          },
          {
            question: 'क्या टेक्स्ट साइज़ की कोई लिमिट है?',
            answer: 'नहीं, कोई हार्ड लिमिट नहीं है। हालांकि, बहुत बड़े टेक्स्ट (लाखों लाइन) को आपके डिवाइस परफॉर्मेंस के आधार पर सॉर्ट होने में अधिक समय लग सकता है।'
          },
          {
            question: 'क्या मेरा टेक्स्ट डेटा सुरक्षित है?',
            answer: 'हां, बिल्कुल। सभी सॉर्टिंग JavaScript का उपयोग करके आपके ब्राउज़र में लोकली होती है। आपका टेक्स्ट कभी भी किसी सर्वर पर अपलोड नहीं होता, जो पूर्ण प्राइवेसी और सिक्योरिटी सुनिश्चित करता है।'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'प्रोफेशनल टेक्स्ट लाइन सॉर्टिंग टूल',
        intro: 'हमारा फ्री ऑनलाइन वर्ड सॉर्टर आपको टेक्स्ट लाइन को आरोही या अवरोही क्रम में वर्णानुक्रम में ऑर्गनाइज़ करने में मदद करता है। लिस्ट, नाम, डेटा और किसी भी टेक्स्ट कंटेंट को सॉर्ट करने के लिए परफेक्ट जिसे वर्णानुक्रम ऑर्गनाइज़ेशन की आवश्यकता है। आप अपने टेक्स्ट में <a href="/tools/remove-duplicate-lines">डुप्लीकेट लाइन हटा</a> या <a href="/tools/character-counter">कैरेक्टर काउंट</a> भी कर सकते हैं।',
        sections: [
          {
            title: 'टेक्स्ट लाइन को वर्णानुक्रम में क्यों सॉर्ट करें?',
            content: 'वर्णानुक्रम सॉर्टिंग टेक्स्ट डेटा को पढ़ने, सर्च करने और मैनेज करने में आसान बनाती है। चाहे आप कॉन्टैक्ट लिस्ट ऑर्गनाइज़ कर रहे हों, प्रोडक्ट नाम सॉर्ट कर रहे हों या बिब्लियोग्राफी तैयार कर रहे हों, वर्णानुक्रम क्रम एक स्टैंडर्ड, इंट्यूटिव ऑर्गनाइज़ेशन मेथड प्रदान करता है। हमारा टूल इस प्रोसेस को तुरंत और आसान बनाता है।',
            keywords: ['sort text alphabetically', 'alphabetical order', 'organize text lines']
          },
          {
            title: 'आरोही बनाम अवरोही क्रम',
            content: 'स्टैंडर्ड वर्णानुक्रम सॉर्टिंग के लिए आरोही क्रम (A-Z) चुनें, या रिवर्स वर्णानुक्रम सॉर्टिंग के लिए अवरोही क्रम (Z-A) चुनें। आरोही क्रम सबसे आम है और आइटम को A से Z तक रखता है। अवरोही क्रम तब उपयोगी है जब आप आइटम को रिवर्स ऑर्डर में देखना चाहते हैं, जैसे कि तारीखों के साथ कंबाइन करने पर सबसे हाल के द्वारा सॉर्ट करना।',
            keywords: ['ascending order', 'descending order', 'A-Z sorting']
          },
          {
            title: 'प्राइवेसी और सिक्योरिटी',
            content: 'आपकी प्राइवेसी हमारी प्राथमिकता है। सभी टेक्स्ट सॉर्टिंग JavaScript के नेटिव सॉर्ट फंक्शन का उपयोग करके सीधे आपके ब्राउज़र में होती है। आपका टेक्स्ट डेटा कभी भी हमारे सर्वर या किसी थर्ड पार्टी पर अपलोड नहीं होता। यह कॉन्टैक्ट लिस्ट, कस्टमर इंफॉर्मेशन या कॉन्फिडेंशियल डॉक्यूमेंट जैसे सेंसिटिव डेटा के लिए पूर्ण सिक्योरिटी और प्राइवेसी सुनिश्चित करता है।',
            keywords: ['secure text sorting', 'private sorter', 'browser-based tool']
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
        label: 'Enter Your Text',
        placeholder: 'Paste your text lines here to sort...\n\nExample:\nZebra\nApple\nMango\nBanana\nOrange',
        pasteButton: 'Paste',
        clearButton: 'Clear'
      },
      output: {
        label: 'Sorted Result',
        emptyState: 'Sorted text will appear here'
      },
      controls: {
        sortButton: 'Sort Lines',
        copyButton: 'Copy Result',
        copiedButton: 'Copied!',
        resetButton: 'Reset'
      },
      options: {
        sortOrder: 'Sort Order:',
        ascending: 'Ascending (A-Z)',
        descending: 'Descending (Z-A)',
        caseSensitive: 'Case Sensitive',
        trimLines: 'Trim Lines',
        removeEmpty: 'Remove Empty Lines'
      },
      stats: {
        totalLines: 'Total Lines',
        processedLines: 'Processed Lines',
        emptyLinesRemoved: 'Empty Lines Removed'
      },
      messages: {
        noInput: 'Please enter some text',
        processing: 'Sorting...',
        success: 'Lines sorted successfully!',
        noChanges: 'Text is already sorted'
      }
    },
    hi: {
      input: {
        label: 'अपना टेक्स्ट एंटर करें',
        placeholder: 'सॉर्ट करने के लिए अपनी टेक्स्ट लाइन यहां पेस्ट करें...\n\nउदाहरण:\nज़ेबरा\nसेब\nआम\nकेला\nसंतरा',
        pasteButton: 'पेस्ट करें',
        clearButton: 'क्लियर करें'
      },
      output: {
        label: 'सॉर्ट किया गया रिजल्ट',
        emptyState: 'सॉर्ट किया गया टेक्स्ट यहां दिखाई देगा'
      },
      controls: {
        sortButton: 'लाइन सॉर्ट करें',
        copyButton: 'रिजल्ट कॉपी करें',
        copiedButton: 'कॉपी हो गया!',
        resetButton: 'रीसेट करें'
      },
      options: {
        sortOrder: 'सॉर्ट ऑर्डर:',
        ascending: 'आरोही (A-Z)',
        descending: 'अवरोही (Z-A)',
        caseSensitive: 'केस सेंसिटिव',
        trimLines: 'लाइन ट्रिम करें',
        removeEmpty: 'खाली लाइन हटाएं'
      },
      stats: {
        totalLines: 'कुल लाइन',
        processedLines: 'प्रोसेस की गई लाइन',
        emptyLinesRemoved: 'खाली लाइन हटाई गईं'
      },
      messages: {
        noInput: 'कृपया कुछ टेक्स्ट एंटर करें',
        processing: 'सॉर्ट हो रहा है...',
        success: 'लाइन सफलतापूर्वक सॉर्ट की गईं!',
        noChanges: 'टेक्स्ट पहले से सॉर्ट है'
      }
    }
  },

  // ============================================================================
  // 6. VALIDATION (Optional)
  // ============================================================================
  validation: {
    maxLength: 1000000, // 1 million characters
    minLength: 1
  },

  // ============================================================================
  // 7. SETTINGS (Optional)
  // ============================================================================
  settings: {
    defaultOrder: 'asc',
    defaultCaseSensitive: false,
    defaultTrimLines: true,
    defaultRemoveEmpty: false
  }
};

export default wordSorterConfig;

