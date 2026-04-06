/**
 * CharacterCounterControls Component
 * Custom controls for Character Counter tool
 * Provides text input area and displays character statistics
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './CharacterCounterControls.css';

const CharacterCounterControls = ({
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
          setStats(result.result);
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

  return (
    <div className="character-counter-controls">
      {/* Text Input Section */}
      <div className="character-counter-input-section">
        <div className="character-counter-input-header">
          <label htmlFor="text-input" className="character-counter-label">
            {uiText.input?.label || 'Enter Your Text'}
          </label>
          <div className="character-counter-actions">
            {navigator.clipboard && (
              <button
                type="button"
                onClick={handlePaste}
                className="character-counter-btn character-counter-btn-secondary"
                title={uiText.input?.pasteButton || 'Paste'}
              >
                📋 {uiText.input?.pasteButton || 'Paste'}
              </button>
            )}
            <button
              type="button"
              onClick={handleClear}
              className="character-counter-btn character-counter-btn-secondary"
              disabled={!text}
              title={uiText.input?.clearButton || 'Clear Text'}
            >
              🗑️ {uiText.input?.clearButton || 'Clear Text'}
            </button>
          </div>
        </div>
        
        <textarea
          id="text-input"
          className="character-counter-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder={uiText.input?.placeholder || 'Type or paste your text here...'}
          rows={12}
        />
      </div>

      {/* Statistics Section */}
      <div className="character-counter-results-section">
        <h3 className="character-counter-results-title">
          {uiText.results?.title || 'Character Count'}
        </h3>
        
        {!text && (
          <p className="character-counter-empty-message">
            {uiText.messages?.emptyText || 'Enter some text to see character count'}
          </p>
        )}

        {text && stats && (
          <div className="character-counter-stats-grid">
            <div className="character-counter-stat-card character-counter-stat-card-highlight">
              <div className="character-counter-stat-icon">🔤</div>
              <div className="character-counter-stat-content">
                <div className="character-counter-stat-value">{stats.withSpaces}</div>
                <div className="character-counter-stat-label">
                  {uiText.results?.charactersWithSpaces || 'Characters (with spaces)'}
                </div>
              </div>
            </div>

            <div className="character-counter-stat-card character-counter-stat-card-highlight">
              <div className="character-counter-stat-icon">🔡</div>
              <div className="character-counter-stat-content">
                <div className="character-counter-stat-value">{stats.withoutSpaces}</div>
                <div className="character-counter-stat-label">
                  {uiText.results?.charactersWithoutSpaces || 'Characters (without spaces)'}
                </div>
              </div>
            </div>

            <div className="character-counter-stat-card">
              <div className="character-counter-stat-icon">⎵</div>
              <div className="character-counter-stat-content">
                <div className="character-counter-stat-value">{stats.spacesCount}</div>
                <div className="character-counter-stat-label">
                  {uiText.results?.difference || 'Spaces'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CharacterCounterControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.object.isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default CharacterCounterControls;

