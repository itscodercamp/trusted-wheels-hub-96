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
    { icon: Car, label: 'Buy Used Car', active: true, path: '/buy-used-car' },
    { icon: DollarSign, label: 'Sell Car', active: false, path: '/sell-car' },
    { icon: FileText, label: 'IMS Dealer', active: false, path: 'https://ims.trustedvehicles.com' },
    { icon: Zap, label: 'Marketplace', active: false, path: '/marketplace-landing' },
    { icon: CreditCard, label: 'Car Loan', active: false, path: '/car-loan', isComingSoon: true },
    { icon: User, label: 'Personal Loan', active: false, path: '/personal-loan', isComingSoon: true },
    { icon: Shield, label: 'Insurance', active: false, path: '/insurance', isComingSoon: true },
    { icon: History, label: 'Vehicle History', active: false, path: '/vehicle-history', isComingSoon: true },
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.isComingSoon) {
      // Do nothing if the service is coming soon
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
            <div className="grid grid-cols-4 gap-3 mb-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-white/20 dark:bg-background/20 border-white/30 shadow-lg ${service.active ? 'bg-primary/10 border-primary/30' : ''} ${service.isComingSoon ? 'pointer-events-none' : 'cursor-pointer'}`}
                  onClick={() => handleServiceClick(service)}
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  <CardContent className={`relative p-3 text-center ${service.isComingSoon ? 'opacity-70' : ''}`}>
                    {service.isComingSoon && ( // Conditional rendering based on isComingSoon
                      <div className="absolute -top-1 -right-1 z-20"> {/* Increased z-index */}
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-yellow-300 to-amber-600">
                          <Badge className="bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Soon
                          </Badge>
                        </div>
                      </div>
                    )}
                    <service.icon className={`w-6 h-6 mx-auto mb-1 drop-shadow-sm ${service.active ? 'text-primary' : 'text-foreground'}`} />
                    <p className={`text-xs font-medium drop-shadow-sm ${service.active ? 'text-primary' : 'text-foreground'}`}>
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
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {services.slice(0, 8).map((service, index) => (
                      <div 
                        key={index} 
                        className={`relative overflow-hidden flex flex-col items-center p-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 dark:bg-background/10 border-white/20 shadow-lg hover:shadow-xl ${
                          service.active ? 'bg-primary/20 border-primary/30' : ''
                        } ${service.isComingSoon ? 'pointer-events-none' : 'cursor-pointer'}`}
                        onClick={() => handleServiceClick(service)}
                        style={{
                          boxShadow: '0 4px 20px 0 rgba(31, 38, 135, 0.2)',
                          backdropFilter: 'blur(6px)',
                          WebkitBackdropFilter: 'blur(6px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                        <div className={`${service.isComingSoon ? 'opacity-70' : ''}`}> {/* Apply opacity to content */}
                          {service.isComingSoon && ( // Conditional rendering based on isComingSoon
                            <div className="absolute -top-1 -right-1 z-20"> {/* Increased z-index */}
                              <div className="p-[2px] rounded-full bg-gradient-to-r from-yellow-300 to-amber-600">
                                <Badge className="bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                                  Soon
                                </Badge>
                              </div>
                            </div>
                          )}
                          <service.icon className={`relative w-8 h-8 mb-2 drop-shadow-sm ${service.active ? 'text-primary' : 'text-foreground'}`} />
                          <span className="relative text-sm font-medium text-center drop-shadow-sm">{service.label}</span>
                        </div>
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