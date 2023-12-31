import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth.js';
import refreshHomeReducer from './refreshHomeScreen.js';

export const store = configureStore({
  reducer: {
    authDetails: authReducer,
    refreshHomeDetails: refreshHomeReducer,
  },
});
