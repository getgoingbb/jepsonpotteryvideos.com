import { useState, useEffect } from 'react';
import { GeoLocation, getGeoLocation } from '../utils/geolocation';

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        setLoading(true);
        const geoLocation = await getGeoLocation();
        setLocation(geoLocation);
        setError(null);
      } catch (err) {
        setError('Failed to detect location');
        console.error('Geolocation error:', err);
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  return { location, loading, error };
};