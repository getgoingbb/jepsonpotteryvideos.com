import React, { useState, useCallback } from 'react';
import { generateResponsiveImageUrl, generateSEOImageAttributes } from '../utils/performanceOptimization';

interface SEOOptimizedImageProps {
  src: string;
  alt: string;
  title: string;
  keywords?: string[];
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const SEOOptimizedImage: React.FC<SEOOptimizedImageProps> = ({
  src,
  alt,
  title,
  keywords = [],
  className = '',
  width = 800,
  height = 600,
  priority = false,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const optimizedSrc = generateResponsiveImageUrl(src, width, height);
  const imageAttributes = generateSEOImageAttributes(optimizedSrc, alt, title, keywords);

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
          style={{ width, height }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Optimized image */}
      <img
        {...imageAttributes}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        style={{ aspectRatio: `${width}/${height}` }}
      />
      
      {/* Error fallback */}
      {hasError && (
        <div 
          className={`bg-gray-100 flex items-center justify-center ${className}`}
          style={{ width, height }}
        >
          <div className="text-gray-500 text-sm text-center p-4">
            <p>Image unavailable</p>
            <p className="text-xs mt-1">Stephen Jepson Pottery</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOOptimizedImage;