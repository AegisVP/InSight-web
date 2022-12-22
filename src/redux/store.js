import axios from 'axios';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productsReducer } from './products/productsSlice';
import { authReducer } from './user/auth/authSlice';
import { dietReducer } from './user/diet/dietSlice';
import { paramsReducer } from './user/params/paramsSlice';
import { diaryReducer } from './diary/diarySlice';
import { constants } from 'constants';

axios.defaults.baseURL = constants.apiServerAddress;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const presistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const userReducer = combineReducers({
  auth: presistedAuthReducer,
  params: paramsReducer,
  diet: dietReducer,
});

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    diary: diaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
