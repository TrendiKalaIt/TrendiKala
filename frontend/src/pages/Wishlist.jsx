// src/pages/Wishlist.jsx
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-green-700 mb-4 text-center">Your Wishlist</h1>
      <div className="border w-[150px] m-auto mb-8"></div>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="px-4">
          <h2 className="text-2xl text-[#93A87E] mb-6">Your Favorite Picks</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
