import React from 'react';
import { Car, ArrowRight, Shield, Users, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MarketplaceLanding = () => {
  const externalMarketplaceUrl = 'https://marketplace.trustedvehicles.com';

  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every vehicle undergoes a rigorous inspection to ensure quality and transparency."
    },
    {
      icon: Users,
      title: "Genuine Buyers & Sellers",
      description: "Connect with a trusted community for secure and hassle-free transactions."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Access market-driven valuations and competitive prices for all vehicles."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-trust-50 to-blue-100 dark:from-automotive-900 dark:to-automotive-700">
      <Helmet>
        <title>Car Marketplace - Buy Verified Used Cars India | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Browse India's most trusted car marketplace. Buy and sell pre-inspected used cars with verified listings, genuine buyers and sellers, and fair pricing. Thousands of quality vehicles."
        />
        <meta name="keywords" content="car marketplace india, buy used cars online, verified used cars, pre-inspected vehicles, trusted car marketplace" />
        <meta property="og:title" content="Car Marketplace - Buy Verified Used Cars" />
        <meta property="og:description" content="India's trusted marketplace for buying and selling verified used cars" />
        <meta property="og:url" content="https://trustedvehicles.com/marketplace" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/marketplace" />
      </Helmet>
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex p-4 bg-trust-500 rounded-full mb-6">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-900 dark:text-white mb-4">
            Welcome to the TrustedVehicles Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-automotive-700 dark:text-automotive-100 max-w-3xl mx-auto mb-8">
            Your one-stop destination for buying and selling pre-inspected, high-quality used cars.
          </p>
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open(externalMarketplaceUrl, '_blank')}
          >
            Visit Our Full Marketplace
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-automotive-900 dark:text-white mb-12">
            Why Choose Our Marketplace?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="trust-card text-center">
                <CardContent className="p-8">
                  <div className="bg-trust-100 dark:bg-trust-900/30 p-4 rounded-full inline-flex mb-4">
                    <feature.icon className="h-8 w-8 text-trust-600 dark:text-trust-400" />
                  </div>
                  <h3 className="text-xl font-bold text-automotive-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-automotive-600 dark:text-automotive-200">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding trust-gradient text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore thousands of verified listings and connect with trusted sellers today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-trust-600 hover:bg-white/90"
            onClick={() => window.open(externalMarketplaceUrl, '_blank')}
          >
            Browse Marketplace Now
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MarketplaceLanding;