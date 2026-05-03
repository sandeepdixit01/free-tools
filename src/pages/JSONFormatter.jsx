/**
 * JSONFormatter Page
 * Developer tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import JSONFormatterTool from '../tools/JSONFormatterTool';
import JSONFormatterControls from '../components/JSONFormatter/JSONFormatterControls';
import jsonFormatterConfig from '../configs/tools/jsonFormatter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const JSONFormatter = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (jsonFormatterConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(jsonFormatterConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('JSONFormatter config validation failed:');
          console.error(getValidationReport(jsonFormatterConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return jsonFormatterConfig.content?.[language] || jsonFormatterConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return jsonFormatterConfig.uiText?.[language] || jsonFormatterConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new JSONFormatterTool(), []);

  // Tool settings
  const settings = jsonFormatterConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('json-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={jsonFormatterConfig}
      toolId="json-formatter"
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

        {/* JSON Formatter Controls (Text Input + Actions + Result) */}
        <JSONFormatterControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default JSONFormatter;

