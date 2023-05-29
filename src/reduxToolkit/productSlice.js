import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3004/products";

// GET ALL USERS

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (data) => {
    return await axios.get(baseUrl).then((res) => res.data);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    });

    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
