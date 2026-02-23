
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActiveHusky from './pages/ActiveHusky';
import Sculpt from './pages/Sculpt';
import ScrollToTop from './Components/ScrollToTop';
import { PortfolioModeProvider } from './context/PortfolioModeContext';
import './App.css';

function App() {
  return (
    <PortfolioModeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/active-husky" element={<ActiveHusky />} />
            <Route path="/sculpt" element={<Sculpt />} />
          </Routes>
        </div>
      </Router>
    </PortfolioModeProvider>
  );
}

export default App;
