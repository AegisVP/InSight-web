import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { handleLoginUser, handleRegisterUser, handleLogoutUser, handleRefreshUser } from './userHandlers';
import { loginUser, logoutUser, refreshUser, registerUser } from './userOperations';

const initialState = {
  auth: {
    name: '',
    token: '',
    isNew: true,
    isOAuth2: false,
  },
  params: {
    email: '',
    height: 0,
    age: 0,
    current_weight: 0,
    desired_weight: 0,
    blood_type: 0,
    daily_calorie: 0,
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {
    setParams: (state, action) => {
      state.params = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, handleLoginUser)
      .addCase(registerUser.fulfilled, handleRegisterUser)
      .addCase(logoutUser.fulfilled, handleLogoutUser)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { setParams } = userSlice.actions;
export const userReducer = userSlice.reducer;
