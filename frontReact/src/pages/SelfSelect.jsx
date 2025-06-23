// src/pages/SelfSelect.jsx
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SelectionStep from '../components/SelectionStep'
import NextButton from '../components/NextButton'
import {
  genderOptions,
  heightOptions,
  fatOptions,
  muscleOptions
} from '../data/selectionData'
import '../styles/components/selection.css'
import Footer from '../components/Footer'

export default function SelfSelect() {
  const navigate = useNavigate()

  // Сброс скролла наверх при монтировании
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Шаги: пол, рост, комбинированный выбор fat+muscle
  const [gender, setGender] = useState(null)
  const [height, setHeight] = useState(null)
  const [combo, setCombo]   = useState(null)

  const genderRef = useRef(null)
  const heightRef = useRef(null)
  const comboRef  = useRef(null)
  const nextRef   = useRef(null)

  // Хелпер для плавного скролла под шапку
  const scrollTo = ref => {
    if (!ref.current) return
    const headerH = document.querySelector('header')?.offsetHeight || 0
    const { top } = ref.current.getBoundingClientRect()
    window.scrollTo({
      top: window.pageYOffset + top - headerH - 16,
      behavior: 'smooth'
    })
  }

  // Динамические опции роста с учётом выбранного пола
  const heightOptionsDynamic = gender
    ? heightOptions
        // для female доступны только medium и tall
        .filter(h =>
          gender === 'male'
            ? true
            : ['medium', 'tall'].includes(h.id)
        )
        .map(h => ({
          id: h.id,
          label: h.label,
          src: `/cards/height/${
            gender + h.id[0].toUpperCase() + h.id.slice(1)
          }.png`
        }))
    : []

  // Список допустимых fat по выбранным gender + height
  const fatList = gender && height
    ? fatOptions.filter(f =>
        (!f.genders || f.genders.includes(gender)) &&
        (!f.heights || f.heights.includes(height))
      )
    : []

  // Все возможные комбинации {fat, muscle}
  const combos = gender && height
    ? fatList.flatMap(f =>
        muscleOptions
          .filter(m =>
            (!m.genders || m.genders.includes(gender)) &&
            (!m.heights || m.heights.includes(height)) &&
            (!m.fats    || m.fats   .includes(f.id))
          )
          .map(m => ({ fat: f.id, muscle: m.id }))
      )
    : []

  // Опции для третьего шага
  const comboOptions = combos.map(({ fat, muscle }) => {
    const id       = `${fat}_${muscle}`
    const fatLabel = fatOptions.find(o => o.id === fat)?.label || fat
    const musLabel = muscleOptions.find(o => o.id === muscle)?.label || muscle
    return {
      id,
      label: `${fatLabel}, ${musLabel}`,
      src: `/cards/${gender}/${height}_${fat}_${muscle}.png`
    }
  })
  const selectedId = combo ? `${combo.fat}_${combo.muscle}` : null

  // Обработчики выбора
  const handleSelectGender = id => {
    setGender(id)
    setHeight(null)
    setCombo(null)
    setTimeout(() => scrollTo(heightRef), 0)
  }

  const handleSelectHeight = id => {
    setHeight(id)
    setCombo(null)
    setTimeout(() => scrollTo(comboRef), 0)
  }

  const handleSelectCombo = id => {
    const [fat, muscle] = id.split('_')
    setCombo({ fat, muscle })
    requestAnimationFrame(() => nextRef.current && scrollTo(nextRef))
  }

  const handleNext = () => {
    navigate('/select', {
      state: {
        gender,
        height,
        currFat: combo.fat,
        currMuscle: combo.muscle
      }
    })
  }

  return (
   <div className="app-container">
      <Header title="Расскажите о себе" showBack={false} />

      <main className="selection-page">
        {/* Шаг 1: Пол */}
        <section ref={genderRef}>
          <SelectionStep
            title="Выбери пол:"
            options={genderOptions}
            selectedId={gender}
            onSelect={handleSelectGender}
            disabled={false}
          />
        </section>

        {/* Шаг 2: Рост */}
        <section ref={heightRef}>
          <SelectionStep
            title="Какой твой рост?"
            options={heightOptionsDynamic}
            selectedId={height}
            onSelect={handleSelectHeight}
            disabled={!gender}
          />
        </section>

        {/* Шаг 3: Тип тела */}
        <section ref={comboRef}>
          {comboOptions.length === 0 ? (
            <p className="no-targets">
              Ждем данных выше)
            </p>
          ) : (
            <SelectionStep
              title="Выбери на кого ты больше похож:"
              options={comboOptions}
              selectedId={selectedId}
              onSelect={handleSelectCombo}
              disabled={!height}
            />
          )}
        </section>

        {/* Кнопка «Дальше» */}
        {combo && (
          <div ref={nextRef} className="next-button-wrapper">
            <NextButton onClick={handleNext}>Дальше</NextButton>
          </div>
        )}
      </main>

      <Footer/>
    </div>
  )
}
