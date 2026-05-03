/**
 * URLEncoder Page
 * Developer tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import URLEncoderTool from '../tools/URLEncoderTool';
import URLEncoderControls from '../components/URLEncoder/URLEncoderControls';
import urlEncoderConfig from '../configs/tools/urlEncoder.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const URLEncoder = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (urlEncoderConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(urlEncoderConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('URLEncoder config validation failed:');
          console.error(getValidationReport(urlEncoderConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return urlEncoderConfig.content?.[language] || urlEncoderConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return urlEncoderConfig.uiText?.[language] || urlEncoderConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new URLEncoderTool(), []);

  // Tool settings
  const settings = urlEncoderConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('url-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={urlEncoderConfig}
      toolId="url-encoder"
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

        {/* URL Encoder Controls (Text Input + Actions + Result) */}
        <URLEncoderControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default URLEncoder;

