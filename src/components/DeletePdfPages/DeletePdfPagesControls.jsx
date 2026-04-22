/**
 * DeletePdfPagesControls Component
 *
 * Handles PDF upload and page deletion with visual page selection
 * Reuses patterns from Split and Rotate PDF tools
 */

import React, { useState, useRef, useEffect } from 'react';
import './DeletePdfPagesControls.css';

const DeletePdfPagesControls = ({ toolInstance, uiText, validation }) => {
  const [file, setFile] = useState(null);
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [resultPdf, setResultPdf] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [pagePreviews, setPagePreviews] = useState([]);
  const fileInputRef = useRef(null);
  const resultsRef = useRef(null);

  // Scroll to results when pages are deleted
  useEffect(() => {
    if (resultPdf && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [resultPdf]);

  const handleFileSelect = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      await loadFile(selectedFile);
    }
  };

  const loadFile = async (selectedFile) => {
    setFile(selectedFile);
    setError(null);
    setResultPdf(null);
    setSelectedPages(new Set());

    // Load PDF to get page count and generate previews
    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const { PDFDocument } = await import('pdf-lib');
      const pdf = await PDFDocument.load(arrayBuffer);
      const pageCount = pdf.getPageCount();
      setTotalPages(pageCount);

      // Generate page previews using pdfjs-dist
      await generatePreviews(arrayBuffer, pageCount);
    } catch (err) {
      console.error('Error loading PDF:', err);
      setTotalPages(0);
      setPagePreviews([]);
    }
  };

  const generatePreviews = async (arrayBuffer, pageCount) => {
    try {
      const pdfjsLib = await import('pdfjs-dist');
      const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.mjs?url');
      pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.default;

      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;

      const previews = [];
      const maxPreviews = Math.min(pageCount, 100); // Limit previews for performance

      for (let i = 1; i <= maxPreviews; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 0.5 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise;

        previews.push({
          pageNumber: i,
          dataUrl: canvas.toDataURL()
        });
      }

      setPagePreviews(previews);
    } catch (err) {
      console.error('Error generating previews:', err);
      setPagePreviews([]);
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

  const handlePageClick = (pageIndex) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(pageIndex)) {
      newSelected.delete(pageIndex);
    } else {
      newSelected.add(pageIndex);
    }
    setSelectedPages(newSelected);
    setError(null);
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

  const handleDelete = async () => {
    if (!file) {
      setError(uiText.selectFile);
      return;
    }

    if (selectedPages.size === 0) {
      setError(uiText.selectPages);
      return;
    }

    if (selectedPages.size >= totalPages) {
      setError(uiText.cannotDeleteAll);
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result = await toolInstance.process(file, {
        pagesToDelete: Array.from(selectedPages)
      });

      if (result.success) {
        setResultPdf({
          blob: result.result,
          metadata: result.metadata
        });
      } else {
        setError(result.errorMessage || uiText.deleteError);
      }
    } catch (err) {
      console.error('Delete error:', err);
      setError(uiText.deleteFailure);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!resultPdf) return;

    const url = URL.createObjectURL(resultPdf.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = resultPdf.metadata.fileName;
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

  const remainingPages = totalPages - selectedPages.size;

  return (
    <div className="delete-pdf-pages-controls">
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

      {/* File Info & Page Selection */}
      {file && !resultPdf && (
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

          {/* Selection Info */}
          <div className="selection-info">
            <div className="info-item">
              <span className="info-label">{uiText.selectedPages}:</span>
              <span className="info-value">{selectedPages.size}</span>
            </div>
            <div className="info-item">
              <span className="info-label">{uiText.remainingPages}:</span>
              <span className="info-value">{remainingPages}</span>
            </div>
          </div>

          {/* Selection Controls */}
          <div className="selection-controls">
            <button onClick={handleSelectAll} className="control-btn">
              {uiText.selectAllButton}
            </button>
            <button onClick={handleDeselectAll} className="control-btn">
              {uiText.deselectAllButton}
            </button>
          </div>

          {/* Page Grid */}
          <div className="pages-section">
            <label>{uiText.selectPagesLabel}</label>
            <p className="pages-hint">{uiText.selectPagesHint}</p>

            <div className="pages-grid">
              {pagePreviews.map((preview) => (
                <div
                  key={preview.pageNumber}
                  className={`page-item ${selectedPages.has(preview.pageNumber - 1) ? 'selected' : ''}`}
                  onClick={() => handlePageClick(preview.pageNumber - 1)}
                >
                  <div className="page-preview">
                    <img src={preview.dataUrl} alt={`Page ${preview.pageNumber}`} />
                  </div>
                  <div className="page-number">
                    {selectedPages.has(preview.pageNumber - 1) && (
                      <span className="check-icon">✓</span>
                    )}
                    Page {preview.pageNumber}
                  </div>
                </div>
              ))}

              {/* Show remaining pages without previews */}
              {totalPages > pagePreviews.length && (
                Array.from({ length: totalPages - pagePreviews.length }, (_, i) => {
                  const pageNumber = pagePreviews.length + i + 1;
                  const pageIndex = pageNumber - 1;
                  return (
                    <div
                      key={pageNumber}
                      className={`page-item no-preview ${selectedPages.has(pageIndex) ? 'selected' : ''}`}
                      onClick={() => handlePageClick(pageIndex)}
                    >
                      <div className="page-preview">
                        <div className="no-preview-placeholder">📄</div>
                      </div>
                      <div className="page-number">
                        {selectedPages.has(pageIndex) && (
                          <span className="check-icon">✓</span>
                        )}
                        Page {pageNumber}
                      </div>
                    </div>
                  );
                })
              )}
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

      {/* Delete Button */}
      {file && !resultPdf && (
        <button
          onClick={handleDelete}
          disabled={isProcessing || selectedPages.size === 0}
          className="delete-btn"
        >
          {isProcessing ? uiText.deleting : uiText.deleteButton}
        </button>
      )}

      {/* Results */}
      {resultPdf && (
        <div ref={resultsRef} className="results-section">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <span>{uiText.deleteSuccess}</span>
          </div>

          <div className="result-info">
            <div className="result-stat">
              <span className="stat-label">Original Pages:</span>
              <span className="stat-value">{resultPdf.metadata.originalPages}</span>
            </div>
            <div className="result-stat">
              <span className="stat-label">Deleted Pages:</span>
              <span className="stat-value">{resultPdf.metadata.deletedPages}</span>
            </div>
            <div className="result-stat">
              <span className="stat-label">Remaining Pages:</span>
              <span className="stat-value">{resultPdf.metadata.remainingPages}</span>
            </div>
          </div>

          <div className="result-file">
            <div className="file-icon-large">📄</div>
            <div className="file-info">
              <span className="file-name-result">{resultPdf.metadata.fileName}</span>
              <span className="file-size-result">{formatFileSize(resultPdf.metadata.fileSize)}</span>
            </div>
          </div>

          <button onClick={handleDownload} className="download-btn">
            {uiText.downloadButton}
          </button>

          <button onClick={() => {
            setFile(null);
            setResultPdf(null);
            setSelectedPages(new Set());
            setPagePreviews([]);
          }} className="reset-btn">
            Delete Pages from Another PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default DeletePdfPagesControls;
