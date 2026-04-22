/**
 * Remove Duplicate Lines Tool Configuration - SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

export const removeDuplicateLinesConfig = {
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
  id: 'remove-duplicate-lines',
  name: {
    en: 'Remove Duplicate Lines',
    hi: 'डुप्लीकेट लाइन हटाएं'
  },
  slug: 'remove-duplicate-lines',
  description: {
    en: 'Remove duplicate lines from text while preserving order',
    hi: 'क्रम बनाए रखते हुए टेक्स्ट से डुप्लीकेट लाइन हटाएं'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Remove Duplicate Lines Online | Free Text Deduplication Tool 2024',
      description: 'Remove duplicate lines from text online. Free tool to find and delete duplicate lines while preserving order. Perfect for cleaning lists, logs, and data files.',
      keywords: {
        primary: [
          'remove duplicate lines',
          'delete duplicate lines online',
          'text deduplication tool'
        ],
        longTail: [
          'remove duplicate lines from text online free',
          'find and remove duplicate lines',
          'delete repeated lines in text',
          'unique lines only tool',
          'remove duplicate rows online'
        ],
        secondary: [
          'duplicate line remover',
          'text line deduplicator',
          'unique lines extractor',
          'remove repeated lines',
          'clean duplicate text'
        ]
      },
      canonical: 'https://freetools.com/tools/remove-duplicate-lines',
      ogImage: '/images/tools/remove-duplicate-lines-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Remove Duplicate Lines',
        description: 'Free online tool to remove duplicate lines from text',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'डुप्लीकेट लाइन ऑनलाइन हटाएं | फ्री टेक्स्ट डीडुप्लीकेशन टूल 2024',
      description: 'टेक्स्ट से डुप्लीकेट लाइन ऑनलाइन हटाएं। क्रम बनाए रखते हुए डुप्लीकेट लाइन खोजने और डिलीट करने के लिए फ्री टूल। लिस्ट, लॉग और डेटा फाइल साफ करने के लिए परफेक्ट।',
      keywords: {
        primary: [
          'duplicate line hataye',
          'duplicate line online delete kare',
          'text deduplication tool'
        ],
        longTail: [
          'text se duplicate line online free hataye',
          'duplicate line khoje aur hataye',
          'text me repeated line delete kare',
          'unique lines only tool',
          'duplicate rows online hataye'
        ],
        secondary: [
          'duplicate line remover',
          'text line deduplicator',
          'unique lines extractor',
          'repeated lines hataye',
          'duplicate text clean kare'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/remove-duplicate-lines',
      ogImage: '/images/tools/remove-duplicate-lines-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Remove Duplicate Lines',
        subtitle: 'Remove duplicate lines from text while preserving the original order. Perfect for cleaning lists, logs, and data files.',
        benefits: [
          { icon: '⚡', text: 'Instant processing' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📊', text: 'Shows statistics' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Start Removing Duplicates',
        privacyNotice: 'All text processing happens in your browser. Your content never leaves your device.'
      },

      // Features Section
      features: {
        title: 'Powerful Duplicate Line Removal',
        subtitle: 'Clean your text data efficiently',
        items: [
          {
            icon: '🧹',
            title: 'Remove Duplicates',
            description: 'Automatically find and remove duplicate lines while keeping the first occurrence'
          },
          {
            icon: '📐',
            title: 'Preserve Order',
            description: 'Maintains the original order of lines in your text'
          },
          {
            icon: '🔤',
            title: 'Case Sensitive Option',
            description: 'Choose whether to treat uppercase and lowercase as different'
          },
          {
            icon: '✂️',
            title: 'Trim Lines',
            description: 'Option to trim whitespace before comparing lines'
          },
          {
            icon: '🗑️',
            title: 'Remove Empty Lines',
            description: 'Optionally remove blank lines from your text'
          },
          {
            icon: '📊',
            title: 'Statistics',
            description: 'See total lines, unique lines, and duplicates removed'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Remove Duplicate Lines',
        subtitle: 'Simple steps to clean your text',
        steps: [
          {
            number: 1,
            title: 'Paste Your Text',
            description: 'Copy and paste your text with duplicate lines into the input area'
          },
          {
            number: 2,
            title: 'Choose Options',
            description: 'Select case sensitivity, trim lines, or remove empty lines options'
          },
          {
            number: 3,
            title: 'Remove Duplicates',
            description: 'Click the button to process and remove duplicate lines'
          },
          {
            number: 4,
            title: 'Copy Result',
            description: 'Copy the cleaned text with unique lines only'
          }
        ],
        tips: [
          'Use case-insensitive mode to treat "Hello" and "hello" as duplicates',
          'Enable trim lines to ignore leading/trailing spaces when comparing',
          'Remove empty lines option helps clean up extra blank lines',
          'The tool keeps the first occurrence of each duplicate line'
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'When to Use Remove Duplicate Lines',
        items: [
          {
            icon: '📋',
            title: 'Clean Lists',
            description: 'Remove duplicate entries from email lists, contact lists, or any text list'
          },
          {
            icon: '📊',
            title: 'Data Processing',
            description: 'Clean up CSV files, log files, or data exports with duplicate rows'
          },
          {
            icon: '🔍',
            title: 'Code Review',
            description: 'Find and remove duplicate import statements or configuration lines'
          },
          {
            icon: '📝',
            title: 'Document Cleanup',
            description: 'Remove repeated paragraphs or sentences from documents'
          },
          {
            icon: '🗂️',
            title: 'File Management',
            description: 'Clean up file lists or directory listings with duplicates'
          },
          {
            icon: '🔗',
            title: 'URL Lists',
            description: 'Remove duplicate URLs from link lists or sitemaps'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How does the tool determine duplicate lines?',
            answer: 'The tool compares each line with all previous lines. If a match is found, the duplicate is removed. You can choose case-sensitive or case-insensitive comparison, and optionally trim whitespace before comparing.'
          },
          {
            question: 'Which occurrence of duplicate lines is kept?',
            answer: 'The tool always keeps the first occurrence of each line and removes subsequent duplicates. This preserves the original order of your text.'
          },
          {
            question: 'What is the difference between case-sensitive and case-insensitive mode?',
            answer: 'In case-sensitive mode, "Hello" and "hello" are treated as different lines. In case-insensitive mode, they are considered duplicates and only the first one is kept.'
          },
          {
            question: 'Can I remove empty lines?',
            answer: 'Yes, enable the "Remove Empty Lines" option to automatically delete all blank lines from your text while removing duplicates.'
          },
          {
            question: 'Is there a limit on text size?',
            answer: 'No, there is no hard limit. However, very large texts (millions of lines) may take longer to process depending on your device performance.'
          },
          {
            question: 'Is my text data secure?',
            answer: 'Yes, absolutely. All processing happens locally in your browser. Your text is never uploaded to any server, ensuring complete privacy and security.'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Professional Duplicate Line Removal Tool',
        intro: 'Our free online duplicate line remover helps you clean text data by finding and removing duplicate lines while preserving the original order. Perfect for data processing, list cleaning, and text file management. You can also <a href="/tools/word-sorter">sort text lines</a> or <a href="/tools/word-counter">count words</a> in your text.',
        sections: [
          {
            title: 'Why Remove Duplicate Lines?',
            content: 'Duplicate lines in text files can cause issues in data processing, create confusion in lists, and waste storage space. Our tool efficiently removes duplicates while maintaining the integrity and order of your data. Whether you\'re cleaning email lists, processing log files, or managing data exports, removing duplicates is essential for data quality.',
            keywords: ['remove duplicate lines', 'text deduplication', 'clean duplicate data']
          },
          {
            title: 'Advanced Comparison Options',
            content: 'Choose between case-sensitive and case-insensitive comparison modes. Enable line trimming to ignore leading and trailing whitespace when comparing lines. Optionally remove empty lines to further clean your text. These options give you precise control over how duplicates are identified and removed.',
            keywords: ['case sensitive comparison', 'trim lines', 'remove empty lines']
          },
          {
            title: 'Privacy and Security',
            content: 'Your privacy is our priority. All text processing happens directly in your browser using JavaScript. Your text data is never uploaded to our servers or any third party. This ensures complete security and privacy for sensitive data like email lists, customer information, or confidential documents.',
            keywords: ['secure text processing', 'private duplicate remover', 'browser-based tool']
          }
        ]
      }
    },

    hi: {
      // Hero Section
      hero: {
        title: 'डुप्लीकेट लाइन हटाएं',
        subtitle: 'ओरिजिनल क्रम बनाए रखते हुए टेक्स्ट से डुप्लीकेट लाइन हटाएं। लिस्ट, लॉग और डेटा फाइल साफ करने के लिए परफेक्ट।',
        benefits: [
          { icon: '⚡', text: 'तुरंत प्रोसेसिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📊', text: 'स्टैटिस्टिक्स दिखाता है' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'डुप्लीकेट हटाना शुरू करें',
        privacyNotice: 'सभी टेक्स्ट प्रोसेसिंग आपके ब्राउज़र में होती है। आपका कंटेंट कभी भी आपके डिवाइस को नहीं छोड़ता।'
      },

      // Features Section
      features: {
        title: 'शक्तिशाली डुप्लीकेट लाइन रिमूवल',
        subtitle: 'अपने टेक्स्ट डेटा को कुशलता से साफ करें',
        items: [
          {
            icon: '🧹',
            title: 'डुप्लीकेट हटाएं',
            description: 'पहली ऑकरेंस रखते हुए ऑटोमैटिकली डुप्लीकेट लाइन खोजें और हटाएं'
          },
          {
            icon: '📐',
            title: 'क्रम बनाए रखें',
            description: 'आपके टेक्स्ट में लाइन का ओरिजिनल क्रम बनाए रखता है'
          },
          {
            icon: '🔤',
            title: 'केस सेंसिटिव ऑप्शन',
            description: 'चुनें कि अपरकेस और लोअरकेस को अलग माना जाए या नहीं'
          },
          {
            icon: '✂️',
            title: 'लाइन ट्रिम करें',
            description: 'लाइन की तुलना करने से पहले व्हाइटस्पेस ट्रिम करने का ऑप्शन'
          },
          {
            icon: '🗑️',
            title: 'खाली लाइन हटाएं',
            description: 'वैकल्पिक रूप से अपने टेक्स्ट से ब्लैंक लाइन हटाएं'
          },
          {
            icon: '📊',
            title: 'स्टैटिस्टिक्स',
            description: 'कुल लाइन, यूनिक लाइन और हटाए गए डुप्लीकेट देखें'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'डुप्लीकेट लाइन कैसे हटाएं',
        subtitle: 'अपने टेक्स्ट को साफ करने के आसान स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट पेस्ट करें',
            description: 'डुप्लीकेट लाइन वाले अपने टेक्स्ट को इनपुट एरिया में कॉपी और पेस्ट करें'
          },
          {
            number: 2,
            title: 'ऑप्शन चुनें',
            description: 'केस सेंसिटिविटी, ट्रिम लाइन या खाली लाइन हटाने के ऑप्शन सिलेक्ट करें'
          },
          {
            number: 3,
            title: 'डुप्लीकेट हटाएं',
            description: 'डुप्लीकेट लाइन को प्रोसेस और हटाने के लिए बटन पर क्लिक करें'
          },
          {
            number: 4,
            title: 'रिजल्ट कॉपी करें',
            description: 'केवल यूनिक लाइन के साथ साफ किए गए टेक्स्ट को कॉपी करें'
          }
        ],
        tips: [
          '"Hello" और "hello" को डुप्लीकेट मानने के लिए केस-इनसेंसिटिव मोड का उपयोग करें',
          'तुलना करते समय लीडिंग/ट्रेलिंग स्पेस को इग्नोर करने के लिए ट्रिम लाइन एनेबल करें',
          'खाली लाइन हटाने का ऑप्शन एक्स्ट्रा ब्लैंक लाइन साफ करने में मदद करता है',
          'टूल प्रत्येक डुप्लीकेट लाइन की पहली ऑकरेंस रखता है'
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'डुप्लीकेट लाइन हटाने का उपयोग कब करें',
        items: [
          {
            icon: '📋',
            title: 'लिस्ट साफ करें',
            description: 'ईमेल लिस्ट, कॉन्टैक्ट लिस्ट या किसी भी टेक्स्ट लिस्ट से डुप्लीकेट एंट्री हटाएं'
          },
          {
            icon: '📊',
            title: 'डेटा प्रोसेसिंग',
            description: 'डुप्लीकेट रो के साथ CSV फाइल, लॉग फाइल या डेटा एक्सपोर्ट साफ करें'
          },
          {
            icon: '🔍',
            title: 'कोड रिव्यू',
            description: 'डुप्लीकेट इम्पोर्ट स्टेटमेंट या कॉन्फिगरेशन लाइन खोजें और हटाएं'
          },
          {
            icon: '📝',
            title: 'डॉक्यूमेंट क्लीनअप',
            description: 'डॉक्यूमेंट से रिपीटेड पैराग्राफ या सेंटेंस हटाएं'
          },
          {
            icon: '🗂️',
            title: 'फाइल मैनेजमेंट',
            description: 'डुप्लीकेट के साथ फाइल लिस्ट या डायरेक्टरी लिस्टिंग साफ करें'
          },
          {
            icon: '🔗',
            title: 'URL लिस्ट',
            description: 'लिंक लिस्ट या साइटमैप से डुप्लीकेट URL हटाएं'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'टूल डुप्लीकेट लाइन कैसे निर्धारित करता है?',
            answer: 'टूल प्रत्येक लाइन की तुलना सभी पिछली लाइन से करता है। यदि मैच मिलता है, तो डुप्लीकेट हटा दिया जाता है। आप केस-सेंसिटिव या केस-इनसेंसिटिव तुलना चुन सकते हैं, और वैकल्पिक रूप से तुलना करने से पहले व्हाइटस्पेस ट्रिम कर सकते हैं।'
          },
          {
            question: 'डुप्लीकेट लाइन की कौन सी ऑकरेंस रखी जाती है?',
            answer: 'टूल हमेशा प्रत्येक लाइन की पहली ऑकरेंस रखता है और बाद के डुप्लीकेट हटा देता है। यह आपके टेक्स्ट के ओरिजिनल क्रम को बनाए रखता है।'
          },
          {
            question: 'केस-सेंसिटिव और केस-इनसेंसिटिव मोड में क्या अंतर है?',
            answer: 'केस-सेंसिटिव मोड में, "Hello" और "hello" को अलग लाइन माना जाता है। केस-इनसेंसिटिव मोड में, उन्हें डुप्लीकेट माना जाता है और केवल पहली रखी जाती है।'
          },
          {
            question: 'क्या मैं खाली लाइन हटा सकता हूं?',
            answer: 'हां, डुप्लीकेट हटाते समय अपने टेक्स्ट से सभी ब्लैंक लाइन ऑटोमैटिकली डिलीट करने के लिए "खाली लाइन हटाएं" ऑप्शन एनेबल करें।'
          },
          {
            question: 'क्या टेक्स्ट साइज़ की कोई लिमिट है?',
            answer: 'नहीं, कोई हार्ड लिमिट नहीं है। हालांकि, बहुत बड़े टेक्स्ट (लाखों लाइन) को आपके डिवाइस परफॉर्मेंस के आधार पर प्रोसेस होने में अधिक समय लग सकता है।'
          },
          {
            question: 'क्या मेरा टेक्स्ट डेटा सुरक्षित है?',
            answer: 'हां, बिल्कुल। सभी प्रोसेसिंग आपके ब्राउज़र में लोकली होती है। आपका टेक्स्ट कभी भी किसी सर्वर पर अपलोड नहीं होता, जो पूर्ण प्राइवेसी और सिक्योरिटी सुनिश्चित करता है।'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'प्रोफेशनल डुप्लीकेट लाइन रिमूवल टूल',
        intro: 'हमारा फ्री ऑनलाइन डुप्लीकेट लाइन रिमूवर ओरिजिनल क्रम बनाए रखते हुए डुप्लीकेट लाइन खोजने और हटाने में आपकी मदद करता है। डेटा प्रोसेसिंग, लिस्ट क्लीनिंग और टेक्स्ट फाइल मैनेजमेंट के लिए परफेक्ट। आप अपने टेक्स्ट में <a href="/tools/word-sorter">टेक्स्ट लाइन सॉर्ट</a> या <a href="/tools/word-counter">वर्ड काउंट</a> भी कर सकते हैं।',
        sections: [
          {
            title: 'डुप्लीकेट लाइन क्यों हटाएं?',
            content: 'टेक्स्ट फाइल में डुप्लीकेट लाइन डेटा प्रोसेसिंग में समस्याएं पैदा कर सकती हैं, लिस्ट में कन्फ्यूजन बना सकती हैं और स्टोरेज स्पेस बर्बाद कर सकती हैं। हमारा टूल आपके डेटा की इंटीग्रिटी और क्रम बनाए रखते हुए कुशलता से डुप्लीकेट हटाता है। चाहे आप ईमेल लिस्ट साफ कर रहे हों, लॉग फाइल प्रोसेस कर रहे हों या डेटा एक्सपोर्ट मैनेज कर रहे हों, डेटा क्वालिटी के लिए डुप्लीकेट हटाना आवश्यक है।',
            keywords: ['remove duplicate lines', 'text deduplication', 'clean duplicate data']
          },
          {
            title: 'एडवांस्ड कम्पेरिजन ऑप्शन',
            content: 'केस-सेंसिटिव और केस-इनसेंसिटिव कम्पेरिजन मोड के बीच चुनें। लाइन की तुलना करते समय लीडिंग और ट्रेलिंग व्हाइटस्पेस को इग्नोर करने के लिए लाइन ट्रिमिंग एनेबल करें। अपने टेक्स्ट को और साफ करने के लिए वैकल्पिक रूप से खाली लाइन हटाएं। ये ऑप्शन आपको डुप्लीकेट की पहचान और हटाने पर सटीक कंट्रोल देते हैं।',
            keywords: ['case sensitive comparison', 'trim lines', 'remove empty lines']
          },
          {
            title: 'प्राइवेसी और सिक्योरिटी',
            content: 'आपकी प्राइवेसी हमारी प्राथमिकता है। सभी टेक्स्ट प्रोसेसिंग JavaScript का उपयोग करके सीधे आपके ब्राउज़र में होती है। आपका टेक्स्ट डेटा कभी भी हमारे सर्वर या किसी थर्ड पार्टी पर अपलोड नहीं होता। यह ईमेल लिस्ट, कस्टमर इंफॉर्मेशन या कॉन्फिडेंशियल डॉक्यूमेंट जैसे सेंसिटिव डेटा के लिए पूर्ण सिक्योरिटी और प्राइवेसी सुनिश्चित करता है।',
            keywords: ['secure text processing', 'private duplicate remover', 'browser-based tool']
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
        placeholder: 'Paste your text with duplicate lines here...\n\nExample:\napple\nbanana\napple\norange\nbanana\ngrape',
        pasteButton: 'Paste',
        clearButton: 'Clear'
      },
      output: {
        label: 'Result (Unique Lines)',
        emptyState: 'Processed text will appear here'
      },
      controls: {
        processButton: 'Remove Duplicates',
        copyButton: 'Copy Result',
        copiedButton: 'Copied!',
        resetButton: 'Reset'
      },
      options: {
        caseSensitive: 'Case Sensitive',
        trimLines: 'Trim Lines',
        removeEmpty: 'Remove Empty Lines'
      },
      stats: {
        totalLines: 'Total Lines',
        uniqueLines: 'Unique Lines',
        duplicatesRemoved: 'Duplicates Removed',
        emptyLinesRemoved: 'Empty Lines Removed'
      },
      messages: {
        noInput: 'Please enter some text',
        processing: 'Processing...',
        success: 'Duplicates removed successfully!',
        noChanges: 'No duplicate lines found'
      }
    },
    hi: {
      input: {
        label: 'अपना टेक्स्ट एंटर करें',
        placeholder: 'डुप्लीकेट लाइन वाला अपना टेक्स्ट यहां पेस्ट करें...\n\nउदाहरण:\nसेब\nकेला\nसेब\nसंतरा\nकेला\nअंगूर',
        pasteButton: 'पेस्ट करें',
        clearButton: 'क्लियर करें'
      },
      output: {
        label: 'रिजल्ट (यूनिक लाइन)',
        emptyState: 'प्रोसेस किया गया टेक्स्ट यहां दिखाई देगा'
      },
      controls: {
        processButton: 'डुप्लीकेट हटाएं',
        copyButton: 'रिजल्ट कॉपी करें',
        copiedButton: 'कॉपी हो गया!',
        resetButton: 'रीसेट करें'
      },
      options: {
        caseSensitive: 'केस सेंसिटिव',
        trimLines: 'लाइन ट्रिम करें',
        removeEmpty: 'खाली लाइन हटाएं'
      },
      stats: {
        totalLines: 'कुल लाइन',
        uniqueLines: 'यूनिक लाइन',
        duplicatesRemoved: 'डुप्लीकेट हटाए गए',
        emptyLinesRemoved: 'खाली लाइन हटाई गईं'
      },
      messages: {
        noInput: 'कृपया कुछ टेक्स्ट एंटर करें',
        processing: 'प्रोसेस हो रहा है...',
        success: 'डुप्लीकेट सफलतापूर्वक हटा दिए गए!',
        noChanges: 'कोई डुप्लीकेट लाइन नहीं मिली'
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
    defaultCaseSensitive: true,
    defaultTrimLines: true,
    defaultRemoveEmpty: false
  }
};

export default removeDuplicateLinesConfig;

