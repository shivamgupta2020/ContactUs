import React from 'react'
import './landpage.css'
import miss from './miss.webp'

function Landpage() {
    return (
        <div className="landpage">
            <div className="landpage-container">
                <div className="left">
                    <div className="text">
                        <div className="red-line">AWARD WINNING</div>
                        <h1 style={{ fontFamily: 'Mytupi', fontSize:"60px", lineHeight:"80px",marginTop:0, marginBottom:"25px" }}>DIGITAL MARKETING AGENCY</h1>
                        <p style={{marginBottom:"40px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur voluptates ducimus numquam vitae nostrum animi fugiat, accusantium necessitatibus perspiciatis ut vel atque maiores. Sed ipsam atque esse officia suscipit.</p>
                        <button id='contact-us'>CONTACT US</button>
                    </div>
                </div>
                <div className="right">
                    <img src={miss} alt="My Image" id='miss-image' />
                </div>
            </div>
        </div>
    )
}

export default Landpage
