import React, { Fragment, useState } from 'react';
import axios from "axios";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (value) => {
        setUsername(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleLogin = () => {
        const data = {
            Username : username,
            Password : password
        };
        const url = "https://localhost:8000/api/login";
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert(error);
        })
    }

    return(
        <Fragment>
            <div>Login Page</div>
            <input
            className='form-control'
            type='text'
            id='username'
            placeholder='username'
            onChange={(e) => handleUsernameChange(e.target.value)}
            />
            <input
            className='form-control'
            type='text'
            id='password'
            placeholder='password'
            onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <button onClick={() => handleLogin()}>Login</button>
        </Fragment>
    )
}

export default Login;