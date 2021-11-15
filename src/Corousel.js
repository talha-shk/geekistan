import React from 'react'
import './Corousel.css'
import Image from './Loop.png'

export default function corousel() {
    return (
        <div className = 'slider'>
            <marquee loop behavior = 'alternate'>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            <img className = 'image' src= {Image} alt='Cant load image'/>
            </marquee>
        </div>
    )
}
