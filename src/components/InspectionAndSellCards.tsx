import React from 'react';
import { DollarSign, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const InspectionAndSellCards = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-background dark:to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sell Car Free Inspection Card */}
          <Card 
            className="relative overflow-hidden backdrop-blur-sm bg-emerald-500/20 dark:bg-emerald-700/20 border-emerald-500/30 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px 0 rgba(16, 185, 129, 0.37)', // Green shadow
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(16, 185, 129, 0.18)' // Green border
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none"></div>
            <CardContent className="relative p-6 text-center">
              <div className="bg-emerald-500/20 p-4 rounded-xl inline-flex mb-4 backdrop-blur-sm">
                <DollarSign className="h-12 w-12 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Sell Your Car with Free Inspection
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a professional inspection at no cost when you sell your car through us!
              </p>
              <Button 
                size="lg"
                className="w-full h-14 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/sell-car')}
              >
                <DollarSign className="h-6 w-6 mr-3" />
                Get Free Inspection
              </Button>
            </CardContent>
          </Card>

          {/* Professional Car Inspection Card */}
          <Card 
            className="relative overflow-hidden backdrop-blur-sm bg-white/20 dark:bg-background/20 border-white/30 shadow-2xl"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <CardContent className="relative p-6 text-center">
              <div className="bg-primary/20 p-4 rounded-xl inline-flex mb-4 backdrop-blur-sm">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Professional Car Inspection
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive 200+ point inspection by certified experts
              </p>
              <div className="bg-gray-50 dark:bg-background rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-muted-foreground">Starting from</span>
                  <span className="text-4xl font-bold text-primary">₹999</span>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-6">
                <p className="text-sm text-muted-foreground text-center">
                  Pay amount <span className="font-bold text-green-600 dark:text-green-400">after inspection</span>
                </p>
              </div>
              
              <Button
                size="lg"
                className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-lg font-semibold"
                onClick={() => navigate('/book-inspection')}
              >
                <Shield className="h-6 w-6 mr-3" />
                Book Inspection Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InspectionAndSellCards;