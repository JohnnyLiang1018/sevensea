import React from 'react'
import BackgroundLeft from '../img/sky_left.jpg'
import BackgroundRight from '../img/sky_right.jpg'
import './css/basic.css'


export default function navPage(){

    return(
        <div className="container">
            <div className="containerL">
                <img src={BackgroundLeft} className="imageL" alt=""/>
                <div className="portfolio">
                    <a href="/portfolio" className="text">My Portfolio</a>
                </div>
            </div>
            <div className="containerR">
                <img src={BackgroundRight} className="imageR" alt=""/>
                <div className="cmpe272">
                    <a href="/cmpe272" className="text">CMPE272</a>
                </div>
            </div>
        </div>
    )
}