/**
 * All Tools Page
 *
 * Displays all available tools grouped by category
 * Fully dynamic - pulls from central tools data
 * Only shows ACTIVE tools
 */

import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCanonicalUrl } from '../hooks/useCanonicalUrl';
import SEOHead from '../components/SEO/SEOHead';
import ToolCard from '../components/ToolCard';
import FAQ from '../components/shared/Content/FAQ';
import FeatureList from '../components/shared/Content/FeatureList';
import UseCaseList from '../components/shared/Content/UseCaseList';
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';
import { getToolsByCategory, getAllCategories } from '../data/tools';
import { allToolsConfig } from '../configs/pages/allTools.config';
import './AllToolsPage.css';

const AllToolsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const canonical = useCanonicalUrl();

  // Get language-specific content
  const content = useMemo(() => {
    return allToolsConfig.content?.[language] || allToolsConfig.content?.en || {};
  }, [language]);

  const seoData = useMemo(() => {
    return allToolsConfig.seo?.[language] || allToolsConfig.seo?.en || {};
  }, [language]);

  // Group tools by category - only active tools
  const toolsByCategory = useMemo(() => {
    const categories = getAllCategories();
    return categories.map(categoryId => ({
      id: categoryId,
      title: content.categories?.[categoryId]?.title || categoryId,
      description: content.categories?.[categoryId]?.description || '',
      tools: getToolsByCategory(categoryId, true) // activeOnly = true
    })).filter(category => category.tools.length > 0); // Only show categories with active tools
  }, [content]);

  // Handle tool card click
  const handleToolClick = (route) => {
    navigate(route);
  };

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
      />

      <div className="all-tools-page">
        {/* Hero Section */}
        <section className="all-tools-hero">
          <div className="container">
            <h1 className="hero-title">{content.hero?.title}</h1>
            <p className="hero-subtitle">{content.hero?.subtitle}</p>
          </div>
        </section>

        {/* Top Ad - After Hero */}
        <div className="page-ad-top">
          <AdSlot position={AD_POSITIONS.TOP_BANNER} />
        </div>

        {/* Intro Section */}
        {content.intro && (
          <section className="all-tools-intro">
            <div className="container">
              <h2>{content.intro.title}</h2>
              {content.intro.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Tools by Category */}
        <section className="all-tools-categories">
          <div className="container">
            {toolsByCategory.map((category) => (
              <div key={category.id} className="category-section">
                <div className="category-header">
                  <h2 className="category-title">{category.title}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
                
                <div className="tools-grid">
                  {category.tools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      icon={tool.icon}
                      name={tool.name[language] || tool.name.en || 'Untitled Tool'}
                      description={tool.description[language] || tool.description.en || ''}
                      onClick={() => handleToolClick(tool.route)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        {content.features && (
          <section className="all-tools-features">
            <div className="container">
              <FeatureList
                title={content.features.title}
                features={content.features.items}
              />
            </div>
          </section>
        )}

        {/* Mid Content Ad */}
        <AdSlot position={AD_POSITIONS.MID_CONTENT} />

        {/* Use Cases Section */}
        {content.useCases && content.useCases.items && (
          <section className="all-tools-use-cases">
            <div className="container">
              <UseCaseList
                title={content.useCases.title}
                useCases={content.useCases.items}
              />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {content.faq && (
          <section className="all-tools-faq">
            <div className="container">
              <FAQ
                title={content.faq.title}
                items={content.faq.items}
              />
            </div>
          </section>
        )}

        {/* Bottom Ad */}
        <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} />
      </div>
    </>
  );
};

export default AllToolsPage;

