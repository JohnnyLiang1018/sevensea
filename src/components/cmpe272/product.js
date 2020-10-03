import React from 'react'
import Background from '../../img/sea.jpeg'

export default function Product(){

    const container = {
        position: 'relative',
        height: '1000px',
        width: '100%',
    }

    const background = {
        position: 'absolute',
        backgroundImage: `url(${Background})`,
        backgroundSize: '100% 100%',
        opacity: '0.5',
        top: '0px',
        right:'0px',
        bottom: '0px',
        left: '0px',
    }

    const text = {
        position: 'absolute',
        color: '#ffffff',
        fontSize: '3rem',
        top: '25%',
        width: '100%'
    }

    return(
        <div style={container} className="product">
            <div style={background}></div>
            <p style={text}>
            Product Text<br></br>
            Placeholder
            </p>
        </div>
    )
}