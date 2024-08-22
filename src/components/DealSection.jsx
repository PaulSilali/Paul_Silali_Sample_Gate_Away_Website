import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const DealSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex space-x-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#003366]">THE DEAL</h2>
          <h3 className="text-2xl mb-2 text-gray-700">Resort Linstow</h3>
          <p className="text-4xl font-bold mb-6 text-[#003366]">€327,23</p>
          <ul className="mb-6 space-y-2">
            {['3 nights in a cottage', 'Breakfast included', 'Free access to pool', 'Free WiFi'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
          <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-2 rounded-full text-lg">
            BOOK NOW
          </Button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Cottage" 
          className="w-1/2 object-cover rounded-lg shadow-md h-[400px]" 
        />
      </div>
    </section>
  );
};

export default DealSection;