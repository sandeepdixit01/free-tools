# 🏗️ Architecture Documentation

## Overview

This project uses a **fully reusable, config-driven architecture** for building tools. The architecture separates concerns into distinct layers, making it easy to add new tools without writing repetitive UI code.

---

## 🎯 Core Principles

1. **Separation of Concerns**: UI, logic, and content are completely separated
2. **Config-Driven**: All tool-specific content comes from configuration files
3. **Reusability**: Components are generic and work for ANY tool type
4. **Type Safety**: Tools implement a standard interface (BaseTool)
5. **No Hardcoding**: Zero hardcoded text or logic in UI components

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── ToolPage.jsx              # Generic page wrapper (works for ALL tools)
│   └── ImageResizerNew.jsx       # Tool-specific page (just wires config + logic)
│
├── components/
│   ├── shared/                   # Reusable components (work for ANY tool)
│   │   ├── Layout/              # Page layout components
│   │   │   ├── ToolLayout.jsx
│   │   │   ├── ToolHero.jsx
│   │   │   ├── ToolFeatures.jsx
│   │   │   └── ToolHowTo.jsx
│   │   ├── ToolUI/              # Tool interaction components
│   │   │   ├── FileUpload.jsx
│   │   │   ├── ControlPanel.jsx
│   │   │   ├── PreviewPane.jsx
│   │   │   ├── DownloadButton.jsx
│   │   │   ├── ProcessingIndicator.jsx
│   │   │   └── ErrorMessage.jsx
│   │   └── Content/             # Content display components
│   │       ├── FAQ.jsx
│   │       ├── SEOContent.jsx
│   │       ├── FeatureList.jsx
│   │       └── UseCaseList.jsx
│   │
│   └── ImageResizer/            # Tool-specific custom controls
│       └── ImageResizerControls.jsx
│
├── tools/                       # Business logic (NO UI dependencies)
│   ├── BaseTool.js             # Base class/interface for all tools
│   └── ImageResizerTool.js     # Image resizing logic
│
├── configs/                     # Configuration files
│   └── tools/
│       ├── imageResizer.config.js    # Complete tool configuration
│       └── imageResizer.uiText.js    # UI text (bilingual)
│
├── hooks/                       # Reusable React hooks
│   ├── useFileUpload.js
│   ├── useProcessing.js
│   └── useToolConfig.js
│
├── utils/                       # Utility functions
│   ├── constants.js
│   ├── downloadHelper.js
│   ├── fileValidation.js
│   ├── formatters.js
│   └── previewHelper.js
│
└── contexts/                    # React contexts
    └── LanguageContext.jsx
```

---

## 🔄 Data Flow

```
User Action
    ↓
ToolPage (Generic Wrapper)
    ↓
Config + ToolClass + CustomControls
    ↓
Hooks (useFileUpload, useProcessing)
    ↓
Tool Logic (ImageResizerTool.process())
    ↓
Shared UI Components (FileUpload, PreviewPane, etc.)
    ↓
User sees result
```

---

## 🧩 Component Layers

### Layer 1: Page Wrapper (ToolPage.jsx)
- **Purpose**: Generic page wrapper that works for ALL tools
- **Responsibilities**:
  - Receives config, ToolClass, and optional customControls
  - Manages state (files, settings, processed results, errors)
  - Orchestrates hooks (useFileUpload, useProcessing)
  - Calls tool's process() method
  - Renders layout with all sections
- **Key Feature**: 100% reusable - never needs modification

### Layer 2: Layout Components
- **ToolLayout**: Main page structure with sections
- **ToolHero**: Hero section with title, subtitle, benefits
- **ToolFeatures**: Feature grid display
- **ToolHowTo**: Step-by-step instructions
- **All receive content via props** - no hardcoded text

### Layer 3: Tool UI Components
- **FileUpload**: Drag-and-drop file upload with validation
- **ControlPanel**: Container for tool-specific controls
- **PreviewPane**: Before/after comparison display
- **DownloadButton**: Download processed files
- **ProcessingIndicator**: Progress display
- **ErrorMessage**: Error display with dismiss
- **All are generic** - work for images, PDFs, videos, etc.

### Layer 4: Content Components
- **FAQ**: Expandable FAQ section
- **SEOContent**: SEO-optimized content sections
- **FeatureList**: Feature list display
- **UseCaseList**: Use case display

### Layer 5: Tool Logic (BaseTool Interface)
```javascript
class BaseTool {
  // Process a single file
  async process(file, settings) { }
  
