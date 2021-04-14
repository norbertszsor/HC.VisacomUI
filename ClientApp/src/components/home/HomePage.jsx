import React from 'react';
import './home.css';
import Faker from 'faker';

const HomePage = () => {
    return (<div>
        <div className="header">
            <h1>OkiPlants</h1>       
        </div>

        <div className="topnav">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Blog</a>
            <a href="#">Maps</a>
            <a href="#" style={{"float":"right"}}>Login</a>
        </div>

        <div className="row">
            <div className="leftcolumn">
                <div className="card">
                    <h2>Biggest Apple record</h2>
                    <h5>Title description, May 1, 2021</h5>
                    <div className="fakeimg" style={{"height":"200px"}}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="card">
                    <h2>New plant will eat ur dog, read more</h2>
                    <h5>Title description, Jun 2, 2021</h5>
                    <div className="fakeimg" style={{"height":"200px"}}>Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="card">
                    <h2>Abaut us</h2>
                    <div className="fakeimg" style={{"height":"100px"}}>Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div className="card">
                    <h3>Popular Plants</h3>
                    <div className="fakeimg"><p>Image</p></div>
                    <div className="fakeimg"><p>Image</p></div>
                    <div className="fakeimg"><p>Image</p></div>
                </div>
                <div className="card">
                    <h3>Our Gallery</h3>
                    <p>Some text..</p>
                </div>
            </div>
        </div>

        <div className="footer">
             <h4>Footer</h4>
        </div>

    </div>);
    
}

export default HomePage;