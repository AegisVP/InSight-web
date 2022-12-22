import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import { handleLoginUser, handleRegisterUser, handleLogoutUser, handleRefreshUser } from './authHandlers';
import { loginUser, logoutUser, refreshUser, registerUser } from './authOperations';

const initialState = {
  name: null,
  email: null,
  token: null,
  isNew: true,
  isOAuth2: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleLogin: (state, action) => {
      state = action.payload;
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

export const authReducer = authSlice.reducer;
export const { googleLogin } = authSlice.actions;
