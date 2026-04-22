/**
 * PDF to Image Tool Configuration - Schema v2.0
 *
 * Following the GOLD STANDARD reference implementation
 *
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-19
 */

export const pdfToImageConfig = {
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
  id: 'pdf-to-image',
  name: {
    en: 'PDF to Image',
    hi: 'PDF से इमेज'
  },
  slug: 'pdf-to-image',
  description: {
    en: 'Convert PDF pages to images (PNG or JPG) instantly',
    hi: 'PDF पेज को तुरंत इमेज (PNG या JPG) में बदलें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'PDF to Image Converter Online | Convert PDF to PNG JPG Free 2024',
      description: 'Convert PDF pages to images online. Free PDF to image converter that works in your browser. Export to PNG or JPG. Secure, no file size limits.',
      keywords: {
        primary: [
          'pdf to image converter',
          'convert pdf to png',
          'pdf to jpg online'
        ],
        longTail: [
          'convert pdf to image online free',
          'pdf to png converter without watermark',
          'extract images from pdf online',
          'pdf page to image converter',
          'convert pdf pages to jpg'
        ],
        secondary: [
          'convert pdf to png',
          'pdf to jpg converter',
          'pdf to image online',
          'extract images from pdf',
          'pdf page to image'
        ]
      },
      canonical: 'https://freetools.com/tools/pdf-to-image',
      ogImage: '/images/tools/pdf-to-image-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'PDF to Image Converter',
        description: 'Free online PDF to image converter tool',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'PDF से इमेज कन्वर्टर ऑनलाइन | PDF को PNG JPG में फ्री बदलें 2024',
      description: 'PDF पेज को ऑनलाइन इमेज में बदलें। फ्री PDF से इमेज कन्वर्टर जो आपके ब्राउज़र में काम करता है। PNG या JPG में एक्सपोर्ट करें। सिक्योर, कोई फाइल साइज़ लिमिट नहीं।',
      keywords: {
        primary: [
          'pdf to image converter',
          'pdf ko png me convert kare',
          'pdf to jpg online'
        ],
        longTail: [
          'pdf ko image me kaise badle',
          'pdf se image nikalne ka tarika',
          'pdf to png converter online free',
          'pdf page ko jpg me badle',
          'convert pdf to image without software'
        ],
        secondary: [
          'pdf ko png me convert kare',
          'pdf to jpg converter',
          'pdf ko image me badle',
          'pdf se images nikale',
          'pdf page ko image me badle'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/pdf-to-image',
      ogImage: '/images/tools/pdf-to-image-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'PDF से इमेज कन्वर्टर',
        description: 'फ्री ऑनलाइन PDF से इमेज कन्वर्टर टूल',
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
        title: 'PDF to Image Converter',
        subtitle: 'Convert PDF pages to high-quality images instantly',
        benefits: [
          { icon: '⚡', text: 'Instant conversion' },
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
        title: 'Why Use Our PDF to Image Converter?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Convert PDF pages to images in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your PDF never leaves your device'
          },
          {
            icon: '🖼️',
            title: 'Multiple Formats',
            description: 'Export to PNG for lossless quality or JPG for smaller file sizes'
          },
          {
            icon: '📄',
            title: 'All Pages',
            description: 'Convert all pages at once or select specific pages to export'
          },
          {
            icon: '💾',
            title: 'Batch Download',
            description: 'Download all images as a ZIP file or save them individually'
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
        title: 'How to Convert PDF to Images',
        steps: [
          {
            step: 1,
            title: 'Upload PDF',
            description: 'Click the upload button and select the PDF file you want to convert'
          },
          {
            step: 2,
            title: 'Choose Format',
            description: 'Select PNG for best quality or JPG for smaller file sizes'
          },
          {
            step: 3,
            title: 'Convert Pages',
            description: 'Click "Convert to Images" to process all pages of your PDF'
          },
          {
            step: 4,
            title: 'Download Images',
            description: 'Download images individually or all at once as a ZIP file'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Converting PDF to Images Online',
        intro: 'This free online PDF to image converter helps you extract pages from PDF documents as high-quality images. Convert PDF to PNG or JPG without software installation. Perfect for extracting diagrams, charts, presentations, and documents. All processing happens in your browser for complete privacy. You can also <a href="/tools/image-to-pdf">convert images to PDF</a> or <a href="/tools/rotate-pdf">rotate PDF pages</a> before conversion.',
        sections: [
          {
            title: 'How to Convert PDF to Images Online',
            content: 'Converting PDF to images online is simple and secure with our browser-based tool. Upload your PDF file, choose your preferred format (PNG or JPG), and click convert. Each page of your PDF becomes a separate image file. You can download images individually or all at once as a ZIP file. The entire process happens in your browser, ensuring your PDF never leaves your device.',
            keywords: ['convert pdf to image', 'pdf to png online', 'pdf to jpg converter']
          },
          {
            title: 'Why Convert PDF to Images?',
            content: 'Converting PDF pages to images offers numerous benefits. Images are easier to share on social media and messaging apps, can be embedded in presentations and documents, are compatible with image editing software, and work on all devices without PDF readers. Common use cases include extracting diagrams from technical documents, sharing presentation slides, creating thumbnails, and archiving important pages.',
            keywords: ['why convert pdf', 'pdf to image benefits', 'extract pdf pages']
          },
          {
            title: 'PNG vs JPG: Which Format to Choose?',
            content: 'Choose PNG for lossless quality, perfect for text documents, diagrams, and screenshots. PNG preserves all details and supports transparency. Choose JPG for smaller file sizes, ideal for photos and images with many colors. JPG uses compression to reduce file size but may lose some quality. For most documents and presentations, PNG is recommended.',
            keywords: ['png vs jpg', 'pdf to png', 'pdf to jpg', 'image format']
          },
          {
            title: 'Secure PDF to Image Conversion',
            content: 'Security is paramount when handling sensitive documents. Our PDF to image converter processes everything directly in your browser using JavaScript. Your PDF is never uploaded to any server, eliminating privacy concerns and data breach risks. This client-side processing ensures complete confidentiality for business documents, personal files, and sensitive information.',
            keywords: ['secure pdf converter', 'private conversion', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How many pages can I convert at once?',
            answer: 'You can convert up to 100 pages at once. Each page will be saved as a separate image file that you can download individually or all together as a ZIP file.'
          },
          {
            question: 'What image formats are supported?',
            answer: 'We support PNG and JPG formats. PNG is recommended for documents and text as it provides lossless quality. JPG is better for photos and creates smaller file sizes.'
          },
          {
            question: 'Is my PDF secure?',
            answer: 'Yes, absolutely! All PDF processing and image conversion happens directly in your browser. Your PDF is never uploaded to any server, ensuring complete privacy and security.'
          },
          {
            question: 'Will the image quality be good?',
            answer: 'Yes, images are exported at high resolution (2x scale) to ensure excellent quality. PNG format preserves all details perfectly, while JPG provides good quality with smaller file sizes.'
          },
          {
            question: 'Can I download all images at once?',
            answer: 'Yes! You can download all converted images as a single ZIP file, or download each image individually. The ZIP option is convenient for PDFs with many pages.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'The maximum PDF file size is 50MB. For best performance, we recommend PDFs under 20MB. Very large files may take longer to process.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Our PDF to image converter is completely free and works instantly without any registration.'
          },
          {
            question: 'Can I convert password-protected PDFs?',
            answer: 'Currently, password-protected PDFs need to be unlocked before conversion. You can use our PDF unlock tool first, then convert the pages to images.'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Extract Diagrams & Charts',
            description: 'Extract technical diagrams, flowcharts, and infographics from PDF documents as images'
          },
          {
            title: 'Share Presentation Slides',
            description: 'Convert presentation slides to images for easy sharing on social media or messaging apps'
          },
          {
            title: 'Create Thumbnails',
            description: 'Generate preview images or thumbnails from PDF documents for websites and catalogs'
          },
          {
            title: 'Archive Important Pages',
            description: 'Save specific PDF pages as images for archiving or documentation purposes'
          },
          {
            title: 'Edit in Image Software',
            description: 'Convert PDF pages to images for editing in Photoshop, GIMP, or other image editors'
          },
          {
            title: 'Social Media Posts',
            description: 'Transform PDF content into shareable images for Instagram, Facebook, or Twitter'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'PDF से इमेज कन्वर्टर',
        subtitle: 'PDF पेज को तुरंत हाई-क्वालिटी इमेज में बदलें',
        benefits: [
          { icon: '⚡', text: 'तुरंत कन्वर्जन' },
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
        title: 'हमारे PDF से इमेज कन्वर्टर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंडों में PDF पेज को इमेज में बदलें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF आपके डिवाइस को नहीं छोड़ता'
          },
          {
            icon: '🖼️',
            title: 'कई फॉर्मेट',
            description: 'लॉसलेस क्वालिटी के लिए PNG या छोटी फाइल साइज़ के लिए JPG में एक्सपोर्ट करें'
          },
          {
            icon: '📄',
            title: 'सभी पेज',
            description: 'सभी पेज एक साथ बदलें या एक्सपोर्ट करने के लिए स्पेसिफिक पेज चुनें'
          },
          {
            icon: '💾',
            title: 'बैच डाउनलोड',
            description: 'सभी इमेज को ZIP फाइल के रूप में डाउनलोड करें या उन्हें अलग-अलग सेव करें'
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
        title: 'PDF को इमेज में कैसे बदलें',
        steps: [
          {
            step: 1,
            title: 'PDF अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और PDF फाइल चुनें जिसे आप बदलना चाहते हैं'
          },
          {
            step: 2,
            title: 'फॉर्मेट चुनें',
            description: 'बेस्ट क्वालिटी के लिए PNG या छोटी फाइल साइज़ के लिए JPG चुनें'
          },
          {
            step: 3,
            title: 'पेज बदलें',
            description: 'अपने PDF के सभी पेज प्रोसेस करने के लिए "इमेज में बदलें" पर क्लिक करें'
          },
          {
            step: 4,
            title: 'इमेज डाउनलोड करें',
            description: 'इमेज को अलग-अलग डाउनलोड करें या सभी को एक साथ ZIP फाइल के रूप में डाउनलोड करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'PDF को ऑनलाइन इमेज में बदलने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन PDF से इमेज कन्वर्टर आपको PDF दस्तावेज़ों से पेज को हाई-क्वालिटी इमेज के रूप में एक्सट्रैक्ट करने में मदद करता है। बिना सॉफ्टवेयर इंस्टॉलेशन के PDF को PNG या JPG में बदलें। डायग्राम, चार्ट, प्रेजेंटेशन और दस्तावेज़ एक्सट्रैक्ट करने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। अगर आपको PDF पेज को मैनेज करने की ज़रूरत है, तो हमारे <a href="/tools/rotate-pdf">PDF Rotate</a> और <a href="/tools/delete-pdf-pages">PDF Page Delete</a> टूल्स भी देखें।',
        sections: [
          {
            title: 'PDF को ऑनलाइन इमेज में कैसे बदलें',
            content: 'हमारे ब्राउज़र-बेस्ड टूल के साथ PDF को ऑनलाइन इमेज में बदलना सरल और सुरक्षित है। अपनी PDF फाइल अपलोड करें, अपना पसंदीदा फॉर्मेट (PNG या JPG) चुनें, और कन्वर्ट पर क्लिक करें। आपके PDF का प्रत्येक पेज एक अलग इमेज फाइल बन जाता है। आप इमेज को अलग-अलग डाउनलोड कर सकते हैं या सभी को एक साथ ZIP फाइल के रूप में डाउनलोड कर सकते हैं। पूरी प्रोसेस आपके ब्राउज़र में होती है, यह सुनिश्चित करते हुए कि आपका PDF आपके डिवाइस को कभी नहीं छोड़ता।',
            keywords: ['pdf ko image me badle', 'pdf to png online', 'pdf to jpg converter']
          },
          {
            title: 'PDF को इमेज में क्यों बदलें?',
            content: 'PDF पेज को इमेज में बदलने से कई फायदे मिलते हैं। इमेज को सोशल मीडिया और मैसेजिंग ऐप पर शेयर करना आसान है, प्रेजेंटेशन और दस्तावेज़ों में एम्बेड किया जा सकता है, इमेज एडिटिंग सॉफ्टवेयर के साथ कम्पैटिबल हैं, और बिना PDF रीडर के सभी डिवाइस पर काम करती हैं। सामान्य उपयोग के मामलों में टेक्निकल दस्तावेज़ों से डायग्राम एक्सट्रैक्ट करना, प्रेजेंटेशन स्लाइड शेयर करना, थंबनेल बनाना और महत्वपूर्ण पेज आर्काइव करना शामिल है।',
            keywords: ['pdf kyu badle', 'pdf to image ke fayde', 'pdf pages extract kare']
          },
          {
            title: 'PNG vs JPG: कौन सा फॉर्मेट चुनें?',
            content: 'लॉसलेस क्वालिटी के लिए PNG चुनें, टेक्स्ट दस्तावेज़, डायग्राम और स्क्रीनशॉट के लिए परफेक्ट। PNG सभी डिटेल्स को संरक्षित करता है और ट्रांसपेरेंसी सपोर्ट करता है। छोटी फाइल साइज़ के लिए JPG चुनें, फोटो और कई रंगों वाली इमेज के लिए आइडियल। JPG फाइल साइज़ कम करने के लिए कंप्रेशन का उपयोग करता है लेकिन कुछ क्वालिटी खो सकता है। अधिकांश दस्तावेज़ों और प्रेजेंटेशन के लिए, PNG की सिफारिश की जाती है।',
            keywords: ['png vs jpg', 'pdf to png', 'pdf to jpg', 'image format']
          },
          {
            title: 'सुरक्षित PDF से इमेज कन्वर्जन',
            content: 'संवेदनशील दस्तावेज़ों को हैंडल करते समय सुरक्षा सर्वोपरि है। हमारा PDF से इमेज कन्वर्टर JavaScript का उपयोग करके सीधे आपके ब्राउज़र में सब कुछ प्रोसेस करता है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो प्राइवेसी चिंताओं और डेटा ब्रीच रिस्क को खत्म करता है। यह क्लाइंट-साइड प्रोसेसिंग व्यावसायिक दस्तावेज़, व्यक्तिगत फाइलों और संवेदनशील जानकारी के लिए पूर्ण गोपनीयता सुनिश्चित करती है।',
            keywords: ['secure pdf converter', 'private conversion', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं एक बार में कितने पेज बदल सकता हूं?',
            answer: 'आप एक बार में 100 पेज तक बदल सकते हैं। प्रत्येक पेज को एक अलग इमेज फाइल के रूप में सेव किया जाएगा जिसे आप अलग-अलग या सभी को एक साथ ZIP फाइल के रूप में डाउनलोड कर सकते हैं।'
          },
          {
            question: 'कौन से इमेज फॉर्मेट सपोर्टेड हैं?',
            answer: 'हम PNG और JPG फॉर्मेट सपोर्ट करते हैं। दस्तावेज़ों और टेक्स्ट के लिए PNG की सिफारिश की जाती है क्योंकि यह लॉसलेस क्वालिटी प्रदान करता है। फोटो के लिए JPG बेहतर है और छोटी फाइल साइज़ बनाता है।'
          },
          {
            question: 'क्या मेरा PDF सुरक्षित है?',
            answer: 'हां, बिल्कुल! सभी PDF प्रोसेसिंग और इमेज कन्वर्जन सीधे आपके ब्राउज़र में होती है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करता है।'
          },
          {
            question: 'क्या इमेज की क्वालिटी अच्छी होगी?',
            answer: 'हां, इमेज को उत्कृष्ट क्वालिटी सुनिश्चित करने के लिए हाई रेज़ोल्यूशन (2x स्केल) पर एक्सपोर्ट किया जाता है। PNG फॉर्मेट सभी डिटेल्स को पूरी तरह से संरक्षित करता है, जबकि JPG छोटी फाइल साइज़ के साथ अच्छी क्वालिटी प्रदान करता है।'
          },
          {
            question: 'क्या मैं सभी इमेज एक साथ डाउनलोड कर सकता हूं?',
            answer: 'हां! आप सभी कन्वर्ट की गई इमेज को एक ZIP फाइल के रूप में डाउनलोड कर सकते हैं, या प्रत्येक इमेज को अलग-अलग डाउनलोड कर सकते हैं। कई पेज वाले PDF के लिए ZIP ऑप्शन सुविधाजनक है।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'अधिकतम PDF फाइल साइज़ 50MB है। सर्वोत्तम प्रदर्शन के लिए, हम 20MB से कम PDF की सिफारिश करते हैं। बहुत बड़ी फाइलों को प्रोसेस होने में अधिक समय लग सकता है।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। हमारा PDF से इमेज कन्वर्टर पूरी तरह से फ्री है और बिना किसी रजिस्ट्रेशन के तुरंत काम करता है।'
          },
          {
            question: 'क्या मैं पासवर्ड-प्रोटेक्टेड PDF बदल सकता हूं?',
            answer: 'वर्तमान में, पासवर्ड-प्रोटेक्टेड PDF को कन्वर्जन से पहले अनलॉक करने की ज़रूरत है। आप पहले हमारे PDF अनलॉक टूल का उपयोग कर सकते हैं, फिर पेज को इमेज में बदल सकते हैं।'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'डायग्राम और चार्ट एक्सट्रैक्ट करें',
            description: 'PDF दस्तावेज़ों से टेक्निकल डायग्राम, फ्लोचार्ट और इन्फोग्राफिक्स को इमेज के रूप में एक्सट्रैक्ट करें'
          },
          {
            title: 'प्रेजेंटेशन स्लाइड शेयर करें',
            description: 'सोशल मीडिया या मैसेजिंग ऐप पर आसानी से शेयर करने के लिए प्रेजेंटेशन स्लाइड को इमेज में बदलें'
          },
          {
            title: 'थंबनेल बनाएं',
            description: 'वेबसाइट और कैटलॉग के लिए PDF दस्तावेज़ों से प्रीव्यू इमेज या थंबनेल जेनरेट करें'
          },
          {
            title: 'महत्वपूर्ण पेज आर्काइव करें',
            description: 'आर्काइविंग या डॉक्यूमेंटेशन उद्देश्यों के लिए स्पेसिफिक PDF पेज को इमेज के रूप में सेव करें'
          },
          {
            title: 'इमेज सॉफ्टवेयर में एडिट करें',
            description: 'Photoshop, GIMP या अन्य इमेज एडिटर में एडिट करने के लिए PDF पेज को इमेज में बदलें'
          },
          {
            title: 'सोशल मीडिया पोस्ट',
            description: 'Instagram, Facebook या Twitter के लिए PDF कंटेंट को शेयर करने योग्य इमेज में बदलें'
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

      // Format Selection
      formatLabel: 'Output Format',
      formatPNG: 'PNG (Best Quality)',
      formatJPG: 'JPG (Smaller Size)',

      // Actions
      convertButton: 'Convert to Images',
      converting: 'Converting...',
      downloadButton: 'Download Image',
      downloadAllButton: 'Download All as ZIP',

      // Status Messages
      selectFile: 'Please select a PDF file to convert',
      convertSuccess: 'PDF converted to images successfully!',
      convertError: 'Failed to convert PDF. Please try again.',

      // Errors
      invalidFileType: 'Invalid file type. Please select a PDF file.',
      fileTooLarge: 'File is too large. Maximum size is 50MB.',
      tooManyPages: 'Too many pages. Maximum 100 pages can be converted.',
      convertFailure: 'Failed to convert PDF to images. Please check your file and try again.',

      // Info
      processingInfo: 'Converting PDF pages to images...',
      securityNote: 'All processing happens in your browser. Your PDF is never uploaded.',
      pageInfo: 'pages converted',

      // Drag and Drop
      dropZoneActive: 'Drop PDF here',
      dropZoneInactive: 'Drag and drop PDF here, or click to select'
    },
    hi: {
      // File Upload
      uploadButton: 'PDF चुनें',
      uploadHint: 'PDF फाइल चुनने के लिए क्लिक करें या ड्रैग और ड्रॉप करें',

      // Format Selection
      formatLabel: 'आउटपुट फॉर्मेट',
      formatPNG: 'PNG (बेस्ट क्वालिटी)',
      formatJPG: 'JPG (छोटा साइज़)',

      // Actions
      convertButton: 'इमेज में बदलें',
      converting: 'बदला जा रहा है...',
      downloadButton: 'इमेज डाउनलोड करें',
      downloadAllButton: 'सभी को ZIP के रूप में डाउनलोड करें',

      // Status Messages
      selectFile: 'कृपया बदलने के लिए एक PDF फाइल चुनें',
      convertSuccess: 'PDF सफलतापूर्वक इमेज में बदल गया!',
      convertError: 'PDF बदलने में विफल। कृपया पुनः प्रयास करें।',

      // Errors
      invalidFileType: 'अमान्य फाइल प्रकार। कृपया एक PDF फाइल चुनें।',
      fileTooLarge: 'फाइल बहुत बड़ी है। अधिकतम साइज़ 50MB है।',
      tooManyPages: 'बहुत अधिक पेज। अधिकतम 100 पेज बदले जा सकते हैं।',
      convertFailure: 'PDF को इमेज में बदलने में विफल। कृपया अपनी फाइल जांचें और पुनः प्रयास करें।',

      // Info
      processingInfo: 'PDF पेज को इमेज में बदला जा रहा है...',
      securityNote: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF कभी अपलोड नहीं होता।',
      pageInfo: 'पेज बदले गए',

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
    maxPages: 100,
    rules: {
      en: {
        fileType: 'Only PDF files are allowed',
        fileSize: 'File size must be less than 50MB',
        maxPages: 'Maximum 100 pages can be converted at once'
      },
      hi: {
        fileType: 'केवल PDF फाइलों की अनुमति है',
        fileSize: 'फाइल साइज़ 50MB से कम होना चाहिए',
        maxPages: 'एक बार में अधिकतम 100 पेज बदले जा सकते हैं'
      }
    }
  },

  // ============================================================================
  // 7. RELATED TOOLS (Optional but recommended)
  // ============================================================================
  relatedTools: [
    'image-to-pdf',
    'merge-pdf',
    'resize-image',
    'compress-pdf'
  ]
}

export default pdfToImageConfig
