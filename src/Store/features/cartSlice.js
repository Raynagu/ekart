import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeProduct(state, action) {
            const items = state.cart.filter(
                (item) => item.id !== action.payload
            );
            state.cart = items;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        incrementQuantity(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decrementQuantity(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
});

export const {
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
