import React from 'react';
import { SiRazorpay } from 'react-icons/si';
import { FaGooglePay, FaCcMastercard } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#bedaa4] text-gray-800 py-10 px-4  shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Customer Care */}
        <div>
          <h3 className="font-bold text-lg mb-4">CUSTOMER CARE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Track an Order</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">FAQs</a></li>
          </ul>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">SHOP</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Products</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Manufacturing</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold text-lg mb-4">CONSUMER POLICIES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Cancellation & Return Policy</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Privacy & Data Protection Policy</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social + Payment */}
        <div>
          <h3 className="font-bold text-lg mb-4">SOCIALS</h3>
          <ul className="space-y-2 mb-6">
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Instagram</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">Twitter</a></li>
            <li><a href="#" className="hover:text-lime-700 transition duration-300">YouTube</a></li>
          </ul>

          <div>
            <h3 className="font-bold text-lg mb-4">TRENDI KALA ACCEPTS</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-700">
              <SiRazorpay />
              <FaGooglePay />
              <FaCcMastercard />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
