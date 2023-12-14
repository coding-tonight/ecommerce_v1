import { thunk } from "redux-thunk";
import { applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
import CartReduxer from '../Features/Cart/cartSlice'
import CategoryReducer from "../Features/Category/CategorySlice";



export default configureStore({
    reducer: {
        cart: CartReduxer,
        category: CategoryReducer,
    } ,
    middleware: [thunk]
})