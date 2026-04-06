# 📋 Configuration Schema Reference

Complete reference for tool configuration structure.

---

## 🎯 Overview

Every tool requires a configuration file that defines:
- Tool metadata
- File type constraints
- Default settings
- UI text (bilingual)
- Content sections (SEO, FAQ, features, etc.)

---

## 📦 Complete Config Structure

```javascript
const toolConfig = {
  // 1. Tool Metadata
  metadata: {
    en: {
      id: string,              // Unique tool ID
      name: string,            // Tool name
      slug: string,            // URL slug
      category: string,        // Category (image, pdf, video, etc.)
      description: string,     // Brief description
      version: string,         // Version number
      author: string,          // Author name
      lastUpdated: string      // Last update date
    },
    hi: { /* Same structure for Hindi */ }
  },

  // 2. File Type Settings
  fileTypes: {
    accept: string,            // Accepted file extensions (e.g., '.jpg,.png')
    maxSize: number,           // Max file size in bytes
    maxFiles: number           // Maximum number of files
  },

  // 3. Default Settings
  defaultSettings: {
    // Tool-specific default settings
    // Example for image resizer:
    width: number,
    height: number,
    quality: number,
    mode: string,
    maintainAspectRatio: boolean
  },

  // 4. Processing Options (optional)
  processingOptions: {
    // Tool-specific processing options
  },

  // 5. Validation Rules (optional)
  validation: {
    maxFileSize: number,
    minDimensions: { width: number, height: number },
    maxDimensions: { width: number, height: number },
    allowedFormats: Array<string>
  },

  // 6. UI Configuration (optional)
  ui: {
    showUploadArea: boolean,
    showPreview: boolean,
    showStats: boolean,
    theme: string,
    layout: string
  },

  // 7. UI Text (Bilingual)
  uiText: {
    en: { /* UI text structure */ },
    hi: { /* UI text structure */ }
  },

  // 8. Content Sections (Bilingual)
  content: {
    en: {
      seo: { /* SEO metadata */ },
      hero: { /* Hero section */ },
      features: { /* Features section */ },
      howTo: { /* How-to section */ },
      seoContent: [ /* SEO content sections */ ],
      faq: { /* FAQ section */ }
    },
    hi: { /* Same structure for Hindi */ }
  }
};
```

---

## 📝 Detailed Schema

### 1. Metadata

```javascript
metadata: {
  en: {
    id: 'image-resizer',                    // Required: Unique identifier
    name: 'Image Resizer',                  // Required: Display name
    slug: 'resize-image',                   // Required: URL slug
    category: 'image',                      // Required: Category
    description: 'Resize images instantly', // Required: Brief description
    version: '1.0.0',                       // Required: Version
    author: 'FreeTools',                    // Optional: Author
    lastUpdated: '2024-01-15'              // Optional: Last update date
  }
}
```

---

### 2. File Types

```javascript
fileTypes: {
  accept: '.jpg,.jpeg,.png,.webp',        // Required: Accepted extensions
  maxSize: 10 * 1024 * 1024,             // Required: Max size in bytes (10MB)
  maxFiles: 10                            // Required: Max number of files
}
```

**Common File Types**:
- Images: `.jpg,.jpeg,.png,.webp,.gif`
- PDFs: `.pdf`
- Videos: `.mp4,.avi,.mov,.webm`
- Audio: `.mp3,.wav,.ogg`
- Documents: `.doc,.docx,.txt`

---

### 3. Default Settings

Tool-specific settings that users can modify:

```javascript
defaultSettings: {
  // Example for Image Resizer
  width: 800,
  height: 600,
  quality: 85,
  mode: 'dimensions',
  maintainAspectRatio: true,
  
  // Example for PDF Compressor
  compressionLevel: 'medium',
  preserveMetadata: true,
  
  // Example for Video Converter
  format: 'mp4',
  quality: 'high',
  resolution: '1080p'
}
```

---

### 4. UI Text Structure

