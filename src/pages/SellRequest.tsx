
import { useState } from 'react';
import { DollarSign, Car, MapPin, CheckCircle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SellRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    carMake: '',
    carModel: '',
    carYear: '',
    mileage: '',
    fuelType: '',
    registrationNumber: '',
    expectedPrice: '',
    condition: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Sell request submitted:', formData);
    
    toast({
      title: "Request Submitted Successfully!",
      description: "Our team will contact you within 24 hours for vehicle evaluation.",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-trust-50 to-blue-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto section-padding text-center">
          <Card className="trust-card">
            <CardContent className="p-12">
              <CheckCircle className="h-20 w-20 text-emerald-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-automotive-900 mb-4">
                Sell Request Submitted!
              </h1>
              <p className="text-automotive-600 mb-8">
                Thank you for choosing TrustedVehicles! Our team will contact you within 24 hours to schedule an inspection and provide you with a fair market evaluation.
              </p>
              
              <div className="bg-trust-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-automotive-900 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                    <p className="text-automotive-600">Our team will call you to schedule an inspection</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                    <p className="text-automotive-600">Professional inspection at your location</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                    <p className="text-automotive-600">Receive a detailed evaluation and market price</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                    <p className="text-automotive-600">List your car in our trusted marketplace</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary" onClick={() => window.location.href = '/'}>
                  Return to Home
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/gallery'}>
                  Browse Gallery
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-trust-50 to-blue-100">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-emerald-500 rounded-full mb-6">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-automotive-900 mb-4">
              Sell Your Car
            </h1>
            <p className="text-xl text-automotive-600 max-w-2xl mx-auto">
              Get the best value for your vehicle through our trusted network. We ensure transparent pricing and hassle-free selling experience.
            </p>
          </div>

          {/* Form */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="h-6 w-6 mr-2" />
                Vehicle Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter your city"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="carMake">Car Make *</Label>
                    <Input
                      id="carMake"
                      value={formData.carMake}
                      onChange={(e) => handleInputChange('carMake', e.target.value)}
                      placeholder="e.g., Honda"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="carModel">Car Model *</Label>
                    <Input
                      id="carModel"
                      value={formData.carModel}
                      onChange={(e) => handleInputChange('carModel', e.target.value)}
                      placeholder="e.g., City"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="carYear">Year *</Label>
                    <Input
                      id="carYear"
                      type="number"
                      value={formData.carYear}
                      onChange={(e) => handleInputChange('carYear', e.target.value)}
                      placeholder="e.g., 2020"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="mileage">Mileage (km) *</Label>
                    <Input
                      id="mileage"
                      type="number"
                      value={formData.mileage}
                      onChange={(e) => handleInputChange('mileage', e.target.value)}
                      placeholder="e.g., 45000"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fuelType">Fuel Type *</Label>
                    <Select value={formData.fuelType} onValueChange={(value) => handleInputChange('fuelType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="cng">CNG</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="condition">Vehicle Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => handleInputChange('condition', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="needs-work">Needs Work</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Registration and Price */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      placeholder="e.g., MH12AB1234"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedPrice">Expected Price (₹)</Label>
                    <Input
                      id="expectedPrice"
                      type="number"
                      value={formData.expectedPrice}
                      onChange={(e) => handleInputChange('expectedPrice', e.target.value)}
                      placeholder="e.g., 1250000"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Tell us about any modifications, service history, accidents, or other relevant details..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" size="lg" className="btn-primary w-full md:w-auto">
                    Submit Sell Request
                    <CheckCircle className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SellRequest;
