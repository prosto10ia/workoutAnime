import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from './BackButton'

import '../styles/components/header.css'
import logo from '../assets/logo.png'


export default function Header({ title, showBack = true }) {
   const navigate = useNavigate()

   return (
      <header className="header">

         {showBack && <BackButton />}
         <div className="header__brand">
            <h1 className="header__title">{title}</h1>
            <button
               type="button"
               className="header__title"
               onClick={() => navigate('/')}
               aria-label="На главную"
            >
               <img src={logo} alt="Logo" className="header__logo" />
            </button>
         </div>
      </header >
   )
}
