/**
 * Word Counter Tool Configuration - NEW SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation (imageResizer.config.new.js)
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-03
 */

export const wordCounterConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-03',
    author: 'FreeTools',
    category: 'text',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'word-counter',
  name: {
    en: 'Word Counter',
    hi: 'वर्ड काउंटर'
  },
  slug: 'word-counter',
  description: {
    en: 'Count words, characters, sentences, and paragraphs instantly',
    hi: 'शब्द, कैरेक्टर, सेंटेंस और पैराग्राफ तुरंत गिनें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Word Counter Online | Count Words and Characters Instantly 2024',
      description: 'Count words, characters, sentences, and paragraphs online. Free word counter for essays, articles, and content writing. Instant results.',
      keywords: {
        primary: [
          'word counter online',
          'count words and characters',
          'word count checker'
        ],
        longTail: [
          'word counter online free',
          'count words characters sentences',
          'essay word counter tool',
          'reading time calculator online',
          'character counter with spaces'
        ],
        secondary: [
          'count words and characters',
          'word count checker',
          'character counter with spaces',
          'sentence and paragraph counter',
          'essay word counter',
          'reading time calculator'
        ]
      },
      canonical: 'https://freetools.com/tools/word-counter',
      ogImage: '/images/tools/word-counter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Word Counter',
        description: 'Free online word and character counter',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    },
    hi: {
      title: 'वर्ड काउंटर ऑनलाइन | शब्द और कैरेक्टर तुरंत गिनें 2024',
      description: 'शब्द, कैरेक्टर, सेंटेंस और पैराग्राफ ऑनलाइन गिनें। निबंध, आर्टिकल और कंटेंट राइटिंग के लिए फ्री वर्ड काउंटर। तुरंत रिज़ल्ट।',
      keywords: {
        primary: [
          'word counter online',
          'shabd aur character gine',
          'word count checker'
        ],
        longTail: [
          'word counter online free hindi',
          'shabd character sentence gine',
          'essay word counter hindi',
          'reading time calculator hindi',
          'character counter with spaces hindi'
        ],
        secondary: [
          'shabd aur character gine',
          'word count checker',
          'character counter with spaces',
          'sentence aur paragraph counter',
          'essay word counter',
          'reading time calculator'
        ]
      },
      canonical: 'https://freetools.com/hi/tools/word-counter',
      ogImage: '/images/tools/word-counter-og.jpg',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'वर्ड काउंटर',
        description: 'फ्री ऑनलाइन वर्ड और कैरेक्टर काउंटर',
        applicationCategory: 'UtilityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Word Counter',
        subtitle: 'Instantly count words, characters, sentences, paragraphs, and calculate reading time. Perfect for writers, students, and content creators.',
        benefits: [
          { icon: '⚡', text: 'Real-time counting' },
          { icon: '🔒', text: '100% Private' },
          { icon: '📱', text: 'Mobile friendly' },
          { icon: '🆓', text: 'Completely free' }
        ],
        cta: {
          primary: 'Start Counting',
          secondary: 'Learn More'
        },
        privacyNotice: 'All text processing happens in your browser. Your content never leaves your device.',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'Why Use Our Word Counter?',
        subtitle: 'Comprehensive text analysis tools for writers and content creators',
        items: [
          {
            icon: '📊',
            title: 'Complete Text Statistics',
            description: 'Get word count, character count (with/without spaces), sentence count, paragraph count, and reading time'
          },
          {
            icon: '⚡',
            title: 'Real-Time Counting',
            description: 'See results update instantly as you type or paste text'
          },
          {
            icon: '🔒',
            title: '100% Private & Secure',
            description: 'All processing happens in your browser. Your text never leaves your device'
          },
          {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Works perfectly on smartphones, tablets, and desktops'
          },
          {
            icon: '📖',
            title: 'Reading Time Calculator',
            description: 'Estimates reading time based on average reading speed (~200 words per minute)'
          },
          {
            icon: '🎯',
            title: 'Perfect for Writers',
            description: 'Ideal for essays, articles, blog posts, social media, and any content with word limits'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use This Tool',
        subtitle: 'Simple steps to count your text',
        steps: [
          {
            number: 1,
            title: 'Enter or Paste Your Text',
            description: 'Type directly into the text area or paste your content from any source (Word, Google Docs, websites, etc.).',
            icon: '📝'
          },
          {
            number: 2,
            title: 'View Real-Time Results',
            description: 'See instant statistics including word count, character count (with and without spaces), sentence count, and paragraph count.',
            icon: '📊'
          },
          {
            number: 3,
            title: 'Check Reading Time',
            description: 'View estimated reading time based on average reading speed of 200 words per minute.',
            icon: '⏱️'
          },
          {
            number: 4,
            title: 'Edit and Refine',
            description: 'Make changes to your text and watch the statistics update in real-time to meet your requirements.',
            icon: '✏️'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'For Essays',
            description: 'Use word count to ensure you meet minimum/maximum requirements'
          },
          {
            icon: '📱',
            title: 'For Social Media',
            description: 'Check character count to stay within platform limits (Twitter, Instagram, etc.)'
          },
          {
            icon: '📖',
            title: 'For Blog Posts',
            description: 'Use reading time to gauge content length and reader engagement'
          },
          {
            icon: '✍️',
            title: 'For Content Writing',
            description: 'Monitor sentence and paragraph count for better readability'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Word Counting and Text Analysis',
        intro: 'This free online word counter helps you analyze text instantly. Count words, characters (with and without spaces), sentences, paragraphs, and calculate reading time. Perfect for students writing essays, content creators managing word limits, writers tracking progress, and anyone who needs accurate text statistics. All processing happens in your browser for complete privacy. You can also use our <a href="/tools/character-counter">Character Counter</a> or <a href="/tools/text-case-converter">Text Case Converter</a> for more text tools.',
        sections: [
          {
            title: 'Word Counter for Essays and Academic Writing',
            content: 'Students and academics need precise word counts to meet assignment requirements. Our tool provides accurate word counting that follows standard academic conventions. Whether you\'re writing a 500-word essay, 2000-word research paper, or dissertation, get instant word counts to ensure you meet minimum and maximum requirements. The tool also counts sentences and paragraphs to help maintain proper structure.',
            keywords: ['word counter for essays', 'academic word count', 'essay word counter']
          },
          {
            title: 'Character Counter for Social Media',
            content: 'Social media platforms have strict character limits. Twitter allows 280 characters, Instagram captions work best under 2200 characters, and Facebook posts are optimal at 40-80 characters. Our character counter shows both character count with spaces and without spaces, helping you craft perfect posts that fit platform requirements while maximizing engagement.',
            keywords: ['character counter', 'social media character limit', 'Twitter character count']
          },
          {
            title: 'Reading Time Calculator',
            content: 'Understanding how long content takes to read is crucial for content creators and publishers. Our tool calculates reading time based on the average reading speed of 200 words per minute. This helps you optimize article length for your audience, plan content strategy, and set reader expectations. Perfect for blog posts, articles, and long-form content.',
            keywords: ['reading time calculator', 'article reading time', 'content length estimator']
          },
          {
            title: 'Sentence and Paragraph Counter',
            content: 'Good writing requires proper structure. Our tool counts sentences and paragraphs to help you maintain readability. Ideal sentence length is 15-20 words, and paragraphs should be 3-5 sentences for web content. Use these metrics to improve your writing clarity, break up long blocks of text, and create more engaging content that readers can easily digest.',
            keywords: ['sentence counter', 'paragraph counter', 'text structure analysis']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How accurate is this word counter?',
            answer: 'Our word counter is highly accurate and follows standard word counting conventions. It counts words separated by spaces and handles punctuation correctly. The algorithm is the same used by professional writing tools.',
            category: 'accuracy'
          },
          {
            question: 'Does it count characters with or without spaces?',
            answer: 'Both! Our tool shows character count with spaces and character count without spaces. This is useful for different requirements - some platforms count spaces, others don\'t.',
            category: 'features'
          },
          {
            question: 'How is reading time calculated?',
            answer: 'Reading time is calculated based on an average reading speed of 200 words per minute. This is the standard rate for comfortable reading of general content. Actual reading time may vary based on content complexity and reader proficiency.',
            category: 'features'
          },
          {
            question: 'Is my text data safe and private?',
            answer: 'Absolutely safe! All text processing happens entirely in your browser using JavaScript. Your text never leaves your device or gets uploaded to any server. We have zero access to your content.',
            category: 'privacy'
          },
          {
            question: 'Can I use this for academic essays?',
            answer: 'Yes! This tool is perfect for academic writing. It provides accurate word counts that meet academic standards. Use it to ensure your essays, research papers, and dissertations meet word count requirements.',
            category: 'usage'
          },
          {
            question: 'Does it work on mobile devices?',
            answer: 'Yes! Our word counter is fully mobile-optimized and works perfectly on smartphones and tablets. You can count words on the go, anywhere, anytime.',
            category: 'compatibility'
          },
          {
            question: 'What counts as a word?',
            answer: 'A word is any sequence of characters separated by spaces. Numbers, hyphenated words, and contractions each count as one word. This follows standard word counting conventions used in publishing and academia.',
            category: 'accuracy'
          },
          {
            question: 'Is this tool really free?',
            answer: 'Yes, completely free! No registration, no hidden fees, no watermarks, no limits. Use it as many times as you want for any purpose.',
            category: 'pricing'
          }
        ]
      }
    },

    hi: {
      // Hero Section
      hero: {
        title: 'वर्ड काउंटर',
        subtitle: 'तुरंत शब्द, कैरेक्टर, सेंटेंस, पैराग्राफ गिनें और रीडिंग टाइम कैलकुलेट करें। लेखकों, स्टूडेंट्स और कंटेंट क्रिएटर्स के लिए परफेक्ट।',
        benefits: [
          { icon: '⚡', text: 'रियल-टाइम काउंटिंग' },
          { icon: '🔒', text: '100% प्राइवेट' },
          { icon: '📱', text: 'मोबाइल फ्रेंडली' },
          { icon: '🆓', text: 'पूरी तरह फ्री' }
        ],
        cta: {
          primary: 'काउंटिंग शुरू करें',
          secondary: 'और जानें'
        },
        privacyNotice: 'सभी टेक्स्ट प्रोसेसिंग आपके ब्राउज़र में होती है। आपका कंटेंट आपके डिवाइस से बाहर नहीं जाता।',
        privacyIcon: '🔒'
      },

      // Features Section
      features: {
        title: 'हमारा वर्ड काउंटर क्यों इस्तेमाल करें?',
        subtitle: 'लेखकों और कंटेंट क्रिएटर्स के लिए कॉम्प्रिहेंसिव टेक्स्ट एनालिसिस टूल्स',
        items: [
          {
            icon: '📊',
            title: 'कम्पलीट टेक्स्ट स्टैटिस्टिक्स',
            description: 'वर्ड काउंट, कैरेक्टर काउंट (स्पेस के साथ/बिना), सेंटेंस काउंट, पैराग्राफ काउंट और रीडिंग टाइम पाएं'
          },
          {
            icon: '⚡',
            title: 'रियल-टाइम काउंटिंग',
            description: 'टाइप या पेस्ट करते ही तुरंत रिज़ल्ट अपडेट देखें'
          },
          {
            icon: '🔒',
            title: '100% प्राइवेट और सिक्योर',
            description: 'सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आपका टेक्स्ट आपके डिवाइस से बाहर नहीं जाता'
          },
          {
            icon: '📱',
            title: 'मोबाइल ऑप्टिमाइज़्ड',
            description: 'स्मार्टफोन, टैबलेट और डेस्कटॉप पर परफेक्टली काम करता है'
          },
          {
            icon: '📖',
            title: 'रीडिंग टाइम कैलकुलेटर',
            description: 'औसत रीडिंग स्पीड (~200 शब्द प्रति मिनट) के आधार पर रीडिंग टाइम एस्टिमेट करता है'
          },
          {
            icon: '🎯',
            title: 'लेखकों के लिए परफेक्ट',
            description: 'निबंध, आर्टिकल, ब्लॉग पोस्ट, सोशल मीडिया और वर्ड लिमिट वाले किसी भी कंटेंट के लिए आइडियल'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'अपना टेक्स्ट गिनने के सरल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट एंटर या पेस्ट करें',
            description: 'टेक्स्ट एरिया में सीधे टाइप करें या किसी भी सोर्स (Word, Google Docs, वेबसाइट, आदि) से अपना कंटेंट पेस्ट करें।',
            icon: '📝'
          },
          {
            number: 2,
            title: 'रियल-टाइम रिज़ल्ट देखें',
            description: 'वर्ड काउंट, कैरेक्टर काउंट (स्पेस के साथ और बिना), सेंटेंस काउंट और पैराग्राफ काउंट सहित तुरंत स्टैटिस्टिक्स देखें।',
            icon: '📊'
          },
          {
            number: 3,
            title: 'रीडिंग टाइम चेक करें',
            description: '200 शब्द प्रति मिनट की औसत रीडिंग स्पीड के आधार पर एस्टिमेटेड रीडिंग टाइम देखें।',
            icon: '⏱️'
          },
          {
            number: 4,
            title: 'एडिट और रिफाइन करें',
            description: 'अपने टेक्स्ट में बदलाव करें और अपनी रिक्वायरमेंट्स पूरी करने के लिए रियल-टाइम में स्टैटिस्टिक्स अपडेट देखें।',
            icon: '✏️'
          }
        ],
        tips: [
          {
            icon: '💡',
            title: 'निबंध के लिए',
            description: 'मिनिमम/मैक्सिमम रिक्वायरमेंट्स पूरी करने के लिए वर्ड काउंट इस्तेमाल करें'
          },
          {
            icon: '📱',
            title: 'सोशल मीडिया के लिए',
            description: 'प्लेटफॉर्म लिमिट (Twitter, Instagram, आदि) के अंदर रहने के लिए कैरेक्टर काउंट चेक करें'
          },
          {
            icon: '📖',
            title: 'ब्लॉग पोस्ट के लिए',
            description: 'कंटेंट लेंथ और रीडर एंगेजमेंट गेज करने के लिए रीडिंग टाइम इस्तेमाल करें'
          },
          {
            icon: '✍️',
            title: 'कंटेंट राइटिंग के लिए',
            description: 'बेहतर रीडेबिलिटी के लिए सेंटेंस और पैराग्राफ काउंट मॉनिटर करें'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'वर्ड काउंटिंग और टेक्स्ट एनालिसिस की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन वर्ड काउंटर आपको तुरंत टेक्स्ट एनालाइज़ करने में मदद करता है। शब्द, कैरेक्टर (स्पेस के साथ और बिना), सेंटेंस, पैराग्राफ गिनें और रीडिंग टाइम कैलकुलेट करें। निबंध लिखने वाले स्टूडेंट्स, वर्ड लिमिट मैनेज करने वाले कंटेंट क्रिएटर्स, प्रोग्रेस ट्रैक करने वाले लेखकों और एक्यूरेट टेक्स्ट स्टैटिस्टिक्स की ज़रूरत वाले किसी के लिए भी परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप हमारे <a href="/tools/character-counter">Character Counter</a> या <a href="/tools/text-case-converter">Text Case Converter</a> का भी उपयोग कर सकते हैं।',
        sections: [
          {
            title: 'निबंध और एकेडमिक राइटिंग के लिए वर्ड काउंटर',
            content: 'स्टूडेंट्स और एकेडमिक्स को असाइनमेंट रिक्वायरमेंट्स पूरी करने के लिए सटीक वर्ड काउंट की ज़रूरत होती है। हमारा टूल स्टैंडर्ड एकेडमिक कन्वेंशन फॉलो करने वाली एक्यूरेट वर्ड काउंटिंग प्रदान करता है। चाहे आप 500-शब्द का निबंध, 2000-शब्द का रिसर्च पेपर या डिसर्टेशन लिख रहे हों, मिनिमम और मैक्सिमम रिक्वायरमेंट्स पूरी करने के लिए तुरंत वर्ड काउंट पाएं। टूल प्रॉपर स्ट्रक्चर बनाए रखने में मदद के लिए सेंटेंस और पैराग्राफ भी गिनता है।',
            keywords: ['निबंध के लिए वर्ड काउंटर', 'शैक्षणिक शब्द गणना', 'निबंध शब्द गिनती']
          },
          {
            title: 'सोशल मीडिया के लिए कैरेक्टर काउंटर',
            content: 'सोशल मीडिया प्लेटफॉर्म की स्ट्रिक्ट कैरेक्टर लिमिट होती है। Twitter 280 कैरेक्टर अलाउ करता है, Instagram कैप्शन 2200 कैरेक्टर के अंदर बेस्ट काम करते हैं, और Facebook पोस्ट 40-80 कैरेक्टर पर ऑप्टिमल होती हैं। हमारा कैरेक्टर काउंटर स्पेस के साथ और बिना दोनों कैरेक्टर काउंट दिखाता है, जो आपको प्लेटफॉर्म रिक्वायरमेंट्स फिट करने वाली परफेक्ट पोस्ट क्राफ्ट करने में मदद करता है जबकि एंगेजमेंट मैक्सिमाइज़ करता है।',
            keywords: ['कैरेक्टर काउंटर', 'सोशल मीडिया कैरेक्टर सीमा', 'ट्विटर कैरेक्टर गिनती']
          },
          {
            title: 'रीडिंग टाइम कैलकुलेटर',
            content: 'कंटेंट क्रिएटर्स और पब्लिशर्स के लिए यह समझना क्रूशियल है कि कंटेंट पढ़ने में कितना समय लगता है। हमारा टूल 200 शब्द प्रति मिनट की औसत रीडिंग स्पीड के आधार पर रीडिंग टाइम कैलकुलेट करता है। यह आपको अपने ऑडियंस के लिए आर्टिकल लेंथ ऑप्टिमाइज़ करने, कंटेंट स्ट्रैटेजी प्लान करने और रीडर एक्सपेक्टेशन सेट करने में मदद करता है। ब्लॉग पोस्ट, आर्टिकल और लॉन्ग-फॉर्म कंटेंट के लिए परफेक्ट।',
            keywords: ['पढ़ने का समय कैलकुलेटर', 'आर्टिकल पढ़ने का समय', 'कंटेंट लंबाई अनुमानक']
          },
          {
            title: 'सेंटेंस और पैराग्राफ काउंटर',
            content: 'अच्छी राइटिंग के लिए प्रॉपर स्ट्रक्चर ज़रूरी है। हमारा टूल रीडेबिलिटी बनाए रखने में मदद के लिए सेंटेंस और पैराग्राफ गिनता है। आइडियल सेंटेंस लेंथ 15-20 शब्द है, और वेब कंटेंट के लिए पैराग्राफ 3-5 सेंटेंस होने चाहिए। अपनी राइटिंग क्लैरिटी इम्प्रूव करने, लॉन्ग ब्लॉक्स ऑफ टेक्स्ट ब्रेक करने और ज़्यादा एंगेजिंग कंटेंट बनाने के लिए इन मेट्रिक्स का इस्तेमाल करें जो रीडर्स आसानी से डाइजेस्ट कर सकें।',
            keywords: ['वाक्य गणना', 'पैराग्राफ काउंटर', 'टेक्स्ट संरचना विश्लेषण']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'यह वर्ड काउंटर कितना एक्यूरेट है?',
            answer: 'हमारा वर्ड काउंटर बहुत एक्यूरेट है और स्टैंडर्ड वर्ड काउंटिंग कन्वेंशन फॉलो करता है। यह स्पेस से सेपरेट शब्द गिनता है और पंक्चुएशन को सही तरीके से हैंडल करता है। अल्गोरिदम वही है जो प्रोफेशनल राइटिंग टूल्स इस्तेमाल करते हैं।',
            category: 'accuracy'
          },
          {
            question: 'क्या यह स्पेस के साथ या बिना कैरेक्टर गिनता है?',
            answer: 'दोनों! हमारा टूल स्पेस के साथ कैरेक्टर काउंट और स्पेस के बिना कैरेक्टर काउंट दोनों दिखाता है। यह अलग-अलग रिक्वायरमेंट्स के लिए यूज़फुल है - कुछ प्लेटफॉर्म स्पेस गिनते हैं, दूसरे नहीं।',
            category: 'features'
          },
          {
            question: 'रीडिंग टाइम कैसे कैलकुलेट होता है?',
            answer: 'रीडिंग टाइम 200 शब्द प्रति मिनट की औसत रीडिंग स्पीड के आधार पर कैलकुलेट होता है। यह जनरल कंटेंट की कम्फर्टेबल रीडिंग के लिए स्टैंडर्ड रेट है। एक्चुअल रीडिंग टाइम कंटेंट कॉम्प्लेक्सिटी और रीडर प्रोफिशिएंसी के आधार पर वेरी हो सकता है।',
            category: 'features'
          },
          {
            question: 'क्या मेरा टेक्स्ट डेटा सेफ और प्राइवेट है?',
            answer: 'बिल्कुल सेफ! सभी टेक्स्ट प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका टेक्स्ट कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता। हमारी आपके कंटेंट तक ज़ीरो एक्सेस है।',
            category: 'privacy'
          },
          {
            question: 'क्या मैं इसे एकेडमिक निबंध के लिए इस्तेमाल कर सकता हूँ?',
            answer: 'हाँ! यह टूल एकेडमिक राइटिंग के लिए परफेक्ट है। यह एकेडमिक स्टैंडर्ड पूरे करने वाली एक्यूरेट वर्ड काउंट प्रदान करता है। अपने निबंध, रिसर्च पेपर और डिसर्टेशन वर्ड काउंट रिक्वायरमेंट्स पूरी करने के लिए इसका इस्तेमाल करें।',
            category: 'usage'
          },
          {
            question: 'क्या यह मोबाइल डिवाइसेज़ पर काम करता है?',
            answer: 'हाँ! हमारा वर्ड काउंटर पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और स्मार्टफोन और टैबलेट पर परफेक्टली काम करता है। आप चलते-फिरते, कहीं भी, कभी भी शब्द गिन सकते हैं।',
            category: 'compatibility'
          },
          {
            question: 'शब्द के रूप में क्या गिना जाता है?',
            answer: 'शब्द स्पेस से सेपरेट कैरेक्टर का कोई भी सीक्वेंस है। नंबर, हाइफनेटेड शब्द और कॉन्ट्रैक्शन प्रत्येक एक शब्द के रूप में गिने जाते हैं। यह पब्लिशिंग और एकेडमिया में इस्तेमाल होने वाले स्टैंडर्ड वर्ड काउंटिंग कन्वेंशन फॉलो करता है।',
            category: 'accuracy'
          },
          {
            question: 'क्या यह टूल वाकई फ्री है?',
            answer: 'हाँ, पूरी तरह फ्री! कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई वॉटरमार्क नहीं, कोई लिमिट नहीं। किसी भी पर्पज के लिए जितनी बार चाहें इस्तेमाल करें।',
            category: 'pricing'
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
      input: {
        placeholder: 'Type or paste your text here...',
        clearButton: 'Clear Text',
        pasteButton: 'Paste',
        label: 'Enter Your Text'
      },
      results: {
        title: 'Text Statistics',
        words: 'Words',
        characters: 'Characters',
        charactersWithSpaces: 'Characters (with spaces)',
        charactersWithoutSpaces: 'Characters (without spaces)',
        sentences: 'Sentences',
        paragraphs: 'Paragraphs',
        readingTime: 'Reading Time',
        minutes: 'minutes',
        minute: 'minute',
        seconds: 'seconds'
      },
      messages: {
        emptyText: 'Enter some text to see statistics',
        processing: 'Analyzing text...'
      }
    },
    hi: {
      input: {
        placeholder: 'अपना टेक्स्ट यहाँ टाइप या पेस्ट करें...',
        clearButton: 'टेक्स्ट क्लियर करें',
        pasteButton: 'पेस्ट करें',
        label: 'अपना टेक्स्ट एंटर करें'
      },
      results: {
        title: 'टेक्स्ट स्टैटिस्टिक्स',
        words: 'शब्द',
        characters: 'कैरेक्टर',
        charactersWithSpaces: 'कैरेक्टर (स्पेस के साथ)',
        charactersWithoutSpaces: 'कैरेक्टर (स्पेस के बिना)',
        sentences: 'सेंटेंस',
        paragraphs: 'पैराग्राफ',
        readingTime: 'रीडिंग टाइम',
        minutes: 'मिनट',
        minute: 'मिनट',
        seconds: 'सेकंड'
      },
      messages: {
        emptyText: 'स्टैटिस्टिक्स देखने के लिए कुछ टेक्स्ट एंटर करें',
        processing: 'टेक्स्ट एनालाइज़ हो रहा है...'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Required)
  // ============================================================================
  defaultSettings: {
    wordsPerMinute: 200, // Average reading speed
    countMethod: 'standard' // standard word counting
  },

  // ============================================================================
  // 7. VALIDATION (Required)
  // ============================================================================
  validation: {
    maxTextLength: 1000000, // 1 million characters
    minTextLength: 0
  },

  // ============================================================================
  // 8. TOOL-SPECIFIC CONFIG (Optional)
  // ============================================================================
  toolConfig: {
    intent: 'analyze', // Primary intent: analyze text
    features: [
      'word-count',
      'character-count',
      'sentence-count',
      'paragraph-count',
      'reading-time'
    ],
    useCases: ['essays', 'articles', 'social-media', 'content-writing'],
    countingRules: {
      wordSeparator: /\s+/,
      sentenceEnders: /[.!?]+/,
      paragraphSeparator: /\n\n+/
    }
  },

  // ============================================================================
  // 9. RELATIONSHIPS (Optional)
  // ============================================================================
  relationships: {
    relatedTools: ['text-case-converter', 'text-formatter', 'plagiarism-checker'],
    alternativeTools: ['character-counter', 'reading-time-calculator'],
    workflowTools: ['text-case-converter', 'grammar-checker']
  },

  // ============================================================================
  // 10. STATS (Optional - for analytics)
  // ============================================================================
  stats: {
    averageProcessingTime: 0.1, // seconds (instant)
    supportedLanguages: ['all'], // Works with any language
    maxTextSize: 1000000 // characters
  }
}

export default wordCounterConfig

