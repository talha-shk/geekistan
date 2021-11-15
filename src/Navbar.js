import React from "react";
import './Navbar.css'
import logo from './logo.png'

function Navbar() {
    return (
      <>
      <div className = 'nav-container'>
        <div className="nav-logo-container">
            <img src={logo} alt="Cant Load Image" />
            <h3>Infinite L<span className = 'red'>oo</span>pers</h3>
        </div>
        <div className="nav-links-container">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./">Blog</a></li>
                <li><a href="./">Contact</a></li>
            </ul>
        </div>
      </div>
      </>
    );
  }
  
  export default Navbar;