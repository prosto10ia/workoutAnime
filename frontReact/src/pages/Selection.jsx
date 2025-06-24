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

// Сообщение, если нет ни одной цели
function IdealMessage() {
  return (
    <div className="ideal-message">
      <h2>Вы идеальны!</h2>
      <p>Мы не можем сделать вас лучше — каждое ваше тело уникально.</p>
    </div>
  )
}

export default function Selection() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { gender, height, currFat, currMuscle } = state || {}

  // если заходят напрямую — редирект
  useEffect(() => {
    window.scrollTo(0, 0)
    if (!gender || !height || !currFat || !currMuscle) {
      navigate('/', { replace: true })
    }
  }, [])

  // строим все возможные комбинации
  const possibleFat    = transitions[gender]?.fat[currFat]    || []
  const possibleMuscle = transitions[gender]?.muscle[currMuscle] || []
  let combos = possibleFat.flatMap(fatT =>
    possibleMuscle.map(musT => ({ fat: fatT, muscle: musT }))
  )

  // убираем текущий тип тела
  combos = combos.filter(c => !(c.fat === currFat && c.muscle === currMuscle))

  const [selected, setSelected] = useState(null)
  const nextRef = useRef(null)

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

  const getLabel = (arr, id) => arr.find(o => o.id === id)?.label || id

  // Компонент карточки
  function ComboCard({ fat, muscle }) {
    const filename = `${height}_${fat}_${muscle}.webp`
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
      <Header title="Тело мечты" showBack />

      <main className="selection-page">
        {combos.length === 0 ? (
          <IdealMessage />
        ) : (
          <div className="step-grid">
            {combos.map(c => (
              <ComboCard key={`${c.fat}_${c.muscle}`} {...c} />
            ))}
          </div>
        )}

        {selected && combos.length > 0 && (
          <div className="next-button-wrapper" ref={nextRef}>
            <NextButton onClick={handleNext}>Дальше</NextButton>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
