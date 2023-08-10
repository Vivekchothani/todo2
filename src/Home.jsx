import axios from 'axios'

import React ,{useEffect} from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home()
 {
  const [data, setdata] = useState([])
  
      useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then(res=>setdata(res.data) )
        .catch(err=>console.log(err));
    },[] )

   
   
   
  return (

    <>
    
    <div className=" flex-column d-flex  justify-content-center align-items-center bg-light vh-100">
        <h1> Listing Of Users   </h1>
        <div className="d_flex justify-content-end ">
            <Link to={'/create'} className='btn btn-success'> Add+ </Link>
          
           </div>
        <div className='w-75 rounded bg-white border shadow p-4'>
              <table className='table table-striped'>
                <thead >
                  <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((d , i)=>(
                        <tr key={i}>
                          <td>{d.id}</td>
                          <td>{d.name}</td>
                          <td>{d.email}</td>
                          <td>{d.phone}</td>

                          <td>
                          <button className='btn btn-sm btn-info me-2'>read</button>
                            <button className='btn btn-sm btn-primary me-2' >Edit</button>
                            <button className='btn btn-sm btn-danger  '>Delete</button>
                          </td>
                        </tr>
                    ))
                  }
                </tbody>
              </table>



        </div>
        
         </div>
    </>
  )
}
