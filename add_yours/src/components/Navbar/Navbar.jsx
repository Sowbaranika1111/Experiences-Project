import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.boy_hpy_img_logo} alt="" /> 
        <h3> Tell us your tale</h3>   
    </div>
  )
}

export default Navbar
