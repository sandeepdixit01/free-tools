/**
 * Image Compressor Tool Configuration - Schema v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

export const imageCompressorConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-20',
    author: 'FreeTools',
    category: 'image',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'image-compressor',
  name: {
    en: 'Image Compressor',
    hi: 'इमेज कंप्रेसर'
  },
  slug: 'image-compressor',
  description: {
    en: 'Compress images with adjustable quality and format conversion',
    hi: 'एडजस्टेबल क्वालिटी और फॉर्मेट कन्वर्जन के साथ इमेज कंप्रेस करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Image Compressor Online | Compress JPG PNG WEBP Free 2024',
      description: 'Compress images online with adjustable quality. Free image compressor that reduces file size without losing quality. Supports JPG, PNG, WEBP. Secure, works in browser.',
      keywords: {
        primary: [
          'image compressor online',
          'compress image free',
          'reduce image size'
        ],
        longTail: [
          'compress image without losing quality',
          'reduce image file size online',
          'compress jpg online free',
          'compress png without quality loss',
          'image compression tool free'
        ],
        secondary: [
          'image optimizer',
          'photo compressor',
          'reduce photo size',
          'compress pictures online',
          'image size reducer'
        ]
      },
      canonical: 'https://freetools.com/tools/image-compressor',
      ogImage: '/images/tools/image-compressor-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Image Compressor',
        description: 'Free online image compression tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'इमेज कंप्रेसर ऑनलाइन | JPG PNG WEBP फ्री कंप्रेस करें 2024',
      description: 'एडजस्टेबल क्वालिटी के साथ इमेज को ऑनलाइन कंप्रेस करें। फ्री इमेज कंप्रेसर जो क्वालिटी खोए बिना फाइल साइज़ कम करता है। JPG, PNG, WEBP सपोर्ट करता है। सिक्योर, ब्राउज़र में काम करता है।',
      keywords: {
        primary: [
          'image compressor online',
          'image ko free compress kare',
          'image size kam kare'
        ],
        longTail: [
          'bina quality khrab kiye image compress kare',
          'image file size online kam kare',
          'jpg ko online free compress kare',
          'png ko bina quality loss compress kare',
          'image compression tool free'
        ],
        secondary: [
          'image optimizer',
          'photo compressor',
          'photo size kam kare',
          'pictures ko online compress kare',
          'image size reducer'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/image-compressor',
      ogImage: '/images/tools/image-compressor-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'इमेज कंप्रेसर',
        description: 'फ्री ऑनलाइन इमेज कंप्रेशन टूल',
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
      hero: {
        title: 'Image Compressor',
        subtitle: 'Compress images with adjustable quality and format conversion',
        benefits: [
          { icon: '⚡', text: 'Instant compression' },
          { icon: '🔒', text: '100% secure' },
          { icon: '📱', text: 'Works on all devices' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Upload Images',
        privacyNotice: 'All processing happens in your browser. Your files never leave your device.',
        privacyIcon: '🔒'
      },
      features: {
        title: 'Why Use Our Image Compressor?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Compress multiple images in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your images never leave your device'
          },
          {
            icon: '🎚️',
            title: 'Adjustable Quality',
            description: 'Control compression level from 10% to 100% to balance quality and file size'
          },
          {
            icon: '🔄',
            title: 'Format Conversion',
            description: 'Convert between JPG, PNG, and WEBP formats while compressing'
          },
          {
            icon: '📊',
            title: 'Size Comparison',
            description: 'See original vs compressed size with percentage reduction'
          },
          {
            icon: '📱',
            title: 'Works Everywhere',
            description: 'Use on any device - desktop, tablet, or mobile. No installation needed'
          }
        ]
      },
      howTo: {
        title: 'How to Compress Images',
        steps: [
          {
            step: 1,
            title: 'Upload Images',
            description: 'Click the upload button and select one or more images to compress'
          },
          {
            step: 2,
            title: 'Adjust Quality',
            description: 'Use the quality slider to set compression level (10-100%)'
          },
          {
            step: 3,
            title: 'Choose Format',
            description: 'Select output format: JPG, PNG, or WEBP (optional conversion)'
          },
          {
            step: 4,
            title: 'Download',
            description: 'Download compressed images individually or all at once'
          }
        ]
      },
      seoContent: {
        mainTitle: 'Complete Guide to Compressing Images Online',
        intro: 'This free online image compressor helps you reduce image file sizes while maintaining quality. Compress JPG, PNG, and WEBP images with adjustable quality settings. Perfect for optimizing images for websites, emails, social media, or storage. All processing happens in your browser for complete privacy. You can also <a href="/tools/resize-image">resize images</a> or <a href="/tools/image-format-converter">convert image formats</a>.',
        sections: [
          {
            title: 'How to Compress Images Online',
            content: 'Compressing images online is simple and secure with our browser-based tool. Upload your images, adjust the quality slider to control compression level, optionally convert to a different format (JPG, PNG, or WEBP), and download the compressed images. You can see the original size, compressed size, and percentage reduction for each image.',
            keywords: ['compress image online', 'reduce image size', 'image compressor free']
          },
          {
            title: 'Why Compress Images?',
            content: 'Image compression is essential for web performance and storage optimization. Compressed images load faster on websites, improving user experience and SEO rankings. They consume less bandwidth, reducing hosting costs and mobile data usage.',
            keywords: ['why compress images', 'image optimization', 'reduce file size']
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I compress images?',
            answer: 'Upload your images, adjust the quality slider (10-100%), optionally select a different output format, and download the compressed images. The tool shows you the size reduction for each image.'
          },
          {
            question: 'What quality setting should I use?',
            answer: 'For web use, 70-85% quality is ideal. For social media, 60-75% works well. For print or professional use, use 90-100%. Lower quality means smaller file size but reduced image quality.'
          },
          {
            question: 'Is my image secure?',
            answer: 'Yes, absolutely! All image processing and compression happens directly in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.'
          }
        ]
      },
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Website Optimization',
            description: 'Reduce image sizes for faster page loading and better SEO performance'
          },
          {
            title: 'Email Attachments',
            description: 'Compress images to fit email size limits and send faster'
          },
          {
            title: 'Social Media',
            description: 'Optimize images for Facebook, Instagram, Twitter, and other platforms'
          }
        ]
      }
    },
    hi: {
      hero: {
        title: 'इमेज कंप्रेसर',
        subtitle: 'एडजस्टेबल क्वालिटी और फॉर्मेट कन्वर्जन के साथ इमेज कंप्रेस करें',
        benefits: [
          { icon: '⚡', text: 'तुरंत कंप्रेशन' },
          { icon: '🔒', text: '100% सुरक्षित' },
          { icon: '📱', text: 'सभी डिवाइस पर काम करता है' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'इमेज अपलोड करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जाती।',
        privacyIcon: '🔒'
      },
      features: {
        title: 'हमारे इमेज कंप्रेसर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंड में कई इमेज कंप्रेस करें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जाती'
          },
          {
            icon: '🎚️',
            title: 'एडजस्टेबल क्वालिटी',
            description: 'क्वालिटी और फाइल साइज़ को बैलेंस करने के लिए 10% से 100% तक कंप्रेशन लेवल कंट्रोल करें'
          },
          {
            icon: '🔄',
            title: 'फॉर्मेट कन्वर्जन',
            description: 'कंप्रेस करते समय JPG, PNG, और WEBP फॉर्मेट के बीच कन्वर्ट करें'
          },
          {
            icon: '📊',
            title: 'साइज़ तुलना',
            description: 'प्रतिशत कमी के साथ ओरिजिनल बनाम कंप्रेस्ड साइज़ देखें'
          },
          {
            icon: '📱',
            title: 'हर जगह काम करता है',
            description: 'किसी भी डिवाइस पर उपयोग करें - डेस्कटॉप, टैबलेट, या मोबाइल। कोई इंस्टॉलेशन की जरूरत नहीं'
          }
        ]
      },
      howTo: {
        title: 'इमेज कैसे कंप्रेस करें',
        steps: [
          {
            step: 1,
            title: 'इमेज अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और कंप्रेस करने के लिए एक या अधिक इमेज चुनें'
          },
          {
            step: 2,
            title: 'क्वालिटी एडजस्ट करें',
            description: 'कंप्रेशन लेवल सेट करने के लिए क्वालिटी स्लाइडर का उपयोग करें (10-100%)'
          },
          {
            step: 3,
            title: 'फॉर्मेट चुनें',
            description: 'आउटपुट फॉर्मेट चुनें: JPG, PNG, या WEBP (वैकल्पिक कन्वर्जन)'
          },
          {
            step: 4,
            title: 'डाउनलोड करें',
            description: 'कंप्रेस्ड इमेज को अलग-अलग या एक साथ डाउनलोड करें'
          }
        ]
      },
      seoContent: {
        mainTitle: 'ऑनलाइन इमेज कंप्रेस करने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन इमेज कंप्रेसर आपको क्वालिटी बनाए रखते हुए इमेज फाइल साइज़ कम करने में मदद करता है। एडजस्टेबल क्वालिटी सेटिंग्स के साथ JPG, PNG, और WEBP इमेज कंप्रेस करें। वेबसाइट, ईमेल, सोशल मीडिया, या स्टोरेज के लिए इमेज ऑप्टिमाइज़ करने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप <a href="/tools/resize-image">इमेज रीसाइज़</a> या <a href="/tools/image-format-converter">इमेज फॉर्मेट कन्वर्ट</a> भी कर सकते हैं।',
        sections: [
          {
            title: 'ऑनलाइन इमेज कैसे कंप्रेस करें',
            content: 'हमारे ब्राउज़र-आधारित टूल के साथ ऑनलाइन इमेज कंप्रेस करना सरल और सुरक्षित है। अपनी इमेज अपलोड करें, कंप्रेशन लेवल कंट्रोल करने के लिए क्वालिटी स्लाइडर एडजस्ट करें, वैकल्पिक रूप से एक अलग फॉर्मेट (JPG, PNG, या WEBP) में कन्वर्ट करें, और कंप्रेस्ड इमेज डाउनलोड करें। आप प्रत्येक इमेज के लिए ओरिजिनल साइज़, कंप्रेस्ड साइज़, और प्रतिशत कमी देख सकते हैं।',
            keywords: ['image ko online compress kare', 'image size kam kare', 'image compressor free']
          },
          {
            title: 'इमेज क्यों कंप्रेस करें?',
            content: 'वेब परफॉर्मेंस और स्टोरेज ऑप्टिमाइज़ेशन के लिए इमेज कंप्रेशन आवश्यक है। कंप्रेस्ड इमेज वेबसाइट पर तेज़ लोड होती हैं, यूज़र एक्सपीरियंस और SEO रैंकिंग में सुधार करती हैं। वे कम बैंडविड्थ का उपयोग करती हैं, होस्टिंग कॉस्ट और मोबाइल डेटा उपयोग को कम करती हैं।',
            keywords: ['image kyu compress kare', 'image optimization', 'file size kam kare']
          }
        ]
      },
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं इमेज कैसे कंप्रेस करूं?',
            answer: 'अपनी इमेज अपलोड करें, क्वालिटी स्लाइडर एडजस्ट करें (10-100%), वैकल्पिक रूप से एक अलग आउटपुट फॉर्मेट चुनें, और कंप्रेस्ड इमेज डाउनलोड करें।'
          },
          {
            question: 'क्या मेरी इमेज सुरक्षित है?',
            answer: 'हां, बिल्कुल! सभी इमेज प्रोसेसिंग और कंप्रेशन सीधे आपके ब्राउज़र में होता है।'
          }
        ]
      },
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'वेबसाइट ऑप्टिमाइज़ेशन',
            description: 'तेज़ पेज लोडिंग और बेहतर SEO परफॉर्मेंस के लिए इमेज साइज़ कम करें'
          },
          {
            title: 'ईमेल अटैचमेंट',
            description: 'ईमेल साइज़ लिमिट में फिट करने और तेज़ भेजने के लिए इमेज कंप्रेस करें'
          }
        ]
      }
    }
  },

  // ============================================================================
  // 5. UI TEXT (Required)
  // ============================================================================
  uiText: {
    en: {
      upload: {
        dragText: 'Drag & drop images here',
        orText: 'or',
        buttonText: 'Choose Files',
        browseText: 'or click to browse',
        supportedFormats: 'Supported formats: JPG, PNG, WEBP',
        maxSize: 'Max size: 10MB per file',
        uploading: 'Uploading...',
        filesSelected: 'files selected',
        file: 'file',
        files: 'files',
        clearAll: 'Clear All',
        removeFile: 'Remove file'
      },
      controls: {
        title: 'Compression Options',
        description: 'Adjust quality and format settings',
        qualityLabel: 'Quality',
        qualityDescription: 'Higher quality = larger file size',
        formatLabel: 'Output Format',
        formats: {
          'image/jpeg': 'JPG',
          'image/png': 'PNG',
          'image/webp': 'WEBP'
        },
        compressButton: 'Compress Images'
      },
      preview: {
        title: 'Preview & Download',
        before: 'Before',
        after: 'After',
        originalSize: 'Original',
        compressedSize: 'Compressed',
        reduction: 'Reduction',
        defaultAlt: 'Preview',
        processedAlt: 'Compressed {filename}'
      },
      download: {
        single: 'Download',
        all: 'Download All',
        filePrefix: 'compressed_'
      },
      processing: {
        message: 'Compressing your images...'
      },
      errors: {
        processingFailed: 'Compression failed. Please try again.',
        dismiss: 'Dismiss'
      }
    },
    hi: {
      upload: {
        dragText: 'इमेज यहाँ ड्रैग और ड्रॉप करें',
        orText: 'या',
        buttonText: 'फाइलें चुनें',
        browseText: 'या ब्राउज़ करने के लिए क्लिक करें',
        supportedFormats: 'सपोर्टेड फॉर्मेट: JPG, PNG, WEBP',
        maxSize: 'अधिकतम साइज़: प्रति फाइल 10MB',
        uploading: 'अपलोड हो रहा है...',
        filesSelected: 'फाइलें चुनी गईं',
        file: 'फाइल',
        files: 'फाइलें',
        clearAll: 'सभी हटाएं',
        removeFile: 'फाइल हटाएं'
      },
      controls: {
        title: 'कंप्रेशन विकल्प',
        description: 'क्वालिटी और फॉर्मेट सेटिंग्स एडजस्ट करें',
        qualityLabel: 'क्वालिटी',
        qualityDescription: 'उच्च क्वालिटी = बड़ा फाइल साइज़',
        formatLabel: 'आउटपुट फॉर्मेट',
        formats: {
          'image/jpeg': 'JPG',
          'image/png': 'PNG',
          'image/webp': 'WEBP'
        },
        compressButton: 'इमेज कंप्रेस करें'
      },
      preview: {
        title: 'प्रीव्यू और डाउनलोड',
        before: 'पहले',
        after: 'बाद में',
        originalSize: 'ओरिजिनल',
        compressedSize: 'कंप्रेस्ड',
        reduction: 'कमी',
        defaultAlt: 'प्रीव्यू',
        processedAlt: 'कंप्रेस्ड {filename}'
      },
      download: {
        single: 'डाउनलोड करें',
        all: 'सभी डाउनलोड करें',
        filePrefix: 'compressed_'
      },
      processing: {
        message: 'आपकी इमेज कंप्रेस हो रही हैं...'
      },
      errors: {
        processingFailed: 'कंप्रेशन विफल रहा। कृपया पुनः प्रयास करें।',
        dismiss: 'बंद करें'
      }
    }
  },

  // ============================================================================
  // 6. SETTINGS (Required)
  // ============================================================================
  settings: {
    maxFileSize: 10 * 1024 * 1024,
    supportedFormats: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxFiles: 10,
    defaultQuality: 0.8,
    minQuality: 0.1,
    maxQuality: 1.0,
    qualityStep: 0.05,
    defaultFormat: 'image/jpeg',
    enableBatchProcessing: true,
    enablePreview: true,
    enableDownload: true,
    enableZipDownload: true
  },

  // ============================================================================
  // 7. VALIDATION (Required)
  // ============================================================================
  validation: {
    maxFileSize: 10 * 1024 * 1024,
    allowedFormats: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxFiles: 10,
    minQuality: 0.1,
    maxQuality: 1.0
  },

  // ============================================================================
  // 8. UI CONFIGURATION (Optional but recommended)
  // ============================================================================
  ui: {
    showUploadArea: true,
    showQualitySlider: true,
    showFormatSelector: true,
    showPreview: true,
    showStats: true,
    showDownloadButtons: true,
    theme: 'light',
    layout: 'vertical'
  }
};
