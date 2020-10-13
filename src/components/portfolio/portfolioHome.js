import React from 'react'
import Kickstarter from './Kickstarter'
import "../css/basic.css"

export default function portfolioHome(){

    return (
        <div className="portfolioHome">
            <div className="intro">
                <p className="introText">
                    this is a testing paragraph
                </p>
            </div>
            <div className="container1">
            <Kickstarter/>
            </div>
            <div className="container2">
            </div>
            <div className="container3">
            </div>
            <div className="container4">
            </div>
        </div>
    )
}