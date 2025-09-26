import HeroSection from '@/components/HeroSection';
import BookInspectionCard from '@/components/BookInspectionCard'; // This component is now deprecated/unused
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
import InspectionAndSellCards from '@/components/InspectionAndSellCards'; // Import the new component

const Index = () => {
  return (
    <div>
      <HeroSection />
      <InspectionAndSellCards /> {/* Added the new component here */}
      <MarketplaceVehicles />
      {/* BookInspectionCard is now handled by InspectionAndSellCards */}
      {/* TrustSection is already after BookInspectionCard, so it remains */}
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