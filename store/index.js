import { configureStore } from '@reduxjs/toolkit';
import { GlobalApi } from './apis/global.api';

const store = configureStore({
  reducer: {
    [GlobalApi.reducerPath]: GlobalApi.reducer 
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(GlobalApi.middleware)
});

export default store;
