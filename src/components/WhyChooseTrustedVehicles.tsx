import { Shield, Award, Users, Clock, CheckCircle, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WhyChooseTrustedVehicles = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Vehicles",
      description: "Every vehicle undergoes a comprehensive 200+ point inspection by certified professionals",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Certified experts with years of experience ensure the highest quality standards",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Connect with verified dealers and private sellers across India through our platform",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast inspection scheduling and detailed reports delivered within 24 hours",
      color: "bg-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Complete Transparency",
      description: "Detailed reports with photos and videos, ensuring complete transparency in every deal",
      color: "bg-teal-500"
    },
    {
      icon: Zap,
      title: "End-to-End Support",
      description: "From inspection to paperwork, we provide complete support throughout your journey",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Trusted</span>Vehicles?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to making your car buying and selling experience transparent, 
            reliable, and hassle-free with our comprehensive services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="cars24-card group hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`${feature.color}/10 p-4 rounded-xl inline-flex mb-6`}>
                  <feature.icon className={`h-8 w-8 ${feature.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Vehicles Inspected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
            <div className="text-muted-foreground">Report Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTrustedVehicles;