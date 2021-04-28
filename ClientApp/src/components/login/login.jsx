import React from 'react';
import './login.css';

const Login = () => {
   return(
    
        <div className="container">
            <form>
            <h1>Sign In</h1>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <label>
                <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
            </label>
            <div className="clearfix">
                <button type="submit" className="signupbtn">Sign In</button>
            </div>
            </form>
        </div>
  
   );
}

export default Login;