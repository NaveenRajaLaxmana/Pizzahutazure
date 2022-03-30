import React,{useEffect} from 'react'
import './App.css';
import AddPizza from './components/AddPizza';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import { useSelector,useDispatch } from 'react-redux'
import { fetchPizzaData } from './store/fetchActions';
import CartScreen from './components/CartScreen';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


function App() {
  const dispatch = useDispatch();
  
  const modal = useSelector(state => state.modal);
  useEffect(() => {
    // console.log('hello')
    // console.log(pizza)
     dispatch(fetchPizzaData());
    //  console.log(pizza.pizzas)
  },[dispatch])
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
     <Route path='/' element={<HomeScreen />}/> 
     <Route path='/cart' element={<CartScreen />}/> 
     </Routes>
     <Footer />
     {modal.show && <AddPizza />}
     </Router>
    </div>
  );
}

export default App;
