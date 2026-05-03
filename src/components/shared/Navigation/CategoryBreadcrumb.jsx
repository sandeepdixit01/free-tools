/**
 * CategoryBreadcrumb Component
 * Displays navigation breadcrumb for category pages: Home > Category
 * Matches the style of tool page breadcrumbs
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import './Breadcrumb.css';

const CategoryBreadcrumb = ({ categoryName }) => {
  const { language } = useLanguage();
  
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

        {/* Current Category (no link) */}
        <li className="breadcrumb-item breadcrumb-current" aria-current="page">
          <span className="breadcrumb-text">{categoryName}</span>
        </li>
      </ol>
    </nav>
  );
};

CategoryBreadcrumb.propTypes = {
  categoryName: PropTypes.string.isRequired
};

export default CategoryBreadcrumb;

