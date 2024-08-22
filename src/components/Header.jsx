import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="text-2xl font-bold">VALK</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <span>Search icon</span>
        <Button variant="outline">Login</Button>
      </div>
    </header>
  );
};

export default Header;