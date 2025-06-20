import React from 'react'
import '../styles/components/characterCard.css'

export default function CharacterCard({
  imageSrc,
  name,
  description,
  onClick,
  className = ''
}) {
  return (
    <div
      className={`card ${className}`}
      onClick={onClick}
    >
      <div className="card__image-wrapper">
        <img src={imageSrc} alt={name} className="card__image" />
      </div>
      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__description">{description}</p>
      </div>
    </div>
  )
}
