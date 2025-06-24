// src/components/HeightStep.jsx
import React from 'react'
import SelectionStep from './SelectionStep'
import { heightOptions } from '../data/selectionData'

export default function HeightStep({ gender, height, setHeight }) {
  const opts = gender
    ? heightOptions
        .filter(h => gender === 'male' || ['medium','tall'].includes(h.id))
        .map(h => ({
          ...h,
          src: `/cards/height/${gender}${h.id[0].toUpperCase()}${h.id.slice(1)}.webp`
        }))
    : []

  const handle = id => {
    setHeight(id)
  }

  return (
    <SelectionStep
      title="Какого ты роста?"
      options={opts}
      selectedId={height}
      onSelect={handle}
      disabled={!gender}
    />
  )
}
