import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddToFav from './pages/AddToFav/AddToFav'
import User_profile from './pages/User_Profile/User_profile'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import AddYoursPopup from './components/AddYoursPopup/AddYoursPopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  const [showAddYours,setAddYours] = useState(false)

  return (
    <>
    {/* ternary operator */}{/*passing setShowLogin as props, true or false coming from LoginPopup component when the cross img is clicked it becomes false*/}
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}

    {showAddYours?<AddYoursPopup setAddYours={setAddYours}/>:<></>}
    
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home setAddYours={setAddYours}/>} />
          <Route path='/fav' element={<AddToFav/>} />
          <Route path='/User_Profile' element={<User_profile />} />
        </Routes>
      </div>
      <Footer />
    </>
    // Since we are returning two elements we get an error .. so just put all these inside a fragment to solve it
  )
}

export default App
