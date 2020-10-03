import React from 'react'

export default function News(){
    const container = {
        position: 'relative',
        height: '1000px',
        width: '100%',
        backgroundColor: 'lightblue'
    }

    const text = {
        position: 'absolute',
        color: '#ffffff',
        fontSize: '3rem',
        top: '25%',
        width: '100%'
    }

    return (
        <div style={container} className="News">
            <p style={text}>
            News<br/>
            Placeholder
            </p>
        </div>
    )
}