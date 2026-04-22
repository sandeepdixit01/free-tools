/**
 * RemoveDuplicateLinesControls Component
 * Custom controls for Remove Duplicate Lines tool
 * Provides text input area, options, process button, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './RemoveDuplicateLinesControls.css';

const RemoveDuplicateLinesControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  
  // Options state
  const [caseSensitive, setCaseSensitive] = useState(settings.defaultCaseSensitive !== false);
  const [trimLines, setTrimLines] = useState(settings.defaultTrimLines !== false);
  const [removeEmpty, setRemoveEmpty] = useState(settings.defaultRemoveEmpty === true);

  // Handle text input change
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
    // Clear result when text changes
    setResult(null);
  }, []);

  // Handle process button click
  const handleProcess = useCallback(async () => {
    if (toolInstance && text) {
      const processResult = await toolInstance.process(
        { text },
        { caseSensitive, trimLines, removeEmpty }
      );
      
      if (processResult.success) {
        setResult(processResult);
        // Notify parent component
        if (onProcess) {
          onProcess(processResult);
        }
      }
    }
  }, [text, toolInstance, caseSensitive, trimLines, removeEmpty, onProcess]);

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

  // Handle reset
  const handleReset = useCallback(() => {
    setText('');
    setResult(null);
    setCopied(false);
    setCaseSensitive(settings.defaultCaseSensitive !== false);
    setTrimLines(settings.defaultTrimLines !== false);
    setRemoveEmpty(settings.defaultRemoveEmpty === true);
  }, [settings]);

  return (
    <div className="remove-duplicate-lines-controls">
      {/* Text Input Section */}
      <div className="remove-duplicate-lines-input-section">
        <div className="remove-duplicate-lines-input-header">
          <label htmlFor="text-input" className="remove-duplicate-lines-label">
            {uiText.input?.label || 'Enter Your Text'}
          </label>
          <div className="remove-duplicate-lines-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="remove-duplicate-lines-btn remove-duplicate-lines-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="remove-duplicate-lines-btn remove-duplicate-lines-btn-secondary"
              disabled={!text}
              title={uiText.input?.clearButton || 'Clear Text'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear'}
            </button>
          </div>
        </div>
        
        <textarea
          id="text-input"
          className="remove-duplicate-lines-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder={uiText.input?.placeholder || 'Paste your text with duplicate lines here...'}
          rows={10}
        />

        {/* Options Section */}
        <div className="remove-duplicate-lines-options">
          <label className="remove-duplicate-lines-option">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
            />
            <span>{uiText.options?.caseSensitive || 'Case Sensitive'}</span>
          </label>
          
          <label className="remove-duplicate-lines-option">
            <input
              type="checkbox"
              checked={trimLines}
              onChange={(e) => setTrimLines(e.target.checked)}
            />
            <span>{uiText.options?.trimLines || 'Trim Lines'}</span>
          </label>
          
          <label className="remove-duplicate-lines-option">
            <input
              type="checkbox"
              checked={removeEmpty}
              onChange={(e) => setRemoveEmpty(e.target.checked)}
            />
            <span>{uiText.options?.removeEmpty || 'Remove Empty Lines'}</span>
          </label>
        </div>

        {/* Process Button */}
        <div className="remove-duplicate-lines-action-section">
          <button
            type="button"
            onClick={handleProcess}
            className="remove-duplicate-lines-btn remove-duplicate-lines-btn-primary remove-duplicate-lines-btn-large"
            disabled={!text || isProcessing}
          >
            🧹 {isProcessing ? (uiText.messages?.processing || 'Processing...') : (uiText.controls?.processButton || 'Remove Duplicates')}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="remove-duplicate-lines-results-section">
          <div className="remove-duplicate-lines-results-header">
            <h3 className="remove-duplicate-lines-results-title">
              {uiText.output?.label || 'Result (Unique Lines)'}
            </h3>
            <div className="remove-duplicate-lines-results-actions">
              {navigator.clipboard && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="remove-duplicate-lines-btn remove-duplicate-lines-btn-primary"
                  title={uiText.controls?.copyButton || 'Copy to Clipboard'}
                >
                  {copied ? '✓ ' + (uiText.controls?.copiedButton || 'Copied!') : '📋 ' + (uiText.controls?.copyButton || 'Copy Result')}
                </button>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="remove-duplicate-lines-btn remove-duplicate-lines-btn-secondary"
                title={uiText.controls?.resetButton || 'Reset'}
              >
                🔄 {uiText.controls?.resetButton || 'Reset'}
              </button>
            </div>
          </div>

          {/* Statistics */}
          {result.metadata && (
            <div className="remove-duplicate-lines-stats">
              <div className="remove-duplicate-lines-stat">
                <span className="remove-duplicate-lines-stat-label">
                  {uiText.stats?.totalLines || 'Total Lines'}:
                </span>
                <span className="remove-duplicate-lines-stat-value">
                  {result.metadata.totalLines}
                </span>
              </div>
              <div className="remove-duplicate-lines-stat">
                <span className="remove-duplicate-lines-stat-label">
                  {uiText.stats?.uniqueLines || 'Unique Lines'}:
                </span>
                <span className="remove-duplicate-lines-stat-value">
                  {result.metadata.uniqueLines}
                </span>
              </div>
              <div className="remove-duplicate-lines-stat">
                <span className="remove-duplicate-lines-stat-label">
                  {uiText.stats?.duplicatesRemoved || 'Duplicates Removed'}:
                </span>
                <span className="remove-duplicate-lines-stat-value remove-duplicate-lines-stat-highlight">
                  {result.metadata.duplicatesRemoved}
                </span>
              </div>
              {result.metadata.emptyLinesRemoved > 0 && (
                <div className="remove-duplicate-lines-stat">
                  <span className="remove-duplicate-lines-stat-label">
                    {uiText.stats?.emptyLinesRemoved || 'Empty Lines Removed'}:
                  </span>
                  <span className="remove-duplicate-lines-stat-value">
                    {result.metadata.emptyLinesRemoved}
                  </span>
                </div>
              )}
            </div>
          )}
          
          <div className="remove-duplicate-lines-result-box">
            {result.metadata?.hasChanges ? (
              <pre className="remove-duplicate-lines-result-text">{result.result}</pre>
            ) : (
              <p className="remove-duplicate-lines-no-changes">
                {uiText.messages?.noChanges || 'No duplicate lines found'}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!text && !result && (
        <div className="remove-duplicate-lines-empty-state">
          <div className="remove-duplicate-lines-empty-icon">📝</div>
          <p className="remove-duplicate-lines-empty-message">
            {uiText.output?.emptyState || 'Paste your text with duplicate lines to get started'}
          </p>
        </div>
      )}
    </div>
  );
};

RemoveDuplicateLinesControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default RemoveDuplicateLinesControls;

