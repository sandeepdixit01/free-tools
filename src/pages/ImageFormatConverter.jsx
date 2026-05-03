/**
 * ImageFormatConverter Page
 * Image format conversion tool (JPG ↔ PNG ↔ WEBP)
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import ImageFormatConverterTool from '../tools/ImageFormatConverterTool';
import ImageFormatConverterControls from '../components/ImageFormatConverter/ImageFormatConverterControls';
import { imageFormatConverterConfig } from '../configs/tools/imageFormatConverter.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const ImageFormatConverter = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (imageFormatConverterConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(imageFormatConverterConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('ImageFormatConverter config validation failed:');
          console.error(getValidationReport(imageFormatConverterConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return imageFormatConverterConfig.uiText?.[language] || imageFormatConverterConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return imageFormatConverterConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new ImageFormatConverterTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={imageFormatConverterConfig}
      toolId="image-format-converter"
      heroComponent={
        <ToolHero
          title={imageFormatConverterConfig.content?.[language]?.hero?.title}
          subtitle={imageFormatConverterConfig.content?.[language]?.hero?.subtitle}
          benefits={imageFormatConverterConfig.content?.[language]?.hero?.benefits}
          ctaText={imageFormatConverterConfig.content?.[language]?.hero?.cta}
          privacyNotice={imageFormatConverterConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* Image Format Converter Controls */}
      <ImageFormatConverterControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default ImageFormatConverter;

