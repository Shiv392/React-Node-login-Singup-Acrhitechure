import React, { useEffect, useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [value,setValues]=useState({
    email:'',password:''
  })
  const [errormsg,setError]=useState('');
  const [flag,setFlag]=useState(true);
  const loginClick=(e)=>{
    e.preventDefault();
   if(value.email==='' || value.password===''){
    alert('plz enter all fields')
   }
   else{
    console.log(value);
    setValues({email:'',password:''})
    Login();
   }
  }
  const Login=async ()=>{
    let res= await axios.post('http://localhost:8000/user/login',{
      email:value.email,
      password:value.password
    })
    console.log(res);
    res.data.success===true ? setFlag(true):setFlag(false)

    setError(res.data.message)
  }
 
  return (
   <>
   
   <form className="form">
       <p className="form-title">Sign in to your account</p>
      {
        flag ? (
          <span className='text text-primary text-center'>{errormsg}</span> 
          ) : (
            <span className='text text-danger text-center'>{errormsg}</span>
          )
      }
        <div className="input-container">
          <input value={value.email} onChange={e=> setValues({...value,email:e.target.value})} type="email" placeholder="Enter email" />
          <span>
          </span>
      </div>
      <div className="input-container">
          <input value={value.password} onChange={e=> setValues({...value,password:e.target.value})} type="password" placeholder="Enter password" />
        </div>
         <button type="submit" className="submit" onClick={loginClick}>
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <Link to="/signup">Sign up</Link>
      </p>
   </form>

   </>
  )
}

export default Login
