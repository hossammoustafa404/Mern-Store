import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || {},
  amount: 0,
  totalAmount: 0,
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
      let totalAmount = 0;
      let totalPrice = 0;
      const itemsArr = Object.values(state.items);
      itemsArr.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });

      state.amount = itemsArr.length;
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },

    setProductAmount: (state, { payload }) => {
      const { productId, value } = payload;

      state.items[productId].amount = +value;
    },

    increaseCartProduct: (state, { payload }) => {
      const { productId } = payload;
      state.items[productId].amount += 1;
    },

    decreaseCartProduct: (state, { payload }) => {
      const { productId } = payload;
      if (state.items[productId].amount === 1) {
        delete state.items[productId];
        return;
      }
      state.items[productId].amount -= 1;
    },

    removeCartProduct: (state, { payload }) => {
      const { productId } = payload;
      delete state.items[productId];
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  calculateCartTotals,
  increaseCartProduct,
  setProductAmount,
  decreaseCartProduct,
  removeCartProduct,
} = cartSlice.actions;
