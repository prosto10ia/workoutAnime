import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/text.css'


export default function About() {
   return (
      <div className="app-container">
         <Header title="О компании" showBack />
         <main className="selection-page text-page">
            <p>
               Данюк Кирилл Константинович, зарегистрирован в качестве самозанятого
               предпринимателя в соответствии с ФЗ-422.
            </p>
            <p>ИНН: 650803672953</p>
            <p>
               Я предоставляю бесплатные базовые советы и короткие PDF-гайды
               по тренировкам и питанию. Поскольку результаты зависят от множества
               факторов — генетики, образа жизни, режима питания и дисциплины —
               я <strong>не гарантирую</strong> каких-либо конкретных изменений.
            </p>
            <p>
               Достичь точного соответствия тому, что изображено на картинке,
               невозможно — каждый человек уникален.
            </p>
         </main>
         <Footer />
      </div>
   )
}
