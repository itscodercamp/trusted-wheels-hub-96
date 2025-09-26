
import { TrendingUp, Users, MapPin, Award, Shield, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Customers",
      description: "Satisfied customers across India"
    },
    {
      icon: Car,
      value: "15,000+",
      label: "Cars Inspected",
      description: "Vehicles thoroughly inspected"
    },
    {
      icon: MapPin,
      value: "25+",
      label: "Cities",
      description: "Pan-India presence"
    },
    {
      icon: Shield,
      value: "98%",
      label: "Accuracy Rate",
      description: "Inspection accuracy"
    },
    {
      icon: Award,
      value: "4.8★",
      label: "Customer Rating",
      description: "Average customer satisfaction"
    },
    {
      icon: TrendingUp,
      value: "₹500Cr+",
      label: "Transactions",
      description: "Total transaction value"
    }
  ];

  const achievements = [
    "India's most trusted vehicle inspection platform",
    "Featured in leading automotive publications",
    "Winner of 'Best Automotive Service' award 2023",
    "Certified by leading automotive organizations",
    "Zero fraud guarantee on all transactions"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-50 dark:from-trust-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-trust-500">Thousands</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our numbers speak for themselves. Join thousands of satisfied customers 
            who have made smart vehicle decisions with us.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="trust-card text-center">
              <CardContent className="p-4 lg:p-6">
                <div className="bg-trust-500 p-2 lg:p-3 rounded-lg inline-flex mb-3">
                  <stat.icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-trust-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-lg">
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 text-center">
            Our Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-trust-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm lg:text-base text-muted-foreground">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
