/**
 * RemoveExtraSpaces Page
 * Text-based tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import RemoveExtraSpacesTool from '../tools/RemoveExtraSpacesTool';
import RemoveExtraSpacesControls from '../components/RemoveExtraSpaces/RemoveExtraSpacesControls';
import removeExtraSpacesConfig from '../configs/tools/removeExtraSpaces.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const RemoveExtraSpaces = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (removeExtraSpacesConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(removeExtraSpacesConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('RemoveExtraSpaces config validation failed:');
          console.error(getValidationReport(removeExtraSpacesConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return removeExtraSpacesConfig.content?.[language] || removeExtraSpacesConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return removeExtraSpacesConfig.uiText?.[language] || removeExtraSpacesConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new RemoveExtraSpacesTool(), []);

  // Tool settings
  const settings = removeExtraSpacesConfig.defaultSettings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('text-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={removeExtraSpacesConfig}
      toolId="remove-extra-spaces"
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

        {/* Remove Extra Spaces Controls (Text Input + Clean Button + Result) */}
        <RemoveExtraSpacesControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default RemoveExtraSpaces;

