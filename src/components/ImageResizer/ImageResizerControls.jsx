/**
 * ImageResizerControls Component
 * Custom control panel for Image Resizer tool
 * Receives all content via props - NO hardcoded text
 */

import React from 'react';
import PropTypes from 'prop-types';
import './ImageResizerControls.css';

const ImageResizerControls = ({ settings, onSettingsChange, content }) => {
  const { mode = 'dimensions' } = settings;

  /**
   * Handle mode change
   */
  const handleModeChange = (newMode) => {
    onSettingsChange({ mode: newMode });
  };

  /**
   * Handle preset selection
   */
  const handlePresetClick = (preset) => {
    onSettingsChange({
      width: preset.width,
      height: preset.height,
      targetSize: preset.size || preset.targetSize, // Support both property names
      preset: preset.name
    });
  };

  /**
   * Handle auto optimize
   */
  const handleAutoOptimize = () => {
    onSettingsChange({
      quality: 85,
      maintainAspectRatio: true
    });
  };

  return (
    <div className="image-resizer-controls">
      {/* Mode Selector */}
      <div className="mode-selector">
        <button
          className={`mode-button ${mode === 'dimensions' ? 'active' : ''}`}
          onClick={() => handleModeChange('dimensions')}
        >
          {content.modes.dimensions}
        </button>
        <button
          className={`mode-button ${mode === 'filesize' ? 'active' : ''}`}
          onClick={() => handleModeChange('filesize')}
        >
          {content.modes.filesize}
        </button>
        <button
          className={`mode-button ${mode === 'preset' ? 'active' : ''}`}
          onClick={() => handleModeChange('preset')}
        >
          {content.modes.preset}
        </button>
      </div>

      {/* Dimensions Mode */}
      {mode === 'dimensions' && (
        <div className="control-panel">
          <div className="input-group">
            <label>
              {content.dimensions.width}
              <input
                type="number"
                value={settings.width || 800}
                onChange={(e) => onSettingsChange({ width: parseInt(e.target.value) || 0 })}
                min="1"
                max="10000"
              />
            </label>
            <label>
              {content.dimensions.height}
              <input
                type="number"
                value={settings.height || 600}
                onChange={(e) => onSettingsChange({ height: parseInt(e.target.value) || 0 })}
                min="1"
                max="10000"
              />
            </label>
          </div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.maintainAspectRatio !== false}
              onChange={(e) => onSettingsChange({ maintainAspectRatio: e.target.checked })}
            />
            {content.dimensions.maintainAspectRatio}
          </label>
        </div>
      )}

      {/* File Size Mode */}
      {mode === 'filesize' && (
        <div className="control-panel">
          <label className="input-label">
            {content.filesize.targetSize}
            <input
              type="number"
              value={settings.targetSize || 100}
              onChange={(e) => onSettingsChange({ targetSize: parseInt(e.target.value) || 0 })}
              min="1"
              max="5000"
            />
          </label>
          <div className="quick-sizes">
            <span className="quick-label">{content.filesize.quickSelect}:</span>
            {content.filesize.quickSizes.map(size => (
              <button
                key={size}
                className="quick-size-button"
                onClick={() => onSettingsChange({ targetSize: size })}
              >
                {size}KB
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Preset Mode */}
      {mode === 'preset' && (
        <div className="control-panel">
          <div className="presets-grid">
            {content.presets.items.map((preset, index) => (
              <button
                key={index}
                className={`preset-button ${settings.preset === preset.name ? 'active' : ''}`}
                onClick={() => handlePresetClick(preset)}
              >
                <div className="preset-name">{preset.name}</div>
                <div className="preset-details">
                  {preset.width}×{preset.height} • ~{preset.size}KB
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quality Slider */}
      <div className="quality-section">
        <label className="quality-label">
          {content.quality.label}: {settings.quality || 85}%
          <input
            type="range"
            min="1"
            max="100"
            value={settings.quality || 85}
            onChange={(e) => onSettingsChange({ quality: parseInt(e.target.value) })}
            className="quality-slider"
          />
        </label>
        <button className="auto-optimize-button" onClick={handleAutoOptimize}>
          ⚡ {content.quality.autoOptimize}
        </button>
      </div>
    </div>
  );
};

ImageResizerControls.propTypes = {
  settings: PropTypes.shape({
    mode: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    maintainAspectRatio: PropTypes.bool,
    targetSize: PropTypes.number,
    quality: PropTypes.number,
    preset: PropTypes.string
  }).isRequired,
  onSettingsChange: PropTypes.func.isRequired,
  content: PropTypes.shape({
    modes: PropTypes.object.isRequired,
    dimensions: PropTypes.object,
    filesize: PropTypes.object,
    presets: PropTypes.object,
    quality: PropTypes.object.isRequired
  }).isRequired
};

export default ImageResizerControls;

