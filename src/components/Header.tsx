import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleVideoSeriesClick = () => {
    window.open('https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV', '_blank');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand - POTTERY FOCUSED */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Stephen's Pottery Image as Logo */}
              <div className="h-12 w-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-amber-600">
                <img
                  src="/st1.png"
                  alt="Stephen Jepson - Master Potter"
                  title="Stephen Jepson - Professional Pottery Instruction"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to pottery wheel icon if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="h-12 w-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center"><div class="text-white font-bold text-xl">🏺</div></div>';
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Jepson Pottery Videos
              </h1>
              <p className="text-sm text-gray-600">Professional Pottery Instruction</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/videos" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/videos') 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Video Series
            </Link>
            <Link 
              to="/gallery" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/gallery') 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/classes" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/classes') 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Classes
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-amber-100 text-amber-700' 
                  : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleVideoSeriesClick}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
            >
              <ShoppingCart size={18} className="mr-2" />
              Get Video Series - $29.99
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-xl">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/videos" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/videos') 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                Video Series
              </Link>
              <Link 
                to="/gallery" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/gallery') 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/classes" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/classes') 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                Classes
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4">
                <button
                  onClick={() => {
                    handleVideoSeriesClick();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-center"
                >
                  Get Video Series - $29.99
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;