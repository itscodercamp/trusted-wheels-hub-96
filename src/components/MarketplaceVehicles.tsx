import { useState, useEffect } from 'react';
import { Car, MapPin, Calendar, Fuel, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  variant: string;
  price: number;
  fuelType: string;
  odometer: number;
  rtoState: string;
  imageUrl: string;
}

const MarketplaceVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('https://9000-firebase-studio-1757611792048.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev/api/marketplace/vehicles');
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles');
        }
        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        setError('Failed to load vehicles');
        console.error('Error fetching vehicles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const handleVehicleClick = () => {
    window.open('https://marketplace.trustedvehicles.com', '_blank');
  };

  const formatPrice = (price: number) => {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  };

  const formatOdometer = (odometer: number) => {
    return `${(odometer / 1000).toFixed(0)}k km`;
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Marketplace
          </Badge>
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
            Browse Our Vehicle Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover verified vehicles from trusted dealers and private sellers across India
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading vehicles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        ) : (
          /* Responsive Grid: 2 cols mobile, 3 cols tablet, 6 cols desktop */
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mb-8">
            {vehicles.map((vehicle) => (
              <Card 
                key={vehicle.id} 
                className="cars24-card overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleVehicleClick}
              >
                <div className="relative">
                  <img 
                    src={`https://9000-firebase-studio-1757611792048.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev${vehicle.imageUrl}`} 
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-500 text-white text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-foreground">
                    {formatPrice(vehicle.price)}
                  </div>
                </div>
                
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-bold text-foreground mb-1 text-sm">
                    {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{vehicle.variant}</p>
                  
                  <div className="space-y-1 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{vehicle.rtoState}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                        {formatOdometer(vehicle.odometer)}
                      </div>
                      <div className="flex items-center">
                        <Fuel className="h-3 w-3 mr-1 flex-shrink-0" />
                        {vehicle.fuelType}
                      </div>
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full text-xs h-8">
                    View Details
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={handleVehicleClick}
          >
            <Car className="h-5 w-5 mr-2" />
            Explore Full Marketplace
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Discover thousands of verified vehicles
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceVehicles;