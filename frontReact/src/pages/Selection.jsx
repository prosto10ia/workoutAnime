import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelectionStep from '../components/SelectionStep'
import NextButton from '../components/NextButton'
import { fatOptions, muscleOptions } from '../data/selectionData'
import '../styles/components/selection.css'
export default function Selection() {
   const navigate = useNavigate()
   const { state } = useLocation()
   const { gender, height } = state || {}
 
   const fatRef    = useRef(null)
   const muscleRef = useRef(null)
   const nextRef   = useRef(null)
 
   const [fat,    setFat]    = useState(null)
   const [muscle, setMuscle] = useState(null)
   const allSelected = fat && muscle
 
   // сброс скролла и проверка входных данных
   useEffect(() => {
     window.scrollTo(0, 0)
     if (!gender || !height) {
       navigate('/', { replace: true })
     }
   }, [])
 
   // скролл к блоку «мышцы» после выбора жира
   useEffect(() => {
     if (fat) {
       const el = muscleRef.current
       const headerH = document.querySelector('header')?.offsetHeight || 0
       if (el) window.scrollTo({ top: el.offsetTop - headerH - 16, behavior: 'smooth' })
     }
   }, [fat])
 
   // скролл в самый низ страницы после выбора мышц
   useEffect(() => {
     if (muscle) {
       window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
     }
   }, [muscle])
 
   const handleNext = () => {
     navigate('/advice', { state: { gender, height, fat, muscle } })
   }
 
   return (
     <>
       <Header title="Подберите параметры" />
 
       <main className="selection-page">
         <section ref={fatRef}>
           <SelectionStep
             title="Количество жира"
             options={fatOptions}
             selectedId={fat}
             onSelect={setFat}
             disabled={false}
           />
         </section>
 
         <section ref={muscleRef}>
           <SelectionStep
             title="Количество мышц"
             options={muscleOptions}
             selectedId={muscle}
             onSelect={setMuscle}
             disabled={!fat}
           />
         </section>
 
         {allSelected && (
           <div className="next-button-wrapper" ref={nextRef}>
             <NextButton onClick={handleNext}>Дальше</NextButton>
           </div>
         )}
       </main>
 
       <Footer />
     </>
   )
 }