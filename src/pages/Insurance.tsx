import { useState } from 'react';
import { Shield, Car, Calculator, Check, Star, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Insurance = () => {
  const [insuranceData, setInsuranceData] = useState({
    vehicleType: '',
    carMake: '',
    carModel: '',
    registrationYear: '',
    fuelType: '',
    city: '',
    previousPolicy: ''
  });

  const [showQuote, setShowQuote] = useState(false);

  const insuranceFeatures = [
    {
      icon: Shield,
      title: '24/7 Claim Support',
      description: 'Round-the-clock assistance for all your insurance claims'
    },
    {
      icon: Car,
      title: 'Comprehensive Coverage',
      description: 'Complete protection against accidents, theft, and natural disasters'
    },
    {
      icon: Calculator,
      title: 'Instant Premium Calculator',
      description: 'Get accurate premium quotes in seconds'
    }
  ];

  const insuranceTypes = [
    {
      type: 'Third Party',
      price: '₹2,500 - ₹5,000',
      coverage: 'Legal minimum coverage',
      features: ['Third party liability', 'Legal protection', 'Mandatory by law']
    },
    {
      type: 'Comprehensive',
      price: '₹8,000 - ₹25,000',
      coverage: 'Complete protection',
      features: ['Own damage cover', 'Third party liability', 'Theft protection', 'Natural disaster cover'],
      popular: true
    },
    {
      type: 'Zero Depreciation',
      price: '₹12,000 - ₹35,000',
      coverage: 'Premium protection',
      features: ['No depreciation on claims', 'Full claim amount', 'New car replacement', 'Premium benefits']
    }
  ];

  const handleQuoteGeneration = () => {
    setShowQuote(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Car Insurance at <span className="text-primary">Best Prices</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare and buy car insurance online from top insurers with instant policy issuance
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="quote" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quote">Get Quote</TabsTrigger>
            <TabsTrigger value="compare">Compare Plans</TabsTrigger>
            <TabsTrigger value="claims">Claims Process</TabsTrigger>
          </TabsList>

          <TabsContent value="quote" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quote Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Calculator className="h-6 w-6 mr-2" />
                    Get Insurance Quote
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vehicleType">Vehicle Type</Label>
                      <Select onValueChange={(value) => setInsuranceData(prev => ({ ...prev, vehicleType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="two-wheeler">Two Wheeler</SelectItem>
                          <SelectItem value="commercial">Commercial Vehicle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="carMake">Car Make</Label>
                      <Select onValueChange={(value) => setInsuranceData(prev => ({ ...prev, carMake: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Make" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maruti">Maruti Suzuki</SelectItem>
                          <SelectItem value="hyundai">Hyundai</SelectItem>
                          <SelectItem value="tata">Tata</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="mahindra">Mahindra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="carModel">Car Model</Label>
                      <Input 
                        placeholder="Enter model"
                        value={insuranceData.carModel}
                        onChange={(e) => setInsuranceData(prev => ({ ...prev, carModel: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="registrationYear">Registration Year</Label>
                      <Select onValueChange={(value) => setInsuranceData(prev => ({ ...prev, registrationYear: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="fuelType">Fuel Type</Label>
                      <Select onValueChange={(value) => setInsuranceData(prev => ({ ...prev, fuelType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Fuel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="petrol">Petrol</SelectItem>
                          <SelectItem value="diesel">Diesel</SelectItem>
                          <SelectItem value="cng">CNG</SelectItem>
                          <SelectItem value="electric">Electric</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        placeholder="Enter city"
                        value={insuranceData.city}
                        onChange={(e) => setInsuranceData(prev => ({ ...prev, city: e.target.value }))}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="previousPolicy">Previous Policy</Label>
                      <Select onValueChange={(value) => setInsuranceData(prev => ({ ...prev, previousPolicy: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have existing policy?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, I have existing policy</SelectItem>
                          <SelectItem value="no">No, new insurance</SelectItem>
                          <SelectItem value="expired">Expired policy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleQuoteGeneration} size="lg" className="w-full">
                    <Calculator className="h-5 w-5 mr-2" />
                    Get Free Quote
                  </Button>

                  {showQuote && (
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-primary mb-4">Your Insurance Quotes</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Third Party Insurance</span>
                          <span className="font-semibold">₹3,500/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Comprehensive Insurance</span>
                          <span className="font-semibold">₹15,000/year</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Zero Depreciation</span>
                          <span className="font-semibold">₹22,000/year</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Buy Now</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Features */}
              <div className="space-y-6">
                {insuranceFeatures.map((feature, index) => (
                  <Card key={index} className="shadow-lg transform transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compare" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insuranceTypes.map((plan, index) => (
                <Card key={index} className={`shadow-lg transform transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-primary border-2' : ''}`}>
                  <CardContent className="p-6">
                    {plan.popular && (
                      <Badge className="mb-4 bg-primary text-white">Most Popular</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{plan.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">{plan.coverage}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${plan.popular ? '' : 'variant-outline'}`}>
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="claims" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center shadow-lg transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">1. Report Claim</h3>
                  <p className="text-sm text-muted-foreground">Call our 24/7 helpline or report online</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">2. Submit Documents</h3>
                  <p className="text-sm text-muted-foreground">Upload required documents through our app</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">3. Vehicle Inspection</h3>
                  <p className="text-sm text-muted-foreground">Our expert will inspect your vehicle</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-lg transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">4. Claim Settlement</h3>
                  <p className="text-sm text-muted-foreground">Quick approval and settlement</p>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-700 mb-4">Emergency Claim Support</h3>
                <p className="text-red-600 mb-4">24/7 Helpline for immediate assistance</p>
                <div className="space-y-2">
                  <Button className="bg-red-600 hover:bg-red-700 mr-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call 1800-XXX-XXXX
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600">
                    Report Claim Online
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Insurance;