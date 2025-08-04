// Geolocation utilities for multi-region deployment
export interface GeoLocation {
  country: string;
  region: string;
  city: string;
  timezone: string;
  currency: string;
  language: string;
}

export const getGeoLocation = async (): Promise<GeoLocation> => {
  try {
    // Try to get location from Cloudflare headers (when deployed)
    const cfCountry = (window as any).CF_COUNTRY;
    if (cfCountry) {
      return getLocationConfig(cfCountry);
    }

    // Fallback to IP geolocation API
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      country: data.country_code || 'US',
      region: data.region || 'Unknown',
      city: data.city || 'Unknown',
      timezone: data.timezone || 'America/New_York',
      currency: data.currency || 'USD',
      language: data.languages?.split(',')[0] || 'en'
    };
  } catch (error) {
    console.warn('Geolocation detection failed, using defaults:', error);
    return getLocationConfig('US');
  }
};

export const getLocationConfig = (countryCode: string): GeoLocation => {
  const configs: Record<string, GeoLocation> = {
    'US': {
      country: 'US',
      region: 'North America',
      city: 'United States',
      timezone: 'America/New_York',
      currency: 'USD',
      language: 'en'
    },
    'CA': {
      country: 'CA',
      region: 'North America', 
      city: 'Canada',
      timezone: 'America/Toronto',
      currency: 'CAD',
      language: 'en'
    },
    'BR': {
      country: 'BR',
      region: 'South America',
      city: 'Brazil',
      timezone: 'America/Sao_Paulo',
      currency: 'BRL',
      language: 'pt'
    },
    'MX': {
      country: 'MX',
      region: 'North America',
      city: 'Mexico',
      timezone: 'America/Mexico_City',
      currency: 'MXN',
      language: 'es'
    }
  };

  return configs[countryCode] || configs['US'];
};

export const formatPrice = (price: number, currency: string): string => {
  const rates: Record<string, number> = {
    'USD': 1,
    'CAD': 1.35,
    'BRL': 5.2,
    'MXN': 18.5
  };

  const convertedPrice = price * (rates[currency] || 1);
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(convertedPrice);
};

export const getLocalizedContent = (location: GeoLocation) => {
  const content: Record<string, any> = {
    'US': {
      phone: '(407) 349-5587',
      email: 'stephen@jepsonpotteryvideos.com',
      address: 'Geneva, Florida, USA',
      shipping: 'Free shipping within the US',
      currency: 'USD'
    },
    'CA': {
      phone: '(407) 349-5587',
      email: 'stephen@jepsonpotteryvideos.com',
      address: 'Geneva, Florida, USA (Ships to Canada)',
      shipping: 'International shipping available to Canada',
      currency: 'CAD'
    },
    'BR': {
      phone: '(407) 349-5587',
      email: 'stephen@jepsonpotteryvideos.com',
      address: 'Geneva, Florida, USA (Ships to Brazil)',
      shipping: 'International shipping available to Brazil',
      currency: 'BRL'
    },
    'MX': {
      phone: '(407) 349-5587',
      email: 'stephen@jepsonpotteryvideos.com',
      address: 'Geneva, Florida, USA (Ships to Mexico)',
      shipping: 'International shipping available to Mexico',
      currency: 'MXN'
    }
  };

  return content[location.country] || content['US'];
};