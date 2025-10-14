import { Shield, Car, Users, FileText, MapPin, CheckCircle, ArrowRight, LayoutDashboard } from 'lucide-react'; // Added LayoutDashboard icon
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom'; // Added useNavigate
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const services = [
    {
      icon: Shield,
      title: "Car Inspection",
      description: "Comprehensive 200-point inspection by certified professionals",
      features: ["Engine & Transmission", "Electrical Systems", "Body & Paint", "Interior & Exterior", "Safety Features", "Documentation Review"],
      path: "/book-inspection" // Added path for navigation
    },
    {
      icon: Car,
      title: "Trusted Car Sales",
      description: "Buy pre-inspected vehicles with complete transparency",
      features: ["Verified Vehicle History", "Quality Assurance", "Fair Pricing", "Complete Documentation", "Post-Sale Support", "Warranty Options"],
      path: "/buy-used-car" // Added path for navigation
    },
    {
      icon: Users,
      title: "Regional Marketplace",
      description: "Access to verified dealers and private sellers in your region",
      features: ["Local Dealers Network", "Private Seller Verification", "Regional Pricing", "Quick Delivery", "Local Support", "Area-Specific Inventory"],
      path: "/gallery" // Added path for navigation
    },
    {
      icon: LayoutDashboard, // New icon for IMS
      title: "IMS for Dealers", // New service title
      description: "The Ultimate Dealership Management System for inventory, staff, and leads",
      features: ["All-in-One Software", "Personal Dealership Website", "Legal Dealer Marketplace", "Employee Management", "Lead & Salary Hub", "Data Security"],
      path: "/ims-for-dealers" // Path to the new IMS page/section
    },
    {
      icon: FileText,
      title: "Anonymous Dealer Auctions",
      description: "Participate in exclusive dealer-only auction events",
      features: ["Dealer-Only Access", "Anonymous Bidding", "Bulk Purchase Options", "Wholesale Pricing", "Quick Transactions", "Professional Network"],
      path: "#" // Placeholder path
    },
    {
      icon: MapPin,
      title: "D2D Transfers",
      description: "Door-to-door vehicle transfer and delivery services",
      features: ["Secure Transportation", "Real-time Tracking", "Insurance Coverage", "Professional Drivers", "Timely Delivery", "Condition Verification"],
      path: "#" // Placeholder path
    },
    {
      icon: CheckCircle,
      title: "Legal & Paperwork",
      description: "Complete assistance with vehicle documentation and legal processes",
      features: ["RC Transfer", "Insurance Processing", "NOC Clearance", "Loan Documentation", "Tax Calculation", "Legal Compliance"],
      path: "#" // Placeholder path
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Our Services - Car Inspection, Sales & More | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Explore Trusted Vehicles services: Professional car inspection, certified car sales, IMS for dealers, regional marketplace, auctions, D2D transfers and legal paperwork assistance."
        />
        <meta name="keywords" content="car inspection services, car dealership services, IMS for dealers, car marketplace, vehicle auction, car transfer services" />
        <meta property="og:title" content="Trusted Vehicles Services - Complete Car Solutions" />
        <meta property="og:description" content="Comprehensive automotive services for buying, selling and managing vehicles" />
        <meta property="og:url" content="https://trustedvehicles.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/services" />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trust-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-automotive-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-automotive-600 max-w-3xl mx-auto mb-8">
            Comprehensive automotive services designed to make your car buying and selling experience transparent, reliable, and hassle-free.
          </p>
          <Button className="btn-primary" onClick={() => navigate('/book-inspection')}>
            <Shield className="h-5 w-5 mr-2" />
            Book Inspection Now
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="trust-card h-full">
                <CardHeader>
                  <div className="bg-trust-500 p-3 rounded-xl inline-flex mb-4 w-fit">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-automotive-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-automotive-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-automotive-600">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 btn-primary" 
                    onClick={() => navigate(service.path)} // Use navigate for paths
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding trust-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose the service that best fits your needs and experience the TrustedVehicles difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-trust-600 hover:bg-white/90" onClick={() => navigate('/book-inspection')}>
              Book Inspection
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-trust-600" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;