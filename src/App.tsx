import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Soins from './pages/Soins';
import Specialites from './pages/Specialites.tsx';
import NotreCabinet from './pages/NotreCabinet';
import Journal from './pages/Journal';
import Praticien from './pages/Praticien';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
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
        duration: 0.5
      }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/soins" element={<PageWrapper><Soins /></PageWrapper>} />
        <Route path="/specialites" element={<PageWrapper><Specialites /></PageWrapper>} />
        <Route path="/notre-cabinet" element={<PageWrapper><NotreCabinet /></PageWrapper>} />
        <Route path="/journal" element={<PageWrapper><Journal /></PageWrapper>} />
        <Route path="/praticien/arnaud-benhamou" element={<PageWrapper><Praticien /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/soins', label: 'Soins' },
    { path: '/specialites', label: 'Nos Spécialités' },
    { path: '/notre-cabinet', label: 'Notre Cabinet' },
    { path: '/journal', label: 'Journal' }
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-sealiah-ivory to-sealiah-sand flex flex-col">
        <motion.nav 
          className="fixed w-full top-0 z-50 bg-sealiah-ivory/70 backdrop-blur-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="container mx-auto px-4 py-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center space-x-8 text-sealiah-amber">
              {menuItems.map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path}
                  className="nav-link text-sm tracking-wider hover:text-sealiah-eucalyptus transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center">
              <Link 
                to="/"
                className="text-sealiah-amber text-lg font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Maison Sealiah
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-sealiah-amber p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-sealiah-ivory/95 backdrop-blur-sm mt-4 rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col space-y-4 p-4">
                    {menuItems.map(({ path, label }) => (
                      <Link
                        key={path}
                        to={path}
                        className="text-sealiah-amber hover:text-sealiah-eucalyptus transition-colors duration-300 py-2 text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>

        <main className="pt-20 flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <footer className="w-full py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-sealiah-amber/20 pt-6">
              <p className="text-center text-sm text-sealiah-amber/60">
                © 2025 Maison Sealiah. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;