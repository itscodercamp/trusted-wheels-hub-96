import { Search, MapPin, Filter, Car, DollarSign, FileText, Zap, CreditCard, User, Shield, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Import Badge component
import { useLocation } from '@/hooks/useLocation';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const { requestLocation, latitude, longitude, error, loading } = useLocation();

  const services = [
    { icon: Car, label: 'Buy Used Car', active: true, path: '/buy-used-car', scrollTo: 'marketplace' },
    { icon: DollarSign, label: 'Sell Car', active: false, path: '/sell-car' },
    { icon: FileText, label: 'IMS', active: false, path: 'https://ims.trustedvehicles.com' },
    { icon: Zap, label: 'Dealer Marketplace', active: false, path: '/marketplace-landing' },
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.scrollTo === 'marketplace') {
      const element = document.getElementById('marketplace-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (service.path.startsWith('http')) {
      window.open(service.path, '_blank');
    } else {
      navigate(service.path);
    }
  };


  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-background dark:to-card min-h-screen lg:min-h-[80vh]">
      {/* Background Image for All Devices */}
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
        <div className="lg:hidden">
          {/* Welcome Header */}
          <div className="px-4 pt-6 pb-4">
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

            <div className="space-y-1 mb-6">
              <h2 className="text-2xl font-bold text-foreground">better drives,</h2>
              <h2 className="text-2xl font-bold text-foreground">better lives</h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-white/20 dark:bg-background/20 border-white/30 shadow-lg ${service.active ? 'bg-primary/10 border-primary/30' : ''} cursor-pointer`}
                  onClick={() => handleServiceClick(service)}
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  <CardContent className="relative p-4 text-center">
                    <service.icon className={`w-8 h-8 mx-auto mb-2 drop-shadow-sm ${service.active ? 'text-primary' : 'text-foreground'}`} />
                    <p className={`text-sm font-medium drop-shadow-sm ${service.active ? 'text-primary' : 'text-foreground'}`}>
                      {service.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Removed the inspection and sell cards from here for mobile view */}
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-muted-foreground mb-2">Welcome to TrustedVehicles</p>
                <h1 className="text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  better drives,<br />
                  better lives
                </h1>
              </div>

              <Card 
                className="relative overflow-hidden max-w-2xl backdrop-blur-sm bg-white/20 dark:bg-background/20 border-white/30 shadow-2xl"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                <CardContent className="relative p-6">
                  {/* Services */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {services.map((service, index) => (
                      <div 
                        key={index} 
                        className={`relative overflow-hidden flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 dark:bg-background/10 border-white/20 shadow-lg hover:shadow-xl ${
                          service.active ? 'bg-primary/20 border-primary/30' : ''
                        } cursor-pointer`}
                        onClick={() => handleServiceClick(service)}
                        style={{
                          boxShadow: '0 4px 20px 0 rgba(31, 38, 135, 0.2)',
                          backdropFilter: 'blur(6px)',
                          WebkitBackdropFilter: 'blur(6px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                        <service.icon className={`w-10 h-10 mb-3 drop-shadow-sm ${service.active ? 'text-primary' : 'text-foreground'}`} />
                        <span className="text-base font-medium text-center drop-shadow-sm">{service.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Removed the inspection and sell cards from here for desktop view */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;