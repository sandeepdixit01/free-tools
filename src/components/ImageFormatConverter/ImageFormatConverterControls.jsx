/**
 * ImageFormatConverterControls Component
 *
 * Handles image upload, format selection, and conversion
 * Reuses upload patterns from ImageCompressorControls
 */

import React, { useState, useRef } from 'react';
import './ImageFormatConverterControls.css';

const ImageFormatConverterControls = ({ toolInstance, uiText, validation }) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [convertedImages, setConvertedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [outputFormat, setOutputFormat] = useState('image/png');
  const fileInputRef = useRef(null);
  const resultsRef = useRef(null);

  /**
   * Handle file selection
   */
  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    addFiles(selectedFiles);
  };

  /**
   * Add files to the list
   */
  const addFiles = (newFiles) => {
    setError(null);
    setConvertedImages([]);

    // Validate file types
    const validFiles = newFiles.filter(file => {
      const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!supportedTypes.includes(file.type)) {
        setError(uiText.invalidFileType || 'Invalid file type. Please select only JPG, PNG, or WEBP images.');
        return false;
      }
      if (file.size > validation.maxFileSize) {
        setError(uiText.fileTooLarge || 'File is too large. Maximum size is 10MB per image.');
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles(prevFiles => [...prevFiles, ...validFiles]);
    }
  };

  /**
   * Handle drag and drop
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  /**
   * Remove a file from the list
   */
  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setError(null);
    setConvertedImages([]);
  };

  /**
   * Clear all files
   */
  const clearAll = () => {
    setFiles([]);
    setError(null);
    setConvertedImages([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Reset everything
   */
  const handleReset = () => {
    clearAll();
    setOutputFormat('image/png');
  };

  /**
   * Convert images
   */
  const handleConvert = async () => {
    if (files.length === 0) {
      setError(uiText.selectFiles || 'Please select at least 1 image to convert');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result = await toolInstance.process(files, {
        outputFormat
      });

      if (result.success) {
        setConvertedImages(result.result);

        // Scroll to results after a short delay
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        setError(result.errorMessage || uiText.convertError);
      }
    } catch (err) {
      console.error('Conversion error:', err);
      setError(uiText.convertFailure || 'Failed to convert images');
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * Download a single converted image
   */
  const handleDownloadSingle = (image) => {
    const url = URL.createObjectURL(image.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = image.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  /**
   * Download all converted images
   */
  const handleDownloadAll = async () => {
    if (convertedImages.length === 1) {
      handleDownloadSingle(convertedImages[0]);
      return;
    }

    // For multiple images, download each one
    convertedImages.forEach((image, index) => {
      setTimeout(() => {
        handleDownloadSingle(image);
      }, index * 100); // Stagger downloads slightly
    });
  };

  /**
   * Format file size
   */
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="image-format-converter-controls">
      {/* Upload Area */}
      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="upload-icon">🖼️</div>
        <p className="upload-text">
          {isDragging
            ? uiText.dropZoneActive || 'Drop images here'
            : uiText.dropZoneInactive || 'Drag and drop images here, or click to select'}
        </p>
        <p className="upload-hint">{uiText.uploadHint || 'Supports JPG, PNG, WEBP (Max 10MB per image)'}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>

      {/* Format Selector */}
      {files.length > 0 && !convertedImages.length && (
        <div className="format-settings">
          <h3>{uiText.settingsTitle || 'Conversion Settings'}</h3>

          <div className="setting-group">
            <label htmlFor="format-selector">
              {uiText.formatLabel || 'Output Format'}
            </label>
            <select
              id="format-selector"
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              className="format-selector"
            >
              <option value="image/jpeg">JPG</option>
              <option value="image/png">PNG</option>
              <option value="image/webp">WEBP</option>
            </select>
          </div>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="file-list">
          <div className="file-list-header">
            <h3>{files.length} {uiText.filesSelected || 'images selected'}</h3>
            <button onClick={clearAll} className="clear-all-btn">
              {uiText.clearAll || 'Clear All'}
            </button>
          </div>
          <div className="files">
            {files.map((file, index) => (
              <div key={index} className="file-item">
                <div className="file-info">
                  <span className="file-icon">🖼️</span>
                  <div className="file-details">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{formatFileSize(file.size)}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="remove-btn"
                  aria-label={uiText.removeFile || 'Remove'}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Convert Button */}
      {files.length > 0 && !convertedImages.length && (
        <button
          onClick={handleConvert}
          disabled={isProcessing}
          className="convert-btn"
        >
          {isProcessing
            ? uiText.converting || 'Converting...'
            : uiText.convertButton || 'Convert Images'}
        </button>
      )}

      {/* Success & Download */}
      {convertedImages.length > 0 && (
        <div className="success-section" ref={resultsRef}>
          <div className="success-message">
            <span className="success-icon">✅</span>
            <span>{uiText.convertSuccess || 'Images converted successfully!'}</span>
          </div>

          {/* Converted Images List */}
          <div className="converted-images">
            <h3>{uiText.convertedImagesTitle || 'Converted Images'}</h3>
            {convertedImages.map((image, index) => (
              <div key={index} className="converted-image-item">
                <div className="image-info">
                  <span className="image-icon">🖼️</span>
                  <div className="image-details">
                    <span className="image-name">{image.fileName}</span>
                    <div className="format-info">
                      <span className="original-format">{image.originalFormat}</span>
                      <span className="arrow">→</span>
                      <span className="new-format">{image.newFormat}</span>
                      <span className="size-info">
                        ({formatFileSize(image.originalSize)} → {formatFileSize(image.convertedSize)})
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDownloadSingle(image)}
                  className="download-single-btn"
                  aria-label={uiText.download || 'Download'}
                >
                  ⬇️
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button onClick={handleDownloadAll} className="download-all-btn">
              {uiText.downloadAll || 'Download All'}
            </button>
            <button onClick={handleReset} className="reset-btn">
              {uiText.reset || 'Convert More'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageFormatConverterControls;
