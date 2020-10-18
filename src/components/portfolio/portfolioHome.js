import React from 'react'
import Kickstarter from './Kickstarter'
import "../css/basic.css"

export default function portfolioHome(){

    return (
        <div className="portfolioHome">
            <div className="intro">
                <p className="introText">
                About this project:<br></br>
                The goal of this project is to build a predictive model for Kickstarter projects,<br></br> 
                and hopefully it can provide insights and opportunities for the project founders to adjust the project's details before launching. <br></br>
                It uses NLTK to handle the text data and a neural network to make the prediction.<br></br>
                repo: <a href="https://github.com/JohnnyLiang1018/pyServer">https://github.com/JohnnyLiang1018/pyServer</a>
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