import React, {useEffect,useState} from 'react'
import Axios from 'axios';
import '../css/basic.css'

export default function Admin(){
    const [users,setUsers] = useState([])
    const renderUsers = (username) => <p key={username}>{username}</p>

    const Submit = () =>{
        Axios({
            method: 'post',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data: {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            },
            url: 'https://phpj4903.herokuapp.com/index.php',
            action: 'admin'
        })
        .then(response=>{
            console.log(response.data)
            if(response.data.code != 200){
                alert(response.data.message)
            }
            else{
                setUsers(response.data.data)
            }
        })
    }

    return (
        <div className="admin">
            <div>
                <label className="admin_label">Username:</label>
                <input type="text" id="username" className="username" defaultValue="admin"/>
            </div>
            <div>
                <label className="admin_label">Password:</label>
                <input type="password" id="password" className="password" defaultValue="password" required/>
            </div>
            <input type="submit" value="Sign in" onClick={Submit}/>
            <div>
                <ul>{users.map(renderUsers)}</ul>
            </div>
        </div>
    )
}