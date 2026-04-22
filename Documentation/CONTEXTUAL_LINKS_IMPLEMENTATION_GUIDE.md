# Contextual Links Implementation Guide

## Overview
This document provides the complete mapping and implementation guide for adding contextual internal links across ALL tool configs.

## Implementation Status
- ✅ SEOContent component supports HTML links (DONE)
- ✅ Link styling implemented (DONE)
- ✅ Example added to JSON to CSV (DONE)
- 🔄 Remaining: Add links to 23 other tool configs

## Tool Relationship Mapping

### Developer Tools (4 tools)

#### 1. JSON Formatter (`jsonFormatter.config.js`)
**Related Tools**: JSON to CSV, Base64 Encoder, URL Encoder
**Links to Add**:
- English (intro): "...validate and format JSON data. You can also convert JSON using our <a href='/tools/json-to-csv'>JSON to CSV Converter</a> or encode data with <a href='/tools/base64-encoder-decoder'>Base64 Encoder</a>."
- Hindi (intro): "...JSON डेटा को वैलिडेट और फॉर्मेट करें। आप हमारे <a href='/tools/json-to-csv'>JSON to CSV Converter</a> का उपयोग करके JSON को कन्वर्ट भी कर सकते हैं।"

#### 2. Base64 Encoder (`base64Encoder.config.js`)
**Related Tools**: JSON Formatter, URL Encoder
**Links to Add**:
- English (section 1): "...encode binary data. For JSON data validation, use our <a href='/tools/json-formatter'>JSON Formatter</a>, or for URL-safe encoding, try our <a href='/tools/url-encoder-decoder'>URL Encoder</a>."
- Hindi (section 1): "...बाइनरी डेटा को एनकोड करें। JSON डेटा वैलिडेशन के लिए हमारे <a href='/tools/json-formatter'>JSON Formatter</a> का उपयोग करें।"

#### 3. URL Encoder (`urlEncoder.config.js`)
**Related Tools**: Base64 Encoder, JSON Formatter
**Links to Add**:
- English (intro): "...encode URLs for safe transmission. For binary data encoding, use our <a href='/tools/base64-encoder-decoder'>Base64 Encoder</a>, or validate JSON with <a href='/tools/json-formatter'>JSON Formatter</a>."
- Hindi (intro): "...URL को सुरक्षित ट्रांसमिशन के लिए एनकोड करें। बाइनरी डेटा एनकोडिंग के लिए हमारे <a href='/tools/base64-encoder-decoder'>Base64 Encoder</a> का उपयोग करें।"

#### 4. JSON to CSV (`jsonToCSV.config.js`)
**Status**: ✅ ALREADY DONE
**Links Added**: JSON Formatter, Base64 Encoder, URL Encoder

---

### PDF Tools (5 tools)

#### 5. Merge PDF (`mergePdf.config.js`)
**Related Tools**: Split PDF, Rotate PDF
**Links to Add**:
- English (intro): "...combine multiple PDFs. After merging, you can <a href='/tools/split-pdf'>split PDF files</a> or <a href='/tools/rotate-pdf'>rotate PDF pages</a> as needed."
- Hindi (intro): "...कई PDF को कंबाइन करें। मर्ज करने के बाद, आप <a href='/tools/split-pdf'>PDF फाइलों को स्प्लिट</a> कर सकते हैं।"

#### 6. Split PDF (`splitPdf.config.js`)
**Related Tools**: Merge PDF, Delete PDF Pages
**Links to Add**:
- English (section 1): "...split PDF into separate files. You can also <a href='/tools/merge-pdf'>merge PDF files</a> or <a href='/tools/delete-pdf-pages'>delete unwanted pages</a>."
- Hindi (section 1): "...PDF को अलग फाइलों में विभाजित करें। आप <a href='/tools/merge-pdf'>PDF फाइलों को मर्ज</a> भी कर सकते हैं।"

#### 7. Rotate PDF (`rotatePdf.config.js`)
**Related Tools**: Merge PDF, PDF to Image
**Links to Add**:
- English (intro): "...rotate PDF pages. After rotation, you can <a href='/tools/merge-pdf'>merge PDFs</a> or <a href='/tools/pdf-to-image'>convert PDF to images</a>."
- Hindi (intro): "...PDF पेज को रोटेट करें। रोटेशन के बाद, आप <a href='/tools/merge-pdf'>PDF मर्ज</a> कर सकते हैं।"

