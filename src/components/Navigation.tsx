import React, { useState } from 'react';
import { Menu, X, Shield, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.classList.toggle('mobile-menu-open', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/car-valuation', label: 'IMS' }, // Renamed from 'IMS for Dealers' to 'IMS'
    { href: '/marketplace-landing', label: 'Marketplace' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
    { href: '/faqs', label: 'FAQs' }
  ];

  return (
    <nav className="bg-white/95 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 border-b border-gray-200 dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/brand-logo.png" 
                alt="TrustedVehicles Logo" 
                decoding="async"
                fetchPriority="high"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md" /> {/* Added rounded-md class */}
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                <span className="text-primary">Trusted</span>Vehicles
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors hover:bg-gray-50 dark:hover:bg-background"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Removed the "Call us" button */}
            <ThemeToggle />
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              onClick={() => navigate('/book-inspection')}
            >
              Book Inspection
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              className="w-9 h-9 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMenu}
                  className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  className="btn-primary w-full"
                  onClick={() => {
                    closeMenu();
                    navigate('/book-inspection');
                  }}
                >
                  Book Inspection
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;