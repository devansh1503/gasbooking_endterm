import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function Home(props) {
  useEffect(() => {
    props.setUserOpts(false)
  }, [])
  const stepstyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100%',
  }
  const about = {
    color: 'white',
    width: '60vw',
    backgroundColor:'rgb(21, 21, 21)',
    padding:'20px',
    border:'2px solid tomato',
    borderRadius:'20px'
  }
  return (
    <div className='home'>
      <img style={{ width: '10%', position: 'fixed', bottom: '0%' }} src='https://gifsec.com/wp-content/uploads/2022/09/hello-gif-14.gif'></img>
      <div style={stepstyle}>
        <p style={{ fontSize: '40px' }}>How to Book your Gas-</p>
        <Carousel stopOnHover={true} showIndicators={false} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
          <p style={{ fontSize: '35px', color: 'tomato' }}>Create Account/Login</p>
          <p style={{ fontSize: '35px', color: 'tomato' }}>Go to make an order page</p>
          <p style={{ fontSize: '35px', color: 'tomato' }}>Fill in your details and choose your cylinder</p>
          <p style={{ fontSize: '35px', color: 'tomato' }}>Make payment, and hit the submit button</p>
        </Carousel>

      </div>
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div  style={about}>
          <h2>Why Use This Website?</h2>
          <p style={{ color: 'tomato', fontSize: '25px' }}>Gas booking is important as it ensures the availability of gas for domestic or commercial use. With gas booking, consumers can pre-book their cylinder and get it delivered to their doorstep on time. This saves time and effort in physically visiting a gas agency or vendor. Gas booking also helps to keep track of the refill cycle and ensure that consumers never run out of gas. It allows for better planning and budgeting of expenses and ensures that there is no disruption in daily activities due to a shortage of gas. Additionally, gas booking systems often provide discounts and offers, making it an economical and convenient option for consumers.</p>
        </div>
      </div>

    </div>
  )
}

export default Home
