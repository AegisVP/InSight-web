import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { getDiet } from './dietOperations';
import { handleGettingDiet } from './dietHandlers';

const initialState = {
  params: {
    height: 0,
    age: 0,
    current_weight: 0,
    desired_weight: 0,
    blood_type: 0,
    proposedDiet: {
      daily_calories: 0,
      stop_products: [],
    },
  },
  isLoading: false,
  error: null,
};

const dietSlice = createSlice({
  name: 'diet',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getDiet.pending, handlePending)
      .addCase(getDiet.fulfilled, handleGettingDiet)
      .addCase(getDiet.rejected, handleRejected)

      // [getDiet.pending]: handlePending,
      // [getDiet.fulfilled]: handleGettingDiet,
      // [getDiet.rejected]: handleRejected,

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const dietReducer = dietSlice.reducer;
