/**
 * ImageCompressor Page
 * Image compression tool with adjustable quality and format conversion
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import ImageCompressorTool from '../tools/ImageCompressorTool';
import ImageCompressorControls from '../components/ImageCompressor/ImageCompressorControls';
import { imageCompressorConfig } from '../configs/tools/imageCompressor.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const ImageCompressor = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (imageCompressorConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(imageCompressorConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('ImageCompressor config validation failed:');
          console.error(getValidationReport(imageCompressorConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return imageCompressorConfig.uiText?.[language] || imageCompressorConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return imageCompressorConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new ImageCompressorTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={imageCompressorConfig}
      toolId="image-compressor"
      heroComponent={
        <ToolHero
          title={imageCompressorConfig.content?.[language]?.hero?.title}
          subtitle={imageCompressorConfig.content?.[language]?.hero?.subtitle}
          benefits={imageCompressorConfig.content?.[language]?.hero?.benefits}
          ctaText={imageCompressorConfig.content?.[language]?.hero?.cta}
          privacyNotice={imageCompressorConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* Image Compressor Controls */}
      <ImageCompressorControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default ImageCompressor;
