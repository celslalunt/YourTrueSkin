import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
    counter: 0,
  },
  reducers: {
    update: (state, action) => {
      let { cart, method } = action.payload;
      const index = state.cart.findIndex((item) => item.id === cart.id);

      if (method === "ADD") {
        if (index === -1) {
          state.cart = [...state.cart, cart];
          state.counter++;
        }
        // } else {
        // Item already exists in the cart, update its quantity
        //     state.cart[index].qty += action.payload.cart["qty"]++;
        //     state.cart[index].totalPrice =
        //         state.cart[index].price * state.cart[index].qty;
        // }
      } else if (method === "DELETE") {
        if (index !== -1) {
          state.cart.splice(index, 1);
          state.counter--;
        }
      } else if (method === "INCREMENT") {
        if (index !== -1) {
          state.cart[index]["qty"] = action.payload.cart["qty"] + 1;
          state.cart[index].totalPrice =
            state.cart[index].price * state.cart[index].qty;
        }
      } else if (method === "DECREMENT") {
        if (index !== -1) {
          const item = state.cart[index];
          if (item.qty > 1) {
            item.qty--;
            item.totalPrice = item.price * item.qty;
          } else {
            state.cart.splice(index, 1);
            state.counter--;
          }
        }
      }
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
