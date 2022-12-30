import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const categoryFetch = createAsyncThunk("category/fetch", async (url) => {
    const res = await fetch(url);
    const data = res.json();
    return data;
});

const initialState = {
    categories: [],
    categorySelected: "",
    isLoading: false,
    error: null,
};
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategorySelected(state, action) {
            state.categorySelected = action.payload;
        },
    },
    extraReducers: {
        [categoryFetch.pending]: (state, action) => {
            state.isLoading = true;
        },
        [categoryFetch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        },
        [categoryFetch.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = "Something went wrong";
        },
    },
});

export const { setCategorySelected } = categorySlice.actions;
export default categorySlice.reducer;
