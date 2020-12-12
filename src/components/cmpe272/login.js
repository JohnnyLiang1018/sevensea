import React from 'react'
import Axios from 'axios';


export default function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login = async e => {
        e.preventDefault()
            Axios({
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: {
                    email: email,
                    password: password
                },
                url: 'https://phpj4903.herokuapp.com/'
            }).then(response=>{
                alert(response.data.message)
            })
    }



    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Email</InputLabel>
                <TextField onChange={e=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Password</InputLabel>
                <TextField type="password" onChange={e=>setPassword(e.target.value)}/>
            </FormControl>
            <Button onClick={login}>
                Log in
            </Button>
        </div>
    )
}