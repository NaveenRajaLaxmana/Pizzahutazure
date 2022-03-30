import React,{useEffect,useState} from 'react'
import Pizzas from './Pizzas'
import { useDispatch } from 'react-redux'
import Chip from '@mui/material/Chip';
import { pizzaActions } from '../store/pizzaSlice';
import Switch from '@mui/material/Switch';
import { fetchPizzaData } from '../store/fetchActions';


import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Veg Non-Veg' } };


const HomeScreen = () => {
  const [veg,setveg] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
   
  },[dispatch,veg])

  const handleClick = e => {
 
    if(e.target.innerText==='price'){
      
   
      dispatch(pizzaActions.sortpizza('price'))
    }else if(e.target.innerText==='rating'){
      dispatch(pizzaActions.sortpizza('rating'))
    }
  }
  const clearFilters = () => {
    dispatch(fetchPizzaData())
  }

  const handleChange =async e => {
    setveg(!veg);
   await dispatch(fetchPizzaData())
    await  dispatch(pizzaActions.filterpizza(veg ?"show":"hide"))
  }
  return (
      <div className='home'>
          <div className='filters'>
         
          <Chip label="price" onClick={handleClick} style={{marginRight:'15px'}}/>
      <Chip label="rating" onClick={handleClick} style={{marginRight:'15px'}}/>
      <div className='switch-veg'>
      <Switch {...label} title={'Non Veg'} defaultChecked name='veg' checked={veg} onChange={handleChange}/>
      <Button variant="contained" onClick={clearFilters}>Clear Filters</Button>
      </div>
          </div>
          <Pizzas />
      </div>
  )
}

export default HomeScreen 