import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='links-div'>
            <ul>
                <h3>Order Now</h3>
                <li>Deals</li>
                <li>Pizza</li>
                <li>Sides</li>
                <li>Drinks</li>
                <li>Desserts</li>
            </ul>

            <ul>
                <h3>About</h3>
                <li>About Us</li>
                <li>Pizza</li>
                <li>Contactless delivery</li>
            </ul>

            <ul>
                <h3>Our Policies</h3>
                <li>Terms & Conditions</li>
                <li>Responsible disclosure</li>
                <li>FAQs & Help</li>
            </ul>

            <ul>
                <h3>Visit Pizza Hut</h3>
                <li>Locate a store</li>
                <li>Global Blog</li>
            </ul>
        </div>
        <div className='follow-links'>
            <h3>Follow Us</h3>
            <div style={{ display:'flex',justifyContent:'space-around',marginTop:10 }}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            </div>
        </div>
        <p className='copyright'>&copy;2022 Pizza Hut India. All rights reserved</p>
    </div>
  )
}

export default Footer