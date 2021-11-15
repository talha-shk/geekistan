import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className = 'footer-container'>
            <div className = 'location container'>
                <h3>Location</h3>
                <p className = 'para'>Autobhan Road, Hyderabad</p>
            </div>
            <div className = 'hour container'>
                <h3>Business Hours</h3>
                <p className = 'para'>Monday - Friday: 9am to 5pm Saturday: 9am to 2pm Sunday: Closed</p>
            </div>
            <div className = 'contact container'>
                <h3>Contact Us</h3>
                <p className = 'para'>afnan5sadhayo@gmail.com</p>
                <p className = 'para'>+92 332 2859605</p>
            </div>
            <div className = 'follow container'>
                <h3>Follow Us</h3>
                <div className = 'icon'>
                <div className="fb icon-holder">
                <i class="fab fa-facebook-f"></i>
                </div>
                <div className="tweet icon-holder">
                <i class="fab fa-twitter"></i>
                </div>
                <div className="yt icon-holder">
                <i class="fab fa-youtube"></i>
                </div>
                <div className="be icon-holder">
                <i class="fab fa-behance "></i>
                </div>
                <div className="drib icon-holder">
                <i class="fas fa-basketball-ball"></i>
                </div>
                </div>
            </div>
        </div>
    )
}
