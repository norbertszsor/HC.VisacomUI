import React from 'react';
import Login from '../login/login';
import Register from '../register/register';
import Route from '../Route';
import BlogElemets from '../blogElements/BlogElements';
import Shop from '../shop/Shop'
import Blog from '../blog/Blog';
import CMS from '../CMS/CMS';


export default class Routing extends React.Component{
    render(){
    

        return(
        <div>

            <Route path="">
                <BlogElemets/>
            </Route>

            <Route path="/">
                <BlogElemets/>
            </Route>
            <Route path="/blog">
                <Blog/>
            </Route>

            <Route path="/login">
            <Login/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/shop">
                <Shop/>
            </Route>

            <Route path="/CMS">
                <CMS/>
            </Route>

        </div>
        
    )
    }
}