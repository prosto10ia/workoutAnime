// src/components/BackgroundWrapper.jsx
import React, { useState, useEffect, forwardRef } from 'react'
import bgSrc from '../assets/backGround.png'
import '../styles/components/backgroundWrapper.css'

const BackgroundWrapper = forwardRef(({ children }, ref) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = bgSrc
    img.onload = () => setLoaded(true)
  }, [])

  return (
    <div
      ref={ref}
      className="bg-wrap"
      style={
        loaded
          ? { backgroundImage: `url(${bgSrc})`, transition: 'background-image 0.3s ease-out' }
          : undefined
      }
    >
      {children}
    </div>
  )
})

export default BackgroundWrapper
