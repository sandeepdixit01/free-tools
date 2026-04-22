/**
 * SplitPdfControls Component
 * 
 * Handles PDF upload and splitting with two modes:
 * 1. Split all pages (each page becomes separate PDF)
 * 2. Custom ranges (user defines page ranges)
 */

import React, { useState, useRef } from 'react';
import './SplitPdfControls.css';

const SplitPdfControls = ({ toolInstance, uiText, validation }) => {
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState('all'); // 'all' or 'ranges'
  const [ranges, setRanges] = useState([{ start: '', end: '' }]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [splitPdfs, setSplitPdfs] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileSelect = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      await loadFile(selectedFile);
    }
  };

  const loadFile = async (selectedFile) => {
    setFile(selectedFile);
    setError(null);
    setSplitPdfs(null);
    
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

  const handleAddRange = () => {
    setRanges([...ranges, { start: '', end: '' }]);
  };

  const handleRemoveRange = (index) => {
    if (ranges.length > 1) {
      setRanges(ranges.filter((_, i) => i !== index));
    }
  };

  const handleRangeChange = (index, field, value) => {
    const newRanges = [...ranges];
    newRanges[index][field] = value;
    setRanges(newRanges);
  };

  const handleSplit = async () => {
    if (!file) {
      setError(uiText.selectFile);
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      let options = { mode };
      
      if (mode === 'ranges') {
        // Parse and validate ranges
        const parsedRanges = ranges
          .filter(r => r.start && r.end)
          .map(r => ({
            start: parseInt(r.start),
            end: parseInt(r.end)
          }));
        
        if (parsedRanges.length === 0) {
          setError(uiText.invalidRange || 'Please specify at least one valid range');
          setIsProcessing(false);
          return;
        }
        
        options.ranges = parsedRanges;
      }

      const result = await toolInstance.process(file, options);

      if (result.success) {
        setSplitPdfs({
          files: result.result,
          metadata: result.metadata
        });
      } else {
        setError(result.errorMessage || uiText.splitError);
      }
    } catch (err) {
      console.error('Split error:', err);
      setError(uiText.splitFailure);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = (pdf) => {
    const url = URL.createObjectURL(pdf.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pdf.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = async () => {
    if (!splitPdfs) return;
    
    const zipBlob = await toolInstance.createZip(
      splitPdfs.files, 
      `${file.name.replace('.pdf', '')}-split.zip`
    );
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${file.name.replace('.pdf', '')}-split.zip`;
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
    <div className="split-pdf-controls">
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

      {/* File Info & Mode Selection */}
      {file && !splitPdfs && (
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
                className={`mode-btn ${mode === 'ranges' ? 'active' : ''}`}
                onClick={() => setMode('ranges')}
              >
                {uiText.modeRanges}
              </button>
            </div>
          </div>

          {/* Custom Ranges Input */}
          {mode === 'ranges' && (
            <div className="ranges-section">
              <label>{uiText.rangeLabel}</label>
              <p className="range-hint">{uiText.rangeHint}</p>
              
              {ranges.map((range, index) => (
                <div key={index} className="range-input-group">
                  <input
                    type="number"
                    placeholder={uiText.startPage}
                    value={range.start}
                    onChange={(e) => handleRangeChange(index, 'start', e.target.value)}
                    min="1"
                    max={totalPages}
                    className="range-input"
                  />
                  <span className="range-separator">-</span>
                  <input
                    type="number"
                    placeholder={uiText.endPage}
                    value={range.end}
                    onChange={(e) => handleRangeChange(index, 'end', e.target.value)}
                    min="1"
                    max={totalPages}
                    className="range-input"
                  />
                  {ranges.length > 1 && (
                    <button
                      onClick={() => handleRemoveRange(index)}
                      className="remove-range-btn"
                    >
                      {uiText.removeRange}
                    </button>
                  )}
                </div>
              ))}
              
              <button onClick={handleAddRange} className="add-range-btn">
                + {uiText.addRange}
              </button>
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

      {/* Split Button */}
      {file && !splitPdfs && (
        <button onClick={handleSplit} disabled={isProcessing} className="split-btn">
          {isProcessing ? uiText.splitting : uiText.splitButton}
        </button>
      )}

      {/* Results */}
      {splitPdfs && (
        <div className="results-section">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <span>{uiText.splitSuccess}</span>
          </div>

          <div className="results-header">
            <h3>{splitPdfs.files.length} {uiText.filesCreated}</h3>
            <button onClick={handleDownloadAll} className="download-all-btn">
              {uiText.downloadAllButton}
            </button>
          </div>

          <div className="files-grid">
            {splitPdfs.files.map((pdf, index) => (
              <div key={index} className="file-card-result">
                <div className="file-icon-large">📄</div>
                <div className="file-info">
                  <span className="file-name-result">{pdf.fileName}</span>
                  <span className="file-meta">
                    {pdf.pageRange && `Pages: ${pdf.pageRange}`}
                    {pdf.pageCount && ` (${pdf.pageCount} pages)`}
                  </span>
                  <span className="file-size-result">{formatFileSize(pdf.size)}</span>
                </div>
                <button onClick={() => handleDownload(pdf)} className="download-btn">
                  {uiText.downloadButton}
                </button>
              </div>
            ))}
          </div>

          <button onClick={() => {
            setFile(null);
            setSplitPdfs(null);
            setRanges([{ start: '', end: '' }]);
            setMode('all');
          }} className="reset-btn">
            Split Another PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default SplitPdfControls;

