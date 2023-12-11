import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import cartSlice from "../Features/Cart/cartSlice";
import CategorySlice from "../Features/Category/CategorySlice";

export default configureStore({
    reducer: {
        // cart: cartSlice,
        category: CategorySlice
    } ,
})