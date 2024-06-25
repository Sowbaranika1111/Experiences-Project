import React, { useState } from 'react';
import './UserProfile.css';
import { NavLink,Route,Routes } from 'react-router-dom';
import MySharedExpDisplay from '../MySharedExpDisplay/MySharedExpDisplay';

const UserProfile = () => {

    const[category,setCategory] = useState("All")

    return (
        <div className="user-profile">

            <NavLink to='/write-exp' className="container everyday-exp">
                <h3>How Was Your Conscious Breath Journey Today?</h3>
            </NavLink>

            <NavLink to='/add-yours' className="container add-yours-pg">
                <h3>Let Your Tale Be An Inspiration!</h3>
            </NavLink>

            <NavLink to='/user-profile/my-shared-exp' category={category} className="container my-experiences">
                <h3>My Experiences</h3>
            </NavLink>


            <Routes>
                <Route path="my-shared-exp" element={<MySharedExpDisplay />} />
            </Routes>

            {/* <NavLink to='/list' className="container my-experiences">
                <h3>My Experiences</h3>
            </NavLink> */}
        </div >
    );
}

export default UserProfile;



