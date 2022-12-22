import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { getDiet } from './dietOperations';
import { handleGettingDiet } from './dietHandlers';

const initialState = {
  dailyIntake: 0,
  stopProd: [],
  // params: {
  //   height: 0,
  //   age: 0,
  //   currentWeight: 0,
  //   desireWeight: 0,
  //   bloodType: 0,
  //   proposedDiet: {
  //     dailyIntake: 0,
  //     stopProd: [],
  //   },
  // },
  isLoading: false,
  error: null,
};

const dietSlice = createSlice({
  name: 'diet',
  initialState,
  // reducers: builder => {
  //   builder
  //     .addCase(getUserInfo.pending, handlePending)
  //     .addCase(getUserInfo.fulfilled, handleGettingUserInfo)
  //     .addCase(getUserInfo.rejected, handleRejected);
  // },
  extraReducers: builder => {
    builder
      .addCase(getDiet.pending, handlePending)
      .addCase(getDiet.fulfilled, handleGettingDiet)
      .addCase(getDiet.rejected, handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const dietReducer = dietSlice.reducer;
