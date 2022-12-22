import axios from 'axios';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userSlice';
import productsReducer from './products/productsSlice';
import dietReducer from './diet/dietSlice';
import diaryReducer from './diary/diarySlice';
import { constants } from 'constants';

axios.defaults.baseURL = constants.apiServerAddress;

const presistedUserReducer = persistReducer(
  {
    key: 'user',
    storage,
    whitelist: ['token'],
  },
  userReducer
);

const rootReducer = combineReducers({
  products: productsReducer,
  user: presistedUserReducer,
  diary: diaryReducer,
  diet: dietReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
