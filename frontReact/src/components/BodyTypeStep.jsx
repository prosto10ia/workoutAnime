// src/components/BodyTypeStep.jsx
import React from 'react'
import SelectionStep from './SelectionStep'
import { fatOptions, muscleOptions } from '../data/selectionData'

export default function BodyTypeStep({ gender, height, combo, setCombo }) {
  if (!gender || !height) return null

  const fatList    = fatOptions.filter(f => !f.genders || f.genders.includes(gender))
  const muscleList = muscleOptions.filter(m => !m.genders || m.genders.includes(gender))

  let combos = fatList.flatMap(f =>
    muscleList.map(m => ({ fat: f.id, muscle: m.id }))
  )
  combos = combos.filter(c => !(c.fat==='high' && c.muscle==='none'))

  const opts = combos.map(({ fat, muscle }) => {
    const fatLabel = fatOptions.find(o => o.id === fat)?.label
    const musLabel = muscleOptions.find(o => o.id === muscle)?.label
    return {
      id: `${fat}_${muscle}`,
      label: `${fatLabel}, ${musLabel}`,
      src: `/cards/${gender}/${height}_${fat}_${muscle}.webp`
    }
  })

  const handle = id => {
    const [fat, muscle] = id.split('_')
    setCombo({ fat, muscle })
  }

  return (
    <SelectionStep
      title="Выбери наиболее похожего на тебя персонажа"
      options={opts}
      selectedId={combo ? `${combo.fat}_${combo.muscle}` : null}
      onSelect={handle}
      disabled={!(gender && height)}
    />
  )
}
