import React, { useState } from "react";
import Faker from 'faker';
import NavMenu from './components/navMenu/NavMenu';
import './components/home/home.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Route from './components/Route';
import BlogElemets from './components/blogElements/BlogElements';

const App = () =>{
    return(
        
        <div>
            <div className="header">
                <h1>OkiPlants</h1>       
            </div>

            <NavMenu />

            <div className="row">
                <div className="leftcolumn">
                    <Route path="">
                        <BlogElemets/>
                    </Route>
                    <Route path="/">
                        <BlogElemets/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>Abaut us</h2>
                        <div className="fakeimg" style={{"height":"100px"}}>Image</div>
                        <p>{Faker.random.words(10)}</p>
                    </div>
                    <div className="card">
                        <h3>Popular Plants</h3>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                    </div>
                    <div className="card">
                        <h3>Our Gallery</h3>
                        <p>{Faker.random.words(5)}</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h4>Footer</h4>
            </div>



        </div>
    );
}

export default App;