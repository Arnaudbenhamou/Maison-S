import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  role?: string;
  'aria-describedby'?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  role,
  'aria-describedby': ariaDescribedBy
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Convert image URLs to WebP format when possible
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('unsplash.com')) {
      // Add WebP format and optimize size for Unsplash images
      const url = new URL(originalSrc);
      url.searchParams.set('fm', 'webp');
      // Qualité réduite sur mobile pour améliorer les performances
      url.searchParams.set('q', isMobile ? '70' : '80');
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      return url.toString();
    }
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Image non disponible: ${alt}`}
      >
        <span className="text-gray-500 text-sm">Image non disponible</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
      <img
        src={getOptimizedSrc(src)}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        // Optimisations mobile
        style={isMobile ? { 
          imageRendering: 'auto',
          transform: 'translateZ(0)', // Force hardware acceleration
        } : {}}
        role={role}
        aria-describedby={ariaDescribedBy}
      />
    </div>
  );
};

export default OptimizedImage;