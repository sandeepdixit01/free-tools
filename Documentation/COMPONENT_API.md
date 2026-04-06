# 📦 Component API Reference

Complete reference for all reusable components in the system.

---

## 🎯 Core Components

### ToolPage

**Location**: `src/pages/ToolPage.jsx`

**Purpose**: Generic page wrapper that works for ALL tools.

**Props**:
```typescript
{
  config: Object,           // Tool configuration object (required)
  ToolClass: Function,      // Tool logic class (required)
  customControls: Component // Optional custom controls component
}
```

**Usage**:
```jsx
<ToolPage
  config={imageResizerConfig}
  ToolClass={ImageResizerTool}
  customControls={ImageResizerControls}
/>
```

---

## 🏗️ Layout Components

### ToolLayout

**Location**: `src/components/shared/Layout/ToolLayout.jsx`

**Purpose**: Main page structure with configurable sections.

**Props**:
```typescript
{
  children: ReactNode,           // Main tool content (required)
  
  // Hero Section
  showHero: boolean,
  heroComponent: ReactNode,
  
  // Features Section
  showFeatures: boolean,
  featuresComponent: ReactNode,
  
  // How To Section
  showHowTo: boolean,
  howToComponent: ReactNode,
  
  // SEO Content Section
  showSEO: boolean,
  seoComponent: ReactNode,
  
  // FAQ Section
  showFAQ: boolean,
  faqComponent: ReactNode,
  
  // Ad Slots
  adSlots: {
    top: ReactNode,
    afterResult: ReactNode,
    midContent: ReactNode,
    bottom: ReactNode
  }
}
```

---

### ToolHero

**Location**: `src/components/shared/Layout/ToolHero.jsx`

**Purpose**: Hero section with title, subtitle, and benefits.

**Props**:
```typescript
{
  title: string,                    // Main title (required)
  subtitle: string,                 // Subtitle (required)
  benefits: Array<{                 // Benefits list
    icon: string,
    text: string
  }>,
  ctaText: string,                  // Call-to-action button text
  privacyNotice: string,            // Privacy notice text
  onCtaClick: Function              // CTA button click handler
}
```

**Example**:
```jsx
<ToolHero
  title="Resize Images Online"
  subtitle="Fast, free, and secure"
  benefits={[
    { icon: '⚡', text: 'Instant' },
    { icon: '🔒', text: 'Private' }
  ]}
  ctaText="Get Started"
  privacyNotice="All processing happens in your browser"
  onCtaClick={() => {}}
/>
```

---

### ToolFeatures

**Location**: `src/components/shared/Layout/ToolFeatures.jsx`

**Purpose**: Display feature grid.

**Props**:
```typescript
{
  title: string,                    // Section title
  subtitle: string,                 // Section subtitle
  features: Array<{                 // Features array (required)
    icon: string,
    title: string,
    description: string
  }>
}
```

---

### ToolHowTo

**Location**: `src/components/shared/Layout/ToolHowTo.jsx`

**Purpose**: Step-by-step instructions.

**Props**:
```typescript
{
  title: string,                    // Section title
  subtitle: string,                 // Section subtitle
  steps: Array<{                    // Steps array (required)
    number: number,
    title: string,
    description: string
  }>
}
```

---

## 🎨 Tool UI Components

### FileUpload

**Location**: `src/components/shared/ToolUI/FileUpload.jsx`

**Purpose**: Drag-and-drop file upload with validation.

**Props**:
```typescript
{
  id: string,                       // Input ID
  accept: string,                   // Accepted file types (e.g., '.jpg,.png')
  maxSize: number,                  // Max file size in bytes
  maxFiles: number,                 // Max number of files
  files: Array,                     // Current files array
  isUploading: boolean,             // Upload in progress
  uploadProgress: number,           // Upload progress (0-100)
  onFileSelect: Function,           // File select handler
  onDrop: Function,                 // Drop handler
  onClear: Function,                // Clear all handler
  onRemove: Function,               // Remove single file handler
  
  // Text props (all required)
  dragText: string,
  browseText: string,
  supportedFormatsText: string,
  maxSizeText: string,
  uploadingText: string,
  filesSelectedText: string,
  fileText: string,
  filesText: string,
  clearAllText: string,
  removeFileLabel: string
}
```

