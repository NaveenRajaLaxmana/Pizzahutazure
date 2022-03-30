import { createSlice } from '@reduxjs/toolkit'

const pizzaslice = createSlice({
    name:'pizza',
    initialState:{
        pizzas:[]
    },
    reducers:{
        fetchPizza(state,action){
            state.pizzas=action.payload;
        },
        sortpizza(state,action){
            if(action.payload==='price'){
                 state.pizzas.sort((a,b) => a.price - b.price)
               
            }else if(action.payload==="rating"){
                state.pizzas.sort((a,b) => b.rating - a.rating)
               
            }
          
        },
        filterpizza(state,action){
            if(action.payload==='show'){
               const data = state.pizzas.filter(item => item.isVeg===true)
               state.pizzas=data;
            }else if(action.payload==='hide'){
                const data =state.pizzas.filter(item => item.isVeg===false)
                state.pizzas=data;
            }
          
        }
    }
});

export const pizzaActions = pizzaslice.actions;

export default pizzaslice;