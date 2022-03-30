import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {  useSelector,useDispatch } from 'react-redux'

import { modalActions } from '../store/modalSlics';
import { cartActions } from '../store/cartSlice'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddPizza = () => {
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modal);

  const [open, setOpen] = React.useState(false);

 
  
  
  const handleClose = () => dispatch(modalActions.toggle(false));

  
 

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const addtocart = e => {
    e.preventDefault();
    
    let quantity = document.querySelector('.quantity').value;
    let size = document.querySelector('.sizes').value;
    let toppings = document.querySelector('.toppings').value;
    dispatch(cartActions.addTocart({name:modal.name,price:modal.price,quantity: quantity,id:modal.id,size:size,toppings:toppings}))
   
    
    setOpen(true)
    
    setTimeout(() => {
      handleClose()
      
    },3000)
  }

  return (
    <div className='popup'>
      

<Modal
        open={modal.show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
       
        <FaWindowClose className='close-btn' style={{cursor:'pointer'}} onClick={handleClose}/> 
        <form onSubmit={addtocart} autoComplete='off'>
        <h4 style={{ textAlign:'center' }}>{modal.name}</h4>
        <select className='sizes' name='size' >
          {modal.size[0].items.map(item => {
          return  <option key={item.size}>{item.size}</option>
          })}

        </select>
        <select className='toppings' name='toppings'>
          {modal.toppings[0].items.map(item => {
          return  <option key={item.name}>{item.name}</option>
          })}
          
        </select>
        <input placeholder='Quantity' className='quantity' name='quantity' required/>
        <button type='submit'>Add To Cart</button>
       </form>
        </Box>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          success
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AddPizza