/**
 * CharacterCounter Page
 * Text-based tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import CharacterCounterTool from '../tools/CharacterCounterTool';
import CharacterCounterControls from '../components/CharacterCounter/CharacterCounterControls';
import characterCounterConfig from '../configs/tools/characterCounter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const CharacterCounter = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (characterCounterConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(characterCounterConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('CharacterCounter config validation failed:');
          console.error(getValidationReport(characterCounterConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return characterCounterConfig.content?.[language] || characterCounterConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return characterCounterConfig.uiText?.[language] || characterCounterConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new CharacterCounterTool(), []);

  // Tool settings
  const settings = characterCounterConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('text-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={characterCounterConfig}
      toolId="character-counter"
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

        {/* Character Counter Controls (Text Input + Stats) */}
        <CharacterCounterControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default CharacterCounter;

