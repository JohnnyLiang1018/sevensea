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


    const [contact,setContact] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://phpj4903.herokuapp.com/?request=contact',
        })
        .then(response =>{
            setContact(response.data)
            console.log(contact[0])
        })
    },[])

    return (
        <div style={container} className="contact">
            <p style={text}>
            Contact<br/>
            Email: {contact[0]}<br/>
            Tel: {contact[1]}<br/>
            </p>
        </div>
    )
}