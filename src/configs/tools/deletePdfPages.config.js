/**
 * Delete PDF Pages Tool Configuration - Schema v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-19
 */

export const deletePdfPagesConfig = {
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
  id: 'delete-pdf-pages',
  name: {
    en: 'Delete PDF Pages',
    hi: 'PDF पेज डिलीट करें'
  },
  slug: 'delete-pdf-pages',
  description: {
    en: 'Remove unwanted pages from PDF documents quickly and securely',
    hi: 'PDF दस्तावेज़ों से अनचाहे पेज जल्दी और सुरक्षित रूप से हटाएं'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Delete PDF Pages Online | Remove Pages from PDF Free 2024',
      description: 'Delete unwanted pages from PDF online. Select and remove specific pages from your PDF documents. Free PDF page remover that works in your browser. Secure, no uploads.',
      keywords: {
        primary: [
          'delete pdf pages online',
          'remove pages from pdf',
          'pdf page remover free'
        ],
        longTail: [
          'delete specific pages from pdf online free',
          'remove unwanted pages from pdf',
          'delete pages from pdf without software',
          'remove pdf pages online tool',
          'delete multiple pages from pdf'
        ],
        secondary: [
          'pdf page deleter',
          'remove pdf pages',
          'delete pdf pages tool',
          'pdf page remover online',
          'extract pages by deletion'
        ]
      },
      canonical: 'https://freetools.com/tools/delete-pdf-pages',
      ogImage: '/images/tools/delete-pdf-pages-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Delete PDF Pages',
        description: 'Free online PDF page deletion tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'PDF पेज ऑनलाइन डिलीट करें | PDF से पेज फ्री हटाएं 2024',
      description: 'PDF से अनचाहे पेज ऑनलाइन डिलीट करें। अपने PDF दस्तावेज़ों से स्पेसिफिक पेज चुनें और हटाएं। फ्री PDF पेज रिमूवर जो आपके ब्राउज़र में काम करता है। सिक्योर, कोई अपलोड नहीं।',
      keywords: {
        primary: [
          'pdf pages online delete kare',
          'pdf se pages hataye',
          'pdf page remover free'
        ],
        longTail: [
          'pdf se specific pages delete kare online free',
          'pdf se unwanted pages hataye',
          'bina software pdf pages delete kare',
          'pdf pages online remove kare tool',
          'pdf se multiple pages delete kare'
        ],
        secondary: [
          'pdf page deleter',
          'pdf pages remove kare',
          'pdf pages delete tool',
          'pdf page remover online',
          'deletion se pages extract kare'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/delete-pdf-pages',
      ogImage: '/images/tools/delete-pdf-pages-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'PDF पेज डिलीट करें',
        description: 'फ्री ऑनलाइन PDF पेज डिलीशन टूल',
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
        title: 'Delete PDF Pages',
        subtitle: 'Remove unwanted pages from your PDF documents instantly',
        benefits: [
          { icon: '⚡', text: 'Instant deletion' },
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
        title: 'Why Use Our PDF Page Deleter?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Delete PDF pages in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your PDF never leaves your device'
          },
          {
            icon: '🎯',
            title: 'Selective Deletion',
            description: 'Choose exactly which pages to remove with visual page selection'
          },
          {
            icon: '👁️',
            title: 'Page Preview',
            description: 'See thumbnails of all pages before deciding which ones to delete'
          },
          {
            icon: '✅',
            title: 'Multi-Select',
            description: 'Select multiple pages at once with checkboxes or click selection'
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
        title: 'How to Delete Pages from PDF',
        steps: [
          {
            step: 1,
            title: 'Upload PDF',
            description: 'Click the upload button and select the PDF file you want to modify'
          },
          {
            step: 2,
            title: 'Select Pages to Delete',
            description: 'Click on pages you want to remove. Selected pages will be highlighted'
          },
          {
            step: 3,
            title: 'Review Selection',
            description: 'Check the count of selected pages and remaining pages before deletion'
          },
          {
            step: 4,
            title: 'Download Modified PDF',
            description: 'Click delete and download your PDF with unwanted pages removed'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Deleting PDF Pages Online',
        intro: 'This free online PDF page deleter helps you remove unwanted pages from PDF documents. Delete specific pages without software installation. Perfect for removing blank pages, advertisements, or unnecessary content from PDFs. All processing happens in your browser for complete privacy. You can also <a href="/tools/split-pdf">split PDF files</a> or <a href="/tools/merge-pdf">merge multiple PDFs</a>.',
        sections: [
          {
            title: 'How to Delete Pages from PDF Online',
            content: 'Deleting pages from PDF files online is simple and secure with our browser-based tool. Upload your PDF file, select the pages you want to remove by clicking on them, review your selection, and click delete. The tool creates a new PDF with only the pages you want to keep. You can download the modified PDF immediately. The entire process happens in your browser, ensuring your PDF never leaves your device.',
            keywords: ['delete pdf pages online', 'remove pages from pdf', 'pdf page deleter free']
          },
          {
            title: 'Why Delete PDF Pages?',
            content: 'Deleting PDF pages offers numerous benefits. Remove blank pages that waste space, eliminate advertisements or promotional content, delete outdated information from documents, reduce file size by removing unnecessary pages, and clean up scanned documents with unwanted pages. Common use cases include removing cover pages before printing, deleting blank pages from scanned documents, removing advertisements from downloaded PDFs, and eliminating duplicate pages.',
            keywords: ['why delete pdf pages', 'remove blank pages', 'clean pdf documents']
          },
          {
            title: 'Visual Page Selection',
            content: 'Our tool provides visual page thumbnails so you can see exactly what you\'re deleting. Each page is displayed as a thumbnail with its page number. Click on any page to select it for deletion - selected pages are highlighted. You can select multiple pages at once. The tool shows you the count of selected pages and how many pages will remain after deletion, preventing accidental deletion of all pages.',
            keywords: ['visual page selection', 'page thumbnails', 'select pages to delete']
          },
          {
            title: 'Secure PDF Page Deletion',
            content: 'Security is paramount when handling sensitive documents. Our PDF page deleter processes everything directly in your browser using JavaScript. Your PDF is never uploaded to any server, eliminating privacy concerns and data breach risks. This client-side processing ensures complete confidentiality for business documents, personal files, and sensitive information. The original PDF remains unchanged on your device.',
            keywords: ['secure pdf deletion', 'private page removal', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Can I delete multiple pages at once?',
            answer: 'Yes! You can select multiple pages by clicking on them. All selected pages will be deleted when you click the delete button. There\'s no limit to how many pages you can select.'
          },
          {
            question: 'What happens if I try to delete all pages?',
            answer: 'The tool prevents you from deleting all pages. At least one page must remain in the PDF. If you select all pages, you\'ll see an error message asking you to keep at least one page.'
          },
          {
            question: 'Is my PDF secure?',
            answer: 'Yes, absolutely! All PDF processing and page deletion happens directly in your browser. Your PDF is never uploaded to any server, ensuring complete privacy and security.'
          },
          {
            question: 'Does the original PDF get modified?',
            answer: 'No, the original PDF remains unchanged. The deletion process creates a new PDF file with the selected pages removed, leaving your original document intact.'
          },
          {
            question: 'Can I undo page deletion?',
            answer: 'Before downloading, you can deselect pages by clicking them again. Once you download the modified PDF, you cannot undo the deletion, but your original PDF remains unchanged.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'The maximum PDF file size is 50MB. For best performance, we recommend PDFs under 20MB. Very large files may take longer to process.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Our PDF page deleter is completely free and works instantly without any registration.'
          },
          {
            question: 'Can I delete pages from password-protected PDFs?',
            answer: 'Currently, password-protected PDFs need to be unlocked before deleting pages. You can use a PDF unlock tool first, then delete the pages.'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Remove Blank Pages',
            description: 'Delete blank pages from scanned documents or PDFs with empty pages'
          },
          {
            title: 'Eliminate Advertisements',
            description: 'Remove promotional pages or ads from downloaded PDF documents'
          },
          {
            title: 'Delete Cover Pages',
            description: 'Remove cover pages or title pages before printing or sharing'
          },
          {
            title: 'Clean Scanned Documents',
            description: 'Remove unwanted pages from scanned documents like blank backs of pages'
          },
          {
            title: 'Reduce File Size',
            description: 'Delete unnecessary pages to create smaller, more manageable files'
          },
          {
            title: 'Remove Duplicate Pages',
            description: 'Eliminate duplicate or repeated pages from PDF documents'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'PDF पेज डिलीट करें',
        subtitle: 'अपने PDF दस्तावेज़ों से अनचाहे पेज तुरंत हटाएं',
        benefits: [
          { icon: '⚡', text: 'तुरंत डिलीशन' },
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
        title: 'हमारे PDF पेज डिलीटर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंडों में PDF पेज डिलीट करें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF आपके डिवाइस को नहीं छोड़ता'
          },
          {
            icon: '🎯',
            title: 'सिलेक्टिव डिलीशन',
            description: 'विज़ुअल पेज सिलेक्शन के साथ चुनें कि कौन से पेज हटाने हैं'
          },
          {
            icon: '👁️',
            title: 'पेज प्रीव्यू',
            description: 'डिलीट करने से पहले सभी पेज के थंबनेल देखें'
          },
          {
            icon: '✅',
            title: 'मल्टी-सिलेक्ट',
            description: 'चेकबॉक्स या क्लिक सिलेक्शन के साथ एक साथ कई पेज चुनें'
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
        title: 'PDF से पेज कैसे डिलीट करें',
        steps: [
          {
            step: 1,
            title: 'PDF अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और PDF फाइल चुनें जिसे आप मॉडिफाई करना चाहते हैं'
          },
          {
            step: 2,
            title: 'डिलीट करने के लिए पेज चुनें',
            description: 'उन पेज पर क्लिक करें जिन्हें आप हटाना चाहते हैं। चयनित पेज हाइलाइट हो जाएंगे'
          },
          {
            step: 3,
            title: 'सिलेक्शन रिव्यू करें',
            description: 'डिलीशन से पहले चयनित पेज और शेष पेज की संख्या जांचें'
          },
          {
            step: 4,
            title: 'मॉडिफाइड PDF डाउनलोड करें',
            description: 'डिलीट पर क्लिक करें और अनचाहे पेज हटाए गए अपने PDF को डाउनलोड करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'PDF पेज ऑनलाइन डिलीट करने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन PDF पेज डिलीटर आपको PDF दस्तावेज़ों से अनचाहे पेज हटाने में मदद करता है। बिना सॉफ्टवेयर इंस्टॉलेशन के स्पेसिफिक पेज डिलीट करें। PDF से ब्लैंक पेज, विज्ञापन या अनावश्यक कंटेंट हटाने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। अधिक PDF मैनेजमेंट के लिए, हमारे <a href="/tools/split-pdf">PDF Split</a> और <a href="/tools/merge-pdf">PDF Merge</a> टूल्स भी देखें।',
        sections: [
          {
            title: 'PDF से पेज ऑनलाइन कैसे डिलीट करें',
            content: 'हमारे ब्राउज़र-बेस्ड टूल के साथ PDF फाइलों से पेज डिलीट करना सरल और सुरक्षित है। अपनी PDF फाइल अपलोड करें, उन पेज को चुनें जिन्हें आप हटाना चाहते हैं उन पर क्लिक करके, अपने सिलेक्शन को रिव्यू करें, और डिलीट पर क्लिक करें। टूल केवल उन पेज के साथ एक नया PDF बनाता है जिन्हें आप रखना चाहते हैं। आप मॉडिफाइड PDF को तुरंत डाउनलोड कर सकते हैं। पूरी प्रोसेस आपके ब्राउज़र में होती है, यह सुनिश्चित करते हुए कि आपका PDF आपके डिवाइस को कभी नहीं छोड़ता।',
            keywords: ['pdf pages online delete kare', 'pdf se pages hataye', 'pdf page deleter free']
          },
          {
            title: 'PDF पेज क्यों डिलीट करें?',
            content: 'PDF पेज डिलीट करने से कई फायदे मिलते हैं। स्पेस बर्बाद करने वाले ब्लैंक पेज हटाएं, विज्ञापन या प्रमोशनल कंटेंट को खत्म करें, दस्तावेज़ों से पुरानी जानकारी डिलीट करें, अनावश्यक पेज हटाकर फाइल साइज़ कम करें, और अनचाहे पेज वाले स्कैन किए गए दस्तावेज़ों को साफ करें। सामान्य उपयोग के मामलों में प्रिंटिंग से पहले कवर पेज हटाना, स्कैन किए गए दस्तावेज़ों से ब्लैंक पेज डिलीट करना, डाउनलोड किए गए PDF से विज्ञापन हटाना, और डुप्लिकेट पेज को खत्म करना शामिल है।',
            keywords: ['pdf pages kyu delete kare', 'blank pages hataye', 'pdf documents clean kare']
          },
          {
            title: 'विज़ुअल पेज सिलेक्शन',
            content: 'हमारा टूल विज़ुअल पेज थंबनेल प्रदान करता है ताकि आप देख सकें कि आप क्या डिलीट कर रहे हैं। प्रत्येक पेज को उसके पेज नंबर के साथ थंबनेल के रूप में प्रदर्शित किया जाता है। डिलीशन के लिए चुनने के लिए किसी भी पेज पर क्लिक करें - चयनित पेज हाइलाइट हो जाते हैं। आप एक साथ कई पेज चुन सकते हैं। टूल आपको चयनित पेज की संख्या और डिलीशन के बाद कितने पेज शेष रहेंगे दिखाता है, सभी पेज की आकस्मिक डिलीशन को रोकता है।',
            keywords: ['visual page selection', 'page thumbnails', 'delete karne ke liye pages select kare']
          },
          {
            title: 'सुरक्षित PDF पेज डिलीशन',
            content: 'संवेदनशील दस्तावेज़ों को हैंडल करते समय सुरक्षा सर्वोपरि है। हमारा PDF पेज डिलीटर JavaScript का उपयोग करके सीधे आपके ब्राउज़र में सब कुछ प्रोसेस करता है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो प्राइवेसी चिंताओं और डेटा ब्रीच रिस्क को खत्म करता है। यह क्लाइंट-साइड प्रोसेसिंग व्यावसायिक दस्तावेज़, व्यक्तिगत फाइलों और संवेदनशील जानकारी के लिए पूर्ण गोपनीयता सुनिश्चित करती है। ओरिजिनल PDF आपके डिवाइस पर अपरिवर्तित रहता है।',
            keywords: ['secure pdf deletion', 'private page removal', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'क्या मैं एक साथ कई पेज डिलीट कर सकता हूं?',
            answer: 'हां! आप उन पर क्लिक करके कई पेज चुन सकते हैं। जब आप डिलीट बटन पर क्लिक करेंगे तो सभी चयनित पेज डिलीट हो जाएंगे। आप कितने पेज चुन सकते हैं इसकी कोई सीमा नहीं है।'
          },
          {
            question: 'अगर मैं सभी पेज डिलीट करने की कोशिश करूं तो क्या होगा?',
            answer: 'टूल आपको सभी पेज डिलीट करने से रोकता है। PDF में कम से कम एक पेज रहना चाहिए। यदि आप सभी पेज चुनते हैं, तो आपको एक एरर मैसेज दिखाई देगा जो आपसे कम से कम एक पेज रखने के लिए कहेगा।'
          },
          {
            question: 'क्या मेरा PDF सुरक्षित है?',
            answer: 'हां, बिल्कुल! सभी PDF प्रोसेसिंग और पेज डिलीशन सीधे आपके ब्राउज़र में होती है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करता है।'
          },
          {
            question: 'क्या ओरिजिनल PDF मॉडिफाई हो जाता है?',
            answer: 'नहीं, ओरिजिनल PDF अपरिवर्तित रहता है। डिलीशन प्रोसेस चयनित पेज हटाए गए एक नई PDF फाइल बनाती है, आपके ओरिजिनल दस्तावेज़ को बरकरार रखते हुए।'
          },
          {
            question: 'क्या मैं पेज डिलीशन को अनडू कर सकता हूं?',
            answer: 'डाउनलोड करने से पहले, आप पेज को फिर से क्लिक करके डिसिलेक्ट कर सकते हैं। एक बार जब आप मॉडिफाइड PDF डाउनलोड कर लेते हैं, तो आप डिलीशन को अनडू नहीं कर सकते, लेकिन आपका ओरिजिनल PDF अपरिवर्तित रहता है।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'अधिकतम PDF फाइल साइज़ 50MB है। सर्वोत्तम प्रदर्शन के लिए, हम 20MB से कम PDF की सिफारिश करते हैं। बहुत बड़ी फाइलों को प्रोसेस होने में अधिक समय लग सकता है।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। हमारा PDF पेज डिलीटर पूरी तरह से फ्री है और बिना किसी रजिस्ट्रेशन के तुरंत काम करता है।'
          },
          {
            question: 'क्या मैं पासवर्ड-प्रोटेक्टेड PDF से पेज डिलीट कर सकता हूं?',
            answer: 'वर्तमान में, पासवर्ड-प्रोटेक्टेड PDF को पेज डिलीट करने से पहले अनलॉक करने की ज़रूरत है। आप पहले PDF अनलॉक टूल का उपयोग कर सकते हैं, फिर पेज डिलीट कर सकते हैं।'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'ब्लैंक पेज हटाएं',
            description: 'स्कैन किए गए दस्तावेज़ों या खाली पेज वाले PDF से ब्लैंक पेज डिलीट करें'
          },
          {
            title: 'विज्ञापन खत्म करें',
            description: 'डाउनलोड किए गए PDF दस्तावेज़ों से प्रमोशनल पेज या विज्ञापन हटाएं'
          },
          {
            title: 'कवर पेज डिलीट करें',
            description: 'प्रिंटिंग या शेयरिंग से पहले कवर पेज या टाइटल पेज हटाएं'
          },
          {
            title: 'स्कैन किए गए दस्तावेज़ साफ करें',
            description: 'स्कैन किए गए दस्तावेज़ों से अनचाहे पेज हटाएं जैसे पेज के ब्लैंक बैक'
          },
          {
            title: 'फाइल साइज़ कम करें',
            description: 'छोटी, अधिक मैनेजेबल फाइलें बनाने के लिए अनावश्यक पेज डिलीट करें'
          },
          {
            title: 'डुप्लिकेट पेज हटाएं',
            description: 'PDF दस्तावेज़ों से डुप्लिकेट या दोहराए गए पेज को खत्म करें'
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
      
      // Page Selection
      selectPagesLabel: 'Select Pages to Delete',
      selectPagesHint: 'Click on pages to select them for deletion',
      selectAllButton: 'Select All',
      deselectAllButton: 'Deselect All',
      
      // Actions
      deleteButton: 'Delete Selected Pages',
      deleting: 'Deleting...',
      downloadButton: 'Download PDF',
      
      // Status Messages
      selectFile: 'Please select a PDF file to modify',
      selectPages: 'Please select at least one page to delete',
      cannotDeleteAll: 'Cannot delete all pages. At least one page must remain.',
      deleteSuccess: 'Pages deleted successfully!',
      deleteError: 'Failed to delete pages. Please try again.',
      
      // Errors
      invalidFileType: 'Invalid file type. Please select a PDF file.',
      fileTooLarge: 'File is too large. Maximum size is 50MB.',
      deleteFailure: 'Failed to delete pages. Please check your file and try again.',
      
      // Info
      processingInfo: 'Deleting selected pages...',
      securityNote: 'All processing happens in your browser. Your PDF is never uploaded.',
      pagesInfo: 'pages in PDF',
      selectedPages: 'pages selected',
      remainingPages: 'pages will remain',
      
      // Drag and Drop
      dropZoneActive: 'Drop PDF here',
      dropZoneInactive: 'Drag and drop PDF here, or click to select'
    },
    hi: {
      // File Upload
      uploadButton: 'PDF चुनें',
      uploadHint: 'PDF फाइल चुनने के लिए क्लिक करें या ड्रैग और ड्रॉप करें',
      
      // Page Selection
      selectPagesLabel: 'डिलीट करने के लिए पेज चुनें',
      selectPagesHint: 'डिलीशन के लिए पेज चुनने के लिए उन पर क्लिक करें',
      selectAllButton: 'सभी चुनें',
      deselectAllButton: 'सभी डिसिलेक्ट करें',
      
      // Actions
      deleteButton: 'चयनित पेज डिलीट करें',
      deleting: 'डिलीट हो रहा है...',
      downloadButton: 'PDF डाउनलोड करें',
      
      // Status Messages
      selectFile: 'कृपया मॉडिफाई करने के लिए एक PDF फाइल चुनें',
      selectPages: 'कृपया डिलीट करने के लिए कम से कम एक पेज चुनें',
      cannotDeleteAll: 'सभी पेज डिलीट नहीं कर सकते। कम से कम एक पेज रहना चाहिए।',
      deleteSuccess: 'पेज सफलतापूर्वक डिलीट हो गए!',
      deleteError: 'पेज डिलीट करने में विफल। कृपया पुनः प्रयास करें।',
      
      // Errors
      invalidFileType: 'अमान्य फाइल प्रकार। कृपया एक PDF फाइल चुनें।',
      fileTooLarge: 'फाइल बहुत बड़ी है। अधिकतम साइज़ 50MB है।',
      deleteFailure: 'पेज डिलीट करने में विफल। कृपया अपनी फाइल जांचें और पुनः प्रयास करें।',
      
      // Info
      processingInfo: 'चयनित पेज डिलीट हो रहे हैं...',
      securityNote: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF कभी अपलोड नहीं होता।',
      pagesInfo: 'PDF में पेज',
      selectedPages: 'पेज चयनित',
      remainingPages: 'पेज शेष रहेंगे',
      
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
        maxPages: 'Maximum 1000 pages can be processed at once',
        minPages: 'At least one page must remain in the PDF'
      },
      hi: {
        fileType: 'केवल PDF फाइलों की अनुमति है',
        fileSize: 'फाइल साइज़ 50MB से कम होना चाहिए',
        maxPages: 'एक बार में अधिकतम 1000 पेज प्रोसेस किए जा सकते हैं',
        minPages: 'PDF में कम से कम एक पेज रहना चाहिए'
      }
    }
  },

  // ============================================================================
  // 7. RELATED TOOLS (Optional but recommended)
  // ============================================================================
  relatedTools: [
    'split-pdf',
    'merge-pdf',
    'rotate-pdf',
    'pdf-to-image'
  ]
}

export default deletePdfPagesConfig

