import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile" }
    ];
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { items: [] },
  reducers: {
    updateProduct: (state, action) => {
      const index = state.items.findIndex(
        p => p.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
});

export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;