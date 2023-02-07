import { createSlice } from "@reduxjs/toolkit";

const productSlices = createSlice({
    name:"productSlice",
    initialState:{
        products:[]
    },
    reducers:{
        loadProducts:(state,action)=>{
                state.products =action.payload
        }
    }
})

export const {loadProducts} = productSlices.actions;
export default productSlices.reducer;