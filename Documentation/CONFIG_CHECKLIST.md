# Tool Config Creation Checklist

This checklist ensures new tool configs follow the unified schema and pass validation.

**Use this when creating ANY new tool config.**

---

## ✅ PRE-CREATION CHECKLIST

- [ ] Read `PHASE1_FINAL_SCHEMA.md` completely
- [ ] Review `imageResizer.config.new.js` as reference
- [ ] Identify tool category: `image`, `pdf`, `text`, or `developer`
- [ ] Gather all content in both English AND Hindi
- [ ] Prepare SEO keywords (primary, secondary, long-tail)

---

## 📋 REQUIRED SECTIONS CHECKLIST

### 1. Metadata (Required)
- [ ] `metadata.version` - Format: "X.Y.Z"
- [ ] `metadata.lastUpdated` - Format: "YYYY-MM-DD"
- [ ] `metadata.author` - String
- [ ] `metadata.category` - One of: `image`, `pdf`, `text`, `developer`
- [ ] `metadata.schemaVersion` - Current: "2.0.0"

### 2. Basic Info (Required)
- [ ] `id` - Unique kebab-case string
- [ ] `name.en` - English name
- [ ] `name.hi` - Hindi name
- [ ] `slug` - URL-friendly string
- [ ] `description.en` - English description
- [ ] `description.hi` - Hindi description

### 3. SEO (Required - STRICT)
#### English (en)
- [ ] `seo.en.title` - 30-60 characters
- [ ] `seo.en.description` - 120-160 characters
- [ ] `seo.en.keywords.primary` - Array of 3-5 main keywords
- [ ] `seo.en.keywords.secondary` - Array of 5-10 related keywords
- [ ] `seo.en.keywords.longTail` - Array of 5-10 long-tail phrases
- [ ] `seo.en.canonical` - Full URL
- [ ] `seo.en.ogImage` - Optional but recommended
- [ ] `seo.en.structuredData` - Optional but recommended

#### Hindi (hi)
- [ ] `seo.hi.title` - 30-60 characters
- [ ] `seo.hi.description` - 120-160 characters
- [ ] `seo.hi.keywords.primary` - Array of 3-5 main keywords
- [ ] `seo.hi.keywords.secondary` - Array of 5-10 related keywords
- [ ] `seo.hi.keywords.longTail` - Array of 5-10 long-tail phrases
- [ ] `seo.hi.canonical` - Full URL
- [ ] `seo.hi.ogImage` - Optional but recommended
- [ ] `seo.hi.structuredData` - Optional but recommended

### 4. Content (Required - Bilingual)
#### Hero Section (Both EN & HI)
- [ ] `content.en.hero.title` - Main headline
- [ ] `content.en.hero.subtitle` - Supporting text
- [ ] `content.en.hero.benefits` - Array of objects with `icon` and `text`
- [ ] `content.en.hero.privacyNotice` - Privacy message
- [ ] `content.en.hero.privacyIcon` - Icon for privacy (e.g., '🔒')
- [ ] `content.hi.hero.*` - All same fields in Hindi

#### Features Section (Both EN & HI)
- [ ] `content.en.features.title` - Section title
- [ ] `content.en.features.subtitle` - Optional subtitle
- [ ] `content.en.features.items` - Array of objects with `icon`, `title`, `description`
- [ ] `content.hi.features.*` - All same fields in Hindi

#### How To Section (Both EN & HI)
- [ ] `content.en.howTo.title` - Section title
- [ ] `content.en.howTo.subtitle` - Optional subtitle
- [ ] `content.en.howTo.steps` - Array with `number`, `title`, `description`, `icon`
- [ ] `content.en.howTo.tips` - Array with `icon`, `title`, `description`
- [ ] `content.hi.howTo.*` - All same fields in Hindi

#### SEO Content Section (Both EN & HI)
- [ ] `content.en.seoContent.mainTitle` - Main SEO title
- [ ] `content.en.seoContent.intro` - Introduction paragraph
- [ ] `content.en.seoContent.sections` - Array with `title`, `content`, `keywords`
- [ ] `content.hi.seoContent.*` - All same fields in Hindi

#### FAQ Section (Both EN & HI)
- [ ] `content.en.faq.title` - Section title
- [ ] `content.en.faq.items` - Array with `question`, `answer`, `category`
- [ ] `content.hi.faq.*` - All same fields in Hindi

### 5. UI Text (Required - Bilingual)
- [ ] `uiText.en.upload.*` - All upload-related text
- [ ] `uiText.en.controls.*` - All control-related text
- [ ] `uiText.en.preview.*` - All preview-related text
- [ ] `uiText.en.download.*` - All download-related text
- [ ] `uiText.en.processing.*` - Processing messages
- [ ] `uiText.en.errors.*` - Error messages
- [ ] `uiText.hi.*` - All same fields in Hindi

### 6. Default Settings (Required)
- [ ] Define all default values for tool settings
- [ ] Ensure sensible defaults for first-time users

### 7. Validation (Required)
- [ ] `validation.maxFileSize` - Maximum file size
- [ ] `validation.allowedFormats` - Array of supported formats
- [ ] `validation.maxFiles` - Maximum number of files
- [ ] Additional validation rules as needed

### 8. Tool-Specific Config (Optional but Recommended)
- [ ] `toolConfig.intent` - Primary intent (resize, compress, convert, etc.)
- [ ] `toolConfig.variants` - Array of objects with `label`, `value`, `unit`
- [ ] `toolConfig.useCases` - Array of use case strings
- [ ] Tool-specific settings

### 9. Relationships (Optional but Recommended)
- [ ] `relationships.relatedTools` - Array of related tool IDs
- [ ] `relationships.alternativeTools` - Array of alternative tool IDs
- [ ] `relationships.workflowTools` - Array of workflow tool IDs

