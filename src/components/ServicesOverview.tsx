
import { Shield, Search, FileText, Wrench, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  const services = [
    {
      icon: Shield,
      title: "Vehicle Inspection",
      description: "Comprehensive 200-point inspection by certified professionals",
      features: ["Engine Analysis", "Body Condition", "Interior Check", "Safety Systems"]
    },
    {
      icon: Search,
      title: "Car Buying Service",
      description: "Find your perfect vehicle from our verified network",
      features: ["Verified Dealers", "Price Comparison", "Test Drives", "Documentation"]
    },
    {
      icon: FileText,
      title: "Selling Assistance",
      description: "Get the best price for your vehicle with our support",
      features: ["Market Valuation", "Documentation", "Buyer Matching", "Negotiation Support"]
    },
    {
      icon: Wrench,
      title: "Post-Sale Support",
      description: "Continued support even after your purchase",
      features: ["Warranty Assistance", "Service Recommendations", "Maintenance Tips", "24/7 Support"]
    }
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Complete <span className="text-trust-500">Vehicle Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From inspection to purchase, we provide end-to-end automotive services 
            to ensure you make the right decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="trust-card h-full">
              <CardContent className="p-6 text-center">
                <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1 h-1 bg-trust-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => window.location.href = '/services'}
          >
            <Users className="h-5 w-5 mr-2" />
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
