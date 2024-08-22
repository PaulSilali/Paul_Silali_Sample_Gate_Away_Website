import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4">VALK</h3>
          <p className="text-sm">© 2023 VALK. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Van der Valk</h4>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Facebook className="h-6 w-6" />
            <Instagram className="h-6 w-6" />
            <Twitter className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;