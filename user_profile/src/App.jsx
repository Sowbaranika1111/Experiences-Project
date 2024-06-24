import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProfileHomePg from './components/ProfileHomePage/ProfileHomePg'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <ProfileHomePg/>
      </div>
    </div>
  )
}

export default App

// App.jsx css properties are in index.css