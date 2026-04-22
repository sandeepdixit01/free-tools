/**
 * WordSorterControls Component
 * Custom controls for Word Sorter tool
 * Provides text input area, sort options, sort button, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './WordSorterControls.css';

const WordSorterControls = ({
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
  const [sortOrder, setSortOrder] = useState(settings.defaultOrder || 'asc');
  const [caseSensitive, setCaseSensitive] = useState(settings.defaultCaseSensitive === true);
  const [trimLines, setTrimLines] = useState(settings.defaultTrimLines !== false);
  const [removeEmpty, setRemoveEmpty] = useState(settings.defaultRemoveEmpty === true);

  // Handle text input change
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
    // Clear result when text changes
    setResult(null);
  }, []);

  // Handle sort button click
  const handleSort = useCallback(async () => {
    if (toolInstance && text) {
      const processResult = await toolInstance.process(
        { text },
        { order: sortOrder, caseSensitive, trimLines, removeEmpty }
      );

      if (processResult.success) {
        setResult(processResult);
        // Notify parent component
        if (onProcess) {
          onProcess(processResult);
        }
      }
    }
  }, [text, toolInstance, sortOrder, caseSensitive, trimLines, removeEmpty, onProcess]);

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
    setSortOrder(settings.defaultOrder || 'asc');
    setCaseSensitive(settings.defaultCaseSensitive === true);
    setTrimLines(settings.defaultTrimLines !== false);
    setRemoveEmpty(settings.defaultRemoveEmpty === true);
  }, [settings]);

  return (
    <div className="word-sorter-controls">
      {/* Text Input Section */}
      <div className="word-sorter-input-section">
        <div className="word-sorter-input-header">
          <label htmlFor="text-input" className="word-sorter-label">
            {uiText.input?.label || 'Enter Your Text'}
          </label>
          <div className="word-sorter-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="word-sorter-btn word-sorter-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="word-sorter-btn word-sorter-btn-secondary"
              disabled={!text}
              title={uiText.input?.clearButton || 'Clear Text'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear'}
            </button>
          </div>
        </div>

        <textarea
          id="text-input"
          className="word-sorter-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder={uiText.input?.placeholder || 'Paste your text lines here to sort...'}
          rows={10}
        />

        {/* Options Section */}
        <div className="word-sorter-options">
          {/* Sort Order Radio Buttons */}
          <div className="word-sorter-option-group">
            <label className="word-sorter-option-label">
              {uiText.options?.sortOrder || 'Sort Order:'}
            </label>
            <div className="word-sorter-radio-group">
              <label className="word-sorter-radio">
                <input
                  type="radio"
                  name="sortOrder"
                  value="asc"
                  checked={sortOrder === 'asc'}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
                <span>⬆️ {uiText.options?.ascending || 'Ascending (A-Z)'}</span>
              </label>
              <label className="word-sorter-radio">
                <input
                  type="radio"
                  name="sortOrder"
                  value="desc"
                  checked={sortOrder === 'desc'}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
                <span>⬇️ {uiText.options?.descending || 'Descending (Z-A)'}</span>
              </label>
            </div>
          </div>

          {/* Checkbox Options */}
          <div className="word-sorter-checkbox-group">
            <label className="word-sorter-option">
              <input
                type="checkbox"
                checked={caseSensitive}
                onChange={(e) => setCaseSensitive(e.target.checked)}
              />
              <span>{uiText.options?.caseSensitive || 'Case Sensitive'}</span>
            </label>

            <label className="word-sorter-option">
              <input
                type="checkbox"
                checked={trimLines}
                onChange={(e) => setTrimLines(e.target.checked)}
              />
              <span>{uiText.options?.trimLines || 'Trim Lines'}</span>
            </label>

            <label className="word-sorter-option">
              <input
                type="checkbox"
                checked={removeEmpty}
                onChange={(e) => setRemoveEmpty(e.target.checked)}
              />
              <span>{uiText.options?.removeEmpty || 'Remove Empty Lines'}</span>
            </label>
          </div>
        </div>

        {/* Sort Button */}
        <div className="word-sorter-action-section">
          <button
            type="button"
            onClick={handleSort}
            className="word-sorter-btn word-sorter-btn-primary word-sorter-btn-large"
            disabled={!text || isProcessing}
          >
            🔤 {isProcessing ? (uiText.messages?.processing || 'Sorting...') : (uiText.controls?.sortButton || 'Sort Lines')}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="word-sorter-results-section">
          <div className="word-sorter-results-header">
            <h3 className="word-sorter-results-title">
              {uiText.output?.label || 'Sorted Result'}
            </h3>
            <div className="word-sorter-results-actions">
              {navigator.clipboard && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="word-sorter-btn word-sorter-btn-primary"
                  title={uiText.controls?.copyButton || 'Copy to Clipboard'}
                >
                  {copied ? '✓ ' + (uiText.controls?.copiedButton || 'Copied!') : '📋 ' + (uiText.controls?.copyButton || 'Copy Result')}
                </button>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="word-sorter-btn word-sorter-btn-secondary"
                title={uiText.controls?.resetButton || 'Reset'}
              >
                🔄 {uiText.controls?.resetButton || 'Reset'}
              </button>
            </div>
          </div>

          {/* Statistics */}
          {result.metadata && (
            <div className="word-sorter-stats">
              <div className="word-sorter-stat">
                <span className="word-sorter-stat-label">
                  {uiText.stats?.totalLines || 'Total Lines'}:
                </span>
                <span className="word-sorter-stat-value">
                  {result.metadata.totalLines}
                </span>
              </div>
              <div className="word-sorter-stat">
                <span className="word-sorter-stat-label">
                  {uiText.stats?.processedLines || 'Processed Lines'}:
                </span>
                <span className="word-sorter-stat-value">
                  {result.metadata.processedLines}
                </span>
              </div>
              {result.metadata.emptyLinesRemoved > 0 && (
                <div className="word-sorter-stat">
                  <span className="word-sorter-stat-label">
                    {uiText.stats?.emptyLinesRemoved || 'Empty Lines Removed'}:
                  </span>
                  <span className="word-sorter-stat-value">
                    {result.metadata.emptyLinesRemoved}
                  </span>
                </div>
              )}
              <div className="word-sorter-stat">
                <span className="word-sorter-stat-label">
                  Sort Order:
                </span>
                <span className="word-sorter-stat-value">
                  {result.metadata.settings.order === 'asc' ? '⬆️ A-Z' : '⬇️ Z-A'}
                </span>
              </div>
            </div>
          )}

          <div className="word-sorter-result-box">
            {result.metadata?.hasChanges ? (
              <pre className="word-sorter-result-text">{result.result}</pre>
            ) : (
              <p className="word-sorter-no-changes">
                {uiText.messages?.noChanges || 'Text is already sorted'}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!text && !result && (
        <div className="word-sorter-empty-state">
          <div className="word-sorter-empty-icon">🔤</div>
          <p className="word-sorter-empty-message">
            {uiText.output?.emptyState || 'Paste your text lines to get started'}
          </p>
        </div>
      )}
    </div>
  );
};

WordSorterControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default WordSorterControls;
