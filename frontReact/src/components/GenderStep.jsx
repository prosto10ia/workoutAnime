import React from 'react'
import SelectionStep from './SelectionStep'
import { genderOptions } from '../data/selectionData'

export default function GenderStep({ gender, setGender, onNextScrollRef }) {
  const handle = id => {
    setGender(id)
    onNextScrollRef()
  }

  return (
    <SelectionStep
      title="Выбери свой пол:"
      options={genderOptions}
      selectedId={gender}
      onSelect={handle}
      disabled={false}
    />
  )
}
