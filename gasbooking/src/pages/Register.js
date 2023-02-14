import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register(props) {
    useEffect(()=>{
      props.setUserOpts(false)
    },[])
    const history = useNavigate();
    const fullName = useRef();
    const userName = useRef();
    const email = useRef();
    const password = useRef();
    const cpass = useRef();
    const age = useRef();
    const[validEmail, setValidEmail] = useState(false)
    const[isAdmin, setAdmin] = useState(false);
    const[confirmPass, setPass] = useState("")
    const[checkPass, setCheck] = useState(false)
    const[displayError, setError] = useState(false)
    function emailConfirm(){
        if(!email.current.value.includes('@')){
            setValidEmail(true)
        }
        else{
            setValidEmail(false)
        }
    }
    function confirmPassword(event){
        setPass(event.target.value)
        if(cpass.current.value !== password.current.value){
            setCheck(true)
        }
        else{
            setCheck(false)
        }
    }

    async function registerUser(event){
      event.preventDefault();
      const data = {
        userName:userName.current.value,
        email:email.current.value,
        fullName:fullName.current.value,
        age:age.current.value,
        password:password.current.value,
        isAdmin:isAdmin
      }
      try{
        await axios.post('http://localhost:4000/register',data)
        history('/login')
      }
      catch(err){
        setError(true)
      }

    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='auth-container'>
        <h2 style={{borderBottom:'2px solid tomato', margin:'10px', color:'tomato'}}>Register</h2>
        <form style={{display:'flex', flexDirection:'column'}}>
          <label for='fullName'>Full Name:</label>
          <input ref={fullName} name='fullName'></input>

          <label for='userName'>User Name:</label>
          <input ref={userName} name='userName'></input>

          <label for='email'>Email:</label>
          <input onChange={emailConfirm} ref={email} name='email'></input>
          {validEmail && <p style={{color:'tomato', fontSize:'15px'}}>Email doesn't contain @</p>}

          <label for='password'>Set Password:</label>
          <input ref={password} name='password' type='password'></input>

          <label for='cpassword'>Confirm Password:</label>
          <input ref={cpass} name='cpassword' type='password' value={confirmPass} onChange={confirmPassword}></input>
          {checkPass && <p style={{color:'tomato', fontSize:'15px'}}>Password Incorrect</p>}

          <label for='age'>Age:</label>
          <input ref={age} name='age'></input>

          <label for='admin'>Admin:</label>
          <input name='admin' type='radio' style={{marginTop:'-18px',marginLeft:'-80px'}} onClick={()=>{setAdmin(true)}}></input>

          <button onClick={registerUser}>Submit</button>
        </form>
        {displayError && <p style={{color:'tomato', fontSize:'15px'}}>Enter unique username and email</p>}
      </div>
    </div>
  )
}

export default Register
