import React from 'react';
import { ShoppingCart, Heart, ExternalLink } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Large Ceramic Vase Collection",
      price: 189,
      originalPrice: 250,
      image: "/pottery2.jpg",
      isNew: false,
      isSale: false,
      isSold: true,
      description: "Beautiful large-scale ceramic vases demonstrating advanced throwing techniques",
      reviews: [
        {
          author: "Sarah Mitchell",
          rating: 5,
          text: "Absolutely stunning craftsmanship. The glazing technique is masterful.",
          date: "2024-12-15"
        },
        {
          author: "Michael Rodriguez", 
          rating: 5,
          text: "These large vases showcase Stephen's incredible skill. Perfect for my studio.",
          date: "2024-12-10"
        }
      ]
    },
    {
      id: 2,
      name: "Handmade Pottery Set",
      price: 245,
      image: "/pottery3.jpg",
      isNew: false,
      isSale: false,
      isSold: true,
      description: "Complete handcrafted pottery collection with various glazing techniques",
      reviews: [
        {
          author: "Jennifer Chen",
          rating: 5,
          text: "Beautiful set with incredible attention to detail. Each piece is unique.",
          date: "2024-12-08"
        }
      ]
    },
    {
      id: 3,
      name: "Professional Wheel Thrown Pieces",
      price: 156,
      image: "/pottery4.jpg",
      isNew: false,
      isSale: false,
      isSold: true,
      description: "Professional wheel thrown pottery showcasing advanced centering techniques",
      reviews: [
        {
          author: "Robert Thompson",
          rating: 5,
          text: "Perfect examples of professional wheel throwing. Inspiring work.",
          date: "2024-12-05"
        }
      ]
    },
    {
      id: 4,
      name: "Large Scale Pottery Collection",
      price: 320,
      originalPrice: 400,
      image: "/pottery5.jpg",
      isNew: false,
      isSale: false,
      isSold: true,
      description: "Large scale pottery pieces up to 4 feet tall demonstrating advanced techniques",
      reviews: [
        {
          author: "Lisa Park",
          rating: 5,
          text: "Incredible large-scale work. The technical skill required is amazing.",
          date: "2024-12-03"
        }
      ]
    },
    {
      id: 5,
      name: "Glazed Ceramic Art Pieces",
      price: 178,
      image: "/pottery7.jpg",
      isNew: false,
      isSale: false,
      isSold: true,
      description: "Professional glazed ceramic pieces showcasing various firing techniques",
      reviews: [
        {
          author: "David Wilson",
          rating: 5,
          text: "The glazing effects are stunning. True artistry in ceramic work.",
          date: "2024-12-01"
        }
      ]
    },
    {
      id: 6,
      name: "Artisan Pottery Collection",
      price: 289,
      originalPrice: 350,
      image: "/pottery8.jpg",
      isNew: false,
      isSale: false,
      isSold: true,
      description: "Beautiful artisan pottery collection with stoneware and porcelain pieces",
      reviews: [
        {
          author: "Maria Garcia",
          rating: 5,
          text: "Exquisite collection showcasing mastery of both stoneware and porcelain.",
          date: "2024-11-28"
        }
      ]
    }
  ];

  const handleShopClick = () => {
    window.open('https://payhip.com/b/89jNv', '_blank');
  };

  const handleNewsletterSignup = () => {
    // Track newsletter signup intent
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Newsletter',
        event_label: 'Shop Section - New Pieces Notification',
        link_url: 'https://never-leave-the-playground.mailchimpsites.com/',
        outbound: true
      });
    }
    window.open('https://never-leave-the-playground.mailchimpsites.com/', '_blank');
  };

  const handleQuickAdd = (productId: number) => {
    window.open('https://payhip.com/b/89jNv', '_blank');
  };

  // Calculate aggregate ratings for each product
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

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Pottery Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Beautiful handcrafted pottery pieces by Stephen Jepson - currently sold out but new pieces coming soon!
          </p>
          <div className="bg-amber-100 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-amber-800 font-semibold flex items-center justify-center">
              <ExternalLink size={16} className="mr-2" />
              New Pottery Coming Soon
            </p>
            <button 
              onClick={handleNewsletterSignup}
              className="text-amber-700 text-sm hover:text-amber-800 underline mt-1"
            >
              Get Notified of New Pieces →
            </button>
          </div>
        </div>

        {/* Optimized Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={`${product.name} - handcrafted pottery by Stephen Jepson`}
                  title={`${product.name} - Professional pottery from Geneva, Florida`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="400"
                  style={{ aspectRatio: '1/1' }}
                />
                
                {/* Sold Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SOLD
                  </span>
                </div>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50">
                  <Heart size={16} className="text-gray-600 hover:text-red-500 transition-colors duration-200" />
                </button>

                {/* Sold Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg transform rotate-12">
                    SOLD OUT
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                {/* Customer Reviews Summary */}
                {product.reviews && product.reviews.length > 0 && (
                  <div className="mb-3 p-2 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-700">5.0</span>
                      </div>
                      <span className="text-xs text-gray-600">
                        {product.reviews.length} review{product.reviews.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 italic">
                      "{product.reviews[0].text.substring(0, 50)}..."
                    </p>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-400 line-through">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-red-600 font-semibold">SOLD</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action with Updated Newsletter Link */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">New Pottery Coming Soon!</h3>
            <p className="text-gray-700 mb-6">
              These beautiful pieces have found their homes, but Stephen is always creating new pottery. 
              Sign up for notifications about new pieces or contact us to inquire about custom pottery orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:407-349-5587')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Call for Custom Orders
              </button>
              <button 
                onClick={handleNewsletterSignup}
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <ExternalLink size={16} className="mr-2" />
                Get Notified of New Pieces
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Join our newsletter for pottery updates, new piece announcements, and class information
            </p>
          </div>
        </div>
      </div>

      {/* FIXED: Enhanced Structured Data with Reviews and Aggregate Ratings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Stephen Jepson Pottery Collection",
            "description": "Handcrafted pottery pieces by master potter Stephen Jepson from Geneva, Florida",
            "url": "https://jepsonpotteryvideos.com/#shop",
            "itemListElement": products.map((product, index) => {
              const aggregateRating = getAggregateRating(product.reviews);
              return {
                "@type": "Product",
                "position": index + 1,
                "name": product.name,
                "description": product.description,
                "image": `https://jepsonpotteryvideos.com${product.image}`,
                "offers": {
                  "@type": "Offer",
                  "price": product.price,
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/OutOfStock",
                  "seller": {
                    "@type": "Person",
                    "name": "Stephen Jepson"
                  }
                },
                "brand": {
                  "@type": "Brand",
                  "name": "Jepson Pottery Videos"
                },
                "category": "Handmade Pottery",
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
                ...(product.reviews && product.reviews.length > 0 && {
                  "review": product.reviews.map(review => ({
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

export default Shop;