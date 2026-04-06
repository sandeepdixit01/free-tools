# Phase 1: Final Unified Config Schema (APPROVED)

## 🎯 Schema Version 2.0 - Production Ready

This is the FINAL approved schema incorporating all feedback and improvements.

---

## 📐 Complete Schema Structure

```javascript
{
  // ============================================
  // SECTION 1: CORE METADATA
  // ============================================
  id: 'image-resizer',                    // Unique tool ID (kebab-case)
  slug: 'resize-image',                   // URL slug
  version: '2.0.0',                       // Semantic versioning
  
  name: {
    en: 'Image Resizer',
    hi: 'इमेज रीसाइज़र'
  },
  
  category: 'image',                      // image | pdf | text | developer
  
  // ============================================
  // SECTION 2: SEO STRUCTURE (Enhanced)
  // ============================================
  seo: {
    // Primary action/intent for SEO
    intent: 'resize',                     // resize | compress | convert | merge | split | format | encode | decode
    
    // File type this tool works with
    fileType: {
      en: 'image',
      hi: 'इमेज'
    },
    
    // Structured keywords (for auto-generation)
    keywords: {
      // High-volume, competitive keywords
      primary: [
        'resize image',
        'image resizer',
        'resize photo'
      ],
      
      // Medium-volume, related keywords
      secondary: [
        'compress image',
        'reduce image size',
        'image optimizer'
      ],
      
      // Long-tail, high-intent keywords
      longTail: [
        'resize image to 50kb',
        'resize image to 20kb',
        'compress image for whatsapp',
        'reduce image size without quality loss'
      ]
    },
    
    // Canonical URL
    canonical: 'https://freetools.com/tools/resize-image',
    
    // Meta tags (bilingual)
    meta: {
      en: {
        title: 'Resize Image Online Free | Image Resizer Tool 2024',
        description: 'Free online image resizer. Resize images to any size (20KB, 50KB, 100KB) instantly.',
        ogTitle: 'Free Image Resizer - Resize Images Online',
        ogDescription: 'Resize and compress images to any size instantly',
        ogImage: '/og-image-resizer.jpg',
        twitterCard: 'summary_large_image'
      },
      hi: {
        title: 'इमेज ऑनलाइन फ्री रीसाइज़ करें | इमेज रीसाइज़र टूल 2024',
        description: 'फ्री ऑनलाइन इमेज रीसाइज़र। किसी भी साइज़ में इमेज तुरंत रीसाइज़ करें।',
        ogTitle: 'फ्री इमेज रीसाइज़र - ऑनलाइन इमेज रीसाइज़ करें',
        ogDescription: 'किसी भी साइज़ में इमेज तुरंत रीसाइज़ और कंप्रेस करें',
        ogImage: '/og-image-resizer.jpg',
        twitterCard: 'summary_large_image'
      }
    }
  },
  
  // ============================================
  // SECTION 3: VARIANTS (Enhanced with Objects)
  // ============================================
  variants: [
    {
      id: '20kb',                         // Unique variant ID
      label: {
        en: '20KB',
        hi: '20KB'
      },
      value: 20,                          // Numeric value
      unit: 'KB',                         // Unit of measurement
      description: {
        en: 'Ultra compressed for email attachments',
        hi: 'ईमेल अटैचमेंट के लिए अल्ट्रा कंप्रेस्ड'
      },
      icon: '📧',                         // Visual identifier
      recommended: false                  // Is this recommended?
    },
    {
      id: '50kb',
      label: {
        en: '50KB',
        hi: '50KB'
      },
      value: 50,
      unit: 'KB',
      description: {
        en: 'Perfect for government forms and passport photos',
        hi: 'सरकारी फॉर्म और पासपोर्ट फोटो के लिए परफेक्ट'
      },
      icon: '📋',
      recommended: true                   // Highlighted as recommended
    },
    {
      id: '100kb',
      label: {
        en: '100KB',
        hi: '100KB'
      },
      value: 100,
      unit: 'KB',
      description: {
        en: 'Balanced quality and size for general use',
        hi: 'सामान्य उपयोग के लिए संतुलित क्वालिटी और साइज़'
      },
      icon: '⚖️',
      recommended: false
    },
    {
      id: 'custom',
      label: {
        en: 'Custom Size',
        hi: 'कस्टम साइज़'
      },
      value: null,                        // null = user input required
      unit: 'KB',
      description: {
        en: 'Enter your own target size',
        hi: 'अपना टारगेट साइज़ एंटर करें'
      },
      icon: '⚙️',
      recommended: false
    }
  ],
  
  // ============================================
  // SECTION 4: USE CASES (For SEO Content Generation)
  // ============================================
  useCases: [
    {
      id: 'forms',                        // Unique use case ID
      label: {
        en: 'Government Forms',
        hi: 'सरकारी फॉर्म'
      },
      description: {
        en: 'Perfect for passport, visa, Aadhaar, and official applications',
        hi: 'पासपोर्ट, वीज़ा, आधार और ऑफिशियल एप्लीकेशन के लिए परफेक्ट'
      },
      recommendedSize: 50,                // Recommended variant (KB)
      icon: '📋',
      keywords: [                         // Use case specific keywords
        'passport photo',
        'visa photo',
        'aadhaar photo',
        'government form'
      ]
    },
    {
      id: 'email',
      label: {
        en: 'Email Attachments',
        hi: 'ईमेल अटैचमेंट'
      },
      description: {
        en: 'Reduce size for faster sending and avoid attachment limits',
        hi: 'तेज़ सेंडिंग के लिए और अटैचमेंट लिमिट से बचने के लिए साइज़ कम करें'
      },
      recommendedSize: 20,
      icon: '📧',
      keywords: [
        'email attachment',
        'reduce for email',
        'compress for email'
      ]
    },
    {
      id: 'whatsapp',
      label: {
        en: 'WhatsApp',
        hi: 'WhatsApp'
      },
      description: {
        en: 'Optimize for quick sharing without quality loss',
        hi: 'बिना क्वालिटी लॉस के त्वरित शेयरिंग के लिए ऑप्टिमाइज़ करें'
      },
      recommendedSize: 100,
      icon: '💬',
      keywords: [
        'whatsapp photo',
        'compress for whatsapp',
        'whatsapp image size'
      ]
    },
    {
      id: 'website',
      label: {
        en: 'Website Upload',
        hi: 'वेबसाइट अपलोड'
      },
      description: {
        en: 'Faster page loading and better SEO',
        hi: 'तेज़ पेज लोडिंग और बेहतर SEO'
      },
      recommendedSize: 200,
      icon: '🌐',
      keywords: [
        'website image',
        'web optimization',
        'page speed'
      ]
    }
  ],
  
  // ============================================
  // SECTION 5: RELATIONSHIPS (NEW)
  // ============================================
  relationships: {
    // Tools that complement this tool
    relatedTools: [
      'image-compressor',                 // Tool IDs from registry
      'image-cropper',
      'image-converter'
    ],
    
    // Alternative tools (similar function)
    alternativeTools: [
      'bulk-image-resizer',
      'photo-editor'
    ],
    
    // Tools in same workflow
    workflowTools: [
      'image-cropper',                    // Crop first
      'image-resizer',                    // Then resize (this tool)
      'image-converter'                   // Then convert format
    ]
  },
  
  // ============================================
  // SECTION 6: FILE HANDLING
  // ============================================
  fileTypes: {
    accept: 'image/jpeg,image/png,image/webp',
    maxSize: 10485760,                    // 10MB in bytes
    maxFiles: 10,
    supportedFormats: ['JPG', 'PNG', 'WEBP'],
    supportedFormatsText: {
      en: 'JPG, PNG, WEBP',
      hi: 'JPG, PNG, WEBP'
    }
  },
  
  // ============================================
  // SECTION 7: TOOL SETTINGS
  // ============================================
  settings: {
    defaultQuality: 85,
    minQuality: 10,
    maxQuality: 100,
    qualityStep: 5,
    enableBatchProcessing: true,
    enablePreview: true,
    enableDownload: true,
    enableZipDownload: true
  },
  
  // ============================================
  // SECTION 8: PROCESSING OPTIONS
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
  // SECTION 9: PRESETS
  // ============================================
  presets: [
    {
      id: 'passport',
      name: {
        en: 'Passport Photo',
        hi: 'पासपोर्ट फोटो'
      },
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
      name: {
        en: 'WhatsApp',
        hi: 'WhatsApp'
      },
      width: 1280,
      height: 720,
      targetSize: 100,
      description: {
        en: '1280×720px, 100KB - Optimized for WhatsApp',
        hi: '1280×720px, 100KB - WhatsApp के लिए ऑप्टिमाइज़्ड'
      }
    }
  ],
  
  // ============================================
  // SECTION 10: UI TEXT (Strict Bilingual)
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
        dismiss: 'Dismiss',
        fileTooLarge: 'File is too large. Maximum size is {maxSize}.',
        invalidFormat: 'Invalid file format. Supported: {formats}.',
        uploadFailed: 'Upload failed. Please try again.'
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
        dismiss: 'बंद करें',
        fileTooLarge: 'फाइल बहुत बड़ी है। अधिकतम साइज़ {maxSize} है।',
        invalidFormat: 'अमान्य फाइल फॉर्मेट। सपोर्टेड: {formats}।',
        uploadFailed: 'अपलोड विफल रहा। कृपया पुनः प्रयास करें।'
      }
    }
  },
  
  // ============================================
  // SECTION 11: CONTENT SECTIONS (Strict Bilingual)
  // ============================================
  content: {
    // Hero Section
    hero: {
      en: {
        title: 'Resize Image to Any Size Instantly (20KB, 50KB, 100KB)',
        subtitle: 'Free online image resizer & compressor. No signup. No quality loss.',
        cta: 'Upload Image',
        privacyIcon: '🔒',                // NEW: Icon for privacy notice
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
        subtitle: 'फ्री ऑनलाइन इमेज रीसाइज़र और कंप्रेसर। कोई साइनअप नहीं। क्वालिटी लॉस नहीं।',
        cta: 'इमेज अपलोड करें',
        privacyIcon: '🔒',
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
          }
          // ... more features
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
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है'
          }
          // ... more features
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
            description: 'Click "Choose Files" or drag and drop your image.',
            icon: '📤'
          }
          // ... more steps
        ],
        tips: [
          {
            title: 'For Best Quality',
            description: 'Keep quality between 85-95% for optimal balance'
          }
          // ... more tips
        ]
      },
      hi: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'सरल 4-स्टेप प्रोसेस',
        steps: [
          {
            number: 1,
            title: 'अपनी इमेज अपलोड करें',
            description: '"Choose Files" क्लिक करें या इमेज ड्रैग एंड ड्रॉप करें।',
            icon: '📤'
          }
          // ... more steps
        ],
        tips: [
          {
            title: 'बेस्ट क्वालिटी के लिए',
            description: 'quality को 85-95% के बीच रखें'
          }
          // ... more tips
        ]
      }
    },
    
    // SEO Content (Can be auto-generated or manual)
    seoContent: {
      en: {
        mainTitle: 'How to Resize Images Online',
        intro: 'This free online tool helps you resize images to exact file sizes...',
        sections: [
          {
            title: 'Resize Image to 50KB',
            content: 'Need to compress your image to exactly 50KB?...',
            keywords: 'resize image to 50KB, compress to 50KB',
            anchor: 'resize-50kb'
          }
          // ... more sections (can be auto-generated from variants + useCases)
        ]
      },
      hi: {
        mainTitle: 'ऑनलाइन इमेज कैसे रीसाइज़ करें',
        intro: 'यह फ्री ऑनलाइन टूल आपको इमेज रीसाइज़ करने में मदद करता है...',
        sections: [
          {
            title: 'इमेज को 50KB में कैसे करें',
            content: 'अगर आपको 50KB की फोटो चाहिए...',
            keywords: 'image ko 50kb kaise kare',
            anchor: 'resize-50kb'
          }
          // ... more sections
        ]
      }
    },
    
    // FAQ (Can be auto-generated from templates or manual)
    faq: {
      en: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I reduce image size without losing quality?',
            answer: 'Our tool uses advanced compression algorithms...'
          }
          // ... more FAQs
        ]
      },
      hi: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'बिना क्वालिटी कम किए इमेज साइज़ कैसे कम करें?',
            answer: 'हमारा टूल एडवांस्ड कंप्रेशन अल्गोरिदम इस्तेमाल करता है...'
          }
          // ... more FAQs
        ]
      }
    }
  },
  
  // ============================================
  // SECTION 12: VALIDATION RULES
  // ============================================
  validation: {
    maxFileSize: 10485760,
    minDimensions: { width: 10, height: 10 },
    maxDimensions: { width: 10000, height: 10000 },
    allowedFormats: ['image/jpeg', 'image/png', 'image/webp']
  },
  
  // ============================================
  // SECTION 13: STATS (Optional - Not Mandatory)
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
```

