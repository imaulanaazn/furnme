import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state, { payload }) => {
      if (!payload.isLogin) {
        Cookies.remove('token');
      }
      state.isLogin = payload.isLogin;
    },
  },
});

export default authSlice.reducer;
export const { setIsLogin } = authSlice.actions;
