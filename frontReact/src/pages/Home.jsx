import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSelector from '../components/ImageSelector';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleSelect = (img) => {
    navigate('/select', { state: { selected: img } });
  };
  return (
    <>
      <Header />
      <main>
        <h2>Welcome! Choose your body type:</h2>
        <ImageSelector onSelect={handleSelect} />
      </main>
      <Footer />
    </>
  );
};

export default Home;