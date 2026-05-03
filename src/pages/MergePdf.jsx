/**
 * MergePdf Page
 * File-based tool implementation for PDF merging
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import MergePdfTool from '../tools/MergePdfTool';
import MergePdfControls from '../components/MergePdf/MergePdfControls';
import { mergePdfConfig } from '../configs/tools/mergePdf.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const MergePdf = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (mergePdfConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(mergePdfConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('MergePdf config validation failed:');
          console.error(getValidationReport(mergePdfConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return mergePdfConfig.uiText?.[language] || mergePdfConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return mergePdfConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new MergePdfTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={mergePdfConfig}
      toolId="merge-pdf"
      heroComponent={
        <ToolHero
          title={mergePdfConfig.content?.[language]?.hero?.title}
          subtitle={mergePdfConfig.content?.[language]?.hero?.subtitle}
          benefits={mergePdfConfig.content?.[language]?.hero?.benefits}
          ctaText={mergePdfConfig.content?.[language]?.hero?.cta}
          privacyNotice={mergePdfConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* Merge PDF Controls */}
      <MergePdfControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default MergePdf;

