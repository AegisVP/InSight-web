import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts = createAsyncThunk('products/fetch', async (query , thunkAPI) => {
  try {
    const queryString = URLSearchParams.toString(query);
    console.log('queryString', queryString)
    const response = await axios.get(`/products${queryString === '' ? '' : `?${queryString}`}`);
    return response.data || [];
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
