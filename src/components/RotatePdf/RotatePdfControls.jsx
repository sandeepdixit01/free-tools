/**
 * RotatePdfControls Component
 * 
 * Handles PDF upload and page rotation
 * Supports rotating all pages or individual pages
 */

import React, { useState, useRef, useEffect } from 'react';
import './RotatePdfControls.css';

const RotatePdfControls = ({ toolInstance, uiText, validation }) => {
  const [file, setFile] = useState(null);
  const [rotation, setRotation] = useState(90);
  const [mode, setMode] = useState('all'); // 'all' or 'individual'
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [rotatedPdf, setRotatedPdf] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const fileInputRef = useRef(null);
  const resultsRef = useRef(null);

  // Scroll to results when PDF is rotated
  useEffect(() => {
    if (rotatedPdf && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [rotatedPdf]);

  const handleFileSelect = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      await loadFile(selectedFile);
    }
  };

  const loadFile = async (selectedFile) => {
    setFile(selectedFile);
    setError(null);
    setRotatedPdf(null);
    setSelectedPages(new Set());
    
    // Load PDF to get page count
    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const { PDFDocument } = await import('pdf-lib');
      const pdf = await PDFDocument.load(arrayBuffer);
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      console.error('Error loading PDF:', err);
      setTotalPages(0);
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

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      await loadFile(droppedFile);
    } else {
      setError(uiText.invalidFileType);
    }
  };

  const togglePageSelection = (pageIndex) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(pageIndex)) {
      newSelected.delete(pageIndex);
    } else {
      newSelected.add(pageIndex);
    }
    setSelectedPages(newSelected);
  };

  const handleSelectAll = () => {
    const allPages = new Set();
    for (let i = 0; i < totalPages; i++) {
      allPages.add(i);
    }
    setSelectedPages(allPages);
  };

  const handleDeselectAll = () => {
    setSelectedPages(new Set());
  };

  const handleRotate = async () => {
    if (!file) {
      setError(uiText.selectFile);
      return;
    }

    if (mode === 'individual' && selectedPages.size === 0) {
      setError('Please select at least one page to rotate');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      let options = { mode, rotation };
      
      if (mode === 'individual') {
        options.pageRotations = Array.from(selectedPages).map(pageIndex => ({
          pageIndex,
          rotation
        }));
      }

      const result = await toolInstance.process(file, options);

      if (result.success) {
        setRotatedPdf({
          blob: result.result,
          metadata: result.metadata
        });
      } else {
        setError(result.errorMessage || uiText.rotateError);
      }
    } catch (err) {
      console.error('Rotation error:', err);
      setError(uiText.rotateFailure);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!rotatedPdf) return;
    
    const url = URL.createObjectURL(rotatedPdf.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = rotatedPdf.metadata.fileName;
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
    <div className="rotate-pdf-controls">
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

      {/* File Info & Controls */}
      {file && !rotatedPdf && (
        <div className="file-info-section">
          <div className="file-card">
            <span className="file-icon">📄</span>
            <div className="file-details">
              <span className="file-name">{file.name}</span>
              <span className="file-size">
                {formatFileSize(file.size)} • {totalPages} {uiText.pagesInfo}
              </span>
            </div>
            <button onClick={() => setFile(null)} className="remove-btn">✕</button>
          </div>

          {/* Rotation Angle Selection */}
          <div className="rotation-selector">
            <label>{uiText.rotationLabel}</label>
            <div className="rotation-options">
              <button
                className={`rotation-btn ${rotation === 90 ? 'active' : ''}`}
                onClick={() => setRotation(90)}
              >
                {uiText.rotate90}
              </button>
              <button
                className={`rotation-btn ${rotation === 180 ? 'active' : ''}`}
                onClick={() => setRotation(180)}
              >
                {uiText.rotate180}
              </button>
              <button
                className={`rotation-btn ${rotation === 270 ? 'active' : ''}`}
                onClick={() => setRotation(270)}
              >
                {uiText.rotate270}
              </button>
            </div>
          </div>

          {/* Mode Selection */}
          <div className="mode-selector">
            <label>{uiText.modeLabel}</label>
            <div className="mode-options">
              <button
                className={`mode-btn ${mode === 'all' ? 'active' : ''}`}
                onClick={() => setMode('all')}
              >
                {uiText.modeAll}
              </button>
              <button
                className={`mode-btn ${mode === 'individual' ? 'active' : ''}`}
                onClick={() => setMode('individual')}
              >
                {uiText.modeIndividual}
              </button>
            </div>
          </div>

          {/* Individual Page Selection */}
          {mode === 'individual' && (
            <div className="page-selection-section">
              <div className="page-selection-header">
                <label>{uiText.selectPages}</label>
                <div className="selection-actions">
                  <button onClick={handleSelectAll} className="select-action-btn">
                    {uiText.selectAll}
                  </button>
                  <button onClick={handleDeselectAll} className="select-action-btn">
                    {uiText.deselectAll}
                  </button>
                </div>
              </div>
              
              <div className="pages-grid">
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i}
                    className={`page-item ${selectedPages.has(i) ? 'selected' : ''}`}
                    onClick={() => togglePageSelection(i)}
                  >
                    <div className="page-number">{i + 1}</div>
                    {selectedPages.has(i) && <div className="check-mark">✓</div>}
                  </div>
                ))}
              </div>
              
              {selectedPages.size > 0 && (
                <div className="selection-info">
                  {selectedPages.size} page{selectedPages.size !== 1 ? 's' : ''} selected
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Rotate Button */}
      {file && !rotatedPdf && (
        <button onClick={handleRotate} disabled={isProcessing} className="rotate-btn">
          {isProcessing ? uiText.rotating : uiText.rotateButton}
        </button>
      )}

      {/* Results */}
      {rotatedPdf && (
        <div ref={resultsRef} className="results-section">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <span>{uiText.rotateSuccess}</span>
          </div>

          <div className="result-info">
            <div className="result-icon">📄</div>
            <div className="result-details">
              <span className="result-filename">{rotatedPdf.metadata.fileName}</span>
              <span className="result-meta">
                {rotatedPdf.metadata.totalPages} pages • {formatFileSize(rotatedPdf.metadata.fileSize)}
              </span>
              <span className="result-rotation">
                {uiText.rotationApplied}: {rotatedPdf.metadata.rotation === 'individual' ? 'Individual pages' : `${rotatedPdf.metadata.rotation}°`}
              </span>
            </div>
          </div>

          <button onClick={handleDownload} className="download-btn-large">
            {uiText.downloadButton}
          </button>

          <button onClick={() => {
            setFile(null);
            setRotatedPdf(null);
            setSelectedPages(new Set());
            setMode('all');
            setRotation(90);
          }} className="reset-btn">
            Rotate Another PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default RotatePdfControls;

