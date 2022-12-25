import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addDiaryEntry = createAsyncThunk('diary/addDiaryEntry', async ({ date, product, weight }, thunkAPI) => {
  try {
    const response = await axios.post(`/diary/${date}`, { id: product, weight });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

<<<<<<< Updated upstream
export const deleteDiaryEntry = createAsyncThunk('diary/deleteDiaryEntry', async ({ day, id }, thunkAPI) => {
  try {
    const response = await axios.delete(`/diary/${day}/${id}`);
=======
export const deleteDiaryEntry = createAsyncThunk('diary/deleteDiaryEntry', async (id, day, thunkAPI) => {
  try {
    const response = await axios.delete(`/diary/${day}${id}`);
>>>>>>> Stashed changes
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getDailyDiary = createAsyncThunk('diary/getDailyDiary', async (day, thunkAPI) => {
  try {
    const response = await axios.get(`/diary/${day}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
