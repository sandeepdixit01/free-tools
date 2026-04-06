/**
 * Developer Category Configuration
 * Config for /tools/developer category page
 */

export const developerCategoryConfig = {
  id: 'developer',
  
  // SEO Metadata
  seo: {
    en: {
      title: 'Free Developer Tools Online | JSON Formatter, Base64 Encoder, URL Encoder',
      description: 'Free online developer tools. Format JSON, encode/decode Base64, URL encoding, color picker, and more. No signup required.',
      keywords: 'developer tools, json formatter, base64 encoder, url encoder, color picker, free dev tools',
      canonical: 'https://freetools.com/tools/developer'
    },
    hi: {
      title: 'फ्री डेवलपर टूल्स ऑनलाइन | JSON फॉर्मेटर, Base64 एनकोडर, URL एनकोडर',
      description: 'फ्री ऑनलाइन डेवलपर टूल्स। JSON फॉर्मेट करें, Base64 एनकोड/डीकोड करें, URL एनकोडिंग, कलर पिकर और बहुत कुछ। साइनअप की ज़रूरत नहीं।',
      keywords: 'developer tools, json formatter, base64 encoder, url encoder, color picker, free dev tools',
      canonical: 'https://freetools.com/tools/developer'
    }
  },

  // Hero Section
  hero: {
    en: {
      title: 'Free Developer Tools',
      subtitle: 'Format, encode, decode, and convert data instantly. Essential tools for developers and programmers.',
      benefits: [
        { icon: '⚡', text: 'Instant results' },
        { icon: '🔒', text: '100% Private' },
        { icon: '📱', text: 'Mobile friendly' },
        { icon: '🆓', text: 'Completely free' }
      ]
    },
    hi: {
      title: 'फ्री डेवलपर टूल्स',
      subtitle: 'डेटा फॉर्मेट, एनकोड, डीकोड और कन्वर्ट तुरंत करें। डेवलपर्स और प्रोग्रामर्स के लिए ज़रूरी टूल्स।',
      benefits: [
        { icon: '⚡', text: 'तुरंत रिज़ल्ट' },
        { icon: '🔒', text: '100% प्राइवेट' },
        { icon: '📱', text: 'मोबाइल फ्रेंडली' },
        { icon: '🆓', text: 'पूरी तरह फ्री' }
      ]
    }
  },

  // SEO Content Section
  seoContent: {
    en: {
      mainTitle: 'Essential Developer Tools for Modern Development',
      intro: 'Our comprehensive suite of developer tools helps you format, encode, decode, and convert data with ease. Whether you need to format JSON for debugging, encode Base64 for APIs, or pick colors for design, our tools provide instant results.',
      
      sections: [
        {
          title: 'JSON Formatter',
          content: 'Format, validate, and beautify JSON data. Perfect for debugging APIs, viewing configuration files, and working with JSON responses. Syntax highlighting and error detection included.',
          keywords: 'json formatter, json validator, format json'
        },
        {
          title: 'Base64 Encoder/Decoder',
          content: 'Encode and decode Base64 strings instantly. Essential for working with APIs, email attachments, and data URIs. Supports text and file encoding.',
          keywords: 'base64 encoder, base64 decoder, encode base64'
        },
        {
          title: 'URL Encoder/Decoder',
          content: 'Encode and decode URLs safely. Perfect for creating query strings, handling special characters, and working with web APIs. Follows RFC 3986 standards.',
          keywords: 'url encoder, url decoder, encode url'
        },
        {
          title: 'Color Picker',
          content: 'Pick colors and convert between HEX, RGB, HSL, and other formats. Perfect for web design, CSS styling, and creating color palettes. Includes color harmony suggestions.',
          keywords: 'color picker, hex to rgb, color converter'
        }
      ]
    },
    hi: {
      mainTitle: 'मॉडर्न डेवलपमेंट के लिए ज़रूरी डेवलपर टूल्स',
      intro: 'हमारे डेवलपर टूल्स का कॉम्प्रिहेंसिव सूट आपको डेटा फॉर्मेट, एनकोड, डीकोड और कन्वर्ट करने में आसानी से मदद करता है। चाहे आपको डीबगिंग के लिए JSON फॉर्मेट करना हो, API के लिए Base64 एनकोड करना हो, या डिज़ाइन के लिए कलर पिक करना हो, हमारे टूल्स तुरंत रिज़ल्ट देते हैं।',
      
      sections: [
        {
          title: 'JSON फॉर्मेटर',
          content: 'JSON डेटा फॉर्मेट, वैलिडेट और ब्यूटिफाई करें। API डीबगिंग, कॉन्फिगरेशन फाइल देखने और JSON रिस्पॉन्स के साथ काम करने के लिए परफेक्ट। सिंटैक्स हाइलाइटिंग और एरर डिटेक्शन शामिल है।',
          keywords: 'json formatter, json validator, json format kare'
        },
        {
          title: 'Base64 एनकोडर/डीकोडर',
          content: 'Base64 स्ट्रिंग तुरंत एनकोड और डीकोड करें। API, ईमेल अटैचमेंट और डेटा URI के साथ काम करने के लिए ज़रूरी। टेक्स्ट और फाइल एनकोडिंग सपोर्ट करता है।',
          keywords: 'base64 encoder, base64 decoder, base64 encode kare'
        },
        {
          title: 'URL एनकोडर/डीकोडर',
          content: 'URL को सुरक्षित रूप से एनकोड और डीकोड करें। क्वेरी स्ट्रिंग बनाने, स्पेशल कैरेक्टर हैंडल करने और वेब API के साथ काम करने के लिए परफेक्ट। RFC 3986 स्टैंडर्ड फॉलो करता है।',
          keywords: 'url encoder, url decoder, url encode kare'
        },
        {
          title: 'कलर पिकर',
          content: 'कलर पिक करें और HEX, RGB, HSL और अन्य फॉर्मेट के बीच कन्वर्ट करें। वेब डिज़ाइन, CSS स्टाइलिंग और कलर पैलेट बनाने के लिए परफेक्ट। कलर हार्मनी सजेशन शामिल हैं।',
          keywords: 'color picker, hex to rgb, color converter'
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
          question: 'Are these developer tools really free?',
          answer: 'Yes! All our developer tools are completely free to use. No registration, no hidden fees. Use them as many times as you want.'
        },
        {
          question: 'Is my data safe?',
          answer: 'Absolutely safe! All processing happens entirely in your browser using JavaScript. Your data never leaves your device or gets uploaded to any server.'
        },
        {
          question: 'Can I use these tools on mobile?',
          answer: 'Yes! All our developer tools are fully mobile-optimized and work perfectly on smartphones, tablets, and desktops.'
        },
        {
          question: 'Does the JSON formatter validate syntax?',
          answer: 'Yes! Our JSON formatter automatically validates syntax and highlights errors. It helps you identify and fix JSON formatting issues quickly.'
        },
        {
          question: 'What encoding standards do you support?',
          answer: 'We support industry-standard encoding: Base64 (RFC 4648), URL encoding (RFC 3986), and UTF-8 character encoding.'
        }
      ]
    },
    hi: {
      title: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        {
          question: 'क्या ये डेवलपर टूल्स वाकई फ्री हैं?',
          answer: 'हाँ! हमारे सभी डेवलपर टूल्स इस्तेमाल करने के लिए पूरी तरह फ्री हैं। कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं। जितनी बार चाहें इस्तेमाल करें।'
        },
        {
          question: 'क्या मेरा डेटा सेफ है?',
          answer: 'बिल्कुल सेफ! सभी प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता।'
        },
        {
          question: 'क्या मैं इन टूल्स को मोबाइल पर इस्तेमाल कर सकता हूँ?',
          answer: 'हाँ! हमारे सभी डेवलपर टूल्स पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड हैं और स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करते हैं।'
        },
        {
          question: 'क्या JSON फॉर्मेटर सिंटैक्स वैलिडेट करता है?',
          answer: 'हाँ! हमारा JSON फॉर्मेटर ऑटोमैटिकली सिंटैक्स वैलिडेट करता है और एरर हाइलाइट करता है। यह आपको JSON फॉर्मेटिंग इश्यू जल्दी आइडेंटिफाई और फिक्स करने में मदद करता है।'
        },
        {
          question: 'आप कौन से एनकोडिंग स्टैंडर्ड सपोर्ट करते हैं?',
          answer: 'हम इंडस्ट्री-स्टैंडर्ड एनकोडिंग सपोर्ट करते हैं: Base64 (RFC 4648), URL encoding (RFC 3986), और UTF-8 character encoding।'
        }
      ]
    }
  }
}

