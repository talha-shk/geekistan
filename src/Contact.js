import React from 'react'
import './Contact.css'

export default function Contact() {
    return (

        <>
        <div className="main-container">
            <h4 className = 'h4'>Get in touch</h4>
            <h2>Contact Us</h2>
            < div className="text">
            <p className = 'txt' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam rerum magni iure ut corporis animi voluptas soluta nisi quasi!</p>
            </div>
            <div className="form-container">
                <div className="form-upper-container">
                    <input type="text" placeholder = 'Name' />
                    <input type="text" placeholder = 'Enter Email' />
                </div>
                <div className="form-lower-container">
                    <input type="text" placeholder = 'Subject' />
                    <textarea cols = '10' rows = '13' placeholder = 'Message'></textarea>
                </div>
                <p className = 'terms'>I have read and agree to Afnan <span className = 'red'>terms and conditons</span></p>
            </div>
            <a className ='send-btn' href="/">Send</a>
        </div>
        </>
    )
}
