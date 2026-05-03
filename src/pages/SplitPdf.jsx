/**
 * SplitPdf Page
 * PDF splitter implementation
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import SplitPdfTool from '../tools/SplitPdfTool';
import SplitPdfControls from '../components/SplitPdf/SplitPdfControls';
import { splitPdfConfig } from '../configs/tools/splitPdf.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const SplitPdf = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (splitPdfConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(splitPdfConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('SplitPdf config validation failed:');
          console.error(getValidationReport(splitPdfConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return splitPdfConfig.uiText?.[language] || splitPdfConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return splitPdfConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new SplitPdfTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={splitPdfConfig}
      toolId="split-pdf"
      heroComponent={
        <ToolHero
          title={splitPdfConfig.content?.[language]?.hero?.title}
          subtitle={splitPdfConfig.content?.[language]?.hero?.subtitle}
          benefits={splitPdfConfig.content?.[language]?.hero?.benefits}
          ctaText={splitPdfConfig.content?.[language]?.hero?.cta}
          privacyNotice={splitPdfConfig.content?.[language]?.hero?.privacyNotice}
          onCtaClick={handleCtaClick}
        />
      }
    >
      {/* Security Notice */}
      {uiText.securityNote && (
        <div className="security-notice" style={{
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
          <span>{uiText.securityNote}</span>
        </div>
      )}

      {/* Split PDF Controls */}
      <SplitPdfControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default SplitPdf;

