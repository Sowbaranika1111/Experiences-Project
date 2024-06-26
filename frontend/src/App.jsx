import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import AddToFav from './pages/AddToFav/AddToFav'
import AddYoursPg from '@add_yours/pages/AddYoursPage/AddYoursPg'
import UserProfile from '@user_profile/components/UserProfile/UserProfile'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WriteExperience from '../../add_yours/src/pages/WriteExperience/WriteExperience'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {/* ternary operator */}{/*passing setShowLogin as props, true or false coming from LoginPopup component when the cross img is clicked it becomes false*/}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fav' element={<AddToFav />} />
          <Route path='/user-profile/*' element={<UserProfile />} />
          <Route path='/add-yours' element={<AddYoursPg />} />
          <Route path='/write-exp' element={<WriteExperience />} />

        </Routes>

        <Link to='/write-exp'></Link>
        <Link to='/add-yours'></Link>

      </div>
      <Footer />
      <ToastContainer />

    </>
    // Since we are returning two elements we get an error .. so just put all these inside a fragment to solve it
  )
}

export default App
