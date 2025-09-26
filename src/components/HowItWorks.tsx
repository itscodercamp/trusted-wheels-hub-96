
import { Search, Shield, FileText, Car, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Browse & Select",
      description: "Explore our verified inventory or submit your requirements. Find cars that match your budget and preferences.",
      action: "Start browsing"
    },
    {
      step: 2,
      icon: Shield,
      title: "Professional Inspection",
      description: "Our certified experts conduct a comprehensive 200-point inspection covering all major components.",
      action: "Book inspection"
    },
    {
      step: 3,
      icon: FileText,
      title: "Detailed Report",
      description: "Receive a detailed inspection report with photos, condition analysis, and fair market valuation.",
      action: "View sample report"
    },
    {
      step: 4,
      icon: Car,
      title: "Purchase & Support",
      description: "Complete your purchase with confidence. Get continued support for documentation and post-sale services.",
      action: "Get started"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How <span className="text-trust-500">TrustedVehicles</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent, and reliable process to help you buy or sell vehicles 
            with complete confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="trust-card h-full">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-trust-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-trust-50 dark:bg-trust-900/20 p-4 rounded-xl inline-flex mb-4 mt-4">
                    <step.icon className="h-8 w-8 text-trust-500" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Action */}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-trust-600 border-trust-200 hover:bg-trust-50"
                  >
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-trust-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary"
            onClick={() => window.location.href = '/book-inspection'}
          >
            <Shield className="h-5 w-5 mr-2" />
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
