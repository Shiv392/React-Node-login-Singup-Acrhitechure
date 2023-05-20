import React, { useState } from 'react'


function ForgetPass() {
    const [input,setInput]=useState({
        email:'',password:''
    })
  return (
    <div className='container'>
      <div className="card" style={{width: "28rem"}}>
  
  <div className="card-body">

        <div className='m-4'>
        <input className='form-control ' placeholder='Enter Email' />
        </div>
        <div className='m-4'>
        <input className='form-control ' placeholder='Enter Password' />
        </div>
        <div className='mt-5 d-flex justify-content-center'>
        <button type='submit' className="btn btn-primary">Submit</button>
        </div>
   
    
    
  </div>
</div>
    </div>
  )
}

export default ForgetPass
