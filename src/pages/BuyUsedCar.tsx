import { useState } from 'react';
import { Car, Search, Filter, MapPin, Heart, Star, Calendar, Fuel, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';

const BuyUsedCar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    priceRange: '',
    fuelType: '',
    year: '',
  });

  const featuredCars = [
    {
      id: 1,
      make: 'Maruti Suzuki',
      model: 'Swift VDI',
      year: 2020,
      price: 650000,
      location: 'Mumbai',
      mileage: 35000,
      fuelType: 'Diesel',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
      verified: true,
      features: ['ABS', 'Airbags', 'AC', 'Power Steering']
    },
    {
      id: 2,
      make: 'Hyundai',
      model: 'Creta SX',
      year: 2019,
      price: 1250000,
      location: 'Delhi',
      mileage: 42000,
      fuelType: 'Petrol',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      verified: true,
      features: ['Sunroof', 'Touchscreen', 'Parking Sensors', 'Cruise Control']
    },
    {
      id: 3,
      make: 'Tata',
      model: 'Nexon XM',
      year: 2021,
      price: 950000,
      location: 'Bangalore',
      mileage: 28000,
      fuelType: 'Electric',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
      verified: true,
      features: ['Electric', 'Fast Charging', 'Touchscreen', 'Connected Car']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Buy Certified Used Cars - Pre-Inspected & Verified | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Buy certified used cars with Trusted Vehicles. All cars professionally inspected, verified history, best prices. Wide selection of pre-owned vehicles with warranty across India."
        />
        <meta name="keywords" content="buy used car, certified used cars, pre-inspected cars, buy second hand car, verified used cars india, certified pre-owned vehicles" />
        <meta property="og:title" content="Buy Certified Used Cars - Trusted Vehicles" />
        <meta property="og:description" content="Pre-inspected and verified used cars with complete transparency and warranty" />
        <meta property="og:url" content="https://trustedvehicles.com/buy-used-car" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/buy-used-car" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Buy Your Perfect <span className="text-primary">Used Car</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find verified, inspected used cars with complete transparency and best prices
            </p>
          </div>

          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by make, model, or location..."
                    className="pl-10 h-12"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full lg:w-48 h-12">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maruti">Maruti Suzuki</SelectItem>
                    <SelectItem value="hyundai">Hyundai</SelectItem>
                    <SelectItem value="tata">Tata</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full lg:w-48 h-12">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500000">Under ₹5 Lakh</SelectItem>
                    <SelectItem value="500000-1000000">₹5-10 Lakh</SelectItem>
                    <SelectItem value="1000000-1500000">₹10-15 Lakh</SelectItem>
                    <SelectItem value="1500000+">Above ₹15 Lakh</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="h-12 px-8">
                  <Filter className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Used Cars</h2>
            <Button variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              Sort by Distance
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Card key={car.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={car.image} 
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {car.verified && (
                      <Badge className="bg-green-500 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {car.make} {car.model}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-sm">{car.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-2xl font-bold text-primary mb-4">
                    ₹{car.price.toLocaleString()}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {car.year} • {car.mileage.toLocaleString()} km
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Fuel className="h-4 w-4 mr-2" />
                      {car.fuelType}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {car.location}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">View Details</Button>
                    <Button variant="outline" className="flex-1">
                      Test Drive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyUsedCar;