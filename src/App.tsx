import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActiveHusky from './pages/ActiveHusky';
import Sculpt from './pages/Sculpt';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active-husky" element={<ActiveHusky />} />
          <Route path="/sculpt" element={<Sculpt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
