import { configureStore } from "@reduxjs/toolkit";
// import messageReducer from "./Slices/MessageSlice";
import productReducer from './Slices/productSlices'
import cartReducer from './Slices/CartSlice'
export default configureStore({
    reducer:{
        // messageReducer: MessageSlice
        // messageReducer,
        productReducer,
        cartReducer
    }
})