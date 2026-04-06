# 🚀 Complete System Recreation Prompt

## Overview
This document contains a comprehensive prompt to recreate the **FreeTools** website - a production-ready, config-driven, bilingual (English/Hindi) online tools platform with a fully reusable architecture.

---

## 🎯 Project Summary

**Name**: FreeTools  
**Type**: React + Vite SPA (Single Page Application)  
**Architecture**: Config-driven, component-based, fully reusable  
**Languages**: English (en) & Hindi (hi)  
**Categories**: Image, PDF, Text, Developer tools  
**Key Feature**: Add new tools by ONLY creating config + logic class (no UI code needed)

---

## 📦 Tech Stack

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.13.2",
    "react-helmet-async": "^3.0.0",
    "prop-types": "^15.8.1",
    "jszip": "^3.10.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0"
  }
}
```

**Build Tool**: Vite (port 3000)  
**No Backend**: All processing happens client-side in browser  
**No Database**: All content from config files

---

## 🏗️ Architecture Principles

### Core Principles
1. **Separation of Concerns**: UI, logic, and content are completely separated
2. **Config-Driven**: All tool-specific content comes from configuration files
3. **Reusability**: Components are generic and work for ANY tool type
4. **Type Safety**: Tools implement BaseTool interface
5. **No Hardcoding**: Zero hardcoded text or logic in UI components
6. **Bilingual**: All content available in English and Hindi

### Layer Architecture
```
User Action
    ↓
ToolPage (Generic Wrapper)
    ↓
Config + ToolClass + CustomControls
    ↓
Hooks (useFileUpload, useProcessing)
    ↓
Tool Logic (BaseTool.process())
    ↓
Shared UI Components
    ↓
Result Display
```

---

## 📁 Complete Directory Structure

```
project-root/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── Top.png
│   └── Mid.png
├── Documentation/
│   ├── ARCHITECTURE.md
│   ├── CONFIG_SCHEMA.md
│   ├── COMPONENT_API.md
│   ├── ADDING_NEW_TOOL.md
│   ├── IMAGERESIZER_TESTING_CHECKLIST.md
│   └── IMAGERESIZER_LESSONS_LEARNED.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    │
    ├── pages/
    │   ├── ToolPage.jsx              # Generic page wrapper (ALL tools use this)
    │   ├── CategoryPage.jsx          # Generic category page
    │   └── ImageResizerNew.jsx       # Tool-specific page (wires config + logic)
    │
    ├── components/
    │   ├── Header.jsx
    │   ├── Header.css
    │   ├── Footer.jsx
    │   ├── Footer.css
    │   ├── Hero.jsx
    │   ├── Hero.css
    │   ├── ToolCard.jsx
    │   ├── ToolCard.css
    │   ├── CategoryCard.jsx
    │   ├── CategoryCard.css
    │   ├── WhyUseOurTools.jsx
    │   ├── WhyUseOurTools.css
    │   │
    │   ├── home/
    │   │   ├── ToolGrid.jsx          # Reusable tool grid
    │   │   ├── ToolGrid.css
    │   │   ├── CategoryGrid.jsx
    │   │   ├── CategoryGrid.css
    │   │   ├── SectionHeader.jsx
    │   │   └── SectionHeader.css
    │   │
    │   ├── ads/
    │   │   ├── AdSlot.jsx
    │   │   └── AdSlot.css
    │   │
    │   ├── SEO/
    │   │   └── SEOHead.jsx
    │   │
    │   ├── LanguageToggle/
    │   │   ├── LanguageToggle.jsx
    │   │   └── LanguageToggle.css
    │   │
    │   ├── ImageResizer/
    │   │   ├── ImageResizerControls.jsx
    │   │   └── ImageResizerControls.css
    │   │
    │   ├── shared/
    │   │   ├── Layout/
    │   │   │   ├── ToolLayout.jsx
    │   │   │   ├── ToolLayout.css
    │   │   │   ├── ToolHero.jsx
    │   │   │   ├── ToolHero.css
    │   │   │   ├── ToolFeatures.jsx
    │   │   │   ├── ToolFeatures.css
    │   │   │   ├── ToolHowTo.jsx
    │   │   │   └── ToolHowTo.css
    │   │   │
    │   │   ├── ToolUI/
    │   │   │   ├── FileUpload.jsx
    │   │   │   ├── FileUpload.css
    │   │   │   ├── ControlPanel.jsx
    │   │   │   ├── ControlPanel.css
    │   │   │   ├── PreviewPane.jsx
    │   │   │   ├── PreviewPane.css
    │   │   │   ├── DownloadButton.jsx
    │   │   │   ├── DownloadButton.css
    │   │   │   ├── ProcessingIndicator.jsx
    │   │   │   ├── ProcessingIndicator.css
    │   │   │   ├── ErrorMessage.jsx
    │   │   │   └── ErrorMessage.css
    │   │   │
    │   │   └── Content/
    │   │       ├── FAQ.jsx
    │   │       ├── FAQ.css
    │   │       ├── SEOContent.jsx
    │   │       ├── SEOContent.css
    │   │       ├── FeatureList.jsx
    │   │       ├── FeatureList.css
    │   │       ├── UseCaseList.jsx
    │   │       └── UseCaseList.css
    │   │
    │   └── (other home components)
    │
    ├── tools/
    │   ├── BaseTool.js               # Base class/interface
    │   └── ImageResizerTool.js       # Image resizing logic
    │
    ├── configs/
    │   ├── homeConfig.js             # Homepage configuration
    │   ├── toolRegistry.js           # Central tool registry
    │   ├── adPositions.js            # Ad position definitions
    │   │
    │   ├── categories/
    │   │   ├── image.config.js
    │   │   ├── pdf.config.js
    │   │   ├── text.config.js
    │   │   └── developer.config.js
    │   │
    │   └── tools/
    │       ├── imageResizer.config.js      # Old schema (active)
    │       ├── imageResizer.config.new.js  # New schema (gold standard)
    │       └── imageResizer.uiText.js      # UI text (bilingual)
    │
    ├── hooks/
    │   ├── useFileUpload.js
    │   ├── useProcessing.js
    │   └── useToolConfig.js
    │
    ├── utils/
    │   ├── constants.js
    │   ├── downloadHelper.js
    │   ├── fileValidation.js
    │   ├── formatters.js
    │   ├── previewHelper.js
    │   ├── configAdapter.js          # TEMPORARY - backward compatibility
    │   └── configValidator.js        # STRICT validation
    │
    ├── contexts/
    │   └── LanguageContext.jsx
    │
    └── translations/
        └── translations.js
