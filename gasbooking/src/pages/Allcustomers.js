import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Allcustomers() {
    const[data, setData] = useState([{}])
    async function fetchData(){
        await axios.get('http://localhost:4000/admin/customers')
        .then((res)=>{
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
        width: '100%',
        flexDirection: 'column',
        padding: '20px',
        color:'white'
    }
  return (
    <div style={maincss}>
      <table>
        <th>Full-name</th>
        <th>Age</th>
        <th>Email</th>
        <th>User-name</th>
        {
            data.map((item)=>{
                return (
                    <tr>
                        <td>{item.fullName}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                        <td>{item.userName}</td>
                    </tr>
                )

            })
        }
      </table>
    </div>
  )
}

export default Allcustomers
