import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authHeader } from 'redux/utils/authHeader';

export const loginUser = createAsyncThunk('auth/login', async (val, thunkAPI) => {
  try {
    const response = await axios.post('/user/login', val);
    authHeader.set(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const registerUser = createAsyncThunk('auth/register', async (val, thunkAPI) => {
  try {
    const response = await axios.post('/user', val);
    authHeader.set(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const logoutUser = createAsyncThunk('auth/logout', async (val, thunkAPI) => {
  try {
    const response = await axios.patch('/user/logout', val);
    authHeader.clear();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
export const refreshUser = createAsyncThunk('auth/refresh', async (val, thunkAPI) => {
  try {
    const response = await axios.get('/user/current', val);
    authHeader.set(response.data.token);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
