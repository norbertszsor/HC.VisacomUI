import React from 'react';
import './home.css';
import Faker from 'faker';
import NavMenu from '../navMenu/NavMenu';
import BlogElements from '../blogElements/BlogElements';

const HomePage = () => {
    return (<div>
        <div className="header">
            <h1>OkiPlants</h1>       
        </div>

            <NavMenu />

        <div className="row">
            <div className="leftcolumn">
              <BlogElements/>
              <BlogElements/>

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