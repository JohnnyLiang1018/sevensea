import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Contact(){
    const container = {
        position: 'relative',
        height: '1000px',
        width: '100%',
        backgroundColor: 'lightgreen',
    }

    const text = {
        position: 'absolute',
        color: '#ffffff',
        fontSize: '3rem',
        top: '25%',
        width: '100%'
    }


    const [data,setData] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            headers:{
                'Access-Control-Allow-Origin': '*',
            },
            url: 'http://162.241.217.24/home4/sevensl6/php/index.php',
        })
        .then(result =>{
            data = setData(result.data)
        })
    })

    return (
        <div style={container} className="contact">
            <p style={text}>
            Contact<br/>
            Placeholder
            </p>
        </div>
    )
}