/**
 * Text Category Configuration
 * Config for /tools/text category page
 */

import { getCategoryCanonicalUrl } from '../../utils/urlHelper.js';

export const textCategoryConfig = {
  id: 'text',
  
  // SEO Metadata
  seo: {
    en: {
      title: 'Free Text Tools Online | Word Counter, Case Converter, Text Formatter',
      description: 'Free online text tools. Count words and characters, convert text case, format text, and analyze content. No signup required.',
      keywords: 'text tools, word counter, case converter, text formatter, free text tools',
      canonical: getCategoryCanonicalUrl('text', 'en')
    },
    hi: {
      title: 'फ्री टेक्स्ट टूल्स ऑनलाइन | वर्ड काउंटर, केस कन्वर्टर, टेक्स्ट फॉर्मेटर',
      description: 'फ्री ऑनलाइन टेक्स्ट टूल्स। शब्द और कैरेक्टर गिनें, टेक्स्ट केस कन्वर्ट करें, टेक्स्ट फॉर्मेट करें और कंटेंट एनालाइज़ करें। साइनअप की ज़रूरत नहीं।',
      keywords: 'text tools, word counter, case converter, text formatter, free text tools',
      canonical: getCategoryCanonicalUrl('text', 'en')
    }
  },

  // Hero Section
  hero: {
    en: {
      title: 'Free Text Tools',
      subtitle: 'Count words, convert case, format text, and analyze content instantly. All processing happens in your browser.',
      benefits: [
        { icon: '⚡', text: 'Instant results' },
        { icon: '🔒', text: '100% Private' },
        { icon: '📱', text: 'Mobile friendly' },
        { icon: '🆓', text: 'Completely free' }
      ]
    },
    hi: {
      title: 'फ्री टेक्स्ट टूल्स',
      subtitle: 'शब्द गिनें, केस कन्वर्ट करें, टेक्स्ट फॉर्मेट करें और कंटेंट एनालाइज़ तुरंत करें। सभी प्रोसेसिंग आपके ब्राउज़र में होती है।',
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
      mainTitle: 'Professional Text Tools for Writers and Content Creators',
      intro: 'Our comprehensive suite of text tools helps you analyze, format, and transform text with ease. Whether you need to <a href="/tools/word-counter">count words for an essay</a>, <a href="/tools/text-case-converter">convert text case for consistency</a>, or <a href="/tools/character-counter">analyze character count</a>, our tools provide instant results.',
      
      sections: [
        {
          title: 'Word Counter',
          content: 'Count words, characters, sentences, and paragraphs in real-time. Perfect for essays, articles, social media posts, and content with word limits. Shows reading time and keyword density.',
          keywords: 'word counter, character counter, count words'
        },
        {
          title: 'Text Case Converter',
          content: 'Convert text to uppercase, lowercase, title case, sentence case, or alternating case. Ideal for fixing formatting issues, creating consistent headings, and preparing content for publication.',
          keywords: 'case converter, uppercase, lowercase, title case'
        }
      ]
    },
    hi: {
      mainTitle: 'लेखकों और कंटेंट क्रिएटर्स के लिए प्रोफेशनल टेक्स्ट टूल्स',
      intro: 'हमारे टेक्स्ट टूल्स का कॉम्प्रिहेंसिव सूट आपको टेक्स्ट एनालाइज़, फॉर्मेट और ट्रांसफॉर्म करने में आसानी से मदद करता है। चाहे आपको <a href="/tools/word-counter">निबंध के लिए शब्द गिनने</a> हों, <a href="/tools/text-case-converter">कंसिस्टेंसी के लिए टेक्स्ट केस कन्वर्ट</a> करना हो, या <a href="/tools/character-counter">कैरेक्टर काउंट एनालाइज़</a> करना हो, हमारे टूल्स तुरंत रिज़ल्ट देते हैं।',
      
      sections: [
        {
          title: 'वर्ड काउंटर',
          content: 'रियल-टाइम में शब्द, कैरेक्टर, सेंटेंस और पैराग्राफ गिनें। निबंध, आर्टिकल, सोशल मीडिया पोस्ट और वर्ड लिमिट वाले कंटेंट के लिए परफेक्ट। रीडिंग टाइम और कीवर्ड डेंसिटी दिखाता है।',
          keywords: 'word counter, character counter, shabd gine'
        },
        {
          title: 'टेक्स्ट केस कन्वर्टर',
          content: 'टेक्स्ट को uppercase, lowercase, title case, sentence case या alternating case में कन्वर्ट करें। फॉर्मेटिंग इश्यू फिक्स करने, कंसिस्टेंट हेडिंग बनाने और पब्लिकेशन के लिए कंटेंट तैयार करने के लिए आइडियल।',
          keywords: 'case converter, uppercase, lowercase, title case'
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
          question: 'Are these text tools really free?',
          answer: 'Yes! All our text tools are completely free to use. No registration, no hidden fees. Use them as many times as you want.'
        },
        {
          question: 'Is my text data safe?',
          answer: 'Absolutely safe! All text processing happens entirely in your browser using JavaScript. Your text never leaves your device or gets uploaded to any server.'
        },
        {
          question: 'Can I use these tools on mobile?',
          answer: 'Yes! All our text tools are fully mobile-optimized and work perfectly on smartphones, tablets, and desktops.'
        },
        {
          question: 'How accurate is the word counter?',
          answer: 'Our word counter is highly accurate and follows standard word counting rules. It counts words separated by spaces and excludes extra whitespace.'
        },
        {
          question: 'What text formats are supported?',
          answer: 'Our tools work with plain text. You can paste text from any source including Word documents, PDFs, websites, and text editors.'
        }
      ]
    },
    hi: {
      title: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        {
          question: 'क्या ये टेक्स्ट टूल्स वाकई फ्री हैं?',
          answer: 'हाँ! हमारे सभी टेक्स्ट टूल्स इस्तेमाल करने के लिए पूरी तरह फ्री हैं। कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं। जितनी बार चाहें इस्तेमाल करें।'
        },
        {
          question: 'क्या मेरा टेक्स्ट डेटा सेफ है?',
          answer: 'बिल्कुल सेफ! सभी टेक्स्ट प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका टेक्स्ट कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता।'
        },
        {
          question: 'क्या मैं इन टूल्स को मोबाइल पर इस्तेमाल कर सकता हूँ?',
          answer: 'हाँ! हमारे सभी टेक्स्ट टूल्स पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड हैं और स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करते हैं।'
        },
        {
          question: 'वर्ड काउंटर कितना एक्यूरेट है?',
          answer: 'हमारा वर्ड काउंटर बहुत एक्यूरेट है और स्टैंडर्ड वर्ड काउंटिंग रूल्स फॉलो करता है। यह स्पेस से सेपरेट शब्द गिनता है और एक्स्ट्रा व्हाइटस्पेस एक्सक्लूड करता है।'
        },
        {
          question: 'कौन से टेक्स्ट फॉर्मेट सपोर्ट होते हैं?',
          answer: 'हमारे टूल्स प्लेन टेक्स्ट के साथ काम करते हैं। आप Word डॉक्यूमेंट, PDF, वेबसाइट और टेक्स्ट एडिटर सहित किसी भी सोर्स से टेक्स्ट पेस्ट कर सकते हैं।'
        }
      ]
    }
  }
}

