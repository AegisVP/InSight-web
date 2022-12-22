import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { handleGettingDiet } from './dietHandlers';
import { fetchDiet, fetchUserDiet } from './dietOperations';

const initialState = {
  dailyCalories: 0,
  stopProducts: [],
  isLoading: false,
  error: null,
};

const dietSlice = createSlice({
  name: 'diet',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchDiet.fulfilled, handleGettingDiet)
      .addCase(fetchUserDiet.fulfilled, handleGettingDiet)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export default dietSlice.reducer;
