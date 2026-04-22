/**
 * PdfToImageControls Component
 *
 * Handles PDF upload and conversion to images
 * Reuses patterns from ImageToPdf and MergePdf
 */

import React, { useState, useRef } from 'react';
import './PdfToImageControls.css';

const PdfToImageControls = ({ toolInstance, uiText, validation }) => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState('png');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setImages(null);
    }
  };

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
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setError(null);
      setImages(null);
    } else {
      setError(uiText.invalidFileType);
    }
  };

  const handleConvert = async () => {
    if (!file) {
      setError(uiText.selectFile);
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result = await toolInstance.process(file, { format, quality: 0.92 });

      if (result.success) {
        setImages({
          pages: result.result,
          metadata: result.metadata
        });
      } else {
        setError(result.errorMessage || uiText.convertError);
      }
    } catch (err) {
      console.error('Conversion error:', err);
      setError(uiText.convertFailure);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = (image) => {
    const url = URL.createObjectURL(image.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = image.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = async () => {
    if (!images) return;

    const zipBlob = await toolInstance.createZip(images.pages, `${file.name.replace('.pdf', '')}-images.zip`);
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${file.name.replace('.pdf', '')}-images.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="pdf-to-image-controls">
      {/* Upload Area */}
      {!file && (
        <div
          className={`upload-area ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-icon">📄</div>
          <p className="upload-text">
            {isDragging ? uiText.dropZoneActive : uiText.dropZoneInactive}
          </p>
          <p className="upload-hint">{uiText.uploadHint}</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </div>
      )}

      {/* File Info & Format Selection */}
      {file && !images && (
        <div className="file-info-section">
          <div className="file-card">
            <span className="file-icon">📄</span>
            <div className="file-details">
              <span className="file-name">{file.name}</span>
              <span className="file-size">{formatFileSize(file.size)}</span>
            </div>
            <button onClick={() => setFile(null)} className="remove-btn">✕</button>
          </div>

          <div className="format-selector">
            <label>{uiText.formatLabel}</label>
            <div className="format-options">
              <button
                className={`format-btn ${format === 'png' ? 'active' : ''}`}
                onClick={() => setFormat('png')}
              >
                {uiText.formatPNG}
              </button>
              <button
                className={`format-btn ${format === 'jpeg' ? 'active' : ''}`}
                onClick={() => setFormat('jpeg')}
              >
                {uiText.formatJPG}
              </button>
            </div>
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
      {file && !images && (
        <button onClick={handleConvert} disabled={isProcessing} className="convert-btn">
          {isProcessing ? uiText.converting : uiText.convertButton}
        </button>
      )}

      {/* Results */}
      {images && (
        <div className="results-section">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <span>{uiText.convertSuccess}</span>
          </div>

          <div className="results-header">
            <h3>{images.pages.length} {uiText.pageInfo}</h3>
            <button onClick={handleDownloadAll} className="download-all-btn">
              {uiText.downloadAllButton}
            </button>
          </div>

          <div className="images-grid">
            {images.pages.map((image, index) => (
              <div key={index} className="image-card">
                <img src={image.dataUrl} alt={`Page ${image.pageNumber}`} />
                <div className="image-info">
                  <span>Page {image.pageNumber}</span>
                  <span>{formatFileSize(image.size)}</span>
                </div>
                <button onClick={() => handleDownload(image)} className="download-btn">
                  {uiText.downloadButton}
                </button>
              </div>
            ))}
          </div>

          <button onClick={() => {
            setFile(null);
            setImages(null);
            setFormat('png');
          }} className="reset-btn">
            Convert Another PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfToImageControls;
