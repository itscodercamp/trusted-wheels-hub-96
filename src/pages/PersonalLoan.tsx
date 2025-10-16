import { useState } from 'react';
import { Calculator, User, Clock, Shield, Check, CreditCard, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const PersonalLoan = () => {
  const [loanData, setLoanData] = useState({
    loanAmount: [500000],
    loanTenure: [3],
    monthlyIncome: '',
    loanPurpose: '',
    employmentType: ''
  });

  const [showEMI, setShowEMI] = useState(false);

  const calculateEMI = () => {
    const principal = loanData.loanAmount[0];
    const rate = 12 / 12 / 100; // 12% annual rate
    const tenure = loanData.loanTenure[0] * 12;
    
    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    setShowEMI(true);
    return Math.round(emi);
  };

  const loanFeatures = [
    {
      icon: Clock,
      title: 'Instant Approval',
      description: 'Get approval in 5 minutes with minimal documentation'
    },
    {
      icon: Shield,
      title: 'No Collateral Required',
      description: 'Unsecured personal loans with competitive rates'
    },
    {
      icon: User,
      title: 'Flexible Usage',
      description: 'Use for any personal need - medical, travel, education, etc.'
    }
  ];

  const eligibilityCriteria = [
    'Age: 21-60 years',
    'Minimum Income: ₹20,000/month',
    'Employment: Salaried/Self-employed',
    'Credit Score: 700+',
    'Work Experience: 1+ years'
  ];

  const loanPurposes = [
    { value: 'medical', label: 'Medical Emergency' },
    { value: 'education', label: 'Education' },
    { value: 'travel', label: 'Travel & Vacation' },
    { value: 'wedding', label: 'Wedding Expenses' },
    { value: 'home-renovation', label: 'Home Renovation' },
    { value: 'debt-consolidation', label: 'Debt Consolidation' },
    { value: 'business', label: 'Business Purpose' },
    { value: 'others', label: 'Others' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Personal Loan at Lowest Rates - Instant Approval | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Get instant personal loan up to ₹50 lakhs at lowest interest rates. Quick approval in 5 minutes, minimal documentation. Apply online for personal loan in India."
        />
        <meta name="keywords" content="personal loan, instant loan approval, low interest personal loan, quick loan india, online personal loan" />
        <meta property="og:title" content="Personal Loan at Lowest Rates - Instant Approval" />
        <meta property="og:description" content="Get instant personal loan up to ₹50 lakhs with lowest interest rates and quick approval" />
        <meta property="og:url" content="https://trustedvehicles.com/personal-loan" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/personal-loan" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Personal Loan at <span className="text-primary">Lowest Rates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant personal loan approval up to ₹50 lakhs with minimal documentation
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* EMI Calculator */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Personal Loan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Loan Amount: ₹{loanData.loanAmount[0].toLocaleString()}</Label>
                <Slider
                  value={loanData.loanAmount}
                  onValueChange={(value) => setLoanData(prev => ({ ...prev, loanAmount: value }))}
                  max={5000000}
                  min={50000}
                  step={50000}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>₹50K</span>
                  <span>₹50L</span>
                </div>
              </div>

              <div>
                <Label>Loan Tenure: {loanData.loanTenure[0]} years</Label>
                <Slider
                  value={loanData.loanTenure}
                  onValueChange={(value) => setLoanData(prev => ({ ...prev, loanTenure: value }))}
                  max={5}
                  min={1}
                  step={1}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1 year</span>
                  <span>5 years</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="income">Monthly Income</Label>
                  <Input 
                    placeholder="Enter monthly income"
                    value={loanData.monthlyIncome}
                    onChange={(e) => setLoanData(prev => ({ ...prev, monthlyIncome: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="employment">Employment Type</Label>
                  <Select onValueChange={(value) => setLoanData(prev => ({ ...prev, employmentType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self-employed">Self Employed</SelectItem>
                      <SelectItem value="business">Business Owner</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="purpose">Loan Purpose</Label>
                <Select onValueChange={(value) => setLoanData(prev => ({ ...prev, loanPurpose: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    {loanPurposes.map((purpose) => (
                      <SelectItem key={purpose.value} value={purpose.value}>
                        {purpose.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateEMI} size="lg" className="w-full">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate EMI
              </Button>

              {showEMI && (
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">₹{calculateEMI().toLocaleString()}</h3>
                  <p className="text-muted-foreground">Monthly EMI</p>
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Amount</p>
                      <p className="font-semibold">₹{(calculateEMI() * loanData.loanTenure[0] * 12).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Interest</p>
                      <p className="font-semibold">₹{((calculateEMI() * loanData.loanTenure[0] * 12) - loanData.loanAmount[0]).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Loan Features & Application */}
          <div className="space-y-6">
            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Why Choose Our Personal Loan?</h3>
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

            {/* Quick Apply */}
            <Card className="shadow-lg bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Need Money Today?</h3>
                <p className="text-muted-foreground mb-4">
                  Apply now and get funds disbursed in your account within 24 hours
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Apply Online Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Phone className="h-5 w-5 mr-2" />
                    Get Call Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Interest Rates & Loan Purposes */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interest Rates */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Interest Rates</h2>
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-primary/5">
                        <tr>
                          <th className="text-left p-4">Loan Amount</th>
                          <th className="text-left p-4">Interest Rate</th>
                          <th className="text-left p-4">Processing Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4">Up to ₹5 Lakh</td>
                          <td className="p-4 text-primary font-semibold">11.5% - 14%</td>
                          <td className="p-4">₹2,500</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4">₹5L - ₹15L</td>
                          <td className="p-4 text-primary font-semibold">12% - 15%</td>
                          <td className="p-4">₹5,000</td>
                        </tr>
                        <tr>
                          <td className="p-4">Above ₹15L</td>
                          <td className="p-4 text-primary font-semibold">13% - 16%</td>
                          <td className="p-4">₹10,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Popular Uses */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Loan Uses</h2>
              <div className="grid grid-cols-2 gap-4">
                {loanPurposes.slice(0, 6).map((purpose, index) => (
                  <Card key={index} className="shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-sm">{purpose.label}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoan;