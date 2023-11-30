import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import { CategoryAPI } from "@/config/axios/config";


const initialState = {
    categories: [],
    status: 'idle',   // | idle | pending | failed | fullfilled
    error: null
}


//  category api 

export const  fetchCategory = createAsyncThunk('categories/fetchCategory', async () => {
    try {
        // get all categories
        const response = await CategoryAPI();

        return response.data.data

    } catch(error) {
        return error.response.data.MSG
    }
})


const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
     //....  
    },
    extraReducers:(builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(fetchCategory.fulfilled, (state, action) => {
            if(state.status == 'pending') {
                 state.status = 'fullfilled'
                //  state.categories  = state.categories.concat(action.payload)
                // state.categories = [...state.categories, action.payload]
                state.categories = action.payload
            }
        })
        .addCase(fetchCategory.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})


export default CategorySlice.reducer


export const selectALLCategory =  state => state.category.categories
// export const categoryStatus = state => state.category.status
// export const categoryError = state => state.category.error