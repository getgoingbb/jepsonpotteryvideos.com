import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useAnalytics } from './AnalyticsProvider';

const Gallery = () => {
  const { trackPageView, trackEvent } = useAnalytics();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    trackPageView('Gallery', 'Stephen Jepson Pottery Gallery');
  }, [trackPageView]);

  // Pure pottery images - no playground content
  const potteryImages = [
    {
      id: 1,
      src: "/pottery2.jpg",
      title: "Stephen Jepson Large Ceramic Vase",
      description: "Beautiful large-scale ceramic vases demonstrating advanced throwing techniques taught in our video series",
      category: "Wheel Throwing"
    },
    {
      id: 2,
      src: "/pottery3.jpg",
      title: "Handmade Pottery Collection",
      description: "Complete handcrafted pottery collection with various glazing techniques",
      category: "Glazing"
    },
    {
      id: 3,
      src: "/pottery4.jpg",
      title: "Professional Wheel Thrown Pieces",
      description: "Professional wheel thrown pottery showcasing advanced centering techniques",
      category: "Wheel Throwing"
    },
    {
      id: 4,
      src: "/pottery5.jpg",
      title: "Large Scale Pottery - 4 Feet Tall",
      description: "Large scale pottery pieces up to 4 feet tall demonstrating advanced techniques",
      category: "Large Scale"
    },
    {
      id: 5,
      src: "/pottery6.jpg",
      title: "Stephen Jepson Workshop",
      description: "Stephen Jepson demonstrating pottery techniques in his Geneva, Florida workshop",
      category: "Workshop"
    },
    {
      id: 6,
      src: "/pottery7.jpg",
      title: "Pottery Decoration Techniques",
      description: "Professional pottery decoration showcasing sgraffito and slip trailing techniques",
      category: "Decoration"
    },
    {
      id: 7,
      src: "/pottery8.jpg",
      title: "Glazed Ceramic Art Pieces",
      description: "Professional glazed ceramic pieces showcasing various firing techniques",
      category: "Glazing"
    },
    {
      id: 8,
      src: "/pottery-images-1a.JPG",
      title: "Artisan Pottery Collection",
      description: "Beautiful artisan pottery collection with stoneware and porcelain pieces",
      category: "Collection"
    }
  ];

  const openLightbox = useCallback((index: number) => {
    setSelectedImageIndex(index);
    trackEvent('gallery_open', 'Gallery', potteryImages[index].title);
  }, [trackEvent, potteryImages]);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else if (selectedImageIndex === 0) {
      setSelectedImageIndex(potteryImages.length - 1);
    }
  }, [selectedImageIndex, potteryImages.length]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < potteryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else if (selectedImageIndex === potteryImages.length - 1) {
      setSelectedImageIndex(0);
    }
  }, [selectedImageIndex, potteryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        switch (e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            goToPrevious();
            break;
          case 'ArrowRight':
            goToNext();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, goToPrevious, goToNext]);

  const selectedImage = selectedImageIndex !== null ? potteryImages[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Optimized Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stephen Jepson Pottery Gallery - Geneva, Florida
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore professional pottery artistry and craftsmanship by master potter Stephen Jepson. 
            Each handmade piece showcases advanced ceramic techniques taught in our video instruction series.
          </p>
        </div>

        {/* Pure Pottery Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {potteryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={`${image.title} - handcrafted pottery by Stephen Jepson`}
                  title={`${image.title} - Professional pottery from Geneva, Florida`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/pottery2.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed line-clamp-2">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-200">
                      <ZoomIn className="text-white" size={20} />
                    </button>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {image.category}
                </div>
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                  {index + 1} of {potteryImages.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Gallery Information */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Pottery Gallery
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Each piece in this collection represents decades of pottery expertise and craftsmanship. 
              From wheel throwing to hand building, glazing to firing, these works showcase the techniques 
              taught in Stephen Jepson's comprehensive video instruction series.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Advanced Techniques</h4>
                <p className="text-gray-600 text-sm">
                  Large-scale pottery, wheel throwing mastery, and professional glazing methods
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">🎨 Artistic Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Beautiful forms, creative glazing, and masterful ceramic artistry
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2">📚 Educational Value</h4>
                <p className="text-gray-600 text-sm">
                  Each piece demonstrates techniques you can learn in our video series
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn These Techniques
              </button>
              <button
                onClick={() => window.open('tel:407-349-5587')}
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Stephen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors duration-200 z-10 bg-black/50 rounded-full p-2"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            {potteryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 z-10 hover:scale-110"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 z-10 hover:scale-110"
                >
                  →
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm z-10">
              {selectedImageIndex + 1} of {potteryImages.length}
            </div>

            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                title={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{selectedImage.title}</p>
                    <p className="text-sm text-gray-300 mt-1">{selectedImage.description}</p>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Stephen Jepson • Geneva, Florida • (407) 349-5587
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs opacity-75">
              Use ← → arrow keys or click arrows to navigate • ESC to close
            </div>
          </div>
        </div>
      )}

      {/* Structured Data for Gallery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Stephen Jepson Pottery Gallery",
            "description": "Professional pottery gallery featuring handcrafted ceramic pieces by master potter Stephen Jepson from Geneva, Florida",
            "url": "https://jepsonpotteryvideos.com/#gallery",
            "creator": {
              "@type": "Person",
              "name": "Stephen Jepson",
              "jobTitle": "Master Potter",
              "url": "https://jepsonpotteryvideos.com"
            },
            "image": potteryImages.map(image => ({
              "@type": "ImageObject",
              "name": image.title,
              "description": image.description,
              "url": `https://jepsonpotteryvideos.com${image.src}`,
              "creator": {
                "@type": "Person",
                "name": "Stephen Jepson"
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default Gallery;