import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { CreditCard, Banknote, Apple } from 'lucide-react';

const CheckoutDetails = () => {
  const orderDetails = useSelector((state) => state.checkout.orderDetails);
  const cartFromStore = useSelector((state) => state.cart);

  // ✅ Fix: Memoize derived cart value
  const cart = useMemo(() => {
    return orderDetails ? [orderDetails] : cartFromStore;
  }, [orderDetails, cartFromStore]);

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
  const shipping = 0;
  const total = subtotal + shipping;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.streetAddress.trim()) errors.streetAddress = 'Street Address is required';
    if (!formData.townCity.trim()) errors.townCity = 'Town/City is required';
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Enter a valid 10-digit Indian phone number';
    }
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      errors.emailAddress = 'Enter a valid email address';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((errMsg) => toast.error(errMsg));
      return;
    }

    const order = {
      customerInfo: formData,
      paymentMethod,
      cart,
      total,
      saveInfo,
    };

    console.log('Order placed:', order);
    toast.success('Order placed successfully!');
    setTimeout(() => {
      navigate('/thankyou');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center ">
      <div className="w-full bg-white shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8">
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
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                  {label}
                </label>
                <input
                  type={id === 'emailAddress' ? 'email' : 'text'}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${formErrors[id] ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500 transition duration-200`}
                />
                {formErrors[id] && (
                  <p className="text-sm text-red-500 mt-1">{formErrors[id]}</p>
                )}
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
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <img
                    src={item.image || `https://placehold.co/40x40`}
                    alt={item.productName}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <span className="text-gray-800 ">{item.productName}</span>
                </div>
                <span className="text-gray-800 font-medium ">
                  ₹{(parseFloat(item.discountPrice) * (item.quantity || 1)).toFixed(2)}
                </span>

              </div>
            ))}

            <div className="flex justify-between text-gray-700 pt-4">
              <span>Subtotal:</span>
              <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 border-t-2 border-gray-200 pt-4">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Options */}
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
            className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
