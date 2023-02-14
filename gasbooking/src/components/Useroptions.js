import React from 'react'
import { Link } from 'react-router-dom'

function Useroptions() {
    const role = localStorage.getItem('gasRole')
    const linkcss = {
        textDecoration: 'none',
        color: 'tomato',
        fontSize: '22px',
    }
    if (role == 'admin') {
        return (
            <div className='userOpt'>
                <div style={{ width: '100%' }}>
                    <img style={{ width: '70%' }} src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'></img>
                    <h2 style={{marginBottom:'20px'}}>{localStorage.getItem('currGasFull')}</h2>
                </div>
                <ul>
                    <li><Link style={linkcss} to='/userDashboard'>User Dashboard</Link></li>
                    <li><Link style={linkcss} to='/orders'>All Orders</Link></li>
                    <li><Link style={linkcss} to='/customers'>Customers</Link></li>
                    <li><Link style={linkcss} to='/inventory'>Inventory</Link></li>
                    <li><Link style={linkcss} to='/auth'>Logout</Link></li>
                </ul>
            </div>
        )
    }
    return (
        <div className='userOpt'>
            <div style={{ width: '100%' }}>
                <img style={{ width: '70%' }} src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'></img>
                <h2>{localStorage.getItem('currGasFull')}</h2>
            </div>
            <ul>
                <li><Link style={linkcss} to='/userDashboard'>User Dashboard</Link></li>
                <li><Link style={linkcss} to='/order'>Make an Order</Link></li>
                <li><Link style={linkcss} to='/orderHistory'>Order History</Link></li>
                <li><Link style={linkcss} to='/auth'>Logout</Link></li>
            </ul>
        </div>
    )
}

export default Useroptions
