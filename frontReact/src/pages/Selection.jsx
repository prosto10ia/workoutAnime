// src/pages/Selection.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NextButton from '../components/NextButton'
import CharacterCard from '../components/CharacterCard'
import { transitions } from '../data/transitionData'
import { fatOptions, muscleOptions } from '../data/selectionData'
import '../styles/components/selection.css'

export default function Selection() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { gender, height, currFat, currMuscle } = state || {}

  // если кто-то зашёл напрямую
  useEffect(() => {
    window.scrollTo(0, 0)
    if (!gender || !height || !currFat || !currMuscle) {
      navigate('/', { replace: true })
    }
  }, [])

  // рассчитываем возможные цели
  const possibleFat    = transitions[gender]?.fat[currFat]    || []
  const possibleMuscle = transitions[gender]?.muscle[currMuscle] || []
  const combos = possibleFat.flatMap(fatT =>
    possibleMuscle.map(musT => ({ fat: fatT, muscle: musT }))
  )

  const [selected, setSelected] = useState(null)
  const nextRef = useRef(null)

  // плавный скролл к кнопке после выбора
  const handleSelect = combo => {
    setSelected(combo)
    requestAnimationFrame(() => {
      nextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    })
  }

  const handleNext = () => {
    navigate('/advice', {
      state: {
        gender,
        height,
        currFat,
        currMuscle,
        fat: selected.fat,
        muscle: selected.muscle
      }
    })
  }

  const getLabel = (arr, id) => {
    const o = arr.find(x => x.id === id)
    return o ? o.label : id
  }

  // переиспользуемый компонент для одной «комбо»-карточки
  function ComboCard({ fat, muscle }) {
    const filename = `${height}_${fat}_${muscle}.png`
    const src = `/cards/${gender}/${filename}`
    const fatLabel    = getLabel(fatOptions, fat)
    const muscleLabel = getLabel(muscleOptions, muscle)
    const isSel = selected?.fat === fat && selected?.muscle === muscle

    return (
      <div onClick={() => handleSelect({ fat, muscle })}>
        <CharacterCard
          imageSrc={src}
          name={`${fatLabel}, ${muscleLabel}`}
          description=""
          className={isSel ? 'selected' : ''}
        />
      </div>
    )
  }

  return (
   <div className="app-container">
      <Header title="Куда вы хотите прийти?" showBack />
      <main className="selection-page">
        {combos.length === 0 ? (
          <p className="no-targets">
            Вы шикарны — помочь вам мы не можем!
          </p>
        ) : (
          <div className="step-grid">
            {combos.map(c => (
              <ComboCard key={`${c.fat}_${c.muscle}`} {...c} />
            ))}
          </div>
        )}

        {selected && (
          <div className="next-button-wrapper" ref={nextRef}>
            <NextButton onClick={handleNext}>Дальше</NextButton>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
