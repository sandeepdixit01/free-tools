# ToolPage Refactoring Plan: BaseToolPage Architecture

## Step 1: File-Specific Logic Identification ✅

### FILE-SPECIFIC CODE (Must be extracted):

#### Lines 35, 51, 145-159: File Upload Hook
```jsx
import FileUpload from '../components/shared/ToolUI/FileUpload';
import { useFileUpload } from '../hooks/useFileUpload';

const {
  files,
  uploadProgress,
  isUploading,
  handleFileInputChange: handleFileSelect,
  handleDrop,
  clearFiles,
  removeFile
} = useFileUpload({
  acceptedTypes: 'image',  // ← HARDCODED
  multiple: true,
  maxFiles: adaptedConfig.settings?.maxFiles || adaptedConfig.fileTypes?.maxFiles || 10,
  onError: (err) => setError(err)
});
```

#### Lines 161-168: File Processing Hook
```jsx
const {
  isProcessing,
  progress,
  processFiles
} = useProcessing({
  processFunction: (file) => toolInstance.process(file, settings)
});
```

#### Lines 170-177: File Change Effect
```jsx
useEffect(() => {
  if (files.length > 0) {
    handleProcess();
  } else {
    setProcessedFiles([]);
  }
}, [files, settings]);
```

#### Lines 182-217: File Processing Logic
```jsx
const handleProcess = async () => {
  // File-specific processing
  const results = await processFiles(files);
  // ...
};
```

#### Lines 227-252: File Download Logic
```jsx
const handleDownload = (file) => {
  if (file.processed?.blob) {
    downloadFile(
      file.processed.blob,
      `${prefix}${file.original.name}`,
      file.processed.mimeType
    );
  }
};

const handleDownloadAll = () => {
  // Download files logic
};
```

#### Lines 257-268: File Preview Data
```jsx
const previewData = useMemo(() => {
  if (processedFiles.length === 0) return [];
  
  const data = preparePreviewData(
    processedFiles,
    toolInstance,
    uiText.preview || {}
  );
  
  return data;
}, [processedFiles, toolInstance, uiText.preview]);
```

#### Lines 319, 377-403: FileUpload Component
```jsx
onCtaClick={() => document.getElementById('file-upload')?.click()}

<FileUpload
  id="file-upload"
  accept={adaptedConfig.validation?.allowedFormats?.join(',') || adaptedConfig.fileTypes?.accept}
  // ... many file-specific props
/>
```

#### Lines 416-424: File-conditional Controls
```jsx
{files.length > 0 && CustomControls && (
  <ControlPanel title={uiText.controls?.title}>
    <CustomControls
      settings={settings}
      onSettingsChange={handleSettingsChange}
      content={uiText.controls}
    />
  </ControlPanel>
)}
```

#### Lines 437-462: File Preview & Download UI
```jsx
{processedFiles.length > 0 && !isProcessing && (
  <>
    <PreviewPane
      showComparison={true}
      items={previewData}
      // ...
    />
    
    <DownloadButton
      onClick={handleDownloadAll}
      // ...
    />
  </>
)}
```

---

### GENERIC CODE (Keep in BaseToolPage):

#### Lines 15-26: Core Imports
- React hooks
- Language context
- Canonical URL
- SEOHead
- Config adapter
- Structured data helpers

#### Lines 28-44: Layout & Content Components
- ToolLayout, ToolHero, ToolFeatures, ToolHowTo
- FAQ, SEOContent
- ErrorMessage, ProcessingIndicator

#### Lines 46-48: Ad System
- AdSlot, AD_POSITIONS

#### Lines 64-128: Config Processing
- Language extraction
- SEO data extraction
- UI text extraction
- Tool ID extraction

#### Lines 130-138: Tool Instance
- Tool class instantiation
- Interface validation

#### Lines 140-143: Generic State
- Settings state
- Error state
- (processedFiles is file-specific)

#### Lines 219-224: Settings Handler
- Generic settings change handler

#### Lines 270-281: Ad Slots
- Generic ad slot preparation

#### Lines 283-290: Structured Data
- Generic structured data generation

#### Lines 292-365: Layout Structure
- SEOHead
- ToolLayout with all sections
- Hero, Features, HowTo, SEO Content, FAQ

#### Lines 369-374: Privacy Notice
- Generic privacy notice rendering

#### Lines 405-413: Error Message
- Generic error display

#### Lines 426-434: Processing Indicator
- Generic processing indicator

---

## Step 2: BaseToolPage API Design ✅

### Props Interface:

```typescript
interface BaseToolPageProps {
  // Required
  config: ToolConfig;
  
  // Tool-specific rendering (injected)
  renderInput: (props: InputRenderProps) => React.ReactNode;
  renderOutput: (props: OutputRenderProps) => React.ReactNode;
  
  // Optional
  onProcess?: (input: any, settings: any) => Promise<any>;
  initialSettings?: Record<string, any>;
}

interface InputRenderProps {
  settings: Record<string, any>;
  onSettingsChange: (settings: Record<string, any>) => void;
  error: string | null;
  uiText: Record<string, any>;
  content: Record<string, any>;
}

interface OutputRenderProps {
  result: any;
  isProcessing: boolean;
  progress: number;
  error: string | null;
  uiText: Record<string, any>;
}
```

---

## Step 3: Component Architecture

```
BaseToolPage (Generic)
├── SEO & Meta
├── Layout Structure
├── Ad Placements
└── Injected Content
    ├── renderInput() ← Tool-specific
    └── renderOutput() ← Tool-specific

FileToolPage (Wrapper)
├── Uses BaseToolPage
├── Provides renderInput = FileUpload + Controls
└── Provides renderOutput = Preview + Download

TextToolPage (Wrapper)
├── Uses BaseToolPage
├── Provides renderInput = Textarea + Controls
└── Provides renderOutput = Textarea + Copy
```

---

## Step 4: Responsibility Separation

### BaseToolPage Responsibilities:
✅ Config processing (language, SEO, UI text)
✅ SEO head rendering
✅ Layout structure (ToolLayout)
✅ Ad slot management
✅ Structured data generation
✅ Hero, Features, HowTo, FAQ sections
✅ Error display
✅ Processing indicator
✅ Settings state management
❌ NO file-specific logic
❌ NO text-specific logic
❌ NO input/output assumptions

### FileToolPage Responsibilities:
✅ File upload UI
✅ File processing logic
✅ File preview
✅ File download
✅ Uses BaseToolPage for structure

### TextToolPage Responsibilities:
✅ Textarea input UI
✅ Text processing logic
✅ Text output display
✅ Copy to clipboard
✅ Uses BaseToolPage for structure

---

## Step 5: Implementation Strategy

### Phase 1: Create BaseToolPage
1. Copy ToolPage.jsx → BaseToolPage.jsx
2. Remove all file-specific code
3. Add renderInput/renderOutput props
4. Keep all generic functionality

### Phase 2: Create FileToolPage
1. Create new FileToolPage.jsx
2. Extract file-specific logic from old ToolPage
3. Wrap BaseToolPage
4. Inject file-specific rendering

### Phase 3: Update ToolPage (Backward Compatibility)
1. Make ToolPage.jsx a thin wrapper
2. Use FileToolPage internally
3. Keep same API for existing tools

### Phase 4: Create TextToolPage
1. Create new TextToolPage.jsx
2. Implement text-specific logic
3. Wrap BaseToolPage
4. Inject text-specific rendering

### Phase 5: Validation
1. Test ImageResizerNew (file-based)
2. Test WordCounter (text-based)
3. Verify SEO output
4. Verify ad placements
5. Verify layout consistency

---

## Step 6: Migration Path

### Existing File Tools:
```jsx
// OLD
<ToolPage config={config} ToolClass={Tool} customControls={Controls} />

// NEW (same API, uses FileToolPage internally)
<ToolPage config={config} ToolClass={Tool} customControls={Controls} />
```

### New Text Tools:
```jsx
// NEW
<TextToolPage config={config} ToolClass={Tool} customControls={Controls} />
```

---

## Success Criteria

✅ BaseToolPage has ZERO file-specific code
✅ BaseToolPage has ZERO text-specific code
✅ FileToolPage reproduces exact ToolPage behavior
✅ TextToolPage supports text-based tools
✅ No SEO regression
✅ No ad placement regression
✅ No layout regression
✅ Backward compatible with existing tools
✅ Extensible for future tool types

---

## Risk Mitigation

1. **Keep old ToolPage.jsx as backup** (rename to ToolPage.old.jsx)
2. **Test with existing tool first** (ImageResizerNew)
3. **Validate SEO output** (compare before/after)
4. **Check ad rendering** (visual inspection)
5. **Git checkpoint** (already created)

---

## Next Steps

1. ✅ Analysis complete
2. → Create BaseToolPage.jsx
3. → Create FileToolPage.jsx
4. → Update ToolPage.jsx (wrapper)
5. → Create TextToolPage.jsx
6. → Test & validate