import React from "react";
import './Navbar.css'
import logo from './logo.png'

function Navbar() {
  const menu= () => {
          console.log("Clicked")

          var x = document.getElementById("mob-nav");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
  }
  window.addEventListener('scroll', function() {
    let header = document.getElementById('header');
    let windowPosition = window.scrollY > 50;
    header.classList.toggle('scroll-active', windowPosition);
  })
  return (
    <>
      <div className = 'nav-container' id = 'header'>
        <div className="nav-logo-container">
            <div className="logo">
            <img src={logo} alt="Cant Load Image" />
            <h3>Infinite L<span className = 'red'>oo</span>pers</h3>
            </div>
            <div className="hamburger">
            <i onClick = {menu} id = 'ham' class="fas fa-bars"/>
            </div>
        </div>
        <div id = 'mob-nav' className="nav-links-container contain-nav">
            <ul className = "show" id = 'mob-nav'>
                <li><a href="./Body.js">Home</a></li>
                <li><a href="./Service.js">Blog</a></li>
                <li><a href="./Contact.js">Contact</a></li>
            </ul>
        </div>
      </div>
      </>
    );
  }
  
  export default Navbar;