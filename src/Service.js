import React from 'react'
import './Service.css'

export default function Service() {
    return (
        <div className = 'service-container'>
            <div className="upper-text">
                <h4 className = 'h4-s'>"Our latest blog"</h4>
                <h1 className = 'h1-s'>KNOWLEDGE IS POWER</h1>
                <p className = 'p-s'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, atque! Ratione quod alias iste? Exercitationem officiis dolorem consectetur voluptates maxime, quae provident unde culpa eveniet. Exercitationem nam temporibus iure in?</p>
            </div>
                <div className="nav">
                    <a href="/">All</a>
                    <a href="/">Design</a>
                    <a href="/">Graphics</a>
                    <a href="/">Media</a>
                    <a href="/">Web Development</a>
                </div>
                <div class="wrap">
                    <div class="card card1">
                        <h2 className = 'before'>503x335</h2>
                        <h3 className = 'after' >Paper cup mockup</h3>
                    </div>
                    <div  class="card card2">
                        <h2 className = 'before'>503x775</h2>
                        <h3 className = 'after' >Paper shopping bag</h3>
                        </div>
                    <div class="card card3">
                        <h2 className = 'before'>503x775</h2>
                        <h3 className = 'after' >Leather bag mockup</h3>
                        </div>
                    <div class="card card4">
                        <h2 className = 'before'>503x335</h2>
                        <h3 className = 'after' >Anti gravity cup</h3>
                    </div>
                    <div class="card card5">
                        <h2 className = 'before'>503x335</h2>
                        <h3 className = 'after' >Paper coffee cup</h3>
                        </div>
                    <div class="card card6">
                        <h2 className = 'before'>503x775</h2>
                        <h3 className = 'after' >Lotion bottle</h3>
                        </div>
                </div>
        </div>
    )
}
