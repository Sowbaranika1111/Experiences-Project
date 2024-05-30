import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState('home');

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.boy_happy_img} alt="" className='logo '/></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick = {() => setMenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-exp' onClick = {() => setMenu("experiences")} className={menu==="experiences"?"active":""}>experiences</a>
          <a href='#about-us' onClick = {() => setMenu("about us")} className={menu==="about us"?"active":""}>about us</a>
          <a href='#footer' onClick = {() => setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
          <div className="navbar-search-icon icon">
            <img src={assets.search_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign up/Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
