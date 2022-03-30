import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import modalSlics from './modalSlics';
import pizzaslice from './pizzaSlice';

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        pizza:pizzaslice.reducer,
        modal:modalSlics.reducer
    }
})

export default store;