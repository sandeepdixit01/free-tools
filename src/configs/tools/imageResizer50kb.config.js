/**
 * Image Resizer 50KB Variant Configuration
 * Reuses ImageResizerTool with 50KB-specific content
 */

import imageResizerConfig from './imageResizer.config'

const imageResizer50kbConfig = {
  // Inherit all tool settings from main config
  ...imageResizerConfig,
  
  // Override metadata
  metadata: {
    ...imageResizerConfig.metadata,
    id: 'image-resizer-50kb',
    slug: 'image-resizer-50kb'
  },

  // Override SEO
  content: {
    ...imageResizerConfig.content,
    
    seo: {
      en: {
        title: 'Resize Image to 50KB Online Free',
        description: 'Compress and resize image to 50KB online. Free, fast, secure.',
        keywords: 'resize image to 50KB, compress to 50KB, reduce image size 50KB',
        canonical: 'https://freetools.com/image-resizer-50kb'
      }
    },

    // Override Hero
    hero: {
      en: {
        title: 'Resize Image to 50KB Online',
        subtitle: 'Free online tool to compress and resize images to exactly 50KB',
        benefits: [
          { icon: '⚡', text: 'Instant processing' },
          { icon: '🔒', text: '100% Private' },
          { icon: '🎯', text: 'Exact 50KB size' },
          { icon: '🆓', text: 'Completely free' }
        ],
        privacyNotice: 'Images are processed in your browser. Not uploaded to any server.'
      }
    },

    // Override How To
    howTo: {
      en: {
        title: 'How to Resize Image to 50KB',
        steps: [
          {
            number: 1,
            title: 'Upload Your Image',
            description: 'Click "Choose Files" or drag and drop your image.',
            icon: '📤'
          },
          {
            number: 2,
            title: 'Adjust Quality/Size',
            description: 'Select "By File Size" mode and enter 50 KB as target size.',
            icon: '⚙️'
          },
          {
            number: 3,
            title: 'Download Result',
            description: 'Preview and download your 50KB image.',
            icon: '⬇️'
          }
        ]
      }
    },

    // Override Features
    features: {
      en: {
        title: 'Tips for Exact 50KB',
        items: [
          {
            icon: '📷',
            title: 'Use JPG for Better Compression',
            description: 'JPG format provides better compression than PNG for photos'
          },
          {
            icon: '📐',
            title: 'Reduce Dimensions',
            description: 'Smaller dimensions help achieve 50KB target more easily'
          },
          {
            icon: '🎨',
            title: 'Adjust Quality Slider',
            description: 'Use quality slider between 80-90% for best balance'
          }
        ]
      }
    },

    // Override SEO Content with internal links
    seoContent: {
      en: {
        mainTitle: 'Resize Image to 50KB - Complete Guide',
        intro: 'Need to compress your image to exactly 50KB? This free tool helps you resize images to 50KB for government forms, job applications, and document uploads.',
        
        sections: [
          {
            title: 'Why 50KB Image Size?',
            content: 'Many government forms, job portals, and online applications require images to be exactly 50KB or less. Our tool automatically adjusts quality and dimensions to meet this requirement.'
          },
          {
            title: 'Best Practices for 50KB Images',
            content: 'Use JPG format for photos, reduce image dimensions if needed, and adjust quality slider between 80-90%. The tool will automatically optimize to reach exactly 50KB.'
          }
        ]
      }
    },

    // Override FAQ
    faq: {
      en: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How to get exact 50KB size?',
            answer: 'Select "By File Size" mode, enter 50 as target KB, and click resize. The tool automatically adjusts quality and dimensions to achieve exactly 50KB.'
          },
          {
            question: 'Is this tool free?',
            answer: 'Yes, completely free! No registration, no limits, no watermarks. Use it as many times as you need.'
          },
          {
            question: 'Is my image safe?',
            answer: 'Absolutely! Your images are processed entirely in your browser. They never leave your device or get uploaded to any server.'
          }
        ]
      }
    }
  }
}

export default imageResizer50kbConfig

// Made with Bob
