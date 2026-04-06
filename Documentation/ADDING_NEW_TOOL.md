# 🛠️ Adding a New Tool - Step-by-Step Guide

This guide shows you how to add a new tool to the platform in **3 simple steps**.

---

## 📋 Prerequisites

Before you start, make sure you understand:
- The tool's purpose and functionality
- Input file types and constraints
- Processing logic required
- Output format

---

## 🚀 Quick Start (3 Steps)

### Step 1: Create Tool Logic Class

Create a new file in `src/tools/` that extends `BaseTool`:

```javascript
// src/tools/YourToolName.js
import BaseTool from './BaseTool';

class YourToolName extends BaseTool {
  /**
   * Process a single file
   * @param {Object} file - File object with file, dataUrl, etc.
   * @param {Object} settings - User settings
   * @returns {Promise<Object>} Processed file data
   */
  async process(file, settings) {
    // Your processing logic here
    // Example: compress, convert, resize, etc.
    
    return {
      dataUrl: processedDataUrl,
      blob: processedBlob,
      size: processedSize,
      mimeType: file.file.type,
      // Add any other metadata
    };
  }

  /**
   * Validate settings before processing
   * @param {Object} settings - Settings to validate
   * @returns {Object} { valid: boolean, errors: Array }
   */
  validate(settings) {
    const errors = [];
    
    // Add your validation logic
    if (!settings.someRequiredField) {
      errors.push('Some field is required');
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Get content type for preview
   * @returns {string} 'image' | 'pdf' | 'video' | 'audio' | 'text'
   */
  getContentType() {
    return 'image'; // or 'pdf', 'video', etc.
  }

  /**
   * Get file property accessors
   * @returns {Object}
   */
  getFileAccessors() {
    return {
      preview: 'dataUrl',
      name: 'name',
      size: 'size',
      metadata: (file) => ({
        // Return any metadata you want to display
      })
    };
  }

  /**
   * Get tool metadata
   * @returns {Object}
   */
  getMetadata() {
    return {
      name: 'Your Tool Name',
      version: '1.0.0',
      description: 'Brief description'
    };
  }
}

export default YourToolName;
```

---

### Step 2: Create Configuration File

Create configuration in `src/configs/tools/`:

```javascript
// src/configs/tools/yourTool.config.js
import { yourToolUIText } from './yourTool.uiText';

const yourToolConfig = {
  // Tool Metadata
  metadata: {
    en: {
      id: 'your-tool',
      name: 'Your Tool Name',
      slug: 'your-tool-slug',
      category: 'category-name',
      description: 'Brief description',
      version: '1.0.0'
    }
  },

  // File Type Settings
  fileTypes: {
    accept: '.jpg,.png,.pdf', // Accepted file extensions
    maxSize: 10 * 1024 * 1024, // 10MB in bytes
    maxFiles: 10 // Maximum number of files
  },

  // Default Settings
  defaultSettings: {
    // Your tool's default settings
    quality: 85,
    mode: 'default'
  },

  // UI Text (from separate file)
  uiText: yourToolUIText,

  // Content Sections
  content: {
    en: {
      // SEO
      seo: {
        title: 'Your Tool - SEO Title',
        description: 'SEO description',
        keywords: 'keyword1, keyword2',
        canonical: 'https://yoursite.com/your-tool'
      },

      // Hero Section
      hero: {
        title: 'Main Tool Title',
        subtitle: 'Subtitle explaining the tool',
        benefits: [
          { icon: '⚡', text: 'Fast processing' },
          { icon: '🔒', text: '100% Private' },
          { icon: '🆓', text: 'Completely free' }
        ],
        privacyNotice: 'All processing happens in your browser'
      },

      // Features Section
      features: {
        title: 'Why Use Our Tool?',
        items: [
          {
            icon: '⚡',
            title: 'Feature 1',
            description: 'Feature description'
          },
          // Add more features
        ]
      },

      // How To Section
      howTo: {
        title: 'How to Use',
        subtitle: 'Simple steps',
        steps: [
          {
            number: 1,
            title: 'Step 1',
            description: 'Step description'
          },
          // Add more steps
        ]
      },

      // SEO Content
      seoContent: [
        {
          title: 'Section Title',
          content: 'Detailed content for SEO'
        }
      ],

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Question 1?',
            answer: 'Answer 1'
          },
          // Add more FAQs
        ]
      }
    }
  }
};

export default yourToolConfig;
```

Create UI text file:

```javascript
// src/configs/tools/yourTool.uiText.js
export const yourToolUIText = {
  en: {
    upload: {
      dragText: 'Drag & drop files here',
      browseText: 'or click to browse',
      supportedFormats: 'Supported formats: JPG, PNG, PDF',
      maxSize: 'Max size: 10MB per file',
      uploading: 'Uploading...',
      filesSelected: 'files selected',
      clearAll: 'Clear All',
      removeFile: 'Remove file'
    },
    controls: {
      title: 'Options',
      description: 'Configure your settings'
    },
    preview: {
      title: 'Preview & Download',
      before: 'Before',
      after: 'After',
      defaultAlt: 'Preview'
    },
    download: {
      single: 'Download',
      all: 'Download All',
      filePrefix: 'processed_'
    },
    processing: {
      message: 'Processing your files...'
    },
    errors: {
      processingFailed: 'Processing failed. Please try again.',
      dismiss: 'Dismiss'
    }
  }
};
```

