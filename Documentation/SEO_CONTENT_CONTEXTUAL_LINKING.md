# SEOContent Component - Contextual Linking Guide

## Overview
The SEOContent component now supports HTML content with contextual internal links. This allows you to naturally link to related tools and pages within your SEO content.

## Changes Made

### 1. Grid Layout Fix
- **Before**: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- **After**: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
- **Result**: 4 items now display as 2x2 grid on desktop instead of 3+1

### 2. HTML Content Support
- Both `intro` and `section.content` now support HTML via `dangerouslySetInnerHTML`
- Internal links are automatically styled with hover effects
- Links are crawlable by search engines

## Usage Examples

### Example 1: Basic Internal Link in Content

```javascript
seoContent: {
  sections: [
    {
      title: 'What is JSON to CSV Conversion?',
      content: 'JSON to CSV conversion transforms JSON data into CSV format. You can also use our <a href="/tools/json-formatter">JSON Formatter</a> to validate your JSON before conversion.',
      keywords: ['json to csv', 'json conversion']
    }
  ]
}
```

### Example 2: Multiple Links in Content

```javascript
seoContent: {
  sections: [
    {
      title: 'Related Tools',
      content: 'Our suite includes <a href="/tools/json-formatter">JSON Formatter</a>, <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>, and <a href="/tools/url-encoder-decoder">URL Encoder</a> for all your data conversion needs.',
      keywords: ['developer tools', 'data conversion']
    }
  ]
}
```

### Example 3: Link in Intro Text

```javascript
seoContent: {
  intro: 'Convert JSON to CSV format easily. Also check out our <a href="/tools/json-formatter">JSON Formatter</a> for validating JSON data.',
  sections: [
    // ... sections
  ]
}
```

### Example 4: Bilingual Support

```javascript
// English
en: {
  seoContent: {
    sections: [
      {
        title: 'JSON Tools',
        content: 'Use our <a href="/tools/json-formatter">JSON Formatter</a> to validate JSON data before conversion.',
        keywords: ['json tools']
      }
    ]
  }
},

// Hindi
hi: {
  seoContent: {
    sections: [
      {
        title: 'JSON टूल्स',
        content: 'कन्वर्ज़न से पहले JSON डेटा को वैलिडेट करने के लिए हमारे <a href="/tools/json-formatter">JSON Formatter</a> का उपयोग करें।',
        keywords: ['json tools']
      }
    ]
  }
}
```

## Link Styling

Links in SEO content are automatically styled with:
- Purple color (`#667eea`)
- Subtle underline on hover
- Smooth transition effects
- Consistent with site design

## SEO Benefits

1. **Internal Linking**: Improves site structure and PageRank distribution
2. **Crawlable Links**: Search engines can discover and index linked pages
3. **Contextual Relevance**: Links appear naturally within content
4. **User Experience**: Easy navigation to related tools

## Best Practices

### DO:
✅ Link to related tools naturally within content
✅ Use descriptive anchor text (e.g., "JSON Formatter" not "click here")
✅ Keep links relevant to the content topic
✅ Use absolute paths starting with `/` (e.g., `/tools/json-formatter`)
✅ Test links to ensure they work correctly

### DON'T:
❌ Overuse links (1-3 per section is ideal)
❌ Use generic anchor text like "click here" or "read more"
❌ Link to external sites (use internal links only)
❌ Break the natural flow of content with too many links
❌ Use JavaScript in links (use plain HTML `<a>` tags)

## Example: Complete Config with Contextual Links

```javascript
export default {
  en: {
    seoContent: {
      intro: 'Convert JSON to CSV format with our free online tool. Also explore our <a href="/tools/json-formatter">JSON Formatter</a> for data validation.',
      sections: [
        {
          title: 'What is JSON to CSV Conversion?',
          content: 'JSON to CSV conversion transforms JSON data into CSV format. Our <a href="/tools/json-formatter">JSON Formatter</a> can help validate your JSON before conversion, ensuring error-free results.',
          keywords: ['json to csv', 'json conversion']
        },
        {
          title: 'Why Convert JSON to CSV?',
          content: 'CSV files are widely supported by spreadsheet applications. After conversion, you can also use our <a href="/tools/text-case-converter">Text Case Converter</a> to format column headers.',
          keywords: ['csv benefits', 'data analysis']
        },
        {
          title: 'Developer Tools Suite',
          content: 'Explore our complete suite: <a href="/tools/base64-encoder-decoder">Base64 Encoder</a>, <a href="/tools/url-encoder-decoder">URL Encoder</a>, and more developer tools.',
          keywords: ['developer tools', 'data conversion']
        },
        {
          title: 'Data Processing Workflow',
          content: 'For a complete workflow: validate with <a href="/tools/json-formatter">JSON Formatter</a>, convert to CSV, then use <a href="/tools/remove-extra-spaces">Remove Extra Spaces</a> to clean data.',
          keywords: ['data workflow', 'json processing']
        }
      ]
    }
  }
}
```

## Technical Implementation

### Component Changes
- `intro` now uses `dangerouslySetInnerHTML` for HTML rendering
- `section.content` uses `dangerouslySetInnerHTML` when content is a string
- CSS added for `.seo-content-intro a` and `.seo-section-content a`

### Security Note
While we use `dangerouslySetInnerHTML`, content comes from trusted config files (not user input), so XSS risk is minimal. All configs are part of the codebase and reviewed before deployment.

## Testing Checklist

- [ ] Links render correctly in all browsers
- [ ] Links are clickable and navigate to correct pages
- [ ] Hover effects work properly
- [ ] Links are crawlable (check with browser dev tools)
- [ ] Grid layout shows 2x2 for 4 items on desktop
- [ ] Mobile view shows single column
- [ ] Bilingual content works correctly
- [ ] No console errors or warnings

## Global Impact

✅ **All pages using SEOContent automatically benefit from these changes**
✅ No need to modify individual pages
✅ Backward compatible with existing configs
✅ Works across all tool pages, category pages, and home page

## Support

For questions or issues, refer to:
- `src/components/shared/Content/SEOContent.jsx`
- `src/components/shared/Content/SEOContent.css`
- This documentation file