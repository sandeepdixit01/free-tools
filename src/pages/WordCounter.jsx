/**
 * WordCounter Page
 * Text-based tool using ToolLayoutV2 for layout
 * Hero section handled at page level (not in layout)
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import WordCounterTool from '../tools/WordCounterTool';
import WordCounterControls from '../components/WordCounter/WordCounterControls';
import wordCounterConfig from '../configs/tools/wordCounter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

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
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return wordCounterConfig.content?.[language] || wordCounterConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return wordCounterConfig.uiText?.[language] || wordCounterConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new WordCounterTool(), []);

  // Tool settings
  const settings = wordCounterConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('text-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={wordCounterConfig}
      toolId="word-counter"
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
    </ToolLayoutV2>
  );
};

export default WordCounter;

