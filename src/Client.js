import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './client.css'
import Image from './Loop.png'

export default function Client() {

  const settings = {
    // mobileFirst: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
          <div className = 'client-div'>
            <img src= {Image} alt="Cant load image (Error)" />
          </div>
        </Slider>
      </div>
    );
  }