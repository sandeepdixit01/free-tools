/**
 * Rotate PDF Tool Configuration - Schema v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-19
 */

import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

export const rotatePdfConfig = {
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
  id: 'rotate-pdf',
  name: {
    en: 'Rotate PDF',
    hi: 'PDF रोटेट करें'
  },
  slug: 'rotate-pdf',
  description: {
    en: 'Rotate PDF pages by 90°, 180°, or 270° instantly',
    hi: 'PDF पेज को 90°, 180°, या 270° तुरंत रोटेट करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Rotate PDF Online | Rotate PDF Pages Free 2024',
      description: 'Rotate PDF pages online for free. Rotate all pages or individual pages by 90°, 180°, or 270°. Free PDF rotator that works in your browser. Secure, no uploads.',
      keywords: {
        primary: [
          'rotate pdf online',
          'rotate pdf pages',
          'pdf rotator free'
        ],
        longTail: [
          'rotate pdf pages online free',
          'rotate pdf 90 degrees online',
          'rotate pdf 180 degrees',
          'rotate all pages in pdf',
          'rotate individual pdf pages'
        ],
        secondary: [
          'pdf page rotation',
          'rotate pdf document',
          'flip pdf pages',
          'turn pdf pages',
          'pdf orientation change'
        ]
      },
      canonical: getToolCanonicalUrl('rotate-pdf', 'en'),
      ogImage: '/images/tools/rotate-pdf-og.jpg'
    },
    hi: {
      title: 'PDF ऑनलाइन रोटेट करें | PDF पेज फ्री रोटेट करें 2024',
      description: 'PDF पेज को फ्री में ऑनलाइन रोटेट करें। सभी पेज या अलग-अलग पेज को 90°, 180°, या 270° रोटेट करें। फ्री PDF रोटेटर जो आपके ब्राउज़र में काम करता है। सिक्योर, कोई अपलोड नहीं।',
      keywords: {
        primary: [
          'pdf online rotate kare',
          'pdf pages rotate kare',
          'pdf rotator free'
        ],
        longTail: [
          'pdf pages ko online free me rotate kare',
          'pdf ko 90 degree rotate kare online',
          'pdf ko 180 degree rotate kare',
          'pdf ke sabhi pages rotate kare',
          'pdf ke alag pages rotate kare'
        ],
        secondary: [
          'pdf page rotation',
          'pdf document rotate kare',
          'pdf pages flip kare',
          'pdf pages turn kare',
          'pdf orientation change kare'
        ]
      },
      canonical: getToolCanonicalUrl('rotate-pdf', 'hi'),
      ogImage: '/images/tools/rotate-pdf-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Rotate PDF',
        subtitle: 'Rotate PDF pages by 90°, 180°, or 270° instantly',
        benefits: [
          { icon: '⚡', text: 'Instant rotation' },
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
        title: 'Why Use Our PDF Rotator?',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Rotate PDF pages in seconds with our optimized processing engine'
          },
          {
            icon: '🔒',
            title: '100% Secure',
            description: 'All processing happens in your browser. Your PDF never leaves your device'
          },
          {
            icon: '🔄',
            title: 'Multiple Angles',
            description: 'Rotate pages by 90°, 180°, or 270° clockwise'
          },
          {
            icon: '📄',
            title: 'All or Individual',
            description: 'Rotate all pages at once or select specific pages to rotate'
          },
          {
            icon: '👁️',
            title: 'Visual Preview',
            description: 'See page thumbnails and rotation angles before downloading'
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
        title: 'How to Rotate PDF Pages',
        steps: [
          {
            step: 1,
            title: 'Upload PDF',
            description: 'Click the upload button and select the PDF file you want to rotate'
          },
          {
            step: 2,
            title: 'Choose Rotation',
            description: 'Select rotation angle: 90°, 180°, or 270° clockwise'
          },
          {
            step: 3,
            title: 'Select Pages',
            description: 'Choose to rotate all pages or select specific pages to rotate'
          },
          {
            step: 4,
            title: 'Download PDF',
            description: 'Download your rotated PDF with corrected page orientations'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Rotating PDF Pages Online',
        intro: 'This free online PDF rotator helps you fix page orientations in PDF documents. Rotate pages by 90°, 180°, or 270° without software installation. Perfect for correcting scanned documents, fixing upside-down pages, or adjusting landscape/portrait orientations. All processing happens in your browser for complete privacy. After rotation, you can <a href="/tools/merge-pdf">merge PDFs</a> or <a href="/tools/pdf-to-image">convert PDF to images</a>.',
        sections: [
          {
            title: 'How to Rotate PDF Pages Online',
            content: 'Rotating PDF pages online is simple and secure with our browser-based tool. Upload your PDF file, select the rotation angle (90°, 180°, or 270°), choose which pages to rotate, and download the corrected PDF. You can rotate all pages at once or select specific pages that need adjustment. The entire process happens in your browser, ensuring your PDF never leaves your device.',
            keywords: ['rotate pdf online', 'rotate pdf pages', 'pdf rotator free']
          },
          {
            title: 'Why Rotate PDF Pages?',
            content: 'PDF page rotation is essential for fixing document orientations. Common scenarios include correcting scanned documents that were fed incorrectly, fixing pages that appear upside-down or sideways, adjusting landscape pages in portrait documents, preparing documents for printing, and improving readability. Our tool makes it easy to fix these issues without expensive PDF editing software.',
            keywords: ['why rotate pdf', 'fix pdf orientation', 'correct pdf pages']
          },
          {
            title: 'Understanding Rotation Angles',
            content: 'Choose 90° clockwise to turn pages right (portrait to landscape right). Choose 180° to flip pages upside-down (useful for fixing inverted scans). Choose 270° clockwise (or 90° counter-clockwise) to turn pages left (portrait to landscape left). All rotations are applied clockwise from the current orientation. You can apply rotations multiple times to achieve the desired result.',
            keywords: ['90 degree rotation', '180 degree rotation', '270 degree rotation']
          },
          {
            title: 'Secure PDF Rotation',
            content: 'Security is paramount when handling sensitive documents. Our PDF rotator processes everything directly in your browser using JavaScript. Your PDF is never uploaded to any server, eliminating privacy concerns and data breach risks. This client-side processing ensures complete confidentiality for business documents, personal files, and sensitive information.',
            keywords: ['secure pdf rotator', 'private rotation', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I rotate PDF pages?',
            answer: 'Upload your PDF, select the rotation angle (90°, 180°, or 270°), choose which pages to rotate (all or specific pages), and download the rotated PDF. The process takes just seconds.'
          },
          {
            question: 'Can I rotate individual pages?',
            answer: 'Yes! You can rotate all pages at once or select specific pages to rotate. This is useful when only some pages need orientation correction.'
          },
          {
            question: 'What rotation angles are supported?',
            answer: 'You can rotate pages by 90° (quarter turn right), 180° (upside-down), or 270° (quarter turn left). All rotations are clockwise from the current orientation.'
          },
          {
            question: 'Is my PDF secure?',
            answer: 'Yes, absolutely! All PDF processing and rotation happens directly in your browser. Your PDF is never uploaded to any server, ensuring complete privacy and security.'
          },
          {
            question: 'Will rotation affect PDF quality?',
            answer: 'No, rotation is a lossless operation. The PDF content remains unchanged - only the page orientation is modified. Text, images, and formatting are preserved perfectly.'
          },
          {
            question: 'Can I rotate password-protected PDFs?',
            answer: 'Currently, password-protected PDFs need to be unlocked before rotation. You can use a PDF unlock tool first, then rotate the pages.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'The maximum PDF file size is 50MB. For best performance, we recommend PDFs under 20MB. Very large files may take longer to process.'
          },
          {
            question: 'Do I need to create an account?',
            answer: 'No account or signup is required. Our PDF rotator is completely free and works instantly without any registration.'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'Common Use Cases',
        items: [
          {
            title: 'Fix Scanned Documents',
            description: 'Correct orientation of pages that were scanned upside-down or sideways'
          },
          {
            title: 'Adjust Landscape Pages',
            description: 'Rotate landscape pages in portrait documents for consistent viewing'
          },
          {
            title: 'Prepare for Printing',
            description: 'Ensure all pages have correct orientation before printing documents'
          },
          {
            title: 'Fix Mobile Photos',
            description: 'Correct orientation of photos converted to PDF from mobile devices'
          },
          {
            title: 'Improve Readability',
            description: 'Rotate pages to make documents easier to read on screen or in print'
          },
          {
            title: 'Correct Batch Scans',
            description: 'Fix orientation issues in multi-page scanned documents'
          }
        ]
      }
    },
    hi: {
      // Hero Section
      hero: {
        title: 'PDF रोटेट करें',
        subtitle: 'PDF पेज को 90°, 180°, या 270° तुरंत रोटेट करें',
        benefits: [
          { icon: '⚡', text: 'तुरंत रोटेशन' },
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
        title: 'हमारे PDF रोटेटर का उपयोग क्यों करें?',
        items: [
          {
            icon: '⚡',
            title: 'बिजली की तेज़ी',
            description: 'हमारे ऑप्टिमाइज़्ड प्रोसेसिंग इंजन के साथ सेकंडों में PDF पेज रोटेट करें'
          },
          {
            icon: '🔒',
            title: '100% सुरक्षित',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF आपके डिवाइस को नहीं छोड़ता'
          },
          {
            icon: '🔄',
            title: 'कई एंगल',
            description: 'पेज को 90°, 180°, या 270° क्लॉकवाइज़ रोटेट करें'
          },
          {
            icon: '📄',
            title: 'सभी या अलग-अलग',
            description: 'सभी पेज एक साथ रोटेट करें या स्पेसिफिक पेज चुनें'
          },
          {
            icon: '👁️',
            title: 'विज़ुअल प्रीव्यू',
            description: 'डाउनलोड करने से पहले पेज थंबनेल और रोटेशन एंगल देखें'
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
        title: 'PDF पेज कैसे रोटेट करें',
        steps: [
          {
            step: 1,
            title: 'PDF अपलोड करें',
            description: 'अपलोड बटन पर क्लिक करें और PDF फाइल चुनें जिसे आप रोटेट करना चाहते हैं'
          },
          {
            step: 2,
            title: 'रोटेशन चुनें',
            description: 'रोटेशन एंगल चुनें: 90°, 180°, या 270° क्लॉकवाइज़'
          },
          {
            step: 3,
            title: 'पेज चुनें',
            description: 'सभी पेज रोटेट करने या स्पेसिफिक पेज चुनने का विकल्प चुनें'
          },
          {
            step: 4,
            title: 'PDF डाउनलोड करें',
            description: 'सही पेज ओरिएंटेशन के साथ अपना रोटेटेड PDF डाउनलोड करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'PDF पेज को ऑनलाइन रोटेट करने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन PDF रोटेटर आपको PDF दस्तावेज़ों में पेज ओरिएंटेशन ठीक करने में मदद करता है। बिना सॉफ्टवेयर इंस्टॉलेशन के पेज को 90°, 180°, या 270° रोटेट करें। स्कैन किए गए दस्तावेज़ों को ठीक करने, उल्टे पेज ठीक करने, या लैंडस्केप/पोर्ट्रेट ओरिएंटेशन एडजस्ट करने के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। अधिक PDF टूल्स के लिए, हमारे <a href="/tools/merge-pdf">PDF Merge</a> और <a href="/tools/split-pdf">PDF Split</a> टूल्स भी देखें।',
        sections: [
          {
            title: 'PDF पेज को ऑनलाइन कैसे रोटेट करें',
            content: 'हमारे ब्राउज़र-बेस्ड टूल के साथ PDF पेज को ऑनलाइन रोटेट करना सरल और सुरक्षित है। अपनी PDF फाइल अपलोड करें, रोटेशन एंगल चुनें (90°, 180°, या 270°), कौन से पेज रोटेट करने हैं चुनें, और सही किया गया PDF डाउनलोड करें। आप सभी पेज एक साथ रोटेट कर सकते हैं या स्पेसिफिक पेज चुन सकते हैं जिन्हें एडजस्टमेंट की ज़रूरत है। पूरी प्रोसेस आपके ब्राउज़र में होती है, यह सुनिश्चित करते हुए कि आपका PDF आपके डिवाइस को कभी नहीं छोड़ता।',
            keywords: ['pdf online rotate kare', 'pdf pages rotate kare', 'pdf rotator free']
          },
          {
            title: 'PDF पेज क्यों रोटेट करें?',
            content: 'दस्तावेज़ ओरिएंटेशन ठीक करने के लिए PDF पेज रोटेशन ज़रूरी है। सामान्य परिदृश्यों में स्कैन किए गए दस्तावेज़ों को ठीक करना शामिल है जो गलत तरीके से फीड किए गए थे, उल्टे या साइडवेज़ दिखाई देने वाले पेज ठीक करना, पोर्ट्रेट दस्तावेज़ों में लैंडस्केप पेज एडजस्ट करना, प्रिंटिंग के लिए दस्तावेज़ तैयार करना, और रीडेबिलिटी सुधारना। हमारा टूल महंगे PDF एडिटिंग सॉफ्टवेयर के बिना इन समस्याओं को ठीक करना आसान बनाता है।',
            keywords: ['pdf kyu rotate kare', 'pdf orientation fix kare', 'pdf pages correct kare']
          },
          {
            title: 'रोटेशन एंगल समझना',
            content: 'पेज को दाईं ओर घुमाने के लिए 90° क्लॉकवाइज़ चुनें (पोर्ट्रेट से लैंडस्केप राइट)। पेज को उल्टा करने के लिए 180° चुनें (उल्टे स्कैन ठीक करने के लिए उपयोगी)। पेज को बाईं ओर घुमाने के लिए 270° क्लॉकवाइज़ (या 90° काउंटर-क्लॉकवाइज़) चुनें (पोर्ट्रेट से लैंडस्केप लेफ्ट)। सभी रोटेशन वर्तमान ओरिएंटेशन से क्लॉकवाइज़ लागू होते हैं। आप वांछित परिणाम प्राप्त करने के लिए कई बार रोटेशन लागू कर सकते हैं।',
            keywords: ['90 degree rotation', '180 degree rotation', '270 degree rotation']
          },
          {
            title: 'सुरक्षित PDF रोटेशन',
            content: 'संवेदनशील दस्तावेज़ों को हैंडल करते समय सुरक्षा सर्वोपरि है। हमारा PDF रोटेटर JavaScript का उपयोग करके सीधे आपके ब्राउज़र में सब कुछ प्रोसेस करता है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो प्राइवेसी चिंताओं और डेटा ब्रीच रिस्क को खत्म करता है। यह क्लाइंट-साइड प्रोसेसिंग व्यावसायिक दस्तावेज़, व्यक्तिगत फाइलों और संवेदनशील जानकारी के लिए पूर्ण गोपनीयता सुनिश्चित करती है।',
            keywords: ['secure pdf rotator', 'private rotation', 'browser-based tool']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'मैं PDF पेज कैसे रोटेट करूं?',
            answer: 'अपना PDF अपलोड करें, रोटेशन एंगल चुनें (90°, 180°, या 270°), कौन से पेज रोटेट करने हैं चुनें (सभी या स्पेसिफिक पेज), और रोटेटेड PDF डाउनलोड करें। प्रोसेस में बस कुछ सेकंड लगते हैं।'
          },
          {
            question: 'क्या मैं अलग-अलग पेज रोटेट कर सकता हूं?',
            answer: 'हां! आप सभी पेज एक साथ रोटेट कर सकते हैं या स्पेसिफिक पेज चुन सकते हैं। यह तब उपयोगी है जब केवल कुछ पेज को ओरिएंटेशन करेक्शन की ज़रूरत होती है।'
          },
          {
            question: 'कौन से रोटेशन एंगल सपोर्टेड हैं?',
            answer: 'आप पेज को 90° (क्वार्टर टर्न राइट), 180° (उल्टा), या 270° (क्वार्टर टर्न लेफ्ट) रोटेट कर सकते हैं। सभी रोटेशन वर्तमान ओरिएंटेशन से क्लॉकवाइज़ हैं।'
          },
          {
            question: 'क्या मेरा PDF सुरक्षित है?',
            answer: 'हां, बिल्कुल! सभी PDF प्रोसेसिंग और रोटेशन सीधे आपके ब्राउज़र में होती है। आपका PDF कभी भी किसी सर्वर पर अपलोड नहीं होता, जो पूर्ण गोपनीयता और सुरक्षा सुनिश्चित करता है।'
          },
          {
            question: 'क्या रोटेशन PDF क्वालिटी को प्रभावित करेगा?',
            answer: 'नहीं, रोटेशन एक लॉसलेस ऑपरेशन है। PDF कंटेंट अपरिवर्तित रहता है - केवल पेज ओरिएंटेशन संशोधित होता है। टेक्स्ट, इमेज और फॉर्मेटिंग पूरी तरह से संरक्षित रहते हैं।'
          },
          {
            question: 'क्या मैं पासवर्ड-प्रोटेक्टेड PDF रोटेट कर सकता हूं?',
            answer: 'वर्तमान में, पासवर्ड-प्रोटेक्टेड PDF को रोटेशन से पहले अनलॉक करने की ज़रूरत है। आप पहले PDF अनलॉक टूल का उपयोग कर सकते हैं, फिर पेज रोटेट कर सकते हैं।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'अधिकतम PDF फाइल साइज़ 50MB है। सर्वोत्तम प्रदर्शन के लिए, हम 20MB से कम PDF की सिफारिश करते हैं। बहुत बड़ी फाइलों को प्रोसेस होने में अधिक समय लग सकता है।'
          },
          {
            question: 'क्या मुझे अकाउंट बनाने की ज़रूरत है?',
            answer: 'किसी अकाउंट या साइनअप की ज़रूरत नहीं है। हमारा PDF रोटेटर पूरी तरह से फ्री है और बिना किसी रजिस्ट्रेशन के तुरंत काम करता है।'
          }
        ]
      },

      // Use Cases Section
      useCases: {
        title: 'सामान्य उपयोग के मामले',
        items: [
          {
            title: 'स्कैन किए गए दस्तावेज़ ठीक करें',
            description: 'उल्टे या साइडवेज़ स्कैन किए गए पेज की ओरिएंटेशन ठीक करें'
          },
          {
            title: 'लैंडस्केप पेज एडजस्ट करें',
            description: 'कंसिस्टेंट व्यूइंग के लिए पोर्ट्रेट दस्तावेज़ों में लैंडस्केप पेज रोटेट करें'
          },
          {
            title: 'प्रिंटिंग के लिए तैयार करें',
            description: 'दस्तावेज़ प्रिंट करने से पहले सभी पेज की सही ओरिएंटेशन सुनिश्चित करें'
          },
          {
            title: 'मोबाइल फोटो ठीक करें',
            description: 'मोबाइल डिवाइस से PDF में कन्वर्ट की गई फोटो की ओरिएंटेशन ठीक करें'
          },
          {
            title: 'रीडेबिलिटी सुधारें',
            description: 'स्क्रीन या प्रिंट में दस्तावेज़ को पढ़ना आसान बनाने के लिए पेज रोटेट करें'
          },
          {
            title: 'बैच स्कैन ठीक करें',
            description: 'मल्टी-पेज स्कैन किए गए दस्तावेज़ों में ओरिएंटेशन समस्याएं ठीक करें'
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
      
      // Rotation Selection
      rotationLabel: 'Rotation Angle',
      rotate90: 'Rotate 90° →',
      rotate180: 'Rotate 180° ↓',
      rotate270: 'Rotate 270° ←',
      
      // Mode Selection
      modeLabel: 'Apply To',
      modeAll: 'All Pages',
      modeIndividual: 'Individual Pages',
      
      // Actions
      rotateButton: 'Rotate PDF',
      rotating: 'Rotating...',
      downloadButton: 'Download PDF',
      
      // Status Messages
      selectFile: 'Please select a PDF file to rotate',
      rotateSuccess: 'PDF rotated successfully!',
      rotateError: 'Failed to rotate PDF. Please try again.',
      
      // Errors
      invalidFileType: 'Invalid file type. Please select a PDF file.',
      fileTooLarge: 'File is too large. Maximum size is 50MB.',
      rotateFailure: 'Failed to rotate PDF. Please check your file and try again.',
      
      // Info
      processingInfo: 'Rotating PDF pages...',
      securityNote: 'All processing happens in your browser. Your PDF is never uploaded.',
      pagesInfo: 'pages in PDF',
      rotationApplied: 'Rotation applied',
      
      // Drag and Drop
      dropZoneActive: 'Drop PDF here',
      dropZoneInactive: 'Drag and drop PDF here, or click to select',
      
      // Page Selection
      selectPages: 'Select pages to rotate',
      selectAll: 'Select All',
      deselectAll: 'Deselect All'
    },
    hi: {
      // File Upload
      uploadButton: 'PDF चुनें',
      uploadHint: 'PDF फाइल चुनने के लिए क्लिक करें या ड्रैग और ड्रॉप करें',
      
      // Rotation Selection
      rotationLabel: 'रोटेशन एंगल',
      rotate90: '90° रोटेट करें →',
      rotate180: '180° रोटेट करें ↓',
      rotate270: '270° रोटेट करें ←',
      
      // Mode Selection
      modeLabel: 'लागू करें',
      modeAll: 'सभी पेज',
      modeIndividual: 'अलग-अलग पेज',
      
      // Actions
      rotateButton: 'PDF रोटेट करें',
      rotating: 'रोटेट हो रहा है...',
      downloadButton: 'PDF डाउनलोड करें',
      
      // Status Messages
      selectFile: 'कृपया रोटेट करने के लिए एक PDF फाइल चुनें',
      rotateSuccess: 'PDF सफलतापूर्वक रोटेट हो गया!',
      rotateError: 'PDF रोटेट करने में विफल। कृपया पुनः प्रयास करें।',
      
      // Errors
      invalidFileType: 'अमान्य फाइल प्रकार। कृपया एक PDF फाइल चुनें।',
      fileTooLarge: 'फाइल बहुत बड़ी है। अधिकतम साइज़ 50MB है।',
      rotateFailure: 'PDF रोटेट करने में विफल। कृपया अपनी फाइल जांचें और पुनः प्रयास करें।',
      
      // Info
      processingInfo: 'PDF पेज रोटेट हो रहे हैं...',
      securityNote: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका PDF कभी अपलोड नहीं होता।',
      pagesInfo: 'PDF में पेज',
      rotationApplied: 'रोटेशन लागू किया गया',
      
      // Drag and Drop
      dropZoneActive: 'PDF यहां ड्रॉप करें',
      dropZoneInactive: 'PDF यहां ड्रैग और ड्रॉप करें, या चुनने के लिए क्लिक करें',
      
      // Page Selection
      selectPages: 'रोटेट करने के लिए पेज चुनें',
      selectAll: 'सभी चुनें',
      deselectAll: 'सभी अचयनित करें'
    }
  },

  // ============================================================================
  // 6. VALIDATION RULES (Required)
  // ============================================================================
  validation: {
    fileTypes: ['.pdf'],
    maxFileSize: 52428800, // 50MB in bytes
    maxPages: 1000,
    rotationAngles: [90, 180, 270],
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
    'split-pdf',
    'pdf-to-image',
    'compress-pdf'
  ]
}

export default rotatePdfConfig

