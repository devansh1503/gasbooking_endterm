import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Orderhistory() {
    const[data, setData] = useState([{}])
    const[error, setError] = useState(false)
    async function fetchData(){
        await axios.get(`http://localhost:4000/orders/${localStorage.currGasUser}`)
        .then((res)=>{
            console.log(res.data)
            if(res.data.length === 0){
                setError(true)
                return;
            }
            setData(res.data)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    const maincss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        width:'100%',
        padding: '20px'
    }
  return (
    <div style={maincss}>
        <h1 style={{color:'tomato', borderBottom:'2px solid tomato', marginBottom:'20px'}}>ORDER HISTORY</h1>
        {
            !error && data.map((item)=>{
                return <div className='order-main-div'>
                    <div>
                        <h4>CustomerID:</h4>
                        <p>{item.customerID}</p>
                    </div>
                    <div>
                        <h4>Order Date:</h4>
                        <p>{(""+item.orderDate).substring(0,10)}</p>
                    </div>
                    <div>
                        <h4>Delivery Date:</h4>
                        <p>{item.deliveryDate ? (""+item.deliveryDate).substring(0,10) : "-"}</p>
                    </div>
                    <div>
                        <h4>Address:</h4>
                        <p>{item.address}</p>
                    </div>
                    <div>
                        <h4>Cylinder Weight:</h4>
                        <p>{item.cylinderWeight}</p>
                    </div>
                    <div>
                        <h4>Cost:</h4>
                        <p>{item.cost}</p>
                    </div>
                    <div>
                        <h4>Status:</h4>
                        <p>{!item.status ? "Scheduled":"Delivered"}</p>
                    </div>
                </div>
            })
        }
      {error && <div style={{color:'tomato', fontSize:'25px'}}>No Data Found!</div>}
    </div>
  )
}

export default Orderhistory
