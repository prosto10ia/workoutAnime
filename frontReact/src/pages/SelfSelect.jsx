// src/pages/SelfSelect.jsx
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import GenderStep from '../components/GenderStep'
import HeightStep from '../components/HeightStep'
import BodyTypeStep from '../components/BodyTypeStep'
import NextButton from '../components/NextButton'
import useScrollTo from '../hooks/useScrollTo'
import '../styles/components/selection.css'
import Footer from '../components/Footer'

export default function SelfSelect() {
  const navigate = useNavigate()
  const scrollTo = useScrollTo()

  // сброс скролла
  useEffect(() => window.scrollTo(0, 0), [])

  const [gender, setGender] = useState(null)
  const [height, setHeight] = useState(null)
  const [combo, setCombo]   = useState(null)

  const genderRef = useRef(null)
  const heightRef = useRef(null)
  const comboRef  = useRef(null)
  const nextRef   = useRef(null)

  const gotoHeight = () => scrollTo(heightRef)
  const gotoCombo  = () => scrollTo(comboRef)
  const gotoNext   = () => scrollTo(nextRef)

  const handleNext = () => navigate('/select', {
    state: { gender, height, currFat: combo.fat, currMuscle: combo.muscle }
  })

  return (
    <div className="app-container">
      <Header title="Расскажите о себе" showBack={false} />

      <main className="selection-page">
        <section ref={genderRef}>
          <GenderStep
            gender={gender}
            setGender={setGender}
            onNextScrollRef={gotoHeight}
          />
        </section>

        <section ref={heightRef}>
          <HeightStep
            gender={gender}
            height={height}
            setHeight={setHeight}
            scrollToNext={gotoCombo}
          />
        </section>

        <section ref={comboRef}>
          <BodyTypeStep
            gender={gender}
            height={height}
            combo={combo}
            setCombo={setCombo}
            scrollToNext={gotoNext}
          />
        </section>

        {combo && (
          <div ref={nextRef} className="next-button-wrapper">
            <NextButton onClick={handleNext}>Дальше</NextButton>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
