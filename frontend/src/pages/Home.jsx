import React, { useState } from 'react';

import HeroSection from '../components/HeroSection';
import NewArrivals from '../components/NewArrivals';
import Outfit from '../components/Outfit';
import ProductCard from '../components/ProductCard';
import { productData } from '../assets/data';
import PosterComponent from '../components/PosterComponent';


const Home = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Show 8 at start

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <HeroSection />
      <NewArrivals />
      <Outfit />
      <PosterComponent/>

      {/* Products Section */}
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-[#93A87E] mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {productData.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleCount < productData.length && (
          <div className="text-center my-8">
            <button
              onClick={handleSeeMore}
              className="bg-[#93A87E] text-white px-8 py-2 rounded-full hover:bg-[#93a87ea4] transition"
            >
              See More
            </button>
          </div>
        )}
      </div>


     
    </>
  );
};

export default Home;
