# Dynamic Tools System - Complete Guide

## 🎯 Overview

The application now uses a **single source of truth** for all tool data. All pages dynamically render tools based on their `active` status and other properties.

## 📁 Central Data File

**Location:** `src/data/tools.js`

This is the **ONLY** place where tool metadata should be defined.

## 🔧 Tool Properties

Each tool must have these properties:

```javascript
{
  id: 'tool-slug',              // Unique identifier
  name: {                        // Bilingual name
    en: 'Tool Name',
    hi: 'टूल नाम'
  },
  description: {                 // Bilingual description
    en: 'Tool description',
    hi: 'टूल विवरण'
  },
  category: 'image',             // One of: image, pdf, text, developer
  route: '/tools/tool-slug',     // URL path
  icon: '🔧',                    // Emoji or icon
  active: true,                  // Whether tool is ready for production
  featured: true,                // Whether tool should be featured
  usageCount: 1250,              // Popularity metric (for sorting)
  config: toolConfig             // Reference to tool config object
}
```

## 🚀 Adding a New Tool

### Step 1: Create Tool Config

Create config file: `src/configs/tools/myNewTool.config.js`

```javascript
export const myNewToolConfig = {
  metadata: {
    schemaVersion: '2.0',
    category: 'image',
    // ... other metadata
  },
  // ... rest of config
}
```

### Step 2: Add to Central Data

Edit `src/data/tools.js`:

```javascript
// 1. Import the config
import { myNewToolConfig } from '../configs/tools/myNewTool.config'

// 2. Add to tools array
export const tools = [
  // ... existing tools
  {
    id: 'my-new-tool',
    name: {
      en: 'My New Tool',
      hi: 'मेरा नया टूल'
    },
    description: {
      en: 'Does something amazing',
      hi: 'कुछ अद्भुत करता है'
    },
    category: 'image',
    route: '/tools/my-new-tool',
    icon: '✨',
    active: true,        // Set to false until ready
    featured: true,      // Set to true for homepage
    usageCount: 0,       // Start at 0
    config: myNewToolConfig
  }
]
```

### Step 3: Create Tool Component (if needed)

Create `src/pages/MyNewTool.jsx` or use existing tool page structure.

### Step 4: Add Route (if needed)

Edit `src/main.jsx` to add route if using custom component.

**That's it!** The tool will now appear on:
- ✅ Homepage (if `featured: true`)
- ✅ All Tools page (if `active: true`)
- ✅ Category page (if `active: true`)
- ✅ Popular tools section (based on `usageCount`)

## 📊 Helper Functions

### Get Active Tools Only

```javascript
import { getActiveTools } from '../data/tools'

const activeTools = getActiveTools()
// Returns only tools where active === true
```

### Get Popular Tools

```javascript
import { getPopularTools } from '../data/tools'

const popularTools = getPopularTools(6)
// Returns top 6 tools sorted by usageCount
// Falls back to featured tools if all have 0 usage
```

### Get Tools by Category

```javascript
import { getToolsByCategory } from '../data/tools'

const imageTools = getToolsByCategory('image', true)
// Second parameter: activeOnly (default: true)
```

### Get Random Tools

```javascript
import { getRandomTools } from '../data/tools'

const randomTools = getRandomTools(3, ['tool-id-to-exclude'])
// Returns 3 random active tools, excluding specified IDs
```

### Get Featured Tools

```javascript
import { getFeaturedTools } from '../data/tools'

const featured = getFeaturedTools(4)
// Returns up to 4 featured active tools
```

## 🎨 Page Implementation Examples

### Homepage (App.jsx)

```javascript
import { getPopularTools, getFeaturedTools } from './data/tools'

function App() {
  const popularTools = useMemo(() => getPopularTools(8), [])
  const quickAccessTools = useMemo(() => getFeaturedTools(4), [])
  
  return (
    <main>
      <Hero quickAccessTools={quickAccessTools} />
      <ToolGrid tools={popularTools} />
    </main>
  )
}
```

### All Tools Page

```javascript
import { getToolsByCategory, getAllCategories } from '../data/tools'

const toolsByCategory = useMemo(() => {
  const categories = getAllCategories()
  return categories.map(categoryId => ({
    id: categoryId,
    tools: getToolsByCategory(categoryId, true) // activeOnly = true
  })).filter(category => category.tools.length > 0)
}, [])
```

### Category Page

```javascript
import { getToolsByCategory } from '../data/tools'

const categoryTools = useMemo(() => {
  return getToolsByCategory(categoryConfig.id, true) // activeOnly = true
}, [categoryConfig.id])
```

## 🔒 Tool Visibility Rules

### Active Tools (`active: true`)
- ✅ Appear on homepage
- ✅ Appear on All Tools page
- ✅ Appear on category pages
- ✅ Clickable and routable
- ✅ Included in search results

