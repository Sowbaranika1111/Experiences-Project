import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.boy_happy_img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatem eaque praesentium facere aperiam! Maxime odit magni placeat ipsa unde mollitia a esse ullam? Fugiat fuga expedita nulla dolor assumenda.</p>

                </div>
                <div className="footer-content-center">
                        <img src={assets.insta_footer_icon} alt="" />
                        <img src={assets.fb_footer_icon} alt="" />
                        <img src={assets.youtube_footer_icon} alt="" />
                </div>

                <div className="footer-content-right">
                    <h5>CONTACT US</h5>
                    <ul>
                        <li>1234567890</li>
                        <li>9876543210</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
