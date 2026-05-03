/**
 * Base64Encoder Page
 * Developer tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import Base64EncoderTool from '../tools/Base64EncoderTool';
import Base64EncoderControls from '../components/Base64Encoder/Base64EncoderControls';
import base64EncoderConfig from '../configs/tools/base64Encoder.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const Base64Encoder = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (base64EncoderConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(base64EncoderConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('Base64Encoder config validation failed:');
          console.error(getValidationReport(base64EncoderConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return base64EncoderConfig.content?.[language] || base64EncoderConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return base64EncoderConfig.uiText?.[language] || base64EncoderConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new Base64EncoderTool(), []);

  // Tool settings
  const settings = base64EncoderConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('base64-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={base64EncoderConfig}
      toolId="base64-encoder"
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

        {/* Base64 Encoder Controls (Text Input + Actions + Result) */}
        <Base64EncoderControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default Base64Encoder;

