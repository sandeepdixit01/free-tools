/**
 * DeletePdfPages Page
 * PDF page deletion implementation
 * Migrated to ToolLayoutV2 for consistency
 */

import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import DeletePdfPagesTool from '../tools/DeletePdfPagesTool';
import DeletePdfPagesControls from '../components/DeletePdfPages/DeletePdfPagesControls';
import { deletePdfPagesConfig } from '../configs/tools/deletePdfPages.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';

const DeletePdfPages = () => {
  const { language } = useLanguage();

  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (deletePdfPagesConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(deletePdfPagesConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('DeletePdfPages config validation failed:');
          console.error(getValidationReport(deletePdfPagesConfig));
        } else {
        }
      }
    }
  }, []);

  // Get language-specific content
  const uiText = useMemo(() => {
    return deletePdfPagesConfig.uiText?.[language] || deletePdfPagesConfig.uiText?.en || {};
  }, [language]);

  const validation = useMemo(() => {
    return deletePdfPagesConfig.validation || {};
  }, []);

  // Initialize tool instance
  const toolInstance = useMemo(() => new DeletePdfPagesTool(), []);

  // Handler for CTA click
  const handleCtaClick = () => {
    document.querySelector('.upload-area')?.click();
  };

  return (
    <ToolLayoutV2
      config={deletePdfPagesConfig}
      toolId="delete-pdf-pages"
      heroComponent={
        <ToolHero
          title={deletePdfPagesConfig.content?.[language]?.hero?.title}
          subtitle={deletePdfPagesConfig.content?.[language]?.hero?.subtitle}
          benefits={deletePdfPagesConfig.content?.[language]?.hero?.benefits}
          ctaText={deletePdfPagesConfig.content?.[language]?.hero?.cta}
          privacyNotice={deletePdfPagesConfig.content?.[language]?.hero?.privacyNotice}
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

      {/* Delete PDF Pages Controls */}
      <DeletePdfPagesControls
        toolInstance={toolInstance}
        uiText={uiText}
        validation={validation}
      />
    </ToolLayoutV2>
  );
};

export default DeletePdfPages;

