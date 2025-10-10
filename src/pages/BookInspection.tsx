import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Car, MapPin, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Import Select components
import { useToast } from '@/hooks/use-toast';

const BookInspection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    carMake: '',
    carModel: '',
    carYear: '',
    inspectionType: '',
    registrationNumber: '',
    plateNumber: '', // Re-introduced as per provided code
    street: '',
    city: '',
    state: '',
    pinCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'registrationNumber' ? value.toUpperCase() : value // Keep uppercase for registration number
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
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
      const response = await fetch('https://apis.trustedvehicles.com/customerinspection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          carMake: formData.carMake,
          carModel: formData.carModel,
          carYear: formData.carYear,
          inspectionType: formData.inspectionType,
          registrationNumber: formData.registrationNumber,
          // plateNumber is included in formData but not explicitly mapped in the provided body,
          // I'll include it here for completeness if the backend expects it.
          plateNumber: formData.plateNumber, 
          street: formData.street,
          city: formData.city,
          state: formData.state,
          pinCode: formData.pinCode
        }),
      });

      if (response.ok) {
        toast({
          title: "Inspection Booked Successfully!",
          description: "Our team will contact you within 24 hours to schedule your inspection.",
        });
        
        // Reset form
        setFormData({
          fullName: '',
          phoneNumber: '',
          carMake: '',
          carModel: '',
          carYear: '',
          inspectionType: '',
          registrationNumber: '',
          plateNumber: '',
          street: '',
          city: '',
          state: '',
          pinCode: ''
        });
        setCurrentStep(5);
      } else {
        // Attempt to parse error message from response if available
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || 'Failed to book inspection');
      }
    } catch (error: any) { // Explicitly type error as any for message property
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
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.phoneNumber;
      case 2:
        return formData.carMake && formData.carModel && formData.carYear && formData.inspectionType;
      case 3:
        return formData.registrationNumber && formData.plateNumber; // Validation for plateNumber re-introduced
      case 4:
        return formData.street && formData.city && formData.state && formData.pinCode;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-trust-50 to-blue-100">
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
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="carMake">Car Make *</Label>
                    <Input
                      id="carMake"
                      value={formData.carMake}
                      onChange={(e) => handleInputChange('carMake', e.target.value)}
                      placeholder="e.g., Honda, Maruti, Hyundai"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="carModel">Car Model *</Label>
                    <Input
                      id="carModel"
                      value={formData.carModel}
                      onChange={(e) => handleInputChange('carModel', e.target.value)}
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