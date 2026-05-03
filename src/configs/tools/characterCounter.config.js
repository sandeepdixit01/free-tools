/**
 * Character Counter Tool Configuration - NEW SCHEMA v2.0
 * 
 * Following the GOLD STANDARD reference implementation (wordCounter.config.js)
 * 
 * @see Documentation/PHASE1_FINAL_SCHEMA.md for complete schema documentation
 * @version 2.0.0
 * @lastUpdated 2026-04-04
 */

import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

export const characterCounterConfig = {
  // ============================================================================
  // 1. METADATA (Required)
  // ============================================================================
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-04',
    author: 'FreeTools',
    category: 'text',
    schemaVersion: '2.0.0'
  },

  // ============================================================================
  // 2. BASIC INFO (Required)
  // ============================================================================
  id: 'character-counter',
  name: {
    en: 'Character Counter',
    hi: 'कैरेक्टर काउंटर'
  },
  slug: 'character-counter',
  description: {
    en: 'Count characters with and without spaces instantly',
    hi: 'स्पेस के साथ और बिना कैरेक्टर तुरंत गिनें'
  },

  // ============================================================================
  // 3. SEO (Required - STRICT structure)
  // ============================================================================
  seo: {
    en: {
      title: 'Character Counter | Count Characters with Spaces',
      description: 'Count characters with and without spaces online. Free character counter for Twitter, Instagram, SMS, and content with character limits.',
      keywords: {
        primary: [
          'character counter',
          'count characters online',
          'letter counter'
        ],
        secondary: [
          'character counter with spaces',
          'sms character counter',
          'instagram character counter',
          'twitter character counter'
        ],
        longTail: [
          'count characters with spaces online free',
          'character counter for twitter posts',
          'sms character counter online',
          'instagram caption character counter',
          'count letters and spaces online'
        ]
      },
      canonical: getToolCanonicalUrl('character-counter', 'en'),
      ogImage: '/images/tools/character-counter-og.jpg'
    },
    hi: {
      title: 'कैरेक्टर काउंटर | स्पेस के साथ कैरेक्टर गिनें',
      description: 'स्पेस के साथ और बिना कैरेक्टर ऑनलाइन गिनें। Twitter, Instagram, SMS और कैरेक्टर लिमिट वाले कंटेंट के लिए फ्री कैरेक्टर काउंटर।',
      keywords: {
        primary: [
          'character counter',
          'character online gine',
          'letter counter'
        ],
        secondary: [
          'space ke sath character counter',
          'sms character counter',
          'instagram character counter',
          'twitter character counter'
        ],
        longTail: [
          'space ke sath character online free gine',
          'twitter posts ke liye character counter',
          'sms character counter online',
          'instagram caption character counter',
          'letters aur spaces online gine'
        ]
      },
      canonical: getToolCanonicalUrl('character-counter', 'hi'),
      ogImage: '/images/tools/character-counter-og.jpg'
    }
  },

  // ============================================================================
  // 4. CONTENT (Required - Bilingual)
  // ============================================================================
  content: {
    en: {
      // Hero Section
      hero: {
        title: 'Character Counter',
        subtitle: 'Free online tool to count characters with and without spaces in real-time. Perfect for social media posts, SMS messages, and content with character limits.',
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
        title: 'Why Use Our Character Counter?',
        subtitle: 'Essential character counting tool for social media and content creation',
        items: [
          {
            icon: '📊',
            title: 'Dual Character Count',
            description: 'Get character count both with spaces and without spaces for different platform requirements'
          },
          {
            icon: '⚡',
            title: 'Real-Time Counting',
            description: 'See character count update instantly as you type or paste text'
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
            icon: '🎯',
            title: 'Platform Limits',
            description: 'Perfect for Twitter (280 chars), Instagram (2200 chars), SMS (160 chars), and more'
          },
          {
            icon: '✨',
            title: 'Simple & Fast',
            description: 'Clean interface with instant results - no complicated settings or options'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use This Tool',
        subtitle: 'Simple steps to count your characters',
        steps: [
          {
            number: 1,
            title: 'Enter or Paste Your Text',
            description: 'Type directly into the text area or paste your content from any source.',
            icon: '📝'
          },
          {
            number: 2,
            title: 'View Character Count',
            description: 'See instant character count with spaces and without spaces displayed clearly.',
            icon: '📊'
          },
          {
            number: 3,
            title: 'Check Platform Limits',
            description: 'Ensure your text fits within character limits for Twitter, Instagram, SMS, or other platforms.',
            icon: '✅'
          },
          {
            number: 4,
            title: 'Edit and Refine',
            description: 'Make changes to your text and watch the character count update in real-time.',
            icon: '✏️'
          }
        ],
        tips: [
          {
            icon: '🐦',
            title: 'For Twitter',
            description: 'Stay within 280 character limit for tweets'
          },
          {
            icon: '📸',
            title: 'For Instagram',
            description: 'Captions work best under 2200 characters'
          },
          {
            icon: '💬',
            title: 'For SMS',
            description: 'Keep messages under 160 characters to avoid splitting'
          },
          {
            icon: '📧',
            title: 'For Email Subject',
            description: 'Optimal email subject lines are 40-50 characters'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'Complete Guide to Character Counting',
        intro: 'This free online character counter helps you count characters instantly. Get both character count with spaces and without spaces for different platform requirements. Perfect for social media posts, SMS messages, email subjects, and any content with character limits. All processing happens in your browser for complete privacy. You can also <a href="/tools/word-counter">count words</a> or <a href="/tools/remove-extra-spaces">remove extra spaces</a> from your text.',
        sections: [
          {
            title: 'Character Counter for Social Media',
            content: 'Social media platforms have strict character limits that vary by platform. Twitter allows 280 characters per tweet, Instagram captions work best under 2200 characters, Facebook posts are optimal at 40-80 characters, and LinkedIn posts can be up to 3000 characters. Our character counter shows both counts (with and without spaces) to help you craft perfect posts that fit platform requirements while maximizing engagement and message clarity.',
            keywords: ['character counter for social media', 'twitter character limit', 'instagram character count']
          },
          {
            title: 'SMS Character Counter',
            content: 'SMS messages have a 160-character limit per message. If your text exceeds this limit, it gets split into multiple messages, which can cost more and disrupt message flow. Our character counter helps you stay within the 160-character limit for single SMS messages. It counts both with and without spaces, as some carriers count spaces differently. Perfect for text marketing, notifications, and personal messages.',
            keywords: ['SMS character counter', 'text message character limit', '160 character limit']
          },
          {
            title: 'Character Count With and Without Spaces',
            content: 'Different platforms and applications count characters differently. Some include spaces in the character count (like Twitter and most social media), while others exclude spaces (like some coding environments and text processors). Our tool provides both counts simultaneously, so you can ensure your content meets the specific requirements of your target platform without manual counting or guesswork.',
            keywords: ['character count with spaces', 'character count without spaces', 'space counting']
          },
          {
            title: 'Email Subject Line Character Counter',
            content: 'Email subject lines are crucial for open rates, and length matters. Optimal email subject lines are 40-50 characters to display fully on mobile devices. Longer subjects get truncated, reducing effectiveness. Our character counter helps you craft concise, impactful subject lines that display completely across all devices and email clients, improving your email marketing performance and engagement rates.',
            keywords: ['email subject line length', 'subject line character count', 'email marketing']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is the difference between character count with and without spaces?',
            answer: 'Character count with spaces includes all characters including space characters, while character count without spaces excludes all whitespace. Different platforms use different counting methods - Twitter counts spaces, while some text editors don\'t.',
            category: 'features'
          },
          {
            question: 'How accurate is this character counter?',
            answer: 'Our character counter is 100% accurate. It counts every character including letters, numbers, punctuation, and spaces (when applicable). The counting algorithm matches the standards used by major platforms like Twitter and Instagram.',
            category: 'accuracy'
          },
          {
            question: 'Does it work for all languages?',
            answer: 'Yes! Our character counter works with all languages and character sets including English, Hindi, Chinese, Arabic, emoji, and special characters. Each character is counted accurately regardless of language or script.',
            category: 'compatibility'
          },
          {
            question: 'Is my text data safe and private?',
            answer: 'Absolutely safe! All character counting happens entirely in your browser using JavaScript. Your text never leaves your device or gets uploaded to any server. We have zero access to your content.',
            category: 'privacy'
          },
          {
            question: 'What is Twitter\'s character limit?',
            answer: 'Twitter allows 280 characters per tweet. This includes all text, spaces, and punctuation. URLs are automatically shortened to 23 characters. Use our counter to ensure your tweets fit within this limit.',
            category: 'usage'
          },
          {
            question: 'What is Instagram\'s character limit?',
            answer: 'Instagram captions can be up to 2200 characters, but only the first 125 characters appear before the "more" button. For optimal engagement, keep important information in the first 125 characters.',
            category: 'usage'
          },
          {
            question: 'How many characters are in an SMS?',
            answer: 'Standard SMS messages have a 160-character limit. If your message exceeds 160 characters, it gets split into multiple messages (usually 153 characters each for concatenated messages).',
            category: 'usage'
          },
          {
            question: 'Does it count emoji as characters?',
            answer: 'Yes, emoji are counted as characters. Most emoji count as 2 characters, though some complex emoji may count as more. Our counter accurately reflects how platforms like Twitter count emoji.',
            category: 'features'
          },
          {
            question: 'Can I use this on mobile devices?',
            answer: 'Yes! Our character counter is fully mobile-optimized and works perfectly on smartphones and tablets. Count characters on the go, anywhere, anytime.',
            category: 'compatibility'
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
        title: 'कैरेक्टर काउंटर',
        subtitle: 'रियल-टाइम में स्पेस के साथ और बिना कैरेक्टर गिनें। सोशल मीडिया पोस्ट, SMS मैसेज और कैरेक्टर लिमिट वाले कंटेंट के लिए परफेक्ट।',
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
        title: 'हमारा कैरेक्टर काउंटर क्यों इस्तेमाल करें?',
        subtitle: 'सोशल मीडिया और कंटेंट क्रिएशन के लिए ज़रूरी कैरेक्टर काउंटिंग टूल',
        items: [
          {
            icon: '📊',
            title: 'डुअल कैरेक्टर काउंट',
            description: 'अलग-अलग प्लेटफॉर्म रिक्वायरमेंट्स के लिए स्पेस के साथ और बिना दोनों कैरेक्टर काउंट पाएं'
          },
          {
            icon: '⚡',
            title: 'रियल-टाइम काउंटिंग',
            description: 'टाइप या पेस्ट करते ही तुरंत कैरेक्टर काउंट अपडेट देखें'
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
            icon: '🎯',
            title: 'प्लेटफॉर्म लिमिट',
            description: 'Twitter (280 chars), Instagram (2200 chars), SMS (160 chars) और अधिक के लिए परफेक्ट'
          },
          {
            icon: '✨',
            title: 'सिंपल और फास्ट',
            description: 'तुरंत रिज़ल्ट के साथ क्लीन इंटरफेस - कोई जटिल सेटिंग या ऑप्शन नहीं'
          }
        ]
      },

      // How To Section
      howTo: {
        title: 'इस टूल का उपयोग कैसे करें',
        subtitle: 'अपने कैरेक्टर गिनने के सरल स्टेप्स',
        steps: [
          {
            number: 1,
            title: 'अपना टेक्स्ट एंटर या पेस्ट करें',
            description: 'टेक्स्ट एरिया में सीधे टाइप करें या किसी भी सोर्स से अपना कंटेंट पेस्ट करें।',
            icon: '📝'
          },
          {
            number: 2,
            title: 'कैरेक्टर काउंट देखें',
            description: 'स्पेस के साथ और बिना तुरंत कैरेक्टर काउंट साफ तरीके से डिस्प्ले देखें।',
            icon: '📊'
          },
          {
            number: 3,
            title: 'प्लेटफॉर्म लिमिट चेक करें',
            description: 'सुनिश्चित करें कि आपका टेक्स्ट Twitter, Instagram, SMS या अन्य प्लेटफॉर्म की कैरेक्टर लिमिट के अंदर फिट होता है।',
            icon: '✅'
          },
          {
            number: 4,
            title: 'एडिट और रिफाइन करें',
            description: 'अपने टेक्स्ट में बदलाव करें और रियल-टाइम में कैरेक्टर काउंट अपडेट देखें।',
            icon: '✏️'
          }
        ],
        tips: [
          {
            icon: '🐦',
            title: 'Twitter के लिए',
            description: 'ट्वीट के लिए 280 कैरेक्टर लिमिट के अंदर रहें'
          },
          {
            icon: '📸',
            title: 'Instagram के लिए',
            description: 'कैप्शन 2200 कैरेक्टर के अंदर बेस्ट काम करते हैं'
          },
          {
            icon: '💬',
            title: 'SMS के लिए',
            description: 'स्प्लिटिंग से बचने के लिए मैसेज 160 कैरेक्टर के अंदर रखें'
          },
          {
            icon: '📧',
            title: 'ईमेल सब्जेक्ट के लिए',
            description: 'ऑप्टिमल ईमेल सब्जेक्ट लाइन 40-50 कैरेक्टर होती हैं'
          }
        ]
      },

      // SEO Content Section
      seoContent: {
        mainTitle: 'कैरेक्टर काउंटिंग की पूरी गाइड',
        intro: 'यह फ्री ऑनलाइन कैरेक्टर काउंटर आपको तुरंत कैरेक्टर गिनने में मदद करता है। अलग-अलग प्लेटफॉर्म रिक्वायरमेंट्स के लिए स्पेस के साथ और बिना दोनों कैरेक्टर काउंट पाएं। सोशल मीडिया पोस्ट, SMS मैसेज, ईमेल सब्जेक्ट और कैरेक्टर लिमिट वाले किसी भी कंटेंट के लिए परफेक्ट। पूरी प्राइवेसी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप <a href="/tools/word-counter">शब्द गिन</a> भी सकते हैं या अपने टेक्स्ट से <a href="/tools/remove-extra-spaces">एक्स्ट्रा स्पेस हटा</a> सकते हैं।',
        sections: [
          {
            title: 'सोशल मीडिया के लिए कैरेक्टर काउंटर',
            content: 'सोशल मीडिया प्लेटफॉर्म की स्ट्रिक्ट कैरेक्टर लिमिट होती है जो प्लेटफॉर्म के अनुसार अलग होती है। Twitter प्रति ट्वीट 280 कैरेक्टर अलाउ करता है, Instagram कैप्शन 2200 कैरेक्टर के अंदर बेस्ट काम करते हैं, Facebook पोस्ट 40-80 कैरेक्टर पर ऑप्टिमल होती हैं, और LinkedIn पोस्ट 3000 कैरेक्टर तक हो सकती हैं। हमारा कैरेक्टर काउंटर दोनों काउंट (स्पेस के साथ और बिना) दिखाता है जो आपको प्लेटफॉर्म रिक्वायरमेंट्स फिट करने वाली परफेक्ट पोस्ट क्राफ्ट करने में मदद करता है जबकि एंगेजमेंट और मैसेज क्लैरिटी मैक्सिमाइज़ करता है।',
            keywords: ['सोशल मीडिया के लिए कैरेक्टर काउंटर', 'ट्विटर कैरेक्टर सीमा', 'इंस्टाग्राम कैरेक्टर गिनती']
          },
          {
            title: 'SMS कैरेक्टर काउंटर',
            content: 'SMS मैसेज की प्रति मैसेज 160-कैरेक्टर लिमिट होती है। अगर आपका टेक्स्ट इस लिमिट से ज़्यादा है, तो यह मल्टिपल मैसेज में स्प्लिट हो जाता है, जिससे ज़्यादा खर्च हो सकता है और मैसेज फ्लो डिसरप्ट हो सकता है। हमारा कैरेक्टर काउंटर आपको सिंगल SMS मैसेज के लिए 160-कैरेक्टर लिमिट के अंदर रहने में मदद करता है। यह स्पेस के साथ और बिना दोनों गिनता है, क्योंकि कुछ कैरियर स्पेस अलग तरीके से गिनते हैं। टेक्स्ट मार्केटिंग, नोटिफिकेशन और पर्सनल मैसेज के लिए परफेक्ट।',
            keywords: ['SMS कैरेक्टर काउंटर', 'टेक्स्ट मैसेज कैरेक्टर सीमा', '160 कैरेक्टर सीमा']
          },
          {
            title: 'स्पेस के साथ और बिना कैरेक्टर काउंट',
            content: 'अलग-अलग प्लेटफॉर्म और एप्लिकेशन कैरेक्टर अलग तरीके से गिनते हैं। कुछ कैरेक्टर काउंट में स्पेस इंक्लूड करते हैं (जैसे Twitter और ज़्यादातर सोशल मीडिया), जबकि दूसरे स्पेस एक्सक्लूड करते हैं (जैसे कुछ कोडिंग एनवायरनमेंट और टेक्स्ट प्रोसेसर)। हमारा टूल दोनों काउंट एक साथ प्रदान करता है, ताकि आप सुनिश्चित कर सकें कि आपका कंटेंट आपके टार्गेट प्लेटफॉर्म की स्पेसिफिक रिक्वायरमेंट्स पूरी करता है बिना मैनुअल काउंटिंग या गेसवर्क के।',
            keywords: ['स्पेस के साथ कैरेक्टर गिनती', 'स्पेस के बिना कैरेक्टर गिनती', 'स्पेस काउंटिंग']
          },
          {
            title: 'ईमेल सब्जेक्ट लाइन कैरेक्टर काउंटर',
            content: 'ईमेल सब्जेक्ट लाइन ओपन रेट के लिए क्रूशियल हैं, और लेंथ मैटर करती है। ऑप्टिमल ईमेल सब्जेक्ट लाइन मोबाइल डिवाइसेज़ पर पूरी तरह डिस्प्ले होने के लिए 40-50 कैरेक्टर होती हैं। लंबी सब्जेक्ट ट्रंकेट हो जाती हैं, जिससे इफेक्टिवनेस कम हो जाती है। हमारा कैरेक्टर काउंटर आपको कंसाइज, इम्पैक्टफुल सब्जेक्ट लाइन क्राफ्ट करने में मदद करता है जो सभी डिवाइसेज़ और ईमेल क्लाइंट पर पूरी तरह डिस्प्ले होती हैं, जिससे आपकी ईमेल मार्केटिंग परफॉर्मेंस और एंगेजमेंट रेट इम्प्रूव होती है।',
            keywords: ['ईमेल सब्जेक्ट लाइन लंबाई', 'सब्जेक्ट लाइन कैरेक्टर गिनती', 'ईमेल मार्केटिंग']
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'अक्सर पूछे जाने वाले सवाल',
        items: [
          {
            question: 'स्पेस के साथ और बिना कैरेक्टर काउंट में क्या अंतर है?',
            answer: 'स्पेस के साथ कैरेक्टर काउंट में स्पेस कैरेक्टर सहित सभी कैरेक्टर शामिल होते हैं, जबकि स्पेस के बिना कैरेक्टर काउंट सभी व्हाइटस्पेस एक्सक्लूड करता है। अलग-अलग प्लेटफॉर्म अलग-अलग काउंटिंग मेथड इस्तेमाल करते हैं - Twitter स्पेस गिनता है, जबकि कुछ टेक्स्ट एडिटर नहीं गिनते।',
            category: 'features'
          },
          {
            question: 'यह कैरेक्टर काउंटर कितना एक्यूरेट है?',
            answer: 'हमारा कैरेक्टर काउंटर 100% एक्यूरेट है। यह लेटर, नंबर, पंक्चुएशन और स्पेस (जब एप्लिकेबल हो) सहित हर कैरेक्टर गिनता है। काउंटिंग अल्गोरिदम Twitter और Instagram जैसे मेजर प्लेटफॉर्म द्वारा इस्तेमाल किए जाने वाले स्टैंडर्ड से मैच करता है।',
            category: 'accuracy'
          },
          {
            question: 'क्या यह सभी भाषाओं के लिए काम करता है?',
            answer: 'हाँ! हमारा कैरेक्टर काउंटर English, Hindi, Chinese, Arabic, emoji और स्पेशल कैरेक्टर सहित सभी भाषाओं और कैरेक्टर सेट के साथ काम करता है। भाषा या स्क्रिप्ट के बावजूद हर कैरेक्टर एक्यूरेटली गिना जाता है।',
            category: 'compatibility'
          },
          {
            question: 'क्या मेरा टेक्स्ट डेटा सेफ और प्राइवेट है?',
            answer: 'बिल्कुल सेफ! सभी कैरेक्टर काउंटिंग पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होती है। आपका टेक्स्ट कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता। हमारी आपके कंटेंट तक ज़ीरो एक्सेस है।',
            category: 'privacy'
          },
          {
            question: 'Twitter की कैरेक्टर लिमिट क्या है?',
            answer: 'Twitter प्रति ट्वीट 280 कैरेक्टर अलाउ करता है। इसमें सभी टेक्स्ट, स्पेस और पंक्चुएशन शामिल हैं। URL ऑटोमैटिकली 23 कैरेक्टर में शॉर्टन हो जाते हैं। अपने ट्वीट इस लिमिट के अंदर फिट होने के लिए हमारे काउंटर का इस्तेमाल करें।',
            category: 'usage'
          },
          {
            question: 'Instagram की कैरेक्टर लिमिट क्या है?',
            answer: 'Instagram कैप्शन 2200 कैरेक्टर तक हो सकते हैं, लेकिन "more" बटन से पहले केवल पहले 125 कैरेक्टर दिखाई देते हैं। ऑप्टिमल एंगेजमेंट के लिए, पहले 125 कैरेक्टर में इम्पोर्टेंट इन्फॉर्मेशन रखें।',
            category: 'usage'
          },
          {
            question: 'SMS में कितने कैरेक्टर होते हैं?',
            answer: 'स्टैंडर्ड SMS मैसेज की 160-कैरेक्टर लिमिट होती है। अगर आपका मैसेज 160 कैरेक्टर से ज़्यादा है, तो यह मल्टिपल मैसेज में स्प्लिट हो जाता है (आमतौर पर कॉन्कैटिनेटेड मैसेज के लिए प्रत्येक 153 कैरेक्टर)।',
            category: 'usage'
          },
          {
            question: 'क्या यह emoji को कैरेक्टर के रूप में गिनता है?',
            answer: 'हाँ, emoji को कैरेक्टर के रूप में गिना जाता है। ज़्यादातर emoji 2 कैरेक्टर के रूप में गिने जाते हैं, हालांकि कुछ कॉम्प्लेक्स emoji ज़्यादा गिने जा सकते हैं। हमारा काउंटर एक्यूरेटली रिफ्लेक्ट करता है कि Twitter जैसे प्लेटफॉर्म emoji कैसे गिनते हैं।',
            category: 'features'
          },
          {
            question: 'क्या मैं इसे मोबाइल डिवाइसेज़ पर इस्तेमाल कर सकता हूँ?',
            answer: 'हाँ! हमारा कैरेक्टर काउंटर पूरी तरह से मोबाइल-ऑप्टिमाइज़्ड है और स्मार्टफोन और टैबलेट पर परफेक्टली काम करता है। चलते-फिरते, कहीं भी, कभी भी कैरेक्टर गिनें।',
            category: 'compatibility'
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
        title: 'Character Count',
        charactersWithSpaces: 'Characters (with spaces)',
        charactersWithoutSpaces: 'Characters (without spaces)',
        difference: 'Spaces'
      },
      messages: {
        emptyText: 'Enter some text to see character count',
        processing: 'Counting characters...'
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
        title: 'कैरेक्टर काउंट',
        charactersWithSpaces: 'कैरेक्टर (स्पेस के साथ)',
        charactersWithoutSpaces: 'कैरेक्टर (स्पेस के बिना)',
        difference: 'स्पेस'
      },
      messages: {
        emptyText: 'कैरेक्टर काउंट देखने के लिए कुछ टेक्स्ट एंटर करें',
        processing: 'कैरेक्टर गिने जा रहे हैं...'
      }
    }
  },

  // ============================================================================
  // 6. DEFAULT SETTINGS (Required)
  // ============================================================================
  defaultSettings: {
    countMethod: 'both' // Count both with and without spaces
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
      'character-count-with-spaces',
      'character-count-without-spaces'
    ],
    useCases: ['social-media', 'sms', 'email-subject', 'content-limits'],
    platformLimits: {
      twitter: 280,
      instagram: 2200,
      facebook: 63206,
      sms: 160,
      emailSubject: 50
    }
  },

  // ============================================================================
  // 9. RELATIONSHIPS (Optional)
  // ============================================================================
  relationships: {
    relatedTools: ['word-counter', 'text-case-converter', 'remove-extra-spaces'],
    alternativeTools: ['word-counter', 'text-analyzer'],
    workflowTools: ['text-case-converter', 'remove-extra-spaces']
  },

  // ============================================================================
  // 10. STATS (Optional - for analytics)
  // ============================================================================
  stats: {
    averageProcessingTime: 0.05, // seconds (instant)
    supportedLanguages: ['all'], // Works with any language
    maxTextSize: 1000000 // characters
  }
}

export default characterCounterConfig

