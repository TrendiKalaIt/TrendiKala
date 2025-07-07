import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '../utility/cartSlice';
import { addToWishlist, removeFromWishlist } from '../utility/wishlistSlice';  // async thunks
import { setOrderDetails } from '../utility/checkoutSlice';

const ProductCard = ({ product = {} }) => {
  const {
    media = [],
    category = 'Category',
    productName = 'Product Name',
    description = 'Product description',
    discountPrice = '₹0.00',
    price = '₹0.00',
    _id,
  } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get logged-in user from redux auth state
  const user = useSelector((state) => state.auth.user);

  // Wishlist items from redux state
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleNavigate = () => {
    if (_id) {
      navigate(`/productdetails/${_id}`);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart([{ product: _id, quantity: 1 }]))
      .unwrap()
      .then(() => toast.success('Added to cart'))
      .catch(err => toast.error('Failed to add to cart'));
  };


  // Check if product is in wishlist
  const isWishlisted = wishlist.some((item) => item._id === _id);

  // Toggle wishlist with async dispatch
  const toggleWishlist = async (e) => {
    e.stopPropagation();
    try {
      if (isWishlisted) {
        await dispatch(removeFromWishlist(_id)).unwrap();
        toast.success('Removed from Wishlist!');
      } else {
        await dispatch(addToWishlist(product)).unwrap();
        toast.success('Added to Wishlist');
      }
    } catch (error) {
      toast.error(error || 'Wishlist update failed');
    }
  };

  const handleBuyNow = () => {
    dispatch(setOrderDetails(product));
    navigate('/checkout');
  };

  return (
    <div className="relative w-full max-w-xs mx-auto bg-white border-2 rounded-3xl shadow-md overflow-hidden border-[#35894e] h-96 flex flex-col">
      {/* Image Section */}
      <div
        className="relative w-full h-3/5 overflow-hidden rounded-t-2xl cursor-pointer"
        onClick={handleNavigate}
      >
        <img
          src={media?.[0]?.url || "https://placehold.co/300x320/FFD368/333?text=Product+Image"}
          alt={productName}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x320/FFD368/333?text=Image+Not+Found";
          }}
        />

        {/* Wishlist button only if user is logged in */}
        {user && (
          <button
            className="absolute top-4 right-4 p-2 rounded-full text-gray-700 transition-colors duration-200"
            aria-label="Add to favorites"
            onClick={toggleWishlist}
          >
            <Heart
              size={24}
              strokeWidth={1.5}
              className="bg-transparent"
              color={isWishlisted ? "#22c55e" : "gray"}
              fill={isWishlisted ? "#22c55e" : "white"}
            />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="h-2/5 p-3 flex flex-col justify-between bg-white rounded-b-3xl">
        <div>
          <p className="text-sm text-[#93a87e86] font-semibold">{category}</p>

          <h3
            onClick={handleNavigate}
            className="text-md font-bold text-[#93A87E] truncate cursor-pointer hover:underline"
          >
            {productName}
          </h3>

          <p className="text-sm text-[#93a87eba] truncate">{description}</p>

          <div className="flex gap-3 pt-1">
            <p className="text-md  text-[#93A87E]">₹{discountPrice}</p>
            <p className="text-md text-gray-500 line-through">₹{price}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full hover:bg-gray-300 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 py-2 bg-[#93A87E] text-white text-xs font-semibold rounded-full hover:bg-green-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
