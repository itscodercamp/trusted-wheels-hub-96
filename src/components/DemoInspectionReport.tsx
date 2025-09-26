import { useState } from 'react';
import { X, Shield, Car, CheckCircle, AlertCircle, FileText, Download, BatteryCharging, Disc, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DemoReportProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoInspectionReport = ({ isOpen, onClose }: DemoReportProps) => {
  if (!isOpen) return null;

  const inspectionData = {
    vehicle: {
      make: "Honda",
      model: "City",
      year: 2019,
      variant: "VX CVT",
      registrationNumber: "DL 8C AB 1234",
      engineNumber: "L15Z1234567",
      chassisNumber: "MRHFB12345678901",
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1593282944744-01279129181c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnN8ZW58MHx8MHx8fDA%3D"
      ]
    },
    inspection: {
      date: "March 15, 2024",
      inspector: "Rajesh Kumar",
      reportId: "TV-INS-2024-001234",
      location: "TrustedVehicles - Gurgaon Center"
    },
    scores: {
      overall: 85,
      exterior: 90,
      interior: 85,
      engine: 80,
      electrical: 88,
      tyres: 75,
      underbody: 82,
      documents: 95
    }
  };

  const sections = [
    {
      title: "Exterior Inspection",
      score: inspectionData.scores.exterior,
      items: [
        { name: "Body Paint", status: "good", note: "Minor scratches on rear bumper" },
        { name: "Lights & Indicators", status: "excellent", note: "All working properly" },
        { name: "Glass & Mirrors", status: "good", note: "Small chip on windshield, not obstructing view" },
        { name: "Door Alignment", status: "excellent", note: "Perfect alignment, no signs of repair" },
        { name: "Wipers & Washers", status: "excellent", note: "Functional, good condition" },
        { name: "Bumpers", status: "good", note: "Minor scuffs on front bumper" }
      ]
    },
    {
      title: "Interior Inspection",
      score: inspectionData.scores.interior,
      items: [
        { name: "Seats & Upholstery", status: "good", note: "Minor wear on driver seat, no tears" },
        { name: "Dashboard & Controls", status: "excellent", note: "All functions working, no warning lights" },
        { name: "Air Conditioning", status: "good", note: "Cooling effective, minor fan noise" },
        { name: "Audio System", status: "excellent", note: "Original Honda system, all speakers functional" },
        { name: "Power Windows", status: "excellent", note: "All windows operate smoothly" },
        { name: "Floor Mats & Carpets", status: "good", note: "Clean, minor stains" }
      ]
    },
    {
      title: "Engine & Mechanical",
      score: inspectionData.scores.engine,
      items: [
        { name: "Engine Performance", status: "good", note: "Smooth idle and acceleration, no unusual noises" },
        { name: "Transmission", status: "excellent", note: "CVT shifting smoothly, no jerks" },
        { name: "Brakes", status: "good", note: "Front pads 60% remaining, rear 70%" },
        { name: "Suspension", status: "good", note: "Minor rear shock wear, no major leaks" },
        { name: "Fluid Levels", status: "excellent", note: "All fluids at optimal levels" },
        { name: "Exhaust System", status: "good", note: "No leaks, minor surface rust" }
      ]
    },
    {
      title: "Electrical Systems",
      score: inspectionData.scores.electrical,
      items: [
        { name: "Battery Health", status: "good", note: "Good charge, minor corrosion on terminals" },
        { name: "Alternator", status: "excellent", note: "Charging correctly" },
        { name: "Starter Motor", status: "excellent", note: "Starts without hesitation" },
        { name: "Wiring Harness", status: "excellent", note: "No visible damage or modifications" }
      ]
    },
    {
      title: "Tyres & Wheels",
      score: inspectionData.scores.tyres,
      items: [
        { name: "Front Tyres", status: "good", note: "5mm tread remaining, even wear" },
        { name: "Rear Tyres", status: "good", note: "6mm tread remaining, even wear" },
        { name: "Spare Tyre", status: "fair", note: "Minor damage, usable" },
        { name: "Wheel Rims", status: "good", note: "Minor scuffs, no bends" }
      ]
    },
    {
      title: "Underbody & Chassis",
      score: inspectionData.scores.underbody,
      items: [
        { name: "Chassis Frame", status: "excellent", note: "No signs of damage or repair" },
        { name: "Undercarriage", status: "good", note: "Minor surface rust, no major issues" },
        { name: "Fuel Tank & Lines", status: "excellent", note: "No leaks or damage" },
        { name: "Steering Linkages", status: "good", note: "Minor play, within acceptable limits" }
      ]
    },
    {
      title: "Documents & History",
      score: inspectionData.scores.documents,
      items: [
        { name: "Registration Certificate", status: "excellent", note: "Valid and clear" },
        { name: "Insurance Policy", status: "good", note: "Valid, third-party only" },
        { name: "Service History", status: "good", note: "Partial records available" },
        { name: "Ownership Transfer", status: "excellent", note: "Smooth transfer history" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-emerald-500';
      case 'good': return 'bg-yellow-500';
      case 'fair': return 'bg-orange-500';
      case 'poor': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 75) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-trust-500" />
            <div>
              <h2 className="text-xl font-bold text-foreground">
                <span className="text-trust-500">TrustedVehicles</span> Inspection Report
              </h2>
              <p className="text-sm text-muted-foreground">Report ID: {inspectionData.inspection.reportId}</p>
            </div>
          </div>
          <Button variant="outline" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Vehicle Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Vehicle Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><span className="font-medium">Make & Model:</span> {inspectionData.vehicle.make} {inspectionData.vehicle.model}</p>
                  <p><span className="font-medium">Year:</span> {inspectionData.vehicle.year}</p>
                  <p><span className="font-medium">Variant:</span> {inspectionData.vehicle.variant}</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Registration:</span> {inspectionData.vehicle.registrationNumber}</p>
                  <p><span className="font-medium">Inspector:</span> {inspectionData.inspection.inspector}</p>
                  <p><span className="font-medium">Date:</span> {inspectionData.inspection.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overall Score */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor(inspectionData.scores.overall)}`}>
                  {inspectionData.scores.overall}/100
                </div>
                <p className="text-lg text-muted-foreground mb-4">Overall Inspection Score</p>
                <div className="flex justify-center space-x-4 text-sm flex-wrap gap-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                    Excellent (90-100)
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    Good (75-89)
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    Fair (60-74)
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    Poor (0-59)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Photos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Vehicle Photos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {inspectionData.vehicle.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Vehicle photo ${index + 1}`}
                    className="w-full h-32 object-cover rounded-md shadow-sm"
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Sections */}
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{section.title}</span>
                  <span className={`text-2xl font-bold ${getScoreColor(section.score)}`}>
                    {section.score}/100
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="capitalize">
                          {item.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Footer */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 text-trust-500">
                  <Shield className="h-6 w-6" />
                  <span className="text-lg font-semibold">Certified by TrustedVehicles</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This inspection was conducted by our certified professionals using our comprehensive 200-point checklist.
                  All findings are based on visual and functional inspection at the time of assessment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-primary">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF Report
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Checklist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoInspectionReport;