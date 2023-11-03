import { configureStore } from "@reduxjs/toolkit";
import cartreducer from '../reducer/cart'


export default configureStore({
    
    reducer:{
    cart : cartreducer
    }
})