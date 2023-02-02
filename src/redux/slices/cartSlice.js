import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartTotal: (state, { payload }) => {
      state[payload.index] = payload.value;
    },
    removeCartTotal: (state, { payload }) => {
      state.splice(payload.index, 1);
    },
  },
});

export const {
  setCartTotal,
  removeCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
