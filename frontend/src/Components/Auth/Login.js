import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submit")
    }  

    const goToRegister = (e) => {
        navigate('/signup')
      }
  
  return (
    <>
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='form-group'>
                <label>Email:</label>
                <input 
                type="email"
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input 
                type="password"
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>
            <button type="submit" className="login-btn">Login</button>

        </form>
        <button onClick={goToRegister}>Want to register instead?</button>
    </div>
    </>
    
  )
}
