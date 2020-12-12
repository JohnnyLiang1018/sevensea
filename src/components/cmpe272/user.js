import React, {useState, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { TextField, Button } from '@material-ui/core';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty:{
        marginTop: theme.spacing(2)
    },
    nav:{
        margin: 'auto',
        width: '30%',
    },
}))

export default function Upload(){
    const classes = useStyles()
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [addr,setAddr] = useState('')
    const [homep,setHomep] = useState('')
    const [cellp,setCellp] = useState('')
    const [password,setPassword] = useState('')

    const submit = async e =>{
        e.preventDefault()
        try{
            Axios({
                method: 'GET',
                url: `https://phpj4903.herokuapp.com/addUserCloud.php?lname=${lname}&fname=${fname}&email=${email}&pw=${password}&addr=${addr}&hPho=${homep}&cPho=${cellp}`
            }).then(response=>{
                console.log(response)
            })
            
        } catch (err){
            console.log(err)
        }
    }

    const Search = async e => {
        try{
            const res = await axios.post(``)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <Fragment>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">First Name</InputLabel>
                    <TextField onChange={e=>setFname(e.target.value)} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Last Name</InputLabel>
                    <TextField onChange={e=>setLname(e.target.value)}/>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Email</InputLabel>
                    <TextField onChange={e=>setEmail(e.target.value)} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Address</InputLabel>
                    <TextField onChange={e=>setAddr(e.target.value)}/>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Home phone</InputLabel>
                    <TextField onChange={e=>setHomep(e.target.value)}/>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Cellphone</InputLabel>
                    <TextField onChange={e=>setCellp(e.target.value)}/>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Password</InputLabel>
                    <TextField type="password" onChange={e=>setPassword(e.target.value)}/>
                </FormControl>
                <Button onClick={submit}>
                    Add User
                </Button>
            </div>
            {/* <input 
            value={title} 
            onChange={e => setTitle(e.target.value)} />
            <input
            value={category}
            onChange={e => setCategory(e.target.value)} />
            <input
            value={description}
            onChange={e => setDescription(e.target.value)} />
            <input
            value={price}
            onChange={e => setPrice(e.target.value)} />
            <input
            value={quantity}
            onChange={e => setQuantity(e.target.value)} /> */}
        </Fragment>
    )
}