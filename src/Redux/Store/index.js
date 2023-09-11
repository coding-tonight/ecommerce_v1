import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/Cart/cartSlice";

export default configureStore({
    reducer: {
        cart: cartSlice
    } ,
})