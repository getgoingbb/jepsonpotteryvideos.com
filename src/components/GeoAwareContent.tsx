import React from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { formatPrice, getLocalizedContent } from '../utils/geolocation';

interface GeoAwareContentProps {
  children: (location: any, formatPrice: (price: number) => string) => React.ReactNode;
}

const GeoAwareContent: React.FC<GeoAwareContentProps> = ({ children }) => {
  const { location, loading } = useGeolocation();

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-16"></div>
      </div>
    );
  }

  const localContent = location ? getLocalizedContent(location) : null;
  const priceFormatter = (price: number) => 
    location ? formatPrice(price, location.currency) : `$${price}`;

  return (
    <>
      {children(localContent, priceFormatter)}
    </>
  );
};

export default GeoAwareContent;