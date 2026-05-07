/**
 * RotatePdf Page
 * PDF rotation implementation
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import RotatePdfTool from '../tools/RotatePdfTool';
import RotatePdfControls from '../components/RotatePdf/RotatePdfControls';
import { rotatePdfConfig } from '../configs/tools/rotatePdf.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const RotatePdf = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (rotatePdfConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(rotatePdfConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('RotatePdf config validation failed:');
          console.error(getValidationReport(rotatePdfConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return rotatePdfConfig.uiText?.[language] || rotatePdfConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return rotatePdfConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new RotatePdfTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={rotatePdfConfig}
      toolId="rotate-pdf"
      heroComponent={
        <ToolHero
          title={rotatePdfConfig.content?.[language]?.hero?.title}
          subtitle={rotatePdfConfig.content?.[language]?.hero?.subtitle}
          benefits={rotatePdfConfig.content?.[language]?.hero?.benefits}
          ctaText={rotatePdfConfig.content?.[language]?.hero?.cta}          onCtaClick={handleCtaClick}
        />
      }
    >
      {/* Privacy Notice */}
      {rotatePdfConfig.content?.[language]?.hero?.privacyNotice && (
        <div className="privacy-notice">
          🔒 {rotatePdfConfig.content[language].hero.privacyNotice}
        </div>
      )}

      {/* Rotate PDF Controls */}
      <RotatePdfControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default RotatePdf;

