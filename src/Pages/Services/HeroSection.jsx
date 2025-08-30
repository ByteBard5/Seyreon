// /pages/Services/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-auto lg:min-h-screen flex flex-col justify-center items-center text-center px-4 pt-36 pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-purple-700 via-indigo-800 to-transparent blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-cyan-500 via-purple-700 to-transparent blur-2xl opacity-30 animate-pulse"></div>
      </div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Powering Bold Ideas with Strategic Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium">
          We build intelligent automation systems that grow your business, save
          time, and streamline operations — all with zero manual effort.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
