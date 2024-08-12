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
            <div className='d-flex align-items-center justify-content-center pb-5'>
                <div className='p-3 rounded w-50'>
                    <img id='fistLogo' src={logo} width={"10rem"} height={"10rem"}></img>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <div className='p-3 bg-white w-25 shadow-lg pt-5 pb-5' id='formBox'>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor='username'><i className="fa-solid fa-user"></i> Kullanıcı Adı :</label>
                            <input type='username' autoComplete='off' className='form-control mt-2'></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'><i className="fa-solid fa-key"></i> Şifre :</label>
                            <input type='password' className='form-control mt-2'></input>
                        </div>
                        <button id='loginButton' type='submit' className='w-50 btn shadow fw-bold fs-5'>Giriş</button>
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <input className='form-check-input mx-2 float-start' type='checkbox'></input>
                                <label className='checkbox-wrap float-start'>Beni hatırla</label>
                            </div>
                            <div className='col-6'>
                                <a className='float-end' href='#'>Şifremi Unuttum</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>    
        </Fragment>
    )
}

export default Login;