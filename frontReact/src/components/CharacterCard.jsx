import React, { useState } from 'react'

import '../styles/components/characterCard.css'


export default function CharacterCard({
  imageSrc,
  name,
  description,
  onClick,
  className = ''
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`card ${className}`}
      onClick={onClick}
    >
      <div className="card__image-wrapper">
        <img
          src={imageSrc}
          alt={name}
          className={`card__image${loaded ? ' loaded' : ''}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        {description && (
          <p className="card__description">{description}</p>
        )}
      </div>
    </div>
  )
}
