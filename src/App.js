import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Sample from './bg.mp4'
import Body from './Body';
import Corousel from './Corousel';
import Contact from './Contact';
import Footer from './Footer';
import Service from './Service';

function App() {
  return (
    <>
    <video className = 'video' autoPlay muted loop id="myVideo">
      <source src={Sample} type="video/mp4"/>
    </video>
    <Navbar/>
    <Body/>
    <Corousel/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
