// Utilitaires SEO pour optimiser le référencement

export const generatePageTitle = (pageTitle: string, siteName: string = 'Maison Sealiah'): string => {
  return `${pageTitle} | ${siteName}`;
};

export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (keywords: string[]): string => {
  return keywords.join(', ');
};

export const generateCanonicalUrl = (path: string, baseUrl: string = 'https://www.maisonsealiah.fr'): string => {
  return `${baseUrl}${path}`;
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return JSON.stringify(baseStructure, null, 2);
};

// Génération de données structurées pour les articles
export const generateArticleStructuredData = (article: any) => {
  return generateStructuredData('Article', {
    headline: article.title,
    description: article.excerpt,
    image: article.featured_image,
    author: {
      '@type': 'Person',
      name: article.author_name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maison Sealiah',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.maisonsealiah.fr/logo.svg',
      },
    },
    datePublished: article.published_at,
    dateModified: article.updated_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.canonical_url,
    },
    keywords: article.meta_keywords?.join(', '),
    articleSection: article.category,
    wordCount: article.content.split(/\s+/).length,
    timeRequired: `PT${article.reading_time}M`,
  });
};

// Validation SEO
export const validateSEO = (element: HTMLElement) => {
  const issues: string[] = [];
  
  // Vérifier les images sans alt
  const images = element.querySelectorAll('img:not([alt])');
  if (images.length > 0) {
    issues.push(`${images.length} images sans attribut alt`);
  }
  
  // Vérifier les liens sans texte
  const emptyLinks = element.querySelectorAll('a:empty');
  if (emptyLinks.length > 0) {
    issues.push(`${emptyLinks.length} liens vides`);
  }
  
  // Vérifier la hiérarchie des titres
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const h1Count = element.querySelectorAll('h1').length;
  
  if (h1Count === 0) {
    issues.push('Aucun titre H1 trouvé');
  } else if (h1Count > 1) {
    issues.push(`${h1Count} titres H1 trouvés (recommandé: 1 seul)`);
  }
  
  return issues;
};

// Monitoring des Core Web Vitals
export const trackWebVitals = () => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const sendToAnalytics = (metric: any) => {
        // Envoyer les métriques à Google Analytics ou autre service
        if ((window as any).gtag) {
          (window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }
      };

      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getFCP(sendToAnalytics);
      getLCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });
  }
};