import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="form-box">
<form className="formsignup">
    <span className="titlesingnup">Sign up</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-containersignup">
      <input type="text" className="nameinput" placeholder="Full Name" />
			<input type="email" className="emailinput" placeholder="Email" />
			<input type="password" className="passwordinput" placeholder="Password" />
    </div>
    <button className='signupbtn'>Sign up</button>
</form>
<div className="form-section">
  <p>Have an account? <Link to="/login">Log in</Link> </p>
</div>
</div>
    </>
  )
}

export default Signup
