import React, { useState }  from 'react';
import './register.css';
import RegisterRequest from '../../requests/RegisterRequest';



const Register = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        RegisterRequest(email,password,confirmPassword,firstName,lastName,phoneNumber);
        
      }
   return(
    
        <div className="container">
            <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label htmlFor="email"><b>Email</b></label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" name="email" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder="Repeat Password" name="psw-repeat" required/>

            <label htmlFor="firstname"><b>First Name</b></label>
            <input onChange={(e) => setfirstName(e.target.value)} type="text" placeholder="Enter First Name" name="firstname" required/>
            
            <label htmlFor="lastname"><b>Last Name</b></label>
            <input onChange={(e) => setlastName(e.target.value)} type="text" placeholder="Enter Last Name" name="lastname" required/>
            
            <label htmlFor="PhoneNumber"><b>Phone Number</b></label>
            <input onChange={(e) => setphoneNumber(e.target.value)} type="text" placeholder="Enter Phone Number" name="PhoneNumber" required/>

            <label>
                <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms and Privacy</a>.</p>

            <div className="clearfix">
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
            </form>
        </div>
  
   );
}

export default Register;