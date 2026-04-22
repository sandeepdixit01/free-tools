/**
 * Base64Encoder Page
 * Standalone implementation for text-based tool (not file upload)
 * Uses same layout components as ToolPage but with text input instead
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCanonicalUrl } from '../hooks/useCanonicalUrl';
import SEOHead from '../components/SEO/SEOHead';
import ToolLayout from '../components/shared/Layout/ToolLayout';
import ToolHero from '../components/shared/Layout/ToolHero';
import ToolFeatures from '../components/shared/Layout/ToolFeatures';
import ToolHowTo from '../components/shared/Layout/ToolHowTo';
import SEOContent from '../components/shared/Content/SEOContent';
import FAQ from '../components/shared/Content/FAQ';
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';
import Base64EncoderTool from '../tools/Base64EncoderTool';
import Base64EncoderControls from '../components/Base64Encoder/Base64EncoderControls';
import base64EncoderConfig from '../configs/tools/base64Encoder.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredDataHelper';

const Base64Encoder = () => {
  const { language } = useLanguage();
  const canonical = useCanonicalUrl();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (base64EncoderConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(base64EncoderConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('Base64Encoder config validation failed:');
          console.error(getValidationReport(base64EncoderConfig));
        } else {
          console.log('✅ Base64Encoder config is valid (Schema v2.0)');
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return base64EncoderConfig.content?.[language] || base64EncoderConfig.content?.en || {};
  }, [language]);

  const seoData = useMemo(() => {
    return base64EncoderConfig.seo?.[language] || base64EncoderConfig.seo?.en || {};
  }, [language]);

  const uiText = useMemo(() => {
    return base64EncoderConfig.uiText?.[language] || base64EncoderConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new Base64EncoderTool(), []);

  // Tool settings
  const settings = base64EncoderConfig.defaultSettings || {};

  // Tool category for ad exclusion
  const toolCategory = base64EncoderConfig.metadata?.category || null;

  // Prepare ad slots
  const adSlots = useMemo(() => {
    return {
      top: <AdSlot position={AD_POSITIONS.TOP_BANNER} excludeCategory={toolCategory} />,
      afterResult: <AdSlot position={AD_POSITIONS.BELOW_HERO} excludeCategory={toolCategory} />,
      midContent: <AdSlot position={AD_POSITIONS.MID_CONTENT} excludeCategory={toolCategory} />,
      bottom: <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} excludeCategory={toolCategory} />
    };
  }, [toolCategory]);

  // Generate structured data schemas
  const structuredData = useMemo(() => {
    return {
      webApplication: generateWebApplicationSchema(base64EncoderConfig, language),
      howTo: generateHowToSchema(base64EncoderConfig, language),
      faq: generateFAQSchema(base64EncoderConfig, language)
    };
  }, [language]);

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={canonical}
        webApplicationData={structuredData.webApplication}
        howToData={structuredData.howTo}
        faqData={structuredData.faq}
      />

      {/* Tool Layout */}
      <ToolLayout
        // Tool identification for breadcrumb
        toolId="base64-encoder"
        
        // Hero Section
        showHero={true}
        heroComponent={
          <ToolHero
            title={content.hero?.title}
            subtitle={content.hero?.subtitle}
            benefits={content.hero?.benefits}
            ctaText={content.hero?.cta}
            privacyNotice={content.hero?.privacyNotice}
            onCtaClick={() => document.getElementById('base64-input')?.focus()}
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
              sections={content.seoContent.sections}
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

          {/* Base64 Encoder Controls (Text Input + Actions + Result) */}
          <Base64EncoderControls
            toolInstance={toolInstance}
            uiText={uiText}
            settings={settings}
          />
        </div>
      </ToolLayout>
    </>
  );
};

export default Base64Encoder;

