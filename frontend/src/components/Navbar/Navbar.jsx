import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={assets.boy_happy_img} alt="" className='logo icon'/>
        <ul className="navbar-menu">
          <li onClick = {() => setMenu("home")} className={menu==="home"?"active":""}>home</li>
          <li onClick = {() => setMenu("experiences")} className={menu==="experiences"?"active":""}>experiences</li>
          <li onClick = {() => setMenu("about us")} className={menu==="about us"?"active":""}>about us</li>
          <li onClick = {() => setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
          <div className="navbar-search-icon icon">
            <img src={assets.search_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
