import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, ExternalLink, Star } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSignup = () => {
    window.open('https://never-leave-the-playground.mailchimpsites.com/', '_blank');
  };

  const handleGoogleReview = () => {
    // Track review click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Reviews',
        event_label: 'Google Review Request',
        link_url: 'https://g.page/jepson-pottery-videos/review?mp'
      });
    }
    
    window.open('https://g.page/jepson-pottery-videos/review?mp', '_blank');
  };

  const handleWellnessSiteClick = () => {
    // Track external link click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'External Links',
        event_label: 'Never Leave the Playground',
        link_url: 'https://neverleavetheplayground.com'
      });
    }
    
    window.open('https://neverleavetheplayground.com', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand - POTTERY FOCUSED */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold">🏺</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Jepson Pottery Videos
                </h3>
                <p className="text-gray-400 text-sm">Professional Pottery Instruction</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Master pottery techniques with Stephen Jepson's comprehensive video instruction series. 
              Learn wheel throwing, hand building, glazing, and advanced pottery methods from Geneva, Florida.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:407-349-5587"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center text-sm font-semibold"
              >
                <Phone size={16} className="mr-2" />
                (407) 349-5587
              </a>
              <a 
                href="mailto:stephen@jepsonpotteryvideos.com"
                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center text-sm font-semibold"
              >
                <Mail size={16} className="mr-2" />
                Email
              </a>
            </div>
          </div>

          {/* Quick Links - POTTERY FOCUSED */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Video Series</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Pottery Gallery</Link></li>
              <li><Link to="/classes" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Pottery Classes</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact & Classes</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Student Reviews</Link></li>
              <li>
                <button 
                  onClick={handleNewsletterSignup}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center"
                >
                  <ExternalLink size={14} className="mr-2" />
                  Newsletter Signup
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Reviews - POTTERY FOCUSED */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Pottery Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Video Series ($29.99)</span></li>
              <li><span className="text-gray-300">Wheel Throwing Classes</span></li>
              <li><span className="text-gray-300">Hand Building Instruction</span></li>
              <li><span className="text-gray-300">Glazing & Firing Techniques</span></li>
              <li><span className="text-gray-300">Large Scale Pottery (4ft+)</span></li>
              <li><span className="text-gray-300">Custom Pottery Orders</span></li>
            </ul>
            
            {/* Google Reviews Section */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Share Your Experience</h5>
              <button
                onClick={handleGoogleReview}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center text-sm font-semibold"
              >
                <Star size={16} className="mr-2" />
                Leave Google Review
              </button>
              <p className="text-xs text-gray-400 mt-2">
                Help others discover pottery instruction
              </p>
            </div>
            
            {/* Related Sites - FIXED TO OPEN EXTERNALLY */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Also by Stephen Jepson</h5>
              <a
                href="https://stephen.jepsonpotteryvideos.com"
                target="_blank"
                rel="noopener"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center text-sm mb-2"
              >
                <ExternalLink size={14} className="mr-2" />
                Pottery Master Class Videos
              </a>
              <a
                href="https://jepson-pottery-blog.netlify.app"
                target="_blank"
                rel="noopener"
                className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center text-sm mb-2"
              >
                <ExternalLink size={14} className="mr-2" />
                Pottery Blog
              </a>
              <a
                href="https://www.instagram.com/jepsonpotteryvideos/"
                target="_blank"
                rel="noopener"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center text-sm mb-2"
              >
                <ExternalLink size={14} className="mr-2" />
                Instagram
              </a>
              <button
                onClick={handleWellnessSiteClick}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center text-sm"
              >
                <ExternalLink size={14} className="mr-2" />
                Never Leave the Playground
              </button>
              <p className="text-xs text-gray-400 mt-1">
                Wellness speaking & corporate health programs
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <p>© 2025 Jepson Pottery Videos - Stephen Jepson. All rights reserved.</p>
            <p className="text-xs mt-1">Professional Pottery Instruction • Video Series • Geneva, Florida</p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin size={16} className="mr-2" />
              Geneva, Florida
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Heart size={16} className="mr-2 text-amber-400" />
              Master Potter Since 1960s
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Star size={16} className="mr-2 text-yellow-400" />
              5.0 Stars • 8 Reviews
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;