/**
 * Image Resizer UI Text Configuration
 * Bilingual UI text for all components
 */

export const imageResizerUIText = {
  en: {
    upload: {
      dragText: 'Drag & drop images here',
      orText: 'or',
      buttonText: 'Choose Files',
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
      orText: 'या',
      buttonText: 'फाइलें चुनें',
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
};

