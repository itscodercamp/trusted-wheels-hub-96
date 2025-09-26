
import { Car, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: 1,
      make: "Honda",
      model: "City",
      year: 2020,
      price: "₹12,50,000",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400",
      verified: true,
      mileage: "45,000 km"
    },
    {
      id: 2,
      make: "Maruti",
      model: "Swift",
      year: 2019,
      price: "₹7,85,000",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400",
      verified: true,
      mileage: "52,000 km"
    },
    {
      id: 3,
      make: "Hyundai",
      model: "Creta",
      year: 2021,
      price: "₹15,75,000",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
      verified: true,
      mileage: "28,000 km"
    },
    {
      id: 4,
      make: "Tata",
      model: "Nexon",
      year: 2020,
      price: "₹9,25,000",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400",
      verified: true,
      mileage: "38,000 km"
    },
    {
      id: 5,
      make: "Mahindra",
      model: "XUV500",
      year: 2019,
      price: "₹13,50,000",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400",
      verified: true,
      mileage: "42,000 km"
    },
    {
      id: 6,
      make: "Kia",
      model: "Seltos",
      year: 2021,
      price: "₹16,85,000",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400",
      verified: true,
      mileage: "25,000 km"
    }
  ];

  const handleCarClick = (carId: number) => {
    // Redirect to marketplace with specific car
    window.open(`https://market.trustedvehicles.in/car/${carId}`, '_blank');
  };

  const handleBrowseAll = () => {
    window.open('https://market.trustedvehicles.in', '_blank');
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-automotive-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-automotive-600 max-w-2xl mx-auto">
            Hand-picked, thoroughly inspected vehicles from our trusted network. 
            Every car comes with a detailed inspection report.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card 
              key={car.id} 
              className="trust-card overflow-hidden cursor-pointer group"
              onClick={() => handleCarClick(car.id)}
            >
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {car.verified && (
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Car className="h-3 w-3 mr-1" />
                    Verified
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-automotive-700">
                  {car.year}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-automotive-900 mb-1">
                    {car.make} {car.model}
                  </h3>
                  <div className="flex items-center text-sm text-automotive-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {car.location}
                  </div>
                  <div className="flex items-center text-sm text-automotive-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {car.mileage}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-trust-600">
                    {car.price}
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-trust-600 hover:text-trust-700 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={handleBrowseAll}
          >
            <Car className="h-5 w-5 mr-2" />
            Browse All Vehicles
          </Button>
          <p className="text-sm text-automotive-600 mt-2">
            Access full marketplace → market.trustedvehicles.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
