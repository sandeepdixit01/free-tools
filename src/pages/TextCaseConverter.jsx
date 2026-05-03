/**
 * TextCaseConverter Page
 * Text-based tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import TextCaseConverterTool from '../tools/TextCaseConverterTool';
import TextCaseConverterControls from '../components/TextCaseConverter/TextCaseConverterControls';
import textCaseConverterConfig from '../configs/tools/textCaseConverter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const TextCaseConverter = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (textCaseConverterConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(textCaseConverterConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('TextCaseConverter config validation failed:');
          console.error(getValidationReport(textCaseConverterConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return textCaseConverterConfig.content?.[language] || textCaseConverterConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return textCaseConverterConfig.uiText?.[language] || textCaseConverterConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new TextCaseConverterTool(), []);

  // Tool settings
  const settings = textCaseConverterConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('text-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={textCaseConverterConfig}
      toolId="text-case-converter"
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

        {/* Text Case Converter Controls (Text Input + Case Options + Result) */}
        <TextCaseConverterControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default TextCaseConverter;

