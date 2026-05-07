/**
 * ToolLayoutV2 - Reusable Tool Page Layout
 *
 * PURE UI COMPONENT - NO LOGIC, NO BEHAVIOR
 * Extracts common layout structure: SEO, ads, sections
 *
 * Responsibilities:
 * ✅ SEO head rendering
 * ✅ Ad slot placement
 * ✅ Section layout (Features, HowTo, FAQ, SEO Content)
 * ✅ Breadcrumb integration
 *
 * Does NOT handle:
 * ❌ State management
 * ❌ Data fetching
 * ❌ Event handlers (including CTA clicks)
 * ❌ Processing logic
 * ❌ Hero section (tool pages handle their own hero)
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useCanonicalUrl } from '../../../hooks/useCanonicalUrl';
import SEOHead from '../../SEO/SEOHead';
import ToolLayout from './ToolLayout';
import ToolFeatures from './ToolFeatures';
import ToolHowTo from './ToolHowTo';
import SEOContent from '../Content/SEOContent';
import FAQ from '../Content/FAQ';
import AdSlot from '../../ads/AdSlot';
import { AD_POSITIONS } from '../../../configs/adPositions';
import { generateWebApplicationSchema, generateHowToSchema, generateFAQSchema } from '../../../utils/structuredDataHelper';

/**
 * ToolLayoutV2 Component
 *
 * @param {Object} config - Tool configuration object
 * @param {string} toolId - Tool identifier for breadcrumb
 * @param {React.ReactNode} heroComponent - Hero section (rendered before top ad)
 * @param {React.ReactNode} children - Main tool content (controls, rendered after top ad)
 */
const ToolLayoutV2 = ({
  config,
  toolId,
  heroComponent = null,
  children
}) => {
  const { language } = useLanguage();
  const canonical = useCanonicalUrl();

  // Extract language-specific content
  const content = useMemo(() => {
    return config.content?.[language] || config.content?.en || {};
  }, [config.content, language]);

  const seoData = useMemo(() => {
    return config.seo?.[language] || config.seo?.en || {};
  }, [config.seo, language]);

  // Tool category for ad exclusion
  const toolCategory = config.metadata?.category || null;

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
      webApplication: generateWebApplicationSchema(config, language),
      howTo: generateHowToSchema(config, language),
      faq: generateFAQSchema(config, language)
    };
  }, [config, language]);

  // Format keywords for SEO
  const formattedKeywords = useMemo(() => {
    if (!seoData.keywords) return '';
    if (typeof seoData.keywords === 'string') return seoData.keywords;
    return [
      ...(seoData.keywords.primary || []),
      ...(seoData.keywords.secondary || []),
      ...(seoData.keywords.longTail || [])
    ].join(', ');
  }, [seoData.keywords]);

  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={formattedKeywords}
        canonical={canonical}
        webApplicationData={structuredData.webApplication}
        howToData={structuredData.howTo}
        faqData={structuredData.faq}
      />

      {/* Tool Layout */}
      <ToolLayout
        toolId={toolId}
        
        // Hero Section - Passed from tool page
        showHero={!!heroComponent}
        heroComponent={heroComponent}

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
        {/* Main Tool Content - Hero + Controls from tool page */}
        {children}
      </ToolLayout>
    </>
  );
};

ToolLayoutV2.propTypes = {
  config: PropTypes.object.isRequired,
  toolId: PropTypes.string.isRequired,
  heroComponent: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default ToolLayoutV2;

