/**
 * JSON to CSV Converter Tool Configuration
 * Schema Version: 2.0
 */

import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

const jsonToCSVConfig = {
  // Tool Metadata
  metadata: {
    id: 'json-to-csv',
    version: '2.0',
    category: 'developer',
    schemaVersion: '2.0.0'
  },
  
  // SEO Configuration
  seo: {
    en: {
      title: 'Free JSON to CSV Converter Online | Convert JSON to CSV Instantly',
      description: 'Convert JSON to CSV format instantly with our free online tool. Supports nested objects, arrays, and custom delimiters. No signup required, works in your browser.',
      keywords: {
        primary: ['json to csv', 'json to csv converter', 'convert json to csv'],
        secondary: ['json converter', 'csv converter', 'json parser', 'data converter'],
        longTail: [
          'convert json array to csv online',
          'json to csv with nested objects',
          'free json to csv converter',
          'json to csv javascript',
          'export json to csv'
        ]
      },
      ogImage: '/images/json-to-csv-og.jpg',
      canonical: getToolCanonicalUrl('json-to-csv', 'en')
    },
    hi: {
      title: 'फ्री JSON to CSV कन्वर्टर ऑनलाइन | JSON को CSV में तुरंत बदलें',
      description: 'हमारे फ्री ऑनलाइन टूल से JSON को CSV फॉर्मेट में तुरंत बदलें। नेस्टेड ऑब्जेक्ट्स, ऐरे और कस्टम डिलिमिटर्स सपोर्ट करता है। साइनअप की ज़रूरत नहीं।',
      keywords: {
        primary: ['json to csv', 'json to csv converter', 'json ko csv me convert kare'],
        secondary: ['json converter', 'csv converter', 'json parser', 'data converter'],
        longTail: [
          'json array ko csv me convert kare online',
          'nested objects ke sath json to csv',
          'free json to csv converter',
          'json to csv javascript',
          'json ko csv me export kare'
        ]
      },
      ogImage: '/images/json-to-csv-og.jpg',
      canonical: getToolCanonicalUrl('json-to-csv', 'en')
    }
  },
  
  // Content organized by language
  content: {
    en: {
    // Hero Section
    hero: {
      title: 'JSON to CSV Converter',
      subtitle: 'Convert JSON data to CSV format instantly. Supports nested objects, arrays, and custom delimiters.',
      benefits: [
        { icon: '⚡', text: 'Instant conversion' },
        { icon: '🔒', text: '100% Private' },
        { icon: '📊', text: 'Handles nested data' },
        { icon: '🆓', text: 'Completely free' }
      ]
    },

    // Tool Interface Text
    uiText: {
      inputLabel: 'JSON Input',
      inputPlaceholder: 'Paste your JSON here...\n\nExample:\n[\n  {"name": "John", "age": 30, "city": "New York"},\n  {"name": "Jane", "age": 25, "city": "London"}\n]',
      outputLabel: 'CSV Output',
      outputPlaceholder: 'CSV output will appear here...',
      
      buttons: {
        convert: 'Convert to CSV',
        copy: 'Copy CSV',
        download: 'Download CSV',
        clear: 'Clear',
        paste: 'Paste'
      },

      options: {
        delimiter: 'Delimiter',
        includeHeaders: 'Include Headers'
      },

      messages: {
        success: 'Converted successfully!',
        copied: 'CSV copied to clipboard!',
        error: 'Conversion failed',
        emptyInput: 'Please enter JSON data',
        invalidJSON: 'Invalid JSON format',
        processing: 'Converting...'
      },

      stats: {
        rows: 'rows',
        columns: 'columns',
        generated: 'generated'
      }
    },

    // How To Section
    howTo: {
      title: 'How to Convert JSON to CSV',
      steps: [
        {
          title: 'Paste JSON Data',
          description: 'Copy your JSON data and paste it into the input field. Supports both JSON arrays and single objects.'
        },
        {
          title: 'Configure Options',
          description: 'Choose your delimiter (comma, semicolon, tab) and whether to include headers in the output.'
        },
        {
          title: 'Convert & Download',
          description: 'Click "Convert to CSV" to see the result. Copy to clipboard or download as a CSV file.'
        }
      ]
    },

    // Features Section
    features: {
      title: 'Why Use Our JSON to CSV Converter?',
      subtitle: 'Powerful features for reliable JSON to CSV conversion',
      items: [
        {
          icon: '🔄',
          title: 'Smart Conversion',
          description: 'Automatically handles nested objects, arrays, and various JSON structures with intelligent flattening.'
        },
        {
          icon: '⚙️',
          title: 'Custom Delimiters',
          description: 'Choose between comma, semicolon, tab, or pipe delimiters to match your requirements.'
        },
        {
          icon: '🎯',
          title: 'Nested Object Support',
          description: 'Flattens nested objects using dot notation (e.g., user.name, address.city) for easy CSV representation.'
        },
        {
          icon: '📋',
          title: 'Array Handling',
          description: 'Converts arrays within objects to JSON strings, preserving all data in the CSV output.'
        },
        {
          icon: '✅',
          title: 'JSON Validation',
          description: 'Validates JSON syntax before conversion and provides clear error messages for invalid input.'
        },
        {
          icon: '🔒',
          title: 'Privacy First',
          description: 'All conversion happens in your browser. Your data never leaves your device or gets uploaded to any server.'
        },
        {
          icon: '💾',
          title: 'Download Option',
          description: 'Download converted CSV directly to your computer with a single click.'
        },
        {
          icon: '📱',
          title: 'Mobile Friendly',
          description: 'Fully responsive design works perfectly on smartphones, tablets, and desktop computers.'
        }
      ]
    },

    // Use Cases Section
    useCases: {
      title: 'Common Use Cases',
      items: [
        {
          title: 'API Response Export',
          description: 'Convert JSON API responses to CSV for data analysis in Excel or Google Sheets.'
        },
        {
          title: 'Database Export',
          description: 'Transform JSON database exports into CSV format for importing into other systems.'
        },
        {
          title: 'Data Analysis',
          description: 'Convert JSON data to CSV for statistical analysis, reporting, and visualization tools.'
        },
        {
          title: 'Spreadsheet Import',
          description: 'Prepare JSON data for import into Excel, Google Sheets, or other spreadsheet applications.'
        },
        {
          title: 'Data Migration',
          description: 'Convert JSON data to CSV format when migrating between different database systems.'
        },
        {
          title: 'Report Generation',
          description: 'Transform JSON logs or reports into CSV format for easier reading and sharing.'
        }
      ]
    },

    // SEO Content Section
    seoContent: {
      mainTitle: 'Complete Guide to JSON to CSV Conversion',
      intro: 'This free online JSON to CSV converter helps you transform JSON data into CSV format instantly. Perfect for developers working with APIs, data exports, and spreadsheet applications. All processing happens in your browser for complete privacy and security. You can also format JSON using our <a href="/tools/json-formatter">JSON Formatter</a> or encode data with <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>.',
      sections: [
        {
          title: 'What is JSON to CSV Conversion?',
          content: 'JSON to CSV conversion transforms JavaScript Object Notation (JSON) data into Comma-Separated Values (CSV) format. JSON is commonly used for data exchange in web applications and APIs, while CSV is widely supported by spreadsheet applications like Excel and Google Sheets. Before converting, you can validate your JSON using our <a href="/tools/json-formatter">JSON Formatter</a> tool. Our converter handles complex JSON structures including nested objects and arrays, making it easy to work with your data in spreadsheet applications.',
          keywords: ['json to csv', 'json conversion', 'csv format', 'data conversion']
        },
        {
          title: 'Why Convert JSON to CSV?',
          content: 'Converting JSON to CSV makes data more accessible for analysis, reporting, and sharing. CSV files can be opened in Excel, Google Sheets, and most data analysis tools. This is particularly useful when working with API responses, database exports, or any JSON data that needs to be analyzed in spreadsheet applications. CSV format is also more human-readable and easier to share with non-technical users.',
          keywords: ['json to csv benefits', 'csv advantages', 'data analysis', 'spreadsheet import']
        },
        {
          title: 'Developer Tools Suite',
          content: 'Our tool parses your JSON data, extracts all fields, and converts them into CSV format with proper escaping and formatting. Explore our complete developer tools suite including <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>, <a href="/tools/url-encoder-decoder">URL Encoder</a>, and <a href="/tools/json-formatter">JSON Formatter</a> for all your data conversion needs. The conversion happens entirely in your browser using JavaScript, ensuring your data remains private and secure.',
          keywords: ['json parser', 'csv generator', 'data conversion tool', 'browser-based converter']
        },
        {
          title: 'Handling Nested JSON Objects',
          content: 'When converting nested JSON objects to CSV, our tool uses dot notation to flatten the structure. For example, a nested object like {"user": {"name": "John", "age": 30}} becomes two CSV columns: "user.name" and "user.age". This preserves the hierarchical structure while making the data accessible in a flat CSV format. Arrays within objects are converted to JSON strings to maintain data integrity.',
          keywords: ['nested json', 'json flattening', 'dot notation', 'hierarchical data']
        }
      ]
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Is this JSON to CSV converter free?',
          answer: 'Yes! Our JSON to CSV converter is completely free to use. No registration, no hidden fees, no limitations. Convert as many JSON files as you need.'
        },
        {
          question: 'Is my JSON data safe?',
          answer: 'Absolutely safe! All conversion happens entirely in your browser using JavaScript. Your JSON data never leaves your device or gets uploaded to any server. We have no access to your data.'
        },
        {
          question: 'Can I convert large JSON files?',
          answer: 'Yes! Our converter can handle large JSON files efficiently. All processing happens in your browser, so performance depends on your device capabilities. For very large files (>10MB), processing may take a few seconds.'
        },
        {
          question: 'How does the converter handle nested objects?',
          answer: 'Nested objects are flattened using dot notation. For example, {"user": {"name": "John"}} becomes a column named "user.name" in the CSV. This preserves the structure while making data accessible in CSV format.'
        },
        {
          question: 'What happens to arrays in JSON objects?',
          answer: 'Arrays within objects are converted to JSON strings in the CSV output. This ensures no data is lost during conversion. You can parse these strings back to arrays if needed.'
        },
        {
          question: 'Can I choose a different delimiter?',
          answer: 'Yes! You can choose between comma (,), semicolon (;), tab, or pipe (|) as your delimiter. This is useful when your data contains commas or when working with systems that expect specific delimiters.'
        },
        {
          question: 'What if my JSON has missing fields?',
          answer: 'Our converter handles missing fields gracefully. If an object is missing a field that exists in other objects, the CSV will contain an empty value for that field, ensuring all rows have the same number of columns.'
        },
        {
          question: 'Can I convert a single JSON object?',
          answer: 'Yes! You can convert both JSON arrays and single JSON objects. A single object will be converted to a CSV with one data row (plus headers if enabled).'
        }
      ]
    },

      // CTA Section
      cta: 'Start converting your JSON data to CSV format now - fast, free, and secure!'
    },

    // Hindi Content
    hi: {
    hero: {
      title: 'JSON to CSV कन्वर्टर',
      subtitle: 'JSON डेटा को CSV फॉर्मेट में तुरंत बदलें। नेस्टेड ऑब्जेक्ट्स, ऐरे और कस्टम डिलिमिटर्स सपोर्ट करता है।',
      benefits: [
        { icon: '⚡', text: 'तुरंत कन्वर्ज़न' },
        { icon: '🔒', text: '100% प्राइवेट' },
        { icon: '📊', text: 'नेस्टेड डेटा हैंडल करता है' },
        { icon: '🆓', text: 'पूरी तरह फ्री' }
      ]
    },

    uiText: {
      inputLabel: 'JSON इनपुट',
      inputPlaceholder: 'अपना JSON यहाँ पेस्ट करें...\n\nउदाहरण:\n[\n  {"name": "John", "age": 30, "city": "New York"},\n  {"name": "Jane", "age": 25, "city": "London"}\n]',
      outputLabel: 'CSV आउटपुट',
      outputPlaceholder: 'CSV आउटपुट यहाँ दिखाई देगा...',
      
      buttons: {
        convert: 'CSV में बदलें',
        copy: 'CSV कॉपी करें',
        download: 'CSV डाउनलोड करें',
        clear: 'क्लियर करें',
        paste: 'पेस्ट करें'
      },

      options: {
        delimiter: 'डिलिमिटर',
        includeHeaders: 'हेडर्स शामिल करें'
      },

      messages: {
        success: 'सफलतापूर्वक बदल दिया गया!',
        copied: 'CSV क्लिपबोर्ड पर कॉपी हो गया!',
        error: 'कन्वर्ज़न विफल रहा',
        emptyInput: 'कृपया JSON डेटा दर्ज करें',
        invalidJSON: 'अमान्य JSON फॉर्मेट',
        processing: 'बदल रहे हैं...'
      },

      stats: {
        rows: 'पंक्तियाँ',
        columns: 'कॉलम',
        generated: 'जेनरेट किया गया'
      }
    },

    howTo: {
      title: 'JSON को CSV में कैसे बदलें',
      steps: [
        {
          title: 'JSON डेटा पेस्ट करें',
          description: 'अपना JSON डेटा कॉपी करें और इनपुट फील्ड में पेस्ट करें। JSON ऐरे और सिंगल ऑब्जेक्ट दोनों सपोर्ट करता है।'
        },
        {
          title: 'ऑप्शन कॉन्फिगर करें',
          description: 'अपना डिलिमिटर (कॉमा, सेमीकोलन, टैब) चुनें और तय करें कि आउटपुट में हेडर्स शामिल करने हैं या नहीं।'
        },
        {
          title: 'बदलें और डाउनलोड करें',
          description: 'रिज़ल्ट देखने के लिए "CSV में बदलें" पर क्लिक करें। क्लिपबोर्ड पर कॉपी करें या CSV फाइल के रूप में डाउनलोड करें।'
        }
      ]
    },

    features: {
      title: 'हमारा JSON to CSV कन्वर्टर क्यों इस्तेमाल करें?',
      subtitle: 'विश्वसनीय JSON to CSV कन्वर्ज़न के लिए शक्तिशाली विशेषताएं',
      items: [
        {
          icon: '🔄',
          title: 'स्मार्ट कन्वर्ज़न',
          description: 'इंटेलिजेंट फ्लैटनिंग के साथ नेस्टेड ऑब्जेक्ट्स, ऐरे और विभिन्न JSON स्ट्रक्चर्स को ऑटोमैटिकली हैंडल करता है।'
        },
        {
          icon: '⚙️',
          title: 'कस्टम डिलिमिटर्स',
          description: 'अपनी ज़रूरतों के अनुसार कॉमा, सेमीकोलन, टैब या पाइप डिलिमिटर्स में से चुनें।'
        },
        {
          icon: '🎯',
          title: 'नेस्टेड ऑब्जेक्ट सपोर्ट',
          description: 'आसान CSV रिप्रेजेंटेशन के लिए डॉट नोटेशन (जैसे user.name, address.city) का उपयोग करके नेस्टेड ऑब्जेक्ट्स को फ्लैटन करता है।'
        },
        {
          icon: '📋',
          title: 'ऐरे हैंडलिंग',
          description: 'CSV आउटपुट में सभी डेटा को प्रिज़र्व करते हुए ऑब्जेक्ट्स के अंदर ऐरे को JSON स्ट्रिंग्स में बदलता है।'
        },
        {
          icon: '✅',
          title: 'JSON वैलिडेशन',
          description: 'कन्वर्ज़न से पहले JSON सिंटैक्स वैलिडेट करता है और अमान्य इनपुट के लिए स्पष्ट एरर मैसेज प्रदान करता है।'
        },
        {
          icon: '🔒',
          title: 'प्राइवेसी फर्स्ट',
          description: 'सभी कन्वर्ज़न आपके ब्राउज़र में होता है। आपका डेटा कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता।'
        },
        {
          icon: '💾',
          title: 'डाउनलोड ऑप्शन',
          description: 'एक क्लिक से कन्वर्ट किए गए CSV को सीधे अपने कंप्यूटर पर डाउनलोड करें।'
        },
        {
          icon: '📱',
          title: 'मोबाइल फ्रेंडली',
          description: 'पूरी तरह से रिस्पॉन्सिव डिज़ाइन स्मार्टफोन, टैबलेट और डेस्कटॉप कंप्यूटर पर परफेक्टली काम करता है।'
        }
      ]
    },

    useCases: {
      title: 'सामान्य उपयोग के मामले',
      items: [
        {
          title: 'API रिस्पॉन्स एक्सपोर्ट',
          description: 'Excel या Google Sheets में डेटा एनालिसिस के लिए JSON API रिस्पॉन्स को CSV में बदलें।'
        },
        {
          title: 'डेटाबेस एक्सपोर्ट',
          description: 'अन्य सिस्टम में इम्पोर्ट करने के लिए JSON डेटाबेस एक्सपोर्ट को CSV फॉर्मेट में ट्रांसफॉर्म करें।'
        },
        {
          title: 'डेटा एनालिसिस',
          description: 'स्टैटिस्टिकल एनालिसिस, रिपोर्टिंग और विज़ुअलाइज़ेशन टूल्स के लिए JSON डेटा को CSV में बदलें।'
        },
        {
          title: 'स्प्रेडशीट इम्पोर्ट',
          description: 'Excel, Google Sheets या अन्य स्प्रेडशीट एप्लिकेशन में इम्पोर्ट के लिए JSON डेटा तैयार करें।'
        },
        {
          title: 'डेटा माइग्रेशन',
          description: 'विभिन्न डेटाबेस सिस्टम के बीच माइग्रेट करते समय JSON डेटा को CSV फॉर्मेट में बदलें।'
        },
        {
          title: 'रिपोर्ट जेनरेशन',
          description: 'आसान रीडिंग और शेयरिंग के लिए JSON लॉग्स या रिपोर्ट्स को CSV फॉर्मेट में ट्रांसफॉर्म करें।'
        }
      ]
    },

    seoContent: {
      mainTitle: 'JSON to CSV कन्वर्ज़न की पूरी गाइड',
      intro: 'यह फ्री ऑनलाइन JSON to CSV कन्वर्टर आपको JSON डेटा को तुरंत CSV फॉर्मेट में ट्रांसफॉर्म करने में मदद करता है। API, डेटा एक्सपोर्ट और स्प्रेडशीट एप्लिकेशन के साथ काम करने वाले डेवलपर्स के लिए परफेक्ट। पूरी प्राइवेसी और सिक्योरिटी के लिए सभी प्रोसेसिंग आपके ब्राउज़र में होती है। आप हमारे <a href="/tools/json-formatter">JSON Formatter</a> का उपयोग करके JSON फॉर्मेट भी कर सकते हैं या <a href="/tools/base64-encoder-decoder">Base64 Encoder</a> से डेटा एनकोड कर सकते हैं।',
      sections: [
        {
          title: 'JSON to CSV कन्वर्ज़न क्या है?',
          content: 'JSON to CSV कन्वर्ज़न JavaScript Object Notation (JSON) डेटा को Comma-Separated Values (CSV) फॉर्मेट में ट्रांसफॉर्म करता है। JSON आमतौर पर वेब एप्लिकेशन और API में डेटा एक्सचेंज के लिए उपयोग किया जाता है, जबकि CSV को Excel और Google Sheets जैसे स्प्रेडशीट एप्लिकेशन द्वारा व्यापक रूप से सपोर्ट किया जाता है।',
          keywords: ['json to csv', 'json conversion', 'csv format', 'data conversion']
        },
        {
          title: 'JSON को CSV में क्यों बदलें?',
          content: 'JSON को CSV में बदलने से डेटा एनालिसिस, रिपोर्टिंग और शेयरिंग के लिए अधिक सुलभ हो जाता है। CSV फाइलें Excel, Google Sheets और अधिकांश डेटा एनालिसिस टूल्स में खोली जा सकती हैं। यह विशेष रूप से तब उपयोगी है जब API रिस्पॉन्स, डेटाबेस एक्सपोर्ट या किसी भी JSON डेटा के साथ काम कर रहे हों।',
          keywords: ['json to csv benefits', 'csv advantages', 'data analysis', 'spreadsheet import']
        },
        {
          title: 'हमारा JSON to CSV कन्वर्टर कैसे काम करता है',
          content: 'हमारा टूल आपके JSON डेटा को पार्स करता है, सभी फील्ड्स एक्सट्रैक्ट करता है, और उन्हें उचित एस्केपिंग और फॉर्मेटिंग के साथ CSV फॉर्मेट में बदलता है। यह नेस्टेड ऑब्जेक्ट्स को डॉट नोटेशन से फ्लैटन करके हैंडल करता है, ऐरे को JSON स्ट्रिंग्स में बदलता है, और सुनिश्चित करता है कि सभी स्पेशल कैरेक्टर्स ठीक से एस्केप हों।',
          keywords: ['json parser', 'csv generator', 'data conversion tool', 'browser-based converter']
        },
        {
          title: 'नेस्टेड JSON ऑब्जेक्ट्स को हैंडल करना',
          content: 'नेस्टेड JSON ऑब्जेक्ट्स को CSV में बदलते समय, हमारा टूल स्ट्रक्चर को फ्लैटन करने के लिए डॉट नोटेशन का उपयोग करता है। उदाहरण के लिए, {"user": {"name": "John", "age": 30}} जैसा नेस्टेड ऑब्जेक्ट दो CSV कॉलम बन जाता है: "user.name" और "user.age"।',
          keywords: ['nested json', 'json flattening', 'dot notation', 'hierarchical data']
        }
      ]
    },

    faq: {
      title: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        {
          question: 'क्या यह JSON to CSV कन्वर्टर फ्री है?',
          answer: 'हाँ! हमारा JSON to CSV कन्वर्टर इस्तेमाल करने के लिए पूरी तरह फ्री है। कोई रजिस्ट्रेशन नहीं, कोई हिडन फीस नहीं, कोई लिमिटेशन नहीं। जितनी चाहें JSON फाइलें बदलें।'
        },
        {
          question: 'क्या मेरा JSON डेटा सेफ है?',
          answer: 'बिल्कुल सेफ! सभी कन्वर्ज़न पूरी तरह से आपके ब्राउज़र में JavaScript इस्तेमाल करके होता है। आपका JSON डेटा कभी आपके डिवाइस से बाहर नहीं जाता या किसी सर्वर पर अपलोड नहीं होता।'
        },
        {
          question: 'क्या मैं बड़ी JSON फाइलें बदल सकता हूँ?',
          answer: 'हाँ! हमारा कन्वर्टर बड़ी JSON फाइलों को कुशलता से हैंडल कर सकता है। सभी प्रोसेसिंग आपके ब्राउज़र में होती है, इसलिए परफॉर्मेंस आपके डिवाइस की क्षमताओं पर निर्भर करती है।'
        },
        {
          question: 'कन्वर्टर नेस्टेड ऑब्जेक्ट्स को कैसे हैंडल करता है?',
          answer: 'नेस्टेड ऑब्जेक्ट्स को डॉट नोटेशन का उपयोग करके फ्लैटन किया जाता है। उदाहरण के लिए, {"user": {"name": "John"}} CSV में "user.name" नाम का कॉलम बन जाता है।'
        },
        {
          question: 'JSON ऑब्जेक्ट्स में ऐरे का क्या होता है?',
          answer: 'ऑब्जेक्ट्स के अंदर ऐरे को CSV आउटपुट में JSON स्ट्रिंग्स में बदल दिया जाता है। यह सुनिश्चित करता है कि कन्वर्ज़न के दौरान कोई डेटा खो न जाए।'
        },
        {
          question: 'क्या मैं अलग डिलिमिटर चुन सकता हूँ?',
          answer: 'हाँ! आप अपने डिलिमिटर के रूप में कॉमा (,), सेमीकोलन (;), टैब या पाइप (|) के बीच चुन सकते हैं।'
        },
        {
          question: 'अगर मेरे JSON में फील्ड्स मिसिंग हैं तो क्या होगा?',
          answer: 'हमारा कन्वर्टर मिसिंग फील्ड्स को ग्रेसफुली हैंडल करता है। अगर किसी ऑब्जेक्ट में कोई फील्ड मिसिंग है, तो CSV में उस फील्ड के लिए एम्प्टी वैल्यू होगी।'
        },
        {
          question: 'क्या मैं सिंगल JSON ऑब्जेक्ट बदल सकता हूँ?',
          answer: 'हाँ! आप JSON ऐरे और सिंगल JSON ऑब्जेक्ट दोनों बदल सकते हैं। एक सिंगल ऑब्जेक्ट एक डेटा रो (प्लस हेडर्स अगर एनेबल हैं) के साथ CSV में बदल जाएगा।'
        }
      ]
    },

      cta: 'अपने JSON डेटा को CSV फॉर्मेट में अभी बदलना शुरू करें - तेज़, फ्री और सुरक्षित!'
    }
  }
}

export default jsonToCSVConfig

