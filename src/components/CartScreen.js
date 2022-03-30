import React,{useEffect,useState,useMemo} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector,useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { FaWindowClose } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { cartActions } from '../store/cartSlice';
import { Link } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const style = {
  position: 'relative' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const CartScreen = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart);
  const [data,setdata] = useState([]);


  const [id,setid] = useState(0);
  const [name,setname] = useState('');
  const [open,setopen] = useState(false)
  const [checkout,setcheckout] = useState(false)
  const [alert,setalert] = useState(false)

  const mycolumns = useMemo(() => {
 return (
  [
   
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 90,type: 'number',editable:true },
    {
      field: 'price',
      headerName: 'Per Price',
      type: 'number',
      width: 100,
    },
    {
      field: 'totalPrice',
      headerName: 'totalPrice',
      type: 'number',
      width: 120,
    },
    { field: 'size', headerName: 'Size', width: 130 },
    { field: 'toppings', headerName: 'Toppings', width: 130 },
    {
      field: 'edit',
      headerName: 'Edit',
      type: 'button',
      width: 150,
      editable: false,
      renderCell:(rowdata) =>{
        const handleClick = e => {
          e.stopPropagation();
         
          setname(rowdata.row.name)
          setid(rowdata.row.id)
          setopen(true);
        }
        return (<Button variant="outlined" onClick={handleClick}>Edit Quantity</Button>)
      } ,
      
    },
   
  ]
 )
  },[carts])
  useEffect(() => {
   
    setdata(carts.itemlist);
  
  },[carts,mycolumns])

  const addtocart = e => {
    e.preventDefault();
   
    let quantity = document.querySelector('.edit-quantity').value
  
    dispatch(cartActions.editQuantity({quantity,id}))
    setopen(false)
  }

  
  return (
    <div style={{ height: 380, width: '80%' }} className='cartscreen'>
        <DataGrid
        rows={data}
        columns={mycolumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
      <Button variant="contained" style={{ position:'absolute',right:'50px',marginTop:'0' }} onClick={() => setcheckout(true)}>Checkout</Button>
      <Modal
        open={open}
        onClose={() => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
       
        <FaWindowClose className='close-btn' style={{cursor:'pointer'}} onClick={() => setopen(false)}/> 
        <form onSubmit={addtocart} autoComplete='off'>
        <h4 style={{ textAlign:'center' }}>{name}</h4>
       
        <input placeholder='Quantity' className='quantity edit-quantity' name='edit-quantity' required/>
        <button type='submit'>Add To Cart</button>
       </form>
        </Box>
      </Modal>

      <Modal
        open={checkout}
        onClose={() => setcheckout(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
       
        <FaWindowClose className='close-btn' style={{cursor:'pointer'}} onClick={() => setcheckout(false)}/> 
        <form autoComplete='off'>
        <h4 style={{ textAlign:'center' }}>Are You sure ?</h4>
       
        <div style={{ display:'flex',justifyContent:'space-around',marginTop:50 }}>
        <Link to={'/'} style={{ textDecoration:'none' }}> <Button variant="contained">Go Home</Button></Link>
        
        <Button variant="contained" onClick={() =>{ setalert(true); setTimeout(() =>setcheckout(false),[3000]) }}>Confirm</Button>
        </div>
       </form>
        </Box>
      </Modal>
      <Snackbar open={alert} autoHideDuration={6000} onClose={() => setalert(false)}>
        <Alert onClose={() => setalert(false)} severity="success" sx={{ width: '100%' }}>
          payment success
        </Alert>
      </Snackbar>
    </div>
  )
}

export default CartScreen