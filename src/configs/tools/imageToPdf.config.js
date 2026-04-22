/**
 * Image to PDF Tool Configuration - Schema v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-19
 */

export const imageToPdfConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-19',
    author: 'FreeTools',
    category: 'image',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'image-to-pdf',
  name: {
    en: 'Image to PDF',
    hi: 'इमेज से PDF'
  },
  slug: 'image-to-pdf',
  description: {
    en: 'Convert multiple images to a single PDF document instantly',
    hi: 'कई इमेज को तुरंत एक PDF दस्तावेज़ में बदलें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Image to PDF Converter Online | Convert JPG PNG to PDF Free 2024',
      description: 'Convert multiple images to PDF online. Free image to PDF converter that works in your browser. Supports JPG, PNG, WEBP, GIF. Secure, no file size limits.',
      keywords: {
        primary: [
          'image to pdf converter online',
          'convert jpg to pdf',
          'png to pdf converter'
        ],
        longTail: [
          'image to pdf converter online free',
          'convert multiple images to pdf',
          'jpg png to pdf online',
          'photo to pdf converter free',
          'convert pictures to pdf online'
        ],
        secondary: [
          'convert jpg to pdf',
          'png to pdf converter',
          'images to pdf online',
          'photo to pdf converter',
          'picture to pdf free'
        ]
      },
      canonical: 'https://freetools.com/tools/image-to-pdf',
      ogImage: '/images/tools/image-to-pdf-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Image to PDF Converter',
        description: 'Free online image to PDF converter tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'इमेज से PDF कन्वर्टर ऑनलाइन | JPG PNG को PDF में फ्री बदलें 2024',
      description: 'कई इमेज को ऑनलाइन PDF में बदलें। फ्री इमेज से PDF कन्वर्टर जो आपके ब्राउज़र में काम करता है। JPG, PNG, WEBP, GIF सपोर्ट करता है। सिक्योर, कोई फाइल साइज़ लिमिट नहीं।',
      keywords: {
        primary: [
          'image to pdf converter online',
          'jpg ko pdf me convert kare',
          'png to pdf converter'
        ],
        longTail: [
          'image to pdf converter online free hindi',
          'multiple images ko pdf me convert kare',
          'jpg png ko pdf me online badle',
          'photo to pdf converter free hindi',
          'pictures ko pdf me online convert kare'
        ],
        secondary: [
          'jpg ko pdf me convert kare',
          'png to pdf converter',
          'images ko pdf me badle',
          'photo to pdf converter',
          'picture ko pdf me free badle'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/image-to-pdf',
      ogImage: '/images/tools/image-to-pdf-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'इमेज से PDF कन्वर्टर',
        description: 'फ्री ऑनलाइन इमेज से PDF कन्वर्टर टूल',
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
        title: 'Image to PDF Converter',
        subtitle: 'Convert multiple images to a single PDF document instantly',
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

      // Features Section
      features: {
        title: 'Why Use Our Image to PDF Converter?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Convert multiple images to PDF in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your images never leave your device'
          },
          {
            icon: '🖼️',
            title: 'Multiple Formats',
            description: 'Supports JPG, PNG, WEBP, and GIF image formats'
          },
          {
            icon: '📄',
            title: 'One Image Per Page',
            description: 'Each image is placed on a separate page in the PDF document'
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
        title: 'How to Convert Images to PDF',
        steps: [
          {
            step: 1,
            title: 'Upload Images',
            description: 'Click the upload button and select multiple images you want to convert to PDF'
          },
          {
            step: 2,
            title: 'Arrange Order',
            description: 'Images will appear in the order selected. Rearrange if needed for the final PDF'
          },
          {
            step: 3,
            title: 'Convert to PDF',
            description: 'Click the "Convert to PDF" button to create your PDF document'
          },
          {
            step: 4,
            title: 'Download PDF',
            description: 'Download your PDF file instantly to your device'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Converting Images to PDF Online',
        intro: 'This free online image to PDF converter helps you transform multiple images into a single PDF document instantly. Convert JPG, PNG, WEBP, and GIF images to PDF without software installation. Perfect for creating photo albums, document compilations, presentations, and portfolios. All processing happens in your browser for complete privacy. You can also <a href="/tools/pdf-to-image">convert PDF to images</a> or <a href="/tools/merge-pdf">merge multiple PDFs</a>.',
        sections: [
          {
            title: 'How to Convert Images to PDF Online',
            content: 'Converting images to PDF online is simple and secure with our browser-based tool. Upload multiple image files (JPG, PNG, WEBP, GIF), arrange them in your desired order, and click convert to create a single PDF document. Each image becomes a separate page in the PDF. The entire process happens in your browser, ensuring your images never leave your device.',
            keywords: ['convert images to pdf', 'jpg to pdf online', 'image to pdf converter']
          },
          {
            title: 'Why Convert Images to PDF?',
            content: 'Converting images to PDF offers numerous benefits. PDFs are universally compatible across all devices and platforms, making sharing easier. They maintain image quality while reducing file count, simplify document management, and are ideal for printing. Common use cases include creating photo albums, compiling scanned documents, preparing presentations, building portfolios, and archiving important images.',
            keywords: ['why convert to pdf', 'image to pdf benefits', 'pdf advantages']
          },
          {
            title: 'Secure Image to PDF Conversion',
            content: 'Security is paramount when handling personal photos and documents. Our image to PDF converter processes everything directly in your browser using JavaScript and the pdf-lib library. Your images are never uploaded to any server, eliminating privacy concerns and data breach risks. This client-side processing ensures complete confidentiality for personal photos, business documents, and sensitive images.',
            keywords: ['secure image converter', 'private pdf conversion', 'browser-based tool']
          },
          {
            title: 'Supported Image Formats',
            content: 'Our converter supports all major image formats including JPG/JPEG (most common photo format), PNG (supports transparency), WEBP (modern web format), and GIF (animated images converted to static). Each format is automatically detected and properly embedded in the PDF while maintaining original quality. No need to convert images to a specific format first.',
            keywords: ['jpg to pdf', 'png to pdf', 'webp to pdf', 'supported formats']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How many images can I convert at once?',
            answer: 'You can convert up to 50 images at once. Each image will be placed on a separate page in the resulting PDF document.'
          },
          {
            question: 'What image formats are supported?',
            answer: 'We support JPG/JPEG, PNG, WEBP, and GIF image formats. All formats are automatically detected and properly converted to PDF.'
          },
          {
            question: 'Are my images secure?',
            answer: 'Yes, absolutely! All image processing and PDF creation happens directly in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.'
          },
          {
            question: 'Will the image quality be affected?',
            answer: 'No, the original quality of your images is preserved in the PDF. Images are embedded at their original resolution without compression or quality loss.'
          },
          {
            question: 'Can I rearrange the order of images?',
            answer: 'Yes, you can rearrange the order of your images before converting. The images will appear in the PDF in the order they are listed.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'Each image can be up to 10MB in size. For best performance, we recommend keeping images under 5MB each.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Our image to PDF converter is completely free and works instantly without any registration.'
          },
          {
            question: 'Can I convert a single image to PDF?',
            answer: 'Yes! You can convert as few as one image or as many as 50 images to PDF. The tool works with any number of images within the limit.'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Photo Albums',
            description: 'Create digital photo albums by converting multiple photos into a single PDF document'
          },
          {
            title: 'Scanned Documents',
            description: 'Combine multiple scanned pages or receipts into one organized PDF file'
          },
          {
            title: 'Presentations',
            description: 'Convert presentation slides or infographics into a shareable PDF format'
          },
          {
            title: 'Portfolios',
            description: 'Create professional portfolios by combining artwork, designs, or project images'
          },
          {
            title: 'Reports & Documentation',
            description: 'Compile screenshots, diagrams, and images into comprehensive PDF reports'
          },
          {
            title: 'E-books & Guides',
            description: 'Transform image-based content into PDF e-books or instruction manuals'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'इमेज से PDF कन्वर्टर',
        subtitle: 'कई इमेज को तुरंत एक PDF दस्तावेज़ में बदलें',
        benefits: [
          { icon: '⚡', text: 'तुरंत कन्वर्जन' },
          { icon: '🔒', text: '100% सुरक्षित' },
          { icon: '📱', text: 'सभी डिवाइस पर काम करता है' },
          { icon: '🆓', text: 'पूरी तरह से फ्री' }
        ],
        cta: 'इमेज अपलोड करें',
        privacyNotice: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी फाइलें आपके डिवाइस को नहीं छोड़तीं।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारे इमेज से PDF कन्वर्टर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंडों में कई इमेज को PDF में बदलें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी इमेज आपके डिवाइस को नहीं छोड़तीं'
          },
          {
            icon: '🖼️',
            title: 'कई फॉर्मेट',
            description: 'JPG, PNG, WEBP और GIF इमेज फॉर्मेट सपोर्ट करता है'
          },
          {
            icon: '📄',
            title: 'प्रति पेज एक इमेज',
            description: 'प्रत्येक इमेज PDF दस्तावेज़ में एक अलग पेज पर रखी जाती है'
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
        title: 'इमेज को PDF में कैसे बदलें',
        steps: [
          {
            step: 1,
            title: 'इमेज अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और कई इमेज चुनें जिन्हें आप PDF में बदलना चाहते हैं'
          },
          {
            step: 2,
            title: 'क्रम व्यवस्थित करें',
            description: 'इमेज चुने गए क्रम में दिखाई देंगी। अंतिम PDF के लिए ज़रूरत पड़ने पर पुनर्व्यवस्थित करें'
          },
          {
            step: 3,
            title: 'PDF में बदलें',
            description: 'अपना PDF दस्तावेज़ बनाने के लिए "PDF में बदलें" बटन पर क्लिक करें'
          },
          {
            step: 4,
            title: 'PDF डाउनलोड करें',
            description: 'अपनी PDF फाइल को तुरंत अपने डिवाइस पर डाउनलोड करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'इमेज को ऑनलाइन PDF में बदलने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन इमेज से PDF कन्वर्टर आपको कई इमेज को तुरंत एक PDF दस्तावेज़ में बदलने में मदद करता है। बिना सॉफ्टवेयर इंस्टॉलेशन के JPG, PNG, WEBP और GIF इमेज को PDF में बदलें। फोटो एल्बम, दस्तावेज़ संकलन, प्रेजेंटेशन और पोर्टफोलियो बनाने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप <a href="/tools/pdf-to-image">PDF को इमेज में बदल</a> भी सकते हैं या <a href="/tools/merge-pdf">कई PDF मर्ज</a> कर सकते हैं।',
        sections: [
          {
            title: 'इमेज को ऑनलाइन PDF में कैसे बदलें',
            content: 'हमारे ब्राउज़र-बेस्ड टूल के साथ इमेज को ऑनलाइन PDF में बदलना सरल और सुरक्षित है। कई इमेज फाइलें (JPG, PNG, WEBP, GIF) अपलोड करें, उन्हें अपने वांछित क्रम में व्यवस्थित करें, और एक PDF दस्तावेज़ बनाने के लिए कन्वर्ट पर क्लिक करें। प्रत्येक इमेज PDF में एक अलग पेज बन जाती है। पूरी प्रोसेस आपके ब्राउज़र में होती है, यह सुनिश्चित करते हुए कि आपकी इमेज आपके डिवाइस को कभी नहीं छोड़तीं।',
            keywords: ['images ko pdf me badle', 'jpg to pdf online', 'image to pdf converter']
          },
          {
            title: 'इमेज को PDF में क्यों बदलें?',
            content: 'इमेज को PDF में बदलने से कई फायदे मिलते हैं। PDF सभी डिवाइस और प्लेटफॉर्म पर यूनिवर्सली कम्पैटिबल हैं, जो शेयरिंग को आसान बनाता है। वे फाइल काउंट कम करते हुए इमेज क्वालिटी बनाए रखते हैं, दस्तावेज़ मैनेजमेंट को सरल बनाते हैं, और प्रिंटिंग के लिए आइडियल हैं। सामान्य उपयोग के मामलों में फोटो एल्बम बनाना, स्कैन किए गए दस्तावेज़ कंपाइल करना, प्रेजेंटेशन तैयार करना, पोर्टफोलियो बनाना और महत्वपूर्ण इमेज आर्काइव करना शामिल है।',
            keywords: ['pdf me kyu badle', 'image to pdf ke fayde', 'pdf advantages']
          },
          {
            title: 'सुरक्षित इमेज से PDF कन्वर्जन',
            content: 'व्यक्तिगत फोटो और दस्तावेज़ों को हैंडल करते समय सुरक्षा सर्वोपरि है। हमारा इमेज से PDF कन्वर्टर JavaScript और pdf-lib लाइब्रेरी का उपयोग करके सीधे आपके ब्राउज़र में सब कुछ प्रोसेस करता है। आपकी इमेज कभी भी किसी सर्वर पर अपलोड नहीं होतीं, जो प्राइवेसी चिंताओं और डेटा ब्रीच रिस्क को खत्म करती है। यह क्लाइंट-साइड प्रोसेसिंग व्यक्तिगत फोटो, व्यावसायिक दस्तावेज़ और संवेदनशील इमेज के लिए पूर्ण गोपनीयता सुनिश्चित करती है।',
            keywords: ['secure image converter', 'private pdf conversion', 'browser-based tool']
          },
          {
            title: 'सपोर्टेड इमेज फॉर्मेट',
            content: 'हमारा कन्वर्टर सभी मेजर इमेज फॉर्मेट सपोर्ट करता है जिसमें JPG/JPEG (सबसे आम फोटो फॉर्मेट), PNG (ट्रांसपेरेंसी सपोर्ट करता है), WEBP (मॉडर्न वेब फॉर्मेट), और GIF (एनिमेटेड इमेज स्टैटिक में कन्वर्ट होती हैं) शामिल हैं। प्रत्येक फॉर्मेट को ऑटोमैटिकली डिटेक्ट किया जाता है और मूल क्वालिटी बनाए रखते हुए PDF में प्रॉपर्ली एम्बेड किया जाता है। पहले इमेज को किसी स्पेसिफिक फॉर्मेट में बदलने की ज़रूरत नहीं।',
            keywords: ['jpg to pdf', 'png to pdf', 'webp to pdf', 'supported formats']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं एक बार में कितनी इमेज बदल सकता हूं?',
            answer: 'आप एक बार में 50 इमेज तक बदल सकते हैं। प्रत्येक इमेज को रिज़ल्टिंग PDF दस्तावेज़ में एक अलग पेज पर रखा जाएगा।'
          },
          {
            question: 'कौन से इमेज फॉर्मेट सपोर्टेड हैं?',
            answer: 'हम JPG/JPEG, PNG, WEBP और GIF इमेज फॉर्मेट सपोर्ट करते हैं। सभी फॉर्मेट को ऑटोमैटिकली डिटेक्ट किया जाता है और प्रॉपर्ली PDF में कन्वर्ट किया जाता है।'
          },
          {
            question: 'क्या मेरी इमेज सुरक्षित हैं?',
            answer: 'हां, बिल्कुल! सभी इमेज प्रोसेसिंग और PDF क्रिएशन सीधे आपके ब्राउज़र में होती है। आपकी इमेज कभी भी किसी सर्वर पर अपलोड नहीं होतीं, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करती है।'
          },
          {
            question: 'क्या इमेज की क्वालिटी प्रभावित होगी?',
            answer: 'नहीं, आपकी इमेज की मूल क्वालिटी PDF में संरक्षित रहती है। इमेज को उनके मूल रेज़ोल्यूशन पर बिना कंप्रेशन या क्वालिटी लॉस के एम्बेड किया जाता है।'
          },
          {
            question: 'क्या मैं इमेज का क्रम बदल सकता हूं?',
            answer: 'हां, आप कन्वर्ट करने से पहले अपनी इमेज का क्रम बदल सकते हैं। इमेज PDF में उसी क्रम में दिखाई देंगी जिस क्रम में वे लिस्ट की गई हैं।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'प्रत्येक इमेज 10MB साइज़ तक हो सकती है। सर्वोत्तम प्रदर्शन के लिए, हम प्रत्येक इमेज को 5MB से कम रखने की सिफारिश करते हैं।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। हमारा इमेज से PDF कन्वर्टर पूरी तरह से फ्री है और बिना किसी रजिस्ट्रेशन के तुरंत काम करता है।'
          },
          {
            question: 'क्या मैं एक इमेज को PDF में बदल सकता हूं?',
            answer: 'हां! आप एक इमेज या 50 इमेज तक PDF में बदल सकते हैं। टूल लिमिट के अंदर किसी भी संख्या की इमेज के साथ काम करता है।'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'फोटो एल्बम',
            description: 'कई फोटो को एक PDF दस्तावेज़ में बदलकर डिजिटल फोटो एल्बम बनाएं'
          },
          {
            title: 'स्कैन किए गए दस्तावेज़',
            description: 'कई स्कैन किए गए पेज या रसीदों को एक व्यवस्थित PDF फाइल में मिलाएं'
          },
          {
            title: 'प्रेजेंटेशन',
            description: 'प्रेजेंटेशन स्लाइड या इन्फोग्राफिक्स को शेयर करने योग्य PDF फॉर्मेट में बदलें'
          },
          {
            title: 'पोर्टफोलियो',
            description: 'आर्टवर्क, डिज़ाइन या प्रोजेक्ट इमेज को मिलाकर प्रोफेशनल पोर्टफोलियो बनाएं'
          },
          {
            title: 'रिपोर्ट और डॉक्यूमेंटेशन',
            description: 'स्क्रीनशॉट, डायग्राम और इमेज को व्यापक PDF रिपोर्ट में कंपाइल करें'
          },
          {
            title: 'ई-बुक्स और गाइड',
            description: 'इमेज-बेस्ड कंटेंट को PDF ई-बुक्स या इंस्ट्रक्शन मैनुअल में बदलें'
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
      uploadButton: 'Select Images',
      uploadHint: 'Click to select multiple images or drag and drop',
      uploadMultiple: 'You can select multiple images at once',
      
      // File List
      filesSelected: 'images selected',
      noFilesSelected: 'No images selected yet',
      removeFile: 'Remove',
      clearAll: 'Clear All',
      
      // Actions
      convertButton: 'Convert to PDF',
      converting: 'Converting...',
      downloadButton: 'Download PDF',
      
      // Status Messages
      selectFiles: 'Please select at least 1 image to convert',
      convertSuccess: 'Images converted to PDF successfully!',
      convertError: 'Failed to convert images. Please try again.',
      
      // Errors
      invalidFileType: 'Invalid file type. Please select only image files (JPG, PNG, WEBP, GIF).',
      fileTooLarge: 'File is too large. Maximum size is 10MB per image.',
      convertFailure: 'Failed to convert images to PDF. Please check your files and try again.',
      
      // Info
      processingInfo: 'Converting your images to PDF...',
      securityNote: 'All processing happens in your browser. Your images are never uploaded.',
      
      // Drag and Drop
      dropZoneActive: 'Drop images here',
      dropZoneInactive: 'Drag and drop images here, or click to select'
    },
    hi: {
      // File Upload
      uploadButton: 'इमेज चुनें',
      uploadHint: 'कई इमेज चुनने के लिए क्लिक करें या ड्रैग और ड्रॉप करें',
      uploadMultiple: 'आप एक बार में कई इमेज चुन सकते हैं',
      
      // File List
      filesSelected: 'इमेज चुनी गईं',
      noFilesSelected: 'अभी तक कोई इमेज नहीं चुनी गई',
      removeFile: 'हटाएं',
      clearAll: 'सभी साफ करें',
      
      // Actions
      convertButton: 'PDF में बदलें',
      converting: 'बदला जा रहा है...',
      downloadButton: 'PDF डाउनलोड करें',
      
      // Status Messages
      selectFiles: 'कृपया बदलने के लिए कम से कम 1 इमेज चुनें',
      convertSuccess: 'इमेज सफलतापूर्वक PDF में बदल गईं!',
      convertError: 'इमेज बदलने में विफल। कृपया पुनः प्रयास करें।',
      
      // Errors
      invalidFileType: 'अमान्य फाइल प्रकार। कृपया केवल इमेज फाइलें चुनें (JPG, PNG, WEBP, GIF)।',
      fileTooLarge: 'फाइल बहुत बड़ी है। प्रति इमेज अधिकतम साइज़ 10MB है।',
      convertFailure: 'इमेज को PDF में बदलने में विफल। कृपया अपनी फाइलें जांचें और पुनः प्रयास करें।',
      
      // Info
      processingInfo: 'आपकी इमेज को PDF में बदला जा रहा है...',
      securityNote: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपकी इमेज कभी अपलोड नहीं होतीं।',
      
      // Drag and Drop
      dropZoneActive: 'इमेज यहां ड्रॉप करें',
      dropZoneInactive: 'इमेज यहां ड्रैग और ड्रॉप करें, या चुनने के लिए क्लिक करें'
    }
  },

  // ============================================================================
  // 6. VALIDATION RULES (Required)
  // ============================================================================
  validation: {
    fileTypes: ['.jpg', '.jpeg', '.png', '.webp', '.gif'],
    maxFileSize: 10485760, // 10MB in bytes
    minFiles: 1,
    maxFiles: 50,
    rules: {
      en: {
        fileType: 'Only image files are allowed (JPG, PNG, WEBP, GIF)',
        fileSize: 'File size must be less than 10MB',
        minFiles: 'At least 1 image is required',
        maxFiles: 'Maximum 50 images can be converted at once'
      },
      hi: {
        fileType: 'केवल इमेज फाइलों की अनुमति है (JPG, PNG, WEBP, GIF)',
        fileSize: 'फाइल साइज़ 10MB से कम होना चाहिए',
        minFiles: 'कम से कम 1 इमेज आवश्यक है',
        maxFiles: 'एक बार में अधिकतम 50 इमेज बदली जा सकती हैं'
      }
    }
  },

  // ============================================================================
  // 7. RELATED TOOLS (Optional but recommended)
  // ============================================================================
  relatedTools: [
    'merge-pdf',
    'resize-image',
    'compress-pdf',
    'pdf-to-image'
  ]
}

export default imageToPdfConfig

