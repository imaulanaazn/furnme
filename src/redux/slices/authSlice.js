import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleGoogleAuth: (state, { payload }) => {
      localStorage.setItem('profile', JSON.stringify({ ...payload }));
      state.authData = payload;
      console.log(state);
      console.log(payload);
    },
  },
});

export default authSlice.reducer;
export const { handleGoogleAuth } = authSlice.actions;
