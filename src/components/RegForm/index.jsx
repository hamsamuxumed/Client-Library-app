import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './style.css';

export const RegForm = () => {
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const tryLogin = (data) => {
        console.log(data)
        const decodedToken = jwt_decode(data.token);
        localStorage.setItem('fname', decodedToken.fname);
        localStorage.setItem('token', data.token);
        navigate('/');
    }

    useEffect(() => {
        if(register){
            const regUser = async () => {
                try {
                    await fetch(`http://localhost:3000/register`, {
                        method: "POST",
                        body: JSON.stringify({fname: fname.toLowerCase(), lname: lname.toLowerCase(), email: email.toLowerCase(), password: password }),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    })
                    console.log('Registration Successful');
                    let response = await fetch(`http://localhost:3000/login`, {
                        method: "POST",
                        body: JSON.stringify({email: email.toLowerCase(), password: password}),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    });
                    let jsonResponse = await response.json();
                    jsonResponse ? tryLogin(jsonResponse) : alert('Please try again.')
                } catch(err) {
                    console.log(err);
                    setError(true);
                }
            }
            regUser();
        }
    }, [register])

    const handleUser = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirm = (e) => {
        setConfPass(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confPass){
            setRegister(true);
        } else {
            alert('Passwords do not match')
        }
        console.log('register');
    }

    return (
        <>
            <h2 className='formHeader'>Create an account</h2>
            <form className='regLoginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={handleUser}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={handlePass}/>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type='password' name='confirmPassword' onChange={handleConfirm}/>
                <input type='submit'/>
            </form>
            {error && <p id='regFormError'>An error occurred, please try again.</p>}
        </>
    )
}