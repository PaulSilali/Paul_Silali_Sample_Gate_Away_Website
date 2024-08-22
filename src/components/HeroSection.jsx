import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-96">
      <img
        src="/path-to-your-image.jpg"
        alt="Aerial view of resort"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">
          THE ULTIMATE GETAWAY AT<br />VAN DER VALK LINSTOW
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;