import { useState, useEffect } from 'react';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

export const useLocation = () => {
  const [location, setLocation] = useState<LocationState>(() => {
    // Try to load from localStorage on initialization
    const saved = localStorage.getItem('userLocation');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          latitude: parsed.latitude,
          longitude: parsed.longitude,
          error: null,
          loading: false,
        };
      } catch {
        return {
          latitude: null,
          longitude: null,
          error: null,
          loading: false,
        };
      }
    }
    return {
      latitude: null,
      longitude: null,
      error: null,
      loading: false,
    };
  });

  // Auto-request location on first visit
  useEffect(() => {
    const hasAskedForLocation = localStorage.getItem('locationRequested');
    if (!hasAskedForLocation && !location.latitude) {
      requestLocation();
      localStorage.setItem('locationRequested', 'true');
    }
  }, []);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: 'Geolocation is not supported by this browser.',
        loading: false,
      }));
      return;
    }

    setLocation(prev => ({ ...prev, loading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          loading: false,
        };
        setLocation(locationData);
        // Save to localStorage
        localStorage.setItem('userLocation', JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
      },
      (error) => {
        let errorMessage = 'An unknown error occurred.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timeout.';
            break;
        }
        setLocation(prev => ({
          ...prev,
          error: errorMessage,
          loading: false,
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  return { ...location, requestLocation };
};