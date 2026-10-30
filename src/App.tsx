import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { HousingSocietiesPage } from './pages/HousingSocietiesPage';
import { PMSuryaGharPage } from './pages/PMSuryaGharPage';
import { PMKusumPage } from './pages/PMKusumPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Calculator } from 'lucide-react';
import { COMPANY_DETAILS } from './data/solarData';
import { SolarChatbot } from './components/SolarChatbot';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path.startsWith('#')) {
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/residential':
        return <ResidentialPage onNavigate={navigateTo} />;
      case '/commercial':
        return <CommercialPage onNavigate={navigateTo} />;
      case '/housing-societies':
        return <HousingSocietiesPage onNavigate={navigateTo} />;
      case '/pm-surya-ghar':
        return <PMSuryaGharPage onNavigate={navigateTo} />;
      case '/pm-kusum':
        return <PMKusumPage onNavigate={navigateTo} />;
      case '/calculator':
      case '/solar-calculator':
      case '/solar-proposal-creator':
        return <CalculatorPage onNavigate={navigateTo} />;
      case '/about':
      case '/about-us':
        return <AboutPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-slate-900 selection:bg-solar-500/20 selection:text-solar-950 font-sans w-full max-w-full overflow-x-hidden relative">
      {/* Top Solar Energy Route Transition Beam */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-solar-400 via-amber-300 to-emerald-400 origin-left z-50 shadow-[0_0_12px_rgba(245,158,11,0.8)]"
          />
        )}
      </AnimatePresence>

      {/* Cinematic Solar Ambient Flare Sweep on Route Change */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ x: '-100%', opacity: 0.55 }}
            animate={{ x: '100%', opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-r from-transparent via-amber-400/8 to-transparent -skew-x-12"
          />
        )}
      </AnimatePresence>

      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, scale: 0.985, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.012, y: -12, filter: 'blur(5px)' }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Global Solar AI Concierge with Quota, Navigation & Human Handoff */}
      <SolarChatbot onNavigate={navigateTo} />
    </div>
  );
}

export default App;
