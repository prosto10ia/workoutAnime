import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Advice = () => {
  const { start, goal } = useLocation().state || {};
  return (
    <>
      <Header />
      <main>
        <h2>Basic Advice</h2>
        <p>You need to lose weight: move more and eat less.</p>
        <button>Buy detailed PDF</button>
      </main>

      <Footer />
    </>
  );
};

export default Advice;