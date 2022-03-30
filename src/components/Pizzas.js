import React from 'react'
import Pizza from './Pizza'
import { useSelector } from 'react-redux'
import { motion,AnimatePresence } from 'framer-motion'

const Pizzas = () => {
  
  const pizzas = useSelector(state => state.pizza.pizzas);
  
  return (
    <motion.div layout className='pizzas'>
      <AnimatePresence>
       {pizzas.length>0 && pizzas.map(pizza => {
       
        return <Pizza pizza={pizza} key={pizza.id}/>
       
       })}
       </AnimatePresence>
    </motion.div>
   
  )
}

export default Pizzas