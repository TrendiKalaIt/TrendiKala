// addressSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddresses = createAsyncThunk('address/fetchAddresses', async (token) => {
  const res = await axios.get('/api/address/my', { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
});

export const saveNewAddress = createAsyncThunk('address/saveNewAddress', async ({ data, token }) => {
  const res = await axios.post('/api/address/save', data, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
});

const addressSlice = createSlice({
  name: 'address',
  initialState: { addresses: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.addresses = action.payload;
      })
      .addCase(saveNewAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload);
      });
  }
});

export default addressSlice.reducer;
