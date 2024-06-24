import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AddYoursPg from './pages/AddYoursPage/AddYoursPg'
import UserProfile from './pages/UserProfile/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      {/* mounting the toast container */}
      <ToastContainer />
      <Navbar />
      <UserProfile />
      <AddYoursPg />
      {/* <Routes>
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/add-yours' element={<AddYoursPg />} />
      </Routes> */}

    </div>
  )
}

export default App
