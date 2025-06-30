import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import TabsNavigation from '../productDetails/ProductTabsNavigation';
import ProductDetails from './ProductDetails';
import ProductReviews from './ProductReviews';
import { productData } from '../../assets/data';

// Helper: Find product by ID
const findProductById = (id) => productData.find(p => p.id === parseInt(id));

// Helper: Calculate average rating from reviews
const getAvgRating = (reviews) => {
  if (!reviews?.length) return 0;
  return (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
};

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = findProductById(id); // Find the product

  // State for thumbnail, color, size, quantity, and active tab
  const [thumbnail, setThumbnail] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Set initial thumbnail, color, and size when product is found
  useEffect(() => {
    if (product) {
      setThumbnail(product.images[0]);
      setSelectedColor(product.colors?.[0]?.name || '');
      setSelectedSize(product.sizes?.[0] || '');
    }
  }, [product]);

  // If product not found, show error message
  if (!product) return <div className="text-center text-red-500 text-xl mt-10">Product not found.</div>;

  // Calculate average rating
  const avgRating = getAvgRating(product.reviews);

  // Handle quantity increase/decrease
  const handleQuantity = (type) => {
    setQuantity(prev => type === 'increase' ? prev + 1 : Math.max(1, prev - 1));
  };

  // Tabs for description and reviews
  const tabs = [
    { id: 'description', name: 'Description & Details' },
    { id: 'reviews', name: 'Reviews' },
  ];

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'description': return <ProductDetails productData={product} />;
      case 'reviews': return <ProductReviews reviews={product.reviews} />;
      default: return null;
    }
  };

  return (
    <>
      {/* Main flex container for images and details */}
      <div className="bg-white flex flex-col lg:flex-row gap-8 p-4 lg:px-16 w-full mt-8 ">
        {/* Left: Images (thumbnails and main image) */}
        <div className="flex flex-col lg:flex-row w-full lg:w-5/12 gap-4 lg:items-start h-full">
          {/* Thumbnail images */}
          <div className="w-full lg:w-4/12 overflow-x-auto lg:overflow-y-auto pr-2 order-2 lg:order-1 lg:h-[350px]">
            <div className="flex gap-4 lg:flex-col">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setThumbnail(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden object-fill
                     cursor-pointer border-2 transition ${thumbnail === img ? 'border-green-700' : 'border-gray-300'}`}
                >
                  <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          {/* Main image */}
          <div className="w-full lg:w-6/6 h-[350px] rounded-lg overflow-hidden border border-green-700/50 order-1 lg:order-2">
            {thumbnail ? (
              <img src={thumbnail} alt={product.productName} className="w-full h-full object-cover object-top " />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
            )}
          </div>
        </div>

        {/* Right: Product details */}
        <div className="w-full lg:w-2/6 space-y-2">
          <h1 className="text-2xl font-bold text-[#35894E]">{product.productName}</h1>
          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.round(avgRating) ? '#FFC107' : '#E0E0E0'}
                stroke={i < Math.round(avgRating) ? '#FFC107' : '#A0A0A0'}
              />
            ))}
            <span className="text-gray-600">{avgRating}/5</span>
          </div>
          {/* Pricing */}
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-semibold text-[#35894E]">₹{product.discountPrice}</span>
            <span className=" text-gray-500 line-through">₹{product.price}</span>
            {product.price && product.discountPrice && (
              <span className="bg-[#93a87e4b] text-black text-sm px-3 py-1 rounded-full">
                -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
              </span>
            )}
          </div>
          {/* Short Description */}
          <p className="text-[#35894E] border-b border-gray-200 pb-4">{product.description}</p>
          {/* Color Selector */}
          <div>
            <h3 className="text-[#35894E] mb-2">Select Colors</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${selectedColor === color.name ? 'border-green-700 scale-110' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === color.name && <Check size={18} color="white" />}
                </button>
              ))}
            </div>
          </div>
          {/* Size Selector */}
          <div>
            <h3 className="text-[#35894E] mb-2">Choose Size</h3>
            <div className="overflow-x-auto sm:overflow-visible">
              <div className="flex gap-3 whitespace-nowrap sm:flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3  rounded-3xl border text-[12px] font-medium transition ${selectedSize === size ? 'bg-[#93A87E] text-white border-[#93A87E]' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Quantity & Cart */}
          <div className="flex flex-row sm:flex-row items-center gap-4 pt-1">
            <div className="flex items-center p-0 border border-gray-300 rounded-full lg:w-32 justify-between">
              <button className="px-4 text-xl text-gray-600 hover:bg-gray-100 rounded-l-full py-1" onClick={() => handleQuantity('decrease')}>-</button>
              <span className="text-lg font-medium">{quantity}</span>
              <button className="px-4 text-xl text-gray-600 hover:bg-gray-100 rounded-r-full py-1" onClick={() => handleQuantity('increase')}>+</button>
            </div>
            <button className="w-full bg-[#93A87E] hover:bg-[#80996D] text-white font-medium py-1  md:px-6 text-xl rounded-full shadow-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs: Description & Reviews */}
      <div className="max-w-6xl mx-auto p-4 mt-2">
        <TabsNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="pt-6">{renderTabContent()}</div>
      </div>
    </>
  );
};

export default ProductDetailPage;
