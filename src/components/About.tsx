import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Anchor for Deep Linking */}
        <div id="about-stephen-jepson" className="absolute -top-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master Potter Stephen Jepson
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over six decades, Stephen Jepson has been dedicated to the ancient art of pottery, 
              sharing his expertise through Jepson Pottery Videos. Our comprehensive video series 
              combines traditional techniques with professional instruction, perfect for potters at every level.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From beginner wheel throwing to advanced large-scale pottery (up to 4 feet tall), 
              our video tutorials provide step-by-step guidance. Learn from Stephen Jepson alongside 
              renowned experts like Danish National Champion Bill Gossman and author Tom Shafer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">7</div>
                <div className="text-sm text-gray-600">Video Tutorials</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-amber-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Students Worldwide</div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Our Videos
            </button>
          </div>

          {/* Image - UPDATED WITH AUTHENTIC STEPHEN POTTERY WORKSHOP */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/pottery6.jpg"
                alt="Stephen Jepson master potter working in his pottery studio in Geneva, Florida - authentic pottery workshop environment"
                title="Stephen Jepson - Master Potter at Work in Geneva, Florida Pottery Studio"
                className="w-full h-96 object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback to another pottery image if this one fails
                  const target = e.target as HTMLImageElement;
                  target.src = "/pottery2.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Pottery Instruction from Geneva, Florida
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Stephen Jepson's Expertise:</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Master Potter:</strong> 60+ years professional experience</li>
                <li>• <strong>Video Instruction:</strong> 7 comprehensive pottery tutorials</li>
                <li>• <strong>Large Scale Pottery:</strong> Techniques for 4+ foot vessels</li>
                <li>• <strong>Business Success:</strong> Over $1,000,000 in pottery sales</li>
                <li>• <strong>Location:</strong> Geneva, Seminole County, Florida</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Learn From Expert Instructors:</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Bill Gossman:</strong> Danish National Throwing Champion</li>
                <li>• <strong>USA Olympic Medalist:</strong> Professional throwing techniques</li>
                <li>• <strong>Tom Shafer:</strong> Author of "Pottery Decoration"</li>
                <li>• <strong>Personalized Classes:</strong> Available in Geneva, Florida</li>
                <li>• <strong>Workshops:</strong> Group instruction and speaking engagements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Stephen Jepson */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Stephen Jepson",
            "jobTitle": "Master Potter and Pottery Instructor",
            "url": "https://jepsonpotteryvideos.com/#about-stephen-jepson",
            "image": "https://jepsonpotteryvideos.com/pottery6.jpg",
            "worksFor": {
              "@type": "Organization",
              "name": "Jepson Pottery Videos",
              "url": "https://jepsonpotteryvideos.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Geneva",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "telephone": "(407) 349-5587",
            "email": "stephen@jepsonpotteryvideos.com",
            "knowsAbout": [
              "Pottery Instruction",
              "Wheel Throwing",
              "Hand Building",
              "Large Scale Pottery",
              "Pottery Glazing",
              "Kiln Firing",
              "Pottery Business",
              "Ceramic Arts"
            ],
            "hasCredential": [
              "Master Potter - 60+ years experience",
              "Professional Pottery Instructor",
              "Over $1,000,000 in Pottery Sales",
              "Video Series Creator"
            ],
            "alumniOf": "Professional Pottery Training",
            "award": [
              "Master Potter Certification",
              "Professional Pottery Instructor",
              "Successful Pottery Business Owner"
            ],
            "sameAs": [
              "https://en.wikipedia.org/wiki/Stephen_Jepson",
              "https://never-leave-the-playground.mailchimpsites.com/"
            ]
          })
        }}
      />
    </section>
  );
};

export default About;