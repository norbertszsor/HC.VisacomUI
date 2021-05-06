import React, { useState } from "react";
import './components/home/home.css';
import NavMenu from './components/navMenu/navMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RightBar from './components/rightBar/RightBar';
import Routing from './components/navMenu/Routing';


  

function componentDidMount (){
    const apiUrl = "https://localhost:5001/api/account/register";
    const requestOptions = {
        method: 'POST',
        headers: {"Host": "localhost:3000",'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "email": "test@gmail.com",
            "password": "12345678",
            "confirmPassword": "12345678",
            "firstName": "Kuba",
            "lastName": "JestNajlepszymProgramistą",
            "phoneNumber": "12345678"
    })
    };
    fetch(apiUrl, requestOptions)
        .then(response => console.log(response));
  }


const App = () =>{    
    
    return(
        
        <div>
            <button onClick={componentDidMount()}>test</button>
            <Header/>
            <NavMenu />

            <div className="row">
                <div className="leftcolumn">
                    <Routing/>
                </div>
                <RightBar/>
            </div>
            
            <Footer/>
        </div>
    );
}

export default App;