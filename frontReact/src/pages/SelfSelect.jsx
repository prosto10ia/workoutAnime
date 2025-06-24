import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import GenderStep from '../components/GenderStep'
import HeightStep from '../components/HeightStep'
import BodyTypeStep from '../components/BodyTypeStep'
import NextButton from '../components/NextButton'
import useScrollTo from '../hooks/useScrollTo'
import Footer from '../components/Footer'


export default function SelfSelect() {
   const navigate = useNavigate()
   const scrollTo = useScrollTo()

   // состояния шагов
   const [gender, setGender] = useState(null)
   const [height, setHeight] = useState(null)
   const [combo, setCombo] = useState(null)

   // рефы на секции
   const genderRef = useRef(null)
   const heightRef = useRef(null)
   const comboRef = useRef(null)
   const nextRef = useRef(null)

   // при загрузке — скролл вверх
   useEffect(() => window.scrollTo(0, 0), [])

   // как только выбираем пол — скроллим к росту
   useEffect(() => {
      if (gender) scrollTo(heightRef)
   }, [gender, scrollTo])

   // как только выбираем рост — скроллим к body-type
   useEffect(() => {
      if (height) scrollTo(comboRef)
   }, [height, scrollTo])

   // как только выбираем combo — скроллим к кнопке
   useEffect(() => {
      if (combo) scrollTo(nextRef)
   }, [combo, scrollTo])

   const handleNext = () =>
      navigate('/select', {
         state: { gender, height, currFat: combo.fat, currMuscle: combo.muscle }
      })

   return (
      <div className="app-container">
         <Header title="Твое текущее тело" showBack={false} />

         <main className="selection-page">
            {/* Шаг 1 */}
            <section ref={genderRef}>
               <GenderStep
                  gender={gender}
                  setGender={setGender}
               />
            </section>

            {/* Шаг 2 */}
            <section ref={heightRef}>
               <HeightStep
                  gender={gender}
                  height={height}
                  setHeight={setHeight}
               />
            </section>

            {/* Шаг 3 */}
            <section ref={comboRef}>
               <BodyTypeStep
                  gender={gender}
                  height={height}
                  combo={combo}
                  setCombo={setCombo}
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
