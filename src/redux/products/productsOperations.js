import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts = createAsyncThunk('products/fetch', async ( query , thunkAPI) => {
  try {
    const response = await axios.get(`${`/products?title=${query}`}`);
    return response.data || [];
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
