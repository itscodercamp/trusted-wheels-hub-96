
import { useState } from 'react';
import { Car, MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const featuredCars = [
    {
      id: 1,
      make: "Honda",
      model: "City",
      year: 2020,
      price: "₹12,50,000",
      location: "Mumbai",
      mileage: "45,000 km",
      fuelType: "Petrol",
      image: "/placeholder.svg",
      inspected: true
    },
    {
      id: 2,
      make: "Maruti",
      model: "Swift Dzire",
      year: 2019,
      price: "₹8,75,000",
      location: "Delhi",
      mileage: "32,000 km",
      fuelType: "Petrol",
      image: "/placeholder.svg",
      inspected: true
    },
    {
      id: 3,
      make: "Hyundai",
      model: "Creta",
      year: 2021,
      price: "₹15,25,000",
      location: "Bangalore",
      mileage: "28,000 km",
      fuelType: "Diesel",
      image: "/placeholder.svg",
      inspected: true
    },
    {
      id: 4,
      make: "Tata",
      model: "Nexon",
      year: 2020,
      price: "₹11,50,000",
      location: "Pune",
      mileage: "38,000 km",
      fuelType: "Electric",
      image: "/placeholder.svg",
      inspected: true
    },
    {
      id: 5,
      make: "Mahindra",
      model: "XUV500",
      year: 2019,
      price: "₹14,75,000",
      location: "Chennai",
      mileage: "42,000 km",
      fuelType: "Diesel",
      image: "/placeholder.svg",
      inspected: true
    },
    {
      id: 6,
      make: "Toyota",
      model: "Innova Crysta",
      year: 2021,
      price: "₹18,90,000",
      location: "Hyderabad",
      mileage: "25,000 km",
      fuelType: "Diesel",
      image: "/placeholder.svg",
      inspected: true
    }
  ];

  const filteredCars = featuredCars.filter(car => {
    const matchesSearch = searchTerm === '' || 
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = selectedMake === '' || car.make === selectedMake;
    const matchesLocation = selectedLocation === '' || car.location === selectedLocation;
    
    return matchesSearch && matchesMake && matchesLocation;
  });

  const handleViewMore = (carId: number) => {
    // Redirect to marketplace subdomain
    window.open(`https://market.trustedvehicles.in/car/${carId}`, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Car Gallery
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto mb-8">
            Browse our collection of pre-inspected, trusted vehicles. Every car in our gallery has undergone comprehensive inspection for your peace of mind.
          </p>
          <Button className="btn-primary" onClick={() => window.open('https://market.trustedvehicles.in', '_blank')}>
            <Car className="h-5 w-5 mr-2" />
            Visit Full Marketplace
          </Button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="h-5 w-5 text-automotive-600" />
            <h2 className="text-2xl font-bold text-automotive-900">Filter Cars</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Input
              placeholder="Search by make or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            
            <Select value={selectedMake} onValueChange={setSelectedMake}>
              <SelectTrigger>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Makes</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Maruti">Maruti</SelectItem>
                <SelectItem value="Hyundai">Hyundai</SelectItem>
                <SelectItem value="Tata">Tata</SelectItem>
                <SelectItem value="Mahindra">Mahindra</SelectItem>
                <SelectItem value="Toyota">Toyota</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Pune">Pune</SelectItem>
                <SelectItem value="Chennai">Chennai</SelectItem>
                <SelectItem value="Hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedMake('');
                setSelectedLocation('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="section-padding bg-automotive-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-automotive-900 mb-2">
              Featured Vehicles
            </h2>
            <p className="text-automotive-600">
              Showing {filteredCars.length} of {featuredCars.length} vehicles
            </p>
          </div>

          {filteredCars.length === 0 ? (
            <div className="text-center py-16">
              <Car className="h-16 w-16 text-automotive-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-automotive-600 mb-2">No cars found</h3>
              <p className="text-automotive-500">Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <Card key={car.id} className="trust-card overflow-hidden">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-48 object-cover"
                    />
                    {car.inspected && (
                      <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ✓ Inspected
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-automotive-900">
                      {car.year}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-automotive-900 mb-1">
                        {car.make} {car.model}
                      </h3>
                      <div className="flex items-center text-automotive-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {car.location}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-automotive-500">Mileage:</span>
                        <div className="font-medium text-automotive-900">{car.mileage}</div>
                      </div>
                      <div>
                        <span className="text-automotive-500">Fuel:</span>
                        <div className="font-medium text-automotive-900">{car.fuelType}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-trust-600">
                        {car.price}
                      </div>
                      <Button size="sm" onClick={() => handleViewMore(car.id)}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding trust-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our full marketplace has thousands of verified vehicles. Visit our complete platform for the best selection.
          </p>
          <Button size="lg" className="bg-white text-trust-600 hover:bg-white/90" onClick={() => window.open('https://market.trustedvehicles.in', '_blank')}>
            Browse Full Marketplace
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
