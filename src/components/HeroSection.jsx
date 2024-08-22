import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Aerial view of resort"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          THE ULTIMATE GETAWAY AT<br />VAN DER VALK LINSTOW
        </h1>
        <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-2 rounded-full">
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;