```

---

## 🔑 Key Files Implementation

### 1. package.json
```json
{
  "name": "free-tools-homepage",
  "version": "1.0.0",
  "description": "Fast, mobile-first homepage for free online tools",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "jszip": "^3.10.1",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^3.0.0",
    "react-router-dom": "^7.13.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0"
  }
}
```

### 2. vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

### 3. index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free online tools for PDF, images, text, and developers. Fast, simple, and mobile-friendly.">
  <title>Free Online Tools - PDF, Image, Text & Developer Tools</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### 4. src/main.jsx (Entry Point)
```javascript
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'

// Lazy load pages
const App = lazy(() => import('./App'))
const ImageResizerNew = lazy(() => import('./pages/ImageResizerNew'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))

// Category configs
import { imageCategoryConfig } from './configs/categories/image.config'
import { pdfCategoryConfig } from './configs/categories/pdf.config'
import { textCategoryConfig } from './configs/categories/text.config'
import { developerCategoryConfig } from './configs/categories/developer.config'

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    Loading...
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="app">
            <Header />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<App />} />
                
                {/* Category Pages */}
                <Route path="/tools/image" element={<CategoryPage categoryConfig={imageCategoryConfig} />} />
                <Route path="/tools/pdf" element={<CategoryPage categoryConfig={pdfCategoryConfig} />} />
                <Route path="/tools/text" element={<CategoryPage categoryConfig={textCategoryConfig} />} />
                <Route path="/tools/developer" element={<CategoryPage categoryConfig={developerCategoryConfig} />} />
                
                {/* Individual Tool Pages */}
                <Route path="/tools/resize-image" element={<ImageResizerNew />} />
                <Route path="/resize-image-to-50kb" element={<ImageResizerNew />} />
                <Route path="/resize-image-to-20kb" element={<ImageResizerNew />} />
                <Route path="/resize-image-to-100kb" element={<ImageResizerNew />} />
                <Route path="/compress-image-online" element={<ImageResizerNew />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
)
```

### 5. src/contexts/LanguageContext.jsx
```javascript
import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('preferredLanguage', language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en')
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isHindi: language === 'hi'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
```

### 6. src/tools/BaseTool.js (Interface)
```javascript
/**
 * BaseTool Class
 * Abstract base class that all tool classes must extend
 */
class BaseTool {
  /**
   * Process a single file (MUST be implemented by subclasses)
   */
  async process(file, settings) {
    throw new Error('process() method must be implemented by subclass');
  }

  /**
   * Process multiple files in batch
   */
  async processBatch(files, settings) {
    const results = [];
    for (const file of files) {
      const result = await this.process(file, settings);
      results.push(result);
    }
    return results;
  }

  /**
   * Validate settings before processing
   */
  validate(settings) {
    return { valid: true, errors: [] };
  }

  /**
   * Get supported file types
   */
  getSupportedTypes() {
    return [];
  }

  /**
   * Get content type for preview
   */
  getContentType() {
    return 'file';
  }

  /**
   * Get file property accessors
   */
  getFileAccessors() {
    return {
      preview: 'dataUrl',
      name: 'name',
      size: 'size',
      metadata: null
    };
  }

  /**
   * Get tool metadata
   */
  getMetadata() {
    return {
      name: 'Base Tool',
      version: '1.0.0',
      description: 'Base tool class'
    };
  }
}

export default BaseTool;
```

### 7. src/configs/toolRegistry.js (Central Registry)
```javascript
/**
 * Central Tool Registry
 * Single source of truth for all tools
 * 
 * CATEGORIES (FIXED): image, pdf, text, developer
 */

import imageResizerConfig from './tools/imageResizer.config'

export const toolRegistry = [
  // IMAGE TOOLS
  {
    id: 'image-resizer',
    name: { en: 'Image Resizer', hi: 'इमेज रीसाइज़र' },
    category: 'image',
    route: '/tools/resize-image',
    config: imageResizerConfig,
    icon: '📐',
    description: {
      en: 'Resize images to any size (20KB, 50KB, 100KB)',
      hi: 'इमेज को किसी भी साइज़ में रीसाइज़ करें'
    }
  },
  // Add more tools here...
]

export const getToolsByCategory = (category) => {
  return toolRegistry.filter(tool => tool.category === category)
}

export const getToolById = (id) => {
  return toolRegistry.find(tool => tool.id === id) || null
}
```

### 8. src/pages/ToolPage.jsx (Generic Wrapper)
```javascript
/**
 * ToolPage Component - TRULY GENERIC
 * Works for ALL tools without modification
 * 
 * Usage:
 * <ToolPage 
 *   config={toolConfig} 
 *   ToolClass={ToolLogicClass}
 *   customControls={OptionalCustomControls}
 * />
 */

import React, { useState, useEffect, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEO/SEOHead';
import { adaptConfig } from '../utils/configAdapter';

// Layout Components
import ToolLayout from '../components/shared/Layout/ToolLayout';
import ToolHero from '../components/shared/Layout/ToolHero';
import ToolFeatures from '../components/shared/Layout/ToolFeatures';
import ToolHowTo from '../components/shared/Layout/ToolHowTo';

// Tool UI Components
import FileUpload from '../components/shared/ToolUI/FileUpload';
import ControlPanel from '../components/shared/ToolUI/ControlPanel';
import PreviewPane from '../components/shared/ToolUI/PreviewPane';
import DownloadButton from '../components/shared/ToolUI/DownloadButton';
import ProcessingIndicator from '../components/shared/ToolUI/ProcessingIndicator';
import ErrorMessage from '../components/shared/ToolUI/ErrorMessage';

// Content Components
import FAQ from '../components/shared/Content/FAQ';
import SEOContent from '../components/shared/Content/SEOContent';

// Ad System
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';

// Hooks
import { useFileUpload } from '../hooks/useFileUpload';
import { useProcessing } from '../hooks/useProcessing';

// Utils
import { downloadFile } from '../utils/downloadHelper';
import { preparePreviewData } from '../utils/previewHelper';

const ToolPage = ({ config, ToolClass, customControls: CustomControls }) => {
  const { language } = useLanguage();
  const adaptedConfig = useMemo(() => adaptConfig(config), [config]);
  
  // Extract language-specific content
  const content = useMemo(() => {
    if (!adaptedConfig.content) return {};
    const extracted = {};
    Object.keys(adaptedConfig.content).forEach(key => {
      if (adaptedConfig.content[key]?.[language]) {
        extracted[key] = adaptedConfig.content[key][language];
      } else if (adaptedConfig.content[key]?.en) {
        extracted[key] = adaptedConfig.content[key].en;
      }
    });
    return extracted;
  }, [adaptedConfig.content, language]);
  
  const uiText = adaptedConfig.uiText?.[language] || adaptedConfig.uiText?.en || {};
  
  // Initialize tool instance
  const toolInstance = useMemo(() => new ToolClass(), [ToolClass]);
  
  // State
  const [settings, setSettings] = useState(adaptedConfig.defaultSettings || {});
  const [processedFiles, setProcessedFiles] = useState([]);
  const [error, setError] = useState(null);
  
  // File upload hook
  const {
    files,
    uploadProgress,
    isUploading,
    handleFileInputChange: handleFileSelect,
    handleDrop,
    clearFiles,
    removeFile
  } = useFileUpload({
    acceptedTypes: 'image',
    multiple: true,
    maxFiles: adaptedConfig.settings?.maxFiles || 10,
    onError: (err) => setError(err)
  });
  
  // Processing hook
  const { isProcessing, progress, processFiles } = useProcessing({
    processFunction: (file) => toolInstance.process(file, settings)
  });
  
  // Process files when they change
  useEffect(() => {
    if (files.length > 0) {
      handleProcess();
    } else {
      setProcessedFiles([]);
    }
  }, [files, settings]);
  
  const handleProcess = async () => {
    try {
      setError(null);
      const results = await processFiles(files);
      const combined = results.map(result => ({
        original: result.original,
        processed: result.processed
      }));
      setProcessedFiles(combined);
    } catch (err) {
      setError(err.message || uiText.errors?.processingFailed);
    }
  };
  
  const handleSettingsChange = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  const handleDownloadAll = () => {
    processedFiles.forEach((file, index) => {
      setTimeout(() => {
        if (file.processed?.blob) {
          downloadFile(
            file.processed.blob,
            `processed_${file.original.name}`,
            file.processed.mimeType
          );
        }
      }, index * 200);
    });
  };
  
  const previewData = useMemo(() => {
    if (processedFiles.length === 0) return [];
    return preparePreviewData(processedFiles, toolInstance, uiText.preview || {});
  }, [processedFiles, toolInstance, uiText.preview]);
  
  const toolCategory = adaptedConfig.metadata?.[language]?.category || null;
  
  const adSlots = useMemo(() => ({
    top: <AdSlot position={AD_POSITIONS.TOP_BANNER} excludeCategory={toolCategory} />,
    afterResult: <AdSlot position={AD_POSITIONS.BELOW_HERO} excludeCategory={toolCategory} />,
    midContent: <AdSlot position={AD_POSITIONS.MID_CONTENT} excludeCategory={toolCategory} />,
    bottom: <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} excludeCategory={toolCategory} />
  }), [toolCategory]);
  
  return (
    <>
      <SEOHead
        title={content.seo?.title}
        description={content.seo?.description}
        keywords={content.seo?.keywords}
        canonical={content.seo?.canonical}
      />
      
      <ToolLayout
        showHero={true}
        heroComponent={
          <ToolHero
            title={content.hero?.title}
            subtitle={content.hero?.subtitle}
            benefits={content.hero?.benefits}
            ctaText={content.hero?.cta}
            privacyNotice={content.hero?.privacyNotice}
            onCtaClick={() => document.getElementById('file-upload')?.click()}
          />
        }
        showFeatures={true}
        featuresComponent={
          <ToolFeatures
            title={content.features?.title}
            subtitle={content.features?.subtitle}
            features={content.features?.items}
          />
        }
        showHowTo={true}
        howToComponent={
          <ToolHowTo
            title={content.howTo?.title}
            subtitle={content.howTo?.subtitle}
            steps={content.howTo?.steps}
          />
        }
        showSEO={!!content.seoContent}
        seoComponent={
          content.seoContent ? (
            <SEOContent
              title={content.seoContent.mainTitle}
              intro={content.seoContent.intro}
              sections={content.seoContent.sections}
            />
          ) : null
        }
        showFAQ={true}
        faqComponent={
          <FAQ
            title={content.faq?.title}
            items={content.faq?.items}
          />
        }
        adSlots={adSlots}
      >
        <div className="tool-content">
          <FileUpload
            id="file-upload"
            accept={adaptedConfig.validation?.allowedFormats?.join(',') || adaptedConfig.fileTypes?.accept}
            maxSize={adaptedConfig.validation?.maxFileSize || adaptedConfig.fileTypes?.maxSize}
            maxFiles={adaptedConfig.settings?.maxFiles || 10}
            files={files}
            isUploading={isUploading}
            uploadProgress={uploadProgress}
            onFileSelect={handleFileSelect}
            onDrop={handleDrop}
            onClear={clearFiles}
            onRemove={removeFile}
            dragText={uiText.upload?.dragText}
            orText={uiText.upload?.orText || 'or'}
            buttonText={uiText.upload?.buttonText}
            supportText={uiText.upload?.supportedFormats}
          />
          
          {error && (
            <ErrorMessage
              type="error"
              message={error}
              onDismiss={() => setError(null)}
            />
          )}
          
          {files.length > 0 && CustomControls && (
            <ControlPanel title={uiText.controls?.title}>
              <CustomControls
                settings={settings}
                onSettingsChange={handleSettingsChange}
                content={uiText.controls}
              />
            </ControlPanel>
          )}
          
          {isProcessing && (
            <ProcessingIndicator
              type="progress"
              progress={progress}
              message={uiText.processing?.message}
            />
          )}
          
          {processedFiles.length > 0 && !isProcessing && (
            <>
              <PreviewPane
                showComparison={true}
                items={previewData}
                title={uiText.preview?.title}
                comparisonLabels={{
                  before: uiText.preview?.before || 'Before',
                  after: uiText.preview?.after || 'After'
                }}
              />
              
              <DownloadButton
                onClick={handleDownloadAll}
                variant="primary"
                size="large"
                fullWidth={true}
                text={
                  processedFiles.length === 1
                    ? uiText.download?.single
                    : `${uiText.download?.all} (${processedFiles.length})`
                }
              />
            </>
          )}
        </div>
      </ToolLayout>
    </>
  );
};

ToolPage.propTypes = {
  config: PropTypes.object.isRequired,
  ToolClass: PropTypes.func.isRequired,
  customControls: PropTypes.elementType
};

export default memo(ToolPage);
```

---

## 🎨 Adding a New Tool (3 Steps)

### Step 1: Create Tool Logic Class
```javascript
// src/tools/PdfCompressorTool.js
import BaseTool from './BaseTool';

class PdfCompressorTool extends BaseTool {
  async process(file, settings) {
    // Your PDF compression logic
    return processedFile;
  }
  
  validate(settings) {
    return { valid: true, errors: [] };
  }
  
  getContentType() {
    return 'pdf';
  }
}

export default PdfCompressorTool;
```

### Step 2: Create Configuration File
```javascript
// src/configs/tools/pdfCompressor.config.js
export const pdfCompressorConfig = {
  metadata: { /* ... */ },
  fileTypes: {
    accept: '.pdf',
    maxSize: 50 * 1024 * 1024,
    maxFiles: 5
  },
  defaultSettings: {
    compressionLevel: 'medium'
  },
  content: {
    en: { /* English content */ },
    hi: { /* Hindi content */ }
  },
  uiText: {
    en: { /* English UI text */ },
    hi: { /* Hindi UI text */ }
  }
};
```

### Step 3: Create Tool Page
```javascript
// src/pages/PdfCompressor.jsx
import React from 'react';
import ToolPage from './ToolPage';
import PdfCompressorTool from '../tools/PdfCompressorTool';
import pdfCompressorConfig from '../configs/tools/pdfCompressor.config';

const PdfCompressor = () => {
  return (
    <ToolPage
      config={pdfCompressorConfig}
      ToolClass={PdfCompressorTool}
    />
  );
};

export default PdfCompressor;
```

### Step 4: Add to Registry
```javascript
// src/configs/toolRegistry.js
export const toolRegistry = [
  // ... existing tools
  {
    id: 'pdf-compressor',
    name: { en: 'PDF Compressor', hi: 'PDF कंप्रेसर' },
    category: 'pdf',
    route: '/tools/compress-pdf',
    config: pdfCompressorConfig,
    icon: '🗜️',
    description: {
      en: 'Compress PDF files',
      hi: 'PDF फाइल कंप्रेस करें'
    }
  }
];
```

### Step 5: Add Route
```javascript
// src/main.jsx
<Route path="/tools/compress-pdf" element={<PdfCompressor />} />
```

**That's it!** No UI code needed. Everything is reusable.

---

## 📋 Config Schema Structure

### Complete Tool Config
```javascript
{
  // 1. METADATA
  metadata: {
    version: '2.0.0',
    lastUpdated: '2026-04-02',
    author: 'FreeTools',
    category: 'image', // image | pdf | text | developer
    schemaVersion: '2.0.0'
  },

  // 2. BASIC INFO
  id: 'tool-id',
  name: { en: 'Tool Name', hi: 'टूल नाम' },
  slug: 'tool-slug',
  description: { en: 'Description', hi: 'विवरण' },

  // 3. SEO (STRICT structure)
  seo: {
    en: {
      title: 'SEO Title',
      description: 'SEO Description',
      keywords: {
        primary: ['keyword1', 'keyword2'],
        secondary: ['keyword3', 'keyword4'],
        longTail: ['long tail keyword']
      },
      canonical: 'https://site.com/tool',
      ogImage: '/images/og-image.jpg'
    },
    hi: { /* Same structure */ }
  },

  // 4. CONTENT (Bilingual)
  content: {
    en: {
      hero: {
        title: 'Hero Title',
        subtitle: 'Hero Subtitle',
        benefits: [
          { icon: '⚡', text: 'Benefit 1' },
          { icon: '🔒', text: 'Benefit 2' }
        ],
        cta: 'Call to Action',
        privacyNotice: 'Privacy notice text'
      },
      features: {
        title: 'Features Title',
        subtitle: 'Features Subtitle',
        items: [
          {
            icon: '⚡',
            title: 'Feature Title',
            description: 'Feature Description'
          }
        ]
      },
      howTo: {
        title: 'How To Title',
        subtitle: 'How To Subtitle',
        steps: [
          {
            number: 1,
            title: 'Step Title',
            description: 'Step Description'
          }
        ]
      },
      seoContent: {
        mainTitle: 'SEO Content Title',
        intro: 'Introduction text',
        sections: [
          {
            title: 'Section Title',
            content: 'Section content'
          }
        ]
      },
      faq: {
        title: 'FAQ Title',
        items: [
          {
            question: 'Question?',
            answer: 'Answer'
          }
        ]
      }
    },
    hi: { /* Same structure in Hindi */ }
  },

  // 5. UI TEXT (Bilingual)
  uiText: {
    en: {
      upload: {
        dragText: 'Drag & drop files',
        orText: 'or',
        buttonText: 'Browse Files',
        supportedFormats: 'Supported: JPG, PNG',
        maxSize: 'Max: 10MB'
      },
      controls: {
        title: 'Options'
      },
      preview: {
        title: 'Preview',
        before: 'Before',
        after: 'After'
      },
      download: {
        single: 'Download',
        all: 'Download All'
      },
      processing: {
        message: 'Processing...'
      },
      errors: {
        processingFailed: 'Processing failed',
        dismiss: 'Dismiss'
      }
    },
    hi: { /* Same structure in Hindi */ }
  },

  // 6. FILE TYPES
  fileTypes: {
    accept: '.jpg,.png,.webp',
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 10
  },

  // 7. DEFAULT SETTINGS
  defaultSettings: {
    // Tool-specific settings
    width: 800,
    height: 600,
    quality: 85,
    mode: 'dimensions'
  },

  // 8. VALIDATION RULES
  validation: {
    allowedFormats: ['image/jpeg', 'image/png'],
    maxFileSize: 10 * 1024 * 1024,
    minDimensions: { width: 10, height: 10 },
    maxDimensions: { width: 10000, height: 10000 }
  }
}
```

---

## 🏠 Homepage Structure

### App.jsx (Homepage)
```javascript
import React from 'react'
import { useLanguage } from './contexts/LanguageContext'
import Hero from './components/Hero'
import SectionHeader from './components/home/SectionHeader'
import ToolGrid from './components/home/ToolGrid'
import CategoryGrid from './components/home/CategoryGrid'
import WhyUseOurTools from './components/WhyUseOurTools'
import SEOContent from './components/shared/Content/SEOContent'
import FAQ from './components/shared/Content/FAQ'
import AdSlot from './components/ads/AdSlot'
import { AD_POSITIONS } from './configs/adPositions'
import { homeConfig } from './configs/homeConfig'
import { toolRegistry } from './configs/toolRegistry'

function App() {
  const { language } = useLanguage()
  const popularTools = toolRegistry.slice(0, 8)
  const quickAccessTools = toolRegistry.slice(0, 4)

  return (
    <main className="main-content">
      <Hero config={homeConfig.hero} quickAccessTools={quickAccessTools} />
      <AdSlot position={AD_POSITIONS.BELOW_HERO} />
      
      <section className="home-section">
        <div className="container">
          <SectionHeader
            title={homeConfig.sections.popularTools[language]?.title}
            subtitle={homeConfig.sections.popularTools[language]?.subtitle}
          />
          <ToolGrid tools={popularTools} />
        </div>
      </section>
      
      <section className="home-section">
        <div className="container">
          <SectionHeader
            title={homeConfig.sections.categories[language]?.title}
            subtitle={homeConfig.sections.categories[language]?.subtitle}
          />
          <CategoryGrid categories={homeConfig.categories} />
        </div>
      </section>
      
      <AdSlot position={AD_POSITIONS.MID_CONTENT} />
      <WhyUseOurTools config={homeConfig.whyUse} />
      
      <section className="home-section">
        <div className="container">
          <SEOContent
            title={homeConfig.seoContent[language]?.mainTitle}
            intro={homeConfig.seoContent[language]?.intro}
            sections={homeConfig.seoContent[language]?.sections || []}
          />
        </div>
      </section>
      
      <section className="home-section">
        <div className="container">
          <FAQ
            title={homeConfig.faq[language]?.title}
            items={homeConfig.faq[language]?.items || []}
          />
        </div>
      </section>
      
      <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} />
    </main>
  )
}

