import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AddYoursPg from './pages/AddYoursPage/AddYoursPg'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      {/* mounting the toast container */}
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <AddYoursPg />
      </div>
    </div>
  )
}

export default App
