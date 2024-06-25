import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt. Culpa facilis nostrum debitis odio ullam</p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 123-456-7890</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; info@example.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
                        <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                        <button type="submit" className="btn btn-big contact-btn">
                            <i className="fas fa-envelope"></i>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <h3> Be a part of making this a Golden Age </h3>
            </div>
        </footer>
    );
}

export default Footer;