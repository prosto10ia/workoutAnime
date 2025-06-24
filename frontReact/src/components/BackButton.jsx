import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/components/backButton.css'


export default function BackButton() {
   const navigate = useNavigate()
   return (
      <button
         type="button"
         className="back-button"
         onClick={() => navigate(-1)}
         aria-label="Назад"
      >
         <svg
            className="back-button__icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
         >
            <polyline
               points="15 18 9 12 15 6"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </button>
   )
}
