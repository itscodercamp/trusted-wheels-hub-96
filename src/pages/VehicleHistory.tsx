import { useState } from 'react';
import { History, FileText, Shield, AlertTriangle, Check, Search, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const VehicleHistory = () => {
  const [searchData, setSearchData] = useState({
    registrationNumber: '',
    chassisNumber: '',
    engineNumber: ''
  });

  const [showReport, setShowReport] = useState(false);

  const handleHistorySearch = () => {
    setShowReport(true);
  };

  const reportFeatures = [
    {
      icon: FileText,
      title: 'Ownership History',
      description: 'Complete record of all previous owners and transfers'
    },
    {
      icon: Shield,
      title: 'Accident History',
      description: 'Detailed accident reports and insurance claims'
    },
    {
      icon: AlertTriangle,
      title: 'Theft & Legal Issues',
      description: 'Check for theft records and legal encumbrances'
    }
  ];

  const sampleReport = {
    vehicleInfo: {
      make: 'Maruti Suzuki',
      model: 'Swift VDI',
      year: 2018,
      color: 'Pearl Arctic White',
      fuelType: 'Diesel',
      registrationNumber: 'MH02AB1234'
    },
    ownershipHistory: [
      { owner: 1, duration: '2018-2021', location: 'Mumbai, Maharashtra' },
      { owner: 2, duration: '2021-2024', location: 'Pune, Maharashtra' }
    ],
    accidentHistory: [
      { date: '2020-03-15', severity: 'Minor', description: 'Rear bumper damage' },
      { date: '2022-08-22', severity: 'Major', description: 'Front end collision' }
    ],
    serviceHistory: [
      { date: '2024-01-15', type: 'Regular Service', odometer: '65,000 km' },
      { date: '2023-07-10', type: 'Major Service', odometer: '58,000 km' },
      { date: '2023-01-05', type: 'Regular Service', odometer: '52,000 km' }
    ],
    legalStatus: {
      theft: false,
      loan: false,
      registration: 'Active',
      fitness: 'Valid until 2025',
      insurance: 'Active'
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Vehicle History <span className="text-primary">Report</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get complete vehicle history with ownership records, accident details, and legal status
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {!showReport ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Search Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Search className="h-6 w-6 mr-2" />
                  Search Vehicle History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="registrationNumber">Registration Number *</Label>
                  <Input 
                    placeholder="e.g., MH02AB1234"
                    value={searchData.registrationNumber}
                    onChange={(e) => setSearchData(prev => ({ ...prev, registrationNumber: e.target.value }))}
                    className="uppercase"
                  />
                </div>

                <div>
                  <Label htmlFor="chassisNumber">Chassis Number (Optional)</Label>
                  <Input 
                    placeholder="Last 5 digits of chassis number"
                    value={searchData.chassisNumber}
                    onChange={(e) => setSearchData(prev => ({ ...prev, chassisNumber: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="engineNumber">Engine Number (Optional)</Label>
                  <Input 
                    placeholder="Last 5 digits of engine number"
                    value={searchData.engineNumber}
                    onChange={(e) => setSearchData(prev => ({ ...prev, engineNumber: e.target.value }))}
                  />
                </div>

                <Button 
                  onClick={handleHistorySearch} 
                  size="lg" 
                  className="w-full"
                  disabled={!searchData.registrationNumber}
                >
                  <History className="h-5 w-5 mr-2" />
                  Get Vehicle History Report - ₹299
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>🔒 Secure payment • Instant report generation</p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">What You Get in the Report</h3>
              {reportFeatures.map((feature, index) => (
                <Card key={index} className="shadow-lg transform transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Vehicle Report */
          <div className="space-y-8">
            {/* Report Header */}
            <Card className="shadow-xl bg-primary/5">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">Vehicle History Report</h2>
                    <p className="text-muted-foreground">Registration: {sampleReport.vehicleInfo.registrationNumber}</p>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Make & Model</p>
                    <p className="font-semibold">{sampleReport.vehicleInfo.make} {sampleReport.vehicleInfo.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-semibold">{sampleReport.vehicleInfo.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-semibold">{sampleReport.vehicleInfo.color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold">{sampleReport.vehicleInfo.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Registration</p>
                    <p className="font-semibold">{sampleReport.vehicleInfo.registrationNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Status */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Legal Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <span>Theft Record</span>
                    <Badge className={sampleReport.legalStatus.theft ? 'bg-red-500' : 'bg-green-500'}>
                      {sampleReport.legalStatus.theft ? 'Found' : 'Clear'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Loan/Hypothecation</span>
                    <Badge className={sampleReport.legalStatus.loan ? 'bg-red-500' : 'bg-green-500'}>
                      {sampleReport.legalStatus.loan ? 'Active' : 'Clear'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Registration Status</span>
                    <Badge className="bg-green-500">{sampleReport.legalStatus.registration}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fitness Certificate</span>
                    <Badge className="bg-green-500">{sampleReport.legalStatus.fitness}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Insurance Status</span>
                    <Badge className="bg-green-500">{sampleReport.legalStatus.insurance}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ownership History */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Ownership History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleReport.ownershipHistory.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-semibold">Owner {record.owner}</p>
                        <p className="text-sm text-muted-foreground">{record.location}</p>
                      </div>
                      <Badge variant="outline">{record.duration}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Accident History */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Accident History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleReport.accidentHistory.map((accident, index) => (
                    <div key={index} className="flex items-start justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-semibold">{accident.date}</p>
                        <p className="text-sm text-muted-foreground">{accident.description}</p>
                      </div>
                      <Badge className={accident.severity === 'Minor' ? 'bg-yellow-500' : 'bg-red-500'}>
                        {accident.severity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service History */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Service History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sampleReport.serviceHistory.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-semibold">{service.date}</p>
                        <p className="text-sm text-muted-foreground">{service.type}</p>
                      </div>
                      <Badge variant="outline">{service.odometer}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Full Report
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowReport(false)}>
                Search Another Vehicle
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleHistory;