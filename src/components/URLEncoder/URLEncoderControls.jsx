/**
 * URLEncoderControls Component
 * Custom controls for URL Encoder/Decoder tool
 * Provides text input area, action buttons, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './URLEncoderControls.css';

const URLEncoderControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [action, setAction] = useState('encode');
  const [copied, setCopied] = useState(false);

  // Process text
  const processText = useCallback(async (selectedAction) => {
    if (!textInput.trim()) {
      setError(uiText.messages?.emptyInput || 'Please enter text');
      setResult(null);
      return;
    }

    const processResult = await toolInstance.process(
      { text: textInput },
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
  }, [textInput, toolInstance, settings, onProcess, uiText]);

  const handleEncode = useCallback(() => {
    setAction('encode');
    processText('encode');
  }, [processText]);

  const handleDecode = useCallback(() => {
    setAction('decode');
    processText('decode');
  }, [processText]);

  const handleClear = useCallback(() => {
    setTextInput('');
    setResult(null);
    setError(null);
    setCopied(false);
  }, []);

  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setTextInput(clipboardText);
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
    setTextInput(e.target.value);
    setError(null);
  }, []);

  return (
    <div className="url-encoder-controls">
      {/* Input Section */}
      <div className="url-encoder-input-section">
        <div className="url-encoder-input-header">
          <label htmlFor="url-input" className="url-encoder-label">
            {uiText.input?.label || 'Input Text'}
          </label>
          <div className="url-encoder-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="url-encoder-btn url-encoder-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="url-encoder-btn url-encoder-btn-secondary"
              disabled={!textInput}
              title={uiText.input?.clearButton || 'Clear'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear'}
            </button>
          </div>
        </div>
        
        <textarea
          id="url-input"
          className="url-encoder-textarea"
          value={textInput}
          onChange={handleInputChange}
          placeholder={uiText.input?.placeholder || 'Enter text/URL to encode or URL-encoded string to decode...'}
          rows={12}
        />

        {/* Action Buttons */}
        <div className="url-encoder-button-group">
          <button
            type="button"
            onClick={handleEncode}
            className="url-encoder-btn url-encoder-btn-primary"
            disabled={!textInput.trim() || isProcessing}
          >
            🔗 {uiText.actions?.encode || 'Encode URL'}
          </button>
          <button
            type="button"
            onClick={handleDecode}
            className="url-encoder-btn url-encoder-btn-primary"
            disabled={!textInput.trim() || isProcessing}
          >
            🔓 {uiText.actions?.decode || 'Decode URL'}
          </button>
        </div>
      </div>

      {/* Result Section */}
      {(result || error) && (
        <div className="url-encoder-result-section">
          <div className="url-encoder-result-header">
            <h3 className="url-encoder-result-title">
              {uiText.results?.title || 'Result'}
            </h3>
            {result && (
              <button
                type="button"
                onClick={handleCopy}
                className="url-encoder-btn url-encoder-btn-secondary"
                title={uiText.results?.copyButton || 'Copy'}
              >
                {copied ? '✅' : '📋'} {copied ? (uiText.results?.copiedButton || 'Copied!') : (uiText.results?.copyButton || 'Copy')}
              </button>
            )}
          </div>

          {error && (
            <div className="url-encoder-error">
              <div className="url-encoder-error-icon">❌</div>
              <div className="url-encoder-error-content">
                <div className="url-encoder-error-title">
                  {uiText.messages?.invalidEncoded || 'Error'}
                </div>
                <div className="url-encoder-error-message">
                  {error}
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="url-encoder-result">
              <pre className="url-encoder-result-pre">
                <code>{result}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!result && !error && (
        <div className="url-encoder-empty-state">
          <div className="url-encoder-empty-icon">🔗</div>
          <p className="url-encoder-empty-message">
            {uiText.messages?.emptyInput || 'Enter text/URL to encode or URL-encoded string to decode'}
          </p>
        </div>
      )}
    </div>
  );
};

URLEncoderControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default URLEncoderControls;

