import { useState } from 'react';
import { Shield, Car, Calculator, Check, Star, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';

const Insurance = () => {
  const { toast } = useToast();
  const [insuranceData, setInsuranceData] = useState({
    name: '',
    phone: '',
    registrationNumber: '',
    insuranceType: ''
  });

  const [showQuote, setShowQuote] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleQuoteGeneration = async () => {
    if (!insuranceData.name || !insuranceData.phone || !insuranceData.registrationNumber || !insuranceData.insuranceType) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://9000-firebase-studio-1757611792048.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev/api/insurance-renewals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(insuranceData)
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Insurance renewal request submitted successfully!"
        });
        setShowQuote(true);
        setInsuranceData({
          name: '',
          phone: '',
          registrationNumber: '',
          insuranceType: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit insurance request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Car Insurance - Compare & Buy Best Plans Online | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Compare and buy car insurance online from top insurers. Get instant quotes, best prices, comprehensive coverage. Zero depreciation, cashless claims available."
        />
        <meta name="keywords" content="car insurance, buy car insurance online, car insurance india, comprehensive car insurance, zero depreciation, car insurance quotes" />
        <meta property="og:title" content="Car Insurance - Best Prices | Trusted Vehicles" />
        <meta property="og:description" content="Compare and buy car insurance online with instant policy issuance" />
        <meta property="og:url" content="https://trustedvehicles.com/insurance" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/insurance" />
      </Helmet>
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
                    <div className="md:col-span-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        placeholder="Enter your full name"
                        value={insuranceData.name}
                        onChange={(e) => setInsuranceData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        placeholder="Enter phone number"
                        value={insuranceData.phone}
                        onChange={(e) => setInsuranceData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="registrationNumber">Registration Number *</Label>
                      <Input 
                        placeholder="e.g., MH12XY1234"
                        value={insuranceData.registrationNumber}
                        onChange={(e) => setInsuranceData(prev => ({ ...prev, registrationNumber: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="insuranceType">Insurance Type *</Label>
                      <Select value={insuranceData.insuranceType} onValueChange={(value) => setInsuranceData(prev => ({ ...prev, insuranceType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Comprehensive">Comprehensive</SelectItem>
                          <SelectItem value="Third Party">Third Party</SelectItem>
                          <SelectItem value="Zero Depreciation">Zero Depreciation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleQuoteGeneration} size="lg" className="w-full" disabled={isSubmitting}>
                    <Calculator className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Insurance Request'}
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
                    
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                      onClick={() => {
                        setInsuranceData(prev => ({ ...prev, insuranceType: plan.type }));
                        const tabsList = document.querySelector('[role="tablist"]');
                        const quoteTab = tabsList?.querySelector('[value="quote"]') as HTMLElement;
                        quoteTab?.click();
                      }}
                    >
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