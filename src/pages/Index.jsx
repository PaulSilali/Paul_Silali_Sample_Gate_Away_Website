import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import DealSection from '../components/DealSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ContentSection />
        <DealSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;