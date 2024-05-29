import React, { useState } from 'react'
import { cross_icon_loginPopup } from '../../assets/assets'
import './LoginPopup.css'


const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon_loginPopup.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {/* if the current state is login we need to remove the name input field */}
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form >
    </div>

  )
}

export default LoginPopup


// To display the pop-up create a state variable. it is created in App.jsx file
// We are initialising the useState with false.
// To display this on the top , add a ternary operator and type showLogin and if it is true LoginPopup component should display,if it is false it will return the fragment '<></>'
// Then set the showLogin inside nav bar, where we can convert it into true or false, so in the nav bar we are passing the setShowLogin as props
// Then we resturcucture it in the navigation bar component ==> const Navbar = ({setShowLogin}) =>
// After link that function with the Signin Button


// to display the login or signup state inside <h2>, we create one state variable currentState
