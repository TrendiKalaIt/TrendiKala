// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice.js'
import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice.js';
import cartReducer from './cartSlice.js';
import checkoutReducer from './checkoutSlice.js';
import authReducer from '../utility/auth/authSlice.js';
import reviewReducer from '../utility/reviewSlice.js'


const store = configureStore({
  reducer: {
    loader: loaderReducer,
    review: reviewReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    product: productReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
