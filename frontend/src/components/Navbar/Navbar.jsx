import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('home');

  const { token, setToken } = useContext(StoreContext)

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.boy_happy_img} alt="" className='logo ' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-exp' onClick={() => setMenu("experiences")} className={menu === "experiences" ? "active" : ""}>experiences</a>
        <a href='#about-us' onClick={() => setMenu("about us")} className={menu === "about us" ? "active" : ""}>about us</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon icon">
          <img src={assets.search_icon} alt="" />
          <div className="dot"></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign up</button>
          :
          <>
            <div className="navbar-favourite">
              <img src={assets.fav_icon} alt="" />
            </div>
            <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="navbar-profile-dropdown">
                <li onClick={logout}><p>Logout</p></li>
              </ul>
            </div>
          </>
        }

      </div>

    </div>
  )
}

export default Navbar