---

## ✅ KEY IMPROVEMENTS

### 1. Enhanced SEO Structure
- ✅ Separated `primary`, `secondary`, `longTail` keywords
- ✅ Clear `intent` and `useCases` definitions
- ✅ Structured for auto-generation

### 2. Improved Variants
- ✅ Objects instead of strings
- ✅ `label`, `value`, `unit` structure
- ✅ `recommended` flag for highlighting
- ✅ Icons for visual identification

### 3. Added Relationships
- ✅ `relatedTools` - Complementary tools
- ✅ `alternativeTools` - Similar function tools
- ✅ `workflowTools` - Tools in same workflow

### 4. Strict Bilingual Structure
- ✅ NO mixed language content
- ✅ NO fallback strings in components
- ✅ Every user-visible string has both EN and HI
- ✅ Added `privacyIcon` to hero config

### 5. Stats Optional
- ✅ Not mandatory in validation
- ✅ Can be omitted for simple tools
- ✅ Useful for display purposes

---

## 🔄 MIGRATION STRATEGY

### Gradual Migration (APPROVED)

**Phase 1**: Adapter Layer
- Create adapter in ToolPage.jsx
- Support both old and new schema
- No breaking changes

**Phase 2**: Migrate imageResizer
- Convert to new schema
- Test thoroughly
- Use as reference

**Phase 3**: Migrate Other Tools
- One tool at a time
- Validate each migration
- Document process

**Phase 4**: Remove Adapter
- When all tools migrated
- Clean up old code
- Final validation

---

## 📋 VALIDATION RULES

### Required Fields
- `id`, `slug`, `version`, `name`, `category`
- `seo.intent`, `seo.fileType`, `seo.keywords`, `seo.meta`
- `fileTypes`, `settings`, `uiText`, `content`

### Optional Fields
- `variants`, `useCases`, `relationships`, `stats`
- `presets`, `processingOptions`

### Bilingual Requirements
- Every user-visible string MUST have `en` and `hi`
- NO fallback strings in components
- Components should handle missing translations gracefully

---

## 🎯 NEXT STEPS

1. ✅ Schema approved
2. ✅ String audit complete
3. ⏳ Fix 2 hardcoded strings
4. ⏳ Create adapter layer
5. ⏳ Implement config validator
6. ⏳ Migrate imageResizer config
7. ⏳ Test thoroughly

---