export default App
```

---

## 📂 Category Page System

### CategoryPage.jsx (Generic)
```javascript
import React, { useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SEOHead from '../components/SEO/SEOHead'
import ToolHero from '../components/shared/Layout/ToolHero'
import SEOContent from '../components/shared/Content/SEOContent'
import FAQ from '../components/shared/Content/FAQ'
import ToolGrid from '../components/home/ToolGrid'
import AdSlot from '../components/ads/AdSlot'
import { AD_POSITIONS } from '../configs/adPositions'
import { getToolsByCategory } from '../configs/toolRegistry'

const CategoryPage = ({ categoryConfig }) => {
  const { language } = useLanguage()
  
  const seo = categoryConfig.seo?.[language] || categoryConfig.seo?.en || {}
  const hero = categoryConfig.hero?.[language] || categoryConfig.hero?.en || {}
  const seoContent = categoryConfig.seoContent?.[language] || {}
  const faq = categoryConfig.faq?.[language] || {}
  
  const categoryTools = useMemo(() => {
    return getToolsByCategory(categoryConfig.id)
  }, [categoryConfig.id])
  
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      
      <div className="category-page">
        <section className="category-hero-section">
          <ToolHero
            title={hero.title}
            subtitle={hero.subtitle}
            benefits={hero.benefits}
            showCta={false}
          />
        </section>
        
        <AdSlot position={AD_POSITIONS.BELOW_HERO} excludeCategory={categoryConfig.id} />
        
        <section className="category-tools-section">
          <ToolGrid tools={categoryTools} />
        </section>
        
        <AdSlot position={AD_POSITIONS.MID_CONTENT} excludeCategory={categoryConfig.id} />
        
        {seoContent.mainTitle && (
          <section className="category-seo-section">
            <div className="container">
              <SEOContent
                title={seoContent.mainTitle}
                intro={seoContent.intro}
                sections={seoContent.sections}
              />
            </div>
          </section>
        )}
        
        {faq.items && faq.items.length > 0 && (
          <section className="category-faq-section">
            <div className="container">
              <FAQ title={faq.title} items={faq.items} />
            </div>
          </section>
        )}
        
        <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} excludeCategory={categoryConfig.id} />
      </div>
    </>
  )
}

