/**
 * Image Format Converter Tool Configuration - Schema v2.0
 *
 * Following the GOLD STANDARD reference implementation
 *
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

export const imageFormatConverterConfig = {
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
  id: 'image-format-converter',
  name: {
    en: 'Image Format Converter',
    hi: 'इमेज फॉर्मेट कन्वर्टर'
  },
  slug: 'image-format-converter',
  description: {
    en: 'Convert images between JPG, PNG, and WEBP formats',
    hi: 'JPG, PNG, और WEBP फॉर्मेट के बीच इमेज कन्वर्ट करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Image Format Converter Online | Convert JPG PNG WEBP Free 2024',
      description: 'Convert images between JPG, PNG, and WEBP formats online. Free image format converter that works in your browser. Fast, secure, no file size limits.',
      keywords: {
        primary: [
          'image format converter',
          'convert jpg to png',
          'convert png to jpg'
        ],
        longTail: [
          'convert jpg to png online free',
          'convert png to webp online',
          'convert webp to jpg free',
          'image format conversion tool',
          'change image format online'
        ],
        secondary: [
          'jpg to png converter',
          'png to webp converter',
          'webp to jpg converter',
          'image converter online',
          'photo format changer'
        ]
      },
      canonical: 'https://freetools.com/tools/image-format-converter',
      ogImage: '/images/tools/image-format-converter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Image Format Converter',
        description: 'Free online image format conversion tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'इमेज फॉर्मेट कन्वर्टर ऑनलाइन | JPG PNG WEBP फ्री बदलें 2024',
      description: 'JPG, PNG, और WEBP फॉर्मेट के बीच इमेज को ऑनलाइन कन्वर्ट करें। फ्री इमेज फॉर्मेट कन्वर्टर जो आपके ब्राउज़र में काम करता है। तेज़, सुरक्षित, कोई फाइल साइज़ लिमिट नहीं।',
      keywords: {
        primary: [
          'image format converter',
          'jpg ko png me convert kare',
          'png ko jpg me convert kare'
        ],
        longTail: [
          'jpg ko png me online free convert kare',
          'png ko webp me online convert kare',
          'webp ko jpg me free convert kare',
          'image format conversion tool',
          'image format online badle'
        ],
        secondary: [
          'jpg to png converter',
          'png to webp converter',
          'webp to jpg converter',
          'image converter online',
          'photo format changer'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/image-format-converter',
      ogImage: '/images/tools/image-format-converter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'इमेज फॉर्मेट कन्वर्टर',
        description: 'फ्री ऑनलाइन इमेज फॉर्मेट कन्वर्जन टूल',
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
        title: 'Image Format Converter',
        subtitle: 'Convert images between JPG, PNG, and WEBP formats instantly',
        benefits: [
          { icon: '⚡', text: 'Instant conversion' },
          { icon: '🔒', text: '100% secure' },
          { icon: '📱', text: 'Works on all devices' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Upload Images',
        privacyNotice: 'All processing happens in your browser. Your files never leave your device.',
        privacyIcon: '🔒'
      },
      features: {
        title: 'Why Use Our Image Format Converter?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Convert multiple images in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your images never leave your device'
          },
          {
            icon: '🔄',
            title: 'Multiple Formats',
            description: 'Convert between JPG, PNG, and WEBP formats with ease'
          },
          {
            icon: '📐',
            title: 'Preserve Dimensions',
            description: 'Original image dimensions and quality are maintained during conversion'
          },
          {
            icon: '📊',
            title: 'Size Comparison',
            description: 'See original vs converted file size for each image'
          },
          {
            icon: '📱',
            title: 'Works Everywhere',
            description: 'Use on any device - desktop, tablet, or mobile. No installation needed'
          }
        ]
      },
      howTo: {
        title: 'How to Convert Image Format',
        steps: [
          {
            step: 1,
            title: 'Upload Images',
            description: 'Click the upload button and select one or more images to convert'
          },
          {
            step: 2,
            title: 'Choose Format',
            description: 'Select the output format: JPG, PNG, or WEBP'
          },
          {
            step: 3,
            title: 'Convert',
            description: 'Click the convert button to process your images'
          },
          {
            step: 4,
            title: 'Download',
            description: 'Download converted images individually or all at once'
          }
        ]
      },
      seoContent: {
        mainTitle: 'Complete Guide to Converting Image Formats Online',
        intro: 'This free online image format converter helps you convert images between JPG, PNG, and WEBP formats. Perfect for web optimization, compatibility requirements, or reducing file sizes. All processing happens in your browser for complete privacy. You can also <a href="/tools/image-compressor">compress images</a> or <a href="/tools/resize-image">resize them</a> for more optimization.',
        sections: [
          {
            title: 'How to Convert Image Formats Online',
            content: 'Converting image formats online is simple and secure with our browser-based tool. Upload your images, select the desired output format (JPG, PNG, or WEBP), click convert, and download the converted images. The entire process happens in your browser, ensuring your images never leave your device.',
            keywords: ['convert image format', 'jpg to png', 'png to webp']
          },
          {
            title: 'Understanding Image Formats',
            content: 'JPG (JPEG) is best for photographs with many colors and gradients. It uses lossy compression for smaller file sizes. PNG is ideal for graphics, logos, and images requiring transparency. It uses lossless compression. WEBP is a modern format offering superior compression for both photos and graphics, with support for transparency and animation.',
            keywords: ['jpg format', 'png format', 'webp format']
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I convert image formats?',
            answer: 'Upload your images, select the output format (JPG, PNG, or WEBP), click convert, and download the converted images. The process takes just seconds.'
          },
          {
            question: 'Which format should I use?',
            answer: 'Use JPG for photos, PNG for graphics with transparency, and WEBP for modern web applications requiring smaller file sizes with high quality.'
          },
          {
            question: 'Is my image secure?',
            answer: 'Yes, absolutely! All image processing and conversion happens directly in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.'
          }
        ]
      },
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Web Optimization',
            description: 'Convert images to WEBP for faster loading and better performance'
          },
          {
            title: 'Compatibility',
            description: 'Convert to JPG or PNG for broader device and software support'
          },
          {
            title: 'Transparency Needs',
            description: 'Convert to PNG when you need transparent backgrounds'
          }
        ]
      }
    },
    hi: {
      hero: {
        title: 'इमेज फॉर्मेट कन्वर्टर',
        subtitle: 'JPG, PNG, और WEBP फॉर्मेट के बीच इमेज को तुरंत कन्वर्ट करें',
        benefits: [
          { icon: '⚡', text: 'तुरंत कन्वर्जन' },
          { icon: '🔒', text: '100% सुरक्षित' },
          { icon: '📱', text: 'सभी डिवाइस पर काम करता है' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'इमेज अपलोड करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें कभी आपके डिवाइस से बाहर नहीं जाती।',
        privacyIcon: '🔒'
      },
      features: {
        title: 'हमारे इमेज फॉर्मेट कन्वर्टर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंड में कई इमेज कन्वर्ट करें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जाती'
          },
          {
            icon: '🔄',
            title: 'कई फॉर्मेट',
            description: 'JPG, PNG, और WEBP फॉर्मेट के बीच आसानी से कन्वर्ट करें'
          },
          {
            icon: '📐',
            title: 'डाइमेंशन संरक्षित',
            description: 'कन्वर्जन के दौरान ओरिजिनल इमेज डाइमेंशन और क्वालिटी बनाए रखी जाती है'
          },
          {
            icon: '📊',
            title: 'साइज़ तुलना',
            description: 'प्रत्येक इमेज के लिए ओरिजिनल बनाम कन्वर्टेड फाइल साइज़ देखें'
          },
          {
            icon: '📱',
            title: 'हर जगह काम करता है',
            description: 'किसी भी डिवाइस पर उपयोग करें - डेस्कटॉप, टैबलेट, या मोबाइल। कोई इंस्टॉलेशन की जरूरत नहीं'
          }
        ]
      },
      howTo: {
        title: 'इमेज फॉर्मेट कैसे कन्वर्ट करें',
        steps: [
          {
            step: 1,
            title: 'इमेज अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और कन्वर्ट करने के लिए एक या अधिक इमेज चुनें'
          },
          {
            step: 2,
            title: 'फॉर्मेट चुनें',
            description: 'आउटपुट फॉर्मेट चुनें: JPG, PNG, या WEBP'
          },
          {
            step: 3,
            title: 'कन्वर्ट करें',
            description: 'अपनी इमेज को प्रोसेस करने के लिए कन्वर्ट बटन पर क्लिक करें'
          },
          {
            step: 4,
            title: 'डाउनलोड करें',
            description: 'कन्वर्टेड इमेज को अलग-अलग या एक साथ डाउनलोड करें'
          }
        ]
      },
      seoContent: {
        mainTitle: 'ऑनलाइन इमेज फॉर्मेट कन्वर्ट करने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन इमेज फॉर्मेट कन्वर्टर आपको JPG, PNG, और WEBP फॉर्मेट के बीच इमेज कन्वर्ट करने में मदद करता है। वेब ऑप्टिमाइज़ेशन, कम्पैटिबिलिटी रिक्वायरमेंट, या फाइल साइज़ कम करने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप अधिक ऑप्टिमाइज़ेशन के लिए <a href="/tools/image-compressor">इमेज कंप्रेस</a> या <a href="/tools/resize-image">उन्हें रीसाइज़</a> भी कर सकते हैं।',
        sections: [
          {
            title: 'ऑनलाइन इमेज फॉर्मेट कैसे कन्वर्ट करें',
            content: 'हमारे ब्राउज़र-आधारित टूल के साथ ऑनलाइन इमेज फॉर्मेट कन्वर्ट करना सरल और सुरक्षित है। अपनी इमेज अपलोड करें, वांछित आउटपुट फॉर्मेट (JPG, PNG, या WEBP) चुनें, कन्वर्ट पर क्लिक करें, और कन्वर्टेड इमेज डाउनलोड करें। पूरी प्रोसेस आपके ब्राउज़र में होती है, यह सुनिश्चित करते हुए कि आपकी इमेज कभी भी आपके डिवाइस को नहीं छोड़तीं।',
            keywords: ['image format convert kare', 'jpg to png', 'png to webp']
          },
          {
            title: 'इमेज फॉर्मेट को समझना',
            content: 'JPG (JPEG) कई रंगों और ग्रेडिएंट वाली फोटोग्राफ के लिए बेस्ट है। यह छोटी फाइल साइज़ के लिए लॉसी कंप्रेशन का उपयोग करता है। PNG ग्राफिक्स, लोगो, और ट्रांसपेरेंसी की आवश्यकता वाली इमेज के लिए आइडियल है। यह लॉसलेस कंप्रेशन का उपयोग करता है। WEBP एक मॉडर्न फॉर्मेट है जो फोटो और ग्राफिक्स दोनों के लिए सुपीरियर कंप्रेशन प्रदान करता है, ट्रांसपेरेंसी और एनिमेशन के सपोर्ट के साथ।',
            keywords: ['jpg format', 'png format', 'webp format']
          }
        ]
      },
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं इमेज फॉर्मेट कैसे कन्वर्ट करूं?',
            answer: 'अपनी इमेज अपलोड करें, आउटपुट फॉर्मेट चुनें (JPG, PNG, या WEBP), कन्वर्ट पर क्लिक करें, और कन्वर्टेड इमेज डाउनलोड करें।'
          },
          {
            question: 'क्या मेरी इमेज सुरक्षित है?',
            answer: 'हां, बिल्कुल! सभी इमेज प्रोसेसिंग और कन्वर्जन सीधे आपके ब्राउज़र में होता है।'
          }
        ]
      },
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'वेब ऑप्टिमाइज़ेशन',
            description: 'तेज़ लोडिंग और बेहतर परफॉर्मेंस के लिए इमेज को WEBP में कन्वर्ट करें'
          },
          {
            title: 'कम्पैटिबिलिटी',
            description: 'व्यापक डिवाइस और सॉफ्टवेयर सपोर्ट के लिए JPG या PNG में कन्वर्ट करें'
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
        title: 'Conversion Options',
        description: 'Choose the output format for your images',
        formatLabel: 'Output Format',
        formats: {
          'image/jpeg': 'JPG',
          'image/png': 'PNG',
          'image/webp': 'WEBP'
        },
        quality: {
          label: 'Quality',
          description: 'Higher quality = larger file size'
        },
        convertButton: 'Convert Images'
      },
      preview: {
        title: 'Preview & Download',
        before: 'Before',
        after: 'After',
        defaultAlt: 'Preview',
        processedAlt: 'Converted {filename}'
      },
      download: {
        single: 'Download',
        all: 'Download All',
        filePrefix: 'converted_'
      },
      processing: {
        message: 'Converting your images...'
      },
      errors: {
        processingFailed: 'Conversion failed. Please try again.',
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
        title: 'कन्वर्जन विकल्प',
        description: 'अपनी इमेज के लिए आउटपुट फॉर्मेट चुनें',
        formatLabel: 'आउटपुट फॉर्मेट',
        formats: {
          'image/jpeg': 'JPG',
          'image/png': 'PNG',
          'image/webp': 'WEBP'
        },
        quality: {
          label: 'क्वालिटी',
          description: 'उच्च क्वालिटी = बड़ा फाइल साइज़'
        },
        convertButton: 'इमेज कन्वर्ट करें'
      },
      preview: {
        title: 'प्रीव्यू और डाउनलोड',
        before: 'पहले',
        after: 'बाद में',
        defaultAlt: 'प्रीव्यू',
        processedAlt: 'कन्वर्टेड {filename}'
      },
      download: {
        single: 'डाउनलोड करें',
        all: 'सभी डाउनलोड करें',
        filePrefix: 'converted_'
      },
      processing: {
        message: 'आपकी इमेज कन्वर्ट हो रही हैं...'
      },
      errors: {
        processingFailed: 'कन्वर्जन विफल रहा। कृपया पुनः प्रयास करें।',
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
    defaultQuality: 0.92,
    defaultFormat: 'image/png',
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
    maxFiles: 10
  },

  // ============================================================================
  // 8. UI CONFIGURATION (Optional but recommended)
  // ============================================================================
  ui: {
    showUploadArea: true,
    showFormatSelector: true,
    showPreview: true,
    showStats: true,
    showDownloadButtons: true,
    theme: 'light',
    layout: 'vertical'
  }
};
