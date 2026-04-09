import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'


// Lazy load pages for better performance
const App = lazy(() => import('./App'))
const ImageResizerNew = lazy(() => import('./pages/ImageResizerNew'))
const ImageResizer50KB = lazy(() => import('./pages/ImageResizer50KB'))
const WordCounter = lazy(() => import('./pages/WordCounter'))
const TextCaseConverter = lazy(() => import('./pages/TextCaseConverter'))
const RemoveExtraSpaces = lazy(() => import('./pages/RemoveExtraSpaces'))
const CharacterCounter = lazy(() => import('./pages/CharacterCounter'))
const JSONFormatter = lazy(() => import('./pages/JSONFormatter'))
const MergePdf = lazy(() => import('./pages/MergePdf'))
const AllToolsPage = lazy(() => import('./pages/AllToolsPage'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))

// Category configs
import { imageCategoryConfig } from './configs/categories/image.config'
import { pdfCategoryConfig } from './configs/categories/pdf.config'
import { textCategoryConfig } from './configs/categories/text.config'
import { developerCategoryConfig } from './configs/categories/developer.config'

// Loading fallback component
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
                
                {/* Static Pages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                
                {/* All Tools Page */}
                <Route path="/tools" element={<AllToolsPage />} />
                
                {/* Category Pages */}
                <Route path="/tools/image" element={<CategoryPage categoryConfig={imageCategoryConfig} />} />
                <Route path="/tools/pdf" element={<CategoryPage categoryConfig={pdfCategoryConfig} />} />
                <Route path="/tools/text" element={<CategoryPage categoryConfig={textCategoryConfig} />} />
                <Route path="/tools/developer" element={<CategoryPage categoryConfig={developerCategoryConfig} />} />
                
                {/* Individual Tool Pages */}
                {/* Image Tools */}
                <Route path="/tools/resize-image" element={<ImageResizerNew />} />
                <Route path="/image-resizer-50kb" element={<ImageResizer50KB />} />
                <Route path="/resize-image-to-50kb" element={<ImageResizerNew />} />
                <Route path="/resize-image-to-20kb" element={<ImageResizerNew />} />
                <Route path="/resize-image-to-100kb" element={<ImageResizerNew />} />
                <Route path="/compress-image-online" element={<ImageResizerNew />} />
                
                {/* Text Tools */}
                <Route path="/tools/word-counter" element={<WordCounter />} />
                <Route path="/tools/text-case-converter" element={<TextCaseConverter />} />
                <Route path="/tools/remove-extra-spaces" element={<RemoveExtraSpaces />} />
                <Route path="/tools/character-counter" element={<CharacterCounter />} />
                
                {/* Developer Tools */}
                <Route path="/tools/json-formatter" element={<JSONFormatter />} />
                
                {/* PDF Tools */}
                <Route path="/tools/merge-pdf" element={<MergePdf />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
)

