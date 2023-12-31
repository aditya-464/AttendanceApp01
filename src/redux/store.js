import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth.js';
import refreshHomeReducer from './refreshHomeScreen.js';
import refreshClassReducer from './refreshViewClassScreen.js';

export const store = configureStore({
  reducer: {
    authDetails: authReducer,
    refreshHomeDetails: refreshHomeReducer,
    refreshClassDetails: refreshClassReducer,
  },
});
