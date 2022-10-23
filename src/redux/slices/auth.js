import { createSlice } from '@reduxjs/toolkit';

const auth = { isLogin: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState: auth,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
