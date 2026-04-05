import React from 'react'
import './CategoryCard.css'

const CategoryCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="category-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="category-card-icon">{icon}</div>
      <div className="category-card-content">
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-description">{description}</p>
      </div>
    </div>
  )
}

export default CategoryCard

