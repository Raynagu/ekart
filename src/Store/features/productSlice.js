import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productsFetch = createAsyncThunk("products/fetch", async (url) => {
    const res = await fetch(url);
    const data = res.json();
    return data;
});

export const productFetch = createAsyncThunk("product/fetch", async (url) => {
    const res = await fetch(url);
    const data = res.json();
    return data;
});

const initialState = {
    products: [],
    isLoading: false,
    product: {},
    error: null,
};
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.isLoading = true;
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = "Something went wrong";
        },
        [productFetch.pending]: (state, action) => {
            state.isLoading = true;
        },
        [productFetch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        },
        [productFetch.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = "Something went wrong";
        },
    },
});

export default productSlice.reducer;
