// redux/checkoutSlice.js
const initialState = {
  orderDetails: null,
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case 'checkout/setOrderDetails':
      return { ...state, orderDetails: action.payload };
    default:
      return state;
  }
}

export const setOrderDetails = (product) => ({
  type: 'checkout/setOrderDetails',
  payload: product,
});
