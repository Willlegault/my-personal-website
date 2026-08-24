
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ActiveHusky from './pages/ActiveHusky';
import Sculpt from './pages/Sculpt';
import DotNite from './pages/DotNite';
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

  useEffect(() => {
    // Ensure AOS updates when the app's custom scroll container scrolls
    const container = document.getElementById('parallax-root');
    if (!container) return;

    let raf = 0 as number | null;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        AOS.refresh();
        if (raf) {
          window.cancelAnimationFrame(raf);
          raf = 0;
        }
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

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
            <Route path="/dotnite" element={<DotNite />} />
          </Routes>
        </div>
      </Router>
    </PortfolioModeProvider>
  );
}

export default App;
