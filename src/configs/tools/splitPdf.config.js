/**
 * Split PDF Tool Configuration - Schema v2.0
 *
 * Following the GOLD STANDARD reference implementation
 *
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-19
 */

export const splitPdfConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-19',
    author: 'FreeTools',
    category: 'pdf',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'split-pdf',
  name: {
    en: 'Split PDF',
    hi: 'PDF स्प्लिट करें'
  },
  slug: 'split-pdf',
  description: {
    en: 'Split PDF into separate files by pages or custom ranges',
    hi: 'PDF को पेज या कस्टम रेंज द्वारा अलग फाइलों में विभाजित करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Split PDF Online | Separate PDF Pages Free 2024',
      description: 'Split PDF into separate files online. Extract pages or split by custom ranges. Free PDF splitter that works in your browser. Secure, no uploads.',
      keywords: {
        primary: [
          'split pdf online',
          'separate pdf pages',
          'pdf splitter free'
        ],
        longTail: [
          'split pdf into separate pages online free',
          'extract pages from pdf online',
          'divide pdf into multiple files',
          'split pdf by page range',
          'separate pdf pages without software'
        ],
        secondary: [
          'pdf page extractor',
          'split pdf document',
          'divide pdf online',
          'extract pdf pages',
          'pdf separator tool'
        ]
      },
      canonical: 'https://freetools.com/tools/split-pdf',
      ogImage: '/images/tools/split-pdf-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Split PDF',
        description: 'Free online PDF splitter tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'PDF ऑनलाइन स्प्लिट करें | PDF पेज फ्री अलग करें 2024',
      description: 'PDF को ऑनलाइन अलग फाइलों में स्प्लिट करें। पेज एक्सट्रैक्ट करें या कस्टम रेंज से स्प्लिट करें। फ्री PDF स्प्लिटर जो आपके ब्राउज़र में काम करता है। सिक्योर, कोई अपलोड नहीं।',
      keywords: {
        primary: [
          'pdf online split kare',
          'pdf pages alag kare',
          'pdf splitter free'
        ],
        longTail: [
          'pdf ko alag pages me split kare online free',
          'pdf se pages extract kare online',
          'pdf ko multiple files me divide kare',
          'pdf ko page range se split kare',
          'bina software pdf pages alag kare'
        ],
        secondary: [
          'pdf page extractor',
          'pdf document split kare',
          'pdf online divide kare',
          'pdf pages extract kare',
          'pdf separator tool'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/split-pdf',
      ogImage: '/images/tools/split-pdf-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'PDF स्प्लिट करें',
        description: 'फ्री ऑनलाइन PDF स्प्लिटर टूल',
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
        title: 'Split PDF',
        subtitle: 'Separate PDF pages into individual files instantly',
        benefits: [
          { icon: '⚡', text: 'Instant splitting' },
          { icon: '🔒', text: '100% secure' },
          { icon: '📱', text: 'Works on all devices' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Upload PDF',
        privacyNotice: 'All processing happens in your browser. Your files never leave your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our PDF Splitter?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Split PDF pages in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your PDF never leaves your device'
          },
          {
            icon: '📄',
            title: 'Multiple Split Options',
            description: 'Split all pages individually or extract specific page ranges'
          },
          {
            icon: '💾',
            title: 'Batch Download',
            description: 'Download all split PDFs as a ZIP file or save them individually'
          },
          {
            icon: '🎯',
            title: 'Custom Ranges',
            description: 'Define custom page ranges to split exactly what you need'
          },
          {
            icon: '📱',
            title: 'Works Everywhere',
            description: 'Use on any device - desktop, tablet, or mobile. No installation needed'
          }
        ]
      },

      // How To Use Section
      howTo: {
        title: 'How to Split PDF',
        steps: [
          {
            step: 1,
            title: 'Upload PDF',
            description: 'Click the upload button and select the PDF file you want to split'
          },
          {
            step: 2,
            title: 'Choose Split Mode',
            description: 'Select "Split All Pages" or "Custom Ranges" based on your needs'
          },
          {
            step: 3,
            title: 'Define Ranges (Optional)',
            description: 'For custom ranges, specify which pages to extract (e.g., 1-3, 5-7)'
          },
          {
            step: 4,
            title: 'Download Files',
            description: 'Download split PDFs individually or all at once as a ZIP file'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Splitting PDF Files Online',
        intro: 'This free online PDF splitter helps you separate PDF pages into individual files or extract specific page ranges. Split PDF without software installation. Perfect for extracting chapters, sections, or specific pages from large documents. All processing happens in your browser for complete privacy. You can also <a href="/tools/merge-pdf">merge PDF files</a> or <a href="/tools/delete-pdf-pages">delete unwanted pages</a> from your documents.',
        sections: [
          {
            title: 'How to Split PDF Online',
            content: 'Splitting PDF files online is simple and secure with our browser-based tool. Upload your PDF file, choose your split mode (all pages or custom ranges), and click split. Each page or range becomes a separate PDF file. You can download files individually or all at once as a ZIP file. The entire process happens in your browser, ensuring your PDF never leaves your device.',
            keywords: ['split pdf online', 'separate pdf pages', 'pdf splitter free']
          },
          {
            title: 'Why Split PDF Files?',
            content: 'Splitting PDF files offers numerous benefits. Extract specific chapters or sections from large documents, share individual pages without sending the entire file, reduce file size by removing unnecessary pages, organize documents by separating different topics, and create individual files for easier management. Common use cases include extracting invoices from statements, separating book chapters, isolating specific pages for sharing, and organizing multi-document PDFs.',
            keywords: ['why split pdf', 'pdf splitting benefits', 'extract pdf pages']
          },
          {
            title: 'Split All Pages vs Custom Ranges',
            content: 'Choose "Split All Pages" to create a separate PDF for each page in your document. This is perfect for documents where each page is independent. Choose "Custom Ranges" to extract specific page ranges (e.g., pages 1-5, 10-15). This is ideal when you need specific sections or chapters. You can define multiple ranges to extract different sections in one operation.',
            keywords: ['split all pages', 'custom page ranges', 'extract page ranges']
          },
          {
            title: 'Secure PDF Splitting',
            content: 'Security is paramount when handling sensitive documents. Our PDF splitter processes everything directly in your browser using JavaScript. Your PDF is never uploaded to any server, eliminating privacy concerns and data breach risks. This client-side processing ensures complete confidentiality for business documents, personal files, and sensitive information.',
            keywords: ['secure pdf splitter', 'private splitting', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How many pages can I split at once?',
            answer: 'You can split PDFs with up to 1000 pages. Each page will be saved as a separate PDF file that you can download individually or all together as a ZIP file.'
          },
          {
            question: 'Can I split specific page ranges?',
            answer: 'Yes! Use the "Custom Ranges" mode to specify exactly which pages to extract. For example, you can extract pages 1-5, 10-15, and 20-25 in one operation.'
          },
          {
            question: 'Is my PDF secure?',
            answer: 'Yes, absolutely! All PDF processing and splitting happens directly in your browser. Your PDF is never uploaded to any server, ensuring complete privacy and security.'
          },
          {
            question: 'What happens to the original PDF?',
            answer: 'The original PDF remains unchanged. The splitting process creates new PDF files from the selected pages without modifying your original document.'
          },
          {
            question: 'Can I download all split PDFs at once?',
            answer: 'Yes! You can download all split PDFs as a single ZIP file, or download each PDF individually. The ZIP option is convenient for PDFs with many pages.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'The maximum PDF file size is 50MB. For best performance, we recommend PDFs under 20MB. Very large files may take longer to process.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Our PDF splitter is completely free and works instantly without any registration.'
          },
          {
            question: 'Can I split password-protected PDFs?',
            answer: 'Currently, password-protected PDFs need to be unlocked before splitting. You can use a PDF unlock tool first, then split the pages.'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Extract Chapters',
            description: 'Separate book chapters or document sections into individual PDF files for easier reading'
          },
          {
            title: 'Isolate Invoices',
            description: 'Extract individual invoices or receipts from multi-page billing statements'
          },
          {
            title: 'Share Specific Pages',
            description: 'Share only relevant pages without sending the entire document'
          },
          {
            title: 'Organize Documents',
            description: 'Separate mixed documents into individual files for better organization'
          },
          {
            title: 'Reduce File Size',
            description: 'Extract only needed pages to create smaller, more manageable files'
          },
          {
            title: 'Create Presentations',
            description: 'Extract specific slides or pages to create focused presentations'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'PDF स्प्लिट करें',
        subtitle: 'PDF पेज को तुरंत अलग फाइलों में विभाजित करें',
        benefits: [
          { icon: '⚡', text: 'तुरंत स्प्लिटिंग' },
          { icon: '🔒', text: '100% सुरक्षित' },
          { icon: '📱', text: 'सभी डिवाइस पर काम करता है' },
          { icon: '🆓', text: 'पूरी तरह से फ्री' }
        ],
        cta: 'PDF अपलोड करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें आपके डिवाइस को नहीं छोड़तीं।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारे PDF स्प्लिटर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंडों में PDF पेज स्प्लिट करें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF आपके डिवाइस को नहीं छोड़ता'
          },
          {
            icon: '📄',
            title: 'कई स्प्लिट ऑप्शन',
            description: 'सभी पेज अलग-अलग स्प्लिट करें या स्पेसिफिक पेज रेंज एक्सट्रैक्ट करें'
          },
          {
            icon: '💾',
            title: 'बैच डाउनलोड',
            description: 'सभी स्प्लिट PDF को ZIP फाइल के रूप में डाउनलोड करें या उन्हें अलग-अलग सेव करें'
          },
          {
            icon: '🎯',
            title: 'कस्टम रेंज',
            description: 'कस्टम पेज रेंज डिफाइन करें जो आपको चाहिए वही स्प्लिट करने के लिए'
          },
          {
            icon: '📱',
            title: 'हर जगह काम करता है',
            description: 'किसी भी डिवाइस पर उपयोग करें - डेस्कटॉप, टैबलेट या मोबाइल। इंस्टॉलेशन की ज़रूरत नहीं'
          }
        ]
      },

      // How To Use Section
      howTo: {
        title: 'PDF कैसे स्प्लिट करें',
        steps: [
          {
            step: 1,
            title: 'PDF अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और PDF फाइल चुनें जिसे आप स्प्लिट करना चाहते हैं'
          },
          {
            step: 2,
            title: 'स्प्लिट मोड चुनें',
            description: 'अपनी ज़रूरत के अनुसार "सभी पेज स्प्लिट करें" या "कस्टम रेंज" चुनें'
          },
          {
            step: 3,
            title: 'रेंज डिफाइन करें (वैकल्पिक)',
            description: 'कस्टम रेंज के लिए, स्पेसिफाई करें कौन से पेज एक्सट्रैक्ट करने हैं (जैसे, 1-3, 5-7)'
          },
          {
            step: 4,
            title: 'फाइलें डाउनलोड करें',
            description: 'स्प्लिट PDF को अलग-अलग डाउनलोड करें या सभी को एक साथ ZIP फाइल के रूप में डाउनलोड करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'PDF फाइलों को ऑनलाइन स्प्लिट करने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन PDF स्प्लिटर आपको PDF पेज को अलग फाइलों में विभाजित करने या स्पेसिफिक पेज रेंज एक्सट्रैक्ट करने में मदद करता है। बिना सॉफ्टवेयर इंस्टॉलेशन के PDF स्प्लिट करें। बड़े दस्तावेज़ों से चैप्टर, सेक्शन या स्पेसिफिक पेज एक्सट्रैक्ट करने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप <a href="/tools/merge-pdf">PDF फाइलों को मर्ज</a> भी कर सकते हैं या अपने दस्तावेज़ों से <a href="/tools/delete-pdf-pages">अनचाहे पेज हटा</a> सकते हैं।',
        sections: [
          {
            title: 'PDF को ऑनलाइन कैसे स्प्लिट करें',
            content: 'हमारे ब्राउज़र-बेस्ड टूल के साथ PDF फाइलों को ऑनलाइन स्प्लिट करना सरल और सुरक्षित है। अपनी PDF फाइल अपलोड करें, अपना स्प्लिट मोड चुनें (सभी पेज या कस्टम रेंज), और स्प्लिट पर क्लिक करें। प्रत्येक पेज या रेंज एक अलग PDF फाइल बन जाती है। आप फाइलों को अलग-अलग डाउनलोड कर सकते हैं या सभी को एक साथ ZIP फाइल के रूप में डाउनलोड कर सकते हैं। पूरी प्रोसेस आपके ब्राउज़र में होती है, यह सुनिश्चित करते हुए कि आपका PDF आपके डिवाइस को कभी नहीं छोड़ता।',
            keywords: ['pdf online split kare', 'pdf pages alag kare', 'pdf splitter free']
          },
          {
            title: 'PDF फाइलों को क्यों स्प्लिट करें?',
            content: 'PDF फाइलों को स्प्लिट करने से कई फायदे मिलते हैं। बड़े दस्तावेज़ों से स्पेसिफिक चैप्टर या सेक्शन एक्सट्रैक्ट करें, पूरी फाइल भेजे बिना अलग-अलग पेज शेयर करें, अनावश्यक पेज हटाकर फाइल साइज़ कम करें, अलग-अलग टॉपिक को अलग करके दस्तावेज़ ऑर्गनाइज़ करें, और आसान मैनेजमेंट के लिए अलग-अलग फाइलें बनाएं। सामान्य उपयोग के मामलों में स्टेटमेंट से इनवॉइस एक्सट्रैक्ट करना, बुक चैप्टर अलग करना, शेयर करने के लिए स्पेसिफिक पेज आइसोलेट करना, और मल्टी-डॉक्यूमेंट PDF ऑर्गनाइज़ करना शामिल है।',
            keywords: ['pdf kyu split kare', 'pdf splitting ke fayde', 'pdf pages extract kare']
          },
          {
            title: 'सभी पेज स्प्लिट करें vs कस्टम रेंज',
            content: 'अपने दस्तावेज़ में प्रत्येक पेज के लिए एक अलग PDF बनाने के लिए "सभी पेज स्प्लिट करें" चुनें। यह उन दस्तावेज़ों के लिए परफेक्ट है जहां प्रत्येक पेज स्वतंत्र है। स्पेसिफिक पेज रेंज (जैसे, पेज 1-5, 10-15) एक्सट्रैक्ट करने के लिए "कस्टम रेंज" चुनें। यह तब आइडियल है जब आपको स्पेसिफिक सेक्शन या चैप्टर चाहिए। आप एक ऑपरेशन में अलग-अलग सेक्शन एक्सट्रैक्ट करने के लिए कई रेंज डिफाइन कर सकते हैं।',
            keywords: ['sabhi pages split kare', 'custom page ranges', 'page ranges extract kare']
          },
          {
            title: 'सुरक्षित PDF स्प्लिटिंग',
            content: 'संवेदनशील दस्तावेज़ों को हैंडल करते समय सुरक्षा सर्वोपरि है। हमारा PDF स्प्लिटर JavaScript का उपयोग करके सीधे आपके ब्राउज़र में सब कुछ प्रोसेस करता है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो प्राइवेसी चिंताओं और डेटा ब्रीच रिस्क को खत्म करता है। यह क्लाइंट-साइड प्रोसेसिंग व्यावसायिक दस्तावेज़, व्यक्तिगत फाइलों और संवेदनशील जानकारी के लिए पूर्ण गोपनीयता सुनिश्चित करती है।',
            keywords: ['secure pdf splitter', 'private splitting', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं एक बार में कितने पेज स्प्लिट कर सकता हूं?',
            answer: 'आप 1000 पेज तक के PDF स्प्लिट कर सकते हैं। प्रत्येक पेज को एक अलग PDF फाइल के रूप में सेव किया जाएगा जिसे आप अलग-अलग या सभी को एक साथ ZIP फाइल के रूप में डाउनलोड कर सकते हैं।'
          },
          {
            question: 'क्या मैं स्पेसिफिक पेज रेंज स्प्लिट कर सकता हूं?',
            answer: 'हां! "कस्टम रेंज" मोड का उपयोग करके स्पेसिफाई करें कि कौन से पेज एक्सट्रैक्ट करने हैं। उदाहरण के लिए, आप एक ऑपरेशन में पेज 1-5, 10-15, और 20-25 एक्सट्रैक्ट कर सकते हैं।'
          },
          {
            question: 'क्या मेरा PDF सुरक्षित है?',
            answer: 'हां, बिल्कुल! सभी PDF प्रोसेसिंग और स्प्लिटिंग सीधे आपके ब्राउज़र में होती है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करता है।'
          },
          {
            question: 'ओरिजिनल PDF का क्या होता है?',
            answer: 'ओरिजिनल PDF अपरिवर्तित रहता है। स्प्लिटिंग प्रोसेस आपके ओरिजिनल दस्तावेज़ को संशोधित किए बिना चयनित पेज से नई PDF फाइलें बनाती है।'
          },
          {
            question: 'क्या मैं सभी स्प्लिट PDF एक साथ डाउनलोड कर सकता हूं?',
            answer: 'हां! आप सभी स्प्लिट PDF को एक ZIP फाइल के रूप में डाउनलोड कर सकते हैं, या प्रत्येक PDF को अलग-अलग डाउनलोड कर सकते हैं। कई पेज वाले PDF के लिए ZIP ऑप्शन सुविधाजनक है।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'अधिकतम PDF फाइल साइज़ 50MB है। सर्वोत्तम प्रदर्शन के लिए, हम 20MB से कम PDF की सिफारिश करते हैं। बहुत बड़ी फाइलों को प्रोसेस होने में अधिक समय लग सकता है।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। हमारा PDF स्प्लिटर पूरी तरह से फ्री है और बिना किसी रजिस्ट्रेशन के तुरंत काम करता है।'
          },
          {
            question: 'क्या मैं पासवर्ड-प्रोटेक्टेड PDF स्प्लिट कर सकता हूं?',
            answer: 'वर्तमान में, पासवर्ड-प्रोटेक्टेड PDF को स्प्लिटिंग से पहले अनलॉक करने की ज़रूरत है। आप पहले PDF अनलॉक टूल का उपयोग कर सकते हैं, फिर पेज स्प्लिट कर सकते हैं।'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'चैप्टर एक्सट्रैक्ट करें',
            description: 'आसान रीडिंग के लिए बुक चैप्टर या दस्तावेज़ सेक्शन को अलग-अलग PDF फाइलों में अलग करें'
          },
          {
            title: 'इनवॉइस आइसोलेट करें',
            description: 'मल्टी-पेज बिलिंग स्टेटमेंट से अलग-अलग इनवॉइस या रिसीट एक्सट्रैक्ट करें'
          },
          {
            title: 'स्पेसिफिक पेज शेयर करें',
            description: 'पूरा दस्तावेज़ भेजे बिना केवल प्रासंगिक पेज शेयर करें'
          },
          {
            title: 'दस्तावेज़ ऑर्गनाइज़ करें',
            description: 'बेहतर ऑर्गनाइज़ेशन के लिए मिक्स्ड दस्तावेज़ों को अलग-अलग फाइलों में अलग करें'
          },
          {
            title: 'फाइल साइज़ कम करें',
            description: 'छोटी, अधिक मैनेजेबल फाइलें बनाने के लिए केवल ज़रूरी पेज एक्सट्रैक्ट करें'
          },
          {
            title: 'प्रेजेंटेशन बनाएं',
            description: 'फोकस्ड प्रेजेंटेशन बनाने के लिए स्पेसिफिक स्लाइड या पेज एक्सट्रैक्ट करें'
          }
        ]
      }
    }
  },

  // ============================================================================
  // 5. UI TEXT (Required - All user-facing strings)
  // ============================================================================
  uiText: {
    en: {
      // File Upload
      uploadButton: 'Select PDF',
      uploadHint: 'Click to select a PDF file or drag and drop',

      // Split Mode Selection
      modeLabel: 'Split Mode',
      modeAll: 'Split All Pages',
      modeRanges: 'Custom Ranges',

      // Range Input
      rangeLabel: 'Page Ranges',
      rangeHint: 'Enter ranges like: 1-3, 5-7, 10',
      addRange: 'Add Range',
      removeRange: 'Remove',
      startPage: 'Start Page',
      endPage: 'End Page',

      // Actions
      splitButton: 'Split PDF',
      splitting: 'Splitting...',
      downloadButton: 'Download PDF',
      downloadAllButton: 'Download All as ZIP',

      // Status Messages
      selectFile: 'Please select a PDF file to split',
      splitSuccess: 'PDF split successfully!',
      splitError: 'Failed to split PDF. Please try again.',

      // Errors
      invalidFileType: 'Invalid file type. Please select a PDF file.',
      fileTooLarge: 'File is too large. Maximum size is 50MB.',
      invalidRange: 'Invalid page range. Please check your input.',
      splitFailure: 'Failed to split PDF. Please check your file and try again.',

      // Info
      processingInfo: 'Splitting PDF pages...',
      securityNote: 'All processing happens in your browser. Your PDF is never uploaded.',
      pagesInfo: 'pages in PDF',
      filesCreated: 'files created',

      // Drag and Drop
      dropZoneActive: 'Drop PDF here',
      dropZoneInactive: 'Drag and drop PDF here, or click to select'
    },
    hi: {
      // File Upload
      uploadButton: 'PDF चुनें',
      uploadHint: 'PDF फाइल चुनने के लिए क्लिक करें या ड्रैग और ड्रॉप करें',

      // Split Mode Selection
      modeLabel: 'स्प्लिट मोड',
      modeAll: 'सभी पेज स्प्लिट करें',
      modeRanges: 'कस्टम रेंज',

      // Range Input
      rangeLabel: 'पेज रेंज',
      rangeHint: 'रेंज इस तरह दर्ज करें: 1-3, 5-7, 10',
      addRange: 'रेंज जोड़ें',
      removeRange: 'हटाएं',
      startPage: 'शुरुआती पेज',
      endPage: 'अंतिम पेज',

      // Actions
      splitButton: 'PDF स्प्लिट करें',
      splitting: 'स्प्लिट हो रहा है...',
      downloadButton: 'PDF डाउनलोड करें',
      downloadAllButton: 'सभी को ZIP के रूप में डाउनलोड करें',

      // Status Messages
      selectFile: 'कृपया स्प्लिट करने के लिए एक PDF फाइल चुनें',
      splitSuccess: 'PDF सफलतापूर्वक स्प्लिट हो गया!',
      splitError: 'PDF स्प्लिट करने में विफल। कृपया पुनः प्रयास करें।',

      // Errors
      invalidFileType: 'अमान्य फाइल प्रकार। कृपया एक PDF फाइल चुनें।',
      fileTooLarge: 'फाइल बहुत बड़ी है। अधिकतम साइज़ 50MB है।',
      invalidRange: 'अमान्य पेज रेंज। कृपया अपना इनपुट जांचें।',
      splitFailure: 'PDF स्प्लिट करने में विफल। कृपया अपनी फाइल जांचें और पुनः प्रयास करें।',

      // Info
      processingInfo: 'PDF पेज स्प्लिट हो रहे हैं...',
      securityNote: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF कभी अपलोड नहीं होता।',
      pagesInfo: 'PDF में पेज',
      filesCreated: 'फाइलें बनाई गईं',

      // Drag and Drop
      dropZoneActive: 'PDF यहां ड्रॉप करें',
      dropZoneInactive: 'PDF यहां ड्रैग और ड्रॉप करें, या चुनने के लिए क्लिक करें'
    }
  },

  // ============================================================================
  // 6. VALIDATION RULES (Required)
  // ============================================================================
  validation: {
    fileTypes: ['.pdf'],
    maxFileSize: 52428800, // 50MB in bytes
    maxPages: 1000,
    rules: {
      en: {
        fileType: 'Only PDF files are allowed',
        fileSize: 'File size must be less than 50MB',
        maxPages: 'Maximum 1000 pages can be processed at once'
      },
      hi: {
        fileType: 'केवल PDF फाइलों की अनुमति है',
        fileSize: 'फाइल साइज़ 50MB से कम होना चाहिए',
        maxPages: 'एक बार में अधिकतम 1000 पेज प्रोसेस किए जा सकते हैं'
      }
    }
  },

  // ============================================================================
  // 7. RELATED TOOLS (Optional but recommended)
  // ============================================================================
  relatedTools: [
    'merge-pdf',
    'pdf-to-image',
    'image-to-pdf',
    'compress-pdf'
  ]
}

export default splitPdfConfig
