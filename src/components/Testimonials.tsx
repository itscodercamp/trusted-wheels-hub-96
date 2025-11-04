
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Nagpur",
      rating: 5,
      text: "TrustedVehicles helped me find the perfect car with complete transparency. The inspection report was detailed and honest. Highly recommended!",
      purchase: "Honda City 2020"
    },
    {
      name: "Priya Sharma",
      location: "Nagpur",
      rating: 5,
      text: "Sold my car through their platform and got an excellent price. The entire process was smooth and professional. Great service!",
      purchase: "Sold Maruti Swift"
    },
    {
      name: "Arun Patel",
      location: "Nagpur",
      rating: 5,
      text: "The 200-point inspection saved me from buying a problematic car. Their team is knowledgeable and trustworthy. Worth every rupee!",
      purchase: "Hyundai Creta 2021"
    },
    {
      name: "Sneha Reddy",
      location: "Nagpur",
      rating: 5,
      text: "Amazing experience from start to finish. Found verified dealers and got the best deal in the market. Will definitely use again!",
      purchase: "Tata Nexon 2020"
    },
    {
      name: "Vikram Singh",
      location: "Nagpur",
      rating: 5,
      text: "Professional service with complete transparency. The inspection report gave me confidence in my purchase decision.",
      purchase: "Mahindra XUV500"
    },
    {
      name: "Kavita Joshi",
      location: "Nagpur",
      rating: 5,
      text: "Excellent platform for car buying. The team guided me through every step and helped me get the perfect vehicle for my family.",
      purchase: "Kia Seltos 2021"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-trust-500">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from thousands of satisfied customers who trusted us 
            with their vehicle needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="trust-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-trust-500 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-trust-600 mt-1">{testimonial.purchase}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
