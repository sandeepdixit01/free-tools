# 🛠️ FreeTools - Universal Tool Platform

A modern, scalable platform for building web-based tools with a **config-driven, reusable architecture**.

---

## 🎯 Overview

This project provides a complete framework for building unlimited tools (image processing, PDF manipulation, video conversion, etc.) with **minimal code duplication**. Add new tools in minutes, not hours!

### ✨ Key Features

- ✅ **100% Reusable Components** - Write once, use everywhere
- ✅ **Config-Driven** - All content from configuration files
- ✅ **Type-Safe** - BaseTool interface for consistency
- ✅ **Bilingual Support** - English & Hindi (easily extensible)
- ✅ **Zero Server Processing** - Everything runs in the browser
- ✅ **Production Ready** - Clean, tested, optimized code

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Basic knowledge of React

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── ToolPage.jsx              # Generic page wrapper (works for ALL tools)
│   └── ImageResizerNew.jsx       # Example tool page
│
├── components/
│   ├── shared/                   # Reusable components
│   │   ├── Layout/              # Page layout components
│   │   ├── ToolUI/              # Tool interaction components
│   │   └── Content/             # Content display components
│   └── ImageResizer/            # Tool-specific custom controls
│
├── tools/                       # Business logic (NO UI dependencies)
│   ├── BaseTool.js             # Base class for all tools
│   └── ImageResizerTool.js     # Example tool logic
│
├── configs/                     # Configuration files
│   └── tools/
│       ├── imageResizer.config.js
│       └── imageResizer.uiText.js
│
├── hooks/                       # Reusable React hooks
├── utils/                       # Utility functions
└── contexts/                    # React contexts

Documentation/
├── ARCHITECTURE.md              # Complete architecture guide
├── ADDING_NEW_TOOL.md          # Step-by-step tool creation guide
├── COMPONENT_API.md            # Component reference
└── CONFIG_SCHEMA.md            # Configuration schema
```

---

## 🎨 Adding a New Tool (3 Steps)

### Step 1: Create Tool Logic

```javascript
// src/tools/YourTool.js
import BaseTool from './BaseTool';

class YourTool extends BaseTool {
  async process(file, settings) {
    // Your processing logic
    return processedFile;
  }
  
  validate(settings) {
    return { valid: true, errors: [] };
  }
  
  getContentType() {
    return 'image'; // or 'pdf', 'video', etc.
  }
}

export default YourTool;
```

### Step 2: Create Configuration

```javascript
// src/configs/tools/yourTool.config.js
const yourToolConfig = {
  metadata: { /* ... */ },
  fileTypes: {
    accept: '.jpg,.png',
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10
  },
  content: {
    en: {
      hero: { title: '...', subtitle: '...' },
      features: { /* ... */ },
      faq: { /* ... */ }
    }
  }
};

export default yourToolConfig;
```

### Step 3: Create Tool Page

```javascript
// src/pages/YourToolPage.jsx
import React from 'react';
import ToolPage from './ToolPage';
import YourTool from '../tools/YourTool';
import yourToolConfig from '../configs/tools/yourTool.config';

const YourToolPage = () => {
  return (
    <ToolPage
      config={yourToolConfig}
      ToolClass={YourTool}
    />
  );
};

export default YourToolPage;
```

**That's it!** No UI code needed. Everything is reusable.

See [ADDING_NEW_TOOL.md](./Documentation/ADDING_NEW_TOOL.md) for detailed guide.

---

## 🏗️ Architecture Highlights

### Separation of Concerns

```
User Action
    ↓
ToolPage (Generic Wrapper)
    ↓
Config + ToolClass + CustomControls
    ↓
Hooks (useFileUpload, useProcessing)
    ↓
Tool Logic (process() method)
    ↓
Shared UI Components
    ↓
Result
```

### Key Principles

1. **Config-Driven**: All tool-specific content comes from config files
2. **Reusable Components**: UI components work for ANY tool type
3. **Type Safety**: All tools implement BaseTool interface
4. **No Hardcoding**: Zero hardcoded text or logic in components
5. **Clean Separation**: UI, logic, and content are completely separated

---

## 📚 Documentation

- **[Architecture Guide](./Documentation/ARCHITECTURE.md)** - Complete system architecture
- **[Adding New Tool](./Documentation/ADDING_NEW_TOOL.md)** - Step-by-step guide
- **[Component API](./Documentation/COMPONENT_API.md)** - Component reference
- **[Config Schema](./Documentation/CONFIG_SCHEMA.md)** - Configuration structure

---

## 🛠️ Available Tools

### Image Resizer
- Resize by dimensions or file size
- Batch processing support
- Quality control
- Multiple presets (Passport, WhatsApp, etc.)
- **Route**: `/tools/resize-image`

### Coming Soon
- PDF Compressor
- Video Converter
- Audio Editor
- Image Format Converter
- And more...

---

## 🌐 Internationalization

Currently supports:
- 🇬🇧 English (en)
- 🇮🇳 Hindi (hi)

Adding new languages is simple - just add translations to config files!

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

---

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` directory, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

---

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **React Helmet Async** - SEO management
- **PropTypes** - Type checking
- **CSS Modules** - Scoped styling

---

## 📊 Performance

- ✅ Lazy loading for heavy components
- ✅ Code splitting per tool
- ✅ Optimized bundle size
- ✅ Client-side processing (no server load)
- ✅ Efficient re-renders with React.memo

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing architecture patterns
- Keep components reusable and generic
- Add proper documentation
- Write tests for new features
- Ensure all text comes from config files

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Built with modern React best practices
- Inspired by the need for reusable, scalable tool architecture
- Designed for developers who value clean code

---

## 📞 Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Check the [Documentation](./Documentation/)
- Review existing tools as examples

---

## 🎯 Roadmap

- [ ] Add more tools (PDF, Video, Audio)
- [ ] TypeScript migration
- [ ] Advanced analytics
- [ ] User accounts (optional)
- [ ] Tool marketplace
- [ ] API access
- [ ] Mobile apps

---

## ⭐ Star History

If you find this project useful, please consider giving it a star! ⭐

---


*Building tools should be easy. This architecture makes it possible.*
