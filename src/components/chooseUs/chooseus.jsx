import React from 'react'
import './chooseus.css'
import target from "./target.svg"
import speedometer from "./speedometer.webp"
import shield from "./shield.webp"
import strategy from "./strategy.webp"

function ChooseUs() {
    return (
        <div className="landpage">
            <div className="choose-tagline">WHY CHOOSE US</div>
            <div className="choose-heading"><h1 style={{fontSize:"39px", paddingTop:"7px"}}>WHY WE ARE BEST</h1></div>
            <div className="features">
              <div className="feature">
                <img src={target} alt="" srcset="" />
                <div className="feature-head">Clarified Vision & Target</div>
                <div className="feature-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nemo adipisci excepturi ipsa eos odio?</div>
              </div>
              <div className="feature">
                <img src={speedometer } alt="" srcset="" />
                <div className="feature-head">High performance</div>
                <div className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure, sint numquam neque incidunt fugiat.</div>
              </div>
              <div className="feature">
                <img src={shield } alt="" srcset="" />
                <div className="feature-head">Maintain Security</div>
                <div className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta esse deleniti, fugit doloremque perspiciatis!</div>
              </div>
              <div className="feature">
                <img src={strategy} alt="" srcset="" />
                <div className="feature-head">Better Strategy & Quality</div>
                <div className="feature-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nulla quos, vel ad rerum culpa?</div>
              </div>
            </div>
        </div>
    )
}

export default ChooseUs
