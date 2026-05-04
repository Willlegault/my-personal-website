
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ActiveHusky from './pages/ActiveHusky';
import Sculpt from './pages/Sculpt';
import ScrollToTop from './Components/ScrollToTop';
import { PortfolioModeProvider } from './context/PortfolioModeContext';
import './App.css';

function AOSManager() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 500, easing: 'ease-out-cubic', once: false, offset: 60 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <PortfolioModeProvider>
      <Router>
        <AOSManager />
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
