import React from 'react'
import left from './left.webp'
import right from './right.webp'
import './client.css'

function Client() {
    return (
        <div>
            <div className="client">
                <div className="client-tagline">CLIENT'S FEEDBACK</div>
                <div className="client-heading">PEOPLE SAY'S ABOUT US!  </div>
                <div className="client-container">
                        <div className="client-text">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa deserunt possimus atque deleniti dicta pariatur distinctio blanditiis?"<br/><br/>
                            <span style={{color:"#fe3146"}}>JANNAT TUMPA</span> <span style={{color:"grey", fontWeight:"light"}}>- COO, AMERIMAR ENTERPRISES, INC.</span> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Client
