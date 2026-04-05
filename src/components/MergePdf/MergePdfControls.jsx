/**
 * MergePdfControls Component
 * 
 * Handles file upload, list management, and PDF merging
 * Uses shared UI components where possible
 */

import React, { useState, useRef } from 'react';
import './MergePdfControls.css';

const MergePdfControls = ({ toolInstance, uiText, validation }) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [mergedPdf, setMergedPdf] = useState(null);
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
    setMergedPdf(null);

    // Validate file types
    const validFiles = newFiles.filter(file => {
      if (file.type !== 'application/pdf') {
        setError(uiText.invalidFileType || 'Invalid file type. Please select only PDF files.');
        return false;
      }
      if (file.size > validation.maxFileSize) {
        setError(uiText.fileTooLarge || 'File is too large. Maximum size is 50MB per file.');
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles(prevFiles => [...prevFiles, ...validFiles]);
    }
  };

  /**
   * Remove a file from the list
   */
  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setError(null);
    setMergedPdf(null);
  };

  /**
   * Clear all files
   */
  const clearAll = () => {
    setFiles([]);
    setError(null);
    setMergedPdf(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
   * Merge PDFs
   */
  const handleMerge = async () => {
    setError(null);
    setMergedPdf(null);

    // Validate minimum files
    if (files.length < (validation.minFiles || 2)) {
      setError(uiText.selectFiles || 'Please select at least 2 PDF files to merge.');
      return;
    }

    setIsProcessing(true);

    try {
      const result = await toolInstance.process(files);

      if (result.success) {
        setMergedPdf({
          blob: result.result,
          fileName: result.metadata.fileName,
          metadata: result.metadata
        });
      } else {
        setError(result.errorMessage || uiText.mergeError || 'Failed to merge PDFs.');
      }
    } catch (err) {
      console.error('Merge error:', err);
      setError(uiText.mergeFailure || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * Download merged PDF
   */
  const handleDownload = () => {
    if (!mergedPdf) return;

    const url = URL.createObjectURL(mergedPdf.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = mergedPdf.fileName;
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
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="merge-pdf-controls">
      {/* File Upload Area */}
      <div
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          id="file-upload-input"
          type="file"
          accept=".pdf,application/pdf"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        
        <div className="upload-icon">📄</div>
        <div className="upload-text">
          {isDragging ? (
            <p className="upload-hint">{uiText.dropZoneActive || 'Drop PDF files here'}</p>
          ) : (
            <>
              <p className="upload-title">{uiText.uploadButton || 'Select PDF Files'}</p>
              <p className="upload-hint">{uiText.dropZoneInactive || 'Drag and drop PDF files here, or click to select'}</p>
              <p className="upload-multiple">{uiText.uploadMultiple || 'You can select multiple files at once'}</p>
            </>
          )}
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="file-list">
          <div className="file-list-header">
            <h3>{files.length} {uiText.filesSelected || 'files selected'}</h3>
            <button onClick={clearAll} className="clear-all-btn">
              {uiText.clearAll || 'Clear All'}
            </button>
          </div>
          
          <div className="files">
            {files.map((file, index) => (
              <div key={index} className="file-item">
                <div className="file-icon">📄</div>
                <div className="file-info">
                  <div className="file-name">{file.name}</div>
                  <div className="file-size">{formatFileSize(file.size)}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
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

      {/* Merge Button */}
      {files.length > 0 && !mergedPdf && (
        <button
          onClick={handleMerge}
          disabled={isProcessing || files.length < (validation.minFiles || 2)}
          className="merge-btn"
        >
          {isProcessing ? (
            <>
              <span className="spinner"></span>
              {uiText.merging || 'Merging...'}
            </>
          ) : (
            uiText.mergeButton || 'Merge PDFs'
          )}
        </button>
      )}

      {/* Success Message & Download */}
      {mergedPdf && (
        <div className="result-section">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <div className="success-text">
              <strong>{uiText.mergeSuccess || 'PDFs merged successfully!'}</strong>
              <p>
                {mergedPdf.metadata.totalFiles} files merged • {mergedPdf.metadata.totalPages} pages • {formatFileSize(mergedPdf.metadata.fileSize)}
              </p>
            </div>
          </div>
          
          <button onClick={handleDownload} className="download-btn">
            <span className="download-icon">⬇️</span>
            {uiText.downloadButton || 'Download Merged PDF'}
          </button>
        </div>
      )}

      {/* Processing Info */}
      {isProcessing && (
        <div className="processing-info">
          {uiText.processingInfo || 'Processing your PDFs...'}
        </div>
      )}
    </div>
  );
};

export default MergePdfControls;