export default CategoryPage
```

### Category Config Example
```javascript
// src/configs/categories/image.config.js
export const imageCategoryConfig = {
  id: 'image',
  
  seo: {
    en: {
      title: 'Free Image Tools Online',
      description: 'Free online image tools...',
      keywords: 'image tools, resize image, compress image'
    },
    hi: { /* Hindi version */ }
  },
  
  hero: {
    en: {
      title: 'Free Image Tools',
      subtitle: 'Resize, compress, crop images',
      benefits: [
        { icon: '⚡', text: 'Instant processing' },
        { icon: '🔒', text: '100% Private' }
      ]
    },
    hi: { /* Hindi version */ }
  },
  
  seoContent: {
    en: {
      mainTitle: 'Professional Image Tools',
      intro: 'Our image tools help you...',
      sections: [
        {
          title: 'Image Resizer',
          content: 'Resize images to exact dimensions...'
        }
      ]
    },
    hi: { /* Hindi version */ }
  },
  
  faq: {
    en: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Are these tools free?',
          answer: 'Yes, completely free!'
        }
      ]
    },
    hi: { /* Hindi version */ }
  }
}
```

---

## 🔧 Utility Functions

### downloadHelper.js
```javascript
export const downloadFile = (blob, filename, mimeType) => {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
```

### previewHelper.js
```javascript
export const preparePreviewData = (processedFiles, toolInstance, uiText) => {
  const accessors = toolInstance.getFileAccessors()
  
  return processedFiles
    .filter(item => item.processed)
    .map(item => ({
      original: {
        preview: item.original.preview || item.original.dataUrl,
        name: item.original.name,
        size: item.original.size
      },
      processed: {
        preview: item.processed.dataUrl || item.processed.preview,
        name: item.processed.name || item.original.name,
        size: item.processed.size
      }
    }))
}
```

### constants.js
```javascript
export const IMAGE_FORMATS = {
  JPEG: 'image/jpeg',
  PNG: 'image/png',
  WEBP: 'image/webp',
  GIF: 'image/gif'
}

export const MAX_FILE_SIZE = {
  IMAGE: 10 * 1024 * 1024, // 10MB
  PDF: 50 * 1024 * 1024,   // 50MB
  VIDEO: 100 * 1024 * 1024 // 100MB
}

export const PROCESSING_STATES = {
  IDLE: 'idle',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  ERROR: 'error',
  CANCELLED: 'cancelled'
}

export const DEFAULT_QUALITY = 85
export const MIN_QUALITY = 10
export const MAX_QUALITY = 100

export const RESIZE_PRESETS = [
  { name: '20KB', size: 20, width: 800, height: 600 },
  { name: '50KB', size: 50, width: 1024, height: 768 },
  { name: '100KB', size: 100, width: 1280, height: 960 }
]
```

---

## 🎨 Styling Guidelines

### Global CSS Variables
```css
:root {
  /* Colors */
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  --danger-color: #ef4444;
  --warning-color: #f59e0b;
  --success-color: #10b981;
  
  /* Grays */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Courier New', monospace;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
}
```

### Component-Specific Styles
- Each component has its own CSS file
- Use BEM naming convention for clarity
- Leverage CSS variables for consistency
- Mobile-first responsive design
- Minimum breakpoint: 768px for tablets, 1024px for desktop

---

## 🚀 Getting Started

### Installation
```bash
npm install
npm run dev
```

### Adding Your First Tool
1. Create tool logic class extending `BaseTool`
2. Create config file with all content
3. Create page component wiring config + logic
4. Register in `toolRegistry.js`
5. Add route in `App.jsx`

### Key Commands
```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 📝 Notes

- **No Backend Required**: All processing happens client-side
- **SEO Optimized**: Uses react-helmet-async for meta tags
- **Performance**: Lazy loading, code splitting, optimized images
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Bilingual**: Full English/Hindi support via LanguageContext
- **Extensible**: Add new tools without modifying existing code

---

## 🎯 Success Criteria

A tool is properly implemented when:
1. ✅ Config file contains ALL text content (no hardcoding)
2. ✅ Tool class extends BaseTool and implements all methods
3. ✅ Page component uses ToolPage wrapper
4. ✅ Both languages work correctly
5. ✅ SEO meta tags are complete
6. ✅ File upload/download works
7. ✅ Error handling is robust
8. ✅ Mobile responsive
9. ✅ No console errors
10. ✅ Follows existing patterns

---

**End of Complete System Prompt**
