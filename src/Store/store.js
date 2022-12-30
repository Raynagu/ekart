import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import categoryReducer from "./features/categorySlice";
import productSlice from "./features/productSlice";

export const Store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productSlice,
        cart: cartSlice,
    },
});
