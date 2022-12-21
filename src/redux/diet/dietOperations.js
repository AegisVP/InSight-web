import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDiet = createAsyncThunk(
  '/diet',
  async ({ height, age, current_weight, desired_weight, blood_type }, thunkAPI) => {
    try {
      const response = await axios.post('/diet', { height, age, current_weight, desired_weight, blood_type });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