#### 8. PDF to Image (`pdfToImage.config.js`)
**Related Tools**: Image to PDF, Rotate PDF
**Links to Add**:
- English (section 1): "...convert PDF pages to images. You can also <a href='/tools/image-to-pdf'>convert images to PDF</a> or <a href='/tools/rotate-pdf'>rotate PDF pages</a> before conversion."
- Hindi (section 1): "...PDF पेज को इमेज में बदलें। आप <a href='/tools/image-to-pdf'>इमेज को PDF में बदल</a> भी सकते हैं।"

#### 9. Delete PDF Pages (`deletePdfPages.config.js`)
**Related Tools**: Split PDF, Merge PDF
**Links to Add**:
- English (intro): "...remove unwanted pages. You can also <a href='/tools/split-pdf'>split PDF files</a> or <a href='/tools/merge-pdf'>merge multiple PDFs</a>."
- Hindi (intro): "...अनचाहे पेज हटाएं। आप <a href='/tools/split-pdf'>PDF फाइलों को स्प्लिट</a> भी कर सकते हैं।"

---

### Image Tools (5 tools)

#### 10. Image Resizer (`imageResizer.config.js`)
**Related Tools**: Image Compressor, Image Format Converter
**Links to Add**:
- English (intro): "...resize images to any size. You can also <a href='/tools/image-compressor'>compress images</a> or <a href='/tools/image-format-converter'>convert image formats</a>."
- Hindi (intro): "...इमेज को किसी भी साइज़ में रीसाइज़ करें। आप <a href='/tools/image-compressor'>इमेज कंप्रेस</a> भी कर सकते हैं।"

#### 11. Image Compressor (`imageCompressor.config.js`)
**Related Tools**: Image Resizer, Image Format Converter
**Links to Add**:
- English (section 1): "...compress images with adjustable quality. You can also <a href='/tools/resize-image'>resize images</a> or <a href='/tools/image-format-converter'>convert formats</a>."
- Hindi (section 1): "...एडजस्टेबल क्वालिटी के साथ इमेज कंप्रेस करें। आप <a href='/tools/resize-image'>इमेज रीसाइज़</a> भी कर सकते हैं।"

#### 12. Image Format Converter (`imageFormatConverter.config.js`)
**Related Tools**: Image Compressor, Image Resizer
**Links to Add**:
- English (intro): "...convert between JPG, PNG, and WEBP. You can also <a href='/tools/image-compressor'>compress images</a> or <a href='/tools/resize-image'>resize them</a>."
- Hindi (intro): "...JPG, PNG और WEBP के बीच कन्वर्ट करें। आप <a href='/tools/image-compressor'>इमेज कंप्रेस</a> भी कर सकते हैं।"

#### 13. Image Crop (`imageCrop.config.js`)
**Related Tools**: Image Resizer, Image Compressor
**Links to Add**:
- English (section 1): "...crop images with custom dimensions. You can also <a href='/tools/resize-image'>resize images</a> or <a href='/tools/image-compressor'>compress them</a>."
- Hindi (section 1): "...कस्टम डाइमेंशन के साथ इमेज क्रॉप करें। आप <a href='/tools/resize-image'>इमेज रीसाइज़</a> भी कर सकते हैं।"

#### 14. Image to PDF (`imageToPdf.config.js`)
**Related Tools**: PDF to Image, Merge PDF
**Links to Add**:
- English (intro): "...convert images to PDF. You can also <a href='/tools/pdf-to-image'>convert PDF to images</a> or <a href='/tools/merge-pdf'>merge multiple PDFs</a>."
- Hindi (intro): "...इमेज को PDF में बदलें। आप <a href='/tools/pdf-to-image'>PDF को इमेज में बदल</a> भी सकते हैं।"

---

### Text Tools (6 tools)

#### 15. Word Counter (`wordCounter.config.js`)
**Related Tools**: Character Counter, Text Case Converter
**Links to Add**:
- English (intro): "...count words, characters, and sentences. You can also use our <a href='/tools/character-counter'>Character Counter</a> or <a href='/tools/text-case-converter'>Text Case Converter</a>."
- Hindi (intro): "...शब्द, कैरेक्टर और सेंटेंस गिनें। आप हमारे <a href='/tools/character-counter'>Character Counter</a> का भी उपयोग कर सकते हैं।"

#### 16. Character Counter (`characterCounter.config.js`)
**Related Tools**: Word Counter, Remove Extra Spaces
**Links to Add**:
- English (section 1): "...count characters with and without spaces. You can also <a href='/tools/word-counter'>count words</a> or <a href='/tools/remove-extra-spaces'>remove extra spaces</a>."
- Hindi (section 1): "...स्पेस के साथ और बिना कैरेक्टर गिनें। आप <a href='/tools/word-counter'>शब्द गिन</a> भी सकते हैं।"

