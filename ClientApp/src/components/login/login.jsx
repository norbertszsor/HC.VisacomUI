import React, { useState, Component } from 'react';
import './login.css';
import LoginRequest from '../../requests/LoginRequest';
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import {Route} from "react-router-dom";

const Login = () => {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const HandleSubmit = (event)=> {
        event.preventDefault();
        LoginRequest(email,password);
      }
   return(
    
        <div className="container">
            <form onSubmit={HandleSubmit}> 
            <h1>Sign In</h1>
            <label htmlFor="email"><b>Email</b></label>
            <input onChange={(e) => setEmail(e.target.value)} Id="LoginInput" type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>

            <input onChange={(e) => setPassword(e.target.value)} Id="PasswordInput" type="password" placeholder="Enter Password" name="psw" required/>

            <div className="clearfix">
                <button type="submit" className="signupbtn">Sign In</button>
            </div>
            </form>
        </div>
  
   );
}

export default Login;