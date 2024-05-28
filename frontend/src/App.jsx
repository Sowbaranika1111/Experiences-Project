import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import User_profile from './pages/User_Profile/User_profile'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/User_Profile' element={<User_profile />} />
        </Routes>
      </div>
      <Footer />
    </>
    // Since we are returning two elements we get an error .. so just put all these inside a fragment to solve it
  )
}

export default App
