/**
 * WordSorter Page
 * Text-based tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import WordSorterTool from '../tools/WordSorterTool';
import WordSorterControls from '../components/WordSorter/WordSorterControls';
import { wordSorterConfig } from '../configs/tools/wordSorter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const WordSorter = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (wordSorterConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(wordSorterConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('WordSorter config validation failed:');
          console.error(getValidationReport(wordSorterConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return wordSorterConfig.content?.[language] || wordSorterConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return wordSorterConfig.uiText?.[language] || wordSorterConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new WordSorterTool(), []);

  // Tool settings
  const settings = wordSorterConfig.settings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('text-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={wordSorterConfig}
      toolId="word-sorter"
      heroComponent={
        <ToolHero
          title={content.hero?.title}
          subtitle={content.hero?.subtitle}
          benefits={content.hero?.benefits}
          ctaText={content.hero?.cta?.primary || content.hero?.cta}
          privacyNotice={content.hero?.privacyNotice}
          onCtaClick={handleCtaClick}
        />
      }
    >
      {/* Main Tool Content */}
      <div className="tool-content">
        {/* Privacy Notice */}
        {content.hero?.privacyNotice && (
          <div className="privacy-notice" style={{
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
            <span>{content.hero.privacyNotice}</span>
          </div>
        )}

        {/* Word Sorter Controls */}
        <WordSorterControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default WordSorter;

