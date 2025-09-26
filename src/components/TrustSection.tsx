
import { useState } from 'react';
import { Shield, CheckCircle, Users, Award, MapPin, Clock, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DemoInspectionReport from './DemoInspectionReport';

const TrustSection = () => {
  const [showDemoReport, setShowDemoReport] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "200-Point Inspection",
      description: "Comprehensive inspection by certified professionals covering all major components"
    },
    {
      icon: CheckCircle,
      title: "Verified Dealers",
      description: "All dealers in our network are thoroughly verified and trusted partners"
    },
    {
      icon: Users,
      title: "50,000+ Happy Customers",
      description: "Join thousands of satisfied customers who trust us with their vehicle needs"
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "We ensure you get the best market price for buying or selling your vehicle"
    },
    {
      icon: MapPin,
      title: "Pan-India Presence",
      description: "Available across major cities with local expertise and regional pricing"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast inspection scheduling and quick processing of all documentation"
    }
  ];

  return (
    <>
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
              Why Choose <span className="text-trust-500">TrustedVehicles</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 lg:mb-8">
              We're committed to providing transparent, reliable, and professional automotive services 
              that you can trust.
            </p>
            
            {/* Demo Report Button */}
            <div className="mb-8 lg:mb-12">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-trust-500 text-trust-600 hover:bg-trust-50 dark:hover:bg-trust-950"
                onClick={() => setShowDemoReport(true)}
              >
                <FileText className="h-5 w-5 mr-2" />
                View Demo Inspection Report
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="trust-card h-full">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="bg-trust-500 p-3 lg:p-4 rounded-xl inline-flex mb-4 lg:mb-6">
                    <feature.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Report Modal */}
      <DemoInspectionReport 
        isOpen={showDemoReport} 
        onClose={() => setShowDemoReport(false)} 
      />
    </>
  );
};

export default TrustSection;
