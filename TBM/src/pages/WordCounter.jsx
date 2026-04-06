/**
 * WordCounter Page
 * Standalone implementation for text-based tool (not file upload)
 * Uses same layout components as ToolPage but with text input instead
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEO/SEOHead';
import ToolLayout from '../components/shared/Layout/ToolLayout';
import ToolHero from '../components/shared/Layout/ToolHero';
import ToolFeatures from '../components/shared/Layout/ToolFeatures';
import ToolHowTo from '../components/shared/Layout/ToolHowTo';
import SEOContent from '../components/shared/Content/SEOContent';
import FAQ from '../components/shared/Content/FAQ';
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';
import WordCounterTool from '../tools/WordCounterTool';
import WordCounterControls from '../components/WordCounter/WordCounterControls';
import wordCounterConfig from '../configs/tools/wordCounter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const WordCounter = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (wordCounterConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(wordCounterConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('WordCounter config validation failed:');
          console.error(getValidationReport(wordCounterConfig));
        } else {
          console.log('✅ WordCounter config is valid (Schema v2.0)');
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return wordCounterConfig.content?.[language] || wordCounterConfig.content?.en || {};
  }, [language]);

  const seoData = useMemo(() => {
    return wordCounterConfig.seo?.[language] || wordCounterConfig.seo?.en || {};
  }, [language]);

  const uiText = useMemo(() => {
    return wordCounterConfig.uiText?.[language] || wordCounterConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new WordCounterTool(), []);

  // Tool settings
  const settings = wordCounterConfig.defaultSettings || {};

  // Tool category for ad exclusion
  const toolCategory = wordCounterConfig.metadata?.category || null;

  // Prepare ad slots
  const adSlots = useMemo(() => {
    return {
      top: <AdSlot position={AD_POSITIONS.TOP_BANNER} excludeCategory={toolCategory} />,
      afterResult: <AdSlot position={AD_POSITIONS.BELOW_HERO} excludeCategory={toolCategory} />,
      midContent: <AdSlot position={AD_POSITIONS.MID_CONTENT} excludeCategory={toolCategory} />,
      bottom: <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} excludeCategory={toolCategory} />
    };
  }, [toolCategory]);

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={
          seoData.keywords
            ? (typeof seoData.keywords === 'string'
                ? seoData.keywords
                : [...(seoData.keywords.primary || []), ...(seoData.keywords.secondary || []), ...(seoData.keywords.longTail || [])].join(', '))
            : ''
        }
        canonical={seoData.canonical}
      />

      {/* Tool Layout */}
      <ToolLayout
        // Hero Section
        showHero={true}
        heroComponent={
          <ToolHero
            title={content.hero?.title}
            subtitle={content.hero?.subtitle}
            benefits={content.hero?.benefits}
            ctaText={content.hero?.cta?.primary}
            privacyNotice={content.hero?.privacyNotice}
            onCtaClick={() => document.getElementById('text-input')?.focus()}
          />
        }

        // Features Section
        showFeatures={true}
        featuresComponent={
          <ToolFeatures
            title={content.features?.title}
            subtitle={content.features?.subtitle}
            features={content.features?.items}
          />
        }

        // How To Section
        showHowTo={true}
        howToComponent={
          <ToolHowTo
            title={content.howTo?.title}
            subtitle={content.howTo?.subtitle}
            steps={content.howTo?.steps}
            tips={content.howTo?.tips}
          />
        }

        // SEO Content Section
        showSEO={!!content.seoContent}
        seoComponent={
          content.seoContent ? (
            <SEOContent
              title={content.seoContent.mainTitle}
              intro={content.seoContent.intro}
              sections={content.seoContent.sections?.map(section => ({
                ...section,
                keywords: Array.isArray(section.keywords)
                  ? section.keywords.join(', ')
                  : section.keywords
              }))}
            />
          ) : null
        }

        // FAQ Section
        showFAQ={true}
        faqComponent={
          <FAQ
            title={content.faq?.title}
            items={content.faq?.items}
          />
        }

        // Ad Slots
        adSlots={adSlots}
      >
        {/* Main Tool Content */}
        <div className="tool-content">
          {/* Privacy Notice */}
          {content.hero?.privacyNotice && (
            <div className="privacy-notice">
              {content.hero.privacyIcon || '🔒'} {content.hero.privacyNotice}
            </div>
          )}

          {/* Word Counter Controls (Text Input + Stats) */}
          <WordCounterControls
            toolInstance={toolInstance}
            uiText={uiText}
            settings={settings}
          />
        </div>
      </ToolLayout>
    </>
  );
};

export default WordCounter;

