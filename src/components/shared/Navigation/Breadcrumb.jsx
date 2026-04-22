/**
 * Breadcrumb Component
 * Displays navigation breadcrumb: Home > Category > Tool
 * Fully data-driven from tools registry
 */

import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getToolById } from '../../../data/tools';
import './Breadcrumb.css';

// Category name mapping (bilingual)
const CATEGORY_NAMES = {
  image: {
    en: 'Image Tools',
    hi: 'इमेज टूल्स'
  },
  pdf: {
    en: 'PDF Tools',
    hi: 'PDF टूल्स'
  },
  text: {
    en: 'Text Tools',
    hi: 'टेक्स्ट टूल्स'
  },
  developer: {
    en: 'Developer Tools',
    hi: 'डेवलपर टूल्स'
  }
};

const Breadcrumb = ({ toolId }) => {
  const { language } = useLanguage();

  // Get tool data from registry
  const breadcrumbData = useMemo(() => {
    if (!toolId) return null;

    const tool = getToolById(toolId);
    if (!tool) return null;

    return {
      toolName: tool.name[language] || tool.name.en,
      category: tool.category,
      categoryName: CATEGORY_NAMES[tool.category]?.[language] || CATEGORY_NAMES[tool.category]?.en,
      categoryRoute: `/tools/${tool.category}`
    };
  }, [toolId, language]);

  if (!breadcrumbData) return null;

  const homeText = language === 'hi' ? 'होम' : 'Home';

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {/* Home */}
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">
            {homeText}
          </Link>
        </li>

        <li className="breadcrumb-separator" aria-hidden="true">›</li>

        {/* Category */}
        <li className="breadcrumb-item">
          <Link to={breadcrumbData.categoryRoute} className="breadcrumb-link">
            {breadcrumbData.categoryName}
          </Link>
        </li>

        <li className="breadcrumb-separator" aria-hidden="true">›</li>

        {/* Current Tool (no link) */}
        <li className="breadcrumb-item breadcrumb-current" aria-current="page">
          <span className="breadcrumb-text">{breadcrumbData.toolName}</span>
        </li>
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  toolId: PropTypes.string.isRequired
};

export default Breadcrumb;