```javascript
uiText: {
  en: {
    // Upload Section
    upload: {
      dragText: 'Drag & drop files here',
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
    
    // Controls Section
    controls: {
      title: 'Options',
      description: 'Configure your settings',
      // Add tool-specific control labels here
    },
    
    // Preview Section
    preview: {
      title: 'Preview & Download',
      before: 'Before',
      after: 'After',
      defaultAlt: 'Preview'
    },
    
    // Download Section
    download: {
      single: 'Download',
      all: 'Download All',
      filePrefix: 'processed_'
    },
    
    // Processing Section
    processing: {
      message: 'Processing your files...'
    },
    
    // Errors Section
    errors: {
      processingFailed: 'Processing failed. Please try again.',
      dismiss: 'Dismiss',
      fileTooLarge: 'File size exceeds maximum limit',
      invalidFormat: 'Invalid file format',
      tooManyFiles: 'Too many files selected'
    }
  }
}
```

---

### 5. Content Structure

#### SEO Metadata

```javascript
seo: {
  title: 'Resize Image Online Free | Image Resizer Tool',
  description: 'Free online image resizer. Resize images to any size instantly.',
  keywords: 'resize image, image resizer, compress image, reduce image size',
  canonical: 'https://yoursite.com/tools/resize-image'
}
```

#### Hero Section

```javascript
hero: {
  title: 'Resize Images Online Free',
  subtitle: 'Fast, secure, and completely free image resizer',
  benefits: [
    { icon: '⚡', text: 'Instant processing' },
    { icon: '🔒', text: '100% Private' },
    { icon: '📱', text: 'Mobile friendly' },
    { icon: '🆓', text: 'Completely free' }
  ],
  cta: 'Get Started',
  privacyNotice: 'All processing happens in your browser'
}
```

#### Features Section

```javascript
features: {
  title: 'Why Use Our Tool?',
  subtitle: 'Powerful features for your needs',
  items: [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Process files in seconds with our optimized engine'
    },
    {
      icon: '🔒',
      title: '100% Secure',
      description: 'All processing happens locally in your browser'
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Works perfectly on all devices'
    },
    {
      icon: '🎯',
      title: 'Precise Control',
      description: 'Fine-tune settings for perfect results'
    },
    {
      icon: '📦',
      title: 'Batch Processing',
      description: 'Process multiple files at once'
    },
    {
      icon: '🎨',
      title: 'Quality Preservation',
      description: 'Maintain quality while reducing size'
    }
  ]
}
```

#### How-To Section

```javascript
howTo: {
  title: 'How to Use',
  subtitle: 'Simple steps to get started',
  steps: [
    {
      number: 1,
      title: 'Upload Files',
      description: 'Drag and drop your files or click to browse'
    },
    {
      number: 2,
      title: 'Configure Settings',
      description: 'Adjust settings according to your needs'
    },
    {
      number: 3,
      title: 'Process & Download',
      description: 'Click process and download your optimized files'
    }
  ]
}
```

#### SEO Content Sections

```javascript
seoContent: [
  {
    title: 'What is Image Resizing?',
    content: 'Image resizing is the process of changing the dimensions...',
    link: '/learn/image-resizing',
    anchor: 'what-is-resizing',
    keywords: 'image resizing, resize images, image dimensions'
  },
  {
    title: 'Benefits of Online Image Resizer',
    content: 'Using an online image resizer offers many advantages...',
    link: '/tools/resize-image',
    anchor: 'benefits',
    keywords: 'online image resizer, resize images online'
  }
]
```

#### FAQ Section

```javascript
faq: {
  title: 'Frequently Asked Questions',
  items: [
    {
      question: 'Is this tool free to use?',
      answer: 'Yes, our tool is completely free with no hidden charges or limitations.'
    },
    {
      question: 'Are my files safe?',
      answer: 'Absolutely! All processing happens in your browser. Files never leave your device.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'We support JPG, PNG, WEBP, and GIF image formats up to 10MB each.'
    },
    {
      question: 'Can I process multiple files at once?',
      answer: 'Yes, you can upload and process up to 10 files simultaneously.'
    }
  ]
}
```

---

## 🎨 Tool-Specific Examples

### Image Resizer Config

```javascript
const imageResizerConfig = {
  metadata: {
    en: {
      id: 'image-resizer',
      name: 'Image Resizer',
      slug: 'resize-image',
      category: 'image'
    }
  },
  fileTypes: {
    accept: '.jpg,.jpeg,.png,.webp',
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10
  },
  defaultSettings: {
    width: 800,
    height: 600,
    quality: 85,
    mode: 'dimensions',
    maintainAspectRatio: true
  },
  // ... rest of config
};
```

