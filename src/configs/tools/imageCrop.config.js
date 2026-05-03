/**
 * Image Crop Tool Configuration - Schema v2.0
 * 
 * Following the GOLD STANDARD reference implementation
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-20
 */

import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

export const imageCropConfig = {
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
  id: 'image-crop',
  name: {
    en: 'Image Crop Tool',
    hi: 'इमेज क्रॉप टूल'
  },
  slug: 'image-crop',
  description: {
    en: 'Crop images online with custom dimensions and aspect ratios',
    hi: 'कस्टम डाइमेंशन और आस्पेक्ट रेशियो के साथ इमेज को ऑनलाइन क्रॉप करें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Image Crop Tool Online | Crop Photos Free 2024',
      description: 'Crop images online with custom dimensions and aspect ratios. Free image cropping tool with 1:1, 16:9, 4:3 presets. Fast, secure, works in your browser.',
      keywords: {
        primary: [
          'image crop tool',
          'crop image online',
          'photo cropper'
        ],
        longTail: [
          'crop image online free',
          'crop photo to specific size',
          'image cropping tool online',
          'crop image to square',
          'crop image 16:9 ratio'
        ],
        secondary: [
          'online image cropper',
          'photo crop tool',
          'crop picture online',
          'image trimmer',
          'aspect ratio crop'
        ]
      },
      canonical: getToolCanonicalUrl('image-crop', 'en'),
      ogImage: '/images/tools/image-crop-og.jpg'
    },
    hi: {
      title: 'इमेज क्रॉप टूल ऑनलाइन | फोटो फ्री क्रॉप करें 2024',
      description: 'कस्टम डाइमेंशन और आस्पेक्ट रेशियो के साथ इमेज को ऑनलाइन क्रॉप करें। 1:1, 16:9, 4:3 प्रीसेट के साथ फ्री इमेज क्रॉपिंग टूल। तेज़, सुरक्षित, ब्राउज़र में काम करता है।',
      keywords: {
        primary: [
          'image crop tool',
          'image online crop kare',
          'photo cropper'
        ],
        longTail: [
          'image online free crop kare',
          'photo ko specific size me crop kare',
          'image cropping tool online',
          'image ko square me crop kare',
          'image 16:9 ratio me crop kare'
        ],
        secondary: [
          'online image cropper',
          'photo crop tool',
          'picture online crop kare',
          'image trimmer',
          'aspect ratio crop'
        ]
      },
      canonical: getToolCanonicalUrl('image-crop', 'en'),
      ogImage: '/images/tools/image-crop-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      hero: {
        title: 'Image Crop',
        subtitle: 'Free online tool to crop images with custom dimensions and aspect ratios',
        benefits: [
          { icon: '✂️', text: 'Precise cropping with drag selection' },
          { icon: '📐', text: 'Aspect ratio presets (1:1, 16:9, 4:3)' },
          { icon: '🎯', text: 'Custom crop dimensions' },
          { icon: '🔒', text: '100% secure - no upload to server' }
        ],
        cta: 'Upload Image to Crop',
        privacyNotice: 'Your images are processed locally in your browser. We never upload or store your files.'
      },

      features: {
        title: 'Powerful Cropping Features',
        subtitle: 'Professional image cropping made simple',
        items: [
          {
            icon: '✂️',
            title: 'Drag to Crop',
            description: 'Select crop area by dragging on the image'
          },
          {
            icon: '📐',
            title: 'Aspect Ratio Presets',
            description: 'Quick presets: Free, 1:1, 16:9, 9:16, 4:3, 21:9'
          },
          {
            icon: '🎯',
            title: 'Precise Control',
            description: 'Fine-tune crop area with pixel-perfect accuracy'
          },
          {
            icon: '👁️',
            title: 'Live Preview',
            description: 'See cropped result in real-time'
          },
          {
            icon: '💾',
            title: 'Multiple Formats',
            description: 'Save as JPG, PNG, or WEBP'
          },
          {
            icon: '🔒',
            title: 'Privacy First',
            description: 'All processing happens in your browser'
          }
        ]
      },

      howTo: {
        title: 'How to Crop Images',
        subtitle: 'Simple steps to crop your photos',
        steps: [
          {
            number: 1,
            title: 'Upload Image',
            description: 'Click or drag to upload your image file'
          },
          {
            number: 2,
            title: 'Select Crop Area',
            description: 'Drag on the image to select the area you want to keep, or choose an aspect ratio preset'
          },
          {
            number: 3,
            title: 'Adjust & Preview',
            description: 'Fine-tune the crop area and see live preview of the result'
          },
          {
            number: 4,
            title: 'Download',
            description: 'Click download to save your cropped image'
          }
        ],
        tips: [
          'Use aspect ratio presets for social media posts (1:1 for Instagram, 16:9 for YouTube)',
          'Drag the corners to resize crop area while maintaining aspect ratio',
          'Choose PNG format to preserve transparency',
          'Use free crop mode for maximum flexibility'
        ]
      },

      useCases: {
        title: 'When to Use Image Crop Tool',
        items: [
          {
            icon: '📱',
            title: 'Social Media Posts',
            description: 'Crop images to perfect dimensions for Instagram, Facebook, Twitter, LinkedIn'
          },
          {
            icon: '🎨',
            title: 'Profile Pictures',
            description: 'Create square profile photos with 1:1 aspect ratio'
          },
          {
            icon: '🖼️',
            title: 'Photo Editing',
            description: 'Remove unwanted parts and focus on the subject'
          },
          {
            icon: '📺',
            title: 'Video Thumbnails',
            description: 'Crop images to 16:9 for YouTube and video platforms'
          },
          {
            icon: '🏪',
            title: 'E-commerce',
            description: 'Prepare product photos with consistent dimensions'
          },
          {
            icon: '📄',
            title: 'Documents',
            description: 'Crop screenshots and images for presentations'
          }
        ]
      },

      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What image formats are supported?',
            answer: 'You can upload JPG, PNG, WEBP, and most common image formats. The cropped image can be saved as JPG, PNG, or WEBP.'
          },
          {
            question: 'Is there a file size limit?',
            answer: 'No, there is no file size limit. However, very large images may take longer to process depending on your device.'
          },
          {
            question: 'What are aspect ratio presets?',
            answer: 'Aspect ratio presets help you crop images to standard dimensions: 1:1 (square), 16:9 (widescreen), 9:16 (portrait), 4:3 (photo), 21:9 (ultrawide). Choose "Free" for custom dimensions.'
          },
          {
            question: 'Can I crop multiple images at once?',
            answer: 'Currently, you can crop one image at a time. For batch processing, you can crop images one by one and download each result.'
          },
          {
            question: 'Are my images uploaded to a server?',
            answer: 'No, all image processing happens locally in your browser. Your images never leave your device, ensuring complete privacy and security.'
          },
          {
            question: 'How do I crop to exact pixel dimensions?',
            answer: 'After selecting a crop area, you can see the exact dimensions. Adjust the selection by dragging the corners or edges to achieve your desired pixel size.'
          }
        ]
      },

      seoContent: {
        mainTitle: 'Professional Image Cropping Made Easy',
        intro: 'Our free online image crop tool helps you trim, resize, and perfect your photos with precision. Whether you need to crop images for social media, create profile pictures, or prepare photos for your website, our tool makes it simple and fast. You can also <a href="/tools/image-resizer">resize images</a> or <a href="/tools/image-compressor">compress images</a> for optimal web performance.',
        sections: [
          {
            title: 'Why Use Our Image Crop Tool?',
            content: 'Cropping images is essential for creating visually appealing content. Our tool offers professional-grade cropping features with an intuitive interface. Select custom crop areas, use aspect ratio presets, and see live previews - all without uploading your images to any server.',
            keywords: ['image crop tool', 'online photo cropper', 'crop images free']
          },
          {
            title: 'Aspect Ratio Presets for Every Need',
            content: 'Choose from popular aspect ratio presets: 1:1 for Instagram posts and profile pictures, 16:9 for YouTube thumbnails and widescreen displays, 9:16 for Instagram Stories and TikTok, 4:3 for traditional photos, and 21:9 for ultrawide displays. Or use free crop mode for complete flexibility.',
            keywords: ['aspect ratio crop', 'crop image 16:9', 'square crop 1:1']
          },
          {
            title: 'Privacy and Security',
            content: 'Your privacy is our priority. All image processing happens directly in your browser using HTML5 Canvas API. Your images are never uploaded to our servers, ensuring complete security and privacy. This also means faster processing and no file size limits.',
            keywords: ['secure image crop', 'private photo cropper', 'browser-based crop tool']
          }
        ]
      }
    },

    hi: {
      hero: {
        title: 'इमेज क्रॉप',
        subtitle: 'फ्री ऑनलाइन टूल से कस्टम डाइमेंशन और आस्पेक्ट रेशियो के साथ इमेज को क्रॉप करें',
        benefits: [
          { icon: '✂️', text: 'ड्रैग सिलेक्शन के साथ सटीक क्रॉपिंग' },
          { icon: '📐', text: 'आस्पेक्ट रेशियो प्रीसेट (1:1, 16:9, 4:3)' },
          { icon: '🎯', text: 'कस्टम क्रॉप डाइमेंशन' },
          { icon: '🔒', text: '100% सुरक्षित - सर्वर पर कोई अपलोड नहीं' }
        ],
        cta: 'क्रॉप करने के लिए इमेज अपलोड करें',
        privacyNotice: 'आपकी इमेज आपके ब्राउज़र में लोकली प्रोसेस होती हैं। हम कभी भी आपकी फाइलें अपलोड या स्टोर नहीं करते।'
      },

      features: {
        title: 'शक्तिशाली क्रॉपिंग फीचर्स',
        subtitle: 'प्रोफेशनल इमेज क्रॉपिंग को आसान बनाया गया',
        items: [
          {
            icon: '✂️',
            title: 'ड्रैग टू क्रॉप',
            description: 'इमेज पर ड्रैग करके क्रॉप एरिया सिलेक्ट करें'
          },
          {
            icon: '📐',
            title: 'आस्पेक्ट रेशियो प्रीसेट',
            description: 'क्विक प्रीसेट: फ्री, 1:1, 16:9, 9:16, 4:3, 21:9'
          },
          {
            icon: '🎯',
            title: 'सटीक कंट्रोल',
            description: 'पिक्सेल-परफेक्ट एक्यूरेसी के साथ क्रॉप एरिया को फाइन-ट्यून करें'
          },
          {
            icon: '👁️',
            title: 'लाइव प्रीव्यू',
            description: 'रियल-टाइम में क्रॉप किया गया रिजल्ट देखें'
          },
          {
            icon: '💾',
            title: 'मल्टिपल फॉर्मेट',
            description: 'JPG, PNG, या WEBP के रूप में सेव करें'
          },
          {
            icon: '🔒',
            title: 'प्राइवेसी फर्स्ट',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है'
          }
        ]
      },

      howTo: {
        title: 'इमेज कैसे क्रॉप करें',
        subtitle: 'अपनी फोटो क्रॉप करने के आसान स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'इमेज अपलोड करें',
            description: 'अपनी इमेज फाइल अपलोड करने के लिए क्लिक करें या ड्रैग करें'
          },
          {
            number: 2,
            title: 'क्रॉप एरिया सिलेक्ट करें',
            description: 'इमेज पर ड्रैग करके वह एरिया सिलेक्ट करें जिसे आप रखना चाहते हैं, या आस्पेक्ट रेशियो प्रीसेट चुनें'
          },
          {
            number: 3,
            title: 'एडजस्ट और प्रीव्यू करें',
            description: 'क्रॉप एरिया को फाइन-ट्यून करें और रिजल्ट का लाइव प्रीव्यू देखें'
          },
          {
            number: 4,
            title: 'डाउनलोड करें',
            description: 'अपनी क्रॉप की गई इमेज को सेव करने के लिए डाउनलोड पर क्लिक करें'
          }
        ],
        tips: [
          'सोशल मीडिया पोस्ट के लिए आस्पेक्ट रेशियो प्रीसेट का उपयोग करें (Instagram के लिए 1:1, YouTube के लिए 16:9)',
          'आस्पेक्ट रेशियो बनाए रखते हुए क्रॉप एरिया को रीसाइज़ करने के लिए कॉर्नर ड्रैग करें',
          'ट्रांसपेरेंसी को प्रिज़र्व करने के लिए PNG फॉर्मेट चुनें',
          'अधिकतम लचीलेपन के लिए फ्री क्रॉप मोड का उपयोग करें'
        ]
      },

      useCases: {
        title: 'इमेज क्रॉप टूल का उपयोग कब करें',
        items: [
          {
            icon: '📱',
            title: 'सोशल मीडिया पोस्ट',
            description: 'Instagram, Facebook, Twitter, LinkedIn के लिए परफेक्ट डाइमेंशन में इमेज क्रॉप करें'
          },
          {
            icon: '🎨',
            title: 'प्रोफाइल पिक्चर',
            description: '1:1 आस्पेक्ट रेशियो के साथ स्क्वायर प्रोफाइल फोटो बनाएं'
          },
          {
            icon: '🖼️',
            title: 'फोटो एडिटिंग',
            description: 'अनचाहे हिस्सों को हटाएं और सब्जेक्ट पर फोकस करें'
          },
          {
            icon: '📺',
            title: 'वीडियो थंबनेल',
            description: 'YouTube और वीडियो प्लेटफॉर्म के लिए 16:9 में इमेज क्रॉप करें'
          },
          {
            icon: '🏪',
            title: 'ई-कॉमर्स',
            description: 'कंसिस्टेंट डाइमेंशन के साथ प्रोडक्ट फोटो तैयार करें'
          },
          {
            icon: '📄',
            title: 'डॉक्यूमेंट',
            description: 'प्रेजेंटेशन के लिए स्क्रीनशॉट और इमेज क्रॉप करें'
          }
        ]
      },

      faq: {
        title: 'अक्सर पूछे जाने वाले प्रश्न',
        items: [
          {
            question: 'कौन से इमेज फॉर्मेट सपोर्टेड हैं?',
            answer: 'आप JPG, PNG, WEBP, और अधिकांश सामान्य इमेज फॉर्मेट अपलोड कर सकते हैं। क्रॉप की गई इमेज को JPG, PNG, या WEBP के रूप में सेव किया जा सकता है।'
          },
          {
            question: 'क्या फाइल साइज़ की कोई लिमिट है?',
            answer: 'नहीं, कोई फाइल साइज़ लिमिट नहीं है। हालांकि, बहुत बड़ी इमेज को आपके डिवाइस के आधार पर प्रोसेस होने में अधिक समय लग सकता है।'
          },
          {
            question: 'आस्पेक्ट रेशियो प्रीसेट क्या हैं?',
            answer: 'आस्पेक्ट रेशियो प्रीसेट आपको स्टैंडर्ड डाइमेंशन में इमेज क्रॉप करने में मदद करते हैं: 1:1 (स्क्वायर), 16:9 (वाइडस्क्रीन), 9:16 (पोर्ट्रेट), 4:3 (फोटो), 21:9 (अल्ट्रावाइड)। कस्टम डाइमेंशन के लिए "फ्री" चुनें।'
          },
          {
            question: 'क्या मैं एक साथ कई इमेज क्रॉप कर सकता हूं?',
            answer: 'वर्तमान में, आप एक बार में एक इमेज क्रॉप कर सकते हैं। बैच प्रोसेसिंग के लिए, आप एक-एक करके इमेज क्रॉप कर सकते हैं और प्रत्येक रिजल्ट डाउनलोड कर सकते हैं।'
          },
          {
            question: 'क्या मेरी इमेज सर्वर पर अपलोड होती हैं?',
            answer: 'नहीं, सभी इमेज प्रोसेसिंग आपके ब्राउज़र में लोकली होती है। आपकी इमेज कभी भी आपके डिवाइस को नहीं छोड़तीं, जो पूर्ण प्राइवेसी और सिक्योरिटी सुनिश्चित करती है।'
          },
          {
            question: 'मैं एक्जैक्ट पिक्सेल डाइमेंशन में कैसे क्रॉप करूं?',
            answer: 'क्रॉप एरिया सिलेक्ट करने के बाद, आप एक्जैक्ट डाइमेंशन देख सकते हैं। अपने वांछित पिक्सेल साइज़ को प्राप्त करने के लिए कॉर्नर या एज को ड्रैग करके सिलेक्शन को एडजस्ट करें।'
          }
        ]
      },

      seoContent: {
        mainTitle: 'प्रोफेशनल इमेज क्रॉपिंग को आसान बनाया गया',
        intro: 'हमारा फ्री ऑनलाइन इमेज क्रॉप टूल आपको सटीकता के साथ अपनी फोटो को ट्रिम, रीसाइज़ और परफेक्ट करने में मदद करता है। चाहे आपको सोशल मीडिया के लिए इमेज क्रॉप करनी हो, प्रोफाइल पिक्चर बनानी हो, या अपनी वेबसाइट के लिए फोटो तैयार करनी हो, हमारा टूल इसे सिंपल और फास्ट बनाता है। आप ऑप्टिमल वेब परफॉर्मेंस के लिए <a href="/tools/image-resizer">इमेज रीसाइज़</a> या <a href="/tools/image-compressor">इमेज कंप्रेस</a> भी कर सकते हैं।',
        sections: [
          {
            title: 'हमारे इमेज क्रॉप टूल का उपयोग क्यों करें?',
            content: 'विज़ुअली अपीलिंग कंटेंट बनाने के लिए इमेज क्रॉप करना आवश्यक है। हमारा टूल इंट्यूटिव इंटरफेस के साथ प्रोफेशनल-ग्रेड क्रॉपिंग फीचर्स प्रदान करता है। कस्टम क्रॉप एरिया सिलेक्ट करें, आस्पेक्ट रेशियो प्रीसेट का उपयोग करें, और लाइव प्रीव्यू देखें - सब कुछ बिना अपनी इमेज को किसी सर्वर पर अपलोड किए।',
            keywords: ['image crop tool', 'online photo cropper', 'crop images free']
          },
          {
            title: 'हर जरूरत के लिए आस्पेक्ट रेशियो प्रीसेट',
            content: 'पॉपुलर आस्पेक्ट रेशियो प्रीसेट में से चुनें: Instagram पोस्ट और प्रोफाइल पिक्चर के लिए 1:1, YouTube थंबनेल और वाइडस्क्रीन डिस्प्ले के लिए 16:9, Instagram Stories और TikTok के लिए 9:16, ट्रेडिशनल फोटो के लिए 4:3, और अल्ट्रावाइड डिस्प्ले के लिए 21:9। या पूर्ण लचीलेपन के लिए फ्री क्रॉप मोड का उपयोग करें।',
            keywords: ['aspect ratio crop', 'crop image 16:9', 'square crop 1:1']
          },
          {
            title: 'प्राइवेसी और सिक्योरिटी',
            content: 'आपकी प्राइवेसी हमारी प्राथमिकता है। सभी इमेज प्रोसेसिंग HTML5 Canvas API का उपयोग करके सीधे आपके ब्राउज़र में होती है। आपकी इमेज कभी भी हमारे सर्वर पर अपलोड नहीं होतीं, जो पूर्ण सिक्योरिटी और प्राइवेसी सुनिश्चित करती है। इसका मतलब तेज़ प्रोसेसिंग और कोई फाइल साइज़ लिमिट नहीं भी है।',
            keywords: ['secure image crop', 'private photo cropper', 'browser-based crop tool']
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
      uploadButton: 'Upload Image',
      uploadHint: 'Click or drag image here',
      processing: 'Processing...',
      cropButton: 'Crop Image',
      downloadButton: 'Download Cropped Image',
      resetButton: 'Reset Crop',
      aspectRatioLabel: 'Aspect Ratio:',
      dimensionsLabel: 'Crop Dimensions:',
      selectAreaHint: 'Drag on the image to select crop area',
      securityNote: '🔒 Your images are processed locally. We never upload your files.'
    },
    hi: {
      uploadButton: 'इमेज अपलोड करें',
      uploadHint: 'इमेज यहां क्लिक करें या ड्रैग करें',
      processing: 'प्रोसेस हो रहा है...',
      cropButton: 'इमेज क्रॉप करें',
      downloadButton: 'क्रॉप की गई इमेज डाउनलोड करें',
      resetButton: 'क्रॉप रीसेट करें',
      aspectRatioLabel: 'आस्पेक्ट रेशियो:',
      dimensionsLabel: 'क्रॉप डाइमेंशन:',
      selectAreaHint: 'क्रॉप एरिया सिलेक्ट करने के लिए इमेज पर ड्रैग करें',
      securityNote: '🔒 आपकी इमेज लोकली प्रोसेस होती हैं। हम कभी भी आपकी फाइलें अपलोड नहीं करते।'
    }
  },

  // ============================================================================
  // 6. VALIDATION (Required)
  // ============================================================================
  validation: {
    maxFileSize: 50 * 1024 * 1024, // 50MB
    allowedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    minDimensions: { width: 10, height: 10 },
    maxDimensions: { width: 10000, height: 10000 }
  },

  // ============================================================================
  // 7. SETTINGS (Optional)
  // ============================================================================
  settings: {
    defaultAspectRatio: 'free',
    defaultOutputFormat: 'image/png',
    defaultQuality: 0.95,
    aspectRatios: [
      { id: 'free', label: 'Free', ratio: null },
      { id: 'square', label: '1:1 (Square)', ratio: 1 },
      { id: 'landscape', label: '16:9 (Landscape)', ratio: 16 / 9 },
      { id: 'portrait', label: '9:16 (Portrait)', ratio: 9 / 16 },
      { id: 'photo', label: '4:3 (Photo)', ratio: 4 / 3 },
      { id: 'widescreen', label: '21:9 (Widescreen)', ratio: 21 / 9 }
    ]
  }
};

export default imageCropConfig;

