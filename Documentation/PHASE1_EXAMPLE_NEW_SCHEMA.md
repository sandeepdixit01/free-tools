# Phase 1: Complete Example - Image Resizer with New Schema

## 📄 File: `src/configs/tools/imageResizer.config.v2.js`

This is a COMPLETE example showing how the Image Resizer tool config would look with the new unified schema.

```javascript
/**
 * Image Resizer Tool Configuration (NEW SCHEMA v2.0)
 * Unified, SEO-optimized, auto-generation ready
 */

import {
  IMAGE_FORMATS,
  MAX_FILE_SIZE,
  DEFAULT_QUALITY,
  MIN_QUALITY,
  MAX_QUALITY
} from '../../utils/constants'

const imageResizerConfig = {
  // ============================================
  // SECTION 1: CORE METADATA
  // ============================================
  id: 'image-resizer',
  slug: 'resize-image',
  version: '2.0.0',
  
  name: {
    en: 'Image Resizer',
    hi: 'इमेज रीसाइज़र'
  },
  
  category: 'image',
  
  // ============================================
  // SECTION 2: SEO INTENT
  // ============================================
  seo: {
    intent: 'resize',
    
    fileType: {
      en: 'image',
      hi: 'इमेज'
    },
    
    keywords: {
      primary: [
        'resize image',
        'image resizer',
        'resize photo',
        'image size reducer'
      ],
      secondary: [
        'compress image',
        'reduce image size',
        'image optimizer',
        'photo resizer'
      ],
      longtail: [
        'resize image to 50kb',
        'resize image to 20kb',
        'resize image to 100kb',
        'compress image for whatsapp',
        'reduce image size without quality loss',
        'resize image for passport',
        'compress image for email'
      ]
    },
    
    canonical: 'https://freetools.com/tools/resize-image',
    
    meta: {
      en: {
        title: 'Resize Image Online Free | Image Resizer Tool 2024',
        description: 'Free online image resizer. Resize images to any size (20KB, 50KB, 100KB) instantly. No signup required. Works on mobile.',
        ogTitle: 'Free Image Resizer - Resize Images Online',
        ogDescription: 'Resize and compress images to any size instantly. 100% free, no signup, works in browser.',
        ogImage: '/og-image-resizer.jpg'
      },
      hi: {
        title: 'इमेज ऑनलाइन फ्री रीसाइज़ करें | इमेज रीसाइज़र टूल 2024',
        description: 'फ्री ऑनलाइन इमेज रीसाइज़र। किसी भी साइज़ (20KB, 50KB, 100KB) में इमेज तुरंत रीसाइज़ करें। साइनअप की ज़रूरत नहीं।',
        ogTitle: 'फ्री इमेज रीसाइज़र - ऑनलाइन इमेज रीसाइज़ करें',
        ogDescription: 'किसी भी साइज़ में इमेज तुरंत रीसाइज़ और कंप्रेस करें। 100% फ्री, ब्राउज़र में काम करता है।',
        ogImage: '/og-image-resizer.jpg'
      }
    }
  },
  
  // ============================================
  // SECTION 3: VARIANTS
  // ============================================
  variants: [
    {
      id: '20kb',
      label: { en: '20KB', hi: '20KB' },
      value: 20,
      unit: 'KB',
      description: {
        en: 'Ultra compressed for email attachments',
        hi: 'ईमेल अटैचमेंट के लिए अल्ट्रा कंप्रेस्ड'
      },
      icon: '📧'
    },
    {
      id: '50kb',
      label: { en: '50KB', hi: '50KB' },
      value: 50,
      unit: 'KB',
      description: {
        en: 'Perfect for government forms and passport photos',
        hi: 'सरकारी फॉर्म और पासपोर्ट फोटो के लिए परफेक्ट'
      },
      icon: '📋'
    },
    {
      id: '100kb',
      label: { en: '100KB', hi: '100KB' },
      value: 100,
      unit: 'KB',
      description: {
        en: 'Balanced quality and size for general use',
        hi: 'सामान्य उपयोग के लिए संतुलित क्वालिटी और साइज़'
      },
      icon: '⚖️'
    },
    {
      id: '200kb',
      label: { en: '200KB', hi: '200KB' },
      value: 200,
      unit: 'KB',
      description: {
        en: 'High quality for websites and social media',
        hi: 'वेबसाइट और सोशल मीडिया के लिए हाई क्वालिटी'
      },
      icon: '🌐'
    },
    {
      id: 'custom',
      label: { en: 'Custom Size', hi: 'कस्टम साइज़' },
      value: null,
      unit: 'KB',
      description: {
        en: 'Enter your own target size',
        hi: 'अपना टारगेट साइज़ एंटर करें'
      },
      icon: '⚙️'
    }
  ],
  
  // ============================================
  // SECTION 4: USE CASES
  // ============================================
  useCases: [
    {
      id: 'forms',
      label: {
        en: 'Government Forms',
        hi: 'सरकारी फॉर्म'
      },
      description: {
        en: 'Perfect for passport, visa, Aadhaar, and official applications that require specific file sizes',
        hi: 'पासपोर्ट, वीज़ा, आधार और ऑफिशियल एप्लीकेशन के लिए परफेक्ट जिनमें स्पेसिफिक फाइल साइज़ चाहिए'
      },
      recommendedSize: 50,
      icon: '📋',
      keywords: ['passport photo', 'visa photo', 'aadhaar photo', 'government form']
    },
    {
      id: 'email',
      label: {
        en: 'Email Attachments',
        hi: 'ईमेल अटैचमेंट'
      },
      description: {
        en: 'Reduce image size to 20KB or 50KB for faster email sending and to avoid attachment size limits',
        hi: 'तेज़ ईमेल सेंडिंग के लिए और अटैचमेंट साइज़ लिमिट से बचने के लिए इमेज साइज़ को 20KB या 50KB तक कम करें'
      },
      recommendedSize: 20,
      icon: '📧',
      keywords: ['email attachment', 'reduce for email', 'compress for email']
    },
    {
      id: 'whatsapp',
      label: {
        en: 'WhatsApp',
        hi: 'WhatsApp'
      },
      description: {
        en: 'Optimize images for quick sharing on WhatsApp without quality loss',
        hi: 'बिना क्वालिटी लॉस के WhatsApp पर त्वरित शेयरिंग के लिए इमेज ऑप्टिमाइज़ करें'
      },
      recommendedSize: 100,
      icon: '💬',
      keywords: ['whatsapp photo', 'compress for whatsapp', 'whatsapp image size']
    },
    {
      id: 'website',
      label: {
        en: 'Website Upload',
        hi: 'वेबसाइट अपलोड'
      },
      description: {
        en: 'Compress images to 100KB or 200KB for faster page loading and better SEO',
        hi: 'तेज़ पेज लोडिंग और बेहतर SEO के लिए इमेज को 100KB या 200KB तक कंप्रेस करें'
      },
      recommendedSize: 200,
      icon: '🌐',
      keywords: ['website image', 'web optimization', 'page speed']
    },
    {
      id: 'social',
      label: {
        en: 'Social Media',
        hi: 'सोशल मीडिया'
      },
      description: {
        en: 'Optimize for Facebook, Instagram, Twitter with perfect dimensions and file size',
        hi: 'परफेक्ट डाइमेंशन और फाइल साइज़ के साथ Facebook, Instagram, Twitter के लिए ऑप्टिमाइज़ करें'
      },
      recommendedSize: 100,
      icon: '📱',
      keywords: ['instagram photo', 'facebook image', 'social media optimization']
    }
  ],
  
  // ============================================
  // SECTION 5: FILE HANDLING
  // ============================================
  fileTypes: {
    accept: 'image/jpeg,image/png,image/webp',
    maxSize: MAX_FILE_SIZE.IMAGE,
    maxFiles: 10,
    supportedFormats: IMAGE_FORMATS,
    supportedFormatsText: {
      en: 'JPG, PNG, WEBP',
      hi: 'JPG, PNG, WEBP'
    }
  },
  
  // ============================================
  // SECTION 6: TOOL SETTINGS
  // ============================================
  settings: {
    defaultQuality: DEFAULT_QUALITY,
    minQuality: MIN_QUALITY,
    maxQuality: MAX_QUALITY,
    qualityStep: 5,
    enableBatchProcessing: true,
    enablePreview: true,
    enableDownload: true,
    enableZipDownload: true
  },
  
  // ============================================
  // SECTION 7: PROCESSING OPTIONS
  // ============================================
  processingOptions: {
    modes: ['dimensions', 'filesize', 'preset'],
    defaultMode: 'filesize',
    defaultDimensions: {
      width: 800,
      height: 600
    },
    maintainAspectRatio: true,
    targetFileSizes: [20, 50, 100, 200, 500]
  },
  
  // ============================================
  // SECTION 8: PRESETS
  // ============================================
  presets: [
    {
      id: 'passport',
      name: { en: 'Passport Photo', hi: 'पासपोर्ट फोटो' },
      width: 600,
      height: 600,
      targetSize: 50,
      description: {
        en: '600×600px, 50KB - Standard passport photo size',
        hi: '600×600px, 50KB - स्टैंडर्ड पासपोर्ट फोटो साइज़'
      }
    },
    {
      id: 'whatsapp',
      name: { en: 'WhatsApp', hi: 'WhatsApp' },
      width: 1280,
      height: 720,
      targetSize: 100,
      description: {
        en: '1280×720px, 100KB - Optimized for WhatsApp',
        hi: '1280×720px, 100KB - WhatsApp के लिए ऑप्टिमाइज़्ड'
      }
    },
    {
      id: 'email',
      name: { en: 'Email Attachment', hi: 'ईमेल अटैचमेंट' },
      width: 800,
      height: 600,
      targetSize: 50,
      description: {
        en: '800×600px, 50KB - Perfect for email',
        hi: '800×600px, 50KB - ईमेल के लिए परफेक्ट'
      }
    },
    {
      id: 'website',
      name: { en: 'Website Upload', hi: 'वेबसाइट अपलोड' },
      width: 1200,
      height: 800,
      targetSize: 200,
      description: {
        en: '1200×800px, 200KB - Web optimized',
        hi: '1200×800px, 200KB - वेब ऑप्टिमाइज़्ड'
      }
    },
    {
      id: 'instagram',
      name: { en: 'Instagram Post', hi: 'Instagram पोस्ट' },
      width: 1080,
      height: 1080,
      targetSize: 100,
      description: {
        en: '1080×1080px, 100KB - Instagram square',
        hi: '1080×1080px, 100KB - Instagram स्क्वायर'
      }
    }
  ],
  
  // ============================================
  // SECTION 9: UI TEXT
  // ============================================
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
          quickSelect: 'Quick select'
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
        defaultAlt: 'Preview'
      },
      download: {
        single: 'Download',
        all: 'Download All',
        filePrefix: 'resized_'
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
          quickSelect: 'त्वरित चयन'
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
        defaultAlt: 'प्रीव्यू'
      },
      download: {
        single: 'डाउनलोड करें',
        all: 'सभी डाउनलोड करें',
        filePrefix: 'resized_'
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
  
  // ============================================
  // SECTION 10: CONTENT SECTIONS
  // ============================================
  content: {
    // Hero Section
    hero: {
      en: {
        title: 'Resize Image to Any Size Instantly (20KB, 50KB, 100KB)',
        subtitle: 'Free online image resizer & compressor. No signup. No quality loss. Works on mobile.',
        cta: 'Upload Image',
        privacyNotice: 'Images are processed in your browser. Not uploaded to any server.',
        benefits: [
          { icon: '⚡', text: 'Instant processing' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ]
      },
      hi: {
        title: 'इमेज को किसी भी साइज़ में तुरंत रीसाइज़ करें (20KB, 50KB, 100KB)',
        subtitle: 'फ्री ऑनलाइन इमेज रीसाइज़र और कंप्रेसर। कोई साइनअप नहीं। क्वालिटी लॉस नहीं। मोबाइल पर काम करता है।',
        cta: 'इमेज अपलोड करें',
        privacyNotice: 'इमेज आपके ब्राउज़र में प्रोसेस होती हैं। किसी सर्वर पर अपलोड नहीं होतीं।',
        benefits: [
          { icon: '⚡', text: 'तुरंत प्रोसेसिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ]
      }
    },
    
    // Features Section
    features: {
      en: {
        title: 'Why Use Our Image Resizer?',
        subtitle: 'Professional-grade tool with powerful features',
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
        subtitle: 'शक्तिशाली फीचर्स के साथ प्रोफेशनल-ग्रेड टूल',
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
    
    // How To Section
    howTo: {
      en: {
        title: 'How to Use This Tool',
        subtitle: 'Simple 4-step process',
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
            description: 'Select from three options: By Dimensions (set width/height), By File Size (target KB), or use Smart Presets.',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'Adjust Quality Settings',
            description: 'Use the quality slider (85-95% recommended) or click "Auto-Optimize" for best balance.',
            icon: '🎨'
          },
          {
            number: 4,
            title: 'Preview & Download',
            description: 'Preview the resized image with before/after comparison. Download individually or as ZIP.',
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
        subtitle: 'सरल 4-स्टेप प्रोसेस',
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
            description: 'तीन ऑप्शन में से चुनें: By Dimensions (width/height सेट करें), By File Size (टारगेट KB), या Smart Presets इस्तेमाल करें।',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'क्वालिटी सेटिंग एडजस्ट करें',
            description: 'Quality स्लाइडर इस्तेमाल करें (85-95% रेकमेंडेड) या बेस्ट बैलेंस के लिए "Auto-Optimize" क्लिक करें।',
            icon: '🎨'
          },
          {
            number: 4,
            title: 'प्रीव्यू और डाउनलोड करें',
            description: 'Before/after कम्पेरिज़न के साथ रीसाइज़्ड इमेज का प्रीव्यू देखें। अलग-अलग या ZIP के रूप में डाउनलोड करें।',
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
    
    // SEO Content (Manual for now, can be auto-generated later)
    seoContent: {
      en: {
        mainTitle: 'How to Resize Images Online',
        intro: 'This free online tool helps you resize images to exact file sizes like 20KB, 50KB, or 100KB without noticeable quality loss. Perfect for forms, applications, WhatsApp, email uploads, and website optimization.',
        sections: [
          {
            title: 'Resize Image to 50KB',
            content: 'Need to compress your image to exactly 50KB? Our free online tool automatically adjusts quality and dimensions to meet your target file size. Perfect for government forms, job applications, profile pictures, and document uploads where 50KB is the maximum allowed size.',
            keywords: 'resize image to 50KB, compress to 50KB, reduce image size 50KB',
            anchor: 'resize-50kb'
          },
          {
            title: 'Resize Image to 20KB',
            content: 'Reduce image size to 20KB without losing essential quality. Ideal for email attachments, mobile apps, and bandwidth-limited scenarios. Our smart compression algorithm preserves image clarity while achieving ultra-small file sizes.',
            keywords: 'resize image to 20KB, compress to 20KB, ultra compress image',
            anchor: 'resize-20kb'
          },
          {
            title: 'Resize Image to 100KB',
            content: 'Compress images to 100KB for websites, social media, and email. This size offers the perfect balance between quality and file size. Great for blog posts, product images, and general web use.',
            keywords: 'resize image to 100KB, compress to 100KB, image optimizer',
            anchor: 'resize-100kb'
          },
          {
            title: 'Compress Image for WhatsApp',
            content: 'Optimize images for WhatsApp sharing with our preset option. Automatically resizes to 1280×720 and compresses to under 100KB for fast sending without quality loss.',
            keywords: 'compress image for WhatsApp, WhatsApp image size, optimize for WhatsApp',
            anchor: 'whatsapp'
          }
        ]
      },
      hi: {
        mainTitle: 'ऑनलाइन इमेज कैसे रीसाइज़ करें',
        intro: 'यह फ्री ऑनलाइन टूल आपको बिना क्वालिटी लॉस के इमेज को एक्ज़ैक्ट फाइल साइज़ जैसे 20KB, 50KB या 100KB में रीसाइज़ करने में मदद करता है।',
        sections: [
          {
            title: 'इमेज को 50KB में कैसे करें',
            content: 'अगर आपको फॉर्म भरने के लिए 50KB की फोटो चाहिए तो बस अपनी इमेज अपलोड करें और "By File Size" ऑप्शन सेलेक्ट करके 50 टाइप करें।',
            keywords: 'image ko 50kb kaise kare, photo size kam kare 50kb',
            anchor: 'resize-50kb'
          },
          {
            title: 'इमेज को 20KB में कैसे करें',
            content: 'ईमेल अटैचमेंट के लिए इमेज को 20KB में कन्वर्ट करें। "By File Size" मोड में 20 टाइप करें और टूल ऑटोमैटिक साइज़ एडजस्ट कर देगा।',
            keywords: 'image ko 20kb me kaise kare, email ke liye image compress',
            anchor: 'resize-20kb'
          },
          {
            title: 'इमेज को 100KB में कैसे करें',
            content: 'वेबसाइट और सोशल मीडिया के लिए इमेज को 100KB में कंप्रेस करें। यह साइज़ क्वालिटी और फाइल साइज़ के बीच परफेक्ट बैलेंस देता है।',
            keywords: 'image ko 100kb me kaise kare, website ke liye image compress',
            anchor: 'resize-100kb'
          },
          {
            title: 'WhatsApp के लिए इमेज छोटा करें',
            content: 'WhatsApp पर फोटो शेयर करने के लिए "Presets" ऑप्शन में जाकर "WhatsApp" सेलेक्ट करें।',
            keywords: 'whatsapp ke liye image compress, photo resize for whatsapp',
            anchor: 'whatsapp'
          }
        ]
      }
    },
    
    // FAQ (Manual for now, can be auto-generated later)
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
          }
        ]
      },
      hi: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'बिना क्वालिटी कम किए इमेज साइज़ कैसे कम करें?',
            answer: 'हमारा टूल एडवांस्ड कंप्रेशन अल्गोरिदम इस्तेमाल करता है जो विज़ुअल क्वालिटी बनाए रखते हुए फाइल साइज़ कम करता है।'
          },
          {
            question: 'इमेज को एक्ज़ैक्ट KB (जैसे 20KB, 50KB, 100KB) में कैसे रीसाइज़ करें?',
            answer: '"By File Size" मोड सेलेक्ट करें और अपना टारगेट साइज़ KB में एंटर करें। हमारा अल्गोरिदम ऑटोमैटिकली एडजस्ट करता है।'
          },
          {
            question: 'इमेज अपलोड करना सेफ है? वे कहाँ स्टोर होती हैं?',
            answer: 'बिल्कुल सेफ! आपकी इमेज पूरी तरह से आपके ब्राउज़र में प्रोसेस होती हैं। वे कभी आपके डिवाइस से बाहर नहीं जातीं।'
          },
          {
            question: 'क्या यह मोबाइल फोन पर काम करता है?',
            answer: 'हाँ! हमारा टूल पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और सभी डिवाइसेज़ पर काम करता है।'
          },
          {
            question: 'कौन से इमेज फॉर्मेट सपोर्ट होते हैं?',
            answer: 'हम JPG, JPEG, PNG और WEBP फॉर्मेट सपोर्ट करते हैं। आप 10MB तक की इमेज अपलोड कर सकते हैं।'
          },
          {
            question: 'क्या मैं एक साथ कई इमेज रीसाइज़ कर सकता हूँ?',
            answer: 'हाँ! आप एक साथ 10 इमेज तक अपलोड और प्रोसेस कर सकते हैं। उन्हें अलग-अलग या ZIP फाइल के रूप में डाउनलोड करें।'
          }
        ]
      }
    }
  },
  
  // ============================================
  // SECTION 11: VALIDATION RULES
  // ============================================
  validation: {
    maxFileSize: MAX_FILE_SIZE.IMAGE,
    minDimensions: { width: 10, height: 10 },
    maxDimensions: { width: 10000, height: 10000 },
    allowedFormats: IMAGE_FORMATS
  },
  
  // ============================================
  // SECTION 12: STATS
  // ============================================
  stats: {
    avgProcessingTime: {
      en: '2 seconds',
      hi: '2 सेकंड'
    },
    maxFileSize: {
      en: '10MB',
      hi: '10MB'
    },
    supportedFormats: ['JPG', 'PNG', 'WEBP'],
    batchLimit: 10
  }
}

export default imageResizerConfig

```

---

## ✅ VALIDATION

### Backward Compatibility Check

**ToolPage.jsx Access Patterns**:
```javascript
// All these paths work with new schema ✅
config.content.hero.en.title          // ✅ Works
config.content.features.en.items      // ✅ Works
config.content.howTo.en.steps         // ✅ Works
config.content.seoContent.en.sections // ✅ Works
config.content.faq.en.items           // ✅ Works
config.uiText.en.upload.dragText      // ✅ Works
config.fileTypes.accept               // ✅ Works
config.settings.defaultQuality        // ✅ Works
```

### New Fields Available

```javascript
// New fields for auto-generation
config.seo.intent                     // 'resize'
config.seo.keywords.primary           // Array
config.variants                       // Array of variants
config.useCases                       // Array of use cases
config.stats                          // Display stats
```

---

## 🎯 NEXT STEPS

1. **Review this example**
2. **Confirm schema is acceptable**
3. **Approve for implementation**
4. **Create adapter layer in ToolPage.jsx**
5. **Migrate imageResizer.config.js to new schema**

---

