import React, { useState } from "react";
import './components/home/home.css';
import NavMenu from './components/navMenu/NavMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RightBar from './components/rightBar/RightBar';
import Routing from './components/navMenu/Routing';

const App = () =>{
    return(
        
        <div>
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