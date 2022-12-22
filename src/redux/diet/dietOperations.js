import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDiet = createAsyncThunk(
  'diet/all',
  async ({ height, age, currentWeight, desireWeight, bloodType }, thunkAPI) => {
    try {
      const response = await axios.post('/diet', { height, age, currentWeight, desireWeight, bloodType });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchUserDiet = createAsyncThunk(
  'diet/user',
  async ({ height, age, currentWeight, desireWeight, bloodType }, thunkAPI) => {
    try {
      const response = await axios.post('/diet/user', { height, age, currentWeight, desireWeight, bloodType });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
