import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const data = {
        id: payload.id,
        image: payload.image,
        name: payload.name,
        price: payload.price,
        quantity: payload.quantity,
        total: payload.price * payload.quantity,
      };

      if (!state.length) {
        state.push(data);
      } else {
        for (let i = 0; i < state.length; i += 1) {
          if (state[i].id === payload.id) {
            state[i] = data;
            break;
          } else if (i + 1 === state.length) {
            state.push(data);
          }
        }
      }
    },
    addProdQuantity: (state, { payload }) => {
      state.forEach((product) => {
        if (product.id === payload) {
          product.quantity += 1;
          product.total = product.price * product.quantity;
        }
      });
    },
    decProdQuantity: (state, { payload }) => {
      state.forEach((product) => {
        if (product.id === payload) {
          product.quantity -= 1;
          product.total = product.price * product.quantity;
        }
      });
    },
  },
});

export const {
  addToCart, addProdQuantity, decProdQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
