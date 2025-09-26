import { useState } from 'react';
import { Car, Star, Fuel, Calendar, Users, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const NewCars = () => {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    fuelType: '',
    bodyType: ''
  });

  const newCars = [
    {
      id: 1,
      make: 'Maruti Suzuki',
      model: 'Baleno',
      variant: 'Alpha CVT',
      price: { min: 680000, max: 980000 },
      launchDate: '2024',
      fuelType: 'Petrol',
      mileage: '22.35 kmpl',
      seating: 5,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
      features: ['CVT', 'Touchscreen', 'ABS', 'Airbags'],
      isNew: true
    },
    {
      id: 2,
      make: 'Hyundai',
      model: 'Creta',
      variant: 'SX(O) Turbo',
      price: { min: 1100000, max: 1800000 },
      launchDate: '2024',
      fuelType: 'Petrol',
      mileage: '16.8 kmpl',
      seating: 5,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop',
      features: ['Sunroof', 'Wireless Charging', 'Ventilated Seats', 'ADAS'],
      isNew: true
    },
    {
      id: 3,
      make: 'Tata',
      model: 'Nexon EV',
      variant: 'Max XZ+ LUX',
      price: { min: 1450000, max: 1950000 },
      launchDate: '2024',
      fuelType: 'Electric',
      mileage: '453 km range',
      seating: 5,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
      features: ['Fast Charging', 'Connected Car', 'Premium Interior', 'EV'],
      isNew: true
    },
    {
      id: 4,
      make: 'Honda',
      model: 'City Hybrid',
      variant: 'ZX CVT',
      price: { min: 1550000, max: 1750000 },
      launchDate: '2024',
      fuelType: 'Hybrid',
      mileage: '26.5 kmpl',
      seating: 5,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&h=300&fit=crop',
      features: ['Hybrid', 'Lane Watch', 'Cruise Control', 'Alexa'],
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">New Cars</span> 2024
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the newest car models with latest features, best prices and financing options
            </p>
          </div>

          {/* Search and Filter */}
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search new cars by make, model..."
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

      {/* New Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Latest New Cars</h2>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="mileage">Best Mileage</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newCars.map((car) => (
              <Card key={car.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={car.image} 
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {car.isNew && (
                      <Badge className="bg-green-500 text-white">
                        New Launch
                      </Badge>
                    )}
                    <Badge className="bg-primary text-white">
                      {car.launchDate}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 rounded-full px-2 py-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      <span className="text-xs font-medium">{car.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{car.variant}</p>
                  
                  <p className="text-xl font-bold text-primary mb-4">
                    ₹{(car.price.min / 100000).toFixed(1)}L - ₹{(car.price.max / 100000).toFixed(1)}L
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Fuel className="h-4 w-4 mr-1" />
                        <span>{car.fuelType}</span>
                      </div>
                      <span className="text-muted-foreground">{car.mileage}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{car.seating} Seater</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{car.launchDate}</span>
                      </div>
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
                    <Button className="flex-1 text-xs">View Details</Button>
                    <Button variant="outline" className="flex-1 text-xs">
                      Book Test Drive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Cars
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Can't Find Your Dream Car?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you find the perfect new car that matches your needs and budget
          </p>
          <Button size="lg" className="mr-4">
            Get Expert Advice
          </Button>
          <Button size="lg" variant="outline">
            Compare Cars
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NewCars;