import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartTotal: (state, { payload }) => {
      state[payload.index] = payload.value;
    },
  },
});

export const {
  setCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
