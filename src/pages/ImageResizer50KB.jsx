/**
 * Image Resizer 50KB Page
 * Dedicated page for resizing images to exactly 50KB
 * Reuses ImageResizerTool with 50KB-specific content
 */

import React from 'react';
import { Link } from 'react-router-dom';
import ToolPage from './ToolPage';
import ImageResizerTool from '../tools/ImageResizerTool';
import ImageResizerControls from '../components/ImageResizer/ImageResizerControls';
import imageResizer50kbConfig from '../configs/tools/imageResizer50kb.config';
import './ImageResizer50KB.css';

const ImageResizer50KB = () => {
  return (
    <>
      <ToolPage
        config={imageResizer50kbConfig}
        ToolClass={ImageResizerTool}
        customControls={ImageResizerControls}
      />
      
      {/* Internal Links Section */}
      <section className="internal-links-section">
        <div className="container">
          <h2>Try Other Free Tools</h2>
          <div className="internal-links-grid">
            <Link to="/tools/resize-image" className="internal-link-card">
              <span className="link-icon">🖼️</span>
              <span className="link-title">Image Resizer</span>
              <span className="link-desc">Resize to any size or dimension</span>
            </Link>
            
            <Link to="/tools/word-counter" className="internal-link-card">
              <span className="link-icon">📝</span>
              <span className="link-title">Word Counter</span>
              <span className="link-desc">Count words and characters</span>
            </Link>
            
            <Link to="/tools/json-formatter" className="internal-link-card">
              <span className="link-icon">{ }</span>
              <span className="link-title">JSON Formatter</span>
              <span className="link-desc">Format and validate JSON</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageResizer50KB;

// Made with Bob
