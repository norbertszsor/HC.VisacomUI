import React from 'react';
import 'login.css';

const Login = () => {
    (
    <div className="wrapper fadeInDown">
    <div id="formContent">
     
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

    
        <div className="fadeIn first">
        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>

    
        <form>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"></input>
        <input type="submit" class="fadeIn fourth" value="Log In"></input>
        </form>

    
        <div id="formFooter">
        <a className="underlineHover" href="#">Forgot Password?</a>
        </div>

    </div>
    </div>
    )
}

export default Login;