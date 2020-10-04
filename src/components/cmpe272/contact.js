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


    const [list,setList] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://phpj4903.herokuapp.com/?request=contact',
        })
        .then(response =>{
            setList(response.data)
            console.log(list[0])
        })
    },[])

    return (
        <div style={container} className="contact">
            <p style={text}>
            Contact<br/>
            Email: {list[0]}<br/>
            Tel: {list[1]}<br/>
            </p>
        </div>
    )
}