import { createSlice } from '@reduxjs/toolkit'


const intialState = {
    carts: [],
}

const cartSlice = createSlice({
    name: 'cart',
    intialState,
    reducers: {
        /**
         * 
         * @param {*} state 
         * @param {*} action 
         */
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(item => action.payload.id == item.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.cart.push({ ...action.payload, qty: 1 })
            }
        },
        incrementQty: (state, action) => {
            const item = state.cart.find(item => action.payload.id == item.id);
            item.qty++;
        },
        decrementQty: (state, action) => {
            const item = state.cart.find(item => action.payload.id == item.id);
            item.qty--;
        },
        deleteFromCart: (state, action) => {
            const item = state.cart.filter(item => action.payload.id !== item.id);
            state.cart = item;
        }
    }
})

export const { addToCart, incrementQty, decrementQty, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;