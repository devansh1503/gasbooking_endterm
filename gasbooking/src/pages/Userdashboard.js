import React from 'react'
import CurrentBooking from '../components/CurrentBooking'
import Feedback from '../components/Feedback'
import FeedbackAdmin from '../components/FeedbackAdmin'
import Useroptions from '../components/Useroptions'

function Userdashboard() {
  const maincss = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    flexWrap:'wrap',
    padding: '20px',
    transform:'translateX(30%)'
  }
  const detail = {
    width:'fit-content',
    padding:'50px',

  }
  const detsec = {
    display:'flex'
  }
  return (
    <div style={maincss}>
      <div className='userdetail' style={detail}>
        <div style={detsec}>
          <h1 style={{color:'rgb(51,51,51)'}}>Name:</h1>
          <h1 style={{color:'white'}}>{localStorage.getItem('currGasFull')}</h1>
        </div>
        <div style={detsec}>
          <h1 style={{color:'rgb(51,51,51)'}}>Username:</h1>
          <h1 style={{color:'white'}}>{localStorage.getItem('currGasUser')}</h1>
        </div>
        <div style={detsec}>
          <h1 style={{color:'rgb(51,51,51)'}}>Role:</h1>
          <h1 style={{color:'white'}}>{localStorage.getItem('gasRole')}</h1>
        </div>
        <div style={detsec}>
          <h1 style={{color:'rgb(51,51,51)'}}>Email:</h1>
          <h1 style={{color:'white'}}>{localStorage.getItem('gasEmail')}</h1>
        </div>
        <div style={detsec}>
          <h1 style={{color:'rgb(51,51,51)'}}>Age:</h1>
          <h1 style={{color:'white'}}>{localStorage.getItem('gasAge')}</h1>
        </div>
      </div>
      <CurrentBooking></CurrentBooking>
      {(localStorage.getItem('gasRole')==='admin') ? <FeedbackAdmin></FeedbackAdmin> : <Feedback></Feedback>}
    </div>
  )
}

export default Userdashboard
