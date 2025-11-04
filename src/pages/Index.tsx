import HeroSection from '@/components/HeroSection';
import InspectionServices from '@/components/InspectionServices';
import MarketplaceVehicles from '@/components/MarketplaceVehicles';
import WhyChooseTrustedVehicles from '@/components/WhyChooseTrustedVehicles';
import ServicesOverview from '@/components/ServicesOverview';
import HowItWorks from '@/components/HowItWorks';
import StatsSection from '@/components/StatsSection';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import ImsForDealers from '@/components/ImsForDealers';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Trusted Vehicles - Buy & Sell Cars, Free Inspection | India's Most Trusted Car Platform</title>
        <meta 
          name="description" 
          content="Trusted Vehicles - India's most trusted car platform. Buy certified used cars, sell your car with free inspection, get instant valuation. Professional car inspection services, best prices & warranty. Free test drive available across India."
        />
        <meta name="keywords" content="trusted vehicles, buy car, sell car, car inspection, car valuation, used cars, certified cars, car dealership india, free car inspection, car marketplace" />
        <meta property="og:title" content="Trusted Vehicles - Buy & Sell Cars with Free Inspection" />
        <meta property="og:description" content="India's most trusted car platform for buying and selling certified vehicles with professional inspection services" />
        <meta property="og:url" content="https://trustedvehicles.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://trustedvehicles.com/brand-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trusted Vehicles - Buy & Sell Cars" />
        <meta name="twitter:description" content="India's trusted car platform with free inspection services" />
        <link rel="canonical" href="https://trustedvehicles.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Trusted Vehicles",
            "url": "https://trustedvehicles.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://trustedvehicles.com/buy-used-car?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <HeroSection />
      <MarketplaceVehicles />
      <TrustSection /> 
      <InspectionServices />
      <ImsForDealers />
      <WhyChooseTrustedVehicles />
      <ServicesOverview />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;