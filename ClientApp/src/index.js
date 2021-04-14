import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import HomePage from './components/home/HomePage';
import Register from './components/register/Register';


const App = () => {
    return( 
        <div>
            <Register/>           
        </div>
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);