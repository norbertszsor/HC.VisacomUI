import React, { useState } from "react";
import './components/home/home.css';
import NavMenu from './components/navMenu/navMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RightBar from './components/rightBar/RightBar';
import Routing from './components/navMenu/Routing';


//Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoia2VrIGtlayIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjIyMTE0OTcyLCJpc3MiOiJodHRwOi8vaG90Y2hvY29sYXRlYXBpLmNvbSIsImF1ZCI6Imh0dHA6Ly9ob3RjaG9jb2xhdGVhcGkuY29tIn0.9Z_LBOEem1Ey4Ubn-7uPIZw3uuOGIpoYxNpAV9MQs60",


const App = () =>{    
   //const [key, setKey] = useState(localStorage.getItem('Veryfi'));
    
    return(
        
        <div>
            <Header/>
            <NavMenu/>

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