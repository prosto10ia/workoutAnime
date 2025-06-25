import React from 'react'

import '../../styles/components/main/footer.css'


export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/about">О компании</a>
        <a href="/terms">Условия использования</a>
        <a href="/privacy">Политика конфиденциальности</a>
      </div>
      <div className="footer__info">
        <p>© {year} "Anime Workout"</p>
        <p>
          Электронная почта:&nbsp;
          <a href="mailto:info@animeworkout.example">
            info@animeworkout.example
          </a>
        </p>
      </div>
    </footer>
  )
}
