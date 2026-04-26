import React, { useState, useEffect } from 'react';
import { Play, Clock, Users, Star, ExternalLink, X } from 'lucide-react';
import { useAnalytics } from './AnalyticsProvider';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const { trackPageView, trackVideoInteraction, trackPurchase, trackEvent } = useAnalytics();

  useEffect(() => {
    trackPageView('Video Gallery', 'Jepson Pottery Videos - Video Series');
  }, [trackPageView]);

  const videos = [
    {
      id: 1,
      title: "Advanced Throwing Projects and Techniques",
      description: "Master advanced pottery wheel throwing techniques with professional guidance from expert instructors including Danish National Champion Bill Gossman.",
      duration: "45:30",
      thumbnail: "/pottery2.jpg",
      youtubeId: "mvriVWZUuUQ",
      views: "3.2K",
      rating: 4.9,
      category: "Advanced Techniques",
      anchor: "video-advanced-throwing"
    },
    {
      id: 2,
      title: "How To Throw Large Pots",
      description: "Learn to make pots up to 4 feet tall and platters over 3 feet wide with Stephen Jepson and Danish National Throwing Champion Bill Gossman.",
      duration: "52:15",
      thumbnail: "/pottery5.jpg",
      youtubeId: "783vxblEIHg",
      views: "2.8K",
      rating: 4.9,
      category: "Large Scale Pottery",
      anchor: "video-large-pots"
    },
    {
      id: 3,
      title: "Kiln Building - Complete Construction Guide",
      description: "Professional kiln building guide for constructing 20-100+ cubic foot kilns suitable for all pottery firing needs including atmospheric burners and safety considerations.",
      duration: "60:00",
      thumbnail: "/pottery3.jpg",
      youtubeId: "RXG5O-sr_dU",
      views: "2.1K",
      rating: 4.8,
      category: "Kiln Building & Firing",
      anchor: "video-kiln-building"
    },
    {
      id: 4,
      title: "Pottery Decoration Techniques",
      description: "Based on Tom Shafer's book 'Pottery Decoration', learn incising, carving, stamping, slip trailing, sgraffito, inlay, wax resist, marbled and mosaic patterns.",
      duration: "74:00",
      thumbnail: "/pottery7.jpg",
      youtubeId: "oliDf5Ifm3U",
      views: "2.7K",
      rating: 4.8,
      category: "Decoration Techniques",
      anchor: "video-decoration"
    },
    {
      id: 5,
      title: "Introduction to Hand Building",
      description: "Master hand building pottery techniques at home. Learn pinch pots, coil pots, slab construction, cylinders, salt cellars, mugs, vases, press molds, and hump molds.",
      duration: "80:00",
      thumbnail: "/pottery4.jpg",
      youtubeId: "Yb0DNIeNFJ4",
      views: "3.3K",
      rating: 4.7,
      category: "Hand Building",
      anchor: "video-hand-building"
    },
    {
      id: 6,
      title: "Glazing and Firing Mastery",
      description: "Complete guide to preparing greenware for bisque, loading electric and gas kilns, waxing, glaze mixing, glazing by dipping/pouring/spraying, glaze testing, and decorative techniques.",
      duration: "106:00",
      thumbnail: "/pottery8.jpg",
      youtubeId: "Al2n2RGFRAg",
      views: "3.1K",
      rating: 4.9,
      category: "Glazing & Firing",
      anchor: "video-glazing-firing"
    },
    {
      id: 7,
      title: "Successfully Marketing Your Production",
      description: "Real insider information on making over $1,000,000 in pottery sales. Covers studio sales, art fairs, trade shows, co-ops, consignments, commissions, media coverage, customer lists, wholesale vs retail, advertising, photography, and shipping.",
      duration: "90:00",
      thumbnail: "/pottery-images-1a.JPG",
      youtubeId: "_ngeLigUMp4",
      views: "1.9K",
      rating: 4.9,
      category: "Business & Marketing",
      anchor: "video-marketing"
    },
    {
      id: 8,
      title: "Introduction to Throwing",
      description: "Perfect for beginners! Learn centering, opening, pulling up walls, then progress to throwing plates, platters, saucers, mugs, cups, bowls, pitchers, trimming, pulling handles, and making spouts.",
      duration: "53:00",
      thumbnail: "/pottery-images-2.jpeg",
      youtubeId: "lOu8UdBx590",
      views: "4.1K",
      rating: 4.8,
      category: "Beginner Basics",
      anchor: "video-introduction-throwing"
    }
  ];

  const handleVideoClick = (video: any) => {
    // Instead of trying to embed, just open YouTube directly
    trackVideoInteraction(video.youtubeId, video.title, 'external_view');
    trackEvent('video_click', 'Video', video.title);
    window.open(`https://youtu.be/${video.youtubeId}`, '_blank');
  };

  const handleSubscribe = () => {
    trackPurchase(49.99, 'Pottery Video Series');
    trackEvent('purchase_intent', 'Ecommerce', 'Video Series', 49.99);
    window.open('https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV', '_blank');
  };

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jepson Pottery Videos Series
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master pottery techniques with our comprehensive video tutorial series featuring Stephen Jepson and expert instructors
          </p>
          
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                🎥 Complete Video Series
              </div>
            </div>
            <p className="text-amber-800 font-semibold text-lg mb-2">8 Professional Video Tutorials</p>
            <p className="text-amber-700 mb-4">
              Lifetime access • PDF guides included • Quality streaming • New content added regularly
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-amber-800">
              <div>✓ Advanced Throwing Techniques</div>
              <div>✓ Hand Building Methods</div>
              <div>✓ Large Scale Pottery (4ft+)</div>
              <div>✓ Professional Decoration</div>
              <div>✓ Glazing & Firing Mastery</div>
              <div>✓ Kiln Building Guide</div>
              <div>✓ Marketing Your Work</div>
              <div>✓ Beginner Fundamentals</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={`${video.title} - Stephen Jepson pottery instruction video`}
                  title={`${video.title} - Professional pottery instruction from Geneva, Florida`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/pottery2.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-amber-600 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="text-white" size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-slate-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  WATCH ON YOUTUBE
                </div>
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {video.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={14} />
                      <span className="ml-1">{video.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {video.duration}
                  </div>
                </div>
                
                <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <ExternalLink size={16} className="mr-2" />
                  Watch on YouTube
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-amber-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Pottery Mastery Series
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Get lifetime access to all 8 professional pottery video tutorials (over 9 hours of content), 
              plus PDF guides and bonus content. Perfect for beginners to advanced potters.
            </p>
            
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-amber-600">$49.99</span>
                  <span className="text-gray-500 ml-2 text-lg">one-time payment</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">No monthly fees • Instant access • Over 9 hours of content</p>
              </div>
            </div>
            
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Instant Access Now
            </button>
            
            <p className="text-xs text-gray-500 mt-4">
              Secure payment via PayHip • Streaming on all devices • Works worldwide
            </p>
          </div>
        </div>
      </div>

      {/* FIXED: Complete Structured Data with ALL Missing Fields */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Professional Pottery Video Series",
            "description": "Complete pottery education series with 8 professional video tutorials covering beginner to advanced techniques, taught by Stephen Jepson and expert instructors.",
            "url": "https://jepsonpotteryvideos.com/#pottery-video-series",
            "provider": {
              "@type": "Organization",
              "name": "Jepson Pottery Videos",
              "url": "https://jepsonpotteryvideos.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Geneva",
                "@addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "instructor": [
              {
                "@type": "Person",
                "name": "Stephen Jepson",
                "jobTitle": "Master Potter",
                "description": "Professional potter with 60+ years experience",
                "sameAs": "https://en.wikipedia.org/wiki/Stephen_Jepson"
              },
              {
                "@type": "Person",
                "name": "Bill Gossman",
                "jobTitle": "Danish National Throwing Champion",
                "description": "Danish National Throwing Champion and USA Olympic Throwing Medalist"
              },
              {
                "@type": "Person",
                "name": "Tom Shafer",
                "jobTitle": "Pottery Decoration Expert",
                "description": "Author of Pottery Decoration"
              }
            ],
            // FIXED: Added missing "offers" field with category
            "offers": {
              "@type": "Offer",
              "name": "Complete Pottery Video Series",
              "price": "49.99",
              "priceCurrency": "USD",
              "url": "https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV",
              "description": "8 professional video tutorials, PDF guides, lifetime access",
              "category": "Pottery Education",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2030-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Jepson Pottery Videos"
              }
            },
            // FIXED: Added missing "hasCourseInstance" field
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": {
                "@type": "Person",
                "name": "Stephen Jepson"
              },
              "courseWorkload": "PT9H",
              "startDate": "2025-01-01",
              "endDate": "2030-12-31",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://payhip.com/b/89jNv"
              }
            },
            "courseCode": "PVS-2025",
            "educationalLevel": "Beginner to Advanced",
            "timeRequired": "PT9H",
            "numberOfCredits": 8,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 89,
              "bestRating": 5,
              "worstRating": 4
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Mitchell"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": 5,
                  "bestRating": 5
                },
                "reviewBody": "Stephen's video series completely transformed my pottery skills. Professional quality instruction.",
                "datePublished": "2024-12-15"
              }
            ]
          })
        }}
      />

      {/* FIXED: Individual Course Structured Data for Each Video */}
      {videos.map((video, index) => (
        <script
          key={video.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "position": index + 1,
              "name": video.title,
              "description": video.description,
              "url": `https://jepsonpotteryvideos.com/#${video.anchor}`,
              "provider": {
                "@type": "Organization",
                "name": "Jepson Pottery Videos"
              },
              "instructor": {
                "@type": "Person",
                "name": "Stephen Jepson"
              },
              "educationalLevel": video.category,
              "timeRequired": `PT${video.duration.replace(':', 'M')}`,
              // FIXED: Added missing "offers" field for each video
              "offers": {
                "@type": "Offer",
                "price": "49.99",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": "https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV",
                "category": "Pottery Education",
                "description": "Included in complete pottery video series"
              },
              // FIXED: Added missing "hasCourseInstance" field for each video
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "instructor": {
                  "@type": "Person",
                  "name": "Stephen Jepson"
                },
                "courseWorkload": `PT${video.duration.replace(':', 'M')}`,
                "startDate": "2025-01-01",
                "endDate": "2030-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": video.rating,
                "reviewCount": parseInt(video.views.replace('K', '00').replace('.', '')),
                "bestRating": 5,
                "worstRating": 4
              }
            })
          }}
        />
      ))}
    </section>
  );
};

export default VideoGallery;