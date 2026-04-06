/**
 * CategoryGrid Component
 * Reusable grid for displaying category cards
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import CategoryCard from '../CategoryCard'
import './CategoryGrid.css'

const CategoryGrid = ({ categories }) => {
  const { language } = useLanguage()

  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <CategoryCard
          key={category.id || index}
          icon={category.icon}
          title={category.title[language] || category.title.en}
          description={category.description[language] || category.description.en}
          onClick={() => window.location.href = category.route}
        />
      ))}
    </div>
  )
}

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string.isRequired,
      title: PropTypes.object.isRequired,
      description: PropTypes.object.isRequired,
      route: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CategoryGrid

