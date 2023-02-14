import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Inventory() {
    const [data, setData] = useState([{}])
    const[nodata, setNodata] = useState(false)
    const cost = useRef()
    const weight = useRef()
    async function fetchData() {
        await axios.get('http://localhost:4000/admin/inventory')
            .then((res) => {
                if(res.data.length===0){
                    setNodata(true)
                    return;
                }
                setData(res.data)
            })
    }
    async function deleteCyl(item){
        await axios.put('http://localhost:4000/admin/inventory/delete', item)
    }
    async function addNew(event){
        event.preventDefault()
        const newItem = {
            cost:+cost.current.value,
            weight:+weight.current.value
        }
        console.log("added")
        await axios.put('http://localhost:4000/admin/inventory/add', newItem)
    }
    useEffect(()=>{
        fetchData();
    })
    const maincss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        padding: '20px'
    }
    return (
        <div style={maincss}>
            <div className='auth-container'>
                <form style={{display:'flex'}}>
                    Weight:<input style={{marginLeft:'10px'}} ref={weight}></input>
                    Cost:<input style={{marginLeft:'10px'}} ref={cost}></input>
                    <button onClick={addNew}>Add New</button>
                </form>
            </div>
            <div className='invData'>
                {nodata && <p style={{color:'tomato', fontSize:'25px'}}>Stock is empty</p>}
                {!nodata && data.map((item)=>{
                    return (
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'40px'}}>
                            <img style={{width:'100px'}} src='https://cdn.iconscout.com/icon/free/png-256/gas-cylinder-1817178-1538046.png'></img>
                            <h2 style={{fontSize:'25px', color:'tomato'}}>{item.weight}Kg</h2>
                            <h2 style={{fontSize:'25px', color:'white'}}>Rs.{item.cost}</h2>
                            <button onClick={()=>{deleteCyl(item)}} style={{border:'none',color:'white',fontSize:'23px',padding:'12px', backgroundColor:'tomato',borderRadius:'25px'}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Inventory
