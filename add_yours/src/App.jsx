import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AddYoursPg from './pages/AddYoursPage/AddYoursPg'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <AddYoursPg/>
      </div>
    </div>
  )
}

export default App
