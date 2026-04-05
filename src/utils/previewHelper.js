/**
 * Preview Helper Utilities
 * Generic functions for preparing preview data for different content types
 */

/**
 * Prepare preview data for PreviewPane component
 * @param {Array} processedFiles - Array of {original, processed} file pairs
 * @param {Object} toolInstance - Tool instance for accessing metadata
 * @param {Object} labels - UI labels from config
 * @returns {Array} Preview data formatted for PreviewPane
 */
export const preparePreviewData = (processedFiles, toolInstance, labels) => {
  const contentType = toolInstance.getContentType();
  const accessors = toolInstance.getFileAccessors();

  return processedFiles
    .filter(file => file.processed !== null) // Filter out failed processing results
    .map(file => {
      const original = file.original;
      const processed = file.processed;

      // Get preview URLs using accessors
      // Try multiple property names for flexibility (preview, dataUrl, url, src)
      const originalPreview = accessors.preview
        ? (original[accessors.preview] || original.preview || original.dataUrl || original.url || original.src)
        : null;
      const processedPreview = accessors.preview
        ? (processed[accessors.preview] || processed.dataUrl || processed.preview || processed.url || processed.src)
        : null;

      // Get metadata using accessor function or direct properties
      const originalMetadata = accessors.metadata
        ? accessors.metadata(original)
        : { size: original.size };
      
      const processedMetadata = accessors.metadata
        ? accessors.metadata(processed)
        : { size: processed.size };

      return {
        before: {
          type: contentType,
          src: originalPreview,
          alt: original[accessors.name] || 'Original file',
          label: labels.before,
          metadata: originalMetadata
        },
        after: {
          type: contentType,
          src: processedPreview,
          alt: labels.processedAlt?.replace('{filename}', original[accessors.name]) || `Processed ${original[accessors.name]}`,
          label: labels.after,
          metadata: processedMetadata
        }
      };
    });
};

/**
 * Calculate file size reduction
 * @param {number} originalSize - Original file size in bytes
 * @param {number} processedSize - Processed file size in bytes
 * @returns {number} Reduction percentage
 */
export const calculateReduction = (originalSize, processedSize) => {
  if (!originalSize || originalSize === 0) return 0;
  return ((originalSize - processedSize) / originalSize) * 100;
};

/**
 * Calculate total savings across multiple files
 * @param {Array} processedFiles - Array of {original, processed} file pairs
 * @returns {Object} Statistics { totalOriginal, totalProcessed, totalSaved, averageReduction }
 */
export const calculateTotalSavings = (processedFiles) => {
  const totalOriginal = processedFiles.reduce((sum, f) => sum + (f.original.size || 0), 0);
  const totalProcessed = processedFiles.reduce((sum, f) => sum + (f.processed.size || 0), 0);
  const totalSaved = totalOriginal - totalProcessed;
  const averageReduction = calculateReduction(totalOriginal, totalProcessed);

  return {
    totalOriginal,
    totalProcessed,
    totalSaved,
    averageReduction
  };
};

