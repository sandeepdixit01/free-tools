/**
 * Image Resizer Tool Configuration - NEW SCHEMA v2.0
 *
 * This is the GOLD STANDARD reference implementation of the new unified schema.
 * Use this as a template for migrating other tools.
 *
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-02
 */

import {
  IMAGE_FORMATS,
  MAX_FILE_SIZE,
  RESIZE_PRESETS,
  DEFAULT_QUALITY,
  MIN_QUALITY,
  MAX_QUALITY
} from '../../utils/constants'

export const imageResizerConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-02',
    author: 'FreeTools',
    category: 'image', // Must match predefined categories: image, pdf, text, developer
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'image-resizer',
  name: {
    en: 'Image Resizer',
    hi: 'इमेज रीसाइज़र'
  },
  slug: 'resize-image',
  description: {
    en: 'Resize and compress images to any size instantly',
    hi: 'किसी भी साइज़ में इमेज को तुरंत रीसाइज़ और कंप्रेस करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Resize Image Online Free | Image Resizer Tool 2024',
      description: 'Free online image resizer. Resize images to any size (20KB, 50KB, 100KB) instantly. No signup required. 100% private and secure.',
      keywords: {
        primary: [
          'resize image',
          'image resizer',
          'compress image',
          'reduce image size'
        ],
        secondary: [
          'resize to 50KB',
          'resize to 20KB',
          'resize to 100KB',
          'image compressor online',
          'reduce photo size'
        ],
        longTail: [
          'how to resize image to 50KB',
          'resize image without losing quality',
          'compress image for WhatsApp',
          'reduce image size for email',
          'free online image resizer tool'
        ]
      },
      canonical: 'https://freetools.com/tools/resize-image',
      ogImage: '/images/tools/image-resizer-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Image Resizer',
        description: 'Free online image resizer and compressor',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'इमेज ऑनलाइन फ्री रीसाइज़ करें | इमेज रीसाइज़र टूल 2024',
      description: 'फ्री ऑनलाइन इमेज रीसाइज़र। किसी भी साइज़ (20KB, 50KB, 100KB) में इमेज तुरंत रीसाइज़ करें। साइनअप की ज़रूरत नहीं। 100% प्राइवेट और सिक्योर।',
      keywords: {
        primary: [
          'image resize',
          'image resizer',
          'compress image',
          'image size kam kare'
        ],
        secondary: [
          '50KB me resize',
          '20KB me resize',
          '100KB me resize',
          'image compressor online',
          'photo size kam kare'
        ],
        longTail: [
          'image ko 50KB me kaise kare',
          'bina quality khrab kiye image resize',
          'whatsapp ke liye image compress',
          'email ke liye image size kam kare',
          'free online image resizer tool'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/resize-image',
      ogImage: '/images/tools/image-resizer-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'इमेज रीसाइज़र',
        description: 'फ्री ऑनलाइन इमेज रीसाइज़र और कंप्रेसर',
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
        title: 'Image Resizer',
        subtitle: 'Resize images to any size instantly (20KB, 50KB, 100KB). Free online image resizer & compressor. No signup. No quality loss.',
        benefits: [
          { icon: '⚡', text: 'Instant processing' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: 'Start Resizing',
        privacyNotice: 'Images are processed in your browser. Not uploaded to any server.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our Image Resizer?',
        subtitle: 'Powerful features for perfect image resizing',
        items: [
          {
            icon: '⚡',
            title: 'Instant Processing',
            description: 'Resize images in seconds with our lightning-fast tool'
          },
          {
            icon: '🔒',
            title: '100% Private & Secure',
            description: 'All processing happens in your browser. Images never leave your device'
          },
          {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Works perfectly on smartphones, tablets, and desktops'
          },
          {
            icon: '🎯',
            title: 'Precise Control',
            description: 'Resize to exact dimensions or target file sizes (20KB, 50KB, 100KB)'
          },
          {
            icon: '📦',
            title: 'Batch Processing',
            description: 'Resize multiple images at once with same settings'
          },
          {
            icon: '🎨',
            title: 'Quality Preservation',
            description: 'Smart compression maintains visual quality while reducing size'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use This Tool',
        subtitle: 'Simple steps to resize your images',
        steps: [
          {
            number: 1,
            title: 'Upload Your Image',
            description: 'Click "Choose Files" or drag and drop your image. Supports JPG, PNG, and WEBP formats up to 10MB.',
            icon: '📤'
          },
          {
            number: 2,
            title: 'Choose Resize Method',
            description: 'Select from three options: By Dimensions (set width/height), By File Size (target KB), or use Smart Presets (WhatsApp, Instagram, etc.).',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'Adjust Quality Settings',
            description: 'Use the quality slider (85-95% recommended) or click "Auto-Optimize" for best balance between size and quality.',
            icon: '🎨'
          },
          {
            number: 4,
            title: 'Preview & Download',
            description: 'Preview the resized image with before/after comparison. Download individually or as ZIP for multiple images.',
            icon: '⬇️'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'For Best Quality',
            description: 'Keep quality between 85-95% for optimal balance'
          },
          {
            icon: '🎯',
            title: 'For Exact File Sizes',
            description: 'Use "By File Size" mode and enter target KB (20, 50, 100, etc.)'
          },
          {
            icon: '📱',
            title: 'For Social Media',
            description: 'Use presets like WhatsApp (1280×720) or Instagram (1080×1080)'
          },
          {
            icon: '📦',
            title: 'For Batch Processing',
            description: 'Upload multiple images and apply same settings to all'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Resizing Images Online',
        intro: 'This free online tool helps you resize images to exact file sizes like 20KB, 50KB, or 100KB without noticeable quality loss. Perfect for forms, applications, WhatsApp, email uploads, and website optimization. All processing happens in your browser - your images never leave your device, ensuring complete privacy and security. You can also <a href="/tools/image-compressor">compress images</a> or <a href="/tools/image-format-converter">convert image formats</a> for more options.',
        sections: [
          {
            title: 'Resize Image to 50KB',
            content: 'Need to compress your image to exactly 50KB? Our free online tool automatically adjusts quality and dimensions to meet your target file size. Perfect for government forms, job applications, profile pictures, and document uploads where 50KB is the maximum allowed size.',
            keywords: ['resize image to 50KB', 'compress to 50KB', 'reduce image size 50KB']
          },
          {
            title: 'Resize Image to 20KB',
            content: 'Reduce image size to 20KB without losing essential quality. Ideal for email attachments, mobile apps, and bandwidth-limited scenarios. Our smart compression algorithm preserves image clarity while achieving ultra-small file sizes for faster loading.',
            keywords: ['resize image to 20KB', 'compress to 20KB', 'ultra compress image']
          },
          {
            title: 'Resize Image to 100KB',
            content: 'Compress images to 100KB for websites, social media, and email. This size offers the perfect balance between quality and file size. Great for blog posts, product images, and general web use where you need good quality with reasonable file size.',
            keywords: ['resize image to 100KB', 'compress to 100KB', 'image optimizer']
          },
          {
            title: 'Compress Image for WhatsApp',
            content: 'Optimize images for WhatsApp sharing with our preset option. Automatically resizes to 1280×720 and compresses to under 100KB for fast sending without quality loss. Perfect for sharing photos with friends and family on WhatsApp.',
            keywords: ['compress image for WhatsApp', 'WhatsApp image size', 'optimize for WhatsApp']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I reduce image size without losing quality?',
            answer: 'Our tool uses advanced compression algorithms that maintain visual quality while reducing file size. Keep the Quality slider between 85-95% or click "Auto-Optimize" for best results.',
            category: 'quality'
          },
          {
            question: 'How to resize image to exact KB (like 20KB, 50KB, 100KB)?',
            answer: 'Select "By File Size" mode and enter your target size in KB. Our algorithm will automatically adjust image dimensions and compression quality to meet your target.',
            category: 'usage'
          },
          {
            question: 'Is it safe to upload images? Where are they stored?',
            answer: 'Absolutely safe! Your images are processed entirely in your browser using JavaScript. They never leave your device or get uploaded to any server.',
            category: 'privacy'
          },
          {
            question: 'Does this work on mobile phones?',
            answer: 'Yes! Our tool is fully mobile-optimized and works on all devices - phones, tablets, and desktops.',
            category: 'compatibility'
          },
          {
            question: 'What image formats are supported?',
            answer: 'We support JPG, JPEG, PNG, and WEBP formats. You can upload images up to 10MB in size.',
            category: 'formats'
          },
          {
            question: 'Can I resize multiple images at once?',
            answer: 'Yes! You can upload and process up to 10 images simultaneously with the same settings. Download them individually or as a ZIP file.',
            category: 'batch'
          },
          {
            question: 'Will resizing affect image quality?',
            answer: 'Our smart compression maintains excellent visual quality. For best results, use quality settings between 85-95%. The tool automatically balances quality and file size.',
            category: 'quality'
          },
          {
            question: 'Is this tool really free?',
            answer: 'Yes, completely free! No registration, no hidden fees, no watermarks. Use it as many times as you want.',
            category: 'pricing'
          }
        ]
      }
    },

    hi: {
      // Hero Section
      hero: {
        title: 'इमेज को किसी भी साइज़ में तुरंत रीसाइज़ करें (20KB, 50KB, 100KB)',
        subtitle: 'फ्री ऑनलाइन इमेज रीसाइज़र और कंप्रेसर। कोई साइनअप नहीं। क्वालिटी लॉस नहीं।',
        benefits: [
          { icon: '⚡', text: 'तुरंत प्रोसेसिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: 'रीसाइज़ शुरू करें',
        privacyNotice: 'इमेज आपके ब्राउज़र में प्रोसेस होती हैं। किसी सर्वर पर अपलोड नहीं होतीं।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा इमेज रीसाइज़र क्यों इस्तेमाल करें?',
        subtitle: 'परफेक्ट इमेज रीसाइज़िंग के लिए शक्तिशाली फीचर्स',
        items: [
          {
            icon: '⚡',
            title: 'तुरंत प्रोसेसिंग',
            description: 'हमारे लाइटनिंग-फास्ट टूल से सेकंड में इमेज रीसाइज़ करें'
          },
          {
            icon: '🔒',
            title: '100% प्राइवेट और सिक्योर',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। इमेज आपके डिवाइस से बाहर नहीं जातीं'
          },
          {
            icon: '📱',
            title: 'मोबाइल ऑप्टिमाइज़्ड',
            description: 'स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करता है'
          },
          {
            icon: '🎯',
            title: 'सटीक कंट्रोल',
            description: 'एक्ज़ैक्ट डाइमेंशन या टारगेट फाइल साइज़ (20KB, 50KB, 100KB) में रीसाइज़ करें'
          },
          {
            icon: '📦',
            title: 'बैच प्रोसेसिंग',
            description: 'एक साथ कई इमेज को same settings के साथ रीसाइज़ करें'
          },
          {
            icon: '🎨',
            title: 'क्वालिटी प्रिज़र्वेशन',
            description: 'स्मार्ट कंप्रेशन साइज़ कम करते हुए विज़ुअल क्वालिटी बनाए रखता है'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'अपनी इमेज रीसाइज़ करने के सरल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपनी इमेज अपलोड करें',
            description: '"Choose Files" क्लिक करें या अपनी इमेज ड्रैग एंड ड्रॉप करें। 10MB तक की JPG, PNG और WEBP फॉर्मेट सपोर्ट करता है।',
            icon: '📤'
          },
          {
            number: 2,
            title: 'रीसाइज़ मेथड चुनें',
            description: 'तीन ऑप्शन में से चुनें: By Dimensions (width/height सेट करें), By File Size (टारगेट KB), या Smart Presets इस्तेमाल करें (WhatsApp, Instagram, आदि)।',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'क्वालिटी सेटिंग एडजस्ट करें',
            description: 'Quality स्लाइडर इस्तेमाल करें (85-95% रेकमेंडेड) या साइज़ और क्वालिटी के बीच बेस्ट बैलेंस के लिए "Auto-Optimize" क्लिक करें।',
            icon: '🎨'
          },
          {
            number: 4,
            title: 'प्रीव्यू और डाउनलोड करें',
            description: 'Before/after कम्पेरिज़न के साथ रीसाइज़्ड इमेज का प्रीव्यू देखें। अलग-अलग या मल्टीपल इमेज के लिए ZIP के रूप में डाउनलोड करें।',
            icon: '⬇️'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'बेस्ट क्वालिटी के लिए',
            description: 'ऑप्टिमल बैलेंस के लिए quality को 85-95% के बीच रखें'
          },
          {
            icon: '🎯',
            title: 'एक्ज़ैक्ट फाइल साइज़ के लिए',
            description: '"By File Size" मोड इस्तेमाल करें और टारगेट KB एंटर करें (20, 50, 100, आदि)'
          },
          {
            icon: '📱',
            title: 'सोशल मीडिया के लिए',
            description: 'WhatsApp (1280×720) या Instagram (1080×1080) जैसे presets इस्तेमाल करें'
          },
          {
            icon: '📦',
            title: 'बैच प्रोसेसिंग के लिए',
            description: 'मल्टीपल इमेज अपलोड करें और सभी पर same settings अप्लाई करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'ऑनलाइन इमेज रीसाइज़ करने की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन टूल आपको बिना क्वालिटी लॉस के इमेज को एक्ज़ैक्ट फाइल साइज़ जैसे 20KB, 50KB या 100KB में रीसाइज़ करने में मदद करता है। फॉर्म, एप्लीकेशन, WhatsApp, ईमेल अपलोड और वेबसाइट ऑप्टिमाइज़ेशन के लिए परफेक्ट। सभी प्रोसेसिंग आपके ब्राउज़र में होती है - आपकी इमेज आपके डिवाइस से बाहर नहीं जातीं, पूरी प्राइवेसी और सिक्योरिटी सुनिश्चित करती है। आप <a href="/tools/image-compressor">इमेज कंप्रेस</a> भी कर सकते हैं या अधिक ऑप्शन के लिए <a href="/tools/image-format-converter">इमेज फॉर्मेट कन्वर्ट</a> कर सकते हैं।',
        sections: [
          {
            title: 'इमेज को 50KB में कैसे करें',
            content: 'अगर आपको फॉर्म भरने के लिए 50KB की फोटो चाहिए तो बस अपनी इमेज अपलोड करें और "By File Size" ऑप्शन सेलेक्ट करके 50 टाइप करें। टूल ऑटोमैटिक इमेज को 50KB में कन्वर्ट कर देगा। यह पासपोर्ट फोटो, आधार कार्ड अपलोड और सरकारी फॉर्म के लिए बेस्ट है।',
            keywords: ['image ko 50kb kaise kare', 'photo size kam kare 50kb', 'image resize 50kb']
          },
          {
            title: 'इमेज को 20KB में कैसे करें',
            content: 'ईमेल अटैचमेंट के लिए इमेज को 20KB में कन्वर्ट करें। "By File Size" मोड में 20 टाइप करें और टूल ऑटोमैटिक साइज़ एडजस्ट कर देगा। इससे ईमेल जल्दी सेंड होगा और अटैचमेंट लिमिट की प्रॉब्लम नहीं आएगी।',
            keywords: ['image ko 20kb me kaise kare', 'email ke liye image compress']
          },
          {
            title: 'इमेज को 100KB में कैसे करें',
            content: 'वेबसाइट और सोशल मीडिया के लिए इमेज को 100KB में कंप्रेस करें। यह साइज़ क्वालिटी और फाइल साइज़ के बीच परफेक्ट बैलेंस देता है। ब्लॉग पोस्ट, प्रोडक्ट इमेज और जनरल वेब यूज़ के लिए बढ़िया है।',
            keywords: ['image ko 100kb me kaise kare', 'website ke liye image compress']
          },
          {
            title: 'WhatsApp के लिए इमेज छोटा करें',
            content: 'WhatsApp पर फोटो शेयर करने के लिए "Presets" ऑप्शन में जाकर "WhatsApp" सेलेक्ट करें। यह ऑटोमैटिक इमेज को 1280×720 साइज़ में कन्वर्ट कर देगा और 100KB से कम कर देगा। इससे फोटो जल्दी सेंड होगी और क्वालिटी भी अच्छी रहेगी।',
            keywords: ['whatsapp ke liye image compress', 'photo resize for whatsapp']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'बिना क्वालिटी कम किए इमेज साइज़ कैसे कम करें?',
            answer: 'हमारा टूल एडवांस्ड कंप्रेशन अल्गोरिदम इस्तेमाल करता है जो विज़ुअल क्वालिटी बनाए रखते हुए फाइल साइज़ कम करता है। Quality स्लाइडर को 85-95% पर रखें या बेस्ट रिज़ल्ट के लिए "Auto-Optimize" क्लिक करें।',
            category: 'quality'
          },
          {
            question: 'इमेज को एक्ज़ैक्ट KB (जैसे 20KB, 50KB, 100KB) में कैसे रीसाइज़ करें?',
            answer: '"By File Size" मोड सेलेक्ट करें और अपना टारगेट साइज़ KB में एंटर करें। हमारा अल्गोरिदम ऑटोमैटिकली इमेज डाइमेंशन और कंप्रेशन क्वालिटी एडजस्ट करता है।',
            category: 'usage'
          },
          {
            question: 'इमेज अपलोड करना सेफ है? वे कहाँ स्टोर होती हैं?',
            answer: 'बिल्कुल सेफ! आपकी इमेज पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके प्रोसेस होती हैं। वे कभी आपके डिवाइस से बाहर नहीं जातीं या किसी सर्वर पर अपलोड नहीं होतीं।',
            category: 'privacy'
          },
          {
            question: 'क्या यह मोबाइल फोन पर काम करता है?',
            answer: 'हाँ! हमारा टूल पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और सभी डिवाइसेज़ पर काम करता है - फोन, टैबलेट और डेस्कटॉप।',
            category: 'compatibility'
          },
          {
            question: 'कौन से इमेज फॉर्मेट सपोर्ट होते हैं?',
            answer: 'हम JPG, JPEG, PNG और WEBP फॉर्मेट सपोर्ट करते हैं। आप 10MB तक की इमेज अपलोड कर सकते हैं।',
            category: 'formats'
          },
          {
            question: 'क्या मैं एक साथ कई इमेज रीसाइज़ कर सकता हूँ?',
            answer: 'हाँ! आप एक साथ 10 इमेज तक अपलोड और प्रोसेस कर सकते हैं same settings के साथ। उन्हें अलग-अलग या ZIP फाइल के रूप में डाउनलोड करें।',
            category: 'batch'
          },
          {
            question: 'क्या रीसाइज़िंग से इमेज क्वालिटी प्रभावित होगी?',
            answer: 'हमारा स्मार्ट कंप्रेशन बेहतरीन विज़ुअल क्वालिटी बनाए रखता है। बेस्ट रिज़ल्ट के लिए, 85-95% के बीच quality settings इस्तेमाल करें। टूल ऑटोमैटिकली क्वालिटी और फाइल साइज़ को बैलेंस करता है।',
            category: 'quality'
          },
          {
            question: 'क्या यह टूल वाकई फ्री है?',
            answer: 'हाँ, पूरी तरह फ्री! कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं। जितनी बार चाहें इस्तेमाल करें।',
            category: 'pricing'
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
      upload: {
        dragText: 'Drag & drop images here',
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
        title: 'Resize Options',
        description: 'Choose how you want to resize your images',
        modes: {
          dimensions: 'By Dimensions',
          filesize: 'By File Size',
          preset: 'Presets'
        },
        dimensions: {
          width: 'Width (px)',
          height: 'Height (px)',
          maintainAspectRatio: 'Maintain aspect ratio'
        },
        filesize: {
          targetSize: 'Target Size (KB)',
          quickSelect: 'Quick select',
          quickSizes: [20, 50, 100, 200, 500]
        },
        presets: {
          items: [
            { name: 'Passport Photo', width: 600, height: 600, size: 50 },
            { name: 'WhatsApp', width: 1280, height: 720, size: 100 },
            { name: 'Email Attachment', width: 800, height: 600, size: 100 },
            { name: 'Website Upload', width: 1200, height: 800, size: 200 }
          ]
        },
        quality: {
          label: 'Quality',
          autoOptimize: 'Auto Optimize'
        }
      },
      preview: {
        title: 'Preview & Download',
        before: 'Before',
        after: 'After',
        defaultAlt: 'Preview',
        processedAlt: 'Processed {filename}'
      },
      download: {
        single: 'Download',
        all: 'Download All',
        filePrefix: 'processed_'
      },
      processing: {
        message: 'Processing your images...'
      },
      errors: {
        processingFailed: 'Processing failed. Please try again.',
        dismiss: 'Dismiss'
      }
    },
    hi: {
      upload: {
        dragText: 'इमेज यहाँ ड्रैग और ड्रॉप करें',
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
        title: 'रीसाइज़ विकल्प',
        description: 'चुनें कि आप अपनी इमेज को कैसे रीसाइज़ करना चाहते हैं',
        modes: {
          dimensions: 'आयाम के अनुसार',
          filesize: 'फाइल साइज़ के अनुसार',
          preset: 'प्रीसेट'
        },
        dimensions: {
          width: 'चौड़ाई (px)',
          height: 'ऊंचाई (px)',
          maintainAspectRatio: 'आस्पेक्ट रेशियो बनाए रखें'
        },
        filesize: {
          targetSize: 'लक्ष्य साइज़ (KB)',
          quickSelect: 'त्वरित चयन',
          quickSizes: [20, 50, 100, 200, 500]
        },
        presets: {
          items: [
            { name: 'पासपोर्ट फोटो', width: 600, height: 600, size: 50 },
            { name: 'WhatsApp', width: 1280, height: 720, size: 100 },
            { name: 'ईमेल अटैचमेंट', width: 800, height: 600, size: 100 },
            { name: 'वेबसाइट अपलोड', width: 1200, height: 800, size: 200 }
          ]
        },
        quality: {
          label: 'क्वालिटी',
          autoOptimize: 'ऑटो ऑप्टिमाइज़'
        }
      },
      preview: {
        title: 'प्रीव्यू और डाउनलोड',
        before: 'पहले',
        after: 'बाद में',
        defaultAlt: 'प्रीव्यू',
        processedAlt: 'प्रोसेस्ड {filename}'
      },
      download: {
        single: 'डाउनलोड करें',
        all: 'सभी डाउनलोड करें',
        filePrefix: 'processed_'
      },
      processing: {
        message: 'आपकी इमेज प्रोसेस हो रही हैं...'
      },
      errors: {
        processingFailed: 'प्रोसेसिंग विफल रही। कृपया पुनः प्रयास करें।',
        dismiss: 'बंद करें'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Required)
  // ============================================================================
  defaultSettings: {
    mode: 'dimensions',
    width: 800,
    height: 600,
    maintainAspectRatio: true,
    quality: DEFAULT_QUALITY,
    targetFileSize: 100,
    format: 'jpeg'
  },

  // ============================================================================
  // 7. VALIDATION (Required)
  // ============================================================================
  validation: {
    maxFileSize: MAX_FILE_SIZE.IMAGE,
    minDimensions: { width: 10, height: 10 },
    maxDimensions: { width: 10000, height: 10000 },
    allowedFormats: IMAGE_FORMATS,
    maxFiles: 10
  },

  // ============================================================================
  // 8. TOOL-SPECIFIC CONFIG (Optional)
  // ============================================================================
  toolConfig: {
    intent: 'resize', // Primary intent: resize, compress, convert
    variants: [
      { label: '20KB', value: 20, unit: 'KB' },
      { label: '50KB', value: 50, unit: 'KB' },
      { label: '100KB', value: 100, unit: 'KB' },
      { label: '200KB', value: 200, unit: 'KB' },
      { label: '500KB', value: 500, unit: 'KB' }
    ],
    useCases: ['forms', 'email', 'whatsapp', 'website'],
    presets: RESIZE_PRESETS,
    qualityRange: {
      min: MIN_QUALITY,
      max: MAX_QUALITY,
      default: DEFAULT_QUALITY,
      step: 5
    }
  },

  // ============================================================================
  // 9. RELATIONSHIPS (Optional)
  // ============================================================================
  relationships: {
    relatedTools: ['image-compressor', 'image-cropper', 'image-converter'],
    alternativeTools: ['bulk-image-resizer', 'photo-editor'],
    workflowTools: ['image-compressor', 'watermark-remover']
  },

  // ============================================================================
  // 10. STATS (Optional - for analytics)
  // ============================================================================
  stats: {
    averageProcessingTime: 2, // seconds
    maxBatchSize: 10,
    supportedInputFormats: IMAGE_FORMATS.length,
    supportedOutputFormats: IMAGE_FORMATS.length
  }
}

export default imageResizerConfig

