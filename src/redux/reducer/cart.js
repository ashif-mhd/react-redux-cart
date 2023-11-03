import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        list:[

        ],
    },
    reducers:{
        additems:(state , {payload}) => {
            state.list =[...state.list , payload];
        }
        }
});

export const {additems} = cartSlice.actions;

export default cartSlice.reducer;
  