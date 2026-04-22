/**
 * ImageToPdf Page
 * Image to PDF converter implementation
 * Uses same layout components as other tools
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
import UseCaseList from '../components/shared/Content/UseCaseList';
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';
import ImageToPdfTool from '../tools/ImageToPdfTool';
import ImageToPdfControls from '../components/ImageToPdf/ImageToPdfControls';
import { imageToPdfConfig } from '../configs/tools/imageToPdf.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredDataHelper';

const ImageToPdf = () => {
  const { language } = useLanguage();
  const canonical = useCanonicalUrl();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (imageToPdfConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(imageToPdfConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('ImageToPdf config validation failed:');
          console.error(getValidationReport(imageToPdfConfig));
        } else {
          console.log('✅ ImageToPdf config is valid (Schema v2.0)');
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return imageToPdfConfig.content?.[language] || imageToPdfConfig.content?.en || {};
  }, [language]);

  const seoData = useMemo(() => {
    return imageToPdfConfig.seo?.[language] || imageToPdfConfig.seo?.en || {};
  }, [language]);

  const uiText = useMemo(() => {
    return imageToPdfConfig.uiText?.[language] || imageToPdfConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return imageToPdfConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new ImageToPdfTool(), []);

  // Tool category for ad exclusion
  const toolCategory = imageToPdfConfig.metadata?.category || null;

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
      webApplication: generateWebApplicationSchema(imageToPdfConfig, language),
      howTo: generateHowToSchema(imageToPdfConfig, language),
      faq: generateFAQSchema(imageToPdfConfig, language)
    };
  }, [language]);

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
        canonical={canonical}
        webApplicationData={structuredData.webApplication}
        howToData={structuredData.howTo}
        faqData={structuredData.faq}
      />

      {/* Tool Layout */}
      <ToolLayout
        // Tool identification for breadcrumb
        toolId="image-to-pdf"
        
        // Hero Section
        showHero={true}
        heroComponent={
          <ToolHero
            title={content.hero?.title}
            subtitle={content.hero?.subtitle}
            benefits={content.hero?.benefits}
            ctaText={content.hero?.cta}
            privacyNotice={content.hero?.privacyNotice}
            onCtaClick={() => document.querySelector('.upload-area')?.click()}
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

        // Use Cases Section
        showUseCases={!!content.useCases}
        useCasesComponent={
          content.useCases ? (
            <UseCaseList
              useCases={content.useCases.items}
              title={content.useCases.title}
            />
          ) : null
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
          {/* Security Notice */}
          {uiText.securityNote && (
            <div className="security-notice" style={{
              padding: '12px 16px',
              backgroundColor: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '8px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#0c4a6e'
            }}>
              <span style={{ fontSize: '18px' }}>🔒</span>
              <span>{uiText.securityNote}</span>
            </div>
          )}

          {/* Image to PDF Controls */}
          <ImageToPdfControls
            toolInstance={toolInstance}
            uiText={uiText}
            validation={validation}
          />
        </div>
      </ToolLayout>
    </>
  );
};

export default ImageToPdf;

