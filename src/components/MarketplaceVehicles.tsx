import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Fuel, Gauge, Calendar } from 'lucide-react';

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

  const handleVehicleClick = (vehicleId: string) => {
    window.location.href = `/marketplace-landing?id=${vehicleId}`;
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

  return (
    <section id="marketplace-section" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Browse Our <span className="text-trust-500">Vehicle Marketplace</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated selection of quality vehicles. All inspected and verified.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {vehicles.slice(0, 8).map((vehicle) => (
            <Card 
              key={vehicle.id} 
              className="trust-card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => handleVehicleClick(vehicle.id)}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={`${API_BASE}${vehicle.imageUrl}`}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {vehicle.verified && (
                  <Badge className="absolute top-2 right-2 bg-trust-500 text-white text-xs">
                    Verified
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 truncate">
                  {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 truncate">{vehicle.variant}</p>
                
                <div className="text-xl sm:text-2xl font-bold text-trust-600 mb-3">
                  ₹{vehicle.price.toLocaleString('en-IN')}
                </div>
                
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span>{vehicle.odometer.toLocaleString()} km</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Fuel className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span>{vehicle.fuelType}</span>
                    </div>
                    <span className="truncate max-w-[80px]">{vehicle.transmission}</span>
                  </div>
                  
                  <div className="flex items-center text-trust-600 pt-2 border-t border-border">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{vehicle.rtoState}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-3 sm:mt-4 btn-primary text-xs sm:text-sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
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
