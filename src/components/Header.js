import React from 'react'
import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
          <img src={logo} className='header-logo' alt='Logo'/>
          <Link to={'/'} style={{ textDecoration:'none',color:'black' }}>
        <h2>PizzaHut</h2>
        </Link>
        <Link to={'/cart'}>
        <FaShoppingCart style={{ position:'absolute',right:'55px',cursor:'pointer',justifySelf:'center',alignSelf:'center' }}/>
        </Link>
        
    </div>
  )
}

export default Header