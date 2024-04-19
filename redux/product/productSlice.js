import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProduct: {
    productName: "",
    image: "",
    price: null,
  },
};

export const productSlide = createSlice({
  name: "product",

  initialState,

  reducers: {
    getProductAction: (state, action) => {
      state.myProduct = action.payload;
    },
  },

  extraReducers: (builder) => {},
});

export const { getProductAction } = productSlide.actions;

export default productSlide.reducer;
