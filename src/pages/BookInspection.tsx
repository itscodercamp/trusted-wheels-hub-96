import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Car, MapPin, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

const BookInspection = () => {
  const [searchParams] = useSearchParams();
  const isPDI = searchParams.get('type') === 'pdi';
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    make: '',
    model: '',
    // Regular inspection fields
    carYear: '',
    inspectionType: '',
    registrationNumber: '',
    plateNumber: '',
    street: '',
    state: '',
    pinCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'registrationNumber' ? value.toUpperCase() : value
    }));
  };

  const handleNext = () => {
    if (currentStep < (isPDI ? 2 : 5)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const apiUrl = isPDI 
        ? 'https://9000-firebase-studio-1757611792048.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev/api/pdi-inspections'
        : 'https://apis.trustedvehicles.com/api/customerinspection';
      
      const payload = isPDI ? {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        make: formData.make,
        model: formData.model
      } : {
        fullName: formData.name,
        phoneNumber: formData.phone,
        carMake: formData.make,
        carModel: formData.model,
        carYear: formData.carYear,
        inspectionType: formData.inspectionType,
        registrationNumber: formData.registrationNumber,
        plateNumber: formData.plateNumber,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        pinCode: formData.pinCode
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast({
          title: "Inspection Booked Successfully!",
          description: "Our team will contact you within 24 hours to schedule your inspection.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          make: '',
          model: '',
          carYear: '',
          inspectionType: '',
          registrationNumber: '',
          plateNumber: '',
          street: '',
          state: '',
          pinCode: ''
        });
        setCurrentStep(isPDI ? 2 : 5);
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || 'Failed to book inspection');
      }
    } catch (error: any) {
      console.error('Error booking inspection:', error);
      toast({
        title: "Error Booking Inspection",
        description: error.message || "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Car Details", icon: Car },
    { number: 3, title: "Inspection & Registration", icon: FileText }, // Updated title for clarity
    { number: 4, title: "Address", icon: MapPin },
    { number: 5, title: "Confirmation", icon: CheckCircle }
  ];

  const isStepValid = () => {
    if (isPDI) {
      return currentStep === 1 ? 
        formData.name && formData.phone && formData.email && formData.city && formData.make && formData.model :
        true;
    }
    
    switch (currentStep) {
      case 1:
        return formData.name && formData.phone;
      case 2:
        return formData.make && formData.model && formData.carYear && formData.inspectionType;
      case 3:
        return formData.registrationNumber && formData.plateNumber;
      case 4:
        return formData.street && formData.city && formData.state && formData.pinCode;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-trust-50 to-blue-100">
      <Helmet>
        <title>Book Car Inspection - Free Professional 200-Point Check | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Book professional car inspection service with Trusted Vehicles. 200-point check by certified experts. Free inspection with car selling. Get instant booking across India."
        />
        <meta name="keywords" content="book car inspection, professional car check, vehicle inspection india, 200 point inspection, car inspection service, certified car inspection" />
        <meta property="og:title" content="Book Car Inspection - Trusted Vehicles" />
        <meta property="og:description" content="Professional 200-point car inspection by certified experts. Free with car selling." />
        <meta property="og:url" content="https://trustedvehicles.com/book-inspection" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/book-inspection" />
      </Helmet>
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-automotive-900 mb-4">
              Book Your Car Inspection
            </h1>
            <p className="text-xl text-automotive-600">
              Professional 200-point inspection by certified experts
            </p>
          </div>

          {/* Progress Steps (Icons Only) */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-trust-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  {/* Removed the span for step.title to keep icons-only as per previous request */}
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block absolute h-1 w-24 mt-6 ${
                      currentStep > step.number ? 'bg-trust-500' : 'bg-gray-200'
                    }`} style={{ left: `${(index + 1) * 20}%` }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                {React.createElement(steps[currentStep - 1]?.icon, { className: "h-6 w-6 mr-2" })}
                Step {currentStep}: {steps[currentStep - 1]?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  {isPDI ? (
                    <>
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
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
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
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
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="make">Car Make *</Label>
                        <Input
                          id="make"
                          value={formData.make}
                          onChange={(e) => handleInputChange('make', e.target.value)}
                          placeholder="e.g., Maruti"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="model">Car Model *</Label>
                        <Input
                          id="model"
                          value={formData.model}
                          onChange={(e) => handleInputChange('model', e.target.value)}
                          placeholder="e.g., Swift"
                          className="mt-1"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
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
                          className="mt-1"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {currentStep === 2 && !isPDI && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="make">Car Make *</Label>
                    <Input
                      id="make"
                      value={formData.make}
                      onChange={(e) => handleInputChange('make', e.target.value)}
                      placeholder="e.g., Honda, Maruti, Hyundai"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="model">Car Model *</Label>
                    <Input
                      id="model"
                      value={formData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                      placeholder="e.g., City, Swift, Creta"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="carYear">Manufacturing Year *</Label>
                    <Input
                      id="carYear"
                      type="number"
                      value={formData.carYear}
                      onChange={(e) => handleInputChange('carYear', e.target.value)}
                      placeholder="e.g., 2020"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inspectionType">Inspection Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('inspectionType', value)} value={formData.inspectionType}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select inspection type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pre-purchase">Pre-Purchase Inspection</SelectItem>
                        <SelectItem value="bank-loan">Bank Loan Valuation</SelectItem>
                        <SelectItem value="general">General Inspection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      placeholder="e.g., MH12AB1234"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="plateNumber">Number Plate *</Label>
                    <Input
                      id="plateNumber"
                      value={formData.plateNumber}
                      onChange={(e) => handleInputChange('plateNumber', e.target.value)}
                      placeholder="Complete number plate details"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="street">Street Address *</Label>
                    <Input
                      id="street"
                      value={formData.street}
                      onChange={(e) => handleInputChange('street', e.target.value)}
                      placeholder="Enter street address"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Enter city"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="Enter state"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="pinCode">PIN Code *</Label>
                    <Input
                      id="pinCode"
                      value={formData.pinCode}
                      onChange={(e) => handleInputChange('pinCode', e.target.value)}
                      placeholder="Enter PIN code"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="text-center space-y-6">
                  <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-6">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                      Inspection Booked Successfully!
                    </h3>
                    <p className="text-emerald-700">
                      Our team will contact you within 24 hours to schedule your professional car inspection.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h4 className="font-semibold text-automotive-900 mb-4">What happens next?</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                        <p className="text-automotive-600">Our team will call you to confirm details and schedule</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                        <p className="text-automotive-600">Professional inspection at your preferred location</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-trust-500 rounded-full mt-2"></div>
                        <p className="text-automotive-600">Detailed report delivered within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="btn-primary" onClick={() => window.location.href = '/'}>
                    Return to Home
                  </Button>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="btn-primary"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!isStepValid() || isSubmitting}
                      className="btn-primary"
                    >
                      {isSubmitting ? 'Booking...' : 'Book Inspection'}
                      <CheckCircle className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookInspection;