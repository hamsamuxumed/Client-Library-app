import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './style.css';

export const LoginForm = () => {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const tryLogin = (data) => {
        const decodedToken = jwt_decode(data.token);
        localStorage.setItem('fname', decodedToken.fname);
        localStorage.setItem('token', data.token);
        navigate('/');
    }

    useEffect(() => {
        if(login){
            const loginUser = async () => {
                try {
                    let response = await fetch(`http://localhost:3000/login`, {
                        method: "POST",
                        body: JSON.stringify({email: email.toLowerCase(), password: password}),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    });
                    let jsonResponse = await response.json();
                    jsonResponse ? tryLogin(jsonResponse) : alert('Please try again.')
                } catch(err) {
                    console.log(err);
                    window.location.reload(false);
                }
            }
            loginUser();
        }
    },[login])

    const handleUser = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
    }

    return (
        <>
            <h2 className='formHeader'>Sign-in to an account</h2>
            <form className='regLoginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={handleUser}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={handlePass}/>
                <input type='submit'/>
            </form>
        </>
    )
}