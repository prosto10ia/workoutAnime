import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Selection from './pages/Selection';
import Advice from './pages/Advice';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select" element={<Selection />} />
      <Route path="/advice" element={<Advice />} />
    </Routes>
  </Router>
);

export default App;