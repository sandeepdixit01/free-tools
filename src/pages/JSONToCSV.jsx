/**
 * JSONToCSV Page Component
 * JSON to CSV Converter tool page
 */

import React, { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEO/SEOHead';
import ToolLayout from '../components/shared/Layout/ToolLayout';
import ToolHero from '../components/shared/Layout/ToolHero';
import ToolFeatures from '../components/shared/Layout/ToolFeatures';
import ToolHowTo from '../components/shared/Layout/ToolHowTo';
import SEOContent from '../components/shared/Content/SEOContent';
import UseCaseList from '../components/shared/Content/UseCaseList';
import FAQ from '../components/shared/Content/FAQ';
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';
import JSONToCSVTool from '../tools/JSONToCSVTool';
import JSONToCSVControls from '../components/JSONToCSV/JSONToCSVControls';
import jsonToCSVConfig from '../configs/tools/jsonToCSV.config';
import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../utils/structuredDataHelper';

const JSONToCSV = () => {
  const { language } = useLanguage();

  // Get language-specific content
  const content = useMemo(() => {
    return jsonToCSVConfig[language] || jsonToCSVConfig.en || {};
  }, [language]);

  const seoData = content.seo || {};
  const uiText = content.uiText || {};

  // Initialize tool instance
  const toolInstance = useMemo(() => new JSONToCSVTool(), []);

  // Tool category for ad exclusion
  const toolCategory = 'developer';

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
      webApplication: generateWebApplicationSchema(jsonToCSVConfig, language),
      howTo: generateHowToSchema(jsonToCSVConfig, language),
      faq: generateFAQSchema(jsonToCSVConfig, language)
    };
  }, [language]);

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        webApplicationData={structuredData.webApplication}
        howToData={structuredData.howTo}
        faqData={structuredData.faq}
      />

      {/* Tool Layout */}
      <ToolLayout
        // Tool identification for breadcrumb
        toolId="json-to-csv"
        
        // Hero Section
        showHero={true}
        heroComponent={
          <ToolHero
            title={content.hero?.title}
            subtitle={content.hero?.subtitle}
            benefits={content.hero?.benefits}
            onCtaClick={() => document.getElementById('json-input')?.focus()}
          />
        }

        // Features Section
        showFeatures={true}
        featuresComponent={
          <ToolFeatures
            title={content.features?.title}
            features={content.features?.items}
          />
        }

        // How To Section
        showHowTo={true}
        howToComponent={
          <ToolHowTo
            title={content.howTo?.title}
            steps={content.howTo?.steps}
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
          {/* JSON to CSV Controls - Tool comes first */}
          <JSONToCSVControls
            toolInstance={toolInstance}
            uiText={uiText}
          />
        </div>
      </ToolLayout>
    </>
  );
};

export default JSONToCSV;

