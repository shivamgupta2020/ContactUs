import React from 'react'
import './expert.css'
import love from './love.webp'
import trophy from './trophy.webp'
import checkmark from './checkmark.svg'
import clock from './clock.svg'

function Expert() {
    return (
        <div>
            <div className="expert">
                <div className="expert-tagline">EXPERTS GROWTS</div>
                <div className="expert-heading">OUR COMPANY GROWTH</div>
                <div className="expert-container">
                    <div className="block-container">
                        <div className="block">
                            <img src={love} alt="" srcset="" />
                            <div className="expert-number">199+</div>
                            <div className="expert-text">Satisfied Customers</div>
                        </div>
                    </div>
                    <div className="block-container">
                        <div className="block">
                            <img src={clock} alt="" srcset="" />
                            <div className="expert-number">1591+</div>
                            <div className="expert-text">Day of Operation</div>
                        </div></div>
                    <div className="block-container">
                        <div className="block">
                            <img src={checkmark} alt="" srcset="" />
                            <div className="expert-number">283+</div>
                            <div className="expert-text">Complete Project</div>
                        </div></div>
                    <div className="block-container">
                        <div className="block">
                            <img src={trophy} alt="" srcset="" />
                            <div className="expert-number">75+</div>
                            <div className="expert-text">Awards Win</div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Expert
