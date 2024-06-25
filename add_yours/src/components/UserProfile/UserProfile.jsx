import React from 'react';
import './UserProfile.css';
import { NavLink } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div className="user-profile">

            <NavLink to='/write-exp' className="container everyday-exp">
                <h3>How Was Your Conscious Breath Journey Today?</h3>
            </NavLink>

            <NavLink to='/add-yours' className="container add-yours-pg">
                <h3>Let Your Tale Be An Inspiration!</h3>
            </NavLink>

            <NavLink to='/list' className="container my-experiences">
                <h3>My Experiences</h3>
            </NavLink>



        </div >
    );
}

export default UserProfile;



