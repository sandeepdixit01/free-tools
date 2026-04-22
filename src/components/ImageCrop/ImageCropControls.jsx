/**
 * ImageCropControls Component
 *
 * Handles image upload, crop area selection with drag, aspect ratio presets, and download
 * Reuses upload patterns from ImageCompressorControls
 */

import React, { useState, useRef, useEffect } from 'react';
import './ImageCropControls.css';

const ImageCropControls = ({ toolInstance, uiText, validation }) => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [croppedResult, setCroppedResult] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('free');
  const [outputFormat, setOutputFormat] = useState('image/png');

  // Crop area state
  const [cropArea, setCropArea] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [startPoint, setStartPoint] = useState(null);

  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const resultsRef = useRef(null);

  /**
   * Handle file selection
   */
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      loadImage(selectedFile);
    }
  };

  /**
   * Load and preview image
   */
  const loadImage = (imageFile) => {
    setError(null);
    setCroppedResult(null);
    setCropArea(null);

    // Validate file type
    const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!supportedTypes.includes(imageFile.type)) {
      setError(uiText.invalidFileType || 'Invalid file type. Please select JPG, PNG, WEBP, or GIF.');
      return;
    }

    // Validate file size
    if (imageFile.size > validation.maxFileSize) {
      setError(uiText.fileTooLarge || 'File is too large. Maximum size is 50MB.');
      return;
    }

    setFile(imageFile);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
        setImagePreview(e.target.result);

        // Set initial crop area based on aspect ratio
        const presets = toolInstance.getAspectRatioPresets(img.width, img.height);
        const selectedPreset = presets[aspectRatio];
        const initialCrop = toolInstance.calculateCropAreaForRatio(
          img.width,
          img.height,
          selectedPreset?.ratio
        );
        setCropArea(initialCrop);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
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
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      loadImage(droppedFile);
    }
  };

  /**
   * Handle mouse down on image - start crop selection
   */
  const handleMouseDown = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = imageDimensions.width / rect.width;
    const scaleY = imageDimensions.height / rect.height;

    const x = Math.round((e.clientX - rect.left) * scaleX);
    const y = Math.round((e.clientY - rect.top) * scaleY);

    setStartPoint({ x, y });
    setIsSelecting(true);
    setCropArea({ x, y, width: 0, height: 0 });
  };

  /**
   * Handle mouse move - update crop selection
   */
  const handleMouseMove = (e) => {
    if (!isSelecting || !startPoint || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = imageDimensions.width / rect.width;
    const scaleY = imageDimensions.height / rect.height;

    const currentX = Math.round((e.clientX - rect.left) * scaleX);
    const currentY = Math.round((e.clientY - rect.top) * scaleY);

    let width = currentX - startPoint.x;
    let height = currentY - startPoint.y;

    // Apply aspect ratio constraint if not free
    if (aspectRatio !== 'free') {
      const presets = toolInstance.getAspectRatioPresets(imageDimensions.width, imageDimensions.height);
      const ratio = presets[aspectRatio]?.ratio;

      if (ratio) {
        // Maintain aspect ratio
        if (Math.abs(width) > Math.abs(height)) {
          height = width / ratio;
        } else {
          width = height * ratio;
        }
      }
    }

    // Handle negative dimensions (dragging left/up)
    const x = width < 0 ? startPoint.x + width : startPoint.x;
    const y = height < 0 ? startPoint.y + height : startPoint.y;

    // Constrain to image bounds
    const finalX = Math.max(0, Math.min(x, imageDimensions.width));
    const finalY = Math.max(0, Math.min(y, imageDimensions.height));
    const finalWidth = Math.min(Math.abs(width), imageDimensions.width - finalX);
    const finalHeight = Math.min(Math.abs(height), imageDimensions.height - finalY);

    setCropArea({
      x: finalX,
      y: finalY,
      width: finalWidth,
      height: finalHeight
    });
  };

  /**
   * Handle mouse up - finish crop selection
   */
  const handleMouseUp = () => {
    setIsSelecting(false);
    setStartPoint(null);
  };

  /**
   * Handle aspect ratio change
   */
  const handleAspectRatioChange = (newRatio) => {
    setAspectRatio(newRatio);

    if (imageDimensions.width && imageDimensions.height) {
      const presets = toolInstance.getAspectRatioPresets(imageDimensions.width, imageDimensions.height);
      const selectedPreset = presets[newRatio];
      const newCrop = toolInstance.calculateCropAreaForRatio(
        imageDimensions.width,
        imageDimensions.height,
        selectedPreset?.ratio
      );
      setCropArea(newCrop);
    }
  };

  /**
   * Process crop
   */
  const handleCrop = async () => {
    if (!file || !cropArea || cropArea.width === 0 || cropArea.height === 0) {
      setError(uiText.noCropArea || 'Please select a crop area');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const result = await toolInstance.process(file, cropArea, {
        outputFormat,
        quality: 0.95
      });

      if (result.success) {
        setCroppedResult(result.result);

        // Scroll to results
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        setError(result.errorMessage || 'Failed to crop image');
      }
    } catch (err) {
      console.error('Crop error:', err);
      setError('An error occurred while cropping the image');
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * Download cropped image
   */
  const handleDownload = () => {
    if (!croppedResult) return;

    const link = document.createElement('a');
    link.href = URL.createObjectURL(croppedResult.blob);
    link.download = croppedResult.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  /**
   * Reset everything
   */
  const handleReset = () => {
    setFile(null);
    setImagePreview(null);
    setImageDimensions({ width: 0, height: 0 });
    setCropArea(null);
    setCroppedResult(null);
    setError(null);
    setAspectRatio('free');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  /**
   * Get crop overlay style
   */
  const getCropOverlayStyle = () => {
    if (!cropArea || !imageRef.current) return {};

    const rect = imageRef.current.getBoundingClientRect();
    const scaleX = rect.width / imageDimensions.width;
    const scaleY = rect.height / imageDimensions.height;

    return {
      left: `${cropArea.x * scaleX}px`,
      top: `${cropArea.y * scaleY}px`,
      width: `${cropArea.width * scaleX}px`,
      height: `${cropArea.height * scaleY}px`
    };
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="image-crop-controls">
      {/* Upload Section */}
      {!imagePreview && (
        <div
          className={`upload-area ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-icon">📷</div>
          <p className="upload-text">{uiText.uploadHint || 'Click or drag image here'}</p>
          <p className="upload-subtext">Supports JPG, PNG, WEBP, GIF</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Image Preview and Crop Selection */}
      {imagePreview && !croppedResult && (
        <div className="crop-section">
          <div className="crop-controls">
            <div className="control-group">
              <label>{uiText.aspectRatioLabel || 'Aspect Ratio:'}</label>
              <select
                value={aspectRatio}
                onChange={(e) => handleAspectRatioChange(e.target.value)}
                disabled={isProcessing}
              >
                <option value="free">Free</option>
                <option value="square">1:1 (Square)</option>
                <option value="landscape">16:9 (Landscape)</option>
                <option value="portrait">9:16 (Portrait)</option>
                <option value="photo">4:3 (Photo)</option>
                <option value="widescreen">21:9 (Widescreen)</option>
              </select>
            </div>

            <div className="control-group">
              <label>Output Format:</label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                disabled={isProcessing}
              >
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/webp">WEBP</option>
              </select>
            </div>
          </div>

          <div className="image-container">
            <div className="crop-hint">{uiText.selectAreaHint || 'Drag on the image to select crop area'}</div>
            <div
              className="image-wrapper"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                ref={imageRef}
                src={imagePreview}
                alt="Preview"
                className="preview-image"
                draggable={false}
              />
              {cropArea && cropArea.width > 0 && cropArea.height > 0 && (
                <>
                  <div className="crop-overlay" style={getCropOverlayStyle()}>
                    <div className="crop-border"></div>
                  </div>
                  <div className="crop-dimensions">
                    {cropArea.width} × {cropArea.height} px
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="action-buttons">
            <button
              onClick={handleCrop}
              disabled={isProcessing || !cropArea || cropArea.width === 0}
              className="btn-primary"
            >
              {isProcessing ? (uiText.processing || 'Processing...') : (uiText.cropButton || 'Crop Image')}
            </button>
            <button onClick={handleReset} className="btn-secondary" disabled={isProcessing}>
              {uiText.resetButton || 'Reset'}
            </button>
          </div>
        </div>
      )}

      {/* Cropped Result */}
      {croppedResult && (
        <div className="results-section" ref={resultsRef}>
          <h3>Cropped Image</h3>

          <div className="result-preview">
            <img src={croppedResult.dataUrl} alt="Cropped" />
          </div>

          <div className="result-info">
            <div className="info-row">
              <span className="info-label">Original:</span>
              <span>{croppedResult.originalDimensions.width} × {croppedResult.originalDimensions.height} px ({formatFileSize(croppedResult.originalSize)})</span>
            </div>
            <div className="info-row">
              <span className="info-label">Cropped:</span>
              <span>{croppedResult.croppedDimensions.width} × {croppedResult.croppedDimensions.height} px ({formatFileSize(croppedResult.croppedSize)})</span>
            </div>
          </div>

          <div className="action-buttons">
            <button onClick={handleDownload} className="btn-primary">
              {uiText.downloadButton || 'Download Cropped Image'}
            </button>
            <button onClick={handleReset} className="btn-secondary">
              Crop Another Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCropControls;
