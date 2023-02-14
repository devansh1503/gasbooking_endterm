import axios from 'axios'
import React, { useReducer, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tada from 'react-reveal/Tada';

function MakeOrder() {
    const history = useNavigate()
    const address = useRef()
    const date = new Date()
    const [cost, setCost] = useState(620)
    const [payment, setPayment] = useState(false)
    const [weight, setWeight] = useState("9kg")
    const [cnt, setCnt] = useState(0)
    const maincss = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        padding: '20px'
    }
    const newWeight = (event) => {
        const wgt = event.target.value
        setWeight(wgt)
        if (wgt === "9kg") {
            setCost(620)
        }
        else if (wgt === "14.2kg") {
            setCost(980)
        }
        else if (wgt === "15.9kg"){
            setCost(1100)
        }
        else {
            setCost(3110)
        }
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        if (!payment) {
            setCnt(cnt+1)
            return;
        }
        const data = {
            status: false,
            customerID: "" + localStorage.currGasUser,
            orderDate: date,
            deliveryDate: null,
            cylinderWeight: weight,
            address: address.current.value,
            cost: cost,
            payment: payment,
        }
        try {
            const res = await axios.post('http://localhost:4000/orders/', data)
            alert(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={maincss}>
            <div className='auth-container' style={{ width: '50%' }}>
                <h2 style={{ borderBottom: '2px solid tomato', margin: '10px', color: 'tomato' }}>User Details</h2>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    Name:<input value={localStorage.getItem('currGasFull')}></input>
                    UserId:<input value={localStorage.getItem('currGasUser')}></input>
                    Address:<input ref={address}></input>
                </form>
            </div>
            <div className='auth-container' style={{ width: '50%' }}>
                <h2 style={{ borderBottom: '2px solid tomato', margin: '10px', color: 'tomato' }}>Booking Details</h2>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    Date:<input value={date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()}></input>
                    <label for='cylinders'>Cylinder Weights:</label>
                    <select onChange={newWeight} name='cylinders' style={{ fontSize: '20px', color: 'tomato' }}>
                        <option style={{ fontSize: '20px', color: 'tomato' }}>9kg</option>
                        <option style={{ fontSize: '20px', color: 'tomato' }}>14.2kg</option>
                        <option style={{ fontSize: '20px', color: 'tomato' }}>15.9kg</option>
                        <option style={{ fontSize: '20px', color: 'tomato' }}>45kg</option>
                    </select>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <b>Rs.{cost}</b>
                        <button onClick={(event) => {
                            event.preventDefault();
                            setPayment(true)
                        }}>Make Payment</button>
                        {payment && <img style={{ width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/665/665939.png'></img>}
                    </div>
                </form>
                <button onClick={placeOrder}>Place Order!</button>
            </div>
            <Tada spy={cnt}>
                {!payment && <p style={{ color: 'tomato', fontSize: '20px' }}>Please make payment before order</p>}
            </Tada>
        </div>
    )
}

export default MakeOrder
