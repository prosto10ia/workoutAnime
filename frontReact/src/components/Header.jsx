import React from 'react';
import '../styles/components/header.css';

const Header = (props) => {
  const handleScroll = () => {
    const target = document.getElementById('character-selection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      <button
        className="header__arrow"
        onClick={handleScroll}
        aria-label="Прокрутить вниз"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="header__icon"
        >
          <polyline
            points="6 9 12 15 18 9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
