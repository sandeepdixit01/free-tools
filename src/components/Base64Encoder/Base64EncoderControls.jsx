/**
 * Base64EncoderControls Component
 * Custom controls for Base64 Encoder/Decoder tool
 * Provides text input area, action buttons, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Base64EncoderControls.css';

const Base64EncoderControls = ({
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
    <div className="base64-encoder-controls">
      {/* Input Section */}
      <div className="base64-encoder-input-section">
        <div className="base64-encoder-input-header">
          <label htmlFor="base64-input" className="base64-encoder-label">
            {uiText.input?.label || 'Input Text'}
          </label>
          <div className="base64-encoder-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="base64-encoder-btn base64-encoder-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="base64-encoder-btn base64-encoder-btn-secondary"
              disabled={!textInput}
              title={uiText.input?.clearButton || 'Clear'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear'}
            </button>
          </div>
        </div>
        
        <textarea
          id="base64-input"
          className="base64-encoder-textarea"
          value={textInput}
          onChange={handleInputChange}
          placeholder={uiText.input?.placeholder || 'Enter text to encode or Base64 string to decode...'}
          rows={12}
        />

        {/* Action Buttons */}
        <div className="base64-encoder-button-group">
          <button
            type="button"
            onClick={handleEncode}
            className="base64-encoder-btn base64-encoder-btn-primary"
            disabled={!textInput.trim() || isProcessing}
          >
            🔐 {uiText.actions?.encode || 'Encode to Base64'}
          </button>
          <button
            type="button"
            onClick={handleDecode}
            className="base64-encoder-btn base64-encoder-btn-primary"
            disabled={!textInput.trim() || isProcessing}
          >
            🔓 {uiText.actions?.decode || 'Decode from Base64'}
          </button>
        </div>
      </div>

      {/* Result Section */}
      {(result || error) && (
        <div className="base64-encoder-result-section">
          <div className="base64-encoder-result-header">
            <h3 className="base64-encoder-result-title">
              {uiText.results?.title || 'Result'}
            </h3>
            {result && (
              <button
                type="button"
                onClick={handleCopy}
                className="base64-encoder-btn base64-encoder-btn-secondary"
                title={uiText.results?.copyButton || 'Copy'}
              >
                {copied ? '✅' : '📋'} {copied ? (uiText.results?.copiedButton || 'Copied!') : (uiText.results?.copyButton || 'Copy')}
              </button>
            )}
          </div>

          {error && (
            <div className="base64-encoder-error">
              <div className="base64-encoder-error-icon">❌</div>
              <div className="base64-encoder-error-content">
                <div className="base64-encoder-error-title">
                  {uiText.messages?.invalidBase64 || 'Error'}
                </div>
                <div className="base64-encoder-error-message">
                  {error}
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="base64-encoder-result">
              <pre className="base64-encoder-result-pre">
                <code>{result}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!result && !error && (
        <div className="base64-encoder-empty-state">
          <div className="base64-encoder-empty-icon">🔐</div>
          <p className="base64-encoder-empty-message">
            {uiText.messages?.emptyInput || 'Enter text to encode or Base64 string to decode'}
          </p>
        </div>
      )}
    </div>
  );
};

Base64EncoderControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default Base64EncoderControls;

