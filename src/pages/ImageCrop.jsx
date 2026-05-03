/**
 * ImageCrop Page
 * Image cropping tool with aspect ratio presets
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import ImageCropTool from '../tools/ImageCropTool';
import ImageCropControls from '../components/ImageCrop/ImageCropControls';
import { imageCropConfig } from '../configs/tools/imageCrop.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const ImageCrop = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (imageCropConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(imageCropConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('ImageCrop config validation failed:');
          console.error(getValidationReport(imageCropConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return imageCropConfig.uiText?.[language] || imageCropConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return imageCropConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new ImageCropTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={imageCropConfig}
      toolId="image-crop"
      heroComponent={
        <ToolHero
          title={imageCropConfig.content?.[language]?.hero?.title}
          subtitle={imageCropConfig.content?.[language]?.hero?.subtitle}
          benefits={imageCropConfig.content?.[language]?.hero?.benefits}
          ctaText={imageCropConfig.content?.[language]?.hero?.cta}
          privacyNotice={imageCropConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* Image Crop Controls */}
      <ImageCropControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default ImageCrop;

