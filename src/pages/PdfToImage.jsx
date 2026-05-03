/**
 * PdfToImage Page
 * PDF to Image converter implementation
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import PdfToImageTool from '../tools/PdfToImageTool';
import PdfToImageControls from '../components/PdfToImage/PdfToImageControls';
import { pdfToImageConfig } from '../configs/tools/pdfToImage.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const PdfToImage = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (pdfToImageConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(pdfToImageConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('PdfToImage config validation failed:');
          console.error(getValidationReport(pdfToImageConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return pdfToImageConfig.uiText?.[language] || pdfToImageConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return pdfToImageConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new PdfToImageTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={pdfToImageConfig}
      toolId="pdf-to-image"
      heroComponent={
        <ToolHero
          title={pdfToImageConfig.content?.[language]?.hero?.title}
          subtitle={pdfToImageConfig.content?.[language]?.hero?.subtitle}
          benefits={pdfToImageConfig.content?.[language]?.hero?.benefits}
          ctaText={pdfToImageConfig.content?.[language]?.hero?.cta}
          privacyNotice={pdfToImageConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* PDF to Image Controls */}
      <PdfToImageControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default PdfToImage;

