import React from 'react'
import SelectionStep from './SelectionStep'
import { heightOptions } from '../data/selectionData'

export default function HeightStep({
  gender,
  height,
  setHeight,
  scrollToNext
}) {
  // только medium/tall для женщин, все три для мужчин
  const opts = gender
    ? heightOptions
        .filter(h => gender === 'male' || ['medium','tall'].includes(h.id))
        .map(h => ({
          ...h,
          src: `/cards/height/${gender}${h.id[0].toUpperCase()}${h.id.slice(1)}.png`
        }))
    : []

  const handle = id => {
    setHeight(id)
    scrollToNext()
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
