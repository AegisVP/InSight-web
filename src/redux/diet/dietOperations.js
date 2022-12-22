import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserInfo = createAsyncThunk(
  '/diet',
  async ({ height, age, currentWeight, desireWeight, bloodType }, thunkAPI) => {
    try {
      const response = await axios.post('/diet', { height, age, currentWeight, desireWeight, bloodType });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getDiet = createAsyncThunk(
  '/diet/user',
  async ({ height, age, currentWeight, desireWeight, bloodType }, thunkAPI) => {
    try {
      const response = await axios.post('/diet/user', { height, age, currentWeight, desireWeight, bloodType });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
