import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authSlice from './slices/authSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
  },
});
