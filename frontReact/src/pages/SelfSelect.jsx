import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelectionStep from '../components/SelectionStep'
import NextButton from '../components/NextButton'
import {
  genderOptions,
  heightOptions,
  fatOptions,
  muscleOptions
} from '../data/selectionData'
import '../styles/components/selection.css'

export default function SelfSelect() {
  const navigate = useNavigate()

  // сбрасываем скролл наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // состояния
  const [gender, setGender] = useState(null)
  const [height, setHeight] = useState(null)
  const [fat, setFat]       = useState(null)
  const [muscle, setMuscle] = useState(null)
  const allSelected = gender && height && fat && muscle

  // рефы на секции и кнопку
  const genderRef = useRef(null)
  const heightRef = useRef(null)
  const fatRef    = useRef(null)
  const muscleRef = useRef(null)
  const nextRef   = useRef(null)

  // универсальный скролл-метод
  const scrollTo = (ref, align = 'start') => {
    if (!ref.current) return
    const headerH = document.querySelector('header')?.offsetHeight || 0
    const rect    = ref.current.getBoundingClientRect()
    const offset  = window.pageYOffset
    let top

    if (align === 'start') {
      top = offset + rect.top - headerH - 16
    } else {
      top = offset + rect.top + rect.height - window.innerHeight + 16
    }
    window.scrollTo({ top, behavior: 'smooth' })
  }

  // после выбора пола — сразу скролл к росту
  useLayoutEffect(() => {
    if (gender) scrollTo(heightRef, 'start')
  }, [gender])

  // после выбора роста — к жиру
  useLayoutEffect(() => {
    if (height) scrollTo(fatRef, 'start')
  }, [height])

  // после выбора жира — к мышцам
  useLayoutEffect(() => {
    if (fat) scrollTo(muscleRef, 'start')
  }, [fat])

  // после выбора мышц — скролл к кнопке, ждём рендера через RAF
  useEffect(() => {
   if (muscle) {
     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
   }
 }, [muscle])

  // обработчики выбора
  const selectGender = id => setGender(id)
  const selectHeight = id => setHeight(id)
  const selectFat    = id => setFat(id)
  const selectMuscle = id => setMuscle(id)

  // переход дальше
  const handleNext = () => {
    navigate('/select', { state: { gender, height, fat, muscle } })
  }

  return (
    <>
      <Header title="Расскажите о себе" />

      <main className="selection-page">
        <section ref={genderRef}>
          <SelectionStep
            title="Пол"
            options={genderOptions}
            selectedId={gender}
            onSelect={selectGender}
            disabled={false}
          />
        </section>

        <section ref={heightRef}>
          <SelectionStep
            title="Рост"
            options={heightOptions}
            selectedId={height}
            onSelect={selectHeight}
            disabled={!gender}
          />
        </section>

        <section ref={fatRef}>
          <SelectionStep
            title="Количество жира"
            options={fatOptions}
            selectedId={fat}
            onSelect={selectFat}
            disabled={!height}
          />
        </section>

        <section ref={muscleRef}>
          <SelectionStep
            title="Количество мышц"
            options={muscleOptions}
            selectedId={muscle}
            onSelect={selectMuscle}
            disabled={!fat}
          />
        </section>

        {allSelected && (
          <div ref={nextRef} style={{ textAlign: 'center', marginTop: 24 }}>
            <NextButton onClick={handleNext}>Дальше</NextButton>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