### PDF Compressor Config

```javascript
const pdfCompressorConfig = {
  metadata: {
    en: {
      id: 'pdf-compressor',
      name: 'PDF Compressor',
      slug: 'compress-pdf',
      category: 'pdf'
    }
  },
  fileTypes: {
    accept: '.pdf',
    maxSize: 50 * 1024 * 1024,
    maxFiles: 5
  },
  defaultSettings: {
    compressionLevel: 'medium',
    preserveMetadata: true,
    optimizeImages: true
  },
  // ... rest of config
};
```

### Video Converter Config

```javascript
const videoConverterConfig = {
  metadata: {
    en: {
      id: 'video-converter',
      name: 'Video Converter',
      slug: 'convert-video',
      category: 'video'
    }
  },
  fileTypes: {
    accept: '.mp4,.avi,.mov,.webm',
    maxSize: 100 * 1024 * 1024,
    maxFiles: 3
  },
  defaultSettings: {
    format: 'mp4',
    quality: 'high',
    resolution: '1080p',
    codec: 'h264'
  },
  // ... rest of config
};
```

---

## 🌐 Internationalization (i18n)

### Language Structure

Each language should have the same structure:

```javascript
content: {
  en: {
    seo: { /* English content */ },
    hero: { /* English content */ },
    features: { /* English content */ },
    // ... other sections
  },
  hi: {
    seo: { /* Hindi content */ },
    hero: { /* Hindi content */ },
    features: { /* Hindi content */ },
    // ... other sections
  },
  es: {
    seo: { /* Spanish content */ },
    hero: { /* Spanish content */ },
    features: { /* Spanish content */ },
    // ... other sections
  }
}
```

### Adding New Language

1. Add language code to all content sections
2. Translate all text while keeping structure identical
3. Update LanguageContext if needed
4. Test with new language

---

## ✅ Validation Rules

### Required Fields

```javascript
// These fields are required in every config
metadata.en.id          // string
metadata.en.name        // string
metadata.en.slug        // string
metadata.en.category    // string
fileTypes.accept        // string
fileTypes.maxSize       // number
fileTypes.maxFiles      // number
content.en.seo.title    // string
content.en.hero.title   // string
uiText.en.upload        // object
uiText.en.download      // object
```

### Optional Fields

```javascript
// These fields are optional but recommended
metadata.en.description
metadata.en.version
metadata.en.author
defaultSettings
processingOptions
validation
ui
content.en.features
content.en.howTo
content.en.faq
content.en.seoContent
```

---

## 🚨 Common Mistakes

### ❌ DON'T:

```javascript
// Missing required fields
metadata: {
  en: {
    name: 'Tool Name'
    // Missing id, slug, category
  }
}

// Inconsistent language structure
content: {
  en: { hero: { title: 'Title' } },
  hi: { hero: { heading: 'Title' } }  // Different key name
}

// Hardcoded file paths
fileTypes: {
  accept: 'image/*'  // Too broad, use specific extensions
}
```

### ✅ DO:

```javascript
// Complete required fields
metadata: {
  en: {
    id: 'unique-tool-id',
    name: 'Tool Name',
    slug: 'tool-slug',
    category: 'category'
  }
}

// Consistent structure across languages
content: {
  en: { hero: { title: 'English Title' } },
  hi: { hero: { title: 'Hindi Title' } }
}

// Specific file extensions
fileTypes: {
  accept: '.jpg,.png,.webp'
}
```

---

## 🔧 Config Validation

Use this checklist to validate your config:

- [ ] All required fields present
- [ ] Language structures identical
- [ ] File types specific (not wildcards)
- [ ] Reasonable file size limits
- [ ] All UI text keys present
- [ ] SEO metadata complete
- [ ] FAQ items helpful and relevant
- [ ] Features highlight tool benefits
- [ ] How-to steps are clear
- [ ] No hardcoded text in components

---

## 📚 Additional Resources

- [Architecture Documentation](./ARCHITECTURE.md)
- [Adding New Tool Guide](./ADDING_NEW_TOOL.md)
- [Component API Reference](./COMPONENT_API.md)

---

**Remember**: A well-structured config file is the foundation of a great tool. Take time to plan your content structure before coding!