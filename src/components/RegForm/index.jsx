import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './style.css';

export const RegForm = () => {
    const [register, setRegister] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

   
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm: ""
    });
    
    localStorage.getItem('token') && navigate('/');

    const tryLogin = (data) => {
        console.log(data)
        const decodedToken = jwt_decode(data.token);
        localStorage.setItem('fname', decodedToken.fname);
        localStorage.setItem('fname', decodedToken.lname);
        localStorage.setItem('token', data.token);
        window.location.reload();
    }

    useEffect(() => {
        if(register){
            const regUser = async () => {
                try {
                    await fetch(`http://localhost:3000/register`, {
                        method: "POST",
                        body: JSON.stringify({formData}),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    })
                    console.log('Registration Successful');
                    let response = await fetch(`http://localhost:3000/login`, {
                        method: "POST",
                        body: JSON.stringify({formData}),
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

    const handleChange = (e) => {
        setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.password.value === e.target.confirm.value){
            setRegister(true);
        } else {
            alert('Passwords do not match')
        }
    }

    return (
        <>
            <h2 className='formHeader'>Create an account</h2>
            <form className='regLoginForm' onSubmit={handleSubmit}>
                <label htmlFor='fname'>First Name</label>
                <input type='text' name='fname' onChange={handleChange}/>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' name='lname' onChange={handleChange}/>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={handleChange}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={handleChange}/>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type='password' name='confirm' onChange={handleChange}/>
                <input type='submit'/>
            </form>
            {error && <p id='regFormError'>An error occurred, please try again.</p>}
        </>
    )
}