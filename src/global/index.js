import { configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./slices/productsSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        // cart: "y",
    },
});
