// Utilitaires pour corriger les problèmes de scroll sur mobile

export const initMobileScrollFix = () => {
  // Fix pour iOS Safari - problème de hauteur viewport
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Initialisation
  setVH();
  
  // Mise à jour lors du redimensionnement (rotation, clavier virtuel)
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', () => {
    setTimeout(setVH, 100);
  });

  // Prévention du scroll élastique sur iOS
  const preventElasticScroll = (e: TouchEvent) => {
    const target = e.target as HTMLElement;
    
    // Autorise le scroll sur les éléments scrollables
    if (target.closest('.scrollable') || target.closest('[data-scroll="true"]')) {
      return;
    }
    
    // Empêche le scroll élastique au niveau du body
    if (target === document.body || target === document.documentElement) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      
      // Si on est en haut et qu'on tire vers le bas
      if (scrollTop === 0 && e.touches[0].clientY > e.touches[0].clientY) {
        e.preventDefault();
      }
      
      // Si on est en bas et qu'on tire vers le haut
      if (scrollTop + clientHeight >= scrollHeight && e.touches[0].clientY < e.touches[0].clientY) {
        e.preventDefault();
      }
    }
  };

  // Application du fix uniquement sur iOS
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.addEventListener('touchmove', preventElasticScroll, { passive: false });
  }

  // Fix pour Android - problème de scroll avec les animations
  if (/Android/.test(navigator.userAgent)) {
    // Désactive les animations pendant le scroll
    let scrollTimer: NodeJS.Timeout;
    
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Cleanup function
  return () => {
    window.removeEventListener('resize', setVH);
    window.removeEventListener('orientationchange', setVH);
    
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.removeEventListener('touchmove', preventElasticScroll);
    }
  };
};

// Hook React pour utiliser le fix
export const useMobileScrollFix = () => {
  React.useEffect(() => {
    const cleanup = initMobileScrollFix();
    return cleanup;
  }, []);
};

// CSS à ajouter pour le fix Android
export const mobileScrollCSS = `
  /* Fix pour Android - désactive les animations pendant le scroll */
  .scrolling * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Utilise la variable CSS pour la hauteur viewport */
  .min-h-screen-mobile {
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }
  
  /* Force l'accélération matérielle sur mobile */
  @media (max-width: 768px) {
    .hero-section,
    .page-wrapper,
    .animated-element {
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      will-change: transform;
    }
  }
`;