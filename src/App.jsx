import React from 'react'
import { useLanguage } from './contexts/LanguageContext'
import Hero from './components/Hero'
import SectionHeader from './components/home/SectionHeader'
import ToolGrid from './components/home/ToolGrid'
import CategoryGrid from './components/home/CategoryGrid'
import WhyUseOurTools from './components/WhyUseOurTools'
import SEOContent from './components/shared/Content/SEOContent'
import FAQ from './components/shared/Content/FAQ'
import AdSlot from './components/ads/AdSlot'
import { AD_POSITIONS } from './configs/adPositions'
import { homeConfig } from './configs/homeConfig'
import { toolRegistry } from './configs/toolRegistry'
import './App.css'

function App() {
  const { language } = useLanguage()
  
  // Get popular tools (first 8 tools from registry)
  const popularTools = toolRegistry.slice(0, 8)

  // Get quick access tools (first 4 tools)
  const quickAccessTools = toolRegistry.slice(0, 4)

  return (
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
      
      {/* Categories Section */}
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
      
      {/* Ad Slot: Mid Content */}
      <AdSlot position={AD_POSITIONS.MID_CONTENT} />
      
      {/* Why Use Our Tools Section */}
      <WhyUseOurTools config={homeConfig.whyUse} />
      
      {/* SEO Content Section */}
      <section className="home-section">
        <div className="container">
          <SEOContent
            title={homeConfig.seoContent[language]?.mainTitle}
            intro={homeConfig.seoContent[language]?.intro}
            sections={homeConfig.seoContent[language]?.sections || []}
          />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="home-section">
        <div className="container">
          <FAQ
            title={homeConfig.faq[language]?.title}
            items={homeConfig.faq[language]?.items || []}
          />
        </div>
      </section>
      
      {/* Ad Slot: Bottom Banner */}
      <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} />
    </main>
  )
}

export default App

