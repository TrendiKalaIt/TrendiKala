// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice.js';
import cartReducer from './cartSlice.js'
import checkoutReducer from './checkoutSlice.js'

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;
