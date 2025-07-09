// redux/features/orderSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async ({ orderPayload, token }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        '/api/orders/place',
        orderPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data.order;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to place order');
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    loading: false,
    error: null,
    currentOrder: null,
    buyNowProduct: null, // ✅ Add this
  },
  reducers: {
    clearOrder: (state) => {
      state.currentOrder = null;
      state.error = null;
    },
    setBuyNowProduct: (state, action) => {
      state.buyNowProduct = action.payload; // ✅ Set buy now item
    },
    clearBuyNowProduct: (state) => {
      state.buyNowProduct = null; // ✅ Clear after order placed
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearOrder,
  setBuyNowProduct,      // ✅ Export this
  clearBuyNowProduct,    // ✅ Export this
} = orderSlice.actions;

export default orderSlice.reducer;


// ✅ Selector to get placed order
export const selectPlacedOrder = (state) => state.order.currentOrder;


