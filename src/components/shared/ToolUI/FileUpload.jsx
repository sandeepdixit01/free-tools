/**
 * FileUpload Component
 * Reusable file upload component with drag & drop
 * Works for ANY file type (images, PDFs, etc.)
 */

import React from 'react'
import PropTypes from 'prop-types'
import './FileUpload.css'

const FileUpload = ({
  // Upload state
  isDragging = false,
  isUploading = false,
  files = [],
  error = null,
  
  // Handlers
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  onRemoveFile,
  onClearAll,
  
  // Configuration
  accept = '*',
  multiple = false,
  maxFiles = 10,
  
  // Content (all via props - NO hardcoded text)
  title,
  subtitle,
  dragText,
  orText,
  buttonText,
  supportText,
  uploadingText = 'Uploading...',
  filesSelectedText = 'selected',
  fileText = 'file',
  filesText = 'files',
  clearAllText = 'Clear All',
  removeFileLabel = 'Remove file',
  
  // Optional sample
  sampleText = null,
  onSampleClick = null,
  
  // Styling
  className = '',
  disabled = false
}) => {
  return (
    <div className={`file-upload ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="file-upload-header">
          {title && <h3 className="file-upload-title">{title}</h3>}
          {subtitle && <p className="file-upload-subtitle">{subtitle}</p>}
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`file-upload-area ${isDragging ? 'dragging' : ''} ${disabled ? 'disabled' : ''}`}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isUploading ? (
          <div className="upload-loading">
            <div className="upload-spinner"></div>
            <p>{uploadingText}</p>
          </div>
        ) : (
          <>
            <div className="upload-icon">📁</div>
            <p className="upload-text">{dragText}</p>
            <p className="upload-or">{orText}</p>
            <label className="upload-button">
              {buttonText}
              <input
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={onFileSelect}
                disabled={disabled}
                style={{ display: 'none' }}
              />
            </label>
            {sampleText && onSampleClick && (
              <button 
                className="upload-sample-button"
                onClick={onSampleClick}
                disabled={disabled}
              >
                {sampleText}
              </button>
            )}
            {supportText && (
              <p className="upload-support">{supportText}</p>
            )}
          </>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="file-upload-error">
          ⚠️ {error}
        </div>
      )}

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <div className="file-upload-list">
          <div className="file-list-header">
            <span>{files.length} {files.length === 1 ? fileText : filesText} {filesSelectedText}</span>
            {onClearAll && (
              <button
                className="file-list-clear"
                onClick={onClearAll}
              >
                {clearAllText}
              </button>
            )}
          </div>
          <div className="file-list-items">
            {files.map((file, index) => (
              <div key={file.id || index} className="file-list-item">
                <div className="file-info">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">{file.sizeText || ''}</span>
                </div>
                {onRemoveFile && (
                  <button
                    className="file-remove"
                    onClick={() => onRemoveFile(file.id || index)}
                    aria-label={removeFileLabel}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

FileUpload.propTypes = {
  // State
  isDragging: PropTypes.bool,
  isUploading: PropTypes.bool,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      sizeText: PropTypes.string
    })
  ),
  error: PropTypes.string,
  
  // Handlers
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,
  onFileSelect: PropTypes.func,
  onRemoveFile: PropTypes.func,
  onClearAll: PropTypes.func,
  
  // Configuration
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  maxFiles: PropTypes.number,
  
  // Content
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dragText: PropTypes.string.isRequired,
  orText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  supportText: PropTypes.string,
  uploadingText: PropTypes.string,
  filesSelectedText: PropTypes.string,
  fileText: PropTypes.string,
  filesText: PropTypes.string,
  clearAllText: PropTypes.string,
  removeFileLabel: PropTypes.string,
  sampleText: PropTypes.string,
  onSampleClick: PropTypes.func,
  
  // Styling
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default FileUpload

