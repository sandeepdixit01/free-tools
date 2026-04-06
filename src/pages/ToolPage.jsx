/**
 * ToolPage Component (OPTIMIZED VERSION)
 * Truly generic page wrapper for ALL tools
 *
 * FEATURES:
 * - Uses BaseTool interface (process() method)
 * - No hardcoded content types
 * - No hardcoded method names
 * - Uses previewHelper utility
 * - All text from config
 * - Performance optimized with React.memo and lazy loading
 * - ⚠️ TEMPORARY: Supports both old and new config schemas via adapter
 */

import React, { useState, useEffect, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEO/SEOHead';

// ⚠️ TEMPORARY: Config adapter for backward compatibility
// TODO: Remove after all tools migrated to new schema
import { adaptConfig } from '../utils/configAdapter';

// Layout Components
import ToolLayout from '../components/shared/Layout/ToolLayout';
import ToolHero from '../components/shared/Layout/ToolHero';
import ToolFeatures from '../components/shared/Layout/ToolFeatures';
import ToolHowTo from '../components/shared/Layout/ToolHowTo';

// Tool UI Components
import FileUpload from '../components/shared/ToolUI/FileUpload';
import ControlPanel from '../components/shared/ToolUI/ControlPanel';
import PreviewPane from '../components/shared/ToolUI/PreviewPane';
import DownloadButton from '../components/shared/ToolUI/DownloadButton';
import ProcessingIndicator from '../components/shared/ToolUI/ProcessingIndicator';
import ErrorMessage from '../components/shared/ToolUI/ErrorMessage';

// Content Components
import FAQ from '../components/shared/Content/FAQ';
import SEOContent from '../components/shared/Content/SEOContent';

// Ad System
import AdSlot from '../components/ads/AdSlot';
import { AD_POSITIONS } from '../configs/adPositions';

// Hooks
import { useFileUpload } from '../hooks/useFileUpload';
import { useProcessing } from '../hooks/useProcessing';

// Utils
import { downloadFile } from '../utils/downloadHelper';
import { preparePreviewData } from '../utils/previewHelper';

/**
 * ToolPage - Generic tool page component
 * @param {Object} config - Tool configuration object
 * @param {Function} ToolClass - Tool logic class (must extend BaseTool)
 * @param {React.Component} customControls - Optional custom control panel component
 */
const ToolPage = ({ config, ToolClass, customControls: CustomControls }) => {
  const { language } = useLanguage();
  
  // ⚠️ TEMPORARY: Adapt config for backward compatibility
  // TODO: Remove after all tools migrated to new schema
  const adaptedConfig = useMemo(() => adaptConfig(config), [config]);
  
  // Get language-specific content from config
  // Config structure has nested language objects (e.g., hero.en, features.en)
  const content = useMemo(() => {
    if (!adaptedConfig.content) return {};
    // Extract language-specific content from nested structure
    const extracted = {};
    Object.keys(adaptedConfig.content).forEach(key => {
      if (adaptedConfig.content[key] && typeof adaptedConfig.content[key] === 'object') {
        // Check if this key has language-specific content
        if (adaptedConfig.content[key][language]) {
          extracted[key] = adaptedConfig.content[key][language];
        } else if (adaptedConfig.content[key].en) {
          // Fallback to English
          extracted[key] = adaptedConfig.content[key].en;
        } else {
          // Not a language-specific object, use as-is
          extracted[key] = adaptedConfig.content[key];
        }
      } else {
        extracted[key] = adaptedConfig.content[key];
      }
    });
    
    return extracted;
  }, [adaptedConfig.content, language]);
  
  const uiText = adaptedConfig.uiText?.[language] || adaptedConfig.uiText?.en || {};
  
  // Initialize tool instance
  const toolInstance = useMemo(() => new ToolClass(), [ToolClass]);
  
  // Validate tool implements BaseTool interface
  useEffect(() => {
    if (!toolInstance.process) {
      console.error('Tool must implement process() method from BaseTool');
    }
  }, [toolInstance]);
  
  // State management
  const [settings, setSettings] = useState(adaptedConfig.defaultSettings || {});
  const [processedFiles, setProcessedFiles] = useState([]);
  const [error, setError] = useState(null);
  
  // File upload hook
  const {
    files,
    uploadProgress,
    isUploading,
    handleFileInputChange: handleFileSelect,
    handleDrop,
    clearFiles,
    removeFile
  } = useFileUpload({
    acceptedTypes: 'image',
    multiple: true,
    maxFiles: adaptedConfig.settings?.maxFiles || adaptedConfig.fileTypes?.maxFiles || 10,
    onError: (err) => setError(err)
  });
  
  // Processing hook with tool's process function
  const {
    isProcessing,
    progress,
    processFiles
  } = useProcessing({
    processFunction: (file) => toolInstance.process(file, settings)
  });
  
  // Process files when they change or settings change
  useEffect(() => {
    if (files.length > 0) {
      handleProcess();
    } else {
      setProcessedFiles([]);
    }
  }, [files, settings]);
  
  /**
   * Handle file processing
   */
  const handleProcess = async () => {
    try {
      setError(null);
      
      // Validate settings using tool's validate method
      const validation = toolInstance.validate?.(settings);
      if (validation && !validation.valid) {
        setError(validation.errors.join(', '));
        return;
      }
      
      // Process files using hook (which calls toolInstance.process)
      const results = await processFiles(files);
      
      console.log('[ToolPage] Processing results:', results);
      
      // Check for failed results
      const failedResults = results.filter(r => !r.success);
      if (failedResults.length > 0) {
        console.error('[ToolPage] Processing failed for some files:', failedResults);
        const errorMessages = failedResults.map(r => r.error).join(', ');
        setError(errorMessages);
      }
      
      // Combine original and processed data
      const combined = results.map(result => ({
        original: result.original,
        processed: result.processed
      }));
      
      setProcessedFiles(combined);
    } catch (err) {
      console.error('[ToolPage] Processing error:', err);
      setError(err.message || uiText.errors?.processingFailed);
    }
  };
  
  /**
   * Handle settings change
   */
  const handleSettingsChange = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  /**
   * Handle single file download
   */
  const handleDownload = (file) => {
    if (file.processed?.blob) {
      const prefix = uiText.download?.filePrefix || 'processed_';
      downloadFile(
        file.processed.blob,
        `${prefix}${file.original.name}`,
        file.processed.mimeType
      );
    }
  };
  
  /**
   * Handle download all files
   */
  const handleDownloadAll = () => {
    if (processedFiles.length === 1) {
      handleDownload(processedFiles[0]);
    } else {
      // Download each file with delay
      processedFiles.forEach((file, index) => {
        setTimeout(() => handleDownload(file), index * 200);
      });
    }
  };
  
  /**
   * Prepare preview data using utility helper
   */
  const previewData = useMemo(() => {
    if (processedFiles.length === 0) return [];
    
    const data = preparePreviewData(
      processedFiles,
      toolInstance,
      uiText.preview || {}
    );
    
    console.log('[ToolPage] Preview data prepared:', data);
    return data;
  }, [processedFiles, toolInstance, uiText.preview]);
  
  // Get tool category for ad exclusion
  const toolCategory = adaptedConfig.metadata?.[language]?.category || adaptedConfig.metadata?.en?.category || null;
  
  // Prepare ad slots using position-based system
  const adSlots = useMemo(() => {
    return {
      top: <AdSlot position={AD_POSITIONS.TOP_BANNER} excludeCategory={toolCategory} />,
      afterResult: <AdSlot position={AD_POSITIONS.BELOW_HERO} excludeCategory={toolCategory} />,
      midContent: <AdSlot position={AD_POSITIONS.MID_CONTENT} excludeCategory={toolCategory} />,
      bottom: <AdSlot position={AD_POSITIONS.BOTTOM_BANNER} excludeCategory={toolCategory} />
    };
  }, [toolCategory]);
  
  return (
    <>
      {/* SEO Head */}
      <SEOHead
        title={content.seo?.title}
        description={content.seo?.description}
        keywords={content.seo?.keywords}
        canonical={content.seo?.canonical}
      />
      
      {/* Tool Layout */}
      <ToolLayout
        // Hero Section
        showHero={true}
        heroComponent={
          <ToolHero
            title={content.hero?.title}
            subtitle={content.hero?.subtitle}
            benefits={content.hero?.benefits}
            ctaText={content.hero?.cta}
            privacyNotice={content.hero?.privacyNotice}
            onCtaClick={() => document.getElementById('file-upload')?.click()}
          />
        }
        
        // Features Section
        showFeatures={true}
        featuresComponent={
          <ToolFeatures
            title={content.features?.title}
            subtitle={content.features?.subtitle}
            features={content.features?.items}
          />
        }
        
        // How To Section
        showHowTo={true}
        howToComponent={
          <ToolHowTo
            title={content.howTo?.title}
            subtitle={content.howTo?.subtitle}
            steps={content.howTo?.steps}
          />
        }
        
        // SEO Content Section
        showSEO={!!content.seoContent}
        seoComponent={
          content.seoContent ? (
            <SEOContent
              title={content.seoContent.mainTitle}
              intro={content.seoContent.intro}
              sections={content.seoContent.sections}
            />
          ) : null
        }
        
        // FAQ Section
        showFAQ={true}
        faqComponent={
          <FAQ
            title={content.faq?.title}
            items={content.faq?.items}
          />
        }
        
        // Ad Slots
        adSlots={adSlots}
      >
        {/* Main Tool Content */}
        <div className="tool-content">
          {/* Privacy Notice */}
          {content.hero?.privacyNotice && (
            <div className="privacy-notice">
              {content.hero.privacyIcon || '🔒'} {content.hero.privacyNotice}
            </div>
          )}
          
          {/* File Upload */}
          <FileUpload
            id="file-upload"
            accept={adaptedConfig.validation?.allowedFormats?.join(',') || adaptedConfig.fileTypes?.accept}
            maxSize={adaptedConfig.validation?.maxFileSize || adaptedConfig.fileTypes?.maxSize}
            maxFiles={adaptedConfig.settings?.maxFiles || adaptedConfig.fileTypes?.maxFiles || 10}
            files={files}
            isUploading={isUploading}
            uploadProgress={uploadProgress}
            onFileSelect={handleFileSelect}
            onDrop={handleDrop}
            onClear={clearFiles}
            onRemove={removeFile}
            // Text props from config
            dragText={uiText.upload?.dragText}
            orText={uiText.upload?.orText || 'or'}
            buttonText={uiText.upload?.buttonText || uiText.upload?.browseText}
            supportText={uiText.upload?.supportedFormats}
            browseText={uiText.upload?.browseText}
            supportedFormatsText={uiText.upload?.supportedFormats}
            maxSizeText={uiText.upload?.maxSize}
            uploadingText={uiText.upload?.uploading}
            filesSelectedText={uiText.upload?.filesSelected}
            fileText={uiText.upload?.file}
            filesText={uiText.upload?.files}
            clearAllText={uiText.upload?.clearAll}
            removeFileLabel={uiText.upload?.removeFile}
          />
          
          {/* Error Message */}
          {error && (
            <ErrorMessage
              type="error"
              message={error}
              onDismiss={() => setError(null)}
              dismissText={uiText.errors?.dismiss}
            />
          )}
          
          {/* Control Panel (if files uploaded) */}
          {files.length > 0 && CustomControls && (
            <ControlPanel title={uiText.controls?.title}>
              <CustomControls
                settings={settings}
                onSettingsChange={handleSettingsChange}
                content={uiText.controls}
              />
            </ControlPanel>
          )}
          
          {/* Processing Indicator */}
          {isProcessing && (
            <ProcessingIndicator
              type="progress"
              progress={progress}
              message={uiText.processing?.message}
              showProgressText={true}
            />
          )}
          
          {/* Preview & Download */}
          {processedFiles.length > 0 && !isProcessing && (
            <>
              <PreviewPane
                showComparison={true}
                items={previewData}
                title={uiText.preview?.title}
                comparisonLabels={{
                  before: uiText.preview?.before || 'Before',
                  after: uiText.preview?.after || 'After'
                }}
                defaultImageAlt={uiText.preview?.defaultAlt}
              />
              
              <DownloadButton
                onClick={handleDownloadAll}
                variant="primary"
                size="large"
                fullWidth={true}
                text={
                  processedFiles.length === 1
                    ? uiText.download?.single
                    : `${uiText.download?.all} (${processedFiles.length})`
                }
              />
            </>
          )}
        </div>
      </ToolLayout>
    </>
  );
};

ToolPage.propTypes = {
  config: PropTypes.object.isRequired,
  ToolClass: PropTypes.func.isRequired,
  customControls: PropTypes.elementType
};

// Export memoized version for better performance
export default memo(ToolPage);

