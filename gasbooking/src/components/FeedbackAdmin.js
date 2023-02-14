import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FeedbackAdmin() {
    const[data,setData] = useState([])
    const fetchData = async() =>{
        const res = await axios.get('http://localhost:4000/feedback')
        console.log(res.data)
        setData(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    const divcss = {
        height:'300px',
        overflowY:'scroll',
        padding:'20px',
        width:'100%'
    }
    const feedcss = {
        color:'white',
        fontSize:'21px',
        backgroundColor:'rgb(51,51,51)',
        padding:'16px',
        borderBottom:'2px solid white',
    }
  return (
    <div style={divcss}>
        <h2 style={{color:'tomato', borderBottom:'2px solid tomato'}}>User Feedbacks-</h2>
        {
            data.map((item)=>{
                return <div style={feedcss}>
                    <p style={{color:'orange'}}>{item.userId}</p>
                    <p>{item.feedback}</p>
                </div>
            })
        }
      
    </div>
  )
}

export default FeedbackAdmin
