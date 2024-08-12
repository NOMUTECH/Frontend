import React, { Fragment, useState } from 'react';
import axios from "axios";
import logo from "./img/fist-logo.png";
import 'https://kit.fontawesome.com/0e6ab67b4d.js';

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


            <div className='d-flex align-items-center justify-content-center vh-100'>
                <div className='p-3 rounded bg-white w-25 shadow' id='formBox'>
                    <form>
                        <img id='fistLogo' src={logo}></img>
                        <div className='mb-3'>
                            <label htmlFor='username'><i class="fa-solid fa-user"></i> Kullanıcı Adı :</label>
                            <input type='username' autoComplete='off' className='form-control rounded-0'></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'><i class="fa-solid fa-key"></i> Şifre :</label>
                            <input type='password' className='form-control rounded-0'></input>
                        </div>
                        <button id='loginButton' type='submit' className='w-50 btn shadow'><b>Giriş</b></button>
                    </form>
                </div>
            </div>


            
        </Fragment>
    )
}

export default Login;