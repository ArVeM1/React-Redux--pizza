import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { getTotalPrice } from '../../utils/getTotalPrice';
import { CartState } from './types';

const initialState: CartState = getCartFromLS();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    decItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = getTotalPrice(state.items);
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = getTotalPrice(state.items);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, decItem } = cartSlice.actions;

export default cartSlice.reducer;
