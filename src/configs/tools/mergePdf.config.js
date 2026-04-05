/**
 * Merge PDF Tool Configuration - NEW SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-04
 */

export const mergePdfConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-04',
    author: 'FreeTools',
    category: 'pdf',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'merge-pdf',
  name: {
    en: 'Merge PDF',
    hi: 'PDF मर्ज करें'
  },
  slug: 'merge-pdf',
  description: {
    en: 'Combine multiple PDF files into one document instantly',
    hi: 'कई PDF फाइलों को तुरंत एक दस्तावेज़ में मिलाएं'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Merge PDF Files Online | Combine PDF Documents Instantly 2024',
      description: 'Combine multiple PDF files into one document online. Free PDF merger that works in your browser. Secure, no file size limits.',
      keywords: {
        primary: 'merge pdf files online',
        secondary: [
          'combine multiple pdf files',
          'join pdf documents',
          'pdf merger online',
          'merge pdf without software',
          'combine pdf pages'
        ]
      },
      canonical: 'https://freetools.com/tools/merge-pdf',
      ogImage: '/images/tools/merge-pdf-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Merge PDF',
        description: 'Free online PDF merger tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'PDF फाइलें ऑनलाइन मर्ज करें | PDF डॉक्यूमेंट तुरंत कंबाइन करें 2024',
      description: 'कई PDF फाइलों को एक डॉक्यूमेंट में ऑनलाइन कंबाइन करें। फ्री PDF मर्जर जो आपके ब्राउज़र में काम करता है। सिक्योर, कोई फाइल साइज़ लिमिट नहीं।',
      keywords: {
        primary: 'pdf files online merge kare',
        secondary: [
          'multiple pdf files combine kare',
          'pdf documents join kare',
          'pdf merger online',
          'bina software pdf merge kare',
          'pdf pages combine kare'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/merge-pdf',
      ogImage: '/images/tools/merge-pdf-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'PDF मर्ज करें',
        description: 'फ्री ऑनलाइन PDF मर्जर टूल',
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
        title: 'Merge PDF Files Online',
        subtitle: 'Combine multiple PDF documents into one file instantly',
        benefits: [
          { icon: '⚡', text: 'Instant merging' },
          { icon: '🔒', text: '100% secure' },
          { icon: '📱', text: 'Works on all devices' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Upload PDF Files',
        privacyNotice: 'All processing happens in your browser. Your files never leave your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our PDF Merger?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Merge multiple PDFs in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your files never leave your device'
          },
          {
            icon: '📄',
            title: 'No File Limits',
            description: 'Merge as many PDF files as you need without any restrictions'
          },
          {
            icon: '🎯',
            title: 'Preserve Quality',
            description: 'Original PDF quality and formatting are maintained perfectly'
          },
          {
            icon: '🆓',
            title: 'Completely Free',
            description: 'No hidden costs, no subscriptions. Use unlimited times for free'
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
        title: 'How to Merge PDF Files',
        steps: [
          {
            step: 1,
            title: 'Upload PDF Files',
            description: 'Click the upload button and select multiple PDF files you want to merge'
          },
          {
            step: 2,
            title: 'Arrange Order',
            description: 'Files will be merged in the order they appear. Rearrange if needed'
          },
          {
            step: 3,
            title: 'Merge PDFs',
            description: 'Click the "Merge PDFs" button to combine all files into one document'
          },
          {
            step: 4,
            title: 'Download Result',
            description: 'Download your merged PDF file instantly to your device'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How many PDF files can I merge at once?',
            answer: 'You can merge as many PDF files as you need. There is no limit on the number of files you can combine.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'While there is no strict limit, very large files may take longer to process. For best performance, we recommend files under 50MB each.'
          },
          {
            question: 'Are my PDF files secure?',
            answer: 'Yes, absolutely! All PDF merging happens directly in your browser. Your files are never uploaded to any server, ensuring complete privacy and security.'
          },
          {
            question: 'Will the quality of my PDFs be affected?',
            answer: 'No, the original quality and formatting of your PDF files are preserved perfectly. The merged PDF maintains all the original content, images, and formatting.'
          },
          {
            question: 'Can I rearrange the order of PDFs before merging?',
            answer: 'Yes, you can rearrange the order of your PDF files before merging. The files will be combined in the order they appear in the list.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Our PDF merger is completely free and works instantly without any registration.'
          },
          {
            question: 'What happens to my files after merging?',
            answer: 'Since all processing happens in your browser, your files are automatically cleared when you close the page. Nothing is stored on our servers.'
          },
          {
            question: 'Can I merge password-protected PDFs?',
            answer: 'Currently, password-protected PDFs need to be unlocked before merging. You can use our PDF unlock tool first, then merge the files.'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Business Documents',
            description: 'Combine multiple invoices, contracts, or reports into a single professional document'
          },
          {
            title: 'Academic Papers',
            description: 'Merge research papers, assignments, or study materials into one comprehensive file'
          },
          {
            title: 'Legal Documents',
            description: 'Consolidate legal agreements, court documents, or case files for easy management'
          },
          {
            title: 'Presentations',
            description: 'Combine multiple presentation slides or handouts into a single shareable document'
          },
          {
            title: 'E-books & Manuals',
            description: 'Merge chapters or sections of e-books and instruction manuals into complete guides'
          },
          {
            title: 'Photo Albums',
            description: 'Combine multiple PDF photo albums or scanned images into one organized collection'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'PDF फाइलें ऑनलाइन मर्ज करें',
        subtitle: 'कई PDF दस्तावेज़ों को तुरंत एक फाइल में मिलाएं',
        benefits: [
          { icon: '⚡', text: 'तुरंत मर्जिंग' },
          { icon: '🔒', text: '100% सुरक्षित' },
          { icon: '📱', text: 'सभी डिवाइस पर काम करता है' },
          { icon: '🆓', text: 'पूरी तरह से फ्री' }
        ],
        cta: 'PDF फाइलें अपलोड करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें आपके डिवाइस को नहीं छोड़तीं।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारे PDF मर्जर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंडों में कई PDF मर्ज करें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें आपके डिवाइस को नहीं छोड़तीं'
          },
          {
            icon: '📄',
            title: 'कोई फाइल लिमिट नहीं',
            description: 'बिना किसी प्रतिबंध के जितनी चाहें PDF फाइलें मर्ज करें'
          },
          {
            icon: '🎯',
            title: 'क्वालिटी बनाए रखें',
            description: 'मूल PDF क्वालिटी और फॉर्मेटिंग पूरी तरह से बनी रहती है'
          },
          {
            icon: '🆓',
            title: 'पूरी तरह से फ्री',
            description: 'कोई छिपी हुई लागत नहीं, कोई सब्सक्रिप्शन नहीं। फ्री में असीमित बार उपयोग करें'
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
        title: 'PDF फाइलें कैसे मर्ज करें',
        steps: [
          {
            step: 1,
            title: 'PDF फाइलें अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और कई PDF फाइलें चुनें जिन्हें आप मर्ज करना चाहते हैं'
          },
          {
            step: 2,
            title: 'क्रम व्यवस्थित करें',
            description: 'फाइलें उसी क्रम में मर्ज होंगी जिस क्रम में वे दिखाई देती हैं। ज़रूरत पड़ने पर पुनर्व्यवस्थित करें'
          },
          {
            step: 3,
            title: 'PDF मर्ज करें',
            description: 'सभी फाइलों को एक दस्तावेज़ में मिलाने के लिए "PDF मर्ज करें" बटन पर क्लिक करें'
          },
          {
            step: 4,
            title: 'परिणाम डाउनलोड करें',
            description: 'अपनी मर्ज की गई PDF फाइल को तुरंत अपने डिवाइस पर डाउनलोड करें'
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं एक बार में कितनी PDF फाइलें मर्ज कर सकता हूं?',
            answer: 'आप जितनी चाहें उतनी PDF फाइलें मर्ज कर सकते हैं। आप जितनी फाइलें कंबाइन कर सकते हैं उसकी कोई सीमा नहीं है।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'हालांकि कोई सख्त लिमिट नहीं है, बहुत बड़ी फाइलों को प्रोसेस होने में अधिक समय लग सकता है। सर्वोत्तम प्रदर्शन के लिए, हम प्रत्येक 50MB से कम फाइलों की सिफारिश करते हैं।'
          },
          {
            question: 'क्या मेरी PDF फाइलें सुरक्षित हैं?',
            answer: 'हां, बिल्कुल! सभी PDF मर्जिंग सीधे आपके ब्राउज़र में होती है। आपकी फाइलें कभी भी किसी सर्वर पर अपलोड नहीं होतीं, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करती है।'
          },
          {
            question: 'क्या मेरी PDF की क्वालिटी प्रभावित होगी?',
            answer: 'नहीं, आपकी PDF फाइलों की मूल क्वालिटी और फॉर्मेटिंग पूरी तरह से संरक्षित रहती है। मर्ज की गई PDF सभी मूल सामग्री, छवियों और फॉर्मेटिंग को बनाए रखती है।'
          },
          {
            question: 'क्या मैं मर्ज करने से पहले PDF का क्रम बदल सकता हूं?',
            answer: 'हां, आप मर्ज करने से पहले अपनी PDF फाइलों का क्रम बदल सकते हैं। फाइलें उसी क्रम में कंबाइन होंगी जिस क्रम में वे सूची में दिखाई देती हैं।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। हमारा PDF मर्जर पूरी तरह से फ्री है और बिना किसी रजिस्ट्रेशन के तुरंत काम करता है।'
          },
          {
            question: 'मर्ज करने के बाद मेरी फाइलों का क्या होता है?',
            answer: 'चूंकि सभी प्रोसेसिंग आपके ब्राउज़र में होती है, जब आप पेज बंद करते हैं तो आपकी फाइलें स्वचालित रूप से साफ हो जाती हैं। हमारे सर्वर पर कुछ भी स्टोर नहीं होता।'
          },
          {
            question: 'क्या मैं पासवर्ड-प्रोटेक्टेड PDF मर्ज कर सकता हूं?',
            answer: 'वर्तमान में, पासवर्ड-प्रोटेक्टेड PDF को मर्ज करने से पहले अनलॉक करने की ज़रूरत है। आप पहले हमारे PDF अनलॉक टूल का उपयोग कर सकते हैं, फिर फाइलें मर्ज कर सकते हैं।'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'व्यावसायिक दस्तावेज़',
            description: 'कई इनवॉइस, कॉन्ट्रैक्ट या रिपोर्ट को एक प्रोफेशनल दस्तावेज़ में मिलाएं'
          },
          {
            title: 'शैक्षणिक पेपर',
            description: 'रिसर्च पेपर, असाइनमेंट या स्टडी मटेरियल को एक व्यापक फाइल में मर्ज करें'
          },
          {
            title: 'कानूनी दस्तावेज़',
            description: 'आसान प्रबंधन के लिए कानूनी समझौतों, कोर्ट दस्तावेज़ों या केस फाइलों को समेकित करें'
          },
          {
            title: 'प्रेजेंटेशन',
            description: 'कई प्रेजेंटेशन स्लाइड या हैंडआउट को एक शेयर करने योग्य दस्तावेज़ में मिलाएं'
          },
          {
            title: 'ई-बुक्स और मैनुअल',
            description: 'ई-बुक्स और इंस्ट्रक्शन मैनुअल के अध्यायों या सेक्शन को पूर्ण गाइड में मर्ज करें'
          },
          {
            title: 'फोटो एल्बम',
            description: 'कई PDF फोटो एल्बम या स्कैन की गई छवियों को एक व्यवस्थित संग्रह में मिलाएं'
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
      uploadButton: 'Select PDF Files',
      uploadHint: 'Click to select multiple PDF files or drag and drop',
      uploadMultiple: 'You can select multiple files at once',
      
      // File List
      filesSelected: 'files selected',
      noFilesSelected: 'No files selected yet',
      removeFile: 'Remove',
      clearAll: 'Clear All',
      
      // Actions
      mergeButton: 'Merge PDFs',
      merging: 'Merging...',
      downloadButton: 'Download Merged PDF',
      
      // Status Messages
      selectFiles: 'Please select at least 2 PDF files to merge',
      singleFile: 'Please select at least 2 files. Single file selected.',
      mergeSuccess: 'PDFs merged successfully!',
      mergeError: 'Failed to merge PDFs. Please try again.',
      
      // Errors
      invalidFileType: 'Invalid file type. Please select only PDF files.',
      fileTooLarge: 'File is too large. Maximum size is 50MB per file.',
      mergeFailure: 'Failed to merge PDFs. Please check your files and try again.',
      
      // Info
      processingInfo: 'Processing your PDFs...',
      securityNote: 'All processing happens in your browser. Your files are never uploaded.',
      
      // Drag and Drop
      dropZoneActive: 'Drop PDF files here',
      dropZoneInactive: 'Drag and drop PDF files here, or click to select'
    },
    hi: {
      // File Upload
      uploadButton: 'PDF फाइलें चुनें',
      uploadHint: 'कई PDF फाइलें चुनने के लिए क्लिक करें या ड्रैग और ड्रॉप करें',
      uploadMultiple: 'आप एक बार में कई फाइलें चुन सकते हैं',
      
      // File List
      filesSelected: 'फाइलें चुनी गईं',
      noFilesSelected: 'अभी तक कोई फाइल नहीं चुनी गई',
      removeFile: 'हटाएं',
      clearAll: 'सभी साफ करें',
      
      // Actions
      mergeButton: 'PDF मर्ज करें',
      merging: 'मर्ज हो रहा है...',
      downloadButton: 'मर्ज की गई PDF डाउनलोड करें',
      
      // Status Messages
      selectFiles: 'कृपया मर्ज करने के लिए कम से कम 2 PDF फाइलें चुनें',
      singleFile: 'कृपया कम से कम 2 फाइलें चुनें। एक फाइल चुनी गई।',
      mergeSuccess: 'PDF सफलतापूर्वक मर्ज हो गए!',
      mergeError: 'PDF मर्ज करने में विफल। कृपया पुनः प्रयास करें।',
      
      // Errors
      invalidFileType: 'अमान्य फाइल प्रकार। कृपया केवल PDF फाइलें चुनें।',
      fileTooLarge: 'फाइल बहुत बड़ी है। प्रति फाइल अधिकतम साइज़ 50MB है।',
      mergeFailure: 'PDF मर्ज करने में विफल। कृपया अपनी फाइलें जांचें और पुनः प्रयास करें।',
      
      // Info
      processingInfo: 'आपकी PDF प्रोसेस हो रही हैं...',
      securityNote: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी अपलोड नहीं होतीं।',
      
      // Drag and Drop
      dropZoneActive: 'PDF फाइलें यहां ड्रॉप करें',
      dropZoneInactive: 'PDF फाइलें यहां ड्रैग और ड्रॉप करें, या चुनने के लिए क्लिक करें'
    }
  },

  // ============================================================================
  // 6. VALIDATION RULES (Required)
  // ============================================================================
  validation: {
    fileTypes: ['.pdf'],
    maxFileSize: 52428800, // 50MB in bytes
    minFiles: 2,
    maxFiles: 50,
    rules: {
      en: {
        fileType: 'Only PDF files are allowed',
        fileSize: 'File size must be less than 50MB',
        minFiles: 'At least 2 files are required to merge',
        maxFiles: 'Maximum 50 files can be merged at once'
      },
      hi: {
        fileType: 'केवल PDF फाइलों की अनुमति है',
        fileSize: 'फाइल साइज़ 50MB से कम होना चाहिए',
        minFiles: 'मर्ज करने के लिए कम से कम 2 फाइलें आवश्यक हैं',
        maxFiles: 'एक बार में अधिकतम 50 फाइलें मर्ज की जा सकती हैं'
      }
    }
  },

  // ============================================================================
  // 7. RELATED TOOLS (Optional but recommended)
  // ============================================================================
  relatedTools: [
    'split-pdf',
    'compress-pdf',
    'pdf-to-image',
    'rotate-pdf'
  ]
}

