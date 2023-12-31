import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  uid: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'authDetails',
  initialState,
  reducers: {
    saveAuthDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.password = action.payload.password;
    },

    removeAuthDetails: state => {
      state.name = '';
      state.email = '';
      state.uid = '';
      state.password = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {saveAuthDetails, removeAuthDetails} = authSlice.actions;

export default authSlice.reducer;
