import { createSlice } from '@reduxjs/toolkit'

const modalSlics = createSlice({
    name:'modal',
    initialState:{
        show:false,
        size:[],
        toppings:[],
        price:0,
        name:'',
        id:null,
    },
    reducers:{
        toggle(state,action){
            state.show=action.payload;
        },
        setdata(state,action){
            
            state.size=action.payload.size;
            state.toppings=action.payload.toppings;
            state.name=action.payload.name;
            state.price=action.payload.price;
            state.id=action.payload.id
        }
    }
})

export const modalActions = modalSlics.actions;

export default modalSlics