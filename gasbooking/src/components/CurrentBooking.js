import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CurrentBooking() {
    const [data, setData] = useState([{}])
    const [error, setError] = useState(false)
    async function fetchData() {
        await axios.get(`http://localhost:4000/orders/${localStorage.currGasUser}`)
            .then((res) => {
                console.log(res.data)
                if (res.data.length === 0) {
                    setError(true)
                    return;
                }
                setData(res.data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const divcss = {
        backgroundColor:'rgb(31,31,31)',
        padding:'25px',
        overflowY:'scroll',
        height:'300px',
        margin:'50px',
        borderTopLeftRadius:'25px'
    }
    return (
        <div style={divcss}>
            <h2 style={{color:'white', borderBottom:'2px solid white'}}>Your Ongoing Order-</h2>
            {
                !error && data.map((item) => {
                    if(item.status) return <></>
                    return <div className='order-main-div' style={{marginTop:'14px'}}>
                        <div>
                            <h4>Order Date:</h4>
                            <p>{("" + item.orderDate).substring(0, 10)}</p>
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
                            <p>{!item.status ? "Scheduled" : "Delivered"}</p>
                        </div>
                    </div>
                })
            }
            {error && <div style={{ color: 'tomato', fontSize: '25px' }}>No Data Found</div>}
        </div>
    )
}

export default CurrentBooking
