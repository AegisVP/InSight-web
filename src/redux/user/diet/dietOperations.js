import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchDiet = createAsyncThunk('diet/fetchDiet', async (val, thunkAPI) => {
  try {
    const response = await axios.post('/diet', val);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchUserDiet = createAsyncThunk('diet/fetchUserDiet', async (val, thunkAPI) => {
  try {
    const response = await axios.post('/diet/user', val);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
