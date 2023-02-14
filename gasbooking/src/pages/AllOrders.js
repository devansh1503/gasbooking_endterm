import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllOrders() {
    const [data, setData] = useState([{}])
    async function fetchData() {
        await axios.get('http://localhost:4000/admin/orders')
            .then((res) => {
                setData(res.data)
            })
    }
    async function updateStatus(id){
        await axios.put(`http://localhost:4000/orders/${id}/status`)
    }
    async function updateDate(id){
        await axios.put(`http://localhost:4000/orders/${id}/date`)
    }
    useEffect(() => {
        fetchData()
    })
    const maincss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        padding: '20px',
        color: 'white'
    }
    return (
        <div style={maincss}>
            <table>
                <th>Customer ID</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Cylinder Weight</th>
                <th>Address</th>
                <th>Cost</th>
                <th>Status</th>
                {
                    data.map((item) => {
                        return (
                            <tr>
                                <td>{item.customerID}</td>
                                <td>{(""+item.orderDate).substring(0,10)}</td>
                                <td>{item.deliveryDate===null?<button onClick={()=>{updateDate(item._id)}}>Update for today</button>:(""+item.deliveryDate).substring(0,10)}</td>
                                <td>{item.cylinderWeight}</td>
                                <td>{item.address}</td>
                                <td>{item.cost}</td>
                                <td>{item.status?<p>Delivered</p> : <button onClick={()=>{updateStatus(item._id)}}>Update Status</button>}</td>
                            </tr>
                        )

                    })
                }
            </table>
        </div>
    )
}

export default AllOrders
