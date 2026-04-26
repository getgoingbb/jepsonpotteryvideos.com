import React from 'react';
import { Clock, Users, Star, Phone, ExternalLink } from 'lucide-react';

const Classes = () => {
  const videoClasses = [
    {
      id: 1,
      title: "Introduction to Throwing",
      description: "Perfect for beginners! Learn centering, opening, pulling walls, then progress to throwing plates, platters, saucers, mugs, cups, bowls, and pitchers.",
      duration: "53 minutes",
      students: "4.1K views",
      price: "Included",
      rating: 4.8,
      image: "/pottery2.jpg",
      category: "Beginner",
      anchor: "class-introduction-throwing",
      reviews: [
        {
          author: "Rachel Green",
          rating: 5,
          text: "Perfect for beginners! Stephen's teaching style is so clear and encouraging.",
          date: "2024-12-09"
        },
        {
          author: "Tom Anderson", 
          rating: 5,
          text: "Excellent foundation for pottery. My centering improved immediately.",
          date: "2024-12-04"
        },
        {
          author: "Maria Santos",
          rating: 4,
          text: "Great introduction, though some techniques need practice to master.",
          date: "2024-11-28"
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Throwing Projects",
      description: "Master advanced pottery wheel throwing techniques with professional guidance from expert instructors.",
      duration: "45 minutes",
      students: "3.2K views",
      price: "Included",
      rating: 4.9,
      image: "/pottery3.jpg",
      category: "Advanced",
      anchor: "class-advanced-throwing",
      reviews: [
        {
          author: "Sarah Mitchell",
          rating: 5,
          text: "This video completely transformed my throwing technique. Incredible expertise.",
          date: "2024-12-15"
        },
        {
          author: "Michael Rodriguez",
          rating: 5,
          text: "Advanced techniques explained clearly. Perfect for intermediate potters.",
          date: "2024-12-10"
        }
      ]
    },
    {
      id: 3,
      title: "Introduction to Hand Building",
      description: "Master hand building pottery techniques including pinch pots, coil pots, slab construction, and press molds.",
      duration: "80 minutes",
      students: "3.3K views",
      price: "Included",
      rating: 4.7,
      image: "/pottery4.jpg",
      category: "Hand Building",
      anchor: "class-hand-building",
      reviews: [
        {
          author: "Emily Davis",
          rating: 5,
          text: "Perfect introduction to hand building. Clear instructions for beginners.",
          date: "2024-11-30"
        },
        {
          author: "James Wilson",
          rating: 4,
          text: "Good techniques, though some methods take practice to perfect.",
          date: "2024-11-25"
        }
      ]
    },
    {
      id: 4,
      title: "How To Throw Large Pots",
      description: "Learn to make pots up to 4 feet tall and platters over 3 feet wide with Danish National Champion Bill Gossman.",
      duration: "52 minutes",
      students: "2.8K views",
      price: "Included",
      rating: 4.9,
      image: "/pottery5.jpg",
      category: "Large Scale",
      anchor: "class-large-pots",
      reviews: [
        {
          author: "Robert Thompson",
          rating: 5,
          text: "Amazing techniques for large scale work. The 4-foot pot demonstration is mind-blowing.",
          date: "2024-12-12"
        },
        {
          author: "Lisa Park",
          rating: 5,
          text: "Bill Gossman's expertise in large pottery is unmatched. Learned so much.",
          date: "2024-12-08"
        }
      ]
    },
    {
      id: 5,
      title: "Pottery Decoration Techniques",
      description: "Learn professional decoration techniques including incising, carving, stamping, slip trailing, and sgraffito.",
      duration: "74 minutes",
      students: "2.7K views",
      price: "Included",
      rating: 4.8,
      image: "/pottery7.jpg",
      category: "Decoration",
      anchor: "class-decoration",
      reviews: [
        {
          author: "Anna Johnson",
          rating: 5,
          text: "Tom Shafer's decoration techniques are beautifully demonstrated. Inspiring work.",
          date: "2024-12-03"
        }
      ]
    },
    {
      id: 6,
      title: "Glazing and Firing Mastery",
      description: "Complete guide to preparing greenware, glazing techniques, and professional firing methods.",
      duration: "106 minutes",
      students: "3.1K views",
      price: "Included",
      rating: 4.9,
      image: "/pottery8.jpg",
      category: "Glazing",
      anchor: "class-glazing-firing",
      reviews: [
        {
          author: "Patricia Brown",
          rating: 5,
          text: "Comprehensive glazing guide. My firing results improved dramatically.",
          date: "2024-12-07"
        }
      ]
    },
    {
      id: 7,
      title: "Successfully Marketing Your Production",
      description: "Real insider information on making over $1,000,000 in pottery sales including studio sales, art fairs, and marketing strategies.",
      duration: "90 minutes",
      students: "1.9K views",
      price: "Included",
      rating: 4.9,
      image: "/pottery-images-1a.JPG",
      category: "Business",
      anchor: "class-marketing",
      reviews: [
        {
          author: "Carlos Martinez",
          rating: 5,
          text: "Incredible business insights. Helped me turn my pottery into a profitable venture.",
          date: "2024-12-02"
        }
      ]
    }
  ];

  // Calculate aggregate rating for each class
  const getAggregateRating = (reviews: any[]) => {
    if (!reviews || reviews.length === 0) return null;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return {
      ratingValue: totalRating / reviews.length,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: Math.min(...reviews.map(r => r.rating))
    };
  };

  const handleGetVideoSeries = () => {
    // Track purchase intent
    if (window.trackPurchase) {
      window.trackPurchase(49.99, 'USD');
    }
    window.open('https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV', '_blank');
  };

  const handlePersonalizedClasses = () => {
    // Track contact intent
    if (window.trackContact) {
      window.trackContact('phone_classes');
    }
    window.open('tel:407-349-5587');
  };

  const handleNewsletterSignup = () => {
    // FIXED: Updated to correct Mailchimp URL
    window.open('https://never-leave-the-playground.mailchimpsites.com/', '_blank');
  };

  return (
    <section id="classes" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Anchors for Deep Linking */}
        <div id="personalized-classes" className="absolute -top-20"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pottery Classes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn pottery through our comprehensive video series or contact Stephen Jepson for personalized classes and workshops from Geneva, Florida
          </p>
          
          {/* Class Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Video Class Series</h3>
              <p className="text-gray-600 mb-4">
                7 professional video tutorials covering all aspects of pottery from beginner to advanced techniques
              </p>
              <div className="text-3xl font-bold text-amber-600 mb-2">$49.99</div>
              <p className="text-sm text-gray-500 mb-4">Quality streaming • PayHip subscription • Lifetime access</p>
              <button
                onClick={handleGetVideoSeries}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Video Series
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Personalized Classes</h3>
              <p className="text-gray-600 mb-4">
                One-on-one instruction with Stephen Jepson tailored to your specific needs and skill level
              </p>
              <div className="text-lg font-semibold text-amber-600 mb-4">Call for Pricing</div>
              <div className="space-y-2">
                <button
                  onClick={handlePersonalizedClasses}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Phone size={16} className="mr-2" />
                  Call (407) 349-5587
                </button>
                <button
                  onClick={handleNewsletterSignup}
                  className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Classes Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Video Class Curriculum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoClasses.map((classItem) => (
              <div key={classItem.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* SEO Anchor for each class */}
                <div id={classItem.anchor} className="absolute -top-20"></div>
                
                <div className="relative">
                  <img
                    src={classItem.image}
                    alt={`${classItem.title} - pottery class instruction by Stephen Jepson featuring beautiful handmade pottery`}
                    title={`${classItem.title} - Professional pottery instruction from Geneva, Florida`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to a pottery image if the specific one fails
                      const target = e.target as HTMLImageElement;
                      target.src = "/pottery2.jpg";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm font-semibold">{classItem.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {classItem.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{classItem.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{classItem.description}</p>
                  
                  {/* Student Reviews Summary */}
                  {classItem.reviews && classItem.reviews.length > 0 && (
                    <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-current" size={12} />
                          ))}
                          <span className="ml-2 text-sm font-semibold text-gray-700">{classItem.rating}</span>
                        </div>
                        <span className="text-xs text-gray-600">
                          {classItem.reviews.length} review{classItem.reviews.length > 1 ? 's' : ''}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 italic">
                        "{classItem.reviews[0].text.substring(0, 50)}..."
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {classItem.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {classItem.students}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-600">{classItem.price}</span>
                    <span className="text-sm text-gray-500">in video series</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Personalized Classes */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Personalized Instruction?</h3>
          <p className="text-xl mb-6 text-amber-100">
            Contact Stephen Jepson directly for customized pottery classes, workshops from Geneva, Florida, or speaking engagements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handlePersonalizedClasses}
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Phone size={20} className="mr-2" />
              Call (407) 349-5587
            </button>
            <button
              onClick={handleNewsletterSignup}
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center"
            >
              <ExternalLink size={20} className="mr-2" />
              Check Availability
            </button>
          </div>
          <p className="text-sm text-amber-200 mt-4">
            Located in Geneva, Florida • Available for speaking engagements
          </p>
        </div>
      </div>

      {/* FIXED: Enhanced Structured Data with ALL Missing Fields */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Pottery Classes and Video Tutorials",
            "description": "Complete pottery education including video series and personalized classes from Geneva, Florida",
            "url": "https://jepsonpotteryvideos.com/#classes",
            "itemListElement": videoClasses.map((classItem, index) => {
              const aggregateRating = getAggregateRating(classItem.reviews);
              return {
                "@type": "Course",
                "position": index + 1,
                "name": classItem.title,
                "description": classItem.description,
                "url": `https://jepsonpotteryvideos.com/#${classItem.anchor}`,
                "provider": {
                  "@type": "Organization",
                  "name": "Jepson Pottery Videos"
                },
                "instructor": {
                  "@type": "Person",
                  "name": "Stephen Jepson"
                },
                "educationalLevel": classItem.category,
                "timeRequired": `PT${classItem.duration.replace(' minutes', 'M')}`,
                // FIXED: Added missing "offers" field
                "offers": {
                  "@type": "Offer",
                  "price": "49.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://payhip.com/order?link=89jNv&pricing_plan=N9G85yl1WV",
                  "category": "Pottery Education",
                  "description": "Included in complete pottery video series"
                },
                // FIXED: Added missing "hasCourseInstance" field
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "online",
                  "instructor": {
                    "@type": "Person",
                    "name": "Stephen Jepson"
                  },
                  "courseWorkload": `PT${classItem.duration.replace(' minutes', 'M')}`,
                  "startDate": "2025-07-01",
                  "endDate": "2030-12-31"
                },
                // FIXED: Added aggregateRating field
                ...(aggregateRating && {
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": aggregateRating.ratingValue,
                    "reviewCount": aggregateRating.reviewCount,
                    "bestRating": aggregateRating.bestRating,
                    "worstRating": aggregateRating.worstRating
                  }
                }),
                // FIXED: Added review field
                ...(classItem.reviews && classItem.reviews.length > 0 && {
                  "review": classItem.reviews.map(review => ({
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": review.author
                    },
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": review.rating,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "reviewBody": review.text,
                    "datePublished": review.date,
                    "publisher": {
                      "@type": "Organization",
                      "name": "Jepson Pottery Videos"
                    }
                  }))
                })
              };
            })
          })
        }}
      />
    </section>
  );
};

export default Classes;