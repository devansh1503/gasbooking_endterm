import axios from 'axios';
import React, { useRef } from 'react'

function Feedback() {
    const feedback = useRef()
    const feedcss = {
        padding:'15px',
        display:'flex',
        flexDirection:'column',
        width:'100%',
    }
    const but = {
        width:'fit-content',
        fontSize:'21px',
        backgroundColor:'tomato',
        color:'white',
        padding:'10px',
        border:'none'
    }
    async function postData(event){
        event.preventDefault();
        const data = {
            'userId':localStorage.getItem('currGasUser'),
            'feedback':feedback.current.value
        }
        await axios.post('http://localhost:4000/feedback/', data)
        alert('Feedback Added')
    }
    return (
        <div style={feedcss}>
            <h2 style={{color:'tomato', borderBottom:'2px solid tomato'}}>Feedback</h2>
            <textarea ref={feedback} placeholder="Write Your Review Here" style={{backgroundColor:'rgb(51,51,51)', border:'none', margin:'20px', height:'150px', fontSize:'21px', color:'white', padding:'10px'}}></textarea>
            <button onClick={postData} style={but}>Submit</button>
        </div>
    )
}

export default Feedback
