import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import SkipLink from './components/SkipLink';
import SEOMonitoring from './components/SEOMonitoring';
import Home from './pages/Home';
import Soins from './pages/Soins';
import Specialites from './pages/Specialites.tsx';
import NotreCabinet from './pages/NotreCabinet';
import Journal from './pages/Journal';
import ArticleDetail from './pages/ArticleDetail';
import Praticien from './pages/Praticien';
import Offrir from './pages/Offrir';
import { useMobileScrollFix } from './utils/mobileScrollFix';

// Hook pour détecter si on est sur mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll plus doux sur mobile
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  const isMobile = useIsMobile();
  
  // Animations réduites sur mobile pour éviter les conflits de scroll
  const variants = {
    initial: {
      opacity: 0,
      y: isMobile ? 10 : 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: isMobile ? -10 : -20
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: isMobile ? 0.2 : 0.5
      }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <AnimatePresence mode={isMobile ? "sync" : "wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/soins" element={<PageWrapper><Soins /></PageWrapper>} />
        <Route path="/specialites" element={<PageWrapper><Specialites /></PageWrapper>} />
        <Route path="/notre-cabinet" element={<PageWrapper><NotreCabinet /></PageWrapper>} />
        <Route path="/journal" element={<PageWrapper><Journal /></PageWrapper>} />
        <Route path="/journal/:slug" element={<PageWrapper><ArticleDetail /></PageWrapper>} />
        <Route path="/notre-equipe" element={<PageWrapper><Praticien /></PageWrapper>} />
        <Route path="/praticien-kinesitherapeute-osteopathe-puteaux" element={<PageWrapper><Praticien /></PageWrapper>} />
        {/* Redirection de l'ancienne URL vers la nouvelle */}
        <Route path="/praticien/arnaud-benhamou" element={<Navigate to="/praticien-kinesitherapeute-osteopathe-puteaux" replace />} />
        <Route path="/offrir" element={<PageWrapper><Offrir /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Applique les corrections de scroll mobile
  useMobileScrollFix();

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/specialites', label: 'Nos Spécialités' },
    { path: '/soins', label: 'Soins' },
    { path: '/notre-cabinet', label: 'Le lieu' },
    { path: '/notre-equipe', label: 'Notre Équipe' },
    { path: '/journal', label: 'Journal' },
    { path: '/offrir', label: 'Offrir' }
  ];

  return (
    <>
      <SkipLink />
      <SEOMonitoring />
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-sealiah-ivory to-sealiah-sand flex flex-col">
        <motion.header 
          role="banner"
          className="fixed w-full top-0 z-50 bg-sealiah-ivory/70 backdrop-blur-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <nav 
            role="navigation" 
            aria-label="Navigation principale"
            className="container mx-auto px-4 py-4"
          >
            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-center items-center space-x-8 text-sealiah-amber list-none">
              {menuItems.map(({ path, label }) => (
                <li key={path}>
                  <Link 
                    to={path}
                    className="nav-link text-sm tracking-wider hover:text-sealiah-eucalyptus transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-2 py-1"
                    onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
                    aria-current={location.pathname === path ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center">
              <Link 
                to="/"
                className="text-sealiah-amber text-lg font-serif focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
                onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
                aria-label="Retour à l'accueil - Maison Sealiah"
              >
                Maison Sealiah
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sealiah-amber p-2 focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded"
                onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-sealiah-ivory/95 backdrop-blur-sm mt-4 rounded-lg overflow-hidden"
                >
                  <ul className="flex flex-col space-y-4 p-4 list-none" role="menu">
                    {menuItems.map(({ path, label }) => (
                      <li key={path} role="none">
                        <Link
                          to={path}
                          role="menuitem"
                          className="text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors duration-300 py-2 text-center block focus:outline-none focus:ring-2 focus:ring-sealiah-eucalyptus focus:ring-offset-2 rounded px-2"
                          onClick={() => setIsMenuOpen(false)}
                          onMouseDown={(e) => e.preventDefault()} // Empêche le focus au clic
                          aria-current={location.pathname === path ? 'page' : undefined}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>

        <main id="main-content" className="pt-20 flex-grow" role="main">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <footer className="w-full py-6 px-4" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-sealiah-amber/20 pt-6">
              <p className="text-center text-sm text-sealiah-amber/60">
                © 2025 Maison Sealiah. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;