/**
 * RemoveExtraSpacesControls Component
 * Custom controls for Remove Extra Spaces tool
 * Provides text input area, clean button, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './RemoveExtraSpacesControls.css';

const RemoveExtraSpacesControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  // Handle text input change
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
    // Clear result when text changes
    setResult(null);
  }, []);

  // Handle clean button click
  const handleClean = useCallback(async () => {
    if (toolInstance && text) {
      const processResult = await toolInstance.process({ text }, settings);
      
      if (processResult.success) {
        setResult(processResult);
        // Notify parent component
        if (onProcess) {
          onProcess(processResult);
        }
      }
    }
  }, [text, toolInstance, settings, onProcess]);

  // Handle clear
  const handleClear = useCallback(() => {
    setText('');
    setResult(null);
    setCopied(false);
  }, []);

  // Handle paste
  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
      setResult(null);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  }, []);

  // Handle copy to clipboard
  const handleCopy = useCallback(async () => {
    if (result?.result) {
      try {
        await navigator.clipboard.writeText(result.result);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  }, [result]);

  return (
    <div className="remove-spaces-controls">
      {/* Text Input Section */}
      <div className="remove-spaces-input-section">
        <div className="remove-spaces-input-header">
          <label htmlFor="text-input" className="remove-spaces-label">
            {uiText.input?.label || 'Enter Your Text'}
          </label>
          <div className="remove-spaces-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="remove-spaces-btn remove-spaces-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="remove-spaces-btn remove-spaces-btn-secondary"
              disabled={!text}
              title={uiText.input?.clearButton || 'Clear Text'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear Text'}
            </button>
          </div>
        </div>
        
        <textarea
          id="text-input"
          className="remove-spaces-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder={uiText.input?.placeholder || 'Paste your text with extra spaces here...'}
          rows={10}
        />

        {/* Clean Button */}
        <div className="remove-spaces-action-section">
          <button
            type="button"
            onClick={handleClean}
            className="remove-spaces-btn remove-spaces-btn-primary remove-spaces-btn-large"
            disabled={!text || isProcessing}
          >
            🧹 {isProcessing ? (uiText.action?.processing || 'Cleaning...') : (uiText.action?.cleanButton || 'Remove Extra Spaces')}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="remove-spaces-results-section">
          <div className="remove-spaces-results-header">
            <h3 className="remove-spaces-results-title">
              {uiText.results?.title || 'Cleaned Text'}
            </h3>
            <div className="remove-spaces-results-actions">
              {result.metadata?.spacesRemoved > 0 && (
                <span className="remove-spaces-stats">
                  {uiText.results?.stats?.replace('{count}', result.metadata.spacesRemoved) || `Removed ${result.metadata.spacesRemoved} extra spaces`}
                </span>
              )}
              {navigator.clipboard && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="remove-spaces-btn remove-spaces-btn-primary"
                  title={uiText.results?.copyButton || 'Copy to Clipboard'}
                >
                  {copied ? '✓ ' + (uiText.results?.copiedMessage || 'Copied!') : '📋 ' + (uiText.results?.copyButton || 'Copy to Clipboard')}
                </button>
              )}
            </div>
          </div>
          
          <div className="remove-spaces-result-box">
            {result.metadata?.hasChanges ? (
              <pre className="remove-spaces-result-text">{result.result}</pre>
            ) : (
              <p className="remove-spaces-no-changes">
                {uiText.messages?.noChanges || 'No extra spaces found'}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!text && !result && (
        <div className="remove-spaces-empty-state">
          <p className="remove-spaces-empty-message">
            {uiText.messages?.emptyText || 'Paste some text to clean up extra spaces'}
          </p>
        </div>
      )}
    </div>
  );
};

RemoveExtraSpacesControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default RemoveExtraSpacesControls;