---

### Step 3: Create Tool Page

Create page in `src/pages/`:

```javascript
// src/pages/YourToolPage.jsx
import React from 'react';
import ToolPage from './ToolPage';
import YourToolName from '../tools/YourToolName';
import yourToolConfig from '../configs/tools/yourTool.config';

// Optional: Custom controls component
import YourToolControls from '../components/YourTool/YourToolControls';

const YourToolPage = () => {
  return (
    <ToolPage
      config={yourToolConfig}
      ToolClass={YourToolName}
      customControls={YourToolControls} // Optional
    />
  );
};

export default YourToolPage;
```

---

### Step 4: Add Route

Update `src/main.jsx`:

```javascript
import YourToolPage from './pages/YourToolPage';

// In Routes:
<Route path="/tools/your-tool" element={<YourToolPage />} />
```

---

## 🎨 Optional: Custom Controls

If your tool needs custom controls (beyond basic settings), create a custom controls component:

```javascript
// src/components/YourTool/YourToolControls.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './YourToolControls.css';

const YourToolControls = ({ settings, onSettingsChange, content }) => {
  return (
    <div className="your-tool-controls">
      {/* Your custom controls here */}
      <label>
        {content.someLabel}
        <input
          type="text"
          value={settings.someValue}
          onChange={(e) => onSettingsChange({ someValue: e.target.value })}
        />
      </label>
    </div>
  );
};

YourToolControls.propTypes = {
  settings: PropTypes.object.isRequired,
  onSettingsChange: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired
};

export default YourToolControls;
```

---

## ✅ Checklist

Before launching your tool, verify:

- [ ] Tool class extends BaseTool
- [ ] All BaseTool methods implemented
- [ ] Configuration file complete
- [ ] UI text file created (with all required keys)
- [ ] Tool page created
- [ ] Route added to main.jsx
- [ ] File validation works
- [ ] Processing logic works
- [ ] Preview displays correctly
- [ ] Download works
- [ ] Error handling works
- [ ] All text comes from config (no hardcoding)
- [ ] Mobile responsive
- [ ] SEO metadata complete

---

## 🧪 Testing Your Tool

1. **Upload Test**: Try uploading valid and invalid files
2. **Processing Test**: Verify processing works correctly
3. **Preview Test**: Check before/after preview
4. **Download Test**: Download and verify output files
5. **Error Test**: Test error scenarios
6. **Mobile Test**: Test on mobile devices
7. **Language Test**: Test with different languages (if supported)

---

## 📊 Examples

### Example 1: Image Compressor
```javascript
class ImageCompressorTool extends BaseTool {
  async process(file, settings) {
    // Load image
    const img = await this.loadImage(file.dataUrl);
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Draw and compress
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    
    // Convert to blob with quality
    const blob = await this.canvasToBlob(canvas, settings.quality);
    
    return {
      dataUrl: URL.createObjectURL(blob),
      blob,
      size: blob.size,
      mimeType: file.file.type
    };
  }
}
```

### Example 2: PDF Merger
```javascript
class PdfMergerTool extends BaseTool {
  async process(files, settings) {
    // Use pdf-lib or similar
    const pdfDoc = await PDFDocument.create();
    
    for (const file of files) {
      const pdf = await PDFDocument.load(file.dataUrl);
      const pages = await pdfDoc.copyPages(pdf, pdf.getPageIndices());
      pages.forEach(page => pdfDoc.addPage(page));
    }
    
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
    return {
      blob,
      size: blob.size,
      mimeType: 'application/pdf'
    };
  }
}
```

---

## 🚨 Common Pitfalls

### ❌ DON'T:
- Hardcode text in components
- Mix UI and business logic
- Skip validation
- Forget error handling
- Create tool-specific UI components unnecessarily

### ✅ DO:
- Use config for all text
- Keep logic in Tool class
- Validate settings
- Handle errors gracefully
- Reuse existing components

---

## 🎯 Best Practices

1. **Keep it Simple**: Start with basic functionality
2. **Test Thoroughly**: Test all scenarios
3. **Document Well**: Add comments to complex logic
4. **Follow Patterns**: Use existing tools as reference
5. **Think Reusable**: Can this logic be shared?

---

## 📚 Additional Resources

- [Architecture Documentation](./ARCHITECTURE.md)
- [Component API Reference](./COMPONENT_API.md)
- [Config Schema Reference](./CONFIG_SCHEMA.md)
- [BaseTool Interface](../src/tools/BaseTool.js)

---

## 💡 Need Help?

If you're stuck:
1. Check existing tools (ImageResizerTool) as reference
2. Review the architecture documentation
3. Verify your config matches the schema
4. Test each step independently

---

**Remember**: The goal is to write MINIMAL code. Let the architecture do the heavy lifting!