### Inactive Tools (`active: false`)
- ❌ Hidden from all pages
- ❌ Not clickable
- ❌ Not routable
- ❌ Not in search results

**Use Case:** Set `active: false` for tools under development

## 📈 Popularity System

### How It Works

1. Tools are sorted by `usageCount` (descending)
2. Higher usage = higher ranking in "Popular Tools"
3. If all tools have `usageCount: 0`, falls back to `featured: true` tools

### Updating Usage Count

```javascript
// In src/data/tools.js
{
  id: 'image-resizer',
  usageCount: 1250,  // Update this number
  // ...
}
```

**Future Enhancement:** Implement analytics to auto-update usage counts

## 🎯 Featured Tools

### What Are Featured Tools?

Tools with `featured: true` are:
- Shown in hero section quick access
- Prioritized when all usage counts are 0
- Typically your best/most important tools

### Best Practices

- Feature 4-6 tools maximum
- Feature tools from different categories
- Feature tools that are fully functional
- Update featured status based on user feedback

## 🚫 Disabling Tools

### Temporary Disable

```javascript
{
  id: 'tool-under-maintenance',
  active: false,  // Tool hidden but data preserved
  // ... rest of properties
}
```

### Permanent Removal

Simply delete the tool object from the `tools` array in `src/data/tools.js`

## 📝 Migration from Old System

### Old Way (Hardcoded)

```javascript
// ❌ DON'T DO THIS
const tools = [
  { name: 'Tool 1', ... },
  { name: 'Tool 2', ... }
]
```

### New Way (Dynamic)

```javascript
// ✅ DO THIS
import { getActiveTools } from '../data/tools'

const tools = getActiveTools()
```

## 🔍 Finding Hardcoded Tools

Search for these patterns in your codebase:

```bash
# Search for hardcoded tool arrays
grep -r "const tools = \[" src/

# Search for hardcoded tool lists
grep -r "toolRegistry = \[" src/
```

All should import from `src/data/tools.js` instead.

## ✅ Validation Checklist

Before deploying a new tool:

- [ ] Tool added to `src/data/tools.js`
- [ ] All required properties present
- [ ] Bilingual content (EN + HI)
- [ ] Config file created and imported
- [ ] `active: false` during development
- [ ] `active: true` when ready for production
- [ ] Tool appears on correct category page
- [ ] Tool appears on All Tools page
- [ ] Tool appears on homepage (if featured)
- [ ] Route works correctly
- [ ] No console errors

## 🎓 Example: Complete New Tool

```javascript
// 1. Create config: src/configs/tools/pdfSplitter.config.js
export const pdfSplitterConfig = {
  metadata: {
    schemaVersion: '2.0',
    category: 'pdf',
    toolId: 'pdf-splitter'
  },
  // ... rest of config
}

// 2. Add to src/data/tools.js
import { pdfSplitterConfig } from '../configs/tools/pdfSplitter.config'

export const tools = [
  // ... existing tools
  {
    id: 'pdf-splitter',
    name: {
      en: 'PDF Splitter',
      hi: 'PDF स्प्लिटर'
    },
    description: {
      en: 'Split PDF into separate pages',
      hi: 'PDF को अलग पेजों में विभाजित करें'
    },
    category: 'pdf',
    route: '/tools/split-pdf',
    icon: '✂️',
    active: true,
    featured: false,
    usageCount: 0,
    config: pdfSplitterConfig
  }
]

// 3. Tool automatically appears everywhere!
// - Homepage: No (featured: false)
// - All Tools: Yes (active: true)
// - PDF Category: Yes (active: true, category: 'pdf')
// - Popular Tools: No (usageCount: 0)
```

## 🐛 Troubleshooting

### Tool Not Appearing

1. Check `active: true` in `src/data/tools.js`
2. Check correct category
3. Check no console errors
4. Clear browser cache
5. Restart dev server

### Tool Appearing in Wrong Place

1. Verify `category` property
2. Verify `featured` property
3. Check `usageCount` for popular tools

### Old Tool Still Showing

1. Check if tool exists in `src/data/tools.js`
2. Clear browser cache
3. Check for hardcoded references

## 📚 Related Documentation

- `ADDING_NEW_TOOL.md` - Step-by-step tool creation
- `CONFIG_SCHEMA.md` - Tool config structure
- `ARCHITECTURE.md` - System architecture overview

## 🎉 Benefits of This System

✅ **Single Source of Truth** - One place to manage all tools
✅ **No Hardcoding** - All pages dynamically render
✅ **Easy to Add Tools** - Just edit one file
✅ **Easy to Disable Tools** - Set `active: false`
✅ **Automatic Everywhere** - Tool appears on all relevant pages
✅ **Popularity Tracking** - Built-in usage count system
✅ **Featured System** - Highlight important tools
✅ **Type Safe** - PropTypes validation
✅ **Scalable** - Add 100 tools without changing UI code

---

**Last Updated:** 2026-04-06
**System Version:** 2.0