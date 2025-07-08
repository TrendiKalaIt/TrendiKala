import React, { useState, useMemo, useEffect } from 'react';
import { clearCart } from '../utility/cartSlice'; // Assuming this clears the Redux cart state
import { clearOrderDetails, clearCartFromCheckout, resetCheckoutState } from '../utility/checkoutSlice'; // Import new actions
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { CreditCard, Banknote, Apple } from 'lucide-react';
import { placeOrder } from '../utility/orderSlice';

const CheckoutDetails = () => {
  const orderDetails = useSelector((state) => state.checkout.orderDetails); // This is for 'Buy Now' single item
  const cartFromCheckout = useSelector((state) => state.checkout.cartFromCheckout || []); // This holds the full cart for checkout
  const token = useSelector((state) => state.auth.token) || localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Correctly determine what items are being checked out
  const cart = useMemo(() => {
    // If orderDetails (Buy Now) exists, use it as a single-item array
    // Otherwise, use the cartFromCheckout array (which was set from CartPage)
    return orderDetails ? [orderDetails] : cartFromCheckout;
  }, [orderDetails, cartFromCheckout]);


  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [saveInfo, setSaveInfo] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  const subtotal = cart.reduce((sum, p) => sum + (p.quantity || 1) * p.discountPrice, 0);

  // --- START OF MODIFIED LOGIC FOR 12% DELIVERY CHARGE IN CHECKOUTDETAILS ---
  const DELIVERY_CHARGE_PERCENTAGE = 0.12; // Define 12% as a constant
  const shipping = subtotal * DELIVERY_CHARGE_PERCENTAGE; // Calculate 12% of subtotal
  // --- END OF MODIFIED LOGIC FOR 12% DELIVERY CHARGE IN CHECKOUTDETAILS ---

  const total = subtotal + shipping; // Total now includes the 12% delivery charge

  // Don't auto-fill from localStorage — keep form blank on every load
  useEffect(() => {
    setFormData({
      fullName: '',
      streetAddress: '',
      apartment: '',
      townCity: '',
      phoneNumber: '',
      emailAddress: '',
    });
    setSaveInfo(false);
    setPaymentMethod('cashOnDelivery'); // Reset payment method on load
  }, []); // Empty dependency array means this runs once on mount


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.streetAddress.trim()) errors.streetAddress = 'Street Address is required';
    if (!formData.townCity.trim()) errors.townCity = 'Town/City is required';
    if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Invalid Indian phone number';
    if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) errors.emailAddress = 'Invalid email address';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((err) => toast.error(err));
      return;
    }

    if (!token) {
      toast.error('Please log in to place an order.');
      return;
    }

    const shippingInfo = {
      fullName: formData.fullName,
      streetAddress: formData.streetAddress,
      apartment: formData.apartment,
      townCity: formData.townCity,
      phoneNumber: formData.phoneNumber,
      emailAddress: formData.emailAddress,
    };

    const orderPayload = {
      shippingInfo,
      paymentMethod,
      items: cart, // This 'cart' here is already correct based on useMemo
      // It's good practice to send the final calculated shipping cost to the backend as well
      // so your backend can verify or record it.
      shippingCost: shipping, // Send the calculated shipping cost
      totalAmount: total, // Send the calculated total amount
    };
    console.log('Frontend sending orderPayload:', orderPayload);

    try {
      const result = await dispatch(placeOrder({ orderPayload, token }));
      if (placeOrder.fulfilled.match(result)) {
        toast.success('Order placed successfully!');
        if (saveInfo) {
          localStorage.setItem('savedShippingInfo', JSON.stringify(shippingInfo));
        } else {
          localStorage.removeItem('savedShippingInfo'); // Clear if user unchecked "save info"
        }

        // --- IMPORTANT: CLEAR FRONTEND STATE AFTER SUCCESSFUL ORDER ---

        // 1. Clear the local form data
        setFormData({
          fullName: '',
          streetAddress: '',
          apartment: '',
          townCity: '',
          phoneNumber: '',
          emailAddress: '',
        });
        setSaveInfo(false); // Reset save info checkbox
        setPaymentMethod('cashOnDelivery'); // Reset payment method

        // 2. Clear Redux states based on checkout type
        if (orderDetails) {
          // This was a 'Buy Now' order
          dispatch(clearOrderDetails()); // Clears orderDetails from checkoutSlice
          // If you use orderSlice for buyNowProduct, clear it too:
          // dispatch(clearBuyNowProduct()); // Make sure this action is dispatched if applicable
        } else {
          // This was a 'Cart' checkout
          dispatch(clearCart()); // Clears the actual user's cart (from cartSlice)
          dispatch(clearCartFromCheckout()); // Clears the temporary cart array in checkoutSlice
        }
        // You might also consider dispatching resetCheckoutState() here if you want to be extra thorough:
        // dispatch(resetCheckoutState());


        navigate('/thankyou'); // Navigate after state is cleared
      } else {
        toast.error(result.payload || 'Order failed');
      }
    } catch (err) {
      console.error("Order submission error:", err); // Log the full error
      toast.error('Something went wrong during order submission.');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center lg:mx-28">
      <div className="w-full bg-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8">
        {/* Left Section: Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-green-700 mb-8">Checkout Details</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              ['fullName', 'Full Name*'],
              ['streetAddress', 'Street Address*'],
              ['apartment', 'Apartment, floor, etc. (optional)'],
              ['townCity', 'Town/City*'],
              ['phoneNumber', 'Phone Number*'],
              ['emailAddress', 'Email Address*'],
            ].map(([id, label]) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <input
                  type={id === 'emailAddress' ? 'email' : 'text'}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className={`w-full px-2 py-1 border ${formErrors[id] ? 'border-red-500' : 'border-gray-300'} rounded-md bg-green-50 focus:ring-green-500 focus:border-green-500 transition duration-200`}
                />
                {formErrors[id] && <p className="text-sm text-red-500 mt-1">{formErrors[id]}</p>}
              </div>
            ))}

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="saveInfo"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className="h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500 cursor-pointer"
              />
              <label htmlFor="saveInfo" className="ml-3 text-sm text-gray-700">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Right Section: Summary + Payment */}
        <div className="flex-1 lg:pl-12">
          <div className="space-y-6">
            {cart.length === 0 ? ( // Added check for empty cart
              <p className="text-gray-500 text-center py-4">No items to display.</p>
            ) : (
              cart.map((item, index) => (
                <div key={item._id || item.id || index} className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={item.image || 'https://placehold.co/40x40'}
                      alt={item.productName}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <span className="text-gray-800">{item.productName}</span>
                  </div>
                  <span className="text-gray-800 font-medium">₹{(item.quantity || 1) * item.discountPrice}</span>
                </div>
              ))
            )}

            <div className="flex justify-between text-gray-700 pt-4">
              <span>Subtotal:</span>
              <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
            </div>
            {/* --- START OF MODIFIED SHIPPING DISPLAY IN CHECKOUTDETAILS --- */}
            <div className="flex justify-between text-gray-700">
              <span>Delivery Charge (12%):</span> {/* Changed label */}
              <span className="font-semibold text-green-600">₹{shipping.toFixed(2)}</span> {/* Display calculated shipping */}
            </div>
            {/* --- END OF MODIFIED SHIPPING DISPLAY IN CHECKOUTDETAILS --- */}
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t-2 border-gray-200 pt-4">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
            {[
              {
                id: 'bank',
                label: 'Bank / UPI / Wallets',
                icons: [CreditCard, Banknote, Apple],
              },
              {
                id: 'cashOnDelivery',
                label: 'Cash on Delivery',
              },
            ].map(({ id, label, icons }) => (
              <div
                key={id}
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition duration-200 ${paymentMethod === id ? 'border-green-500 bg-green-50' : 'border-gray-300'
                  }`}
                onClick={() => setPaymentMethod(id)}
              >
                <input
                  type="radio"
                  id={id}
                  name="paymentMethod"
                  value={id}
                  checked={paymentMethod === id}
                  onChange={() => setPaymentMethod(id)}
                  className="h-5 w-5 text-green-600 focus:ring-green-500 cursor-pointer"
                />
                <label htmlFor={id} className="ml-3 text-gray-700 flex items-center flex-grow">
                  {label}
                  {icons && (
                    <div className="ml-auto flex space-x-2">
                      {icons.map((Icon, i) => (
                        <Icon key={i} size={20} className="text-green-600" />
                      ))}
                    </div>
                  )}
                </label>
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="mt-8 w-full bg-green-600 text-white py-2 rounded-lg font-semibold text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;