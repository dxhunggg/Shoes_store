import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product/productSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
