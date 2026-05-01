import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './contexts/LanguageContext'
import GATracker from './components/GATracker'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/shared/Navigation/Header'
import Footer from './components/shared/Navigation/Footer'
import './index.css'


// Lazy load pages for better performance
const App = lazy(() => import('./App'))
const ImageResizerNew = lazy(() => import('./pages/ImageResizerNew'))
const ImageResizer50KB = lazy(() => import('./pages/ImageResizer50KB'))
const WordCounter = lazy(() => import('./pages/WordCounter'))
const TextCaseConverter = lazy(() => import('./pages/TextCaseConverter'))
const RemoveExtraSpaces = lazy(() => import('./pages/RemoveExtraSpaces'))
const RemoveDuplicateLines = lazy(() => import('./pages/RemoveDuplicateLines'))
const WordSorter = lazy(() => import('./pages/WordSorter'))
const CharacterCounter = lazy(() => import('./pages/CharacterCounter'))
const JSONFormatter = lazy(() => import('./pages/JSONFormatter'))
const Base64Encoder = lazy(() => import('./pages/Base64Encoder'))
const URLEncoder = lazy(() => import('./pages/URLEncoder'))
const JSONToCSV = lazy(() => import('./pages/JSONToCSV'))
const MergePdf = lazy(() => import('./pages/MergePdf'))
const ImageToPdf = lazy(() => import('./pages/ImageToPdf'))
const ImageCompressor = lazy(() => import('./pages/ImageCompressor'))
const ImageFormatConverter = lazy(() => import('./pages/ImageFormatConverter'))
const ImageCrop = lazy(() => import('./pages/ImageCrop'))
const PdfToImage = lazy(() => import('./pages/PdfToImage'))
const SplitPdf = lazy(() => import('./pages/SplitPdf'))
const RotatePdf = lazy(() => import('./pages/RotatePdf'))
const DeletePdfPages = lazy(() => import('./pages/DeletePdfPages'))
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
          <ScrollToTop />
          <GATracker>
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
                <Route path="/tools/remove-duplicate-lines" element={<RemoveDuplicateLines />} />
                <Route path="/tools/word-sorter" element={<WordSorter />} />
                <Route path="/tools/character-counter" element={<CharacterCounter />} />
                
                {/* Developer Tools */}
                <Route path="/tools/json-formatter" element={<JSONFormatter />} />
                <Route path="/tools/base64-encoder-decoder" element={<Base64Encoder />} />
                <Route path="/tools/url-encoder-decoder" element={<URLEncoder />} />
                <Route path="/tools/json-to-csv" element={<JSONToCSV />} />
                
                {/* PDF Tools */}
                <Route path="/tools/merge-pdf" element={<MergePdf />} />
                
                {/* Image to PDF */}
                <Route path="/tools/image-to-pdf" element={<ImageToPdf />} />
                
                {/* Image Compressor */}
                <Route path="/tools/image-compressor" element={<ImageCompressor />} />
                
                {/* Image Format Converter */}
                <Route path="/tools/image-format-converter" element={<ImageFormatConverter />} />
                
                {/* Image Crop */}
                <Route path="/tools/image-crop" element={<ImageCrop />} />
                
                {/* PDF to Image */}
                <Route path="/tools/pdf-to-image" element={<PdfToImage />} />
                
                {/* Split PDF */}
                <Route path="/tools/split-pdf" element={<SplitPdf />} />
                
                {/* Rotate PDF */}
                <Route path="/tools/rotate-pdf" element={<RotatePdf />} />
                
                {/* Delete PDF Pages */}
                <Route path="/tools/delete-pdf-pages" element={<DeletePdfPages />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </GATracker>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
)

