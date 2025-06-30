// src/pages/Products.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { productData } from '../assets/data';

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(16);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 16);
  };

  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-semibold text-green-700 mb-4 text-center">All Products</h1>
      <div className='border w-[150px] m-auto'></div>
      <div className="px-4">
        <h2 className="text-2xl  text-[#93A87E] mb-6">Featured Products</h2>

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
    </div>
  );
};

export default Products;
