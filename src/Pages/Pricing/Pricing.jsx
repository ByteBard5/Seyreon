// /pages/Pricing/Pricing.jsx
import React from "react";
import HeroSection from "./HeroSection";
import PricingCards from "./PricingCards";
import FeatureComparisonSection from "./FeatureComparisonSection";
import FAQ from "./FAQ";

const Pricing = () => {
  return (
    <div className="relative text-white pt-0 overflow-hidden bg-gradient-to-br from-[#0d0d14] via-[#13131d] to-[#1b1b29] -mt-[80px]">
      <HeroSection />
      <PricingCards />
      <FeatureComparisonSection />
      <FAQ />
    </div>
  );
};

export default Pricing;
