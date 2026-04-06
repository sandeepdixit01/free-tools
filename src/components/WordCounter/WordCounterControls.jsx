/**
 * WordCounterControls Component
 * Custom controls for Word Counter tool
 * Provides text input area and displays statistics
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './WordCounterControls.css';

const WordCounterControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState(null);

  // Process text whenever it changes
  useEffect(() => {
    const processText = async () => {
      if (toolInstance) {
        const result = await toolInstance.process({ text }, settings);
        if (result.success) {
          setStats(result.stats);
          // Notify parent component
          if (onProcess) {
            onProcess(result);
          }
        }
      }
    };

    processText();
  }, [text, toolInstance, settings, onProcess]);

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setText('');
    setStats(null);
  }, []);

  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  }, []);

  // Format reading time
  const formatReadingTime = (readingTime) => {
    if (!readingTime) return '0 seconds';
    
    const { minutes, seconds } = readingTime;
    
    if (minutes === 0) {
      return `${seconds} ${uiText.results?.seconds || 'seconds'}`;
    } else if (minutes === 1 && seconds === 0) {
      return `1 ${uiText.results?.minute || 'minute'}`;
    } else if (seconds === 0) {
      return `${minutes} ${uiText.results?.minutes || 'minutes'}`;
    } else {
      return `${minutes} ${uiText.results?.minutes || 'minutes'} ${seconds} ${uiText.results?.seconds || 'seconds'}`;
    }
  };

  return (
    <div className="word-counter-controls">
      {/* Text Input Section */}
      <div className="word-counter-input-section">
        <div className="word-counter-input-header">
          <label htmlFor="text-input" className="word-counter-label">
            {uiText.input?.label || 'Enter Your Text'}
          </label>
          <div className="word-counter-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="word-counter-btn word-counter-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="word-counter-btn word-counter-btn-secondary"
              disabled={!text}
              title={uiText.input?.clearButton || 'Clear Text'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear Text'}
            </button>
          </div>
        </div>
        
        <textarea
          id="text-input"
          className="word-counter-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder={uiText.input?.placeholder || 'Type or paste your text here...'}
          rows={12}
        />
      </div>

      {/* Statistics Section */}
      <div className="word-counter-results-section">
        <h3 className="word-counter-results-title">
          {uiText.results?.title || 'Text Statistics'}
        </h3>
        
        {!text && (
          <p className="word-counter-empty-message">
            {uiText.messages?.emptyText || 'Enter some text to see statistics'}
          </p>
        )}

        {text && stats && (
          <div className="word-counter-stats-grid">
            <div className="word-counter-stat-card">
              <div className="word-counter-stat-icon">📝</div>
              <div className="word-counter-stat-content">
                <div className="word-counter-stat-value">{stats.words}</div>
                <div className="word-counter-stat-label">
                  {uiText.results?.words || 'Words'}
                </div>
              </div>
            </div>

            <div className="word-counter-stat-card">
              <div className="word-counter-stat-icon">🔤</div>
              <div className="word-counter-stat-content">
                <div className="word-counter-stat-value">{stats.charactersWithSpaces}</div>
                <div className="word-counter-stat-label">
                  {uiText.results?.charactersWithSpaces || 'Characters (with spaces)'}
                </div>
              </div>
            </div>

            <div className="word-counter-stat-card">
              <div className="word-counter-stat-icon">🔡</div>
              <div className="word-counter-stat-content">
                <div className="word-counter-stat-value">{stats.charactersWithoutSpaces}</div>
                <div className="word-counter-stat-label">
                  {uiText.results?.charactersWithoutSpaces || 'Characters (without spaces)'}
                </div>
              </div>
            </div>

            <div className="word-counter-stat-card">
              <div className="word-counter-stat-icon">📄</div>
              <div className="word-counter-stat-content">
                <div className="word-counter-stat-value">{stats.sentences}</div>
                <div className="word-counter-stat-label">
                  {uiText.results?.sentences || 'Sentences'}
                </div>
              </div>
            </div>

            <div className="word-counter-stat-card">
              <div className="word-counter-stat-icon">📋</div>
              <div className="word-counter-stat-content">
                <div className="word-counter-stat-value">{stats.paragraphs}</div>
                <div className="word-counter-stat-label">
                  {uiText.results?.paragraphs || 'Paragraphs'}
                </div>
              </div>
            </div>

            <div className="word-counter-stat-card word-counter-stat-card-highlight">
              <div className="word-counter-stat-icon">⏱️</div>
              <div className="word-counter-stat-content">
                <div className="word-counter-stat-value">
                  {formatReadingTime(stats.readingTime)}
                </div>
                <div className="word-counter-stat-label">
                  {uiText.results?.readingTime || 'Reading Time'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

WordCounterControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default WordCounterControls;

