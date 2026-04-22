# Sitemap Generation Script

## Overview

This directory contains the auto-generated sitemap script that creates `public/sitemap.xml` from the tools registry in `src/data/tools.js`.

## Files

- **generate-sitemap.js** - Main script that generates sitemap.xml

## How It Works

The script:
1. Reads `src/data/tools.js` using regex parsing (no imports needed)
2. Extracts all active tools with their routes
3. Generates sitemap.xml with:
   - Homepage (priority 1.0)
   - All Tools page (priority 0.9)
   - Category pages (priority 0.8)
   - Individual tool pages (priority 0.9)
   - Static pages (about, contact, privacy)

## Usage

### Manual Generation
```bash
npm run generate-sitemap
```

### Automatic Generation
The sitemap is automatically generated before each build:
```bash
npm run build
```

This ensures the sitemap is always up-to-date in production.

## Adding New Tools

**No manual sitemap updates needed!**

When you add a new tool to `src/data/tools.js`:
1. Set `active: true` for the tool
2. Run `npm run generate-sitemap` (or it runs automatically on build)
3. The new tool will appear in sitemap.xml

## Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://free-tools-nine-delta.vercel.app/</loc>
    <lastmod>2026-04-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... more URLs ... -->
</urlset>
```

## URL Priorities

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | weekly |
| All Tools | 0.9 | weekly |
| Tool Pages | 0.9 | monthly |
| Categories | 0.8 | weekly |
| About/Contact | 0.5 | monthly |
| Privacy Policy | 0.3 | yearly |

## Configuration

Edit these values in `generate-sitemap.js`:

```javascript
const SITE_URL = 'https://free-tools-nine-delta.vercel.app';
const CURRENT_DATE = new Date().toISOString().split('T')[0];
```

## Vercel Deployment

The sitemap is automatically generated during the build process on Vercel:
1. Vercel runs `npm run build`
2. Build script runs `npm run generate-sitemap` first
3. Sitemap is generated in `public/sitemap.xml`
4. Vite builds the app
5. Sitemap is deployed with the static assets

## SEO Benefits

✅ All active tools automatically included
✅ Proper priority and change frequency
✅ Always up-to-date with current date
✅ No manual maintenance required
✅ Search engines can discover all pages

## Troubleshooting

### Script fails to run
- Ensure Node.js v14+ is installed
- Check that `src/data/tools.js` exists
- Verify tools array format is correct

### Tools missing from sitemap
- Check tool has `active: true` in tools.js
- Verify tool has a `route` property
- Run script manually to see errors

### Sitemap not updating
- Delete `public/sitemap.xml`
- Run `npm run generate-sitemap`
- Check git to ensure file is committed