import React from 'react'
import { FaStar,FaRupeeSign } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { modalActions } from '../store/modalSlics';
import { motion } from 'framer-motion'

const Pizza = ({pizza : { id,name,description,isVeg,rating,price,img_url,size,toppings }}) => {

  const dispatch = useDispatch();
 
 
  const addPizzas = () => {
    
    dispatch(modalActions.toggle(true))
  
    dispatch(modalActions.setdata({size,name,toppings,price,id}))
    
  }
  return (
    <motion.div  animate={{opacity:1}} initial={{ opacity:0 }} exit={{ opacity:0 }} layout className='pizza'>
      
        <span className='type'>{isVeg ? "Veg" : "NON-VEG"}</span>
        <div className='pizza-img'>
            <img src={img_url} alt="pizza"/>
        </div>
        <div className='details'>
            <h4 style={{ marginTop:'5px' }}>{name}</h4>
            <h5 style={{ marginTop:'5px' }}>{description}</h5>
            <h5 style={{ marginTop:'10px' }}><FaStar color='yellow' style={{marginRight:'3px'}}/> {rating}</h5>
            <h5 style={{ marginTop:'10px' }}><FaRupeeSign style={{marginRight:'3px'}}/> {price}</h5>
        </div>
        <div className='pizza-qn'>
        <button onClick={addPizzas}>Add</button>
       
        </div>
        
        
    </motion.div>
  )
}

export default Pizza