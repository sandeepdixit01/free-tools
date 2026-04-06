import React from 'react'
import './ToolCard.css'

const ToolCard = ({ icon, name, description, onClick }) => {
  return (
    <div className="tool-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="tool-card-icon">{icon}</div>
      <h3 className="tool-card-name">{name}</h3>
      <p className="tool-card-description">{description}</p>
    </div>
  )
}

export default ToolCard

