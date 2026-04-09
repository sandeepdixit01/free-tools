# SEO Component Structure Guide

**For:** Component-Based React Website  
**Purpose:** Convert SEO inputs into clean, reusable components  
**Created:** 2026-04-07

---

## TOOL PAGE STRUCTURE (Example: Image Resizer)

### Complete Page Layout

```jsx
import SEOHead from '@/components/SEO/SEOHead';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ToolHero from '@/components/shared/ToolHero';
import ImageResizerUI from '@/components/ImageResizer/ImageResizerUI';
import ContentSection from '@/components/shared/ContentSection';
import RelatedTools from '@/components/shared/RelatedTools';
import FAQSection from '@/components/shared/FAQSection';

// Import data
import metadata from '@/data/seo/SEO_METADATA_SCHEMA.json';
import content from '@/data/seo/CONTENT_IMAGE_RESIZER.json';
import faqs from '@/data/seo/SEO_FAQ_SCHEMA.json';
import links from '@/data/seo/SEO_INTERNAL_LINKING.json';

export default function ImageResizerPage() {
  const pageData = metadata.imageResizerTool;
  const pageContent = content.imageResizer;
  const pageFAQs = faqs.imageResizerTool;
  const pageLinks = links.imageResizerTool;

  return (
    <>
      {/* 1. SEO HEAD - Meta tags + Schema */}
      <SEOHead 
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        ogTitle={pageData.openGraph.ogTitle}
        ogDescription={pageData.openGraph.ogDescription}
        schema={[pageData.schema, pageFAQs.schema]}
        canonical={pageData.url}
      />

      {/* 2. BREADCRUMB - Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', url: '/' },
          { label: 'Image Tools', url: '/tools/image' },
          { label: 'Image Resizer', url: '/tools/resize-image' }
        ]}
      />

      {/* 3. HERO SECTION - H1 + Intro */}
      <ToolHero 
        h1={pageContent.h1}
        intro={pageContent.intro}
        icon="📐"
      />

      {/* 4. TOOL UI - Actual functionality */}
      <ImageResizerUI />

      {/* 5. HOW TO USE - Step-by-step */}
      <ContentSection 
        h2="How to Resize Images"
        content={pageContent.howToUse}
        variant="steps"
      />

      {/* 6. WHY USE - Benefits */}
      <ContentSection 
        h2="Why Use Our Image Resizer?"
        content={pageContent.whyUse}
        variant="benefits"
      />

      {/* 7. USE CASES - Real-world scenarios */}
      <ContentSection 
        h2="Common Use Cases"
        content={pageContent.useCases}
        variant="use-cases"
        internalLinks={pageLinks.crossCategoryOpportunities}
      />

      {/* 8. TIPS - Best practices */}
      <ContentSection 
        h2="Image Resizing Tips"
        content={pageContent.tips}
        variant="tips"
        collapsible={true}
      />

      {/* 9. RELATED TOOLS - Internal linking */}
      <RelatedTools 
        tools={pageLinks.mustLinkPages}
        title="Try These Tools Next"
      />

      {/* 10. FAQ - Questions + Schema */}
      <FAQSection 
        faqs={pageFAQs.faqs}
        internalLinks={pageLinks.mustLinkPages.filter(l => l.placement === 'FAQ section')}
      />
    </>
  );
}
```

---

## COMPONENT BREAKDOWN

### 1. SEOHead Component

**Purpose:** Handle all meta tags and schema markup  
**Location:** `src/components/SEO/SEOHead.jsx`

