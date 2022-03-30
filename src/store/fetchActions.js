
import axios from "axios";
import { pizzaActions } from './pizzaSlice'

export const fetchPizzaData = () => {
  return async (dispatch) => {
    const fetchpizza = async () => {
     
      const data = await (await axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')).data;
      return data;
    };
    try {
      const pizza = await fetchpizza();
      
      dispatch(pizzaActions.fetchPizza(pizza));
    } catch (err) {
      alert(err)
    }
  };
};

