import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">VALK</h3>
          <p>© 2023 VALK. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Van der Valk</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Customer Service</h4>
          <ul>
            <li>FAQ</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;