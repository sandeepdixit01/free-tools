/**
 * JSONToCSVControls Component
 * Custom controls for JSON to CSV Converter tool
 * Provides JSON input area, conversion options, and CSV output
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './JSONToCSVControls.css';

const JSONToCSVControls = ({
  onProcess = null,
  uiText,
  isProcessing = false,
  toolInstance,
  settings = {}
}) => {
  const [jsonInput, setJsonInput] = useState('');
  const [csvOutput, setCsvOutput] = useState('');
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);
  const [delimiter, setDelimiter] = useState(',');
  const [includeHeaders, setIncludeHeaders] = useState(true);

  // Convert JSON to CSV
  const convertToCSV = useCallback(async () => {
    if (!jsonInput.trim()) {
      setError(uiText.messages?.emptyInput || 'Please enter JSON data');
      setCsvOutput('');
      setStats(null);
      return;
    }

    setError(null);

    try {
      const result = toolInstance.convertToCSV(jsonInput, {
        delimiter,
        includeHeaders
      });

      if (result.success) {
        setCsvOutput(result.csv);
        setStats({
          rows: result.rowCount,
          columns: result.columnCount
        });
        setError(null);

        // Notify parent component
        if (onProcess) {
          onProcess(result);
        }
      } else {
        setError(result.error || uiText.messages?.error);
        setCsvOutput('');
        setStats(null);
      }
    } catch (err) {
      setError(err.message || uiText.messages?.error);
      setCsvOutput('');
      setStats(null);
    }
  }, [jsonInput, delimiter, includeHeaders, toolInstance, onProcess, uiText]);

  // Copy CSV to clipboard
  const copyToClipboard = useCallback(async () => {
    if (!csvOutput) return;

    try {
      await navigator.clipboard.writeText(csvOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [csvOutput]);

  // Paste from clipboard
  const pasteFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setJsonInput(text);
    } catch (err) {
      console.error('Failed to paste:', err);
    }
  }, []);

  // Download CSV file
  const downloadCSV = useCallback(() => {
    if (!csvOutput) return;

    const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'converted.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [csvOutput]);

  // Clear all
  const clearAll = useCallback(() => {
    setJsonInput('');
    setCsvOutput('');
    setError(null);
    setStats(null);
    setCopied(false);
  }, []);

  return (
    <div className="json-to-csv-controls">
      {/* Options Section */}
      <div className="conversion-options">
        <div className="option-group">
          <label htmlFor="delimiter-select">
            {uiText.options?.delimiter || 'Delimiter'}:
          </label>
          <select
            id="delimiter-select"
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value)}
            className="delimiter-select"
          >
            <option value=",">Comma (,)</option>
            <option value=";">Semicolon (;)</option>
            <option value="\t">Tab</option>
            <option value="|">Pipe (|)</option>
          </select>
        </div>

        <div className="option-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={includeHeaders}
              onChange={(e) => setIncludeHeaders(e.target.checked)}
            />
            <span>{uiText.options?.includeHeaders || 'Include Headers'}</span>
          </label>
        </div>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <div className="section-header">
          <label htmlFor="json-input">
            {uiText.inputLabel || 'JSON Input'}
          </label>
          <button
            onClick={pasteFromClipboard}
            className="paste-button"
            type="button"
            title="Paste from clipboard"
          >
            📋 {uiText.buttons?.paste || 'Paste'}
          </button>
        </div>
        <textarea
          id="json-input"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder={uiText.inputPlaceholder || 'Paste your JSON here...'}
          className="json-input"
          rows={12}
        />
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          onClick={convertToCSV}
          disabled={isProcessing || !jsonInput.trim()}
          className="convert-button primary-button"
          type="button"
        >
          {isProcessing
            ? (uiText.messages?.processing || 'Converting...')
            : (uiText.buttons?.convert || 'Convert to CSV')}
        </button>
        <button
          onClick={clearAll}
          className="clear-button secondary-button"
          type="button"
        >
          {uiText.buttons?.clear || 'Clear'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Stats */}
      {stats && (
        <div className="conversion-stats">
          <span className="stat-item">
            ✅ {stats.rows} {uiText.stats?.rows || 'rows'}
          </span>
          <span className="stat-separator">•</span>
          <span className="stat-item">
            {stats.columns} {uiText.stats?.columns || 'columns'}
          </span>
          <span className="stat-separator">•</span>
          <span className="stat-item">
            {uiText.stats?.generated || 'generated'}
          </span>
        </div>
      )}

      {/* Output Section */}
      <div className="output-section">
        <div className="section-header">
          <label htmlFor="csv-output">
            {uiText.outputLabel || 'CSV Output'}
          </label>
          <div className="output-actions">
            <button
              onClick={copyToClipboard}
              disabled={!csvOutput}
              className={`copy-button ${copied ? 'copied' : ''}`}
              type="button"
              title="Copy to clipboard"
            >
              {copied ? '✓ Copied!' : `📋 ${uiText.buttons?.copy || 'Copy'}`}
            </button>
            <button
              onClick={downloadCSV}
              disabled={!csvOutput}
              className="download-button"
              type="button"
              title="Download CSV file"
            >
              💾 {uiText.buttons?.download || 'Download CSV'}
            </button>
          </div>
        </div>
        <textarea
          id="csv-output"
          value={csvOutput}
          readOnly
          placeholder={uiText.outputPlaceholder || 'CSV output will appear here...'}
          className="csv-output"
          rows={12}
        />
      </div>
    </div>
  );
};

JSONToCSVControls.propTypes = {
  onProcess: PropTypes.func,
  uiText: PropTypes.shape({
    inputLabel: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    outputLabel: PropTypes.string,
    outputPlaceholder: PropTypes.string,
    buttons: PropTypes.shape({
      convert: PropTypes.string,
      copy: PropTypes.string,
      download: PropTypes.string,
      clear: PropTypes.string,
      paste: PropTypes.string
    }),
    options: PropTypes.shape({
      delimiter: PropTypes.string,
      includeHeaders: PropTypes.string
    }),
    messages: PropTypes.shape({
      success: PropTypes.string,
      copied: PropTypes.string,
      error: PropTypes.string,
      emptyInput: PropTypes.string,
      processing: PropTypes.string
    }),
    stats: PropTypes.shape({
      rows: PropTypes.string,
      columns: PropTypes.string,
      generated: PropTypes.string
    })
  }).isRequired,
  isProcessing: PropTypes.bool,
  toolInstance: PropTypes.object.isRequired,
  settings: PropTypes.object
};

export default JSONToCSVControls;