  // Validate settings
  validate(settings) { }
  
  // Get content type for preview
  getContentType() { }
  
  // Get file property accessors
  getFileAccessors() { }
  
  // Get tool metadata
  getMetadata() { }
}
```

### Layer 6: Configuration
- **Tool Config**: Complete tool configuration (metadata, settings, content)
- **UI Text**: Bilingual UI text for all components
- **Validation Rules**: File type, size, dimension constraints
- **Processing Options**: Modes, presets, quality ranges

---

## 🎨 Adding a New Tool (3 Simple Steps)

### Step 1: Create Tool Logic Class
```javascript
// src/tools/PdfCompressorTool.js
import BaseTool from './BaseTool';

class PdfCompressorTool extends BaseTool {
  async process(file, settings) {
    // Your PDF compression logic here
    return processedFile;
  }
  
  validate(settings) {
    // Validate settings
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
const pdfCompressorConfig = {
  metadata: { /* ... */ },
  fileTypes: {
    accept: '.pdf',
    maxSize: 50 * 1024 * 1024, // 50MB
    maxFiles: 5
  },
  content: {
    en: {
      hero: { title: '...', subtitle: '...' },
      features: { /* ... */ },
      faq: { /* ... */ }
    }
  },
  uiText: { /* ... */ }
};

export default pdfCompressorConfig;
```

### Step 3: Create Tool Page (Wire Everything Together)
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

**That's it!** No UI code needed. Everything is reusable.

---

## 🔒 Guardrails & Best Practices

### ✅ DO:
- Keep tool logic in Tool classes (no UI dependencies)
- Put all text in config files (support i18n)
- Use BaseTool interface for all tools
- Make components receive content via props
- Use hooks for reusable logic
- Validate settings before processing

### ❌ DON'T:
- Hardcode text in components
- Mix UI and business logic
- Create tool-specific UI components (unless absolutely necessary)
- Duplicate code across tools
- Skip validation
- Process files without user consent

---

## 🚀 Performance Optimizations

1. **Lazy Loading**: Use React.lazy() for heavy components
2. **Memoization**: Use React.memo for expensive renders
3. **Code Splitting**: Split tool logic into separate chunks
4. **Efficient Re-renders**: Use useCallback and useMemo
5. **File Processing**: Process in browser (no server uploads)

---

## 🌐 Internationalization (i18n)

- All text comes from config files
- Support for multiple languages (en, hi, etc.)
- LanguageContext provides current language
- Components receive translated text via props

---

## 🧪 Testing Strategy

1. **Unit Tests**: Test tool logic classes independently
2. **Component Tests**: Test UI components with mock data
3. **Integration Tests**: Test ToolPage with real configs
4. **E2E Tests**: Test complete user flows

---

## 📊 Scalability

This architecture scales to:
- ✅ Unlimited number of tools
- ✅ Multiple file types (images, PDFs, videos, audio, etc.)
- ✅ Complex processing workflows
- ✅ Multiple languages
- ✅ Custom tool-specific controls (optional)

---

## 🔧 Maintenance

- **Adding features**: Extend BaseTool interface
- **Updating UI**: Modify shared components (affects all tools)
- **Fixing bugs**: Isolated to specific layer
- **Adding languages**: Add to config files only

---

## 📝 Summary

This architecture achieves:
- ✅ **Zero code duplication**
- ✅ **Maximum reusability**
- ✅ **Easy maintenance**
- ✅ **Fast development** (new tools in minutes)
- ✅ **Type safety** (BaseTool interface)
- ✅ **Clean separation of concerns**

**Result**: A production-ready, scalable system for building unlimited tools with minimal code.