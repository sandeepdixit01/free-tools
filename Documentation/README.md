# Free Tool Depot

A collection of free online tools for developers and content creators.

## 🌐 Live Site
[https://freetooldepot.com](https://freetooldepot.com)

## 🛠️ Tools Available

### Text Tools
- Character Counter
- Word Counter
- Text Case Converter
- Remove Duplicate Lines
- Remove Extra Spaces
- Word Sorter

### Developer Tools
- JSON Formatter
- JSON to CSV Converter
- Base64 Encoder/Decoder
- URL Encoder/Decoder

### Image Tools
- Image Compressor
- Image Resizer
- Image Crop
- Image Format Converter
- Image to PDF
- Resize Image to 50KB

### PDF Tools
- PDF to Image
- Merge PDF
- Split PDF
- Rotate PDF
- Delete PDF Pages

## 🚀 Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: CSS Modules
- **PDF Processing**: pdf-lib, PDF.js
- **Image Processing**: Browser Canvas API
- **Contact Form**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Site Configuration
VITE_SITE_URL=https://freetooldepot.com

# EmailJS Configuration (for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed EmailJS configuration instructions.

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── configs/         # Tool configurations
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── tools/           # Tool logic classes
│   ├── translations/    # i18n translations
│   └── utils/           # Utility functions
├── scripts/             # Build and utility scripts
├── Documentation/       # Project documentation
└── archive/             # Archived files
```

## 🌍 Internationalization

The application supports:
- English (en)
- Hindi (hi)

## 📝 SEO Features

- Dynamic meta tags
- Structured data (JSON-LD)
- Canonical URLs
- Sitemap generation
- Breadcrumb navigation
- Mobile-responsive design

## 🔒 Privacy

All tools process data **client-side only**. No data is sent to any server except:
- Contact form submissions (via EmailJS)
- Analytics (if configured)

## 📄 License

© 2024 DesiTechLabs. All rights reserved.

## 📧 Contact

For questions or support, visit the [Contact Page](https://freetooldepot.com/contact)

## 📚 Documentation

Additional documentation is available in the `Documentation/` folder:
- EmailJS setup guide
- Migration reports
- Refactoring documentation
- Validation reports