import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="text-2xl font-bold text-[#003366]">VALK</div>
      <nav>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>Hotels</li>
          <li>Restaurants</li>
          <li>Meetings &amp; Events</li>
          <li>Offers</li>
          <li>Gift Cards</li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-gray-500" />
        <Button variant="outline" className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>Login</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;