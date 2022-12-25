import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts = createAsyncThunk('products/fetch', async (query , thunkAPI) => {
  try {
<<<<<<< Updated upstream
    const response = await axios.get(`/products?title=${query}`);
=======
    const response = await axios.get(`/products?title=${query === '' ? '' : `?${query}`}`);
>>>>>>> Stashed changes
    return response.data || [];
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
