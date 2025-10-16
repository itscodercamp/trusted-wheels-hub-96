import ImsForDealers from '@/components/ImsForDealers';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const ImsForDealersPage = () => {
  return (
    <>
      <Helmet>
        <title>Car Valuation - Get Instant Vehicle Valuation Free | Trusted Vehicles</title>
        <meta 
          name="description" 
          content="Get instant and accurate car valuation online for free. Professional vehicle appraisal, market price analysis, and fair valuation for your car. Best car value calculator in India."
        />
        <meta name="keywords" content="car valuation, vehicle valuation, car price calculator, instant car value, car appraisal india, free car valuation" />
        <meta property="og:title" content="Car Valuation - Instant Free Vehicle Valuation" />
        <meta property="og:description" content="Get accurate car valuation online for free with expert appraisal services" />
        <meta property="og:url" content="https://trustedvehicles.com/car-valuation" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://trustedvehicles.com/car-valuation" />
      </Helmet>
      <ImsForDealers />
    </>
  );
};

export default ImsForDealersPage;