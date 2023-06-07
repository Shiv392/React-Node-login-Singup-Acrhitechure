import React, { useState } from 'react'
import axios from 'axios'

function ForgetPass() {
    const [input,setInput]=useState({
        email:'',password:'',password2:''
    })
    const handleClick= async(e)=>{
      e.preventDefault();
      let response= await  axios.post('http://localhost:8000/user/forgetpassword',{
        email:input.email,
        password:input.password
      });
      console.log(response);
    }
  return (
    <div className='container'>
      <div className="card" style={{width: "28rem"}}>
     <div className="card-body">

        <div className='m-4'>
        <input type='email' value={input.email} onChange={(e)=> setInput({...input,email:e.target.value})} className='form-control ' placeholder='Enter Email' required />
        </div>
        <div className='m-4'>
        <input value={input.password} onChange={(e)=> setInput({...input,password:e.target.value})} type='password' className='form-control ' placeholder='Enter New Password' required />
        </div>
        <div className='m-4'>
        <input value={input.password2} onChange={(e)=> setInput({...input,password2:e.target.value})} type='password' className='form-control ' placeholder='Confirm Password' required />
        </div>
        <div className='mt-5 d-flex justify-content-center'>
        <button type='submit' disabled={input.password !== input.password2 || !input.email || !input.password || !input.password2} onClick={handleClick} className="btn btn-primary">Submit</button>
        </div>
   
    
    
  </div>
</div>
    </div>
  )
}

export default ForgetPass
