import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelfSelect from './pages/SelfSelect';
import Selection from './pages/Selection';
import Advice from './pages/Advice';
import './styles/reset.css'
import './styles/main.css'




const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SelfSelect />} />
      <Route path="/select" element={<Selection />} />
      <Route path="/advice" element={<Advice />} />
    </Routes>
  </Router>
);

export default App;