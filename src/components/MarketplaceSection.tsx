import { Car, MapPin, Calendar, Fuel, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MarketplaceSection = () => {
  const featuredVehicles = [
    {
      id: 1,
      make: "Honda",
      model: "City",
      year: 2020,
      price: "₹12,50,000",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      mileage: "45,000 km",
      fuel: "Petrol",
      location: "Mumbai",
      inspectionScore: 85,
      features: ["Sunroof", "Automatic", "ABS", "Airbags"]
    },
    {
      id: 2,
      make: "Maruti",
      model: "Swift",
      year: 2019,
      price: "₹6,80,000",
      image: "https://images.unsplash.com/photo-1494976688153-c785a74be5de?w=400&h=300&fit=crop",
      mileage: "32,000 km",
      fuel: "Petrol",
      location: "Delhi",
      inspectionScore: 90,
      features: ["Manual", "ABS", "Power Steering", "AC"]
    },
    {
      id: 3,
      make: "Hyundai",
      model: "Creta",
      year: 2021,
      price: "₹14,20,000",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
      mileage: "28,000 km",
      fuel: "Diesel",
      location: "Bangalore",
      inspectionScore: 88,
      features: ["Automatic", "Sunroof", "Leather Seats", "Navigation"]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-emerald-500';
    if (score >= 80) return 'bg-yellow-500';
    if (score >= 70) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted Marketplace
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse verified vehicles from our trusted network. Every car comes with a detailed inspection report
            and transparent pricing.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-8 lg:mb-12">
          {[
            { label: "Verified Cars", value: "5,000+" },
            { label: "Happy Customers", value: "100+" },
            { label: "Coverage", value: "Nagpur" },
            { label: "Avg. Rating", value: "4.8★" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-4 lg:p-6">
              <CardContent className="p-0">
                <div className="text-xl lg:text-3xl font-bold text-trust-500 mb-1 lg:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Vehicles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {featuredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="trust-card overflow-hidden">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.make} ${vehicle.model}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 lg:h-56 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`${getScoreColor(vehicle.inspectionScore)} text-white`}>
                    {vehicle.inspectionScore}/100
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-sm font-bold text-foreground">{vehicle.price}</span>
                </div>
              </div>
              
              <CardContent className="p-4 lg:p-6">
                <div className="mb-3 lg:mb-4">
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {vehicle.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {vehicle.location}
                    </div>
                    <div className="flex items-center">
                      <Fuel className="h-3 w-3 mr-1" />
                      {vehicle.fuel}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3 lg:mb-4">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {vehicle.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{vehicle.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="btn-primary flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Schedule Test Drive
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-trust-50 to-blue-50 dark:from-trust-900/20 dark:to-blue-900/20 rounded-2xl p-6 lg:p-12">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto">
              Tell us your requirements and we'll find the perfect vehicle from our extensive network 
              of trusted dealers and individual sellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Removed "Submit Buy Request" button */}
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/gallery'}
              >
                Browse All Cars
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;