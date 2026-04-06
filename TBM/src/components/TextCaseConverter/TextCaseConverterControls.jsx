/**
 * TextCaseConverterControls Component
 * Custom controls for Text Case Converter tool
 * Provides text input area, case selection buttons, and result display
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './TextCaseConverterControls.css';

const TextCaseConverterControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [text, setText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [selectedCase, setSelectedCase] = useState('uppercase');
  const [copied, setCopied] = useState(false);

  // Handle text input change
  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // Handle case conversion
  const handleConvert = useCallback(async (caseType) => {
    setSelectedCase(caseType);
    
    if (toolInstance && text) {
      const result = await toolInstance.process(
        { text },
        { ...settings, caseType }
      );
      
      if (result.success) {
        setConvertedText(result.result);
        // Notify parent component
        if (onProcess) {
          onProcess(result);
        }
      }
    } else {
      setConvertedText('');
    }
  }, [text, toolInstance, settings, onProcess]);

  // Handle clear
  const handleClear = useCallback(() => {
    setText('');
    setConvertedText('');
    setCopied(false);
  }, []);

  // Handle paste
  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  }, []);

  // Handle copy to clipboard
  const handleCopy = useCallback(async () => {
    if (convertedText) {
      try {
        await navigator.clipboard.writeText(convertedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  }, [convertedText]);

  // Get case options from config
  const caseOptions = [
    {
      id: 'uppercase',
      name: uiText.caseOptions?.uppercase || 'UPPERCASE',
      icon: '🔠'
    },
    {
      id: 'lowercase',
      name: uiText.caseOptions?.lowercase || 'lowercase',
      icon: '🔡'
    },
    {
      id: 'titleCase',
      name: uiText.caseOptions?.titleCase || 'Title Case',
      icon: '🔤'
    },
    {
      id: 'sentenceCase',
      name: uiText.caseOptions?.sentenceCase || 'Sentence case',
      icon: '📝'
    },
    {
      id: 'capitalize',
      name: uiText.caseOptions?.capitalize || 'Capitalize',
      icon: '✨'
    }
  ];

  return (
    <div className="text-case-converter-controls">
      {/* Text Input Section */}
      <div className="text-case-input-section">
        <div className="text-case-input-header">
          <label htmlFor="text-input" className="text-case-label">
            {uiText.input?.label || 'Enter Your Text'}
          </label>
          <div className="text-case-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="text-case-btn text-case-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="text-case-btn text-case-btn-secondary"
              disabled={!text}
              title={uiText.input?.clearButton || 'Clear Text'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear Text'}
            </button>
          </div>
        </div>
        
        <textarea
          id="text-input"
          className="text-case-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder={uiText.input?.placeholder || 'Type or paste your text here...'}
          rows={8}
        />
      </div>

      {/* Case Options Section */}
      <div className="text-case-options-section">
        <h3 className="text-case-options-title">
          {uiText.caseOptions?.title || 'Select Case'}
        </h3>
        
        <div className="text-case-options-grid">
          {caseOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleConvert(option.id)}
              className={`text-case-option-btn ${selectedCase === option.id ? 'active' : ''}`}
              disabled={!text || isProcessing}
            >
              <span className="text-case-option-icon">{option.icon}</span>
              <span className="text-case-option-name">{option.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      {convertedText && (
        <div className="text-case-results-section">
          <div className="text-case-results-header">
            <h3 className="text-case-results-title">
              {uiText.results?.title || 'Converted Text'}
            </h3>
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handleCopy}
                className="text-case-btn text-case-btn-primary"
                title={uiText.results?.copyButton || 'Copy to Clipboard'}
              >
                {copied ? '✓ ' + (uiText.results?.copiedMessage || 'Copied!') : '📋 ' + (uiText.results?.copyButton || 'Copy to Clipboard')}
              </button>
            )}
          </div>
          
          <div className="text-case-result-box">
            <pre className="text-case-result-text">{convertedText}</pre>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!text && (
        <div className="text-case-empty-state">
          <p className="text-case-empty-message">
            {uiText.messages?.emptyText || 'Enter some text to convert'}
          </p>
        </div>
      )}
    </div>
  );
};

TextCaseConverterControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default TextCaseConverterControls;

