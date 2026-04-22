/**
 * Image Category Configuration
 * Config for /tools/image category page
 */

export const imageCategoryConfig = {
  id: 'image',
  
  // SEO Metadata
  seo: {
    en: {
      title: 'Free Image Tools Online | Resize, Compress, Convert Images',
      description: 'Free online image tools. Resize images to 20KB, 50KB, 100KB. Compress, crop, and convert images instantly. No signup required.',
      keywords: 'image tools, resize image, compress image, image converter, free image tools',
      canonical: 'https://freetools.com/tools/image'
    },
    hi: {
      title: 'फ्री इमेज टूल्स ऑनलाइन | इमेज रीसाइज़, कंप्रेस, कन्वर्ट करें',
      description: 'फ्री ऑनलाइन इमेज टूल्स। इमेज को 20KB, 50KB, 100KB में रीसाइज़ करें। इमेज कंप्रेस, क्रॉप और कन्वर्ट तुरंत करें। साइनअप की ज़रूरत नहीं।',
      keywords: 'image tools, resize image, compress image, image converter, free image tools',
      canonical: 'https://freetools.com/tools/image'
    }
  },

  // Hero Section
  hero: {
    en: {
      title: 'Free Image Tools',
      subtitle: 'Resize, compress, crop, and convert images instantly. All processing happens in your browser.',
      benefits: [
        { icon: '⚡', text: 'Instant processing' },
        { icon: '🔒', text: '100% Private' },
        { icon: '📱', text: 'Mobile friendly' },
        { icon: '🆓', text: 'Completely free' }
      ]
    },
    hi: {
      title: 'फ्री इमेज टूल्स',
      subtitle: 'इमेज रीसाइज़, कंप्रेस, क्रॉप और कन्वर्ट तुरंत करें। सभी प्रोसेसिंग आपके ब्राउज़र में होती है।',
      benefits: [
        { icon: '⚡', text: 'तुरंत प्रोसेसिंग' },
        { icon: '🔒', text: '100% प्राइवेट' },
        { icon: '📱', text: 'मोबाइल फ्रेंडली' },
        { icon: '🆓', text: 'पूरी तरह फ्री' }
      ]
    }
  },

  // SEO Content Section
  seoContent: {
    en: {
      mainTitle: 'Professional Image Tools for Every Need',
      intro: 'Our comprehensive suite of image tools helps you resize, compress, crop, and convert images with ease. Whether you need to <a href="/tools/resize-image">resize photos for social media</a>, <a href="/tools/image-compressor">compress images for web optimization</a>, or <a href="/tools/image-crop">crop images to custom dimensions</a>, our tools provide professional results instantly.',
      
      sections: [
        {
          title: 'Image Resizer',
          content: 'Resize images to exact dimensions or target file sizes (20KB, 50KB, 100KB). Perfect for passport photos, government forms, and website optimization. Maintains quality while reducing size.',
          keywords: 'resize image, image resizer, reduce image size'
        },
        {
          title: 'Image Compressor',
          content: 'Compress images up to 90% smaller without noticeable quality loss. Ideal for website optimization, email attachments, and storage management. Supports JPG, PNG, and WEBP formats.',
          keywords: 'compress image, image compressor, reduce file size'
        },
        {
          title: 'Image Cropper',
          content: 'Crop images to any size or aspect ratio. Perfect for social media posts, profile pictures, and custom dimensions. Precise control with visual preview.',
          keywords: 'crop image, image cropper, cut image'
        }
      ]
    },
    hi: {
      mainTitle: 'हर ज़रूरत के लिए प्रोफेशनल इमेज टूल्स',
      intro: 'हमारे इमेज टूल्स का कॉम्प्रिहेंसिव सूट आपको इमेज रीसाइज़, कंप्रेस, क्रॉप और कन्वर्ट करने में आसानी से मदद करता है। चाहे आपको <a href="/tools/resize-image">सोशल मीडिया के लिए फोटो रीसाइज़</a> करना हो, <a href="/tools/image-compressor">वेब ऑप्टिमाइज़ेशन के लिए इमेज कंप्रेस</a> करना हो, या <a href="/tools/image-crop">कस्टम डाइमेंशन में इमेज क्रॉप</a> करना हो, हमारे टूल्स तुरंत प्रोफेशनल रिज़ल्ट देते हैं।',
      
      sections: [
        {
          title: 'इमेज रीसाइज़र',
          content: 'इमेज को एक्ज़ैक्ट डाइमेंशन या टारगेट फाइल साइज़ (20KB, 50KB, 100KB) में रीसाइज़ करें। पासपोर्ट फोटो, सरकारी फॉर्म और वेबसाइट ऑप्टिमाइज़ेशन के लिए परफेक्ट। साइज़ कम करते हुए क्वालिटी बनाए रखता है।',
          keywords: 'resize image, image resizer, image size kam kare'
        },
        {
          title: 'इमेज कंप्रेसर',
          content: 'बिना क्वालिटी कम किए इमेज को 90% तक छोटा करें। वेबसाइट ऑप्टिमाइज़ेशन, ईमेल अटैचमेंट और स्टोरेज मैनेजमेंट के लिए आइडियल। JPG, PNG और WEBP फॉर्मेट सपोर्ट करता है।',
          keywords: 'compress image, image compressor, file size kam kare'
        },
        {
          title: 'इमेज क्रॉपर',
          content: 'इमेज को किसी भी साइज़ या आस्पेक्ट रेशियो में क्रॉप करें। सोशल मीडिया पोस्ट, प्रोफाइल पिक्चर और कस्टम डाइमेंशन के लिए परफेक्ट। विज़ुअल प्रीव्यू के साथ सटीक कंट्रोल।',
          keywords: 'crop image, image cropper, image cut kare'
        }
      ]
    }
  },

  // FAQ Section
  faq: {
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Are these image tools really free?',
          answer: 'Yes! All our image tools are completely free to use. No registration, no hidden fees, no watermarks. Use them as many times as you want.'
        },
        {
          question: 'Is it safe to upload images?',
          answer: 'Absolutely safe! All image processing happens entirely in your browser using JavaScript. Your images never leave your device or get uploaded to any server.'
        },
        {
          question: 'What image formats are supported?',
          answer: 'Our tools support the most common image formats: JPG, JPEG, PNG, and WEBP. You can upload images up to 10MB in size.'
        },
        {
          question: 'Can I use these tools on mobile?',
          answer: 'Yes! All our image tools are fully mobile-optimized and work perfectly on smartphones, tablets, and desktops.'
        },
        {
          question: 'How do I resize an image to exact KB size?',
          answer: 'Use our Image Resizer tool, select "By File Size" mode, and enter your target size in KB (like 20, 50, or 100). The tool will automatically adjust dimensions and quality to meet your target.'
        }
      ]
    },
    hi: {
      title: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        {
          question: 'क्या ये इमेज टूल्स वाकई फ्री हैं?',
          answer: 'हाँ! हमारे सभी इमेज टूल्स इस्तेमाल करने के लिए पूरी तरह फ्री हैं। कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं। जितनी बार चाहें इस्तेमाल करें।'
        },
        {
          question: 'इमेज अपलोड करना सेफ है?',
          answer: 'बिल्कुल सेफ! सभी इमेज प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपकी इमेज कभी आपके डिवाइस से बाहर नहीं जातीं या किसी सर्वर पर अपलोड नहीं होतीं।'
        },
        {
          question: 'कौन से इमेज फॉर्मेट सपोर्ट होते हैं?',
          answer: 'हमारे टूल्स सबसे कॉमन इमेज फॉर्मेट सपोर्ट करते हैं: JPG, JPEG, PNG और WEBP। आप 10MB तक की इमेज अपलोड कर सकते हैं।'
        },
        {
          question: 'क्या मैं इन टूल्स को मोबाइल पर इस्तेमाल कर सकता हूँ?',
          answer: 'हाँ! हमारे सभी इमेज टूल्स पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड हैं और स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करते हैं।'
        },
        {
          question: 'इमेज को एक्ज़ैक्ट KB साइज़ में कैसे रीसाइज़ करें?',
          answer: 'हमारा इमेज रीसाइज़र टूल इस्तेमाल करें, "By File Size" मोड सेलेक्ट करें, और अपना टारगेट साइज़ KB में एंटर करें (जैसे 20, 50 या 100)। टूल ऑटोमैटिकली डाइमेंशन और क्वालिटी एडजस्ट करेगा।'
        }
      ]
    }
  }
}

