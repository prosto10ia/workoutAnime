import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SelfSelect from './pages/SelfSelect'
import Selection from './pages/Selection'
import Advice from './pages/Advice'
import Terms from './pages/Terms'
import About     from './pages/About'
import Privacy from './pages/Privacy'

import './styles/reset.css'
import './styles/main.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SelfSelect />} />
      <Route path="/select" element={<Selection />} />
      <Route path="/advice" element={<Advice />} />

      {/* Юридические страницы */}
      <Route path="/about"  element={<About />}      />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>
)

export default App
