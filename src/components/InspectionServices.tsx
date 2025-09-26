import { Shield, Car, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const InspectionServices = () => {
  const navigate = useNavigate();

  const inspectionServices = [
    {
      icon: Car,
      title: "Pre-Purchase Inspection",
      description: "Complete vehicle inspection before buying to ensure you make the right decision",
      price: "₹1,299",
      features: [
        "200+ Point Inspection",
        "Engine & Transmission Check",
        "Body & Paint Analysis",
        "Document Verification",
        "Detailed Report with Photos"
      ],
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Bank Loan Valuation Inspection",
      description: "Official inspection report for bank loan approval and insurance claims",
      price: "₹1,299",
      features: [
        "Bank Approved Format",
        "Official Valuation Certificate",
        "Insurance Documentation",
        "Legal Compliance Check",
        "Fast Processing"
      ],
      color: "bg-green-500"
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Professional Services
          </Badge>
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
            Additional Inspection Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized inspection services tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {inspectionServices.map((service, index) => (
            <Card key={index} className="cars24-card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className={`relative h-24 ${service.color}/10 flex items-center justify-center`}>
                <service.icon className={`h-12 w-12 ${service.color.replace('bg-', 'text-')}`} />
                <div className="absolute top-4 right-4">
                  <Badge className={`${service.color} text-white`}>
                    {service.price}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full h-12 rounded-xl group-hover:translate-y-[-2px] transition-transform duration-200"
                  onClick={() => navigate('/book-inspection')}
                >
                  Book Now - {service.price}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspectionServices;