import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../utiliti/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const [shippingOption, setShippingOption] = useState('free');
  const navigate = useNavigate();


  const changeQuantity = (id, diff) => {
    const product = products.find(p => p.id === id);
    if (product) {
      const newQty = product.quantity + diff;

      if (newQty < 1) {
        toast.error('Quantity cannot be less than 1');
        return;
      }

      dispatch(updateQuantity({ id, quantity: newQty }));

      if (diff > 0) {
        toast.success(`Increased quantity of "${product.productName}"`);
      } else {
        toast.success(`Decreased quantity of "${product.productName}"`);
      }
    }
  };

  const handleRemove = (id) => {
    const product = products.find(p => p.id === id);
    dispatch(removeFromCart(id));
    toast.success(`Removed "${product.productName}" from cart`);
  };

  const subtotal = products.reduce((sum, p) => sum + p.discountPrice * p.quantity, 0);
  const shippingCost =
    shippingOption === 'free' ? 0 :
      shippingOption === 'express' ? 15 :
        shippingOption === 'pickup' ? subtotal * 0.21 : 0;
  const total = subtotal + shippingCost;

  const ShippingRadio = ({ value, label, discountPrice }) => (
    <label
      className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-200 
        ${shippingOption === value ? 'border-green-600 bg-green-100' : 'border-gray-200'}`}
    >
      <div className="flex items-center">
        <input
          type="radio"
          name="shipping"
          value={value}
          checked={shippingOption === value}
          onChange={() => {
            setShippingOption(value);
            toast.success(`Shipping changed to "${label}"`);
          }}
          className="form-radio accent-green-600 h-5 w-5"
        />
        <span className="ml-3 text-gray-700">{label}</span>
      </div>
      <span className="font-medium text-gray-700">{discountPrice}</span>
    </label>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-green-700 text-center mb-12">Cart</h1>

      <div className="flex justify-center items-center mb-12 space-x-8">
        {['Shopping cart', 'Checkout details', 'Order complete'].map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
              ${i === 0 ? 'bg-green-700 text-white' : 'border-2 border-gray-400 text-gray-400'}`}>
              {i + 1}
            </div>
            <span className={`mt-2 ${i === 0 ? 'text-green-700 font-medium border-b-2 border-green-700 pb-1' : 'text-gray-400'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
          {products.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <>
              {/* Header row - hidden on small screens */}
              <div className="hidden md:grid grid-cols-4 gap-4 pb-4 border-b border-gray-200 font-medium text-gray-500">
                <div className="col-span-2">Product</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Subtotal</div>
              </div>

              {products.map(product => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-gray-100"
                >
                  {/* Product Info */}
                  <div className="md:col-span-2 flex items-start sm:items-center gap-4">
                    <img
                      src={product.image || `https://placehold.co/100x100`}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{product.productName || product.name}</h3>
                      <p className="text-sm text-gray-500">Color: {product.color || 'N/A'}</p>
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="text-red-500 text-sm mt-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center sm:justify-start">
                    <button
                      onClick={() => changeQuantity(product.id, -1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 border rounded-l-md"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-y">{product.quantity}</span>
                    <button
                      onClick={() => changeQuantity(product.id, 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 border rounded-r-md"
                    >
                      +
                    </button>
                  </div>

                  {/* Pricing */}
                  <div className="flex flex-col justify-center gap-1">
                    <div className="text-gray-700 text-sm md:text-base">
                      ₹{product.discountPrice}
                    </div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base">
                      ₹{(product.quantity * product.discountPrice).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>


        {/* Cart Summary */}
        <div className="w-full lg:w-96 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart summary</h2>
          <div className="space-y-4">
            <ShippingRadio value="free" label="Free shipping" discountPrice="₹0.00" />
            <ShippingRadio value="express" label="Express shipping" discountPrice="+₹15.00" />
            <ShippingRadio value="pickup" label="Pick Up" discountPrice="+21%" />
          </div>
          <div className="border-t border-gray-200 mt-6 pt-4 space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-semibold text-gray-800">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => {
              toast.success('Proceeding to checkout...');
              setTimeout(() => navigate('/checkout'), 1000); // Adjust delay as needed
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg mt-6 transition-colors duration-200"
          >
            Checkout
          </button>

        </div>
      </div>
    </div>
  );
}

export default CartPage;
