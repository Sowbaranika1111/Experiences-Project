import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, setToken } = useContext(StoreContext)

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.boy_happy_img} alt="" className='logo' /></Link>
      <div className="navbar-right">
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to='/' onClick={() => { setMenu("home"); setIsMenuOpen(false); }} className={menu === "home" ? "active" : ""}>HOME</Link>
          <a href='#explore-exp' onClick={() => { setMenu("experiences"); setIsMenuOpen(false); }} className={menu === "experiences" ? "active" : ""}>EXPERIENCES</a>
          <a href='#about-us' onClick={() => { setMenu("about us"); setIsMenuOpen(false); }} className={menu === "about us" ? "active" : ""}>ABOUT US</a>
          <a href='#footer' onClick={() => { setMenu("contact us"); setIsMenuOpen(false); }} className={menu === "contact us" ? "active" : ""}>CONTACT US</a>
          <div className="navbar-search-icon icon">
            <img src={assets.search_icon} alt="" />
            <div className="dot"></div>
          </div>
          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign up</button>
          ) : (
            <>
              <div className="navbar-favourite">
                <Link to='/fav'><img src={assets.fav_icon} alt="" /></Link>
              </div>
              <div className='navbar-profile'>
                <Link to='/user-profile'><img src={assets.profile_icon} alt="" /></Link>
                <ul className="navbar-profile-dropdown">
                  <li onClick={logout}><p>Logout</p></li>
                </ul>
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Navbar
