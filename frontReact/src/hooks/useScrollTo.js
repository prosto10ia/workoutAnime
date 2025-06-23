// src/hooks/useScrollTo.js
import { useCallback } from 'react'

export default function useScrollTo() {
  return useCallback(ref => {
    if (!ref.current) return
    const headerH = document.querySelector('header')?.offsetHeight || 0
    const { top } = ref.current.getBoundingClientRect()
    window.scrollTo({
      top: window.pageYOffset + top - headerH - 16,
      behavior: 'smooth'
    })
  }, [])
}
