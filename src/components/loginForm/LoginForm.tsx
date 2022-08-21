import { TextField } from '@mui/material'
import { useState } from 'react'
import './LoginForm.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const LoginForm = () => {
  const navigate = useNavigate()
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  useEffect(() => {
    const authenticationStatus = JSON.parse(localStorage.getItem('isLogged') || 'false')
    if (authenticationStatus) {
      navigate('/home')
    }
  }, [])

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const formValid = () => {
    return !(emailRegex.test(user) && password.length > 7)
  }

  const handleLogin = () => {
    localStorage.setItem('isLogged', 'true')
    navigate('/home')
  }

  const renderForm = () => {
    return(
      <div className='form-container'>
        <img src='https://png.monster/wp-content/uploads/2022/02/png.monster-755.png' alt='Pokemon logo' className='login-image ' />
        <TextField label="Username" type={'email'} onChange={(e) => setUser(e.target.value)}></TextField>
        <TextField label="Password" type={'password'} onChange={(e) => setPassword(e.target.value)}></TextField>
        <button className='login-button' disabled={formValid()} onClick={handleLogin}>Login</button>
      </div>
    )
  }

  return (
    renderForm()
  )
}

export default LoginForm