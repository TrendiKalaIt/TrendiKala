import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearOrderDetails, clearCartFromCheckout, resetCheckoutState } from '../utility/checkoutSlice'; // Import new actions
import { clearBuyNowProduct, clearOrder } from '../utility/orderSlice'; // Assuming clearBuyNowProduct is handled here
import { clearCart } from '../utility/cartSlice'; // Make sure this is imported if it refers to the primary cart slice
import { CheckCircle } from 'lucide-react'; // Ensure CheckCircle is imported

const Thankyou = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // These clear actions ensure that when the user returns from /thankyou
    // to any other page, the cart and checkout details are reset.
    dispatch(clearOrderDetails());      // Clears orderDetails (buy now item)
    dispatch(clearCartFromCheckout()); // Clears the temporary cart array used in checkout
    dispatch(clearBuyNowProduct());    // Clears the buy now product from orderSlice if you use it for that purpose
    dispatch(clearOrder());            // Clears any stored 'currentOrder' from orderSlice
    dispatch(clearCart());             // Ensures the primary cart in cartSlice is cleared
                                       // This is crucial if the user's cart in the DB was cleared,
                                       // but the frontend Redux state wasn't updated by a cart-specific fetch.
  }, [dispatch]);

  return (
    <div className="min-h-screen  flex items-center justify-center  ">
      <div className="w-full  bg-white shadow-lg  p-6 ">
        {/* Thank You Message */}
        <div className="bg-[#D4F387] text-green-800 p-6 rounded-xl flex flex-col items-center text-center mb-8 shadow-md">
          <div className="flex items-center mb-3">
            <h2 className="text-2xl sm:text-3xl font-bold mr-3">Jenny, Thank-you for Your Order!</h2>
            {/* Replaced SVG with Lucide React CheckCircle icon */}
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
          </div>
          <p className="text-xl font-medium mb-2">Order Id:014210012</p>
          <p className="text-gray-700 text-base sm:text-lg">
            We appreciate your order! It's now being packed, and you'll receive tracking info via email shortly.
          </p>
        </div>

        {/* Order Details Table */}
        <div className="mb-8">
          <div className="flex justify-between border-b-2 border-gray-300 pb-3 mb-4">
            <span className="font-semibold text-gray-700 text-lg">Item</span>
            <span className="font-semibold text-gray-700 text-lg">Total</span>
          </div>

          {/* Order Item 1 */}
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src="https://placehold.co/60x60/e0ffe0/000000?text=👗"
                alt="Blue skirt"
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Blue skirt</p>
                <p className="text-gray-500 text-sm">QTY: 1</p>
              </div>
            </div>
            <span className="text-gray-800 font-medium">$30.00</span>
          </div>

          {/* Order Item 2 */}
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src="https://placehold.co/60x60/e0ffe0/000000?text=👗"
                alt="Blue skirt"
                className="w-16 h-16 rounded-lg mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Blue skirt</p>
                <p className="text-gray-500 text-sm">QTY: 1</p>
              </div>
            </div>
            <span className="text-gray-800 font-medium">$30.00</span>
          </div>
        </div>

        {/* Delivery and Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Delivery Address */}
          <div>
            <p className="text-gray-700 font-medium mb-2">Delivery Address:</p>
            <p className="text-gray-800">123 acb street, abc city, Country</p>
          </div>

          {/* Subtotals and Total */}
          <div className="space-y-2 text-right">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span className="font-semibold">$30.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span> {/* Assuming this is a placeholder for shipping/tax etc. */}
              <span className="font-semibold">$30.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t-2 border-gray-200 pt-2">
              <span>Total:</span>
              <span>$30.00</span>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <p className="text-gray-700 font-medium mb-2">Payment Method</p>
            <p className="text-gray-800">COD</p>
          </div>
        </div>

        {/* Back to Shopping Button */}
        <div className="flex justify-center">
          <button className="bg-green-600 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;