import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    store: [],
    status: 'idle',
    totalAmount: 0,
    totalCount: 0,
    errors: null
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const ItemInCart = state.store.find(item => item.id === action.payload.id)

            if (ItemInCart) ItemInCart.qty++
            else state.store.push({ ...action.payload, qty: 1 })
        },
        increaseQty: (state, action) => {
            const ItemInCart = state.store.find(item => item.id === action.payload.id)

            if (ItemInCart) ItemInCart.qty++
        },
        decreaseQty: (state, action) => {
            const ItemInCart = state.store.find(item => item.id === action.payload.id)

            if (ItemInCart) ItemInCart.qty --
        },

        removeItem: (state, action) => {
            state.store = state.store.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            state.store = []
        }
    },
})

export const { increaseQty ,addToCart , decreaseQty, clearCart, removeItem } = cartSlice.actions


export default cartSlice.reducer


