import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/productsSlice';
import { userReducer } from './user/userSlice';
import { diaryReducer } from './diary/diarySlice';
import { dietReducer } from './diet/dietSlice';
import { constants } from 'constants';

axios.defaults.baseURL = constants.apiServerAddress;

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    diary: diaryReducer,
    diet: dietReducer,
  },
});
