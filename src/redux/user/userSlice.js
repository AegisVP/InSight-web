import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleFulfilled, handleRejected } from 'redux/utils/defaultHandlers';
import {
  handleLoginUser,
  handleRegisterUser,
  handleLogoutUser,
  handleRefreshUser,
  handleGoogleLogin,
  handleSetParams,
} from './userHandlers';
import { loginUser, logoutUser, refreshUser, registerUser } from './userOperations';

export const initialParamsState = {
  height: 0,
  age: 0,
  currentWeight: 0,
  desiredWeight: 0,
  bloodType: 0,
};

export const initialUserState = {
  name: null,
  email: null,
  token: null,
  params: initialParamsState,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    googleLogin: handleGoogleLogin,
    setParams: handleSetParams,
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

export const { googleLogin, setParams } = userSlice.actions;
export default userSlice.reducer;
