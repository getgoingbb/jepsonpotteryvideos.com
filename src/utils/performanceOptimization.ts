// Performance Optimization Utilities for Jepson Pottery Videos
// Ensures fast loading and Google Core Web Vitals compliance

export interface ImageOptimizationConfig {
  quality: number;
  format: 'webp' | 'jpeg' | 'auto';
  sizes: string;
  loading: 'lazy' | 'eager';
}

// Optimized image loading configuration
export const getImageConfig = (index: number, isHero: boolean = false): ImageOptimizationConfig => {
  return {
    quality: 85,
    format: 'auto',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    loading: isHero || index < 3 ? 'eager' : 'lazy'
  };
};

// Generate responsive image URLs for Pexels
export const generateResponsiveImageUrl = (
  baseUrl: string, 
  width: number, 
  height: number = Math.round(width * 0.75),
  quality: number = 85
): string => {
  if (baseUrl.includes('pexels.com')) {
    return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&dpr=1`;
  }
  return baseUrl;
};

// Preload critical images
export const preloadCriticalImages = (imageUrls: string[]) => {
  imageUrls.slice(0, 3).forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, options);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Image compression for uploads
export const compressImage = (file: File, maxWidth: number = 1200, quality: number = 0.8): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    
    img.onload = () => {
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(resolve, 'image/jpeg', quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Core Web Vitals optimization
export const optimizeForCoreWebVitals = () => {
  // Reduce layout shift
  const images = document.querySelectorAll('img[data-optimize]');
  images.forEach(img => {
    if (!img.getAttribute('width') || !img.getAttribute('height')) {
      img.setAttribute('width', '800');
      img.setAttribute('height', '600');
    }
  });
  
  // Optimize font loading
  const fontLink = document.createElement('link');
  fontLink.rel = 'preconnect';
  fontLink.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontLink);
};

// SEO-friendly image attributes
export const generateSEOImageAttributes = (
  src: string,
  alt: string,
  title: string,
  keywords: string[]
) => {
  return {
    src,
    alt,
    title,
    'data-keywords': keywords.join(', '),
    'data-seo-optimized': 'true',
    decoding: 'async' as const,
    loading: 'lazy' as const
  };
};