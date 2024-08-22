import React from 'react';

const ContentSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[#003366]">COMFORT &amp; PRIVACY</h2>
        <div className="flex space-x-8">
          <p className="flex-1 text-gray-700 leading-relaxed">
            Experience unparalleled comfort and privacy at Van der Valk Linstow. Our spacious rooms and suites are designed to provide a serene retreat, ensuring a peaceful and relaxing stay. With modern amenities and attentive service, we cater to your every need, allowing you to unwind in style and tranquility.
          </p>
          <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Comfort and privacy" className="w-1/3 object-cover rounded-lg shadow-md" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[#003366]">TROPICAL WATERPARK: A FAMILY FAVORITE</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Dive into excitement at our tropical waterpark, a highlight for guests of all ages. With thrilling slides, lazy rivers, and splash zones, it's the perfect place for family fun and adventure. The waterpark offers a refreshing escape and endless entertainment, ensuring unforgettable memories for everyone.
        </p>
        <img src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Tropical waterpark" className="w-full h-96 object-cover rounded-lg shadow-md mb-4" />
        <p className="text-sm italic text-gray-600">Splash and play in our expansive tropical waterpark, a paradise for water enthusiasts of all ages.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-[#003366]">WELLNESS &amp; YOGA</h2>
        <div className="flex space-x-8">
          <p className="flex-1 text-gray-700 leading-relaxed">
            Rejuvenate your body and mind at our state-of-the-art wellness center and yoga studio. Indulge in a range of spa treatments, relax in our sauna, or join a yoga class to find your inner balance. Our wellness facilities are designed to provide a holistic approach to health and relaxation, ensuring you leave feeling refreshed and revitalized.
          </p>
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" alt="Wellness and yoga" className="w-1/3 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;