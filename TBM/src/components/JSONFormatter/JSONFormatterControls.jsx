/**
 * JSONFormatterControls Component
 * Custom controls for JSON Formatter tool
 * Provides text input area, action buttons, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './JSONFormatterControls.css';

const JSONFormatterControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [jsonInput, setJsonInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [action, setAction] = useState('format');
  const [copied, setCopied] = useState(false);

  // Process JSON
  const processJSON = useCallback(async (selectedAction) => {
    if (!jsonInput.trim()) {
      setError(uiText.messages?.emptyInput || 'Please enter JSON');
      setResult(null);
      return;
    }

    const processResult = await toolInstance.process(
      { text: jsonInput },
      { ...settings, action: selectedAction }
    );

    if (processResult.success) {
      setResult(processResult.result);
      setError(null);
      
      // Notify parent component
      if (onProcess) {
        onProcess(processResult);
      }
    } else {
      setError(processResult.errorMessage || processResult.error);
      setResult(null);
    }
  }, [jsonInput, toolInstance, settings, onProcess, uiText]);

  const handleFormat = useCallback(() => {
    setAction('format');
    processJSON('format');
  }, [processJSON]);

  const handleMinify = useCallback(() => {
    setAction('minify');
    processJSON('minify');
  }, [processJSON]);

  const handleClear = useCallback(() => {
    setJsonInput('');
    setResult(null);
    setError(null);
    setCopied(false);
  }, []);

  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setJsonInput(clipboardText);
      setError(null);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  }, []);

  const handleCopy = useCallback(async () => {
    if (!result) return;
    
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [result]);

  const handleInputChange = useCallback((e) => {
    setJsonInput(e.target.value);
    setError(null);
  }, []);

  return (
    <div className="json-formatter-controls">
      {/* Input Section */}
      <div className="json-formatter-input-section">
        <div className="json-formatter-input-header">
          <label htmlFor="json-input" className="json-formatter-label">
            {uiText.input?.label || 'JSON Input'}
          </label>
          <div className="json-formatter-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="json-formatter-btn json-formatter-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="json-formatter-btn json-formatter-btn-secondary"
              disabled={!jsonInput}
              title={uiText.input?.clearButton || 'Clear'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear'}
            </button>
          </div>
        </div>
        
        <textarea
          id="json-input"
          className="json-formatter-textarea"
          value={jsonInput}
          onChange={handleInputChange}
          placeholder={uiText.input?.placeholder || 'Paste your JSON here...'}
          rows={12}
        />

        {/* Action Buttons */}
        <div className="json-formatter-button-group">
          <button
            type="button"
            onClick={handleFormat}
            className="json-formatter-btn json-formatter-btn-primary"
            disabled={!jsonInput.trim() || isProcessing}
          >
            🎨 {uiText.actions?.format || 'Format'}
          </button>
          <button
            type="button"
            onClick={handleMinify}
            className="json-formatter-btn json-formatter-btn-primary"
            disabled={!jsonInput.trim() || isProcessing}
          >
            📦 {uiText.actions?.minify || 'Minify'}
          </button>
        </div>
      </div>

      {/* Result Section */}
      {(result || error) && (
        <div className="json-formatter-result-section">
          <div className="json-formatter-result-header">
            <h3 className="json-formatter-result-title">
              {uiText.results?.title || 'Result'}
            </h3>
            {result && (
              <button
                type="button"
                onClick={handleCopy}
                className="json-formatter-btn json-formatter-btn-secondary"
                title={uiText.results?.copyButton || 'Copy'}
              >
                {copied ? '✅' : '📋'} {copied ? (uiText.results?.copiedButton || 'Copied!') : (uiText.results?.copyButton || 'Copy')}
              </button>
            )}
          </div>

          {error && (
            <div className="json-formatter-error">
              <div className="json-formatter-error-icon">❌</div>
              <div className="json-formatter-error-content">
                <div className="json-formatter-error-title">
                  {uiText.messages?.invalidJson || 'Invalid JSON'}
                </div>
                <div className="json-formatter-error-message">
                  {error}
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="json-formatter-result">
              <pre className="json-formatter-result-pre">
                <code>{result}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!result && !error && (
        <div className="json-formatter-empty-state">
          <div className="json-formatter-empty-icon">📝</div>
          <p className="json-formatter-empty-message">
            {uiText.messages?.emptyInput || 'Paste JSON to format, minify, or validate'}
          </p>
        </div>
      )}
    </div>
  );
};

JSONFormatterControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default JSONFormatterControls;