#### 17. Text Case Converter (`textCaseConverter.config.js`)
**Related Tools**: Word Counter, Remove Extra Spaces
**Links to Add**:
- English (intro): "...convert text to UPPERCASE, lowercase, Title Case. You can also <a href='/tools/word-counter'>count words</a> or <a href='/tools/remove-extra-spaces'>clean up spacing</a>."
- Hindi (intro): "...टेक्स्ट को UPPERCASE, lowercase में कन्वर्ट करें। आप <a href='/tools/word-counter'>शब्द गिन</a> भी सकते हैं।"

#### 18. Remove Extra Spaces (`removeExtraSpaces.config.js`)
**Related Tools**: Word Counter, Text Case Converter
**Links to Add**:
- English (section 1): "...remove multiple spaces and clean text. You can also <a href='/tools/word-counter'>count words</a> or <a href='/tools/text-case-converter'>change text case</a>."
- Hindi (section 1): "...मल्टिपल स्पेस हटाएं और टेक्स्ट साफ करें। आप <a href='/tools/word-counter'>शब्द गिन</a> भी सकते हैं।"

#### 19. Remove Duplicate Lines (`removeDuplicateLines.config.js`)
**Related Tools**: Word Sorter, Remove Extra Spaces
**Links to Add**:
- English (intro): "...remove duplicate lines from text. You can also <a href='/tools/word-sorter'>sort lines alphabetically</a> or <a href='/tools/remove-extra-spaces'>clean up spacing</a>."
- Hindi (intro): "...टेक्स्ट से डुप्लीकेट लाइन हटाएं। आप <a href='/tools/word-sorter'>लाइनों को सॉर्ट</a> भी कर सकते हैं।"

#### 20. Word Sorter (`wordSorter.config.js`)
**Related Tools**: Remove Duplicate Lines, Word Counter
**Links to Add**:
- English (section 1): "...sort text lines alphabetically. You can also <a href='/tools/remove-duplicate-lines'>remove duplicates</a> or <a href='/tools/word-counter'>count words</a>."
- Hindi (section 1): "...टेक्स्ट लाइनों को वर्णानुक्रम में सॉर्ट करें। आप <a href='/tools/remove-duplicate-lines'>डुप्लीकेट हटा</a> भी सकते हैं।"

---

## Implementation Instructions

### Step 1: Locate seoContent Section
In each config file, find the `seoContent` section under both `en` and `hi` language objects.

### Step 2: Add Links to intro OR first section
Choose ONE of these locations:
- **Option A**: Add to `intro` field (preferred for shorter text)
- **Option B**: Add to first section's `content` field

### Step 3: Insert HTML Links
Use this format:
```javascript
content: 'Your text here. You can also use our <a href="/tools/tool-slug">Tool Name</a> for related tasks.'
```

### Step 4: Maintain Natural Flow
- Don't force links
- Keep sentences natural
- Use descriptive anchor text
- Limit to 2-3 links per page

### Example Implementation

**Before**:
```javascript
intro: 'Base64 is a binary-to-text encoding scheme used in web development.'
```

**After**:
```javascript
intro: 'Base64 is a binary-to-text encoding scheme used in web development. For JSON data validation, use our <a href="/tools/json-formatter">JSON Formatter</a>, or for URL-safe encoding, try our <a href="/tools/url-encoder-decoder">URL Encoder</a>.'
```

---

## Quality Checklist

For each tool config:
- [ ] Links added to English content
- [ ] Links added to Hindi content
- [ ] Links are relevant to the tool
- [ ] Anchor text is descriptive
- [ ] Links use correct `/tools/slug` format
- [ ] Natural sentence flow maintained
- [ ] 2-3 links maximum per page

---

## Automation Script (Future Enhancement)

For future updates, consider creating a Node.js script that:
1. Reads all tool configs
2. Applies relationship mapping
3. Inserts links programmatically
4. Maintains bilingual consistency

---

## Testing

After implementation:
1. Visit each tool page
2. Scroll to SEO content section
3. Verify links are visible and clickable
4. Test link navigation
5. Check both English and Hindi versions

---

## Maintenance

When adding new tools:
1. Add tool to relationship mapping
2. Update related tools' configs to link back
3. Maintain bidirectional linking
4. Keep links relevant and useful

---

**Status**: Implementation guide complete. Ready for systematic application across all 24 tool configs.