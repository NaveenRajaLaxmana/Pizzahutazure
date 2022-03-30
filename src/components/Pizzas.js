import React from 'react'
import Pizza from './Pizza'
import { useSelector } from 'react-redux'
import { motion,AnimatePresence } from 'framer-motion'
import CircularProgress from '@mui/material/CircularProgress';

const Pizzas = () => {
  
  const pizzas = useSelector(state => state.pizza.pizzas);
  
  return (
    <motion.div layout className='pizzas'>
       {pizzas.length==0 && <CircularProgress size={80} style={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%,-50%)' }} />}
      <AnimatePresence>
       {pizzas.length>0 && pizzas.map(pizza => {
       
        return <Pizza pizza={pizza} key={pizza.id}/>
       
       })}
       </AnimatePresence>
    </motion.div>
   
  )
}

export default Pizzas