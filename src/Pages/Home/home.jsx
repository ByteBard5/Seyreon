import React from "react";
import HomeHero from "./HomeHero";
import HomeContent from "./HomeContent";
import HomeTestimonial from "./HomeTestimonial";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div className="bg-[#0e0e0e] text-white">
      <HomeHero />
      {<HomeContent />} {/* 👈 Add this when content is ready */}
      <HomeTestimonial />
      <Newsletter />
    </div>
  );
};

export default Home;
