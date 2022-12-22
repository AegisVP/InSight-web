import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { handleFetchParams } from './paramsHandlers';
import { fetchParams } from './paramsOperations';

const initialState = {
  height: 0,
  age: 0,
  currentWeight: 0,
  desiredWeight: 0,
  bloodType: 0,
  isLoading: false,
  error: null,
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchParams.fulfilled, handleFetchParams)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const paramsReducer = paramsSlice.reducer;
export const { setParams } = paramsSlice.actions;
