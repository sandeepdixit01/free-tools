# Structured Data (JSON-LD) Implementation Guide

## Overview
This document describes the implementation of structured data (JSON-LD) schemas across all tool pages for improved SEO and rich search results.

## Architecture

### 1. Core Components

#### SEOHead Component (`src/components/SEO/SEOHead.jsx`)
Updated to accept separate schema props:
- `webApplicationData` - WebApplication schema
- `howToData` - HowTo schema
- `faqData` - FAQPage schema
- `breadcrumbData` - BreadcrumbList schema (existing)

Each schema renders in its own `<script type="application/ld+json">` tag.

#### Structured Data Helper (`src/utils/structuredDataHelper.js`)
Utility functions to generate schemas from tool configs:
- `generateWebApplicationSchema(config, language)` - Creates WebApplication schema
- `generateHowToSchema(config, language)` - Creates HowTo schema from howTo steps
- `generateFAQSchema(config, language)` - Creates FAQPage schema from FAQ items
- `generateAllStructuredData(config, language)` - Generates all schemas at once

### 2. Implementation Pattern

Every tool page follows this 3-step pattern:

#### Step 1: Import Helper Functions
```javascript
import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredDataHelper';
```

#### Step 2: Generate Schemas (after adSlots, before return)
```javascript
// Generate structured data schemas
const structuredData = useMemo(() => {
  return {
    webApplication: generateWebApplicationSchema(configName, language),
    howTo: generateHowToSchema(configName, language),
    faq: generateFAQSchema(configName, language)
  };
}, [language]);
```

#### Step 3: Pass to SEOHead Component
```javascript
<SEOHead
  title={seoData.title}
  description={seoData.description}
  keywords={...}
  canonical={seoData.canonical}
  webApplicationData={structuredData.webApplication}
  howToData={structuredData.howTo}
  faqData={structuredData.faq}
/>
```

## Implementation Status

### ✅ Completed (6 pages)
1. WordCounter.jsx - `wordCounterConfig`
2. CharacterCounter.jsx - `characterCounterConfig`
3. TextCaseConverter.jsx - `textCaseConverterConfig`
4. RemoveExtraSpaces.jsx - `removeExtraSpacesConfig`
5. JSONFormatter.jsx - `jsonFormatterConfig`

### 🔄 Remaining (15 pages)

#### Text Tools (2)
6. RemoveDuplicateLines.jsx - `removeDuplicateLinesConfig`
7. WordSorter.jsx - `wordSorterConfig`

#### Developer Tools (3)
8. Base64Encoder.jsx - `base64EncoderConfig`
9. URLEncoder.jsx - `urlEncoderConfig`
10. JSONToCSV.jsx - `jsonToCSVConfig`

#### PDF Tools (5)
11. MergePdf.jsx - `mergePdfConfig`
12. SplitPdf.jsx - `splitPdfConfig`
13. RotatePdf.jsx - `rotatePdfConfig`
14. PdfToImage.jsx - `pdfToImageConfig`
15. DeletePdfPages.jsx - `deletePdfPagesConfig`

#### Image Tools (5)
16. ImageToPdf.jsx - `imageToPdfConfig`
17. ImageResizerNew.jsx - `imageResizerConfig`
18. ImageCompressor.jsx - `imageCompressorConfig`
19. ImageFormatConverter.jsx - `imageFormatConverterConfig`
20. ImageCrop.jsx - `imageCropConfig`

## Schema Examples

### WebApplication Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Word Counter",
  "url": "https://free-tools-nine-delta.vercel.app/tools/word-counter",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "description": "Count words, characters, sentences...",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "softwareVersion": "2.0.0",
  "author": {
    "@type": "Organization",
    "name": "FreeTools"
  }
}
```

### HowTo Schema
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to use Word Counter",
  "description": "Step-by-step guide to use Word Counter",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Enter or Paste Your Text",
      "text": "Type directly into the text area or paste your content...",
      "image": "📝"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "View Real-Time Results",
      "text": "See instant statistics including word count...",
      "image": "📊"
    }
  ]
}
```

### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is this word counter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our word counter is highly accurate and follows standard word counting conventions..."
      }
    }
  ]
}
```

## Key Features

✅ **Fully Config-Driven** - All data sourced from tool configs
✅ **Bilingual Support** - Works with both EN and HI content
✅ **No Duplication** - FAQ schema only rendered once per page
✅ **Scalable** - New tools automatically get schemas
✅ **SEO Compliant** - Follows schema.org standards
✅ **Automated** - Helper functions generate valid JSON-LD

## Testing

### 1. Browser DevTools
Open any tool page and check the `<head>` section for:
```html
<script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebApplication",...}
</script>
<script type="application/ld+json">
  {"@context":"https://schema.org","@type":"HowTo",...}
</script>
<script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage",...}
</script>
```

### 2. Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter tool page URL
3. Verify all 3 schemas are detected:
   - ✅ WebApplication
   - ✅ HowTo
   - ✅ FAQPage

### 3. Schema Markup Validator
1. Visit: https://validator.schema.org/
2. Paste page URL or JSON-LD code
3. Verify no errors

## Benefits

### SEO Improvements
- **Rich Snippets** - Enhanced search results with ratings, pricing, etc.
- **Knowledge Graph** - Better chance of appearing in Google's Knowledge Graph
- **Voice Search** - Optimized for voice assistants (Alexa, Google Assistant)
- **Click-Through Rate** - Rich results increase CTR by 20-30%

### Search Features
- **How-To Rich Results** - Step-by-step instructions in search
- **FAQ Rich Results** - Expandable Q&A in search results
- **App Listings** - Tool appears in app/software searches
- **Sitelinks** - Additional links below main result

## Maintenance

### Adding New Tools
New tools automatically get structured data if they:
1. Follow the standard config schema v2.0
2. Include `howTo` section with steps
3. Include `faq` section with items
4. Use the 3-step implementation pattern

### Updating Existing Tools
To update schemas:
1. Modify tool config (not page code)
2. Schemas regenerate automatically
3. No manual JSON-LD editing needed

## Troubleshooting

### Schema Not Appearing
- Check browser console for errors
- Verify config has required sections (howTo, faq)
- Ensure helper functions imported correctly

### Invalid Schema
- Run through validator
- Check config data format
- Verify language prop passed correctly

### Duplicate FAQ Schema
- Only pass `faqData` to SEOHead once
- FAQ component should NOT generate its own schema
- Helper function handles FAQ schema generation

## References

- Schema.org WebApplication: https://schema.org/WebApplication
- Schema.org HowTo: https://schema.org/HowTo
- Schema.org FAQPage: https://schema.org/FAQPage
- Google Rich Results: https://developers.google.com/search/docs/appearance/structured-data