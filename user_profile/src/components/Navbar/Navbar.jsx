import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img className='logo' src={assets.boy_hpy_img_logo} alt="" />
        <img className='profile' src={assets.profile_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
