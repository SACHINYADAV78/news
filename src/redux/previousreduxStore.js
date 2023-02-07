import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Slices/MessageSlice";
export default configureStore({
    reducer:{
        // messageReducer: MessageSlice
        messageReducer,
    }
})