**Example**:
```jsx
<FileUpload
  id="file-upload"
  accept=".jpg,.png"
  maxSize={10485760}
  maxFiles={10}
  files={files}
  isUploading={false}
  uploadProgress={0}
  onFileSelect={handleFileSelect}
  onDrop={handleDrop}
  onClear={clearFiles}
  onRemove={removeFile}
  dragText="Drag & drop files here"
  browseText="or click to browse"
  // ... other text props
/>
```

---

### ControlPanel

**Location**: `src/components/shared/ToolUI/ControlPanel.jsx`

**Purpose**: Container for tool-specific controls.

**Props**:
```typescript
{
  title: string,                    // Panel title
  children: ReactNode               // Control components (required)
}
```

**Example**:
```jsx
<ControlPanel title="Resize Options">
  <YourCustomControls />
</ControlPanel>
```

---

### PreviewPane

**Location**: `src/components/shared/ToolUI/PreviewPane.jsx`

**Purpose**: Display before/after comparison or results.

**Props**:
```typescript
{
  mode: 'comparison' | 'single',    // Display mode (required)
  items: Array<{                    // Items to preview (required)
    before: {
      type: 'image' | 'pdf' | 'video',
      src: string,
      alt: string,
      label: string,
      metadata: Object
    },
    after: {
      type: 'image' | 'pdf' | 'video',
      src: string,
      alt: string,
      label: string,
      metadata: Object
    }
  }>,
  title: string,                    // Section title
  defaultImageAlt: string           // Default alt text
}
```

**Example**:
```jsx
<PreviewPane
  mode="comparison"
  items={[
    {
      before: {
        type: 'image',
        src: originalUrl,
        alt: 'Original',
        label: 'Before',
        metadata: { width: 1920, height: 1080, size: 500000 }
      },
      after: {
        type: 'image',
        src: processedUrl,
        alt: 'Processed',
        label: 'After',
        metadata: { width: 800, height: 600, size: 50000 }
      }
    }
  ]}
  title="Preview & Download"
  defaultImageAlt="Preview"
/>
```

---

### DownloadButton

**Location**: `src/components/shared/ToolUI/DownloadButton.jsx`

**Purpose**: Download processed files.

**Props**:
```typescript
{
  onClick: Function,                // Click handler (required)
  variant: 'primary' | 'secondary', // Button style
  size: 'small' | 'medium' | 'large',
  fullWidth: boolean,               // Full width button
  disabled: boolean,                // Disabled state
  text: string,                     // Button text (required)
  icon: string                      // Optional icon
}
```

**Example**:
```jsx
<DownloadButton
  onClick={handleDownload}
  variant="primary"
  size="large"
  fullWidth={true}
  text="Download All (5)"
/>
```

---

### ProcessingIndicator

**Location**: `src/components/shared/ToolUI/ProcessingIndicator.jsx`

**Purpose**: Show processing progress.

**Props**:
```typescript
{
  type: 'spinner' | 'progress',     // Indicator type (required)
  progress: number,                 // Progress value (0-100)
  message: string,                  // Status message
  showProgressText: boolean         // Show percentage text
}
```

**Example**:
```jsx
<ProcessingIndicator
  type="progress"
  progress={75}
  message="Processing your images..."
  showProgressText={true}
/>
```

---

### ErrorMessage

**Location**: `src/components/shared/ToolUI/ErrorMessage.jsx`

**Purpose**: Display error messages.

**Props**:
```typescript
{
  type: 'error' | 'warning' | 'info', // Message type (required)
  message: string,                    // Error message (required)
  onDismiss: Function,                // Dismiss handler
  dismissText: string                 // Dismiss button text
}
```

**Example**:
```jsx
<ErrorMessage
  type="error"
  message="File size exceeds maximum limit"
  onDismiss={() => setError(null)}
  dismissText="Dismiss"
/>
```

---

## 📄 Content Components

### FAQ

**Location**: `src/components/shared/Content/FAQ.jsx`

**Purpose**: Expandable FAQ section.

**Props**:
```typescript
{
  title: string,                    // Section title
  items: Array<{                    // FAQ items (required)
    question: string,
    answer: string
  }>
}
```

