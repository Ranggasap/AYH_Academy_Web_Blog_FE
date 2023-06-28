import React, { useContext } from 'react'
import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from '../context/authContext';
import './styles/login.scss'


const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

const [err, setError] = useState(null)

const navigate = useNavigate()

const {login} = useContext(AuthContext);

const handleChange = e =>{
    setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      console.log(login)
      navigate("/")
    }catch(err){
        setError(err.response.data)
    }
}

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form action="">
            <input type="text" placeholder='username' name='username' required onChange={handleChange}/>
            <input type="password" placeholder='password' name='password' required onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
        </form>
    </div>
  )
}

export default Login