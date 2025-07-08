import React from 'react';
import { Truck, Headphones, ShieldCheck, Twitter, Instagram, Linkedin } from 'lucide-react';




const AboutPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Our Story Section */}
      <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center md:items-start md:space-x-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg leading-relaxed mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
          </p>
          <p className="text-lg leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className="md:w-1/2 h-96 w-full bg-slate-400 rounded-2xl">
          {/* Use your actual image here */}
          <img
            src=""
           
            className="rounded-lg shadow-lg w-full h-auto object-cover" // Added w-full h-auto object-cover for better responsiveness
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Seller Count */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* Using a placeholder for building/home icon as it's not a direct Lucide equivalent for this specific style */}
            <div className="text-4xl text-gray-700 mb-2">🏠</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">10.5k</h3>
            <p className="text-gray-600">Sellers active our site</p>
          </div>

          {/* Monthly Product Sale */}
          <div className="bg-rose-500 text-white p-6 rounded-lg shadow-md text-center">
            {/* Using a placeholder for dollar icon, or you could use 'DollarSign' from Lucide if that fits */}
            <div className="text-4xl mb-2">💲</div>
            <h3 className="text-3xl font-bold mb-1">33k</h3>
            <p className="text-white">Monthly Product Sale</p>
          </div>

          {/* Customer Active */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* Using a placeholder for person group icon, or 'Users' from Lucide */}
            <div className="text-4xl text-gray-700 mb-2">👥</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">45.5k</h3>
            <p className="text-gray-600">Customer active in our site</p>
          </div>

          {/* Annual Gross Sale */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* Using a placeholder for money bag, or 'DollarSign' from Lucide if that fits */}
            <div className="text-4xl text-gray-700 mb-2">💰</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">25k</h3>
            <p className="text-gray-600">Annual gross sale in our site</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0">
            {/* Tom Cruise */}
            <div className="w-full sm:w-80 border-2 border-dashed border-blue-500 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
              <img
                src=""
                alt="Tom Cruise"
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Tom Cruise</h3>
              <p className="text-gray-600 mb-3">Founder & Chairman</p>
              <div className="flex space-x-3 text-gray-500">
                <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
                <a href="#" className="hover:text-blue-500"><Instagram size={20} /></a>
                <a href="#" className="hover:text-blue-500"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Emma Watson */}
            <div className="w-full sm:w-80 border-2 border-dashed border-blue-500 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
              <img
                src="" // Use imported image
                alt="Emma Watson"
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Emma Watson</h3>
              <p className="text-gray-600 mb-3">Managing Director</p>
              <div className="flex space-x-3 text-gray-500">
                <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
                <a href="#" className="hover:text-blue-500"><Instagram size={20} /></a>
                <a href="#" className="hover:text-blue-500"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Will Smith */}
            <div className="w-full sm:w-80 border-2 border-dashed border-blue-500 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
              <img
                src="" // Use imported image
                alt="Will Smith"
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Will Smith</h3>
              <p className="text-gray-600 mb-3">Product Designer</p>
              <div className="flex space-x-3 text-gray-500">
                <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
                <a href="#" className="hover:text-blue-500"><Instagram size={20} /></a>
                <a href="#" className="hover:text-blue-500"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          {/* Pagination dots if needed (as seen in image_1c1126.png) */}
          <div className="flex justify-center mt-8 space-x-2">
            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Free and Fast Delivery */}
            <div className="flex flex-col items-center p-6">
              <div className="bg-gray-800 text-white rounded-full p-4 mb-4">
                <Truck size={32} /> {/* Lucide Truck icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
              <p className="text-gray-600">Free delivery for all orders over $140</p>
            </div>

            {/* 24/7 Customer Service */}
            <div className="flex flex-col items-center p-6">
              <div className="bg-gray-800 text-white rounded-full p-4 mb-4">
                <Headphones size={32} /> {/* Lucide Headphones icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
              <p className="text-gray-600">Friendly 24/7 customer support</p>
            </div>

            {/* Money Back Guarantee */}
            <div className="flex flex-col items-center p-6">
              <div className="bg-gray-800 text-white rounded-full p-4 mb-4">
                <ShieldCheck size={32} /> {/* Lucide ShieldCheck icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
              <p className="text-gray-600">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;