import React, {useEffect, useState} from 'react'
import Background from '../../img/sea.jpeg'
import Axios from 'axios';
import { TextField,Button } from '@material-ui/core';

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

    const section_review = {
        position: 'absolute',
        // background: '#ffffff',
        top: '60%',
    }

    const [review,setReview] = useState('')

    const submit = () => {
        Axios({
            method: 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data: {
                product: 'Travel to Asia Island',
                review: review,
                rating: '5.0',
            },
            url: 'https://phpj4903.herokuapp.com/review.php'
        })
        .then(response=>{
            if(response.data.code == 200){
                alert(response.data.message)
            }
        })
    }

    // useEffect(()=> {
    //     Axios({
    //         method: 'GET',
    //         headers: {},
    //         url: "https://ancient-retreat-00756.herokuapp.com/php_files/Hw_files/getAllReviewsCloud.php?wantTop5=&companyAffiliation=&numReviews="
    //     })
    //     .then(response =>{
    //         setReview(response.data)
    //     })
    // },[])

    return(
        <div style={container} className="product">
            <div style={background}></div>
            <p style={text}>
            Product Text<br></br>
            Placeholder
            </p>
            <div style={section_review}>
                <TextField
                    label="Blurb"
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    onChange={(event)=> setReview(event.target.value)}
                    value={review}
                />
                <Button onClick={submit}>
                    Submit Review
                </Button>
            </div>

        </div>
    )
}