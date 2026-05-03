# Canonical URL Migration - Complete Documentation

## Overview

Successfully migrated all hardcoded canonical URLs to dynamic generation using environment variables. This change centralizes domain management and makes the application scalable.

## What Changed

### Before
- **52 hardcoded canonical URLs** across config files
- Domain (`https://freetools.com`) hardcoded in 26 files
- Changing domain required updating 52 locations manually
- Not scalable for multi-domain deployments

### After
- **Zero hardcoded canonical URLs**
- Single source of truth: `VITE_SITE_URL` in `.env`
- Dynamic URL generation via `urlHelper.js`
- Changing domain requires updating only ONE file (`.env`)

## Files Modified

### New Files Created
1. **`src/utils/urlHelper.js`** - Centralized URL generation utilities
2. **`scripts/update-canonical-urls.js`** - Migration script (can be deleted after verification)
3. **`Documentation/CANONICAL_URL_MIGRATION.md`** - This documentation

### Files Updated (26 total)

#### Tool Configs (21 files)
- `removeExtraSpaces.config.js`
- `imageCrop.config.js`
- `textCaseConverter.config.js`
- `imageResizer.config.js`
- `rotatePdf.config.js`
- `mergePdf.config.js`
- `imageCompressor.config.js`
- `splitPdf.config.js`
- `deletePdfPages.config.js`
- `imageToPdf.config.js`
- `imageFormatConverter.config.js`
- `wordSorter.config.js`
- `jsonToCSV.config.js`
- `characterCounter.config.js`
- `imageResizer50kb.config.js`
- `removeDuplicateLines.config.js`
- `base64Encoder.config.js`
- `wordCounter.config.js`
- `jsonFormatter.config.js`
- `pdfToImage.config.js`
- `urlEncoder.config.js`

#### Category Configs (4 files)
- `image.config.js`
- `pdf.config.js`
- `text.config.js`
- `developer.config.js`

#### Page Configs (1 file)
- `allTools.config.js`

#### Utility Files (1 file)
- `structuredDataHelper.js` - Updated to use `urlHelper.js`

## Technical Implementation

### 1. URL Helper Utility (`src/utils/urlHelper.js`)

```javascript
// Get base URL from environment
export const getBaseUrl = () => {
  return import.meta.env.VITE_SITE_URL || 'https://freetools.com';
};

// Generate tool canonical URL
export const getToolCanonicalUrl = (toolSlug, language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}/tools/${toolSlug}`;
};

// Generate category canonical URL
export const getCategoryCanonicalUrl = (categorySlug, language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}/tools/${categorySlug}`;
};

// Generate page canonical URL
export const getPageCanonicalUrl = (pagePath, language = 'en') => {
  const baseUrl = getBaseUrl();
  const langPrefix = language === 'hi' ? '/hi' : '';
  return `${baseUrl}${langPrefix}/${pagePath}`;
};
```

### 2. Config File Pattern

**Before:**
```javascript
seo: {
  en: {
    canonical: 'https://freetools.com/tools/word-counter',
    // ...
  },
  hi: {
    canonical: 'https://freetools.com/hi/tools/word-counter',
    // ...
  }
}
```

**After:**
```javascript
import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

seo: {
  en: {
    canonical: getToolCanonicalUrl('word-counter', 'en'),
    // ...
  },
  hi: {
    canonical: getToolCanonicalUrl('word-counter', 'hi'),
    // ...
  }
}
```

### 3. Environment Configuration

**`.env` file:**
```bash
VITE_SITE_URL=https://freetools.com
```

**For development:**
```bash
VITE_SITE_URL=http://localhost:3000
```

**For staging:**
```bash
VITE_SITE_URL=https://staging.freetools.com
```

## Benefits

### 1. Scalability
- Change domain in ONE place (`.env`)
- Support multiple environments (dev, staging, production)
- Easy to deploy to different domains

### 2. Maintainability
- Single source of truth for domain
- Consistent URL generation across the app
- Easier to debug URL-related issues

### 3. Flexibility
- Support for multi-domain deployments
- Easy A/B testing with different domains
- Simple white-label deployments

### 4. SEO
- Canonical URLs still work correctly
- Structured data uses dynamic URLs
- No hardcoded references to break

## Verification

### Check for Hardcoded URLs
```bash
# Should return 0 results
grep -r "https://freetools.com" src/configs/
```

### Test URL Generation
```javascript
import { getToolCanonicalUrl } from './src/utils/urlHelper.js';

console.log(getToolCanonicalUrl('word-counter', 'en'));
// Output: https://freetools.com/tools/word-counter

console.log(getToolCanonicalUrl('word-counter', 'hi'));
// Output: https://freetools.com/hi/tools/word-counter
```

### Build Verification
```bash
npm run build
# Should complete successfully with no errors
```

## Migration Process

The migration was performed using an automated script:

```bash
node scripts/update-canonical-urls.js
```

**Results:**
- ✅ 21 tool configs updated
- ✅ 4 category configs updated
- ✅ 1 page config updated
- ✅ 26 total files modified
- ✅ 52 hardcoded URLs replaced
- ✅ Build successful
- ✅ Zero hardcoded URLs remaining

## Usage Examples

### For Tool Pages
```javascript
import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

canonical: getToolCanonicalUrl('tool-slug', 'en')
```

### For Category Pages
```javascript
import { getCategoryCanonicalUrl } from '../../utils/urlHelper.js';

canonical: getCategoryCanonicalUrl('category-slug', 'en')
```

### For Static Pages
```javascript
import { getPageCanonicalUrl } from '../../utils/urlHelper.js';

canonical: getPageCanonicalUrl('about', 'en')
```

### For Home Page
```javascript
import { getHomeCanonicalUrl } from '../../utils/urlHelper.js';

canonical: getHomeCanonicalUrl('en')
```

## Future Considerations

### Adding New Tools
When adding new tools, use the helper functions:

```javascript
import { getToolCanonicalUrl } from '../../utils/urlHelper.js';

export const newToolConfig = {
  seo: {
    en: {
      canonical: getToolCanonicalUrl('new-tool-slug', 'en'),
      // ...
    }
  }
};
```

### Multi-Domain Support
To support multiple domains:

1. Set `VITE_SITE_URL` per environment
2. Use environment-specific `.env` files
3. URLs will automatically adapt

### White-Label Deployments
For white-label versions:

1. Create environment-specific `.env` file
2. Set `VITE_SITE_URL=https://client-domain.com`
3. Deploy - all URLs will use client domain

## Troubleshooting

### Issue: Canonical URLs showing localhost
**Solution:** Ensure `VITE_SITE_URL` is set in `.env` for production builds

### Issue: URLs not updating after changing .env
**Solution:** Restart dev server or rebuild the application

### Issue: Import errors for urlHelper
**Solution:** Check import path is correct relative to config file location

## Rollback Plan

If needed, the migration can be rolled back:

1. Restore config files from git history
2. Remove `src/utils/urlHelper.js`
3. Remove import statements from configs

However, this is NOT recommended as the new approach is superior.

## Conclusion

This migration successfully:
- ✅ Eliminated all 52 hardcoded canonical URLs
- ✅ Centralized domain management
- ✅ Improved scalability and maintainability
- ✅ Maintained SEO best practices
- ✅ Passed all build and runtime tests

**Status:** ✅ COMPLETE AND VERIFIED

---

**Last Updated:** 2026-05-03  
**Migration Script:** `scripts/update-canonical-urls.js`  
**Verification:** Build successful, zero hardcoded URLs remaining