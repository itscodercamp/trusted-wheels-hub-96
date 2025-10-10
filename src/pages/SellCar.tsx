import { useState } from 'react';
import { Car, Upload, Camera, FileText, DollarSign, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SellCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    variant: '',
    fuelType: '',
    transmission: '',
    kmDriven: '',
    owners: '',
    registrationState: '',
    city: '',
    sellerName: '',
    phone: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://apis.trustedvehicles.com/api/sell-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Car Listed Successfully!",
          description: "We'll contact you soon with potential buyers.",
        });
        
        // Reset form
        setFormData({
          make: '',
          model: '',
          year: '',
          variant: '',
          fuelType: '',
          transmission: '',
          kmDriven: '',
          owners: '',
          registrationState: '',
          city: '',
          sellerName: '',
          phone: '',
          email: '',
          description: ''
        });
      } else {
        // Attempt to parse error message from response if available
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || 'Failed to submit sell request');
      }
    } catch (error: any) { // Explicitly type error as any for message property
      console.error('Error submitting sell request:', error);
      toast({
        title: "Error Submitting Request",
        description: error.message || "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sell Your Car at the <span className="text-primary">Best Price</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant valuation and connect with verified buyers in your area
          </p>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center transform transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Enter Car Details</h3>
                <p className="text-muted-foreground">Provide your car information and get instant valuation</p>
              </CardContent>
            </Card>

            <Card className="text-center transform transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Upload Photos</h3>
                <p className="text-muted-foreground">Add clear photos to attract more buyers</p>
              </CardContent>
            </Card>

            <Card className="text-center transform transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Get Calls</h3>
                <p className="text-muted-foreground">Receive calls from genuine buyers ready to purchase</p>
              </CardContent>
            </Card>
          </div>

          {/* Sell Car Form */}
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Car className="h-6 w-6 mr-2" />
                Sell Your Car - Get Best Price
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Car Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Car Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="make">Make</Label>
                      <Input 
                        placeholder="e.g., Maruti Suzuki, Honda, Hyundai"
                        value={formData.make}
                        onChange={(e) => handleInputChange('make', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="model">Model</Label>
                      <Input 
                        placeholder="Enter model"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Input 
                        placeholder="e.g., 2020"
                        value={formData.year}
                        onChange={(e) => handleInputChange('year', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="variant">Variant</Label>
                      <Input 
                        placeholder="Enter variant"
                        value={formData.variant}
                        onChange={(e) => handleInputChange('variant', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="fuelType">Fuel Type</Label>
                      <Input 
                        placeholder="e.g., Petrol, Diesel, CNG"
                        value={formData.fuelType}
                        onChange={(e) => handleInputChange('fuelType', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="transmission">Transmission</Label>
                      <Input 
                        placeholder="e.g., Manual, Automatic"
                        value={formData.transmission}
                        onChange={(e) => handleInputChange('transmission', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="kmDriven">KM Driven</Label>
                      <Input 
                        placeholder="Enter kilometers"
                        value={formData.kmDriven}
                        onChange={(e) => handleInputChange('kmDriven', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="owners">Number of Owners</Label>
                      <Input 
                        placeholder="e.g., 1st Owner, 2nd Owner"
                        value={formData.owners}
                        onChange={(e) => handleInputChange('owners', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="registrationState">Registration State</Label>
                      <Input 
                        placeholder="e.g., Maharashtra, Delhi"
                        value={formData.registrationState}
                        onChange={(e) => handleInputChange('registrationState', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sellerName">Full Name</Label>
                      <Input 
                        placeholder="Enter your name"
                        value={formData.sellerName}
                        onChange={(e) => handleInputChange('sellerName', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="description">Additional Information</Label>
                  <Textarea 
                    placeholder="Any additional details about your car..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Photo Upload */}
                <div>
                  <Label>Upload Car Photos</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">Drag & drop photos or click to upload</p>
                    <p className="text-sm text-muted-foreground">Upload up to 10 photos (JPG, PNG)</p>
                    <Button variant="outline" className="mt-4">
                      Choose Photos
                    </Button>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  <DollarSign className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Get Instant Valuation & Start Selling'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SellCar;