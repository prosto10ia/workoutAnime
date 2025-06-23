import React from 'react'
import BackButton from './BackButton'
import '../styles/components/header.css'
import logo from '../assets/logo.png'

export default function Header({ title, showBack = true }) {
  return (
    <header className="header">
      {showBack && <BackButton />}
      <div className="header__brand">
        <h1 className="header__title">{title}</h1>
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
    </header>
  )
}
