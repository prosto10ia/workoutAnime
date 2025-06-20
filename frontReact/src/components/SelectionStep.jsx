import React from 'react'
import CharacterCard from './CharacterCard'
import '../styles/components/selection.css'


export default function SelectionStep({
  title,
  options,
  selectedId,
  onSelect,
  disabled
}) {
   
  return (
    <section className={`selection-step${disabled ? ' disabled' : ''}`}>
      <h2 className="step-title">{title}</h2>
      <div className="step-grid">
        {options.map(opt => (
          <CharacterCard
            key={opt.id}
            imageSrc={opt.src}
            name={opt.label}
            description=""
            onClick={() => !disabled && onSelect(opt.id)}
            className={opt.id === selectedId ? 'selected' : ''}
          />
        ))}
      </div>
    </section>
  )
}
