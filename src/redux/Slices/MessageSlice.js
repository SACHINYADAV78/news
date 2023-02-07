import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
    name: 'messageSlice',
    initialState:{
        message: ""
    },
    reducers:{
        setMessage : (state, action) =>{
              state.message = action.payload
        },
        resetMessage : (state, action) =>{
            state.message = ""
        }
    }

})

export default MessageSlice.reducer

export const {setMessage, resetMessage} = MessageSlice.actions