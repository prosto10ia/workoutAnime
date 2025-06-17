import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const images = ['/target/goal1.jpg', '/target/goal2.jpg', '/target/goal3.jpg'];

const Selection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selected } = location.state || {};
  const handleSelectGoal = (img) => {
    navigate('/advice', { state: { start: selected, goal: img } });
  };
  return (
    <>
      <Header />
      <main>
        <h2>Now choose your target look:</h2>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="goal" width={100}
               onClick={() => handleSelectGoal(src)} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Selection;