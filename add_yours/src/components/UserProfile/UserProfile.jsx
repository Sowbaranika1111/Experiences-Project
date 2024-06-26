import React, { useState } from 'react';
import './UserProfile.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { assets } from '../../assets/assets';

// import MySharedExpDisplay from '../MySharedExpDisplay/MySharedExpDisplay';

const UserProfile = () => {

    const [user_email, setUserEmail] = useState("All")

    return (
        <div className="user-profile">

            <NavLink to='/write-exp' className="container everyday-exp">
                <img src={assets.blueUniverse_bg} alt="" />
                <p>How Was Your Conscious Breath Journey Today?</p>
            </NavLink>

            <NavLink to='/add-yours' className="container add-yours-pg">
                <img src={assets.purpleUniverse_bg} alt="" />
                <p>Let Your Tale Be An Inspiration!</p>
            </NavLink>

            <NavLink to='my-shared-exp' className="container my-experiences">
                <img src={assets.greenUniverse_bg} alt="" />
                <p>My Experiences</p>
            </NavLink>


            {/* <Routes>
                <Route path="my-shared-exp"  element={<MySharedExpDisplay user_email={user_email}/>} />
            </Routes> */}

            {/* <NavLink to='/list' className="container my-experiences">
                <p>My Experiences</p>
            </NavLink> */}
        </div >
    );
}

export default UserProfile;



