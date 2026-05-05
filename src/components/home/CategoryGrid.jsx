/**
 * CategoryGrid Component
 * Reusable grid for displaying category cards
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import CategoryCard from '../CategoryCard'
import './CategoryGrid.css'

const CategoryGrid = ({ categories }) => {
  const { language } = useLanguage()
  const navigate = useNavigate()

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
          onClick={() => navigate(category.route)}
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

