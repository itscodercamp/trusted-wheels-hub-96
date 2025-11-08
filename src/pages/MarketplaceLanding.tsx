import { useState, useEffect } from 'react';
import { Car, ArrowRight, Shield, Users, DollarSign, MapPin, Fuel, Gauge, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

const MarketplaceLanding = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = 'https://apis.trustedvehicles.com';

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
    window.open(`https://marketplace.trustedvehicles.com/vehicle/${vehicleId}`, '_blank');
  };

  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every vehicle undergoes a rigorous inspection to ensure quality and transparency."
    },
    {
      icon: Users,
      title: "Genuine Buyers & Sellers",
      description: "Connect with a trusted community for secure and hassle-free transactions."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Access market-driven valuations and competitive prices for all vehicles."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-trust-50 to-blue-100 dark:from-automotive-900 dark:to-automotive-700">
      <Helmet>
        <title>Car Marketplace - Buy Verified Used Cars India | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Browse India's most trusted car marketplace. Buy and sell pre-inspected used cars with verified listings, genuine buyers and sellers, and fair pricing. Thousands of quality vehicles."
        />
        <meta name="keywords" content="car marketplace india, buy used cars online, verified used cars, pre-inspected vehicles, trusted car marketplace" />
        <meta property="og:title" content="Car Marketplace - Buy Verified Used Cars" />
        <meta property="og:description" content="India's trusted marketplace for buying and selling verified used cars" />
        <meta property="og:url" content="https://trustedvehicles.com/marketplace" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/marketplace" />
      </Helmet>
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-automotive-900 dark:text-white mb-4">
            Welcome to the TrustedVehicles Marketplace
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-automotive-700 dark:text-automotive-100 max-w-3xl mx-auto mb-8">
            Your one-stop destination for buying and selling pre-inspected, high-quality used cars.
          </p>
        </div>
      </section>

      {/* Vehicle Listings */}
      <section className="section-padding bg-white dark:bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-automotive-900 dark:text-white mb-4">
            Available Vehicles
          </h2>
          <p className="text-center text-automotive-600 dark:text-automotive-200 mb-12">
            Browse our selection of verified used cars
          </p>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trust-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {vehicles.map((vehicle) => (
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
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-automotive-50 dark:bg-automotive-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-automotive-900 dark:text-white mb-12">
            Why Choose Our Marketplace?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-8">
                  <div className="bg-trust-100 dark:bg-trust-900/30 p-4 rounded-full inline-flex mb-4">
                    <feature.icon className="h-8 w-8 text-trust-600 dark:text-trust-400" />
                  </div>
                  <h3 className="text-xl font-bold text-automotive-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-automotive-600 dark:text-automotive-200">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding trust-gradient text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Connect with trusted sellers and find your perfect vehicle today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MarketplaceLanding;