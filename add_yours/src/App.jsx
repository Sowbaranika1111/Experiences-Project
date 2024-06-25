import React from 'react'
import Navbar from './components/Navbar/Navbar'
import UserProfile from './components/UserProfile/UserProfile'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='app'>

      <Navbar />
      <div >
        <UserProfile />
      </div>
      {/* mounting the toast container */}
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App