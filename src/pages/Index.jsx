import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import DealSection from '../components/DealSection';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  // Simulating an API call
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pageData'],
    queryFn: fetchData,
    retry: 3,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ContentSection />
        <DealSection />
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </main>
      <Footer />
    </div>
  );
};

export default Index;