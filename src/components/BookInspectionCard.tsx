import { Shield, CheckCircle, Star, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const BookInspectionCard = () => {
  const navigate = useNavigate();

  const features = [
    { icon: CheckCircle, text: "200+ Point Inspection" },
    { icon: Shield, text: "Certified Experts" },
    { icon: Star, text: "Quality Assurance" },
  ];

  const inspectionPoints = [
    "Engine & Transmission",
    "Body & Paint",
    "Interior & Electrical",
    "Suspension & Brakes",
    "Documents Verification"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-orange-50/50 dark:from-primary/10 dark:to-background">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          <div className="text-center">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Professional Service
            </Badge>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Book Your Car Inspection
            </h2>
            <p className="text-muted-foreground">
              Get a comprehensive 200+ point inspection by certified experts
            </p>
          </div>

          <Card className="cars24-card overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-24 w-24 text-primary opacity-80" />
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-primary">
                  ⭐ 4.8 Rating
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="cars24-service-icon mb-2 mx-auto">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-3">What We Check:</h4>
                  <div className="space-y-2">
                    {inspectionPoints.map((point, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-background rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Starting from</span>
                    <span className="text-2xl font-bold text-primary">₹999</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Comprehensive inspection report included
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground text-center">
                    Pay amount <span className="font-bold text-green-600 dark:text-green-400">after inspection</span>
                  </p>
                </div>

                <Button
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => navigate('/book-inspection')}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Inspection Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Professional Service
            </Badge>
            <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
              Book Your Car Inspection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a comprehensive 200+ point inspection by certified experts. 
              Make informed decisions with our detailed inspection reports.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="cars24-card text-center p-6">
                    <CardContent className="p-0">
                      <div className="cars24-service-icon mb-4 mx-auto">
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <p className="font-semibold text-foreground mb-2">{feature.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="cars24-card">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-foreground mb-6">Our Inspection Covers:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {inspectionPoints.map((point, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="cars24-card overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-primary opacity-80" />
                </div>
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary text-lg px-4 py-2">
                    ⭐ 4.8 Rating
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-background rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-medium text-muted-foreground">Starting from</span>
                      <span className="text-4xl font-bold text-primary">₹999</span>
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive inspection report included
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Pay amount <span className="font-bold text-green-600 dark:text-green-400">after inspection</span>
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Available in Nagpur</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-5 w-5 mr-3" />
                      <span>Same day inspection available</span>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-lg font-semibold"
                    onClick={() => navigate('/book-inspection')}
                  >
                    <Calendar className="h-6 w-6 mr-3" />
                    Book Inspection Now
                    <ArrowRight className="h-6 w-6 ml-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookInspectionCard;