import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemlist:[],
        totalQuantity:0,
        totalPrice:0,
        
    },
    reducers:{
        replaceData(state,action){
            state.totalQuantity=action.payload.totalQuantity;
            state.totalPrice=action.payload.totalPrice
            state.itemlist=action.payload.itemlist
        },
        addTocart(state,action){
            state.changed = true;
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemlist.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity+=parseInt(newItem.quantity);
        existingItem.totalPrice += parseInt(newItem.price)*parseInt(newItem.quantity);
      } else {
        state.itemlist.push({
          id: newItem.id,
          price: newItem.price,
          quantity: parseInt(newItem.quantity),
          totalPrice: parseInt(newItem.price)*parseInt(newItem.quantity),
          name: newItem.name,
          size:newItem.size,
          toppings:newItem.toppings
        });
        state.totalQuantity++;
        state.totalPrice+=newItem.price*newItem.quantity;
      }
        },
          editQuantity(state,action){
            const id = action.payload.id;
            const existingitem= state.itemlist.find(item => item.id === id);
            existingitem.quantity=action.payload.quantity;
            existingitem.totalPrice=action.payload.quantity*existingitem.price;
          }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice