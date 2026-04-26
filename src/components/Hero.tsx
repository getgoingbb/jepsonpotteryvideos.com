import React, { useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAnalytics } from './AnalyticsProvider';

const Hero = () => {
  const { trackPageView, trackEvent } = useAnalytics();

  useEffect(() => {
    trackPageView('Homepage', 'Jepson Pottery Videos - Professional Pottery Classes');
  }, [trackPageView]);

  const handleExploreGallery = () => {
    trackEvent('click', 'Navigation', 'Explore Gallery Button');
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookClass = () => {
    trackEvent('click', 'CTA', 'Get Video Series Button', 49.99);
    trackEvent('begin_checkout', 'Ecommerce', 'Video Series', 49.99);
    window.open('https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV', '_blank');
  };

  const handleWatchVideos = () => {
    trackEvent('click', 'Navigation', 'Watch Videos Button');
    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSteven = () => {
    trackEvent('click', 'Navigation', 'Contact Steven Button');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Authentic Stephen Jepson Pottery Workshop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/pottery-images-1a.JPG")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Master Potter
          <span className="block text-amber-300">Stephen Jepson</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Learn pottery through professional video instruction and hands-on workshops in Geneva, Florida. 
          From beginner wheel throwing to advanced large-scale pottery techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleExploreGallery}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            Explore Gallery
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
          <button 
            onClick={handleBookClass}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Get Video Series - $49.99
          </button>
          <button 
            onClick={handleWatchVideos}
            className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
          >
            <Play size={20} className="mr-2" />
            Watch Videos
          </button>
        </div>
        
        {/* Workshop Highlight with Contact Steven Button */}
        <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-amber-200 text-sm font-semibold mb-2">
            ✨ Authentic Workshop Experience
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Join Stephen Jepson in his Geneva, Florida pottery studio. Learn wheel throwing, 
            hand building, and advanced techniques in a hands-on workshop environment.
          </p>
          
          {/* Contact Steven Button - Links to Internal Contact Page */}
          <Link 
            to="/contact"
            onClick={handleContactSteven}
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Steven for Classes
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;