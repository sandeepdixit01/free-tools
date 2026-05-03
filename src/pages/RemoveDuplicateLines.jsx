/**
 * RemoveDuplicateLines Page
 * Text-based tool using ToolLayoutV2 for layout
 */

import React, { useEffect, useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import RemoveDuplicateLinesTool from '../tools/RemoveDuplicateLinesTool';
import RemoveDuplicateLinesControls from '../components/RemoveDuplicateLines/RemoveDuplicateLinesControls';
import { removeDuplicateLinesConfig } from '../configs/tools/removeDuplicateLines.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';
import { useLanguage } from '../contexts/LanguageContext';

const RemoveDuplicateLines = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (removeDuplicateLinesConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(removeDuplicateLinesConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('RemoveDuplicateLines config validation failed:');
          console.error(getValidationReport(removeDuplicateLinesConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const content = useMemo(() => {
    return removeDuplicateLinesConfig.content?.[language] || removeDuplicateLinesConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return removeDuplicateLinesConfig.uiText?.[language] || removeDuplicateLinesConfig.uiText?.en || {};
  }, [language]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new RemoveDuplicateLinesTool(), []);

  // Tool settings
  const settings = removeDuplicateLinesConfig.settings || {};

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('text-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={removeDuplicateLinesConfig}
      toolId="remove-duplicate-lines"
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

        {/* Remove Duplicate Lines Controls */}
        <RemoveDuplicateLinesControls
          toolInstance={toolInstance}
          uiText={uiText}
          settings={settings}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default RemoveDuplicateLines;

