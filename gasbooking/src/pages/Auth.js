import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Auth(props) {
  useEffect(()=>{
    localStorage.removeItem('currGasUser')
    props.setLogin(false)
    props.setUserOpts(false)
  },[])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'translateY(50%)' }}>
      <div className='auth-container'>
        <h2>Welcome New User!</h2>
        <button><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</Link></button>
        <button><Link style={{ textDecoration: 'none', color: 'white' }} to='/register'>Create Account</Link></button>
      </div>
    </div>
  )
}

export default Auth
