import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const userName = useRef()
  const password = useRef()
  const history = useNavigate()
  const[error, setError] = useState(false)
  useEffect(()=>{
    props.setUserOpts(false)
  },[])

  async function loginUser(event){
    event.preventDefault();
    const data = {
      userName:userName.current.value,
      password:password.current.value
    }
    try{
      const res = await axios.post('http://localhost:4000/login',data)
      props.setLoggedIn(true)
      localStorage.setItem('currGasUser',userName.current.value)
      localStorage.setItem('currGasFull', res.data.fullName)
      localStorage.setItem('gasRole',res.data.isAdmin?"admin":"Customer")
      localStorage.setItem('gasEmail',res.data.email)
      localStorage.setItem('gasAge', res.data.age)
      history('/')
    }
    catch(err){
      console.log(err)
      setError(true)
    }

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'translateY(30%)'}}>
      <div className='auth-container'>
        <h2 style={{borderBottom:'2px solid tomato', margin:'10px', color:'tomato'}}>Login</h2>
        <form style={{display:'flex', flexDirection:'column'}}>
          <label for='userName'>User Name:</label>
          <input ref={userName} autoComplete='off' name='userName'></input>

          <label for='password'>Enter Password:</label>
          <input ref={password} autoComplete='off' name='password' type='password'></input>

          <button onClick={loginUser}>Submit</button>
        </form>
        {error && <p style={{color:'tomato', fontSize:'15px'}}>WRONG CREDENTIALS</p>}
      </div>
    </div>
  )
}

export default Login