### 10. Stats (Optional)
- [ ] `stats.averageProcessingTime` - In seconds
- [ ] `stats.maxBatchSize` - Maximum batch size
- [ ] Other relevant statistics

---

## 🚫 VALIDATION RULES (STRICT)

### Must NOT Have:
- [ ] ❌ String keywords (must be object with primary/secondary/longTail)
- [ ] ❌ String benefits (must be array of objects with icon/text)
- [ ] ❌ Missing Hindi translations
- [ ] ❌ Missing English content
- [ ] ❌ Hardcoded text in components
- [ ] ❌ Invalid category (must be: image, pdf, text, developer)

### Must Have:
- [ ] ✅ Both EN and HI for ALL user-visible content
- [ ] ✅ Structured keywords object
- [ ] ✅ Benefits as array of objects
- [ ] ✅ All required sections present
- [ ] ✅ Valid metadata with correct dates
- [ ] ✅ SEO title 30-60 chars
- [ ] ✅ SEO description 120-160 chars

---

## 🧪 TESTING CHECKLIST

### Before Committing:
- [ ] Run config through validator: `validateConfig(config)`
- [ ] Check validation report shows VALID
- [ ] No errors in validation report
- [ ] Address all warnings
- [ ] Test tool page renders correctly
- [ ] Test both English and Hindi versions
- [ ] Verify all text displays properly
- [ ] Check SEO metadata in browser
- [ ] Test on mobile device
- [ ] Verify privacy notice displays

### UI Testing:
- [ ] Hero section displays correctly
- [ ] Features section displays correctly
- [ ] How To section displays correctly
- [ ] SEO content section displays correctly
- [ ] FAQ section displays correctly
- [ ] Language toggle works
- [ ] All icons display
- [ ] No console errors
- [ ] No missing translations

---

## 📝 MIGRATION FROM OLD SCHEMA

If migrating an existing tool:

1. **Backup Original**
   - [ ] Copy old config to `.old.js` file
   - [ ] Keep for reference during migration

2. **Update Metadata**
   - [ ] Change structure from nested language to flat
   - [ ] Add `schemaVersion: '2.0.0'`
   - [ ] Update `lastUpdated` date

3. **Restructure SEO**
   - [ ] Convert keywords from string to object
   - [ ] Add primary/secondary/longTail arrays
   - [ ] Ensure 30-60 char title
   - [ ] Ensure 120-160 char description

4. **Update Content**
   - [ ] Convert benefits from strings to objects
   - [ ] Add icons to all benefit items
   - [ ] Add `privacyIcon` field
   - [ ] Ensure all sections have both EN and HI

5. **Test Adapter**
   - [ ] Verify old config still works with adapter
   - [ ] Test new config works without adapter
   - [ ] Compare UI output (should be identical)

6. **Replace Old Config**
   - [ ] Only after thorough testing
   - [ ] Update imports in tool registry
   - [ ] Delete old config file

---

## 🎯 QUALITY STANDARDS

### SEO Quality:
- [ ] Title includes primary keyword
- [ ] Description is compelling and includes keywords
- [ ] Primary keywords are high-volume search terms
- [ ] Secondary keywords are related variations
- [ ] Long-tail keywords are natural phrases users search

### Content Quality:
- [ ] Hero title is clear and benefit-focused
- [ ] Benefits are specific and valuable
- [ ] Features explain "why" not just "what"
- [ ] How-to steps are actionable and clear
- [ ] FAQ answers common user questions
- [ ] SEO content is informative, not keyword-stuffed

### Translation Quality:
- [ ] Hindi translations are natural, not literal
- [ ] Technical terms handled appropriately
- [ ] Cultural context considered
- [ ] Both languages equally complete

---

## 🔄 AFTER CREATION

- [ ] Add tool to `toolRegistry.js`
- [ ] Create tool class extending `BaseTool`
- [ ] Create tool page component
- [ ] Add route in `App.jsx`
- [ ] Test end-to-end functionality
- [ ] Update documentation if needed
- [ ] Commit with descriptive message

---

## 📚 REFERENCE FILES

- **Schema Documentation**: `Documentation/PHASE1_FINAL_SCHEMA.md`
- **Gold Standard Example**: `src/configs/tools/imageResizer.config.new.js`
- **Validator**: `src/utils/configValidator.js`
- **Adapter**: `src/utils/configAdapter.js` (temporary)

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **Forgetting Hindi translations** - Every EN field needs HI
2. **Using string keywords** - Must be object with arrays
3. **Using string benefits** - Must be array of objects
4. **Wrong category name** - Must be exact: image, pdf, text, developer
5. **Missing required fields** - Validator will catch these
6. **SEO title/description wrong length** - Check character counts
7. **Hardcoding text** - All text must come from config
8. **Inconsistent structure** - Follow schema exactly

---

## ✨ BEST PRACTICES

1. **Start with imageResizer.config.new.js** - Copy and modify
2. **Fill out checklist as you go** - Don't skip items
3. **Run validator frequently** - Catch errors early
4. **Test both languages** - Don't assume translations work
5. **Get feedback on SEO** - Keywords are critical
6. **Keep it consistent** - Follow existing patterns
7. **Document special cases** - Add comments for unusual config

---

## 🎓 LEARNING RESOURCES

- Read existing tool configs for patterns
- Check validator error messages for guidance
- Review schema documentation for field purposes
- Test in browser to see how config renders
- Ask for review before finalizing

---

**Remember**: A complete, valid config is the foundation of a great tool. Take time to do it right!

---

*Last Updated: 2026-04-02*
*Schema Version: 2.0.0*