**Example**:
```jsx
<FAQ
  title="Frequently Asked Questions"
  items={[
    {
      question: "Is it free?",
      answer: "Yes, completely free!"
    }
  ]}
/>
```

---

### SEOContent

**Location**: `src/components/shared/Content/SEOContent.jsx`

**Purpose**: Display SEO-optimized content sections.

**Props**:
```typescript
{
  sections: Array<{                 // Content sections (required)
    title: string,
    content: string,
    link: string,
    anchor: string
  }>
}
```

---

### FeatureList

**Location**: `src/components/shared/Content/FeatureList.jsx`

**Purpose**: Display feature list.

**Props**:
```typescript
{
  features: Array<string>           // Features array (required)
}
```

---

### UseCaseList

**Location**: `src/components/shared/Content/UseCaseList.jsx`

**Purpose**: Display use cases.

**Props**:
```typescript
{
  useCases: Array<{                 // Use cases array (required)
    title: string,
    description: string
  }>
}
```

---

## 🎛️ Custom Controls Example

When creating custom controls for your tool:

```jsx
// src/components/YourTool/YourToolControls.jsx
import React from 'react';
import PropTypes from 'prop-types';

const YourToolControls = ({ settings, onSettingsChange, content }) => {
  return (
    <div className="your-tool-controls">
      {/* Your custom UI here */}
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

**Key Points**:
- Receive `settings`, `onSettingsChange`, and `content` as props
- All text must come from `content` prop (no hardcoding)
- Call `onSettingsChange` with partial settings object
- Use PropTypes for type checking

---

## 🔌 Hooks

### useFileUpload

**Location**: `src/hooks/useFileUpload.js`

**Purpose**: Handle file upload logic.

**Usage**:
```javascript
const {
  files,
  uploadProgress,
  isUploading,
  handleFileSelect,
  handleDrop,
  clearFiles,
  removeFile
} = useFileUpload({
  accept: '.jpg,.png',
  maxSize: 10485760,
  maxFiles: 10,
  onError: (error) => console.error(error)
});
```

---

### useProcessing

**Location**: `src/hooks/useProcessing.js`

**Purpose**: Handle file processing logic.

**Usage**:
```javascript
const {
  isProcessing,
  progress,
  processFiles
} = useProcessing({
  processFunction: (file) => toolInstance.process(file, settings)
});

// Process files
const results = await processFiles(files);
```

---

### useToolConfig

**Location**: `src/hooks/useToolConfig.js`

**Purpose**: Access tool configuration with language support.

**Usage**:
```javascript
const { content, uiText, settings } = useToolConfig(config);
```

---

## 🎨 Styling Guidelines

All components use CSS modules or scoped CSS:

```css
/* Component-specific styles */
.component-name {
  /* Styles here */
}

/* Use BEM naming convention */
.component-name__element {
  /* Element styles */
}

.component-name--modifier {
  /* Modifier styles */
}
```

---

## 📝 Best Practices

1. **Always use props for text** - Never hardcode strings
2. **Validate props** - Use PropTypes or TypeScript
3. **Handle errors gracefully** - Show user-friendly messages
4. **Keep components pure** - No side effects in render
5. **Use semantic HTML** - Accessibility matters
6. **Test thoroughly** - Unit and integration tests

---

## 🚨 Common Mistakes

### ❌ DON'T:
```jsx
// Hardcoded text
<button>Download</button>

// Direct state mutation
settings.value = newValue;

// Missing prop validation
const MyComponent = ({ data }) => { ... }
```

### ✅ DO:
```jsx
// Text from props
<button>{content.downloadText}</button>

// Immutable state update
onSettingsChange({ value: newValue });

// Proper prop validation
MyComponent.propTypes = {
  data: PropTypes.object.isRequired
};
```

---

## 📚 Additional Resources

- [Architecture Documentation](./ARCHITECTURE.md)
- [Adding New Tool Guide](./ADDING_NEW_TOOL.md)
- [Config Schema Reference](./CONFIG_SCHEMA.md)

---

**Remember**: These components are designed to be 100% reusable. If you find yourself modifying them for a specific tool, you're probably doing it wrong!