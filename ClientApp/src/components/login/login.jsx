import React, { useState } from 'react';
import './login.css';
import LoginRequest from '../../requests/LoginRequest';

const Login = () => {

    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        LoginRequest(setToken,email,password);
        localStorage.setItem('Veryfi',token);
      }
   return(
    
        <div className="container">
            <form onSubmit={handleSubmit}> 
            <h1>Sign In</h1>
            <label htmlFor="email"><b>Email</b></label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required/>
            <div className="clearfix">
                <button type="submit" className="signupbtn">Sign In</button>
            </div>
            </form>
        </div>
  
   );
}

export default Login;