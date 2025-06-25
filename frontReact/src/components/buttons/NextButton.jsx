import React from 'react'

import '../../styles/components/buttons/nextButton.css'


export default function NextButton({ onClick, children }) {
  return (
    <button className="next-button" onClick={onClick}>
      {children}
      <svg
        className="next-button__icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polyline
          points="8 4 16 12 8 20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
