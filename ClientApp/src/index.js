import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import HomePage from './components/home/HomePage';
import Register from './components/register/Register';
import Login from './components/login/Login';


const App = () => {
    return( 
        <div>
            <HomePage/>        
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);