import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchParams = createAsyncThunk('params/fetch', async (val, thunkAPI) => {
  try {
    const response = await axios.get('/user/current', val);
    return response.data?.params;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
