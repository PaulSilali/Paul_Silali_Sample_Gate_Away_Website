import React from 'react';
import { Button } from "@/components/ui/button";

const DealSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto flex space-x-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">THE DEAL</h2>
          <h3 className="text-xl mb-2">Resort Linstow</h3>
          <p className="text-2xl font-bold mb-4">€327,23</p>
          <ul className="list-disc list-inside mb-4">
            <li>3 nights in a cottage</li>
            <li>Breakfast included</li>
            <li>Free access to pool</li>
            <li>Free WiFi</li>
          </ul>
          <Button>BOOK NOW</Button>
        </div>
        <img src="/path-to-cottage-image.jpg" alt="Cottage" className="w-1/3 object-cover" />
      </div>
    </section>
  );
};

export default DealSection;