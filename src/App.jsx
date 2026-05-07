import React, { useMemo } from 'react'
import { useLanguage } from './contexts/LanguageContext'
import { useCanonicalUrl } from './hooks/useCanonicalUrl'
import SEOHead from './components/SEO/SEOHead'
import Hero from './components/Hero'
import SectionHeader from './components/home/SectionHeader'
import ToolGrid from './components/home/ToolGrid'
import CategoryGrid from './components/home/CategoryGrid'
import WhyUseOurTools from './components/WhyUseOurTools'
import SEOContent from './components/shared/Content/SEOContent'
import FAQ from './components/shared/Content/FAQ'
import AdSlot from './components/ads/AdSlot'
import LazySection from './components/LazySection'
import { AD_POSITIONS } from './configs/adPositions'
import { homeConfig } from './configs/homeConfig'
import { getPopularTools, getRandomTools, getFeaturedTools } from './data/tools'
import './App.css'

function App() {
  const { language } = useLanguage()
  const canonical = useCanonicalUrl()
  
  // Get popular tools dynamically (sorted by usageCount)
  // STANDARDIZED: Exactly 6 tools for Popular Tools section
  const popularTools = useMemo(() => getPopularTools(6), [])

  // Get quick access tools (featured tools for hero section)
  // STANDARDIZED: Exactly 4 tools for hero quick access
  const quickAccessTools = useMemo(() => getFeaturedTools(4), [])

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={language === 'hi'
          ? "फ्री ऑनलाइन टूल्स - इमेज, PDF, टेक्स्ट और डेवलपर टूल्स"
          : "Free Online Tools - Image, PDF, Text & Developer Tools"}
        description={language === 'hi'
          ? "इमेज, PDF, टेक्स्ट और डेवलपर्स के लिए फ्री ऑनलाइन टूल्स। तेज़, सुरक्षित और मोबाइल-फ्रेंडली।"
          : "Free online tools for images, PDFs, text, and developers. Fast, secure, and mobile-friendly."}
        keywords="free online tools, image tools, pdf tools, text tools, developer tools, image resizer, pdf merger, word counter, json formatter"
        canonical={canonical}
      />
      
      <main className="main-content">
      {/* Hero Section */}
      <Hero
        config={homeConfig.hero}
        quickAccessTools={quickAccessTools}
      />
      
      {/* Ad Slot: Below Hero */}
      <AdSlot position={AD_POSITIONS.BELOW_HERO} />
      
      {/* Popular Tools Section */}
      <section className="home-section">
        <div className="container">
          <SectionHeader
            title={homeConfig.sections.popularTools[language]?.title || homeConfig.sections.popularTools.en?.title}
            subtitle={homeConfig.sections.popularTools[language]?.subtitle}
            align="center"
          />
          <ToolGrid tools={popularTools} />
        </div>
      </section>
      
      {/* Categories Section - Lazy loaded */}
      <LazySection>
        <section className="home-section">
          <div className="container">
            <SectionHeader
              title={homeConfig.sections.categories[language]?.title || homeConfig.sections.categories.en?.title}
              subtitle={homeConfig.sections.categories[language]?.subtitle}
              align="center"
            />
            <CategoryGrid categories={homeConfig.categories} />
          </div>
        </section>
      </LazySection>
      
      {/* Ad Slot: Mid Content - Lazy loaded */}
      <LazySection>
        <AdSlot position={AD_POSITIONS.MID_CONTENT} />
      </LazySection>
      
      {/* Why Use Our Tools Section - Lazy loaded */}
      <LazySection>
        <WhyUseOurTools config={homeConfig.whyUse} />
      </LazySection>
      
      {/* SEO Content Section - Lazy loaded */}
      <LazySection>
        <section className="home-section">
          <div className="container">
            <SEOContent
              title={homeConfig.seoContent[language]?.mainTitle}
              intro={homeConfig.seoContent[language]?.intro}
              sections={homeConfig.seoContent[language]?.sections || []}
            />
          </div>
        </section>
      </LazySection>
      
      {/* FAQ Section - Lazy loaded */}
      <LazySection>
        <section className="home-section">
          <div className="container">
            <FAQ
              title={homeConfig.faq[language]?.title}
              items={homeConfig.faq[language]?.items || []}
            />
          </div>
        </section>
      </LazySection>
      
      {/* Ad Slot: Bottom Banner - Lazy loaded */}
      <LazySection>
        <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} />
      </LazySection>
      
      {/* Subtle Branding */}
      <section className="home-branding">
        <div className="container">
          <p className="branding-text">
            {language === 'hi'
              ? 'DesiTechLabs का एक उत्पाद'
              : 'A product by DesiTechLabs'}
          </p>
        </div>
      </section>
    </main>
    </>
  )
}

export default App

