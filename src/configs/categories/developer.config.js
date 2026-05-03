/**
 * Developer Category Configuration
 * Config for /tools/developer category page
 */

import { getCategoryCanonicalUrl } from '../../utils/urlHelper.js';

export const developerCategoryConfig = {
  id: 'developer',
  
  // SEO Metadata
  seo: {
    en: {
      title: 'Free Developer Tools Online | JSON Formatter, Base64, URL & CSV Converter',
      description: 'Free online developer tools including JSON formatter, Base64 encoder/decoder, URL encoder/decoder, and JSON to CSV converter. Format, validate, encode, decode, and convert data instantly. No signup required.',
      keywords: 'developer tools, json formatter, base64 encoder, url encoder, json to csv, base64 decoder, url decoder, csv converter, json validator, format json, encode base64, encode url, convert json to csv, free dev tools',
      canonical: getCategoryCanonicalUrl('developer', 'en')
    },
    hi: {
      title: 'फ्री डेवलपर टूल्स ऑनलाइन | JSON फॉर्मेटर, Base64, URL और CSV कन्वर्टर',
      description: 'JSON फॉर्मेटर, Base64 एनकोडर/डिकोडर, URL एनकोडर/डिकोडर और JSON to CSV कन्वर्टर सहित फ्री ऑनलाइन डेवलपर टूल्स। डेटा तुरंत फॉर्मेट, वैलिडेट, एनकोड, डिकोड और कन्वर्ट करें। साइनअप की ज़रूरत नहीं।',
      keywords: 'developer tools, json formatter, base64 encoder, url encoder, json to csv, base64 decoder, url decoder, csv converter, json validator, json format kare, base64 encode kare, url encode kare, json ko csv me convert kare, free dev tools',
      canonical: getCategoryCanonicalUrl('developer', 'en')
    }
  },

  // Hero Section
  hero: {
    en: {
      title: 'Free Developer Tools',
      subtitle: 'Format, encode, decode, and convert data instantly. JSON formatter, Base64 encoder, URL encoder, and CSV converter for developers.',
      benefits: [
        { icon: '⚡', text: 'Instant results' },
        { icon: '🔒', text: '100% Private' },
        { icon: '📱', text: 'Mobile friendly' },
        { icon: '🆓', text: 'Completely free' }
      ]
    },
    hi: {
      title: 'फ्री डेवलपर टूल्स',
      subtitle: 'डेटा फॉर्मेट, एनकोड, डीकोड और कन्वर्ट तुरंत करें। डेवलपर्स के लिए JSON फॉर्मेटर, Base64 एनकोडर, URL एनकोडर और CSV कन्वर्टर।',
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
      intro: 'Our developer tools help you format JSON, encode/decode Base64, encode/decode URLs, convert JSON to CSV, and work with data efficiently. Perfect for debugging APIs with our <a href="/tools/json-formatter">JSON Formatter</a>, encoding data using <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>, or converting data with <a href="/tools/json-to-csv">JSON to CSV Converter</a>.',
      
      sections: [
        {
          title: 'JSON Formatter & Validator',
          content: 'Format, validate, and beautify JSON data instantly. Perfect for debugging APIs, viewing configuration files, and working with JSON responses. Syntax highlighting and error detection included. Works entirely in your browser for complete privacy.',
          keywords: 'json formatter, json validator, format json, beautify json'
        },
        {
          title: 'Base64 Encoder & Decoder',
          content: 'Encode text to Base64 or decode Base64 strings with full UTF-8 support. Essential for data transmission, API authentication, and embedding binary data in text formats. Handles international characters and emojis correctly. All processing happens in your browser for complete security.',
          keywords: 'base64 encoder, base64 decoder, encode base64, decode base64'
        },
        {
          title: 'URL Encoder & Decoder',
          content: 'Encode URLs for safe transmission or decode URL-encoded strings instantly. Essential for web development, query parameters, and API requests. Handles special characters, spaces, and international characters correctly. All processing happens in your browser for complete privacy.',
          keywords: 'url encoder, url decoder, encode url, decode url, percent encoding'
        },
        {
          title: 'JSON to CSV Converter',
          content: 'Convert JSON data to CSV format instantly with support for nested objects and arrays. Perfect for exporting API responses to spreadsheets, data analysis, and database migrations. Handles complex JSON structures with intelligent flattening using dot notation. All processing happens in your browser for complete privacy.',
          keywords: 'json to csv, json converter, csv converter, export json, json to spreadsheet'
        },
        {
          title: 'Why Use Our Developer Tools?',
          content: 'Our developer tools provide instant processing with validation, error detection, formatting, and conversion. They work completely offline in your browser, ensuring your data remains private. Perfect for developers working with APIs, web development, data transmission, data analysis, and debugging.',
          keywords: 'json tool, json beautifier, json pretty print, base64 tool, url encoding tool, csv converter'
        }
      ]
    },
    hi: {
      mainTitle: 'मॉडर्न डेवलपमेंट के लिए ज़रूरी डेवलपर टूल्स',
      intro: 'हमारे डेवलपर टूल्स आपको JSON फॉर्मेट करने, Base64 एनकोड/डिकोड करने, URL एनकोड/डिकोड करने, JSON को CSV में बदलने और डेटा के साथ कुशलता से काम करने में मदद करते हैं। हमारे <a href="/tools/json-formatter">JSON Formatter</a> से API डीबगिंग, <a href="/tools/base64-encoder-decoder">Base64 Encoder</a> से डेटा एनकोडिंग, या <a href="/tools/json-to-csv">JSON to CSV Converter</a> से डेटा कन्वर्ज़न के लिए परफेक्ट।',
      
      sections: [
        {
          title: 'JSON फॉर्मेटर और वैलिडेटर',
          content: 'JSON डेटा तुरंत फॉर्मेट, वैलिडेट और ब्यूटिफाई करें। API डीबगिंग, कॉन्फिगरेशन फाइल देखने और JSON रिस्पॉन्स के साथ काम करने के लिए परफेक्ट। सिंटैक्स हाइलाइटिंग और एरर डिटेक्शन शामिल है। पूरी प्राइवेसी के लिए पूरी तरह से आपके ब्राउज़र में काम करता है।',
          keywords: 'json formatter, json validator, json format kare, json beautify'
        },
        {
          title: 'Base64 एनकोडर और डिकोडर',
          content: 'फुल UTF-8 सपोर्ट के साथ टेक्स्ट को Base64 में एनकोड करें या Base64 स्ट्रिंग्स डिकोड करें। डेटा ट्रांसमिशन, API ऑथेंटिकेशन और टेक्स्ट फॉर्मेट में बाइनरी डेटा एम्बेड करने के लिए ज़रूरी। इंटरनेशनल कैरेक्टर्स और इमोजी को सही तरीके से हैंडल करता है। पूरी सिक्योरिटी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है।',
          keywords: 'base64 encoder, base64 decoder, base64 encode kare, base64 decode kare'
        },
        {
          title: 'URL एनकोडर और डिकोडर',
          content: 'सुरक्षित ट्रांसमिशन के लिए URL एनकोड करें या URL-एनकोडेड स्ट्रिंग्स तुरंत डिकोड करें। वेब डेवलपमेंट, क्वेरी पैरामीटर्स और API रिक्वेस्ट के लिए ज़रूरी। स्पेशल कैरेक्टर्स, स्पेस और इंटरनेशनल कैरेक्टर्स को सही तरीके से हैंडल करता है। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है।',
          keywords: 'url encoder, url decoder, url encode kare, url decode kare, percent encoding'
        },
        {
          title: 'JSON to CSV कन्वर्टर',
          content: 'नेस्टेड ऑब्जेक्ट्स और ऐरे के सपोर्ट के साथ JSON डेटा को CSV फॉर्मेट में तुरंत बदलें। API रिस्पॉन्स को स्प्रेडशीट में एक्सपोर्ट करने, डेटा एनालिसिस और डेटाबेस माइग्रेशन के लिए परफेक्ट। डॉट नोटेशन का उपयोग करके इंटेलिजेंट फ्लैटनिंग के साथ कॉम्प्लेक्स JSON स्ट्रक्चर्स को हैंडल करता है। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है।',
          keywords: 'json to csv, json converter, csv converter, json export kare, json to spreadsheet'
        },
        {
          title: 'हमारे डेवलपर टूल्स क्यों इस्तेमाल करें?',
          content: 'हमारे डेवलपर टूल्स वैलिडेशन, एरर डिटेक्शन, फॉर्मेटिंग और कन्वर्ज़न के साथ तुरंत प्रोसेसिंग प्रदान करते हैं। ये पूरी तरह से आपके ब्राउज़र में ऑफलाइन काम करते हैं, जिससे आपका डेटा प्राइवेट रहता है। API, वेब डेवलपमेंट, डेटा ट्रांसमिशन, डेटा एनालिसिस और डीबगिंग के साथ काम करने वाले डेवलपर्स के लिए परफेक्ट।',
          keywords: 'json tool, json beautifier, json pretty print, base64 tool, url encoding tool, csv converter'
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
          question: 'Can I format large JSON files?',
          answer: 'Yes! Our JSON formatter can handle large JSON files efficiently. All processing happens in your browser, so performance depends on your device capabilities.'
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
          question: 'क्या मैं बड़ी JSON फाइलें फॉर्मेट कर सकता हूँ?',
          answer: 'हाँ! हमारा JSON फॉर्मेटर बड़ी JSON फाइलों को कुशलता से हैंडल कर सकता है। सभी प्रोसेसिंग आपके ब्राउज़र में होती है, इसलिए परफॉर्मेंस आपके डिवाइस की क्षमताओं पर निर्भर करती है।'
        }
      ]
    }
  }
}

