// utility/checkoutSlice.js

const initialState = {
  orderDetails: null,       // for Buy Now (single product)
  cartFromCheckout: [],     // for full cart checkout
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case 'checkout/setOrderDetails':
      return { ...state, orderDetails: action.payload };
    case 'checkout/setCartFromCheckout':
      return { ...state, cartFromCheckout: action.payload };
    case 'checkout/clearOrderDetails':
      return { ...state, orderDetails: null };
    case 'checkout/clearCartFromCheckout': // <--- ADD THIS CASE
      return { ...state, cartFromCheckout: [] };
    case 'checkout/resetCheckoutState': // <--- OPTIONAL: ADD THIS CASE for full reset
        return initialState;
    default:
      return state;
  }
}

// For Buy Now (single product)
export const setOrderDetails = (product) => ({
  type: 'checkout/setOrderDetails',
  payload: product,
});

// Clear Buy Now data
export const clearOrderDetails = () => ({
  type: 'checkout/clearOrderDetails',
});

// For Cart Checkout (full cart array)
export const setCartFromCheckout = (cartArray) => ({
  type: 'checkout/setCartFromCheckout',
  payload: cartArray,
});

// <--- ADD THESE NEW EXPORTS ---
export const clearCartFromCheckout = () => ({
  type: 'checkout/clearCartFromCheckout',
});

export const resetCheckoutState = () => ({ // OPTIONAL
    type: 'checkout/resetCheckoutState',
});