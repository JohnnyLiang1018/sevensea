import React, {useEffect, useState} from 'react'
import Background from '../../img/sea.jpeg'
import Axios from 'axios';

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

    const [reviews,setReviews] = useState([])

    useEffect(()=> {
        Axios({
            method: 'GET',
            headers: {},
            url: "https://ancient-retreat-00756.herokuapp.com/php_files/Hw_files/getAllReviewsCloud.php?wantTop5=&companyAffiliation=&numReviews="
        })
        .then(response =>{
            setReviews(response.data)
        })
    },[])

    return(
        <div style={container} className="product">
            <div style={background}></div>
            <p style={text}>
            Product Text<br></br>
            Placeholder
            </p>
            <p style={text}>
            
            </p>
        </div>
    )
}