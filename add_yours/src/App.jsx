import React from 'react'
import Navbar from './components/Navbar/Navbar'
import UserProfile from './components/UserProfile/UserProfile'
import { Routes, Route } from 'react-router-dom'
import AddYoursPg from './pages/AddYoursPage/AddYoursPg'
import MySharedExperience from './pages/MySharedExperience/MySharedExperience'
import WriteExperience from './pages/WriteExperience/WriteExperience'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='app'>

      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/add-yours" element={<AddYoursPg />} />
          <Route path="/list" element={<MySharedExperience />} />
          <Route path="/write-exp" element={<WriteExperience />} />
        </Routes>
      </div>
      {/* mounting the toast container */}
      <ToastContainer />
    </div>
  )
}

export default App