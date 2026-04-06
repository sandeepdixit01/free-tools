# 🚀 Quick Start Guide

## Running the Application

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- React Router
- React Helmet Async
- Vite (build tool)

### Step 2: Start Development Server

```bash
npm run dev
```

The application will start at: **http://localhost:5173**

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 3: Open in Browser

Open your browser and navigate to:
- **Homepage**: http://localhost:5173/
- **Image Resizer**: http://localhost:5173/tools/resize-image

---

## Available Routes

All routes are now using the new architecture:

1. **Homepage**: `/`
2. **Image Resizer**: `/tools/resize-image`
3. **Resize to 50KB**: `/resize-image-to-50kb`
4. **Resize to 20KB**: `/resize-image-to-20kb`
5. **Resize to 100KB**: `/resize-image-to-100kb`
6. **Compress Image**: `/compress-image-online`

---

## Testing the Image Resizer

1. Go to http://localhost:5173/tools/resize-image
2. Upload an image (JPG, PNG, or WEBP)
3. Choose resize mode:
   - **By Dimensions**: Set width/height
   - **By File Size**: Target specific KB size
   - **Presets**: Use predefined settings
4. Adjust quality slider
5. See before/after preview
6. Download processed image

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter (if configured)
npm run lint
```

---

## Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
# Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## What to Check

### ✅ Development Mode Validation
Open browser console (F12) and check for:
```
✅ Image Resizer configuration is valid
```

If you see warnings, they're informational only.

### ✅ Features to Test

1. **File Upload**
   - Drag and drop
   - Click to browse
   - Multiple files

2. **Resize Modes**
   - By Dimensions
   - By File Size
   - Presets

3. **Preview**
   - Before/after comparison
   - Metadata display

4. **Download**
   - Single file
   - Multiple files

5. **Language Toggle**
   - Switch between English/Hindi

---

## Production Deployment

### Build for Production
```bash
npm run build
```

Output will be in `dist/` folder.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
# Build
npm run build

# Deploy dist folder to gh-pages branch
```

---

## Environment Variables

Create `.env` file if needed:
```env
VITE_APP_NAME=FreeTools
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
const appName = import.meta.env.VITE_APP_NAME
```

---

## Next Steps

1. ✅ Application is running
2. 📚 Read [Documentation](./Documentation/)
3. 🛠️ Add new tools following [ADDING_NEW_TOOL.md](./Documentation/ADDING_NEW_TOOL.md)
4. 🚀 Deploy to production

---

## Need Help?

- 📚 Check [Documentation](./Documentation/)
- 🐛 Open an issue on GitHub
- 💬 Review existing tools as examples

---

**Happy Building! 🎉**