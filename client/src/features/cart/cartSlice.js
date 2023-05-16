import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  amount: 0,
  totalPrice: 0,
  loading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { _id: productId } = payload;

      if (state.items[productId]) {
        state.items[productId].amount += 1;
        return;
      }

      state.items[productId] = { ...payload, amount: 1 };
    },

    calculateCartTotals: (state) => {
      let totalPrice = 0;
      const itemsArr = Object.values(state.items);
      itemsArr.forEach((item) => {
        totalPrice = item.amount * item.price;
      });

      state.amount = itemsArr.length;
      state.totalPrice = totalPrice;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, calculateCartTotals } = cartSlice.actions;
