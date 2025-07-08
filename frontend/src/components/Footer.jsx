// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for internal routing
import { SiRazorpay } from 'react-icons/si';
import { FaGooglePay, FaCcMastercard } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#bedaa4] text-gray-800 py-10 px-4 shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Customer Care */}
        <div>
          <h3 className="font-bold text-lg mb-4">CUSTOMER CARE</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:text-lime-700 transition duration-300">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-lime-700 transition duration-300">FAQs</Link></li>
          </ul>
        </div>

        {/* Shop Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-4">SHOP</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-lime-700 transition duration-300">Home</Link></li>
            <li><Link to="/allproducts" className="hover:text-lime-700 transition duration-300">All Products</Link></li>
            <li><Link to="/about" className="hover:text-lime-700 transition duration-300">About</Link></li>
            <li><Link to="/manufacturing" className="hover:text-lime-700 transition duration-300">Manufacturing</Link></li>
          </ul>
        </div>

        {/* User & Policy */}
        <div>
          <h3 className="font-bold text-lg mb-4">ACCOUNT / POLICIES</h3>
          <ul className="space-y-2">
            <li><Link to="/signup" className="hover:text-lime-700 transition duration-300">Create Account</Link></li>
            <li><Link to="/return-policy" className="hover:text-lime-700 transition duration-300">Cancellation & Return</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-lime-700 transition duration-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-lime-700 transition duration-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Socials & Payment */}
        <div>
          <h3 className="font-bold text-lg mb-4">SOCIALS</h3>
          <ul className="space-y-2 mb-6">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-lime-700 transition duration-300">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-lime-700 transition duration-300">Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-lime-700 transition duration-300">YouTube</a></li>
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
