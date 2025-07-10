import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Composant pour le monitoring SEO automatique
const SEOMonitoring = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 (à configurer avec votre ID)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }

    // Monitoring des Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Vérification des erreurs SEO critiques
    const checkSEOErrors = () => {
      const errors = [];
      
      // Vérifier la présence du title
      if (!document.title || document.title.length < 30) {
        errors.push('Title trop court ou manquant');
      }
      
      // Vérifier la meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription || (metaDescription as HTMLMetaElement).content.length < 120) {
        errors.push('Meta description trop courte ou manquante');
      }
      
      // Vérifier les images sans alt
      const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
      if (imagesWithoutAlt.length > 0) {
        errors.push(`${imagesWithoutAlt.length} images sans attribut alt`);
      }
      
      // Vérifier les liens sans texte
      const linksWithoutText = document.querySelectorAll('a:empty');
      if (linksWithoutText.length > 0) {
        errors.push(`${linksWithoutText.length} liens sans texte`);
      }
      
      if (errors.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn('Erreurs SEO détectées:', errors);
      }
    };

    // Délai pour laisser le temps au contenu de se charger
    setTimeout(checkSEOErrors, 1000);
  }, [location]);

  return null;
};

export default SEOMonitoring;