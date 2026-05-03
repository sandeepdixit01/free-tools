/**
 * ImageResizerNew Page
 * New implementation using the generic ToolPage system
 *
 * Demonstrates TRUE reusability:
 * - Uses BaseTool interface (process() method)
 * - No hardcoded content types
 * - All text from config
 * - Works for ANY tool type
 * - Includes validation guardrails
 *
 * This is how ANY tool should be created:
 * 1. A config file (imageResizer.config.js)
 * 2. A tool logic class (ImageResizerTool.js)
 * 3. Optional custom controls (ImageResizerControls.jsx)
 *
 * NO UI code needed - everything is reusable!
 */

import React, { useEffect } from 'react';
import ToolPage from './ToolPage';
import ImageResizerTool from '../tools/ImageResizerTool';
import ImageResizerControls from '../components/ImageResizer/ImageResizerControls';
import imageResizerConfig from '../configs/tools/imageResizer.config';
import { validateConfig, getValidationReport } from '../utils/configValidator';


const ImageResizerNew = () => {
  // Validate configuration in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Only validate if using new schema (has metadata.schemaVersion)
      if (imageResizerConfig.metadata?.schemaVersion === '2.0.0') {
        const result = validateConfig(imageResizerConfig, { throwOnError: false });
        if (!result.isValid) {
          console.error('ImageResizer config validation failed:');
          console.error(getValidationReport(imageResizerConfig));
        } else {
        }
      } else {
      }
    }
  }, []);

  return (
    <ToolPage
      config={imageResizerConfig}
      ToolClass={ImageResizerTool}
      customControls={ImageResizerControls}
    />
  );
};

export default ImageResizerNew;

