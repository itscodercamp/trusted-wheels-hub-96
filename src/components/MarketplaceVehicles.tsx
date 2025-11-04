import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Fuel, Gauge, Calendar } from 'lucide-react';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  variant: string;
  price: number;
  year: number;
  odometer: number;
  fuelType: string;
  transmission: string;
  rtoState: string;
  imageUrl: string;
  verified: boolean;
}

const MarketplaceVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_BASE = 'https://9000-firebase-studio-1757611792048.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev';

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/marketplace/vehicles`);
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  // Auto-slide every 7 seconds
  useEffect(() => {
    if (vehicles.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [vehicles.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
  };

  const getVisibleVehicles = () => {
    if (vehicles.length === 0) return [];
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(vehicles[(currentIndex + i) % vehicles.length]);
    }
    return visible;
  };

  if (loading) {
    return (
      <section id="marketplace-section" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Browse Our <span className="text-trust-500">Vehicle Marketplace</span>
            </h2>
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-500"></div>
          </div>
        </div>
      </section>
    );
  }

  const visibleVehicles = getVisibleVehicles();

  return (
    <section id="marketplace-section" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Browse Our <span className="text-trust-500">Vehicle Marketplace</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated selection of quality vehicles. All inspected and verified.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-background hover:bg-trust-500 hover:text-white -ml-4 hidden lg:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-background hover:bg-trust-500 hover:text-white -mr-4 hidden lg:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Vehicle Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleVehicles.map((vehicle, index) => (
              <Card key={`${vehicle.id}-${index}`} className="trust-card overflow-hidden group animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${API_BASE}${vehicle.imageUrl}`}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {vehicle.verified && (
                    <Badge className="absolute top-2 right-2 bg-trust-500 text-white">
                      Verified
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-foreground mb-2 truncate">
                    {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{vehicle.variant}</p>
                  
                  <div className="text-2xl font-bold text-trust-600 mb-3">
                    ₹{vehicle.price.toLocaleString('en-IN')}
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{vehicle.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-1" />
                        <span>{vehicle.odometer.toLocaleString()} km</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-1" />
                        <span>{vehicle.fuelType}</span>
                      </div>
                      <span>{vehicle.transmission}</span>
                    </div>
                    
                    <div className="flex items-center text-trust-600 pt-2 border-t border-border">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="truncate">{vehicle.rtoState}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 btn-primary">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {vehicles.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-trust-500' : 'w-2 bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => window.location.href = '/marketplace-landing'}
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceVehicles;
