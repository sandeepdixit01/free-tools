/**
 * Image Resizer Tool Configuration
 * Complete configuration with bilingual content (English & Hindi)
 */

import {
  IMAGE_FORMATS,
  MAX_FILE_SIZE,
  RESIZE_PRESETS,
  DEFAULT_QUALITY,
  MIN_QUALITY,
  MAX_QUALITY
} from '../../utils/constants'
import { imageResizerUIText } from './imageResizer.uiText'

const imageResizerConfig = {
  // Tool Metadata
  metadata: {
    en: {
      id: 'image-resizer',
      name: 'Image Resizer',
      slug: 'resize-image',
      category: 'image',
      description: 'Resize and compress images to any size instantly',
      version: '1.0.0',
      author: 'FreeTools',
      lastUpdated: '2024-01-15'
    },
    hi: {
      id: 'image-resizer',
      name: 'इमेज रीसाइज़र',
      slug: 'resize-image',
      category: 'image',
      description: 'किसी भी साइज़ में इमेज को तुरंत रीसाइज़ और कंप्रेस करें',
      version: '1.0.0',
      author: 'FreeTools',
      lastUpdated: '2024-01-15'
    }
  },

  // Tool Settings
  settings: {
    maxFileSize: MAX_FILE_SIZE.IMAGE,
    supportedFormats: IMAGE_FORMATS,
    maxFiles: 10,
    defaultQuality: DEFAULT_QUALITY,
    minQuality: MIN_QUALITY,
    maxQuality: MAX_QUALITY,
    enableBatchProcessing: true,
    enablePreview: true,
    enableDownload: true,
    enableZipDownload: true
  },

  // Processing Options
  processingOptions: {
    resizeModes: ['dimensions', 'filesize', 'preset'],
    defaultMode: 'dimensions',
    defaultDimensions: {
      width: 800,
      height: 600
    },
    maintainAspectRatio: true,
    targetFileSizes: [20, 50, 100, 200, 500],
    qualityRange: {
      min: MIN_QUALITY,
      max: MAX_QUALITY,
      default: DEFAULT_QUALITY,
      step: 5
    }
  },

  // Presets
  presets: RESIZE_PRESETS,

  // Validation Rules
  validation: {
    maxFileSize: MAX_FILE_SIZE.IMAGE,
    minDimensions: { width: 10, height: 10 },
    maxDimensions: { width: 10000, height: 10000 },
    allowedFormats: IMAGE_FORMATS
  },

  // UI Configuration
  ui: {
    showUploadArea: true,
    showResizeOptions: true,
    showPreview: true,
    showStats: true,
    showDownloadButtons: true,
    theme: 'light',
    layout: 'vertical'
  },

  // UI Text (Bilingual)
  uiText: imageResizerUIText,

  // Content Sections (Bilingual)
  content: {
    // Merge uiText into content.ui for backward compatibility
    ui: imageResizerUIText.en,

    // SEO Metadata (for SEOHead component)
    seo: {
      en: {
        title: 'Resize Image Online Free (20KB, 50KB, 100KB)',
        description: 'Resize images online to 20KB, 50KB or 100KB. Free, fast, secure and works on mobile.',
        keywords: {
          primary: 'resize image to 50kb online',
          secondary: [
            'compress image to 50kb',
            'reduce image size online',
            'resize photo to 100kb',
            'image resizer online',
            'compress image without losing quality'
          ]
        },
        canonical: 'https://freetools.com/tools/resize-image'
      },
      hi: {
        title: 'इमेज को 50KB में ऑनलाइन रीसाइज़ करें | इमेज कंप्रेस करें 2024',
        description: 'इमेज को 50KB, 20KB या 100KB में ऑनलाइन रीसाइज़ करें। बिना क्वालिटी लॉस के इमेज कंप्रेस करें। फ्री, सिक्योर और ब्राउज़र में काम करता है।',
        keywords: {
          primary: 'image ko 50kb me online resize kare',
          secondary: [
            'image ko 50kb me compress kare',
            'photo size online kam kare',
            'image ko 100kb me resize kare',
            'online image resizer',
            'bina quality khrab kiye image compress'
          ]
        },
        canonical: 'https://freetools.com/tools/resize-image'
      }
    },

    // Hero Section
    hero: {
      en: {
        title: 'Resize Image to Any Size Instantly (20KB, 50KB, 100KB)',
        subtitle: 'Free online image resizer & compressor. No signup. No quality loss.',
        benefits: [
          { icon: '⚡', text: 'Instant processing' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ],
        privacyNotice: 'Images are processed in your browser. Not uploaded to any server.'
      },
      hi: {
        title: 'इमेज को किसी भी साइज़ में तुरंत रीसाइज़ करें (20KB, 50KB, 100KB)',
        subtitle: 'फ्री ऑनलाइन इमेज रीसाइज़र और कंप्रेसर। कोई साइनअप नहीं। क्वालिटी लॉस नहीं।',
        benefits: [
          { icon: '⚡', text: 'तुरंत प्रोसेसिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        privacyNotice: 'इमेज आपके ब्राउज़र में प्रोसेस होती हैं। किसी सर्वर पर अपलोड नहीं होतीं।'
      }
    },

    // Features Section
    features: {
      en: {
        title: 'Why Use Our Image Resizer?',
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
      hi: {
        title: 'हमारा इमेज रीसाइज़र क्यों इस्तेमाल करें?',
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
      }
    },

    // Ad Slots Configuration
    adSlots: {
      en: {
        top: {
          type: 'banner',
          height: '90px',
          placeholderContent: 'Advertisement Space'
        },
        afterResult: {
          type: 'native',
          toolIcon: '🖼️',
          toolName: 'Image Compressor',
          toolDescription: 'Compress images up to 90% smaller',
          toolFeatures: ['⚡ Fast', '🔒 Secure', '🆓 Free'],
          toolCTA: 'Try Now →',
          toolLink: '/tools/compress-image'
        },
        midContent: {
          type: 'banner',
          height: '90px',
          placeholderContent: 'Advertisement Space'
        },
        bottom: {
          type: 'native',
          toolIcon: '✂️',
          toolName: 'Image Cropper',
          toolDescription: 'Crop images to any size or aspect ratio',
          toolFeatures: ['⚡ Instant', '🎯 Precise', '🆓 Free'],
          toolCTA: 'Open Tool →',
          toolLink: '/tools/crop-image'
        }
      },
      hi: {
        top: {
          type: 'banner',
          height: '90px',
          placeholderContent: 'विज्ञापन स्थान'
        },
        afterResult: {
          type: 'native',
          toolIcon: '🖼️',
          toolName: 'इमेज कंप्रेसर',
          toolDescription: 'इमेज को 90% तक छोटा करें',
          toolFeatures: ['⚡ तेज़', '🔒 सुरक्षित', '🆓 फ्री'],
          toolCTA: 'अभी आज़माएं →',
          toolLink: '/tools/compress-image'
        },
        midContent: {
          type: 'banner',
          height: '90px',
          placeholderContent: 'विज्ञापन स्थान'
        },
        bottom: {
          type: 'native',
          toolIcon: '✂️',
          toolName: 'इमेज क्रॉपर',
          toolDescription: 'किसी भी साइज़ या आस्पेक्ट रेशियो में इमेज क्रॉप करें',
          toolFeatures: ['⚡ तुरंत', '🎯 सटीक', '🆓 फ्री'],
          toolCTA: 'टूल खोलें →',
          toolLink: '/tools/crop-image'
        }
      }
    },

    // How To Section
    howTo: {
      en: {
        title: 'How to Use This Tool',
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
            title: 'For Best Quality',
            description: 'Keep quality between 85-95% for optimal balance'
          },
          {
            title: 'For Exact File Sizes',
            description: 'Use "By File Size" mode and enter target KB (20, 50, 100, etc.)'
          },
          {
            title: 'For Social Media',
            description: 'Use presets like WhatsApp (1280×720) or Instagram (1080×1080)'
          },
          {
            title: 'For Batch Processing',
            description: 'Upload multiple images and apply same settings to all'
          }
        ]
      },
      hi: {
        title: 'इस टूल का उपयोग कैसे करें',
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
            title: 'बेस्ट क्वालिटी के लिए',
            description: 'ऑप्टिमल बैलेंस के लिए quality को 85-95% के बीच रखें'
          },
          {
            title: 'एक्ज़ैक्ट फाइल साइज़ के लिए',
            description: '"By File Size" मोड इस्तेमाल करें और टारगेट KB एंटर करें (20, 50, 100, आदि)'
          },
          {
            title: 'सोशल मीडिया के लिए',
            description: 'WhatsApp (1280×720) या Instagram (1080×1080) जैसे presets इस्तेमाल करें'
          },
          {
            title: 'बैच प्रोसेसिंग के लिए',
            description: 'मल्टीपल इमेज अपलोड करें और सभी पर same settings अप्लाई करें'
          }
        ]
      }
    },

    // SEO Content Section (different from SEO metadata above)
    seoContent: {
      en: {
        mainTitle: 'How to Resize Images Online',
        intro: 'This free online tool helps you resize images to exact file sizes like 20KB, 50KB, or 100KB without noticeable quality loss. Perfect for forms, applications, WhatsApp, email uploads, and website optimization. All processing happens in your browser - your images never leave your device, ensuring complete privacy and security.',

        sections: [
          {
            title: 'Resize Image to 50KB',
            content: 'Need to compress your image to exactly 50KB? Our free online tool automatically adjusts quality and dimensions to meet your target file size. Perfect for government forms, job applications, profile pictures, and document uploads where 50KB is the maximum allowed size.',
            link: '/resize-image-to-50kb',
            anchor: 'resize-50kb',
            keywords: 'resize image to 50KB, compress to 50KB, reduce image size 50KB'
          },
          {
            title: 'Resize Image to 20KB',
            content: 'Reduce image size to 20KB without losing essential quality. Ideal for email attachments, mobile apps, and bandwidth-limited scenarios. Our smart compression algorithm preserves image clarity while achieving ultra-small file sizes for faster loading.',
            link: '/resize-image-to-20kb',
            anchor: 'resize-20kb',
            keywords: 'resize image to 20KB, compress to 20KB, ultra compress image'
          },
          {
            title: 'Resize Image to 100KB',
            content: 'Compress images to 100KB for websites, social media, and email. This size offers the perfect balance between quality and file size. Great for blog posts, product images, and general web use where you need good quality with reasonable file size.',
            link: '/resize-image-to-100kb',
            anchor: 'resize-100kb',
            keywords: 'resize image to 100KB, compress to 100KB, image optimizer'
          },
          {
            title: 'Compress Image for WhatsApp',
            content: 'Optimize images for WhatsApp sharing with our preset option. Automatically resizes to 1280×720 and compresses to under 100KB for fast sending without quality loss. Perfect for sharing photos with friends and family on WhatsApp.',
            link: '/tools/resize-image',
            anchor: 'whatsapp',
            keywords: 'compress image for WhatsApp, WhatsApp image size, optimize for WhatsApp'
          },
          {
            title: 'Reduce Image Size Without Quality Loss',
            content: 'Our advanced compression technology uses smart algorithms to reduce file size while maintaining visual quality. Adjust the quality slider (85-95% recommended) or use auto-optimize for best results. Supports JPG, PNG, and WEBP formats.',
            link: '/tools/resize-image',
            anchor: 'quality',
            keywords: 'reduce image size, compress without quality loss, image quality'
          },
          {
            title: 'Compress Image Online Free',
            content: 'Free online image compressor with no limits. Compress JPG, PNG, and WEBP images up to 90% smaller. No registration, no watermarks, completely free forever. Process images directly in your browser for maximum privacy and speed.',
            link: '/compress-image-online',
            anchor: 'compress-online',
            keywords: 'compress image online, free image compressor, online image optimizer'
          }
        ],

        detailedContent: {
          whyUseTitle: 'Why Use Our Image Resizer Tool?',
          whyUseText: 'Our image resizer tool stands out with its ability to compress images to exact file sizes. Whether you need to resize an image to 50KB for a government form, 20KB for an email, or 100KB for your website, our tool delivers precise results every time. The advanced compression algorithm maintains image quality while reducing file size by up to 90%.',

          keyFeatures: [
            'Exact File Size Control: Resize images to specific KB sizes (20KB, 50KB, 100KB, 200KB, etc.)',
            'Multiple Resize Modes: By dimensions, by file size, or use smart presets',
            'Batch Processing: Compress multiple images at once with same settings',
            'Quality Preservation: Smart algorithms maintain visual quality during compression',
            'Format Support: Works with JPG, PNG, and WEBP image formats',
            'No Upload Required: All processing happens in your browser for privacy',
            'Mobile Optimized: Works perfectly on smartphones and tablets',
            'Completely Free: No registration, no limits, no watermarks'
          ],

          useCases: [
            {
              title: 'Government Forms & Applications',
              description: 'Many official forms require images under 50KB or 100KB. Our tool ensures your photos meet these requirements without manual trial and error.'
            },
            {
              title: 'Email Attachments',
              description: 'Reduce image size to 20KB or 50KB for faster email sending and to avoid attachment size limits.'
            },
            {
              title: 'Website Optimization',
              description: 'Compress images to 100KB or 200KB for faster page loading and better SEO performance.'
            },
            {
              title: 'Social Media',
              description: 'Optimize images for WhatsApp, Facebook, Instagram with our preset options.'
            }
          ]
        }
      },
      hi: {
        mainTitle: 'ऑनलाइन इमेज कैसे रीसाइज़ करें',
        intro: 'यह फ्री ऑनलाइन टूल आपको बिना क्वालिटी लॉस के इमेज को एक्ज़ैक्ट फाइल साइज़ जैसे 20KB, 50KB या 100KB में रीसाइज़ करने में मदद करता है। फॉर्म, एप्लीकेशन, WhatsApp, ईमेल अपलोड और वेबसाइट ऑप्टिमाइज़ेशन के लिए परफेक्ट। सभी प्रोसेसिंग आपके ब्राउज़र में होती है - आपकी इमेज आपके डिवाइस से बाहर नहीं जातीं, पूरी प्राइवेसी और सिक्योरिटी सुनिश्चित करती है।',

        sections: [
          {
            title: 'इमेज को 50KB में कैसे करें',
            content: 'अगर आपको फॉर्म भरने के लिए 50KB की फोटो चाहिए तो बस अपनी इमेज अपलोड करें और "By File Size" ऑप्शन सेलेक्ट करके 50 टाइप करें। टूल ऑटोमैटिक इमेज को 50KB में कन्वर्ट कर देगा। यह पासपोर्ट फोटो, आधार कार्ड अपलोड और सरकारी फॉर्म के लिए बेस्ट है।',
            link: '/resize-image-to-50kb',
            anchor: 'resize-50kb',
            keywords: 'image ko 50kb kaise kare, photo size kam kare 50kb, image resize 50kb'
          },
          {
            title: 'इमेज को 20KB में कैसे करें',
            content: 'ईमेल अटैचमेंट के लिए इमेज को 20KB में कन्वर्ट करें। "By File Size" मोड में 20 टाइप करें और टूल ऑटोमैटिक साइज़ एडजस्ट कर देगा। इससे ईमेल जल्दी सेंड होगा और अटैचमेंट लिमिट की प्रॉब्लम नहीं आएगी।',
            link: '/resize-image-to-20kb',
            anchor: 'resize-20kb',
            keywords: 'image ko 20kb me kaise kare, email ke liye image compress'
          },
          {
            title: 'इमेज को 100KB में कैसे करें',
            content: 'वेबसाइट और सोशल मीडिया के लिए इमेज को 100KB में कंप्रेस करें। यह साइज़ क्वालिटी और फाइल साइज़ के बीच परफेक्ट बैलेंस देता है। ब्लॉग पोस्ट, प्रोडक्ट इमेज और जनरल वेब यूज़ के लिए बढ़िया है।',
            link: '/resize-image-to-100kb',
            anchor: 'resize-100kb',
            keywords: 'image ko 100kb me kaise kare, website ke liye image compress'
          },
          {
            title: 'WhatsApp के लिए इमेज छोटा करें',
            content: 'WhatsApp पर फोटो शेयर करने के लिए "Presets" ऑप्शन में जाकर "WhatsApp" सेलेक्ट करें। यह ऑटोमैटिक इमेज को 1280×720 साइज़ में कन्वर्ट कर देगा और 100KB से कम कर देगा। इससे फोटो जल्दी सेंड होगी और क्वालिटी भी अच्छी रहेगी।',
            link: '/tools/resize-image',
            anchor: 'whatsapp',
            keywords: 'whatsapp ke liye image compress, photo resize for whatsapp'
          },
          {
            title: 'बिना क्वालिटी कम किए इमेज साइज़ कम करें',
            content: 'हमारा एडवांस्ड कंप्रेशन टेक्नोलॉजी स्मार्ट अल्गोरिदम इस्तेमाल करती है जो फाइल साइज़ कम करते हुए विज़ुअल क्वालिटी बनाए रखती है। Quality स्लाइडर को 85-95% पर रखें या "Auto-Optimize" बटन क्लिक करें। JPG, PNG और WEBP फॉर्मेट सपोर्ट करता है।',
            link: '/tools/resize-image',
            anchor: 'quality',
            keywords: 'bina quality khrab kiye image size kam kare, photo quality maintain'
          },
          {
            title: 'इमेज ऑनलाइन फ्री कंप्रेस करें',
            content: 'बिल्कुल फ्री ऑनलाइन इमेज कंप्रेसर बिना किसी लिमिट के। JPG, PNG और WEBP इमेज को 90% तक छोटा करें। कोई रजिस्ट्रेशन नहीं, कोई वॉटरमार्क नहीं, हमेशा के लिए फ्री। मैक्सिमम प्राइवेसी और स्पीड के लिए इमेज सीधे आपके ब्राउज़र में प्रोसेस होती हैं।',
            link: '/compress-image-online',
            anchor: 'compress-online',
            keywords: 'image online free compress kare, free image compressor'
          }
        ],

        detailedContent: {
          whyUseTitle: 'हमारा इमेज रीसाइज़र टूल क्यों इस्तेमाल करें?',
          whyUseText: 'हमारा इमेज रीसाइज़र टूल इमेज को सटीक फाइल साइज़ में कंप्रेस करने की क्षमता के साथ खड़ा है। चाहे आपको सरकारी फॉर्म के लिए 50KB, ईमेल के लिए 20KB, या अपनी वेबसाइट के लिए 100KB की इमेज चाहिए, हमारा टूल हर बार सटीक रिज़ल्ट देता है। एडवांस्ड कंप्रेशन अल्गोरिदम इमेज क्वालिटी बनाए रखते हुए फाइल साइज़ को 90% तक कम कर देता है।',

          keyFeatures: [
            'सटीक फाइल साइज़ कंट्रोल: इमेज को स्पेसिफिक KB साइज़ में रीसाइज़ करें (20KB, 50KB, 100KB, 200KB, आदि)',
            'मल्टीपल रीसाइज़ मोड: डाइमेंशन से, फाइल साइज़ से, या स्मार्ट प्रीसेट इस्तेमाल करें',
            'बैच प्रोसेसिंग: एक साथ कई इमेज को same settings के साथ कंप्रेस करें',
            'क्वालिटी प्रिज़र्वेशन: स्मार्ट अल्गोरिदम कंप्रेशन के दौरान विज़ुअल क्वालिटी बनाए रखते हैं',
            'फॉर्मेट सपोर्ट: JPG, PNG और WEBP इमेज फॉर्मेट के साथ काम करता है',
            'अपलोड की ज़रूरत नहीं: प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है',
            'मोबाइल ऑप्टिमाइज़्ड: स्मार्टफोन और टैबलेट पर परफेक्टली काम करता है',
            'पूरी तरह फ्री: कोई रजिस्ट्रेशन नहीं, कोई लिमिट नहीं, कोई वॉटरमार्क नहीं'
          ],

          useCases: [
            {
              title: 'सरकारी फॉर्म और एप्लीकेशन',
              description: 'कई ऑफिशियल फॉर्म में 50KB या 100KB से कम इमेज की ज़रूरत होती है। हमारा टूल सुनिश्चित करता है कि आपकी फोटो बिना मैनुअल ट्रायल और एरर के इन requirements को पूरा करे।'
            },
            {
              title: 'ईमेल अटैचमेंट',
              description: 'तेज़ ईमेल सेंडिंग के लिए और अटैचमेंट साइज़ लिमिट से बचने के लिए इमेज साइज़ को 20KB या 50KB तक कम करें।'
            },
            {
              title: 'वेबसाइट ऑप्टिमाइज़ेशन',
              description: 'तेज़ पेज लोडिंग और बेहतर SEO परफॉर्मेंस के लिए इमेज को 100KB या 200KB तक कंप्रेस करें।'
            },
            {
              title: 'सोशल मीडिया',
              description: 'हमारे प्रीसेट ऑप्शन के साथ WhatsApp, Facebook, Instagram के लिए इमेज ऑप्टिमाइज़ करें।'
            }
          ]
        }
      }
    },

    // FAQ Section
    faq: {
      en: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I reduce image size without losing quality?',
            answer: 'Our tool uses advanced compression algorithms that maintain visual quality while reducing file size. Keep the Quality slider between 85-95% or click "Auto-Optimize" for best results.'
          },
          {
            question: 'How to resize image to exact KB (like 20KB, 50KB, 100KB)?',
            answer: 'Select "By File Size" mode and enter your target size in KB. Our algorithm will automatically adjust image dimensions and compression quality to meet your target.'
          },
          {
            question: 'Is it safe to upload images? Where are they stored?',
            answer: 'Absolutely safe! Your images are processed entirely in your browser using JavaScript. They never leave your device or get uploaded to any server.'
          },
          {
            question: 'Does this work on mobile phones?',
            answer: 'Yes! Our tool is fully mobile-optimized and works on all devices - phones, tablets, and desktops.'
          },
          {
            question: 'What image formats are supported?',
            answer: 'We support JPG, JPEG, PNG, and WEBP formats. You can upload images up to 10MB in size.'
          },
          {
            question: 'Can I resize multiple images at once?',
            answer: 'Yes! You can upload and process up to 10 images simultaneously with the same settings. Download them individually or as a ZIP file.'
          },
          {
            question: 'Will resizing affect image quality?',
            answer: 'Our smart compression maintains excellent visual quality. For best results, use quality settings between 85-95%. The tool automatically balances quality and file size.'
          },
          {
            question: 'Is this tool really free?',
            answer: 'Yes, completely free! No registration, no hidden fees, no watermarks. Use it as many times as you want.'
          }
        ]
      },
      hi: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'बिना क्वालिटी कम किए इमेज साइज़ कैसे कम करें?',
            answer: 'हमारा टूल एडवांस्ड कंप्रेशन अल्गोरिदम इस्तेमाल करता है जो विज़ुअल क्वालिटी बनाए रखते हुए फाइल साइज़ कम करता है। Quality स्लाइडर को 85-95% पर रखें या बेस्ट रिज़ल्ट के लिए "Auto-Optimize" क्लिक करें।'
          },
          {
            question: 'इमेज को एक्ज़ैक्ट KB (जैसे 20KB, 50KB, 100KB) में कैसे रीसाइज़ करें?',
            answer: '"By File Size" मोड सेलेक्ट करें और अपना टारगेट साइज़ KB में एंटर करें। हमारा अल्गोरिदम ऑटोमैटिकली इमेज डाइमेंशन और कंप्रेशन क्वालिटी एडजस्ट करता है।'
          },
          {
            question: 'इमेज अपलोड करना सेफ है? वे कहाँ स्टोर होती हैं?',
            answer: 'बिल्कुल सेफ! आपकी इमेज पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके प्रोसेस होती हैं। वे कभी आपके डिवाइस से बाहर नहीं जातीं या किसी सर्वर पर अपलोड नहीं होतीं।'
          },
          {
            question: 'क्या यह मोबाइल फोन पर काम करता है?',
            answer: 'हाँ! हमारा टूल पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और सभी डिवाइसेज़ पर काम करता है - फोन, टैबलेट और डेस्कटॉप।'
          },
          {
            question: 'कौन से इमेज फॉर्मेट सपोर्ट होते हैं?',
            answer: 'हम JPG, JPEG, PNG और WEBP फॉर्मेट सपोर्ट करते हैं। आप 10MB तक की इमेज अपलोड कर सकते हैं।'
          },
          {
            question: 'क्या मैं एक साथ कई इमेज रीसाइज़ कर सकता हूँ?',
            answer: 'हाँ! आप एक साथ 10 इमेज तक अपलोड और प्रोसेस कर सकते हैं same settings के साथ। उन्हें अलग-अलग या ZIP फाइल के रूप में डाउनलोड करें।'
          },
          {
            question: 'क्या रीसाइज़िंग से इमेज क्वालिटी प्रभावित होगी?',
            answer: 'हमारा स्मार्ट कंप्रेशन बेहतरीन विज़ुअल क्वालिटी बनाए रखता है। बेस्ट रिज़ल्ट के लिए, 85-95% के बीच quality settings इस्तेमाल करें। टूल ऑटोमैटिकली क्वालिटी और फाइल साइज़ को बैलेंस करता है।'
          },
          {
            question: 'क्या यह टूल वाकई फ्री है?',
            answer: 'हाँ, पूरी तरह फ्री! कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं। जितनी बार चाहें इस्तेमाल करें।'
          }
        ]
      }
    },

    // Trust Indicators
    trust: {
      en: {
        title: 'Trusted by Thousands',
        indicators: [
          { icon: '🔒', text: '100% Secure & Private' },
          { icon: '⚡', text: 'Lightning Fast' },
          { icon: '🆓', text: 'Always Free' },
          { icon: '✅', text: 'No Registration Required' }
        ]
      },
      hi: {
        title: 'हज़ारों लोगों द्वारा भरोसेमंद',
        indicators: [
          { icon: '🔒', text: '100% सिक्योर और प्राइवेट' },
          { icon: '⚡', text: 'लाइटनिंग फास्ट' },
          { icon: '🆓', text: 'हमेशा फ्री' },
          { icon: '✅', text: 'रजिस्ट्रेशन की ज़रूरत नहीं' }
        ]
      }
    }
  }
}

export default imageResizerConfig
