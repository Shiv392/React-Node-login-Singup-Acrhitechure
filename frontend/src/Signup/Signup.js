import React, { useEffect, useState } from 'react';
import './Signup.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

function Signup() {
    const [input,setInput]=useState(
        {
         name:'',email:'',password:''
        }
    );
    const [msg,setMsg]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input.email==='' || input.password===''||input.name===''){
            alert('plz enter all fields');
        }
        else{
            console.log(input);
        adduser()
        }
    }
    const adduser=async ()=>{
        try{
            let res= await axios.post('http://localhost:8000/user/signup',{
                name:input.name,
                email:input.email,
                password:input.password
                 });
                 console.log(res);
                 setMsg(res.data.message)
                 setInput({
                    name:'',password:'',email:''
                 })
                 
        }
        catch(err){
            console.log('error in signup form',err);
        }
    }
   
  return (
    <>
    <div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
  </div>
    <div className="form-box">
<form className="formsignup">
    <span className="titlesingnup">Sign up</span>
    <span className="subtitle">{msg}</span>
    <div className="form-containersignup">
    <input onChange={e=> setInput({...input,name:e.target.value})} value={input.name} type="text" className="nameinput" placeholder="Full Name" required />
	<input onChange={e=> setInput({...input,email:e.target.value})} value={input.email} type="email" className="emailinput" placeholder="Email" required />
	<input onChange={e=> setInput({...input,password:e.target.value})} value={input.password} type="password" className="passwordinput" placeholder="Password"  required/>
    </div>
    <button onClick={handleSubmit} className='signupbtn' type='submit'>Sign up</button>
</form>
<div className="form-section">
  <p>Have an account? <Link to="/">Log in</Link> </p>
</div>
</div>
    </>
  )
}

export default Signup
