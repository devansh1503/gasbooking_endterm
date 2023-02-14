import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(props) {
  const history = useNavigate()
  const navcss = {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: 'black',
    color: 'white',
    position: 'sticky',
    top: '0%',
    zIndex: '1000'
  }
  const listStyle = {
    listStyleType: 'none',
    display: 'flex',
    fontSize: '25px'
  }
  const linkcss = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '20px'
  }
  const but = {
    border: 'none',
    fontSize: '20px',
    backgroundColor: 'tomato',
    padding: '12px'
  }
  const dashboard = () => {
    props.setUserOpts(true)
    history('/userDashboard')
  }
  return (
    <div style={navcss}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img style={{ width: '70px' }} src='https://www.pngall.com/wp-content/uploads/4/Gas-Cylinder-PNG-Free-Image.png'></img>
        <h1 style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => { history('/') }}>
          GasBook
        </h1>
      </div>
      {props.isLoggedIn ? (<div>
        <img className='userprofileicon' onClick={dashboard} style={{ width: '60px' }} src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'></img>
      </div>) : (<div>
        <button style={but}><Link to='/auth' style={{ textDecoration: 'none', color: 'white' }} >Login/Sign-up</Link></button>
      </div>)}
    </div>
  )
}

export default Navbar
