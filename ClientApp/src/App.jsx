import React, { useState } from "react";
import './components/home/home.css';
import NavMenu from './components/navMenu/NavMenu';
import RightBar from './components/rightBar/RightBar';
import Routing from './components/navMenu/Routing';

const App = () =>{
    return(
        
        <div>
            <div className="header">
                <h1>OkiPlants</h1>
                 
            </div>       
            <NavMenu />

            <div className="row">
                <div className="leftcolumn">
                <Routing/>
                </div>
               <RightBar/>
            </div>

            <div className="footer">
                <h4>App Version, pre alpho 0.2</h4>
            </div>



        </div>
    );
}

export default App;