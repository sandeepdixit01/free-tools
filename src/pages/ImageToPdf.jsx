/**
 * ImageToPdf Page
 * Image to PDF converter implementation
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import ImageToPdfTool from '../tools/ImageToPdfTool';
import ImageToPdfControls from '../components/ImageToPdf/ImageToPdfControls';
import { imageToPdfConfig } from '../configs/tools/imageToPdf.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const ImageToPdf = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (imageToPdfConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(imageToPdfConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('ImageToPdf config validation failed:');
          console.error(getValidationReport(imageToPdfConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return imageToPdfConfig.uiText?.[language] || imageToPdfConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return imageToPdfConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new ImageToPdfTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={imageToPdfConfig}
      toolId="image-to-pdf"
      heroComponent={
        <ToolHero
          title={imageToPdfConfig.content?.[language]?.hero?.title}
          subtitle={imageToPdfConfig.content?.[language]?.hero?.subtitle}
          benefits={imageToPdfConfig.content?.[language]?.hero?.benefits}
          ctaText={imageToPdfConfig.content?.[language]?.hero?.cta}
          privacyNotice={imageToPdfConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* Image to PDF Controls */}
      <ImageToPdfControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default ImageToPdf;

