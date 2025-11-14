import { useState } from 'react';
import { MapPin, Car, DollarSign, FileText, Zap, CreditCard, Shield, History, TrendingUp, Wallet, DollarSignIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from '@/hooks/useLocation';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const { requestLocation, latitude, longitude, error, loading } = useLocation();
  const [expandedInspection, setExpandedInspection] = useState(false);

  const mainServices = [
    { icon: Car, label: 'Buy Used Car', path: '/buy-used-car', scrollTo: 'marketplace', gradient: 'from-blue-500 to-blue-600' },
    { icon: DollarSign, label: 'Sell Car', path: '/sell-car', gradient: 'from-green-500 to-green-600' },
    { icon: FileText, label: 'IMS Dealer', path: 'https://ims.trustedvehicles.com', gradient: 'from-purple-500 to-purple-600' },
    { icon: Zap, label: 'Marketplace', path: '/marketplace-landing', gradient: 'from-orange-500 to-orange-600' },
    { icon: CreditCard, label: 'Loan', path: '/car-loan', gradient: 'from-indigo-500 to-indigo-600' },
    { icon: Shield, label: 'Insurance', path: '/insurance', gradient: 'from-red-500 to-red-600' },
    { icon: History, label: 'Inspection', path: null, gradient: 'from-teal-500 to-teal-600', expandable: true },
    { icon: TrendingUp, label: 'Premium Cars', path: 'https://marketplace.trustedvehicles.com', gradient: 'from-yellow-500 to-yellow-600' },
    { icon: Wallet, label: 'Low Budget Cars', path: 'https://marketplace.trustedvehicles.com', gradient: 'from-cyan-500 to-cyan-600' },
    { icon: DollarSignIcon, label: 'Mid Range Cars', path: 'https://marketplace.trustedvehicles.com', gradient: 'from-pink-500 to-pink-600' },
  ];

  const inspectionServices = [
    { icon: FileText, label: 'Book Inspection', path: '/book-inspection', gradient: 'from-teal-400 to-teal-500' },
    { icon: Shield, label: 'PDI Inspection', path: '/book-inspection?type=pdi', gradient: 'from-teal-500 to-teal-600' },
  ];

  const handleServiceClick = (service: typeof mainServices[0]) => {
    if (service.expandable) {
      setExpandedInspection(!expandedInspection);
      return;
    }
    if (service.scrollTo === 'marketplace') {
      const element = document.getElementById('marketplace-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (service.path?.startsWith('http')) {
      window.open(service.path, '_blank');
    } else if (service.path) {
      navigate(service.path);
    }
  };


  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-background dark:to-card">
      {/* Hero Content */}
      <div className="relative min-h-[60vh] lg:min-h-[70vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/50 dark:from-background/80 dark:to-background/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop" 
            alt="Car background"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20">
          {/* Mobile Hero */}
          <div className="lg:hidden px-4 pt-6 pb-32">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Welcome to</p>
                <h1 className="text-xl font-bold text-foreground">
                  <span className="text-primary">Trusted</span>Vehicles
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover-3d" 
                  onClick={requestLocation}
                  disabled={loading}
                >
                  <MapPin className={`h-5 w-5 ${latitude ? 'text-green-500' : ''}`} />
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-foreground">better drives,</h2>
              <h2 className="text-2xl font-bold text-foreground">better lives</h2>
            </div>
          </div>

          {/* Desktop Hero */}
          <div className="hidden lg:block max-w-7xl mx-auto px-8 py-16 pb-32">
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground mb-2">Welcome to TrustedVehicles</p>
              <h1 className="text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                better drives,<br />
                better lives
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards Section - Positioned at bottom */}
      <div className="relative -mt-24 z-30 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-none"
                onClick={() => handleServiceClick(service)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <CardContent className="relative p-6 text-center">
                  <service.icon className="w-10 h-10 mx-auto mb-3 text-white drop-shadow-lg" />
                  <p className="text-sm font-semibold text-white drop-shadow-md">
                    {service.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expanded Inspection Services */}
          {expandedInspection && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 animate-in fade-in slide-in-from-top-4 duration-300">
              {inspectionServices.map((service, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-none"
                  onClick={() => service.path && navigate(service.path)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <CardContent className="relative p-8 text-center">
                    <service.icon className="w-12 h-12 mx-auto mb-4 text-white drop-shadow-lg" />
                    <p className="text-base font-semibold text-white drop-shadow-md">
                      {service.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;