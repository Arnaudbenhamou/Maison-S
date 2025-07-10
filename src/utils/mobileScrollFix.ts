// Utilitaires pour corriger les problèmes de scroll sur mobile
import { useEffect } from 'react';

export const initMobileScrollFix = () => {
  // Détection mobile plus précise
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (!isMobile) return () => {};

  // Fix pour iOS Safari - problème de hauteur viewport
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Initialisation
  setVH();
  
  // Mise à jour lors du redimensionnement
  const handleResize = () => {
    setTimeout(setVH, 100);
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleResize);

  // Fix spécifique iOS - prévention du scroll élastique
  if (isIOS) {
    // Désactive le scroll élastique
    const preventBounce = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      
      // Autorise le scroll sur les éléments avec scroll
      if (target.closest('.overflow-auto') || target.closest('.overflow-y-auto')) {
        return;
      }
      
      // Empêche le bounce au niveau du document
      if (target === document.body || target === document.documentElement) {
        e.preventDefault();
      }
    };

    // Applique le fix avec passive: false pour pouvoir preventDefault
    document.addEventListener('touchmove', preventBounce, { passive: false });
    
    // Fix pour le scroll inertiel
    document.body.style.webkitOverflowScrolling = 'touch';
  }

  // Fix spécifique Android
  if (isAndroid) {
    // Désactive les animations pendant le scroll pour éviter les conflits
    let scrollTimer: NodeJS.Timeout;
    let isScrolling = false;
    
    const handleScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add('scrolling');
      }
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('scrolling');
      }, 150);
    };
    
    window.addEventListener('scroll', handleScrollStart, { passive: true });
    window.addEventListener('touchmove', handleScrollStart, { passive: true });
  }

  // Fix général mobile - force l'accélération matérielle
  const addHardwareAcceleration = () => {
    const style = document.createElement('style');
    style.textContent = `
      /* Accélération matérielle pour les éléments critiques */
      .hero-section,
      .page-wrapper,
      .animated-element,
      .fixed,
      video {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        will-change: transform;
      }
      
      /* Optimisations scroll mobile */
      @media (max-width: 768px) {
        body {
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }
        
        /* Désactive les animations pendant le scroll sur Android */
        .scrolling * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        /* Hauteur viewport fixe */
        .min-h-screen {
          min-height: 100vh;
          min-height: calc(var(--vh, 1vh) * 100);
        }
      }
    `;
    document.head.appendChild(style);
  };

  addHardwareAcceleration();

  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize);
  };
};

// Hook React pour utiliser le fix
export const useMobileScrollFix = () => {
  useEffect(() => {
    const cleanup = initMobileScrollFix();
    return cleanup;
  }, []);
};