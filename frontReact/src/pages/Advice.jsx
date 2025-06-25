import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'

import { generateAdvice } from '../data/adviceData'
import '../styles/text.css'


export default function Advice() {
   const navigate = useNavigate()
   const { state } = useLocation()
   const { gender, height, currFat, currMuscle, fat, muscle } = state || {}

   // Без данных — на главную
   if (!gender || !height || !currFat || !currMuscle || !fat || !muscle) {
      navigate('/', { replace: true })
      return null
   }

   const advice = generateAdvice({ gender, height, currFat, currMuscle, fat, muscle })

   return (
      <div className="app-container">
         <Header title="Ваши базовые советы" showBack />
         <main className="selection-page text-page">
            <ul>
               {advice.map((line, i) => (
                  <li key={i}>{line}</li>
               ))}
            </ul>
         </main>
         <Footer />
      </div>
   )
}