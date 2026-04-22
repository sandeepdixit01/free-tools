/**
 * ImageToPdfControls Component
 *
 * Handles image upload, list management, and PDF conversion
 * Reuses patterns from MergePdfControls
 */

import React, { useState, useRef } from 'react';
import './ImageToPdfControls.css';

const ImageToPdfControls = ({ toolInstance, uiText, validation }) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [convertedPdf, setConvertedPdf] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

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
    setConvertedPdf(null);

    // Validate file types
    const validFiles = newFiles.filter(file => {
      const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
      if (!supportedTypes.includes(file.type)) {
        setError(uiText.invalidFileType || 'Invalid file type. Please select only image files.');
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
    setConvertedPdf(null);
  };

  /**
   * Clear all files
   */
  const clearAll = () => {
    setFiles([]);
    setError(null);
    setConvertedPdf(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Convert images to PDF
   */
  const handleConvert = async () => {
    if (files.length === 0) {
      setError(uiText.selectFiles || 'Please select at least 1 image to convert');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result = await toolInstance.process(files);

      if (result.success) {
        setConvertedPdf({
          blob: result.result,
          fileName: result.metadata.fileName,
          metadata: result.metadata
        });
      } else {
        setError(result.errorMessage || uiText.convertError);
      }
    } catch (err) {
      console.error('Conversion error:', err);
      setError(uiText.convertFailure || 'Failed to convert images to PDF');
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * Download the converted PDF
   */
  const handleDownload = () => {
    if (!convertedPdf) return;

    const url = URL.createObjectURL(convertedPdf.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = convertedPdf.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
    <div className="image-to-pdf-controls">
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
        <p className="upload-hint">{uiText.uploadHint}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.gif"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>

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
      {files.length > 0 && !convertedPdf && (
        <button
          onClick={handleConvert}
          disabled={isProcessing}
          className="convert-btn"
        >
          {isProcessing
            ? uiText.converting || 'Converting...'
            : uiText.convertButton || 'Convert to PDF'}
        </button>
      )}

      {/* Success & Download */}
      {convertedPdf && (
        <div className="success-section">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <span>{uiText.convertSuccess || 'Images converted to PDF successfully!'}</span>
          </div>
          <div className="pdf-info">
            <p>📄 {convertedPdf.metadata.totalImages} images converted</p>
            <p>📊 {formatFileSize(convertedPdf.metadata.fileSize)}</p>
          </div>
          <button onClick={handleDownload} className="download-btn">
            {uiText.downloadButton || 'Download PDF'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageToPdfControls;
