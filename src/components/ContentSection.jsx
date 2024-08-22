import React from 'react';

const ContentSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">COMFORT &amp; PRIVACY</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <img src="/path-to-image1.jpg" alt="Comfort and privacy" className="w-1/3 object-cover" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">HET SUBTROPISCHE WATERPARK IS EEN FAVORIET BIJ HET HELE GEZIN</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img src="/path-to-image2.jpg" alt="Family on horseback" className="w-full h-64 object-cover mb-4" />
        <p className="text-sm italic">Rustig klimmen is een groot deel van de pret op een van de duizenden paarden.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">WELLNESS &amp; YOGA</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <img src="/path-to-image3.jpg" alt="Wellness and yoga" className="w-1/3 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;