```jsx
import { Helmet } from 'react-helmet-async';

export default function SEOHead({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  schema = [], 
  canonical 
}) {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://yourdomain.com${canonical}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={`https://yourdomain.com${canonical}`} />
      <meta property="og:type" content="website" />
      
      {/* Schema Markup */}
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
```

**Props:**
- `title` (string, required) - Meta title
- `description` (string, required) - Meta description
- `ogTitle` (string, required) - OG title
- `ogDescription` (string, required) - OG description
- `schema` (array, optional) - Array of schema objects
- `canonical` (string, required) - Canonical URL path

---

### 2. Breadcrumb Component

**Purpose:** Navigation hierarchy + SEO  
**Location:** `src/components/shared/Breadcrumb.jsx`

```jsx
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <>
                <Link to={item.url}>{item.label}</Link>
                <span className="separator">/</span>
              </>
            ) : (
              <span className="current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

**Props:**
- `items` (array, required) - Array of `{ label, url }` objects

**Notes:**
- Last item is not clickable (current page)
- Use semantic HTML (`<nav>`, `<ol>`)
- Add aria-label for accessibility

---

### 3. ToolHero Component

**Purpose:** H1 + intro paragraph  
**Location:** `src/components/shared/ToolHero.jsx`

```jsx
import './ToolHero.css';

export default function ToolHero({ h1, intro, icon }) {
  return (
    <section className="tool-hero">
      <div className="container">
        {icon && <span className="tool-icon">{icon}</span>}
        <h1>{h1}</h1>
        <p className="intro">{intro}</p>
      </div>
    </section>
  );
}
```

**Props:**
- `h1` (string, required) - Page H1 (SEO optimized)
- `intro` (string, required) - Brief intro (max 80 words)
- `icon` (string, optional) - Emoji or icon

**Notes:**
- Only ONE H1 per page
- Intro should be concise and keyword-rich
- Icon adds visual appeal

---

### 4. ContentSection Component

**Purpose:** Reusable H2 sections with different variants  
**Location:** `src/components/shared/ContentSection.jsx`

```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContentSection.css';

export default function ContentSection({ 
  h2, 
  content, 
  variant = 'default',
  collapsible = false,
  internalLinks = []
}) {
  const [isExpanded, setIsExpanded] = useState(!collapsible);

  const renderContent = () => {
    switch (variant) {
      case 'steps':
        return (
          <ol className="steps-list">
            {content.map((step, i) => (
              <li key={i}>
                <strong>{step.title}</strong> - {step.description}
              </li>
            ))}
          </ol>
        );
      
      case 'benefits':
        return (
          <div className="benefits-grid">
            {content.map((benefit, i) => (
              <div key={i} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'use-cases':
        return (
          <div className="use-cases">
            {content.map((useCase, i) => (
              <div key={i} className="use-case">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                {/* Internal links */}
                {internalLinks.length > 0 && (
                  <p className="related-link">
                    Related: <Link to={internalLinks[0].to}>{internalLinks[0].anchorText}</Link>
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'tips':
        return (
          <ul className="tips-list">
            {content.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        );
      
      default:
        return <div className="content" dangerouslySetInnerHTML={{ __html: content }} />;
    }
  };

  return (
    <section className={`content-section variant-${variant}`}>
      <div className="container">
        <h2 onClick={() => collapsible && setIsExpanded(!isExpanded)}>
          {h2}
          {collapsible && <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>}
        </h2>
        {isExpanded && renderContent()}
      </div>
    </section>
  );
}
```

**Props:**
- `h2` (string, required) - Section heading
- `content` (array/string, required) - Section content
- `variant` (string, optional) - 'steps', 'benefits', 'use-cases', 'tips', 'default'
- `collapsible` (boolean, optional) - Make section collapsible
- `internalLinks` (array, optional) - Links to inject in content

**Variants:**
- **steps**: Numbered list (How To Use)
- **benefits**: Grid of benefit cards (Why Use)
- **use-cases**: Use case blocks with optional links
- **tips**: Bullet list (Tips & Best Practices)
- **default**: Raw HTML content

---

### 5. RelatedTools Component

**Purpose:** Internal linking section  
**Location:** `src/components/shared/RelatedTools.jsx`

```jsx
import { Link } from 'react-router-dom';
import './RelatedTools.css';

export default function RelatedTools({ tools, title = "Try These Tools Next" }) {
  return (
    <section className="related-tools">
      <div className="container">
        <h2>{title}</h2>
        <div className="tools-grid">
          {tools.slice(0, 3).map((tool, i) => (
            <Link key={i} to={tool.url} className="tool-card">
              <span className="tool-icon">{tool.icon || '🔧'}</span>
              <h3>{tool.anchorText}</h3>
              <p>{tool.context}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Props:**
- `tools` (array, required) - Array of tool objects with `url`, `anchorText`, `context`
- `title` (string, optional) - Section title

**Notes:**
- Shows maximum 3 tools
- Cards are clickable (entire card is link)
- Use keyword-rich anchor text

---

### 6. FAQSection Component

**Purpose:** FAQ with schema markup  
**Location:** `src/components/shared/FAQSection.jsx`

```jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQSection.css';

export default function FAQSection({ faqs, internalLinks = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const injectLinks = (answer) => {
    // Find and replace link placeholders with actual Link components
    let processedAnswer = answer;
    internalLinks.forEach(link => {
      const linkHtml = `<a href="${link.url}">${link.anchorText}</a>`;
      processedAnswer = processedAnswer.replace(link.anchorText, linkHtml);
    });
    return processedAnswer;
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedIndex === index}
              >
                <h3>{faq.question}</h3>
                <span className="toggle-icon">{expandedIndex === index ? '−' : '+'}</span>
              </button>
              {expandedIndex === index && (
                <div 
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: injectLinks(faq.answer) }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Props:**
- `faqs` (array, required) - Array of `{ question, answer }` objects
- `internalLinks` (array, optional) - Links to inject in answers

**Notes:**
- Accordion-style (one open at a time)
- Questions are clickable buttons
- Answers can contain internal links
- Schema markup added via SEOHead component

---

## CATEGORY PAGE STRUCTURE (Example: Text Tools)

```jsx
import SEOHead from '@/components/SEO/SEOHead';
import Breadcrumb from '@/components/shared/Breadcrumb';
import CategoryHero from '@/components/shared/CategoryHero';
import ToolGrid from '@/components/shared/ToolGrid';
import ContentSection from '@/components/shared/ContentSection';

export default function TextToolsCategory() {
  const pageData = metadata.textToolsCategory;
  const pageContent = content.textTools;
  const pageLinks = links.textToolsCategory;

  return (
    <>
      <SEOHead {...pageData} />
      
      <Breadcrumb items={[
        { label: 'Home', url: '/' },
        { label: 'Text Tools', url: '/tools/text' }
      ]} />
      
      <CategoryHero 
        h1={pageContent.h1}
        intro={pageContent.intro}
        toolCount={4}
      />
      
      {/* Available Tools */}
      <ToolGrid 
        tools={pageLinks.mustLinkPages}
        title="Available Text Tools"
      />
      
      {/* Why Use */}
      <ContentSection 
        h2="Why Use Our Text Tools?"
        content={pageContent.whyUse}
        variant="benefits"
      />
      
      {/* Use Cases */}
      <ContentSection 
        h2="Common Text Processing Tasks"
        content={pageContent.useCases}
        variant="use-cases"
        internalLinks={pageLinks.crossCategoryOpportunities}
      />
    </>
  );
}
```

---

## HOMEPAGE STRUCTURE

```jsx
import SEOHead from '@/components/SEO/SEOHead';
import Hero from '@/components/home/Hero';
import PopularTools from '@/components/home/PopularTools';
import CategoryGrid from '@/components/home/CategoryGrid';
import WhyUseSection from '@/components/home/WhyUseSection';
import FAQSection from '@/components/shared/FAQSection';

export default function Homepage() {
  const pageData = metadata.homepage;
  const pageContent = content.homepage;
  const pageFAQs = faqs.homepage;

  return (
    <>
      <SEOHead {...pageData} />
      
      <Hero 
        h1={pageContent.h1}
        subtitle={pageContent.intro}
      />
      
      <PopularTools 
        tools={getPopularTools(6)}
        title="Most Popular Tools"
      />
      
      <CategoryGrid 
        categories={getAllCategories()}
        title="Browse Tools by Category"
      />
      
      <WhyUseSection 
        benefits={pageContent.whyUse}
      />
      
      <FAQSection 
        faqs={pageFAQs.faqs}
      />
    </>
  );
}
```

---

## DATA STRUCTURE

### Content JSON Format

```json
{
  "imageResizer": {
    "h1": "Resize Image Online Free - Compress to 20KB, 50KB, 100KB",
    "intro": "Resize images to exact file sizes instantly...",
    "howToUse": [
      {
        "title": "Upload Your Image",
        "description": "Click to select or drag and drop JPG, PNG, or WebP files"
      },
      {
        "title": "Choose Target Size",
        "description": "Select 20KB, 50KB, 100KB, or enter a custom size"
      }
    ],
    "whyUse": [
      {
        "title": "Precise Size Control",
        "description": "Hit exact file size targets every time..."
      }
    ],
    "useCases": [
      {
        "title": "Social Media Optimization",
        "description": "Resize images for Instagram posts..."
      }
    ],
    "tips": [
      "Choose 20KB for thumbnails and icons",
      "Use 50KB for profile pictures"
    ]
  }
}
```

---

## CLICKABLE ELEMENTS

### Must Be Clickable:
- ✅ Breadcrumb links (except current page)
- ✅ Internal links in content
- ✅ Related tool cards (entire card)
- ✅ FAQ questions (toggle accordion)
- ✅ Category cards on homepage
- ✅ Tool cards in grids

### Should NOT Be Clickable:
- ❌ Current page in breadcrumb
- ❌ H1, H2 headings (unless collapsible)
- ❌ Regular paragraph text
- ❌ Benefit/feature cards (unless linking)

---

## COLLAPSIBLE SECTIONS

### Should Be Collapsible:
- ✅ FAQ items (accordion)
- ✅ Tips section (optional)
- ✅ Advanced settings in tools

### Should NOT Be Collapsible:
- ❌ H1 / Hero section
- ❌ Tool UI itself
- ❌ How To Use (critical info)
- ❌ Why Use (key benefits)

---

## RESPONSIVE BEHAVIOR

### Mobile (<768px):
- Stack tool cards vertically
- Collapse FAQ by default
- Simplify breadcrumb (show only current + parent)
- Hide less important content sections

### Tablet (768px-1024px):
- 2-column tool grid
- Full breadcrumb
- All sections visible

### Desktop (>1024px):
- 3-column tool grid
- Sidebar for related tools (optional)
- All sections expanded

---

## DEVELOPER NOTES

### File Organization:
```
src/
├── components/
│   ├── SEO/
│   │   └── SEOHead.jsx
│   ├── shared/
│   │   ├── Breadcrumb.jsx
│   │   ├── ToolHero.jsx
│   │   ├── ContentSection.jsx
│   │   ├── RelatedTools.jsx
│   │   └── FAQSection.jsx
│   └── home/
│       ├── Hero.jsx
│       ├── PopularTools.jsx
│       └── CategoryGrid.jsx
├── data/
│   └── seo/
│       ├── SEO_METADATA_SCHEMA.json
│       ├── SEO_FAQ_SCHEMA.json
│       ├── SEO_INTERNAL_LINKING.json
│       └── CONTENT_*.json
└── pages/
    ├── HomePage.jsx
    ├── ImageResizerPage.jsx
    └── TextToolsCategory.jsx
```

### Best Practices:
1. **Separation of Concerns**: Keep SEO data separate from components
2. **Reusability**: Use shared components across all pages
3. **Performance**: Lazy load FAQ schema, defer non-critical content
4. **Accessibility**: Use semantic HTML, ARIA labels, keyboard navigation
5. **SEO**: One H1 per page, proper heading hierarchy, schema markup

### Testing Checklist:
- [ ] All meta tags render correctly
- [ ] Schema validates on Google Rich Results Test
- [ ] Breadcrumbs show correct hierarchy
- [ ] Internal links use keyword-rich anchor text
- [ ] FAQ accordion works on mobile
- [ ] Related tools section shows 3 tools max
- [ ] Page loads in <2 seconds
- [ ] All images have alt text

---

**This structure provides a clean, developer-friendly way to implement all SEO requirements while maintaining code quality and reusability.**