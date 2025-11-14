import { useState } from 'react';
import { Calculator, CreditCard, Check, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';

const CarLoan = () => {
  const [loanData, setLoanData] = useState({
    name: '',
    phone: '',
    email: '',
    make: '',
    model: '',
    variant: '',
    panNumber: '',
    aadharNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleLoanRequest = async () => {
    if (!loanData.name || !loanData.phone || !loanData.email || !loanData.make || !loanData.model || !loanData.panNumber || !loanData.aadharNumber) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://9000-firebase-studio-1757611792048.cluster-ancjwrkgr5dvux4qug5rbzyc2y.cloudworkstations.dev/api/loan-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanData)
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Loan request submitted successfully! Our team will contact you soon."
        });
        setLoanData({
          name: '',
          phone: '',
          email: '',
          make: '',
          model: '',
          variant: '',
          panNumber: '',
          aadharNumber: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit loan request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const loanFeatures = [
    {
      icon: TrendingUp,
      title: 'Competitive Interest Rates',
      description: 'Starting from 8.5% per annum with flexible tenure options'
    },
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get loan approval in 24 hours with minimal documentation'
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description: 'No hidden charges, complete transparency in all dealings'
    }
  ];

  const eligibilityCriteria = [
    'Age: 21-65 years',
    'Minimum Income: ₹25,000/month',
    'Employment: Salaried/Self-employed',
    'Credit Score: 650+',
    'Work Experience: 2+ years'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Car Loan at Best Rates - EMI Calculator | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Get instant car loan approval with competitive interest rates starting 8.5%. Calculate EMI, flexible tenure, quick disbursal. Apply online for car loan today."
        />
        <meta name="keywords" content="car loan, car loan emi calculator, car finance india, best car loan rates, instant car loan approval, car loan online" />
        <meta property="og:title" content="Car Loan at Best Rates - Trusted Vehicles" />
        <meta property="og:description" content="Instant car loan approval with competitive rates and flexible EMI options" />
        <meta property="og:url" content="https://trustedvehicles.com/car-loan" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/car-loan" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Car Loan at <span className="text-primary">Best Rates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant car loan approval with competitive interest rates and flexible EMI options
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Loan Features & Application */}
          <div className="space-y-6">
            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Why Choose Our Car Loan?</h3>
              {loanFeatures.map((feature, index) => (
                <Card key={index} className="shadow-lg transform transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Eligibility */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {criteria}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Apply Now */}
            <Card className="shadow-lg bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-4">
                  Get pre-approved in minutes with our simple online application
                </p>
                <Button size="lg" className="w-full">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Apply for Car Loan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Interest Rates Table */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Current Interest Rates</h2>
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="text-left p-4">Loan Amount</th>
                      <th className="text-left p-4">Interest Rate</th>
                      <th className="text-left p-4">Processing Fee</th>
                      <th className="text-left p-4">Max Tenure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Up to ₹10 Lakh</td>
                      <td className="p-4 text-primary font-semibold">8.5% - 10.5%</td>
                      <td className="p-4">₹5,000</td>
                      <td className="p-4">7 years</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">₹10L - ₹25L</td>
                      <td className="p-4 text-primary font-semibold">9.0% - 11.0%</td>
                      <td className="p-4">₹10,000</td>
                      <td className="p-4">7 years</td>
                    </tr>
                    <tr>
                      <td className="p-4">Above ₹25 Lakh</td>
                      <td className="p-4 text-primary font-semibold">9.5% - 12.0%</td>
                      <td className="p-4">₹15,000</td>
                      <td className="p-4">7 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CarLoan;